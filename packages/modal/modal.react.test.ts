import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Modal } from './react.js';

describeReactSsrAttributeMapping('Modal', Modal, [
  { propName: 'contentId', attrName: 'content-id', value: 'modal-content' },
  { propName: 'ignoreBackdropClicks', attrName: 'ignore-backdrop-clicks' },
]);
