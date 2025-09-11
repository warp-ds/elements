import { LitElement, html, nothing } from 'lit';

import { FormControlMixin } from '@open-wc/form-control';
import WarpElement from '@warp-ds/elements-core';
import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  format,
  formatISO,
  getDate,
  getWeekOfMonth,
  isSameDay,
  isSameMonth,
  isToday,
  lastDayOfMonth,
  Locale,
  startOfMonth,
  startOfToday,
  startOfWeek,
  subDays,
  subMonths,
} from 'date-fns';
import { enGB, nb, sv, da, fi } from 'date-fns/locale';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@warp-ds/icons/elements/calendar-16';
import '@warp-ds/icons/elements/chevron-left-16';
import '@warp-ds/icons/elements/chevron-right-16';

import { reset } from '../styles.js';

import { wDatepickerCalendarStyles } from './styles/w-datepicker-calendar.styles.js';
import { wDatepickerDayStyles } from './styles/w-datepicker-day.styles.js';
import { wDatepickerMonthStyles } from './styles/w-datepicker-month.styles.js';
import { wDatepickerStyles } from './styles/w-datepicker.styles.js';
import { fromISOToDate } from './utils.js';

const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isIOS = /iP(hone|od|ad)/.test(ua);
const inputType = isIOS ? 'text' : 'date';

const calendarId = 'calendar';
const inputId = 'input';
const toggleButtonId = 'toggle';
const wrapperId = 'wrapper';

// Convenience to support the common locales of our users.
// For other locales either add to this list or point users
// to https://date-fns.org/v4.1.0/docs/setDefaultOptions
const locales = {
  en: enGB,
  nb,
  sv,
  da,
  fi,
};

/**
 * An input for dates.
 *
 * Uses the `lang` attribute on either the element or on `<html>` to determine the locale options.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/forms-datepicker--docs)
 */
class WarpDatepicker extends FormControlMixin(LitElement) {
  static shadowRootOptions = {
    ...WarpElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [reset, wDatepickerStyles, wDatepickerCalendarStyles, wDatepickerDayStyles, wDatepickerMonthStyles];

  @property({ reflect: true })
  label: string;

  /** Takes precedence over the `<html>` lang attribute. */
  @property({ reflect: true })
  lang: string;

  @property({ reflect: true })
  name: string;

  @property({ reflect: true })
  value: string;

  /**
   * Decides the format of the date as shown in the calendar header.
   *
   * The syntax is defined by [date-fns/format](https://date-fns.org/v4.1.0/docs/format).
   */
  @property({ attribute: 'header-format' })
  headerFormat = 'MMMM yyyy';

  /**
   * Decides the format of the weekday as shown above the grid of dates in the calendar.
   *
   * The syntax is defined by [date-fns/format](https://date-fns.org/v4.1.0/docs/format).
   */
  @property({ attribute: 'weekday-format' })
  weekdayFormat = 'EEEEEE';

  /**
   * Decides the format of the day in the calendar as read to screen readers.
   *
   * The syntax is defined by [date-fns/format](https://date-fns.org/v4.1.0/docs/format).
   */
  @property({ attribute: 'day-format' })
  dayFormat = 'PPPP';

  @state()
  isCalendarOpen = false;

  /** The current input value as a stringified date-like */
  @state()
  internalValue = '';

  @state()
  navigationDate: Date = startOfToday();

  @state()
  locale: Locale = enGB;

  @state()
  get selectedDate(): Date | null {
    return fromISOToDate(this.value) ?? null;
  }

  @state()
  get month() {
    return startOfMonth(this.navigationDate);
  }

  @state()
  get weeks() {
    const month = this.month;
    const navigationDate = this.navigationDate;
    const weekStarts = eachWeekOfInterval(
      {
        start: startOfMonth(month),
        end: lastDayOfMonth(month),
      },
      { locale: this.locale },
    );
    const weekIntervals = weekStarts
      .map((weekStart) => ({
        start: weekStart,
        end: endOfWeek(weekStart, { locale: this.locale }),
      }))
      .map((week) => eachDayOfInterval(week));

    // Inserts the navigation date into the date matrix
    if (isSameMonth(navigationDate, month)) {
      const weekOfMonth = getWeekOfMonth(navigationDate, { locale: this.locale }) - 1;

      // we need to get the day of the week to index into the correct day after we've gotten the week
      // getDay() however isn't locale aware. This is a good replacement
      const day = differenceInCalendarDays(navigationDate, startOfWeek(navigationDate, { locale: this.locale }));

      weekIntervals[weekOfMonth][day] = navigationDate;
    }
    return weekIntervals;
  }

  @query(`#${calendarId}`)
  calendar: HTMLDivElement;

  @query(`#${inputId}`, true)
  input: HTMLInputElement;

  @query(`#${toggleButtonId}`, true)
  toggleButton: HTMLButtonElement;

  @query(`#${wrapperId}`, true)
  wrapper: HTMLDivElement;

  @query('[data-navigation="true"]')
  selectedCell: HTMLTableCellElement;

  #toggleCalendarOpen(e: MouseEvent | KeyboardEvent) {
    e.preventDefault();
    this.isCalendarOpen = !this.isCalendarOpen;
  }

