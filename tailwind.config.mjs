/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:{
			colors:{
				'rodeo-dust': {
					'50': '#f9f5f3',
					'100': '#f0eae4',
					'200': '#e1d2c7',
					'300': '#d0b8a8',
					'400': '#b9927e',
					'500': '#aa7965',
					'600': '#9d6859',
					'700': '#83554b',
					'800': '#6b4741',
					'900': '#573b37',
					'950': '#2e1e1c',
				},
			}
		},
	},
	plugins: [],
}
