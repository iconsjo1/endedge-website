import Link from "next/link";
import type { InsightArticle } from "@/lib/content/insights";
import type { Locale } from "@/lib/i18n/config";

export default function InsightArticleBody({
  article,
  locale,
  relatedLabel,
  allInsightsLabel,
}: {
  article: InsightArticle;
  locale: Locale;
  relatedLabel: string;
  allInsightsLabel: string;
}) {
  const relatedHref = `/${locale}${article.relatedPath}`;

  return (
    <article className="mx-auto max-w-3xl">
      <p className="eyebrow">{article.category}</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <p className="text-lg text-mist/90">{article.intro}</p>

        {article.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-mist">{section.heading}</h2>
            {section.paras.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </section>
        ))}

        {article.closing ? (
          <p className="border-s-2 border-orange ps-4 text-mist/90">{article.closing}</p>
        ) : null}
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-slate-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href={relatedHref} className="btn-primary">
          {relatedLabel}
        </Link>
        <Link
          href={`/${locale}/insights`}
          className="text-sm text-muted transition-colors hover:text-orange"
        >
          {allInsightsLabel}
        </Link>
      </div>
    </article>
  );
}
