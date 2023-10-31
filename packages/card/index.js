import { html, css } from "lit";
import WarpElement from "@warp-ds/elements-core";
import { ifDefined } from "lit/directives/if-defined.js";
import { card as ccCard } from "@warp-ds/css/component-classes";
import { fclasses } from "../utils";

const keys = {
  ENTER: "Enter",
  SPACE: " ",
};

class WarpCard extends WarpElement {
  static styles = [
    WarpElement.styles,
    css`
      a::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    selected: { type: Boolean, reflect: true },
    flat: { type: Boolean },
    clickable: { type: Boolean },
  };

  constructor() {
    super();
    this.selected = false;
    this.flat = false;
    this.clickable = false;
  }

  get _outerClasses() {
    return fclasses({
      [ccCard.card]: true,
      [ccCard.cardShadow]: !this.flat,
      [ccCard.cardSelected]: this.selected,
      [ccCard.cardFlat]: this.flat,
      [this.selected ? ccCard.cardFlatSelected : ccCard.cardFlatUnselected]:
        this.flat,
    });
  }

  get _innerClasses() {
    return fclasses({
      [ccCard.cardOutline]: true,
      [this.selected
        ? ccCard.cardOutlineSelected
        : ccCard.cardOutlineUnselected]: true,
    });
  }

  get uuButton() {
    return html`<button
      class="${ccCard.a11y}"
      aria-pressed="${this.selected}"
      tabindex="-1"
    >
      Velg
    </button>`;
  }

  get uuSpan() {
    return html`<span
      role="checkbox"
      aria-checked="true"
      aria-disabled="true"
    ></span>`;
  }

  keypressed(e) {
    if (!this.clickable || e.altKey || e.ctrlKey) return;
    if (e.key === keys.ENTER || e.key === keys.SPACE) {
      e.preventDefault();
      this.click();
    }
  }

  render() {
    return html`
      <div
        tabindex=${ifDefined(this.clickable ? "0" : undefined)}
        class="${this._outerClasses}"
        @keydown=${this.keypressed}
      >
        ${this.clickable ? this.uuButton : ""}
        ${!this.clickable && this.selected ? this.uuSpan : ""}
        <div class="${this._innerClasses}"></div>
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get("w-card")) {
  customElements.define("w-card", WarpCard);
}

export { WarpCard };
