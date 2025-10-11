/** @type {import('tailwindcss').Config} */

const formsPlugin = require("@tailwindcss/forms")
const defaultTheme = require("tailwindcss/defaultTheme")
const scrollbarPlugin = require("tailwind-scrollbar")

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "0.6875rem",
      },
      backdropBlur: {
        xs: "3px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        ui: {
          // 50: '#232423', // '#201F1D',
          // 100: '#1b1d1b', // '#191816',
          // 200: '#292a28', // '#282724',
          // 300: '#2d2f2d', //'#2C2B29',
          // 350: '#2f322f', //'#353431',
          // 400: '#3d433d', //'#494845',
          // 500: '#464e46' // #61605C'
          0: "#100f0f",
          25: "#10100e",
          50: "#161513",
          100: "#201F1D",
          200: "#282724",
          300: "#2C2B29",
          350: "#353431",
          400: "#494845",
          500: "#61605C",
        },
        // https://uicolors.app/create
        apple: {
          50: "#f4fbf2",
          100: "#e5f7e1",
          200: "#caeec4",
          300: "#a0e095",
          400: "#6dc95f",
          500: "#4fbb3e",
          600: "#388f2a",
          700: "#2e7124",
          800: "#285a21",
          900: "#224a1d",
          950: "#0e280b",
        }
      },
    },
  },
  plugins: [formsPlugin, scrollbarPlugin],
}
