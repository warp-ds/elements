import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";
import { property } from "lit/decorators.js";

import type { WarpModal } from "./modal.js";

export { ModalFooter } from "../modal-footer/react.js";
// Re-export from split packages
export { ModalHeader } from "../modal-header/react.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {
	@property({ attribute: "content-id" })
	contentId?: WarpModal["contentId"];

	@property({ attribute: "ignore-backdrop-clicks" })
	ignoreBackdropClicks?: WarpModal["ignoreBackdropClicks"] = false;
}

/**
 * Modals (or dialogs) display important information that users need to acknowledge.
 *
 * If you keep the <code>open</code> state, listen to <code>onHidden</code> so you can update the state when the user clicks the backdrop, close button, or presses <kbd>Escape</kbd>.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 *
 * @example
 * ```jsx
 * const [open, setOpen] = useState(false);
 * return (
 *   <>
 *     <Button variant="primary" onClick={() => setOpen(true)}>
 *       Open modal
 *     </Button>
 *     <Modal show={open} id="example-modal-one" onHidden={() => setOpen(false)} onShown={() => setOpen(true)}>
 *       <ModalHeader title="An example modal" />
 *       <ModalContent>
 *         <p>
 *           <!-- modal content -->
 *         </p>
 *       </ModalContent>
 *       <ModalFooter>
 *         <Button variant="primary" id="modal-close-button-one" onClick={() => setOpen(false)}>
 *           OK
 *         </Button>
 *       </ModalFooter>
 *     </Modal>
 *   </>
 * );
 * ```
 */
export const Modal = createComponent({
	tagName: "w-modal",
	displayName: "Modal",
	elementClass: Component as unknown as typeof WarpModal,
	react: React,
	events: {
		onShown: "shown" as EventName<CustomEvent>,
		onshown: "shown" as EventName<CustomEvent>,
		onHidden: "hidden" as EventName<CustomEvent>,
		onhidden: "hidden" as EventName<CustomEvent>,
	},
});

/**
 * Convenience component to get a root element in the content slot of the modal.
 * No longer necessary since content without named slot assignment will be placed in the default (content) slot area.
 */
export const ModalContent = ({ ...props }) => {
	return React.createElement("div", { slot: "content", ...props });
};
