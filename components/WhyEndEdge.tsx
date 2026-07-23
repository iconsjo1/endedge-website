import type { Dictionary } from "@/lib/i18n/types";

export default function WhyEndEdge({ dict }: { dict: Dictionary }) {
  const w = dict.why;

  return (
    <section className="bg-paper py-24 text-graphite">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{w.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {w.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {w.reasons.map((r, i) => (
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
