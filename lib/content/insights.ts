import type { Locale } from "@/lib/i18n/config";

export type InsightSection = {
  heading: string;
  paras: string[];
};

export type InsightArticle = {
  slug: string;
  category: string;
  relatedPath: string;
  title: string;
  intro: string;
  sections: InsightSection[];
  closing: string;
};

const en: InsightArticle[] = [
  {
    slug: "uae-e-invoicing-30-october-deadline",
    category: "ERP & E-Invoicing",
    relatedPath: "/services/erp-e-invoicing",
    title: "The 30 October Deadline: What UAE Finance Teams Still Get Wrong About E-Invoicing",
    intro: "Most finance teams treat e-invoicing compliance as an IT ticket. It isn't. It's a process problem wearing IT's clothes — and with the UAE's 30 October 2026 deadline approaching, the gap between 'we have an ERP' and 'we're actually compliant' is where most organizations get caught out.",
    sections: [
      {
        heading: "Why the deadline is a hard wall, not a soft target",
        paras: ["PINT AE, the UAE's e-invoicing data standard, isn't a checkbox on an existing invoice template — it requires structured data exchange through an Accredited Service Provider (ASP), validated formats, and real-time or near-real-time reporting. Systems that 'produce invoices' today may still fail every one of these requirements."],
      },
      {
        heading: "The assumptions that quietly derail projects",
        paras: ["Three assumptions show up in almost every stalled compliance project: that the existing ERP already handles this (it usually doesn't, out of the box); that IT alone can implement it (finance process changes are unavoidable); and that testing can happen close to the deadline (ASP onboarding and validation cycles take longer than most teams expect)."],
      },
      {
        heading: "A realistic timeline, counted backward",
        paras: ["Working back from 30 October 2026: ASP selection and contracting should be locked in well before Q3, integration and mapping (PINT AE field mapping against your chart of accounts) needs a dedicated sprint, and parallel-running old and new invoicing needs at least one full reporting cycle before cutover."],
      },
      {
        heading: "What enablement actually means",
        paras: ["Software alone doesn't make a finance team compliant. Enablement means walking staff through the new invoice lifecycle, running exception-handling drills for rejected invoices, and building a rollback plan for the first live reporting period."],
      },
    ],
    closing: "If you're not certain your organization would pass a PINT AE compliance check today, that uncertainty is the most useful signal you'll get before the deadline — not after.",
  },
  {
    slug: "ai-ready-how-to-actually-check",
    category: "AI Automation",
    relatedPath: "/#assessment",
    title: "Your IT Vendor Says 'AI-Ready.' Here's How to Actually Check.",
    intro: "'AI-ready' has quietly become the most overused phrase in enterprise tech marketing. It's applied to businesses with clean, integrated data and to businesses with three spreadsheets and a shared inbox, using the same confident tone. Here's how to tell the difference before you spend on either.",
    sections: [
      {
        heading: "Readiness is an infrastructure question, not a model question",
        paras: ["The choice of AI model rarely determines whether a project succeeds. What determines it is whether your data is structured, accessible, and trustworthy enough for a model to work with — which is an infrastructure and process question, not a technology-shopping question."],
      },
      {
        heading: "Five signals of genuine readiness",
        paras: ["Clean, centralized data with clear ownership; documented processes (an AI system can't automate a process nobody has written down); systems that can actually talk to each other via APIs; a security posture that survives an audit; and a team that has been told, honestly, what will and won't change."],
      },
      {
        heading: "Red flags in vendor pitches",
        paras: ["Watch for vague claims about 'AI transformation' with no mention of your existing data quality, generic demos that never touch your real systems, and any pitch that skips a discovery phase entirely."],
      },
      {
        heading: "What a real assessment measures",
        paras: ["A genuine readiness check scores data quality, system integration maturity, security baseline, and organizational readiness — and returns a specific, prioritized list of gaps, not just a score."],
      },
    ],
    closing: "A five-question, thirty-second assessment won't replace a full audit, but it will tell you within a minute whether you're closer to 'ready' or to 'not yet' — which is exactly the information you need before committing budget.",
  },
  {
    slug: "arabic-first-ai-architecture",
    category: "AI Automation",
    relatedPath: "/services/ai-automation",
    title: "Arabic-First AI Isn't a Feature — It's a Different Architecture",
    intro: "Most 'Arabic support' in AI products is an English model with a translation layer bolted on. Genuine Arabic-first AI is built differently from the ground up — and the difference shows up exactly when accuracy matters most.",
    sections: [
      {
        heading: "Why Arabic NLP is structurally harder",
        paras: ["Arabic's rich morphology, the coexistence of Modern Standard Arabic and regional dialects, right-to-left script handling, and comparatively limited high-quality training data all make naive translation-based approaches fragile in ways that don't show up in a quick demo."],
      },
      {
        heading: "Translation-layer AI vs. genuinely Arabic-first pipelines",
        paras: ["A translation-layer system converts Arabic to English, processes it, then translates back — losing nuance at every step. An Arabic-first pipeline tokenizes, embeds, and retrieves in Arabic natively, preserving meaning that translation quietly discards."],
      },
      {
        heading: "Where this matters most in practice",
        paras: ["Legal and compliance document review, customer support at scale, and media or archive monitoring are exactly the domains where a mistranslated nuance turns into a real business or legal risk."],
      },
      {
        heading: "A pipeline in production",
        paras: ["An Arabic-first retrieval-augmented generation (RAG) system built for bilingual news and report archives can search, summarize, and return cited answers across large document collections — without the accuracy loss that comes from routing everything through English first."],
      },
    ],
    closing: "The right question to ask any AI vendor isn't 'do you support Arabic?' — it's 'was this built for Arabic, or translated into supporting it?'",
  },
  {
    slug: "zero-downtime-migration-20000-users",
    category: "Cloud Infrastructure",
    relatedPath: "/case-studies#government-portal-kubernetes-migration",
    title: "Zero-Downtime Migration: What It Actually Takes to Move 20,000 Users Without a Blip",
    intro: "Every migration proposal promises 'zero downtime.' Almost none explain what has to be operationally true for that promise to survive contact with a real cutover, at real scale, under real regulatory constraints.",
    sections: [
      {
        heading: "Downtime risk is a sequencing problem",
        paras: ["The technology rarely fails first — the sequencing does. Moving a system with 20,000+ active users requires knowing exactly which components can move independently, which must move together, and in what order, before a single server is touched."],
      },
      {
        heading: "The core building blocks",
        paras: ["Container platforms that let old and new environments run in parallel, data-residency constraints that dictate exactly where data can physically sit during and after migration, and a blue-green or canary cutover strategy that routes a small slice of traffic to the new environment before committing everyone."],
      },
      {
        heading: "A migration under real constraints",
        paras: ["Moving a citizen-facing government portal from on-premise VMs to a container platform, with 20,000+ registered users and strict data-residency requirements, means every cutover step needs a validated rollback path — not just a forward plan."],
      },
      {
        heading: "Monitoring and rollback triggers that catch problems first",
        paras: ["The difference between a migration users notice and one they don't is usually a monitoring threshold that triggers rollback in minutes, not a support ticket that arrives hours later."],
      },
    ],
    closing: "Before your next migration, ask your provider one question: what exactly happens in the first five minutes if the cutover doesn't go as planned?",
  },
  {
    slug: "hidden-cost-of-good-enough-managed-it",
    category: "Managed IT",
    relatedPath: "/services/managed-it",
    title: "The Hidden Cost of 'Good Enough' Managed IT",
    intro: "Good-enough IT support rarely shows up as a line item on a budget. It shows up as lost hours, delayed launches, and the slow erosion of trust in systems that are supposed to just work.",
    sections: [
      {
        heading: "Reactive vs. proactive",
        paras: ["Reactive IT fixes things when they break. Proactive managed IT monitors, patches, and secures systems before they become tickets — the difference between preventing an incident and explaining one."],
      },
      {
        heading: "Quantifying the hidden costs",
        paras: ["Downtime during business hours, security incidents that could have been caught by monitoring, and the staff time lost to workarounds around a system nobody trusts fully — none of these appear on an IT invoice, but all of them appear on a P&L."],
      },
      {
        heading: "What predictable, all-in managed IT includes",
        paras: ["Microsoft 365 administration, endpoint security and patching, and genuine 24/7 monitoring — priced as a predictable monthly cost rather than a string of surprise invoices."],
      },
      {
        heading: "Auditing your current provider",
        paras: ["Ask three questions: how quickly do they detect an issue versus how quickly you report one; what percentage of tickets are proactive versus reactive; and what would actually happen if a critical system failed at 2am."],
      },
    ],
    closing: "If you can't answer those three questions about your current provider with confidence, that's the cost you're already paying — you just haven't seen the invoice for it yet.",
  },
  {
    slug: "rag-vs-chatbots-document-intelligence",
    category: "AI Automation",
    relatedPath: "/case-studies#arabic-media-document-intelligence",
    title: "RAG vs. Chatbots: Why Document Intelligence Is the Real AI Win for Enterprises",
    intro: "The enterprise AI conversation got stuck on chatbots. The quieter, bigger win is retrieval-augmented document intelligence — search that actually understands what it's searching, and can prove where its answer came from.",
    sections: [
      {
        heading: "Why a generic chatbot fails on enterprise knowledge",
        paras: ["A chatbot without grounding hallucinates confidently, has no concept of who's allowed to see what, and can't point back to a source document — three failure modes that are tolerable in a demo and unacceptable in production."],
      },
      {
        heading: "How RAG works, without the jargon",
        paras: ["Retrieval-augmented generation retrieves the most relevant passages from your actual documents first, then generates an answer grounded in those passages — rather than generating an answer from general training data and hoping it's right."],
      },
      {
        heading: "Real use cases",
        paras: ["Contract search across thousands of agreements, compliance archive review, and bilingual media monitoring are where this distinction stops being theoretical and starts being the difference between a useful tool and a liability."],
      },
      {
        heading: "Why cited answers matter",
        paras: ["An answer with a traceable source is auditable. An answer without one is a guess wearing confident language — and in regulated or high-stakes environments, that difference is the whole point."],
      },
    ],
    closing: "If your AI initiative can't show you where an answer came from, you don't have document intelligence yet — you have a confident guess with good formatting.",
  },
  {
    slug: "five-vendors-end-to-end-accountability",
    category: "Thought Leadership",
    relatedPath: "/#contact",
    title: "Five Vendors, One Headache: The Case for End-to-End Tech Accountability",
    intro: "Ask any IT leader managing five technology vendors who's responsible when something breaks between systems. The silence that follows is the problem this article is about.",
    sections: [
      {
        heading: "The gap between vendors",
        paras: ["When infrastructure, security, applications, and AI each sit with a different provider, integration failures land in a gap nobody explicitly owns — and the incident review turns into a finger-pointing exercise instead of a fix."],
      },
      {
        heading: "The hidden cost of coordination",
        paras: ["Managing four or five vendor relationships means four or five contracts, escalation paths, and account managers — and the internal time spent coordinating between them rarely appears in any vendor's invoice."],
      },
      {
        heading: "What end-to-end ownership looks like",
        paras: ["One partner spanning infrastructure through applied AI means a single point of accountability, one number to call regardless of which layer the problem sits in, and no ambiguity about who fixes what."],
      },
      {
        heading: "When consolidation is right — and when it isn't",
        paras: ["Consolidation makes sense when vendor sprawl is already costing you coordination time and unclear ownership. It's not automatically right for every organization — some genuinely benefit from best-of-breed specialists, provided someone still owns the integration."],
      },
    ],
    closing: "If your last incident review spent more time establishing whose fault it was than fixing it, that's the actual cost of vendor sprawl — measured in hours, not invoices.",
  },
  {
    slug: "banking-grade-compliance-ops-lessons",
    category: "Banking & Finance",
    relatedPath: "/case-studies#central-bank-cheque-clearing",
    title: "What Banking-Grade Compliance Ops Taught Us About Building for Any Regulated Industry",
    intro: "Building operations for a national payments authority teaches lessons that transfer directly to any industry where audit trails and uptime aren't optional — healthcare, government, and education included.",
    sections: [
      {
        heading: "The non-negotiables in regulated systems",
        paras: ["Audit-ready reporting that regulators can verify without a special request, reconciliation accuracy at high volume, and reliability under batch processing loads that don't tolerate a quiet failure — these aren't nice-to-haves, they're the baseline."],
      },
      {
        heading: "Inside a cheque-clearing platform",
        paras: ["Delivering cheque clearing workflows and operations tooling for a national payments authority meant building high-volume batch processing, reconciliation dashboards, and reporting that holds up under regulatory audit — not just internal review."],
      },
      {
        heading: "How these principles travel beyond banking",
        paras: ["A hospital system's patient records, a government portal's citizen data, and a university's exam records all carry the same underlying requirement: an audit trail that can answer 'what happened, and who touched it' without ambiguity."],
      },
      {
        heading: "Build vs. adapt",
        paras: ["The decision isn't ideological. It depends on whether your compliance requirements are close enough to an existing platform's design that adaptation is faster and safer, or different enough that a custom build avoids years of fighting the platform's assumptions."],
      },
    ],
    closing: "The question worth asking about your own systems: if a regulator asked for a full audit trail tomorrow, how long would it take to produce — and would you trust what it showed?",
  },
  {
    slug: "erpnext-or-custom-build-uae",
    category: "ERP",
    relatedPath: "/services/erp-e-invoicing",
    title: "ERPNext or Custom Build? A Decision Framework for Growing UAE Businesses",
    intro: "The ERP mistake most growing businesses make isn't choosing the wrong platform — it's asking the platform question before they've answered the harder one about what they actually need.",
    sections: [
      {
        heading: "The real first question",
        paras: ["Before comparing platforms, the honest question is build vs. buy vs. adapt: does an existing platform's data model and workflows already match how your business operates, or would you spend more time fighting its assumptions than benefiting from its features?"],
      },
      {
        heading: "Where ERPNext / SmartERP-style deployments fit well",
        paras: ["Businesses with fairly standard finance, inventory, and operations workflows — and a genuine need to move fast — tend to benefit from adapting a mature open platform rather than building from scratch."],
      },
      {
        heading: "Where they don't fit",
        paras: ["Highly specialized operational workflows, unusual regulatory requirements, or deep integration needs with legacy systems can make adaptation slower than a focused custom build, despite the platform's maturity."],
      },
      {
        heading: "The e-invoicing angle",
        paras: ["The UAE's e-invoicing mandate changes the calculus for 2026: an ERP decision now has to account for PINT AE compliance and ASP integration as a first-class requirement, not an afterthought."],
      },
      {
        heading: "A practical framework",
        paras: ["Weigh four factors together — team size and finance complexity, industry-specific regulatory load, integration needs with existing systems, and budget for ongoing customization versus one-time build cost."],
      },
    ],
    closing: "The right ERP decision starts with an honest map of your actual processes — not a demo of someone else's.",
  },
  {
    slug: "apps-that-survive-peak-traffic",
    category: "Web & Mobile",
    relatedPath: "/services/web-mobile-development",
    title: "Building Apps That Survive Peak Traffic: Lessons from Retail & E-commerce Scaling",
    intro: "Every retail app looks fine in a demo. The real test is what happens the first time real customers show up all at once — and by then, it's too late to redesign.",
    sections: [
      {
        heading: "Why peak-traffic failures are discovered too late",
        paras: ["Load issues that only appear at real scale rarely show up in staging environments or small-scale testing, which is exactly why they get discovered during the highest-stakes moment: launch day, sale day, or holiday traffic."],
      },
      {
        heading: "Core patterns that hold up",
        paras: ["Auto-scaling infrastructure that adds capacity before it's needed rather than after users notice slowness, checkout SLAs that are tested under simulated load rather than assumed, and cloud cost optimization that doesn't sacrifice performance for savings during the exact hours that matter most."],
      },
      {
        heading: "The over-provisioning vs. under-provisioning trade-off",
        paras: ["Over-provisioning wastes budget every day of the year to protect against a handful of peak hours; under-provisioning saves budget until the one day it costs you the sale entirely. The right answer is elastic scaling, not a fixed choice between the two."],
      },
      {
        heading: "What to test before, not after",
        paras: ["Simulated peak-load testing, checkout flow stress tests, and a rollback plan for a failed deployment during a live sale — tested well before the actual event, not discovered during it."],
      },
    ],
    closing: "If your architecture hasn't been load-tested against your actual expected peak, the first real test will be your customers finding out for you.",
  },
];

