import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpModalHeader } from "./modal-header.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseModalHeader = createComponent({
	tagName: "w-modal-header",
	elementClass: Component as unknown as typeof WarpModalHeader,
	react: React,
	events: {
		onBackClicked: "backClicked" as EventName<CustomEvent>,
		onbackClicked: "backClicked" as EventName<CustomEvent>,
	},
});

type BaseModalHeaderProps = React.ComponentPropsWithoutRef<
	typeof BaseModalHeader
>;

type ModalHeaderProps = Omit<BaseModalHeaderProps, "no-close"> & {
	noClose?: boolean;
};

/**
 * The header section of a modal, typically where you place the title and a close button.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 */
export const ModalHeader = React.forwardRef<WarpModalHeader, ModalHeaderProps>(
	({ noClose, ...props }, ref) =>
		React.createElement(BaseModalHeader, {
			slot: "header",
			...props,
			...(noClose ? { "no-close": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseModalHeader> & {
			"no-close"?: boolean;
		}),
);

ModalHeader.displayName = "ModalHeader";
