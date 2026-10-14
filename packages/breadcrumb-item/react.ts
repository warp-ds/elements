import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpBreadcrumbItem } from "./breadcrumb-item.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Represents one item in a `w-breadcrumbs` trail.
 * Renders the slotted label as a link when `href` is set, or as text when it is not, and adds a separator after non-current items.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/breadcrumbs/frameworks/elements)
 */
export const BaseBreadcrumbItem = createComponent({
	tagName: "w-breadcrumb-item",
	elementClass: Component as unknown as typeof WarpBreadcrumbItem,
	react: React,
});

type BaseBreadcrumbItemProps = React.ComponentPropsWithoutRef<typeof BaseBreadcrumbItem>;

type BreadcrumbItemProps = Omit<BaseBreadcrumbItemProps, "current-page"> & {
	currentPage?: boolean;
};

export const BreadcrumbItem = React.forwardRef<WarpBreadcrumbItem, BreadcrumbItemProps>(
	({ currentPage, ...props }, ref) =>
		React.createElement(BaseBreadcrumbItem, {
			...props,
			...(currentPage ? { "current-page": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseBreadcrumbItem> & {
			"current-page"?: boolean;
		}),
);

BreadcrumbItem.displayName = "BreadcrumbItem";