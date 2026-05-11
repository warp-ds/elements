import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpCombobox } from './combobox.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseCombobox = createComponent({
  tagName: 'w-combobox',
  elementClass: Component as unknown as typeof WarpCombobox,
  react: React,
  events: {
    onSelect: 'select',
    onselect: 'select',
    onChange: 'change',
    onchange: 'change',
  },
});

type BaseComboboxProps = React.ComponentPropsWithoutRef<typeof BaseCombobox>;

type ComboboxProps = Omit<
  BaseComboboxProps,
  'open-on-focus' | 'select-on-blur' | 'match-text-segments' | 'disable-static-filtering' | 'help-text'
> & {
  openOnFocus?: boolean;
  selectOnBlur?: boolean;
  matchTextSegments?: boolean;
  disableStaticFiltering?: boolean;
  helpText?: string;
};

export const Combobox = React.forwardRef<WarpCombobox, ComboboxProps>(
  ({ openOnFocus, selectOnBlur, matchTextSegments, disableStaticFiltering, helpText, ...props }, ref) =>
    React.createElement(BaseCombobox, {
      ...props,
      ...(openOnFocus ? { 'open-on-focus': true } : {}),
      ...(selectOnBlur ? { 'select-on-blur': true } : {}),
      ...(matchTextSegments ? { 'match-text-segments': true } : {}),
      ...(disableStaticFiltering ? { 'disable-static-filtering': true } : {}),
      ...(helpText !== undefined ? { 'help-text': helpText } : {}),
      ref,
    } as React.ComponentProps<typeof BaseCombobox> & {
      'open-on-focus'?: boolean;
      'select-on-blur'?: boolean;
      'match-text-segments'?: boolean;
      'disable-static-filtering'?: boolean;
      'help-text'?: string;
    }),
);

Combobox.displayName = 'Combobox';
