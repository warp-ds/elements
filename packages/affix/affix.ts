// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormControlMixin } from '@open-wc/form-control';

import { reset } from '../styles.js';

import { styles } from './styles.js';
import '../icon/icon.js';
import { detectLocale } from '../i18n.js';
import { WarpTextField } from '../textfield/textfield.js';

const prefixSuffixWrapper =
  'absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ';

const ccSuffix = {
  wrapper: prefixSuffixWrapper + 'right-0',
  wrapperWithLabel: 'w-max pr-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs s-text',
};

const ccPrefix = {
  wrapper: prefixSuffixWrapper + 'left-0',
  wrapperWithLabel: 'w-max pl-12',
  wrapperWithIcon: 'w-40',
  label: 'antialiased block relative cursor-default pb-0 font-bold text-xs s-text',
};

/**
 * This component is usually used in other components like form elements to show a prefix or suffix. See for example `w-textfield`.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-affix--docs)
 */
class WarpAffix extends FormControlMixin(LitElement) {
  /**
   * @summary Accessible label for icon-button variants.
   * @description Used as the `aria-label` for the internal button when `search` or `clear` is enabled. Provide a descriptive action label like "Search" or "Clear input".
   */
  @property({ attribute: 'aria-label', reflect: true, useDefault: true }) ariaLabel: string | null = null;

  /**
   * Add this property to render a clickable Warp close icon.
   *
   * Set an `aria-label` that explains the action when using this.
   
   * @summary Renders a clear icon button.
   * @description Shows a clickable close icon meant for reset/clear actions, typically in a suffix slot. When enabled, set `aria-label` so screen readers can announce the button purpose.
  */
  @property({ type: Boolean }) clear = false;

  /**
   * Add this property to render a clickable Warp search icon.
   *
   * Be sure to set an `aria-label` that explains the action when using this property.
   
   * @summary Renders a search icon button.
   * @description Shows a clickable search icon, typically in a prefix slot for search fields. When enabled, set `aria-label` so that assistive technology announces the action correctly.
  */
  @property({ type: Boolean }) search = false;

  /**
   * @summary Text label shown as prefix/suffix content.
   * @description Displays plain text such as a currency or unit label (for example `kr` or `%`) instead of an icon button.
   */
  @property({ reflect: true, useDefault: true }) label = '';

  static styles = [reset, styles];

  /** @internal */
  get _classBase() {
    return this.slot === 'suffix' ? ccSuffix : ccPrefix;
  }

  /** @internal */
  get _classes() {
    return classNames([
      this._classBase.wrapper,
      this.label ? this._classBase.wrapperWithLabel : this._classBase.wrapperWithIcon,
    ]);
  }

  /** @internal */
  resetContainingTextField(e: Event) {
    const textfield: WarpTextField | null = this.closest('w-textfield');
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
    const label = this.ariaLabel || 'Search';
    return html`
      <button aria-label="${label}" class="${this._classes}" type="submit" @click="${this.submitContainingForm.bind(this)}">
        <w-icon name="Search" size="small" locale="${detectLocale()}" class="flex"></w-icon>
      </button>
    `;
  }

  /** @internal */
  get _clearButton() {
    const label = this.ariaLabel || 'Clear input';
    return html`
      <button aria-label="${label}" class="${this._classes}" type="reset" @click="${this.resetContainingTextField.bind(this)}">
        <w-icon name="Close" size="small" locale="${detectLocale()}" class="flex"></w-icon>
      </button>
    `;
  }

  /** @internal */
  get _text() {
    return html`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `;
  }

  /** @internal */
  get _markup() {
    if (this.label) {
      return this._text;
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

if (!customElements.get('w-affix')) {
  customElements.define('w-affix', WarpAffix);
}

export { WarpAffix };
