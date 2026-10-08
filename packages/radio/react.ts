import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpRadio } from "./radio.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseRadio = createComponent({
	tagName: "w-radio",
	elementClass: Component as unknown as typeof WarpRadio,
	react: React,
});

type BaseRadioProps = React.ComponentPropsWithoutRef<typeof BaseRadio>;

export type RadioProps = BaseRadioProps;

/**
 * Radios allow users to select a single option from a list of choices.
 *
 * Wrap individual radio components in a radio group.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/radio/frameworks/elements)
 */
export const Radio = BaseRadio;
Radio.displayName = "Radio";
