import type { Locale } from "@/lib/i18n/config";
import type { ServiceLandingContent } from "@/lib/content/service-landing";

export const AI_AUTOMATION_SLUG = "ai-automation";

const aiCodes = ["6201"];

const en: ServiceLandingContent = {
  licenseCodes: aiCodes,
  meta: {
    title: "AI Automation & Agents",
    description:
      "Practical AI automation from EndEdge — workflow agents, RAG document intelligence, Arabic-first NLP, and production systems with honest production vs demonstrator labeling.",
  },
  hero: {
    eyebrow: "AI Automation · Applied intelligence",
    headline: "Automate repetitive work with AI that ships to production.",
    subhead:
      "We build workflow automation, retrieval-augmented assistants, and intelligent agents on top of your existing systems — with citations, governance, and Arabic/English support where your users need it.",
    body:
      "EndEdge distinguishes production deployments from research demonstrators. Our AI work spans media document intelligence, knowledge search, and operational automation — backed by peer-reviewed Arabic NLP research where applicable.",
    ctaPrimary: "Book an AI scoping call",
    ctaSecondary: "Try the AI readiness check",
    ctaSecondaryPath: "/#assessment",
    trustLine: "Production vs demonstrator labels · Arabic-first · RAG + agents + MCP integrations",
  },
  scope: {
    headline: "What we deliver",
    items: [
      {
        tag: "01 · Automation",
        title: "Workflow automation & agents",
        body: "Connect CRM, ERP, ticketing, and internal tools with reliable automations — scheduled jobs, event triggers, and LLM-assisted steps where they reduce manual work without hiding the audit trail.",
      },
      {
        tag: "02 · RAG",
        title: "Document & knowledge intelligence",
        body: "Retrieval-augmented pipelines over your PDFs, policies, and archives — with OCR, bilingual chunking, reranking, and citation-required answers so teams trust the output.",
      },
      {
        tag: "03 · Arabic AI",
        title: "Arabic-first NLP & UX",
        body: "Mixed Arabic/English corpora, RTL interfaces, and models tuned for regional phrasing — not English-only chatbots pasted onto Arabic workflows.",
      },
      {
        tag: "04 · Governance",
        title: "Security, scope & audit",
        body: "Role-scoped collections, query logs, PII rules, SSO, and on-prem or VPC deployment options when data cannot leave your boundary.",
      },
    ],
  },
  delivery: {
    headline: "How we de-risk AI projects",
    steps: [
      {
        title: "Readiness & use-case fit",
        body: "Start with our AI readiness assessment or a scoping workshop. We kill bad use cases early — before you fund a six-month science project.",
      },
      {
        title: "Pilot with metrics",
        body: "Small cohort, measurable KPIs (time saved, error rate, citation accuracy), and human review loops before wider rollout.",
      },
      {
        title: "Production hardening",
        body: "Monitoring, fallbacks, cost controls, and handover docs — the same ops discipline we apply to infrastructure and managed IT.",
      },
    ],
  },
  proof: {
    headline: "Integrity-first proof",
    body: "Case studies include Arabic media document intelligence (production, research-backed RAG) and enterprise automation outcomes with documented stacks. Research demonstrators are labeled explicitly — never sold as client production.",
    caseStudiesCta: "Read case studies →",
  },
  faq: {
    headline: "Common questions",
    items: [
      {
        q: "Do you fine-tune models or use RAG?",
        a: "Most client value comes from RAG, workflow design, and integration — not custom model training. We recommend fine-tuning only when retrieval alone cannot meet the bar; we'll say so upfront.",
      },
      {
        q: "Can AI run on our infrastructure?",
        a: "Yes — VPC, private cloud, or on-prem patterns when data residency requires it. We align with your security team on what may call external APIs.",
      },
      {
        q: "How do you handle hallucinations?",
        a: "Citation-required modes, constrained context windows, reranking, and human QA on pilot outputs. We report unsupported-claim rates honestly in pilots.",
      },
      {
        q: "Arabic quality?",
        a: "Core strength — mixed-language documents, regional terminology, and RTL UX are design requirements, not afterthoughts.",
      },
    ],
  },
  closing: {
    headline: "Have an automation or AI use case?",
    body: "Describe the workflow, documents, or decision you want to accelerate — we'll tell you if AI is the right tool and what a production pilot looks like.",
    cta1: "Book an AI scoping call",
    cta2: "Email the team",
  },
};

