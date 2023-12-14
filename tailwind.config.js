/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#D2D5DA',
        'gray-100': '#1B1D1F',
        'gray-200': '#282B30',
        'gray-300': '#6C727F',
        'light-blue': '#4E80EE',
      },
      fontSize: {
        sm: '12px',
        md: '14px',
        base: '16px',
        lg: '32px',
      },
      fontFamily: {
        sans: ['Be Vietnam Pro'],
      },
    },
  },
  plugins: [],
};
