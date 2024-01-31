import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': '1958px'
      },
    },
    colors: {
      "primary-100": "#660066",
      "primary-200": "#973b94",
      "primary-300": "#fe9bf8",
      "accent-100": "#FF6600",
      "accent-200": "#ffffa1",
      "text-100": "#FFFFFF",
      "text-200": "#e0e0e0",
      "bg-100": "#1A1A1A",
      "bg-200": "#292929",
      "bg-300": "#404040",
    },
  },
  plugins: [],
};
export default config;
