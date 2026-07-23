import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export default function CaseStudiesTeaser({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.caseTeaser;
  const preview = dict.caseStudies.slice(0, 3);

  return (
    <section className="border-t border-slate-line bg-ink py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.body}</p>
          </div>
          <Link
            href={`/${locale}/case-studies`}
            className="btn-ghost shrink-0 self-start md:self-auto"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {preview.map((study) => (
            <Link
              key={study.slug}
              href={`/${locale}/case-studies#${study.slug}`}
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
                {t.readStudy}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
