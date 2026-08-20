import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./react";
import { CheckboxGroup } from "../checkbox-group/react";

export default {
	title: "Forms/Checkbox",
	component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
	args: {
		children: "Hello",
	},
};

export const WithHelpText: StoryObj = {
	render() {
		return (
			<CheckboxGroup
				label="Label"
				name="group"
				helpText="Can include help text"
			>
				<Checkbox value="foo">Foo</Checkbox>
				<Checkbox value="bar">Bar</Checkbox>
			</CheckboxGroup>
		);
	},
};

export const WithJsxHelpText: StoryObj = {
	render() {
		return (
			<CheckboxGroup
				label="Label"
				name="group"
				helpText={
					<>
						Can include markup <a href="#">such as links</a>
					</>
				}
			>
				<Checkbox value="foo">Foo</Checkbox>
				<Checkbox value="bar">Bar</Checkbox>
			</CheckboxGroup>
		);
	},
};
