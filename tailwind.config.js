/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: { max: '768px' },
      // => @media (max-width: 639px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'home-mobile': "url('/home/background-home-mobile.jpg')",
        'home-tablet': "url('/home/background-home-tablet.jpg')",
        'home-desktop': "url('/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
