// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';
import '#icon';
import { detectLocale } from '../i18n.js';

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
class WarpAffix extends LitElement {
  @property({ attribute: 'aria-label' }) ariaLabel: string;

  /**
   * Add this property to render a clickable Warp close icon.
   *
   * Set an `aria-label` that explains the action when using this.
   */
  @property({ type: Boolean }) clear = false;

  /**
   * Add this property to render a clickable Warp search icon.
   *
   * Set an `aria-label` that explains the action when using this.
   */
  @property({ type: Boolean }) search = false;

  @property() label: string;

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
  get _searchButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon name="Search" size="small" locale="${detectLocale()}" class="flex"></w-icon>
      </button>
    `;
  }

  /** @internal */
  get _clearButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="reset">
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
