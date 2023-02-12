/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["brandon-regular", "sans-serif"],
        "brandon-black": "Brandon-black, cursive",
        "brandon-light": "Brandon-light, cursive",
        "brandon-medium": "Brandon-medium, cursive",
        "brandon-regular": "Brandon-regular, cursive",
        "brandon-bold": "Brandon-bold, cursive",
        "brandon-bold-italic": "Brandon-bold-italic, cursive",
        "brandon-light-italic": "Brandon-light-italic, cursive",
        "brandon-medium-italic": "Brandon-medium-italic, cursive",
        "brandon-regular-italic": "Brandon-regular-italic, cursive",
        "brandon-thin-italic": "Brandon-thin-italic, cursive",
        "Open-Sans": "Open Sans, cursive",
      },
    },
  },
  plugins: [],
};
