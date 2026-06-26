import { html, LitElement } from "lit";
import { property, query } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import {
	setup as setupScrollLock,
	teardown as teardownScrollLock,
} from "scroll-doctor";
import { reset } from "../styles.js";
import { styles } from "./styles.js";
import { ProvidesCanCloseToSlotsMixin } from "./util.js";

/**
 * Modals (or dialogs) display important information that users need to acknowledge.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/modal/frameworks/elements)
 *
 * @slot header - Typically where you would use the `w-modal-header` component.
 * @slot content - The main content of the modal.
 * @slot footer - Typically where you would use the `w-modal-footer` component, for things like actions.
 *
 * @csspart dialog - the root element inside the component (`<dialog>` element).
 * @csspart wrapper - container for all elements, direct child of `<dialog>`.
 * @csspart content - the container for the `content` slot items (children).
 *
 * @cssprop --w-c-modal-backdrop-color
 * @cssprop --w-c-modal-bg
 * @cssprop --w-c-modal-box-shadow
 * @cssprop --w-c-modal-color
 * @cssprop --w-c-modal-height
 * @cssprop --w-c-modal-max-height
 * @cssprop --w-c-modal-min-height
 * @cssprop --w-c-modal-translate-distance
 * @cssprop --w-c-modal-padding-bottom
 * @cssprop --w-c-modal-width
 */
export class WarpModal extends ProvidesCanCloseToSlotsMixin(LitElement) {
	static styles = [reset, styles];

	/**
	 * Controls if the modal should show or hide.
	 *
	 * You can also call the `open()` and `close()` methods.
	 */
	@property({ type: Boolean })
	show = false;

	/** @deprecated This ID has no effect */
	@property({ type: String, attribute: "content-id" })
	contentId: string | undefined;

	/**
	 * Ignores clicks to the backdrop when set
	 */
	@property({ type: Boolean, attribute: "ignore-backdrop-clicks" })
	ignoreBackdropClicks = false;

	@query('[part="dialog"]')
	private dialogEl!: HTMLDialogElement;

	@query('[part="wrapper"]')
	private dialogInnerEl!: HTMLElement;

	@query('[part="content"]')
	private contentEl!: HTMLElement;

	private _isClosing = false;

	constructor() {
		super();
		this.interceptEscape = this.interceptEscape.bind(this);
		this.closeOnBackdropClick = this.closeOnBackdropClick.bind(this);
		this.eventPreventer = this.eventPreventer.bind(this);
		this.modifyBorderRadius = this.modifyBorderRadius.bind(this);
	}

	connectedCallback(): void {
		super.connectedCallback();

		this.addEventListener("command", (event: Event) => {
			const command = (event as unknown as { command: string }).command;
			if (command === "--show-modal") {
				this.open();
			} else if (command === "--close" || command === "--confirm") {
				// No difference for us, but the user can listen for the same event and treat it differently
				this.close();
			}
		});
	}

	async open() {
		// Cancel any pending close animation/state to prevent spurious 'hidden' events
		this._isClosing = false;
		this.dialogEl.classList.remove("close");

		this.dialogEl.showModal();
		this.handleListeners();
		setupScrollLock(this.contentEl);
		await this.updateComplete;
		this.dispatchEvent(
			new CustomEvent("shown", { bubbles: true, composed: true }),
		);
	}

	close() {
		if (!this.dialogEl?.open) return;
		this._isClosing = true;
		this.handleListeners("removeEventListener");
		this.dialogEl.classList.add("close");
		this.dialogEl.addEventListener(
			"animationend",
			async (event: AnimationEvent) => {
				// Only handle our modal's close animation, ignore backdrop animations
				if (event.animationName !== "w-modal-out") return;
				// If close was cancelled (e.g. modal was reopened), don't proceed
				if (!this._isClosing) return;
				this.dialogEl.classList.remove("close");
				this.dialogEl.close();
				this._isClosing = false;
				teardownScrollLock();
				this.show = false;
				await this.updateComplete;
				this.dispatchEvent(
					new CustomEvent("hidden", { bubbles: true, composed: true }),
				);
			},
			{ once: true },
		);
	}

	updated(changedProperties: Map<string, unknown>) {
		if (!changedProperties.has("show")) return;

		const prev = changedProperties.get("show");

		// skip first render when default false initializes
		if (prev === undefined && this.show === false) return;

		this[this.show ? "open" : "close"]();
	}

	private handleListeners(verb = "addEventListener") {
		// HACK: escape normally fires 'cancel' but 'cancel' can only be intercepted once (browser bug/quirk)
		// @ts-expect-error It's fine, everything's fine
		document[verb]("keydown", this.interceptEscape);
		// Using 'mousedown' instead of 'click' because mouse-up events on the backdrop also trigger 'click'
		if (!this.ignoreBackdropClicks)
			// @ts-expect-error It's fine, everything's fine
			this.dialogEl[verb]("mousedown", this.closeOnBackdropClick);
		// HACK: 'close' fires once the dialog is closed, thus it's cannot animate
		// @ts-expect-error It's fine, everything's fine
		this.dialogEl[verb]("close", this.eventPreventer);
		// HACK: this might not be needed since escape is intercepted, but better to be safe
		// @ts-expect-error It's fine, everything's fine
		this.dialogEl[verb]("cancel", this.eventPreventer);
		// @ts-expect-error It's fine, everything's fine
		this.dialogInnerEl[verb]("transitionend", this.modifyBorderRadius);
	}

	private eventPreventer(evt: Event) {
		evt.preventDefault();
	}

	private closeOnBackdropClick(evt: MouseEvent) {
		if (this.dialogEl === evt.target) this.close();
	}

	private interceptEscape(evt: KeyboardEvent) {
		if (evt.key === "Escape") {
			evt.preventDefault();
			this.close();
		}
	}

	private modifyBorderRadius() {
		if (this.dialogInnerEl.scrollHeight * 1.02 > innerHeight)
			this.dialogInnerEl.style.borderRadius = "0px";
		// @ts-expect-error It's fine
		else this.dialogInnerEl.style.borderRadius = null;
	}

	render() {
		return html`
			<dialog part="dialog">
				<div part="wrapper">
					<slot name="header" @slotchange="${this.handleSlotChange}"></slot>
					<div part="content" id=${ifDefined(this.contentId)}>
						<slot name="content" @slotchange="${this.handleSlotChange}"></slot>
					</div>
					<slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
				</div>
			</dialog>
		`;
	}
}

/** @deprecated Exported for backwards compatibility. Use WarpModal. */
export const ModalMain = WarpModal;

declare global {
	interface HTMLElementTagNameMap {
		"w-modal": WarpModal;
	}
}

if (!customElements.get("w-modal")) {
	customElements.define("w-modal", WarpModal);
}
