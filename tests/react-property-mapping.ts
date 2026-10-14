import React from "react";
import { renderToString } from "react-dom/server";
import { render } from "vitest-browser-react";
import { describe, expect, test } from "vitest";

/** Checks property identity, updates, removal, refs, and SSR exclusion. */
export function describeReactPropertyMapping(
	componentName: string,
	Component: React.ElementType,
	propName: string,
	createValues: () => [unknown, unknown],
) {
	describe(`${componentName} React ${propName}`, () => {
		test("assigns the property intact, updates it, and clears it when omitted", async () => {
			const [initial, replacement] = createValues();
			const ref = React.createRef<HTMLElement & Record<string, unknown>>();
			const page = await render(
				React.createElement(Component, { [propName]: initial, ref }),
			);
			const element = ref.current;
			expect(element).not.toBeNull();
			expect(element?.[propName]).toBe(initial);
			expect(element?.hasAttribute(propName)).toBe(false);
			await page.rerender(
				React.createElement(Component, { [propName]: replacement, ref }),
			);
			expect(ref.current).toBe(element);
			expect(element?.[propName]).toBe(replacement);
			await page.rerender(React.createElement(Component, { ref }));
			expect(element?.[propName]).toBeUndefined();
		});

		test("does not serialize the property into HTML", () => {
			const [value] = createValues();
			const html = renderToString(
				React.createElement(Component, { [propName]: value }),
			);
			expect(html.toLowerCase()).not.toContain(`${propName.toLowerCase()}=`);
		});
	});
}
