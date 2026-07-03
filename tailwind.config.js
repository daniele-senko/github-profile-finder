/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      colors: {
        "github-blue": "#005CFF",
      },
    },
  },
  plugins: [],
};