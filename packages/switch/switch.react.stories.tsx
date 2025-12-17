import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './react';

export default {
  title: 'Forms/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
