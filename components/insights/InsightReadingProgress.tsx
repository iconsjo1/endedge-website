"use client";

import { useEffect, useState } from "react";

/** Thin orange reading edge + chevron for insight articles. */
export default function InsightReadingProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const article = document.querySelector("[data-insight-article]");
    if (!article) return;

    const update = () => {
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setP(1);
        return;
      }
      const scrolled = Math.min(total, Math.max(0, -rect.top));
      setP(scrolled / total);
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
    <div className="insight-progress" aria-hidden>
      <div className="insight-progress__track">
        <div className="insight-progress__fill" style={{ transform: `scaleY(${Math.max(0.02, p)})` }} />
        <span
          className="insight-progress__chevron"
          style={{ top: `calc(${p * 100}% - 8px)` }}
        >
          <svg width="12" height="14" viewBox="0 0 12 14">
            <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
          </svg>
        </span>
      </div>
    </div>
  );
}