const ar: ServiceLandingContent = {
  licenseCodes: aiCodes,
  meta: {
    title: "الأتمتة بالذكاء الاصطناعي والوكلاء الأذكياء",
    description:
      "أتمتة ذكاء اصطناعي عملية من EndEdge — وكلاء سير عمل، ذكاء وثائقي RAG، معالجة لغة عربية أولاً، وأنظمة إنتاج مع تسميات صادقة للإنتاج مقابل النماذج التجريبية.",
  },
  hero: {
    eyebrow: "أتمتة AI · ذكاء تطبيقي",
    headline: "أتمتة العمل المتكرر بذكاء اصطناعي يصل للإنتاج.",
    subhead:
      "نبني أتمتة سير العمل، ومساعدين معزّزين بالاسترجاع، ووكلاء أذكياء فوق أنظمتكم القائمة — مع استشهادات، حوكمة، ودعم عربي/إنجليزي حيث يحتاج مستخدمكم.",
    body:
      "EndEdge تميّز بين نشر الإنتاج والنماذج البحثية. يمتد عملنا في الذكاء الاصطناعي إلى ذكاء الوثائق الإعلامية، وبحث المعرفة، وأتمتة العمليات — مدعوماً بأبحاث NLP عربية محكّمة حيث ينطبق.",
    ctaPrimary: "احجزوا مكالمة تحديد نطاق AI",
    ctaSecondary: "جرّبوا فحص جاهزية الذكاء الاصطناعي",
    ctaSecondaryPath: "/#assessment",
    trustLine: "تسميات إنتاج vs تجريبي · عربية أولاً · RAG + وكلاء + تكامل MCP",
  },
  scope: {
    headline: "ما نُسلّم",
    items: [
      {
        tag: "01 · الأتمتة",
        title: "أتمتة سير العمل والوكلاء",
        body: "ربط CRM وERP والتذاكر والأدوات الداخلية بأتمتة موثوقة — مهام مجدولة، محفّزات أحداث، وخطوات بمساعدة LLM حيث تقلل العمل اليدوي دون إخفاء مسار التدقيق.",
      },
      {
        tag: "02 · RAG",
        title: "ذكاء المستندات والمعرفة",
        body: "خطوط أنابيب معزّزة بالاسترجاع على PDF والسياسات والأرشيف — OCR، تقسيم ثنائي اللغة، إعادة ترتيب، وإجابات تتطلب استشهاداً ليثق الفريق بالمخرجات.",
      },
      {
        tag: "03 · AI عربي",
        title: "NLP وتجربة عربية أولاً",
        body: "مجموعات عربية/إنجليزية مختلطة، واجهات RTL، ونماذج مضبوطة للصياغة الإقليمية — لا chatbots إنجليزية فقط على سير عمل عربي.",
      },
      {
        tag: "04 · الحوكمة",
        title: "أمن ونطاق وتدقيق",
        body: "مجموعات حسب الدور، سجلات استعلام، قواعد PII، SSO، وخيارات نشر on-prem أو VPC عندما لا يمكن للبيانات مغادرة حدودكم.",
      },
    ],
  },
  delivery: {
    headline: "كيف نُقلّل مخاطر مشاريع AI",
    steps: [
      {
        title: "جاهزية وملاءمة حالة الاستخدام",
        body: "ابدؤوا بفحص الجاهزية أو workshop تحديد نطاق. نوقف حالات الاستخدام السيئة مبكراً — قبل تمويل مشروع علمي لستة أشهر.",
      },
      {
        title: "تجربة بمقاييس",
        body: "مجموعة صغيرة، KPIs قابلة للقياس (وقت موفّر، معدل خطأ، دقة استشهاد)، وحلقات مراجعة بشرية قبل التوسع.",
      },
      {
        title: "تقوية الإنتاج",
        body: "مراقبة، fallbacks، ضبط تكلفة، ووثائق تسليم — نفس انضباط العمليات الذي نطبّقه على البنية والـ IT المُدار.",
      },
    ],
  },
  proof: {
    headline: "إثبات النزاهة أولاً",
    body: "تشمل دراسات الحالة ذكاء وثائق إعلامي عربي (إنتاج، RAG مدعوم بأبحاث) ونتائج أتمتة مؤسسية بمكدسات موثّقة. النماذج البحثية تُسمّى صراحة — لا تُباع كإنتاج عميل.",
    caseStudiesCta: "اقرأوا دراسات الحالة ←",
  },
  faq: {
    headline: "أسئلة شائعة",
    items: [
      {
        q: "هل ت fine-tune النماذج أم RAG؟",
        a: "معظم قيمة العميل من RAG وتصميم سير العمل والتكامل — لا تدريب نماذج مخصّص. نوصي fine-tuning فقط عندما الاسترجاع وحده لا يكفي؛ نقول ذلك مقدماً.",
      },
      {
        q: "هل يعمل AI على بنيتنا؟",
        a: "نعم — VPC أو سحابة خاصة أو on-prem عندما تتطلب إقامة البيانات. ننسّق مع فريق الأمن ما يجوز أن يستدعي واجهات خارجية.",
      },
      {
        q: "كيف تتعاملون مع الهلوسة؟",
        a: "أوضاع تتطلب استشهاداً، نوافذ سياق مقيدة، إعادة ترتيب، وQA بشرية على مخرجات التجربة. نُبلغ معدلات الادعاءات غير المدعومة بصراحة.",
      },
      {
        q: "جودة العربية؟",
        a: "نقطة قوة أساسية — مستندات مختلطة اللغة، مصطلحات إقليمية، وUX بـ RTL متطلبات تصميم لا لاحقة.",
      },
    ],
  },
  closing: {
    headline: "لديكم حالة أتمتة أو AI؟",
    body: "صفوا سير العمل أو المستندات أو القرار الذي تريدون تسريعه — سنقول إن كان AI الأداة المناسبة وكيف تبدو تجربة إنتاج.",
    cta1: "احجزوا مكالمة تحديد نطاق AI",
    cta2: "راسلوا الفريق",
  },
};

export function getAiAutomationContent(locale: Locale): ServiceLandingContent {
  return locale === "ar" ? ar : en;
}
