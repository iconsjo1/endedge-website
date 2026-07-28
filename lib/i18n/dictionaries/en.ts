import type { Dictionary } from "@/lib/i18n/types";

export const en: Dictionary = {
  meta: {
    titleDefault: "EndEdge — Enterprise Technology & AI Solutions | Dubai",
    titleTemplate: "%s | EndEdge",
    description:
      "At the Edge of Innovation. EndEdge helps UAE businesses modernize their infrastructure, automate operations, and adopt practical AI — through one trusted technology partner.",
  },
  nav: {
    services: "Services",
    caseStudies: "Case Studies",
    aiReadiness: "AI Readiness",
    technology: "Technology",
    industries: "Industries",
    vpsHosting: "VPS Hosting",
    viewHosting: "View hosting plans",
    bookConsultation: "Book a consultation",
    toggleMenu: "Toggle menu",
  },
  hero: {
    eyebrow: "Enterprise Technology & AI · Dubai, UAE",
    titleBefore: "Enterprise technology & AI for ",
    titleHighlight: "growing businesses",
    titleAfter: ".",
    body: "Built by architects with nearly two decades delivering enterprise systems across government, banking, education, and the private sector. We modernize your infrastructure, automate your operations, and put practical AI to work — end to end, under one trusted partner.",
    ctaPrimary: "Check your AI readiness",
    ctaSecondary: "Explore what we do",
    stats: [
      { value: "19+ yrs", label: "delivery experience" },
      { value: "20k+", label: "users served on one system" },
      { value: "End-to-end", label: "one accountable partner" },
    ],
  },
  logoStrip: {
    label: "Delivery experience across",
    sectors: [
      "Government",
      "Banking & Finance",
      "Education",
      "Healthcare",
      "Enterprise ERP",
      "Arabic NLP",
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Five capabilities. One partner.",
    body: "Every service is built around a business outcome — not a technology checklist. Hosting, IT, automation, AI, and ERP compliance, owned end to end so nothing falls between vendors.",
    explorePlans: "Explore VPS plans →",
    items: [
      {
        id: "cloud-infrastructure",
        tag: "01",
        title: "Cloud Infrastructure",
        outcome: "Infrastructure that keeps your business running.",
        portalLink: true,
        href: "/services/cloud-infrastructure",
        learnMore: "Cloud infrastructure →",
        points: [
          "Secure, high-performance hosting & managed cloud",
          "Data-residency options for UAE compliance",
          "Monitoring, backups & 24/7 uptime assurance",
        ],
      },
      {
        id: "managed-it",
        tag: "02",
        title: "Managed IT Services",
        outcome: "IT that just works — so your team can focus.",
        portalLink: false,
        href: "/services/managed-it",
        learnMore: "Managed IT services →",
        points: [
          "Proactive support & system administration",
          "Microsoft 365, security & endpoint protection",
          "24/7 monitoring — predictable cost, no in-house IT team",
        ],
      },
      {
        id: "ai-automation",
        tag: "03",
        title: "AI Automation & Agents",
        outcome: "Automate repetitive work with practical AI.",
        portalLink: false,
        href: "/services/ai-automation",
        learnMore: "AI automation & agents →",
        points: [
          "Workflow automation & intelligent assistants",
          "Document, contract & knowledge intelligence (RAG)",
          "Arabic-first AI, built for how you work",
        ],
      },
      {
        id: "software-consulting",
        tag: "04",
        title: "Web, Mobile & Software",
        outcome: "Apps, portals, and APIs — built and operated.",
        portalLink: false,
        href: "/services/web-mobile-development",
        learnMore: "Web & mobile development →",
        points: [
          "Web apps — portals, dashboards, e-commerce (React, Next.js)",
          "Mobile apps — iOS & Android, native or cross-platform",
          "APIs, integrations & architecture consulting",
        ],
      },
      {
        id: "erp-e-invoicing",
        tag: "05",
        title: "ERP & E-Invoicing",
        outcome: "Meet the UAE ASP deadline without rebuilding ops.",
        portalLink: false,
        href: "/services/erp-e-invoicing",
        learnMore: "UAE e-invoicing compliance →",
        points: [
          "ERPNext / SmartERP deployment or ERP adaptation",
          "PINT AE mapping & ASP integration",
          "Finance-team enablement before 30 Oct 2026",
        ],
      },
    ],
  },
  valueStack: {
    eyebrow: "How we deliver value",
    title: "Infrastructure first. Intelligence on top.",
    body: "AI only compounds when it stands on solid ground. We build each layer so it strengthens the one above — turning stable systems into automation, and automation into growth.",
    layers: [
      {
        name: "Applied AI",
        desc: "Automation and intelligence that turn stable systems into measurable speed.",
      },
      {
        name: "Automation",
        desc: "The repetitive work between your tools, handled reliably and without re-keying.",
      },
      {
        name: "Applications",
        desc: "The software your team uses every day — connected, not scattered.",
      },
      {
        name: "Infrastructure",
        desc: "Secure, monitored cloud that everything else is safely built upon.",
      },
    ],
  },
  readiness: {
    eyebrow: "Live demo · runs on AI",
    title: "How AI-ready is your business?",
    body: "Answer five quick questions. Our engine scores your readiness and returns a tailored report in seconds — the same kind of intelligence we build into your operations.",
    meta: "5 questions · ~30 seconds · no email required",
    start: "Start the assessment",
    back: "Back",
    next: "Next",
    seeReport: "See my report",
    analyzing: "Analyzing your responses",
    readinessLabel: "Readiness",
    nextSteps: "Recommended next steps",
    discuss: "Discuss these results with us",
    retake: "Retake",
    error: "Something went wrong generating your report.",
    tryAgain: "Try again",
    questions: [
      {
        id: "infra",
        dimension: "Infrastructure",
        prompt: "How is your technology hosted today?",
        options: [
          "On local servers, managed manually",
          "A mix of local machines and some cloud",
          "Fully cloud-based and actively managed",
        ],
      },
      {
        id: "manual",
        dimension: "Automation",
        prompt: "How much of your team's daily work is repetitive and manual?",
        options: [
          "Most of it — lots of copying, re-keying, chasing",
          "About half — some tools, plenty of manual steps",
          "Little — most routine work is automated",
        ],
      },
      {
        id: "data",
        dimension: "Data",
        prompt: "Where does your company's information live?",
        options: [
          "Scattered across files, email, and people's heads",
          "In a few central systems, not fully connected",
          "Centralized, structured, and easy to search",
        ],
      },
      {
        id: "ai",
        dimension: "AI",
        prompt: "Have you put AI to work in your operations yet?",
        options: [
          "Not yet — we're not sure where to start",
          "Experimenting with a few tools informally",
          "Running AI in real, day-to-day workflows",
        ],
      },
      {
        id: "security",
        dimension: "Security",
        prompt: "How do you handle security and backups?",
        options: [
          "Ad hoc — no clear plan in place",
          "Basic measures, handled when we remember",
          "Actively managed, monitored, and backed up",
        ],
      },
    ],
  },
  why: {
    eyebrow: "Why EndEdge",
    title: "Most Dubai tech vendors can't say this.",
    reasons: [
      {
        title: "End-to-end accountability",
        body: "One partner owns your technology from infrastructure through intelligence. Nothing falls between vendors, and there's always one number to call.",
      },
      {
        title: "Real enterprise pedigree",
        body: "Nearly two decades delivering systems for government, banking, education, and private-sector clients — including compliance-grade financial platforms and systems serving 20,000+ users.",
      },
      {
        title: "AI that ships",
        body: "Genuine capability in production AI and Arabic-first NLP, backed by peer-reviewed research — not a rebranded reseller.",
      },
      {
        title: "Integrity-first",
        body: "We clearly distinguish what's production-proven from what's in development. In a market full of overclaiming, we tell you the truth.",
      },
      {
        title: "Built for the region",
        body: "Local presence, UAE data-residency awareness, and full service in both Arabic and English.",
      },
      {
        title: "Outcomes, not hours",
        body: "We measure success by less manual work, lower downtime, and faster response — the numbers your executives actually care about.",
      },
    ],
  },
  caseTeaser: {
    eyebrow: "Case studies",
    title: "The detail behind the delivery.",
    body: "Our AI readiness check gives you a fast snapshot. For procurement and technical stakeholders, we publish deeper write-ups — stacks, migration metrics, and measured outcomes from anonymized enterprise work.",
    viewAll: "View all case studies",
    readStudy: "Read case study →",
  },
  tech: {
    eyebrow: "Our technology",
    title: "Proven, state-of-the-art tools — chosen for you.",
    body: "We work across the full stack with modern, battle-tested tech — cloud-native platforms, production LLMs, and full-stack frameworks — matched to your needs, not ours. No lock-in, no black boxes.",
    groups: [
      {
        group: "Cloud & Infrastructure",
        items: ["AWS", "Microsoft Azure", "Kubernetes", "Docker", "Terraform", "Cloudflare"],
      },
      {
        group: "Web & Mobile",
        items: ["React", "Next.js", "TypeScript", "Node.js", "React Native", "Flutter"],
      },
      {
        group: "Data & Search",
        items: ["PostgreSQL", "Redis", "Elasticsearch", "pgvector"],
      },
      {
        group: "Artificial Intelligence",
        items: ["OpenAI", "Anthropic", "Gemini", "DeepSeek", "RAG", "MCP", "AI Agents"],
      },
      {
        group: "Security & DevOps",
        items: ["Zero Trust", "TLS / WAF", "HashiCorp Vault", "GitHub Actions", "24/7 Monitoring"],
      },
    ],
  },
  industries: {
    eyebrow: "Industries we serve",
    title: "Depth where it counts.",
    body: "Sector experience from production deployments — not generic slide decks. We know the compliance, uptime, and integration pressure in each vertical.",
    items: [
      {
        id: "government",
        name: "Government & Public Sector",
        hint: "Citizen portals, data residency, zero-downtime migrations",
      },
      {
        id: "banking",
        name: "Banking & Finance",
        hint: "Clearing, compliance ops, audit-ready platforms",
      },
      {
        id: "healthcare",
        name: "Healthcare",
        hint: "Modern workplace, secure collaboration, multi-site IT",
      },
      {
        id: "education",
        name: "Education",
        hint: "SIS/LMS platforms, exam-period uptime, managed hosting",
      },
      {
        id: "retail",
        name: "Retail & E-commerce",
        hint: "Peak-traffic scaling, cloud cost optimization, checkout SLAs",
      },
      {
        id: "real-estate",
        name: "Real Estate",
        hint: "Portals, CRM integrations, document workflows",
      },
      {
        id: "professional-services",
        name: "Professional Services",
        hint: "Knowledge search, client portals, bilingual delivery",
      },
      {
        id: "logistics",
        name: "Logistics",
        hint: "Operations dashboards, integrations, field mobility",
      },
    ],
  },
  cta: {
    eyebrow: "At the Edge of Innovation",
    title: "Get an honest read on where AI can move your business forward.",
    body: "Book a free consultation. No jargon, no pressure — just a clear assessment of your infrastructure, operations, and the fastest wins available to you.",
    primary: "Book a consultation",
    secondary: "Take the AI readiness check",
    location: "Dubai, United Arab Emirates · hello@endedge.co",
  },
  footer: {
    tagline: "At the Edge of Innovation.",
    blurb:
      "Enterprise technology & AI, delivered end to end. Modernize your infrastructure, automate operations, and adopt practical AI — with one trusted partner.",
    location: "Dubai, UAE",
    trust: {
      tradeLicense: "Trade license",
      trn: "TRN",
      phone: "Phone",
      whatsapp: "WhatsApp",
      email: "Email",
    },
    products: "Products",
    services: "Services",
    company: "Company",
    links: {
      vps: "VPS Hosting",
      portal: "Client Portal",
      status: "System Status",
      cloud: "Cloud Infrastructure",
      managedIt: "Managed IT",
      ai: "AI Automation",
      software: "Web, Mobile & Software",
      erp: "ERP & E-Invoicing",
      itConsultancy: "IT Consultancy",
      technologySupply: "Technology Supply",
      energySystems: "Energy Systems",
      softwareTraining: "Software Training",
      about: "About",
      caseStudies: "Case Studies",
      industries: "Industries",
      readiness: "AI Readiness",
      contact: "Contact",
    },
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
  },
  chat: {
    title: "EndEdge Assistant",
    subtitle: "Services · VPS · AI readiness",
    close: "Close",
    open: "Ask EndEdge",
    openLabel: "Open EndEdge assistant",
    closeLabel: "Close chat",
    greeting:
      "Hi — I'm the EndEdge assistant. Ask about our services, VPS plans, AI readiness, or how to get in touch.",
    thinking: "Thinking…",
    placeholder: "Ask a question…",
    send: "Send",
    disclaimer:
      "AI answers may be incomplete. For contracts or urgent help: hello@endedge.co",
    quick: [
      "What services does EndEdge offer?",
      "Show me case studies",
      "Show me VPS pricing",
      "How does the AI readiness check work?",
    ],
    fallback:
      "I can help with EndEdge services, VPS plans, and our AI readiness check. For a human reply, email hello@endedge.co or use Book a consultation on the site.",
  },
  stackLabels: ["Infrastructure", "Applications", "Automation", "Applied AI", "Growth"],
  caseStudiesPage: {
    eyebrow: "Case studies",
    title: "Production work, documented in detail.",
    description:
      "Beyond our interactive AI readiness check, these anonymized engagements show how EndEdge designs, migrates, and operates systems at enterprise scale. Client names are withheld where required by confidentiality — sector, stack, and outcomes are real.",
    discuss: "Discuss a similar project",
    tryAssessment: "Try the AI readiness check",
    onThisPage: "On this page",
    challenge: "Challenge",
    approach: "Approach",
    outcomes: "Outcomes",
    engagement: "Engagement",
    duration: "Duration",
    servicesLabel: "Services",
    techStack: "Technology stack",
    nextEyebrow: "Next step",
    nextTitle: "Want outcomes like these for your organization?",
    nextBody:
      "Share your context — infrastructure, compliance constraints, or AI use cases — and we'll give you an honest view of what's feasible and how we'd approach it.",
    book: "Book a consultation",
    backHome: "Back to home",
    badgeProduction: "Production",
    badgeDemonstrator: "Demonstrator",
    badgeResearchBacked: "Research-backed",
  },
  caseStudies: [
    {
      slug: "government-portal-kubernetes-migration",
      engagementType: "production",
      title: "National digital services portal — zero-downtime cloud migration",
      clientDescriptor: "Regional government digital authority",
      industry: "Government & Public Sector",
      services: ["Cloud Infrastructure", "Software & Consulting", "Managed IT"],
      duration: "14 weeks (discovery → cutover)",
      summary:
        "Migrated a citizen-facing portal serving 20,000+ registered users from on-premise VMs to a container platform in a UAE-adjacent region, with strict data-residency and availability requirements.",
      challenge:
        "The existing PHP monolith ran on aging hardware with manual deployments and no horizontal scaling. Peak registration periods caused timeouts, and leadership required a migration path that avoided weekend-long outages or data leaving approved jurisdictions.",
      approach:
        "We containerized application tiers with Docker, introduced a Kubernetes cluster with blue/green releases, and moved the primary datastore to managed PostgreSQL with streaming replicas. Traffic was shifted incrementally using ingress weighting; rollback scripts were validated in staging before production cutover. Observability (metrics, structured logs, synthetic checks) was added before go-live so the operations team could see regressions immediately.",
      outcomes: [
        { value: "20,000+", label: "Registered users migrated", detail: "No account data loss" },
        { value: "0", label: "Unplanned downtime during cutover", detail: "Blue/green ingress switch" },
        { value: "99.95%", label: "Uptime in first 90 days post-migration" },
        { value: "42%", label: "Faster median page load", detail: "CDN + container autoscaling" },
        { value: "< 30 min", label: "Mean time to rollback", detail: "Rehearsed runbooks" },
      ],
      stack: [
        { category: "Platform", items: ["Kubernetes", "Docker", "NGINX Ingress", "Helm"] },
        { category: "Application", items: ["React", "Node.js", "REST APIs", "Redis"] },
        { category: "Data", items: ["PostgreSQL", "Object storage", "Automated backups"] },
        {
          category: "Operations",
          items: ["Prometheus", "Grafana", "GitHub Actions CI/CD", "Pager rotation"],
        },
      ],
    },
    {
      slug: "central-bank-cheque-clearing",
      engagementType: "production",
      title: "National cheque clearing & operations system",
      clientDescriptor: "Central bank / national payments authority (GCC-adjacent)",
      industry: "Banking & Finance",
      services: ["Software & Consulting", "Managed IT"],
      duration: "20 weeks",
      summary:
        "Delivered cheque clearing workflows and operations tooling for a national payments authority — high-volume batch processing, reconciliation dashboards, and audit-ready regulatory reporting.",
      challenge:
        "Cheque clearing relied on manual reconciliation across fragmented systems. Settlement delays and weak traceability created audit exposure; operations needed a platform that could handle peak clearing volumes with attributable actions at every step.",
      approach:
        "We designed a modular service architecture behind Docker, with separate services for ingestion, clearing workflow, and reporting. Every state transition is append-only in an audit store; exports are generated from signed snapshots rather than live queries. Batch jobs were tuned for peak clearing windows; secrets and keys are managed through a dedicated vault integration with gated CI promotion.",
      outcomes: [
        {
          value: "65%",
          label: "Reduction in manual reconciliation effort",
          detail: "Monthly clearing cycle",
        },
        {
          value: "3 days → 4 hrs",
          label: "Audit evidence preparation",
          detail: "Per examination cycle",
        },
        { value: "100%", label: "Clearing actions with attributable audit trail" },
        {
          value: "12",
          label: "Integrated data sources",
          detail: "Clearing, core banking + operations feeds",
        },
      ],
      stack: [
        { category: "Runtime", items: ["Docker", "Docker Compose", "Node.js", "TypeScript"] },
        { category: "Data & search", items: ["PostgreSQL", "Elasticsearch", "Scheduled ETL jobs"] },
        {
          category: "Security",
          items: ["RBAC", "HashiCorp Vault", "TLS everywhere", "Secrets rotation"],
        },
        {
          category: "Delivery",
          items: ["GitHub Actions", "Staging gates", "Infrastructure as code"],
        },
      ],
    },
    {
      slug: "arabic-media-document-intelligence",
      engagementType: "production",
      researchBacked: true,
      title: "Arabic-first media monitoring & document intelligence",
      clientDescriptor: "Media intelligence platform (MENA)",
      industry: "Media & Research",
      services: ["AI Automation & Agents", "Software & Consulting"],
      duration: "10 weeks (pilot → production)",
      summary:
        "Built a retrieval-augmented intelligence pipeline for Arabic media archives and document collections — monitoring, search, and cited answers across bilingual news and report corpora.",
      challenge:
        "Analysts spent hours manually scanning feeds and shared drives for coverage patterns and source references. Generic chat tools hallucinated on domain-specific Arabic phrasing, and English-only models underperformed on mixed-language media documents.",
      approach:
        "We implemented a custom RAG pipeline: document ingestion with OCR for scanned PDFs, language-aware chunking for Arabic and English segments, embeddings stored in pgvector, and a reranking step before the LLM composes answers. Responses are constrained to retrieved passages with inline citations. Collections are scoped by role; query logs support governance review.",
      outcomes: [
        {
          value: "72%",
          label: "Faster source and precedent lookup",
          detail: "Pilot cohort (n=18)",
        },
        {
          value: "Bilingual",
          label: "Arabic & English query support",
          detail: "Mixed-document corpora",
        },
        {
          value: "< 2%",
          label: "Unsupported-claim rate in QA review",
          detail: "Citation-required mode",
        },
        { value: "4,200+", label: "Documents indexed at launch" },
      ],
      stack: [
        {
          category: "AI & retrieval",
          items: ["Custom RAG pipeline", "pgvector", "Reranking", "DeepSeek / OpenAI"],
        },
        { category: "Backend", items: ["Python", "FastAPI", "Celery workers", "Redis queue"] },
        { category: "Integration", items: ["Feed ingestion API", "Collection metadata", "SSO (SAML)"] },
        {
          category: "Governance",
          items: ["Role-scoped collections", "Query audit logs", "PII redaction rules"],
        },
      ],
    },
    {
      slug: "retail-ecommerce-aws-migration",
      engagementType: "production",
      title: "E-commerce platform migration and cost optimization",
      clientDescriptor: "UAE-based omnichannel retailer",
      industry: "Retail & E-commerce",
      services: ["Cloud Infrastructure", "Software & Consulting"],
      duration: "12 weeks",
      summary:
        "Moved a seasonal-traffic e-commerce stack from over-provisioned VMs to containerized workloads on AWS, with autoscaling, CDN edge caching, and a tested disaster-recovery path.",
      challenge:
        "Infrastructure costs spiked during Ramadan and year-end sales while sitting idle between peaks. The team lacked Terraform discipline, and recovery drills had never been run against production-shaped data.",
      approach:
        "We mapped workload dependencies, containerized the storefront and order APIs, and deployed to EKS with horizontal pod autoscaling tied to queue depth and CPU. Static assets and product images moved behind CloudFront; RDS PostgreSQL was rightsized with read replicas for reporting. Terraform modules codified environments; quarterly restore drills were scripted and documented.",
      outcomes: [
        {
          value: "38%",
          label: "Infrastructure cost reduction",
          detail: "Year-one run rate vs. prior VMs",
        },
        { value: "3×", label: "Peak traffic handled", detail: "Autoscaling + CDN" },
        {
          value: "< 1 hr",
          label: "Recovery time objective (RTO)",
          detail: "Validated restore drill",
        },
        { value: "p95 < 280ms", label: "Checkout API latency at peak" },
      ],
      stack: [
        { category: "Cloud", items: ["AWS EKS", "Terraform", "CloudFront", "RDS PostgreSQL"] },
        { category: "Containers", items: ["Docker", "Kubernetes HPA", "AWS ALB"] },
        {
          category: "Observability",
          items: ["CloudWatch", "Structured logging", "Synthetic uptime checks"],
        },
        {
          category: "Resilience",
          items: ["Automated snapshots", "Cross-AZ replicas", "Runbooked failover"],
        },
      ],
    },
    {
      slug: "school-sis-platform",
      engagementType: "production",
      title: "School information system — unified SIS platform",
      clientDescriptor: "Private school group (Jordan)",
      industry: "Education",
      services: ["Cloud Infrastructure", "Managed IT", "Software & Consulting"],
      duration: "Ongoing engagement (16-week initial delivery)",
      summary:
        "Rebuilt a legacy school portal on a modern web stack, deployed on resilient VPS infrastructure with 24/7 monitoring — supporting tens of thousands of students across registration and exam periods.",
      challenge:
        "The prior SIS suffered outages during registration and exam windows, with no clear on-call ownership. Faculty needed a faster interface; IT needed predictable hosting costs and a partner who could operate the platform day-to-day.",
      approach:
        "EndEdge delivered a Next.js front end with a Node.js API layer, hosted on dedicated KVM infrastructure with Cloudflare edge protection. PM2 process management, automated backups, and disk/CPU alerting were configured from day one. We run patching, certificate renewal, and incident response under a managed services agreement while the school group retains data ownership in-region.",
      outcomes: [
        { value: "22,000+", label: "Active students per term" },
        { value: "99.9%", label: "Platform availability", detail: "Trailing 12 months" },
        {
          value: "< 15 min",
          label: "Incident acknowledgement",
          detail: "Managed ops SLA",
        },
        { value: "p95 < 200ms", label: "Core API response time" },
      ],
      stack: [
        { category: "Application", items: ["Next.js", "Node.js", "PostgreSQL", "REST + SSR"] },
        {
          category: "Infrastructure",
          items: ["KVM / Proxmox", "Cloudflare", "PM2", "Nginx reverse proxy"],
        },
        {
          category: "Operations",
          items: ["24/7 monitoring", "Automated backups", "Patch management"],
        },
        { category: "Security", items: ["WAF", "TLS", "Role-based admin", "Audit logging"] },
      ],
    },
  ],
  legal: {
    privacyTitle: "Privacy Policy",
    privacyDescription:
      "How EndEdge collects, uses, and protects your personal information.",
    termsTitle: "Terms of Use",
    termsDescription: "Terms governing use of the EndEdge corporate website and services.",
    lastUpdated: "Last updated: July 22, 2026",
    questions: "Questions? Contact us at",
    backHome: "← Back to home",
    privacy: {
      intro:
        'EndEdge ("EndEdge", "we", "us") respects your privacy. This policy explains what information we collect when you visit https://endedge.co, use our AI readiness assessment, or contact us, and how we use it.',
      sections: [
        {
          title: "Information we collect",
          html: `<ul class="list-disc space-y-2 pl-5"><li><strong>Contact details</strong> — name, email address, company name, and message content when you reach out or request a consultation.</li><li><strong>Assessment inputs</strong> — answers you provide in our AI readiness tool. These are processed to generate a summary recommendation.</li><li><strong>Technical data</strong> — IP address, browser type, pages visited, and similar usage data collected through standard server logs and analytics.</li></ul>`,
        },
        {
          title: "How we use information",
          html: `<ul class="list-disc space-y-2 pl-5"><li>Respond to inquiries and deliver requested services.</li><li>Operate and improve our website and assessment experience.</li><li>Send service-related communications you have requested.</li><li>Meet legal, security, and fraud-prevention obligations.</li></ul>`,
        },
        {
          title: "AI assessment processing",
          html: `<p>When you use the AI readiness assessment, your inputs may be sent to a third-party AI provider to generate a response. We do not use assessment content to train public models. Do not submit confidential or sensitive personal data in free-text fields.</p>`,
        },
        {
          title: "Hosting services",
          html: `<p>If you purchase VPS hosting through our portal at <a href="https://live.endedge.co" class="text-orange hover:underline">live.endedge.co</a>, additional account, billing, and infrastructure data is processed under our hosting terms. See the portal's Terms of Service for subscription-specific details.</p>`,
        },
        {
          title: "Data retention",
          html: `<p>We retain information only as long as needed for the purposes above, unless a longer period is required by law. You may request deletion of contact records by emailing us.</p>`,
        },
        {
          title: "Your rights",
          html: `<p>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact hello@endedge.co to exercise these rights.</p>`,
        },
        {
          title: "Contact",
          html: `<p>EndEdge<br />Dubai, United Arab Emirates<br />hello@endedge.co</p>`,
        },
      ],
    },
    terms: {
      intro:
        'These Terms of Use ("Terms") govern your access to https://endedge.co and related corporate services offered by EndEdge ("EndEdge"). By using this site, you agree to these Terms.',
      sections: [
        {
          title: "Services",
          html: `<p>EndEdge provides enterprise technology services including cloud infrastructure, managed IT, AI automation, and software consulting. Specific deliverables, timelines, and fees are defined in separate statements of work or service agreements.</p>`,
        },
        {
          title: "Website use",
          html: `<ul class="list-disc space-y-2 pl-5"><li>You may use this website for lawful business purposes only.</li><li>You must not attempt to disrupt, probe, or reverse-engineer our systems.</li><li>Content on this site is provided for general information and may change without notice.</li></ul>`,
        },
        {
          title: "AI readiness assessment",
          html: `<p>Assessment results are informational and do not constitute legal, financial, or professional advice. Outputs may be incomplete or inaccurate. You are responsible for validating recommendations before acting on them.</p>`,
        },
        {
          title: "VPS hosting",
          html: `<p>VPS hosting subscriptions are governed by the Terms of Service on our hosting portal at <a href="https://live.endedge.co/terms" class="text-orange hover:underline">live.endedge.co/terms</a>. Those terms cover billing, acceptable use, uptime commitments, and account management.</p>`,
        },
        {
          title: "Intellectual property",
          html: `<p>EndEdge trademarks, branding, and website content are owned by EndEdge or its licensors. You may not copy or reuse materials without prior written permission.</p>`,
        },
        {
          title: "Disclaimer",
          html: `<p>This website and any tools on it are provided "as is" without warranties of any kind. To the fullest extent permitted by law, EndEdge is not liable for indirect or consequential damages arising from use of this site.</p>`,
        },
        {
          title: "Governing law",
          html: `<p>These Terms are governed by the laws of the United Arab Emirates. Disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE, unless otherwise agreed in writing.</p>`,
        },
        {
          title: "Contact",
          html: `<p>EndEdge<br />Dubai, United Arab Emirates<br />hello@endedge.co</p>`,
        },
      ],
    },
  },
  language: {
    en: "EN",
    ar: "ع",
    switchTo: "Language",
  },
  theme: {
    label: "Theme",
    dark: "Dark",
    light: "Light",
  },
};
