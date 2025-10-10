import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from "./react";

export default {
  component: Slider,
} satisfies Meta<typeof Slider>;

export type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};