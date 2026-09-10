import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import "./button-group.js";

test("renders the slotted content", async () => {
	const component = html`<w-button-group>This is not a button</w-button-group>`;

	const page = render(component);
	await expect.element(page.getByText("This is not a button")).toBeVisible();
});
