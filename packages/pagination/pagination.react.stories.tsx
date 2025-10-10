import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from "./react";

export default {
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};