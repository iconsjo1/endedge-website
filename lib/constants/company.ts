/** Public company + UAE trust signals (set via NEXT_PUBLIC_* in .env.local). */

function env(key: string): string {
  return process.env[key]?.trim() ?? "";
}

/** Comma- or pipe-separated list (e.g. two regional numbers). */
function envList(key: string): string[] {
  const raw = env(key);
  if (!raw) return [];
  return raw
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const BASE = {
  name: "EndEdge",
  legalName: "Endedge FZE",
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
  phones: envList("NEXT_PUBLIC_COMPANY_PHONE"),
  whatsapps: envList("NEXT_PUBLIC_COMPANY_WHATSAPP"),
} as const;

export function hasTrustSignals(): boolean {
  return Boolean(
    COMPANY.streetAddress ||
      COMPANY.tradeLicense ||
      COMPANY.trn ||
      COMPANY.phones.length ||
      COMPANY.whatsapps.length,
  );
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

/** WhatsApp Business deep link for one number (E.164 or formatted). */
export function whatsappHrefForNumber(phone: string, text?: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** First configured WhatsApp number (for single-link call sites). */
export function whatsappHref(text?: string): string | null {
  const first = COMPANY.whatsapps[0];
  return first ? whatsappHrefForNumber(first, text) : null;
}
