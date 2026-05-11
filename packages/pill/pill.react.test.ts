import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Pill } from './react.js';

describeReactSsrAttributeMapping('Pill', Pill, [
  { propName: 'canClose', attrName: 'can-close' },
  { propName: 'openSrLabel', attrName: 'open-sr-label', value: 'Open' },
  { propName: 'openAriaLabel', attrName: 'open-aria-label', value: 'Open' },
  { propName: 'closeSrLabel', attrName: 'close-sr-label', value: 'Close' },
  { propName: 'closeAriaLabel', attrName: 'close-aria-label', value: 'Close' },
]);
