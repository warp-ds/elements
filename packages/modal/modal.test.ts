import { html } from "lit";
import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";

import "./modal.js";

test("renders unnamed children in the modal content area", async () => {
	const page = render(html`
		<w-modal>
			<p>Content without a named slot</p>
		</w-modal>
	`);
	const modal = page.container.querySelector("w-modal")!;
	await modal.updateComplete;

	const content = modal.querySelector("p")!;
	expect(content.hasAttribute("slot")).toBe(false);
	const contentSlot = modal.shadowRoot!.querySelector<HTMLSlotElement>(
		'[part="content"] slot[name="content"]',
	)!;
	expect(contentSlot.assignedElements({ flatten: true })).toContain(content);

	// Open the native dialog to verify that the projected content is visible.
	const dialog = modal.shadowRoot!.querySelector("dialog")!;
	try {
		dialog.showModal();
		await expect
			.element(page.getByText("Content without a named slot"))
			.toBeVisible();
	} finally {
		dialog.close();
	}
});
