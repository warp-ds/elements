import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import type { WarpButtonGroup } from "./button-group.js";
import "./button-group.js";

const { events, args, argTypes } =
	getStorybookHelpers<WarpButtonGroup>("w-button-group");

const meta: Meta<typeof args> = {
	title: "Layout/Box",
	render: (args) => {
		return html`
			<w-button-group ${spread(prespread(args))}> Slot content </w-button-group>
		`;
	},
	args,
	argTypes,
	parameters: {
		actions: {
			handles: events,
		},
	},
};

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {};
