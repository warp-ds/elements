import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
// @ts-expect-error You'll find no types here, TypeScript the Grey
import "virtual:uno.css";

import { prespread } from "../../.storybook/utilities.js";

import "../button/button.js";
import "../textfield/textfield.js";
import "./tooltip.js";

const args = {
	"no-arrow": false,
	placement: "top",
	"show-delay": 150,
	"hide-delay": 0,
};

const meta: Meta = {
	title: "Overlays/Tooltip",
	args,
	argTypes: {
		placement: {
			control: { type: "select" },
			options: ["top", "bottom", "left", "right"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof args>;

export const Default: Story = {
	render(args) {
		return html`
			<w-button id="my-button" aria-labelledby="my-tooltip">
				Hover over me
			</w-button>
			<w-tooltip id="my-tooltip" for="my-button" ${spread(prespread(args))}>
				Check out this tooltip
			</w-tooltip>
		`;
	},
};

export const Placement: Story = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render({ placement, ...rest }) {
		return html`
			<div style="display: flex; gap: 32px; flex-direction: column;">
				<div>
					<w-button id="top-button" aria-labelledby="top-tooltip">
						Top
					</w-button>
					<w-tooltip
						id="top-tooltip"
						for="top-button"
						placement="top"
						${spread(prespread(rest))}
					>
						Placement top
					</w-tooltip>
				</div>
				<div>
					<w-button id="right-button" aria-labelledby="right-tooltip"
						>Right</w-button
					>
					<w-tooltip
						id="right-tooltip"
						for="right-button"
						placement="right"
						${spread(prespread(rest))}
					>
						Placement right
					</w-tooltip>
				</div>
				<div>
					<w-button id="bottom-button" aria-labelledby="bottom-tooltip">
						Bottom
					</w-button>
					<w-tooltip
						id="bottom-tooltip"
						for="bottom-button"
						placement="bottom"
						${spread(prespread(rest))}
					>
						Placement bottom
					</w-tooltip>
				</div>
				<div>
					<w-button id="left-button" aria-labelledby="left-tooltip">
						Left
					</w-button>
					<w-tooltip
						id="left-tooltip"
						for="left-button"
						placement="left"
						${spread(prespread(rest))}
					>
						Placement left
					</w-tooltip>
				</div>
			</div>
		`;
	},
};

export const Textfield: Story = {
	args: {},
	argTypes: {},
	parameters: {},
	render() {
		return html`
			<w-textfield
				name="tooltip-demo"
				label="Needs an explanation"
				placeholder="Placeholder"
				help-text="Help text is available, but might not be enough, or the added context is not important enough that we use help-text"
				tooltip="This tooltip adds supplementary information"
				optional
			></w-textfield>
		`;
	},
};
