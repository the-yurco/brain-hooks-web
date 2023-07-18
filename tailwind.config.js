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
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				'bg-primary': '#23272f',
				'bg-secondary': '#181B20',
				'blue-main': '#0D6C8C',
				'btn-grey': '#252932'
			}
		}
	},
	plugins: []
};
