import type { Locale } from "@/lib/i18n/config";
import { COMPANY } from "@/lib/constants/company";

export type AboutContent = {
  meta: { title: string; description: string };
  hero: { eyebrow: string; headline: string; subhead: string };
  video: { ariaLabel: string };
  story: { headline: string; paragraphs: string[] };
  group: {
    headline: string;
    intro: string;
    offices: { name: string; role: string; body: string }[];
    closing: string;
  };
  license: {
    headline: string;
    intro: string;
    authorityNote: string;
    serviceLink: string;
  };
  principles: { headline: string; items: { title: string; body: string }[] };
  cta: { headline: string; body: string; primary: string; secondary: string };
};

const EN: AboutContent = {
  meta: {
    title: "About EndEdge",
    description:
      "EndEdge is the Dubai front office of the Icon Software group — enterprise technology, managed IT, AI, and UAE e-invoicing compliance with nearly two decades of delivery experience.",
  },
  hero: {
    eyebrow: "About EndEdge",
    headline: "Dubai presence. Regional delivery depth. Integrity first.",
    subhead:
      "EndEdge is the UAE entity of the Icon Software group — a technology partner for organizations that need infrastructure, applications, automation, and AI under one accountable team.",
  },
  video: {
    ariaLabel: "EndEdge — enterprise technology and AI in practice (muted video)",
  },
  story: {
    headline: "Built on production work, not pitch decks",
    paragraphs: [
      "We formed EndEdge in Dubai to serve UAE and GCC clients who need a local partner with enterprise-grade delivery — not a reseller deck. Our work spans government portals, national payments systems, school platforms, cloud migrations, and Arabic-first AI — always with clear labels for what is production-proven versus research or pilot.",
      "Nearly two decades of delivery experience sits behind every engagement. We measure success by uptime, audit readiness, and less manual work — the outcomes your CFO and CIO actually track.",
    ],
  },
  group: {
    headline: "The Icon Software group",
    intro:
      "EndEdge and Icon Software operate as one group with complementary roles — UAE market front office and a deep delivery center in Amman.",
    offices: [
      {
        name: "EndEdge · Dubai, UAE",
        role: "Front office & UAE compliance",
        body: "Client relationships, UAE e-invoicing and ERP compliance, managed services contracts, and bilingual (EN/AR) delivery for Gulf markets.",
      },
      {
        name: "Icon Software · Amman, Jordan",
        role: "Delivery center",
        body: "Software engineering, web & mobile development, cloud architecture, AI/R&D, and long-running production systems for government, banking, education, and enterprise clients across MENA.",
      },
    ],
    closing:
      "One group narrative, one delivery standard — whether your contract is with EndEdge in Dubai or delivery runs through Icon Software in Amman.",
  },
  license: {
    headline: "Licensed activities",
    intro:
      "Endedge FZE (trade license 4423081.01) is registered in Sharjah Publishing City Free Zone. The activities below are listed exactly as on our trade license. Each links to the EndEdge service page that covers that scope.",
    authorityNote:
      "Issued by Sharjah Publishing City Free Zone Authority · License 4423081.01 · Valid through 30 July 2027",
    serviceLink: "View service",
  },
  principles: {
    headline: "How we work",
    items: [
      {
        title: "Integrity-first labeling",
        body: "Production, demonstrator, and research-backed badges on case studies and AI work — so procurement never has to guess.",
      },
      {
        title: "End-to-end ownership",
        body: "Infrastructure through intelligence under one partner. Nothing falls between vendors.",
      },
      {
        title: "Regional fit",
        body: "Arabic and English service, UAE data-residency awareness, and deadlines that match local regulation — including e-invoicing.",
      },
    ],
  },
  cta: {
    headline: "Talk to the team behind the delivery",
    body: "Share your context — compliance deadline, migration, or AI use case — and we'll give you an honest view of feasibility and approach.",
    primary: "Book a consultation",
    secondary: "View case studies",
  },
};

