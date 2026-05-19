import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpTextField } from './textfield.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTextField = createComponent({
  tagName: 'w-textfield',
  elementClass: Component as unknown as typeof WarpTextField,
  react: React,
  events: {
    onBlur: 'blur',
    onblur: 'blur',
    onChange: 'change',
    onchange: 'change',
    onInput: 'input',
    oninput: 'input',
    onFocus: 'focus',
    onfocus: 'focus',
  },
});

type BaseTextFieldProps = React.ComponentPropsWithoutRef<typeof BaseTextField>;

type TextFieldProps = Omit<BaseTextFieldProps, 'help-text' | 'min-length' | 'max-length' | 'read-only'> & {
  helpText?: string;
  minLength?: number;
  maxLength?: number;
  readOnly?: boolean;
};

export const TextField = React.forwardRef<WarpTextField, TextFieldProps>(
  ({ helpText, minLength, maxLength, readOnly, ...props }, ref) =>
    React.createElement(BaseTextField, {
      ...props,
      ...(helpText !== undefined ? { 'help-text': helpText } : {}),
      ...(minLength !== undefined ? { 'min-length': minLength } : {}),
      ...(maxLength !== undefined ? { 'max-length': maxLength } : {}),
      ...(readOnly ? { 'read-only': true } : {}),
      ref,
    } as React.ComponentProps<typeof BaseTextField> & {
      'help-text'?: string;
      'min-length'?: number;
      'max-length'?: number;
      'read-only'?: boolean;
    }),
);

TextField.displayName = 'TextField';
