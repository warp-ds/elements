import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { ModalHeader } from './react.js';

describeReactSsrAttributeMapping('ModalHeader', ModalHeader, [{ propName: 'noClose', attrName: 'no-close' }]);
