import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";

import type {
	SnackbarActionPlacement,
	WarpSnackbarItem,
} from "./snackbar-item.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "action-placement" })
	actionPlacement: SnackbarActionPlacement = "inline";
}

/**
 * You should probably not use this component directly. An item to show in a `w-snackbar`.
 *
 * See the `create` function on `w-snackbar` for a convenience API which helps you make snackbar items.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/snackbar/frameworks/elements)
 */
export const SnackbarItem = createComponent({
	tagName: "w-snackbar-item",
	displayName: "SnackbarItem",
	elementClass: Component as unknown as typeof WarpSnackbarItem,
	react: React,
});
