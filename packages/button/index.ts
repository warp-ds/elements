import { html, LitElement, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { classNames } from "@chbphone55/classnames";
import { i18n } from "@lingui/core";
import { FormControlMixin } from "@open-wc/form-control";
import { button as ccButton } from "@warp-ds/css/component-classes";
import WarpElement from "@warp-ds/elements-core";

import { components, reset } from "../styles.js";
import { activateI18n } from "../i18n";
import { kebabCaseAttributes } from "../utils";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "negative"
  | "utility"
  | "pill"
  | "link";

const buttonVariants = [
  "primary",
  "secondary",
  "negative",
  "utility",
  "pill",
  "link",
];

type ButtonType = "button" | "submit" | "reset";

class WarpButton extends FormControlMixin(kebabCaseAttributes(LitElement)) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ reflect: true })
  type: ButtonType = "button";

  @property({ type: Boolean, reflect: true })
  autofocus: boolean;

  @property({ reflect: true })
  variant: ButtonVariant;

  @property({ type: Boolean, reflect: true })
  quiet: boolean;

  @property({ type: Boolean, reflect: true })
  small: boolean;

  @property({ type: Boolean, reflect: true })
  loading: boolean;

  @property({ reflect: true })
  href: string;

  @property({ reflect: true })
  target: string;

  @property({ reflect: true })
  rel: string;

  @property({ type: Boolean, reflect: true })
  fullWidth: boolean;

  @property({ reflect: true })
  buttonClass: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  static styles = [reset, components];

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("value")) {
      this.setValue(this.value);
    }
  }

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.variant = "secondary";
    this.ariaValueTextLoading = i18n._({
      id: "button.aria.loading",
      message: "Loading...",
      comment: "Screen reader message for buttons that are loading",
    });
  }

  connectedCallback() {
    super.connectedCallback();

    if (!buttonVariants.includes(this.variant)) {
      throw new Error(
        `Invalid "variant" attribute. Set its value to one of the following:\n${buttonVariants.join(", ")}.`,
      );
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  get _primaryClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.primary,
      this.small && !this.quiet && !this.loading && ccButton.primarySmall,
      this.small && this.quiet && !this.loading && ccButton.primarySmallQuiet,
      this.small &&
        this.loading &&
        (this.quiet
          ? ccButton.primarySmallQuietLoading
          : ccButton.primarySmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.primaryQuiet,
      !this.small &&
        this.loading &&
        (this.quiet ? ccButton.primaryQuietLoading : ccButton.primaryLoading),
    ];
  }

  get _secondaryClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.secondary,
      this.small && !this.quiet && !this.loading && ccButton.secondarySmall,
      this.small &&
        this.loading &&
        (this.quiet
          ? ccButton.secondarySmallQuietLoading
          : ccButton.secondarySmallLoading),
      this.small && this.quiet && !this.loading && ccButton.secondarySmallQuiet,
      !this.small && this.quiet && !this.loading && ccButton.secondaryQuiet,
      !this.small &&
        this.loading &&
        (this.quiet
          ? ccButton.secondaryQuietLoading
          : ccButton.secondaryLoading),
    ];
  }

  get _utilityClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.utility,
      this.small && !this.quiet && !this.loading && ccButton.utilitySmall,
      this.small && this.quiet && !this.loading && ccButton.utilitySmallQuiet,
      this.small &&
        this.loading &&
        (this.quiet
          ? ccButton.utilitySmallQuietLoading
          : ccButton.utilitySmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.utilityQuiet,
      !this.small &&
        this.loading &&
        (this.quiet ? ccButton.utilityQuietLoading : ccButton.utilityLoading),
    ];
  }

  get _negativeClasses() {
    return [
      !this.small && !this.quiet && !this.loading && ccButton.negative,
      this.small && !this.quiet && !this.loading && ccButton.negativeSmall,
      this.small && this.quiet && !this.loading && ccButton.negativeSmallQuiet,
      this.small &&
        this.loading &&
        (this.quiet
          ? ccButton.negativeSmallQuietLoading
          : ccButton.negativeSmallLoading),
      !this.small && this.quiet && !this.loading && ccButton.negativeQuiet,
      !this.small &&
        this.loading &&
        (this.quiet ? ccButton.negativeQuietLoading : ccButton.negativeLoading),
    ];
  }

  get _pillClasses() {
    return [
      !this.loading && (this.small ? ccButton.pillSmall : ccButton.pill),
      this.loading &&
        (this.small ? ccButton.pillSmallLoading : ccButton.pillLoading),
    ];
  }

  get _linkClasses() {
    return [this.small ? ccButton.linkSmall : ccButton.link];
  }
  get _classes() {
    return classNames(this.buttonClass, [
      this.variant === "primary" && this._primaryClasses,
      this.variant === "secondary" && this._secondaryClasses,
      this.variant === "utility" && this._utilityClasses,
      this.variant === "negative" && this._negativeClasses,
      this.variant === "pill" && this._pillClasses,
      this.variant === "link" && this._linkClasses,
      this.href && ccButton.linkAsButton,
      this.fullWidth ? ccButton.fullWidth : ccButton.contentWidth,
    ]);
  }

  _handleButtonClick() {
    if (this.type === "submit") this.internals.form.requestSubmit();
    else if (this.type === "reset") this.internals.form.reset();
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
      : html`<button
          type=${this.type || "button"}
          class=${this._classes}
          @click="${this._handleButtonClick}"
        >
          <slot></slot>
        </button>`}
    ${this.loading
      ? html`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`
      : null}`;
  }
}

if (!customElements.get("w-button")) {
  // @ts-expect-error Debug type issue
  customElements.define("w-button", WarpButton);
}

export { WarpButton };
