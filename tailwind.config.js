/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7d8e7d',
          500: '#5f7060',
          600: '#4a5a4b',
          700: '#3d4a3e',
          800: '#333d34',
          900: '#2c352d',
          950: '#1a1f1b',
        },
      },
    },
  },
  plugins: [],
};
