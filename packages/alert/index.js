import { css, html, LitElement } from 'lit';
import { infoSvg, negativeSvg, positiveSvg, warningSvg } from './svgs';
import { styles } from '../../dist/elements.min.js';

const variants = {
  negative: {
    color: 'red',
    icon: negativeSvg(),
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    textColor: 'text-red-600',
  },
  positive: {
    color: 'green',
    icon: positiveSvg(),
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    textColor: 'text-green-600',
  },
  warning: {
    color: 'yellow',
    icon: warningSvg(),
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    textColor: 'text-yellow-600',
  },
  info: {
    color: 'aqua',
    icon: infoSvg(),
    bgColor: 'bg-aqua-50',
    borderColor: 'border-aqua-300',
    textColor: 'text-aqua-600',
  },
};

class WarpAlert extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    show: { type: Boolean, reflect: true },
    role: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.show = false;
    this.role = 'alert';
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.variant || !Object.keys(variants).includes(this.variant)) {
      throw new Error(
        'Invalid "variant" attribute. Set its value to one of the following:\nnegative, positive, warning, info.',
      );
    }
  }

  // Slotted elements remain in lightDOM which allows for control of their style outside of shadowDOM.
  // ::slotted([Simple Selector]) confirms to Specificity rules, but (being simple) does not add weight to lightDOM skin selectors,
  // so never gets higher Specificity. Thus in order to overwrite style linked within shadowDOM, we need to use !important.
  // https://stackoverflow.com/a/61631668
  static styles = [
    styles,
    css`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `,
  ];

  get _style() {
    return this.variant ? variants[this.variant] : {};
  }

  render() {
    const { color, icon, bgColor, borderColor, textColor } = this._style;

    return html`
      <f-expand-transition ?show=${this.show}>
        <div
          role=${this.role}
          class="${`flex p-16 border rounded-4 border-l-4 ${bgColor} ${borderColor}`}"
          style="border-left-color:var(--f-${color}-600)"
        >
          <div class="mr-8 ${textColor}">${icon}</div>
          <div class="text-14">
            <slot></slot>
          </div>
        </div>
      </f-expand-transition>
    `;
  }
}

if (!customElements.get('f-alert')) {
  customElements.define('f-alert', WarpAlert);
}

export { WarpAlert };
