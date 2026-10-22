import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpLink } from "./link.js";
import { property } from "lit/decorators.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ type: Boolean, attribute: "full-width" })
	fullWidth = false;
}

/**
 * Link component to use when creating links that look like buttons.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/link/frameworks/elements)
 */
export const Link = createComponent({
	tagName: "w-link",
	displayName: "Link",
	elementClass: Component as unknown as typeof WarpLink,
	react: React,
});
