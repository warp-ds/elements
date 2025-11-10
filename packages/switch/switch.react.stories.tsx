import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './react';

export default {
  title: 'Forms/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    value: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    value: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    value: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    value: true,
    disabled: true,
  },
};
