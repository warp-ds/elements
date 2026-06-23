import { i18n } from "@lingui/core";
import { css, html, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";

import { activateI18n } from "../i18n.js";
import { reset } from "../styles.js";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { styles } from "./styles.js";

const keys = {
	ENTER: "Enter",
	SPACE: " ",
};

/**
 * Card is a layout component used for grouping interactive content areas on a page.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/card/frameworks/elements)
 */
class WarpCard extends LitElement {
	static styles = [
		reset,
		styles,
		css`
			a::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}
			:host {
				display: block;
			}
		`,
	];

	/**
	 * Whether the card is visually selected.
	 *
	 * Use this when the card represents a selected item or choice. This only controls the visual selected state; update it from your application state when the selection changes.
	 */
	@property({ type: Boolean, reflect: true })
	selected = false;

	/**
	 * Whether the card uses the flat visual treatment.
	 *
	 * Flat cards use a bordered surface instead of the default elevated surface. Use this for denser layouts or when the card sits inside another surface.
	 */
	@property({ type: Boolean })
	flat = false;

	/**
	 * Whether the whole card is interactive.
	 *
	 * When set, the card becomes keyboard focusable and Enter or Space triggers a click on the card. Use this only when the whole card has one action or represents one selectable choice.
	 */
	@property({ type: Boolean })
	clickable = false;

	private buttonText: string;

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

		this.buttonText = i18n._({
			id: "card.button.text",
			message: "Select",
			comment: "Screenreader message to indicate that the card is clickable",
		});
	}

	keypressed(e: KeyboardEvent) {
		if (!this.clickable || e.altKey || e.ctrlKey) return;
		if (e.key === keys.ENTER || e.key === keys.SPACE) {
			e.preventDefault();
			this.click();
		}
	}

	render() {
		return html`
			<div
				part="base"
				tabindex=${ifDefined(this.clickable ? "0" : undefined)}
				@keydown=${this.keypressed}
			>
				<div part="border"></div>
				${this.clickable
					? html`<button
							class="sr-only"
							aria-pressed="${this.selected}"
							tabindex="-1"
						>
							${this.buttonText}
						</button>`
					: this.selected
						? html`<span
								class="sr-only"
								role="checkbox"
								aria-checked="true"
								aria-disabled="true"
							></span>`
						: nothing}
				<slot></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-card": WarpCard;
	}
}

if (!customElements.get("w-card")) {
	customElements.define("w-card", WarpCard);
}

export { WarpCard };
