import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";

import type { WarpPageIndicator } from "./page-indicator.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({
		type: Number,
		attribute: "selected-page",
	})
	selectedPage: number | undefined;

	@property({
		type: Number,
		attribute: "page-count",
	})
	pageCount: number | undefined;
}

/**
 * A page indicator component that displays a series of dots representing pages.
 *
 * One dot is highlighted to indicate the currently selected page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/page-indicator/frameworks/elements)
 */
export const PageIndicator = createComponent({
	tagName: "w-page-indicator",
	displayName: "PageIndicator",
	elementClass: Component as unknown as typeof WarpPageIndicator,
	react: React,
});
