import { spread } from "@open-wc/lit-helpers";
import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { getStorybookHelpers } from "@wc-toolkit/storybook-helpers";
import { html } from "lit";

import { prespread } from "../../.storybook/utilities.js";

import "../checkbox/checkbox.js";
import "../checkbox-group/checkbox-group.js";
import "../radio/radio.js";
import "../radio-group/radio-group.js";
import type { WarpCard } from "./card.js";
// @ts-expect-error css is not typed
import "./card.css";
import "../checkbox/checkbox.js";
import "../radio/radio.js";
import "./card.js";

const {
	events,
	args: generatedArgs,
	argTypes: generatedArgTypes,
} = getStorybookHelpers<WarpCard>("w-card");

const deprecatedProperties = new Set(["clickable", "selected"]);
const args = Object.fromEntries(
	Object.entries(generatedArgs).filter(
		([name]) => !deprecatedProperties.has(name),
	),
);
const argTypes = Object.fromEntries(
	Object.entries(generatedArgTypes).filter(
		([name]) => !deprecatedProperties.has(name),
	),
);

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
		flat: false,
	},
};

export const Flat: Story = {
	args: {
		flat: true,
	},
};

export const PropertyExample: Story = {
	args: {
		flat: false,
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

export const GroupedRadioCards: Story = {
	args: {},
	render(args) {
		return html`
			<w-radio-group label="Package size" name="package-size">
				<div data-card-group>
					<w-card ${spread(prespread(args))}>
						<div style="padding: 16px; display: flex; gap: 8px;">
							<w-radio
								id="grouped-radio-small"
								value="small"
								data-card-action
							></w-radio>
							<label for="grouped-radio-small">Small</label>
						</div>
					</w-card>
					<w-card ${spread(prespread(args))}>
						<div style="padding: 16px; display: flex; gap: 8px;">
							<w-radio
								id="grouped-radio-medium"
								value="medium"
								data-card-action
							></w-radio>
							<label for="grouped-radio-medium">Medium</label>
						</div>
					</w-card>
				</div>
				<w-card ${spread(prespread(args))}>
					<div style="padding: 16px; display: flex; gap: 8px;">
						<w-radio
							id="separate-radio-large"
							value="large"
							data-card-action
						></w-radio>
						<label for="separate-radio-large">Large</label>
					</div>
				</w-card>
			</w-radio-group>
		`;
	},
};

export const GroupedCheckboxCards: Story = {
	args: {},
	render(args) {
		return html`
			<w-checkbox-group label="Optional services" name="services">
				<div data-card-group>
					<w-card ${spread(prespread(args))}>
						<div style="padding: 16px; display: flex; gap: 8px;">
							<w-checkbox
								id="grouped-checkbox-gift-wrap"
								value="gift-wrap"
								data-card-action
							></w-checkbox>
							<label for="grouped-checkbox-gift-wrap">Gift wrapping</label>
						</div>
					</w-card>
					<w-card ${spread(prespread(args))}>
						<div style="padding: 16px; display: flex; gap: 8px;">
							<w-checkbox
								id="grouped-checkbox-insurance"
								value="insurance"
								data-card-action
							></w-checkbox>
							<label for="grouped-checkbox-insurance">Extra insurance</label>
						</div>
					</w-card>
				</div>
				<w-card ${spread(prespread(args))}>
					<div style="padding: 16px; display: flex; gap: 8px;">
						<w-checkbox
							id="separate-checkbox-priority"
							value="priority"
							data-card-action
						></w-checkbox>
						<label for="separate-checkbox-priority">Priority handling</label>
					</div>
				</w-card>
			</w-checkbox-group>
		`;
	},
};

/**
 * Example of a card that is not focusable or clickable, and has no interactive elements inside it.
 */
export const CardNoNavigation: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3 class="t3">This is the card title</h3>
					<p>This is the card content</p>
				</div>
			</w-card>
		`;
	},
};

/**
 * Example of a card that has a single interactive element inside it that is both sematically correct and the clickable area expands to fill the card.
 */
export const CardWholeCardClickable: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3 class="t3">
						<a href="#" data-card-action>This is the card title</a>
					</h3>
				</div>
			</w-card>
		`;
	},
};

/**
 * Example of a card that has a sematically correct main clickable interactive element that expands to fill the card,
 * and also has a second interactive element inside it.
 */
export const CardCardClickablePlusASecondInteractiveElement: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3 class="t3">
						<a href="#" data-card-action>This is the card title</a>
					</h3>
					<a href="http://google.com" data-card-secondary-action>Learn more</a>
				</div>
			</w-card>
		`;
	},
};

/**
 * Example of a card that has two interactive elements inside it, but the card itself is not clickable.
 * The interactive elements are independently clickable and focusable, and the card itself is not focusable or clickable.
 */
export const CardSeparateInteractiveElements: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px;">
					<h3 class="t3">
						<a href="#">This is the card title</a>
					</h3>
					<a href="http://google.com">Learn more</a>
				</div>
			</w-card>
		`;
	},
};

