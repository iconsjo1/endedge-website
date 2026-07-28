import type { Locale } from "@/lib/i18n/config";
import {
  SOFTWARE_TRAINING_SLUG,
  licenseCodesForService,
} from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export { SOFTWARE_TRAINING_SLUG };

const codes = licenseCodesForService(SOFTWARE_TRAINING_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "Software Training & Enablement",
    description:
      "End-user and administrator training for deployed software — ERP, Microsoft 365, and custom applications — from EndEdge Dubai with Icon Software delivery teams.",
  },
  hero: {
    eyebrow: "Software Training · User enablement",
    headline: "Training that matches what you actually deployed.",
    subhead:
      "Hands-on sessions for end users and admins on ERP, Microsoft 365, portals, and custom apps — built from your workflows, not generic slide decks.",
    body:
      "EndEdge trains on systems we implement and operate — and on third-party platforms your teams must adopt. Icon Software in Amman backs curriculum design and technical depth; Dubai coordinates scheduling, language, and onsite or remote delivery across the UAE.",
    ctaPrimary: "Plan a training programme",
    ctaSecondary: "About EndEdge",
    ctaSecondaryPath: "/about",
    trustLine: "Role-based · EN/AR materials · Admin + end-user · Post-go-live",
  },
  scope: {
    headline: "What we deliver",
    items: [
      {
        tag: "01 · End users",
        title: "End-user enablement",
        body: "Task-based training for daily workflows — ERP transactions, portal self-service, approvals, and reporting — with quick-reference guides your staff will keep using.",
      },
      {
        tag: "02 · Admins",
        title: "Administrator & power-user training",
        body: "Tenant admin, user lifecycle, security baselines, backup awareness, and configuration boundaries — so internal teams can run day-two ops safely.",
      },
      {
        tag: "03 · ERP & M365",
        title: "ERP, e-invoicing & Microsoft 365",
        body: "Go-live and steady-state training on finance, inventory, Teams, SharePoint, and Exchange — aligned to how your organisation actually structured sites and roles.",
      },
      {
        tag: "04 · Custom apps",
        title: "Custom application training",
        body: "Training for portals, mobile apps, and line-of-business tools EndEdge builds — including train-the-trainer sessions when you need internal champions.",
      },
    ],
  },
  delivery: {
    headline: "How we run sessions",
    steps: [
      {
        title: "Assess audiences",
        body: "Role map, language needs, locations, and success criteria — separate tracks for exec sponsors, admins, and front-line users.",
      },
      {
        title: "Build curriculum",
        body: "Scenario scripts from your UAT or production config, exercise data, and EN/AR handouts — reviewed with your project lead before delivery.",
      },
      {
        title: "Deliver & measure",
        body: "Classroom, remote, or hybrid sessions; attendance tracking; short feedback surveys; optional refresher slots after go-live.",
      },
    ],
  },
  proof: {
    headline: "Training after real go-lives",
    body: "We train on platforms we have deployed — school systems, citizen portals, ERP rollouts, and M365 migrations — so examples match live configuration, not demo tenants.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you train on software you did not build?",
        a: "Yes — ERP, Microsoft 365, and common business apps when scoped with access to your environment and process owners. We will decline if we cannot train responsibly on your setup.",
      },
      {
        q: "Is training available in Arabic?",
        a: "Yes — delivery and materials can be English, Arabic, or bilingual depending on audience and system terminology.",
      },
      {
        q: "Can training be bundled with managed IT or ERP projects?",
        a: "Usually. Training is often part of go-live packages; we can also provide post-go-live refreshers under a support retainer.",
      },
    ],
  },
  closing: {
    headline: "About to go live and need users ready?",
    body: "Share your platform, user counts, roles, and timeline — we will propose tracks, duration, and language mix with honest limits on what fits before cutover.",
    cta1: "Plan a training programme",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "تدريب البرمجيات وتمكين المستخدمين",
    description:
      "تدريب مستخدمين نهائيين ومسؤولين على البرمجيات المنشورة — ERP وMicrosoft 365 وتطبيقات مخصصة — من EndEdge دبي مع فرق Icon Software.",
  },
  hero: {
    eyebrow: "تدريب البرمجيات · تمكين المستخدمين",
    headline: "تدريب يطابق ما نشرتموه فعلاً.",
    subhead:
      "جلسات عملية للمستخدمين والمسؤولين على ERP وMicrosoft 365 والبوابات والتطبيقات المخصصة — مبنية على سير عملكم، لا عروضاً عامة.",
    body:
      "EndEdge تدرب على أنظمة ننفّذها ونشغّلها — وعلى منصات طرف ثالث يجب على فرقكم تبنّيها. Icon Software في عمّان تدعم تصميم المناهج والعمق التقني؛ دبي تنسّق الجدولة واللغة والتسليم في الموقع أو عن بُعد في الإمارات.",
    ctaPrimary: "خططوا برنامج تدريب",
    ctaSecondary: "عن EndEdge",
    ctaSecondaryPath: "/about",
    trustLine: "حسب الدور · مواد EN/AR · admin + مستخدم · ما بعد go-live",
  },
  scope: {
    headline: "ما نقدمه",
    items: [
      {
        tag: "01 · المستخدمون",
        title: "تمكين المستخدم النهائي",
        body: "تدريب قائم على المهام للعمل اليومي — معاملات ERP، self-service في البوابة، موافقات، وتقارير — مع أدلة مرجعية سريعة.",
      },
      {
        tag: "02 · المسؤولون",
        title: "تدريب المسؤولين والمستخدمين المتقدمين",
        body: "إدارة tenant ودورة حياة المستخدم وخطوط أمن أساسية ووعي بالنسخ الاحتياطي وحدود الإعداد — لتشغيل day-two بأمان.",
      },
      {
        tag: "03 · ERP وM365",
        title: "ERP والفوترة الإلكترونية وMicrosoft 365",
        body: "تدريب go-live و steady-state على المالية والمخزون وTeams وSharePoint وExchange — متوافق مع كيفية تنظيم مواقعكم وأدواركم.",
      },
      {
        tag: "04 · تطبيقات مخصصة",
        title: "تدريب التطبيقات المخصصة",
        body: "تدريب على بوابات وتطبيقات جوال وأدوات أعمال تبنيها EndEdge — بما في ذلك train-the-trainer عند الحاجة لأبطال داخليين.",
      },
    ],
  },
  delivery: {
    headline: "كيف نُجرّي الجلسات",
    steps: [
      {
        title: "تقييم الجمهور",
        body: "خريطة أدوار واحتياجات لغة ومواقع ومعايير نجاح — مسارات منفصلة للرعاة والمسؤولين و front-line.",
      },
      {
        title: "بناء المنهج",
        body: "سيناريوهات من UAT أو إعداد الإنتاج وبيانات تمارين و handouts EN/AR — مراجعة مع قائد المشروع قبل التسليم.",
      },
      {
        title: "تسليم وقياس",
        body: "قاعة أو remote أو hybrid؛ تتبع حضور؛ استبيانات قصيرة؛ slots تحديث اختيارية بعد go-live.",
      },
    ],
  },
  proof: {
    headline: "تدريب بعد go-lives حقيقية",
    body: "ندرب على منصات نشرناها — أنظمة مدارس، بوابات مواطنين، rollouts ERP، وترحيلات M365 — فالأمثلة تطابق الإعداد الحي.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل تدربون على برمجيات لم تبنوها؟",
        a: "نعم — ERP وMicrosoft 365 وتطبيقات أعمال شائعة عند النطاق مع وصول لبيئتكم وأصحاب العمليات. نرفض إن لم نستطع التدريب بمسؤولية على إعدادكم.",
      },
      {
        q: "هل التدريب متاح بالعربية؟",
        a: "نعم — التسليم والمواد يمكن أن تكون إنجليزية أو عربية أو ثنائية اللغة حسب الجمهور ومصطلحات النظام.",
      },
      {
        q: "هل يمكن دمج التدريب مع IT مُدارة أو ERP؟",
        a: "غالباً. التدريب جزء من حزم go-live؛ يمكن أيضاً refreshers بعد go-live ضمن retainer دعم.",
      },
    ],
  },
  closing: {
    headline: "على وشك go-live وتحتاجون مستخدمين جاهزين؟",
    body: "شاركوا المنصة وعدد المستخدمين والأدوار والجدول — نقترح مسارات ومدة ومزيج لغة بحدود صادقة لما يناسب قبل cutover.",
    cta1: "خططوا برنامج تدريب",
    cta2: "راسلوا الفريق",
  },
};

export function getSoftwareTrainingContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
