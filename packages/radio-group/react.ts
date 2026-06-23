import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpRadioGroup } from "./radio-group.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseRadioGroup = createComponent({
	tagName: "w-radio-group",
	elementClass: Component as unknown as typeof WarpRadioGroup,
	react: React,
	events: {
		/** These event handlers deliberately have no target, since they are dispatched at group level with no target element */
		onInput: "input" as EventName<InputEvent>,
		oninput: "input" as EventName<InputEvent>,
		onChange: "change" as EventName<Event>,
		onchange: "change" as EventName<Event>,
	},
});

type BaseRadioGroupProps = React.ComponentPropsWithoutRef<
	typeof BaseRadioGroup
>;

type RadioGroupProps = Omit<BaseRadioGroupProps, "help-text"> & {
	helpText?: string;
};

export const RadioGroup = React.forwardRef<WarpRadioGroup, RadioGroupProps>(
	({ helpText, ...props }, ref) =>
		React.createElement(BaseRadioGroup, {
			...props,
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			ref,
		} as React.ComponentProps<typeof BaseRadioGroup> & {
			"help-text"?: string;
		}),
);

RadioGroup.displayName = "RadioGroup";
