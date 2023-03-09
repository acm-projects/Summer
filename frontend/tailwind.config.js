/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'nun': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}