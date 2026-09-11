import { html, LitElement } from "lit";

import { reset } from "../styles.js";
import { buttonGroupComponentVariables, styles } from "./styles.js";

/**
 * A button group displays multiple buttons together.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/button-group/frameworks/elements)
 */
class WarpButtonGroup extends LitElement {
	static styles = [reset, buttonGroupComponentVariables, styles];

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
		"w-button-group": WarpButtonGroup;
	}
}

if (!customElements.get("w-button-group")) {
	customElements.define("w-button-group", WarpButtonGroup);
}

export { WarpButtonGroup };
