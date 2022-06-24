module.exports = {
  content: ["*"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),
  require('prettier-plugin-tailwindcss'),]
};
