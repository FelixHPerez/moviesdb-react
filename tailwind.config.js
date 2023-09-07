/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-img": "url('../assets/film.jpg')",
      },
      screens: {
        xs: "450 px",
      },
      animation: {
        loading:
          "8000ms linear infinite loading, 600ms linear infinite color-change",
      },
      keyframes: {
        loading: {
          "100%": { strokeDashoffset: "1000" },
        },
        "color-change": {
          "0%": { color: "#ffb20c" },
          "50%": { color: "#fff" },
          "100%": { color: "#ffb20c" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
