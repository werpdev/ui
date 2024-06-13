import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import './style.css';

export default {
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
			attributeName: 'data-mode',
		}),
	],
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
} satisfies Preview;
