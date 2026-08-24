import { i18n } from "@lingui/core";
import { FormControlMixin } from "@open-wc/form-control";
import { html, LitElement, nothing, PropertyValues } from "lit";
import { property } from "lit/decorators.js";

import { activateI18n } from "../i18n";
import "../link/link.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { reset } from "../styles.js";
import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { wButtonStyles } from "./styles.js";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "negative"
	| "negativeQuiet"
	| "utility"
	| "pill"
	| "link"
	| "quiet"
	| "utilityQuiet"
	| "overlay"
	| "overlayInverted"
	| "overlayQuiet"
	| "overlayInvertedQuiet";

const variants: ButtonVariant[] = [
	"primary",
	"secondary",
	"negative",
	"negativeQuiet",
	"utility",
	"pill",
	"link",
	"quiet",
	"utilityQuiet",
	"overlay",
	"overlayInverted",
	"overlayQuiet",
	"overlayInvertedQuiet",
];

export type ButtonType = "button" | "submit" | "reset";

/**
 * Performs an action or renders a link with button styling.
 *
 * Use button variants to match action priority, risk, and context.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/button/frameworks/elements)
 */
class WarpButton extends FormControlMixin(LitElement) {
	static styles = [reset, wButtonStyles];

	/**
	 * Button type.
	 * Controls whether the internal button behaves as a regular button, submits a form, or resets a form. Defaults to `button`.
	 */
	@property({ reflect: true, useDefault: true })
	type: ButtonType = "button";

	/**
	 * Focuses the button when it is first rendered.
	 * Applies only when the component renders as a button (as opposed to an anchor/link). Link buttons with `href` do not autofocus through this component.
	 */
	@property({ type: Boolean, reflect: true })
	autofocus = false;

	/**
	 * Visual style of the button.
	 * Defaults to `secondary`. Use the variant that matches the action priority, risk, and placement.
	 */
	@property({ reflect: true, useDefault: true })
	variant: ButtonVariant = "secondary";

	/**
	 * Deprecated quiet visual treatment flag
	 * Use `variant="quiet"` instead.
	 *
	 * @deprecated Use `variant="quiet"` instead
	 */
	@property({ type: Boolean, reflect: true })
	quiet = false;

	/**
	 * Marks the button as icon-only.
	 * Use this when the button has no visible text. Include accessible text in the slotted content so the internal button has a name.
	 */
	@property({ type: Boolean, reflect: true, attribute: "icon-only" })
	iconOnly = false;

	/**
	 * Renders the compact button size.
	 * Use this in dense layouts where the default button size is too large.
	 */
	@property({ type: Boolean, reflect: true })
	small = false;

	/**
	 * Shows the loading state.
	 * Use after the user has triggered an action and the action is in progress.
	 */
	@property({ type: Boolean, reflect: true })
	loading = false;

	/**
	 * URL for rendering the button as a link.
	 * When set, the component renders `w-link` instead of a button.
	 */
	@property({ reflect: true })
	href: string | undefined;

	/**
	 * Link browsing context.
	 * Passed to the rendered link when `href` is set.
	 */
	@property({ reflect: true })
	target: string | undefined;

	/**
	 * Visually disables the button.
	 * Disabled buttons are discouraged because they can hide the reason an action is unavailable.
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	/**
	 * Link relationship.
	 * Passed to the rendered link when `href` is set. If `target="_blank"` is set and `rel` is omitted, `noopener` is used.
	 */
	@property({ reflect: true })
	rel: string | undefined;

	/**
	 * Makes the button fill its parent width.
	 * Useful in narrow layouts where the button should span the available inline space.
	 */
	@property({ attribute: "full-width", type: Boolean, reflect: true })
	fullWidth = false;

	/**
	 * Deprecated class applied to the internal control
	 * This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the button appearance.
	 *
	 * @deprecated This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the appearance of the button.
	 */
	@property({ attribute: "button-class", reflect: true })
	buttonClass: string | undefined;

	/**
	 * Form control name.
	 * Used when the button participates in form handling.
	 */
	@property({ reflect: true })
	name: string | undefined;

	/**
	 * Form control value.
	 * Used with `name` when the button participates in form handling. Resets to its initial value when the form is reset.
	 */
	@property({ reflect: true })
	value: string | undefined;

	/**
	 * The [commandfor HTML attribute](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#html_attributes) for Invoker Commands.
	 */
	@property()
	commandfor: string | undefined;

	@property()
	commandForElement: HTMLElement | null | undefined;

	/**
	 * The [command HTML attribute](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#html_attributes) for Invoker Commands.
	 */
	@property()
	command: string | undefined;

	private ariaValueTextLoading: string;

	// capture the initial value using connectedCallback and #initialValue
	#initialValue: string | undefined = undefined;

	/**
	 * We want to emulate native button behavior which fires click listeners when space is
	 * pressed and released on the same element. To avoid emulating click only on keyup,
	 * keep track of whether we got a keydown-event. This value must reset on blur.
	 */
	#gotSpaceKeydownAndNoBlur = false;

