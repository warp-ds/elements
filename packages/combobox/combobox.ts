// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { FormControlMixin } from '@open-wc/form-control';
import { html, LitElement, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { activateI18n } from '../i18n.js';
import { reset } from '../styles.js';
import '../option/option.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import { styles } from './styles.js';

const ccCombobox = {
  wrapper: 'relative z-0',
  base: 'absolute z-20 left-0 right-0 s-bg pb-4 rounded-8 overflow-hidden shadow-m',
  listbox: 'm-0 p-0 select-none list-none',
  option: 'block cursor-pointer p-8',
  optionUnselected: 'hover:s-bg-hover',
  optionSelected: 's-bg-selected hover:s-bg-selected-hover',
  textMatch: 'font-bold',
  a11y: 'sr-only',
};

export interface ComboboxOption {
  value: string;
  label?: string;
  key?: string;
}

interface OptionWithIdAndMatch extends ComboboxOption {
  id: string;
  key: string;
  currentInputValue: string;
}

/**
 * A combobox element for text input with selectable options.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-combobox--docs)
 */
export class WarpCombobox extends FormControlMixin(LitElement) {
  /** The available options to select from */
  @property({ type: Array })
  options: ComboboxOption[] = [];

  /** Label above input */
  @property({ type: String, reflect: true })
  label?: string;

  /** Input placeholder */
  @property({ type: String, reflect: true })
  placeholder?: string;

  /** The input value */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether the popover opens when focus is on the text field */
  @property({ type: Boolean, attribute: 'open-on-focus' })
  openOnFocus = false;

  /** Select active option on blur */
  @property({ type: Boolean, attribute: 'select-on-blur' })
  selectOnBlur = true;

  /** Whether the matching text segments in the options should be highlighted */
  @property({ type: Boolean, attribute: 'match-text-segments' })
  matchTextSegments = false;

  /** Disable client-side static filtering */
  @property({ type: Boolean, attribute: 'disable-static-filtering' })
  disableStaticFiltering = false;

  /** Renders the input field in an invalid state */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  /** The content to display as the help text */
  @property({ type: String, attribute: 'help-text', reflect: true })
  helpText?: string;

  /** Whether the element is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether the element is required */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Whether to show optional text */
  @property({ type: Boolean, reflect: true })
  optional = false;

  /** Name attribute for form submission */
  @property({ type: String, reflect: true })
  name?: string;

  /** Autocomplete attribute for the input field */
  @property({ type: String, reflect: true })
  autocomplete?: string = 'off';

  /** @internal Options list open boolean */
  @state()
  private _isOpen = false;

  /** @internal The option the user has navigated to with their keyboard */
  @state()
  private _navigationOption: OptionWithIdAndMatch | null = null;

  /** @internal Available options based on user's input value */
  @state()
  private _currentOptions: OptionWithIdAndMatch[] = [];

  /** @internal Parsed light-DOM options from child <w-option> nodes */
  @state()
  private _childOptions: ComboboxOption[] = [];

  /** @internal Unique identifier counter for options */
  @state()
  private _optionIdCounter = 0;

  /** @internal The text displayed in the input field (may differ from value when option has label) */
  @state()
  private _displayValue = '';

  static styles = [reset, styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
  }

  // capture the initial value using firstUpdated and #initialValue
  #initialValue: string | null = null;
  #lightDomObserver?: MutationObserver;

  connectedCallback() {
    super.connectedCallback();
    this._syncChildOptions();

    this.#lightDomObserver = new MutationObserver(() => {
      this._syncChildOptions();
    });
    this.#lightDomObserver.observe(this, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['value', 'label', 'key'],
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#lightDomObserver?.disconnect();
  }

  firstUpdated(changedProps: Map<string, unknown>) {
    this.#initialValue = this.value;
  }

  updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  resetFormControl(): void {
    this.value = this.#initialValue;
  }

  private get _listboxId() {
    return `${this._id}-listbox`;
  }

  private get _id() {
    return 'combobox';
  }

  private get _helpId() {
    return this.helpText ? `${this._id}__hint` : undefined;
  }

  /**
   * Backward compatibility:
   * keep `.options` as the primary API and only use child options when `.options` is empty.
   */
  private get _effectiveOptions() {
    return this.options.length ? this.options : this._childOptions;
  }

  private _syncChildOptions() {
    const optionNodes = Array.from(this.children).filter((child) => child.tagName.toLowerCase() === 'w-option');

    this._childOptions = optionNodes.map((child: Element) => {
      const value = child.getAttribute('value') ?? '';
      const labelAttr = child.getAttribute('label');
      const labelText = child.textContent?.trim() || undefined;
      const key = child.getAttribute('key') || undefined;

      return {
        value,
        label: labelAttr || labelText,
        key,
      };
    });
  }

  /** Get the display text for the navigation option or current display value */
  private get _navigationLabelOrDisplayValue() {
    if (this._navigationOption) {
      return this._navigationOption.label || this._navigationOption.value;
    }
    return this._displayValue;
  }

  /** Get the actual value for the navigation option or current value */
  private get _navigationValueOrInputValue() {
    return this._navigationOption?.value || this.value;
  }

  /** Generate options with unique IDs and match information */
  private _createOptionsWithIdAndMatch(options: ComboboxOption[], currentInputValue: string): OptionWithIdAndMatch[] {
    return options.map((option, index) => ({
      ...option,
      id: `${this._id}-option-${this._optionIdCounter + index}`,
      key: option.key || option.value,
      currentInputValue,
    }));
  }

  /** Get ARIA text for screen readers */
  private _getAriaText(options: OptionWithIdAndMatch[], value: string, isOpen: boolean) {
    if (!options || !isOpen) return '';

    const filteredOptionsByInputValue = options.filter((option) =>
      (option.label || option.value).toLowerCase().includes(value.toLowerCase()),
    );

    const pluralSuggestions = i18n._({
      id: 'combobox.aria.pluralSuggestions',
      message: '{numSuggestions, plural, one {# suggestion} other {# suggestions}}',
      comment: 'Aria text for combobox when there are one or more suggestions',
      values: { numSuggestions: filteredOptionsByInputValue.length },
    });

    const noSuggestions = i18n._({
      id: 'combobox.aria.noSuggestions',
      message: 'No suggestions',
      comment: 'Aria text for combobox when no suggestions',
    });

    return filteredOptionsByInputValue.length ? pluralSuggestions : noSuggestions;
  }

  /** Get option classes */
  private _getOptionClasses(option: OptionWithIdAndMatch) {
    return classNames(
      ccCombobox.option,
      this._navigationOption?.id === option?.id ? ccCombobox.optionSelected : ccCombobox.optionUnselected,
    );
  }

  /** Handle keyboard navigation */
  private _handleKeyDown(e: KeyboardEvent) {
    const isNavigationKey = ['ArrowDown', 'ArrowUp', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key);
    const ignoreList = ['ArrowDown', 'ArrowLeft', 'ArrowUp', 'ArrowRight'];

    if (isNavigationKey && !this._isOpen) {
      this._isOpen = true;
      return;
    }
    if (isNavigationKey && this._isOpen) {
      this._findAndSetActiveOption(e);
      return;
    }
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }

    // Other keys
    switch (e.key) {
      case 'Enter':
        if (this._navigationOption) {
          e.preventDefault();
          this._handleSelect(this._navigationOption);

          // Force update the textfield's internal input value with the label
          requestAnimationFrame(() => {
            const textfield = this.shadowRoot?.querySelector('w-textfield');
            const input = textfield?.shadowRoot?.querySelector('input');
            if (input) {
              input.value = this._displayValue;
            }
          });
        }
        this._isOpen = false;
        break;
      case 'Tab':
      case 'Delete':
        this._isOpen = false;
        break;
      case 'Escape':
        if (this._isOpen) {
          this._isOpen = false;
        } else {
          this._handleChange('');
        }
        this._navigationOption = null;
        break;
      case 'Backspace':
        this._handleChange(this._navigationLabelOrDisplayValue);
        this._navigationOption = null;
        this._isOpen = true;
        break;
      default:
        if (ignoreList.includes(e.key)) {
          break;
        }

        this._isOpen = true;
        if (this._navigationOption) {
          this._handleChange(this._navigationOption.value);
          this._navigationOption = null;
        } else {
          this._handleChange(this.value);
        }
        break;
    }
  }

  /** Find and set active option based on keyboard navigation */
  private _findAndSetActiveOption(e: KeyboardEvent) {
    e.preventDefault();

    const currIndex = this._currentOptions.findIndex((option) => option.id === this._navigationOption?.id);
    const nextIndex = currIndex + 1;
    const prevIndex = currIndex - 1;

    switch (e.key) {
      case 'ArrowDown':
        this._navigationOption = nextIndex > this._currentOptions.length - 1 ? null : this._currentOptions[nextIndex];
        break;
      case 'ArrowUp':
        this._navigationOption =
          prevIndex === -2
            ? this._currentOptions[this._currentOptions.length - 1]
            : prevIndex < 0
              ? null
              : this._currentOptions[prevIndex];
        break;
      case 'PageUp':
        this._navigationOption = currIndex - 10 < 0 ? this._currentOptions[0] : this._currentOptions[currIndex - 10];
        break;
      case 'PageDown':
        this._navigationOption =
          currIndex + 10 > this._currentOptions.length - 1
            ? this._currentOptions[this._currentOptions.length - 1]
            : this._currentOptions[currIndex + 10];
        break;
      case 'Home':
        this._navigationOption = this._currentOptions[0];
        break;
      case 'End':
        this._navigationOption = this._currentOptions[this._currentOptions.length - 1];
        break;
    }
  }

  /** Handle option selection */
  private _handleSelect(option: OptionWithIdAndMatch) {
    this.value = option.value;
    this._displayValue = option.label || option.value;
    this.setValue(this.value);

    const selectEvent = new CustomEvent('select', {
      detail: { value: option.value },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(selectEvent);

    this._isOpen = false;
    this._navigationOption = null;

    // Set empty states on select and clear when dynamic list
    if (this.disableStaticFiltering) {
      this._currentOptions = [];
    }
  }

  /** Handle input change */
  private _handleChange(newValue: string) {
    if (newValue === undefined) return;

    this.value = newValue;
    this._displayValue = newValue;

    const changeEvent = new CustomEvent('change', {
      detail: { value: newValue },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(changeEvent);
  }

  /** Handle input focus */
  private _handleFocus() {
    if (!this.openOnFocus) return;

    const focusEvent = new CustomEvent('focus', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(focusEvent);

    this._isOpen = true;
  }

  /** Handle input blur */
  private _handleBlur(e: FocusEvent) {
    // Check if focus moved to an option
    const relatedTarget = e.relatedTarget as Element;
    if (relatedTarget && this.shadowRoot?.contains(relatedTarget)) {
      return;
    }

    this._isOpen = false;

    // If user has navigated to an option on blur || the input value equals one of the options' value -> select value
    if (
      this.selectOnBlur &&
      (this._navigationOption ||
        (!this._navigationOption && this._currentOptions.findIndex((o) => o.value === this.value) !== -1))
    ) {
      const selectedValue = this._navigationOption?.value || this.value;
      this.value = selectedValue;

      const selectEvent = new CustomEvent('select', {
        detail: { value: selectedValue },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(selectEvent);
    }

    this._navigationOption = null;

    const blurEvent = new CustomEvent('blur', {
      detail: { value: this._navigationValueOrInputValue },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(blurEvent);
  }

  /** Handle option click */
  private _handleOptionClick(e: MouseEvent, option: OptionWithIdAndMatch) {
    this._handleSelect(option);

    // Force update the textfield's internal input value with the label
    requestAnimationFrame(() => {
      const textfield = this.shadowRoot?.querySelector('w-textfield');
      const input = textfield?.shadowRoot?.querySelector('input');
      if (input) {
        input.value = option.label || option.value;
      }
    });
  }

  /** Handle container blur */
  private _handleContainerBlur(e: FocusEvent) {
    const isClickOutsideContainer =
      !e.currentTarget || !(e.currentTarget as Element).contains(e.relatedTarget as Element);
    if (isClickOutsideContainer) {
      this._isOpen = false;
    }
  }

  /** Render highlighted text match */
  private _renderTextMatch(display: string, option: OptionWithIdAndMatch) {
    if (!this.matchTextSegments) return display;

    const startIdx = display.toLowerCase().indexOf(option.currentInputValue.toLowerCase());

    if (startIdx !== -1) {
      const endIdx = startIdx + option.currentInputValue.length;
      return html`${display.substring(0, startIdx)}<span class="${ccCombobox.textMatch}">${display.substring(startIdx, endIdx)}</span
        >${display.substring(endIdx)}`;
    }

    return display;
  }

  protected willUpdate(changedProperties: PropertyValues<this>) {
    // Sync _displayValue when value or options change externally (before filtering)
    if (
      changedProperties.has('value') ||
      changedProperties.has('options') ||
      (changedProperties as Map<string, unknown>).has('_childOptions')
    ) {
      const matchingOption = this._effectiveOptions.find((o) => o.value === this.value);
      // Only sync if this is an external value change (not from user typing)
      // We detect this by checking if _displayValue doesn't match the expected label
      const expectedDisplay = matchingOption ? matchingOption.label || matchingOption.value : this.value;
      if (this._displayValue !== expectedDisplay && this._displayValue !== this.value) {
        this._displayValue = expectedDisplay;
      }
      // Handle initial value or external value set
      if (!this._displayValue && this.value) {
        this._displayValue = expectedDisplay;
      }
    }

    if (
      changedProperties.has('options') ||
      (changedProperties as Map<string, unknown>).has('_childOptions') ||
      changedProperties.has('value') ||
      changedProperties.has('disableStaticFiltering') ||
      (changedProperties as Map<string, unknown>).has('_displayValue')
    ) {
      this._optionIdCounter += this._effectiveOptions.length;

      this._currentOptions = this._createOptionsWithIdAndMatch(this._effectiveOptions, this._displayValue).filter((option) =>
        !this.disableStaticFiltering
          ? (option.label || option.value).toLowerCase().includes(this._displayValue.toLowerCase())
          : true,
      );
    }

    if (
      this.disableStaticFiltering &&
      this._currentOptions.length &&
      this._currentOptions.length === 1 &&
      !this._currentOptions.some((o) => o.value === this.value) &&
      !this._isOpen
    ) {
      this._isOpen = true;
    }
  }

  render() {
    return html`
      <div class=${classNames(ccCombobox.wrapper)} @blur=${this._handleContainerBlur}>
        <w-textfield
          class="w-combobox-textfield"
          .value=${this._navigationLabelOrDisplayValue}
          .label=${this.label}
          .placeholder=${this.placeholder}
          .invalid=${this.invalid}
          .helpText=${this.helpText}
          .disabled=${this.disabled}
          .required=${this.required}
          .optional=${this.optional}
          .name=${this.name}
          .autocomplete="${this.autocomplete}"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded=${this._isOpen && this._currentOptions.length !== 0}
          aria-activedescendant=${this._isOpen ? this._navigationOption?.id : undefined}
          aria-controls=${this._listboxId}
          @input=${(e: CustomEvent) => this._handleChange(e?.detail?.value)}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}></w-textfield>

        <span class="${ccCombobox.a11y}" role="status">
          ${this._getAriaText(this._currentOptions, this._displayValue, this._isOpen)}
        </span>

        <div ?hidden=${!this._isOpen || !this._currentOptions.length} class=${classNames(ccCombobox.base)}>
          <ul id=${this._listboxId} role="listbox" class="${ccCombobox.listbox}">
            ${repeat(
              this._currentOptions,
              (option) => option.key,
              (option) => {
                const display = option.label || option.value;
                return html`
                  <li
                    id=${option.id}
                    role="option"
                    aria-selected=${this._navigationOption?.id === option.id}
                    tabindex="-1"
                    class=${this._getOptionClasses(option)}
                    @mousedown=${(e: MouseEvent) => this._handleOptionClick(e, option)}>
                    ${this._renderTextMatch(display, option)}
                  </li>
                `;
              },
            )}
          </ul>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-combobox')) {
  customElements.define('w-combobox', WarpCombobox);
}
