import { SITES } from "@/lib/constants/sites";

const COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "VPS Hosting", href: `${SITES.portal}/pricing` },
      { label: "Client Portal", href: `${SITES.portal}/login` },
      { label: "System Status", href: `${SITES.portal}/status` },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Cloud Infrastructure", href: "#cloud-infrastructure" },
      { label: "Managed IT", href: "#managed-it" },
      { label: "AI Automation", href: "#ai-automation" },
      { label: "Software & Consulting", href: "#software-consulting" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Industries", href: "#industries" },
      { label: "AI Readiness", href: "#assessment" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-line bg-ink py-14">
      <div className="shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a
            href={SITES.corporate}
            className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-mist"
          >
            EndEdge
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden className="mt-0.5">
              <path d="M1 1 L8 7 L1 13 L4.5 7 Z" fill="#FF6F00" />
            </svg>
          </a>
          <p className="mt-3 font-display text-sm font-medium text-orange">
            At the Edge of Innovation.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Enterprise technology &amp; AI, delivered end to end. Modernize your
            infrastructure, automate operations, and adopt practical AI — with one trusted
            partner.
          </p>
          <p className="mt-5 font-display text-xs uppercase tracking-widest text-muted">
            Dubai, UAE
          </p>
        </div>

        {COLUMNS.map((col) => (
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
          © {new Date().getFullYear()} EndEdge. All rights reserved.
        </p>
        <div className="flex gap-6 font-display text-[11px] text-muted">
          <a href="/privacy" className="hover:text-mist">Privacy</a>
          <a href="/terms" className="hover:text-mist">Terms</a>
          <a href={SITES.corporate} className="hover:text-mist">endedge.co</a>
        </div>
      </div>
    </footer>
  );
}
