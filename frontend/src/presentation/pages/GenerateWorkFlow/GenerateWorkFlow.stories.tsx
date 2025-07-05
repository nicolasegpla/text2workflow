import type { Meta, StoryObj } from '@storybook/react';
import GenerateWorkFlow from './GenerateWorkFlow';

const meta: Meta<typeof GenerateWorkFlow> = {
    title: 'pages/GenerateWorkFlow',
    component: GenerateWorkFlow,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GenerateWorkFlow>;

export const Primary: Story = {
    args: {},
};
