import type { Meta, StoryObj } from '@storybook/react';
import { LargeInput } from './LargeInput';

export default {
	title: 'form/LargeInput',
	component: LargeInput,
} as Meta<typeof LargeInput>;

type Story = StoryObj<typeof LargeInput>;

export const Default: Story = {
	args: {
		placeholder: 'Value here',
		disabled: false,
	},
	argTypes: {
		disabled: { control: 'boolean' },
		value: { control: 'text' },
	},
};
