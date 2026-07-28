/** Public company + UAE trust signals (set via NEXT_PUBLIC_* in .env.local). */

function env(key: string): string {
  return process.env[key]?.trim() ?? "";
}

const BASE = {
  name: "EndEdge",
  legalName: "EndEdge",
  tagline: "At the Edge of Innovation.",
  location: "Dubai, United Arab Emirates",
  email: "hello@endedge.co",
  website: "https://endedge.co",
  lastUpdated: "July 22, 2026",
} as const;

export const COMPANY = {
  ...BASE,
  streetAddress: env("NEXT_PUBLIC_COMPANY_STREET_ADDRESS"),
  tradeLicense: env("NEXT_PUBLIC_COMPANY_TRADE_LICENSE"),
  trn: env("NEXT_PUBLIC_COMPANY_TRN"),
  phone: env("NEXT_PUBLIC_COMPANY_PHONE"),
  whatsapp: env("NEXT_PUBLIC_COMPANY_WHATSAPP"),
} as const;

export function hasTrustSignals(): boolean {
  return Boolean(
    COMPANY.streetAddress ||
      COMPANY.tradeLicense ||
      COMPANY.trn ||
      COMPANY.phone ||
      COMPANY.whatsapp,
  );
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

/** WhatsApp Business deep link (digits only in env, e.g. 971501234567). */
export function whatsappHref(text?: string): string | null {
  const digits = COMPANY.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
