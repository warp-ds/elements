import { html, LitElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { suffix, prefix } from '@fabric-ds/css/component-classes';
import { search, clear } from './icons';
import { fclasses } from '../utils';
import { styles } from '../../dist/elements.min.js';

class FabricAffix extends LitElement {
  static styles = [styles];

  static properties = {
    ariaLabel: { type: String, attribute: 'aria-label' },
    clear: { type: Boolean },
    search: { type: Boolean },
    label: { type: String },
  };

  get _classBase() {
    return this.slot === 'suffix' ? suffix : prefix;
  }

  get _classes() {
    return fclasses({
      [this._classBase.wrapper]: true,
      [this._classBase.wrapperWithLabel]: this.label,
      [this._classBase.wrapperWithIcon]: !this.label,
    });
  }

  get _searchButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="submit">
        ${search}
      </button>
    `;
  }

  get _clearButton() {
    return html`
      <button aria-label="${ifDefined(this.ariaLabel)}" class="${this._classes}" type="reset">
        ${clear}
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

if (!customElements.get('f-affix')) {
  customElements.define('f-affix', FabricAffix);
}

export { FabricAffix };
