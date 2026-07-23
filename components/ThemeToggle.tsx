"use client";

import { useI18n } from "@/components/I18nProvider";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { dict } = useI18n();
  const t = dict.theme;
  const nextLabel = theme === "dark" ? t.light : t.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-line bg-slate-panel/40 text-muted transition-colors hover:border-orange hover:text-orange"
      aria-label={`${t.label}: ${nextLabel}`}
      title={`${t.label}: ${nextLabel}`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2.5v2M12 19.5v2M4.5 12h-2M21.5 12h-2M6.2 6.2l-1.4-1.4M19.2 19.2l-1.4-1.4M6.2 17.8l-1.4 1.4M19.2 4.8l-1.4 1.4"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 7 7 0 1 0 20.5 14.2z"
          />
        </svg>
      )}
    </button>
  );
}
