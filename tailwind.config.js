const colors = require('tailwindcss/colors')
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        'sm':'640px',
        fontSize: {
          "h1": ['32px', '40px'],
          "h1-sm": ['48px', '60px'],          
          "h2": ['29px', '29px'],
          "h2-sm": ['32px', '38px'],  
          "h3":"24px",
          "button":"13px"        
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        primary:"#FF5C00",
        labelColor:"#676767"
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }