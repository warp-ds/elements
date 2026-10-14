import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpButton } from "./button.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseButton = createComponent({
	tagName: "w-button",
	elementClass: Component as unknown as typeof WarpButton,
	react: React,
});

type BaseButtonProps = React.ComponentPropsWithoutRef<typeof BaseButton>;

type ButtonProps = Omit<
	BaseButtonProps,
	"full-width" | "icon-only" | "button-class"
> & {
	fullWidth?: boolean;
	iconOnly?: boolean;
	buttonClass?: string;
};

/**
 * Performs an action or renders a link with button styling.
 *
 * Use button variants to match action priority, risk, and context.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/button/frameworks/elements)
 */
export const Button = React.forwardRef<WarpButton, ButtonProps>(
	({ fullWidth, iconOnly, buttonClass, ...props }, ref) =>
		React.createElement(BaseButton, {
			role: "button",
			tabIndex: 0,
			...props,
			...(fullWidth ? { "full-width": true } : {}),
			...(iconOnly ? { "icon-only": true } : {}),
			...(buttonClass !== undefined ? { "button-class": buttonClass } : {}),
			ref,
		} as React.ComponentProps<typeof BaseButton> & {
			"full-width"?: boolean;
			"icon-only"?: boolean;
			"button-class"?: string;
		}),
);

Button.displayName = "Button";
