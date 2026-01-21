import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tab, TabPanel, Tabs } from './react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export type Story = StoryObj<typeof Tabs>;

export const Default = () => (
  <Tabs active="tab1">
    <Tab for="tab1" label="First Tab" />
    <Tab for="tab2" label="Second Tab" />
    <Tab for="tab3" label="Third Tab" />

    <TabPanel id="tab1">
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </TabPanel>

    <TabPanel id="tab2" hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </TabPanel>

    <TabPanel id="tab3" hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </TabPanel>
  </Tabs>
);

export const WithIcons = () => (
  <>
    <Tabs active="home">
      <Tab for="home" label="Home">
        <span slot="icon">🏠</span>
      </Tab>
      <Tab for="search" label="Search">
        <span slot="icon">🔍</span>
      </Tab>
      <Tab for="profile" label="Profile">
        <span slot="icon">👤</span>
      </Tab>
    </Tabs>

    <TabPanel id="home">
      <p>Welcome to the home page!</p>
    </TabPanel>

    <TabPanel id="search" hidden>
      <p>Search functionality goes here.</p>
    </TabPanel>

    <TabPanel id="profile" hidden>
      <p>User profile information.</p>
    </TabPanel>
  </>
);

export const ManyTabs = () => (
  <>
    <Tabs active="tab1" id="tabs-many">
      <Tab for="tab1" label="Tab 1" />
      <Tab for="tab2" label="Tab 2" />
      <Tab for="tab3" label="Tab 3" />
      <Tab for="tab4" label="Tab 4" />
      <Tab for="tab5" label="Tab 5" />
      <Tab for="tab6" label="Tab 6" />
    </Tabs>

    <TabPanel id="tab1">
      <p>Content for tab 1</p>
    </TabPanel>

    <TabPanel id="tab2" hidden>
      <p>Content for tab 2</p>
    </TabPanel>

    <TabPanel id="tab3" hidden>
      <p>Content for tab 3</p>
    </TabPanel>

    <TabPanel id="tab4" hidden>
      <p>Content for tab 4</p>
    </TabPanel>

    <TabPanel id="tab5" hidden>
      <p>Content for tab 5</p>
    </TabPanel>

    <TabPanel id="tab6" hidden>
      <p>Content for tab 6</p>
    </TabPanel>
  </>
);
