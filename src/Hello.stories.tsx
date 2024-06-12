import type { Meta, StoryObj } from '@storybook/react';
import { Hello } from './Hello';

export default {
	title: 'Hello',
	component: Hello,
} as Meta<typeof Hello>;

type Story = StoryObj<typeof Hello>;

export const Default: Story = {
	args: {
		name: 'world',
	},
};
