import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgreen: "#E8F3F3",
        lightergreen: "#F2F8F7",
        thickgreen: "#00AAA1",
        textdark: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;
