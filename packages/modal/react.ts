import { createComponent, EventName } from "@lit/react";
import { LitElement } from "lit";
import React from "react";

import { WarpModal } from "./modal.js";

export { ModalFooter } from "../modal-footer/react.js";
// Re-export from split packages
export { ModalHeader } from "../modal-header/react.js";

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseModal = createComponent({
	tagName: "w-modal",
	elementClass: Component as unknown as typeof WarpModal,
	react: React,
	events: {
		onShown: "shown" as EventName<CustomEvent>,
		onshown: "shown" as EventName<CustomEvent>,
		onHidden: "hidden" as EventName<CustomEvent>,
		onhidden: "hidden" as EventName<CustomEvent>,
	},
});

type BaseModalProps = React.ComponentPropsWithoutRef<typeof BaseModal>;

type ModalProps = Omit<
	BaseModalProps,
	"content-id" | "ignore-backdrop-clicks"
> & {
	contentId?: string;
	ignoreBackdropClicks?: boolean;
};

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
 *       <ModalHeader slot="header" title="An example modal" />
 *       <div slot="content">
 *         <p>
 *           <!-- modal content -->
 *         </p>
 *       </div>
 *       <ModalFooter slot="footer">
 *         <Button variant="primary" id="modal-close-button-one" onClick={() => setOpen(false)}>
 *           OK
 *         </Button>
 *       </ModalFooter>
 *     </Modal>
 *   </>
 * );
 * ```
 */
export const Modal = React.forwardRef<WarpModal, ModalProps>(
	({ contentId, ignoreBackdropClicks, ...props }, ref) =>
		React.createElement(BaseModal, {
			...props,
			...(contentId !== undefined ? { "content-id": contentId } : {}),
			...(ignoreBackdropClicks ? { "ignore-backdrop-clicks": true } : {}),
			ref,
		} as React.ComponentProps<typeof BaseModal> & {
			"content-id"?: string;
			"ignore-backdrop-clicks"?: boolean;
		}),
);

Modal.displayName = "Modal";
