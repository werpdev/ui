/* eslint-disable prefer-template */
import type { Config } from 'tailwindcss';

const toMap = <K extends string, V>(keys: K[], toValue: (key: K) => V): Record<K, V> => {
	const map: Record<K, V> = {} as Record<K, V>;
	for (const key of keys) {
		map[key] = toValue(key);
	}
	return map;
};

const to30 = '0 1 2 3 4 5 6 7 8 9 10 11 12 12.5 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30';
const to50 = '32 34 36 38 40 42 44 46 48 50';
const to100 = '52 56 60 64 68 72 76 80 84 88 92 96 100';

const remMap = (...values: string[]) => {
	return toMap(
		values.flatMap((v) => v.split(' ')),
		(value) => `${Number(value) / 10}rem`,
	);
};

const config: Config = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		fontSize: remMap(to30, to50),
		lineHeight: remMap(to30, to50),
		spacing: remMap(to30, to50, to100),
		borderRadius: { ...remMap(to30), full: '100%' },
		colors: {
			foreground: 'rgba(var(--c-foreground) / <alpha-value>)',
			background: 'rgba(var(--c-background) / <alpha-value>)',
			gray: {
				f7: 'rgba(var(--c-gray-f7) / <alpha-value>)',
				f3: 'rgba(var(--c-gray-f3) / <alpha-value>)',
				ee: 'rgba(var(--c-gray-ee) / <alpha-value>)',
				cc: 'rgba(var(--c-gray-cc) / <alpha-value>)',
				aa: 'rgba(var(--c-gray-aa) / <alpha-value>)',
				55: 'rgba(var(--c-gray-55) / <alpha-value>)',
			},
			transparent: 'transparent',
			primary: '#dff000',
			white: '#ffffff',
			black: '#000000',
			wine: '#d10060',
			blue: '#0a84ff',
		},
		content: {
			empty: '""',
		},
	},
	plugins: [],
};

export default config;
