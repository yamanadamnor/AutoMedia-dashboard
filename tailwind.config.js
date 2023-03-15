// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
      gridTemplateColumns: {
        app: '1% 2fr repeat(6, 1fr) 1%',
        mediaItem: 'auto 1fr',
      },
      gridTemplateRows: {
        app: 'auto auto 1fr',
      },
      backgroundImage: {
        'main-img': "url('/img/acs-background-2.png')",
      },
      backgroundSize: {
        blown: '200% 200%',
      },
      colors: {
        'service-card': '#393b4360',
        'service-card-solid': '#21222e',
        'light-shadow': '#30304555',
        'dark-shadow': '#00000055',
        'service-desc-dark': 'rgba(238, 238, 238, 0.404)',
        'service-desc-light': 'rgba(238, 238, 238, 0.909)',
        background: '#111019',
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
  plugins: [require('@tailwindcss/container-queries')],
};
