import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Tabs, Tab, TabPanel } from './react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export type Story = StoryObj<typeof Tabs>;

export const Default = () => (
  <>
    <Tabs active="tab1" id='tabs-default'>
      <Tab name="tab1" label="First Tab" />
      <Tab name="tab2" label="Second Tab" />
      <Tab name="tab3" label="Third Tab" />
    </Tabs>

    <TabPanel name="tab1" for='tabs-default'>
      <p>Content for the first tab. This panel is visible when the first tab is active.</p>
    </TabPanel>

    <TabPanel name="tab2" for='tabs-default' hidden>
      <p>Content for the second tab. This panel is visible when the second tab is active.</p>
    </TabPanel>

    <TabPanel name="tab3" for='tabs-default' hidden>
      <p>Content for the third tab. This panel is visible when the third tab is active.</p>
    </TabPanel>
  </>
);

export const WithIcons = () => (
  <>
    <Tabs active="home" id='tabs-with-icons'>
      <Tab name="home" label="Home">
        <span slot="icon">🏠</span>
      </Tab>
      <Tab name="search" label="Search">
        <span slot="icon">🔍</span>
      </Tab>
      <Tab name="profile" label="Profile">
        <span slot="icon">👤</span>
      </Tab>
    </Tabs>

    <TabPanel name="home" for='tabs-with-icons'>
      <p>Welcome to the home page!</p>
    </TabPanel>

    <TabPanel name="search" for='tabs-with-icons' hidden>
      <p>Search functionality goes here.</p>
    </TabPanel>

    <TabPanel name="profile" for='tabs-with-icons' hidden>
      <p>User profile information.</p>
    </TabPanel>
  </>
);

export const ManyTabs = () => (
  <>
    <Tabs active="tab1" id='tabs-many'>
      <Tab name="tab1" label="Tab 1" />
      <Tab name="tab2" label="Tab 2" />
      <Tab name="tab3" label="Tab 3" />
      <Tab name="tab4" label="Tab 4" />
      <Tab name="tab5" label="Tab 5" />
      <Tab name="tab6" label="Tab 6" />
    </Tabs>

    <TabPanel name="tab1" for='tabs-many'>
      <p>Content for tab 1</p>
    </TabPanel>

    <TabPanel name="tab2" for='tabs-many' hidden>
      <p>Content for tab 2</p>
    </TabPanel>

    <TabPanel name="tab3" for='tabs-many' hidden>
      <p>Content for tab 3</p>
    </TabPanel>

    <TabPanel name="tab4" for='tabs-many' hidden>
      <p>Content for tab 4</p>
    </TabPanel>

    <TabPanel name="tab5" for='tabs-many' hidden>
      <p>Content for tab 5</p>
    </TabPanel>

    <TabPanel name="tab6" for='tabs-many' hidden>
      <p>Content for tab 6</p>
    </TabPanel>
  </>
);
