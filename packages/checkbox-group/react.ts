import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpCheckboxGroup } from "./checkbox-group.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseCheckboxGroup = createComponent({
	tagName: "w-checkbox-group",
	elementClass: Component as unknown as typeof WarpCheckboxGroup,
	react: React,
});

type BaseCheckboxGroupProps = React.ComponentPropsWithoutRef<
	typeof BaseCheckboxGroup
>;

type CheckboxGroupProps = Omit<
	BaseCheckboxGroupProps,
	"help-text" | "helpText"
> & {
	helpText?: string | React.ReactElement;
};

/**
 * Checkboxes allow users to select one or more options from a number of choices.
 *
 * Wrap individual checkboxes in a checkbox group.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/checkbox/frameworks/elements)
 */
export const CheckboxGroup = React.forwardRef<
	WarpCheckboxGroup,
	CheckboxGroupProps
>(({ helpText, ...props }, ref) =>
	React.createElement(
		BaseCheckboxGroup,
		{
			...props,
			...(typeof helpText === "string" ? { "help-text": helpText } : {}),
			ref,
		} as React.ComponentProps<typeof BaseCheckboxGroup> & {
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

CheckboxGroup.displayName = "CheckboxGroup";
