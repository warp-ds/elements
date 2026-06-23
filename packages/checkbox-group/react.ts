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

type CheckboxGroupProps = Omit<BaseCheckboxGroupProps, "help-text"> & {
	helpText?: string;
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
	React.createElement(BaseCheckboxGroup, {
		...props,
		...(helpText !== undefined ? { "help-text": helpText } : {}),
		ref,
	} as React.ComponentProps<typeof BaseCheckboxGroup> & {
		"help-text"?: string;
	}),
);

CheckboxGroup.displayName = "CheckboxGroup";
