import type { Locale } from "@/lib/i18n/config";

export type ChecklistItem = {
  number: number;
  title: string;
  checkbox: string;
  owner: string;
  output: string;
};

export type ErpPageContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    partnerLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLine: string;
  };
  explainer: {
    headline: string;
    intro: string;
    columns: { asp: string; partner: string };
    rows: { label: string; asp: string; partner: string }[];
    bottomLine: string;
  };
  scope: {
    headline: string;
    items: { tag: string; title: string; body: string }[];
  };
  proof: {
    headline: string;
    body: string;
    smartErp: string;
    integrity: string;
    caseStudiesCta: string;
  };
  lead: {
    id: string;
    headline: string;
    body: string;
    name: string;
    email: string;
    company: string;
    whatsapp: string;
    submit: string;
    privacy: string;
    whatsappAlt: string;
    unlockedTitle: string;
    error: string;
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
  checklist: {
    title: string;
    howTo: string;
    deadlines: string[];
    decisionsHeading: string;
    items: ChecklistItem[];
    nextStep: string;
    nextBody: string;
  };
};

const en: ErpPageContent = {
  meta: {
    title: "ERP & E-Invoicing Compliance",
    description:
      "UAE e-invoicing implementation partner. ERPNext, SmartERP, PINT AE field mapping, ASP integration, finance team enablement. ASP appointment deadline 30 Oct 2026 for AED 50M+ businesses.",
  },
  hero: {
    eyebrow: "UAE e-Invoicing · Deadline-driven compliance",
    headline: "Appoint your ASP by 30 October. We handle the implementation.",
    subhead:
      "The UAE's e-invoicing programme is live. If your business generates revenue of AED 50 million or more, you must appoint an Accredited Service Provider by 30 October 2026. Mandatory implementation begins 1 January 2027 — with penalties starting at AED 5,000 per month for failure to appoint an ASP or implement on time (AED 100 per invoice, capped at AED 5,000 per month, for failure to issue or transmit compliant e-invoices).",
    partnerLine:
      "EndEdge is your implementation partner: we deploy or adapt your ERP, map fields to PINT AE, integrate with your ASP, and enable your finance team — so you meet the deadline without rebuilding your operations from scratch.",
    ctaPrimary: "Download the UAE E-Invoicing Readiness Checklist",
    ctaSecondary: "Book a compliance consultation",
    trustLine:
      "Implementation partner · Not an ASP · Dubai office · 19 years of enterprise systems delivery",
  },
  explainer: {
    headline: "ASP or implementation partner — what's the difference?",
    intro:
      "Most finance leaders we speak to use the terms interchangeably. They aren't the same role.",
    columns: { asp: "Accredited Service Provider (ASP)", partner: "Implementation partner (EndEdge)" },
    rows: [
      {
        label: "Role",
        asp: "Accredited to transmit e-invoices via the UAE Peppol network on your behalf",
        partner:
          "Configures your ERP, maps PINT AE fields, connects to your chosen ASP, trains your team",
      },
      {
        label: "Accreditation",
        asp: "Requires Peppol certification and 2+ years operational history",
        partner: "No ASP accreditation required",
      },
      {
        label: "What you need",
        asp: "AED 50M+ businesses: appoint an ASP by 30 Oct 2026, implement by 1 Jan 2027. Smaller businesses: appoint by 31 Mar 2027, implement from 1 Jul 2027",
        partner: "You need someone who can make your ERP actually work with that ASP",
      },
      {
        label: "EndEdge's role",
        asp: "We do not provide ASP services",
        partner: "This is our role — ERPNext, SmartERP, integration, and enablement",
      },
    ],
    bottomLine:
      "You appoint the ASP. We make sure your systems, processes, and people are ready when the mandate hits.",
  },
  scope: {
    headline: "What we deliver",
    items: [
      {
        tag: "01",
        title: "ERP deployment or adaptation",
        body: "Greenfield ERPNext or SmartERP deployment, or adaptation of your existing ERP — scoped after a readiness review, not assumed.",
      },
      {
        tag: "02",
        title: "PINT AE field mapping",
        body: "Map invoice fields, tax codes, and buyer/seller identifiers to UAE PINT AE requirements. Validate against your ASP's transmission format before go-live.",
      },
      {
        tag: "03",
        title: "ASP integration",
        body: "Connect your ERP to your appointed Accredited Service Provider. We handle the technical integration; you retain the commercial ASP relationship.",
      },
      {
        tag: "04",
        title: "Finance & procurement enablement",
        body: "Train your finance and AP/AR teams on new workflows, exception handling, and audit trails. Compliance that only IT understands fails at month-end.",
      },
      {
        tag: "05",
        title: "Go-live support",
        body: "Phased rollout, parallel running where needed, and hypercare through your first mandatory reporting period.",
      },
    ],
  },
  proof: {
    headline: "Production delivery, not slideware",
    body: "19 years delivering enterprise systems across government, banking, telecom, education, and industry — including compliance-grade financial platforms and a student system serving 20,000+ users in production.",
    smartErp:
      "Our ERP practice is built on SmartERP, our ERPNext-based platform, configured for UAE VAT and PINT AE readiness.",
    integrity:
      "We label every engagement honestly — what's production-proven and what's purpose-built for this mandate.",
    caseStudiesCta: "View case studies →",
  },
  lead: {
    id: "checklist",
    headline: "Are you ready for 1 January 2027?",
    body: "Our UAE E-Invoicing Readiness Checklist covers the 12 decisions your CFO and IT lead need to make before 30 October — ASP selection, ERP gap analysis, PINT AE field mapping, and team readiness.",
    name: "Name",
    email: "Work email",
    company: "Company",
    whatsapp: "WhatsApp (optional)",
    submit: "Send me the checklist",
    privacy: "No spam. One checklist, one follow-up if you ask for it.",
    whatsappAlt: "Prefer WhatsApp? Message us CHECKLIST and we'll send it directly.",
    unlockedTitle: "Your UAE E-Invoicing Readiness Checklist",
    error: "Please complete the required fields and try again.",
  },
  faq: {
    headline: "FAQ",
    items: [
      {
        q: "Am I in scope for the October 2026 deadline?",
        a: "If your annual revenue is AED 50 million or more, you must appoint an ASP by 30 October 2026 and implement by 1 January 2027. Businesses below that threshold must appoint an ASP by 31 March 2027 and implement from 1 July 2027. We help you confirm scope in the readiness review.",
      },
      {
        q: "Do free zone companies need to comply?",
        a: "Yes. Free zone entities conducting taxable supplies in the UAE are in scope unless specific exemptions apply. Your free zone status affects tax treatment, not whether e-invoicing applies in most cases.",
      },
      {
        q: "Is B2C (consumer invoicing) included?",
        a: "The current mandate focuses on B2B and B2G transactions. B2C requirements may follow in later phases. We scope your integration to what's mandatory now and architect for what comes next.",
      },
      {
        q: "Can my current ERP be adapted, or do I need a new one?",
        a: "Often it can be adapted — if it supports structured invoice data export and API integration. We assess your current system before recommending anything. Forced rip-and-replace is a last resort, not a default.",
      },
      {
        q: "What does an ASP actually do day-to-day?",
        a: "Your ASP receives invoice data from your ERP, validates it against PINT AE rules, and transmits it through the UAE Peppol network to your buyer's system. You remain responsible for invoice accuracy; the ASP handles accredited transmission.",
      },
      {
        q: "Are you an ASP?",
        a: "No. EndEdge is an implementation partner. We help you select, integrate with, and operate alongside your ASP. We do not hold Peppol ASP accreditation.",
      },
    ],
  },
  closing: {
    headline: "30 October is closer than it looks.",
    body: "ASP selection, ERP readiness, and team enablement each take weeks — start them in September and they collide with the deadline. Begin with the checklist — or book 30 minutes with our team.",
    cta1: "Download the readiness checklist",
    cta2: "Book a consultation",
  },
  checklist: {
    title: "UAE E-Invoicing Readiness Checklist",
    howTo:
      "The UAE e-invoicing mandate creates three parallel workstreams: ASP appointment, ERP readiness, and team enablement. Each item below is a decision or deliverable — not a vague goal. If you cannot tick an item, that is your gap.",
    deadlines: [
      "Revenue AED 50 million or more: appoint ASP by 30 Oct 2026, implement by 1 Jan 2027",
      "Revenue below AED 50M: appoint ASP by 31 Mar 2027, implement from 1 Jul 2027",
      "Penalties start at AED 5,000/month for failure to appoint or implement; AED 100/invoice (capped at AED 5,000/month) for failure to issue or transmit",
    ],
    decisionsHeading: "The 12 decisions",
    items: [
      {
        number: 1,
        title: "Confirm your revenue band and deadline",
        checkbox:
          "We have confirmed whether our annual revenue is AED 50 million or more (Oct 2026 / Jan 2027 track) or below (Mar / Jul 2027 track).",
        owner: "CFO / Finance Director",
        output: "Written scope confirmation with appointment and go-live dates.",
      },
      {
        number: 2,
        title: "Map in-scope invoice types",
        checkbox:
          "We have listed all B2B and B2G invoice flows that must be e-invoiced at go-live (standard, credit notes, debit notes, self-billing if applicable).",
        owner: "Finance + IT",
        output: "Invoice type inventory with volume estimates.",
      },
      {
        number: 3,
        title: "Shortlist and select an ASP",
        checkbox:
          "We have evaluated at least two Accredited Service Providers and identified our appointee before the deadline.",
        owner: "CFO + Procurement",
        output: "Signed ASP appointment or LOI with commercial terms documented.",
      },
      {
        number: 4,
        title: "Clarify ASP vs. implementation responsibilities",
        checkbox:
          "We understand what the ASP transmits vs. what our ERP, finance team, and implementation partner must configure.",
        owner: "CFO + IT Director",
        output: "RACI matrix (ASP / internal / implementation partner).",
      },
      {
        number: 5,
        title: "Assess current ERP e-invoicing readiness",
        checkbox:
          "We have audited whether our ERP can export structured invoice data and integrate via API — or documented gaps.",
        owner: "IT + Finance systems owner",
        output: "Gap assessment: adapt vs. replace vs. middleware.",
      },
      {
        number: 6,
        title: "Define PINT AE field mapping",
        checkbox:
          "We have mapped mandatory PINT AE fields (seller/buyer IDs, tax codes, line items, totals) to our master data.",
        owner: "Finance + Implementation partner",
        output: "Field mapping document signed off by finance.",
      },
      {
        number: 7,
        title: "Validate master data quality",
        checkbox:
          "Customer/vendor TRNs, legal names, and addresses in our ERP are accurate enough for accredited transmission.",
        owner: "Finance / Master data team",
        output: "Master data cleanse plan with completion date.",
      },
      {
        number: 8,
        title: "Design ASP–ERP integration architecture",
        checkbox:
          "We have a technical design for how invoice data flows from ERP → ASP → Peppol network, including error handling and retries.",
        owner: "IT + Implementation partner",
        output: "Integration spec with test environment plan.",
      },
      {
        number: 9,
        title: "Plan UAT and parallel running",
        checkbox:
          "We have scheduled user acceptance testing and optional parallel running before mandatory go-live.",
        owner: "IT + Finance",
        output: "UAT script + cutover timeline.",
      },
      {
        number: 10,
        title: "Define finance team workflows post go-live",
        checkbox:
          "AP/AR teams know how to issue, approve, correct, and reconcile e-invoices — not just IT.",
        owner: "Finance Director",
        output: "Updated SOPs and training completion sign-off.",
      },
      {
        number: 11,
        title: "Establish exception and penalty monitoring",
        checkbox:
          "We have a process to catch failed transmissions, rejected invoices, and compliance gaps before they become penalties.",
        owner: "Finance + IT operations",
        output: "Daily/weekly exception report and escalation path.",
      },
      {
        number: 12,
        title: "Set executive steering and budget",
        checkbox:
          "A steering owner (CFO or delegate) meets implementation partner and IT on a fixed cadence until 90 days post go-live.",
        owner: "CFO / CEO",
        output: "Named sponsor, budget approved, fortnightly review calendar.",
      },
    ],
    nextStep: "Ticked fewer than 8?",
    nextBody:
      "You likely need an implementation partner before the ASP deadline — not after. EndEdge helps UAE businesses deploy or adapt ERPNext/SmartERP, map PINT AE, integrate with your ASP, and enable finance teams. We are an implementation partner, not an ASP.",
  },
};

