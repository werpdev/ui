import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

export default {
	title: 'form/Select',
	component: Select,
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		children: (
			<>
				<option key="1">Option 1</option>
				<option key="2">Option 2</option>
				<option key="3">Option 3</option>
			</>
		),
	},
};
