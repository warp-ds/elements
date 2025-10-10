import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from "./react";

export default {
  component: Card,
} satisfies Meta<typeof Card>;

export type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};