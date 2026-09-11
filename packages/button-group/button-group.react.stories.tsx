import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { ButtonGroup } from "./react";

export default {
	title: "Layout/ButtonGroup",
	component: ButtonGroup,
	render(args) {
		return <ButtonGroup {...args}>Slot content</ButtonGroup>;
	},
} satisfies Meta<typeof ButtonGroup>;

export type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};
