import type { CaseStudy } from "@/lib/content/case-studies";
import type { Dictionary } from "@/lib/i18n/types";

type CaseStudyArticleProps = {
  study: CaseStudy;
  index: number;
  labels: Dictionary["caseStudiesPage"];
};

export default function CaseStudyArticle({ study, index, labels }: CaseStudyArticleProps) {
  return (
    <article
      id={study.slug}
      className="scroll-mt-28 border-t border-slate-line py-16 first:border-t-0 first:pt-0"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-xs font-semibold text-orange">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full border border-slate-line px-3 py-1 font-display text-[11px] uppercase tracking-wider text-muted">
              {study.industry}
            </span>
          </div>

          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-mist md:text-3xl">
            {study.title}
          </h2>

          <p className="mt-2 text-sm text-muted">{study.clientDescriptor}</p>
          <p className="mt-5 text-base leading-relaxed text-mist/90">{study.summary}</p>

          <div className="mt-10 space-y-8">
            <section>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-orange">
                {labels.challenge}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/85">{study.challenge}</p>
            </section>

            <section>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-orange">
                {labels.approach}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist/85">{study.approach}</p>
            </section>

            <section>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-orange">
                {labels.outcomes}
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {study.outcomes.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-slate-line bg-slate-panel px-4 py-4"
                  >
                    <p className="font-display text-2xl font-semibold text-mist">{metric.value}</p>
                    <p className="mt-1 text-sm font-medium text-mist/90">{metric.label}</p>
                    {metric.detail ? (
                      <p className="mt-1 text-xs text-muted">{metric.detail}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="card p-5">
            <h3 className="font-display text-xs uppercase tracking-widest text-orange">
              {labels.engagement}
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted">{labels.duration}</dt>
                <dd className="mt-0.5 text-mist">{study.duration}</dd>
              </div>
              <div>
                <dt className="text-muted">{labels.servicesLabel}</dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-md border border-slate-line bg-ink px-2 py-0.5 text-xs text-mist/90"
                    >
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-xs uppercase tracking-widest text-orange">
              {labels.techStack}
            </h3>
            <div className="mt-4 space-y-4">
              {study.stack.map((group) => (
                <div key={group.category}>
                  <p className="font-display text-[11px] uppercase tracking-wider text-muted">
                    {group.category}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-line bg-ink px-2.5 py-1 font-display text-[11px] text-mist"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
