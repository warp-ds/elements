import { describe, expect, test, beforeAll } from "vitest";
import { render } from "vitest-browser-react";
import { BreadcrumbItem } from "./react.js";
import type { WarpBreadcrumbItem } from "./breadcrumb-item.js";
import React from "react";
import { renderToString } from "react-dom/server";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-breadcrumb-item")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-breadcrumb-item");
});

describe("BreadcrumbItem React Wrapper", () => {
	test("does not render currentPage in the DOM on the server side", () => {
		const html = renderToString(<BreadcrumbItem currentPage={true} />);
		expect(html).toMatch("<w-breadcrumb-item>");
	});

	test("assigns currentPage on the host element during component upgrade, client side", async () => {
		const ref = React.createRef<WarpBreadcrumbItem>();
		await render(<BreadcrumbItem ref={ref} currentPage={true} />);
		const breadcrumbItem = ref.current!;
		await breadcrumbItem.updateComplete;

		expect(breadcrumbItem.currentPage).toBe(true);
		expect(breadcrumbItem.hasAttribute("current-page")).toBeTruthy();
	});
});
