import { i18n } from "@lingui/core";
import { html, LitElement } from "lit";

import type { WarpButton } from "../button/button.js";
import {
	SnackbarDuration,
	type WarpSnackbarItem,
	type SnackbarVariant,
	type SnackbarActionPlacement,
} from "../snackbar-item/snackbar-item.js";
import { activateI18n } from "../i18n.js";
import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";

import { reset } from "../styles.js";
import { styles } from "./styles.js";

export type CreateSnackbarOptions = {
	/**
	 * Show a close button so users can dismiss the message early.
	 *
	 * Can not be turned off if duration is Long or more.
	 *
	 * Pass a click event handler if you need to react to clicks on the close button somehow.
	 * You can stop the message from closing by calling `event.preventDefault()`.
	 *
	 * @default true
	 */
	canClose?: boolean | ((this: GlobalEventHandlers, ev: PointerEvent) => any);
	/**
	 * Duration until the message hides automatically.
	 *
	 * If the message has an action the default `duration` is `SnackbarDuration.Long`.
	 *
	 * @default SnackbarDuration.Short
	 */
	duration?: SnackbarDuration;
	/**
	 * @default 'neutral'
	 */
	variant?: SnackbarVariant;
	/**
	 * Shows an action before the close button.
	 *
	 * Use this action as a convenience only. Ensure the result of any action in the snackbar,
	 * such as Undo, is possible to achieve elsewhere in your application.
	 */
	action?: {
		/**
		 * Keep action labels short.
		 *
		 * If the label includes a space the `placement` is set to `block` by default.
		 */
		label: string;
		/**
		 * The action button's `onclick` property.
		 */
		onclick: (this: GlobalEventHandlers, ev: PointerEvent) => any;
		/**
		 * Overrides the default placement of the action button.
		 *
		 * By default labels that are only one word are `inline` and labels with multiple words are `block`.
		 * If you have a particularly long word as a label you can set `placement: 'block'`.
		 */
		placement?: SnackbarActionPlacement;
	};
};

const defaultCreateOptions: CreateSnackbarOptions = {
	canClose: true,
	duration: SnackbarDuration.Short,
	variant: "neutral",
};

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

const spaceRe = /\s/;

/**
 * A Snackbar shows brief user feedback messages that overlay content, with an optional action such as Undo.
 *
 * Include one `<w-snackbar></w-snackbar>` in the document `<body>`. Use the `create` function to create messages.
 *
 * @example
 *
 * ```html
 * <body>
 * 	<w-snackbar></w-snackbar>
 * </body>
 * ```
 *
 * @example
 *
 * ```ts
 * // Short message indicating an operation succeeded
 * const snackbar = document.querySelector("w-snackbar");
 * const snackbarItem = snackbar.create("Settings saved", { variant: "success" });
 * ```
 *
 * @example
 *
 * ```ts
 * // An action to undo what was just done
 * const snackbar = document.querySelector("w-snackbar");
 * const snackbarItem = snackbar.create("Settings saved", {
 * 	variant: "success",
 * 	action: {
 * 		label: "Undo",
 * 		onclick: () => {
 * 			// undoSave();
 * 		},
 * 	},
 * });
 * ```
 *
 * @slot default - `w-snackbar-item` gets placed inside the default slot by the `create` function.
 *
 * @csspart container - the live region that positions messages on the screen.
 *
 * @cssprop --w-c-snackbar-container-gap
 * @cssprop --w-c-snackbar-position-bottom
 * @cssprop --w-c-snackbar-position-left
 * @cssprop --w-c-snackbar-position-right
 * @cssprop --w-c-snackbar-position-top
 * @cssprop --w-c-snackbar-z-index
 */
export class WarpSnackbar extends LitElement {
	private internals: ElementInternals;

	static styles = [reset, styles];

	constructor() {
		super();
		/**
		 * Set on internals to avoid hydration mismatches in React
		 * @internal
		 */
		this.internals = this.attachInternals();
		/** @internal */
		this.internals.ariaLive = "polite";
		/** @internal */
		this.internals.role = "log";

		this._onKeydown = this._onKeydown.bind(this);
	}

	connectedCallback(): void {
		super.connectedCallback();
		document.addEventListener("keydown", this._onKeydown);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		document.removeEventListener("keydown", this._onKeydown);
	}

