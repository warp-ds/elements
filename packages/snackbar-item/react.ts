import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type {
	SnackbarActionPlacement,
	WarpSnackbarItem,
} from "./snackbar-item.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSnackbarItem = createComponent({
	tagName: "w-snackbar-item",
	elementClass: Component as unknown as typeof WarpSnackbarItem,
	react: React,
});

type BaseSnackbarItemProps = React.ComponentPropsWithoutRef<
	typeof BaseSnackbarItem
>;

type SnackbarItemProps = Omit<BaseSnackbarItemProps, "action-placement"> & {
	actionPlacement?: SnackbarActionPlacement;
};

/**
 * You should probably not use this component directly. An item to show in a `w-snackbar`.
 *
 * See the `create` function on `w-snackbar` for a convenience API which helps you make snackbar items.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/snackbar/frameworks/elements)
 */
export const SnackbarItem = React.forwardRef<
	WarpSnackbarItem,
	SnackbarItemProps
>(({ actionPlacement, ...props }, ref) =>
	React.createElement(BaseSnackbarItem, {
		...props,
		...(actionPlacement ? { "action-placement": actionPlacement } : {}),
		ref,
	}),
);
