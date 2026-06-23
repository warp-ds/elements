import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Pill } from "./react";

export default {
	title: "Buttons/Pill",
	render(args) {
		return <Pill {...args}>Lorem</Pill>;
	},
	component: Pill,
	args: {
		onClose: (e) => console.log(e),
		onClick: (e) => console.log(e),
	},
} satisfies Meta<typeof Pill>;

export type Story = StoryObj<typeof Pill>;

export const Default: Story = {
	args: {},
};

export const Suggestion: Story = {
	args: {
		suggestion: true,
	},
};

export const Closable: Story = {
	args: {
		canClose: true,
	},
};
