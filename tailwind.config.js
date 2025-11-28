// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				"8xl": "90rem",
			},
			aspectRatio: {
				"2/3": "2 / 3",
			},
			gridTemplateColumns: {
				app: "1% 3fr repeat(6, 1fr) 1%",
				mediaItem: "auto 1fr",
			},
			gridTemplateRows: {
				app: "auto auto 1fr",
			},
			backgroundImage: {
				"main-img": "url('/img/acs-background-2.png')",
			},
			backgroundSize: {
				blown: "200% 200%",
			},
			colors: {
				"service-card": "#393b4360",
				"service-card-solid": "#21222e",
				"light-shadow": "#2f376444",
				"dark-shadow": "#22405A44",
				"service-desc-dark": "rgba(238, 238, 238, 0.404)",
				"service-desc-light": "rgba(238, 238, 238, 0.909)",
				background: "#111019",
			},
			boxShadow: ({ theme }) => ({
				service: `-8px -8px 30px ${theme(
					"colors.light-shadow",
				)}, 8px 8px 30px ${theme(
					"colors.dark-shadow",
				)}, inset 0 0 0 2px ${theme("colors.light-shadow")};`,
				"service-sm": `-6px -6px 20px ${theme(
					"colors.light-shadow",
				)}, 6px 6px 20px ${theme(
					"colors.dark-shadow",
				)}, inset 0 0 0 1px ${theme("colors.light-shadow")};`,
			}),
			fontFamily: {
				"gt-walsheim-pro": ["GT Walsheim Pro"],
				sans: ["GT Walsheim Pro", ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				20: "5rem",
			},
			keyframes: {
				move: {
					"0%, 100%": { backgroundPosition: "0% 0%" },
					"50%": { backgroundPosition: "100% 0%" },
				},

				slideDownAndFade: {
					from: { opacity: 0, transform: "translateY(-2px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
				slideLeftAndFade: {
					from: { opacity: 0, transform: "translateX(2px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
				slideUpAndFade: {
					from: { opacity: 0, transform: "translateY(2px)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
				slideRightAndFade: {
					from: { opacity: 0, transform: "translateX(-2px)" },
					to: { opacity: 1, transform: "translateX(0)" },
				},
			},
			animation: {
				move: "move 2s ease-in-out infinite",
				slideDownAndFade:
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade:
					"slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade:
					"slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
		},
		debugScreens: {
			position: ["bottom", "right"],
		},
	},
	plugins: [require("tailwindcss-animate")],
};
