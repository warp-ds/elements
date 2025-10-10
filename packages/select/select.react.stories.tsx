import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from "./react";

export default {
  component: Select,
} satisfies Meta<typeof Select>;

export type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};