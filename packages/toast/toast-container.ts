// @warp-css;
import { css, html, LitElement } from 'lit';

import { state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { reset } from '../styles';

import { styles } from './styles';
import type { WarpToast } from './toast';
import type { ToastInternal, ToastOptions } from './types';

/**
 * You should probably not include this component in HTML markup.
 *
 * As long as the element definition is imported in your application you can use the toast JS API to create toasts.
 *
 * ```js
 * import from '@warp-ds/elements/components/toast';
 * import { toast, removeToast, updateToast } from '@warp-ds/elements/toast';
 * ```
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/overlays-toast--docs)
 *
 * @internal
 */

// all class objects have to be in this file when generating
const ccToastContainer = {
  wrapper: 'fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none',
  base: 'grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none',
  content: 'w-full',
};

export class WarpToastContainer extends LitElement {
  static styles = [
    reset,
    styles,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @state()
  private _toasts: Map<string | number, ToastInternal> = new Map();

  private _interval: NodeJS.Timeout | undefined;

  connectedCallback() {
    super.connectedCallback();

    // regularly check if any toasts have expired
    this._interval = setInterval(() => {
      // sort toasts into keep and remove
      const keep = [];
      const remove = [];
      for (const toast of this._toasts) {
        if (Date.now() <= toast[1].duration) keep.push(toast);
        else remove.push(toast);
      }

      // collapse toasts that will be removed
      const collapseTasks = [];
      for (const [id] of remove) {
        const el = this.renderRoot.querySelector(`#${id}`) as unknown as WarpToast | null;
        collapseTasks.push(el.collapse());
      }

      // once all toasts that should be removed have been collapsed, remove them from the map
      Promise.all(collapseTasks).then(() => {
        if (keep.length !== this._toasts.size) {
          this._toasts = new Map(keep);
        }
      });
    }, 500);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._interval) {
      clearTimeout(this._interval);
    }
  }

  public static init() {
    let el = document.querySelector('w-toast-container');

    if (!el) {
      el = document.createElement('w-toast-container');
      document.body.appendChild(el);
    }

    return el;
  }

  /** @internal */
  get _toastsArray() {
    return Array.from(this._toasts).map(([, toast]) => toast);
  }

  get(id: string | number): ToastInternal | undefined {
    if (!id) {
      throw new Error('undefined "id" given when attempting to retrieve toast');
    }

    if (typeof id !== 'string' && !Number.isInteger(id)) {
      throw new Error('"id" must be number or string when attempting to retrieve toast');
    }

    return this._toasts.get(id);
  }

  set(toast: ToastOptions): Map<string | number, ToastInternal> {
    if (!toast.id) {
      throw new Error('invalid or undefined "id" on toast object');
    }

    const result = this._toasts.set(toast.id, {
      id: toast.id,
      type: toast.type ?? 'success',
      text: toast.text ?? '',
      canclose: toast.canclose ?? false,
      duration: Date.now() + (toast.duration || 5000),
    });

    this._toasts = new Map(Array.from(this._toasts));
    return result;
  }

  async del(id: string | number): Promise<boolean> {
    if (!id) {
      throw new Error('undefined "id" given when attempting to retrieve toast');
    }

    if (typeof id !== 'string' && !Number.isInteger(id)) {
      throw new Error('"id" must be number or string when attempting to retrieve toast');
    }

    const el = this.renderRoot.querySelector(`#${id}`) as unknown as WarpToast | null;

    if (!this._toasts.has(id)) {
      return false;
    }

    await el.collapse();
    const result = this._toasts.delete(id);

    this._toasts = new Map(Array.from(this._toasts));
    return result;
  }

  render() {
    return html`
      <aside class="${ccToastContainer.wrapper}">
        <div class="${ccToastContainer.base}" id="w-toast-container-list">
          ${repeat(
            this._toastsArray,
            (toast) => toast.id,
            (toast) =>
              html` <w-toast
                class="${ccToastContainer.content}"
                id="${toast.id}"
                type="${toast.type}"
                text="${toast.text}"
                ?canclose=${toast.canclose}
                @close=${() => this.del(toast.id)}>
              </w-toast>`,
          )}
        </div>
      </aside>
    `;
  }
}

if (!customElements.get('w-toast-container')) {
  customElements.define('w-toast-container', WarpToastContainer);
}
