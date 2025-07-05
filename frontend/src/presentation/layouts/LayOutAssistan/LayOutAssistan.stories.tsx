import type { Meta, StoryObj } from '@storybook/react';

import { LayOutAssistan } from './LayOutAssistan';

const meta: Meta<typeof LayOutAssistan> = {
    title: 'layouts/LayOutAssistan',
    component: LayOutAssistan,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LayOutAssistan>;

export const Primary: Story = {
    args: {
        children: <h2>LayOutAssistan works!</h2>,
    },
};
