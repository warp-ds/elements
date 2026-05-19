import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Link } from './react.js';

describeReactSsrAttributeMapping('Link', Link, [{ propName: 'fullWidth', attrName: 'full-width' }]);
