import type { Meta, StoryObj } from '@storybook/react';
import { IconSettings } from '@tabler/icons-react';
import { Button } from './Button';

export default {
	title: 'button/Button',
	component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const WithIcon: Story = {
	args: {
		type: 'button',
		fill: 'primary',
		children: 'Button',
		Icon: IconSettings,
	},
};

export const IconOnly: Story = {
	args: {
		type: 'button',
		fill: 'primary',
		Icon: IconSettings,
	},
};

export const Primary: Story = {
	args: {
		type: 'button',
		fill: 'primary',
		children: 'Button',
	},
};

export const Blue: Story = {
	args: {
		type: 'button',
		fill: 'blue',
		children: 'Button',
	},
};

export const Background: Story = {
	args: {
		type: 'button',
		fill: 'background',
		children: 'Button',
	},
};

export const Outline: Story = {
	args: {
		type: 'button',
		fill: 'outline',
		children: 'Button',
	},
};
