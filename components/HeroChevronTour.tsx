"use client";

import { useEffect } from "react";

const STORAGE_KEY = "endedge-hero-chevron-tour-v1";
const START_DELAY_MS = 950;
const MOVE_MS = 720;
const DWELL_MS = 480;

type Point = { x: number; y: number };

function centerOf(el: Element): Point {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function wait(ms: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    const start = performance.now();
    const tick = () => {
      if (signal.cancelled || performance.now() - start >= ms) {
        resolve();
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function placeGhost(ghost: HTMLElement, p: Point, scale: number) {
  const w = 18;
  const h = 20;
  ghost.style.transform = `translate3d(${p.x - w / 2}px, ${p.y - h / 2}px, 0) scale(${scale})`;
}

async function moveGhost(
  ghost: HTMLElement,
  from: Point,
  to: Point,
  scaleFrom: number,
  scaleTo: number,
  signal: { cancelled: boolean },
) {
  placeGhost(ghost, from, scaleFrom);
  const anim = ghost.animate(
    [
      {
        transform: `translate3d(${from.x - 9}px, ${from.y - 10}px, 0) scale(${scaleFrom})`,
      },
      {
        transform: `translate3d(${to.x - 9}px, ${to.y - 10}px, 0) scale(${scaleTo})`,
      },
    ],
    {
      duration: MOVE_MS,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    },
  );
  try {
    await anim.finished;
  } catch {
    /* aborted */
  }
  if (signal.cancelled) anim.cancel();
  else placeGhost(ghost, to, scaleTo);
}

/**
 * First-land only: logo chevron ghost visits hero highlights, then returns.
 * Skipped on reduced motion, prior session play, scroll, or early interaction.
 */
export default function HeroChevronTour() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    if (window.scrollY > 24) return;

    const signal = { cancelled: false };
    let ghost: HTMLElement | null = null;
    let logoChevron: Element | null = null;
    let activeStop: Element | null = null;

    const clearStop = () => {
      activeStop?.classList.remove("hero-tour-stop--active");
      activeStop = null;
    };

    const setStop = (el: Element | null) => {
      clearStop();
      if (!el) return;
      activeStop = el;
      el.classList.add("hero-tour-stop--active");
    };

    const teardown = () => {
      signal.cancelled = true;
      clearStop();
      logoChevron?.classList.remove("brand-logo-chevron--touring");
      if (ghost) {
        ghost.getAnimations().forEach((a) => a.cancel());
        ghost.remove();
        ghost = null;
      }
    };

    const onAbort = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      teardown();
    };

    const startId = window.setTimeout(async () => {
      if (signal.cancelled || window.scrollY > 24) return;

      logoChevron = document.querySelector("[data-brand-logo-chevron]");
      const highlight = document.querySelector('[data-hero-tour="highlight"]');
      const cta = document.querySelector('[data-hero-tour="cta"]');
      const stack = document.querySelector('[data-hero-tour="stack"]');
      if (!logoChevron || !highlight || !cta || !stack) return;

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* private mode */
      }

      ghost = document.createElement("div");
      ghost.className = "hero-chevron-tour-ghost";
      ghost.setAttribute("aria-hidden", "true");
      ghost.innerHTML = `<svg width="18" height="20" viewBox="0 0 12 14"><path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00"/></svg>`;
      document.body.appendChild(ghost);

      logoChevron.classList.add("brand-logo-chevron--touring");

      const logo = centerOf(logoChevron);
      const stops: { el: Element; scale: number }[] = [
        { el: highlight, scale: 1.55 },
        { el: cta, scale: 1.75 },
        { el: stack, scale: 1.65 },
      ];

      placeGhost(ghost, logo, 1);
      ghost.style.opacity = "1";

      let prev = logo;
      let prevScale = 1;

      for (const stop of stops) {
        if (signal.cancelled) break;
        const next = centerOf(stop.el);
        setStop(stop.el);
        await moveGhost(ghost, prev, next, prevScale, stop.scale, signal);
        if (signal.cancelled) break;
        await wait(DWELL_MS, signal);
        prev = next;
        prevScale = stop.scale;
      }

      if (!signal.cancelled) {
        clearStop();
        const back = centerOf(logoChevron);
        await moveGhost(ghost, prev, back, prevScale, 1, signal);
      }

      teardown();
    }, START_DELAY_MS);

    window.addEventListener("scroll", onAbort, { passive: true, once: true });
    window.addEventListener("pointerdown", onAbort, { once: true });
    window.addEventListener("keydown", onAbort, { once: true });

    return () => {
      window.clearTimeout(startId);
      window.removeEventListener("scroll", onAbort);
      window.removeEventListener("pointerdown", onAbort);
      window.removeEventListener("keydown", onAbort);
      teardown();
    };
  }, []);

  return null;
}