const AR: AboutContent = {
  meta: {
    title: "عن EndEdge",
    description:
      "EndEdge هي المكتب الأمامي في دبي لمجموعة Icon Software — تقنية مؤسسية، وتقنية معلومات مُدارة، وذكاء اصطناعي، وامتثال الفوترة الإلكترونية في الإمارات مع ما يقارب عقدين من خبرة التسليم.",
  },
  hero: {
    eyebrow: "عن EndEdge",
    headline: "حضور في دبي. عمق إقليمي في التسليم. النزاهة أولاً.",
    subhead:
      "EndEdge هي الكيان الإماراتي لمجموعة Icon Software — شريك تقني للمؤسسات التي تحتاج البنية التحتية والتطبيقات والأتمتة والذكاء الاصطناعي ضمن فريق واحد مسؤول.",
  },
  video: {
    ariaLabel: "EndEdge — تقنية مؤسسية وذكاء اصطناعي في الممارسة (فيديو صامت)",
  },
  story: {
    headline: "مبنيّة على أعمال إنتاجية، لا على عروض تقديمية",
    paragraphs: [
      "أسّسنا EndEdge في دبي لخدمة عملاء الإمارات ودول الخليج الذين يحتاجون شريكاً محلياً بتسليم على مستوى مؤسسي — لا موزّعاً بعرض تقديمي. يمتد عملنا من بوابات حكومية وأنظمة مدفوعات وطنية ومنصات مدارس وترحيلات سحابية وذكاء اصطناعي بالعربية أولاً — دائماً مع تسميات واضحة لما هو مُثبَت في الإنتاج مقابل البحث أو التجربة.",
      "ما يقارب عقدين من خبرة التسليم وراء كل مشاركة. نقيس النجاح بوقت التشغيل، والجاهزية للتدقيق، وتقليل العمل اليدوي — النتائج التي يتابعها مديركم المالي ومدير تقنية المعلومات فعلاً.",
    ],
  },
  group: {
    headline: "مجموعة Icon Software",
    intro:
      "تعمل EndEdge وIcon Software كمجموعة واحدة بأدوار متكاملة — مكتب أمامي لسوق الإمارات ومركز تسليم عميق في عمّان.",
    offices: [
      {
        name: "EndEdge · دبي، الإمارات",
        role: "المكتب الأمامي وامتثال الإمارات",
        body: "علاقات العملاء، وامتثال الفوترة الإلكترونية وERP في الإمارات، وعقود الخدمات المُدارة، وتسليم ثنائي اللغة (EN/AR) لأسواق الخليج.",
      },
      {
        name: "Icon Software · عمّان، الأردن",
        role: "مركز التسليم",
        body: "هندسة البرمجيات، وتطوير الويب والجوال، ومعمارية السحابة، والذكاء الاصطناعي/البحث، وأنظمة إنتاج طويلة الأمد للحكومة والبنوك والتعليم وعملاء المؤسسات في منطقة الشرق الأوسط وشمال أفريقيا.",
      },
    ],
    closing:
      "سرد مجموعة واحد، ومعيار تسليم واحد — سواء كان عقدكم مع EndEdge في دبي أو كان التسليم عبر Icon Software في عمّان.",
  },
  license: {
    headline: "الأنشطة المرخصة",
    intro:
      "إنديدج FZE (الرخصة التجارية 4423081.01) مسجّلة في مدينة الشارقة للنشر — المنطقة الحرة. الأنشطة أدناه مدرجة كما في الرخصة التجارية. كل نشاط يرتبط بصفحة الخدمة في EndEdge التي تغطي هذا النطاق.",
    authorityNote:
      "صادرة عن هيئة مدينة الشارقة للنشر — المنطقة الحرة · الرخصة 4423081.01 · سارية حتى 30 يوليو 2027",
    serviceLink: "عرض الخدمة",
  },
  principles: {
    headline: "كيف نعمل",
    items: [
      {
        title: "تسميات النزاهة أولاً",
        body: "شارات الإنتاج والنموذج التجريبي والمدعوم بأبحاث على دراسات الحالة وأعمال الذكاء الاصطناعي — حتى لا يضطر المشتري للتخمين.",
      },
      {
        title: "ملكية من البداية إلى النهاية",
        body: "من البنية التحتية إلى الذكاء ضمن شريك واحد. لا يسقط شيء بين المورّدين.",
      },
      {
        title: "ملاءمة إقليمية",
        body: "خدمة بالعربية والإنجليزية، ووعي بإقامة البيانات في الإمارات، ومواعيد تتوافق مع التنظيم المحلي — بما في ذلك الفوترة الإلكترونية.",
      },
    ],
  },
  cta: {
    headline: "تحدثوا مع الفريق وراء التسليم",
    body: "شاركوا سياقكم — موعد امتثال، أو ترحيل، أو حالة استخدام للذكاء الاصطناعي — وسنقدّم رؤية صادقة حول الجدوى والنهج.",
    primary: "احجزوا استشارة",
    secondary: "عرض دراسات الحالة",
  },
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "ar" ? AR : EN;
}

export function aboutEmail(): string {
  return COMPANY.email;
}
