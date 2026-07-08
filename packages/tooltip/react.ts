import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpTooltip } from "./tooltip.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTooltip = createComponent({
	tagName: "w-tooltip",
	elementClass: Component as unknown as typeof WarpTooltip,
	react: React,
});

type BaseTooltipProps = React.ComponentPropsWithoutRef<typeof BaseTooltip>;

type TooltipProps = BaseTooltipProps & {
	htmlFor?: string;
};

/**
 * A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.
 *
 * Tooltips should be used sparingly and contain succinct, supplementary information.
 *
 * @example
 * ```html
 * <Button id="my-button" aria-labelledby="my-tooltip">Hover over me</Button>
 * <Tooltip id="my-tooltip" htmlFor="my-button">I am a tooltip</Tooltip>
 * ```
 */
export const Tooltip = React.forwardRef<WarpTooltip, TooltipProps>(
	({ htmlFor, ...props }, ref) =>
		React.createElement(BaseTooltip, {
			for: htmlFor,
			...props,
			ref,
		} as React.ComponentProps<typeof BaseTooltip>),
);

Tooltip.displayName = "Tooltip";
