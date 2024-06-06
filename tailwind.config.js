// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jaro': ['Jaro', 'sans-serif'],
        'caveat': ['Caveat', 'cursive']
      }
    },
  },
  plugins: [],
};
