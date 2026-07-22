const SERVICES = [
  {
    tag: "01",
    title: "Cloud Infrastructure",
    outcome: "Infrastructure that keeps your business running.",
    points: [
      "Secure, high-performance hosting & managed cloud",
      "Data-residency options for UAE compliance",
      "Monitoring, backups & 24/7 uptime assurance",
    ],
  },
  {
    tag: "02",
    title: "Managed IT Services",
    outcome: "IT that just works — so your team can focus.",
    points: [
      "Proactive support & system administration",
      "Security hardening & endpoint protection",
      "Predictable cost, no in-house IT team needed",
    ],
  },
  {
    tag: "03",
    title: "AI Automation & Agents",
    outcome: "Automate repetitive work with practical AI.",
    points: [
      "Workflow automation & intelligent assistants",
      "Document, contract & knowledge intelligence",
      "Arabic-first AI, built for how you work",
    ],
  },
  {
    tag: "04",
    title: "Software & Consulting",
    outcome: "Custom systems and independent advice.",
    points: [
      "Custom software & platform development",
      "Architecture & digital-transformation strategy",
      "Guidance from people who've shipped at scale",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 text-graphite">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Four capabilities. One partner.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            Every service is built around a business outcome — not a technology checklist.
            Hosting, IT, automation, and AI, owned end to end so nothing falls between
            vendors.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.tag}
              className="group rounded-xl border border-black/[0.07] bg-white p-7 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(15,22,32,0.35)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <span className="font-display text-xs text-stone/60">{s.tag}</span>
              </div>
              <p className="mt-2 font-display text-sm font-medium text-navy">
                {s.outcome}
              </p>
              <ul className="mt-5 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-stone">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
