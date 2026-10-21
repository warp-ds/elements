import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpTooltip } from "./tooltip.js";
import { Tooltip } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-tooltip")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-tooltip");
});

describe("Tooltip React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(Tooltip.displayName).toBe("Tooltip");
	});

	test("does not render htmlFor as an attribute on the server side", () => {
		const html = renderToString(
			<Tooltip htmlFor="my-button">Check out this tooltip</Tooltip>,
		);

		expect(html).toContain("<w-tooltip>");
	});

	test("assigns htmlFor to the registered element on the client side", async () => {
		const ref = React.createRef<WarpTooltip>();
		await render(
			<Tooltip ref={ref} htmlFor="my-button">
				Check out this tooltip
			</Tooltip>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.htmlFor).toBe("my-button");
	});
});
