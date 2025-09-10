import { css } from 'lit';

export const wDatepickerMonthStyles = css`
  .w-datepicker__month {
    /* Sets default used in the day fragment */
    --day-width: 40px;

    --_month-color: var(--month-color, var(--w-s-color-text));
    --_month-font-size: var(--month-font-size, var(--w-font-size-m));
    --_month-line-height: var(--month-line-height, var(--w-line-height-m));

    --_month-table-min-width: var(--month-table-min-width, calc(var(--day-width) * 7));

    --_weekdays-font-size: var(--weekdays-font-size, var(--w-font-size-xs));
    --_weekdays-line-height: var(--weekdays-font-size, var(--w-line-height-xs));
    --_weekdays-font-weight: var(--weekdays-font-weight, bold);

    --_weekdays-padding: var(--weekdays-padding, 8px 0 4px 0);

    text-align: center;
    user-select: none;
    display: inline-block;

    color: var(--_month-color);
    font-size: var(--_month-font-size);
    line-height: var(--_month-line-height);
  }

  .w-datepicker__month__nav {
    margin: 0 0 8px 0;
  }

  .w-datepicker__month__nav__header {
    text-align: center;
    font-weight: Bold;
  }

  .w-datepicker__table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    min-width: var(--_month-table-min-width);
    padding-top: 8px;
  }

  .w-datepicker__weekday {
    text-align: center;
    font-size: var(--_weekdays-font-size);
    line-height: var(--_weekdays-line-height);
    font-weight: var(--_weekdays-font-weight);
    padding: var(--_weekdays-padding);
  }

  .w-datepicker__month-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .w-datepicker__month__nav__button {
    flex-shrink: 0;
  }

  .w-datepicker__month__nav__header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
