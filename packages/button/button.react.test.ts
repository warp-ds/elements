import React from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, test } from "vitest";

import { Button } from "./react.js";
import { describeReactPropertyMapping } from "../../tests/react-property-mapping.js";

describeReactPropertyMapping("Button", Button, "commandForElement", () => [
	document.createElement("div"),
	document.createElement("dialog"),
]);

describe("Button React SSR", () => {
	test("renders buttonClass as the button-class attribute, including an empty string", () => {
		for (const buttonClass of ["custom-button", ""]) {
			const html = renderToString(React.createElement(Button, { buttonClass }));
			expect(html).toContain(`button-class="${buttonClass}"`);
			expect(html).not.toContain("buttonClass");
		}
	});
	test("renders fullWidth as the full-width attribute", () => {
		const html = renderToString(
			React.createElement(Button, { fullWidth: true }, "Full width"),
		);

		expect(html).toContain("full-width");
		expect(html).not.toContain("fullWidth");
	});

	test("renders iconOnly as the icon-only attribute", () => {
		const html = renderToString(
			React.createElement(Button, { iconOnly: true }, "Icon only"),
		);

		expect(html).toContain("icon-only");
		expect(html).not.toContain("iconOnly");
	});
});
