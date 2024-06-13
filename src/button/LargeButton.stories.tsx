import type { Meta, StoryObj } from '@storybook/react';
import { LargeButton } from './LargeButton';

export default {
	title: 'button/LargeButton',
	component: LargeButton,
} satisfies Meta<typeof LargeButton>;

type Story = StoryObj<typeof LargeButton>;

export const Default: Story = {
	args: {
		fill: 'primary',
		children: 'Large Button',
	},
	argTypes: {
		children: { control: { disable: true } },
		onClick: { control: { disable: true } },
		fill: { control: { type: 'select' }, options: ['primary', 'outline'] },
		disabled: { control: { type: 'boolean' } },
	},
};
