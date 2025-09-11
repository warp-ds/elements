import { WCheckbox } from './checkbox';

if (!customElements.get('w-checkbox')) {
  customElements.define('w-checkbox', WCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    "w-checkbox": WCheckbox
  }
}