/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#d02894',
          light: '#e02fa4',
          dark: '#b02384',
        },
        secondary: {
          DEFAULT: '#a855f7',
          light: '#b866ff',
          dark: '#9333ea',
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow-text': 'glow-text 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-text': {
          '0%, 100%': { textShadow: '0 0 10px rgba(208, 40, 148, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(208, 40, 148, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}