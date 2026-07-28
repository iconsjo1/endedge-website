import type { Locale } from "@/lib/i18n/config";
import {
  IT_CONSULTANCY_SLUG,
  licenseCodesForService,
} from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export { IT_CONSULTANCY_SLUG };

const codes = licenseCodesForService(IT_CONSULTANCY_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "IT Consultancy & Strategy",
    description:
      "Independent IT consultancy for UAE businesses — architecture, integration planning, vendor selection, and technology strategy from EndEdge Dubai with Icon Software delivery depth.",
  },
  hero: {
    eyebrow: "IT Consultancy · Architecture & strategy",
    headline: "Technology decisions you can defend — before you spend.",
    subhead:
      "Architecture reviews, integration roadmaps, vendor shortlists, and IT strategy aligned to your business — not a reseller pitch dressed as advice.",
    body:
      "EndEdge brings Dubai client presence and the engineering depth of Icon Software in Amman. We advise on systems that must work in production — portals, ERP, cloud, and integrations — with honest scope about what we implement ourselves versus what we help you procure.",
    ctaPrimary: "Book a consultancy call",
    ctaSecondary: "View case studies",
    ctaSecondaryPath: "/case-studies",
    trustLine: "Vendor-neutral · Integration-aware · EN/AR · Licensed SPC FZ",
  },
  scope: {
    headline: "What we deliver",
    items: [
      {
        tag: "01 · Architecture",
        title: "System & integration design",
        body: "Current-state mapping, target architecture, API and data-flow design, and non-functional requirements — sized for your team and budget, not enterprise theatre.",
      },
      {
        tag: "02 · Integration",
        title: "Integration planning & roadmaps",
        body: "ERP, CRM, identity, e-invoicing, and legacy bridges — phased plans with dependencies, cutover risks, and realistic timelines before development starts.",
      },
      {
        tag: "03 · Vendors",
        title: "Vendor selection & RFP support",
        body: "Requirements definition, shortlist criteria, demo scripts, and contract checkpoints — we do not take reseller margin on software you buy elsewhere.",
      },
      {
        tag: "04 · Strategy",
        title: "IT strategy & governance",
        body: "Technology roadmaps, build-vs-buy analysis, cloud posture, and operating-model advice for SMEs and mid-market teams without a full-time CTO.",
      },
    ],
  },
  delivery: {
    headline: "How we engage",
    steps: [
      {
        title: "Discover & frame",
        body: "Stakeholder interviews, constraint capture, and a written problem statement — so everyone agrees what success looks like before recommendations.",
      },
      {
        title: "Analyse & recommend",
        body: "Options with trade-offs, cost bands, and implementation paths — including what EndEdge can deliver versus third parties.",
      },
      {
        title: "Plan & hand off",
        body: "Prioritised roadmap, RFP pack or SOW inputs, and optional ongoing advisory — or transition to our build and managed IT teams.",
      },
    ],
  },
  proof: {
    headline: "Advice tied to delivery",
    body: "Our consultancy work feeds real projects — citizen portals, school platforms, ERP integrations, and cloud migrations documented in our case studies.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Is this independent of your development services?",
        a: "We separate advisory from implementation in scope and pricing. If we recommend work we deliver, we say so upfront — and we will recommend third parties when that is the better fit.",
      },
      {
        q: "Can you help evaluate ERP or Microsoft 365?",
        a: "Yes — requirements, licensing models, migration complexity, and integration with existing systems. We implement ERP and M365 when you choose to proceed with us.",
      },
      {
        q: "Do you work with existing internal IT teams?",
        a: "Often. We complement in-house staff with architecture, integration design, or vendor selection — without replacing day-to-day operations unless you ask for managed IT.",
      },
    ],
  },
  closing: {
    headline: "Need a second opinion before the next IT spend?",
    body: "Share your current stack, upcoming project, and constraints — we will tell you honestly whether consultancy, build, or managed ops is the right next step.",
    cta1: "Book a consultancy call",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "استشارات IT والاستراتيجية",
    description:
      "استشارات IT مستقلة للشركات في الإمارات — معمارية، تخطيط تكامل، اختيار موردين، واستراتيجية تكنولوجية من EndEdge دبي مع عمق تنفيذ Icon Software.",
  },
  hero: {
    eyebrow: "استشارات IT · معمارية واستراتيجية",
    headline: "قرارات تكنولوجية تدافعون عنها — قبل أن تنفقوا.",
    subhead:
      "مراجعات معمارية، خرائط طريق للتكامل، قوائم موردين مختصرة، واستراتيجية IT متماشية مع أعمالكم — لا عرض مبيعات متنكراً كنصيحة.",
    body:
      "EndEdge تجمع حضوراً للعملاء في دبي وعمقاً هندسياً من Icon Software في عمّان. ننصح على أنظمة يجب أن تعمل في الإنتاج — بوابات، ERP، سحابة، وتكاملات — بنطاق صادق عما ننفّذه بأنفسنا وما نساعدكم في شرائه.",
    ctaPrimary: "احجزوا مكالمة استشارية",
    ctaSecondary: "عرض دراسات الحالة",
    ctaSecondaryPath: "/case-studies",
    trustLine: "حياد تجاه الموردين · وعي بالتكامل · EN/AR · مرخّص SPC FZ",
  },
  scope: {
    headline: "ما نقدمه",
    items: [
      {
        tag: "01 · المعمارية",
        title: "تصميم الأنظمة والتكامل",
        body: "رسم الوضع الحالي، معمارية مستهدفة، تصميم API وتدفق بيانات، ومتطلبات غير وظيفية — بمقياس فريقكم وميزانيتكم.",
      },
      {
        tag: "02 · التكامل",
        title: "تخطيط التكامل وخرائط الطريق",
        body: "ERP وCRM وهوية وفوترة إلكترونية وجسور legacy — خطط مرحلية مع تبعيات ومخاطر cutover وجداول واقعية قبل التطوير.",
      },
      {
        tag: "03 · الموردون",
        title: "اختيار الموردين ودعم RFP",
        body: "تعريف المتطلبات، معايير القائمة المختصرة، سيناريوهات العرض، ونقاط تفتيش في العقود — لا نأخذ هامش إعادة بيع على برمجيات تشتريونها من غيرنا.",
      },
      {
        tag: "04 · الاستراتيجية",
        title: "استراتيجية IT والحوكمة",
        body: "خرائط طريق تكنولوجية، تحليل بناء مقابل شراء، وضع سحابي، ونصائح نموذج تشغيل للشركات المتوسطة بلا CTO بدوام كامل.",
      },
    ],
  },
  delivery: {
    headline: "كيف نعمل",
    steps: [
      {
        title: "اكتشاف وتأطير",
        body: "مقابلات أصحاب المصلحة، توثيق القيود، وبيان مشكلة مكتوب — حتى يتفق الجميع على معنى النجاح قبل التوصيات.",
      },
      {
        title: "تحليل وتوصية",
        body: "خيارات مع مقايضات ونطاقات تكلفة ومسارات تنفيذ — بما في ذلك ما يمكن لـ EndEdge تنفيذه مقابل أطراف ثالثة.",
      },
      {
        title: "تخطيط وتسليم",
        body: "خارطة طريق مُرتّبة، ملف طلب عروض أو مدخلات SOW، واستشارة مستمرة اختيارية — أو انتقال لفريق البناء وIT المُدارة.",
      },
    ],
  },
  proof: {
    headline: "نصيحة مربوطة بالتنفيذ",
    body: "عملنا الاستشاري يغذي مشاريع حقيقية — بوابات مواطنين، منصات مدارس، تكاملات ERP، وترحيلات سحابية موثّقة في دراسات الحالة.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل هذا مستقل عن خدمات التطوير؟",
        a: "نفصل الاستشارة عن التنفيذ في النطاق والتسعير. إن أوصينا بعمل ننفّذه، نقول ذلك مسبقاً — ونوصي بأطراف ثالثة عندما يكون ذلك الأنسب.",
      },
      {
        q: "هل تساعدون في تقييم ERP أو Microsoft 365؟",
        a: "نعم — المتطلبات، نماذج الترخيص، تعقيد الترحيل، والتكامل مع الأنظمة الحالية. ننفّذ ERP وM365 عندما تختارون المتابعة معنا.",
      },
      {
        q: "هل تعملون مع فرق IT داخلية؟",
        a: "غالباً. نُكمّل الموظفين الداخليين بالمعمارية أو تصميم التكامل أو اختيار الموردين — دون استبدال العمليات اليومية إلا إذا طلبتم IT مُدارة.",
      },
    ],
  },
  closing: {
    headline: "تحتاجون رأياً ثانياً قبل الإنفاق التالي على IT؟",
    body: "شاركوا المكدس الحالي والمشروع القادم والقيود — سنقول بصراحة ما إذا كانت الاستشارة أو البناء أو التشغيل المُدار هي الخطوة التالية.",
    cta1: "احجزوا مكالمة استشارية",
    cta2: "راسلوا الفريق",
  },
};

export function getItConsultancyContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
