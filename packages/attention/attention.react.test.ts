import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Attention } from './react.js';

describeReactSsrAttributeMapping('Attention', Attention, [
  { propName: 'canClose', attrName: 'can-close' },
  { propName: 'noArrow', attrName: 'no-arrow' },
  { propName: 'crossAxis', attrName: 'cross-axis' },
  { propName: 'fallbackPlacements', attrName: 'fallback-placements', value: ['top', 'bottom'] },
]);
