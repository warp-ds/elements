import { LitElement, css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { toast as c } from '@warp-ds/component-classes';
import { expand, collapse } from 'element-collapse';
import { closeSVG, successSVG, failureSVG } from './svgs';
import { styles } from '../../dist/elements.min.js';

const classes = (definition) => {
  const defn = {};
  for (const [key, value] of Object.entries(definition)) {
    for (const className of key.split(' ')) {
      defn[className] = value;
    }
  }
  return classMap(defn);
};

export class WarpToast extends LitElement {
  static styles = [
    styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    id: { type: String, attribute: true, reflect: true },
    type: { type: String, attribute: true, reflect: true },
    text: { type: String, attribute: true, reflect: true },
    canclose: { type: Boolean, attribute: true, reflect: true },
  };

  constructor() {
    super();
    this.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    this.type = 'success';
    this.text = '';
    this.canclose = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated() {
    if (!this._expanded && this._wrapper) expand(this._wrapper, () => (this._expanded = true));
  }

  get _primaryClasses() {
    return classes({
      [c.toast]: true,
      [c.toastPositive]: this.type === 'success',
      [c.toastWarning]: this.type === 'warning',
      [c.toastNegative]: this.type === 'error',
      [c.toastNeutral]: this.type === 'info',
    });
  }

  get _iconClasses() {
    return classes({
      [c.toastIcon]: true,
      [c.toastIconPositive]: this.type == 'success',
      [c.toastIconWarning]: this.type === 'warning',
      [c.toastIconNegative]: this.type === 'error',
      [c.toastIconNeutral]: this.type === 'info',
    });
  }

  get _wrapper() {
    return this.renderRoot?.querySelector(`section`) ?? null;
  }

  get _success() {
    return this.type === 'success';
  }

  get _warning() {
    return this.type === 'warning';
  }

  get _error() {
    return this.type === 'error';
  }

  get _info() {
    return this.type === 'info';
  }

  get _role() {
    return this._error || this._warning ? 'alert' : 'status';
  }

  get _typeLabel() {
    if (this._success) return 'Vellykket';
    if (this._error) return 'Feil';
    if (this._warning) return 'Varsel';
    return 'Info';
  }

  get _iconMarkup() {
    return this._success
      ? successSVG({ typeLabel: this._typeLabel })
      : failureSVG({ typeLabel: this._typeLabel, isInfo: this._info });
  }

  async collapse() {
    return new Promise((resolve) => {
      if (this._expanded && this._wrapper) collapse(this._wrapper, resolve);
      else resolve();
    });
  }

  close() {
    const event = new CustomEvent('close', {
      detail: { id: this.id },
      bubbles: true,
      composed: true,
    });
    this.updateComplete.then(() => this.dispatchEvent(event));
  }

  render() {
    if (!this.text) return html``;
    return html` <section class="${c.toastWrapper}" aria-label="${this._typeLabel}">
      <div class="${this._primaryClasses}">
        <div class="${this._iconClasses}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${c.toastContent}">
          <p>${this.text}</p>
        </div>
        ${when(
          this.canclose === true,
          () => html`<button class="${c.toastClose}" @click="${this.close}">${closeSVG()}</button>`,
        )}
      </div>
    </section>`;
  }
}

if (!customElements.get('f-toast')) {
  customElements.define('f-toast', WarpToast);
}
