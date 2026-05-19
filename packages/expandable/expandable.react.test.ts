import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Expandable } from './react.js';

describeReactSsrAttributeMapping('Expandable', Expandable, [
  { propName: 'buttonClass', attrName: 'button-class', value: 'button-class-name' },
  { propName: 'contentClass', attrName: 'content-class', value: 'content-class-name' },
  { propName: 'noChevron', attrName: 'no-chevron' },
  { propName: 'headingLevel', attrName: 'heading-level', value: 2 },
]);
