import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from "./react";

export default {
  component: Alert,
} satisfies Meta<typeof Alert>;

export type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};