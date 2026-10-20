import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpPill } from "./pill.js";
import { Pill } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-pill")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-pill");
});

describe("Pill React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(Pill.displayName).toBe("Pill");
	});

	test("does not render canClose as an attribute on the server side", () => {
		const html = renderToString(<Pill canClose />);

		expect(html).toContain("<w-pill>");
	});

	test("does not render openSrLabel as an attribute on the server side", () => {
		const html = renderToString(<Pill openSrLabel="Open" />);

		expect(html).toContain("<w-pill>");
	});

	test("does not render closeSrLabel as an attribute on the server side", () => {
		const html = renderToString(<Pill closeSrLabel="Close" />);

		expect(html).toContain("<w-pill>");
	});

	test("does not render openAriaLabel as an attribute on the server side", () => {
		const html = renderToString(<Pill openAriaLabel="Open" />);

		expect(html).toContain("<w-pill>");
	});

	test("does not render closeAriaLabel as an attribute on the server side", () => {
		const html = renderToString(<Pill closeAriaLabel="Close" />);

		expect(html).toContain("<w-pill>");
	});

	test("assigns canClose to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPill>();
		await render(
			<Pill ref={ref} canClose>
				Pill contents
			</Pill>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.canClose).toBe(true);
	});

	test("assigns openSrLabel to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPill>();
		await render(
			<Pill ref={ref} openSrLabel="Open">
				Pill contents
			</Pill>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.openSrLabel).toBe("Open");
	});

	test("assigns openAriaLabel to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPill>();
		await render(
			<Pill ref={ref} openAriaLabel="Open">
				Pill contents
			</Pill>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.openAriaLabel).toBe("Open");
	});

	test("assigns closeSrLabel to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPill>();
		await render(
			<Pill ref={ref} closeSrLabel="Close">
				Pill contents
			</Pill>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.closeSrLabel).toBe("Close");
	});

	test("assigns closeAriaLabel to the registered element on the client side", async () => {
		const ref = React.createRef<WarpPill>();
		await render(
			<Pill ref={ref} closeAriaLabel="Close">
				Pill contents
			</Pill>,
		);
		const component = ref.current!;
		await component.updateComplete;

		expect(component.closeAriaLabel).toBe("Close");
	});
});
