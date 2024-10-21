import type { Config } from "tailwindcss";
import { color } from "./colorPalette";

const { createThemes } = require("tw-colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      inherit: "inherit",
      xs: "1.2rem",
      s: "1.4rem",
      m: "1.6rem",
      l: "1.8rem",
      xl: "2.0rem",
      "2xl": "2.2rem",
      "3xl": "2.4rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        xs: "1.2rem",
        s: "1.4rem",
        m: "1.6rem",
        l: "1.8rem",
        xl: "2.0rem",
        "2xl": "2.2rem",
        "3xl": "2.4rem",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        12: "12px",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: color.blue[700],
        secondary: color.blue[900],
        accent: color.blue[300],
      },
      dark: {
        primary: color.blue[200],
        secondary: color.blue[400],
        accent: color.blue[0],
      },
    }),
  ],
};
export default config;
