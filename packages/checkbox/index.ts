import { WCheckbox } from './checkbox';
import { WCheckboxGroup } from './checkbox-group';

if (!customElements.get('w-checkbox')) {
  customElements.define('w-checkbox', WCheckbox);
  customElements.define('w-checkbox-group', WCheckboxGroup);
}
