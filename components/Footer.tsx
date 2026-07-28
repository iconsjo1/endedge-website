"use client";

import { SITES } from "@/lib/constants/sites";
import { useI18n } from "@/components/I18nProvider";
import TrustContacts from "@/components/TrustContacts";

export default function Footer() {
  const { locale, dict } = useI18n();
  const f = dict.footer;

  const columns = [
    {
      heading: f.products,
      links: [
        { label: f.links.vps, href: `${SITES.portal}/pricing` },
        { label: f.links.portal, href: `${SITES.portal}/login` },
        { label: f.links.status, href: `${SITES.portal}/status` },
      ],
    },
    {
      heading: f.services,
      links: [
        { label: f.links.cloud, href: `/${locale}/#cloud-infrastructure` },
        { label: f.links.managedIt, href: `/${locale}/services/managed-it` },
        { label: f.links.ai, href: `/${locale}/services/ai-automation` },
        { label: f.links.software, href: `/${locale}/services/web-mobile-development` },
        { label: f.links.erp, href: `/${locale}/services/erp-e-invoicing` },
      ],
    },
    {
      heading: f.company,
      links: [
        { label: f.links.about, href: `/${locale}/about` },
        { label: f.links.caseStudies, href: `/${locale}/case-studies` },
        { label: f.links.industries, href: `/${locale}/#industries` },
        { label: f.links.readiness, href: `/${locale}/#assessment` },
        { label: f.links.contact, href: `/${locale}/#contact` },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-line bg-ink py-14">
      <div className="shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a
            href={`/${locale}`}
            className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-mist"
          >
            EndEdge
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden className="mt-0.5">
              <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
            </svg>
          </a>
          <p className="mt-3 font-display text-sm font-medium text-orange">{f.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{f.blurb}</p>
          <p className="mt-5 font-display text-xs uppercase tracking-widest text-muted">
            {f.location}
          </p>
          <TrustContacts labels={f.trust} variant="footer" />
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-display text-xs uppercase tracking-widest text-muted">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-mist/80 transition-colors hover:text-orange">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-line pt-7 sm:flex-row">
        <p className="font-display text-[11px] text-muted">
          © {new Date().getFullYear()} EndEdge. {f.rights}
        </p>
        <div className="flex gap-6 font-display text-[11px] text-muted">
          <a href={`/${locale}/privacy`} className="hover:text-mist">
            {f.privacy}
          </a>
          <a href={`/${locale}/terms`} className="hover:text-mist">
            {f.terms}
          </a>
          <a href={SITES.corporate} className="hover:text-mist">
            endedge.co
          </a>
        </div>
      </div>
    </footer>
  );
}
