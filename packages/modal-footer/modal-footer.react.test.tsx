import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpModalFooter } from "./modal-footer.js";
import { ModalFooter } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-modal-footer")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-modal-footer");
});

describe("ModalFooter React Wrapper", () => {
	test("renders children on the server side", () => {
		const html = renderToString(
			<ModalFooter>
				<button type="button">Save</button>
			</ModalFooter>,
		);

		expect(html).toContain("<w-modal-footer>");
		expect(html).toContain('<button type="button">Save</button>');
		expect(html).toContain("</w-modal-footer>");
	});

	test("forwards the ref and slots children in the registered element on the client side", async () => {
		const ref = React.createRef<WarpModalFooter>();
		const page = await render(
			<ModalFooter ref={ref}>
				<button type="button">Save</button>
			</ModalFooter>,
		);
		const modalFooter = ref.current!;
		await modalFooter.updateComplete;

		expect(modalFooter.getAttribute("slot")).toBe("footer");
		const slot = modalFooter.shadowRoot!.querySelector("slot")!;
		expect(slot.assignedElements()).toEqual([
			modalFooter.querySelector("button"),
		]);
		await expect
			.element(page.getByRole("button", { name: "Save" }))
			.toBeVisible();
	});
});
