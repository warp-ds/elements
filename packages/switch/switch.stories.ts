import type { Meta, StoryObj } from '@storybook/web-components';

import './index.js';

const meta: Meta = {
  title: 'Forms/Switch',
  component: 'w-switch',
  argTypes: {
    value: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

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
