"use client";

import { COMPANY, hasTrustSignals, telHref, whatsappHref } from "@/lib/constants/company";
import { trackEvent } from "@/lib/analytics";

type TrustLabels = {
  tradeLicense: string;
  trn: string;
  phone: string;
  whatsapp: string;
  email: string;
};

type Props = {
  labels: TrustLabels;
  variant?: "footer" | "cta";
  whatsappPrefill?: string;
};

export default function TrustContacts({
  labels,
  variant = "footer",
  whatsappPrefill,
}: Props) {
  const wa = whatsappHref(whatsappPrefill);
  const textClass =
    variant === "footer"
      ? "text-sm text-mist/85 transition-colors hover:text-orange"
      : "text-sm text-mist/90 transition-colors hover:text-orange";

  const blockClass =
    variant === "footer"
      ? "mt-5 space-y-1.5 text-sm leading-relaxed text-muted"
      : "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2";

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
          className={textClass}
          onClick={() => trackEvent("contact_click", { method: "email", location: variant })}
        >
          {labels.email}: {COMPANY.email}
        </a>
        {COMPANY.phone ? (
          <a
            href={telHref(COMPANY.phone)}
            className={textClass}
            onClick={() => trackEvent("contact_click", { method: "phone", location: variant })}
          >
            {labels.phone}: {COMPANY.phone}
          </a>
        ) : null}
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className={textClass}
            onClick={() => trackEvent("contact_click", { method: "whatsapp", location: variant })}
          >
            {labels.whatsapp}
          </a>
        ) : null}
      </div>
    </div>
  );
}
