import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import type { WarpCard } from "./card.js";
import "./card.js";

const { events, args, argTypes } = getStorybookHelpers<WarpCard>("w-card");

const meta: Meta<typeof args> = {
	title: "Navigation/Card",
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3>Card Title</h3>
					<p>This is card content with some example text.</p>
				</div>
			</w-card>
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
		selected: false,
		flat: false,
		clickable: false,
	},
};

export const Selected: Story = {
	args: {
		selected: true,
		flat: false,
		clickable: false,
	},
};

export const Flat: Story = {
	args: {
		selected: false,
		flat: true,
		clickable: false,
	},
};

export const FlatSelected: Story = {
	args: {
		selected: true,
		flat: true,
		clickable: false,
	},
};

export const Clickable: Story = {
	args: {
		selected: false,
		flat: false,
		clickable: true,
	},
};

export const PropertyExample: Story = {
	args: {
		selected: false,
		flat: false,
		clickable: true,
	},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<img
					style="width: 100%; height: 200px; object-fit: cover;"
					src="https://unsplash.it/300/200?random"
					alt="Example image"
				/>
				<div style="padding: 16px;">
					<p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">
						DNB Eiendom
					</p>
					<p style="margin: 0 0 8px 0;">
						Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
					</p>
					<p style="font-size: 14px; color: #666; margin: 0 0 8px 0;">
						Bøgata 25C, 0655 Oslo
					</p>
					<p style="font-weight: bold; margin: 0;">
						52 m² Totalpris: 4 869 039 kr
					</p>
				</div>
			</w-card>
		`;
	},
};

export const StylingApi: Story = {
	args: {
		clickable: false,
		selected: false,
		flat: false,
	},
	render(args) {
		return html`
			<pre>
<code>
&lt;style&gt;
w-card::part(base) {
	padding: 48px;
	background: rebeccapurple;
	color: cyan;
}
w-card::part(border) {
	border-color: magenta;
	border-width: 8px;
}
&lt;/style&gt;
</code>
		</pre>
			<style>
				w-card::part(base) {
					padding: 48px;
					background: rebeccapurple;
					color: cyan;
				}
				w-card::part(border) {
					border-color: magenta;
					border-width: 8px;
				}
			</style>
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3>Card Title</h3>
					<p>This is card content with some example text.</p>
				</div>
			</w-card>
		`;
	},
};
