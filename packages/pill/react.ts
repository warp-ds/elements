import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpPill } from "./pill.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BasePill = createComponent({
	tagName: "w-pill",
	elementClass: Component as unknown as typeof WarpPill,
	react: React,
	events: {
		onClick: "w-pill-click" as EventName<CustomEvent>,
		onclick: "w-pill-click" as EventName<CustomEvent>,
		onClose: "w-pill-close" as EventName<CustomEvent>,
		onclose: "w-pill-close" as EventName<CustomEvent>,
	},
});

type BasePillProps = React.ComponentPropsWithoutRef<typeof BasePill>;

type PillProps = Omit<
	BasePillProps,
	| "can-close"
	| "open-sr-label"
	| "open-aria-label"
	| "close-sr-label"
	| "close-aria-label"
> & {
	canClose?: boolean;
	openSrLabel?: string;
	openAriaLabel?: string;
	closeSrLabel?: string;
	closeAriaLabel?: string;
};

/**
 * Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/pill/frameworks/elements)
 */
export const Pill = React.forwardRef<WarpPill, PillProps>(
	(
		{
			canClose,
			openSrLabel,
			openAriaLabel,
			closeSrLabel,
			closeAriaLabel,
			...props
		},
		ref,
	) =>
		React.createElement(BasePill, {
			...props,
			...(canClose ? { "can-close": true } : {}),
			...(openSrLabel !== undefined ? { "open-sr-label": openSrLabel } : {}),
			...(openAriaLabel !== undefined
				? { "open-aria-label": openAriaLabel }
				: {}),
			...(closeSrLabel !== undefined ? { "close-sr-label": closeSrLabel } : {}),
			...(closeAriaLabel !== undefined
				? { "close-aria-label": closeAriaLabel }
				: {}),
			ref,
		} as React.ComponentProps<typeof BasePill> & {
			"can-close"?: boolean;
			"open-sr-label"?: string;
			"open-aria-label"?: string;
			"close-sr-label"?: string;
			"close-aria-label"?: string;
		}),
);

Pill.displayName = "Pill";
