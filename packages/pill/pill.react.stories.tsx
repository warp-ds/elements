import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pill } from "./react";

export default {
  component: Pill,
} satisfies Meta<typeof Pill>;

export type Story = StoryObj<typeof Pill>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};