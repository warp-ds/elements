import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpButtonGroup } from "./button-group.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * A button group displays multiple buttons together.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/button-group/frameworks/elements)
 */
export const ButtonGroup = createComponent({
	tagName: "w-button-group",
	elementClass: Component as unknown as typeof WarpButtonGroup,
	react: React,
});
