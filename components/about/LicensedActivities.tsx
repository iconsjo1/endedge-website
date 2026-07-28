import Link from "next/link";
import { LICENSE_ACTIVITIES } from "@/lib/constants/license-activities";
import type { Locale } from "@/lib/i18n/config";

type Labels = {
  serviceLink: string;
};

type Props = {
  locale: Locale;
  labels: Labels;
};

export default function LicensedActivities({ locale, labels }: Props) {
  return (
    <ul className="mt-8 divide-y divide-slate-line rounded-xl border border-slate-line bg-slate-panel/40">
      {LICENSE_ACTIVITIES.map((activity) => {
        const description = locale === "ar" ? activity.ar : activity.en;
        return (
          <li
            key={activity.code}
            className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
          >
            <div className="min-w-0 flex-1">
              <span className="font-mono text-xs text-orange">{activity.code}</span>
              <p className="mt-1.5 text-sm leading-relaxed text-mist/90">{description}</p>
            </div>
            <Link
              href={`/${locale}/services/${activity.serviceSlug}`}
              className="shrink-0 font-display text-xs font-semibold text-orange transition-colors hover:text-mist"
            >
              {labels.serviceLink} →
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
