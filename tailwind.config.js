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
        'destination-mobile':
          "url('/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/crew/background-crew-desktop.jpg')",
        'technology-mobile':
          "url('/technology/background-technology-mobile.jpg')",
        'technology-tablet':
          "url('/technology/background-technology-tablet.jpg')",
        'technology-desktop':
          "url('/technology/background-technology-desktop.jpg')",
      },
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
      },
      fontFamily: {
        Barlow: ['Barlow'],
        BarlowCondensed: ['Barlow Condensed'],
        Bellefair: ['Bellefair'],
      },
    },
  },
  plugins: [],
};
