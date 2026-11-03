import { html, LitElement } from "lit";
import { I18nController } from "../controllers/i18n-controller.js";
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from "../modal/util.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";

/**
 * The footer section of a modal, typically where you place actions.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 *
 * @parent w-modal
 *
 * @csspart footer - the container for slotted items (children).
 *
 * @cssprop --w-c-modal-footer-gap -  adjusts the flex gap between actions in the footer.
 */
export class WarpModalFooter extends CanCloseMixin(
	ProvidesCanCloseToSlotsMixin(LitElement),
) {
	constructor() {
		super();
		new I18nController(this);
	}

	static styles = [reset, styles];

	connectedCallback(): void {
		super.connectedCallback();

		if (!this.hasAttribute("slot")) {
			this.slot = "footer";
		}
	}

	render() {
		return html`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`;
	}
}

/** @deprecated Exported for backwards compatibility. Use WarpModalFooter. */
export const ModalFooter = WarpModalFooter;

declare global {
	interface HTMLElementTagNameMap {
		"w-modal-footer": WarpModalFooter;
	}
}

if (!customElements.get("w-modal-footer")) {
	customElements.define("w-modal-footer", WarpModalFooter);
}
