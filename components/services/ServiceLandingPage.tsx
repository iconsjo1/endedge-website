import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants/company";
import type { ServiceLandingContent } from "@/lib/content/service-landing";
import type { Locale } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  content: ServiceLandingContent;
};

export default function ServiceLandingPage({ locale, content: c }: Props) {
  const secondaryHref = `/${locale}${c.hero.ctaSecondaryPath}`;

  return (
    <>
      <Nav />
      <main className="bg-ink pt-24 text-mist">
        <section className="shell pb-16">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {c.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{c.hero.subhead}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist/90">{c.hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${COMPANY.email}`} className="btn-primary">
              {c.hero.ctaPrimary}
            </a>
            <Link href={secondaryHref} className="btn-ghost">
              {c.hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-6 font-display text-xs uppercase tracking-widest text-muted">
            {c.hero.trustLine}
          </p>
        </section>

        <section className="shell py-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">{c.scope.headline}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {c.scope.items.map((item) => (
              <li
                key={item.tag}
                className="rounded-xl border border-slate-line bg-slate-panel p-6"
              >
                <span className="font-display text-xs text-orange">{item.tag}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-slate-line bg-slate-panel py-16">
          <div className="shell">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {c.delivery.headline}
            </h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {c.delivery.steps.map((step, index) => (
                <li key={step.title} className="card p-6">
                  <span className="font-display text-xs font-semibold text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-slate-line bg-paper py-16 text-graphite">
          <div className="shell max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              {c.proof.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone">{c.proof.body}</p>
            <Link
              href={`/${locale}/case-studies`}
              className="mt-6 inline-flex font-display text-sm font-semibold text-orange hover:text-navy"
            >
              {c.proof.caseStudiesCta}
            </Link>
          </div>
        </section>

        <section className="border-b border-slate-line py-16">
          <div className="shell max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight">{c.faq.headline}</h2>
            <dl className="mt-10 space-y-8">
              {c.faq.items.map((item) => (
                <div key={item.q}>
                  <dt className="font-display text-lg font-semibold text-mist">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="shell py-16">
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight">
            {c.closing.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{c.closing.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${COMPANY.email}`} className="btn-primary">
              {c.closing.cta1}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost">
              {c.closing.cta2}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
