import { html } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { suffix as ccSuffix, prefix as ccPrefix } from '@warp-ds/css/component-classes';
import WarpElement from '@warp-ds/elements-core';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@warp-ds/icons/elements/search-16';
import '@warp-ds/icons/elements/close-16';

import { kebabCaseAttributes } from '../utils/index.js';

class WarpAffix extends kebabCaseAttributes(WarpElement) {
  static properties = {
    ariaLabel: { type: String },
    clear: { type: Boolean },
    search: { type: Boolean },
    label: { type: String },
  };

  static styles = [WarpElement.styles];

  get _classBase() {
    return this.slot === 'suffix' ? ccSuffix : ccPrefix;
  }

  get _classes() {
    return classNames([this._classBase.wrapper, this.label ? this._classBase.wrapperWithLabel : this._classBase.wrapperWithIcon]);
  }

  get _searchButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `;
  }

  get _clearButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `;
  }

  get _text() {
    return html`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `;
  }

  get _markup() {
    if (this.label) {
      return this._text;
    } else if (this.search) {
      return this._searchButton;
    } else if (this.clear) {
      return this._clearButton;
    }
  }

  render() {
    return html`${this._markup}`;
  }
}

if (!customElements.get('w-affix')) {
  customElements.define('w-affix', WarpAffix);
}

export { WarpAffix };
