import { createComponent } from "@lit/react";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import React from "react";

import { WarpTooltip } from "./tooltip.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ useDefault: true, attribute: "for" })
	htmlFor: string = "";
}

/**
 * A tooltip is a message box that is displayed when a user hovers over or gives focus to a UI element.
 *
 * Tooltips should be used sparingly and contain succinct, supplementary information.
 *
 * @example
 * ```html
 * <Button id="my-button" aria-labelledby="my-tooltip">Hover over me</Button>
 * <Tooltip id="my-tooltip" htmlFor="my-button">I am a tooltip</Tooltip>
 * ```
 */
export const Tooltip = createComponent({
	tagName: "w-tooltip",
	displayName: "Tooltip",
	elementClass: Component as unknown as typeof WarpTooltip,
	react: React,
});
