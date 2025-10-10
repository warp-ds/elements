import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from "./react";

export default {
  component: TextField,
} satisfies Meta<typeof TextField>;

export type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};