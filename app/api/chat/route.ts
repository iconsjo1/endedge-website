import { NextRequest, NextResponse } from "next/server";
import { chatFallback, chatSystemPrompt } from "@/lib/chat";
import { deepseekConversation } from "@/lib/deepseek";
import { isLocale, type Locale } from "@/lib/i18n/config";

export const runtime = "nodejs";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

const buckets = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || current.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= limit) {
    return false;
  }
  current.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a minute and try again." },
      { status: 429 },
    );
  }

  let body: { messages?: IncomingMessage[]; locale?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const locale: Locale = isLocale(body.locale ?? "") ? (body.locale as Locale) : "en";
  const fallback = chatFallback(locale);
  const systemPrompt = chatSystemPrompt(locale);

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0 || messages.length > 16) {
    return NextResponse.json({ error: "Send 1–16 chat messages." }, { status: 400 });
  }

  const cleaned = messages
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-12)
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, 1500),
    }));

  if (cleaned.length === 0 || cleaned[cleaned.length - 1]?.role !== "user") {
    return NextResponse.json({ error: "Last message must be from the user." }, { status: 400 });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply: fallback,
      source: "fallback" as const,
    });
  }

  try {
    const model = process.env.DEEPSEEK_MODEL || "deepseek-chat";
    const reply = await deepseekConversation({
      apiKey,
      model,
      maxTokens: 450,
      jsonMode: false,
      messages: [{ role: "system", content: systemPrompt }, ...cleaned],
    });

    return NextResponse.json({
      reply: reply || fallback,
      source: "ai" as const,
    });
  } catch (err) {
    console.error("chat: DeepSeek failed", err);
    return NextResponse.json({
      reply: fallback,
      source: "fallback" as const,
    });
  }
}
