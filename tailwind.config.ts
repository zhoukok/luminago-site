import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#000FF0",
          50:  "#E6E8FF",
          100: "#B8BEFF",
          200: "#8A94FF",
          300: "#5C6AFF",
          400: "#2E40FF",
          500: "#000FF0",
          600: "#000AC2",
          700: "#000893",
          800: "#000564",
          900: "#000235",
        },
        ink: {
          DEFAULT: "#0A0A12",
          soft:    "#121220",
          muted:   "#1A1A2E",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "var(--font-noto-sc)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-brand":
          "0 0 0 1px rgba(0,15,240,0.25), 0 10px 40px -10px rgba(0,15,240,0.6)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 50% 30%, rgba(0,15,240,0.18), transparent 55%), linear-gradient(180deg, #0A0A12 0%, #050510 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #000FF0 0%, #5C6AFF 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "shine": "shine 2.2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
