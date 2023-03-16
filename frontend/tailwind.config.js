/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        yellow: "#FFAB1D",
        main: "#006163",
        "main-dark": "#262350",
        "main-light": "#00ACB0",
        black: "#272727",
        grey1: "#666666",
        grey2: "#999999",
        grey3: "#CCCCCC",
        grey4: "#F0F0F0",
        green: "#54A05C",
        red: "#FF3838",
        background: "#F5F5F5",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        fira: ["Fira sans", "sans-serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
      backgroundImage: { searchBarIcon: "url('./assets/icons/search.svg')" },
      boxShadow: {
        image: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
