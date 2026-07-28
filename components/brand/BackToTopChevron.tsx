"use client";

import { useEffect, useState } from "react";

/** Fixed chevron: back to top, then brief fly toward the logo. */
export default function BackToTopChevron() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => {
    const logo = document.querySelector("[data-brand-logo-chevron]");
    const btn = document.querySelector<HTMLElement>("[data-back-to-top]");
    if (
      logo &&
      btn &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const from = btn.getBoundingClientRect();
      const to = logo.getBoundingClientRect();
      const ghost = document.createElement("div");
      ghost.className = "back-to-top-ghost";
      ghost.innerHTML =
        '<svg width="16" height="18" viewBox="0 0 12 14"><path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00"/></svg>';
      document.body.appendChild(ghost);
      const x0 = from.left + from.width / 2 - 8;
      const y0 = from.top + from.height / 2 - 9;
      const x1 = to.left + to.width / 2 - 8;
      const y1 = to.top + to.height / 2 - 9;
      ghost.animate(
        [
          { transform: `translate(${x0}px, ${y0}px) scale(1)`, opacity: 1 },
          { transform: `translate(${x1}px, ${y1}px) scale(0.85)`, opacity: 0.2 },
        ],
        { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
      ).finished.then(() => ghost.remove()).catch(() => ghost.remove());
    }
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <button
      type="button"
      data-back-to-top
      className={`back-to-top-chevron${show ? " is-visible" : ""}`}
      onClick={onClick}
      aria-label="Back to top"
    >
      <svg width="14" height="16" viewBox="0 0 12 14" aria-hidden>
        <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="currentColor" />
      </svg>
    </button>
  );
}
