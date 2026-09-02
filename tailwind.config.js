/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: { 50: '#eff6ff', 500: '#3b82f6', 600: '#2563eb', 900: '#1e3a8a', 950: '#172554' }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    },
  },
  plugins: [],
}
