import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Tabs, Tab, TabPanel } from './react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export type Story = StoryObj<typeof Tabs>;

export const Default = () => (
  <Tabs active="tab1">
    <Tab for="tab1">First Tab</Tab>
    <Tab for="tab2">Second Tab</Tab>
    <Tab for="tab3">Third Tab</Tab>

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
      <Tab for="home">
        <span slot="icon">🏠</span>
        Home
      </Tab>
      <Tab for="search">
        <span slot="icon">🔍</span>
        Search
      </Tab>
      <Tab for="profile">
        <span slot="icon">👤</span>
        Profile
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
    <Tabs active="tab1" id='tabs-many'>
      <Tab for="tab1">Tab 1</Tab>
      <Tab for="tab2">Tab 2</Tab>
      <Tab for="tab3">Tab 3</Tab>
      <Tab for="tab4">Tab 4</Tab>
      <Tab for="tab5">Tab 5</Tab>
      <Tab for="tab6">Tab 6</Tab>
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
