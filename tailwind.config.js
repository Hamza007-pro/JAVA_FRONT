/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundImage:{
        'canvas':"url('../public/img4.jpg')",
      },
       colors: {
      ivory:'#5c5346',
      gold:'#cba328',
    },
    },
   
  },
  plugins: [],
}

