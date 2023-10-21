/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundImage:{
        'canvas':"url('../public/canvas-background.png')",
      }
    },
  },
  plugins: [],
}

