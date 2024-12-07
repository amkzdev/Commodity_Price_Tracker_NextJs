import type { Config } from "tailwindcss";

export default {
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
        primary: "#305187",
        'black-1': "#212529",
        error: '#c22b26',
        success: "#3F7424",
        'border-color': '#dee2e6'
      },
    },
  },
  plugins: [],
} satisfies Config;
