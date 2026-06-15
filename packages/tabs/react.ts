import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpTabs, WarpTabsChangeEvent } from "./tabs.js";

// Re-export from split packages
export { Tab } from "../tab/react.js";
export { TabPanel } from "../tab-panel/react.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTabs = createComponent({
	tagName: "w-tabs",
	elementClass: Component as unknown as typeof WarpTabs,
	react: React,
	events: {
		onChange: "change" as EventName<WarpTabsChangeEvent>,
		onchange: "change" as EventName<WarpTabsChangeEvent>,
	},
});

type BaseTabsProps = React.ComponentPropsWithoutRef<typeof BaseTabs>;

type TabProps = BaseTabsProps & {
	/** The ID for the active tab is required to avoid hydration issues */
	active: string;
};

/**
 * To avoid hydration errors always provide IDs to both the Tab and TabPanel components,
 * and set the active tab to the first tab ID on the Tabs component.
 *
 * @example
 * ```tsx
 * <Tabs active="tab1">
 * 	<Tab id="tab1" htmlFor="panel1">First</Tab>
 * 	<Tab id="tab2" htmlFor="panel2">Second</Tab>
 * 	<Tab id="tab3" htmlFor="panel3">Third</Tab>
 * 	<TabPanel id="panel1"><p>First panel content</p></TabPanel>
 * 	<TabPanel id="panel2"><p>Second panel content</p></TabPanel>
 * 	<TabPanel id="panel3"><p>Third panel content</p></TabPanel>
 * </Tabs>
 * ```
 */
export const Tabs = React.forwardRef<WarpTabs, TabProps>(({ ...props }, ref) =>
	React.createElement(BaseTabs, {
		...props,
		ref,
	} as React.ComponentProps<typeof BaseTabs>),
);

Tabs.displayName = "Tabs";
