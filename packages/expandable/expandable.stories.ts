import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";
import "../button/button.js";
import "../utils/expand-transition.js";
import "../utils/unstyled-heading.js";

import type { WarpExpandable } from "./expandable.js";
import "./expandable.js";

const { events, args, argTypes } =
	getStorybookHelpers<WarpExpandable>("w-expandable");

const meta: Meta<typeof args> = {
	title: "Layout/Expandable",
	render(args) {
		return html`
			<w-expandable ${spread(prespread(args))}>
				<p>This is the expandable content that can be shown or hidden.</p>
				<p>It can contain multiple paragraphs and other elements.</p>
			</w-expandable>
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
		title: "I'm expandable",
		variant: "default",
		expanded: false,
		animated: false,
		noChevron: false,
	},
};

export const Expanded: Story = {
	args: {
		title: "I'm expanded by default",
		variant: "default",
		expanded: true,
		animated: false,
		noChevron: false,
	},
};

export const Box: Story = {
	args: {
		title: "I'm a box expandable",
		variant: "box",
		expanded: false,
		animated: false,
		noChevron: false,
	},
};

export const BoxBleed: Story = {
	args: {
		title: "I'm a box bleed expandable",
		variant: "box-bleed",
		expanded: false,
		animated: false,
		noChevron: false,
	},
};

export const DefaultWithDivider: Story = {
	args: {
		title: "I'm a divider expandable",
		variant: "default-with-divider",
		expanded: false,
		animated: true,
		noChevron: false,
	},
	render(args) {
		return html`
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
			<w-expandable ${spread(prespread(args))}>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
		`;
	},
};

export const Animated: Story = {
	args: {
		title: "I'm animated",
		variant: "box",
		expanded: false,
		animated: true,
		noChevron: false,
	},
};

export const WithHeading: Story = {
	args: {
		title: "I'm wrapped in h2",
		variant: "box",
		expanded: false,
		animated: false,
		noChevron: false,
		"heading-level": 2,
	},
};

export const NoChevron: Story = {
	args: {
		title: "I have no chevron",
		variant: "default",
		expanded: false,
		animated: false,
		noChevron: true,
	},
};

export const CustomTitle: Story = {
	args: {
		variant: "box",
		expanded: false,
		animated: false,
		noChevron: false,
	},
	render(args) {
		return html`
			<w-expandable ${spread(prespread(args))}>
				<div slot="title" style="display: flex; align-items: center;">
					<span>Custom title with icon</span>
				</div>
				<p>This expandable has a custom title slot with an icon.</p>
			</w-expandable>
		`;
	},
};

export const NoTitle: Story = {
	args: {
		variant: "box",
		expanded: true,
		animated: true,
	},
	render(args) {
		return html`
			<w-button
				aria-label="Toggle expandable content without title"
				aria-controls="expandableWithoutTitle"
				>Toggle</w-button
			>
			<w-expandable ${spread(prespread(args))} id="expandableWithoutTitle">
				<p>with expanded content</p>
			</w-expandable>
			<script>
				document
					.querySelector('[aria-controls="expandableWithoutTitle"]')
					.addEventListener("click", () => {
						const expand = document.getElementById("expandableWithoutTitle");
						if (expand.expanded) {
							expand.removeAttribute("expanded");
						} else {
							expand.setAttribute("expanded", "true");
						}
					});
			</script>
		`;
	},
};

export const StylingApi: Story = {
	args: {
		title: "Styled expandable",
		variant: "box",
		expanded: false,
	},
	render(args) {
		return html`
			<pre>
<code>
&lt;style&gt;
w-expandable {
	--w-c-expandable-bg: rebeccapurple;
	--w-c-expandable-bg-hover: indigo;
	--w-c-expandable-border-color: cyan;
	--w-c-expandable-border-width: 2px;
	--w-c-expandable-border-radius: 24px;
	--w-c-expandable-padding-x: 2rem;
	--w-c-expandable-padding-y: 1rem;
	--w-c-expandable-gap: 1.5rem;
	color: white;
}

w-expandable::part(base) {
	text-transform: uppercase;
	box-shadow: inset 0 0 0 2px magenta;
}

w-expandable::part(chevron) {
	color: white;
}
&lt;/style&gt;
</code>
			</pre>
			<style>
				w-expandable {
					--w-c-expandable-bg: rebeccapurple;
					--w-c-expandable-bg-hover: indigo;
					--w-c-expandable-border-color: cyan;
					--w-c-expandable-border-width: 2px;
					--w-c-expandable-border-radius: 24px;
					--w-c-expandable-padding-x: 2rem;
					--w-c-expandable-padding-y: 1rem;
					--w-c-expandable-gap: 1.5rem;
					color: white;
				}

				w-expandable::part(base) {
					text-transform: uppercase;
					box-shadow: inset 0 0 0 2px magenta;
				}

				w-expandable::part(chevron) {
					color: white;
				}
			</style>
			<w-expandable ${spread(prespread(args))}>
				<p>This story demonstrates expandable tokens and parts.</p>
			</w-expandable>
		`;
	},
};

export const DeprecatedFlagsCompatibility: Story = {
	args: {
		title: "Deprecated flags compatibility",
		expanded: false,
		box: true,
		bleed: true,
	},
};
