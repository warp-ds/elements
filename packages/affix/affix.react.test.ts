import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Affix } from './react.js';

describeReactSsrAttributeMapping('Affix', Affix, [{ propName: 'ariaLabel', attrName: 'aria-label', value: 'Label' }]);
