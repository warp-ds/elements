import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PageIndicator } from "./react";

export default {
  title: 'Navigation/PageIndicator',
    render: ({ pageCount, selectedPage }) => (
      <PageIndicator pageCount={pageCount} selectedPage={selectedPage}></PageIndicator>
    ),
  component: PageIndicator,
} satisfies Meta<typeof PageIndicator>;

export type Story = StoryObj<typeof PageIndicator>;

export const Default = {
  args: {
    pageCount: 5,
    selectedPage: 1,
  },
};

export const InsideContainer = () => (
  <div style={{ display: "grid", height: "60vh", border: "1px solid lightgrey" }}>
    <PageIndicator pageCount={5} selectedPage={1} style={{ paddingBottom: "12px", alignSelf: "end" }}> </PageIndicator>
  </div>
);

export const InsideContainer10Pages = () => (
  <div style={{ display: "grid", height: "60vh", border: "1px solid lightgrey" }}>
    <PageIndicator pageCount={10} selectedPage={3} style={{ paddingBottom: "12px", alignSelf: "end" }}> </PageIndicator>
  </div>
);

export const OutsideContainer = () => (
  <div style={{ height: "450px", border: "1px solid lightgrey" }}>
    <div style={{ height: "300px", borderBottom: "1px solid #e6e6e6", }}></div>
    <PageIndicator pageCount={5} selectedPage={1} style={{ paddingTop: "16px" }}> </PageIndicator>
  </div>
);