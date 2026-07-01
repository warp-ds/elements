import { html } from "lit";

import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./tooltip.js";

test("does the thing", async () => {
	const component = html`<w-tooltip></w-tooltip>`;

	const page = render(component);

	const tooltip = page.container.querySelector("w-tooltip");
	if (!tooltip) return expect(tooltip).not.toBeNull();
});
