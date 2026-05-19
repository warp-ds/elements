import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpTextarea } from './textarea.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseTextarea = createComponent({
  tagName: 'w-textarea',
  elementClass: Component as unknown as typeof WarpTextarea,
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

type BaseTextareaProps = React.ComponentPropsWithoutRef<typeof BaseTextarea>;

type TextareaProps = Omit<BaseTextareaProps, 'help-text' | 'maximum-rows' | 'minimum-rows' | 'read-only'> & {
  helpText?: string;
  maxRows?: number;
  minRows?: number;
  readOnly?: boolean;
};

export const Textarea = React.forwardRef<WarpTextarea, TextareaProps>(
  ({ helpText, maxRows, minRows, readOnly, ...props }, ref) =>
    React.createElement(BaseTextarea, {
      ...props,
      ...(helpText !== undefined ? { 'help-text': helpText } : {}),
      ...(maxRows !== undefined ? { 'maximum-rows': maxRows } : {}),
      ...(minRows !== undefined ? { 'minimum-rows': minRows } : {}),
      ...(readOnly ? { 'read-only': true } : {}),
      ref,
    } as React.ComponentProps<typeof BaseTextarea> & {
      'help-text'?: string;
      'maximum-rows'?: number;
      'minimum-rows'?: number;
      'read-only'?: boolean;
    }),
);

Textarea.displayName = 'Textarea';
