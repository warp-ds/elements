import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";
import { property } from "lit/decorators.js";

import type { WarpBreadcrumbItem } from "./breadcrumb-item.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "current-page" })
	currentPage: WarpBreadcrumbItem["currentPage"] = false;
}

/**
 * Represents one item in a `w-breadcrumbs` trail.
 * Renders the slotted label as a link when `href` is set, or as text when it is not, and adds a separator after non-current items.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/elements)
 */
export const BreadcrumbItem = createComponent({
	tagName: "w-breadcrumb-item",
	elementClass: Component as unknown as typeof WarpBreadcrumbItem,
	react: React,
});
