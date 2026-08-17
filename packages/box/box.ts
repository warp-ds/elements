import { html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";

import { reset } from "../styles";

import { styles } from "./styles";

/**
 * Box is a layout component used for separating content areas on a page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/box/frameworks/elements)
 */
class WarpBox extends FormControlMixin(LitElement) {
	/**
	 * Makes the box bleed to the container edge.
	 * Extends the box into the horizontal gutter on narrow screens. Adds negative horizontal margins and square side corners below the small breakpoint, then restores the normal margins and rounded corners from the small breakpoint and up.
	 */
	@property({ type: Boolean, reflect: true })
	bleed = false;

	/**
	 * Shows the box as a bordered surface.
	 * Use this when the content needs a clear visual boundary from the surrounding page.
	 */
	@property({ type: Boolean, reflect: true })
	bordered = false;

	/**
	 * Shows the box with information styling.
	 * Use this for supporting informational content that should be visually separated from the surrounding page.
	 */
	@property({ type: Boolean, reflect: true })
	info = false;

	/**
	 * Shows the box with neutral styling.
	 * Use this for quiet grouped content that needs a background without strong emphasis.
	 */
	@property({ type: Boolean, reflect: true })
	neutral = false;

	/**
	 * ARIA role for the box wrapper.
	 * Defaults to a role of `region`. Set `role="none"` to override this behaviour for purely visual grouping, or set a specific role when the box has a clearer semantic purpose.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	role = "region";

	static styles = [reset, styles];

	connectedCallback(): void {
		super.connectedCallback();
		this.internals.role = this.role;
	}

	protected updated(_changedProperties: PropertyValues): void {
		super.updated(_changedProperties);
		if (_changedProperties.has("role")) {
			this.internals.role = this.role;
		}
	}

	render() {
		return html`
			<div part="base">
				<slot></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-box": WarpBox;
	}
}

if (!customElements.get("w-box")) {
	customElements.define("w-box", WarpBox);
}

export { WarpBox };
