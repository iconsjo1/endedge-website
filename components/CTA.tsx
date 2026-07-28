"use client";

import { useI18n } from "@/components/I18nProvider";
import TrustContacts from "@/components/TrustContacts";
import { trackEvent } from "@/lib/analytics";
import { COMPANY } from "@/lib/constants/company";

export default function CTA() {
  const { dict } = useI18n();
  const c = dict.cta;
  const trust = dict.footer.trust;

  return (
    <section id="contact" className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="card edge-glow relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" aria-hidden />
          <div className="relative">
            <p className="eyebrow">{c.eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
              {c.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">{c.body}</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${COMPANY.email}`}
                className="btn-primary"
                onClick={() => trackEvent("contact_click", { method: "email", location: "cta_primary" })}
              >
                {c.primary}
              </a>
              <a href="#assessment" className="btn-ghost">
                {c.secondary}
              </a>
            </div>

            <TrustContacts labels={trust} variant="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
