"use client";

import { useEffect, useState } from "react";
import { SITES } from "@/lib/constants/sites";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#assessment", label: "AI Readiness" },
  { href: "/#tech", label: "Technology" },
  { href: "/#industries", label: "Industries" },
  { href: `${SITES.portal}/pricing`, label: "VPS Hosting", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-slate-line bg-ink/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a
          href={SITES.corporate}
          className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-mist"
        >
          EndEdge
          <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden className="mt-0.5">
            <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
          </svg>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-muted transition-colors hover:text-mist"
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {l.label}
            </a>
          ))}
          <a href={`${SITES.portal}/pricing`} className="btn-ghost px-4 py-2 text-sm">
            View hosting plans
          </a>
          <a href="/#contact" className="btn-primary px-4 py-2 text-sm">
            Book a consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-mist md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-line bg-ink md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-muted hover:bg-slate-panel hover:text-mist"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`${SITES.portal}/pricing`}
              onClick={() => setOpen(false)}
              className="btn-ghost mt-2"
            >
              View hosting plans
            </a>
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Book a consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
