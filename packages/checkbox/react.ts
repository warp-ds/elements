import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpCheckbox } from "./checkbox.js";
import type { ChangeEventWithTarget } from "../types.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Checkboxes allow users to select one or more options from a number of choices.
 *
 * Wrap individual checkboxes in a checkbox group.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/checkbox/frameworks/elements)
 */
export const Checkbox = createComponent({
	tagName: "w-checkbox",
	elementClass: Component as unknown as typeof WarpCheckbox,
	react: React,
	events: {
		onChange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
		onchange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
	},
});
