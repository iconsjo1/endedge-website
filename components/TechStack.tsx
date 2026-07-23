import type { Dictionary } from "@/lib/i18n/types";

export default function TechStack({ dict }: { dict: Dictionary }) {
  const t = dict.tech;

  return (
    <section id="tech" className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.body}</p>
        </div>

        <div className="mt-12 divide-y divide-slate-line border-y border-slate-line">
          {t.groups.map((s) => (
            <div
              key={s.group}
              className="grid gap-3 py-6 sm:grid-cols-[220px_1fr] sm:items-center"
            >
              <h3 className="font-display text-xs uppercase tracking-widest text-orange">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-line bg-slate-panel px-3 py-1.5 font-display text-xs text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
