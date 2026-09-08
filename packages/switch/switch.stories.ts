import type { Meta, StoryObj } from "@storybook/web-components";
import { spread } from "@open-wc/lit-helpers";
import { prespread } from "../../.storybook/utilities.js";
import { html } from "lit";

import "./switch.js";

const meta: Meta = {
	title: "Forms/Switch",
	component: "w-switch",
	argTypes: {
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
		value: { control: "text" },
	},
	render(args) {
		return html`
			<div style="display: inline-flex; align-items: center; gap: 8px;">
				<label id="switch-label">Enable notifications</label>
				<w-switch
					aria-labelledby="switch-label"
					${spread(prespread(args))}
				></w-switch>
			</div>
		`;
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		checked: false,
		disabled: false,
	},
};

export const Checked: Story = {
	args: {
		checked: true,
		disabled: false,
	},
};

export const Disabled: Story = {
	args: {
		checked: false,
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		checked: true,
		disabled: true,
	},
};

export const SwitchFormAssociated: Story = {
	render: () => {
		const handleSubmit = (event: Event) => {
			event.preventDefault();
			const form = event.currentTarget as HTMLFormElement;
			const status = form.querySelector("[data-status]") as HTMLElement | null;
			if (!status) return;

			const data = new FormData(form);
			const name = "notifications";
			const value = data.get(name);
			status.textContent =
				value === null
					? "Submitted: no switch value captured."
					: `Submitted: ${name}=${String(value)}`;
		};

		return html`
			<form
				@submit=${handleSubmit}
				style="display: grid; gap: 12px; max-width: 320px;"
			>
				<div style="display: inline-flex; align-items: center; gap: 8px;">
					<label for="switch-form">Enable notifications</label>
					<w-switch
						id="switch-form"
						name="notifications"
						value="enabled"
					></w-switch>
				</div>
				<button type="submit">Submit</button>
				<div data-status aria-live="polite"></div>
			</form>
		`;
	},
};
