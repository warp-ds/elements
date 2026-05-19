import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { TextField } from './react.js';

describeReactSsrAttributeMapping('TextField', TextField, [
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
  { propName: 'minLength', attrName: 'min-length', value: 2 },
  { propName: 'maxLength', attrName: 'max-length', value: 10 },
  { propName: 'readOnly', attrName: 'read-only' },
]);
