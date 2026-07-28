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

  // Lead capture — log for now; wire CRM/email webhook later.
  console.info("[checklist-lead]", {
    name,
    email,
    company,
    whatsapp: whatsapp || null,
    locale: body.locale ?? "en",
    source: body.source ?? "erp-e-invoicing-checklist",
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
