// @warp-css;

import { classNames as classnames } from "@chbphone55/classnames";
import { i18n } from "@lingui/core";
import { FormControlMixin } from "@open-wc/form-control";
import { html, LitElement, nothing, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { reset } from "../styles.js";
import { styles } from "./styles.js";
import { inputLabelStyles, inputHelpTextStyles } from "./input-styles.js";
import { activateI18n } from "../i18n.js";
import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";

import "../icon/icon.js";
import "../tooltip/tooltip.js";

// NOTE: Label and help-text are rendered inline using shared input styles.
// In a future major version, we could extract these into separate w-label and w-help-text components
// if we find significant reuse opportunities across non-input components.

const ccInput = {
	// input classes
	base: "block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current", // true
	default:
		"border-1 s-text s-bg s-border-strong hover:s-border-strong-hover active:s-border-selected", // !isInvalid && !isDisabled && !isReadOnly
	disabled:
		"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none", // !isInvalid && isDisabled && !isReadOnly
	invalid:
		"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!", // isInvalid && !isDisabled && !isReadOnly
	readOnly: "pl-0 bg-transparent pointer-events-none", // !isInvalid && !isDisabled && isReadOnly
	placeholder: "placeholder:s-text-placeholder",
	suffix: "pr-40",
	prefix: "pl-[var(--w-prefix-width,_40px)]",
	// textarea classes
	textArea: "min-h-[42] sm:min-h-[45]",
	fixed: "resize-none",
};

/**
 * A multi-line text input with built-in form validation, auto-resizing, and styling support.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/text-area/frameworks/elements)
 */
class WarpTextarea extends FormControlMixin(LitElement) {
	/** @internal */
	static shadowRootOptions = {
		...LitElement.shadowRootOptions,
		delegatesFocus: true,
	};

	/**
	 * Keep in mind that using disabled in its current form is an anti-pattern.
	 *
	 * There will always be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons.
	 *
	 * Please consider more informative alternatives before choosing to use disabled on an element.
	 *
	 * @summary Makes the element not focusable and hides it from form submits
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	/**
	 * Mark the form field as invalid.
	 *
	 * Make sure to also set a `help-text` to help users fix the validation problem.
	 */
	@property({ type: Boolean, reflect: true })
	invalid = false;

	/**
	 * Either a `label` or an `aria-label` must be provided.
	 */
	@property({ type: String, reflect: true })
	label: string | undefined;

	/**
	 * Use in combination with `invalid` to show as a validation error message,
	 * or on its own to show a help text.
	 *
	 * @summary Description shown below the input field
	 */
	@property({ type: String, reflect: true, attribute: "help-text" })
	helpText: string | undefined;

	/**
	 * Sets the maximum number of text rows before the content starts scrolling.
	 */
	@property({ type: Number, reflect: true, attribute: "maximum-rows" })
	maxRows: number | undefined;

	/**
	 * Sets the minimum number of text rows the textarea should display
	 */
	@property({ type: Number, reflect: true, attribute: "minimum-rows" })
	minRows: number | undefined;

	/**
	 * Sets the maximum number of text rows before the content starts scrolling.
	 */
	@property({ type: Number, reflect: true, attribute: "maxlength" })
	maxLength: number | undefined;

	/**
	 * Sets the minimum number of characters for the textarea to be valid
	 */
	@property({ type: Number, reflect: true, attribute: "minlength" })
	minLength: number | undefined;

	/**
	 * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) of the input field when submitting the form
	 */
	@property({ type: String, reflect: true })
	name: string | undefined;

	/**
	 * Set a text that is shown in the textarea when it doesn't have a value.
	 *
	 * Placeholder text should not be used as a substitute for labeling the element with a visible label.
	 *
	 * @summary Shown in the textarea when it doesn't have a value
	 */
	@property({ type: String, reflect: true })
	placeholder: string | undefined;

	/**
	 * @deprecated Use the native `readonly` attribute instead
	 */
	@property({ type: Boolean, reflect: true, attribute: "read-only" })
	readOnly = false;

	/**
	 * Whether the input can be selected but not changed by the user
	 */
	@property({ type: Boolean, reflect: true })
	readonly = false;

	/**
	 * Whether user input is required on the input before form submission
	 */
	@property({ type: Boolean, reflect: true })
	required = false;

	/**
	 * Supplementary information that should show in a tooltip behind an information icon after the label.
	 *
	 * You must provide a label to be able to show an info icon with a tooltip.
	 */
	@property({ type: String, reflect: true })
	tooltip?: string;

	/**
	 * Lets you set the current value
	 */
	@property({ type: String, reflect: true })
	value: string | undefined;

	/**
	 * Show an icon behind the label indicating the field is optional
	 */
	@property({ type: Boolean, reflect: true })
	optional = false;

	@state()
	private minHeight = Number.NEGATIVE_INFINITY;

	@state()
	private maxHeight = Number.POSITIVE_INFINITY;

	@query("textarea")
	private _textarea!: HTMLTextAreaElement;

	@state()
	private _hasHelpTextSlot = false;

	get #hasHelpText() {
		return typeof this.helpText !== "undefined" || this._hasHelpTextSlot;
	}

	// capture the initial value using connectedCallback and #initialValue
	#initialValue: string | undefined = undefined;

	// Track whether the current invalid/helpText state was set by validation
	#validationActive = false;

	// Store the original helpText to restore when validation passes
	#originalHelpText: string | undefined = undefined;

	// Track whether the user has interacted with the field
	#hasInteracted = false;

	// Stores the explicit message set through setCustomValidity.
	#customValidationMessage = "";

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
	}

	updated(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("value") && typeof this.value !== "undefined") {
			this.setValue(this.value);
		}
		if (
			changedProperties.has("value") ||
			changedProperties.has("required") ||
			changedProperties.has("disabled") ||
			changedProperties.has("minLength") ||
			changedProperties.has("maxLength")
		) {
			this.#updateValidity();
		}
	}

	resetFormControl(): void {
		this.value = this.#initialValue;
		this.#hasInteracted = false;
		this.#clearValidationState();
		this.#updateValidity();
	}

	/** Returns the validation message if the textarea is invalid, otherwise an empty string */
	get validationMessage(): string {
		return this.internals.validationMessage;
	}

	/** Returns the validity state of the textarea */
	get validity(): ValidityState {
		return this.internals.validity;
	}

	/** Checks whether the textarea passes constraint validation */
	checkValidity(): boolean {
		this.#updateValidity();
		return this.internals.checkValidity();
	}

	/** Checks validity and shows the validation message if invalid */
	reportValidity(): boolean {
		this.#hasInteracted = true;
		this.#updateValidity();
		return this.internals.checkValidity();
	}

	/** Sets a custom validation message. Pass an empty string to clear. */
	setCustomValidity(message: string): void {
		this.#customValidationMessage = message;

		if (message) {
			this.#updateValidity();
			this.#setValidationState(message);
		} else {
			this.#clearValidationState();
			this.#updateValidity();
		}
	}

	/** @internal */
	#setValidationState(message: string): void {
		if (!this.#validationActive) {
			this.#originalHelpText = this.helpText;
		}
		this.#validationActive = true;
		this.invalid = true;
		this.helpText = message;
	}

	/** @internal */
	#clearValidationState(): void {
		if (this.#validationActive) {
			this.invalid = false;
			this.helpText = this.#originalHelpText;
			this.#originalHelpText = undefined;
			this.#validationActive = false;
		}
	}

	/** @internal */
	#updateValidity(): void {
		if (!this._textarea) {
			return;
		}

		// Skip validation if disabled
		if (this.disabled) {
			this.internals.setValidity({});
			this.#clearValidationState();
			return;
		}

		const validity = this._textarea.validity;
		const value = this.value ?? this._textarea.value ?? "";
		const tooShort =
			value.length > 0 &&
			typeof this.minLength === "number" &&
			value.length < this.minLength;
		const tooLong =
			typeof this.maxLength === "number" && value.length > this.maxLength;
		const flags: ValidityStateFlags = {
			valueMissing: validity.valueMissing,
			tooShort: validity.tooShort || tooShort,
			tooLong: validity.tooLong || tooLong,
			customError: this.#customValidationMessage !== "",
		};

		if (Object.values(flags).some(Boolean)) {
			const message = this.#getValidationMessage(flags, value.length);

			this.internals.setValidity(flags, message, this._textarea);

			if (this.#hasInteracted) {
				this.#setValidationState(message);
			}

			return;
		}

		this.internals.setValidity({});
		this.#clearValidationState();
	}

	#getValidationMessage(
		flags: ValidityStateFlags,
		currentLength: number,
	): string {
		if (flags.customError && this.#customValidationMessage) {
			return this.#customValidationMessage;
		}

		if (flags.valueMissing) {
			return i18n._({
				id: "textarea.validation.valueMissing",
				message: "Please fill out this field.",
				comment: "Validation message shown when textarea value is required",
			});
		}

		if (flags.tooShort && typeof this.minLength === "number") {
			return i18n._({
				id: "textarea.validation.tooShort",
				message:
					"Please lengthen this text to {minLength} characters or more (you are currently using {currentLength} characters).",
				comment: "Validation message shown when textarea value is too short",
				values: { minLength: this.minLength, currentLength },
			});
		}

		if (flags.tooLong && typeof this.maxLength === "number") {
			return i18n._({
				id: "textarea.validation.tooLong",
				message:
					"Please shorten this text to {maxLength} characters or less (you are currently using {currentLength} characters).",
				comment: "Validation message shown when textarea value is too long",
				values: { maxLength: this.maxLength, currentLength },
			});
		}

		return i18n._({
			id: "textarea.validation.invalid",
			message: "Please enter a valid value.",
			comment: "Fallback validation message for textarea",
		});
	}

	static styles = [reset, styles, inputLabelStyles, inputHelpTextStyles];

	/** @internal */
	get _textareaStyles() {
		return classnames([
			ccInput.base,
			ccInput.textArea,
			!!this.placeholder && ccInput.placeholder,
			!this.invalid &&
				!this.disabled &&
				!(this.readonly || this.readOnly) &&
				ccInput.default,
			this.invalid &&
				!this.disabled &&
				!(this.readonly || this.readOnly) &&
				ccInput.invalid,
			!this.invalid &&
				this.disabled &&
				!(this.readonly || this.readOnly) &&
				ccInput.disabled,
			!this.invalid &&
				!this.disabled &&
				(this.readonly || this.readOnly) &&
				ccInput.readOnly,
			this.maxRows && ccInput.fixed,
		]);
	}

	/** @internal */
	get _helptextstyles() {
		return "help-text";
	}

	/** @internal */
	get _helpId() {
		if (this.#hasHelpText) return `${this._id}__hint`;
		return undefined;
	}

	/** @internal */
	get _id() {
		return "textarea";
	}

	/** @internal */
	get _error() {
		if (this.invalid && this._helpId) return this._helpId;
		return undefined;
	}

	async connectedCallback() {
		super.connectedCallback();
		this.#initialValue = this.value;
		if (typeof this.value !== "undefined") {
			this.setValue(this.value);
		}

		// Listen for invalid event on the host element (fired by form validation)
		this.addEventListener("invalid", this.#handleInvalid);

		await this.updateComplete;
		if (this.value || this.minRows) {
			// If the component starts with a value or minHeight,
			// resize it automatically to show all the content, or maxHeight.
			const textarea = this.shadowRoot?.querySelector("textarea");
			if (textarea) {
				this.#resize(textarea);
			}
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("invalid", this.#handleInvalid);
	}

	firstUpdated(changedProperties: PropertyValues<this>) {
		super.firstUpdated(changedProperties);
		// Initialize validity after the shadow DOM is ready
		this.#updateValidity();
	}

	handler(e: InputEvent) {
		const target = e.currentTarget as HTMLTextAreaElement;
		this.value = target.value;

		this.#resize(target);
	}

	/**
	 * See:
	 *  - https://github.com/warp-ds/elements/issues/722
	 *  - https://github.com/lit/lit-element/issues/922
	 *  - https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
	 *  - https://pm.dartus.fr/posts/2021/shadow-dom-and-event-propagation/
	 */
	#redispatch(e: Event) {
		// @ts-expect-error The constructor is there and usable
		this.dispatchEvent(new e.constructor(e.type, e));
	}

	/** @internal */
	#handleBlur() {
		this.#hasInteracted = true;
		this.#updateValidity();
	}

	/** @internal */
	#handleInvalid = (e: Event) => {
		// Prevent browser's native validation bubble
		e.preventDefault();
		// Mark as interacted and show validation state
		this.#hasInteracted = true;
		this.#updateValidity();
	};

	/** Calculate the new height for the area on input */
	#resize(target: HTMLTextAreaElement) {
		const style = getComputedStyle(target);
		const borderTopWidth = Number.parseFloat(
			style.getPropertyValue("border-top-width"),
		);
		const borderBottomWidth = Number.parseFloat(
			style.getPropertyValue("border-bottom-width"),
		);
		const lineHeight = Number.parseFloat(style.getPropertyValue("line-height"));
		const topPadding = Number.parseFloat(style.getPropertyValue("padding-top"));
		const bottomPadding = Number.parseFloat(
			style.getPropertyValue("padding-bottom"),
		);
		const offset =
			topPadding + bottomPadding + borderBottomWidth + borderTopWidth;

		if (this.minRows) {
			this.minHeight = lineHeight * this.minRows + offset;
		}
		if (this.maxRows) {
			this.maxHeight = lineHeight * this.maxRows + offset;
		}

		const borderBoxHeight =
			target.scrollHeight + borderTopWidth + borderBottomWidth;
		const height = Math.min(
			this.maxHeight,
			Math.max(this.minHeight, borderBoxHeight),
		);
		target.style.setProperty("height", height + "px");
	}

	helpTextSlotChange() {
		const el = this.renderRoot.querySelector(
			"slot[name=help-text]",
		) as HTMLSlotElement;
		this._hasHelpTextSlot = el.assignedElements().length > 0;
	}

	render() {
		return html`
			${this.label
				? html`
						<label for="${this._id}">
							${this.label}
							${this.optional && !this.required
								? html`
										<span>
											${i18n._({
												id: "textarea.label.optional",
												message: "Optional",
												comment:
													"Shown behind label when marked as optional",
											})}
										</span>
									`
								: nothing}
							${this.tooltip
								? html`
										<button
											id="tooltip-target"
											part="tooltip-target"
											aria-describedby="tooltip"
										>
											<w-icon name="Info" size="small"></w-icon>
										</button>
										<w-tooltip
											for="tooltip-target"
											id="tooltip"
											exportparts="tooltip, arrow, beak, hover-bridge"
										>
											${this.tooltip}
										</w-tooltip>
									`
								: nothing}
						</label>
					`
				: nothing}
			<textarea
				part="input"
				id="${this._id}"
				class="${this._textareaStyles}"
				name="${ifDefined(this.name)}"
				placeholder="${ifDefined(this.placeholder)}"
				.value="${this.value || ""}"
				aria-describedby="${ifDefined(
					this._helpId ||
						(this.ariaDescription ? "aria-description" : undefined),
				)}"
				aria-errormessage="${ifDefined(this._error)}"
				aria-invalid=${ifDefined(this.invalid ? "true" : undefined)}
				maxlength="${ifDefined(this.maxLength)}"
				minlength="${ifDefined(this.minLength)}"
				?disabled="${this.disabled}"
				?readonly="${this.readonly || this.readOnly}"
				?required="${this.required}"
				@input="${this.handler}"
				@blur="${this.#handleBlur}"
				@change="${this.#redispatch}"
			>
			</textarea>
			<div
				?hidden=${!this.#hasHelpText}
				class="${this._helptextstyles}"
				id="${ifDefined(this._helpId)}"
			>
				${this.helpText}
				<slot @slotchange="${this.helpTextSlotChange}" name="help-text"></slot>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-textarea": WarpTextarea;
	}
}

if (!customElements.get("w-textarea")) {
	customElements.define("w-textarea", WarpTextarea);
}

export { WarpTextarea };
