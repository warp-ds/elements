import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";

import type { WarpPagination } from "./pagination.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ type: String, attribute: "base-url" })
	baseUrl: string | undefined;

	@property({ type: Number, attribute: "current-page" })
	currentPageNumber = 1;

	@property({ type: Number, attribute: "visible-pages" })
	visiblePages = 7;
}

/**
 * Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/pagination/frameworks/elements)
 */
export const Pagination = createComponent({
	tagName: "w-pagination",
	displayName: "Pagination",
	elementClass: Component as unknown as typeof WarpPagination,
	react: React,
	events: {
		onPageClick: "page-click" as EventName<
			CustomEvent<{ clickedPage: string | null }>
		>,
		"onpage-click": "page-click" as EventName<
			CustomEvent<{ clickedPage: string | null }>
		>,
	},
});
