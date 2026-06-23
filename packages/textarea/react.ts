import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpTextarea } from "./textarea.js";
import { ChangeEventWithTarget, InputEventWithTarget } from "../types.js";

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
	"help-text" | "maximum-rows" | "minimum-rows" | "read-only"
> & {
	helpText?: string;
	maxRows?: number;
	minRows?: number;
	readOnly?: boolean;
};

/**
 * A multi-line text input with built-in form validation, auto-resizing, and styling support.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/text-area/frameworks/elements)
 */
export const Textarea = React.forwardRef<WarpTextarea, TextareaProps>(
	({ helpText, maxRows, minRows, readOnly, ...props }, ref) =>
		React.createElement(BaseTextarea, {
			...props,
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			...(maxRows !== undefined ? { "maximum-rows": maxRows } : {}),
			...(minRows !== undefined ? { "minimum-rows": minRows } : {}),
			...(readOnly ? { "read-only": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseTextarea> & {
			"help-text"?: string;
			"maximum-rows"?: number;
			"minimum-rows"?: number;
			"read-only"?: boolean;
		}),
);

Textarea.displayName = "Textarea";
