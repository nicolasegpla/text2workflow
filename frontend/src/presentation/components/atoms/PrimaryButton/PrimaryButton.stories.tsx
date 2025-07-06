import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
    title: 'components/atoms/PrimaryButton',
    component: PrimaryButton,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
    args: {
        textButton: 'Primary Button',
        onClick: action('Primary Button'),
    },
};
