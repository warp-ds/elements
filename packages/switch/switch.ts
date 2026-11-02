import { FormControlMixin } from "@open-wc/form-control";
import { html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators.js";

import { I18nController } from "../controllers/i18n-controller.js";
import { reset } from "../styles";
import { styles } from "./styles.js";

export type WarpSwitchChangeEvent = CustomEvent<{
	checked: boolean;
	value: string | null;
}>;

/**
 * The Switch component allows users to toggle between two states.
 *
 * [Warp component reference](https://warp-ds.github.io/docs/components/switch/frameworks/elements)
 *
 * @event {WarpSwitchChangeEvent} change - Dispatched when the switch toggles. Includes boolean `checked` and string/null `value` on `details`.
 */
export class WarpSwitch extends FormControlMixin(LitElement) {
	constructor() {
		super();
		new I18nController(this);
	}

	/**
	 * Name used when submitting an HTML form.
	 */
	@property({ type: String, reflect: true })
	name!: string;

	/**
	 * Value submitted when the switch is checked.
	 *
	 * The component reports `null` as the value in the `change` event when `value` is an empty string.
	 */
	@property({ type: String, reflect: true })
	value!: string;

	/**
	 * Whether the switch is on (checked).
	 */
	@property({ type: Boolean, reflect: true })
	checked = false;

	/**
	 * Whether the switch is disabled.
	 */
	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Number, reflect: true, attribute: "tabindex" })
	tabIndex: number = 0;

	#initialState = false;

	static styles = [reset, styles];

	/** @internal */
	_handleClick() {
		if (this.disabled) return;
		this.checked = !this.checked;
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked, value: this.value || null },
				bubbles: true,
				composed: true,
			}),
		);
	}

	/** @internal */
	_handleKeyDown = (event: KeyboardEvent) => {
		if (this.disabled) return;
		if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
			return;

		if (event.key === " " || event.key === "Enter") {
			event.preventDefault();
			this._handleClick();
		}
	};

	/** @internal */
	_syncA11yState() {
		// Use ElementInternals for ARIA state - works with real AT,
		// avoids hydration mismatches from client-side attribute changes
		this.internals.ariaChecked = this.checked ? "true" : "false";
		this.internals.ariaDisabled = this.disabled ? "true" : null;
	}

	connectedCallback(): void {
		this.#initialState = this.checked;
		super.connectedCallback();

		// Use ElementInternals for role - works with real AT,
		// avoids hydration mismatches from client-side attribute changes
		this.internals.role = "switch";

		// Sync aria-label to internals (keep attribute for hydration compatibility)
		const ariaLabel = this.getAttribute("aria-label");
		if (ariaLabel) {
			this.internals.ariaLabel = ariaLabel;
		}

		if (!this.disabled) {
			this.setValue(this.checked && this.value ? this.value : null);
		}

		this._syncA11yState();
		this.addEventListener("click", this._handleClick);
		this.addEventListener("keydown", this._handleKeyDown);
	}

	disconnectedCallback(): void {
		this.removeEventListener("click", this._handleClick);
		this.removeEventListener("keydown", this._handleKeyDown);
		super.disconnectedCallback();
	}

	willUpdate(changedProperties: PropertyValues<this>) {
		if (changedProperties.has("checked")) {
			if (!this.disabled) {
				this.setValue(this.checked && this.value ? this.value : null);
			}
		}
		if (changedProperties.has("checked") || changedProperties.has("disabled")) {
			this._syncA11yState();
		}
	}

	resetFormControl(): void {
		this.checked = this.#initialState;
	}

	render() {
		return html`
			<div part="base">
				<span data-testid="track" part="track"></span>
				<span data-testid="handle" part="handle"></span>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"w-switch": WarpSwitch;
	}
}

if (!customElements.get("w-switch")) {
	customElements.define("w-switch", WarpSwitch);
}
