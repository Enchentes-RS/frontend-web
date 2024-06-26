/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      boxShadow: {
        DEFAULT:
          '0px 1px 3px 0px rgb(0 0 0 / 0.3), 0px 4px 8px 3px rgb(0 0 0 / 0.15)',
        md: '0px 4px 4px 0px rgb(0 0 0 / 0.3), 0px 8px 12px 6px rgb(0 0 0 / 0.15)',
      },
      colors: {
        volunteer: '#fe375b',
        shelter: '#00a2fa',
        green: {
          50: '#ecfdf6',
          100: '#d1fae8',
          200: '#a8f2d6',
          300: '#6fe6c1',
          400: '#36d1a5',
          500: '#13c296',
          600: '#079473',
          700: '#05775f',
          800: '#075e4d',
          900: '#074d41',
          950: '#022c25',
        },
        red: {
          50: '#fff0f0',
          100: '#ffdede',
          200: '#ffc3c3',
          300: '#ff9999',
          400: '#ff5e5e',
          500: '#ff2c2c',
          600: '#f50d0d',
          700: '#cf0606',
          800: '#ab0909',
          900: '#8a0f0f',
          950: '#4d0202',
        },
        yellow: {
          50: '#fffbeb',
          100: '#fff4c2',
          200: '#ffe988',
          300: '#ffd94a',
          400: '#ffc520',
          500: '#f9a407',
          600: '#dd7b02',
          700: '#b75606',
          800: '#94420c',
          900: '#7a360d',
          950: '#461b02',
        },
        blue: {
          50: '#e9f8ff',
          100: '#ceefff',
          200: '#a8f2d6',
          300: '#6bd9ff',
          400: '#26bfff',
          500: '#0097ff',
          600: '#006dff',
          700: '#0052ff',
          800: '#0045e6',
          900: '#0040b3',
          950: '#001d4d',
        },
      },
      fontSize: {
        '2xs': '.625rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'search-down': {
          from: { height: '0' },
          to: { height: '80vh' },
        },
        'search-up': {
          from: { height: '80vh' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'search-down': 'search-down 0.1s ease-out',
        'search-up': 'search-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
}
