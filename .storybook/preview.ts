import 'virtual:uno.css';
import type { Preview, Parameters } from '@storybook/web-components-vite';
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../dist/custom-elements.json";

setCustomElementsManifest(customElements);

const preview: Preview = {
  tags: ['autodocs'],
};

export const parameters: Parameters = {
  controls: {
    expanded: true,
  },
};

export default preview;
