import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { SnackbarItem } from './react.js';

describeReactSsrAttributeMapping('SnackbarItem', SnackbarItem, [
  { propName: 'ariaLabel', attrName: 'aria-label', value: 'Value' },
  { propName: 'ariaDescription', attrName: 'aria-description', value: 'Description' },
]);
