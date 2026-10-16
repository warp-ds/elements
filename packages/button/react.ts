import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";
import { property } from "lit/decorators.js";

import type { WarpButton } from "./button.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	// We need to declare a property on the stub when either applies:
	// - Its attribute name differs from its property name, such as fullWidth → full-width. (see fullWidth, iconOnly, buttonClass below)
	// - Its value needs JavaScript property assignment, such as functions, objects, arrays, or element references. (see commandForElement below)
	@property({ attribute: "full-width" })
	fullWidth: WarpButton["fullWidth"] = false;

	@property({ attribute: "icon-only" })
	iconOnly: WarpButton["iconOnly"] = false;

	@property({ attribute: false })
	commandForElement: WarpButton["commandForElement"];

	// @deprecated
	@property({ attribute: "button-class" })
	buttonClass: WarpButton["buttonClass"];
}

export const Button = createComponent({
	tagName: "w-button",
	elementClass: Component as unknown as typeof WarpButton,
	react: React,
});