export const RadioCard: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
					<w-radio
						id="radio-card-story-option"
						name="radio-card-story"
						value="option"
						data-card-action
					></w-radio>
					<label for="radio-card-story-option">Select this option</label>
				</div>
			</w-card>
		`;
	},
};

export const FlatRadioCard: Story = {
	args: {
		flat: true,
	},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
					<w-radio
						id="radio-card-story-option"
						name="radio-card-story"
						value="option"
						data-card-action
					></w-radio>
					<label for="radio-card-story-option">Select this option</label>
				</div>
			</w-card>
		`;
	},
};

export const RadioCardGroup: Story = {
	args: {},
	render(args) {
		return html`
			<div style="display: grid; gap: 8px;">
				<w-card ${spread(prespread(args))}>
					<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
						<w-radio
							id="radio-card-story-standard"
							name="radio-card-story-group"
							value="standard"
							data-card-action
						></w-radio>
						<label for="radio-card-story-standard">Standard delivery</label>
					</div>
				</w-card>
				<w-card ${spread(prespread(args))}>
					<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
						<w-radio
							id="radio-card-story-express"
							name="radio-card-story-group"
							value="express"
							data-card-action
						></w-radio>
						<label for="radio-card-story-express">Express delivery</label>
					</div>
				</w-card>
			</div>
		`;
	},
};

