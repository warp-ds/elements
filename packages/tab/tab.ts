import { classNames } from '@chbphone55/classnames';
import { css, html, LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from '../tabs/styles.js';

const ccTab = {
  base: 'grid w-full items-center font-bold gap-8 antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary',
  inactive: 's-text-subtle',
  active: 's-text-link s-border-selected',
  icon: 'mx-auto',
  content: 'flex items-center justify-center gap-8',
  contentUnderlined: 'content-underlined', // content-underlined is a no-op that prevents a quirk in how Vue handles class bindings
};

const ccButtonReset = 'focusable appearance-none cursor-pointer bg-transparent border-0 m-0 p-0 inline-block';

/**
 * Individual tab component used within w-tabs container.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTab extends LitElement {
  static styles = [
    reset,
    styles,
    css`
      ::slotted([slot='icon']) {
        display: flex;
      }

      button.focusable:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus, #1a73e8);
        outline-offset: var(--w-outline-offset, 1px);
      }
    `,
  ];

  // Use delegatesFocus so focus delegates to the internal button
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  private _internals: ElementInternals;

  private _handleClick = (event: Event & { tab?: WarpTab }) => {
    if (!event.tab) {
      event.tab = this;
    }
  };

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  /**
   * @summary
   * @description
   */
  @property({ attribute: 'id', reflect: true })
  id!: string;

  /**
   * @summary
   * @description
   */
  @property({ attribute: 'for', reflect: true })
  for!: string;

  /**
   * @summary
   * @description
   */
  @property({ attribute: 'aria-controls' })
  private _ariaControlsAttr?: string;

  /**
   * Internal tabindex managed by parent w-tabs.
   * Non-reflecting to avoid DOM changes during hydration.
   * @internal
   
   * @summary
   * @description
  */
  @property({ attribute: false })
  _parentTabIndex: number | undefined;

  /**
   * Internal aria-selected managed by parent w-tabs.
   * Non-reflecting to avoid DOM changes during hydration.
   * @internal
   
   * @summary
   * @description
  */
  @property({ attribute: false })
  _parentAriaSelected: 'true' | 'false' | undefined;

  /**
   * Override tabIndex getter to return the computed internal tabIndex.
   * This allows external code to check if the tab is focusable.
   */
  override get tabIndex(): number {
    return this._parentTabIndex ?? 0;
  }

  /**
   * Override tabIndex setter to set _parentTabIndex (for backwards compatibility).
   */
  override set tabIndex(value: number) {
    this._parentTabIndex = value;
  }

  /**
   * Computed aria-selected: prefers parent-managed, falls back to own property
   */
  get _computedAriaSelected(): 'true' | 'false' | undefined {
    return this._parentAriaSelected ?? this._ownAriaSelected;
  }

  private get _effectiveAriaControls(): string {
    return this._ariaControlsAttr || this.for || '';
  }

  @property({ attribute: 'aria-selected' })
  set ariaSelected(value: 'true' | 'false') {
    const oldValue = this._ownAriaSelected;
    this._ownAriaSelected = value;
    // Sync to ElementInternals immediately
    this._internals.ariaSelected = this._computedAriaSelected ?? null;
    this.requestUpdate('ariaSelected', oldValue);
  }
  get ariaSelected(): 'true' | 'false' {
    return this._computedAriaSelected ?? 'false';
  }
  private _ownAriaSelected: 'true' | 'false' | undefined;

  /**
   * @deprecated Use `aria-selected="true"` instead
   
   * @summary
   * @description
  */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * @summary
   * @description
   */
  @property({ type: Boolean, reflect: true })
  over = false;

  private get _classes() {
    return classNames([
      ccButtonReset,
      ccTab.base,
      this.active || this.ariaSelected === 'true' ? ccTab.active : ccTab.inactive,
    ]);
  }

  private get _hasIcon() {
    return this.querySelector('[slot="icon"]') !== null;
  }

  connectedCallback() {
    super.connectedCallback();
    // Use ElementInternals for ARIA to avoid hydration mismatches
    this._internals.role = 'tab';
    this.syncAriaControls();
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._handleClick);
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);
    const changedKeys = changedProperties as Map<PropertyKey, unknown>;

    // Sync aria-selected to ElementInternals (no DOM attribute needed - AT reads from ElementInternals)
    if (changedProperties.has('_parentAriaSelected')) {
      this._internals.ariaSelected = this._computedAriaSelected ?? null;
    }
    if (changedKeys.has('_ariaControlsAttr')) {
      this.syncAriaControls();
    }
    if (changedProperties.has('for')) {
      this.syncAriaControls();
    }
    // Only let deprecated `active` drive aria-selected when explicitly set by consumers.
    if (changedProperties.has('active') && this.hasAttribute('active')) {
      this._internals.ariaSelected = this.active ? 'true' : 'false';
    }
  }

  private syncAriaControls() {
    const controlsId = this._effectiveAriaControls;
    const tabsHost = this.closest('w-tabs');
    const panel =
      (tabsHost?.querySelector(`w-tab-panel#${CSS.escape(controlsId)}`) as Element | null) ??
      this.ownerDocument?.getElementById(controlsId) ??
      null;

    // Prefer element relationships on ElementInternals; fall back to string if needed.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const internals = this._internals as any;
    if ('ariaControlsElements' in internals) {
      internals.ariaControlsElements = panel ? [panel] : [];
      return;
    }
    if ('ariaControls' in internals) {
      internals.ariaControls = controlsId || null;
    }
  }

  render() {
    const hasIcon = this._hasIcon;

    return html`
      <button
        type="button"
        role="none"
        id="warp-tab-${this.for}"
        class="${this._classes}"
        tabindex="${this._parentTabIndex ?? 0}"
        aria-controls="${this._effectiveAriaControls}"
        @click="${(e) => {
          e.tab = this;
        }}"
        style="height: 100%">
        ${
          !hasIcon
            ? html`<span class="${ccTab.contentUnderlined}"><slot></slot></span>`
            : this.over
              ? html`
                <span class="${ccTab.icon}">
                  <slot name="icon"></slot>
                </span>
                <span class="${ccTab.contentUnderlined}"><slot></slot></span>
              `
              : html`
                <div class="${ccTab.content}">
                  <slot name="icon"></slot>
                  <slot></slot>
                </div>
              `
        }
      </button>
    `;
  }
}

if (!customElements.get('w-tab')) {
  customElements.define('w-tab', WarpTab);
}
