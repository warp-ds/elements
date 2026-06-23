import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpSlider } from "./slider.js";

// Re-export from split packages
export { SliderThumb } from "../slider-thumb/react.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSlider = createComponent({
	tagName: "w-slider",
	elementClass: Component as unknown as typeof WarpSlider,
	react: React,
});

type BaseSliderProps = React.ComponentPropsWithoutRef<typeof BaseSlider>;

type SliderProps = Omit<
	BaseSliderProps,
	"open-ended" | "help-text" | "hidden-textfield"
> & {
	openEnded?: boolean;
	helpText?: string;
	hiddenTextfield?: boolean;
};

/**
 * Parent component for sliders (both single and range sliders). Used in combination with a `<SliderThumb>`.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/slider/frameworks/elements)
 */
export const Slider = React.forwardRef<WarpSlider, SliderProps>(
	({ openEnded, helpText, hiddenTextfield, ...props }, ref) =>
		React.createElement(BaseSlider, {
			...props,
			...(openEnded ? { "open-ended": true } : {}),
			...(helpText !== undefined ? { "help-text": helpText } : {}),
			...(hiddenTextfield ? { "hidden-textfield": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseSlider> & {
			"open-ended"?: boolean;
			"help-text"?: string;
			"hidden-textfield"?: boolean;
		}),
);

Slider.displayName = "Slider";
