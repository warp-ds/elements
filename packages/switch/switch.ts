// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { FormControlMixin } from '@open-wc/form-control';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles';

import { styles } from './styles.js';

const ccSwitch = {
  base: 'block relative h-24 w-44 cursor-pointer group focusable rounded-full',
  disabled: 'pointer-events-none',

  track: 'absolute top-0 left-0 h-full w-full rounded-full transition-colors',
  trackActive: 's-bg-primary group-hover:s-bg-primary-hover',
  trackInactive: 's-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover',

  trackDisabledOn: 's-bg-disabled',
  trackDisabledOff: 's-bg-disabled-subtle border s-border-disabled',

  handle: 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform',
  handleSelected: 'translate-x-20',

  // ON + enabled
  handleActive: 's-bg',

  // OFF + enabled
  handleNotDisabled: 'bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]',

  handleDisabledOn: 's-bg-disabled-subtle',
  handleDisabledOff: 's-bg-disabled',

  a11y: 'sr-only',
};

export class WarpSwitch extends FormControlMixin(LitElement) {
  // String properties without defaults to avoid reflecting empty attributes
  @property({ type: String, reflect: true })
  name: string;

  @property({ type: String, reflect: true })
  value: string;

  // Boolean properties can have defaults - Lit doesn't reflect false values
  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  // capture the initial state using connectedCallback and #initialState
  #initialState: boolean | null = null;

  static styles = [
    reset,
    styles,
    css`
      :host {
        display: inline-block;
      }

      :host(:focus),
      :host(:focus-visible) {
        outline: none;
      }

      :host(:focus) button,
      :host(:focus-visible) button {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
      }

      :host(:focus:not(:focus-visible)) button {
        outline: none;
      }
    `,
  ];

  /** @internal */
  get _baseClasses() {
    return classNames([ccSwitch.base, this.disabled && ccSwitch.disabled]);
  }

  /** @internal */
  get _trackClasses() {
    return classNames([
      ccSwitch.track,
      this.disabled
        ? this.checked
          ? ccSwitch.trackDisabledOn // disabled + ON
          : ccSwitch.trackDisabledOff // disabled + OFF
        : this.checked
          ? ccSwitch.trackActive // enabled + ON
          : ccSwitch.trackInactive, // enabled + OFF
    ]);
  }

  /** @internal */
  get _handleClasses() {
    return classNames([
      ccSwitch.handle,
      this.checked && ccSwitch.handleSelected, // position (ON → translated)

      this.disabled
        ? this.checked
          ? ccSwitch.handleDisabledOn // disabled + ON
          : ccSwitch.handleDisabledOff // disabled + OFF
        : this.checked
          ? ccSwitch.handleActive // enabled + ON
          : ccSwitch.handleNotDisabled, // enabled + OFF
    ]);
  }

  /** @internal */
  _handleClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { checked: this.checked, value: this.value || null },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  /** @internal */
  _handleHostClick = (event: MouseEvent) => {
    if (this.disabled) return;
    if (event.composedPath()[0] === this) {
      this._handleClick();
    }
  };

  /** @internal */
  _handleKeyDown = (event: KeyboardEvent) => {
    if (this.disabled) return;
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._handleClick();
    }
  };

  /** @internal */
  _syncA11yState() {
    const ariaCheckedValue = this.checked ? 'true' : 'false';
    // Set aria-checked as attribute for axe-core and ElementInternals for AT
    if (this.getAttribute('aria-checked') !== ariaCheckedValue) {
      this.setAttribute('aria-checked', ariaCheckedValue);
    }
    this.internals.ariaChecked = ariaCheckedValue;
    // Update tabIndex based on disabled state
    // Only set if different to minimize DOM changes for hydration
    const expectedTabIndex = this.disabled ? -1 : 0;
    if (this.tabIndex !== expectedTabIndex) {
      this.tabIndex = expectedTabIndex;
    }
    if (this.disabled) {
      this.internals.ariaDisabled = 'true';
      return;
    }
    this.internals.ariaDisabled = null;
  }

  connectedCallback(): void {
    this.#initialState = this.checked;
    super.connectedCallback();
    // Set role as attribute for axe-core visibility and ElementInternals for AT
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'switch');
    }
    this.internals.role = 'switch';
    // Sync aria-label to internals (keep attribute for hydration compatibility)
    const ariaLabel = this.getAttribute('aria-label');
    if (ariaLabel) {
      this.internals.ariaLabel = ariaLabel;
    }
    if (!this.disabled) {
      this.setValue(this.checked && this.value ? this.value : null);
    }

    this._syncA11yState();
    this.addEventListener('click', this._handleHostClick);
    this.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this._handleHostClick);
    this.removeEventListener('keydown', this._handleKeyDown);
    super.disconnectedCallback();
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('checked')) {
      if (!this.disabled) {
        this.setValue(this.checked && this.value ? this.value : null);
      }
    }
    if (changedProperties.has('checked') || changedProperties.has('disabled')) {
      this._syncA11yState();
    }
  }

  resetFormControl(): void {
    this.checked = this.#initialState;
  }

  render() {
    return html`
      <div>
        <button
          type="button"
          role="none"
          tabindex="-1"
          class=${this._baseClasses}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
        >
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `;
  }
}

if (!customElements.get('w-switch')) {
  customElements.define('w-switch', WarpSwitch);
}
