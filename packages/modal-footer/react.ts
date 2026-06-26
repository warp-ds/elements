import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpModalFooter } from "./modal-footer.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseModalFooter = createComponent({
	tagName: "w-modal-footer",
	elementClass: Component as unknown as typeof WarpModalFooter,
	react: React,
});

type BaseModalFooterProps = React.ComponentPropsWithoutRef<
	typeof BaseModalFooter
>;

type ModalFooterProps = BaseModalFooterProps;

/**
 * The footer section of a modal, typically where you place actions.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 */
export const ModalFooter = React.forwardRef<WarpModalFooter, ModalFooterProps>(
	({ ...props }, ref) =>
		React.createElement(BaseModalFooter, {
			slot: "footer",
			...props,
			ref,
		} as React.ComponentProps<typeof BaseModalFooter>),
);

ModalFooter.displayName = "ModalFooter";
