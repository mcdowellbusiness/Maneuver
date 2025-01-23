/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#43535C",
        secondary: "#000000",
        tertiary: "#f2e6e6",
        fourth: "#adccd9",
        heading: "#070D16",
        green: "#6C6C6C",
        red: "#F22E52",
        "light-gray": "#9CBBBF",
        "dark-orange": "#B97413",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        hero: "url('/public/assets/images/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/src/assets/images/gradient_bg.jpg')",
      },
      boxShadow: {
        articleCard: "0 0px 1px 0 rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
