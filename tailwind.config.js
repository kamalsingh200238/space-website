/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      //  min - width
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536',
      // => @media (min-width: 1280px) { ... }

      // max - width
      m2xl: { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      mlx: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      mlg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mmd: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      msm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      // min and max together
      osm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      omd: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      olg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      oxl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      o2xl: { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        tech: '85px repeat(2, minmax(0, 1fr))',
      },
      backgroundImage: {
        'right-arrow': "url('/crew/right-arrow.png')",
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
