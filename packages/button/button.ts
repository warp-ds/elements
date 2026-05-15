import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement, nothing, PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { activateI18n } from '../i18n';
import '../link/link.js';
import { reset } from '../styles.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { wButtonStyles } from './styles/w-button.styles';
import { ifDefined } from 'lit/directives/if-defined.js';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'negative'
  | 'negativeQuiet'
  | 'utility'
  | 'pill'
  | 'link'
  | 'quiet'
  | 'utilityQuiet'
  | 'overlay'
  | 'overlayInverted'
  | 'overlayQuiet'
  | 'overlayInvertedQuiet';

const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'negative',
  'negativeQuiet',
  'utility',
  'pill',
  'link',
  'quiet',
  'utilityQuiet',
  'overlay',
  'overlayInverted',
  'overlayQuiet',
  'overlayInvertedQuiet',
];

export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Performs an action or renders a link with button styling.
 * Use button variants to match action priority, risk, and context.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/buttons-button--docs)
 */
class WarpButton extends FormControlMixin(LitElement) {
  static styles = [reset, wButtonStyles];

  /**
   * Shadow root configuration.
   * Delegates focus from the host to the internal control.
   */
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Native button type.
   * Controls whether the internal button behaves as a regular button, submits a form, or resets a form. Defaults to `button`.
   */
  @property({ reflect: true })
  type: ButtonType;

  /**
   * Focuses the button when it is first rendered.
   * Applies only when the component renders a native button. Link buttons with `href` do not autofocus through this component.
   */
  @property({ type: Boolean, reflect: true })
  autofocus = false;

  /**
   * Visual style of the button.
   * Defaults to `secondary`. Use the variant that matches the action priority, risk, and placement.
   */
  @property({ reflect: true })
  variant: ButtonVariant;

  /**
   * Deprecated quiet visual treatment flag
   * Use `variant="quiet"` instead.
   *
   * @deprecated Use `variant="quiet"` instead
   */
  @property({ type: Boolean, reflect: true })
  quiet = false;

  /**
   * Marks the button as icon-only.
   * Use this when the button has no visible text. Include accessible text in the slotted content so the internal button has a name.
   */
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' })
  iconOnly = false;

  /**
   * Renders the compact button size.
   * Use this in dense layouts where the default button size is too large.
   */
  @property({ type: Boolean, reflect: true })
  small = false;

  /**
   * Shows the loading state.
   * Use after the user has triggered an action and the action is in progress.
   */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * URL for rendering the button as a link.
   * When set, the component renders `w-link` instead of a native `button`.
   */
  @property({ reflect: true })
  href: string;

  /**
   * Link browsing context.
   * Passed to the rendered link when `href` is set.
   */
  @property({ reflect: true })
  target: string;

  /**
   * Visually disables the button.
   * Disabled buttons are discouraged because they can hide the reason an action is unavailable.
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Link relationship.
   * Passed to the rendered link when `href` is set. If `target="_blank"` is set and `rel` is omitted, `noopener` is used.
   */
  @property({ reflect: true })
  rel: string;

  /**
   * Makes the button fill its parent width.
   * Useful in narrow layouts where the button should span the available inline space.
   */
  @property({ attribute: 'full-width', type: Boolean, reflect: true })
  fullWidth = false;

  /**
   * Deprecated class applied to the internal control
   * This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the button appearance.
   *
   * @deprecated This class is applied inside the shadow DOM and is unlikely to have the desired effect. Use attributes or CSS variables to customize the appearance of the button.
   */
  @property({ attribute: 'button-class', reflect: true })
  buttonClass: string;

  /**
   * Form control name.
   * Used when the button participates in form handling.
   */
  @property({ reflect: true })
  name: string;

  /**
   * Form control value.
   * Used with `name` when the button participates in form handling. Resets to its initial value when the form is reset.
   */
  @property({ reflect: true })
  value: string;

  /**
   * The [commandfor HTML attribute](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#html_attributes) for Invoker Commands.
   */
  @property()
  commandfor: string;
  
  /**
   * The [command HTML attribute](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API#html_attributes) for Invoker Commands.
   */
  @property()
  command: string;

  @query('button')
  private buttonEl: HTMLButtonElement | null;

  private ariaValueTextLoading: string;

  // capture the initial value using connectedCallback and #initialValue
  #initialValue: string | null = null;

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

    this.ariaValueTextLoading = i18n.t({
      id: 'button.aria.loading',
      message: 'Loading...',
      comment: 'Screen reader message for buttons that are loading',
    });
  }

  connectedCallback() {
    super.connectedCallback();

    const effectiveVariant = this.variant || 'secondary';
    if (!variants.includes(effectiveVariant)) {
      throw new Error(`Invalid "variant" attribute. Set its value to one of the following:\n${variants.join(', ')}.`);
    }

    this.#initialValue = this.value;
  }

  /**
   * Traverse up the shadow roots looking for the ID to support use inside other Lit components.
   */
  private closestWithId(id: string): HTMLElement | null {
    let root: ShadowRoot | null = this.shadowRoot;
    let el: HTMLElement | null = null;
    try {
      while (root) {
        el = root.getElementById(id);
        if (el) return el;
        
        root = (root.getRootNode() as ShadowRoot).host?.getRootNode() as ShadowRoot | null;
      }
    } catch {}
    return document.getElementById(id);
  }

  firstUpdated() {
    if (this.autofocus && !this.href) {
      setTimeout(() => this.focus(), 0);
    }
    if (this.buttonEl && this.commandfor) {
      // @ts-ignore It does exist in newer DOM
      this.buttonEl.commandForElement = this.closestWithId(this.commandfor);
    }
  }

  /** @internal */
  _handleButtonClick() {
    if (this.type === 'submit') this.internals.form.requestSubmit();
    else if (this.type === 'reset') this.internals.form.reset();
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  render() {
    const variant = this.variant || 'secondary';
    return html` ${
      this.href
        ? html`
          <w-link
            href=${this.href}
            target=${this.target}
            variant=${this.quiet ? 'quiet' : variant}
            ?small=${this.small}
            ?loading=${this.loading}
            ?autofocus=${this.autofocus}
            ?full-width=${this.fullWidth}
            class=${this.buttonClass}
            rel=${this.target === '_blank' ? this.rel || 'noopener' : undefined}
          >
            <slot></slot>
          </w-link>
        `
        : html`
          <button
            type=${this.type || 'button'}
            class=${ifDefined(this.buttonClass)}
            @click="${this._handleButtonClick}"
            commandfor=${ifDefined(this.commandfor)}
            command=${ifDefined(this.command)}
          >
            <slot></slot>
          </button>
        `
    }
    ${
      this.loading
        ? html`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`
        : nothing
    }`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-button': WarpButton;
  }
}

if (!customElements.get('w-button')) {
  customElements.define('w-button', WarpButton);
}

export { WarpButton };
