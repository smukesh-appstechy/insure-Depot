/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF6600',
          'textBlack': '#000000DE',
          'textGray': '#00000099',
      },
      fontFamily: {
        'roboto': ["Roboto", "serif"]
      }
    },
  },
  plugins: [],
}

