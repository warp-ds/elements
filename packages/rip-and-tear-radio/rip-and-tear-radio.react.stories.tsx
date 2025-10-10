import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from "./react";

export default {
  component: Radio,
} satisfies Meta<typeof Radio>;

export type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};