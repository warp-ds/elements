import { render } from "vitest-browser-lit";
import { html } from "lit";
import { expect, test } from "vitest";
import "./link.js";

test("renders a link with role button ", async () => {
	const component = html`<w-link type="button" href="link yo"
		>This is a link looking like a button</w-link
	>`;
	const screen = await render(component);
	await expect
		.element(screen.getByText("This is a link looking like a button"))
		.toHaveAttribute("href", "link yo");
});
