import React from "react";
import { renderToString } from "react-dom/server";
import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";
import { render } from "vitest-browser-react";

import type { WarpLink } from "./link.js";
import { Link } from "./react.js";

beforeAll(async () => {
	// Ensure a source import hasn't already registered another implementation.
	expect(customElements.get("w-link")).toBeUndefined();

	const bundleUrl = new URL("../../eik/index.js", import.meta.url).href;
	await import(/* @vite-ignore */ bundleUrl);

	await customElements.whenDefined("w-link");
});

type LinkProps = React.ComponentProps<typeof Link>;

test("types variant as the accepted expandable variants", () => {
	expectTypeOf<LinkProps["variant"]>().toEqualTypeOf<
		| "primary"
		| "secondary"
		| "negative"
		| "negativeQuiet"
		| "utility"
		| "quiet"
		| "utilityQuiet"
		| "overlay"
		| "overlayInverted"
		| "overlayQuiet"
		| "overlayInvertedQuiet"
		| undefined
	>();
});

describe("Link React Wrapper", () => {
	test("sets displayName to match the React component name", () => {
		expect(Link.displayName).toBe("Link");
	});

	test("does not render fullWidth as an attribute on the server side", () => {
		const html = renderToString(<Link fullWidth />);

		expect(html).toContain("<w-link>");
	});

	test("assigns fullWidth to the registered element on the client side", async () => {
		const ref = React.createRef<WarpLink>();
		await render(
			<Link ref={ref} href="#" fullWidth>
				This is a link looking like a button
			</Link>,
		);
		const expandable = ref.current!;
		await expandable.updateComplete;

		expect(expandable.fullWidth).toBe(true);
	});
});
