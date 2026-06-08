import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { SnackbarItem } from './react.js';

describeReactSsrAttributeMapping('SnackbarItem', SnackbarItem, [
  { propName: 'actionPlacement', attrName: 'action-placement', value: 'block' },
]);
