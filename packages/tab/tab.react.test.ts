import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Tab } from './react.js';

describeReactSsrAttributeMapping('Tab', Tab, [{ propName: 'ariaSelected', attrName: 'aria-selected', value: 'true' }]);
