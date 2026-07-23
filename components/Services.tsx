import { SITES } from "@/lib/constants/sites";
import type { Dictionary } from "@/lib/i18n/types";

export default function Services({ dict }: { dict: Dictionary }) {
  const s = dict.services;

  return (
    <section id="services" className="bg-paper py-24 text-graphite">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {s.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone">{s.body}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {s.items.map((item) => (
            <article
              key={item.tag}
              id={item.id}
              className="group scroll-mt-24 rounded-xl border border-black/[0.07] bg-white p-7 transition-shadow hover:shadow-[0_20px_60px_-30px_rgba(15,22,32,0.35)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <span className="font-display text-xs text-stone/60">{item.tag}</span>
              </div>
              <p className="mt-2 font-display text-sm font-medium text-navy">{item.outcome}</p>
              <ul className="mt-5 space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-stone">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {p}
                  </li>
                ))}
              </ul>
              {item.portalLink ? (
                <a
                  href={`${SITES.portal}/pricing`}
                  className="mt-6 inline-flex font-display text-sm font-semibold text-orange transition-colors hover:text-navy"
                >
                  {s.explorePlans}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
