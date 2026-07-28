import type { Locale } from "@/lib/i18n/config";

export const WEB_MOBILE_SLUG = "web-mobile-development";

export type WebMobilePageContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLine: string;
  };
  scope: {
    headline: string;
    items: { tag: string; title: string; body: string }[];
  };
  delivery: {
    headline: string;
    steps: { title: string; body: string }[];
  };
  proof: {
    headline: string;
    body: string;
    caseStudiesCta: string;
  };
  faq: {
    headline: string;
    items: { q: string; a: string }[];
  };
  closing: {
    headline: string;
    body: string;
    cta1: string;
    cta2: string;
  };
};

const en: WebMobilePageContent = {
  meta: {
    title: "Web & Mobile Development",
    description:
      "Custom web apps, mobile apps, and APIs from EndEdge — React, Next.js, iOS/Android, bilingual EN/AR, with hosting and managed ops under one partner.",
  },
  hero: {
    eyebrow: "Web & Mobile · Software delivery",
    headline: "Web and mobile apps that ship — and stay running.",
    subhead:
      "We design and build customer-facing portals, internal tools, and mobile experiences — then host, monitor, and operate them if you need a single accountable partner.",
    body:
      "EndEdge is the Dubai front office of the Icon Software group: nearly two decades delivering production systems for government, banking, education, and enterprise clients across MENA.",
    ctaPrimary: "Book a scoping call",
    ctaSecondary: "View case studies",
    trustLine: "Production-proven · Bilingual EN/AR · Web + mobile + cloud under one roof",
  },
  scope: {
    headline: "What we build",
    items: [
      {
        tag: "01 · Web",
        title: "Web applications & portals",
        body: "Customer portals, admin dashboards, e-commerce storefronts, and internal tools — built with React, Next.js, and modern APIs. SSR, performance, and accessibility baked in from day one.",
      },
      {
        tag: "02 · Mobile",
        title: "iOS & Android applications",
        body: "Native and cross-platform mobile apps for field teams, customers, and executives. We choose the stack for your timeline and maintenance window — React Native, Flutter, or native Swift/Kotlin when it fits.",
      },
      {
        tag: "03 · Backend",
        title: "APIs, integrations & data",
        body: "Node.js, PostgreSQL, REST and GraphQL APIs, SSO, payment gateways, ERP/ASP connectors, and third-party integrations — the layer that makes your web and mobile apps actually work in production.",
      },
      {
        tag: "04 · Ops",
        title: "Hosting & managed delivery",
        body: "Optional: deploy on our cloud/VPS infrastructure, 24/7 monitoring, backups, and incident response — so you are not juggling a dev shop and a separate host.",
      },
    ],
  },
  delivery: {
    headline: "How we deliver",
    steps: [
      {
        title: "Discovery & scope",
        body: "We map users, integrations, compliance constraints, and success metrics before writing code — so estimates reflect reality, not optimism.",
      },
      {
        title: "Build in iterations",
        body: "Working increments every 2–3 weeks, with staging environments you can touch. Arabic/English UX handled early, not bolted on at the end.",
      },
      {
        title: "Launch & operate",
        body: "Production cutover, runbooks, monitoring, and optional managed services — the same team that built it can run it.",
      },
    ],
  },
  proof: {
    headline: "Production work, not prototypes",
    body: "Our case studies include school platforms serving 22,000+ users, government portal migrations, e-commerce on AWS, and Arabic-first AI — all with documented stacks and outcomes.",
    caseStudiesCta: "Read anonymized case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you only build, or also host and support?",
        a: "Both. Many clients want EndEdge to build and operate — cloud infrastructure, managed IT, and application support under one contract. Others take the code and run it themselves; we support either model.",
      },
      {
        q: "Native or cross-platform mobile?",
        a: "We recommend based on your UX needs, offline requirements, and release cadence — not a default stack. We will tell you honestly if cross-platform is enough or native is worth the cost.",
      },
      {
        q: "Can you work with our existing team or vendor?",
        a: "Yes. We often augment internal IT or partner on architecture, critical modules, or production hardening while your team owns the roadmap.",
      },
      {
        q: "Arabic and English?",
        a: "Full bilingual delivery — RTL layouts, mixed-language content, and Arabic-first UX where your users need it.",
      },
    ],
  },
  closing: {
    headline: "Have a web or mobile project in mind?",
    body: "Share your scope — greenfield app, legacy rebuild, or mobile companion to an existing system — and we will give you an honest view of approach, timeline, and what production-ready looks like.",
    cta1: "Book a scoping call",
    cta2: "Email the team",
  },
};

