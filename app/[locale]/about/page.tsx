import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
      <main className="bg-ink pt-24 text-mist">
        <div className="shell pb-16">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {c.hero.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{c.hero.subhead}</p>
        </div>

        <section className="border-t border-slate-line py-16">
          <div className="shell max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {c.story.headline}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-mist/90">
              {c.story.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-line bg-slate-panel/30 py-16">
          <div className="shell">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {c.group.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{c.group.intro}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {c.group.offices.map((office) => (
                <article key={office.name} className="card p-6">
                  <h3 className="font-display text-lg font-semibold text-mist">{office.name}</h3>
                  <p className="mt-2 font-display text-xs uppercase tracking-wider text-orange">
                    {office.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-mist/85">{office.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{c.group.closing}</p>
          </div>
        </section>

        <section className="border-t border-slate-line py-16">
          <div className="shell">
            <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              {c.principles.headline}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {c.principles.items.map((item) => (
                <article key={item.title} className="card p-6">
                  <h3 className="font-display text-base font-semibold text-mist">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-line py-20">
          <div className="shell">
            <div className="card edge-glow mx-auto max-w-3xl px-8 py-12 text-center md:px-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {c.cta.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
                {c.cta.body}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={`mailto:${email}`} className="btn-primary">
                  {c.cta.primary}
                </a>
                <Link href={`/${locale}/case-studies`} className="btn-ghost">
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
