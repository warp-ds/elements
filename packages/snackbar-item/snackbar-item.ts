import { html, LitElement } from "lit";
import { property, query, state } from "lit/decorators.js";

import { collapse, expand } from "../utils/element-collapse.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";

export type SnackbarVariant =
	| "positive"
	| "warning"
	| "negative"
	| "info"
	| "neutral";

export type SnackbarActionPlacement = "inline" | "block";

export enum SnackbarDuration {
	Short = 4_000,
	Long = 10_000,
	Infinite = 120_000_000,
}

/**
 * An item to show in a `w-snackbar`.
 *
 * See the `create` function on `w-snackbar` for a convenience API which helps you make snackbar items.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/snackbar/frameworks/elements)
 *
 * @parent w-snackbar
 *
 * @slot default - the snackbar message.
 * @slot icon - icon preceeding the message.
 * @slot action - action following the message.
 *
 * @csspart item - the container wrapping the message, icon and actions.
 * @csspart icon - the icon for the variant.
 * @csspart message - the default slot, body of the snackbar item.
 * @csspart action - close and action button.
 *
 * @cssprop --w-c-snackbar-item-radius
 * @cssprop --w-c-snackbar-item-max-width
 * @cssprop --w-c-snackbar-item-min-width
 * @cssprop --w-c-snackbar-item-padding
 *
 * @cssprop --w-c-snackbar-item-bg
 * @cssprop --w-c-snackbar-item-action-bg-active
 * @cssprop --w-c-snackbar-item-action-bg-hover
 *
 * @cssprop --w-c-snackbar-item-color
 * @cssprop --w-c-snackbar-item-action-color-active
 * @cssprop --w-c-snackbar-item-action-color-hover
 *
 * @cssprop --w-c-snackbar-item-box-shadow
 */
export class WarpSnackbarItem extends LitElement {
	static styles = [reset, styles];

	/**
	 * The placement of the action and close buttons.
	 */
	@property({ attribute: "action-placement", reflect: true, useDefault: true })
	actionPlacement: SnackbarActionPlacement = "inline";

	/**
	 * How long the message should stay in the document before removing itself.
	 */
	@property({ type: Number, reflect: true, useDefault: true })
	duration: number = SnackbarDuration.Short;

	@query(".animation-wrapper")
	private root!: HTMLDivElement | null;

	@state()
	private hasAction = false;

	#expanded = false;

	#durationLeft: number = SnackbarDuration.Short;

	#lastFocused: HTMLElement | null = null;

	// TODO How to expose the timer in an accessible maner, both visually and to assistive technologies? https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role + a progress bar style thing?
	#timer: ReturnType<typeof setTimeout> | null = null;

	#timerPaused = false;

