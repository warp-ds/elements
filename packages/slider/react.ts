import { createComponent } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSlider } from './slider.js';

// Re-export from split packages
export { SliderThumb } from '../slider-thumb/react.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSlider = createComponent({
  tagName: 'w-slider',
  elementClass: Component as unknown as typeof WarpSlider,
  react: React,
});

type BaseSliderProps = React.ComponentPropsWithoutRef<typeof BaseSlider>;

type SliderProps = Omit<BaseSliderProps, 'open-ended' | 'help-text' | 'hidden-textfield'> & {
  openEnded?: boolean;
  helpText?: string;
  hiddenTextfield?: boolean;
};

export const Slider = React.forwardRef<WarpSlider, SliderProps>(
  ({ openEnded, helpText, hiddenTextfield, ...props }, ref) =>
    React.createElement(BaseSlider, {
      ...props,
      ...(openEnded ? { 'open-ended': true } : {}),
      ...(helpText !== undefined ? { 'help-text': helpText } : {}),
      ...(hiddenTextfield ? { 'hidden-textfield': true } : {}),
      ref,
    } as React.ComponentProps<typeof BaseSlider> & {
      'open-ended'?: boolean;
      'help-text'?: string;
      'hidden-textfield'?: boolean;
    }),
);

Slider.displayName = 'Slider';
