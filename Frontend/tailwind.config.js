/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('../src/assets/Background3.jpg')",
        'backgroundLogin': "url('../src/assets/Background.png')"
       })
    },
  },
  plugins: [],
}

