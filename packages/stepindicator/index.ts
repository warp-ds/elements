// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { msg } from '@lit/localize';
import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';

import '@warp-ds/icons/elements/check-16';

import { reset } from '../styles.js';
import { styles } from './styles.js';

const ccSteps = {
  wrapper: 'w-full',
  horizontal: 'flex',
};

const ccStep = {
  base: 'group/step',
  vertical: 'group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16',
  horizontal: 'group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid items-center',

  alignLeft: 'grid-cols-[20px_1fr]',
  alignRight: 'grid-cols-[1fr_20px] text-right',

  dot: 'rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted',
  dotAlignRight: 'col-start-2',
  dotHorizontal: 'row-start-2 justify-self-end',
  dotActive: 's-border-primary s-bg-primary',
  dotIncomplete: 's-border s-bg',

  line: 'transition-colors duration-300',
  lineVertical: 'w-2 h-full justify-self-center',
  lineAlignRight: 'col-start-2',
  lineHorizontal: 'h-2 w-full row-start-2',

  lineIncomplete: 's-bg-disabled',
  lineComplete: 's-bg-primary',

  content: 'last:mb-0',
  contentVertical: 'row-span-2 pb-32',
  contentHorizontal: 'col-span-3 px-16 row-start-1 text-center',
};

/**
 * Steps are used to show progress through a process or to guide users through a multi-step task.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/components-steps--docs)
 */
class WarpStepIndicator extends LitElement {
  @property({ type: Boolean, reflect: true })
  horizontal = false;

  @property({ type: Boolean, reflect: true })
  right = false;

  static styles = [reset, styles];

  constructor() {
    super();
  }

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
      <div role="list" class=${classes} ${this.horizontal && `style='display: grid; grid-auto-rows: 1fr;grid-template-columns: 1fr;'`}>
        <slot></slot>
      </div>
    `;
  }
}

// Helper function to get localized aria labels at render time
function getAriaLabelFor(type: 'completed' | 'active' | 'default'): string {
  if (type === 'completed') {
    return msg('Step indicator completed circle', { id: 'steps.aria.completed' });
  }
  if (type === 'active') {
    return msg('Step indicator active circle', { id: 'steps.aria.active' });
  }
  return msg('Empty circle', { id: 'steps.aria.emptyCircle' });
}

interface StepsContext {
  horizontal?: boolean;
  right?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}

/**
 * Individual step component that shows a single step in a process
 */
class WarpStep extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  completed = false;

  @state()
  private _context: StepsContext = { horizontal: false, right: false, isLast: false, isFirst: false };

  static styles = [reset, styles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  setContext(context: StepsContext) {
    this._context = context;
    this.requestUpdate();
  }

  getAriaLabel() {
    if (this.completed) return getAriaLabelFor('completed');
    if (this.active) return getAriaLabelFor('active');
    return getAriaLabelFor('default');
  }

  render() {
    const vertical = !this._context.horizontal;
    const left = !this._context.right;
    const isFirst = this._context.isFirst;
    const isLast = this._context.isLast;

    const stepClasses = classNames([
      ccStep.base,
      vertical ? ccStep.vertical : ccStep.horizontal,
      vertical ? (left ? ccStep.alignLeft : ccStep.alignRight) : '',
    ]);

    const lineHorizontalClasses = classNames([
      ccStep.line,
      ccStep.lineHorizontal,
      this.active || this.completed ? ccStep.lineComplete : ccStep.lineIncomplete,
      isFirst ? 'invisible' : '',
    ]);

    const dotClasses = classNames([
      ccStep.dot,
      vertical ? (!left ? ccStep.dotAlignRight : '') : ccStep.dotHorizontal,
      this.active || this.completed ? ccStep.dotActive : ccStep.dotIncomplete,
    ]);

    const lineClasses = classNames([
      ccStep.line,
      vertical ? ccStep.lineVertical : ccStep.lineHorizontal,
      vertical && !left ? ccStep.lineAlignRight : '',
      this.completed ? ccStep.lineComplete : ccStep.lineIncomplete,
      isLast ? 'invisible' : '',
    ]);

    const contentClasses = classNames([
      ccStep.content,
      vertical ? ccStep.contentVertical : ccStep.contentHorizontal,
      isLast ? 'pb-0' : '',
    ]);

    return html`
      <div class="${stepClasses}" style=${this._context.horizontal && 'height: 100%;'}>
        ${!vertical ? html`<div class=${lineHorizontalClasses}></div>` : ''}
        <div class=${dotClasses} role="img" aria-label=${this.getAriaLabel()} ${this.active ? 'aria-current="step"' : ''}>
          ${this.completed ? html`<w-icon-check-16 data-testid="completed-icon"></w-icon-check-16>` : ''}
        </div>
        <div class=${lineClasses}></div>
        <div class=${contentClasses} ${this._context.horizontal && `style='height:100%;'`}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-step-indicator')) {
  customElements.define('w-step-indicator', WarpStepIndicator);
}

if (!customElements.get('w-step')) {
  customElements.define('w-step', WarpStep);
}

export { WarpStepIndicator, WarpStep };
