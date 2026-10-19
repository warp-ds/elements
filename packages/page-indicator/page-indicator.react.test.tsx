import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpPageIndicator } from "./page-indicator.js";
import { PageIndicator } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-page-indicator")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-page-indicator");
});

describe("PageIndicator React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(PageIndicator.displayName).toBe("PageIndicator");
	});

	test("does not render selectedPage as an attribute on the server side", () => {
		const html = renderToString(<PageIndicator selectedPage={1} />);

		expect(html).toContain("<w-page-indicator>");
	});

	test("does not render pageCount as an attribute on the server side", () => {
		const html = renderToString(<PageIndicator pageCount={20} />);

		expect(html).toContain("<w-page-indicator>");
	});

	test("assigns selectedPage to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPageIndicator>();
		await render(<PageIndicator ref={ref} selectedPage={2} />);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.selectedPage).toBe(2);
	});

	test("assigns pageCount to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPageIndicator>();
		await render(<PageIndicator ref={ref} pageCount={20} />);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.pageCount).toBe(20);
	});
});
