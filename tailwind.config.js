/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: false,
  },
  content: [
    "./**/*.{html,js}",
     "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center : true,
      margin : {
        DEFAULT : "12px",
        md:"32px"
      }
    }
  },
  plugins : [
    require('daisyui'),
  ]
}