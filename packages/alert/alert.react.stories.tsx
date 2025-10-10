import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from "./react";

export default {
  title: 'Feedback/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    show: true,
    role: 'alert',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    show: true,
    role: 'alert',
  },
};

export const Negative: Story = {
  args: {
    variant: 'negative',
    show: true,
    role: 'alert',
  },
};

export const Positive: Story = {
  args: {
    variant: 'positive',
    show: true,
    role: 'alert',
  },
};

export const WithDescription: Story = {
  args: {
    variant: 'info',
    show: true,
    role: 'alert',
    children: (
      <>
        <h3>Alert Title</h3>
        <p>This is a more detailed alert message with additional description.</p>
      </>
    )
  },
};