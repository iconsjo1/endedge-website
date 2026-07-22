// Credibility strip. Replace the sector labels with real client logos as they clear
// for public use — until then, sector coverage reads as honest proof, not name-dropping.
const SECTORS = [
  "Government",
  "Banking & Finance",
  "Education",
  "Healthcare",
  "Enterprise ERP",
  "Arabic NLP",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-slate-line bg-slate-panel/40 py-8">
      <div className="shell">
        <p className="text-center font-display text-[11px] uppercase tracking-[0.2em] text-muted">
          Delivery experience across
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {SECTORS.map((s) => (
            <span
              key={s}
              className="font-display text-sm font-medium text-muted/80 transition-colors hover:text-mist"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
