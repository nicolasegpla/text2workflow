import type { Meta, StoryObj } from '@storybook/react';

import PrimaryTextarea from './PrimaryTextarea';

const meta: Meta<typeof PrimaryTextarea> = {
    title: 'components/atoms/PrimaryTextarea',
    component: PrimaryTextarea,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryTextarea>;

export const Primary: Story = {
    args: {
        label: 'Primary Textarea',
        value: 'Primary Textarea',
        onChange: () => {},
        name: 'primary-textarea',
    },
};
