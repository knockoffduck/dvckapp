/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      padidng: '2rem',
    },
    extend: {fontFamily: {
      'poppins': ['Poppins', 'sans-serif'] 
    },},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
