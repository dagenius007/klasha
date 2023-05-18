/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "Poppins"],
    },
    extend: {
      colors: {
        lightRed: "#FFFBF7",
        grey: "#8D8D8D",
        lowBlack: "#1A1A1A",
        blackShade : "#0A0A0A",
        mainColor: "#EF2C5A",
        lightGrey : "#EDEDED",
        tableGrey: "#484848",
        tableColor: "#F0F0F0"

      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      },
      height: {
        '18': '4.5rem',
        '50': '12.5rem',
        '120': '30rem',
      },
      width: {
        '22': '5.5rem',
        '90': '22.5rem',

      },
      flex: {
        'unique': '1 0 0'
      }
    },
  },
  plugins: [],
};
