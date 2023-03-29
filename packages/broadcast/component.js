import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { windowExists } from '../utils';

export class WarpBroadcast extends LitElement {
  static properties = {
    _messages: {
      state: true,
      hasChanged(newVal, oldVal) {
        if (!oldVal || oldVal.length === 0) return true;
        const newIds = newVal.map(({ id }) => id).sort();
        const oldIds = oldVal.map(({ id }) => id).sort();
        return JSON.stringify(newIds) !== JSON.stringify(oldIds);
      },
    },
    _hiddenMessageIds: {
      state: true,
      type: Array,
    },
    interval: { type: Number, attribute: true, reflect: true },
    url: { type: String, attribute: true, reflect: true },
    api: { type: String, attribute: true, reflect: true },
  };

  static styles = css`
    /* @unocss-placeholder */
  `;

  constructor() {
    super();
    this._messages = [];
    this.interval = 30000;
    this._hiddenMessageIds = [];
    this.url = windowExists ? window.location.href : '';
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!this.api) {
      console.error('Broadcast "api" attribute invalid or undefined');
      return;
    }
    if (windowExists) {
      await this._fetchMessage();
      setInterval(() => this._fetchMessage(), this.interval);
    }
  }

  async _fetchMessage() {
    const url = `${this.api}?path=${this.url}`;
    try {
      const res = await (await fetch(url)).json();
      this._messages = res.length ? res : [];
    } catch (err) {
      console.error(`failed to fetch broadcasts from given url (${url})`, err);
    }
  }

  async _del(id) {
    const el = this.renderRoot.querySelector(`#broadcast-${id}`);
    await el.collapse();
    this._hiddenMessageIds = [...new Set([...this._hiddenMessageIds, id])];
  }

  render() {
    const messages = this._messages.filter((item) => !this._hiddenMessageIds.includes(item.id));

    return html`
      <aside class=${`${messages.length === 0 ? 'hidden' : 'mb-16'}`}>
        ${repeat(
          messages,
          ({ id }) => `broadcast-${id}`,
          ({ id, message }) =>
            html`<w-toast
              class="w-full"
              id="broadcast-${id}"
              type="warning"
              text="${message}"
              canclose
              @close=${() => this._del(id)}
            >
            </w-toast>`,
        )}
      </aside>
    `;
  }
}
