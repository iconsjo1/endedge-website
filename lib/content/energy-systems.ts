import type { Locale } from "@/lib/i18n/config";
import {
  ENERGY_SYSTEMS_SLUG,
  licenseCodesForService,
} from "@/lib/constants/license-activities";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export { ENERGY_SYSTEMS_SLUG };

const codes = licenseCodesForService(ENERGY_SYSTEMS_SLUG);

const en: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "Solar & Alternative Energy Systems",
    description:
      "B2B trading of solar and alternative energy systems and components for commercial projects in the UAE — licensed supply from EndEdge with project-aligned sourcing.",
  },
  hero: {
    eyebrow: "Energy Systems · Commercial supply",
    headline: "Solar and alternative energy components — for projects, not home kits.",
    subhead:
      "Wholesale trading in solar energy systems, alternative energy equipment, and components for commercial, industrial, and institutional builds.",
    body:
      "EndEdge trades energy systems under our SPC Free Zone licence as part of broader technology and infrastructure delivery. We source panels, inverters, mounting, and balance-of-system components against project BOQs — with honest lead times and integration awareness for monitoring and controls.",
    ctaPrimary: "Discuss a project supply",
    ctaSecondary: "View case studies",
    ctaSecondaryPath: "/case-studies",
    trustLine: "Commercial B2B · Licensed trading · BOQ-driven · EN/AR",
  },
  scope: {
    headline: "What we supply",
    items: [
      {
        tag: "01 · Solar",
        title: "Solar energy systems & components",
        body: "PV modules, inverters, combiners, mounting structures, and cabling — specified to site conditions and EPC or consultant drawings.",
      },
      {
        tag: "02 · Alternative",
        title: "Alternative energy equipment",
        body: "Wholesale trading in alternative energy equipment and accessories for hybrid or backup scenarios — quoted against your engineering spec, not generic catalogues.",
      },
      {
        tag: "03 · Commercial",
        title: "Commercial & industrial projects",
        body: "Supply for rooftops, carports, schools, warehouses, and facility upgrades — aligned to UAE project documentation and installer coordination.",
      },
      {
        tag: "04 · Integration",
        title: "Monitoring & controls awareness",
        body: "We understand how energy assets connect to BMS, IoT, and client portals — useful when EndEdge also delivers software or managed infrastructure on the same site.",
      },
    ],
  },
  delivery: {
    headline: "How we fulfil",
    steps: [
      {
        title: "BOQ & compliance check",
        body: "Review bills of quantities, datasheets, and project constraints — confirm model numbers, certifications, and delivery windows before ordering.",
      },
      {
        title: "Procure & track",
        body: "Licensed wholesale procurement with serial and batch traceability — staged delivery to site or bonded storage when construction phasing requires it.",
      },
      {
        title: "Hand off & support",
        body: "Documentation pack for installers, warranty registration support, and escalation paths — we supply; installation is scoped separately unless agreed.",
      },
    ],
  },
  proof: {
    headline: "Part of wider infrastructure delivery",
    body: "Energy component supply sits alongside EndEdge work on facility technology, cloud infrastructure, and operational platforms — one team for hardware trade and digital layers when projects overlap.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you design or install solar systems?",
        a: "Our licence covers trading and wholesale supply. System design and installation are scoped separately — we work with your EPC or recommend partners when needed.",
      },
      {
        q: "Is this residential rooftop supply?",
        a: "Our focus is commercial and institutional projects — schools, warehouses, mixed-use, and industrial sites. We will say no if a request is outside what we can fulfil well.",
      },
      {
        q: "Can you integrate monitoring with your software teams?",
        a: "Yes — when EndEdge also delivers portals, IoT, or managed infrastructure, we align component specs with the monitoring stack early.",
      },
    ],
  },
  closing: {
    headline: "Sourcing components for a commercial energy project?",
    body: "Share your BOQ, site context, and timeline — we will confirm what we can supply under licence, lead times, and what remains with your installer or EPC.",
    cta1: "Discuss a project supply",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: codes,
  meta: {
    title: "أنظمة الطاقة الشمسية والبديلة",
    description:
      "تجارة B2B لأنظمة ومكونات الطاقة الشمسية والبديلة للمشاريع التجارية في الإمارات — توريد مرخّص من EndEdge مرتبط بالمشاريع.",
  },
  hero: {
    eyebrow: "أنظمة الطاقة · توريد تجاري",
    headline: "مكونات طاقة شمسية وبديلة — للمشاريع، لا لأطقم منزلية.",
    subhead:
      "تجارة بالجملة لأنظمة الطاقة الشمسية ومعدات الطاقة البديلة ومكوناتها للمباني التجارية والصناعية والمؤسسية.",
    body:
      "EndEdge تتاجر أنظمة الطاقة ضمن ترخيص SPC Free Zone كجزء من توريد تكنولوجيا وبنية تحتية أوسع. نورد panels وinverters وmounting ومكونات balance-of-system وفق BOQ المشروع — بأوقات تسليم صادقة ووعي بتكامل المراقبة والتحكم.",
    ctaPrimary: "ناقشوا توريد مشروع",
    ctaSecondary: "عرض دراسات الحالة",
    ctaSecondaryPath: "/case-studies",
    trustLine: "B2B تجاري · تجارة مرخّصة · driven BOQ · EN/AR",
  },
  scope: {
    headline: "ما نورد",
    items: [
      {
        tag: "01 · شمسي",
        title: "أنظمة ومكونات الطاقة الشمسية",
        body: "وحدات PV وinverters وcombiners و هياكل تثبيت وكابلات — حسب ظروف الموقع ورسومات EPC أو الاستشاري.",
      },
      {
        tag: "02 · بديل",
        title: "معدات الطاقة البديلة",
        body: "تجارة بالجملة لمعدات الطاقة البديلة وملحقاتها لسيناريوهات هجينة أو احتياط — بعرض وفق مواصفات هندسية، لا كatalogues عامة.",
      },
      {
        tag: "03 · تجاري",
        title: "مشاريع تجارية وصناعية",
        body: "توريد للأسطح ومواقف ومدارس ومستودعات وترقيات مرافق — متوافق مع توثيق مشاريع الإمارات وتنسيق المُركّب.",
      },
      {
        tag: "04 · تكامل",
        title: "وعي بالمراقبة والتحكم",
        body: "نفهم ربط أصول الطاقة بـ BMS وIoT وبوابات العملاء — مفيد عندما تسلّم EndEdge أيضاً برمجيات أو بنية مُدارة في نفس الموقع.",
      },
    ],
  },
  delivery: {
    headline: "كيف ننفّذ",
    steps: [
      {
        title: "BOQ وفحص امتثال",
        body: "مراجعة قوائم الكميات وdatasheets وقيود المشروع — تأكيد أرقام الموديلات والشهادات ونوافذ التسليم قبل الطلب.",
      },
      {
        title: "شراء وتتبع",
        body: "شراء جملة مرخّص مع تتبع serial وbatch — تسليم مرحلي للموقع أو تخزين bonded عند متطلبات مراحل البناء.",
      },
      {
        title: "تسليم ودعم",
        body: "ملف توثيق للمُركّبين، دعم تسجيل ضمان، ومسارات تصعيد — نورد؛ التركيب نطاق منفصل ما لم يُتفق عليه.",
      },
    ],
  },
  proof: {
    headline: "جزء من تسليم بنية تحتية أوسع",
    body: "توريد مكونات الطاقة يجاور عمل EndEdge على تكنولوجيا المرافق والسحابة والمنصات التشغيلية — فريق واحد للتجارة والطبقة الرقمية عند تداخل المشاريع.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل تصمّمون أو تركّبون أنظمة شمسية؟",
        a: "ترخيصنا يغطي التجارة والتوريد بالجملة. التصميم والتركيب نطاق منفصل — نعمل مع EPC أو نوصي شركاء عند الحاجة.",
      },
      {
        q: "هل هذا توريد أسطح سكنية؟",
        a: "تركيزنا مشاريع تجارية ومؤسسية — مدارس ومستودعات واستخدامات مختلطة ومواقع صناعية. نقول لا إن كان الطلب خارج ما نستطيع تنفيذه جيداً.",
      },
      {
        q: "هل يمكن دمج المراقبة مع فرق البرمجيات؟",
        a: "نعم — عندما تسلّم EndEdge بوابات أو IoT أو بنية مُدارة، ننسّق مواصفات المكونات مع stack المراقبة مبكراً.",
      },
    ],
  },
  closing: {
    headline: "تبحثون عن توريد مكونات لمشروع طاقة تجاري؟",
    body: "شاركوا BOQ وسياق الموقع والجدول — نؤكد ما نستطيع توريده ضمن الترخيص وأوقات التسليم وما يبقى عند المُركّب أو EPC.",
    cta1: "ناقشوا توريد مشروع",
    cta2: "راسلوا الفريق",
  },
};

export function getEnergySystemsContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
