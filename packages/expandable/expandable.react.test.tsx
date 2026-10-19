import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpExpandable } from "./expandable.js";
import { Expandable } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-expandable")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-expandable");
});

type ExpandableProps = React.ComponentProps<typeof Expandable>;

test("types variant as the accepted expandable variants", () => {
	expectTypeOf<ExpandableProps["variant"]>().toEqualTypeOf<
		"default" | "box" | "box-bleed" | "default-with-divider" | undefined
	>();
});

describe("Expandable React Wrapper", () => {
	test("does not render buttonClass as an attribute on the server side", () => {
		const html = renderToString(<Expandable buttonClass="custom-button" />);

		expect(html).toContain("<w-expandable>");
	});

	test("does not render contentClass as an attribute on the server side", () => {
		const html = renderToString(<Expandable contentClass="custom-content" />);

		expect(html).toContain("<w-expandable>");
	});

	test("does not render noChevron as an attribute on the server side", () => {
		const html = renderToString(<Expandable noChevron={true} />);

		expect(html).toContain("<w-expandable>");
	});

	test("does not render headingLevel as an attribute on the server side", () => {
		const html = renderToString(<Expandable headingLevel={2} />);

		expect(html).toContain("<w-expandable>");
	});

	test("assigns buttonClass to the registered element on the client side", async () => {
		const ref = React.createRef<WarpExpandable>();
		await render(
			<Expandable ref={ref} title="Details" buttonClass="custom-button" />,
		);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.buttonClass).toBe("custom-button");
		expect(
			expandable
				.shadowRoot!.querySelector("button")
				?.classList.contains("custom-button"),
		).toBe(true);
	});

	test("assigns contentClass to the registered element on the client side", async () => {
		const ref = React.createRef<WarpExpandable>();
		await render(<Expandable ref={ref} contentClass="custom-content" />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.contentClass).toBe("custom-content");
		expect(
			expandable
				.shadowRoot!.querySelector(".content")
				?.classList.contains("custom-content"),
		).toBe(true);
	});

	test("assigns noChevron to the registered element on the client side", async () => {
		const ref = React.createRef<WarpExpandable>();
		await render(<Expandable ref={ref} title="Details" noChevron={true} />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.noChevron).toBe(true);
		expect(expandable.shadowRoot!.querySelector("button")).not.toBeNull();
		expect(expandable.shadowRoot!.querySelector('[part="chevron"]')).toBeNull();
	});

	test("assigns headingLevel to the registered element on the client side", async () => {
		const ref = React.createRef<WarpExpandable>();
		await render(<Expandable ref={ref} title="Details" headingLevel={2} />);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.headingLevel).toBe(2);
	});
});
