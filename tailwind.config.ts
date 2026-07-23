import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark surfaces — deep navy derived from brand #14257E
        ink: "#0A1230",       // page background (dark sections)
        slate: {
          panel: "#111C4A",   // raised dark panel
          line: "#25336B",    // hairlines on dark
        },
        mist: "#EAEEF9",      // primary text on dark
        muted: "#93A0C8",     // secondary text on dark

        // Brand core
        navy: "#14257E",      // brand dark blue
        orange: "#FF6F00",    // brand accent
        "orange-bright": "#FF8A2B",

        // Light surfaces
        paper: "#FAF9F6",     // warm off-white light section
        graphite: "#212121",  // brand black — text on light
        stone: "#555555",     // brand gray — secondary text on light
      },
      fontFamily: {
        display: ["var(--font-poppins)", "var(--font-cairo)", "system-ui", "sans-serif"],
        sans: ["var(--font-roboto)", "var(--font-cairo)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
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
