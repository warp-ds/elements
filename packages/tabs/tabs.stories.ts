import { html } from 'lit';
import '@warp-ds/icons/elements/info-16';
import '@warp-ds/icons/elements/success-16';
import '@warp-ds/icons/elements/error-16';

import './index.js';

const meta = {
  title: 'Components/Tabs',
};

export default meta;

export const Default = () => html`
  <w-tabs active="tab1">
  
    <w-tab for="tab1" label="First Tab"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </w-tab-panel>
  
    <w-tab for="tab2" label="Second Tab"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Third Tab"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </w-tab-panel>

  </w-tabs>
  
`;

export const WithIcons = () => html`
  <w-tabs active="info">
    <w-tab for="info" label="Info">
      <span slot="icon">
        <w-icon-info-16></w-icon-info-16>
      </span>
    </w-tab>
    <w-tab-panel id="info">
      <p>Info content.</p>
    </w-tab-panel>

    <w-tab for="done" label="Done">
      <span slot="icon">
        <w-icon-success-16></w-icon-success-16>
      </span>
    </w-tab>
    <w-tab-panel id="done" hidden>
      <p>Done content.</p>
    </w-tab-panel>

    <w-tab for="error" label="Failures">
      <span slot="icon">
        <w-icon-error-16></w-icon-error-16>
      </span>
    </w-tab>
    <w-tab-panel id="error" hidden>
      <p>Error content.</p>
    </w-tab-panel>
  </w-tabs>
`;

export const ManyTabs = () => html`
  <w-tabs active="tab1">
    <w-tab for="tab1" label="Tab 1"></w-tab>
    <w-tab-panel id="tab1">
      <p>Content for tab 1</p>
    </w-tab-panel>

    <w-tab for="tab2" label="Tab 2"></w-tab>
    <w-tab-panel id="tab2" hidden>
      <p>Content for tab 2</p>
    </w-tab-panel>

    <w-tab for="tab3" label="Tab 3"></w-tab>
    <w-tab-panel id="tab3" hidden>
      <p>Content for tab 3</p>
    </w-tab-panel>

    <w-tab for="tab4" label="Tab 4"></w-tab>
    <w-tab-panel id="tab4" hidden>
      <p>Content for tab 4</p>
    </w-tab-panel>

    <w-tab for="tab5" label="Tab 5"></w-tab>
    <w-tab-panel id="tab5" hidden>
      <p>Content for tab 5</p>
    </w-tab-panel>

    <w-tab for="tab6" label="Tab 6"></w-tab>
    <w-tab-panel id="tab6" hidden>
      <p>Content for tab 6</p>
    </w-tab-panel>
  </w-tabs>
`;
