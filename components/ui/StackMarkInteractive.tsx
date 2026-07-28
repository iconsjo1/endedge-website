"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import StackMark from "./StackMark";

type Props = {
  className?: string;
  labels?: boolean | string[];
  rtl?: boolean;
  animate?: boolean;
};

/** Hero stack: branded cursor + light pointer tilt (fine pointer only). */
export default function StackMarkInteractive({
  className = "",
  labels = false,
  rtl = false,
  animate = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setLive(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!live || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: -py * 7,
      ry: px * 9,
    });
  };

  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div
      ref={wrapRef}
      className={`stack-mark-interactive${live ? " stack-mark-interactive--live" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className="stack-mark-tilt"
        style={
          live
            ? {
                transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }
            : undefined
        }
      >
        <StackMark className={className} labels={labels} rtl={rtl} animate={animate} />
      </div>
    </div>
  );
}
