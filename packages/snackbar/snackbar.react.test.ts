import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Snackbar } from './react.js';

describeReactSsrAttributeMapping('Snackbar', Snackbar, [
  { propName: 'ariaLabel', attrName: 'aria-label', value: 'Value' },
  { propName: 'ariaDescription', attrName: 'aria-description', value: 'Description' },
]);
