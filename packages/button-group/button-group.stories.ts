import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import "../checkbox/checkbox.js";
import "../checkbox-group/checkbox-group.js";
import "../radio/radio.js";
import "../radio-group/radio-group.js";

const meta: Meta = {
	title: "Buttons/Button Group",
};

export default meta;
type Story = StoryObj;

export const ButtonGroupCheckbox: Story = {
	render() {
		return html`
			<w-checkbox-group
				label="Filter by color"
				name="color-filters"
				type="button"
			>
				<w-checkbox value="red">Red</w-checkbox>
				<w-checkbox value="green">Green</w-checkbox>
				<w-checkbox value="blue">Blue</w-checkbox>
			</w-checkbox-group>
		`;
	},
};

export const ButtonGroupRadio: Story = {
	render() {
		return html`
			<w-radio-group label="Package size" name="package-size" type="button">
				<w-radio value="small">Small</w-radio>
				<w-radio value="medium">Medium</w-radio>
				<w-radio value="large">Large</w-radio>
			</w-radio-group>
		`;
	},
};
