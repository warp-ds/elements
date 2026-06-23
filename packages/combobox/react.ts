import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpCombobox } from "./combobox.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseCombobox = createComponent({
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

type BaseComboboxProps = React.ComponentPropsWithoutRef<typeof BaseCombobox>;

type ComboboxProps = Omit<
	BaseComboboxProps,
	| "open-on-focus"
	| "select-on-blur"
	| "match-text-segments"
	| "disable-static-filtering"
	| "help-text"
> & {
	openOnFocus?: boolean;
	selectOnBlur?: boolean;
	matchTextSegments?: boolean;
	disableStaticFiltering?: boolean;
	helpText?: string;
};

/**
 * A combobox element for text input with selectable options.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/combo-box/frameworks/elements)
 */
export const Combobox = React.forwardRef<WarpCombobox, ComboboxProps>(
	(
		{
			openOnFocus,
			selectOnBlur,
			matchTextSegments,
			disableStaticFiltering,
			helpText,
			...props
		},
		ref,
	) =>
		React.createElement(BaseCombobox, {
			...props,
			...(openOnFocus ? { "open-on-focus": true } : {}),
			...(selectOnBlur ? { "select-on-blur": true } : {}),
			...(matchTextSegments ? { "match-text-segments": true } : {}),
			...(disableStaticFiltering ? { "disable-static-filtering": true } : {}),
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			ref,
		} as React.ComponentProps<typeof BaseCombobox> & {
			"open-on-focus"?: boolean;
			"select-on-blur"?: boolean;
			"match-text-segments"?: boolean;
			"disable-static-filtering"?: boolean;
			"help-text"?: string;
		}),
);

Combobox.displayName = "Combobox";
