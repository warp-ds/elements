import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpBox } from "./box.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Box is a layout component used for separating content areas on a page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/box/frameworks/elements)
 */
export const Box = createComponent({
	tagName: "w-box",
	elementClass: Component as unknown as typeof WarpBox,
	react: React,
});
