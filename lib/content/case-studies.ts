export type CaseStudyMetric = {
  value: string;
  label: string;
  detail?: string;
};

export type CaseStudyStackGroup = {
  category: string;
  items: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  clientDescriptor: string;
  industry: string;
  services: string[];
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  outcomes: CaseStudyMetric[];
  stack: CaseStudyStackGroup[];
};

export const CASE_STUDIES_INTRO = {
  eyebrow: "Case studies",
  title: "Production work, documented in detail.",
  description:
    "Beyond our interactive AI readiness check, these anonymized engagements show how EndEdge designs, migrates, and operates systems at enterprise scale. Client names are withheld where required by confidentiality — sector, stack, and outcomes are real.",
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "government-portal-kubernetes-migration",
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
      { category: "Operations", items: ["Prometheus", "Grafana", "GitHub Actions CI/CD", "Pager rotation"] },
    ],
  },
  {
    slug: "banking-compliance-operations-platform",
    title: "Compliance operations dashboard for a GCC retail bank",
    clientDescriptor: "Mid-size retail bank (GCC)",
    industry: "Banking & Finance",
    services: ["Software & Consulting", "Managed IT"],
    duration: "20 weeks",
    summary:
      "Replaced spreadsheet-driven compliance workflows with an auditable operations platform — role-based access, immutable event logs, and automated regulatory report packs.",
    challenge:
      "Compliance teams spent days each month reconciling data across core banking exports, email threads, and shared drives. Audit findings cited weak traceability; the bank needed a system that could demonstrate who changed what, when, and why — without slowing day-to-day operations.",
    approach:
      "We designed a modular service architecture behind Docker, with separate services for ingestion, workflow, and reporting. Every state transition is append-only in an audit store; exports are generated from signed snapshots rather than live queries. Secrets and keys are managed through a dedicated vault integration; deployments run through gated CI pipelines with environment promotion checks.",
    outcomes: [
      { value: "65%", label: "Reduction in manual reporting effort", detail: "Monthly compliance cycle" },
      { value: "3 days → 4 hrs", label: "Audit evidence preparation", detail: "Per examination cycle" },
      { value: "100%", label: "Actions with attributable audit trail" },
      { value: "12", label: "Integrated data sources", detail: "Core banking + HR + ticketing" },
    ],
    stack: [
      { category: "Runtime", items: ["Docker", "Docker Compose", "Node.js", "TypeScript"] },
      { category: "Data & search", items: ["PostgreSQL", "Elasticsearch", "Scheduled ETL jobs"] },
      { category: "Security", items: ["RBAC", "HashiCorp Vault", "TLS everywhere", "Secrets rotation"] },
      { category: "Delivery", items: ["GitHub Actions", "Staging gates", "Infrastructure as code"] },
    ],
  },
  {
    slug: "arabic-rag-legal-knowledge-assistant",
    title: "Arabic-first RAG assistant for contract and policy knowledge",
    clientDescriptor: "Regional law firm network",
    industry: "Professional Services",
    services: ["AI Automation & Agents", "Software & Consulting"],
    duration: "10 weeks (pilot → production)",
    summary:
      "Built a retrieval-augmented assistant that answers questions across thousands of internal memos, templates, and bilingual policy documents — with citations, not guesses.",
    challenge:
      "Associates spent hours searching shared drives for clause precedents and internal guidance. Generic chat tools hallucinated on firm-specific language, and English-only models performed poorly on Arabic legal phrasing and mixed-language contracts.",
    approach:
      "We implemented a custom RAG pipeline: document ingestion with OCR for scanned PDFs, language-aware chunking for Arabic and English segments, embeddings stored in pgvector, and a reranking step before the LLM composes answers. Responses are constrained to retrieved passages with inline citations. An MCP-style connector lets the assistant pull matter metadata from the firm's CRM when authorized — without sending full matter files to the model.",
    outcomes: [
      { value: "72%", label: "Faster clause and precedent lookup", detail: "Pilot cohort (n=18)" },
      { value: "Bilingual", label: "Arabic & English query support", detail: "Mixed-document corpora" },
      { value: "< 2%", label: "Unsupported-claim rate in QA review", detail: "Citation-required mode" },
      { value: "4,200+", label: "Documents indexed at launch" },
    ],
    stack: [
      { category: "AI & retrieval", items: ["Custom RAG pipeline", "pgvector", "Reranking", "DeepSeek / OpenAI"] },
      { category: "Backend", items: ["Python", "FastAPI", "Celery workers", "Redis queue"] },
      { category: "Integration", items: ["MCP connector", "CRM metadata API", "SSO (SAML)"] },
      { category: "Governance", items: ["Role-scoped collections", "Query audit logs", "PII redaction rules"] },
    ],
  },
  {
    slug: "retail-ecommerce-aws-migration",
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
      { value: "38%", label: "Infrastructure cost reduction", detail: "Year-one run rate vs. prior VMs" },
      { value: "3×", label: "Peak traffic handled", detail: "Autoscaling + CDN" },
      { value: "< 1 hr", label: "Recovery time objective (RTO)", detail: "Validated restore drill" },
      { value: "p95 < 280ms", label: "Checkout API latency at peak" },
    ],
    stack: [
      { category: "Cloud", items: ["AWS EKS", "Terraform", "CloudFront", "RDS PostgreSQL"] },
      { category: "Containers", items: ["Docker", "Kubernetes HPA", "AWS ALB"] },
      { category: "Observability", items: ["CloudWatch", "Structured logging", "Synthetic uptime checks"] },
      { category: "Resilience", items: ["Automated snapshots", "Cross-AZ replicas", "Runbooked failover"] },
    ],
  },
  {
    slug: "university-lms-managed-hosting",
    title: "University LMS modernization and managed hosting",
    clientDescriptor: "Higher-education institution (MENA)",
    industry: "Education",
    services: ["Cloud Infrastructure", "Managed IT", "Software & Consulting"],
    duration: "Ongoing engagement (16-week initial delivery)",
    summary:
      "Rebuilt a legacy learning portal on modern web stack, deployed on resilient VPS infrastructure with 24/7 monitoring — supporting tens of thousands of students across exam periods.",
    challenge:
      "The prior LMS suffered outages during registration and exam windows, with no clear on-call ownership. Faculty needed a faster interface; IT needed predictable hosting costs and a partner who could operate the platform day-to-day.",
    approach:
      "EndEdge delivered a Next.js front end with a Node.js API layer, hosted on dedicated KVM infrastructure with Cloudflare edge protection. PM2 process management, automated backups, and disk/CPU alerting were configured from day one. We run patching, certificate renewal, and incident response under a managed services agreement while the institution retains data ownership in-region.",
    outcomes: [
      { value: "22,000+", label: "Active students per term" },
      { value: "99.9%", label: "Platform availability", detail: "Trailing 12 months" },
      { value: "< 15 min", label: "Incident acknowledgement", detail: "Managed ops SLA" },
      { value: "p95 < 200ms", label: "Core API response time" },
    ],
    stack: [
      { category: "Application", items: ["Next.js", "Node.js", "PostgreSQL", "REST + SSR"] },
      { category: "Infrastructure", items: ["KVM / Proxmox", "Cloudflare", "PM2", "Nginx reverse proxy"] },
      { category: "Operations", items: ["24/7 monitoring", "Automated backups", "Patch management"] },
      { category: "Security", items: ["WAF", "TLS", "Role-based admin", "Audit logging"] },
    ],
  },
];
