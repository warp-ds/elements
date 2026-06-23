import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpSliderThumb } from "./slider-thumb.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSliderThumb = createComponent({
	tagName: "w-slider-thumb",
	elementClass: Component as unknown as typeof WarpSliderThumb,
	react: React,
	events: {
		onSliderValidity: "slidervalidity" as EventName<
			CustomEvent<{ invalid: string; slot: string }>
		>,
		"onslider-validity": "slidervalidity" as EventName<
			CustomEvent<{ invalid: string; slot: string }>
		>, // should be slider-validity
	},
});

type BaseSliderThumbProps = React.ComponentPropsWithoutRef<
	typeof BaseSliderThumb
>;

type SliderThumbProps = Omit<
	BaseSliderThumbProps,
	"aria-label" | "aria-description"
> & {
	ariaLabel?: string;
	ariaDescription?: string;
};

/**
 * Component to place inside a `<Slider>`.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/slider/frameworks/elements)
 */
export const SliderThumb = React.forwardRef<WarpSliderThumb, SliderThumbProps>(
	({ ariaLabel, ariaDescription, ...props }, ref) =>
		React.createElement(BaseSliderThumb, {
			...props,
			...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {}),
			...(ariaDescription !== undefined
				? { "aria-description": ariaDescription }
				: {}),
			ref,
		} as React.ComponentProps<typeof BaseSliderThumb> & {
			"aria-label"?: string;
			"aria-description"?: string;
		}),
);

SliderThumb.displayName = "SliderThumb";
