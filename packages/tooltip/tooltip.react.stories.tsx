import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../button/react";
import { Tooltip } from "./react";

export default {
	title: "Overlays/Tooltip",
	component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: () => (
		<>
			<Button id="my-button" aria-labelledby="my-tooltip">
				Hover over me
			</Button>
			<Tooltip id="my-tooltip" htmlFor="my-button">
				Check out this tooltip
			</Tooltip>
		</>
	),
};
