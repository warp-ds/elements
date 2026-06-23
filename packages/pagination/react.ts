import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpPagination } from "./pagination.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BasePagination = createComponent({
	tagName: "w-pagination",
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

type BasePaginationProps = React.ComponentPropsWithoutRef<
	typeof BasePagination
>;

type PaginationProps = Omit<
	BasePaginationProps,
	"base-url" | "current-page" | "visible-pages"
> & {
	baseUrl?: string;
	currentPageNumber?: number;
	visiblePages?: number;
};

/**
 * Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/pagination/frameworks/elements)
 */
export const Pagination = React.forwardRef<WarpPagination, PaginationProps>(
	({ baseUrl, currentPageNumber, visiblePages, ...props }, ref) =>
		React.createElement(BasePagination, {
			...props,
			...(baseUrl !== undefined ? { "base-url": baseUrl } : {}),
			...(currentPageNumber !== undefined
				? { "current-page": currentPageNumber }
				: {}),
			...(visiblePages !== undefined ? { "visible-pages": visiblePages } : {}),
			ref,
		} as React.ComponentProps<typeof BasePagination> & {
			"base-url"?: string;
			"current-page"?: number;
			"visible-pages"?: number;
		}),
);

Pagination.displayName = "Pagination";
