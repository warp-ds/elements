import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Textarea } from './react.js';

describeReactSsrAttributeMapping('Textarea', Textarea, [
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
  { propName: 'maxRows', attrName: 'maximum-rows', value: 5 },
  { propName: 'minRows', attrName: 'minimum-rows', value: 2 },
  { propName: 'readOnly', attrName: 'read-only' },
]);