const ar: WebMobilePageContent = {
  meta: {
    title: "تطوير الويب والتطبيقات",
    description:
      "تطبيقات ويب وتطبيقات جوال وواجهات برمجة مخصّصة من EndEdge — React وNext.js وiOS/Android، ثنائية EN/AR، مع استضافة وعمليات مُدارة ضمن شريك واحد.",
  },
  hero: {
    eyebrow: "الويب والجوال · تسليم البرمجيات",
    headline: "تطبيقات ويب وجوال تصل للإنتاج — وتبقى قيد التشغيل.",
    subhead:
      "نصمّم ونبني بوابات للعملاء وأدوات داخلية وتجارب جوال — ثم نستضيف ونراقب ونشغّلها إن احتجتم شريكاً واحداً مسؤولاً.",
    body:
      "EndEdge هي المكتب الأمامي في دبي لمجموعة Icon Software: ما يقارب عقدين في تسليم أنظمة إنتاج للحكومة والبنوك والتعليم والمؤسسات في منطقة الشرق الأوسط وشمال أفريقيا.",
    ctaPrimary: "احجزوا مكالمة تحديد النطاق",
    ctaSecondary: "عرض دراسات الحالة",
    trustLine: "مُثبَت في الإنتاج · ثنائي EN/AR · ويب + جوال + سحابة تحت سقف واحد",
  },
  scope: {
    headline: "ما نبنيه",
    items: [
      {
        tag: "01 · الويب",
        title: "تطبيقات ويب وبوابات",
        body: "بوابات عملاء، لوحات إدارة، واجهات تجارة إلكترونية، وأدوات داخلية — بـ React وNext.js وواجهات برمجة حديثة. SSR وأداء وإمكانية وصول من اليوم الأول.",
      },
      {
        tag: "02 · الجوال",
        title: "تطبيقات iOS وAndroid",
        body: "تطبيقات جوال أصلية ومتعددة المنصات للفرق الميدانية والعملاء والتنفيذيين. نختار المكدس حسب الجدول الزمني ونافذة الصيانة — React Native أو Flutter أو Swift/Kotlin أصلي عند الحاجة.",
      },
      {
        tag: "03 · الواجهة الخلفية",
        title: "واجهات برمجة وتكامل وبيانات",
        body: "Node.js وPostgreSQL وREST وGraphQL وSSO وبوابات دفع وموصلات ERP/ASP وتكاملات طرف ثالث — الطبقة التي تجعل تطبيقات الويب والجوال تعمل فعلاً في الإنتاج.",
      },
      {
        tag: "04 · العمليات",
        title: "استضافة وتسليم مُدار",
        body: "اختياري: نشر على بنيتنا السحابية/VPS، مراقبة على مدار الساعة، نسخ احتياطي، واستجابة للحوادث — دون التوفيق بين ورشة تطوير ومضيف منفصل.",
      },
    ],
  },
  delivery: {
    headline: "كيف نُسلّم",
    steps: [
      {
        title: "اكتشاف ونطاق",
        body: "نرسم المستخدمين والتكاملات وقيود الامتثال ومقاييس النجاح قبل كتابة الكود — حتى تعكس التقديرات الواقع لا التفاؤل.",
      },
      {
        title: "بناء على مراحل",
        body: "زيادات عمل كل 2–3 أسابيع، مع بيئات staging يمكنكم تجربتها. تجربة عربية/إنجليزية مبكراً، لا تُلحق في النهاية.",
      },
      {
        title: "إطلاق وتشغيل",
        body: "Cutover للإنتاج، runbooks، مراقبة، وخدمات مُدارة اختيارية — نفس الفريق الذي بنى يمكنه تشغيله.",
      },
    ],
  },
  proof: {
    headline: "أعمال إنتاجية، لا نماذج أولية",
    body: "تشمل دراسات الحالة لدينا منصات مدارس تخدم 22,000+ مستخدم، وترحيلات بوابات حكومية، وتجارة إلكترونية على AWS، وذكاء اصطناعي بالعربية أولاً — كلها بمكدسات ونتائج موثّقة.",
    caseStudiesCta: "اقرأوا دراسات الحالة مجهولة الهوية ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل تبنون فقط أم تستضيفون وتدعمون أيضاً؟",
        a: "كلاهما. كثير من العملاء يريدون EndEdge للبناء والتشغيل — بنية تحتية سحابية وتقنية معلومات مُدارة ودعم تطبيقات بعقد واحد. آخرون يأخذون الكود ويشغّلونه بأنفسهم؛ ندعم كلا النموذجين.",
      },
      {
        q: "جوال أصلي أم متعدد المنصات؟",
        a: "نوصي حسب احتياجات UX والعمل دون اتصال وإيقاع الإصدارات — لا مكدس افتراضي. نقول بصراحة إن كان متعدد المنصات كافياً أو الأصلي يستحق التكلفة.",
      },
      {
        q: "هل يمكنكم العمل مع فريقنا أو مورّدنا الحالي؟",
        a: "نعم. غالباً نُكمّل تقنية المعلومات الداخلية أو نشارك في الهندسة المعمارية أو الوحدات الحرجة أو تقوية الإنتاج بينما فريقكم يملك خارطة الطريق.",
      },
      {
        q: "عربي وإنجليزي؟",
        a: "تسليم ثنائي اللغة كامل — تخطيطات RTL ومحتوى مختلط وتجربة عربية أولاً حيث يحتاج مستخدمكم.",
      },
    ],
  },
  closing: {
    headline: "لديكم مشروع ويب أو جوال؟",
    body: "شاركوا النطاق — تطبيق جديد، إعادة بناء legacy، أو تطبيق جوال مرافق لنظام قائم — وسنقدّم رؤية صادقة للنهج والجدول الزمني ومعنى جاهزية الإنتاج.",
    cta1: "احجزوا مكالمة تحديد النطاق",
    cta2: "راسلوا الفريق",
  },
};

export function getWebMobilePageContent(locale: Locale): WebMobilePageContent {
  return locale === "ar" ? ar : en;
}
