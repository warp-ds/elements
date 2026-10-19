import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";

import type { WarpPill } from "./pill.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "can-close", type: Boolean })
	canClose = false;

	@property({ attribute: "close-aria-label" })
	closeAriaLabel: string | undefined;

	@property({ attribute: "close-sr-label" })
	closeSrLabel: string | undefined;

	@property({ attribute: "open-aria-label" })
	openAriaLabel: string | undefined;

	@property({ attribute: "open-sr-label" })
	openSrLabel: string | undefined;
}

/**
 * Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/pill/frameworks/elements)
 */
export const Pill = createComponent({
	tagName: "w-pill",
	displayName: "Pill",
	elementClass: Component as unknown as typeof WarpPill,
	react: React,
	events: {
		onClick: "w-pill-click" as EventName<CustomEvent>,
		onclick: "w-pill-click" as EventName<CustomEvent>,
		onClose: "w-pill-close" as EventName<CustomEvent>,
		onclose: "w-pill-close" as EventName<CustomEvent>,
	},
});
