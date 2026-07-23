"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/I18nProvider";
import { stripLocale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const { locale, dict } = useI18n();
  const pathname = usePathname() || "/";
  const path = stripLocale(pathname);
  const enHref = path === "/" ? "/en" : `/en${path}`;
  const arHref = path === "/" ? "/ar" : `/ar${path}`;

  return (
    <div
      className="inline-flex items-center rounded-md border border-slate-line bg-slate-panel/40 p-0.5"
      role="group"
      aria-label={dict.language.switchTo}
    >
      <Link
        href={enHref}
        hrefLang="en"
        className={`rounded px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide transition-colors ${
          locale === "en"
            ? "bg-navy text-white"
            : "text-muted hover:text-mist"
        }`}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={arHref}
        hrefLang="ar"
        className={`rounded px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide transition-colors ${
          locale === "ar"
            ? "bg-navy text-white"
            : "text-muted hover:text-mist"
        }`}
        aria-current={locale === "ar" ? "true" : undefined}
      >
        ع
      </Link>
    </div>
  );
}