  #nextMonth() {
    this.navigationDate = addMonths(this.month, 1);
  }

  #previousMonth() {
    this.navigationDate = subMonths(this.month, 1);
  }

  async #dispatchChangeEvent() {
    // Let Lit finish rendering the updated value for the input field so
    // the `event.target.value` is correct.
    await this.updateComplete;
    this.input.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onClickOutside(e: MouseEvent | FocusEvent) {
    if (!this.isCalendarOpen) {
      return;
    }
    const isInsideDatePicker =
      this.wrapper.contains(e.target as Node) ||
      this.calendar.contains(e.target as Node) ||
      this.input.contains(e.target as Node) ||
      this.toggleButton.contains(e.target as Node);

    if (isInsideDatePicker) {
      return;
    }

    this.isCalendarOpen = false;
  }

  #onInput(e: InputEvent) {
    this.internalValue = (e.target as HTMLInputElement).value;
  }

  #onInputBlur(e: FocusEvent) {
    this.value = (e.target as HTMLInputElement).value;
    this.#dispatchChangeEvent();
  }

  #onInputKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') return this.#toggleCalendarOpen(e);
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
    }
  }

  async #onCalendarKeyDown(e: KeyboardEvent) {
    const navigationDate = this.navigationDate;
    let newNavigationDate: Date;

    switch (e.key) {
      case 'ArrowUp':
        newNavigationDate = subDays(navigationDate, 7);
        break;
      case 'ArrowLeft':
        newNavigationDate = subDays(navigationDate, 1);
        break;
      case 'Home':
        newNavigationDate = startOfWeek(navigationDate, { locale: this.locale });
        break;
      case 'PageUp':
        newNavigationDate = subMonths(navigationDate, 1);
        break;
      case 'ArrowDown':
        newNavigationDate = addDays(navigationDate, 7);
        break;
      case 'ArrowRight':
        newNavigationDate = addDays(navigationDate, 1);
        break;
      case 'End':
        newNavigationDate = endOfWeek(navigationDate, { locale: this.locale });
        break;
      case 'PageDown':
        newNavigationDate = addMonths(navigationDate, 1);
        break;
      case 'Escape':
        this.isCalendarOpen = false;
        break;
    }

    if (newNavigationDate) {
      // prevent scrolling the viewport
      e.preventDefault();
      this.navigationDate = newNavigationDate;

      // move keyboard focus once Lit has rendered an updated `data-navigation`
      // based on this.navigationDate
      await this.updateComplete;
      this.selectedCell.focus();
    }
  }

  #onCalendarSelect(event: MouseEvent | KeyboardEvent) {
    // Clicks can hit the `<div>` inside the `<td>`, so look at
    // currentTarget (where the listener is registered) to get
    // the `<td>` consistently.
    const isoDate = (event.currentTarget as HTMLTableCellElement).dataset.date;

    if ('key' in event) {
      if (event.key === 'Enter' || event.key === ' ') {
        // Prevents whitespace from being added to the input field
        event.preventDefault();
        this.internalValue = this.value = isoDate;
        this.isCalendarOpen = false;
        this.toggleButton.focus();
        this.#dispatchChangeEvent();
      }
    } else {
      this.internalValue = this.value = isoDate;
      this.isCalendarOpen = false;
      this.#dispatchChangeEvent();
    }
  }

  constructor() {
    super();

    const lang = document.querySelector('html').attributes['lang'];
    if (lang && locales[lang]) {
      this.locale = locales[lang];
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    // Local lang attribute takes precedence
    const lang = this.lang;
    if (lang && locales[lang]) {
      this.locale = locales[lang];
    }

    this.internalValue = this.value;
    if (this.value) {
      const iso = fromISOToDate(this.value);
      if (iso) {
        this.navigationDate = iso;
      }
    }

    document.addEventListener('mousedown', this.#onClickOutside);
    document.addEventListener('touchend', this.#onClickOutside);
    document.addEventListener('focusin', this.#onClickOutside);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    document.removeEventListener('mousedown', this.#onClickOutside);
    document.removeEventListener('touchend', this.#onClickOutside);
    document.removeEventListener('focusin', this.#onClickOutside);
  }

  render() {
    return html`
      <div class="w-datepicker-wrapper" id="${wrapperId}">
        <label class="w-datepicker-input-label" for="${inputId}">${this.label}</label>
        <div class="w-datepicker-input-wrapper">
          <input
            id="${inputId}"
            type="${inputType}"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            class="w-datepicker-input"
            @input="${this.#onInput}"
            @blur="${this.#onInputBlur}"
            @keydown="${this.#onInputKeyDown}" />
          <w-button
            id="${toggleButtonId}"
            class="w-datepicker-button"
            aria-label="${this.value ? `Change date, ${format(this.value, this.dayFormat)}` : 'Choose date'}"
            variant="utility"
            quiet
            type="button"
            @click="${this.#toggleCalendarOpen}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      ${this.isCalendarOpen
        ? html`
            <div class="w-dropdown__popover w-dropdown__popover--open">
              <div aria-roledescription="TODO" class="w-datepicker__calendar" id="${calendarId}" @keydown="${this.#onCalendarKeyDown}">
                <div class="w-datepicker__month-nav">
                  <w-button
                    aria-label="TODO"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#previousMonth}">
                    <w-icon-chevron-left-16></w-icon-chevron-left-16>
                  </w-button>
                  <div class="w-datepicker__month__nav__header">${format(this.month, this.headerFormat, { locale: this.locale })}</div>
                  <w-button
                    aria-label="TODO"
                    class="w-datepicker__month__nav__button"
                    variant="utility"
                    quiet
                    small
                    @click="${this.#nextMonth}">
                    <w-icon-chevron-right-16></w-icon-chevron-right-16>
                  </w-button>
                </div>
                <div class="w-datepicker__month">
                  <table class="w-datepicker__table" role="grid">
                    <thead class="w-datepicker__weekdays">
                      <tr>
                        ${this.weeks[0].map(
                          (day) =>
                            html`<th class="w-datepicker__weekday">${format(day, this.weekdayFormat, { locale: this.locale })}</th> `,
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      ${this.weeks.map(
                        (week) =>
                          html`<tr>
                            ${week.map((day) => {
                              if (!isSameMonth(this.month, day)) {
                                return html`<td />`;
                              }

                              const isDisabled = false; // TODO: support isDayDisabled function
                              const isSelected = isSameDay(day, this.selectedDate);
                              const isNavigationDate = day === this.navigationDate;

                              return html`<td
                                aria-current="${ifDefined(isToday(day) ? 'date' : undefined)}"
                                aria-disabled="${isDisabled}"
                                aria-label="${format(day, this.dayFormat, { locale: this.locale })}"
                                aria-selected="${isSelected}"
                                class="${classMap({
                                  'w-datepicker__day': true,
                                  'w-datepicker__day--today': isToday(day),
                                  'w-datepicker__day--selected': isSelected,
                                  'w-datepicker__day--disabled': isDisabled,
                                  'w-datepicker__day--navigation': isNavigationDate,
                                })}"
                                data-navigation="${isNavigationDate}"
                                data-date="${formatISO(day, { representation: 'date' })}"
                                role="gridcell"
                                tabindex="${isNavigationDate ? 0 : -1}"
                                @click="${isDisabled ? undefined : this.#onCalendarSelect}"
                                @keydown="${isDisabled ? undefined : this.#onCalendarSelect}">
                                <div>${getDate(day)}</div>
                              </td>`;
                            })}
                          </tr>`,
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          `
        : nothing}
    `;
  }
}

if (!customElements.get('w-datepicker')) {
  customElements.define('w-datepicker', WarpDatepicker);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-datepicker': WarpDatepicker;
  }
}

export { WarpDatepicker };
