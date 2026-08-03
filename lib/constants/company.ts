/** Public company + UAE trust signals (set via NEXT_PUBLIC_* in .env.local). */

/**
 * Next.js only inlines NEXT_PUBLIC_* when accessed with a static property path.
 * Dynamic `process.env[key]` works on the server but is empty after client hydration —
 * which made address / phone / WhatsApp vanish in the footer after load.
 */
function env(key: "STREET" | "LICENSE" | "TRN" | "PHONE" | "WHATSAPP"): string {
  switch (key) {
    case "STREET":
      return process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS?.trim() ?? "";
    case "LICENSE":
      return process.env.NEXT_PUBLIC_COMPANY_TRADE_LICENSE?.trim() ?? "";
    case "TRN":
      return process.env.NEXT_PUBLIC_COMPANY_TRN?.trim() ?? "";
    case "PHONE":
      return process.env.NEXT_PUBLIC_COMPANY_PHONE?.trim() ?? "";
    case "WHATSAPP":
      return process.env.NEXT_PUBLIC_COMPANY_WHATSAPP?.trim() ?? "";
  }
}

/** Comma- or pipe-separated list (e.g. two regional numbers). */
function envList(key: "PHONE" | "WHATSAPP"): string[] {
  const raw = env(key);
  if (!raw) return [];
  return raw
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function withFallbackPhones(phones: string[]): string[] {
  const defaults = ["+971 50 647 2589"];
  return [...phones, ...defaults.filter((phone) => !phones.includes(phone))];
}

const PHONE_COUNTRY_BY_NUMBER: Record<string, string> = {
  "+971 50 647 2589": "UAE",
  "+962 79 804 0402": "Jordan",
  "+44 7787 703076": "UK",
};

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
  streetAddress: env("STREET"),
  tradeLicense: env("LICENSE"),
  trn: env("TRN"),
  phones: withFallbackPhones(envList("PHONE")),
  whatsapps: envList("WHATSAPP"),
  availableIn: ["UAE", "Jordan", "Iraq", "UK"],
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

export function phoneCountry(phone: string): string | null {
  const direct = PHONE_COUNTRY_BY_NUMBER[phone];
  if (direct) return direct;
  const digits = phone.replace(/\D/g, "");
  for (const [known, country] of Object.entries(PHONE_COUNTRY_BY_NUMBER)) {
    if (known.replace(/\D/g, "") === digits) return country;
  }
  return null;
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
