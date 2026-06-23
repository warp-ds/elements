import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpBreadcrumbs } from "./breadcrumbs.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Shows the navigation structure for the current page.
 *
 * Renders direct child links and non-link elements as a breadcrumb trail, inserts separators between items, and exposes the trail as navigation.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/elements)
 */
export const Breadcrumbs = createComponent({
	tagName: "w-breadcrumbs",
	elementClass: Component as unknown as typeof WarpBreadcrumbs,
	react: React,
});
