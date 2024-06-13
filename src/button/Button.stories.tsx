import type { Meta, StoryObj } from '@storybook/react';
import { IconSettings } from '@tabler/icons-react';
import { Button } from './Button';

export default {
	title: 'button/Button',
	component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const Default: Story = {
	args: {
		type: 'button',
		fill: 'primary',
	},
	argTypes: {
		type: { control: { disable: true } },
		children: { control: { disable: true } },
		Icon: { control: { disable: true } },
		fill: { control: 'select', options: ['primary', 'blue', 'background', 'outline'] },
		disabled: { control: 'boolean' },
	},
};

export const Text: Story = {
	...Default,
	args: {
		...Default.args,
		children: 'Button',
	},
};

export const Icon: Story = {
	...Default,
	args: {
		...Default.args,
		Icon: IconSettings,
	},
};

export const TextIcon: Story = {
	...Default,
	args: {
		...Default.args,
		children: 'Button',
		Icon: IconSettings,
	},
};

export const TextIconRight: Story = {
	...Default,
	args: {
		...Default.args,
		children: 'Button',
		Icon: IconSettings,
		iconAlign: 'right',
	},
};
