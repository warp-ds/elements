import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpTextarea } from "./textarea.js";
import type { ChangeEventWithTarget, InputEventWithTarget } from "../types.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTextarea = createComponent({
	tagName: "w-textarea",
	elementClass: Component as unknown as typeof WarpTextarea,
	react: React,
	events: {
		onBlur: "blur" as EventName<FocusEvent>,
		onblur: "blur" as EventName<FocusEvent>,
		onChange: "change" as EventName<ChangeEventWithTarget<HTMLTextAreaElement>>,
		onchange: "change" as EventName<ChangeEventWithTarget<HTMLTextAreaElement>>,
		onInput: "input" as EventName<InputEventWithTarget<HTMLTextAreaElement>>,
		oninput: "input" as EventName<InputEventWithTarget<HTMLTextAreaElement>>,
		onFocus: "focus" as EventName<FocusEvent>,
		onfocus: "focus" as EventName<FocusEvent>,
	},
});

type BaseTextareaProps = React.ComponentPropsWithoutRef<typeof BaseTextarea>;

type TextareaProps = Omit<
	BaseTextareaProps,
	| "help-text"
	| "helpText"
	| "maximum-rows"
	| "minimum-rows"
	| "maxlength"
	| "minlength"
	| "read-only"
> & {
	helpText?: string | React.ReactElement;
	maxRows?: number;
	minRows?: number;
	maxLength?: number;
	minLength?: number;
	readOnly?: boolean;
};

/**
 * A multi-line text input with built-in form validation, auto-resizing, and styling support.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/text-area/frameworks/elements)
 */
export const Textarea = React.forwardRef<WarpTextarea, TextareaProps>(
	(
		{ helpText, maxRows, minRows, maxLength, minLength, readOnly, ...props },
		ref,
	) =>
		React.createElement(
			BaseTextarea,
			{
				...props,
				...(typeof helpText === "string" ? { "help-text": helpText } : {}),
				...(maxRows !== undefined ? { "maximum-rows": maxRows } : {}),
				...(minRows !== undefined ? { "minimum-rows": minRows } : {}),
				...(maxLength !== undefined ? { maxlength: maxLength } : {}),
				...(minLength !== undefined ? { minlength: minLength } : {}),
				...(readOnly ? { "read-only": true } : {}),
				ref,
			} as React.ComponentProps<typeof BaseTextarea> & {
				"help-text"?: string;
				"maximum-rows"?: number;
				"minimum-rows"?: number;
				"read-only"?: boolean;
			},
			[
				props.children,
				// support taking in JSX in helpText and placing it in the correct slot on behalf of users
				typeof helpText !== "undefined" && typeof helpText !== "string"
					? React.createElement(
							"div",
							{ slot: "help-text" },
							helpText as React.ReactElement,
						)
					: null,
			],
		),
);

Textarea.displayName = "Textarea";
