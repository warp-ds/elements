import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { RadioGroup } from './react.js';

describeReactSsrAttributeMapping('RadioGroup', RadioGroup, [
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
]);
