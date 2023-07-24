/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif']
			},
			colors: {
				'bg-primary': '#F2274C',
				'bg-secondary': '#181B20',
				'blue-main': '#03658C',
				'btn-grey': '#252932',
				'grey-main': '#343A46',
				'yellow-main': '#D99441',
				'purple-main': '#6B75DB',
				'green-main': '#147562',
				'orange-sec': 'rgba(182, 87, 0, 0.2)',
				'purple-sec': 'rgba(107, 117, 219, 0.2)',
				'green-sec': 'rgba(68, 172, 153, 0.2)',
				'grey-sec': 'rgba(52, 58, 70, 0.2)',
				'blue-sec': 'rgba(13, 108, 140, 0.2)'
			}
		}
	},
	plugins: []
};
