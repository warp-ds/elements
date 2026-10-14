import React from "react";
import { renderToString } from "react-dom/server";
import { expect, test } from "vitest";
import { Tooltip } from "./react.js";

test("maps showDelay to show-delay, including zero", () => {
	for (const showDelay of [0, 250, undefined]) {
		const html = renderToString(React.createElement(Tooltip, { showDelay }));
		if (showDelay === undefined) expect(html).not.toContain("show-delay");
		else expect(html).toContain(`show-delay="${showDelay}"`);
		expect(html).not.toContain("showDelay");
	}
});

test("maps noArrow to no-arrow and omits it when false or undefined", () => {
	for (const noArrow of [true, false, undefined]) {
		const html = renderToString(React.createElement(Tooltip, { noArrow }));
		expect(html.includes('no-arrow=""')).toBe(noArrow === true);
		expect(html).not.toContain("noArrow");
	}
});
