import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./card.js";

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
