import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { I18nController } from "../controllers/i18n-controller.js";
import type { WarpStep } from "../step/step.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";

/**
 * Steps are used to show progress through a process or to guide users through a multi-step task.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/steps/frameworks/elements)
 */
export class WarpStepIndicator extends LitElement {
	constructor() {
		super();
		new I18nController(this);
	}

	/**
	 * Display steps horizontally instead of vertically
	 */
	@property({ type: Boolean, reflect: true })
	horizontal = false;

	/**
	 * Align steps to the right (vertical layout only)
	 */
	@property({ type: Boolean, reflect: true })
	right = false;

	static styles = [reset, styles];

	updated() {
		this.updateStepsContext();
	}

	/**
	 * @internal
	 */
	updateStepsContext() {
		// Provide context to child step elements
		const steps = this.querySelectorAll<WarpStep>("w-step");
		steps.forEach((step) => {
			step.setContext({
				horizontal: this.horizontal,
				right: this.right,
			});
		});
	}

	render() {
		return html`
			<div role="list" part="base">
				<slot></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-step-indicator": WarpStepIndicator;
	}
}

if (!customElements.get("w-step-indicator")) {
	customElements.define("w-step-indicator", WarpStepIndicator);
}
