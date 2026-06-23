import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpCard } from "./card.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Card is a layout component used for separating content areas on a page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/card/frameworks/elements)
 */
export const Card = createComponent({
	tagName: "w-card",
	elementClass: Component as unknown as typeof WarpCard,
	react: React,
});
