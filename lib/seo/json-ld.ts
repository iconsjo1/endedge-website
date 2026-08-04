import type { Locale } from "@/lib/i18n/config";
import { COMPANY } from "@/lib/constants/company";
import type { InsightArticle } from "@/lib/content/insights";

export function organizationJsonLd(locale: Locale) {
  const address = COMPANY.streetAddress
    ? {
        "@type": "PostalAddress",
        streetAddress: COMPANY.streetAddress,
        addressLocality: "Dubai",
        addressCountry: "AE",
      }
    : {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      };

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.website,
    email: COMPANY.email,
    logo: {
      "@type": "ImageObject",
      url: `${COMPANY.website}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${COMPANY.website}/opengraph-image`,
    ...(COMPANY.phones.length
      ? {
          telephone: COMPANY.phones.map((p) => p.replace(/[\s()-]/g, "")),
          contactPoint: COMPANY.phones.map((p) => ({
            "@type": "ContactPoint",
            telephone: p.replace(/[\s()-]/g, ""),
            contactType: "sales",
            areaServed: ["AE", "JO", "IQ", "GB"],
            availableLanguage: ["en", "ar"],
          })),
        }
      : {}),
    description:
      locale === "ar"
        ? "EndEdge — شريك تقني مؤسسي في دبي: بنية تحتية، وتقنية معلومات مُدارة، وذكاء اصطناعي، وامتثال الفوترة الإلكترونية في الإمارات."
        : "EndEdge — enterprise technology partner in Dubai: infrastructure, managed IT, AI, and UAE e-invoicing compliance.",
    address,
    sameAs: [COMPANY.linkedin],
    areaServed: ["AE", "GCC", "MENA"],
    knowsLanguage: ["en", "ar"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EndEdge",
    url: COMPANY.website,
    inLanguage: ["en", "ar"],
  };
}

/** BlogPosting + optional FAQPage for insight articles (SEO + GEO). */
export function insightArticleJsonLd(
  locale: Locale,
  article: InsightArticle,
): Record<string, unknown>[] {
  const path = `/${locale}/insights/${article.slug}`;
  const url = `${COMPANY.website}${path}`;
  const inLanguage = locale === "ar" ? "ar-AE" : "en-AE";
  const published = article.publishedAt ?? "2026-01-15";
  const modified = article.updatedAt ?? article.publishedAt ?? published;

  const blogPosting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.intro,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: published,
    dateModified: modified,
    inLanguage,
    isAccessibleForFree: true,
    articleSection: article.category,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.website}/icon-512.png`,
      },
    },
    image: [`${COMPANY.website}/opengraph-image`],
    about: {
      "@type": "Thing",
      name: article.category,
    },
    keywords: [
      article.category,
      "EndEdge",
      "UAE",
      "GCC",
      locale === "ar" ? "دبي" : "Dubai",
    ].join(", "),
    ...(article.keyTakeaways?.length
      ? {
          abstract: article.keyTakeaways.join(" "),
        }
      : {}),
  };

  const breadcrumb: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "EndEdge",
        item: `${COMPANY.website}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "ar" ? "رؤى" : "Insights",
        item: `${COMPANY.website}/${locale}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  const nodes: Record<string, unknown>[] = [blogPosting, breadcrumb];

  if (article.faq?.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return nodes;
}

/** Service + FAQPage for service landings (rich results). */
export function serviceLandingJsonLd(
  locale: Locale,
  slug: string,
  content: {
    meta: { title: string; description: string };
    faq: { items: { q: string; a: string }[] };
  },
): Record<string, unknown>[] {
  const path = `/${locale}/services/${slug}`;
  const url = `${COMPANY.website}${path}`;

  const service: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.meta.title,
    description: content.meta.description,
    url,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    areaServed: ["AE", "GCC", "MENA"],
    inLanguage: locale === "ar" ? "ar-AE" : "en-AE",
  };

  const breadcrumb: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "EndEdge",
        item: `${COMPANY.website}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.meta.title,
        item: url,
      },
    ],
  };

  const nodes: Record<string, unknown>[] = [service, breadcrumb];

  if (content.faq.items.length) {
    nodes.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  return nodes;
}
