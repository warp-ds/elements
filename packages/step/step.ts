import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@warp-ds/icons/elements/check-16';

import { activateI18n } from '../i18n.js';
import { styles } from '../step-indicator/styles.js';
import { reset } from '../styles.js';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

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

export interface StepsContext {
  horizontal?: boolean;
  right?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
}

/**
 * Individual step component that shows a single step in a process
 */
export class WarpStep extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  completed = false;

  @state()
  private _context: StepsContext = {
    horizontal: false,
    right: false,
    isLast: false,
    isFirst: false,
  };

  static styles = [reset, styles];

  constructor() {
    super();
    activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  setContext(context: StepsContext) {
    this._context = context;
  }

  getAriaLabel() {
    if (this.completed) {
      return i18n._({
        id: 'steps.aria.completed',
        message: 'Step indicator completed circle',
        comment: 'Completed circle',
      });
    }
    if (this.active) {
      return i18n._({
        id: 'steps.aria.active',
        message: 'Step indicator active circle',
        comment: 'Active circle',
      });
    }
    return i18n._({
      id: 'steps.aria.emptyCircle',
      message: 'Empty circle',
      comment: 'Empty circle',
    });
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
      <div
        class="${stepClasses}"
        style=${ifDefined(this._context.horizontal ? 'height: 100%;' : undefined)}
      >
        ${!vertical ? html`<div class=${lineHorizontalClasses}></div>` : nothing}
        <div
          class=${dotClasses}
          role="img"
          aria-label=${this.getAriaLabel()}
          aria-current=${this.active ? 'step' : nothing}
        >
          ${
            this.completed
              ? html`<w-icon-check-16
                data-testid="completed-icon"
              ></w-icon-check-16>`
              : nothing
          }
        </div>
        <div class=${lineClasses}></div>
        <div
          class=${contentClasses}
          part="step-content"
          style=${ifDefined(this._context.horizontal ? 'height: 100%;' : undefined)}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-step')) {
  customElements.define('w-step', WarpStep);
}
