import { describeReactSsrAttributeMapping } from '../../tests/react-ssr-attributes';
import { Slider } from './react.js';

describeReactSsrAttributeMapping('Slider', Slider, [
  { propName: 'openEnded', attrName: 'open-ended' },
  { propName: 'helpText', attrName: 'help-text', value: 'Help text' },
  { propName: 'hiddenTextfield', attrName: 'hidden-textfield' },
]);
