import type { Locale } from "@/lib/i18n/config";

export type ServiceLandingContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Path after locale, e.g. `/case-studies` or `/#assessment` */
    ctaSecondaryPath: string;
    trustLine: string;
  };
  scope: {
    headline: string;
    items: { tag: string; title: string; body: string }[];
  };
  delivery: {
    headline: string;
    steps: { title: string; body: string }[];
  };
  proof: {
    headline: string;
    body: string;
    caseStudiesCta: string;
  };
  faq: {
    headline: string;
    items: { q: string; a: string }[];
  };
  closing: {
    headline: string;
    body: string;
    cta1: string;
    cta2: string;
  };
};

export function servicePageMetadata(
  locale: Locale,
  slug: string,
  content: ServiceLandingContent,
): {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: "website";
  };
  alternates: {
    canonical: string;
    languages: Record<string, string>;
  };
} {
  const path = `/${locale}/services/${slug}`;
  return {
    title: content.meta.title,
    description: content.meta.description,
    canonical: `https://endedge.co${path}`,
    alternates: {
      canonical: `https://endedge.co${path}`,
      languages: {
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`,
        "x-default": `/en/services/${slug}`,
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
