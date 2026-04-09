import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        surface: "#EDE8DF",
        border: "#C8BAA6",
        text: "#5C4A36",
        heading: "#1C1410",
      },
      fontFamily: {
        heading: ["var(--font-instrument)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;