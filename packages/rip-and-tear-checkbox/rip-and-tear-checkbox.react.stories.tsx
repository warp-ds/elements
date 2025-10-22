import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './react';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    children: 'Hello',
  },
};