	connectedCallback(): void {
		super.connectedCallback();

		if (this.duration !== SnackbarDuration.Infinite) {
			const updateFrequencyMs = 1000;

			// Subtract one updateFrequencyMs, otherwise the full
			// duration would be duration + updateFrequencyMs.
			this.#durationLeft = this.duration - updateFrequencyMs;

			this.#timer = setInterval(() => {
				if (this.#timerPaused) return;

				this.#durationLeft -= updateFrequencyMs;

				if (this.#durationLeft <= 0) {
					this.close();
				}
			}, updateFrequencyMs);
		}
	}

	disconnectedCallback(): void {
		if (this.#timer) {
			clearInterval(this.#timer);
		}
	}

	async updated(): Promise<void> {
		if (!this.root) return; // should never happen

		// Once widely available, replace with https://developer.chrome.com/docs/css-ui/animate-to-height-auto
		if (!this.#expanded) {
			// we need to measure including the height of the child
			// components which aren't ready yet and have 0x0 dimensions,
			// wait for the update to finish
			await this.updateComplete;
			expand(this.root, () => {
				this.#expanded = true;
			});
		}
	}

	/**
	 * Remove the snackbar item from the document.
	 *
	 * Moves focus to the last focused element outside of the snackbar item, if available.
	 */
	close(): void {
		if (this.#lastFocused) {
			this.#lastFocused.focus();
		}
		if (this.#expanded && this.root) {
			collapse(this.root, () => {
				this.remove();
			});
		} else {
			this.remove();
		}
	}

	/**
	 * Listen to focusin, not focus, as focus does not bubble.
	 *
	 * We're interested in running code when an action button gets focus,
	 * such as pausing the countdown and storing the last focused element
	 * outside of the snackbar so we can return there when it closes.
	 *
	 * Only save the first instance of `relatedTarget` so we don't overwrite
	 * it when focus moves from an action button to the close button.
	 */
	#onFocusIn(e: FocusEvent) {
		if (!this.#lastFocused) {
			this.#timerPaused = true;
			if (e.relatedTarget && (e.relatedTarget as HTMLElement).focus) {
				this.#lastFocused = e.relatedTarget as HTMLElement;
			}
		}
	}

	/**
	 * Listen to focusout, not blur, as blur does not bubble.
	 *
	 * Unpause the countdown by clearing this.#lastFocused
	 * if the focus is moving outside of the snackbar item.
	 */
	#onFocusOut(e: FocusEvent) {
		const snackbarItemLostFocus =
			!e.relatedTarget ||
			!this.shadowRoot?.host.contains(e.relatedTarget as HTMLElement);
		if (snackbarItemLostFocus) {
			this.#timerPaused = false;
			this.#lastFocused = null;
		}
	}

	#onMouseEnter() {
		this.#timerPaused = true;
	}

	#onMouseLeave() {
		// Unpause unless we still have keyboard focus
		if (!this.#lastFocused) {
			this.#timerPaused = false;
		}
	}

	#hasAction() {
		const actionSlot = this.shadowRoot?.querySelector<HTMLSlotElement>(
			'slot[name="action"]',
		);
		if (!actionSlot) return false;
		const assignedElements = actionSlot.assignedElements();
		return assignedElements.length > 0;
	}

	protected firstUpdated() {
		// The slot must render before we can check its contents, hence the run on firstUpdated
		this.hasAction = this.#hasAction();
	}

	render() {
		if (
			this.hasAction &&
			document.documentElement.dataset.wKeyboardinteraction === "true"
		) {
			const modifier = window.navigator.userAgent.includes("Macintosh")
				? "⌥"
				: "Alt";
			return html`
				<w-attention tooltip placement="top" distance="12" show>
					<div class="animation-wrapper" slot="target">
						<div
							part="item"
							@mouseenter=${this.#onMouseEnter}
							@mouseleave=${this.#onMouseLeave}
							@focusin=${this.#onFocusIn}
							@focusout=${this.#onFocusOut}
						>
							<div part="icon">
								<slot name="icon"></slot>
							</div>
							<div part="message">
								<slot></slot>
							</div>
							<div part="action">
								<slot name="action"></slot>
								<slot name="close"></slot>
							</div>
						</div>
					</div>
					<!-- The keyboard shortcut is announced as part of the action button label -->
					<span slot="message" aria-hidden="true">
						<kbd>${modifier}</kbd> + <kbd>Enter</kbd>
					</span>
				</w-attention>
			`;
		}
		return html`
			<div class="animation-wrapper">
				<div
					part="item"
					@mouseenter=${this.#onMouseEnter}
					@mouseleave=${this.#onMouseLeave}
					@focusin=${this.#onFocusIn}
					@focusout=${this.#onFocusOut}
				>
					<div part="icon">
						<slot name="icon"></slot>
					</div>
					<div part="message">
						<slot></slot>
					</div>
					<div part="action">
						<slot name="action"></slot>
						<slot name="close"></slot>
					</div>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-snackbar-item": WarpSnackbarItem;
	}
}

if (!customElements.get("w-snackbar-item")) {
	customElements.define("w-snackbar-item", WarpSnackbarItem);
}
