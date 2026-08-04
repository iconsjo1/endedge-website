import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import { COMPANY } from "@/lib/constants/company";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = await getDictionary(params.locale);
  const p = dict.caseStudiesPage;
  return {
    title: p.metaTitle,
    description: p.description,
    alternates: {
      canonical: `https://endedge.co/${params.locale}/case-studies`,
      languages: {
        en: "/en/case-studies",
        ar: "/ar/case-studies",
        "x-default": "/en/case-studies",
      },
    },
    openGraph: {
      title: `${p.metaTitle} | EndEdge`,
      description: p.description,
      url: `https://endedge.co/${params.locale}/case-studies`,
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

export default async function CaseStudiesPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const page = dict.caseStudiesPage;
  const studies = dict.caseStudies;

  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <div className="shell pb-8">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {page.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${COMPANY.email}`} className="btn-primary">
              {page.discuss}
            </a>
            <Link href={`/${locale}/#assessment`} className="btn-ghost">
              {page.tryAssessment}
            </Link>
          </div>

          <nav
            aria-label="Case study index"
            className="mt-14 rounded-xl border border-slate-line bg-slate-panel p-5 md:p-6"
          >
            <h2 className="font-display text-xs uppercase tracking-widest text-orange">
              {page.onThisPage}
            </h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {studies.map((study, index) => (
                <li key={study.slug}>
                  <a
                    href={`#${study.slug}`}
                    className="group flex gap-3 rounded-md px-2 py-2 text-sm text-mist/85 transition-colors hover:bg-ink hover:text-orange"
                  >
                    <span className="font-display text-xs text-orange/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug group-hover:text-orange">{study.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <section className="border-t border-slate-line py-4">
          <div className="shell">
            {studies.map((study, index) => (
              <CaseStudyArticle
                key={study.slug}
                study={study}
                index={index}
                labels={page}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-slate-line py-20">
          <div className="shell">
            <div className="card edge-glow mx-auto max-w-3xl px-8 py-12 text-center md:px-12">
              <p className="eyebrow">{page.nextEyebrow}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {page.nextTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
                {page.nextBody}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${COMPANY.email}`} className="btn-primary">
                  {page.book}
                </a>
                <Link href={`/${locale}`} className="btn-ghost">
                  {page.backHome}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
