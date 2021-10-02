const colors = require('tailwindcss/colors')

module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         white: colors.white,
         gray: colors.trueGray,
         red: colors.red,
         lavender: {
            light: '#dee2ff',
            DEFAULT: '#CBC0D3',
            dark: '#8E9AAF',
         },
         blush: {
            light: '#FEEAFA',
            DEFAULT: '#EFD3D7',
         },
      },
      extend: {},
      screens: {
         // => @media (min-width: 640px) { ... }
         sm: '640px',
         // => @media (min-width: 768px) { ... }
         md: '768px',
         // => @media (min-width: 1024px) { ... }
         lg: '1024px',
         // => @media (min-width: 1280px) { ... }
         xl: '1280px',
         // => @media (min-width: 1536px) { ... }
         '2xl': '1536px',
      },
   },
   variants: {
      extend: {
         animation: ['motion-safe', 'motion-reduce'],
         borderStyle: ['hover'],
         flexGrow: ['hover', 'focus'],
         margin: ['last'],
         textColor: ['odd'],
      },
   },
   plugins: [],
}
