import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpSnackbarItem } from "./snackbar-item.js";
import { SnackbarItem } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-snackbar-item")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-snackbar-item");
});

describe("SnackbarItem React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(SnackbarItem.displayName).toBe("SnackbarItem");
	});

	test("does not render actionPlacement as an attribute on the server side", () => {
		const html = renderToString(<SnackbarItem actionPlacement="block" />);

		expect(html).toContain("<w-snackbar-item>");
	});

	test("assigns canClose to the registered element on the client side", async () => {
		const ref = React.createRef<WarpSnackbarItem>();
		await render(
			<SnackbarItem ref={ref} actionPlacement="block">
				SnackbarItem contents
			</SnackbarItem>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.actionPlacement).toBe("block");
	});
});
