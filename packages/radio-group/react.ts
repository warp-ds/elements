import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React, { cloneElement } from "react";

import type { WarpRadioGroup } from "./radio-group.js";
import type { RadioProps } from "../radio/react.js";

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
	({ helpText, ...props }, ref) => {
		let focusableRadioIndex = 0; // default to the first, but see if any of the children are checked first
		React.Children.forEach(props.children, (child, index) => {
			if (
				React.isValidElement(child) &&
				(child.type as { displayName?: string }).displayName === "Radio"
			) {
				if ((child.props as RadioProps).checked) {
					focusableRadioIndex = index;
				}
			}
		});
		return React.createElement(
			BaseRadioGroup,
			{
				...props,
				...(typeof helpText === "string" ? { "help-text": helpText } : {}),
				ref,
			} as React.ComponentProps<typeof BaseRadioGroup> & {
				"help-text"?: string;
			},
			[
				React.Children.map(props.children, (child, index) => {
					if (
						React.isValidElement(child) &&
						(child.type as { displayName?: string }).displayName === "Radio"
					) {
						if (index === focusableRadioIndex) {
							return cloneElement(child, {
								// @ts-expect-error CBA
								tabIndex: 0,
							});
						} else {
							return cloneElement(child, {
								// @ts-expect-error CBA
								tabIndex: -1,
							});
						}
					}
				}),
				// support taking in JSX in helpText and placing it in the correct slot on behalf of users
				typeof helpText !== "undefined" && typeof helpText !== "string"
					? React.createElement(
							"div",
							{ slot: "help-text" },
							helpText as React.ReactElement,
						)
					: null,
			],
		);
	},
);

RadioGroup.displayName = "RadioGroup";
