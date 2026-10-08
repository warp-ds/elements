import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpSwitch, WarpSwitchChangeEvent } from "./switch.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSwitch = createComponent({
	tagName: "w-switch",
	elementClass: Component as unknown as typeof WarpSwitch,
	react: React,
	events: {
		onChange: "change" as EventName<WarpSwitchChangeEvent>,
		onchange: "change" as EventName<WarpSwitchChangeEvent>,
	},
});

type BaseSwitchProps = React.ComponentPropsWithoutRef<typeof BaseSwitch>;

type SwitchProps = BaseSwitchProps;

/**
 * The Switch component allows users to toggle between two states.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/switch/frameworks/elements)
 */
export const Switch = React.forwardRef<WarpSwitch, SwitchProps>((props, ref) =>
	React.createElement(BaseSwitch, {
		tabIndex: 0, // make host element focusable
		...props,
		ref,
	} as React.ComponentProps<typeof BaseSwitch>),
);
