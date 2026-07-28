import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadBody = {
  name?: string;
  email?: string;
  company?: string;
  whatsapp?: string;
  locale?: string;
  source?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function notifyWebhook(payload: Record<string, unknown>) {
  const webhook = process.env.CHECKLIST_LEAD_WEBHOOK_URL?.trim();
  if (!webhook) return;

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    const secret = process.env.CHECKLIST_LEAD_WEBHOOK_SECRET?.trim();
    if (secret) headers["X-Webhook-Secret"] = secret;

    const res = await fetch(webhook, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      console.error("[checklist-lead] webhook HTTP", res.status, await res.text().catch(() => ""));
    }
  } catch (error) {
    console.error("[checklist-lead] webhook failed", error);
  }
}

export async function POST(req: NextRequest) {
  let body: LeadBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";

  if (!name || name.length > 120 || !company || company.length > 160 || !isEmail(email)) {
    return NextResponse.json({ error: "Invalid lead fields." }, { status: 400 });
  }

  const lead = {
    name,
    email,
    company,
    whatsapp: whatsapp || null,
    locale: body.locale ?? "en",
    source: body.source ?? "erp-e-invoicing-checklist",
    at: new Date().toISOString(),
  };

  console.info("[checklist-lead]", lead);
  await notifyWebhook(lead);

  return NextResponse.json({ ok: true });
}
