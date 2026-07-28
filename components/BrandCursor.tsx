"use client";

import { useEffect, useRef, useState } from "react";

const TAIL = 3;
const LERP = [0.42, 0.2, 0.12];

const TEXT_SEL =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]):not([type="color"]), textarea, [contenteditable="true"]';

const ACTION_SEL =
  'button, [role="button"], [type="submit"], [type="button"], [type="reset"], a.btn, a.btn-primary, a.btn-ghost, a.btn-dark, .btn, .btn-primary, .btn-ghost, .btn-dark, summary';

function isTextTarget(el: EventTarget | null): boolean {
  if (!(el instanceof Element)) return false;
  return Boolean(el.closest(TEXT_SEL));
}

function isActionTarget(el: EventTarget | null): boolean {
  if (!(el instanceof Element)) return false;
  const hit = el.closest(ACTION_SEL);
  if (!hit) return false;
  if (hit instanceof HTMLButtonElement && hit.disabled) return false;
  if (hit.getAttribute("aria-disabled") === "true") return false;
  return true;
}

/** Smooth brand chevron + trailing ghosts (fine pointer only). */
export default function BrandCursor() {
  const layerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const points = useRef(Array.from({ length: TAIL }, () => ({ x: 0, y: 0 })));
  const raf = useRef(0);
  const visible = useRef(false);
  const textMode = useRef(false);
  const actionMode = useRef(false);
  const actionMix = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove(
        "cursor-brand-follow",
        "cursor-brand-text",
        "cursor-brand-action",
      );
      return;
    }

    document.documentElement.classList.add("cursor-brand-follow");
    const layer = layerRef.current;
    if (!layer) return;

    const marks = Array.from(
      layer.querySelectorAll<HTMLElement>("[data-brand-cursor]"),
    );
    const ring = layer.querySelector<HTMLElement>("[data-brand-ring]");
    const headPath = layer.querySelector<SVGPathElement>("[data-brand-head-path]");

    const syncMode = (target: EventTarget | null) => {
      textMode.current = isTextTarget(target);
      actionMode.current = !textMode.current && isActionTarget(target);
      document.documentElement.classList.toggle("cursor-brand-text", textMode.current);
      document.documentElement.classList.toggle("cursor-brand-action", actionMode.current);
      layer.classList.toggle("is-action", actionMode.current);
    };

    const paint = () => {
      const pts = points.current;
      pts[0].x += (mouse.current.x - pts[0].x) * LERP[0];
      pts[0].y += (mouse.current.y - pts[0].y) * LERP[0];
      for (let i = 1; i < TAIL; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * LERP[i];
        pts[i].y += (pts[i - 1].y - pts[i].y) * LERP[i];
      }

      actionMix.current += ((actionMode.current ? 1 : 0) - actionMix.current) * 0.22;
      const mix = actionMix.current;
      const headScale = 1 + mix * 0.72;
      const ringScale = 0.55 + mix * 0.95;

      const show = visible.current && !textMode.current;
      layer.style.opacity = show ? "1" : "0";

      marks.forEach((el, i) => {
        const p = pts[i];
        const base = 1 - i * 0.14;
        const scale = i === 0 ? headScale : base * (1 - mix * 0.55);
        const opacity =
          i === 0 ? 1 : Math.max(0, (0.28 - i * 0.08) * (1 - mix * 0.85));
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-4px, -11px) scale(${scale})`;
      });

      if (ring) {
        const p = pts[0];
        ring.style.opacity = String(mix * 0.9);
        ring.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-18px, -18px) scale(${ringScale})`;
      }

      if (headPath) {
        headPath.setAttribute("stroke", mix > 0.35 ? "#ffffff" : "none");
        headPath.setAttribute("stroke-width", mix > 0.35 ? "1.1" : "0");
        headPath.setAttribute("fill", mix > 0.5 ? "#FF8A2B" : "#FF6F00");
      }

      raf.current = requestAnimationFrame(paint);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible.current) {
        visible.current = true;
        points.current.forEach((p) => {
          p.x = e.clientX;
          p.y = e.clientY;
        });
      }
      syncMode(e.target);
    };

    const onLeave = () => {
      visible.current = false;
      actionMode.current = false;
      document.documentElement.classList.remove("cursor-brand-text", "cursor-brand-action");
      layer.classList.remove("is-action");
    };

    const onOver = (e: MouseEvent) => syncMode(e.target);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(paint);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove(
        "cursor-brand-follow",
        "cursor-brand-text",
        "cursor-brand-action",
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={layerRef} className="brand-cursor-layer" aria-hidden>
      <span data-brand-ring className="brand-cursor-ring" />
      {Array.from({ length: TAIL }, (_, i) => (
        <svg
          key={i}
          data-brand-cursor
          className={`brand-cursor-mark${i === 0 ? " brand-cursor-mark--head" : " brand-cursor-mark--tail"}`}
          width="20"
          height="22"
          viewBox="0 0 12 14"
          style={{ opacity: i === 0 ? 1 : 0.28 - i * 0.08 }}
        >
          <path
            d="M1 1 L8 7 L1 13 L4.5 7 Z"
            fill="#FF6F00"
            {...(i === 0 ? { "data-brand-head-path": "" } : {})}
          />
        </svg>
      ))}
    </div>
  );
}
