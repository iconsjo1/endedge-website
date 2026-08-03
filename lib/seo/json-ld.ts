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
    ...(COMPANY.phones.length
      ? {
          telephone: COMPANY.phones.map((p) => p.replace(/[\s()-]/g, "")),
        }
      : {}),
    description:
      locale === "ar"
        ? "EndEdge — شريك تقني مؤسسي في دبي: بنية تحتية، وتقنية معلومات مُدارة، وذكاء اصطناعي، وامتثال الفوترة الإلكترونية في الإمارات."
        : "EndEdge — enterprise technology partner in Dubai: infrastructure, managed IT, AI, and UAE e-invoicing compliance.",
    address,
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
    },
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
