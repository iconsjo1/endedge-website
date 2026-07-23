"use client";

import { useEffect, useState } from "react";
import { SITES } from "@/lib/constants/sites";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Nav() {
  const { locale, dict } = useI18n();
  const n = dict.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}/#services`, label: n.services },
    { href: `/${locale}/case-studies`, label: n.caseStudies },
    { href: `/${locale}/#assessment`, label: n.aiReadiness },
    { href: `/${locale}/#tech`, label: n.technology },
    { href: `/${locale}/#industries`, label: n.industries },
    { href: `${SITES.portal}/pricing`, label: n.vpsHosting, external: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-slate-line/80 bg-ink/90 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-[4.25rem] items-center justify-between gap-4">
        <a
          href={`/${locale}`}
          className="group relative z-10 flex items-center gap-2 font-display text-lg font-bold tracking-tight text-mist"
          onClick={() => setOpen(false)}
        >
          <span className="relative">
            EndEdge
            <span
              className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-orange/70 transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden
            />
          </span>
          <svg
            width="13"
            height="15"
            viewBox="0 0 12 14"
            aria-hidden
            className="mt-0.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
          >
            <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
          </svg>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          <div className="flex items-center gap-0.5 rounded-lg border border-transparent px-1 py-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="ms-3 flex items-center gap-2.5 border-s border-slate-line/70 ps-3">
            <LanguageSwitcher />
            <a href={`${SITES.portal}/pricing`} className="btn-ghost px-3.5 py-2 text-xs">
              {n.viewHosting}
            </a>
            <a href={`/${locale}/#contact`} className="btn-primary px-3.5 py-2 text-xs">
              {n.bookConsultation}
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-md border border-slate-line/60 text-mist transition-colors hover:border-orange hover:text-orange lg:hidden"
          aria-label={n.toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">{n.toggleMenu}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-slate-line bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[min(80vh,560px)] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-5">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-slate-panel hover:text-mist"
              style={open ? { animationDelay: `${index * 40}ms` } : undefined}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {l.label}
            </a>
          ))}

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-line px-1 pt-4">
            <LanguageSwitcher />
            <p className="font-display text-[11px] uppercase tracking-wider text-muted">
              EndEdge
            </p>
          </div>

          <div className="mt-3 grid gap-2">
            <a
              href={`${SITES.portal}/pricing`}
              onClick={() => setOpen(false)}
              className="btn-ghost"
            >
              {n.viewHosting}
            </a>
            <a
              href={`/${locale}/#contact`}
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              {n.bookConsultation}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
