import { expect, test } from "vitest";

import "./modal-header.js";

test("assigns the header slot when connected", async () => {
	const modalHeader = document.createElement("w-modal-header");
	expect(modalHeader.hasAttribute("slot")).toBe(false);

	try {
		document.body.appendChild(modalHeader);
		await modalHeader.updateComplete;

		expect(modalHeader.getAttribute("slot")).toBe("header");
	} finally {
		modalHeader.remove();
	}
});
