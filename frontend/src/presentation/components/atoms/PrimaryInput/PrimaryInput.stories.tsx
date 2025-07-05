import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryInput } from './PrimaryInput';

const meta: Meta<typeof PrimaryInput> = {
    title: 'components/atoms/PrimaryInput',
    component: PrimaryInput,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PrimaryInput>;

export const Primary: Story = {
    args: {
        label: 'Primary Input',
        value: 'Primary Input',
        onChange: () => {},
        name: 'primary-input',
    },
};
