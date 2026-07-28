"use client";

import { useEffect, useState } from "react";
import { SITES } from "@/lib/constants/sites";
import { useI18n } from "@/components/I18nProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { NavServicesDesktop, NavServicesMobile } from "@/components/NavServicesMenu";

export default function Nav() {
  const { locale, dict } = useI18n();
  const n = dict.nav;
  const [solidHeader, setSolidHeader] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const desktopLinks = [
    { href: `/${locale}/case-studies`, label: n.caseStudies },
    { href: `/${locale}/insights`, label: n.insights },
    { href: `/${locale}/about`, label: n.about },
  ];

  const mobileExploreLinks = [
    { href: `/${locale}/#assessment`, label: n.aiReadiness },
    { href: `/${locale}/#tech`, label: n.technology },
    { href: `/${locale}/#industries`, label: n.industries },
    { href: `${SITES.portal}/pricing`, label: n.vpsHosting, external: true },
  ];

  const closeMobile = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const updateHeader = () => {
      const scrolledNow = window.scrollY > 12;
      const x = Math.round(window.innerWidth / 2);
      const hits = document.elementsFromPoint(x, 40);
      const overLight = hits.some(
        (el) => el.classList.contains("bg-paper") || el.closest(".bg-paper") !== null,
      );
      setSolidHeader(scrolledNow || overLight);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setServicesOpen(false);
      return;
    }
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
      className={`site-header fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        solidHeader || open
          ? "site-header--solid border-b border-slate-line shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="shell flex h-[4.25rem] min-w-0 items-center justify-between gap-3">
        <a
          href={`/${locale}`}
          className="group relative z-10 flex shrink-0 items-center gap-2 font-display text-lg font-bold tracking-tight text-mist"
          onClick={closeMobile}
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

        <div className="hidden min-w-0 items-center gap-1 xl:flex">
          <div className="flex min-w-0 items-center gap-0.5">
            <NavServicesDesktop locale={locale} label={n.services} menu={n.servicesMenu} />
            {desktopLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <div className="ms-2 flex shrink-0 items-center gap-2 border-s border-slate-line/70 ps-3 2xl:ms-3 2xl:gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href={`${SITES.portal}/pricing`}
              className="btn-ghost hidden whitespace-nowrap px-3 py-2 text-xs 2xl:inline-flex"
            >
              {n.viewHosting}
            </a>
            <a
              href={`/${locale}/#contact`}
              className="btn-primary whitespace-nowrap px-3 py-2 text-xs 2xl:px-3.5"
            >
              <span className="2xl:hidden">{n.bookConsultationShort}</span>
              <span className="hidden 2xl:inline">{n.bookConsultation}</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-line/60 text-mist transition-colors hover:border-orange hover:text-orange xl:hidden"
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
        className={`site-header--solid border-t border-slate-line transition-[max-height,opacity] duration-300 ease-out xl:hidden ${
          open ? "max-h-[min(85vh,640px)] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-5">
          <NavServicesMobile
            locale={locale}
            label={n.services}
            toggleLabel={n.toggleServices}
            menu={n.servicesMenu}
            open={servicesOpen}
            onToggle={() => setServicesOpen((v) => !v)}
            onNavigate={closeMobile}
          />

          {desktopLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-slate-panel hover:text-mist"
            >
              {l.label}
            </a>
          ))}

          <p className="px-3 pt-3 font-display text-[10px] uppercase tracking-widest text-muted">
            {n.exploreHeading}
          </p>
          {mobileExploreLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-slate-panel hover:text-mist"
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {l.label}
            </a>
          ))}

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-line px-1 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <p className="font-display text-[11px] uppercase tracking-wider text-muted">EndEdge</p>
          </div>

          <div className="mt-3 grid gap-2">
            <a href={`${SITES.portal}/pricing`} onClick={closeMobile} className="btn-ghost">
              {n.viewHosting}
            </a>
            <a href={`/${locale}/#contact`} onClick={closeMobile} className="btn-primary">
              {n.bookConsultation}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
