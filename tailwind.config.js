/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8170f2",
        secondary: "#F1F0FE",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
