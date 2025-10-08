import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from "./react";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Hello"
  },
};