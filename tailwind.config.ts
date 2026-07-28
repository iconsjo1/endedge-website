import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic surfaces — values come from CSS variables (theme-aware)
        ink: "var(--bg)",
        slate: {
          panel: "var(--bg-raised)",
          line: "var(--line)",
        },
        mist: "var(--text)",
        muted: "var(--text-muted)",

        // Brand core
        navy: "var(--navy)",
        orange: "var(--orange)",
        "orange-bright": "var(--orange-bright)",

        // Alternating section bands
        paper: "var(--bg-band)",
        graphite: "var(--text-on-band)",
        stone: "var(--text-muted-on-band)",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        arabic: ["var(--font-el-messiri)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1180px",
      },
      keyframes: {
        "edge-trace": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(400%)", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "edge-trace": "edge-trace 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
