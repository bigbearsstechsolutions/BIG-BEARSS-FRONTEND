/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0c",
        surface: "#0a0a0a",
        "surface-dim": "#131315",
        "surface-container-lowest": "#0e0e10",
        "surface-container-low": "#1c1b1e",
        "surface-container": "#201f22",
        "surface-container-high": "#2a2a2c",
        "surface-bright": "#39393b",
        "on-surface": "#e5e1e4",
        "on-surface-variant": "#c7c5ce",
        "outline": "#919098",
        "outline-variant": "#46464d",
        "primary": "#c1c4e9",
        "on-primary": "#2a2e4b",
        "primary-container": "#0a0e2a",
        "on-primary-container": "#777a9c",
        "secondary": "#b6c4ff",
        "on-secondary": "#00277f",
        "secondary-container": "#0056fd",
        "on-secondary-container": "#e4e7ff",
        "on-secondary-fixed-variant": "#003ab2",
        "tertiary": "#ecbda0",
        "on-tertiary": "#462a15",
        "on-tertiary-container": "#9c745b",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-sm": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
      },
      spacing: {
        "section": "120px",
        "section-sm": "60px",
      },
      maxWidth: {
        "container": "1280px",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      animation: {
        "grid-move": "gridMove 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "spin-slow": "spin 15s linear infinite",
        "gradient": "gradientMove 15s ease infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
