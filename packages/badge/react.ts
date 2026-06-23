import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpBadge } from "./badge.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Badge is used for showing a small amount of non-interactive color-categorized metadata, like a status or count.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/badge/frameworks/elements)
 */
export const Badge = createComponent({
	tagName: "w-badge",
	elementClass: Component as unknown as typeof WarpBadge,
	react: React,
});
