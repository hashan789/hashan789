/** @type {import('tailwindcss').Config} */
const colors = require('./src/documents/colorpalette.json');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Set as default sans-serif font
        inter: ['Inter', 'sans-serif'], // Set as default Inter font
      },
      colors: {
        ...colors
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "from" : { opacity: 0 },
          "to" : { opacity: 1 }
        },
        slideInUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "slide-in-up-down": "slideInUpDown 1s ease-out",
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
}

