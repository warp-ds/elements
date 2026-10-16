import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpDatepicker } from "./datepicker.js";
import type { ChangeEventWithTarget, InputEventWithTarget } from "../types.js";
import { property } from "lit/decorators.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "header-format" })
	headerFormat: WarpDatepicker["headerFormat"] = "MMMM yyyy";

	@property({ attribute: "weekday-format" })
	weekdayFormat: WarpDatepicker["weekdayFormat"] = "EEEEEE";

	@property({ attribute: "day-format" })
	dayFormat: WarpDatepicker["dayFormat"] = "PPPP";

	@property({ attribute: false })
	isDayDisabled: WarpDatepicker["isDayDisabled"];

	@property({ attribute: "help-text" })
	helpText: WarpDatepicker["helpText"];
}

export const DatePicker = createComponent({
	tagName: "w-datepicker",
	elementClass: Component as unknown as typeof WarpDatepicker,
	react: React,
	events: {
		onChange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
		onchange: "change" as EventName<ChangeEventWithTarget<HTMLInputElement>>,
		onBlur: "blur" as EventName<FocusEvent>,
		onblur: "blur" as EventName<FocusEvent>,
		onInput: "input" as EventName<InputEventWithTarget<HTMLInputElement>>,
		oninput: "input" as EventName<InputEventWithTarget<HTMLInputElement>>,
	},
});
