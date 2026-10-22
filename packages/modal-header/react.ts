import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";
import { property } from "lit/decorators.js";

import type { WarpModalHeader } from "./modal-header.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "content-id" })
	noClose?: WarpModalHeader["noClose"] = false;
}

/**
 * The header section of a modal, typically where you place the title and a close button.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 */
export const ModalHeader = createComponent({
	tagName: "w-modal-header",
	displayName: "ModalHeader",
	elementClass: Component as unknown as typeof WarpModalHeader,
	react: React,
	events: {
		onBackClicked: "backClicked" as EventName<CustomEvent>,
		onbackClicked: "backClicked" as EventName<CustomEvent>,
	},
});
