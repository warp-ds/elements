import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { DatePicker } from './react.js';

describeReactSsrAttributeMapping('DatePicker', DatePicker, [
  { propName: 'headerFormat', attrName: 'header-format', value: 'short' },
  { propName: 'weekdayFormat', attrName: 'weekday-format', value: 'narrow' },
  { propName: 'dayFormat', attrName: 'day-format', value: 'numeric' },
]);
