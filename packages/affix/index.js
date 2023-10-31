import { html } from "lit";
import WarpElement from "@warp-ds/elements-core";
import { ifDefined } from "lit/directives/if-defined.js";
import { suffix, prefix } from "@warp-ds/css/component-classes";

import { fclasses } from "../utils";

class WarpAffix extends WarpElement {
  static styles = [WarpElement.styles];

  static properties = {
    ariaLabel: { type: String, attribute: "aria-label" },
    clear: { type: Boolean },
    search: { type: Boolean },
    label: { type: String },
  };

  get _classBase() {
    return this.slot === "suffix" ? suffix : prefix;
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
      <button
        aria-label="${ifDefined(this.ariaLabel)}"
        class="${this._classes}"
        type="submit"
      >
        <w-icon-search-16></w-icon-search-16>
      </button>
    `;
  }

  get _clearButton() {
    return html`
      <button
        aria-label="${ifDefined(this.ariaLabel)}"
        class="${this._classes}"
        type="reset"
      >
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

if (!customElements.get("w-affix")) {
  customElements.define("w-affix", WarpAffix);
}

export { WarpAffix };
