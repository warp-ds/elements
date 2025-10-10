import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from "./react";

export default {
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};