import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0B",
        elevate: "#111113",
        raise: "#17171A",
        line: "#26262B",
        ink: "#ECECEE",
        mute: "#9B9BA3",
        dim: "#6C6C75",
        accent: "#C8A97E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        caret: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        caret: "caret 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
