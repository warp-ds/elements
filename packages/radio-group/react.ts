import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpRadioGroup } from './radio-group.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseRadioGroup = createComponent({
  tagName: 'w-radio-group',
  elementClass: Component as unknown as typeof WarpRadioGroup,
  react: React,
  events: {
    onInput: 'input',
    oninput: 'input',
    onChange: 'change',
    onchange: 'change',
  },
});

type BaseRadioGroupProps = React.ComponentPropsWithoutRef<typeof BaseRadioGroup>;

type RadioGroupProps = Omit<BaseRadioGroupProps, 'help-text'> & {
  helpText?: string;
};

export const RadioGroup = React.forwardRef<WarpRadioGroup, RadioGroupProps>(({ helpText, ...props }, ref) =>
  React.createElement(BaseRadioGroup, {
    ...props,
    ...(helpText !== undefined ? { 'help-text': helpText } : {}),
    ref,
  } as React.ComponentProps<typeof BaseRadioGroup> & {
    'help-text'?: string;
  }),
);

RadioGroup.displayName = 'RadioGroup';
