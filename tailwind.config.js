/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(133, 133, 133, 0.24) 0px 2px 7px',
        'dk': ' rgba(0,0,0, .24 ) 0px 2px 14px'
      }
    },
  },
  plugins: [],
}
