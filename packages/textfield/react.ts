import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { ChangeEventWithTarget, InputEventWithTarget } from "../types.js";
import type { WarpTextField } from "./textfield.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTextField = createComponent({
	tagName: "w-textfield",
	elementClass: Component as unknown as typeof WarpTextField,
	react: React,
	events: {
		onBlur: "blur" as EventName<FocusEvent>,
		onblur: "blur" as EventName<FocusEvent>,
		onChange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
		onchange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
		onInput: "input" as EventName<InputEventWithTarget<HTMLInputElement>>,
		oninput: "input" as EventName<InputEventWithTarget<HTMLInputElement>>,
		onFocus: "focus" as EventName<FocusEvent>,
		onfocus: "focus" as EventName<FocusEvent>,
	},
});

type BaseTextFieldProps = React.ComponentPropsWithoutRef<typeof BaseTextField>;

type TextFieldProps = Omit<
	BaseTextFieldProps,
	"help-text" | "min-length" | "max-length" | "read-only"
> & {
	helpText?: string;
	minLength?: number;
	maxLength?: number;
	readOnly?: boolean;
};

/**
 * A single-line input component used for entering and editing textual or numeric data.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/text-area/frameworks/elements)
 */
export const TextField = React.forwardRef<WarpTextField, TextFieldProps>(
	({ helpText, minLength, maxLength, readOnly, ...props }, ref) =>
		React.createElement(BaseTextField, {
			...props,
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			...(minLength !== undefined ? { "min-length": minLength } : {}),
			...(maxLength !== undefined ? { "max-length": maxLength } : {}),
			...(readOnly ? { "read-only": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseTextField> & {
			"help-text"?: string;
			"min-length"?: number;
			"max-length"?: number;
			"read-only"?: boolean;
		}),
);

TextField.displayName = "TextField";
