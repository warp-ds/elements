import { html, LitElement } from "lit";
import "../icon/icon.js";

import { i18n } from "@lingui/core";
import { property } from "lit/decorators.js";

import { activateI18n, detectLocale } from "../i18n";
import { reset } from "../styles.js";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { styles } from "./styles.js";

/**
 * Pill is a type of button that is often used as a filter, but can also be used as a rounded button for overlays, etc.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/pill/frameworks/elements)
 *
 * @event {CustomEvent} w-pill-click - Fires when the pill itself is clicked.
 * @event {CustomEvent} w-pill-close - Fires when the pill's close button is clicked.
 */
class WarpPill extends LitElement {
	/**
	 * Whether the pill should be removable via a close button.
	 */
	@property({ attribute: "can-close", type: Boolean })
	canClose = false;

	/**
	 * Whether the pill should be rendered as a suggestion.
	 */
	@property({ attribute: "suggestion", type: Boolean })
	suggestion = false;

	/**
	 * @deprecated Used "open-arial-label" instead.
	 */
	@property({ attribute: "open-sr-label", type: String })
	openSrLabel: string | undefined;

	/**
	 * Label read by screen readers when targeting the pill.
	 */
	@property({ attribute: "open-aria-label", type: String })
	openAriaLabel: string | undefined;

	/**
	 * @deprecated Used "close-arial-label" instead.
	 */
	@property({ attribute: "close-sr-label", type: String })
	closeSrLabel: string | undefined;

	/**
	 * Label read by screen readers when targeting the close button.
	 */
	@property({ attribute: "close-aria-label", type: String })
	closeAriaLabel: string | undefined;

	private openFilterSrText: string;
	private removeFilterSrText: string;

	static styles = [reset, styles];

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
		this.canClose = false;
		this.suggestion = false;

		this.openFilterSrText = i18n._({
			id: "pill.aria.openFilter",
			message: "Open filter",
			comment: "Fallback screen reader message for open filter",
		});

		this.removeFilterSrText = i18n._({
			id: "pill.aria.removeFilter",
			message: "Remove filter {label}",
			comment: "Fallback screen reader message for removal of the filter",
		});
	}

	private _onClick() {
		this.dispatchEvent(
			new CustomEvent("w-pill-click", { bubbles: true, composed: true }),
		);
	}

	private _onClose() {
		this.dispatchEvent(
			new CustomEvent("w-pill-close", { bubbles: true, composed: true }),
		);
	}

	connectedCallback() {
		super.connectedCallback();
		if (this.openSrLabel) {
			this.openAriaLabel = this.openSrLabel;
		}
		if (this.closeSrLabel) {
			this.closeAriaLabel = this.closeSrLabel;
		}
	}

	render() {
		return html`
			<div part="base">
				<button type="button" part="label" @click="${this._onClick}">
					<span class="sr-only"
						>${
							this.openAriaLabel ? this.openAriaLabel : this.openFilterSrText
						}</span
					>
					<slot></slot>
				</button>
				${
					this.canClose
						? html` <button
								type="button"
								part="close-button"
								@click="${this._onClose}"
							>
								<span class="sr-only"
									>${
										this.closeAriaLabel
											? this.closeAriaLabel
											: this.removeFilterSrText
									}</span
								>
								<w-icon
									name="Close"
									size="small"
									locale="${detectLocale()}"
									part="close-icon"
								></w-icon>
							</button>`
						: null
				}
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-pill": WarpPill;
	}
}

if (!customElements.get("w-pill")) {
	customElements.define("w-pill", WarpPill);
}

export { WarpPill };
