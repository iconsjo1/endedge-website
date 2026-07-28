/** StackMark layer indices: 0 Infrastructure … 4 Growth */

export const STACK_LAYER_COUNT = 5;

export type ServiceSlug =
  | "cloud-infrastructure"
  | "managed-it"
  | "technology-supply"
  | "energy-systems"
  | "web-mobile-development"
  | "erp-e-invoicing"
  | "software-training"
  | "it-consultancy"
  | "ai-automation";

export const SERVICE_STACK_LAYER: Record<ServiceSlug, number> = {
  "cloud-infrastructure": 0,
  "managed-it": 0,
  "technology-supply": 0,
  "energy-systems": 0,
  "web-mobile-development": 1,
  "erp-e-invoicing": 1,
  "software-training": 2,
  "it-consultancy": 2,
  "ai-automation": 3,
};

/** Map AI readiness score (0–100) to the highest unlocked stack layer. */
export function readinessUnlockLayer(score: number): number {
  if (score >= 85) return 4;
  if (score >= 70) return 3;
  if (score >= 55) return 2;
  if (score >= 40) return 1;
  return 0;
}

/** ValueStack list is top-down (Applied AI → Infrastructure); map row → stack index. */
export function valueStackRowToLayer(rowIndex: number, rowCount: number): number {
  if (rowCount >= 5) return Math.max(0, 4 - rowIndex);
  return Math.max(0, 3 - rowIndex);
}
