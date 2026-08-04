import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Readiness from "@/components/Readiness";
import { COMPANY } from "@/lib/constants/company";
import { SITES } from "@/lib/constants/sites";
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
  const p = dict.labsPage;
  const path = `/${params.locale}/labs`;
  return {
    title: p.metaTitle,
    description: p.description,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: "/en/labs",
        ar: "/ar/labs",
        "x-default": "/en/labs",
      },
    },
    openGraph: {
      title: `${p.metaTitle} | EndEdge`,
      description: p.description,
      url: `https://endedge.co${path}`,
      siteName: "EndEdge",
      locale: params.locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
      images: [{ url: "https://endedge.co/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.metaTitle} | EndEdge`,
      description: p.description,
      images: ["https://endedge.co/twitter-image"],
    },
  };
}

type LabId = "readiness" | "chat" | "einvoicing" | "vps";

function labHref(id: LabId, locale: Locale): string | null {
  switch (id) {
    case "readiness":
      return `#assessment`;
    case "chat":
      return null;
    case "einvoicing":
      return `/${locale}/services/erp-e-invoicing#checklist`;
    case "vps":
      return `${SITES.portal}/pricing`;
  }
}

export default async function LabsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const page = dict.labsPage;

  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <div className="shell pb-10">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{page.body}</p>
          <p className="mt-3 font-display text-[11px] uppercase tracking-widest text-orange rtl:normal-case rtl:tracking-normal">
            {page.demonstratorNote}
          </p>
        </div>

        <section className="border-t border-slate-line py-12" aria-label={page.eyebrow}>
          <div className="shell grid gap-4 md:grid-cols-2">
            {page.labs.map((lab) => {
              const id = lab.id as LabId;
              const href = labHref(id, locale);
              const status = id === "readiness" ? page.statusLive : page.statusLink;
              const external = id === "vps";
              const cardClass =
                "group flex h-full flex-col border border-slate-line bg-slate-panel/40 p-6 transition-colors hover:border-orange/40";

              const inner = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-[11px] uppercase tracking-widest text-muted rtl:normal-case rtl:tracking-normal">
                      {status}
                    </span>
                    {id === "readiness" ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden />
                    ) : null}
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-mist transition-colors group-hover:text-orange md:text-2xl">
                    {lab.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{lab.body}</p>
                  <span className="mt-6 text-sm text-orange">{lab.cta}</span>
                </>
              );

              if (!href) {
                return (
                  <div key={lab.id} className={cardClass}>
                    {inner}
                  </div>
                );
              }

              if (external) {
                return (
                  <a
                    key={lab.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                );
              }

              // Same-page hash anchors use <a> so the browser scrolls reliably.
              if (href.startsWith("#")) {
                return (
                  <a key={lab.id} href={href} className={cardClass}>
                    {inner}
                  </a>
                );
              }

              return (
                <Link key={lab.id} href={href} className={cardClass}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>

        <Readiness />

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
              <Link href={`/${locale}/services/ai-automation`} className="btn-ghost">
                {page.viewAi}
              </Link>
            </div>
            <Link
              href={`/${locale}`}
              className="mt-6 inline-block text-sm text-muted transition-colors hover:text-orange"
            >
              {page.backHome}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
