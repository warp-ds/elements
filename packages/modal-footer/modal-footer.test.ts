import { expect, test } from "vitest";

import "./modal-footer.js";

test("assigns the footer slot when connected", async () => {
	const modalFooter = document.createElement("w-modal-footer");
	expect(modalFooter.hasAttribute("slot")).toBe(false);

	try {
		document.body.appendChild(modalFooter);
		await modalFooter.updateComplete;

		expect(modalFooter.getAttribute("slot")).toBe("footer");
	} finally {
		modalFooter.remove();
	}
});
