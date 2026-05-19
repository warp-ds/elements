import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Pagination } from './react.js';

describeReactSsrAttributeMapping('Pagination', Pagination, [
  { propName: 'baseUrl', attrName: 'base-url', value: '/search?page=' },
  { propName: 'currentPageNumber', attrName: 'current-page', value: 2 },
  { propName: 'visiblePages', attrName: 'visible-pages', value: 5 },
]);
