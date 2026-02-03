// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { WarpStep } from '../step/step.js';
import { reset } from '../styles.js';
import { styles } from './styles.js';

const ccSteps = {
  wrapper: 'w-full',
  horizontal: 'flex',
};

/**
 * Steps are used to show progress through a process or to guide users through a multi-step task.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/components-steps--docs)
 */
export class WarpStepIndicator extends LitElement {
  @property({ type: Boolean, reflect: true })
  horizontal = false;

  @property({ type: Boolean, reflect: true })
  right = false;

  static styles = [reset, styles];

  updated() {
    this.updateStepsContext();
  }

  updateStepsContext() {
    // Provide context to child step elements
    const steps = this.querySelectorAll('w-step');
    steps.forEach((step: WarpStep, index: number) => {
      step.setContext({
        horizontal: this.horizontal,
        right: this.right,
        isLast: index === steps.length - 1,
        isFirst: index === 0,
      });
    });
  }

  render() {
    const classes = classNames([ccSteps.wrapper, this.horizontal && ccSteps.horizontal]);

    return html`
      <div
        role="list"
        part="step-list"
        class=${classes}
        ${this.horizontal && `style='display: grid; grid-auto-rows: 1fr;grid-template-columns: 1fr;'`}
      >
        <slot part="steps"></slot>
      </div>
    `;
  }
}

if (!customElements.get('w-step-indicator')) {
  customElements.define('w-step-indicator', WarpStepIndicator);
}
