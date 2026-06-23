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

type ButtonProps = Omit<BaseButtonProps, "full-width" | "icon-only"> & {
	fullWidth?: boolean;
	iconOnly?: boolean;
};

/**
 * Performs an action or renders a link with button styling.
 *
 * Use button variants to match action priority, risk, and context.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/button/frameworks/elements)
 */
export const Button = React.forwardRef<WarpButton, ButtonProps>(
	({ fullWidth, iconOnly, ...props }, ref) =>
		React.createElement(BaseButton, {
			...props,
			...(fullWidth ? { "full-width": true } : {}),
			...(iconOnly ? { "icon-only": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseButton> & {
			"full-width"?: boolean;
			"icon-only"?: boolean;
		}),
);

Button.displayName = "Button";
