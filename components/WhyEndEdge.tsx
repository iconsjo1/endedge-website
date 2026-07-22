const REASONS = [
  {
    title: "End-to-end accountability",
    body: "One partner owns your technology from infrastructure through intelligence. Nothing falls between vendors, and there's always one number to call.",
  },
  {
    title: "Real enterprise pedigree",
    body: "Nearly two decades delivering systems for government, banking, education, and private-sector clients — including compliance-grade financial platforms and systems serving 20,000+ users.",
  },
  {
    title: "AI that ships",
    body: "Genuine capability in production AI and Arabic-first NLP, backed by peer-reviewed research — not a rebranded reseller.",
  },
  {
    title: "Integrity-first",
    body: "We clearly distinguish what's production-proven from what's in development. In a market full of overclaiming, we tell you the truth.",
  },
  {
    title: "Built for the region",
    body: "Local presence, UAE data-residency awareness, and full service in both Arabic and English.",
  },
  {
    title: "Outcomes, not hours",
    body: "We measure success by less manual work, lower downtime, and faster response — the numbers your executives actually care about.",
  },
];

export default function WhyEndEdge() {
  return (
    <section className="bg-paper py-24 text-graphite">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Why EndEdge</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Most Dubai startups can&apos;t say this.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <div key={r.title}>
              <span className="font-display text-xs text-orange">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
