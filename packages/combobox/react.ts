import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";
import { property } from "lit/decorators.js";

import type { WarpCombobox } from "./combobox.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "open-on-focus" })
	openOnFocus: WarpCombobox["openOnFocus"] = false;

	@property({ attribute: "select-on-blur" })
	selectOnBlur: WarpCombobox["selectOnBlur"] = true;

	@property({ attribute: "match-text-segments" })
	matchTextSegments: WarpCombobox["matchTextSegments"] = false;

	@property({ attribute: "disable-static-filtering" })
	disableStaticFiltering: WarpCombobox["disableStaticFiltering"] = false;

	@property({ attribute: "help-text" })
	helpText: WarpCombobox["helpText"] = "";
}

export const Combobox = createComponent({
	tagName: "w-combobox",
	elementClass: Component as unknown as typeof WarpCombobox,
	react: React,
	events: {
		onSelect: "select" as EventName<CustomEvent<{ value: string }>>,
		onselect: "select" as EventName<CustomEvent<{ value: string }>>,
		onChange: "change" as EventName<CustomEvent<{ value: string }>>,
		onchange: "change" as EventName<CustomEvent<{ value: string }>>,
		onBlur: "blur" as EventName<CustomEvent<{ value: string }>>,
		onblur: "blur" as EventName<CustomEvent<{ value: string }>>,
		onFocus: "focus" as EventName<CustomEvent>,
		onfocus: "focus" as EventName<CustomEvent>,
	},
});
