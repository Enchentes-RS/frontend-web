/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        around: '0 0 0 2px',
      },
      animation: {
        ['appear-from-bottom']: 'appear-from-bottom 0.5s forwards',
      },
      keyframes: {
        ['appear-from-bottom']: {
          ['0%']: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          ['100%']: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      fontSize: {
        sm: '0.8rem',
        xsm: '1.2rem',
        base: '1.6rem',
        xl: '2.4rem',
        '2xl': '3.2rem',
        '3xl': '4rem',
        '4xl': '4.8rem',
      },
      spacing: {
        8: '0.8rem',
        12: '1.2rem',
        16: '1.6rem',
        24: '2.4rem',
        32: '3.2rem',
        40: '4rem',
        48: '4.8rem',
        56: '5.6rem',
        64: '6.4rem',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};
