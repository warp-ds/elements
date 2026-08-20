import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import type { WarpBox } from "./box.js";
import "./box.js";

const { events, args, argTypes } = getStorybookHelpers<WarpBox>("w-box");

const meta: Meta<typeof args> = {
	title: "Layout/Box",
	render: (args) => {
		return html`
			<w-box ${spread(prespread(args))}>
				<h3>Box Content</h3>
				<p>This is content inside a box component.</p>
			</w-box>
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

export const Default: Story = {
	args: {
		bleed: false,
		bordered: false,
		info: false,
		neutral: false,
	},
};

export const Info: Story = {
	args: {
		info: true,
	},
};

export const Neutral: Story = {
	args: {
		neutral: true,
	},
};

export const Bordered: Story = {
	args: {
		bordered: true,
	},
};

export const Bleed: Story = {
	args: {
		bleed: true,
		neutral: true,
	},
};

export const AccessibleRegion: Story = {
	args: {},
	render: () => {
		return html`
			<w-box aria-labelledby="box-content">
				<h3 id="box-content">Box Content</h3>
				<p>
					Inspect this box in the accessibility tree to see that it is treated
					as a region.
				</p>
				<p>
					If aria-labelled by is not used, the box will not be treated as a
					region.
				</p>
			</w-box>
		`;
	},
};

export const StylingApi: Story = {
	args: {
		bordered: true,
	},
	render(args) {
		return html`
			<pre>
<code>
&lt;style&gt;
w-box {
	--w-c-box-bg: rebeccapurple;
	--w-c-box-border-color: cyan;
	--w-c-box-border-radius: 24px;
	--w-c-box-border-width: 4px;
	--w-c-box-padding: 2rem;
}

w-box::part(base) {
	color: white;
	box-shadow: inset 0 0 0 2px magenta;
}
&lt;/style&gt;
</code>
			</pre>
			<style>
				w-box {
					--w-c-box-bg: rebeccapurple;
					--w-c-box-border-color: cyan;
					--w-c-box-border-radius: 24px;
					--w-c-box-border-width: 4px;
					--w-c-box-padding: 2rem;
				}

				w-box::part(base) {
					color: white;
					box-shadow: inset 0 0 0 2px magenta;
				}
			</style>
			<w-box ${spread(prespread(args))}>
				<h3>Styled box</h3>
				<p>This story demonstrates box tokens and the base part.</p>
			</w-box>
		`;
	},
};
