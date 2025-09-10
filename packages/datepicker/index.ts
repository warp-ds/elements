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
  getDate,
  getWeekOfMonth,
  isSameMonth,
  lastDayOfMonth,
  Locale,
  startOfMonth,
  startOfToday,
  startOfWeek,
  subDays,
  subMonths,
} from 'date-fns';
import { property, query, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
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

/**
 * An input for dates.
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
  isCalendarOpen: boolean;

  /** The current input value as a stringified date-like */
  @state()
  internalValue: string;

  @state()
  navigationDate: Date;

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
      { locale: this.#locale },
    );
    const weekIntervals = weekStarts
      .map((weekStart) => ({
        start: weekStart,
        end: endOfWeek(weekStart, { locale: this.#locale }),
      }))
      .map((week) => eachDayOfInterval(week));

    // Inserts the navigation date into the date matrix
    if (isSameMonth(navigationDate, month)) {
      const weekOfMonth = getWeekOfMonth(navigationDate, { locale: this.#locale }) - 1;

      // we need to get the day of the week to index into the correct day after we've gotten the week
      // getDay() however isn't locale aware. This is a good replacement
      const day = differenceInCalendarDays(navigationDate, startOfWeek(navigationDate, { locale: this.#locale }));

      weekIntervals[weekOfMonth][day] = navigationDate;
    }
    return weekIntervals;
  }

  #calendarId = 'calendar';
  #inputId = 'input';
  #toggleButtonId = 'toggle';
  #wrapperId = 'wrapper';

  #locale: Locale | undefined; // TODO: should we support locale as a property? Or use setDefaultOptions?

  @query('#calendar')
  calendar: HTMLDivElement;

  @query('#input', true)
  input: HTMLInputElement;

  @query('#toggle', true)
  toggle: HTMLButtonElement;

  @query('#wrapper', true)
  wrapper: HTMLDivElement;

  #commitValue(newValue: string) {
    this.value = newValue;
    // TODO: emit change event
  }

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

  #onClickOutside(e: MouseEvent | FocusEvent) {
    if (!this.isCalendarOpen) {
      return;
    }
    const isInsideDatePicker =
      this.wrapper.contains(e.target as Node) ||
      this.calendar.contains(e.target as Node) ||
      this.input.contains(e.target as Node) ||
      this.toggle.contains(e.target as Node);

    if (isInsideDatePicker) {
      return;
    }

    this.isCalendarOpen = false;
  }

  #onInput(e: InputEvent) {
    this.internalValue = (e.target as HTMLInputElement).value;
  }

  #onInputBlur(e: FocusEvent) {
    this.#commitValue((e.target as HTMLInputElement).value);
  }

  #onInputKeyDown(e: KeyboardEvent) {
    if (e.key === ' ') return this.#toggleCalendarOpen(e);
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
    }
  }

  #onSelect(date: string) {
    this.internalValue = date;
    this.isCalendarOpen = false;
    this.#commitValue(date);
  }

  connectedCallback(): void {
    this.internalValue = this.value;
    if (this.value) {
      this.navigationDate = fromISOToDate(this.value) ?? startOfToday();
    }

    document.addEventListener('mousedown', this.#onClickOutside);
    document.addEventListener('touchend', this.#onClickOutside);
    document.addEventListener('focusin', this.#onClickOutside);
  }

  disconnectedCallback(): void {
    document.removeEventListener('mousedown', this.#onClickOutside);
    document.removeEventListener('touchend', this.#onClickOutside);
    document.removeEventListener('focusin', this.#onClickOutside);
  }

  render() {
    return html`
      <div class="w-datepicker-wrapper" id="${this.#wrapperId}">
        <label class="w-datepicker-input-label" for="${this.#inputId}">${this.label}</label>
        <div className="w-datepicker-input-wrapper">
          <input
            id="${this.#inputId}"
            type="${inputType}"
            name="${ifDefined(this.name)}"
            value="${ifDefined(this.value)}"
            className="w-datepicker-input"
            @input="${this.#onInput}"
            @blur="${this.#onInputBlur}"
            @keydown="${this.#onInputKeyDown}" />
          <w-button
            id="${this.#toggleButtonId}"
            class="w-datepicker-button"
            aria-label="Open calendar"
            variant="utility"
            quiet
            type="button"
            @click="${this.#toggleCalendarOpen}">
            <w-icon-calendar-16></w-icon-calendar-16>
          </w-button>
        </div>
      </div>
      ${cache(
        this.isCalendarOpen
          ? html`
              <div class="w-dropdown__popover w-dropdown__popover--open">
                <div class="w-datepicker__calendar" aria-roledescription="TODO" id="${this.#calendarId}">
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
                    <div class="w-datepicker__month__nav__header">${format(this.month, this.headerFormat, { locale: this.#locale })}</div>
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
                </div>
                <div class="w-datepicker__month">
                  <table class="w-datepicker__table" role="grid">
                    <thead class="w-datepicker__weekdays">
                      <tr>
                        ${this.weeks[0].map(
                          (day) =>
                            html`<th className="w-datepicker__weekday" key="{day.toISOString()}">
                              ${format(day, this.weekdayFormat, { locale: this.#locale })}
                            </th> `,
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      ${this.weeks.map(
                        (week) =>
                          html`<tr>
                            ${week.map(
                              (day) =>
                                html`<td class="w-datepicker__day" role="gridcell">
                                  <!-- TODO: td class variants -->
                                  <!-- TODO: aria attributes -->
                                  <!-- TODO: JS handlers everywhere -->
                                  <div>${getDate(day)}</div>
                                </td>`,
                            )}
                          </tr>`,
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            `
          : nothing,
      )}
    `;
  }
}

if (!customElements.get('w-datepicker')) {
  customElements.define('w-datepicker', WarpDatepicker);
}

export { WarpDatepicker };
