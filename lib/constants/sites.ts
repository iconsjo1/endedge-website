export const SITES = {
  corporate: process.env.NEXT_PUBLIC_CORPORATE_URL ?? "https://endedge.co",
  portal: process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://live.endedge.co",
} as const;
