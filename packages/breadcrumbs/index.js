import { html } from "lit";
import WarpElement from "@warp-ds/elements-core";
import { breadcrumbs as ccBreadcrumbs } from "@warp-ds/css/component-classes";
import { kebabCaseAttributes } from "../utils";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { activateI18n } from "../i18n";

class WarpBreadcrumbs extends kebabCaseAttributes(WarpElement) {
  static styles = [WarpElement.styles];

  static properties = {
    ariaLabel: { type: String },
  };

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages);

    this.ariaLabel = i18n._({
      id: "breadcrumbs.ariaLabel",
      message: "You are here",
      comment: "Default screenreader message for the breadcrumb component",
    });
  }

  getSeparator() {
    const separatorSlot = this.shadowRoot.querySelector("slot[name=separator]");
    const separator = separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    clone.slot = "separator";

    return clone;
  }

  handleSlotChange() {
    const slot = this.shadowRoot.querySelector("slot");
    const items = [...slot.assignedElements({ flatten: true })];

    items.forEach((item, index) => {
      if (index === items.length - 1) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.append(this.getSeparator());
      }
    });
  }

  render() {
    return html`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ccBreadcrumbs.a11y}>
          ${this.ariaLabel}
        </h2>
        <slot @slotchange=${this.handleSlotChange}></slot>

        <span hidden aria-hidden="true">
          <slot name="separator">
            <span part="separator" class=${ccBreadcrumbs.separator + " mr-8 ml-8"}>/</span>
          </slot>
        </span>
      </nav>
    `;
  }
}

if (!customElements.get("w-breadcrumbs")) {
  customElements.define("w-breadcrumbs", WarpBreadcrumbs);
}

export { WarpBreadcrumbs };
