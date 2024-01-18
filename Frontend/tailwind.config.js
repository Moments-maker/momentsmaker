/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('../src/assets/Background5.jpg')",
        'backgroundLogin': "url('../src/assets/Background.png')",
        'about': "url('../src/assets/About.jpg')",
       }),
       fontFamily: {
        display: ["Dongle", "sans-serif"],
      },
    },
  },
  plugins: [],
}

