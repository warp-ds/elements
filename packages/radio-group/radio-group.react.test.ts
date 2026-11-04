import React from "react";
import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";

import { describeReactSsrAttributeMapping } from "../../tests/react-ssr-attributes";
import { Radio } from "../radio/react.js";
import { RadioGroup } from "./react.js";
import "../radio/radio.js";
import "./radio-group.js";

describeReactSsrAttributeMapping("RadioGroup", RadioGroup, [
	{ propName: "helpText", attrName: "help-text", value: "Help text" },
]);

test("client-rendered radios keep their values and fire onChange", async () => {
	const onChange = vi.fn(() => {
		const checked = [...document.querySelectorAll("w-radio")].find(
			(radio) => radio.checked,
		);
		return checked?.value;
	});

	// React 19 sets `value` as a property on the custom element before inserting it.
	await render(
		React.createElement(
			RadioGroup,
			{ label: "Time slot", name: "slot", onChange },
			React.createElement(Radio, { value: "a" }, "A"),
			React.createElement(Radio, { value: "b" }, "B"),
		),
	);

	const group = document.querySelector("w-radio-group")!;
	const radios = [...document.querySelectorAll("w-radio")];
	await group.updateComplete;

	expect(radios.map((radio) => radio.value)).toEqual(["a", "b"]);

	radios[0].click();
	await group.updateComplete;
	radios[1].click();
	await group.updateComplete;

	expect(onChange).toHaveBeenCalledTimes(2);
	expect(onChange).toHaveLastReturnedWith("b");
});
