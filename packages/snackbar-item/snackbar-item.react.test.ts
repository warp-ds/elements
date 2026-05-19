import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { SnackbarItem } from './react.js';

describeReactSsrAttributeMapping('SnackbarItem', SnackbarItem, [
  { propName: 'actionAsBlock', attrName: 'action-as-block', value: true },
]);
