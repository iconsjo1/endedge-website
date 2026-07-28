import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LicensedActivities from "@/components/about/LicensedActivities";
import { aboutEmail, getAboutContent } from "@/lib/content/about";
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
  const content = getAboutContent(locale);
  const path = `/${locale}/about`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: "/en/about",
        ar: "/ar/about",
        "x-default": "/en/about",
      },
    },
    openGraph: {
      title: `${content.meta.title} | EndEdge`,
      description: content.meta.description,
      url: `https://endedge.co${path}`,
      siteName: "EndEdge",
      locale: locale === "ar" ? "ar_AE" : "en_AE",
      type: "website",
    },
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const c = getAboutContent(locale);
  const email = aboutEmail();

  return (
    <>
      <Nav />
      <main className="bg-ink text-mist">
        {/* Hero + video */}
        <section className="relative overflow-hidden pt-24">
          <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" aria-hidden />
          <div className="shell relative grid items-end gap-10 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-20">
            <div className="max-w-xl">
              <p className="eyebrow">{c.hero.eyebrow}</p>
              <h1
                className={`mt-4 font-display font-semibold tracking-tight ${
                  locale === "ar"
                    ? "text-3xl leading-[1.25] sm:text-4xl md:text-[2.75rem]"
                    : "text-4xl leading-[1.1] md:text-5xl"
                }`}
              >
                {c.hero.headline}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{c.hero.subhead}</p>
            </div>

            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-orange/10 blur-2xl md:-inset-4"
                aria-hidden
              />
              <div className="edge-glow relative overflow-hidden rounded-xl border border-slate-line bg-slate-panel">
                <video
                  className="aspect-video h-auto w-full object-cover"
                  src="/videos/endedge-about.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  aria-label={c.video.ariaLabel}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story — light band for contrast */}
        <section className="border-t border-slate-line bg-paper py-20 text-graphite">
          <div className="shell grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start md:gap-16">
            <div>
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-orange rtl:normal-case rtl:tracking-normal">
                01
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {c.story.headline}
              </h2>
            </div>
            <div className="space-y-5 border-s-2 border-orange/70 ps-6 text-base leading-relaxed text-stone md:ps-8">
              {c.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Group */}
        <section className="border-t border-slate-line py-20">
          <div className="shell">
            <div className="max-w-2xl">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-orange rtl:normal-case rtl:tracking-normal">
                02
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {c.group.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{c.group.intro}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {c.group.offices.map((office, index) => (
                <article
                  key={office.name}
                  className="relative overflow-hidden rounded-xl border border-slate-line bg-slate-panel p-7 md:p-8"
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 start-0 w-1 bg-orange"
                    aria-hidden
                  />
                  <p className="font-display text-[11px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-mist">{office.name}</h3>
                  <p className="mt-2 font-display text-xs font-semibold uppercase tracking-wider text-orange rtl:normal-case rtl:tracking-normal">
                    {office.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-mist/85">{office.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 max-w-2xl border-t border-slate-line pt-8 text-sm leading-relaxed text-muted">
              {c.group.closing}
            </p>
          </div>
        </section>

        {/* Licensed activities */}
        <section
          id="licensed-activities"
          className="border-t border-slate-line bg-slate-panel/40 py-20"
        >
          <div className="shell max-w-3xl">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-orange rtl:normal-case rtl:tracking-normal">
              03
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {c.license.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{c.license.intro}</p>
            <LicensedActivities locale={locale} labels={{ serviceLink: c.license.serviceLink }} />
            <p className="mt-6 text-xs leading-relaxed text-muted">{c.license.authorityNote}</p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-slate-line py-20">
          <div className="shell">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-orange rtl:normal-case rtl:tracking-normal">
              04
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {c.principles.headline}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
              {c.principles.items.map((item, index) => (
                <article key={item.title} className="border-t border-orange/40 pt-6">
                  <span className="font-display text-xs font-semibold text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-mist">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-line bg-paper py-20 text-graphite">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {c.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone">
                {c.cta.body}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${email}`} className="btn-primary">
                  {c.cta.primary}
                </a>
                <Link
                  href={`/${locale}/case-studies`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-graphite/20 px-5 py-3 font-sans text-sm font-medium text-graphite transition-colors hover:border-orange hover:text-orange"
                >
                  {c.cta.secondary}
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
