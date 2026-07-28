"use client";

import { useEffect } from "react";

/** One-shot chevron tick when a `[data-edge-section]` enters view. */
export default function SectionTicks() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          entry.target.classList.add("edge-section--ticked");
          window.setTimeout(() => entry.target.classList.remove("edge-section--ticked"), 700);
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -12% 0px" },
    );

    const observeAll = () => {
      document.querySelectorAll("[data-edge-section]").forEach((el) => io.observe(el));
    };
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
