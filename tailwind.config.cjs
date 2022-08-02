const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '5% 1fr 1fr 5%',
      },
      backgroundImage: {
        'main-img': "url('assets/img/acs-background-2.png')",
      },
      backgroundSize: {
        blown: '200% 200%',
      },
      colors: {
        'service-card': '#393b4360',
        'light-shadow': '#30304555',
        'dark-shadow': '#00000055',
        'service-desc-dark': 'rgba(238, 238, 238, 0.404)',
        'service-desc-light': 'rgba(238, 238, 238, 0.909)',
      },
      boxShadow: {
        service: '-8px -8px 30px #30304555, 8px 8px 30px #00000055, inset 0 0 0 4px #30304555;',
      },
      fontFamily: {
        'gt-walsheim-pro': ['GT Walsheim Pro'],
        sans: ['GT Walsheim Pro', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        20: '5rem',
      },
      keyframes: {
        move: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
      },
      animation: {
        move: 'move 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
