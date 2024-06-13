import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: '@storybook/react-vite',
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-themes', '@storybook/addon-controls', '@storybook/addon-a11y', '@storybook/addon-actions'],
};

export default config;
