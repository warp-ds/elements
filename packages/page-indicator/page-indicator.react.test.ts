import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { PageIndicator } from './react.js';

describeReactSsrAttributeMapping('PageIndicator', PageIndicator, [
  { propName: 'selectedPage', attrName: 'selected-page', value: 1 },
  { propName: 'pageCount', attrName: 'page-count', value: 5 },
]);
