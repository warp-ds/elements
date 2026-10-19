import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpModal } from "./modal.js";
import { Modal } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-modal")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-modal");
});

describe("Modal React Wrapper", () => {
	test("does not render contentId as an attribute on the server side", () => {
		const html = renderToString(<Modal contentId="modal-content" />);

		expect(html).toContain("<w-modal>");
	});

	test("does not render ignoreBackdropClicks as an attribute on the server side", () => {
		const html = renderToString(<Modal ignoreBackdropClicks={true} />);

		expect(html).toContain("<w-modal>");
	});

	test("assigns contentId to the registered element on the client side", async () => {
		const ref = React.createRef<WarpModal>();
		await render(<Modal ref={ref} contentId="modal-content" />);
		const modal = ref.current!;
		await modal.updateComplete;

		expect(modal.contentId).toBe("modal-content");
	});

	test("assigns ignoreBackdropClicks to the registered element on the client side", async () => {
		const ref = React.createRef<WarpModal>();
		await render(<Modal ref={ref} ignoreBackdropClicks={true} />);
		const modal = ref.current!;
		await modal.updateComplete;

		expect(modal.ignoreBackdropClicks).toBe(true);
	});
});