	get #ariaDescription(): string | undefined {
		// let users override our default description
		if (this.ariaDescription) {
			return this.ariaDescription;
		}

		if (this.variant === "primary") {
			return i18n.t({
				id: "button.aria.primaryDescription",
				message: "Highlighted",
				comment:
					"Short (preferably a single word) description indicating to screen reader users that this button is visually highlighted",
			});
		}

		if (this.variant === "negative" || this.variant === "negativeQuiet") {
			return i18n.t({
				id: "button.aria.negativeDescription",
				message: "Attention",
				comment:
					"Short (preferably a single word) description indicating to screen reader users that this button tries to get the user's attention",
			});
		}

		return undefined;
	}

	updated(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("value")) {
			this.setValue(this.value!);
		}
	}

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

		this.ariaValueTextLoading = i18n.t({
			id: "button.aria.loading",
			message: "Loading...",
			comment: "Screen reader message for buttons that are loading",
		});
	}

	connectedCallback() {
		super.connectedCallback();

		const effectiveVariant = this.variant || "secondary";
		if (!variants.includes(effectiveVariant)) {
			throw new Error(
				`Invalid "variant" attribute. Set its value to one of the following:\n${variants.join(", ")}.`,
			);
		}

		if (!this.href && !this.hasAttribute("role")) {
			// Using this.internals for role breaks Playwright locators.
			// Set in connectedCallback to avoid a role attribute when we render w-link.
			this.setAttribute("role", "button");
		}
		if (!this.href && !this.hasAttribute("tabindex")) {
			this.setAttribute("tabindex", "0");
		}

		this.internals.ariaDescription = this.#ariaDescription;

		this.addEventListener("click", this._handleButtonClick);
		this.addEventListener("blur", () => {
			this.#gotSpaceKeydownAndNoBlur = false;
		});
		this.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				this.click(); // call this.click so user-provided click handlers get triggered
			}

			if (e.key === " ") {
				// Stop Space from scrolling.
				e.preventDefault();
				// Mark the button as active while space is held.
				// We don't get access to the :active pseudo class when interacting with a keyboard unfortunately.
				this.dataset.active = "true";
				this.#gotSpaceKeydownAndNoBlur = true;
			}
		});

		this.addEventListener("keyup", (e) => {
			if (e.key === " ") {
				delete this.dataset.active;
				if (this.#gotSpaceKeydownAndNoBlur) {
					this.click(); // call this.click so user-provided click handlers get triggered
				}
				this.#gotSpaceKeydownAndNoBlur = false;
			}
		});

		this.#initialValue = this.value;
	}

	/**
	 * Traverse up the shadow roots looking for the ID to support use inside other Lit components.
	 */
	private closestWithId(id: string): HTMLElement | null {
		let root: ShadowRoot | null = this.shadowRoot;
		let el: HTMLElement | null;
		try {
			while (root) {
				el = root.getElementById(id);
				if (el) return el;

				root = (
					root.getRootNode() as ShadowRoot
				).host?.getRootNode() as ShadowRoot | null;
			}
		} catch {
			// Do nothing
		}
		return document.getElementById(id);
	}

	firstUpdated() {
		if (this.autofocus && !this.href) {
			setTimeout(() => this.focus(), 0);
		}
		if (this.commandfor) {
			this.commandForElement = this.closestWithId(this.commandfor);
		}
	}

	private _handleButtonClick() {
		if (this.disabled) return;

		if (this.type === "submit") {
			this.internals.form.requestSubmit();
		} else if (this.type === "reset") {
			this.internals.form.reset();
		}

		if (
			this.command &&
			this.commandForElement &&
			"CommandEvent" in globalThis
		) {
			const commandEvent = new CommandEvent("command", {
				command: this.command,
			});
			this.commandForElement.dispatchEvent(commandEvent);
		}
	}

	resetFormControl(): void {
		this.value = this.#initialValue;
	}

	render() {
		const variant = this.variant || "secondary";
		return html` ${
			this.href
				? html`
						<w-link
							href=${this.href}
							target=${this.target}
							variant=${this.quiet ? "quiet" : variant}
							?small=${this.small}
							?loading=${this.loading}
							?autofocus=${this.autofocus}
							?full-width=${this.fullWidth}
							class=${this.buttonClass}
							rel=${this.target === "_blank" ? this.rel || "noopener" : undefined}
							aria-description=${ifDefined(this.#ariaDescription)}
						>
							<slot></slot>
						</w-link>
					`
				: html`
						<span part="base" class=${ifDefined(this.buttonClass)}>
							<slot></slot>
						</span>
					`
		}
		${
			this.loading
				? html`<span
						class="sr-only"
						role="progressbar"
						aria-valuenow="0"
						aria-valuetext=${this.ariaValueTextLoading}
					></span>`
				: nothing
		}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-button": WarpButton;
	}
}

if (!customElements.get("w-button")) {
	customElements.define("w-button", WarpButton);
}

export { WarpButton };
