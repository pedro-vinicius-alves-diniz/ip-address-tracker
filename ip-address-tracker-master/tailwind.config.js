/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      },
      backgroundImage: {
        'mobile': 'url(./src/images/pattern-bg-mobile.png)',
        'desktop': 'url(./src/images/pattern-bg-desktop.png)'
      },
      fontFamily: {
        'rubik': ["Rubik", "serif"]
      }
    },
  },
  plugins: [],
}

