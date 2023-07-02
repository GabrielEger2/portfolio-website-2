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
      backgroundImage: {
        'dark-mode-pattern': "url('/src/assets/imgs/DarkModePattern.png')",
        'white-mode-pattern': "url('/src/assets/imgs/WhiteModePattern.png')",
      },
    },
  },
  plugins: [],
};