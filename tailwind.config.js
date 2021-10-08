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
         rose: colors.rose,
         lavender: {
            light: '#dee2ff',
            DEFAULT: '#CBC0D3',
            dark: '#8E9AAF',
         },
         blush: {
            light: '#FEEAFA',
            DEFAULT: '#EFD3D7',
            dark: '#E9C3C9',
         },
         blue: {
            light: '#8DB2B9',
            DEFAULT: '#6798A2',
            dark: '#55818a',
         },
      },
      extend: {
         fontFamily: {
            ephesis: ['Ephesis', 'cursive'],
            'give-you-glory': ['"Give You Glory"', 'cursive'],
            'shadows-into-light': ['"Shadows Into Light"', 'cursive'],
            raleway: ['Raleway', 'sans-serif'],
         },
         keyframes: {
            'fade-in': {
               '0%': { opacity: '0' },
               '50%': { opacity: '0.5' },
               '100%': { opacity: '1' },
            },
            'fade-in-larger': {
               '0%': { transform: 'scale(0)', opacity: '0' },
               '50%': { transform: 'scale(2)', opacity: '0.5' },
               '100%': { transform: 'scale(1)', opacity: '1' },
            },
            'fade-up': {
               '0%': { transform: 'translateY(4rem)', opacity: '0' },
               '50%': { transform: 'translateY(-1rem)' },
               '100%': { transform: 'translateY(0)', opacity: '1' },
            },
            wiggle: {
               '0%, 100%': { transform: 'rotate(-3deg)' },
               '50%': { transform: 'rotate(3deg)' },
            },
         },
         animation: {
            'fade-in-larger': 'fade-in 1s ease-in',
            'fade-in': 'fade-in 1s ease-in',
            'fade-up': 'fade-up .5s ease-in',
            wiggle: 'wiggle 1s ease-in-out infinite',
         },
      },
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
         backgroundColor: ['active'],
         borderStyle: ['hover', 'active'],
         flexGrow: ['hover', 'focus'],
         margin: ['last'],
         textColor: ['odd', 'active'],
      },
   },
   plugins: [],
}
