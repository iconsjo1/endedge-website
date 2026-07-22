const INDUSTRIES = [
  "Government & Public Sector",
  "Banking & Finance",
  "Healthcare",
  "Education",
  "Retail & E-commerce",
  "Real Estate",
  "Professional Services",
  "Logistics",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-paper py-24 text-graphite">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Industries we serve</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Depth where it counts.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INDUSTRIES.map((name) => (
            <div
              key={name}
              className="rounded-lg border border-black/[0.07] bg-white px-4 py-5 transition-colors hover:border-orange"
            >
              <span className="font-display text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
