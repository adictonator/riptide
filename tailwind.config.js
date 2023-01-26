/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./sections/*.liquid',
		'./templates/*.liquid',
		'./snippets/*.liquid',
		'./layout/*.liquid',
		'./assets/*.{liquid,js}',
		'./raw/**/*.{css,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
