import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { reset } from "../styles";
import { styles } from "./styles";

/**
 * `w-badge` is used for showing a small amount of non-interactive color-categorized metadata, like a status or count.
 *
 * @slot - The content of the badge, which is typically a short string like "New" or "4".
 */
class WarpBadge extends LitElement {
	/**
	 * Controls the badge color treatment.
	 * If omitted, the badge uses neutral styling without reflecting a `variant` attribute.
	 * Accepted values are `neutral`, `info`, `positive`, `warning`, `negative`, `disabled`, `price`, and `sponsored`. If omitted, the badge uses neutral styling without reflecting a `variant` attribute.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	variant:
		| "neutral"
		| "info"
		| "positive"
		| "warning"
		| "negative"
		| "disabled"
		| "price"
		| "sponsored"
		| undefined = "neutral";

	/**
	 * Positions the badge in a corner of a parent element.
	 * Use this with a parent element that has `position: relative`. When set, the badge uses absolute positioning and adjusts its corner radii so it sits flush against the selected corner.
	 * Use this with a parent element that has `position: relative`. Accepted values are `top-left`, `top-right`, `bottom-right`, and `bottom-left`.
	 */
	@property({ type: String, reflect: true })
	position:
		"top-left" | "top-right" | "bottom-right" | "bottom-left" | undefined;

	static styles = [reset, styles];

	render() {
		return html`<div part="base"><slot></slot></div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-badge": WarpBadge;
	}
}

if (!customElements.get("w-badge")) {
	customElements.define("w-badge", WarpBadge);
}

export { WarpBadge };
