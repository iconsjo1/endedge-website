/** SPC Free Zone trade license 4423081.01 — Endedge FZE (verbatim activity wording). */

export type LicenseActivity = {
  code: string;
  en: string;
  ar: string;
  serviceSlug: string;
};

export const CLOUD_INFRASTRUCTURE_SLUG = "cloud-infrastructure";
export const IT_CONSULTANCY_SLUG = "it-consultancy";
export const TECHNOLOGY_SUPPLY_SLUG = "technology-supply";
export const ENERGY_SYSTEMS_SLUG = "energy-systems";
export const SOFTWARE_TRAINING_SLUG = "software-training";

export const LICENSE_AUTHORITY = {
  en: "Sharjah Publishing City Free Zone Authority",
  ar: "هيئة منطقة حرة — مدينة الشارقة للنشر",
} as const;

export const LICENSE_ACTIVITIES: LicenseActivity[] = [
  {
    code: "4651",
    en: "Wholesale of computers, computer peripheral equipment and software",
    ar: "بيع الحواسيب والمعدات الطرفية للحواسيب والبرمجيات بالجملة",
    serviceSlug: "technology-supply",
  },
  {
    code: "4651.02",
    en: "Wholesale of software",
    ar: "بيع البرمجيات بالجملة",
    serviceSlug: "technology-supply",
  },
  {
    code: "4651.10",
    en: "Wholesale trading in alternative energy equipment and accessories",
    ar: "تجارة معدات الطاقة البديلة ولوازمها بالجملة",
    serviceSlug: "energy-systems",
  },
  {
    code: "4651.18",
    en: "Wholesale of Laboratory and Factory Tools and Outfit Trading",
    ar: "تجارة أدوات المختبرات والمعامل ومستلزماتها بالجملة",
    serviceSlug: "technology-supply",
  },
  {
    code: "4773.16",
    en: "Solar Energy Systems & Components Trading",
    ar: "تجارة أنظمة الطاقة الشمسية ومكوناتها",
    serviceSlug: "energy-systems",
  },
  {
    code: "6201",
    en: "Computer programming activities",
    ar: "أنشطة البرمجة الحاسوبية",
    serviceSlug: "web-mobile-development",
  },
  {
    code: "6201.07",
    en: "Computer Systems and Software Designing",
    ar: "تصميم نظم وبرامج الحاسب الآلي",
    serviceSlug: "web-mobile-development",
  },
  {
    code: "6201.11",
    en: "Education and Training Computer Software",
    ar: "التعليم والتدريب على برمجيات الحاسوب",
    serviceSlug: "software-training",
  },
  {
    code: "6202.01",
    en: "Planning and designing of computer systems that integrate computer hardware, software and communication technologies",
    ar: "تخطيط وتصميم نظم الحاسوب التي تُستخدم في تكامل تكنولوجيات المعدات الحاسوبية والبرمجيات والاتصالات",
    serviceSlug: "it-consultancy",
  },
  {
    code: "6202.02",
    en: "Provision of on-site management and operation of clients' computer systems and/or data processing facilities, as well as related support services",
    ar: "توفير إدارة وتشغيل أنظمة الكمبيوتر و/أو مرافق معالجة البيانات الخاصة بالعملاء في الموقع، بالإضافة إلى خدمات الدعم ذات الصلة",
    serviceSlug: "managed-it",
  },
  {
    code: "6209.22",
    en: "IT Consultancy, IT Services",
    ar: "استشارات تكنولوجيا المعلومات، خدمات تكنولوجيا المعلومات",
    serviceSlug: "it-consultancy",
  },
];

/** 6202.02 also covers cloud / data-processing facilities. */
export const CLOUD_LICENSE_CODES = ["6202.02"] as const;

export function activitiesForService(slug: string): LicenseActivity[] {
  return LICENSE_ACTIVITIES.filter((a) => a.serviceSlug === slug);
}

export function licenseCodesForService(slug: string): string[] {
  const codes = activitiesForService(slug).map((a) => a.code);
  if (slug === CLOUD_INFRASTRUCTURE_SLUG) {
    return Array.from(new Set([...codes, ...CLOUD_LICENSE_CODES]));
  }
  return codes;
}
