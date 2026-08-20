import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import type { WarpBadge } from "./badge.js";
import "./badge.js";

const { events, args, argTypes } = getStorybookHelpers<WarpBadge>("w-badge");

const meta: Meta<typeof args> = {
	title: "Layout/Badge",
	render(args) {
		return html`<w-badge ${spread(prespread(args))}>Badge text</w-badge>`;
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

export const Neutral: Story = {
	args: {
		variant: "neutral",
	},
};

export const Info: Story = {
	args: {
		variant: "info",
	},
};

export const Positive: Story = {
	args: {
		variant: "positive",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
	},
};

export const Negative: Story = {
	args: {
		variant: "negative",
	},
};

export const Price: Story = {
	args: {
		variant: "price",
	},
};

export const Sponsored: Story = {
	args: {
		variant: "sponsored",
	},
};

export const Positioned: Story = {
	args: {
		variant: "price",
		position: "top-right",
	},
	render(args) {
		return html`
			<div
				style="position: relative; width: 200px; height: 100px; background: #f0f0f0; border-radius: 8px;"
			>
				<w-badge ${spread(prespread(args))}>Badge</w-badge>
			</div>
		`;
	},
};

export const StylingApi: Story = {
	args: {
		variant: "info",
	},
	render(args) {
		return html`
			<pre>
<code>
&lt;style&gt;
w-badge {
	--w-c-badge-bg: rebeccapurple;
	--w-c-badge-color: white;
	--w-c-badge-border-radius: 9999px;
	--w-c-badge-padding-x: 1.2rem;
	--w-c-badge-padding-y: 0.6rem;
}

w-badge::part(base) {
	border: 2px solid cyan;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}
&lt;/style&gt;
</code>
			</pre>
			<style>
				w-badge {
					--w-c-badge-bg: rebeccapurple;
					--w-c-badge-color: white;
					--w-c-badge-border-radius: 9999px;
					--w-c-badge-padding-x: 1.2rem;
					--w-c-badge-padding-y: 0.6rem;
				}

				w-badge::part(base) {
					border: 2px solid cyan;
					text-transform: uppercase;
					letter-spacing: 0.08em;
				}
			</style>
			<w-badge ${spread(prespread(args))}>Styled badge</w-badge>
		`;
	},
};
