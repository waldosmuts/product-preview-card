/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(158, 36%, 37%)",
        "primary-dark-cyan": "rgb(26, 64, 49)",
        "primary-cream": "hsl(30, 38%, 92%)",
        "neutral-dark-blue": "hsl(212, 21%, 14%)",
        "neutral-gray-blue": "hsl(228, 12%, 48%)",
      },
    },
    fontFamily: {
      "fraunces": ["Fraunces", "serif"],
      "montserrat": ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}
