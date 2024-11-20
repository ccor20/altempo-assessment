/** @type {import('tailwindcss').Config} */
export default {
  purge: false,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      },
      screens: {
        base: { min: '981px' },
        tablet: { min: '981px', max: '1279px' }
      },
      fontFamily: {}
    }
  },
  plugins: []
}
