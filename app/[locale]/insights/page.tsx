import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants/company";
import { getInsightArticles } from "@/lib/content/insights";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = await getDictionary(params.locale);
  const p = dict.insightsPage;
  const path = `/${params.locale}/insights`;
  return {
    title: p.metaTitle,
    description: p.description,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: "/en/insights",
        ar: "/ar/insights",
        "x-default": "/en/insights",
      },
    },
    openGraph: {
      title: `${p.metaTitle} | EndEdge`,
      description: p.description,
      url: `https://endedge.co${path}`,
      siteName: "EndEdge",
      locale: params.locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.metaTitle} | EndEdge`,
      description: p.description,
      images: ["/twitter-image"],
    },
  };
}

export default async function InsightsIndexPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const page = dict.insightsPage;
  const articles = getInsightArticles(locale);

  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <div className="shell pb-10">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {page.description}
          </p>
        </div>

        <section className="border-t border-slate-line py-12">
          <div className="shell grid gap-4">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/${locale}/insights/${article.slug}`}
                className="group block border-b border-slate-line py-7 transition-colors last:border-b-0 hover:border-orange/40"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-10">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xs text-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[11px] uppercase tracking-widest text-muted rtl:normal-case rtl:tracking-normal">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-mist transition-colors group-hover:text-orange md:text-2xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted line-clamp-2">
                      {article.intro}
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 text-sm text-orange opacity-0 transition-opacity group-hover:opacity-100 md:opacity-100">
                    {page.readArticle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-line bg-slate-panel py-16">
          <div className="shell max-w-2xl">
            <p className="eyebrow">{page.nextEyebrow}</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-mist md:text-3xl">
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
