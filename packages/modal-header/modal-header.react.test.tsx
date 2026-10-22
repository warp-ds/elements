import React, { act } from "react";
import { hydrateRoot, type Root } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpModalHeader } from "./modal-header.js";
import { ModalHeader } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-modal-header")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-modal-header");
});

describe("ModalHeader React Wrapper", () => {
	test("hydrates with the auto-assigned header slot without warnings or errors", async () => {
		const ref = React.createRef<WarpModalHeader>();
		const element = <ModalHeader ref={ref} />;
		const html = renderToString(element);
		expect(html).toBe("<w-modal-header></w-modal-header>");

		const container = document.createElement("div");
		document.body.appendChild(container);
		const testEnvironment = globalThis as typeof globalThis & {
			IS_REACT_ACT_ENVIRONMENT?: boolean;
		};
		const previousActEnvironment = testEnvironment.IS_REACT_ACT_ENVIRONMENT;
		testEnvironment.IS_REACT_ACT_ENVIRONMENT = true;
		const consoleError = vi.spyOn(console, "error");
		const consoleWarn = vi.spyOn(console, "warn");
		const onRecoverableError = vi.fn();
		let root: Root | undefined;

		try {
			container.innerHTML = html;
			const modalHeader = container.querySelector("w-modal-header")!;
			// Eik must add the slot before hydration to exercise warning suppression.
			await modalHeader.updateComplete;
			expect(modalHeader.getAttribute("slot")).toBe("header");

			await act(async () => {
				root = hydrateRoot(container, element, { onRecoverableError });
			});
			await modalHeader.updateComplete;

			expect(ref.current).toBe(modalHeader);
			expect(modalHeader.getAttribute("slot")).toBe("header");
			expect(onRecoverableError).not.toHaveBeenCalled();
			expect(consoleError).not.toHaveBeenCalled();
			expect(consoleWarn).not.toHaveBeenCalled();
		} finally {
			try {
				await act(async () => root?.unmount());
			} finally {
				testEnvironment.IS_REACT_ACT_ENVIRONMENT = previousActEnvironment;
				consoleError.mockRestore();
				consoleWarn.mockRestore();
				container.remove();
			}
		}
	});

	test("does not render noClose as an attribute on the server side", () => {
		const html = renderToString(<ModalHeader noClose={true} />);

		expect(html).toContain("<w-modal-header>");
	});

	test("assigns noClose to the registered element on the client side", async () => {
		const ref = React.createRef<WarpModalHeader>();
		await render(<ModalHeader ref={ref} noClose={true} />);
		const modalHeader = ref.current!;
		await modalHeader.updateComplete;

		expect(modalHeader.noClose).toBe(true);
		expect(modalHeader.shadowRoot!.querySelector('[part="close"]')).toBeNull();
	});
});
