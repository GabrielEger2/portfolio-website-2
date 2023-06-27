/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'ssm': '400px',
      },
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