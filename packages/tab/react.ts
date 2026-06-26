import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpTab } from "./tab.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTab = createComponent({
	tagName: "w-tab",
	elementClass: Component as unknown as typeof WarpTab,
	react: React,
	events: {
		onClick: "click" as EventName<PointerEvent>,
		onclick: "click" as EventName<PointerEvent>,
	},
});

type BaseTabProps = React.ComponentPropsWithoutRef<typeof BaseTab>;

type TabProps = Omit<BaseTabProps, "aria-selected"> & {
	/** An ID is required to avoid hydration issues */
	id: string;
	ariaSelected?: "true" | "false";
};

/**
 * Individual tab component used within a `<Tabs>` container.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/tabs/frameworks/elements)
 */
export const Tab = React.forwardRef<WarpTab, TabProps>(
	({ ariaSelected, ...props }, ref) =>
		React.createElement(BaseTab, {
			slot: "tabs",
			...props,
			...(ariaSelected !== undefined ? { "aria-selected": ariaSelected } : {}),
			ref,
		} as React.ComponentProps<typeof BaseTab> & {
			"aria-selected"?: "true" | "false";
		}),
);

Tab.displayName = "Tab";
