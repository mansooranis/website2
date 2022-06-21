module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'ph': '375px',
      'xph':'200px',
    },
    extend: {
      backgroundImage: {
        'me-image':"url('/src/Pages/HomePage/me.png')",
      }
    },
  },
  plugins: [],
}
