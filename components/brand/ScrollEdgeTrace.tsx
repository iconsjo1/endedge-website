"use client";

import { useEffect, useRef } from "react";

/** Orange edge that draws down the page as you scroll. */
export default function ScrollEdgeTrace() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleY(${Math.max(0.04, p)})`;
      el.style.opacity = String(0.35 + p * 0.45);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="scroll-edge-trace" aria-hidden>
      <div ref={ref} className="scroll-edge-trace__line" />
    </div>
  );
}
