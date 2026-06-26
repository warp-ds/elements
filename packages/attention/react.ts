import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpAttention } from "./attention.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseAttention = createComponent({
	tagName: "w-attention",
	elementClass: Component,
	react: React,
	events: {
		onClose: "close" as EventName<CustomEvent>,
		// additionally support React v19 syntax for CE events
		onclose: "close" as EventName<CustomEvent>,
	},
});

// Derive props from BaseAttention, then merge in real element's props
type BaseProps = React.ComponentPropsWithoutRef<typeof BaseAttention>;

// Drop conflicting DOM prop `popover` and add all props back in
export type AttentionProps = Omit<
	BaseProps,
	"popover" | "can-close" | "no-arrow" | "cross-axis" | "fallback-placements"
> & { popover?: boolean } & Partial<Omit<WarpAttention, keyof HTMLElement>>;

const ForwardedAttention = React.forwardRef<WarpAttention, AttentionProps>(
	({ canClose, noArrow, crossAxis, fallbackPlacements, ...props }, ref) =>
		React.createElement(BaseAttention, {
			...props,
			...(canClose ? { "can-close": true } : {}),
			...(noArrow ? { "no-arrow": true } : {}),
			...(crossAxis ? { "cross-axis": true } : {}),
			...(fallbackPlacements !== undefined
				? { "fallback-placements": JSON.stringify(fallbackPlacements) }
				: {}),
			ref,
		} as unknown as React.ComponentProps<typeof BaseAttention> & {
			"can-close"?: boolean;
			"no-arrow"?: boolean;
			"cross-axis"?: boolean;
			"fallback-placements"?: string;
		}),
);

/**
 * Note: attention will soon be split into multiple components (tooltip, callout, popover, highlight) at which time this component will be deprecated. For now, use the `tooltip`, `callout`, `popover`, and `highlight` boolean properties to achieve the desired style and behavior.
 *
 * Attention is a versatile component for displaying contextual information and messages. It can be used for a wide range of purposes, such as tooltips, callouts, popovers, and highlights.
 *
 * The component is designed to be anchored to a trigger element, providing contextual information related to that element. It supports various placements and styling options to accommodate different use cases and design needs.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/tooltip/frameworks/elements)
 */
export const Attention =
	ForwardedAttention as unknown as React.FC<AttentionProps>;

Attention.displayName = "Attention";
