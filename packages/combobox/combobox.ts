// @warp-css;

import { i18n } from "@lingui/core";
import { FormControlMixin } from "@open-wc/form-control";
import { html, LitElement, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { I18nController } from "../controllers/i18n-controller.js";
import { activateI18n } from "../i18n.js";
import { reset } from "../styles.js";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { styles } from "./styles.js";
import { InputEventWithTarget } from "../types.js";

import "../icon/icon.js";
import "../textfield/textfield.js";
import "../tooltip/tooltip.js";

export interface ComboboxOption {
	value: string;
	label?: string;
	key?: string;
}

interface OptionWithIdAndMatch extends ComboboxOption {
	id: string;
	key: string;
	currentInputValue: string;
}

/**
 * A combobox element for text input with selectable options.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/combo-box/frameworks/elements)
 *
 * @fires {CustomEvent<{ value: string }>} select - When an option is selected
 * @fires {CustomEvent<{ value: string }>} change - When the text in the field changes
 * @fires {CustomEvent<{ value: string }>} blur - When the field loses focus
 * @fires {CustomEvent} focus - When the field gets focus, with open-on-focus
 */
export class WarpCombobox extends FormControlMixin(LitElement) {
	/**
	 * The available options to select from.
	 *
	 * Use this for framework usage, application state, or remote search results. When `options` contains entries, it is used instead of child `<option>` elements.
	 */
	@property({ type: Array })
	options: ComboboxOption[] = [];

	/**
	 * The label displayed above the input.
	 *
	 * Use this to give the combobox a visible and accessible name.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	label?: string = "";

	/**
	 * Supplementary information that should show in a tooltip behind an information icon after the label.
	 *
	 * You must provide a label to be able to show an info icon with a tooltip.
	 */
	@property({ type: String, reflect: true })
	tooltip?: string;

	/**
	 * Placeholder text displayed when the input is empty.
	 *
	 * Use this as a short hint for the expected input. Do not use placeholder text as a replacement for a label.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	placeholder?: string = "";

	/**
	 * The selected or typed value.
	 *
	 * When an option is selected, this is set to the option value. The displayed text may differ when the option has a separate label.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	value = "";

	/**
	 * Whether the option list opens when the input receives focus.
	 *
	 * Use this when users should see available options before they start typing.
	 */
	@property({ type: Boolean, attribute: "open-on-focus", reflect: true })
	openOnFocus = false;

	/**
	 * Whether the active option is selected when the input loses focus.
	 *
	 * When enabled, the combobox selects the keyboard-highlighted option, or an option whose value exactly matches the current input value, on blur.
	 *
	 * @deprecated Use `noSelectOnBlur` / `no-select-on-blur` instead. Set it to `true` to disable selection on blur.
	 */
	@property({
		type: Boolean,
		attribute: "select-on-blur",
		reflect: true,
		useDefault: true,
	})
	selectOnBlur = true;

	/**
	 * Whether automatic selection when the input loses focus is disabled.
	 *
	 * Set this to keep the typed value without selecting the highlighted or matching option on blur. Takes precedence over the deprecated `selectOnBlur` property.
	 */
	@property({ type: Boolean, attribute: "no-select-on-blur", reflect: true })
	noSelectOnBlur = false;

	/**
	 * Whether matching text segments in options are highlighted.
	 *
	 * Use this to visually emphasize the part of each option that matches the current input value.
	 */
	@property({ type: Boolean, attribute: "match-text-segments", reflect: true })
	matchTextSegments = false;

	/**
	 * Whether built-in client-side filtering is disabled.
	 *
	 * Use this for remote search or externally filtered results. When disabled, all entries in `options` are rendered as provided.
	 */
	@property({
		type: Boolean,
		attribute: "disable-static-filtering",
		reflect: true,
	})
	disableStaticFiltering = false;

	/**
	 * Whether the combobox is visually invalid.
	 *
	 * Use this to show an externally managed validation error. Pair it with `help-text` to explain how to fix the error.
	 */
	@property({ type: Boolean, reflect: true })
	invalid = false;

	/**
	 * Help text displayed below the input.
	 *
	 * Use this for supporting guidance or validation feedback.
	 */
	@property({
		type: String,
		attribute: "help-text",
		reflect: true,
		useDefault: true,
	})
	helpText?: string = "";

	/**
	 * Whether the combobox is disabled.
	 *
	 * Disabled comboboxes cannot be focused, changed, or submitted with form data.
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	/**
	 * Whether the combobox is required before form submission.
	 *
	 * Use this when the user must provide a value before submitting the form.
	 */
	@property({ type: Boolean, reflect: true })
	required = false;

	/**
	 * Whether to show optional text next to the label.
	 *
	 * Use this to indicate that the combobox is not required.
	 */
	@property({ type: Boolean, reflect: true })
	optional = false;

	/**
	 * The name submitted with the combobox value.
	 *
	 * Use this when the combobox belongs to a form and its value should be included in form data.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	name?: string = "";

	/**
	 * The autocomplete attribute passed to the internal input.
	 *
	 * Defaults to `off`. Set this when browser autocomplete should be enabled or scoped to a specific autocomplete token.
	 */
	@property({ type: String, reflect: true, useDefault: true })
	autocomplete?: string = "off";

	/** @internal Options list open boolean */
	@state()
	private _isOpen = false;

	/** @internal The option the user has navigated to with their keyboard */
	@state()
	private _navigationOption: OptionWithIdAndMatch | null = null;

	/** @internal Available options based on user's input value */
	@state()
	private _currentOptions: OptionWithIdAndMatch[] = [];

	/** @internal Options parsed from light-DOM <option> children */
	@state()
	private _lightDomOptions: ComboboxOption[] = [];

	/** @internal Unique identifier counter for options */
	@state()
	private _optionIdCounter = 0;

	/** @internal The text displayed in the input field (may differ from value when option has label) */
	@state()
	private _displayValue = "";

	static styles = [reset, styles];

	constructor() {
		super();
		new I18nController(this);
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
	}

	// capture the initial value using firstUpdated and #initialValue
	#initialValue = "";
	#lightDomObserver?: MutationObserver;

	firstUpdated() {
		this.#initialValue = this.value;
	}

	updated(changedProperties: Map<string, unknown>): void {
		if (changedProperties.has("value")) {
			this.setValue(this.value);
		}
	}

	resetFormControl(): void {
		this.value = this.#initialValue;
	}

	connectedCallback() {
		super.connectedCallback();

		this.#syncOptionsFromLightDom();

		this.#lightDomObserver = new MutationObserver(() => {
			this.#syncOptionsFromLightDom();
		});
		this.#lightDomObserver.observe(this, {
			childList: true,
			subtree: true,
			characterData: true,
			attributes: true,
			attributeFilter: ["label", "value"],
		});
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.#lightDomObserver?.disconnect();
	}

	private get _listboxId() {
		return `${this._id}-listbox`;
	}

	private get _id() {
		return "combobox";
	}

	private get _helpId() {
		return this.helpText ? `${this._id}__hint` : undefined;
	}

	private get _sourceOptions() {
		return Array.isArray(this.options) && this.options.length
			? this.options
			: this._lightDomOptions;
	}

	/** Get the display text for the navigation option or current display value */
	private get _navigationLabelOrDisplayValue() {
		if (this._navigationOption) {
			return this._navigationOption.label || this._navigationOption.value;
		}
		return this._displayValue;
	}

	/** Get the actual value for the navigation option or current value */
	private get _navigationValueOrInputValue() {
		return this._navigationOption?.value || this.value;
	}

	/** Generate options with unique IDs and match information */
	private _createOptionsWithIdAndMatch(
		options: ComboboxOption[],
		currentInputValue: string,
	): OptionWithIdAndMatch[] {
		return options.map((option, index) => ({
			...option,
			id: `${this._id}-option-${this._optionIdCounter + index}`,
			key: option.key || option.value,
			currentInputValue,
		}));
	}

	#getOptionNodes() {
		return [...this.children].filter(
			(child) => child.tagName.toLowerCase() === "option",
		) as HTMLOptionElement[];
	}

	#syncOptionsFromLightDom() {
		this._lightDomOptions = this.#getOptionNodes().map((option) => {
			const value = option.getAttribute("value") ?? "";
			const label = option.hasAttribute("label")
				? (option.getAttribute("label") ?? "")
				: (option.textContent ?? "");

			return {
				value,
				label,
				key: value,
			};
		});
	}

	/** Get ARIA text for screen readers */
	private _getAriaText(
		options: OptionWithIdAndMatch[],
		value: string,
		isOpen: boolean,
	) {
		if (!options || !isOpen) return "";

		const filteredOptionsByInputValue = options.filter((option) =>
			(option.label || option.value)
				.toLowerCase()
				.includes(value.toLowerCase()),
		);

		const pluralSuggestions = i18n._({
			id: "combobox.aria.pluralSuggestions",
			message:
				"{numSuggestions, plural, one {# suggestion} other {# suggestions}}",
			comment: "Aria text for combobox when there are one or more suggestions",
			values: { numSuggestions: filteredOptionsByInputValue.length },
		});

		const noSuggestions = i18n._({
			id: "combobox.aria.noSuggestions",
			message: "No suggestions",
			comment: "Aria text for combobox when no suggestions",
		});

		return filteredOptionsByInputValue.length
			? pluralSuggestions
			: noSuggestions;
	}

	/** Whether any modifier key is pressed; modified keys are left to the browser */
	private _hasModifier(e: KeyboardEvent) {
		return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
	}

	/** Move DOM focus to an option, opening the list if needed */
	private async _focusOption(option: OptionWithIdAndMatch | undefined) {
		if (!option) return;
		this._isOpen = true;
		this._navigationOption = option;
		await this.updateComplete;
		(this.shadowRoot?.getElementById(option.id) as HTMLElement | null)?.focus();
	}

	/** Move DOM focus back to the text input */
	private _focusInput() {
		const input = this.shadowRoot
			?.querySelector("w-textfield")
			?.shadowRoot?.querySelector("input");
		if (!input) return;
		input.focus();
		// Continue editing at the end instead of selecting the whole text
		const end = input.value.length;
		input.setSelectionRange(end, end);
	}

	/** Sync the native input with the display value after a selection */
	private _syncInputValue() {
		// Force update the textfield's internal input value with the label
		requestAnimationFrame(() => {
			const textfield = this.shadowRoot?.querySelector("w-textfield");
			const input = textfield?.shadowRoot?.querySelector("input");
			if (input) {
				input.value = this._displayValue;
			}
		});
	}

	/** Handle keyboard input in the text field */
	private _handleInputKeyDown(e: KeyboardEvent) {
		if (this._hasModifier(e)) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				this._isOpen = true;
				this._focusOption(this._currentOptions[0]);
				break;
			case "ArrowUp":
				e.preventDefault();
				this._isOpen = true;
				this._focusOption(this._currentOptions.at(-1));
				break;
			case "Enter":
				if (this._navigationOption) {
					e.preventDefault();
					this._handleSelect(this._navigationOption);
					this._syncInputValue();
				}
				this._isOpen = false;
				break;
			case "Tab":
				this._isOpen = false;
				break;
			case "Escape":
				if (this._isOpen) {
					this._isOpen = false;
				} else {
					this._handleChange("");
				}
				this._navigationOption = null;
				break;
		}
	}

	/** Handle keyboard input while focus is on an option in the list */
	private _handleListKeyDown(e: KeyboardEvent) {
		if (this._hasModifier(e)) return;

		const options = this._currentOptions;
		const lastIndex = options.length - 1;
		const currIndex = options.findIndex(
			(option) => option.id === this._navigationOption?.id,
		);

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				if (currIndex >= lastIndex) {
					// Moving past the last option returns to the text input
					this._navigationOption = null;
					this._focusInput();
				} else {
					this._focusOption(options[currIndex + 1]);
				}
				break;
			case "ArrowUp":
				e.preventDefault();
				if (currIndex <= 0) {
					// Moving past the first option returns to the text input
					this._navigationOption = null;
					this._focusInput();
				} else {
					this._focusOption(options[currIndex - 1]);
				}
				break;
			case "PageUp":
				e.preventDefault();
				this._focusOption(options[Math.max(currIndex - 10, 0)]);
				break;
			case "PageDown":
				e.preventDefault();
				this._focusOption(options[Math.min(currIndex + 10, lastIndex)]);
				break;
			case "Home":
				e.preventDefault();
				this._focusOption(options[0]);
				break;
			case "End":
				e.preventDefault();
				this._focusOption(options.at(-1));
				break;
			case "Enter":
				e.preventDefault();
				if (this._navigationOption) {
					this._handleSelect(this._navigationOption);
					this._syncInputValue();
				}
				this._focusInput();
				break;
			case "Escape":
				e.preventDefault();
				this._isOpen = false;
				this._navigationOption = null;
				this._focusInput();
				break;
			case "Tab":
				// Tab from an option (tabindex="-1") isn't reliable across browsers, so
				// let the default action continue from the input, as if Tab was pressed there.
				this._isOpen = false;
				this._focusInput();
				break;
			default:
				// First-letter navigation: move to the next option, wrapping around,
				// whose display text starts with the typed character.
				if (e.key.length === 1) {
					e.preventDefault();
					const char = e.key.toLowerCase();
					for (let step = 1; step <= options.length; step++) {
						const option = options[(currIndex + step) % options.length];
						const display = (option.label || option.value).toLowerCase();
						if (display.startsWith(char)) {
							this._focusOption(option);
							break;
						}
					}
					break;
				}
				// Backspace continues editing in the text input, starting from the shown label.
				// Focus moves before the default action, so the key lands in the input.
				if (e.key === "Backspace") {
					if (this._navigationOption) {
						this._handleChange(this._navigationLabelOrDisplayValue);
						this._navigationOption = null;
					}
					this._focusInput();
				}
				break;
		}
	}

	/** Handle option selection */
	private _handleSelect(option: OptionWithIdAndMatch) {
		this.value = option.value;
		this._displayValue = option.label || option.value;
		this.setValue(this.value);

		const selectEvent = new CustomEvent("select", {
			detail: { value: option.value },
			bubbles: true,
			composed: true,
		});
		this.dispatchEvent(selectEvent);

		this._isOpen = false;
		this._navigationOption = null;

		// Set empty states on select and clear when dynamic list
		if (this.disableStaticFiltering) {
			this._currentOptions = [];
		}
	}

	/** Handle input change */
	private _handleChange(newValue: string) {
		if (newValue === undefined) return;

		this.value = newValue;
		this._displayValue = newValue;

		const changeEvent = new CustomEvent("change", {
			detail: { value: newValue },
			bubbles: true,
			composed: true,
		});
		this.dispatchEvent(changeEvent);
	}

	/** Handle input focus */
	private _handleFocus(e: FocusEvent) {
		// filter out deprecated, duplicated event generated by w-textfield.
		// see comment in w-textfield for more details.
		if (e instanceof CustomEvent) return;
		if (!this.openOnFocus) return;
		// Focus returning from an option is not a new focus of the component
		if (this._isFocusWithin(e.relatedTarget)) return;

		const focusEvent = new CustomEvent("focus", {
			bubbles: true,
			composed: true,
		});
		this.dispatchEvent(focusEvent);

		this._isOpen = true;
	}

	/** Whether a focus target is the input or an option in this combobox */
	private _isFocusWithin(target: EventTarget | null) {
		return target instanceof Node && !!this.shadowRoot?.contains(target);
	}

	/** Handle input blur */
	private _handleBlur(e: FocusEvent) {
		// filter out deprecated, duplicated event generated by w-textfield.
		// see comment in w-textfield for more details.
		if (e instanceof CustomEvent) return;

		// Ignore focus moving between the input and the options
		if (this._isFocusWithin(e.relatedTarget)) return;

		this._isOpen = false;

		// If user has navigated to an option on blur || the input value equals one of the options' value -> select value
		if (
			this.selectOnBlur &&
			!this.noSelectOnBlur &&
			(this._navigationOption ||
				(!this._navigationOption &&
					this._currentOptions.findIndex((o) => o.value === this.value) !== -1))
		) {
			const selectedValue = this._navigationOption?.value || this.value;
			this.value = selectedValue;

			const selectEvent = new CustomEvent("select", {
				detail: { value: selectedValue },
				bubbles: true,
				composed: true,
			});
			this.dispatchEvent(selectEvent);
		}

		this._navigationOption = null;

		const blurEvent = new CustomEvent("blur", {
			detail: { value: this._navigationValueOrInputValue },
			bubbles: true,
			composed: true,
		});
		this.dispatchEvent(blurEvent);
	}

	/** Handle option click */
	private _handleOptionClick(e: MouseEvent, option: OptionWithIdAndMatch) {
		// Keep focus off the option, which is hidden once selected
		e.preventDefault();
		this._handleSelect(option);
		this._focusInput();

		// Force update the textfield's internal input value with the label
		requestAnimationFrame(() => {
			const textfield = this.shadowRoot?.querySelector("w-textfield");
			const input = textfield?.shadowRoot?.querySelector("input");
			if (input) {
				input.value = option.label || option.value;
			}
		});
	}

	/** Handle container blur */
	private _handleContainerBlur(e: FocusEvent) {
		const isClickOutsideContainer =
			!e.currentTarget ||
			!(e.currentTarget as Element).contains(e.relatedTarget as Element);
		if (isClickOutsideContainer) {
			this._isOpen = false;
		}
	}

	/** Render highlighted text match */
	private _renderTextMatch(display: string, option: OptionWithIdAndMatch) {
		if (!this.matchTextSegments) return display;

		const startIdx = display
			.toLowerCase()
			.indexOf(option.currentInputValue.toLowerCase());

		if (startIdx !== -1) {
			const endIdx = startIdx + option.currentInputValue.length;
			return html`${display.substring(0, startIdx)}<span class="font-bold"
					>${display.substring(startIdx, endIdx)}</span
				>${display.substring(endIdx)}`;
		}

		return display;
	}

	protected willUpdate(changedProperties: PropertyValues<this>) {
		const options = this._sourceOptions;
		const lightDomOptionsChanged = (
			changedProperties as Map<string, unknown>
		).has("_lightDomOptions");

		// Sync _displayValue when value or options change externally (before filtering)
		if (
			changedProperties.has("value") ||
			changedProperties.has("options") ||
			lightDomOptionsChanged
		) {
			const matchingOption = options.find((o) => o.value === this.value);
			// Only sync if this is an external value change (not from user typing)
			// We detect this by checking if _displayValue doesn't match the expected label
			const expectedDisplay = matchingOption
				? matchingOption.label || matchingOption.value
				: this.value;
			if (
				this._displayValue !== expectedDisplay &&
				this._displayValue !== this.value
			) {
				this._displayValue = expectedDisplay;
			}
			// Handle initial value or external value set
			if (!this._displayValue && this.value) {
				this._displayValue = expectedDisplay;
			}
		}

		if (
			changedProperties.has("options") ||
			lightDomOptionsChanged ||
			changedProperties.has("value") ||
			changedProperties.has("disableStaticFiltering") ||
			(changedProperties as Map<string, unknown>).has("_displayValue")
		) {
			this._optionIdCounter += options.length;

			this._currentOptions = this._createOptionsWithIdAndMatch(
				options,
				this._displayValue,
			).filter((option) =>
				!this.disableStaticFiltering
					? (option.label || option.value)
							.toLowerCase()
							.includes(this._displayValue.toLowerCase())
					: true,
			);
		}

		if (
			this.disableStaticFiltering &&
			this._currentOptions.length &&
			this._currentOptions.length === 1 &&
			!this._currentOptions.some((o) => o.value === this.value) &&
			!this._isOpen
		) {
			this._isOpen = true;
		}
	}

	render() {
		return html`
			<div part="base" @blur=${this._handleContainerBlur}>
				<w-textfield
					.value=${this._navigationLabelOrDisplayValue}
					.label=${this.label}
					.placeholder=${this.placeholder}
					.invalid=${this.invalid}
					.helpText=${this.helpText}
					.disabled=${this.disabled}
					.required=${this.required}
					.optional=${this.optional}
					.name=${this.name}
					.autocomplete="${this.autocomplete || "off"}"
					.tooltip="${this.tooltip}"
					exportparts="base:textfield-wrapper, input, mask-wrapper, mask, help-text, label, tooltip-target, tooltip, arrow, beak, hover-bridge"
					role="combobox"
					aria-autocomplete="list"
					aria-expanded=${this._isOpen && this._currentOptions.length !== 0}
					aria-controls=${this._listboxId}
					@input=${(e: InputEventWithTarget<HTMLInputElement>) => {
						// filter out deprecated, duplicated event generated by w-textfield.
						// see comment in w-textfield for more details.
						if (e instanceof CustomEvent) return;
						this._navigationOption = null;
						this._handleChange(e.target.value);
						this._isOpen = true;
					}}
					@focus=${this._handleFocus}
					@blur=${this._handleBlur}
					@keydown=${this._handleInputKeyDown}
				></w-textfield>

				<span class="sr-only" role="status">
					${this._getAriaText(
						this._currentOptions,
						this._displayValue,
						this._isOpen,
					)}
				</span>
				<ul
					part="options-list"
					id=${this._listboxId}
					role="listbox"
					?hidden=${!this._isOpen || !this._currentOptions.length}
					@keydown=${this._handleListKeyDown}
				>
					${repeat(
						this._currentOptions,
						(option) => option.key,
						(option) => {
							const display = option.label || option.value;
							return html`
								<li
									id=${option.id}
									role="option"
									aria-selected=${this._navigationOption?.id === option.id}
									tabindex="-1"
									part="option"
									@blur=${this._handleBlur}
									@mousedown=${(e: MouseEvent) =>
										this._handleOptionClick(e, option)}
								>
									${this._renderTextMatch(display, option)}
								</li>
							`;
						},
					)}
				</ul>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-combobox": WarpCombobox;
	}
}

if (!customElements.get("w-combobox")) {
	customElements.define("w-combobox", WarpCombobox);
}
