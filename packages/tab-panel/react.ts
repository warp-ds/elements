import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpTabPanel } from "./tab-panel.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTabPanel = createComponent({
	tagName: "w-tab-panel",
	elementClass: Component as unknown as typeof WarpTabPanel,
	react: React,
});

type TabPanelProps = React.ComponentPropsWithoutRef<typeof BaseTabPanel>;

export const TabPanel = React.forwardRef<WarpTabPanel, TabPanelProps>(
	({ ...props }, ref) =>
		React.createElement(BaseTabPanel, {
			slot: "panels",
			...props,
			ref,
		} as React.ComponentProps<typeof BaseTabPanel>),
);

TabPanel.displayName = "TabPanel";
