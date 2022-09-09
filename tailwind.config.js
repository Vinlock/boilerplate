// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./client/**/*.{ts,tsx}',
		'./pages/**/*.{ts,tsx}',
		'./public/**/*.{ts,tsx}',
		'./styles/**/*.css',
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
