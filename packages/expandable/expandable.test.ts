import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./expandable.js";

test("renders the given title prop and hides the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();
	await expect
		.element(page.getByText("with expanded content"))
		.not.toBeVisible();
});

test("exposes the wrapper and toggle button as CSS parts", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await expect.element(page.getByText("I'm expandable")).toBeVisible();

	const shadowRoot = document.querySelector("w-expandable")?.shadowRoot;
	expect(shadowRoot?.querySelector('[part="wrapper"]')).toBeTruthy();
	expect(shadowRoot?.querySelector('button[part="button"]')).toBeTruthy();
});

test("clicking the expandable shows the slotted content", async () => {
	const component = html`
		<w-expandable title="I'm expandable">
			<p>with expanded content</p>
		</w-expandable>
	`;

	const page = render(component);
	await page.getByRole("button").click();
	await expect.element(page.getByText("with expanded content")).toBeVisible();
});
