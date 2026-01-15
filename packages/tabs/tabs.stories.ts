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
  <w-tabs active="tab1" id="tabs-default">
    <w-tab name="tab1" label="First Tab"></w-tab>
    <w-tab name="tab2" label="Second Tab"></w-tab>
    <w-tab name="tab3" label="Third Tab"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1" for="tabs-default">
    <p>Content for the first tab. This panel is visible when the first tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" for="tabs-default" hidden>
    <p>Content for the second tab. This panel is visible when the second tab is active.</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" for="tabs-default" hidden>
    <p>Content for the third tab. This panel is visible when the third tab is active.</p>
  </w-tab-panel>
`;

export const WithIcons = () => html`
  <w-tabs active="info" id="tabs-with-icons">
    <w-tab name="info" label="Info">
      <span slot="icon">
          <w-icon-info-16></w-icon-info-16>
      </span>
    </w-tab>
    <w-tab name="done" label="Done">
      <span slot="icon">
          <w-icon-success-16></w-icon-success-16>
      </span>
    </w-tab>
    <w-tab name="error" label="Failures">
      <span slot="icon">
          <w-icon-error-16></w-icon-error-16>
      </span>
    </w-tab>
  </w-tabs>

  <w-tab-panel name="home" for="tabs-with-icons">
    <p>Welcome to the home page!</p>
  </w-tab-panel>

  <w-tab-panel name="search" for="tabs-with-icons" hidden>
    <p>Search functionality goes here.</p>
  </w-tab-panel>

  <w-tab-panel name="profile" for="tabs-with-icons" hidden>
    <p>User profile information.</p>
  </w-tab-panel>
`;

export const ManyTabs = () => html`
  <w-tabs active="tab1" id="tabs-many">
    <w-tab name="tab1" label="Tab 1"></w-tab>
    <w-tab name="tab2" label="Tab 2"></w-tab>
    <w-tab name="tab3" label="Tab 3"></w-tab>
    <w-tab name="tab4" label="Tab 4"></w-tab>
    <w-tab name="tab5" label="Tab 5"></w-tab>
    <w-tab name="tab6" label="Tab 6"></w-tab>
  </w-tabs>

  <w-tab-panel name="tab1" for="tabs-many">
    <p>Content for tab 1</p>
  </w-tab-panel>

  <w-tab-panel name="tab2" for="tabs-many" hidden>
    <p>Content for tab 2</p>
  </w-tab-panel>

  <w-tab-panel name="tab3" for="tabs-many" hidden>
    <p>Content for tab 3</p>
  </w-tab-panel>

  <w-tab-panel name="tab4" for="tabs-many" hidden>
    <p>Content for tab 4</p>
  </w-tab-panel>

  <w-tab-panel name="tab5" for="tabs-many" hidden>
    <p>Content for tab 5</p>
  </w-tab-panel>

  <w-tab-panel name="tab6" for="tabs-many" hidden>
    <p>Content for tab 6</p>
  </w-tab-panel>
`;
