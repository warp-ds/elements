import { WRadio } from './radio';
import { WRadioGroup } from './radio-group';

if (!customElements.get('w-radio')) {
  customElements.define('w-radio', WRadio);
  customElements.define('w-radio-group', WRadioGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-radio': WRadio;
    'w-radio-group': WRadioGroup;
  }
}
