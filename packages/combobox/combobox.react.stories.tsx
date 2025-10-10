import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Combobox } from "./react";

export default {
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export type Story = StoryObj<typeof Combobox>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};