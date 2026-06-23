import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpStep } from "./step.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Individual step component that shows a single step in a process.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/steps/frameworks/elements)
 */
export const Step = createComponent({
	tagName: "w-step",
	elementClass: Component as unknown as typeof WarpStep,
	react: React,
});
