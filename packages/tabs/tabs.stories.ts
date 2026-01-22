import '@warp-ds/components/icon';
import { html } from 'lit';

import '../tab-panel/tab-panel.js';
import '../tab/tab.js';
import './tabs.js';

const meta = {
  title: 'Components/Tabs',
};

export default meta;

export const Default = () => html`
  <w-tabs active="tab1">

    <w-tab for="tab1">First Tab</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab2">Second Tab</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3">Third Tab</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>

`;

export const WithIcons = () => html`
  <w-tabs active="info">
    <w-tab for="info">
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done">
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error">
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`;

export const WithIconsOver = () => html`
  <w-tabs active="info">
    <w-tab for="info" over>
      <w-icon name="Info" slot="icon"></w-icon>
      Info
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" over>
      <w-icon name="Success" slot="icon"></w-icon>
      Done
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" over>
      <w-icon name="Error" slot="icon"></w-icon>
      Failures
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`;

export const ManyTabs = () => html`
  <w-tabs active="tab1">
    <w-tab for="tab1">Tab 1</w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2">Tab 2</w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3">Tab 3</w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4">Tab 4</w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5">Tab 5</w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6">Tab 6</w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
`;
