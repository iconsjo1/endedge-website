import type { Locale } from "@/lib/i18n/config";
import { COMPANY } from "@/lib/constants/company";

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
