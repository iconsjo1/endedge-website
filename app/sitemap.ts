import type { MetadataRoute } from "next";
import { AI_AUTOMATION_SLUG } from "@/lib/content/ai-automation";
import { CLOUD_SLUG } from "@/lib/content/cloud-infrastructure";
import { ENERGY_SYSTEMS_SLUG } from "@/lib/content/energy-systems";
import { ERP_SLUG } from "@/lib/content/erp-e-invoicing";
import { getInsightSlugs } from "@/lib/content/insights";
import { IT_CONSULTANCY_SLUG } from "@/lib/content/it-consultancy";
import { MANAGED_IT_SLUG } from "@/lib/content/managed-it";
import { SOFTWARE_TRAINING_SLUG } from "@/lib/content/software-training";
import { TECHNOLOGY_SUPPLY_SLUG } from "@/lib/content/technology-supply";
import { WEB_MOBILE_SLUG } from "@/lib/content/web-mobile-development";
import { locales } from "@/lib/i18n/config";

const BASE = "https://endedge.co";

const PATHS = [
  "",
  "/about",
  "/case-studies",
  "/insights",
  ...getInsightSlugs().map((slug) => `/insights/${slug}`),
  "/labs",

  "/privacy",
  "/terms",
  `/services/${ERP_SLUG}`,
  `/services/${WEB_MOBILE_SLUG}`,
  `/services/${MANAGED_IT_SLUG}`,
  `/services/${AI_AUTOMATION_SLUG}`,
  `/services/${CLOUD_SLUG}`,
  `/services/${IT_CONSULTANCY_SLUG}`,
  `/services/${TECHNOLOGY_SUPPLY_SLUG}`,
  `/services/${ENERGY_SYSTEMS_SLUG}`,
  `/services/${SOFTWARE_TRAINING_SLUG}`,
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
