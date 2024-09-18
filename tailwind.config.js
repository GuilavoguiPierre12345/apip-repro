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
      'sm': '340px',
      'md': '540px',
      'lg': '768px',
      'xl': '1180px',
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