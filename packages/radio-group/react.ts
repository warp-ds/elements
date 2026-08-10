import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpRadioGroup } from "./radio-group.js";

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

type RadioGroupProps = Omit<BaseRadioGroupProps, "help-text" | "helpText"> & {
	helpText?: string | React.ReactElement;
};

/**
 * Radios allow users to select a single option from a list of choices.
 *
 * Wrap individual radio components in a radio group.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/radio/frameworks/elements)
 */
export const RadioGroup = React.forwardRef<WarpRadioGroup, RadioGroupProps>(
	({ helpText, ...props }, ref) =>
		React.createElement(
			BaseRadioGroup,
			{
				...props,
				...(typeof helpText === "string" ? { "help-text": helpText } : {}),
				ref,
			} as React.ComponentProps<typeof BaseRadioGroup> & {
				"help-text"?: string;
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

RadioGroup.displayName = "RadioGroup";
