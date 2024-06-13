import type { Meta, StoryObj } from '@storybook/react';
import { ImageInput } from './ImageInput';

export default {
	title: 'form/ImageInput',
	component: ImageInput,
} satisfies Meta<typeof ImageInput>;

type Story = StoryObj<typeof ImageInput>;

export const Default: Story = {
	args: {},
};
