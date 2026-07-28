import type { Locale } from "@/lib/i18n/config";
import {
  TECHNOLOGY_SUPPLY_SLUG,
  licenseCodesForService,
} from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export { TECHNOLOGY_SUPPLY_SLUG };

const codes = licenseCodesForService(TECHNOLOGY_SUPPLY_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "Technology Supply & Wholesale",
    description:
      "B2B wholesale technology supply for UAE businesses — computers, peripherals, software licensing, and lab or factory IT equipment from EndEdge with traceable sourcing.",
  },
  hero: {
    eyebrow: "Technology Supply · B2B wholesale",
    headline: "Hardware and licensing — sourced for business, not retail.",
    subhead:
      "Wholesale supply of computers, peripherals, software licences, and lab or factory IT equipment — quoted against your spec, deployed projects, and volume needs.",
    body:
      "EndEdge supplies technology as part of broader delivery — school labs, office rollouts, ERP workstations, and integration projects backed by Icon Software in Amman. We quote honestly: SKUs, lead times, warranty paths, and what we install versus what we ship.",
    ctaPrimary: "Request a supply quote",
    ctaSecondary: "About EndEdge",
    ctaSecondaryPath: "/about",
    trustLine: "B2B only · Licensed wholesale · Project-aligned · EN/AR",
  },
  scope: {
    headline: "What we supply",
    items: [
      {
        tag: "01 · Compute",
        title: "Computers & workstations",
        body: "Business desktops, laptops, and project-spec workstations — matched to ERP, CAD, or general office workloads with sensible warranty and spare-parts planning.",
      },
      {
        tag: "02 · Peripherals",
        title: "Peripherals & accessories",
        body: "Monitors, docking stations, networking gear, printers, and classroom or office peripherals — bundled with rollout projects when needed.",
      },
      {
        tag: "03 · Licensing",
        title: "Software licensing",
        body: "Commercial software and subscription licences procured wholesale — Microsoft, security tools, and line-of-business apps aligned to your tenant or deployment model.",
      },
      {
        tag: "04 · Lab & factory",
        title: "Lab & factory IT equipment",
        body: "Laboratory and factory tools, industrial PCs, and outfit trading for education, manufacturing, and field environments — scoped to project drawings and compliance needs.",
      },
    ],
  },
  delivery: {
    headline: "How we fulfil",
    steps: [
      {
        title: "Spec & quote",
        body: "Bill of materials against your requirements — alternatives where stock or budget matters, with clear ex-stock versus import lead times.",
      },
      {
        title: "Procure & QA",
        body: "Order through licensed wholesale channels, serial tracking, and incoming checks before delivery to site or staging.",
      },
      {
        title: "Deliver & support",
        body: "Shipment to UAE sites, optional imaging and install via our managed IT team, and warranty escalation through documented channels.",
      },
    ],
  },
  proof: {
    headline: "Supply tied to real deployments",
    body: "Hardware and licensing from EndEdge often ships as part of platform rollouts, school technology programmes, and ERP go-lives documented in our project work.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you sell to consumers or walk-in retail?",
        a: "No — B2B and project supply only. Quotes are against company details, volumes, and delivery requirements.",
      },
      {
        q: "Can you supply Microsoft 365 or ERP user licences?",
        a: "Yes — as part of wholesale software supply and migration projects. Licensing model depends on your tenant and compliance context; we explain options without overselling seats.",
      },
      {
        q: "Do you install what you supply?",
        a: "Optional. We can ship only, or bundle imaging, site install, and managed support through our IT services team.",
      },
    ],
  },
  closing: {
    headline: "Need a straight quote on business technology?",
    body: "Send your BOM, user counts, or project brief — we will respond with SKUs, lead times, and what we can install versus deliver ex-works.",
    cta1: "Request a supply quote",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "توريد التكنولوجيا بالجملة",
    description:
      "توريد تكنولوجيا B2B بالجملة للشركات في الإمارات — حواسيب، ملحقات، تراخيص برمجيات، ومعدات IT للمختبرات والمصانع من EndEdge بمصادر قابلة للتتبع.",
  },
  hero: {
    eyebrow: "توريد التكنولوجيا · B2B بالجملة",
    headline: "معدات وتراخيص — مُورَّدة للأعمال، لا للتجزئة.",
    subhead:
      "توريد بالجملة لحواسيب وملحقات وتراخيص برمجيات ومعدات IT للمختبرات والمصانع — بعرض سعر وفق مواصفاتكم ومشاريعكم واحتياجات الحجم.",
    body:
      "EndEdge تورد التكنولوجيا ضمن تنفيذ أوسع — مختبرات مدارس، تجهيز مكاتب، محطات ERP، ومشاريع تكامل مدعومة من Icon Software في عمّان. نعرض بصراحة: SKUs وأوقات التسليم ومسارات الضمان وما نثبّته مقابل ما نشحنه.",
    ctaPrimary: "اطلبوا عرض توريد",
    ctaSecondary: "عن EndEdge",
    ctaSecondaryPath: "/about",
    trustLine: "B2B فقط · جملة مرخّصة · مرتبط بالمشاريع · EN/AR",
  },
  scope: {
    headline: "ما نورد",
    items: [
      {
        tag: "01 · الحوسبة",
        title: "حواسيب ومحطات عمل",
        body: "مكتبية، محمولة، ومحطات عمل حسب مواصفات المشروع — مناسبة لـ ERP أو CAD أو مكاتب عامة مع ضمان وتخطيط قطع غيار معقول.",
      },
      {
        tag: "02 · الملحقات",
        title: "ملحقات وإكسسوارات",
        body: "شاشات، محطات إرساء، شبكات، طابعات، وملحقات فصول أو مكاتب — ضمن مشاريع rollout عند الحاجة.",
      },
      {
        tag: "03 · التراخيص",
        title: "تراخيص البرمجيات",
        body: "برمجيات تجارية واشتراكات تُشتَرى بالجملة — Microsoft وأدوات أمن وتطبيقات أعمال متوافقة مع tenant أو نموذج النشر.",
      },
      {
        tag: "04 · المختبر والمصنع",
        title: "معدات IT للمختبر والمصنع",
        body: "أدوات مختبرات ومصانع، حواسيب صناعية، وتجارة مستلزمات للتعليم والتصنيع والبيئات الميدانية — وفق رسومات المشروع ومتطلبات الامتثال.",
      },
    ],
  },
  delivery: {
    headline: "كيف ننفّذ",
    steps: [
      {
        title: "مواصفات وعرض",
        body: "قائمة مواد وفق متطلباتكم — بدائل عندما يهم المخزون أو الميزانية، مع أوقات واضحة من المخزون مقابل الاستيراد.",
      },
      {
        title: "شراء وضمان جودة",
        body: "طلب عبر قنوات جملة مرخّصة، تتبع serial، وفحص وارد قبل التسليم للموقع أو التجهيز.",
      },
      {
        title: "تسليم ودعم",
        body: "شحن لمواقع الإمارات، imaging وتثبيت اختياري عبر فريق IT المُدار، وتصعيد ضمان عبر قنوات موثّقة.",
      },
    ],
  },
  proof: {
    headline: "توريد مربوط بنشر حقيقي",
    body: "معدات وتراخيص من EndEdge تُشحن غالباً ضمن rollouts منصات، برامج تكنولوجيا مدارس، وgo-lives ERP موثّقة في عملنا.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل تبيعون للمستهلك أو تجزئة مباشرة؟",
        a: "لا — B2B وتوريد مشاريع فقط. العروض مقابل بيانات الشركة والحجم ومتطلبات التسليم.",
      },
      {
        q: "هل توردون Microsoft 365 أو تراخiص ERP؟",
        a: "نعم — ضمن توريد برمجيات بالجملة ومشاريع ترحيل. نموذج الترخيص يعتمد على tenant وسياق الامتثال؛ نشرح الخيارات دون مبالغة في عدد المقاعد.",
      },
      {
        q: "هل تثبّتون ما توردونه؟",
        a: "اختياري. يمكننا الشحن فقط، أو دمج imaging وتثبيت موقع ودعم مُدار عبر فريق IT.",
      },
    ],
  },
  closing: {
    headline: "تحتاجون عرضاً مباشراً على تكنولوجيا الأعمال؟",
    body: "أرسلوا BOM أو عدد المستخدمين أو موجز المشروع — نرد بـ SKUs وأوقات التسليم وما يمكننا تثبيته مقابل التسليم ex-works.",
    cta1: "اطلبوا عرض توريد",
    cta2: "راسلوا الفريق",
  },
};

export function getTechnologySupplyContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
