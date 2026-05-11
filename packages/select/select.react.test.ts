import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Select } from './react.js';

describeReactSsrAttributeMapping('Select', Select, [
  { propName: 'autoFocus', attrName: 'auto-focus' },
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
  { propName: 'readOnly', attrName: 'read-only' },
]);
