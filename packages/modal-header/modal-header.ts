import { Move } from "@itsy/animate/move";
import { i18n } from "@lingui/core";
import { html, LitElement, nothing, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import "../icon/icon.js";

import { activateI18n, detectLocale } from "../i18n.js";
import { messages as daMessages } from "../modal/locales/da/messages.mjs";
import { messages as enMessages } from "../modal/locales/en/messages.mjs";
import { messages as fiMessages } from "../modal/locales/fi/messages.mjs";
import { messages as nbMessages } from "../modal/locales/nb/messages.mjs";
import { messages as svMessages } from "../modal/locales/sv/messages.mjs";
import { CanCloseMixin } from "../modal/util.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";

/**
 * The header section of a modal, typically where you place the title and a close button.
 *
 * @parent w-modal
 *
 * @slot top - Customize the title bar, for example to have a header image that reaches the modal's edges. See the With Image story for an example.
 */
export class WarpModalHeader extends CanCloseMixin(LitElement) {
	static styles = [reset, styles];

	/**
	 * A short but descriptive title for the modal
	 */
	@property({ type: String })
	title!: string;

	/**
	 * Whether the modal header should have a back button
	 */
	@property({ type: Boolean })
	back = false;

	/**
	 * Lets you hide the close button in the header
	 */
	@property({ type: Boolean, attribute: "no-close" })
	noClose = false;

	@state()
	private _hasTopContent = false;

	@query('[part="title"]')
	private titleEl!: HTMLElement;

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
	}

	async willUpdate(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("back")) {
			if (!this.titleEl) return;
			const move = new Move(this.titleEl);
			move.when(async () => {
				await this.updateComplete;
			});
		}
	}

	private emitBack() {
		this.dispatchEvent(
			new CustomEvent("backClicked", { bubbles: true, composed: true }),
		);
	}

	private handleTopSlotChange(slotEvent: Event) {
		const topContent = (slotEvent.target as HTMLSlotElement).assignedElements({
			flatten: true,
		});
		this._hasTopContent = !!topContent.length;
	}

	render() {
		const showBackButton = this.back && !this._hasTopContent; // Not showing back button when there is a top image
		const showCloseButton = !this.noClose;

		return html`
			<div
				part="header"
				?show-top=${this._hasTopContent}
				?show-back=${showBackButton}
				?show-close=${showCloseButton}
			>
				<slot
					part="top"
					name="top"
					@slotchange=${this.handleTopSlotChange}
				></slot>

				${showBackButton
					? html`<w-button
							type="button"
							part="back"
							title=""
							aria-label="${i18n._({
								id: "modal.aria.back",
								message: "Back",
								comment: "Aria label for the back button in modal",
							})}"
							variant="pill"
							icon-only
							@click="${this.emitBack}"
						>
							<w-icon
								name="ArrowLeft"
								size="small"
								locale="${detectLocale()}"
							></w-icon>
						</w-button>`
					: nothing}

				<p part="title">${this.title}</p>

				${showCloseButton
					? html`<w-button
							type="button"
							part="close"
							title=""
							aria-label="${i18n._({
								id: "modal.aria.close",
								message: "Close",
								comment: "Aria label for the close button in modal",
							})}"
							variant="pill"
							icon-only
							@click="${this.close}"
						>
							<w-icon
								name="Close"
								size="small"
								locale="${detectLocale()}"
								style="height: 16px;"
								class="flex"
							></w-icon>
						</w-button>`
					: nothing}
			</div>
		`;
	}
}

/** @deprecated Exported for backwards compatibility. Use WarpModalHeader. */
export const ModalHeader = WarpModalHeader;

if (!customElements.get("w-modal-header")) {
	customElements.define("w-modal-header", WarpModalHeader);
}
