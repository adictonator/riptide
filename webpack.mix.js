// webpack.mix.js

let mix = require('laravel-mix')

mix.js('./src/js/app.js', './assets/app.js')
	.react()
	.postCss('./src/css/app.css', './assets/app.css', [require('tailwindcss')])
