/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Set as default sans-serif font
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
        }
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
}

