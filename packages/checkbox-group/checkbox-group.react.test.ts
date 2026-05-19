import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { CheckboxGroup } from './react.js';

describeReactSsrAttributeMapping('CheckboxGroup', CheckboxGroup, [
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
]);
