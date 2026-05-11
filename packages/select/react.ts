import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSelect } from './select.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSelect = createComponent({
  tagName: 'w-select',
  elementClass: Component as unknown as typeof WarpSelect,
  react: React,
  events: {
    onChange: 'change',
    onchange: 'change',
  },
});

type BaseSelectProps = React.ComponentPropsWithoutRef<typeof BaseSelect>;

type SelectProps = Omit<BaseSelectProps, 'auto-focus' | 'help-text' | 'read-only'> & {
  autoFocus?: boolean;
  helpText?: string;
  readOnly?: boolean;
};

export const Select = React.forwardRef<WarpSelect, SelectProps>(({ autoFocus, helpText, readOnly, ...props }, ref) =>
  React.createElement(BaseSelect, {
    ...props,
    ...(autoFocus ? { 'auto-focus': true } : {}),
    ...(helpText !== undefined ? { 'help-text': helpText } : {}),
    ...(readOnly ? { 'read-only': true } : {}),
    ref,
  } as React.ComponentProps<typeof BaseSelect> & {
    'auto-focus'?: boolean;
    'help-text'?: string;
    'read-only'?: boolean;
  }),
);

Select.displayName = 'Select';

export const Option = createComponent({
  tagName: 'w-option',
  elementClass: Component as unknown as typeof HTMLOptionElement,
  react: React,
});
