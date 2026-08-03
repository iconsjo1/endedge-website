"use client";

import {
  COMPANY,
  hasTrustSignals,
  phoneCountry,
  telHref,
  whatsappHrefForNumber,
} from "@/lib/constants/company";
import { trackEvent } from "@/lib/analytics";

type TrustLabels = {
  tradeLicense: string;
  trn: string;
  phone: string;
  whatsapp: string;
  email: string;
  countryPhone: string;
};

type Props = {
  labels: TrustLabels;
  variant?: "footer" | "cta";
  whatsappPrefill?: string;
};

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

type ContactLine = {
  display: string;
  tel?: string;
  whatsapp?: string;
  country: string | null;
};

/** One row per number — phone + WhatsApp merge when digits match. */
function buildContactLines(): ContactLine[] {
  const byDigits = new Map<string, ContactLine>();

  for (const phone of COMPANY.phones) {
    const key = digitsOnly(phone);
    if (!key) continue;
    byDigits.set(key, {
      display: phone,
      tel: phone,
      country: phoneCountry(phone),
    });
  }

  for (const wa of COMPANY.whatsapps) {
    const key = digitsOnly(wa);
    if (!key) continue;
    const existing = byDigits.get(key);
    if (existing) {
      existing.whatsapp = wa;
    } else {
      byDigits.set(key, {
        display: wa,
        whatsapp: wa,
        country: phoneCountry(wa),
      });
    }
  }

  return Array.from(byDigits.values());
}

export default function TrustContacts({
  labels,
  variant = "footer",
  whatsappPrefill,
}: Props) {
  const blockClass =
    variant === "footer"
      ? "mt-5 space-y-1.5 text-sm leading-relaxed text-muted"
      : "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2";
  const rowClass =
    variant === "footer"
      ? "inline-flex items-center gap-2 text-sm text-mist/85"
      : "inline-flex items-center gap-2 text-sm text-mist/90";
  const iconLinkClass =
    "inline-flex text-orange transition-colors hover:text-orange-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50";
  const numberClass = "transition-colors hover:text-orange";
  const metaClass = "text-xs text-muted";

  const lines = buildContactLines();

  if (variant === "cta" && !hasTrustSignals() && !COMPANY.email) {
    return null;
  }

  return (
    <div className={blockClass}>
      {variant === "footer" && COMPANY.streetAddress ? (
        <p>{COMPANY.streetAddress}</p>
      ) : null}
      {variant === "footer" && COMPANY.tradeLicense ? (
        <p>
          {labels.tradeLicense}: <span className="text-mist/90">{COMPANY.tradeLicense}</span>
        </p>
      ) : null}
      {variant === "footer" && COMPANY.trn ? (
        <p>
          {labels.trn}: <span className="text-mist/90">{COMPANY.trn}</span>
        </p>
      ) : null}

      <div
        className={
          variant === "footer"
            ? "flex flex-col gap-1.5 pt-2"
            : "flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        }
      >
        <a
          href={`mailto:${COMPANY.email}`}
          className={`${rowClass} transition-colors hover:text-orange`}
          onClick={() => trackEvent("contact_click", { method: "email", location: variant })}
        >
          <ContactIcon type="email" label={labels.email} />
          <span>{COMPANY.email}</span>
        </a>

        {lines.map((line) => {
          const waHref = line.whatsapp
            ? whatsappHrefForNumber(line.whatsapp, whatsappPrefill)
            : null;
          const primaryHref = line.tel ? telHref(line.tel) : (waHref ?? "#");

          return (
            <div key={digitsOnly(line.display)} className={rowClass}>
              {line.tel ? (
                <a
                  href={telHref(line.tel)}
                  className={iconLinkClass}
                  onClick={() =>
                    trackEvent("contact_click", { method: "phone", location: variant })
                  }
                >
                  <ContactIcon type="phone" label={labels.phone} />
                </a>
              ) : null}
              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconLinkClass}
                  onClick={() =>
                    trackEvent("contact_click", { method: "whatsapp", location: variant })
                  }
                >
                  <ContactIcon type="whatsapp" label={labels.whatsapp} />
                </a>
              ) : null}
              <a
                href={primaryHref}
                className={numberClass}
                {...(line.tel
                  ? {}
                  : { target: "_blank" as const, rel: "noopener noreferrer" })}
                onClick={() =>
                  trackEvent("contact_click", {
                    method: line.tel ? "phone" : "whatsapp",
                    location: variant,
                  })
                }
              >
                <span>{line.display}</span>
              </a>
              {line.country ? <span className={metaClass}>({line.country})</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ContactIcon({
  type,
  label,
}: {
  type: "email" | "phone" | "whatsapp";
  label: string;
}) {
  const common = { className: "h-3.5 w-3.5 shrink-0 text-orange", "aria-hidden": true as const };

  if (type === "email") {
    return (
      <>
        <svg viewBox="0 0 16 16" {...common}>
          <path
            fill="currentColor"
            d="M2 3.5h12A1.5 1.5 0 0 1 15.5 5v6A1.5 1.5 0 0 1 14 12.5H2A1.5 1.5 0 0 1 .5 11V5A1.5 1.5 0 0 1 2 3.5Zm0 1a.5.5 0 0 0-.27.08L8 8.72l6.27-4.14A.5.5 0 0 0 14 4.5H2Zm12.5 1.02-5.95 3.93a1 1 0 0 1-1.1 0L1.5 5.52V11c0 .28.22.5.5.5h12a.5.5 0 0 0 .5-.5V5.52Z"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </>
    );
  }

  if (type === "phone") {
    return (
      <>
        <svg viewBox="0 0 16 16" {...common}>
          <path
            fill="currentColor"
            d="M4.27 1.5h2.1c.3 0 .56.2.64.48l.62 2.34a.75.75 0 0 1-.19.73L6.3 6.19a9.06 9.06 0 0 0 3.51 3.51l1.14-1.14a.75.75 0 0 1 .73-.19l2.34.62c.28.08.48.34.48.64v2.1a.75.75 0 0 1-.75.75h-.5C6.76 13 3 9.24 3 4.75v-.5a.75.75 0 0 1 .75-.75h.52Z"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </>
    );
  }

  return (
    <>
      <svg viewBox="0 0 16 16" {...common}>
        <path
          fill="currentColor"
          d="M13.6 2.39A7.46 7.46 0 0 0 8.02.5 7.51 7.51 0 0 0 1.5 11.7L.5 15.5l3.9-1.02A7.51 7.51 0 1 0 13.6 2.39ZM8.02 14A6.47 6.47 0 0 1 4.72 13.1l-.28-.17-2.31.6.62-2.25-.18-.29a6.52 6.52 0 1 1 5.45 3Zm3.57-4.85c-.2-.1-1.15-.57-1.33-.63-.18-.07-.31-.1-.44.1-.13.2-.5.63-.61.76-.11.13-.23.15-.42.05-.2-.1-.82-.3-1.57-.96-.58-.52-.97-1.15-1.08-1.35-.11-.19-.01-.3.08-.4.08-.08.2-.22.3-.34.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.07-.6-1.46-.16-.39-.32-.34-.44-.34h-.38c-.13 0-.35.05-.53.25-.18.2-.69.67-.69 1.63 0 .96.7 1.89.8 2.02.1.13 1.37 2.08 3.3 2.92 1.94.84 1.94.56 2.3.53.35-.03 1.15-.47 1.31-.92.16-.45.16-.84.11-.92-.04-.08-.18-.13-.38-.23Z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </>
  );
}
