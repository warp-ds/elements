import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import type { WarpButtonGroup } from "./button-group.js";

import "../button/button.js";
import "./button-group.js";
import "../checkbox/checkbox.js";
import "../checkbox-group/checkbox-group.js";
import "../radio/radio.js";
import "../radio-group/radio-group.js";

const { events, args, argTypes } =
	getStorybookHelpers<WarpButtonGroup>("w-button-group");

const meta: Meta<typeof args> = {
	title: "Buttons/Button Group",
	render: (args) => {
		return html`
			<p>TODO: variant=primary here gets us visually in the ballpark (minus borders), but Figma talks about that being an Active state. What is this component when it's got buttons, is it a tablist? When is a button in a button group considered active? Can we even use w-button here?</p>
			<w-button-group ${spread(prespread(args))}>
				<w-button variant="primary">Left</w-button>
				<w-button>Middle</w-button>
				<w-button>Right</w-button>
			</w-button-group>
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

export const ButtonGroupRadio: Story = {
	render() {
		return html`
			<w-radio-group name="package-size" type="button">
				<w-radio value="small">Small</w-radio>
				<w-radio value="medium">Medium</w-radio>
				<w-radio value="large">Large</w-radio>
			</w-radio-group>
		`;
	},
};

export const ButtonGroupCheckbox: Story = {
	render() {
		return html`
			<w-checkbox-group name="color-filters" type="button">
				<w-checkbox value="red">Red</w-checkbox>
				<w-checkbox value="green">Green</w-checkbox>
				<w-checkbox value="blue">Blue</w-checkbox>
			</w-checkbox-group>
		`;
	},
};
