import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "../checkbox/checkbox.js";
import "../checkbox-group/checkbox-group.js";
import "../radio/radio.js";
import "../radio-group/radio-group.js";
import "./card.js";
// @ts-expect-error css is not typed
import "../global.css";

test("renders the slotted text", async () => {
	const component = html`<w-card>This is a card</w-card>`;

	const page = render(component);
	await expect.element(page.getByText("This is a card")).toBeVisible();
});

test("does not make a non-clickable card focusable", async () => {
	const page = render(html`<w-card>Content</w-card>`);
	await expect.element(page.getByText("Content")).toBeVisible();
	const base = page.container
		.querySelector("w-card")
		?.shadowRoot?.querySelector('[part="base"]');

	expect(base?.getAttribute("tabindex")).toBeNull();
});

test("makes a clickable card focusable", async () => {
	const page = render(html`<w-card clickable>Content</w-card>`);
	await expect.element(page.getByText("Content")).toBeVisible();
	const base = page.container
		.querySelector("w-card")
		?.shadowRoot?.querySelector('[part="base"]');

	expect(base?.getAttribute("tabindex")).toBe("0");
});

test("does not catch clicks from a button inside the card - clickable", async () => {
	let buttonClicks = 0;
	const page = render(html`
		<w-card clickable>
			<button @click=${() => buttonClicks++}>Add to cart</button>
		</w-card>
	`);

	await page.getByRole("button", { name: "Add to cart" }).click();

	expect(buttonClicks).toBe(1);
});

test("does not catch clicks from a button inside the card - not clickable", async () => {
	let buttonClicks = 0;
	const page = render(html`
		<w-card>
			<button @click=${() => buttonClicks++}>Add to cart</button>
		</w-card>
	`);

	await page.getByRole("button", { name: "Add to cart" }).click();

	expect(buttonClicks).toBe(1);
});

test("card action selects a radio and applies selected styling", async () => {
	const page = render(html`
		<w-card>
			<div style="padding: 16px;">
				<w-radio
					id="radio-card-option"
					name="radio-card"
					value="option"
					data-card-action
				></w-radio>
				<label for="radio-card-option">Radio option</label>
			</div>
		</w-card>
	`);

	const radio = page.container.querySelector("w-radio") as HTMLElement & {
		checked: boolean;
		click: () => void;
		updateComplete: Promise<unknown>;
	};
	radio.click();
	await radio.updateComplete;
	const card = page.container.querySelector("w-card") as HTMLElement;

	expect(radio.checked).toBe(true);
	expect(card.hasAttribute("selected")).toBe(false);
	expect(card.matches(":has([data-card-action][checked])")).toBe(true);
});

test("card action toggles a checkbox and does not toggle when disabled", async () => {
	const page = render(html`
		<w-card>
			<div style="padding: 16px;">
				<w-checkbox
					id="checkbox-card-option"
					name="checkbox-card"
					data-card-action
				></w-checkbox>
				<label for="checkbox-card-option">Checkbox option</label>
			</div>
		</w-card>
	`);

	const checkbox = page.container.querySelector("w-checkbox") as HTMLElement & {
		checked: boolean;
		click: () => void;
		updateComplete: Promise<unknown>;
	};
	await checkbox.updateComplete;
	checkbox.click();
	await checkbox.updateComplete;

	expect(checkbox.checked).toBe(true);

	checkbox.setAttribute("disabled", "");
	checkbox.click();
	await checkbox.updateComplete;

	expect(checkbox.checked).toBe(true);
});

test("keeps a separate radio card in the same radio group", async () => {
	const page = render(html`
		<w-radio-group name="package-size">
			<div data-card-group>
				<w-card>
					<w-radio value="small" data-card-action></w-radio>
				</w-card>
				<w-card>
					<w-radio value="medium" data-card-action></w-radio>
				</w-card>
			</div>
			<w-card>
				<w-radio value="large" data-card-action></w-radio>
			</w-card>
		</w-radio-group>
	`);

	const radios = [...page.container.querySelectorAll("w-radio")] as Array<
		HTMLElement & {
			checked: boolean;
			click: () => void;
			updateComplete: Promise<unknown>;
		}
	>;
	await Promise.all(radios.map((radio) => radio.updateComplete));

	radios[0].click();
	await Promise.all(radios.map((radio) => radio.updateComplete));
	expect(radios[0].checked).toBe(true);
	expect(radios[2].checked).toBe(false);

	radios[2].click();
	await Promise.all(radios.map((radio) => radio.updateComplete));
	expect(radios[0].checked).toBe(false);
	expect(radios[2].checked).toBe(true);
});

test("keeps a separate checkbox card in the same checkbox group", async () => {
	const page = render(html`
		<w-checkbox-group name="services">
			<div data-card-group>
				<w-card>
					<w-checkbox value="gift-wrap" data-card-action></w-checkbox>
				</w-card>
				<w-card>
					<w-checkbox value="insurance" data-card-action></w-checkbox>
				</w-card>
			</div>
			<w-card>
				<w-checkbox value="priority" data-card-action></w-checkbox>
			</w-card>
		</w-checkbox-group>
	`);

	const checkboxes = [
		...page.container.querySelectorAll("w-checkbox"),
	] as Array<
		HTMLElement & {
			checked: boolean;
			click: () => void;
			updateComplete: Promise<unknown>;
		}
	>;
	await Promise.all(checkboxes.map((checkbox) => checkbox.updateComplete));

	checkboxes[0].click();
	checkboxes[2].click();
	await Promise.all(checkboxes.map((checkbox) => checkbox.updateComplete));

	expect(checkboxes[0].checked).toBe(true);
	expect(checkboxes[2].checked).toBe(true);
});
