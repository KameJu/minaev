/** @type {import('tailwindcss').Config} */
import  colors  from 'tailwindcss/colors'

const constants = {
	primary: '#F3F3F3',
	'dark-primary': "#E3E3E3",
	gray: '#5F5F5F',
	'dark-gray': '#505050',
	black: '#181818'
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: { transparent: colors.transparent, ...constants },
		extend: {}
	},
	plugins: []
}
