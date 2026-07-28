"use client";

import { useState, type FormEvent } from "react";
import type { ErpPageContent } from "@/lib/content/erp-e-invoicing";
import type { Locale } from "@/lib/i18n/config";
import { trackEvent } from "@/lib/analytics";

type Props = {
  locale: Locale;
  lead: ErpPageContent["lead"];
  checklist: ErpPageContent["checklist"];
  consultationEmail: string;
};

export default function ChecklistLeadMagnet({
  locale,
  lead,
  checklist,
  consultationEmail,
}: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      company: String(form.get("company") ?? "").trim(),
      whatsapp: String(form.get("whatsapp") ?? "").trim(),
      locale,
      source: "erp-e-invoicing-checklist",
    };

    try {
      const res = await fetch("/api/checklist-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      trackEvent("checklist_submit", { locale });
      setUnlocked(true);
      requestAnimationFrame(() => {
        document.getElementById("checklist-unlocked")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) {
    return (
      <div id="checklist-unlocked" className="scroll-mt-28">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-mist">
          {lead.unlockedTitle}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted">{checklist.howTo}</p>
        <ul className="mt-5 space-y-2 text-sm text-mist/85">
          {checklist.deadlines.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
              {d}
            </li>
          ))}
        </ul>

        <h4 className="mt-10 font-display text-xs uppercase tracking-widest text-orange">
          {checklist.decisionsHeading}
        </h4>
        <ol className="mt-5 space-y-4">
          {checklist.items.map((item) => (
            <li
              key={item.number}
              className="rounded-xl border border-slate-line bg-slate-panel p-5"
            >
              <label className="flex cursor-pointer gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[var(--orange)]"
                  checked={!!checked[item.number]}
                  onChange={() =>
                    setChecked((prev) => ({
                      ...prev,
                      [item.number]: !prev[item.number],
                    }))
                  }
                />
                <span>
                  <span className="font-display text-sm font-semibold text-mist">
                    {String(item.number).padStart(2, "0")}. {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted">
                    {item.checkbox}
                  </span>
                  <span className="mt-3 block text-xs text-muted">
                    <span className="text-orange">{item.owner}</span>
                    {" · "}
                    {item.output}
                  </span>
                </span>
              </label>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl border border-orange/30 bg-orange/5 p-6">
          <p className="font-display text-lg font-semibold text-mist">{checklist.nextStep}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{checklist.nextBody}</p>
          <a href={`mailto:${consultationEmail}`} className="btn-primary mt-5 inline-flex">
            {consultationEmail}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted">
            {lead.name}
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-slate-line bg-ink px-3.5 py-2.5 text-mist outline-none ring-orange/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted">
            {lead.email}
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-slate-line bg-ink px-3.5 py-2.5 text-mist outline-none ring-orange/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted">
            {lead.company}
          </span>
          <input
            name="company"
            required
            autoComplete="organization"
            className="w-full rounded-lg border border-slate-line bg-ink px-3.5 py-2.5 text-mist outline-none ring-orange/40 focus:ring-2"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-1.5 block font-display text-xs uppercase tracking-widest text-muted">
            {lead.whatsapp}
          </span>
          <input
            name="whatsapp"
            autoComplete="tel"
            className="w-full rounded-lg border border-slate-line bg-ink px-3.5 py-2.5 text-mist outline-none ring-orange/40 focus:ring-2"
          />
        </label>
      </div>

      {error ? <p className="text-sm text-orange">{lead.error}</p> : null}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "…" : lead.submit}
      </button>
      <p className="text-xs text-muted">{lead.privacy}</p>
      <p className="text-xs text-muted">{lead.whatsappAlt}</p>
    </form>
  );
}
