import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Affix } from '../affix/react';

import { TextField } from './react';

const locale = 'nb';

const getNumberFormatter = (locale: string, opts = {}) => {
  return (value: string) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 0, ...opts }).format(value as unknown as number);
};

export default {
  title: 'Forms/Textfield',
  render(args) {
    return <TextField {...args} />;
  },
  component: TextField,
} satisfies Meta<typeof TextField>;

export type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Email',
    type: 'email',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Email',
    placeholder: 'user@example.com',
    type: 'email',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Password',
    helpText: 'Must be at least 8 characters',
    type: 'password',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    invalid: true,
    helpText: 'Please enter a valid email address',
    value: 'invalid-email',
    type: 'email',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Email',
    disabled: true,
    value: 'user@example.com',
    type: 'email',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Email',
    readOnly: true,
    value: 'user@example.com',
    type: 'email',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    type: 'email',
  },
};

export const WithAffix: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
  },
  render(args) {
    return (
      <TextField {...args}>
        <Affix slot="suffix" label="kr" />
      </TextField>
    );
  },
};

export const Masking: Story = {
  args: {
    label: 'Price',
    placeholder: '1 000 000',
    type: 'text',
  },
  render({ ...args }) {
    return (
      <TextField {...args} formatter={getNumberFormatter(locale)}>
        <Affix slot="suffix" label="kr" />
      </TextField>
    );
  },
};
