import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import type { WarpModalFooter } from "./modal-footer.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

export const ModalFooter = createComponent({
	tagName: "w-modal-footer",
	displayName: "ModalFooter",
	elementClass: Component as unknown as typeof WarpModalFooter,
	react: React,
});