const ar: InsightArticle[] = [
  {
    slug: "uae-e-invoicing-30-october-deadline",
    category: "تخطيط الموارد والفوترة الإلكترونية",
    relatedPath: "/services/erp-e-invoicing",
    title: "موعد 30 أكتوبر: ما تخطئ فيه فرق المالية في الإمارات بشأن الفوترة الإلكترونية",
    intro: "تتعامل معظم فرق المالية مع الامتثال للفوترة الإلكترونية باعتباره مهمة تقنية بحتة. لكنه ليس كذلك؛ إنه في جوهره تحدٍّ في العمليات يرتدي ثوب التقنية. ومع اقتراب الموعد النهائي في 30 أكتوبر 2026 في الإمارات، تظهر الفجوة الحقيقية بين امتلاك نظام تخطيط موارد (ERP) وبين الامتثال الفعلي.",
    sections: [
      {
        heading: "لماذا الموعد النهائي جدار صلب لا هدف مرن",
        paras: ["معيار PINT AE للفوترة الإلكترونية الإماراتي ليس مجرد خانة إضافية على نموذج فاتورة قائم؛ فهو يتطلب تبادل بيانات مهيكلة عبر مزود خدمة معتمد (ASP)، وصيغ متحقق منها، وتقارير آنية أو شبه آنية. الأنظمة التي 'تُصدر فواتير' اليوم قد تفشل في تلبية جميع هذه المتطلبات."],
      },
      {
        heading: "الافتراضات التي تُعطّل المشاريع بصمت",
        paras: ["تتكرر ثلاثة افتراضات في معظم مشاريع الامتثال المتعثرة: أن نظام تخطيط الموارد الحالي يغطي هذا المتطلب تلقائيًا (غالبًا لا يفعل)، وأن قسم تقنية المعلومات وحده قادر على التنفيذ (بينما التغيير في عمليات المالية أمر لا مفر منه)، وأن الاختبار يمكن تأجيله قريبًا من الموعد النهائي (رغم أن دورات اعتماد مزود الخدمة والتحقق تستغرق وقتًا أطول مما يتوقع معظم الفرق)."],
      },
      {
        heading: "جدول زمني واقعي بالعد التنازلي",
        paras: ["بالعد التنازلي من 30 أكتوبر 2026: يجب حسم اختيار مزود الخدمة المعتمد والتعاقد معه قبل الربع الثالث بوقت كافٍ، وتخصيص مرحلة عمل مكثفة لربط حقول PINT AE بدليل الحسابات، وتشغيل النظامين القديم والجديد بالتوازي لدورة تقارير كاملة قبل التحول النهائي."],
      },
      {
        heading: "ما الذي يعنيه 'تمكين الفريق' فعليًا",
        paras: ["البرمجيات وحدها لا تجعل فريق المالية ممتثلًا. التمكين يعني تدريب الموظفين على دورة حياة الفاتورة الجديدة، وإجراء تمارين محاكاة للتعامل مع الفواتير المرفوضة، ووضع خطة تراجع جاهزة لأول دورة تقارير فعلية."],
      },
    ],
    closing: "إذا لم تكن متأكدًا من أن مؤسستك ستجتاز اختبار الامتثال لمعيار PINT AE اليوم، فهذا الشك بحد ذاته أهم إشارة يجب أن تحصل عليها قبل الموعد النهائي، لا بعده.",
  },
  {
    slug: "ai-ready-how-to-actually-check",
    category: "أتمتة الذكاء الاصطناعي",
    relatedPath: "/#assessment",
    title: "مزوّد تقنيتك يقول إنك 'جاهز للذكاء الاصطناعي'. إليك كيف تتحقق من ذلك فعلًا",
    intro: "أصبحت عبارة 'جاهز للذكاء الاصطناعي' من أكثر العبارات استخدامًا — وسوء استخدام — في التسويق التقني للمؤسسات. تُطلق بالثقة نفسها على شركة ببيانات نظيفة ومتكاملة، وعلى أخرى تدير عملها عبر ثلاثة جداول بيانات وبريد إلكتروني مشترك. إليك كيف تميّز بينهما قبل أن تُنفق على أيٍّ منهما.",
    sections: [
      {
        heading: "الجاهزية سؤال بنية تحتية، لا سؤال نموذج",
        paras: ["اختيار نموذج الذكاء الاصطناعي نادرًا ما يحدد نجاح المشروع. ما يحدده فعليًا هو ما إذا كانت بياناتك منظمة ويسهل الوصول إليها وموثوقة بما يكفي ليعمل عليها النموذج — وهذا سؤال بنية تحتية وعمليات، لا سؤال تسوّق تقني."],
      },
      {
        heading: "خمس إشارات على الجاهزية الحقيقية",
        paras: ["بيانات نظيفة ومركزية بملكية واضحة، وعمليات موثّقة (فالذكاء الاصطناعي لا يمكنه أتمتة عملية لم يكتبها أحد)، وأنظمة قادرة فعليًا على التواصل فيما بينها عبر واجهات برمجية، ووضع أمني يصمد أمام أي تدقيق، وفريق تم إبلاغه بصدق بما سيتغير وما لن يتغير."],
      },
      {
        heading: "إشارات تحذير في عروض المزودين",
        paras: ["احذر من الادعاءات الغامضة حول 'التحول بالذكاء الاصطناعي' دون أي إشارة إلى جودة بياناتك الحالية، والعروض التوضيحية العامة التي لا تلامس أنظمتك الحقيقية، وأي عرض يتخطى مرحلة الاكتشاف والتشخيص تمامًا."],
      },
      {
        heading: "ما الذي يقيسه التقييم الحقيقي",
        paras: ["التقييم الجاد يقيس جودة البيانات، ونضج تكامل الأنظمة، والمستوى الأمني الأساسي، وجاهزية المؤسسة — ويعود بقائمة محددة ومرتّبة بالأولوية للفجوات، لا مجرد رقم."],
      },
    ],
    closing: "تقييم من خمسة أسئلة يستغرق ثلاثين ثانية لن يغني عن تدقيق كامل، لكنه سيخبرك خلال دقيقة واحدة إن كنت أقرب إلى 'الجاهزية' أو إلى 'ليس بعد' — وهي بالضبط المعلومة التي تحتاجها قبل تخصيص الميزانية.",
  },
  {
    slug: "arabic-first-ai-architecture",
    category: "أتمتة الذكاء الاصطناعي",
    relatedPath: "/services/ai-automation",
    title: "الذكاء الاصطناعي العربي أولًا ليس ميزة إضافية — بل بنية مختلفة تمامًا",
    intro: "معظم ما يُسمّى 'دعم اللغة العربية' في منتجات الذكاء الاصطناعي هو في حقيقته نموذج إنجليزي مُلحق به طبقة ترجمة. أما الذكاء الاصطناعي العربي الأصيل فيُبنى بشكل مختلف من الأساس — والفرق يظهر بوضوح تام حين تكون الدقة هي ما يهم أكثر من أي شيء آخر.",
    sections: [
      {
        heading: "لماذا تُعد معالجة اللغة العربية أكثر تعقيدًا بنيويًا",
        paras: ["الثراء الصرفي للعربية، وتعايش الفصحى المعيارية مع اللهجات الإقليمية، ومعالجة الكتابة من اليمين إلى اليسار، وندرة بيانات التدريب العالية الجودة نسبيًا — كل ذلك يجعل الأساليب القائمة على الترجمة السطحية هشّة بطرق لا تظهر في عرض توضيحي سريع."],
      },
      {
        heading: "الذكاء الاصطناعي بطبقة الترجمة مقابل الأنظمة العربية الأصيلة",
        paras: ["النظام القائم على طبقة الترجمة يحوّل العربية إلى الإنجليزية، يعالجها، ثم يترجمها مجددًا — فيفقد الدقة في كل خطوة. أما النظام العربي الأصيل فيقوم بتقطيع النص وتمثيله واسترجاعه بالعربية مباشرة، محافظًا على المعنى الذي تُهدره الترجمة بصمت."],
      },
      {
        heading: "أين يهم هذا الفرق أكثر ما يكون في الواقع",
        paras: ["مراجعة الوثائق القانونية والامتثالية، وخدمة العملاء واسعة النطاق، ومراقبة الإعلام والأرشيفات — هي بالضبط المجالات التي تتحول فيها فروق دلالية مُترجمة خطأً إلى مخاطر حقيقية على العمل أو قانونية."],
      },
      {
        heading: "نظام يعمل فعليًا في الإنتاج",
        paras: ["نظام استرجاع وتوليد معزز (RAG) مبني خصيصًا للعربية على أرشيفات إخبارية وتقارير ثنائية اللغة يمكنه البحث والتلخيص وتقديم إجابات موثّقة بمصادرها عبر مجموعات وثائق ضخمة — دون فقدان الدقة الناتج عن تمرير كل شيء عبر الإنجليزية أولًا."],
      },
    ],
    closing: "السؤال الصحيح الذي يجب طرحه على أي مزوّد ذكاء اصطناعي ليس 'هل تدعمون العربية؟'، بل 'هل بُني هذا النظام للعربية أصلًا، أم تُرجم لاحقًا ليدّعي دعمها؟'",
  },
  {
    slug: "zero-downtime-migration-20000-users",
    category: "البنية التحتية السحابية",
    relatedPath: "/case-studies#government-portal-kubernetes-migration",
    title: "الترحيل بلا توقف: ما يتطلبه فعليًا نقل 20 ألف مستخدم دون أي انقطاع",
    intro: "كل مقترح ترحيل يَعِد بـ'صفر توقف'. لكن قلّة منها تشرح ما الذي يجب أن يكون صحيحًا تشغيليًا كي يصمد هذا الوعد أمام واقع تحوّل فعلي، بحجم حقيقي، وضمن قيود تنظيمية حقيقية.",
    sections: [
      {
        heading: "مخاطر التوقف هي في جوهرها مشكلة تسلسل",
        paras: ["التقنية نادرًا ما تكون سبب الفشل الأول — بل التسلسل. ترحيل نظام يخدم أكثر من 20 ألف مستخدم نشط يتطلب معرفة دقيقة بالمكوّنات التي يمكن نقلها بشكل مستقل، وتلك التي يجب نقلها معًا، وبأي ترتيب، قبل لمس أي خادم."],
      },
      {
        heading: "الركائز الأساسية",
        paras: ["منصات الحاويات التي تتيح تشغيل البيئتين القديمة والجديدة بالتوازي، وقيود إقامة البيانات التي تحدد بدقة أين يمكن أن تقيم البيانات فعليًا أثناء الترحيل وبعده، واستراتيجية تحوّل تدريجي (Blue-Green أو Canary) توجّه جزءًا صغيرًا من الحركة إلى البيئة الجديدة قبل الالتزام الكامل بها."],
      },
      {
        heading: "ترحيل ضمن قيود حقيقية",
        paras: ["نقل بوابة خدمات حكومية تخدم المواطنين من خوادم افتراضية محلية إلى منصة حاويات، بأكثر من 20 ألف مستخدم مسجّل وضمن متطلبات صارمة لإقامة البيانات، يعني أن كل خطوة تحوّل يجب أن تملك مسار تراجع مُتحقَّقًا منه — لا مجرد خطة تقدّم إلى الأمام."],
      },
      {
        heading: "المراقبة ومحفزات التراجع التي ترصد المشكلة أولًا",
        paras: ["الفرق بين ترحيل يلاحظه المستخدمون وآخر لا يلاحظونه هو غالبًا عتبة مراقبة تُطلق التراجع خلال دقائق، لا تذكرة دعم فني تصل بعد ساعات."],
      },
    ],
    closing: "قبل ترحيلك القادم، اطرح سؤالًا واحدًا على مزوّدك: ماذا يحدث بالضبط في أول خمس دقائق إذا لم يسِر التحول كما هو مخطَّط له؟",
  },
  {
    slug: "hidden-cost-of-good-enough-managed-it",
    category: "تقنية المعلومات المُدارة",
    relatedPath: "/services/managed-it",
    title: "الكلفة الخفية لخدمات تقنية معلومات 'مقبولة إلى حد ما'",
    intro: "خدمات تقنية المعلومات 'المقبولة إلى حد ما' نادرًا ما تظهر كبند في الميزانية. بل تظهر على شكل ساعات عمل مهدورة، وإطلاقات مشاريع متأخرة، وتآكل بطيء في الثقة بأنظمة يُفترض أن تعمل ببساطة دون مشاكل.",
    sections: [
      {
        heading: "ردّ الفعل مقابل الاستباق",
        paras: ["تقنية المعلومات القائمة على ردّ الفعل تُصلح الأشياء عندما تتعطل. أما الإدارة الاستباقية فتراقب الأنظمة وتُحدّثها وتؤمّنها قبل أن تتحول إلى مشكلة — وهذا هو الفرق بين منع حادثة وتفسيرها لاحقًا."],
      },
      {
        heading: "قياس الكلفة الخفية",
        paras: ["التوقف خلال ساعات العمل، والحوادث الأمنية التي كان يمكن رصدها بالمراقبة، والوقت الذي يُهدره الموظفون في حلول بديلة حول نظام لا يثق به أحد بالكامل — لا شيء من هذا يظهر في فاتورة تقنية المعلومات، لكن كله يظهر في قائمة الأرباح والخسائر."],
      },
      {
        heading: "ما تتضمنه إدارة تقنية المعلومات الشاملة والمتوقعة الكلفة",
        paras: ["إدارة مايكروسوفت 365، وأمن نقاط النهاية والتحديثات، ومراقبة حقيقية على مدار الساعة — بكلفة شهرية متوقعة بدلًا من سلسلة فواتير مفاجئة."],
      },
      {
        heading: "تدقيق مزوّدك الحالي",
        paras: ["اطرح ثلاثة أسئلة: ما مدى سرعة اكتشافهم للمشكلة مقارنة بسرعة إبلاغك بها؟ وما نسبة التذاكر الاستباقية مقابل التفاعلية؟ وماذا سيحدث فعليًا إذا تعطّل نظام حيوي في الساعة الثانية فجرًا؟"],
      },
    ],
    closing: "إن لم تستطع الإجابة بثقة عن هذه الأسئلة الثلاثة بخصوص مزوّدك الحالي، فتلك هي الكلفة التي تدفعها بالفعل — فقط لم تصلك فاتورتها بعد.",
  },
  {
    slug: "rag-vs-chatbots-document-intelligence",
    category: "أتمتة الذكاء الاصطناعي",
    relatedPath: "/case-studies#arabic-media-document-intelligence",
    title: "الاسترجاع المعزز مقابل روبوتات الدردشة: لماذا ذكاء الوثائق هو المكسب الحقيقي للمؤسسات",
    intro: "توقف نقاش الذكاء الاصطناعي في المؤسسات عند روبوتات الدردشة. لكن المكسب الأكبر والأكثر هدوءًا هو ذكاء الوثائق القائم على الاسترجاع المعزز — بحث يفهم فعليًا ما يبحث عنه، وقادر على إثبات مصدر إجابته.",
    sections: [
      {
        heading: "لماذا يفشل روبوت الدردشة العام في معرفة المؤسسة",
        paras: ["روبوت الدردشة غير المرتكز على مصادر يهلوس بثقة، ولا يملك أي مفهوم عمّن يُسمح له برؤية ماذا، ولا يمكنه الإشارة إلى وثيقة مصدرية — ثلاثة إخفاقات مقبولة في عرض توضيحي وغير مقبولة إطلاقًا في بيئة إنتاجية."],
      },
      {
        heading: "كيف يعمل الاسترجاع المعزز دون تعقيد",
        paras: ["يقوم التوليد المعزز بالاسترجاع أولًا بجلب أكثر المقاطع صلة من وثائقك الفعلية، ثم يولّد إجابة مرتكزة على تلك المقاطع — بدلًا من توليد إجابة من بيانات تدريب عامة والأمل في أن تكون صحيحة."],
      },
      {
        heading: "حالات استخدام حقيقية",
        paras: ["البحث في العقود عبر آلاف الاتفاقيات، ومراجعة أرشيفات الامتثال، ومراقبة الإعلام ثنائي اللغة — هي المجالات التي يتوقف فيها هذا الفرق عن كونه نظريًا ويصبح الفارق بين أداة مفيدة وعبء قانوني."],
      },
      {
        heading: "لماذا تهم الإجابات الموثّقة بمصادرها",
        paras: ["الإجابة القابلة للتتبع إلى مصدرها قابلة للتدقيق. أما الإجابة بلا مصدر فهي تخمين يرتدي لغة واثقة — وفي البيئات التنظيمية أو عالية المخاطر، هذا الفرق هو بيت القصيد بالكامل."],
      },
    ],
    closing: "إذا كانت مبادرة الذكاء الاصطناعي لديك غير قادرة على إظهار مصدر إجابتها، فأنت لا تملك بعد ذكاء وثائق حقيقيًا — بل تملك تخمينًا واثقًا بتنسيق أنيق.",
  },
  {
    slug: "five-vendors-end-to-end-accountability",
    category: "رؤية قيادية",
    relatedPath: "/#contact",
    title: "خمسة مزوّدين، صداع واحد: لماذا تحتاج إلى مساءلة تقنية شاملة من طرف واحد",
    intro: "اسأل أي قائد تقني يدير علاقات مع خمسة مزوّدين تقنيين: من المسؤول عندما يتعطل شيء بين الأنظمة؟ الصمت الذي يعقب السؤال هو بالضبط المشكلة التي يتناولها هذا المقال.",
    sections: [
      {
        heading: "الفجوة بين المزوّدين",
        paras: ["عندما تكون البنية التحتية والأمن والتطبيقات والذكاء الاصطناعي كلٌّ لدى مزوّد مختلف، تقع إخفاقات التكامل في فجوة لا يملكها أحد صراحةً — فتتحول مراجعة الحادثة إلى تبادل اتهامات بدلًا من إصلاح فعلي."],
      },
      {
        heading: "الكلفة الخفية للتنسيق",
        paras: ["إدارة أربع أو خمس علاقات مع مزوّدين تعني أربعة أو خمسة عقود، ومسارات تصعيد، ومديري حسابات — والوقت الداخلي المُستنفَد في التنسيق بينهم نادرًا ما يظهر في فاتورة أي مزوّد."],
      },
      {
        heading: "كيف تبدو الملكية الشاملة من طرف واحد",
        paras: ["شريك واحد يغطي البنية التحتية وصولًا إلى الذكاء الاصطناعي التطبيقي يعني نقطة مساءلة واحدة، ورقم هاتف واحد بغض النظر عن الطبقة التي تحدث فيها المشكلة، ودون أي غموض حول من يُصلح ماذا."],
      },
      {
        heading: "متى يكون الدمج صائبًا — ومتى لا يكون",
        paras: ["الدمج منطقي عندما يكلّفك تشتت المزوّدين وقتًا في التنسيق وغموضًا في الملكية بالفعل. لكنه ليس الخيار الأمثل تلقائيًا لكل مؤسسة — فبعضها يستفيد فعلًا من متخصصين الأفضل في فئتهم، شريطة أن يظل أحدهم مسؤولًا عن التكامل."],
      },
    ],
    closing: "إذا كانت آخر مراجعة حادثة لديك استغرقت وقتًا لتحديد المسؤول أكثر مما استغرقته لإصلاح المشكلة، فتلك هي الكلفة الحقيقية لتشتت المزوّدين — تُقاس بالساعات، لا بالفواتير.",
  },
  {
    slug: "banking-grade-compliance-ops-lessons",
    category: "البنوك والمالية",
    relatedPath: "/case-studies#central-bank-cheque-clearing",
    title: "ماذا علّمتنا عمليات الامتثال بمستوى البنوك عن البناء لأي قطاع منظّم",
    intro: "بناء العمليات لهيئة مدفوعات وطنية يُعلّم دروسًا تنتقل مباشرة إلى أي قطاع لا تُعدّ فيه مسارات التدقيق واستمرارية التشغيل خيارًا — بما في ذلك الرعاية الصحية والحكومة والتعليم.",
    sections: [
      {
        heading: "الثوابت غير القابلة للتفاوض في الأنظمة المنظّمة",
        paras: ["تقارير جاهزة للتدقيق يمكن للجهات الرقابية التحقق منها دون طلب خاص، ودقة تسوية عالية عند الأحجام الكبيرة، وموثوقية تحت أحمال معالجة دفعية لا تحتمل فشلًا صامتًا — هذه ليست إضافات مرغوبة، بل هي الحد الأدنى المطلوب."],
      },
      {
        heading: "داخل منصة مقاصة الشيكات",
        paras: ["تقديم سير عمل مقاصة الشيكات وأدوات العمليات لهيئة مدفوعات وطنية يعني بناء معالجة دفعية بحجم كبير، ولوحات تسوية، وتقارير تصمد أمام التدقيق الرقابي — لا مجرد المراجعة الداخلية."],
      },
      {
        heading: "كيف تنتقل هذه المبادئ خارج القطاع المصرفي",
        paras: ["سجلات مرضى في نظام مستشفى، وبيانات مواطنين في بوابة حكومية، وسجلات امتحانات في جامعة — كلها تحمل المتطلب الجوهري نفسه: مسار تدقيق يجيب دون غموض عن 'ماذا حدث، ومن لمسه'."],
      },
      {
        heading: "البناء مقابل التكييف",
        paras: ["القرار ليس أيديولوجيًا. بل يعتمد على ما إذا كانت متطلبات الامتثال قريبة بما يكفي من تصميم منصة قائمة بحيث يكون التكييف أسرع وأكثر أمانًا، أو مختلفة بما يكفي بحيث يوفر البناء المخصص سنوات من الصراع مع افتراضات المنصة."],
      },
    ],
    closing: "السؤال الذي يستحق أن تطرحه على أنظمتك: لو طلبت جهة رقابية غدًا مسار تدقيق كاملًا، كم من الوقت سيستغرق إنتاجه — وهل تثق بما سيُظهره؟",
  },
  {
    slug: "erpnext-or-custom-build-uae",
    category: "تخطيط موارد المؤسسات",
    relatedPath: "/services/erp-e-invoicing",
    title: "ERPNext أم بناء مخصص؟ إطار قرار للشركات الإماراتية النامية",
    intro: "الخطأ الأكثر شيوعًا الذي ترتكبه الشركات النامية في قرار تخطيط الموارد ليس اختيار المنصة الخاطئة — بل طرح سؤال المنصة قبل الإجابة عن السؤال الأصعب: ما الذي تحتاجه مؤسستك فعليًا؟",
    sections: [
      {
        heading: "السؤال الأول الحقيقي",
        paras: ["قبل مقارنة المنصات، السؤال الصادق هو: بناء أم شراء أم تكييف؟ هل يتطابق نموذج بيانات وسير عمل منصة قائمة مع طريقة عمل مؤسستك فعلًا، أم أنك ستقضي وقتًا في مقاومة افتراضاتها أكثر مما تستفيد من ميزاتها؟"],
      },
      {
        heading: "أين تنجح عمليات نشر ERPNext / SmartERP",
        paras: ["الشركات ذات سير عمل مالي ومخزوني وتشغيلي قياسي إلى حد معقول، والتي تحتاج فعليًا إلى التحرك بسرعة، تميل إلى الاستفادة من تكييف منصة مفتوحة ناضجة بدلًا من البناء من الصفر."],
      },
      {
        heading: "أين لا تنجح",
        paras: ["سير العمل التشغيلي شديد التخصص، أو المتطلبات التنظيمية غير الاعتيادية، أو الحاجة إلى تكامل عميق مع أنظمة قديمة قد تجعل التكييف أبطأ من بناء مخصص مركّز، رغم نضج المنصة."],
      },
      {
        heading: "زاوية الفوترة الإلكترونية",
        paras: ["إلزامية الفوترة الإلكترونية في الإمارات تغيّر المعادلة لعام 2026: قرار تخطيط الموارد الآن يجب أن يأخذ الامتثال لمعيار PINT AE والتكامل مع مزوّد الخدمة المعتمد كمتطلب أساسي، لا كفكرة لاحقة."],
      },
      {
        heading: "إطار عملي",
        paras: ["وازِن بين أربعة عوامل معًا: حجم الفريق وتعقيد العمليات المالية، والعبء التنظيمي الخاص بالقطاع، ومتطلبات التكامل مع الأنظمة القائمة، والميزانية المخصصة للتخصيص المستمر مقابل كلفة البناء لمرة واحدة."],
      },
    ],
    closing: "القرار الصحيح لتخطيط الموارد يبدأ بخريطة صادقة لعملياتك الفعلية — لا بعرض توضيحي لعمليات شركة أخرى.",
  },
  {
    slug: "apps-that-survive-peak-traffic",
    category: "الويب والجوال",
    relatedPath: "/services/web-mobile-development",
    title: "بناء تطبيقات تصمد أمام ذروة الحركة: دروس من توسّع التجزئة والتجارة الإلكترونية",
    intro: "كل تطبيق تجزئة يبدو ممتازًا في العرض التوضيحي. الاختبار الحقيقي هو ما يحدث أول مرة يصل فيها عملاء حقيقيون دفعة واحدة — وعندها يكون الوقت قد فات لإعادة التصميم.",
    sections: [
      {
        heading: "لماذا تُكتشف إخفاقات ذروة الحركة متأخرًا جدًا",
        paras: ["مشاكل الحمل التي لا تظهر إلا عند الحجم الحقيقي نادرًا ما تظهر في بيئات الاختبار أو الاختبارات صغيرة النطاق — ولهذا بالضبط تُكتشف في أخطر لحظة ممكنة: يوم الإطلاق، أو يوم التخفيضات، أو حركة موسم الأعياد."],
      },
      {
        heading: "الأنماط الأساسية التي تصمد",
        paras: ["بنية تحتية ذاتية التوسع تضيف سعة قبل الحاجة إليها لا بعد أن يلاحظ المستخدمون البطء، واتفاقيات مستوى خدمة لعملية الدفع مُختبرة تحت حمل محاكى لا مفترضة نظريًا، وتحسين كلفة السحابة الذي لا يضحي بالأداء توفيرًا للمال في أهم الساعات على الإطلاق."],
      },
      {
        heading: "المفاضلة بين التزويد الزائد والتزويد الناقص",
        paras: ["التزويد الزائد يهدر الميزانية كل يوم في السنة لحماية بضع ساعات ذروة؛ والتزويد الناقص يوفر الميزانية حتى اليوم الذي يكلّفك فيه البيع بالكامل. الإجابة الصحيحة هي التوسع المرن، لا خيار ثابت بين الاثنين."],
      },
      {
        heading: "ما يجب اختباره قبل الحدث لا بعده",
        paras: ["اختبار حمل ذروة محاكى، واختبارات ضغط على مسار الدفع، وخطة تراجع جاهزة لنشر فاشل أثناء تخفيضات فعلية — كلها يجب اختبارها قبل الحدث الفعلي بوقت كافٍ، لا اكتشافها أثناءه."],
      },
    ],
    closing: "إذا لم تُختبر بنيتك التقنية تحت الحمل مقابل ذروتك المتوقعة فعليًا، فسيكون الاختبار الحقيقي الأول هو عملاؤك وهم يكتشفون ذلك بدلًا منك.",
  },
];

export function getInsightArticles(locale: Locale): InsightArticle[] {
  return locale === "ar" ? ar : en;
}

export function getInsightArticle(
  locale: Locale,
  slug: string,
): InsightArticle | undefined {
  return getInsightArticles(locale).find((a) => a.slug === slug);
}

export function getInsightSlugs(): string[] {
  return en.map((a) => a.slug);
}
