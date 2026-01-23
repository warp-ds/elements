import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Textarea } from './react';

export default {
  title: 'Forms/Textarea',
  render(args) {
    return <Textarea {...args} />;
  },
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Email',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Password',
    helpText: 'Must be at least 8 characters',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    invalid: true,
    helpText: 'Please enter a valid email address',
    value: 'invalid-email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
  },
};
