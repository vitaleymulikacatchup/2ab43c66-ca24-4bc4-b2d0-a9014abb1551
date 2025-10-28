/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#B8E0E8',
        'teal-primary': '#4A9BA8',
        'teal-dark': '#2D6B75',
        'cloud-white': '#F8FAFB'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}