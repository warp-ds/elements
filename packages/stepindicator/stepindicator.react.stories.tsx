import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Step, StepIndicator } from './react';

export default {
  title: 'Components/Step Indicator',
  component: StepIndicator,
} satisfies Meta<typeof StepIndicator>;

export type Story = StoryObj<typeof StepIndicator>;

export const Default: Story = {
  args: {
    horizontal: false,
    right: false,
  },
  render: (args) => (
    <StepIndicator horizontal={args.horizontal} right={args.right}>
      <Step completed>
        <h3>Step 1: Account Setup</h3>
        <p>Create your account and verify your email address.</p>
      </Step>
      <Step active>
        <h3>Step 2: Profile Information</h3>
        <p>Fill in your personal details and preferences.</p>
      </Step>
      <Step>
        <h3>Step 3: Payment Method</h3>
        <p>Add a payment method to complete your registration.</p>
      </Step>
      <Step>
        <h3>Step 4: Confirmation</h3>
        <p>Review and confirm your information.</p>
      </Step>
    </StepIndicator>
  ),
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    right: false,
  },
  render: (args) => (
    <StepIndicator horizontal={args.horizontal} right={args.right}>
      <Step completed>
        <h4>Setup</h4>
        <p>Account created</p>
      </Step>
      <Step completed>
        <h4>Profile</h4>
        <p>Information added</p>
      </Step>
      <Step active>
        <h4>Payment</h4>
        <p>Add payment method</p>
      </Step>
      <Step>
        <h4>Done</h4>
        <p>Complete setup</p>
      </Step>
    </StepIndicator>
  ),
};

export const RightAligned: Story = {
  args: {
    horizontal: false,
    right: true,
  },
  render: (args) => (
    <StepIndicator horizontal={args.horizontal} right={args.right}>
      <Step completed>
        <h3>Order Placed</h3>
        <p>Your order has been received and is being processed.</p>
        <small>2:34 PM</small>
      </Step>
      <Step completed>
        <h3>Payment Confirmed</h3>
        <p>Payment has been successfully processed.</p>
        <small>2:35 PM</small>
      </Step>
      <Step active>
        <h3>Preparing for Shipment</h3>
        <p>Your items are being prepared for shipment.</p>
      </Step>
      <Step>
        <h3>Shipped</h3>
        <p>Your order is on its way!</p>
      </Step>
    </StepIndicator>
  ),
};

export const SimpleStepIndicator: Story = {
  render: () => (
    <StepIndicator>
      <Step completed>
        <strong>Step 1</strong>
      </Step>
      <Step completed>
        <strong>Step 2</strong>
      </Step>
      <Step active>
        <strong>Step 3</strong>
      </Step>
      <Step>
        <strong>Step 4</strong>
      </Step>
      <Step>
        <strong>Step 5</strong>
      </Step>
    </StepIndicator>
  ),
};

export const SimpleHorizontal: Story = {
  render: () => (
    <StepIndicator horizontal>
      <Step completed>
        <strong>Start</strong>
      </Step>
      <Step completed>
        <strong>Progress</strong>
      </Step>
      <Step active>
        <strong>Current</strong>
      </Step>
      <Step>
        <strong>Next</strong>
      </Step>
      <Step>
        <strong>End</strong>
      </Step>
    </StepIndicator>
  ),
};

export const AllCompleted: Story = {
  render: () => (
    <StepIndicator>
      <Step completed>
        <h3>Registration</h3>
        <p>Account successfully created</p>
      </Step>
      <Step completed>
        <h3>Verification</h3>
        <p>Email address verified</p>
      </Step>
      <Step completed>
        <h3>Setup</h3>
        <p>Profile information completed</p>
      </Step>
      <Step completed>
        <h3>Welcome</h3>
        <p>You're all set to get started!</p>
      </Step>
    </StepIndicator>
  ),
};

export const MinimalExample: Story = {
  render: () => (
    <StepIndicator>
      <Step completed>First</Step>
      <Step active>Second</Step>
      <Step>Third</Step>
    </StepIndicator>
  ),
};
