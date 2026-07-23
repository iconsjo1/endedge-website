import Link from "next/link";
import { CASE_STUDIES } from "@/lib/content/case-studies";

const PREVIEW = CASE_STUDIES.slice(0, 3);

export default function CaseStudiesTeaser() {
  return (
    <section className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
              The detail behind the delivery.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our AI readiness check gives you a fast snapshot. For procurement and technical
              stakeholders, we publish deeper write-ups — stacks, migration metrics, and measured
              outcomes from anonymized enterprise work.
            </p>
          </div>
          <Link href="/case-studies" className="btn-ghost shrink-0 self-start md:self-auto">
            View all case studies
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PREVIEW.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies#${study.slug}`}
              className="card group flex flex-col p-6 transition-colors hover:border-orange/60"
            >
              <p className="font-display text-[11px] uppercase tracking-wider text-orange">
                {study.industry}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-mist group-hover:text-orange">
                {study.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.summary}</p>
              <p className="mt-5 font-display text-xs font-semibold text-orange">
                Read case study →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
