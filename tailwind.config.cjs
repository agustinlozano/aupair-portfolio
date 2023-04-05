/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'walsheim': ['GT Walsheim Pro', 'GT Walsheim Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
