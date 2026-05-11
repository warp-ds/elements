import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Combobox } from './react.js';

describeReactSsrAttributeMapping('Combobox', Combobox, [
  { propName: 'openOnFocus', attrName: 'open-on-focus' },
  { propName: 'selectOnBlur', attrName: 'select-on-blur' },
  { propName: 'matchTextSegments', attrName: 'match-text-segments' },
  { propName: 'disableStaticFiltering', attrName: 'disable-static-filtering' },
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
]);
