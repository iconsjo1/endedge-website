import type { Locale } from "@/lib/i18n/config";
import {
  CLOUD_INFRASTRUCTURE_SLUG,
  licenseCodesForService,
} from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export const CLOUD_SLUG = CLOUD_INFRASTRUCTURE_SLUG;

const codes = licenseCodesForService(CLOUD_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "Cloud Infrastructure & Hosting",
    description:
      "Secure cloud infrastructure and VPS hosting for UAE businesses — managed cloud, monitoring, backups, and UAE data-residency options from EndEdge.",
  },
  hero: {
    eyebrow: "Cloud Infrastructure · Hosting & ops",
    headline: "Infrastructure that keeps your business running.",
    subhead:
      "Production-grade hosting, managed cloud workloads, monitoring, and backups — with UAE-adjacent data residency options and a path to our VPS platform.",
    body:
      "EndEdge operates the stack behind client portals, school platforms, and migration projects. We design for uptime first — then layer automation and AI on top.",
    ctaPrimary: "Discuss your infrastructure",
    ctaSecondary: "View VPS plans",
    ctaSecondaryPath: "https://live.endedge.co/pricing",
    trustLine: "Monitoring · Backups · 24/7 ops · EN/AR support",
  },
  scope: {
    headline: "What we deliver",
    items: [
      {
        tag: "01 · Hosting",
        title: "VPS & managed cloud",
        body: "High-performance virtual servers, container platforms, and managed cloud environments — sized for your workload with clear upgrade paths.",
      },
      {
        tag: "02 · Residency",
        title: "UAE & regional compliance awareness",
        body: "Architecture guidance for data-residency requirements and audit-ready logging — common in government and regulated sectors.",
      },
      {
        tag: "03 · Operations",
        title: "Monitoring, backups & DR",
        body: "24/7 monitoring, automated backups, restore drills, and runbooks. We operate what we host.",
      },
      {
        tag: "04 · Migration",
        title: "Lift-and-shift & modernization",
        body: "Zero-downtime migrations from on-prem VMs to cloud or container platforms — documented with measured uptime outcomes.",
      },
    ],
  },
  delivery: {
    headline: "How we deploy",
    steps: [
      {
        title: "Assess & size",
        body: "Workload profile, compliance constraints, and growth forecast — a right-sized design, not oversold hardware.",
      },
      {
        title: "Build & harden",
        body: "Provisioning, TLS, firewall rules, backup policies, and monitoring baselines before go-live.",
      },
      {
        title: "Operate & scale",
        body: "Ongoing patching, capacity planning, and incident response — optionally bundled with managed IT.",
      },
    ],
  },
  proof: {
    headline: "Documented migration outcomes",
    body: "Case studies include a citizen portal migration serving 20,000+ users with 99.95% post-cutover uptime and school platforms under managed hosting.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you offer self-serve VPS plans?",
        a: "Yes — plans at live.endedge.co/pricing. We also design custom managed infrastructure for larger workloads.",
      },
      {
        q: "Can you host on AWS or Azure?",
        a: "Yes. We architect and operate on major clouds or our platform — scope depends on access and compliance.",
      },
      {
        q: "Is this different from managed IT?",
        a: "Cloud infrastructure is servers and data-processing facilities. Managed IT adds helpdesk, M365, and endpoint support.",
      },
    ],
  },
  closing: {
    headline: "Need infrastructure you can trust?",
    body: "Share your uptime requirements, scale, and compliance context — we'll propose an honest hosting or migration path.",
    cta1: "Discuss your infrastructure",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "البنية التحتية السحابية والاستضافة",
    description:
      "بنية تحتية سحابية آمنة واستضافة VPS للشركات في الإمارات — سحابة مُدارة، مراقبة، نسخ احتياطي، وخيارات إقامة بيانات من EndEdge.",
  },
  hero: {
    eyebrow: "البنية السحابية · الاستضافة والعمليات",
    headline: "بنية تحتية تُبقي أعمالكم تعمل.",
    subhead:
      "استضافة على مستوى الإنتاج، أحمال سحابية مُدارة، مراقبة، ونسخ احتياطي — مع خيارات إقامة بيانات ومسار لمنصة VPS.",
    body:
      "EndEdge تشغّل المكدس وراء بوابات العملاء ومنصات المدارس ومشاريع الترحيل. نصمم لوقت التشغيل أولاً — ثم نضيف الأتمتة والذكاء الاصطناعي.",
    ctaPrimary: "ناقشوا البنية التحتية",
    ctaSecondary: "عرض خطط VPS",
    ctaSecondaryPath: "https://live.endedge.co/pricing",
    trustLine: "مراقبة · نسخ احتياطي · عمليات 24/7 · دعم EN/AR",
  },
  scope: {
    headline: "ما نقدمه",
    items: [
      {
        tag: "01 · الاستضافة",
        title: "VPS وسحابة مُدارة",
        body: "خوادم افتراضية عالية الأداء، منصات حاويات، وبيئات سحابية مُدارة — مُقاسة لحملكم.",
      },
      {
        tag: "02 · الإقامة",
        title: "وعي بالامتثال في الإمارات",
        body: "إرشاد معماري لمتطلبات إقامة البيانات وسجلات جاهزة للتدقيق — شائع في القطاع الحكومي والمنظم.",
      },
      {
        tag: "03 · العمليات",
        title: "مراقبة ونسخ احتياطي",
        body: "مراقبة 24/7، نسخ احتياطي آلي، تمارين استعادة، وrunbooks. نشغّل ما نستضيف.",
      },
      {
        tag: "04 · الترحيل",
        title: "رفع وتحويل",
        body: "ترحيلات دون توقف من VMs محلية إلى سحابة أو حاويات — موثّقة بنتائج وقت تشغيل.",
      },
    ],
  },
  delivery: {
    headline: "كيف ننشر",
    steps: [
      { title: "تقييم وتحجيم", body: "ملف الحمل وقيود الامتثال وتوقعات النمو — تصميم بالحجم المناسب." },
      { title: "بناء وتقوية", body: "تجهيز، TLS، جدار ناري، نسخ احتياطي، ومراقبة قبل الإطلاق." },
      { title: "تشغيل وتوسع", body: "ترقيع، تخطيط سعة، واستجابة للحوادث — اختيارياً مع IT مُدارة." },
    ],
  },
  proof: {
    headline: "نتائج ترحيل موثّقة",
    body: "دراسات حالة تشمل بوابة مواطنين بـ 20,000+ مستخدم بتوافر 99.95% ومنصات مدارس تحت استضافة مُدارة.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      { q: "هل تقدّمون خطط VPS؟", a: "نعم — على live.endedge.co/pricing، بالإضافة إلى بنية مُدارة مخصصة." },
      { q: "هل تستضيفون على AWS أو Azure؟", a: "نعم — حسب الوصول والامتثال ونطاق العمل." },
      { q: "كيف يختلف عن IT المُدارة؟", a: "البنية السحابية خوادم ومرافق معالجة بيانات؛ IT المُدارة تضيف مكتب مساعدة وM365." },
    ],
  },
  closing: {
    headline: "تحتاجون بنية تحتية تثقون بها؟",
    body: "شاركوا متطلبات وقت التشغيل والنطاق وسياق الامتثال — سنقترح مساراً صادقاً.",
    cta1: "ناقشوا البنية التحتية",
    cta2: "راسلوا الفريق",
  },
};

export function getCloudInfrastructureContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