	/** @internal */
	_onKeydown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			// Close only the oldest with each keypress.
			// Since we prepend when we create new items
			// the last of type is the oldest.
			const snackbarItem =
				this.shadowRoot?.host.querySelector<WarpSnackbarItem>(
					"w-snackbar-item:last-of-type",
				);
			if (snackbarItem) {
				snackbarItem.close();
			}
		} else if (e.altKey && e.key === "Enter") {
			e.preventDefault();
			const snackbarItem =
				this.shadowRoot?.host.querySelector<WarpSnackbarItem>(
					"w-snackbar-item:last-of-type",
				);
			console.log("Found item!");
			if (snackbarItem) {
				const snackbarAction = snackbarItem.querySelector<WarpButton>(
					'w-button[slot="action"]',
				);
				console.log("Found action!");
				if (snackbarAction) {
					snackbarAction.click();
					console.log("Clicked!");
				}
			}
		}
	}

	/**
	 * Creates a snackbar item and immediately adds it to the snackbar.
	 *
	 * By default the snackbar item automatically closes after 4 seconds (`SnackbarDuration.Short`).
	 *
	 * If you include an `action` in the options the default `duration` is
	 * set to 10 seconds (`SnackbarDuration.Long`) and can not be made shorter.
	 *
	 * A `duration` of 10 seconds or longer forces the close button to be visible.
	 *
	 * The default `variant` is `neutral` which does not have an icon.
	 *
	 * Set `duration` to `SnackbarDuration.Infinite` if you want a persistent message.
	 *
	 * @returns The instance of `w-snackbar-item` added to the snackbar.
	 */
	create(
		message: string,
		options: CreateSnackbarOptions = {},
	): WarpSnackbarItem {
		const mergedOptions = { ...defaultCreateOptions, ...options };

		const snackbarItem = document.createElement("w-snackbar-item");
		if (mergedOptions.duration) {
			snackbarItem.duration = mergedOptions.duration;
		}

		snackbarItem.innerText = message;

		if (mergedOptions.variant !== "neutral") {
			const icon = document.createElement("w-icon");
			icon.slot = "icon";

			switch (mergedOptions.variant) {
				case "positive":
					icon.name = "SuccessFilled";
					break;
				case "warning":
					icon.name = "WarningFilled";
					break;
				case "negative":
					icon.name = "ErrorFilled";
					break;
				case "info":
					icon.name = "InfoFilled";
					break;
			}

			snackbarItem.prepend(icon);
		}

		if (mergedOptions.action) {
			// Force a minimum duration of Long when there's an action.
			if (snackbarItem.duration < SnackbarDuration.Long) {
				snackbarItem.duration = SnackbarDuration.Long;
			}

			const actionButton = document.createElement("w-button");
			actionButton.slot = "action";
			actionButton.variant = "utilityQuiet";
			actionButton.small = true;

			const { label, onclick, placement } = mergedOptions.action;

			actionButton.innerText = label;

			const keyboardShortcut = document.createElement("span");
			keyboardShortcut.classList.add("sr-only");
			const modifier = window.navigator.userAgent.includes("Macintosh")
				? "Option"
				: "Alt";
			keyboardShortcut.innerHTML = `<kbd>${modifier}</kbd> + <kbd>Enter</kbd>`;
			actionButton.append(keyboardShortcut);

			actionButton.onclick = (e) => {
				const result = onclick.call(actionButton, e);
				if (!e.defaultPrevented) {
					snackbarItem.close();
				}
				return result;
			};

			if (placement) {
				snackbarItem.actionPlacement = placement;
			} else {
				const isLongLabel = spaceRe.test(label);
				if (isLongLabel) {
					snackbarItem.actionPlacement = "block";
				}
			}

			snackbarItem.append(actionButton);
		}

		// Force close button visibility if duration is longer than Long (in practice, Infinite)
		if (snackbarItem.duration > SnackbarDuration.Long) {
			mergedOptions.canClose = true;
		}

		if (mergedOptions.canClose) {
			const closeButton = document.createElement("w-button");
			closeButton.slot = "close";
			closeButton.variant = "utilityQuiet";
			closeButton.small = true;
			closeButton.iconOnly = true;

			if (typeof mergedOptions.canClose === "function") {
				// Let users add an onclick for example for analytics purposes
				closeButton.onclick = (e) => {
					const result = (
						mergedOptions.canClose as (
							this: GlobalEventHandlers,
							ev: PointerEvent,
						) => any
					).call(closeButton, e);
					if (!e.defaultPrevented) {
						snackbarItem.close();
					}
					return result;
				};
			} else {
				closeButton.onclick = snackbarItem.close.bind(snackbarItem);
			}

			const closeIcon = document.createElement("w-icon");
			closeIcon.name = "Close";
			closeIcon.size = "small";
			closeIcon.ariaLabel = i18n.t({
				id: "snackbar.aria.close",
				message: "Dismiss message",
				comment:
					"Accessibility label for the button that closes the snackbar/toast popup",
			});

			closeButton.append(closeIcon);
			snackbarItem.append(closeButton);
		}

		this.shadowRoot?.host.prepend(snackbarItem);

		return snackbarItem;
	}

	render() {
		return html`
			<aside part="container">
				<slot></slot>
			</aside>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-snackbar": WarpSnackbar;
	}
}

if (!customElements.get("w-snackbar")) {
	customElements.define("w-snackbar", WarpSnackbar);
}
