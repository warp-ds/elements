import React from "react";
import { renderToString } from "react-dom/server";
import { expect, test } from "vitest";
import { Tooltip } from "./react.js";

test("maps noArrow to no-arrow and omits it when false or undefined", () => {
	for (const noArrow of [true, false, undefined]) {
		const html = renderToString(React.createElement(Tooltip, { noArrow }));
		expect(html.includes('no-arrow=""')).toBe(noArrow === true);
		expect(html).not.toContain("noArrow");
	}
});
