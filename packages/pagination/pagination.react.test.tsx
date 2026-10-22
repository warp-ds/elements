import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpPagination } from "./pagination.js";
import { Pagination } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-pagination")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-pagination");
});

describe("Pagination React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(Pagination.displayName).toBe("Pagination");
	});

	test("does not render baseUrl as an attribute on the server side", () => {
		const html = renderToString(<Pagination baseUrl="/search?page=" />);

		expect(html).toContain("<w-pagination>");
	});

	test("does not render currentPageNumber as an attribute on the server side", () => {
		const html = renderToString(<Pagination currentPageNumber={7} />);

		expect(html).toContain("<w-pagination>");
	});

	test("does not render visiblePages as an attribute on the server side", () => {
		const html = renderToString(<Pagination visiblePages={17} />);

		expect(html).toContain("<w-pagination>");
	});

	test("assigns baseUrl to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPagination>();
		await render(<Pagination ref={ref} baseUrl="/search?page=" />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.baseUrl).toBe("/search?page=");
	});

	test("assigns currentPageNumber to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPagination>();
		await render(<Pagination ref={ref} currentPageNumber={7} />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.currentPageNumber).toBe(7);
	});

	test("assigns visiblePages to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPagination>();
		await render(<Pagination ref={ref} visiblePages={17} />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.visiblePages).toBe(17);
	});
});
