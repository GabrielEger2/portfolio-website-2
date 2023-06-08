/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        'xll': '10rem',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
};