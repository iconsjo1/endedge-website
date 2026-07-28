"use client";

import { useEffect, useState } from "react";

const EVENT = "endedge:locale-cut";

export function triggerLocaleCut() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

/** Brief orange chevron cut when switching EN ↔ AR. */
export default function LocaleCutWipe() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setOn(true);
      window.setTimeout(() => setOn(false), 520);
    };
    window.addEventListener(EVENT, run);
    return () => window.removeEventListener(EVENT, run);
  }, []);

  if (!on) return null;

  return (
    <div className="locale-cut-wipe" aria-hidden>
      <div className="locale-cut-wipe__blade" />
    </div>
  );
}
