// Shared assessment model — used by the client widget and the /api/assess route.

export type Dimension =
  | "Infrastructure"
  | "Data"
  | "Automation"
  | "AI"
  | "Security";

export interface Option {
  label: string;
  score: 0 | 5 | 10; // 0 = foundational, 10 = mature
}

export interface Question {
  id: string;
  dimension: Dimension;
  prompt: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: "infra",
    dimension: "Infrastructure",
    prompt: "How is your technology hosted today?",
    options: [
      { label: "On local servers, managed manually", score: 0 },
      { label: "A mix of local machines and some cloud", score: 5 },
      { label: "Fully cloud-based and actively managed", score: 10 },
    ],
  },
  {
    id: "manual",
    dimension: "Automation",
    prompt: "How much of your team's daily work is repetitive and manual?",
    options: [
      { label: "Most of it — lots of copying, re-keying, chasing", score: 0 },
      { label: "About half — some tools, plenty of manual steps", score: 5 },
      { label: "Little — most routine work is automated", score: 10 },
    ],
  },
  {
    id: "data",
    dimension: "Data",
    prompt: "Where does your company's information live?",
    options: [
      { label: "Scattered across files, email, and people's heads", score: 0 },
      { label: "In a few central systems, not fully connected", score: 5 },
      { label: "Centralized, structured, and easy to search", score: 10 },
    ],
  },
  {
    id: "ai",
    dimension: "AI",
    prompt: "Have you put AI to work in your operations yet?",
    options: [
      { label: "Not yet — we're not sure where to start", score: 0 },
      { label: "Experimenting with a few tools informally", score: 5 },
      { label: "Running AI in real, day-to-day workflows", score: 10 },
    ],
  },
  {
    id: "security",
    dimension: "Security",
    prompt: "How do you handle security and backups?",
    options: [
      { label: "Ad hoc — no clear plan in place", score: 0 },
      { label: "Basic measures, handled when we remember", score: 5 },
      { label: "Actively managed, monitored, and backed up", score: 10 },
    ],
  },
];

export interface AssessmentInput {
  // question id -> selected option index
  answers: Record<string, number>;
}

export interface Scored {
  total: number; // 0..100
  band: Band;
  dimensions: { dimension: Dimension; score: number }[];
}

export type Band = "Foundational" | "Developing" | "Advanced" | "Optimized";

export function scoreAssessment(input: AssessmentInput): Scored {
  const dims: { dimension: Dimension; score: number }[] = [];
  let raw = 0;
  for (const q of QUESTIONS) {
    const idx = input.answers[q.id];
    const opt = q.options[idx];
    const s = opt ? opt.score : 0;
    raw += s;
    dims.push({ dimension: q.dimension, score: s * 10 }); // 0..100 per dimension
  }
  const total = Math.round((raw / (QUESTIONS.length * 10)) * 100);
  return { total, band: bandFor(total), dimensions: dims };
}

export function bandFor(total: number): Band {
  if (total <= 35) return "Foundational";
  if (total <= 65) return "Developing";
  if (total <= 85) return "Advanced";
  return "Optimized";
}

// Deterministic fallback report — used when no DEEPSEEK_API_KEY is set,
// so the demo works out of the box for the dev team.
export function fallbackReport(scored: Scored): {
  headline: string;
  summary: string;
  recommendations: string[];
} {
  const weakest = [...scored.dimensions].sort((a, b) => a.score - b.score)[0];

  const byBand: Record<Band, { headline: string; summary: string }> = {
    Foundational: {
      headline: "Foundational — strong upside from getting the basics right",
      summary:
        "Your systems are doing the job, but a lot rests on manual effort and informal processes. That is the most common — and most fixable — starting point. Getting infrastructure, data, and security onto stable footing first will make every later automation and AI investment pay off far more.",
    },
    Developing: {
      headline: "Developing — the groundwork is there; it's time to connect it",
      summary:
        "You have real systems in place but they are not yet working as one. The biggest gains now come from joining things up: centralizing data, automating the repetitive work between tools, and tightening security so you can scale with confidence.",
    },
    Advanced: {
      headline: "Advanced — well positioned to compound with AI",
      summary:
        "Your infrastructure and processes are in good shape. The opportunity ahead is leverage: targeted automation and applied AI that turn your existing systems into measurable speed, lower cost, and better service.",
    },
    Optimized: {
      headline: "Optimized — focused on staying at the edge",
      summary:
        "You are ahead of most organizations of your size. From here it is about depth and durability: advanced AI agents, resilient security, and squeezing more measurable value from what you have already built.",
    },
  };

  const recsByDim: Record<Dimension, string[]> = {
    Infrastructure: [
      "Migrate core workloads to secure, managed cloud with clear data-residency options.",
      "Put monitoring, backups, and uptime alerting in place before adding anything on top.",
    ],
    Data: [
      "Centralize scattered information into one structured, searchable source of truth.",
      "Map which data matters most so it can later power automation and AI safely.",
    ],
    Automation: [
      "Identify your three most repetitive workflows and automate them first.",
      "Replace manual re-keying between tools with reliable integrations.",
    ],
    AI: [
      "Start with one high-value, low-risk AI use case tied to a clear outcome.",
      "Build an assistant over your own documents so knowledge is instantly accessible.",
    ],
    Security: [
      "Establish managed backups and a tested recovery plan.",
      "Move toward monitored, zero-trust security as a standing practice, not a one-off.",
    ],
  };

  const base = byBand[scored.band];
  return {
    headline: base.headline,
    summary: base.summary,
    recommendations: [
      `Priority: ${weakest.dimension.toLowerCase()} is your lowest-scoring area.`,
      ...recsByDim[weakest.dimension],
    ],
  };
}
