import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

export default {
	title: 'Label',
	component: Label,
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: 'Label',
	},
};

export const Required: Story = {
	args: {
		children: 'Label',
		required: true,
	},
};
