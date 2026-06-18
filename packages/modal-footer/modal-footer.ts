import { css, html, LitElement } from "lit";
import { CanCloseMixin, ProvidesCanCloseToSlotsMixin } from "../modal/util.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";

/**
 * The footer section of a modal, typically where you place actions.
 *
 * @parent w-modal
 */
export class WarpModalFooter extends CanCloseMixin(
	ProvidesCanCloseToSlotsMixin(LitElement),
) {
	static styles = [reset, styles];
	
	render() {
		return html`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`;
	}
}

/** @deprecated Exported for backwards compatibility. Use WarpModalFooter. */
export const ModalFooter = WarpModalFooter;

if (!customElements.get("w-modal-footer")) {
	customElements.define("w-modal-footer", WarpModalFooter);
}
