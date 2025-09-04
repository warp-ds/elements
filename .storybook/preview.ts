import 'virtual:uno.css';
import { setCustomElementsManifest } from '@storybook/web-components';
import type { Preview } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import { withActions } from 'storybook/actions/decorator';

import customElements from '../dist/custom-elements.json' with { type: 'json' };

setCustomElementsManifest(customElements);

setStorybookHelpersConfig({
  hideArgRef: true,
  renderDefaultValues: true,
});

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  decorators: [withActions],
};

export default preview;
