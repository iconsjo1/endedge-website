import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InsightArticleBody from "@/components/insights/InsightArticleBody";
import { COMPANY } from "@/lib/constants/company";
import {
  getInsightArticle,
  getInsightArticles,
  getInsightSlugs,
} from "@/lib/content/insights";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getInsightSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const article = getInsightArticle(locale, params.slug);
  if (!article) return {};
  const path = `/${locale}/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.intro,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: `/en/insights/${article.slug}`,
        ar: `/ar/insights/${article.slug}`,
        "x-default": `/en/insights/${article.slug}`,
      },
    },
    openGraph: {
      title: `${article.title} | EndEdge`,
      description: article.intro,
      url: `https://endedge.co${path}`,
      siteName: "EndEdge",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "article",
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const article = getInsightArticle(locale, params.slug);
  if (!article) notFound();

  const dict = await getDictionary(locale);
  const page = dict.insightsPage;
  const articles = getInsightArticles(locale);
  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <div className="shell py-10 md:py-14">
          <InsightArticleBody
            article={article}
            locale={locale}
            relatedLabel={page.related}
            allInsightsLabel={page.allInsights}
          />
        </div>

        {next && next.slug !== article.slug ? (
          <section className="border-t border-slate-line py-12">
            <div className="shell mx-auto max-w-3xl">
              <p className="font-display text-[11px] uppercase tracking-widest text-muted rtl:normal-case rtl:tracking-normal">
                {page.readArticle}
              </p>
              <Link
                href={`/${locale}/insights/${next.slug}`}
                className="mt-3 block font-display text-xl font-semibold text-mist transition-colors hover:text-orange"
              >
                {next.title}
              </Link>
            </div>
          </section>
        ) : null}

        <section className="border-t border-slate-line bg-slate-panel py-16">
          <div className="shell mx-auto max-w-3xl">
            <p className="eyebrow">{page.nextEyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-mist">
              {page.nextTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{page.nextBody}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${COMPANY.email}`} className="btn-primary">
                {page.book}
              </a>
              <Link href={`/${locale}`} className="btn-ghost">
                {page.backHome}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
