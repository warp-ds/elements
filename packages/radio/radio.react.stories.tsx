import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./react";
import { RadioGroup } from "../radio-group/react";

export default {
	title: "Forms/Radio",
	component: Radio,
} satisfies Meta<typeof Radio>;

export type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
	args: {
		children: "Hello",
	},
};

export const HelpText = {
	render() {
		return (
			<form>
				<RadioGroup
					required
					name="required"
					helpText={
						<>
							Can include markup <a href="#">such as links</a>
						</>
					}
				>
					<Radio value="foo">foo</Radio>
					<Radio value="bar">bar</Radio>
				</RadioGroup>
				<button style={{ marginTop: "16px" }}>click me</button>
			</form>
		);
	},
};
