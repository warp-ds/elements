import { createComponent, EventName } from '@lit/react';
import { LitElement } from 'lit';
import React from 'react';

import { WarpSliderThumb } from './slider-thumb.js';

// decouple from CDN by providing a dummy class
class Component extends LitElement {}

const BaseSliderThumb = createComponent({
  tagName: 'w-slider-thumb',
  elementClass: Component as unknown as typeof WarpSliderThumb,
  react: React,
  events: {
    onSliderValidity: 'slidervalidity' as EventName<CustomEvent>,
    'onslider-validity': 'slidervalidity' as EventName<CustomEvent>, // should be slider-validity
  },
});

type BaseSliderThumbProps = React.ComponentPropsWithoutRef<typeof BaseSliderThumb>;

type SliderThumbProps = Omit<BaseSliderThumbProps, 'aria-label' | 'aria-description'> & {
  ariaLabel?: string;
  ariaDescription?: string;
};

export const SliderThumb = React.forwardRef<WarpSliderThumb, SliderThumbProps>(
  ({ ariaLabel, ariaDescription, ...props }, ref) =>
    React.createElement(BaseSliderThumb, {
      ...props,
      ...(ariaLabel !== undefined ? { 'aria-label': ariaLabel } : {}),
      ...(ariaDescription !== undefined ? { 'aria-description': ariaDescription } : {}),
      ref,
    } as React.ComponentProps<typeof BaseSliderThumb> & {
      'aria-label'?: string;
      'aria-description'?: string;
    }),
);

SliderThumb.displayName = 'SliderThumb';
