"use client";

import Link from "next/link";
import { SITES } from "@/lib/constants/sites";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

type Menu = Dictionary["nav"]["servicesMenu"];

const CORE_PATHS = [
  { key: "cloud" as const, slug: "cloud-infrastructure" },
  { key: "managedIt" as const, slug: "managed-it" },
  { key: "ai" as const, slug: "ai-automation" },
  { key: "software" as const, slug: "web-mobile-development" },
  { key: "erp" as const, slug: "erp-e-invoicing" },
] as const;

const LICENSED_PATHS = [
  { key: "itConsultancy" as const, slug: "it-consultancy" },
  { key: "technologySupply" as const, slug: "technology-supply" },
  { key: "energySystems" as const, slug: "energy-systems" },
  { key: "softwareTraining" as const, slug: "software-training" },
] as const;

function serviceHref(locale: Locale, slug: string) {
  return `/${locale}/services/${slug}`;
}

type MenuPanelProps = {
  locale: Locale;
  menu: Menu;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

function ServicesMenuPanel({ locale, menu, variant, onNavigate }: MenuPanelProps) {
  const linkClass =
    variant === "desktop"
      ? "block rounded-md px-3 py-2 text-[13px] text-mist/85 transition-colors hover:bg-slate-panel hover:text-mist"
      : "block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-slate-panel hover:text-mist";

  const headingClass =
    variant === "desktop"
      ? "px-3 pb-1 font-display text-[10px] uppercase tracking-widest text-muted"
      : "px-3 pb-1 pt-1 font-display text-[10px] uppercase tracking-widest text-muted";

  const footerClass =
    variant === "desktop"
      ? "mt-3 border-t border-slate-line pt-3"
      : "mt-2 border-t border-slate-line/80 pt-2";

  const footerLinkClass =
    variant === "desktop"
      ? "block px-3 py-2 font-display text-xs font-semibold text-orange transition-colors hover:text-mist"
      : "block rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-orange transition-colors hover:bg-slate-panel hover:text-mist";

  return (
    <>
      <p className={headingClass}>{menu.coreHeading}</p>
      <ul className="space-y-0.5">
        {CORE_PATHS.map(({ key, slug }) => (
          <li key={slug}>
            <Link href={serviceHref(locale, slug)} className={linkClass} onClick={onNavigate}>
              {menu[key]}
            </Link>
          </li>
        ))}
      </ul>
      <p className={`${headingClass} mt-3`}>{menu.licensedHeading}</p>
      <ul className="space-y-0.5">
        {LICENSED_PATHS.map(({ key, slug }) => (
          <li key={slug}>
            <Link href={serviceHref(locale, slug)} className={linkClass} onClick={onNavigate}>
              {menu[key]}
            </Link>
          </li>
        ))}
      </ul>
      <div className={footerClass}>
        <a
          href={`${SITES.portal}/pricing`}
          target="_blank"
          rel="noopener noreferrer"
          className={
            variant === "desktop"
              ? "block px-3 py-2 font-display text-xs font-semibold text-mist/90 transition-colors hover:text-mist"
              : "block rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-mist/90 transition-colors hover:bg-slate-panel hover:text-mist"
          }
          onClick={onNavigate}
        >
          {menu.vpsPlans} →
        </a>
        <Link
          href={`/${locale}/about#licensed-activities`}
          className={`${footerLinkClass} ${variant === "mobile" ? "" : "mt-0"} mt-1 block`}
          onClick={onNavigate}
        >
          {menu.licensedActivities} →
        </Link>
      </div>
    </>
  );
}

type DesktopProps = {
  locale: Locale;
  label: string;
  menu: Menu;
};

export function NavServicesDesktop({ locale, label, menu }: DesktopProps) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="nav-link inline-flex items-center gap-1"
        aria-haspopup="true"
      >
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden className="opacity-60 transition-transform group-hover:rotate-180">
          <path d="M1 1 L5 5 L9 1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <div
        className="invisible absolute start-0 top-full z-50 mt-1 w-[34rem] translate-y-1 rounded-xl border border-slate-line bg-ink/95 p-4 opacity-0 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
        role="menu"
      >
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <p className="px-3 pb-1 font-display text-[10px] uppercase tracking-widest text-muted">
              {menu.coreHeading}
            </p>
            <ul className="space-y-0.5">
              {CORE_PATHS.map(({ key, slug }) => (
                <li key={slug}>
                  <Link
                    href={serviceHref(locale, slug)}
                    className="block rounded-md px-3 py-2 text-[13px] text-mist/85 transition-colors hover:bg-slate-panel hover:text-mist"
                    role="menuitem"
                  >
                    {menu[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="px-3 pb-1 font-display text-[10px] uppercase tracking-widest text-muted">
              {menu.licensedHeading}
            </p>
            <ul className="space-y-0.5">
              {LICENSED_PATHS.map(({ key, slug }) => (
                <li key={slug}>
                  <Link
                    href={serviceHref(locale, slug)}
                    className="block rounded-md px-3 py-2 text-[13px] text-mist/85 transition-colors hover:bg-slate-panel hover:text-mist"
                    role="menuitem"
                  >
                    {menu[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-1 border-t border-slate-line pt-3">
          <a
            href={`${SITES.portal}/pricing`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 font-display text-xs font-semibold text-mist/90 transition-colors hover:text-mist"
            role="menuitem"
          >
            {menu.vpsPlans} →
          </a>
          <Link
            href={`/${locale}/about#licensed-activities`}
            className="block px-3 py-2 font-display text-xs font-semibold text-orange transition-colors hover:text-mist"
            role="menuitem"
          >
            {menu.licensedActivities} →
          </Link>
        </div>
      </div>
    </div>
  );
}

type MobileProps = {
  locale: Locale;
  label: string;
  toggleLabel: string;
  menu: Menu;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

export function NavServicesMobile({
  locale,
  label,
  toggleLabel,
  menu,
  open,
  onToggle,
  onNavigate,
}: MobileProps) {
  return (
    <div className="rounded-lg border border-slate-line/60 bg-slate-panel/20">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-slate-panel hover:text-mist"
        aria-expanded={open}
        aria-label={toggleLabel}
      >
        <span>{label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          aria-hidden
          className={`opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1 L5 5 L9 1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-1 pb-3">
          <ServicesMenuPanel locale={locale} menu={menu} variant="mobile" onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}
