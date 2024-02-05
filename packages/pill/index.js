import "@warp-ds/icons/elements/close-16";
import { activateI18n } from "../i18n";
import { classNames } from "@chbphone55/classnames";
import { html } from "lit";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { pill as ccPill } from "@warp-ds/css/component-classes";
import WarpElement from "@warp-ds/elements-core";

class WarpPill extends WarpElement {
  static styles = [WarpElement.styles];

  static properties = {
    canClose: { type: Boolean },
    suggestion: { type: Boolean },
    openSRLabel: { type: String },
    closeSRLabel: { type: String },
  };

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages);
    this.canClose = false;
    this.suggestion = false;

    this.openFilterSrText = i18n._({
        id: "pill.aria.openFilter",
        message: "Open filter",
        comment: "Fallback screenreader message for open filter",
      }
    );

    this.removeFilterSrText = i18n._({
        id: "pill.aria.removeFilter",
        message: "Remove filter",
        comment: "Fallback screenreader message for removal of the filter",
      }
    );
  }

  get _labelClasses() {
    return classNames({
      [ccPill.button]: true,
      [this.suggestion ? ccPill.suggestion : ccPill.filter]: true,
      [ccPill.label]: true,
      [this.canClose ? ccPill.labelWithClose : ccPill.labelWithoutClose]: true,
    });
  }

  get _closeClasses() {
    return classNames({
      [ccPill.button]: true,
      [this.suggestion ? ccPill.suggestion : ccPill.filter]: true,
      [ccPill.close]: true,
    });
  }

  render() {
    return html`
      <div class="${ccPill.pill}">
        <button type="button" class="${this._labelClasses}">
          <span class="${ccPill.a11y}"
            >${this.openSRLabel
              ? this.openSRLabel
              : this.openFilterSrText}</span
          >
          <span><slot></slot></span>
        </button>
        ${this.canClose
          ? html`<button type="button" class="${this._closeClasses}">
              <span class="${ccPill.a11y}"
                >${this.closeSRLabel
                  ? this.closeSRLabel
                  : this.removeFilterSrText}</span
              >
              <w-icon-close-16></w-icon-close-16>
            </button>`
          : null}
      </div>
    `;
  }
}

if (!customElements.get("w-pill")) {
  customElements.define("w-pill", WarpPill);
}

export { WarpPill };
