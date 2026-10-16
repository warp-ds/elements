import { describe, expect, test, beforeAll } from "vitest";
import { render } from "vitest-browser-react";
import { Affix } from "./react.js";
import type { WarpAffix } from "./affix.js";
import React from "react";
import { renderToString } from "react-dom/server";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-affix")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-affix");
});

describe("Affix React Wrapper", () => {
	test("does not render ariaLabel in the DOM on the server side", () => {
		const html = renderToString(<Affix ariaLabel="an affix" />);
		expect(html).toMatch("<w-affix>");
	});

	test("assigns ariaLabel on the host element during component upgrade, client side", async () => {
		const ref = React.createRef<WarpAffix>();
		await render(<Affix ref={ref} clear ariaLabel="Clear search" />);
		const affix = ref.current!;
		await affix.updateComplete;

		expect(affix.ariaLabel).toBe("Clear search");
		expect(affix.getAttribute("aria-label")).toBe("Clear search");
	});
});
