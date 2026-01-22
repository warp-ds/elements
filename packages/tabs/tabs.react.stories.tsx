import '@warp-ds/components/icon';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tab, TabPanel, Tabs } from './react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'w-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { name?: string; size?: string; locale?: string },
        HTMLElement
      >;
    }
  }
}

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
    <Tabs active="info">
      <Tab for="info">
        <w-icon name="info-16" slot="icon" />
        Info
      </Tab>
      <Tab for="done">
        <w-icon name="success-16" slot="icon" />
        Done
      </Tab>
      <Tab for="error">
        <w-icon name="error-16" slot="icon" />
        Failures
      </Tab>
    </Tabs>

    <TabPanel id="info">
      <p>Info content.</p>
    </TabPanel>

    <TabPanel id="done" hidden>
      <p>Done content.</p>
    </TabPanel>

    <TabPanel id="error" hidden>
      <p>Error content.</p>
    </TabPanel>
  </>
);

export const WithIconsOver = () => (
  <>
    <Tabs active="info">
      <Tab for="info" over>
        <w-icon name="info-16" slot="icon" />
        Info
      </Tab>
      <Tab for="done" over>
        <w-icon name="success-16" slot="icon" />
        Done
      </Tab>
      <Tab for="error" over>
        <w-icon name="error-16" slot="icon" />
        Failures
      </Tab>
    </Tabs>

    <TabPanel id="info">
      <p>Info content.</p>
    </TabPanel>

    <TabPanel id="done" hidden>
      <p>Done content.</p>
    </TabPanel>

    <TabPanel id="error" hidden>
      <p>Error content.</p>
    </TabPanel>
  </>
);

export const ManyTabs = () => (
  <>
    <Tabs active="tab1" id="tabs-many">
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
