/** Lightweight GA4 event helper — loads only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set. */

export type AnalyticsEventName =
  | "contact_click"
  | "checklist_submit"
  | "assessment_start"
  | "assessment_complete"
  | "chat_open"
  | "chat_message";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, params?: EventParams) {
  if (typeof window === "undefined") return;

  const payload = { event_category: "engagement", ...params };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, payload);
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ?? "";