const ar: ErpPageContent = {
  meta: {
    title: "الامتثال للفوترة الإلكترونية وERP",
    description:
      "شريك تنفيذ الفوترة الإلكترونية في الإمارات. ERPNext وSmartERP وربط PINT AE وتكامل ASP وتمكين فرق المالية. موعد تعيين ASP: 30 أكتوبر 2026 للمنشآت التي إيراداتها 50 مليون درهم أو أكثر.",
  },
  hero: {
    eyebrow: "الفوترة الإلكترونية في الإمارات · امتثال قبل الموعد النهائي",
    headline: "30 أكتوبر موعد تعيين مزوّد الخدمة المعتمد (ASP). نحن نتولّى التنفيذ.",
    subhead:
      "برنامج الفوترة الإلكترونية في الإمارات ساري المفعول. إذا كان إيراد منشأتكم 50 مليون درهم أو أكثر، يجب تعيين مزوّد خدمة معتمد (Accredited Service Provider — ASP) بحلول 30 أكتوبر 2026. يبدأ التطبيق الإلزامي في 1 يناير 2027 — مع غرامات تبدأ من 5,000 درهم شهرياً عن عدم تعيين ASP أو التطبيق في الموعد (100 درهم لكل فاتورة، بحد أقصى 5,000 درهم شهرياً، عن عدم إصدار أو إرسال فواتير إلكترونية متوافقة).",
    partnerLine:
      "EndEdge شريك تنفيذ — لا نقدّم خدمات ASP. ننشر أو نكيّف نظام ERP لديكم، نربط الحقول بمتطلبات PINT AE، نتكامل مع ASP الذي تعيّنونه، ونهيّئ فرقكم المالية — لتلتزموا بالموعد دون إعادة بناء عملياتكم من الصفر.",
    ctaPrimary: "حمّلوا قائمة جاهزية الفوترة الإلكترونية في الإمارات",
    ctaSecondary: "احجزوا استشارة امتثال",
    trustLine: "شريك تنفيذ · لسنا ASP · مقرّنا في دبي · 19 عاماً من تنفيذ الأنظمة المؤسسية",
  },
  explainer: {
    headline: "ASP أم شريك تنفيذ — ما الفرق؟",
    intro: "كثير من قادة المالية يخلطون بين المصطلحين. لكل منهما دور مختلف.",
    columns: { asp: "مزوّد الخدمة المعتمد (ASP)", partner: "شريك التنفيذ (EndEdge)" },
    rows: [
      {
        label: "الدور",
        asp: "معتمد لإرسال الفواتير الإلكترونية عبر شبكة Peppol في الإمارات نيابة عنكم",
        partner: "يكوّن ERP، يربط حقول PINT AE، يتكامل مع ASP الذي اخترتموه، يدرّب فريقكم",
      },
      {
        label: "الاعتماد",
        asp: "يتطلب شهادة Peppol وتاريخاً تشغيلياً لا يقل عن عامين",
        partner: "لا يحتاج اعتماد ASP",
      },
      {
        label: "ما تحتاجونه",
        asp: "منشآت 50 مليون درهم أو أكثر: تعيين ASP بحلول 30 أكتوبر 2026، التطبيق بحلول 1 يناير 2027. منشآت أصغر: التعيين بحلول 31 مارس 2027، التطبيق من 1 يوليو 2027",
        partner: "تحتاجون إلى من يجعل ERP يعمل فعلياً مع ASP",
      },
      {
        label: "دور EndEdge",
        asp: "لا نقدّم خدمات ASP",
        partner: "هذا دورنا — ERPNext وSmartERP والتكامل والتمكين",
      },
    ],
    bottomLine: "أنتم تعيّنون ASP. نتأكد من أن أنظمتكم وعملياتكم وفرقكم جاهزة عند بدء الإلزام.",
  },
  scope: {
    headline: "ما نقدّمه",
    items: [
      {
        tag: "01",
        title: "نشر أو تكييف ERP",
        body: "نشر ERPNext أو SmartERP من الصفر، أو تكييف ERP قائم — بعد مراجعة جاهزية، لا افتراضات مسبقة.",
      },
      {
        tag: "02",
        title: "ربط حقول PINT AE",
        body: "ربط حقول الفاتورة ورموز الضريبة ومعرّفات البائع/المشتري بمتطلبات PINT AE. التحقق من تنسيق الإرسال لدى ASP قبل الإطلاق.",
      },
      {
        tag: "03",
        title: "تكامل ASP",
        body: "ربط ERP بمزوّد الخدمة المعتمد الذي عيّنتموه. نتولى التكامل التقني؛ العلاقة التجارية مع ASP تبقى لديكم.",
      },
      {
        tag: "04",
        title: "تمكين المالية والمشتريات",
        body: "تدريب فرق المالية والذمم على سير العمل الجديد ومعالجة الاستثناءات ومسارات التدقيق. الامتثال الذي لا يفهمه سوى فريق تقنية المعلومات يتعثّر عند إقفال الشهر.",
      },
      {
        tag: "05",
        title: "دعم الإطلاق",
        body: "إطلاق مرحلي، تشغيل متوازٍ عند الحاجة، ودعم مكثّف خلال أول فترة إبلاغ إلزامية.",
      },
    ],
  },
  proof: {
    headline: "تنفيذ فعلي، لا عروض نظرية",
    body: "19 عاماً من تنفيذ الأنظمة المؤسسية عبر الحكومة والمصارف والاتصالات والتعليم والصناعة — بما في ذلك منصات مالية بمستوى امتثال ونظام طلاب يخدم أكثر من 20,000 مستخدم في بيئة إنتاج.",
    smartErp:
      "ممارسة ERP لدينا مبنية على SmartERP، منصتنا القائمة على ERPNext، والمُهيأة لضريبة القيمة المضافة في الإمارات وجاهزية PINT AE.",
    integrity:
      "نُسمّي كل مشروع بدقة وأمانة — ما هو مُثبت في الإنتاج وما هو مُصمَّم خصيصاً لهذا الإلزام.",
    caseStudiesCta: "استعرضوا دراسات الحالة ←",
  },
  lead: {
    id: "checklist",
    headline: "هل أنتم جاهزون لـ 1 يناير 2027؟",
    body: "قائمة جاهزية الفوترة الإلكترونية في الإمارات تغطي الـ 12 قراراً التي يحتاجها CFO ومدير IT قبل 30 أكتوبر — اختيار ASP، تحليل فجوات ERP، ربط PINT AE، وجاهزية الفريق.",
    name: "الاسم",
    email: "البريد الوظيفي",
    company: "الشركة",
    whatsapp: "واتساب (اختياري)",
    submit: "أرسلوا لي القائمة",
    privacy: "لا رسائل مزعجة. قائمة واحدة، متابعة واحدة إذا طلبتم ذلك.",
    whatsappAlt: "تفضّلون واتساب؟ راسلونا CHECKLIST ونرسلها مباشرة.",
    unlockedTitle: "قائمة جاهزية الفوترة الإلكترونية في الإمارات",
    error: "يرجى إكمال الحقول المطلوبة والمحاولة مجدداً.",
  },
  faq: {
    headline: "الأسئلة الشائعة",
    items: [
      {
        q: "هل منشأتي مشمولة بموعد أكتوبر 2026؟",
        a: "إذا كان إيرادكم السنوي 50 مليون درهم أو أكثر، يجب تعيين ASP بحلول 30 أكتوبر 2026 والتطبيق بحلول 1 يناير 2027. المنشآت دون هذا الحد: التعيين بحلول 31 مارس 2027، والتطبيق من 1 يوليو 2027. نساعدكم على تأكيد نطاقكم في مراجعة الجاهزية.",
      },
      {
        q: "هل شركات المناطق الحرة ملزمة؟",
        a: "نعم. الكيانات في المناطق الحرة التي تجري توريدات خاضعة للضريبة في الإمارات مشمولة ما لم تنطبق إعفاءات محددة. وضع المنطقة الحرة يؤثر على المعاملة الضريبية، لا على انطباق الفوترة الإلكترونية في أغلب الحالات.",
      },
      {
        q: "هل B2C (فواتير المستهلك) مشمول؟",
        a: "الإلزام الحالي يركز على B2B وB2G. قد يُشمل B2C في مراحل لاحقة. نحدّ نطاق التكامل لما هو إلزامي الآن ونصمّم لما يلي.",
      },
      {
        q: "هل يمكن تكييف ERP الحالي؟",
        a: "غالباً نعم، إذا دعم تصدير بيانات الفاتورة المنظّمة وتكامل API. نقيّم نظامكم قبل أي توصية. الاستبدال الكامل ملاذ أخير، لا افتراضاً.",
      },
      {
        q: "ماذا يفعل ASP يومياً؟",
        a: "يستقبل بيانات الفاتورة من ERP، يتحقق من PINT AE، يرسل عبر Peppol. أنتم مسؤولون عن دقة الفاتورة؛ ASP يتولى الإرسال المعتمد.",
      },
      {
        q: "هل EndEdge ASP؟",
        a: "لا. EndEdge شريك تنفيذ. نساعدكم على الاختيار والتكامل والتشغيل إلى جانب ASP. لا نحمل اعتماد Peppol ASP.",
      },
    ],
  },
  closing: {
    headline: "30 أكتوبر أقرب مما يبدو.",
    body: "اختيار ASP، وجاهزية ERP، وتمكين الفريق — كل منها يحتاج أسابيع. ابدأوا في سبتمبر وستتصادم مع الموعد النهائي. ابدأوا بالقائمة — أو احجزوا 30 دقيقة مع فريقنا.",
    cta1: "حمّلوا قائمة الجاهزية",
    cta2: "احجزوا استشارة",
  },
  checklist: {
    title: "قائمة جاهزية الفوترة الإلكترونية في الإمارات",
    howTo:
      "إلزام الفوترة الإلكترونية في الإمارات يخلق ثلاثة مسارات متوازية: تعيين ASP، جاهزية ERP، تمكين الفريق. كل بند أدناه قرار أو مخرج — لا هدفاً عاماً. إن لم تستطيعوا وضع علامة، فهذه فجوة.",
    deadlines: [
      "إيراد 50 مليون درهم أو أكثر: تعيين ASP بحلول 30 أكتوبر 2026، التطبيق بحلول 1 يناير 2027",
      "دون 50 مليون درهم: التعيين بحلول 31 مارس 2027، التطبيق من 1 يوليو 2027",
      "الغرامات تبدأ من 5,000 درهم شهرياً عن عدم التعيين أو التطبيق؛ 100 درهم/فاتورة (حد أقصى 5,000 درهم/شهر) عن عدم الإصدار أو الإرسال",
    ],
    decisionsHeading: "الـ 12 قراراً",
    items: [
      {
        number: 1,
        title: "تأكيد شريحة الإيراد والموعد النهائي",
        checkbox:
          "أكّدنا ما إذا كان إيرادنا السنوي 50 مليون درهم أو أكثر (مسار أكتوبر/يناير) أو أقل (مسار مارس/يوليو).",
        owner: "CFO / مدير المالية",
        output: "تأكيد مكتوب بالنطاق ومواعيد التعيين والإطلاق.",
      },
      {
        number: 2,
        title: "حصر أنواع الفواتير المشمولة",
        checkbox:
          "أعددنا قائمة بجميع تدفقات B2B وB2G التي يجب أن تكون إلكترونية عند الإطلاق (عادية، إشعارات دائن/مدين، self-billing إن وُجد).",
        owner: "المالية + IT",
        output: "جرد أنواع الفواتير مع تقديرات الحجم.",
      },
      {
        number: 3,
        title: "اختصار القائمة واختيار ASP",
        checkbox:
          "قيّمنا مزوّدين معتمدين (ASP) على الأقل وحدّدنا المعيّن قبل الموعد النهائي.",
        owner: "CFO + المشتريات",
        output: "تعيين ASP موقّع أو LOI مع الشروط التجارية.",
      },
      {
        number: 4,
        title: "توضيح مسؤوليات ASP مقابل التنفيذ",
        checkbox:
          "نفهم ما يرسله ASP مقابل ما يجب على ERP وفريق المالية وشريك التنفيذ تكوينه.",
        owner: "CFO + مدير IT",
        output: "مصفوفة RACI (ASP / داخلي / شريك تنفيذ).",
      },
      {
        number: 5,
        title: "تقييم جاهزية ERP للفوترة الإلكترونية",
        checkbox:
          "راجعنا ما إذا كان ERP يصدّر بيانات فاتورة منظّمة ويتكامل عبر API — أو وثّقنا الفجوات.",
        owner: "IT + مسؤول أنظمة المالية",
        output: "تقييم فجوات: تكييف / استبدال / middleware.",
      },
      {
        number: 6,
        title: "تعريف ربط حقول PINT AE",
        checkbox:
          "ربطنا الحقول الإلزامية (معرّفات البائع/المشتري، رموز الضريبة، البنود، الإجماليات) ببياناتنا الرئيسية.",
        owner: "المالية + شريك التنفيذ",
        output: "وثيقة ربط حقول معتمدة من المالية.",
      },
      {
        number: 7,
        title: "التحقق من جودة البيانات الرئيسية",
        checkbox:
          "TRN وأسماء وعناوين العملاء/الموردين في ERP دقيقة بما يكفي للإرسال المعتمد.",
        owner: "المالية / فريق البيانات الرئيسية",
        output: "خطة تنظيف بيانات مع تاريخ إنجاز.",
      },
      {
        number: 8,
        title: "تصميم بنية تكامل ASP–ERP",
        checkbox:
          "لدينا تصميم تقني لتدفق البيانات ERP → ASP → شبكة Peppol، بما في ذلك معالجة الأخطاء وإعادة المحاولة.",
        owner: "IT + شريك التنفيذ",
        output: "مواصفة تكامل + خطة بيئة اختبار.",
      },
      {
        number: 9,
        title: "تخطيط UAT والتشغيل المتوازي",
        checkbox:
          "جدولنا اختبار قبول المستخدم وتشغيلاً متوازياً اختيارياً قبل الإطلاق الإلزامي.",
        owner: "IT + المالية",
        output: "سيناريو UAT + جدول cutover.",
      },
      {
        number: 10,
        title: "سير عمل فريق المالية بعد الإطلاق",
        checkbox:
          "فرق AP/AR تعرف كيف تصدر وتوافق وتصحّح وتسوّي الفواتير الإلكترونية — لا IT وحده.",
        owner: "مدير المالية",
        output: "SOPs محدّثة + تأكيد إتمام التدريب.",
      },
      {
        number: 11,
        title: "مراقبة الاستثناءات والغرامات",
        checkbox:
          "لدينا عملية لرصد الإرسالات الفاشلة والفواتير المرفوضة وفجوات الامتثال قبل أن تصبح غرامات.",
        owner: "المالية + عمليات IT",
        output: "تقرير استثناءات يومي/أسبوعي ومسار تصعيد.",
      },
      {
        number: 12,
        title: "حوكمة تنفيذية وميزانية",
        checkbox:
          "راعٍ تنفيذي (CFO أو من ينوب) يلتقي شريك التنفيذ وIT بإيقاع ثابت حتى 90 يوماً بعد الإطلاق.",
        owner: "CFO / CEO",
        output: "راعٍ معيّن، ميزانية معتمدة، جدول مراجعة كل أسبوعين.",
      },
    ],
    nextStep: "أقل من 8 بنود؟",
    nextBody:
      "على الأرجح تحتاجون شريك تنفيذ قبل موعد ASP — لا بعده. EndEdge يساعد منشآت الإمارات على نشر أو تكييف ERPNext/SmartERP، وربط PINT AE، والتكامل مع ASP، وتمكين فرق المالية. نحن شريك تنفيذ، لسنا ASP.",
  },
};

export const ERP_SLUG = "erp-e-invoicing";

export function getErpPageContent(locale: Locale): ErpPageContent {
  return locale === "ar" ? ar : en;
}
