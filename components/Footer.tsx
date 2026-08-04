"use client";

import { COMPANY } from "@/lib/constants/company";
import { SITES } from "@/lib/constants/sites";
import { useI18n } from "@/components/I18nProvider";
import TrustContacts from "@/components/TrustContacts";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const { locale, dict } = useI18n();
  const f = dict.footer;
  const countries = [f.countries.uae, f.countries.jordan, f.countries.iraq, f.countries.uk];

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
        { label: f.links.cloud, href: `/${locale}/services/cloud-infrastructure` },
        { label: f.links.managedIt, href: `/${locale}/services/managed-it` },
        { label: f.links.ai, href: `/${locale}/services/ai-automation` },
        { label: f.links.software, href: `/${locale}/services/web-mobile-development` },
        { label: f.links.erp, href: `/${locale}/services/erp-e-invoicing` },
        { label: f.links.itConsultancy, href: `/${locale}/services/it-consultancy` },
        { label: f.links.technologySupply, href: `/${locale}/services/technology-supply` },
        { label: f.links.energySystems, href: `/${locale}/services/energy-systems` },
        { label: f.links.softwareTraining, href: `/${locale}/services/software-training` },
      ],
    },
    {
      heading: f.company,
      links: [
        { label: f.links.about, href: `/${locale}/about` },
        { label: f.links.caseStudies, href: `/${locale}/case-studies` },
        { label: f.links.insights, href: `/${locale}/insights` },
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
          <BrandLogo href={`/${locale}`} size="footer" />
          <p className="mt-3 font-display text-sm font-medium text-orange">{f.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{f.blurb}</p>
          <p className="mt-5 font-display text-xs uppercase tracking-widest text-muted">
            {f.location}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            <span className="font-display text-[11px] uppercase tracking-widest text-muted">
              {f.availableIn}
            </span>{" "}
            <span className="text-mist/85">{countries.join(" · ")}</span>
          </p>
          <TrustContacts labels={f.trust} variant="footer" />
          <a
            href={COMPANY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-mist/85 transition-colors hover:text-orange"
            aria-label={f.links.linkedin}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-orange" aria-hidden>
              <path
                fill="currentColor"
                d="M14.5 1h-13A.5.5 0 0 0 1 1.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5ZM5.34 12.5H3.56V6.56h1.78Zm-.89-6.74a1.03 1.03 0 1 1 0-2.06 1.03 1.03 0 0 1 0 2.06ZM12.5 12.5h-1.78V9.36c0-.75-.01-1.71-1.04-1.71-.1.04-1.02.1-1.02 1.7v3.15H6.88V6.56h1.71v.81h.02c.24-.45.82-.93 1.69-.93 1.81 0 2.14 1.19 2.14 2.74Z"
              />
            </svg>
            <span>{f.links.linkedin}</span>
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-display text-xs uppercase tracking-widest text-muted">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-mist/80 transition-colors hover:text-orange"
                    {...("external" in l && l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
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
