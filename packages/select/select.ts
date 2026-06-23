// @warp-css;

import { classNames } from "@chbphone55/classnames";
import { i18n } from "@lingui/core";
import { FormControlMixin } from "@open-wc/form-control";
import { css, html, LitElement, PropertyValues, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { activateI18n, detectLocale } from "../i18n.js";
import { reset } from "../styles.js";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import { styles } from "./styles.js";
import { inputLabelStyles, inputHelpTextStyles } from "./input-styles.js";

import "../icon/icon.js";

// NOTE: Label and help-text are rendered inline using shared input styles.
// In a future major version, we could extract these into separate w-label and w-help-text components
// if we find significant reuse opportunities across non-input components.

const ccSelect = {
	base: "block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",
	default:
		"s-text s-bg pl-8 border-1 s-border-strong hover:s-border-strong-hover active:s-border-active",
	disabled:
		"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",
	invalid:
		"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",
	readOnly:
		"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",
	wrapper: "relative",
	selectWrapper:
		"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",
	chevron:
		"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",
	chevronDisabled: "opacity-25",
};

/**
 * A dropdown component for selecting a single value.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/select/frameworks/elements)
 */
export class WarpSelect extends FormControlMixin(LitElement) {
	/**
	 * Whether the element should receive focus on render.
	 *
	 * @deprecated Use the native `autofocus` attribute instead.
	 */
	@property({ attribute: "auto-focus", type: Boolean, reflect: true })
	autoFocus = false;

	/**
	 * Whether the element should receive focus on render
	 */
	@property({ type: Boolean, reflect: true })
	autofocus = false;

	/**
	 * The content displayed as the help text.
	 *
	 * Paired with `invalid` to show the text as a validation error.
	 */
	@property({ attribute: "help-text", reflect: true })
	helpText: string | undefined;

	/**
	 * Renders the field in an invalid state.
	 *
	 * Paired with `help-text` to provide feedback about the error.
	 */
	@property({ type: Boolean, reflect: true })
	invalid = false;

	/**
	 * Whether to always show a hint.
	 *
	 * @deprecated Use `help-text` instead and only set it if you want to display the help text.
	 */
	@property({ type: Boolean, reflect: true })
	always = false;

	/**
	 * The content displayed as the help text.
	 *
	 * @deprecated Use `help-text` instead.
	 */
	@property({ reflect: true })
	hint: string | undefined;

	/**
	 * The content to display as the label.
	 */
	@property({ reflect: true })
	label: string | undefined;

	/**
	 * Whether to show the optional indicator after the label.
	 */
	@property({ type: Boolean, reflect: true })
	optional = false;

	/**
	 * Renders the field in a disabled state.
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	/**
	 * Renders the field in a readonly state.
	 *
	 * @deprecated Use the native readonly attribute instead.
	 */
	@property({ attribute: "read-only", type: Boolean, reflect: true })
	readOnly = false;

	/**
	 * Renders the field in a readonly state.
	 */
	@property({ type: Boolean, reflect: true })
	readonly = false;

	@property({ attribute: false, state: true })
	private _options: Array<TemplateResult> = [];

	/**
	 * The [name](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#name) of the select when submitting the form.
	 */
	@property({ reflect: true })
	name: string | undefined;

	/**
	 * Lets you set the current value.
	 */
	@property({ reflect: true })
	value: string | undefined;

	// capture the initial value using connectedCallback and #initialValue
	#initialValue: string | undefined = undefined;
	#onPageShow = () => this.#syncFromNativeSelect();
	#lightDomObserver?: MutationObserver;

	static styles = [
		reset,
		styles,
		inputLabelStyles,
		inputHelpTextStyles,
		css`
			/* if there is an option with an empty value and it is selected */
			select:has(option[value=""][selected]),
			/* if there is an option with an empty value, and no other options are selected */
				select:has(option[value=""]):not(:has(option[selected])) {
				color: var(--w-s-color-text-placeholder);
			}
		`,
	];

	constructor() {
		super();
		activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
	}

	/**  @internal */
	resetFormControl(): void {
		this.value = this.#initialValue;
	}

	/** @internal */
	_setValue = (value: string) => {
		this.value = value;
		this.setValue(value);
	};

	#getOptionNodes() {
		return [...this.children].filter(
			(child) =>
				child.tagName.toLowerCase() === "option" ||
				child.tagName.toLowerCase() === "w-option",
		) as HTMLElement[];
	}

	#getNativeSelect() {
		return this.shadowRoot?.querySelector("select") as HTMLSelectElement | null;
	}

	#hasExplicitlySelectedOption() {
		return this.#getOptionNodes().some((option) =>
			option.hasAttribute("selected"),
		);
	}

	#syncNativeOptionSelection(nextValue: string) {
		const nativeSelect = this.#getNativeSelect();
		if (!nativeSelect) return;

		let selectedFound = false;
		for (const option of [...nativeSelect.options]) {
			const selected = !selectedFound && option.value === nextValue;
			option.selected = selected;
			option.toggleAttribute("selected", selected);
			if (selected) selectedFound = true;
		}
	}

	#syncFromNativeSelect({
		allowDefaultFirstOption = false,
	}: { allowDefaultFirstOption?: boolean } = {}) {
		const nativeSelect = this.#getNativeSelect();
		if (!nativeSelect) return;

		const nativeValue = nativeSelect.value;
		if (!nativeValue || nativeValue === this.value) return;

		// Browser default selection of first option should not become component value.
		const isLikelyBrowserDefaultSelection =
			!allowDefaultFirstOption &&
			!this.value &&
			!this.#hasExplicitlySelectedOption() &&
			nativeSelect.selectedIndex === 0;

		if (isLikelyBrowserDefaultSelection) return;

		this._setValue(nativeValue);
		this.#syncNativeOptionSelection(nativeValue);
	}

	#syncShadowOptionsFromLightDom({
		syncValueFromSelected = false,
	}: { syncValueFromSelected?: boolean } = {}) {
		const optionNodes = this.#getOptionNodes();
		let selectedValueFromLightDom: string | undefined;
		const options = optionNodes.map((child: HTMLElement) => {
			const value = child.getAttribute("value") ?? "";
			const label = child.textContent ?? "";
			const selected = child.hasAttribute("selected");
			const disabled = child.hasAttribute("disabled");

			if (
				syncValueFromSelected &&
				selectedValueFromLightDom === undefined &&
				selected
			) {
				selectedValueFromLightDom = value;
			}

			return html`<option
				value="${value}"
				?selected=${selected}
				?disabled=${disabled}
			>
				${label}
			</option>`;
		});

		this._options = options;

		if (
			syncValueFromSelected &&
			selectedValueFromLightDom !== undefined &&
			selectedValueFromLightDom !== this.value
		) {
			this._setValue(selectedValueFromLightDom);
		}
	}

	connectedCallback() {
		super.connectedCallback();

		this.#initialValue = this.value;

		// autofocus doesn't seem to behave properly in Safari and FireFox, therefore we set the focus here:
		if (this.autofocus || this.autoFocus)
			this.shadowRoot!.querySelector("select")!.focus();

		this.#syncShadowOptionsFromLightDom({ syncValueFromSelected: true });
		this.ownerDocument?.defaultView?.addEventListener(
			"pageshow",
			this.#onPageShow,
		);

		// Keep mirrored shadow options in sync with dynamic light-DOM option changes.
		this.#lightDomObserver = new MutationObserver(() => {
			this.#syncShadowOptionsFromLightDom({ syncValueFromSelected: true });
		});
		this.#lightDomObserver.observe(this, {
			childList: true,
			subtree: true,
			characterData: true,
			attributes: true,
			attributeFilter: ["selected", "disabled", "value"],
		});
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.ownerDocument?.defaultView?.removeEventListener(
			"pageshow",
			this.#onPageShow,
		);
		this.#lightDomObserver?.disconnect();
	}

	firstUpdated() {
		// Reconcile once after initial render for restored/autofilled values.
		// First, ensure the native <select> reflects the current value property
		// (which may have been set by a framework like React before first render).
		if (this.value) {
			this.#syncNativeOptionSelection(this.value);
		}
		// Then reconcile for any browser-restored or autofilled values.
		this.#syncFromNativeSelect({ allowDefaultFirstOption: false });
	}

	/**  @internal */
	formStateRestoreCallback(
		state: string | File | FormData | null,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_reason: "autocomplete" | "restore",
	) {
		if (typeof state === "string" && state) {
			this._setValue(state);
			this.#syncNativeOptionSelection(state);
			return;
		}

		this.#syncFromNativeSelect({ allowDefaultFirstOption: true });
	}

	willUpdate(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("value")) {
			this.setValue(this.value!);
		}
	}

	updated(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("value")) {
			const nativeSelect = this.#getNativeSelect();
			if (nativeSelect && nativeSelect.value !== this.value) {
				nativeSelect.value = this.value ?? "";
			}
			this.#syncNativeOptionSelection(this.value ?? "");
		}
	}

	/**  @internal */
	handleKeyDown(event: KeyboardEvent) {
		if (
			(this.readonly || this.readOnly) &&
			(event.key === " " ||
				event.key === "ArrowDown" ||
				event.key === "ArrowUp")
		) {
			event.preventDefault();
		}
		if (event.key === "Enter" && this.internals.form) {
			(this.internals.form as HTMLFormElement).requestSubmit();
			return;
		}
	}

	get #classes() {
		return classNames([
			ccSelect.base,
			!this.invalid &&
				!this.disabled &&
				!(this.readonly || this.readOnly) &&
				ccSelect.default,
			this.invalid && ccSelect.invalid,
			this.disabled && ccSelect.disabled,
			(this.readonly || this.readOnly) && ccSelect.readOnly,
		]);
	}

	get #helpTextClasses() {
		return "help-text";
	}

	get #chevronClasses() {
		return classNames([
			ccSelect.chevron,
			this.disabled && ccSelect.chevronDisabled,
		]);
	}

	get #id() {
		return "select_id";
	}

	get #helpId() {
		return this.helpText || this.hint ? `${this.#id}__hint` : undefined;
	}

	// Fire a custom 'change' event, used when the dropdown changes state.
	private onChange(event: Event) {
		const target = event.currentTarget as HTMLSelectElement;
		const nextValue = target.value;

		this._setValue(nextValue);
		this.#syncNativeOptionSelection(nextValue);

		// This CustomEvent should be deprecated and removed in the future.
		// We can't remove it outside of a SemVer major though in case users rely on this
		// instead of the native events.
		// If you're debugging why you get two calls to your event handlers,
		// this is why.
		// To avoid doing work twice check if the event is an instance of CustomEvent
		// and ignore the event:
		//   if (e instanceof CustomEvent) { return; }
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: nextValue,
				bubbles: true,
				composed: true,
			}),
		);
	}

	render() {
		return html`<div class="${ccSelect.wrapper}">
			${when(
				this.label,
				() =>
					html`<label for="${this.#id}">
						${this.label}
						${when(
							this.optional,
							() =>
								html`<span
									>${i18n._({
										id: "select.label.optional",
										message: "Optional",
										comment: "Shown behind label when marked as optional",
									})}</span
								>`,
						)}</label
					>`,
			)}
			<div class="${ccSelect.selectWrapper}">
				<select
					part="input"
					class="${this.#classes}"
					id="${this.#id}"
					?disabled=${this.disabled}
					aria-readonly="${this.readonly}"
					aria-describedby="${ifDefined(this.#helpId)}"
					aria-invalid="${ifDefined(this.invalid)}"
					aria-errormessage="${ifDefined(this.invalid && this.#helpId)}"
					@keydown=${this.handleKeyDown}
					@change=${this.onChange}
				>
					${this._options}
				</select>
				<div class="${this.#chevronClasses}">
					<w-icon
						name="ChevronDown"
						size="small"
						locale="${detectLocale()}"
						class="flex"
					></w-icon>
				</div>
			</div>
			${
				// This when() can be removed in a future major when we drop `hint` and `always`.
				// A help text should always be visible.
				when(
					this.helpText || this.always || this.invalid,
					() =>
						html`<div id="${this.#helpId}" class="${this.#helpTextClasses}">
							${this.helpText || this.hint}
						</div>`,
				)
			}
		</div>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-select": WarpSelect;
	}
}

if (!customElements.get("w-select")) {
	customElements.define("w-select", WarpSelect);
}
