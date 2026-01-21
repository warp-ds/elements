import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DeadToggle } from './react';

export default {
  title: 'Forms/Dead toggle',
  render(args) {
    return <DeadToggle {...args} />;
  },
  component: DeadToggle,
} satisfies Meta<typeof DeadToggle>;

export type Story = StoryObj<typeof DeadToggle>;

export const Radio: Story = {
  args: {
    type: 'radio',
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
