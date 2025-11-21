/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#d02894',
        'primary-dark': '#b02080',
      },
    },
  },
  plugins: [],
}