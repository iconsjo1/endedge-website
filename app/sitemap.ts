import type { MetadataRoute } from "next";
import { ERP_SLUG } from "@/lib/content/erp-e-invoicing";
import { WEB_MOBILE_SLUG } from "@/lib/content/web-mobile-development";
import { locales } from "@/lib/i18n/config";

const BASE = "https://endedge.co";

const PATHS = [
  "",
  "/about",
  "/case-studies",
  "/privacy",
  "/terms",
  `/services/${ERP_SLUG}`,
  `/services/${WEB_MOBILE_SLUG}`,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? "weekly" : ("monthly" as const),
      priority: path === "" ? 1 : path.includes("services") ? 0.9 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alt) => [alt, `${BASE}/${alt}${path}`]),
        ),
      },
    })),
  );
}
