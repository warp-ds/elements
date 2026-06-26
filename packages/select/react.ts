import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpSelect } from "./select.js";
import type { ChangeEventWithTarget } from "../types.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSelect = createComponent({
	tagName: "w-select",
	elementClass: Component as unknown as typeof WarpSelect,
	react: React,
	events: {
		onChange: "change" as EventName<ChangeEventWithTarget<HTMLSelectElement>>,
		onchange: "change" as EventName<ChangeEventWithTarget<HTMLSelectElement>>,
	},
});

type BaseSelectProps = React.ComponentPropsWithoutRef<typeof BaseSelect>;

type SelectProps = Omit<
	BaseSelectProps,
	"auto-focus" | "help-text" | "read-only"
> & {
	autoFocus?: boolean;
	helpText?: string;
	readOnly?: boolean;
};

/**
 * A dropdown component for selecting a single value.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/select/frameworks/elements)
 */
export const Select = React.forwardRef<WarpSelect, SelectProps>(
	({ autoFocus, helpText, readOnly, ...props }, ref) =>
		React.createElement(BaseSelect, {
			...props,
			...(autoFocus ? { "auto-focus": true } : {}),
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			...(readOnly ? { "read-only": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseSelect> & {
			"auto-focus"?: boolean;
			"help-text"?: string;
			"read-only"?: boolean;
		}),
);

Select.displayName = "Select";

export const Option = createComponent({
	tagName: "w-option",
	elementClass: Component as unknown as typeof HTMLOptionElement,
	react: React,
});
