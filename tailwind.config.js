/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1320px",
      },
      container: {
        center: true,
        padding: "16px",
      },
      fontFamily: {
        script: ["Caveat", "cursive"],
        japan: ["Noto Serif JP", "serif"],
      },
      colors: {
        dark: "#18181b",
        light: "#f1f5f9",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
