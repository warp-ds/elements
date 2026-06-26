import { html, LitElement } from "lit";
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
	static styles = [reset, styles];

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
