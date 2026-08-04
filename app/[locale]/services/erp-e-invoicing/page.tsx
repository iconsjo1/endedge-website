import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StackMark from "@/components/ui/StackMark";
import ChecklistLeadMagnet from "@/components/services/ChecklistLeadMagnet";
import { COMPANY } from "@/lib/constants/company";
import { ERP_SLUG, getErpPageContent } from "@/lib/content/erp-e-invoicing";
import { serviceLandingJsonLd } from "@/lib/seo/json-ld";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale as Locale;
  const content = getErpPageContent(locale);
  const path = `/${locale}/services/${ERP_SLUG}`;
  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: `/en/services/${ERP_SLUG}`,
        ar: `/ar/services/${ERP_SLUG}`,
        "x-default": `/en/services/${ERP_SLUG}`,
      },
    },
    openGraph: {
      title: `${content.meta.title} | EndEdge`,
      description: content.meta.description,
      url: `https://endedge.co${path}`,
      siteName: "EndEdge",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
      images: [{ url: "https://endedge.co/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.meta.title} | EndEdge`,
      description: content.meta.description,
      images: ["https://endedge.co/twitter-image"],
    },
  };
}
export default function ErpEInvoicingPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getErpPageContent(locale);
  return (
    <>
      {" "}
      <JsonLd
        data={serviceLandingJsonLd(locale, ERP_SLUG, {
          meta: c.meta,
          faq: c.faq,
        })}
      />{" "}
      <Nav />{" "}
      <main className="bg-ink pt-24 text-mist">
        {" "}
        {/* Hero */}{" "}
        <section className="shell pb-16" data-edge-section>
          {" "}
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {" "}
            <div>
              {" "}
              <p className="eyebrow">{c.hero.eyebrow}</p>{" "}
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {" "}
                {c.hero.headline}{" "}
              </h1>{" "}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
                {c.hero.subhead}
              </p>{" "}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist/90">
                {" "}
                {c.hero.partnerLine}{" "}
              </p>{" "}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {" "}
                <a href={`#${c.lead.id}`} className="btn-primary">
                  {" "}
                  {c.hero.ctaPrimary}{" "}
                </a>{" "}
                <a href={`mailto:${COMPANY.email}`} className="btn-ghost">
                  {" "}
                  {c.hero.ctaSecondary}{" "}
                </a>{" "}
              </div>{" "}
              <p className="mt-6 font-display text-xs uppercase tracking-widest text-muted">
                {" "}
                {c.hero.trustLine}{" "}
              </p>{" "}
            </div>{" "}
            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              {" "}
              <StackMark
                className="w-full"
                labels
                rtl={locale === "ar"}
                activeThrough={1}
                highlightIndex={1}
                idPrefix="erp"
              />{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* ASP vs partner */}{" "}
        <section className="border-y border-slate-line bg-slate-panel py-16">
          {" "}
          <div className="shell">
            {" "}
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight">
              {" "}
              {c.explainer.headline}{" "}
            </h2>{" "}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {" "}
              {c.explainer.intro}{" "}
            </p>{" "}
            <div className="mt-10 overflow-x-auto">
              {" "}
              <table className="w-full min-w-[640px] border-collapse text-sm">
                {" "}
                <thead>
                  {" "}
                  <tr className="border-b border-slate-line text-start">
                    {" "}
                    <th className="py-3 pe-4 font-display text-xs uppercase tracking-widest text-muted" />{" "}
                    <th className="py-3 pe-4 font-display text-xs uppercase tracking-widest text-orange">
                      {" "}
                      {c.explainer.columns.asp}{" "}
                    </th>{" "}
                    <th className="py-3 font-display text-xs uppercase tracking-widest text-orange">
                      {" "}
                      {c.explainer.columns.partner}{" "}
                    </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {c.explainer.rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-slate-line/70 align-top"
                    >
                      {" "}
                      <th className="py-4 pe-4 text-start font-display text-xs uppercase tracking-widest text-muted">
                        {" "}
                        {row.label}{" "}
                      </th>{" "}
                      <td className="py-4 pe-4 text-mist/85">{row.asp}</td>{" "}
                      <td className="py-4 text-mist/85">{row.partner}</td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
            <p className="mt-8 max-w-2xl font-display text-base font-medium text-mist">
              {" "}
              {c.explainer.bottomLine}{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* Scope */}{" "}
        <section className="shell py-16">
          {" "}
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            {c.scope.headline}
          </h2>{" "}
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {" "}
            {c.scope.items.map((item) => (
              <li
                key={item.tag}
                className="rounded-xl border border-slate-line bg-slate-panel p-6"
              >
                {" "}
                <span className="font-display text-xs text-orange">
                  {item.tag}
                </span>{" "}
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {item.title}
                </h3>{" "}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>{" "}
              </li>
            ))}{" "}
          </ol>{" "}
        </section>{" "}
        {/* Proof */}{" "}
        <section className="border-y border-slate-line bg-paper py-16 text-graphite">
          {" "}
          <div className="shell max-w-3xl">
            {" "}
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {" "}
              {c.proof.headline}{" "}
            </h2>{" "}
            <p className="mt-5 text-base leading-relaxed text-stone">
              {c.proof.body}
            </p>{" "}
            <p className="mt-4 text-base leading-relaxed text-stone">
              {c.proof.smartErp}
            </p>{" "}
            <p className="mt-4 text-base leading-relaxed text-stone">
              {" "}
              {c.proof.integrity}{" "}
              <Link
                href={`/${locale}/case-studies`}
                className="font-semibold text-orange hover:text-navy"
              >
                {" "}
                {c.proof.caseStudiesCta}{" "}
              </Link>{" "}
            </p>{" "}
          </div>{" "}
        </section>{" "}
        {/* Lead magnet */}{" "}
        <section id={c.lead.id} className="shell scroll-mt-28 py-16">
          {" "}
          <div className="max-w-2xl">
            {" "}
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {" "}
              {c.lead.headline}{" "}
            </h2>{" "}
            <p className="mt-4 text-base leading-relaxed text-muted">
              {c.lead.body}
            </p>{" "}
          </div>{" "}
          <div className="mt-8 max-w-xl rounded-xl border border-slate-line bg-slate-panel p-6 md:p-8">
            {" "}
            <ChecklistLeadMagnet
              locale={locale}
              lead={c.lead}
              checklist={c.checklist}
              consultationEmail={COMPANY.email}
            />{" "}
          </div>{" "}
        </section>{" "}
        {/* FAQ */}{" "}
        <section className="border-t border-slate-line bg-slate-panel py-16">
          {" "}
          <div className="shell max-w-3xl">
            {" "}
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {c.faq.headline}
            </h2>{" "}
            <dl className="mt-10 space-y-8">
              {" "}
              {c.faq.items.map((item) => (
                <div key={item.q}>
                  {" "}
                  <dt className="font-display text-lg font-semibold text-mist">
                    {item.q}
                  </dt>{" "}
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {item.a}
                  </dd>{" "}
                </div>
              ))}{" "}
            </dl>{" "}
          </div>{" "}
        </section>{" "}
        {/* Closing */}{" "}
        <section className="shell py-16">
          {" "}
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight">
            {" "}
            {c.closing.headline}{" "}
          </h2>{" "}
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {c.closing.body}
          </p>{" "}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {" "}
            <a href={`#${c.lead.id}`} className="btn-primary">
              {" "}
              {c.closing.cta1}{" "}
            </a>{" "}
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost">
              {" "}
              {c.closing.cta2}{" "}
            </a>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <Footer />{" "}
    </>
  );
}
