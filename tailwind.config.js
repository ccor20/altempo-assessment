/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

export default {
  purge: false,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: {
          50: '#F5F1FF',
          100: '#EEE5FF',
          200: '#DECEFF',
          300: '#C7A7FF',
          400: '#AE76FF',
          500: '#973FFF'
        },
        secondary: {
          50: '#F1FCFB',
          100: '#CEF9F5',
          200: '#9DF2EC',
          400: '#33CCCC',
          500: '#1BAFB1',
          950: '#15555A'
        },
        accent: {
          50: '#F1F7FD',
          100: '#DFEDFA',
          300: '#9FCDF1',
          500: '#5094E1',
          700: '#3265C3',
          950: '#18243E'
        },
        neutral: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          300: '#B0B0B0',
          500: '#6D6D6D',
          700: '#4F4F4F',
          950: '#0A0A0A'
        },
        success: {
          50: '#EEFFF0',
          200: '#B2FFBD',
          500: '#00C220',
          950: '#00340A'
        },
        warning: {
          50: '#FFF9EB',
          200: '#FDDD8A',
          500: '#F5B40B',
          950: '#453303'
        },
        error: {
          50: '#FEF2F2',
          200: '#FECACA',
          500: '#DC2626',
          950: '#450A0A'
        }
      },
      screens: {
        base: { min: '981px' },
        tablet: { min: '981px', max: '1279px' }
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        inter: ['Inter']
      },
      fontSize: {
        d_lg: '7rem',
        d_md: '5.5rem',
        d_sm: '4rem',
        h_1: '3.5rem',
        h_2: '2.5rem',
        h_3: '2.25rem',
        h_4: '2rem',
        h_5: '1.75rem',
        h_6: '1.5rem',
        p_xl: '1.25rem',
        p_lg: '1.125rem',
        p_base: '1rem',
        p_sm: '0.875rem',
        p_xs: '0.75rem',
        p_tiny: '0.625rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.display-lg': {
          '@apply font-montserrat text-d_lg font-extrabold': {}
        },
        '.display-md': {
          '@apply font-montserrat text-d_md font-extrabold': {}
        },
        '.display-sm': {
          '@apply font-montserrat text-d_sm font-extrabold': {}
        },
        '.heading-1': {
          '@apply font-montserrat text-h_1 font-bold': {}
        },
        '.heading-2': {
          '@apply font-montserrat text-h_2 font-bold': {}
        },
        '.heading-3': {
          '@apply font-montserrat text-h_3 font-bold': {}
        },
        '.heading-4': {
          '@apply font-montserrat text-h_4 font-bold': {}
        },
        '.heading-5': {
          '@apply font-inter text-h_5 font-semibold': {}
        },
        '.heading-6': {
          '@apply font-inter text-h_6': {}
        },
        '.paragraph-xl': {
          '@apply font-inter text-p_xl': {}
        },
        '.paragraph-lg': {
          '@apply font-inter text-p_lg': {}
        },
        '.paragraph-base': {
          '@apply font-inter text-p_base': {}
        },
        '.paragraph-sm': {
          '@apply font-inter text-p_sm': {}
        },
        '.paragraph-xs': {
          '@apply font-inter text-p_xs': {}
        },
        '.paragraph-tiny': {
          '@apply font-inter text-p_tiny': {}
        }
      })
    })
  ]
}
