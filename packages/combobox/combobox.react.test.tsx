import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpCombobox } from "./combobox.js";
import { Combobox } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-combobox")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-combobox");
});

describe("Combobox React Wrapper", () => {
	test("does not render openOnFocus as an attribute on the server side", () => {
		const html = renderToString(<Combobox openOnFocus={true} />);

		expect(html).toContain("<w-combobox>");
	});

	test("does not render selectOnBlur as an attribute on the server side", () => {
		const html = renderToString(<Combobox selectOnBlur={true} />);

		expect(html).toContain("<w-combobox>");
	});

	test("does not render matchTextSegments as an attribute on the server side", () => {
		const html = renderToString(<Combobox matchTextSegments={true} />);

		expect(html).toContain("<w-combobox>");
	});

	test("does not render disableStaticFiltering as an attribute on the server side", () => {
		const html = renderToString(<Combobox disableStaticFiltering={true} />);

		expect(html).toContain("<w-combobox>");
	});

	test("does not render helpText as an attribute on the server side", () => {
		const html = renderToString(<Combobox helpText="Choose an option" />);

		expect(html).toContain("<w-combobox>");
	});

	test("assigns openOnFocus to the registered element on the client side", async () => {
		const ref = React.createRef<WarpCombobox>();
		await render(<Combobox ref={ref} openOnFocus={true} />);
		const combobox = ref.current!;
		await combobox.updateComplete;

		expect(combobox.openOnFocus).toBe(true);
		expect(combobox.hasAttribute("open-on-focus")).toBe(true);
	});

	test("assigns selectOnBlur to the registered element on the client side", async () => {
		const ref = React.createRef<WarpCombobox>();
		await render(<Combobox ref={ref} selectOnBlur={true} />);
		const combobox = ref.current!;
		await combobox.updateComplete;

		expect(combobox.selectOnBlur).toBe(true);
		expect(combobox.hasAttribute("select-on-blur")).toBe(true);
	});

	test("assigns matchTextSegments to the registered element on the client side", async () => {
		const ref = React.createRef<WarpCombobox>();
		await render(<Combobox ref={ref} matchTextSegments={true} />);
		const combobox = ref.current!;
		await combobox.updateComplete;

		expect(combobox.matchTextSegments).toBe(true);
		expect(combobox.hasAttribute("match-text-segments")).toBe(true);
	});

	test("assigns disableStaticFiltering to the registered element on the client side", async () => {
		const ref = React.createRef<WarpCombobox>();
		await render(<Combobox ref={ref} disableStaticFiltering={true} />);
		const combobox = ref.current!;
		await combobox.updateComplete;

		expect(combobox.disableStaticFiltering).toBe(true);
		expect(combobox.hasAttribute("disable-static-filtering")).toBe(true);
	});

	test("assigns helpText to the registered element on the client side", async () => {
		const ref = React.createRef<WarpCombobox>();
		await render(<Combobox ref={ref} helpText="Choose an option" />);
		const combobox = ref.current!;
		await combobox.updateComplete;

		expect(combobox.helpText).toBe("Choose an option");
		expect(combobox.getAttribute("help-text")).toBe("Choose an option");
	});
});
