/** EndEdge favicon / app icon — navy tile + orange chevron (matches logo). */

export const ICON_BG = "#0A1230";
export const ICON_ORANGE = "#FF6F00";
export const ICON_RADIUS = 7;

/** 32×32 viewBox chevron path */
export const ICON_CHEVRON_PATH = "M11 7 L21 16 L11 25 L15.5 16 Z";

export const ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="${ICON_RADIUS}" fill="${ICON_BG}"/>
  <path d="${ICON_CHEVRON_PATH}" fill="${ICON_ORANGE}"/>
</svg>`;
