import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { SliderThumb } from './react.js';

describeReactSsrAttributeMapping('SliderThumb', SliderThumb, [
  { propName: 'ariaLabel', attrName: 'aria-label', value: 'Value' },
  { propName: 'ariaDescription', attrName: 'aria-description', value: 'Description' },
]);
