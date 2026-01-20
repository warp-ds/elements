import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './step-indicator.js';
import '../step/step.js';

const meta: Meta = {
  title: 'Components/Step Indicator',
  component: 'w-step-indicator',
  argTypes: {
    horizontal: {
      control: { type: 'boolean' },
      description: 'Display steps in horizontal layout',
      defaultValue: false,
    },
    right: {
      control: { type: 'boolean' },
      description: 'Align steps to the right (vertical layout only)',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    horizontal: false,
    right: false,
  },
  render: (args) => html`
    <w-step-indicator ?horizontal=${args.horizontal} ?right=${args.right}>
      <w-step completed>
        <h3>Step 1: Account Setup</h3>
        <p>Create your account and verify your email address.</p>
      </w-step>
      <w-step active>
        <h3>Step 2: Profile Information</h3>
        <p>Fill in your personal details and preferences.</p>
      </w-step>
      <w-step>
        <h3>Step 3: Payment Method</h3>
        <p>Add a payment method to complete your registration.</p>
      </w-step>
      <w-step>
        <h3>Step 4: Confirmation</h3>
        <p>Review and confirm your information.</p>
      </w-step>
    </w-step-indicator>
  `,
};

export const Horizontal: Story = {
  args: {
    horizontal: true,
    right: false,
  },
  render: (args) => html`
    <w-step-indicator ?horizontal=${args.horizontal} ?right=${args.right}>
      <w-step completed>
        <h4>Setup</h4>
        <p>Account created</p>
      </w-step>
      <w-step completed>
        <h4>Profile</h4>
        <p>Information added</p>
      </w-step>
      <w-step active>
        <h4>Payment</h4>
        <p>Add payment method</p>
      </w-step>
      <w-step>
        <h4>Done</h4>
        <p>Complete setup</p>
      </w-step>
    </w-step-indicator>
  `,
};

export const RightAligned: Story = {
  args: {
    horizontal: false,
    right: true,
  },
  render: (args) => html`
    <w-step-indicator ?horizontal=${args.horizontal} ?right=${args.right}>
      <w-step completed>
        <h3>Order Placed</h3>
        <p>Your order has been received and is being processed.</p>
        <small>2:34 PM</small>
      </w-step>
      <w-step completed>
        <h3>Payment Confirmed</h3>
        <p>Payment has been successfully processed.</p>
        <small>2:35 PM</small>
      </w-step>
      <w-step active>
        <h3>Preparing for Shipment</h3>
        <p>Your items are being prepared for shipment.</p>
      </w-step>
      <w-step>
        <h3>Shipped</h3>
        <p>Your order is on its way!</p>
      </w-step>
    </w-step-indicator>
  `,
};

export const SimpleSteps: Story = {
  render: () => html`
    <w-step-indicator>
      <w-step completed>
        <strong>Step 1</strong>
      </w-step>
      <w-step completed>
        <strong>Step 2</strong>
      </w-step>
      <w-step active>
        <strong>Step 3</strong>
      </w-step>
      <w-step>
        <strong>Step 4</strong>
      </w-step>
      <w-step>
        <strong>Step 5</strong>
      </w-step>
    </w-step-indicator>
  `,
};

export const SimpleHorizontal: Story = {
  render: () => html`
    <w-step-indicator horizontal>
      <w-step completed>
        <strong>Start</strong>
      </w-step>
      <w-step completed>
        <strong>Progress</strong>
      </w-step>
      <w-step active>
        <strong>Current</strong>
      </w-step>
      <w-step>
        <strong>Next</strong>
      </w-step>
      <w-step>
        <strong>End</strong>
      </w-step>
    </w-step-indicator>
  `,
};

export const AllCompleted: Story = {
  render: () => html`
    <w-step-indicator>
      <w-step completed>
        <h3>Registration</h3>
        <p>Account successfully created</p>
      </w-step>
      <w-step completed>
        <h3>Verification</h3>
        <p>Email address verified</p>
      </w-step>
      <w-step completed>
        <h3>Setup</h3>
        <p>Profile information completed</p>
      </w-step>
      <w-step completed>
        <h3>Welcome</h3>
        <p>You're all set to get started!</p>
      </w-step>
    </w-step-indicator>
  `,
};

export const MinimalExample: Story = {
  render: () => html`
    <w-step-indicator>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-step-indicator>
  `,
};
