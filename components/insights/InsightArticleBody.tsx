import Link from "next/link";
import type { InsightArticle } from "@/lib/content/insights";
import type { Locale } from "@/lib/i18n/config";

function formatPublished(iso: string, locale: Locale): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default function InsightArticleBody({
  article,
  locale,
  relatedLabel,
  allInsightsLabel,
  keyTakeawaysLabel,
  faqLabel,
}: {
  article: InsightArticle;
  locale: Locale;
  relatedLabel: string;
  allInsightsLabel: string;
  keyTakeawaysLabel: string;
  faqLabel: string;
}) {
  const relatedHref = `/${locale}${article.relatedPath}`;

  return (
    <article className="mx-auto max-w-3xl" data-insight-article>
      <p className="eyebrow">{article.category}</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-mist md:text-4xl">
        {article.title}
      </h1>
      {article.publishedAt ? (
        <time
          dateTime={article.publishedAt}
          className="mt-3 block text-sm text-muted"
        >
          {formatPublished(article.publishedAt, locale)}
        </time>
      ) : null}

      <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
        <p className="text-lg text-mist/90">{article.intro}</p>

        {article.keyTakeaways?.length ? (
          <aside className="border-s-2 border-orange bg-transparent py-1 ps-5">
            <h2 className="font-display text-lg font-semibold text-mist">
              {keyTakeawaysLabel}
            </h2>
            <ul className="mt-3 space-y-2">
              {article.keyTakeaways.map((item) => (
                <li key={item.slice(0, 64)} className="flex gap-3 text-mist/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}

        {article.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-mist">{section.heading}</h2>
            {section.paras.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </section>
        ))}

        {article.faq?.length ? (
          <section className="space-y-4 border-t border-slate-line pt-8">
            <h2 className="font-display text-xl font-semibold text-mist">{faqLabel}</h2>
            <div className="space-y-5">
              {article.faq.map((item) => (
                <div key={item.question.slice(0, 64)} className="space-y-2">
                  <h3 className="font-display text-base font-semibold text-mist">
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

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
