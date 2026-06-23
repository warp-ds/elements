import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpAlert } from "./alert.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * Alert is an inline component used for displaying different types of messages.
 *
 * For accessibility reasons, alert should appear close to the element that triggered it.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/alert/frameworks/elements)
 */
export const Alert = createComponent({
	tagName: "w-alert",
	elementClass: Component as unknown as typeof WarpAlert,
	react: React,
});
