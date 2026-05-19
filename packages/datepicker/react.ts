import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpDatepicker } from './datepicker.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseDatePicker = createComponent({
  tagName: 'w-datepicker',
  elementClass: Component as unknown as typeof WarpDatepicker,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
    onBlur: 'blur',
    onblur: 'blur',
    onInput: 'input',
    oninput: 'input',
  },
});

type BaseDatePickerProps = React.ComponentPropsWithoutRef<typeof BaseDatePicker>;

type DatePickerProps = Omit<BaseDatePickerProps, 'header-format' | 'weekday-format' | 'day-format'> & {
  headerFormat?: string;
  weekdayFormat?: string;
  dayFormat?: string;
};

export const DatePicker = React.forwardRef<WarpDatepicker, DatePickerProps>(
  ({ headerFormat, weekdayFormat, dayFormat, ...props }, ref) =>
    React.createElement(BaseDatePicker, {
      ...props,
      ...(headerFormat !== undefined ? { 'header-format': headerFormat } : {}),
      ...(weekdayFormat !== undefined ? { 'weekday-format': weekdayFormat } : {}),
      ...(dayFormat !== undefined ? { 'day-format': dayFormat } : {}),
      ref,
    } as React.ComponentProps<typeof BaseDatePicker> & {
      'header-format'?: string;
      'weekday-format'?: string;
      'day-format'?: string;
    }),
);

DatePicker.displayName = 'DatePicker';
