/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}" // add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin','tailwindcss-animated')
  ],
  darkMode: 'class',
  darkMode: 'media',
}
