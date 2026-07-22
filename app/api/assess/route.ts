import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import {
  QUESTIONS,
  scoreAssessment,
  fallbackReport,
  type AssessmentInput,
} from "@/lib/assessment";

export const runtime = "nodejs";

interface ReportResponse {
  total: number;
  band: string;
  dimensions: { dimension: string; score: number }[];
  headline: string;
  summary: string;
  recommendations: string[];
  source: "ai" | "fallback";
}

export async function POST(req: NextRequest) {
  let body: AssessmentInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body?.answers || typeof body.answers !== "object") {
    return NextResponse.json(
      { error: "Please answer the questions before requesting a report." },
      { status: 400 }
    );
  }

  const scored = scoreAssessment(body);
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // No key configured -> deterministic report so the demo always works.
  if (!apiKey) {
    const fb = fallbackReport(scored);
    const res: ReportResponse = { ...scored, ...fb, source: "fallback" };
    return NextResponse.json(res);
  }

  try {
    const client = new Anthropic({ apiKey });
    const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-5";

    const readable = QUESTIONS.map((q) => {
      const idx = body.answers[q.id];
      const chosen = q.options[idx]?.label ?? "No answer";
      return `- ${q.prompt} => ${chosen}`;
    }).join("\n");

    const system =
      "You are the assessment engine for EndEdge, an enterprise technology partner in Dubai that helps businesses modernize infrastructure, automate operations, and adopt practical AI. " +
      "Write a short, executive-level AI & technology readiness report. Be specific, honest, and practical — never hype. " +
      "No greetings, no sign-off. Respond ONLY with valid JSON, no markdown fences.";

    const prompt =
      `A business completed a readiness assessment. Their answers:\n${readable}\n\n` +
      `Computed readiness score: ${scored.total}/100 (band: ${scored.band}).\n\n` +
      `Return JSON with exactly these keys:\n` +
      `{"headline": string (max 12 words), "summary": string (2 short paragraphs, plain business language), "recommendations": string[] (exactly 3 concrete next steps, each one sentence)}`;

    const msg = await client.messages.create({
      model,
      max_tokens: 700,
      system,
      messages: [{ role: "user", content: prompt }],
    });

    const text = msg.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim()
      .replace(/^```json\s*/i, "")
      .replace(/```$/, "")
      .trim();

    const parsed = JSON.parse(text) as {
      headline: string;
      summary: string;
      recommendations: string[];
    };

    const res: ReportResponse = {
      ...scored,
      headline: parsed.headline,
      summary: parsed.summary,
      recommendations: parsed.recommendations?.slice(0, 3) ?? [],
      source: "ai",
    };
    return NextResponse.json(res);
  } catch (err) {
    // Any AI failure gracefully degrades to the deterministic report.
    console.error("assess: AI generation failed, using fallback", err);
    const fb = fallbackReport(scored);
    const res: ReportResponse = { ...scored, ...fb, source: "fallback" };
    return NextResponse.json(res);
  }
}
