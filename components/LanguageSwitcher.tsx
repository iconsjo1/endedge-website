"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/components/I18nProvider";
import { triggerLocaleCut } from "@/components/brand/LocaleCutWipe";
import { stripLocale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const { locale, dict } = useI18n();
  const pathname = usePathname() || "/";
  const router = useRouter();
  const path = stripLocale(pathname);
  const enHref = path === "/" ? "/en" : `/en${path}`;
  const arHref = path === "/" ? "/ar" : `/ar${path}`;

  const go = (href: string, next: "en" | "ar") => (e: MouseEvent) => {
    if (locale === next) return;
    e.preventDefault();
    triggerLocaleCut();
    window.setTimeout(() => router.push(href), 180);
  };

  return (
    <div
      className="inline-flex items-center rounded-md border border-slate-line bg-slate-panel/40 p-0.5"
      role="group"
      aria-label={dict.language.switchTo}
    >
      <Link
        href={enHref}
        hrefLang="en"
        onClick={go(enHref, "en")}
        className={`rounded px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide transition-colors ${
          locale === "en" ? "bg-navy text-white" : "text-muted hover:text-mist"
        }`}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={arHref}
        hrefLang="ar"
        onClick={go(arHref, "ar")}
        className={`rounded px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide transition-colors ${
          locale === "ar" ? "bg-navy text-white" : "text-muted hover:text-mist"
        }`}
        aria-current={locale === "ar" ? "true" : undefined}
      >
        ع
      </Link>
    </div>
  );
}
