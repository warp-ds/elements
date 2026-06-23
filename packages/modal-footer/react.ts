import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpModalFooter } from "./modal-footer.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

/**
 * The footer section of a modal, typically where you place actions.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 */
export const ModalFooter = createComponent({
	tagName: "w-modal-footer",
	elementClass: Component as unknown as typeof WarpModalFooter,
	react: React,
});
