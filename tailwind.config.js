/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./sections/*.liquid',
		'./templates/*.liquid',
		'./snippets/*.liquid',
		'./layout/*.liquid',
		'./assets/*.{liquid,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
