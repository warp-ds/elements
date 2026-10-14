import { i18n } from "@lingui/core";
import { html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import "../icon/icon.js";

import { activateI18n, detectLocale } from "../i18n.js";
import { reset } from "../styles.js";
import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { styles } from "./styles.js";

export interface StepsContext {
	horizontal?: boolean;
	right?: boolean;
}

/**
 * Individual step component that shows a single step in a process.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/steps/frameworks/elements)
 *
 * @parent w-step-indicator
 */
export class WarpStep extends LitElement {
	/**
	 * Whether this step is active.
	 *
	 * The active step displays a filled indicator.
	 */
	@property({ type: Boolean, reflect: true })
	active = false;

	/**
	 * Whether this step is completed.
	 *
	 * Completed steps display a checkmark icon and a filled indicator.
	 */
	@property({ type: Boolean, reflect: true })
	completed = false;

	@state()
	private _context: StepsContext = {
		horizontal: false,
		right: false,
	};

	private _internals: ElementInternals;

	static styles = [reset, styles];

	constructor() {
		super();
		this._internals = this.attachInternals();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
	}

	connectedCallback() {
		super.connectedCallback();
		// Use ElementInternals for ARIA to avoid hydration mismatches
		this._internals.role = "listitem";
	}

	setContext(context: StepsContext) {
		this._context = context;
	}

	getAriaLabel() {
		if (this.completed) {
			return i18n._({
				id: "steps.aria.completed",
				message: "Step indicator completed circle",
				comment: "Completed circle",
			});
		}
		if (this.active) {
			return i18n._({
				id: "steps.aria.active",
				message: "Step indicator active circle",
				comment: "Active circle",
			});
		}
		return i18n._({
			id: "steps.aria.emptyCircle",
			message: "Empty circle",
			comment: "Empty circle",
		});
	}

	render() {
		const { horizontal, right } = this._context;

		return html`
			<div
				part="base"
				data-orientation="${horizontal ? "horizontal" : "vertical"}"
				data-align="${right ? "right" : "left"}"
			>
				${horizontal ? html`<div part="line-horizontal"></div>` : nothing}
				<div
					part="dot"
					role="img"
					aria-label=${this.getAriaLabel()}
					aria-current=${ifDefined(this.active ? "step" : undefined)}
				>
					${
						this.completed
							? html`<w-icon
									name="Check"
									size="small"
									locale="${detectLocale()}"
									data-testid="completed-icon"
									part="completed-icon"
								></w-icon>`
							: nothing
					}
				</div>
				<div part="line"></div>
				<div part="content">
					<slot></slot>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-step": WarpStep;
	}
}

if (!customElements.get("w-step")) {
	customElements.define("w-step", WarpStep);
}
