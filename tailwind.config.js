module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2.5vw': '2.5vw',
        '3vw': '3vw',
        '3.5vw': '3.5vw',
        '4vw': '4vw',
        '4.5vw': '4.5vw',
        '5vw' : '5vw',
        '5.5vw' : '5.5vw',
        '6vw' : '6vw',
      },
      maxWidth: {
        '2xs': '16rem',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}