import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpSwitch, WarpSwitchChangeEvent } from "./switch.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const Switch = createComponent({
	tagName: "w-switch",
	displayName: "Switch",
	elementClass: Component as unknown as typeof WarpSwitch,
	react: React,
	events: {
		onChange: "change" as EventName<WarpSwitchChangeEvent>,
		onchange: "change" as EventName<WarpSwitchChangeEvent>,
	},
});
