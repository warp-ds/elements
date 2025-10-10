import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from "./react";

export default {
  component: Modal,
} satisfies Meta<typeof Modal>;

export type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    children: "Hello"
  },
};