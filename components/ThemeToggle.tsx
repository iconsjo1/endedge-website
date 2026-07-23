"use client";

import { useI18n } from "@/components/I18nProvider";
import { useTheme, type Theme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { dict } = useI18n();
  const t = dict.theme;

  const options: { id: Theme; label: string }[] = [
    { id: "dark", label: t.dark },
    { id: "light", label: t.light },
  ];

  return (
    <div
      className="inline-flex items-center rounded-md border border-slate-line bg-slate-panel/40 p-0.5"
      role="group"
      aria-label={t.label}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setTheme(option.id)}
          className={`rounded px-2.5 py-1 font-display text-[11px] font-semibold tracking-wide transition-colors ${
            theme === option.id
              ? "bg-navy text-white"
              : "text-muted hover:text-mist"
          }`}
          aria-pressed={theme === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
