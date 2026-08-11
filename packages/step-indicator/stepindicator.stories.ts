import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./step-indicator.js";
import "../step/step.js";

const meta: Meta = {
	title: "Components/Step Indicator",
	component: "w-step-indicator",
	argTypes: {
		horizontal: {
			control: { type: "boolean" },
			description: "Display steps in horizontal layout",
			defaultValue: false,
		},
		right: {
			control: { type: "boolean" },
			description: "Align steps to the right (vertical layout only)",
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
				<p class="text-body font-bold">Step 1: Account Setup</p>
				<p class="text-caption">
					Create your account and verify your email address.
				</p>
			</w-step>
			<w-step active>
				<p class="text-body font-bold">Step 2: Profile Information</p>
				<p class="text-caption">
					Fill in your personal details and preferences.
				</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Step 3: Payment Method</p>
				<p class="text-caption">
					Add a payment method to complete your registration.
				</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Step 4: Confirmation</p>
				<p class="text-caption">Review and confirm your information.</p>
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
				<p class="text-body font-bold">Setup</p>
				<p class="text-caption">Account created</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Profile</p>
				<p class="text-caption">Information added</p>
			</w-step>
			<w-step active>
				<p class="text-body font-bold">Payment</p>
				<p class="text-caption">Add payment method</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Done</p>
				<p class="text-caption">Complete setup</p>
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
				<p class="text-body font-bold">Order Placed</p>
				<p class="text-caption">
					Your order has been received and is being processed.
				</p>
				<small>2:34 PM</small>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Payment Confirmed</p>
				<p class="text-caption">Payment has been successfully processed.</p>
				<small>2:35 PM</small>
			</w-step>
			<w-step active>
				<p class="text-body font-bold">Preparing for Shipment</p>
				<p class="text-caption">Your items are being prepared for shipment.</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Shipped</p>
				<p class="text-caption">Your order is on its way!</p>
			</w-step>
		</w-step-indicator>
	`,
};

export const SimpleSteps: Story = {
	render: () => html`
		<w-step-indicator>
			<w-step completed>
				<p class="text-body font-bold">Step 1</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Step 2</p>
			</w-step>
			<w-step active>
				<p class="text-body font-bold">Step 3</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Step 4</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Step 5</p>
			</w-step>
		</w-step-indicator>
	`,
};

export const SimpleHorizontal: Story = {
	render: () => html`
		<w-step-indicator horizontal>
			<w-step completed>
				<p class="text-body font-bold">Start</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Progress</p>
			</w-step>
			<w-step active>
				<p class="text-body font-bold">Current</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">Next</p>
			</w-step>
			<w-step>
				<p class="text-body font-bold">End</p>
			</w-step>
		</w-step-indicator>
	`,
};

export const AllCompleted: Story = {
	render: () => html`
		<w-step-indicator>
			<w-step completed>
				<p class="text-body font-bold">Registration</p>
				<p class="text-caption">Account successfully created</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Verification</p>
				<p class="text-caption">Email address verified</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Setup</p>
				<p class="text-caption">Profile information completed</p>
			</w-step>
			<w-step completed>
				<p class="text-body font-bold">Welcome</p>
				<p class="text-caption">You're all set to get started!</p>
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
