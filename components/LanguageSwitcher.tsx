"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/I18nProvider";
import { stripLocale, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher() {
  const { locale, dict } = useI18n();
  const pathname = usePathname() || "/";
  const path = stripLocale(pathname);
  const other: Locale = locale === "en" ? "ar" : "en";
  const href = path === "/" ? `/${other}` : `/${other}${path}`;

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-md border border-slate-line px-2.5 py-1.5 font-display text-xs font-semibold text-muted transition-colors hover:border-orange hover:text-orange"
      hrefLang={other}
      aria-label={dict.language.switchTo}
    >
      <span className={locale === "en" ? "text-orange" : undefined}>EN</span>
      <span className="text-slate-line">/</span>
      <span className={locale === "ar" ? "text-orange" : undefined}>ع</span>
    </Link>
  );
}
