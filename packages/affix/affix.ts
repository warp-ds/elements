// @warp-css;

import { classNames } from "@chbphone55/classnames";
import { FormControlMixin } from "@open-wc/form-control";
import { i18n } from "@lingui/core";
import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import { detectLocale } from "../i18n.js";
import { reset } from "../styles.js";
import type { WarpTextField } from "../textfield/textfield.js";

import { affixStyles } from "./affix-styles.js";
import { styles } from "./styles.js";

import "../icon/icon.js";

/**
 * This component is usually used in other components like form elements to show a prefix or suffix. See for example `w-textfield`.
 *
 * ## Accessibility Note
 * Due to shadow DOM encapsulation, ARIA attributes (like `aria-describedby`, `aria-labelledby`)
 * cannot reference elements across shadow boundaries. This means:
 * - Non-interactive affixes (text labels, icons) cannot be connected to the parent input via ARIA
 * - Interactive affixes (buttons) must have their own `aria-label` (already implemented)
 * - Do NOT attempt to reference affix content from parent components via ARIA ID references - it won't work
 *
 * For non-interactive labels (e.g., currency symbols), consider including the information in the
 * main label or placeholder instead of relying on ARIA to announce affix content.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-affix--docs)
 */
class WarpAffix extends FormControlMixin(LitElement) {
	/**
	 * @summary Accessible label for icon-button variants.
	 * @description Used to override the default `aria-label`s for the internal button when `search` or `clear` is enabled.
	 */
	@property({ attribute: "aria-label", reflect: true, useDefault: true })
	ariaLabel: string | null = null;

	/**
	 * Add this property to render a clickable Warp close icon.
	 *
	 * Set an `aria-label` that explains the action when using this.
	 *
	 * @summary Renders a clear icon button.
	 * @description Shows a clickable close icon meant for reset/clear actions, typically in a suffix slot.
	 */
	@property({ type: Boolean }) clear = false;

	/**
	 * Add this property to render a clickable Warp search icon.
	 *
	 * @summary Renders a search icon button.
	 * @description Shows a clickable search icon, typically in a prefix slot for search fields.
	 */
	@property({ type: Boolean }) search = false;

	/**
	 * @summary Text label shown as prefix/suffix content.
	 * @description Displays plain text such as a currency or unit label (for example `kr` or `%`) instead of an icon button.
	 */
	@property({ reflect: true, useDefault: true }) label = "";

	/**
	 * @summary Icon name rendered as prefix/suffix content.
	 * @description Displays a non-interactive `w-icon` in the affix area using the provided icon name (for example `Search` or `Close`) instead of text.
	 */
	@property({ reflect: true, useDefault: true }) icon: string | null = null;

	static styles = [reset, styles, affixStyles];

	/** @internal */
	get _wrapperClasses() {
		return classNames([this.label ? "has-label" : "has-icon"]);
	}

	/** @internal */
	resetContainingTextField(e: Event) {
		const textfield: WarpTextField | null = this.closest("w-textfield");
		if (textfield) {
			textfield.resetFormControl();
		}
		e.stopPropagation();
	}

	/** @internal */
	submitContainingForm(e: Event) {
		const form = this.internals.form;
		if (form) {
			form.submit();
		}
		e.stopPropagation();
	}

	/** @internal */
	get _searchButton() {
		const label =
			this.ariaLabel ||
			i18n._({
				id: "affix.aria.search",
				message: "Search",
				comment: "Aria label for the search button in affix",
			});
		return html`
			<button
				part="wrapper"
				aria-label="${label}"
				class="${this._wrapperClasses}"
				type="submit"
				@click="${this.submitContainingForm.bind(this)}"
			>
				<w-icon
					name="Search"
					size="small"
					locale="${detectLocale()}"
					class="flex"
				></w-icon>
			</button>
		`;
	}

	/** @internal */
	get _clearButton() {
		const label =
			this.ariaLabel ||
			i18n._({
				id: "affix.aria.clearInput",
				message: "Clear input",
				comment: "Aria label for the clear input button in affix",
			});
		return html`
			<button
				part="wrapper"
				aria-label="${label}"
				class="${this._wrapperClasses}"
				type="reset"
				@click="${this.resetContainingTextField.bind(this)}"
			>
				<w-icon
					name="Close"
					size="small"
					locale="${detectLocale()}"
					class="flex"
				></w-icon>
			</button>
		`;
	}

	get _icon() {
		if (this.icon) {
			return html`
				<div part="wrapper" class="${this._wrapperClasses}">
					<w-icon
						name="${this.icon}"
						size="small"
						locale="${detectLocale()}"
						class="flex"
					></w-icon>
				</div>
			`;
		}
		return "";
	}

	/** @internal */
	get _text() {
		return html`
			<div part="wrapper" class="${this._wrapperClasses}">
				<span part="label">${this.label}</span>
			</div>
		`;
	}

	/** @internal */
	get _markup() {
		if (this.label) {
			return this._text;
		}
		if (this.icon) {
			return this._icon;
		}
		if (this.search) {
			return this._searchButton;
		}
		if (this.clear) {
			return this._clearButton;
		}
		return undefined;
	}

	render() {
		return html`${this._markup}`;
	}
}

if (!customElements.get("w-affix")) {
	customElements.define("w-affix", WarpAffix);
}

export { WarpAffix };
