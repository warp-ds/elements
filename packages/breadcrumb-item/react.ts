import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpBreadcrumbItem } from "./breadcrumb-item.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const BreadcrumbItem = createComponent({
	tagName: "w-breadcrumb-item",
	elementClass: Component as unknown as typeof WarpBreadcrumbItem,
	react: React,
});