export const CheckboxCard: Story = {
	args: {},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
					<w-checkbox
						id="checkbox-card-story-option"
						name="checkbox-card-story"
						value="option"
						data-card-action
					></w-checkbox>
					<label for="checkbox-card-story-option">Select this option</label>
				</div>
			</w-card>
		`;
	},
};

export const FlatCheckboxCard: Story = {
	args: {
		flat: true,
	},
	render(args) {
		return html`
			<w-card ${spread(prespread(args))}>
				<div style="padding: 16px; padding: 16px; display:flex; gap: 16px;">
					<w-checkbox
						id="checkbox-card-story-option"
						name="checkbox-card-story"
						value="option"
						data-card-action
					></w-checkbox>
					<label for="checkbox-card-story-option">Select this option</label>
				</div>
			</w-card>
		`;
	},
};

export const AdvancedExample: Story = {
	args: {},
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
					<h3 class="t4">
						<a href="#" data-card-action>
							Stilfull og gjennomgående 3-roms m/balkong. Oppusset i 2019.
						</a>
					</h3>
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

export const AdvancederExamples: Story = {
	args: {},
	render(args) {
		return html`<div class="flex" style="gap: 16px; margin-bottom: 40px;">
				<w-card class="max-w-[223] min-w-[223]" ${spread(prespread(args))}>
					<article
						class="flex flex-col p-16 s-text-inverted-static"
						style="background-color: #486579"
					>
						<h4 class="t4">
							<a
								href="#"
								@click="${() => console.log("tracking event")}"
								data-card-action
							>
								BYD Atto 2</a
							>
						</h4>
						<p class="text-details">Från 369 900 kr</p>
						<img
							src="https://unsplash.it/300/200?random"
							class="w-full"
							loading="lazy"
							width="800"
							height="500"
						/>
					</article>
				</w-card>
				<w-card class="max-w-[223] min-w-[223]" ${spread(prespread(args))}>
					<article
						class="flex flex-col p-16 s-text-inverted-static"
						style="background-color: #486579"
					>
						<h4 class="t4">
							<a
								href="#"
								@click="${() => console.log("tracking event")}"
								data-card-action
							>
								BYD Atto 2</a
							>
						</h4>
						<p class="text-details">Från 369 900 kr</p>
						<img
							src="https://unsplash.it/300/200?random"
							class="w-full"
							loading="lazy"
							width="800"
							height="500"
						/>
					</article>
				</w-card>
				<w-card class="max-w-[223] min-w-[223]" ${spread(prespread(args))}>
					<article
						class="flex flex-col p-16 s-text-inverted-static"
						style="background-color: #486579"
					>
						<h4 class="t4">
							<a
								href="#"
								@click="${() => console.log("tracking event")}"
								data-card-action
							>
								BYD Atto 2</a
							>
						</h4>
						<p class="text-details">Från 369 900 kr</p>
						<img
							src="https://unsplash.it/300/200?random"
							class="w-full"
							loading="lazy"
							width="800"
							height="500"
						/>
					</article>
				</w-card>
			</div>
			<div
				class="grid gap-16 grid-cols-1 md:grid-cols-3"
				style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
			>
				<w-card
					class="relative grid grid-rows-1 h-full"
					${spread(prespread(args))}
				>
					<div class="flex items-center gap-24 pr-16 h-full">
						<div class="relative w-[112] h-[112] shrink-0">
							<img
								class="w-full h-full object-cover"
								src="https://unsplash.it/100/100?random"
								alt=""
							/>
							<div
								class="absolute inset-0"
								style="background-color: rgba(0, 0, 0, 0.3)"
							></div>
							<img
								class="absolute left-12 top-12 w-32 h-32 object-contain"
								src="https://unsplash.it/300/200?random"
								alt=""
							/>
						</div>
						<div class="flex flex-col gap-4 min-w-0">
							<h4 class="font-bold s-text">
								<a
									href="#"
									@click="${() => console.log("tracking event")}"
									data-card-action
									>BYD</a
								>
							</h4>
							<span class="text-s s-text-subtle">7 modeller</span>
						</div>
					</div>
				</w-card>
				<w-card
					class="relative grid grid-rows-1 h-full"
					${spread(prespread(args))}
				>
					<div class="flex items-center gap-24 pr-16 h-full">
						<div class="relative w-[112] h-[112] shrink-0">
							<img
								class="w-full h-full object-cover"
								src="https://unsplash.it/100/100?random"
								alt=""
							/>
							<div
								class="absolute inset-0"
								style="background-color: rgba(0, 0, 0, 0.3)"
							></div>
							<img
								class="absolute left-12 top-12 w-32 h-32 object-contain"
								src="https://unsplash.it/300/200?random"
								alt=""
							/>
						</div>
						<div class="flex flex-col gap-4 min-w-0">
							<h4 class="font-bold s-text">
								<a
									href="#"
									@click="${() => console.log("tracking event")}"
									data-card-action
									>BYD</a
								>
							</h4>
							<span class="text-s s-text-subtle">7 modeller</span>
						</div>
					</div>
				</w-card>
				<w-card
					class="relative grid grid-rows-1 h-full"
					${spread(prespread(args))}
				>
					<div class="flex items-center gap-24 pr-16 h-full">
						<div class="relative w-[112] h-[112] shrink-0">
							<img
								class="w-full h-full object-cover"
								src="https://unsplash.it/100/100?random"
								alt=""
							/>
							<div
								class="absolute inset-0"
								style="background-color: rgba(0, 0, 0, 0.3)"
							></div>
							<img
								class="absolute left-12 top-12 w-32 h-32 object-contain"
								src="https://unsplash.it/300/200?random"
								alt=""
							/>
						</div>
						<div class="flex flex-col gap-4 min-w-0">
							<h4 class="font-bold s-text">
								<a
									href="#"
									@click="${() => console.log("tracking event")}"
									data-card-action
									>BYD</a
								>
							</h4>
							<span class="text-s s-text-subtle">7 modeller</span>
						</div>
					</div>
				</w-card>
			</div>
			<div
				class="flex"
				style="gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-bottom: 40px"
			>
				<w-card class="relative grid grid-rows-1 h-full">
					<article class="flex flex-col gap-8 p-16 h-full">
						<div class="flex flex-col gap-4">
							<h4 class="font-bold s-text">
								<a
									href="#"
									@click="${() => console.log("tracking event")}"
									data-card-action
									>BYD</a
								>
							</h4>
							<span class="s-text-subtle">Från 369 900 kr</span>
						</div>
						<img
							class="w-full object-cover"
							width="800"
							height="500"
							loading="lazy"
							src="https://unsplash.it/300/200?random"
							alt=""
						/>
						<div class="flex gap-16">
							<div class="flex flex-col">
								<span class="text-s s-text-subtle">Drivmedel</span>
								<span class="font-bold s-text">Flera</span>
							</div>

							<div class="flex flex-col">
								<span class="text-s s-text-subtle">Förbrukning (blandad)</span>
								<span class="font-bold s-text">2.7 - 6.3 l/100km</span>
							</div>
						</div>
					</article>
				</w-card>
				<w-card class="relative grid grid-rows-1 h-full">
					<article class="flex flex-col gap-8 p-16 h-full">
						<div class="flex flex-col gap-4">
							<h4 class="font-bold s-text">
								<a
									href="#"
									@click="${() => console.log("tracking event")}"
									data-card-action
									>BYD</a
								>
							</h4>
							<span class="s-text-subtle">Från 369 900 kr</span>
						</div>
						<img
							class="w-full object-cover"
							width="800"
							height="500"
							loading="lazy"
							src="https://unsplash.it/300/200?random"
							alt=""
						/>
						<div class="flex gap-16">
							<div class="flex flex-col">
								<span class="text-s s-text-subtle">Drivmedel</span>
								<span class="font-bold s-text">Flera</span>
							</div>

							<div class="flex flex-col">
								<span class="text-s s-text-subtle">Förbrukning (blandad)</span>
								<span class="font-bold s-text">2.7 - 6.3 l/100km</span>
							</div>
						</div>
					</article>
				</w-card>
			</div>`;
	},
};
