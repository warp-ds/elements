import { html } from "lit";
import WarpElement from "@warp-ds/elements-core";
import { button as ccButton } from "@warp-ds/css/component-classes";
import { classNames } from "@chbphone55/classnames";
import { kebabCaseAttributes } from "../utils";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { activateI18n } from "../i18n";

const buttonTypes = [
  "primary",
  "secondary",
  "negative",
  "utility",
  "pill",
  "link",
];

class WarpButton extends kebabCaseAttributes(WarpElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static properties = {
    type: { type: "button" | "submit" | "reset", reflect: true },
    autofocus: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    quiet: { type: Boolean, reflect: true },
    small: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
    rel: { type: String, reflect: true },
    fullWidth: { type: Boolean, reflect: true },
    buttonClass: { type: String, reflect: true },
  };

  static styles = [WarpElement.styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages);

    this.variant = "secondary";
    this.ariaValueTextLoading = i18n._({
      id: "button.aria.loading",
      message: "Loading...",
      comment: "Screenreader message for buttons that are loading",
    });
  }

  connectedCallback() {
    super.connectedCallback();

    if (!buttonTypes.includes(this.variant)) {
      throw new Error(
        `Invalid "variant" attribute. Set its value to one of the following:\n${buttonTypes.join(
          ", ",
        )}.`,
      );
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  get _classes() {
    const primary = this.variant === "primary";
    const secondary = this.variant === "secondary";
    const negative = this.variant === "negative";
    const utility = this.variant === "utility";
    const pill = this.variant === "pill";
    const link = this.variant === "link";

    return classNames(
      {
        [ccButton.secondary]:
          secondary && !this.small && !this.quiet && !this.loading,
        [ccButton.secondarySmall]:
          secondary && this.small && !this.quiet && !this.loading,
        [ccButton.secondarySmallLoading]:
          secondary && this.small && !this.quiet && this.loading,
        [ccButton.secondarySmallQuiet]:
          secondary && this.small && this.quiet && !this.loading,
        [ccButton.secondarySmallQuietLoading]:
          secondary && this.small && this.quiet && this.loading,
        [ccButton.secondaryQuiet]:
          secondary && !this.small && this.quiet && !this.loading,
        [ccButton.secondaryQuietLoading]:
          secondary && !this.small && this.quiet && this.loading,
        [ccButton.secondaryLoading]:
          secondary && !this.small && !this.quiet && this.loading,

        [ccButton.primary]:
          primary && !this.small && !this.quiet && !this.loading,
        [ccButton.primarySmall]:
          primary && this.small && !this.quiet && !this.loading,
        [ccButton.primarySmallQuiet]:
          primary && this.small && this.quiet && !this.loading,
        [ccButton.primarySmallLoading]:
          primary && this.small && !this.quiet && this.loading,
        [ccButton.primarySmallQuietLoading]:
          primary && this.small && this.quiet && this.loading,
        [ccButton.primaryQuiet]:
          primary && !this.small && this.quiet && !this.loading,
        [ccButton.primaryQuietLoading]:
          primary && !this.small && this.quiet && this.loading,
        [ccButton.primaryLoading]:
          primary && !this.small && !this.quiet && this.loading,

        [ccButton.utility]:
          utility && !this.small && !this.quiet && !this.loading,
        [ccButton.utilitySmall]:
          utility && this.small && !this.quiet && !this.loading,
        [ccButton.utilitySmallQuiet]:
          utility && this.small && this.quiet && !this.loading,
        [ccButton.utilitySmallLoading]:
          utility && this.small && !this.quiet && this.loading,
        [ccButton.utilitySmallQuietLoading]:
          utility && this.small && this.quiet && this.loading,
        [ccButton.utilityQuiet]:
          utility && !this.small && this.quiet && !this.loading,
        [ccButton.utilityQuietLoading]:
          utility && !this.small && this.quiet && this.loading,
        [ccButton.utilityLoading]:
          utility && !this.small && !this.quiet && this.loading,

        [ccButton.negative]:
          negative && !this.small && !this.quiet && !this.loading,
        [ccButton.negativeSmall]:
          negative && this.small && !this.quiet && !this.loading,
        [ccButton.negativeSmallQuiet]:
          negative && this.small && this.quiet && !this.loading,
        [ccButton.negativeSmallLoading]:
          negative && this.small && !this.quiet && this.loading,
        [ccButton.negativeSmallQuietLoading]:
          negative && this.small && this.quiet && this.loading,
        [ccButton.negativeQuiet]:
          negative && !this.small && this.quiet && !this.loading,
        [ccButton.negativeQuietLoading]:
          negative && !this.small && this.quiet && this.loading,
        [ccButton.negativeLoading]:
          negative && !this.small && !this.quiet && this.loading,

        [ccButton.pill]: pill && !this.small && !this.loading,
        [ccButton.pillSmall]: pill && this.small && !this.loading,
        [ccButton.pillLoading]: pill && !this.small && this.loading,
        [ccButton.pillSmallLoading]: pill && this.small && this.loading,
        [ccButton.link]: link && !this.small,
        [ccButton.linkSmall]: link && this.small,
        [ccButton.linkAsButton]: !!this.href,
        [ccButton.fullWidth]: this.fullWidth,
        [ccButton.contentWidth]: !this.fullWidth,
      },
      this.buttonClass,
    );
  }

  render() {
    return html` ${this.href
      ? html`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target === "_blank" ? this.rel || "noopener" : undefined}
          class=${this._classes}
        >
          <slot></slot>
        </a>`
      : html`<button type=${this.type || "button"} class=${this._classes}>
          <slot></slot>
        </button>`}
    ${this.loading
      ? html`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        />`
      : null}`;
  }
}

if (!customElements.get("w-button")) {
  customElements.define("w-button", WarpButton);
}

export { WarpButton };
