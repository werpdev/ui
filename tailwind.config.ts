import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
