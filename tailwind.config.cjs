const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-img': "url('src/assets/img/acs-background-2.png')",
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
    },
  },
  plugins: [],
};
