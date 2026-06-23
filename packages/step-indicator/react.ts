import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpStepIndicator } from "./step-indicator.js";

// Re-export from split packages
export { Step } from "../step/react.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Steps are used to show progress through a process or to guide users through a multi-step task.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/steps/frameworks/elements)
 */
export const StepIndicator = createComponent({
	tagName: "w-step-indicator",
	elementClass: Component as unknown as typeof WarpStepIndicator,
	react: React,
});
