import 'virtual:uno.css';
import { setCustomElementsManifest } from '@storybook/web-components';
import type { Preview } from '@storybook/web-components-vite';
import { setStorybookHelpersConfig } from '@wc-toolkit/storybook-helpers';
import { withActions } from 'storybook/actions/decorator';

import customElements from '../dist/custom-elements.json' with { type: 'json' };
import { toast, updateToast, removeToast, WarpToastContainer } from '../entrypoint.js';

setCustomElementsManifest(customElements);

setStorybookHelpersConfig({
  hideArgRef: true,
  renderDefaultValues: true,
});

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      expanded: true,
      sort: 'alpha',
    },
    docs: {
      codePanel: true,
    },
  },
  decorators: [withActions],
};

if (typeof window !== 'undefined') {
  // @ts-expect-error We depend on these being global in our examples
  window.WarpToastContainer = WarpToastContainer;
  // @ts-expect-error We depend on these being global in our examples
  window.toast = toast;
  // @ts-expect-error We depend on these being global in our examples
  window.updateToast = updateToast;
  // @ts-expect-error We depend on these being global in our examples
  window.removeToast = removeToast;

  // @ts-expect-error Used in slider examples
  window.getNumberFormatter = (locale, opts = {}) => {
    return new Intl.NumberFormat(locale, { maximumFractionDigits: 0, ...opts });
  };
}

export default preview;
