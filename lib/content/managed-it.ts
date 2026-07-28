import type { Locale } from "@/lib/i18n/config";
import { licenseCodesForService } from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export const MANAGED_IT_SLUG = "managed-it";

const codes = licenseCodesForService(MANAGED_IT_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "Managed IT Services",
    description:
      "Managed IT for UAE businesses — proactive support, Microsoft 365, security hardening, monitoring, and 24/7 ops from EndEdge without building an in-house IT team.",
  },
  hero: {
    eyebrow: "Managed IT · Day-to-day operations",
    headline: "IT that just works — so your team can focus on the business.",
    subhead:
      "We run your day-to-day technology: endpoints, cloud workloads, Microsoft 365, patching, monitoring, and incident response — with predictable cost and a single number to call.",
    body:
      "EndEdge combines Dubai client presence with deep delivery from the Icon Software group. We operate production systems for education, healthcare, government-adjacent clients, and growing SMEs — not just break-fix tickets.",
    ctaPrimary: "Request an IT assessment",
    ctaSecondary: "View case studies",
    ctaSecondaryPath: "/case-studies",
    trustLine: "Proactive ops · Security-first · EN/AR support · Optional bundled hosting",
  },
  scope: {
    headline: "What's included",
    items: [
      {
        tag: "01 · Support",
        title: "Helpdesk & endpoint management",
        body: "User support, device provisioning, account lifecycle, and remote troubleshooting — with clear SLAs and ticket visibility your leadership can track.",
      },
      {
        tag: "02 · Microsoft 365",
        title: "Modern workplace & collaboration",
        body: "Migration, tenant hardening, Exchange/Teams/SharePoint configuration, conditional access, and ongoing admin — so email and files stay secure and available.",
      },
      {
        tag: "03 · Security",
        title: "Hardening & backup",
        body: "Patch management, endpoint protection, MFA enforcement, backup verification, and restore drills — the basics audit teams ask for, done consistently.",
      },
      {
        tag: "04 · Operations",
        title: "Monitoring & incident response",
        body: "24/7 monitoring for servers, sites, and critical apps; alerting, runbooks, and on-call response. We can operate workloads on our VPS/cloud stack or yours.",
      },
    ],
  },
  delivery: {
    headline: "How we onboard",
    steps: [
      {
        title: "Baseline audit",
        body: "Inventory devices, accounts, backups, and security gaps. You get a plain-language report — no shelfware recommendations.",
      },
      {
        title: "Stabilize & secure",
        body: "Fix critical gaps first: backups, MFA, patching, monitoring. Then roll out standardized builds and support processes.",
      },
      {
        title: "Run & improve",
        body: "Monthly reporting, capacity planning, and continuous hardening — so IT stops being a surprise expense.",
      },
    ],
  },
  proof: {
    headline: "We operate what we build",
    body: "Our case studies include school platforms with 22,000+ users under managed hosting, government portal migrations with 99.95% post-cutover uptime, and multi-site workplace rollouts — documented stacks and outcomes, not marketing claims.",
    caseStudiesCta: "Read anonymized case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you replace our entire IT team?",
        a: "We can be your full IT function for SMEs, or augment an internal team on security, cloud, or after-hours coverage. Scope is defined in the agreement — no hidden tiers.",
      },
      {
        q: "Can you manage servers we already host elsewhere?",
        a: "Yes — AWS, Azure, on-prem, or our VPS platform. We need monitoring access and clear change windows; we will tell you if the environment is too opaque to support responsibly.",
      },
      {
        q: "Is support bilingual?",
        a: "Yes — English and Arabic for user-facing support and documentation where required.",
      },
      {
        q: "How is this different from VPS hosting?",
        a: "Hosting is infrastructure. Managed IT is people and process: helpdesk, M365, patching, security, and incident ownership. Many clients bundle both under EndEdge.",
      },
    ],
  },
  closing: {
    headline: "Ready to stop firefighting IT?",
    body: "Tell us your user count, stack, and pain points — we'll propose a managed scope with honest boundaries on what we can run well.",
    cta1: "Request an IT assessment",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "خدمات تقنية المعلومات المُدارة",
    description:
      "تقنية معلومات مُدارة للشركات في الإمارات — دعم استباقي، Microsoft 365، تعزيز أمن، مراقبة، وعمليات على مدار الساعة من EndEdge دون بناء فريق IT داخلي.",
  },
  hero: {
    eyebrow: "تقنية معلومات مُدارة · العمليات اليومية",
    headline: "تقنية معلومات تعمل بسلاسة — ليركّز فريقكم على الأعمال.",
    subhead:
      "نشغّل تقنيتكم اليومية: نقاط النهاية، أحمال السحابة، Microsoft 365، الترقيع، المراقبة، والاستجابة للحوادث — بتكلفة متوقعة ورقم واحد للاتصال.",
    body:
      "EndEdge تجمع حضوراً في دبي مع تسليماً عميقاً من مجموعة Icon Software. نشغّل أنظمة إنتاج للتعليم والرعاية الصحية وجهات قريبة من الحكومة والشركات المتوسطة — لا مجرد تذاكر إصلاح.",
    ctaPrimary: "اطلبوا تقييم IT",
    ctaSecondary: "عرض دراسات الحالة",
    ctaSecondaryPath: "/case-studies",
    trustLine: "عمليات استباقية · أمن أولاً · دعم EN/AR · استضافة اختيارية ضمن الحزمة",
  },
  scope: {
    headline: "ما الذي يشمله العرض",
    items: [
      {
        tag: "01 · الدعم",
        title: "مكتب مساعدة وإدارة نقاط النهاية",
        body: "دعم المستخدمين، تجهيز الأجهزة، دورة حياة الحسابات، واستكشاف الأعطال عن بُعد — مع اتفاقيات مستوى خدمة واضحة ورؤية للتذاكر تتابعها القيادة.",
      },
      {
        tag: "02 · Microsoft 365",
        title: "بيئة عمل حديثة وتعاون",
        body: "ترحيل، تقوية المستأجر، Exchange/Teams/SharePoint، وصول مشروط، وإدارة مستمرة — ليبقى البريد والملفات آمناً ومتاحاً.",
      },
      {
        tag: "03 · الأمن",
        title: "تقوية ونسخ احتياطي",
        body: "إدارة الترقيع، حماية نقاط النهاية، فرض MFA، التحقق من النسخ الاحتياطي، وتمارين الاستعادة — الأساس الذي يسأل عنه التدقيق، بانتظام.",
      },
      {
        tag: "04 · العمليات",
        title: "مراقبة واستجابة للحوادث",
        body: "مراقبة على مدار الساعة للخوادم والمواقع والتطبيقات الحرجة؛ تنبيهات، runbooks، ونداء طوارئ. يمكننا تشغيل الأحمال على VPS/سحابتنا أو على بنيتكم.",
      },
    ],
  },
  delivery: {
    headline: "كيف نبدأ",
    steps: [
      {
        title: "تدقيق خط الأساس",
        body: "جرد الأجهزة والحسابات والنسخ الاحتياطي وفجوات الأمن. تحصلون على تقرير بلغة واضحة — دون توصيات للرف.",
      },
      {
        title: "استقرار وأمن",
        body: "إغلاق الفجوات الحرجة أولاً: نسخ احتياطي، MFA، ترقيع، مراقبة. ثم builds موحّدة وعمليات دعم.",
      },
      {
        title: "تشغيل وتحسين",
        body: "تقارير شهرية، تخطيط سعة، وتقوية مستمرة — لتتوقف IT عن أن تكون مصروفاً مفاجئاً.",
      },
    ],
  },
  proof: {
    headline: "نشغّل ما نبنيه",
    body: "تشمل دراسات الحالة منصات مدارس بـ 22,000+ مستخدم تحت استضافة مُدارة، وترحيلات بوابات حكومية بتوافر 99.95% بعد cutover، ونشر بيئات عمل متعددة المواقع — مكدسات ونتائج موثّقة.",
    caseStudiesCta: "اقرأوا دراسات الحالة مجهولة الهوية ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل تستبدلون فريق IT بالكامل؟",
        a: "يمكننا أن نكون IT كاملاً للشركات المتوسطة، أو نُكمّل فريقاً داخلياً في الأمن أو السحابة أو خارج ساعات العمل. النطاق في الاتفاقية — دون مستويات مخفية.",
      },
      {
        q: "هل تديرون خوادم مستضافة في مكان آخر؟",
        a: "نعم — AWS أو Azure أو on-prem أو منصة VPS لدينا. نحتاج وصول مراقبة ونوافذ تغيير واضحة؛ سنقول بصراحة إن كان البيئة غير شفافة للدعم.",
      },
      {
        q: "هل الدعم ثنائي اللغة؟",
        a: "نعم — إنجليزية وعربية للدعم ووثائق المستخدم حيث يلزم.",
      },
      {
        q: "كيف يختلف هذا عن استضافة VPS؟",
        a: "الاستضافة بنية تحتية. IT المُدارة أشخاص وعمليات: مكتب مساعدة وM365 وترقيع وأمن وملكية حوادث. كثير من العملاء يجمعون الاثنين مع EndEdge.",
      },
    ],
  },
  closing: {
    headline: "مستعدون للتوقف عن إطفاء حرائق IT؟",
    body: "أخبرونا بعدد المستخدمين والمكدس ونقاط الألم — سنقترح نطاقاً مُداراً بحدود صادقة لما نستطيع تشغيله جيداً.",
    cta1: "اطلبوا تقييم IT",
    cta2: "راسلوا الفريق",
  },
};

export function getManagedItContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
