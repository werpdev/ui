import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
	title: 'Textarea',
	component: Textarea,
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {},
};
