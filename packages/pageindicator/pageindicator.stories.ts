import { html, LitElement } from 'lit';
import './index.js';

export default {
  component: 'w-pageindicator',
  title: 'Navigation/PageIndicator',
  render: ({ pageCount, selectedPage }) => html`
    <w-pageindicator page-count=${pageCount} selected-page=${selectedPage}></w-pageindicator>
  `,
  argTypes: {
    pageCount: {
      control: { type: 'number' },
    },
    selectedPage: {
      control: { type: 'number' },
    },
  },
};

export const Default = {
  args: {
    pageCount: 5,
    selectedPage: 1,
  },
};

export const InsideContainer = () => html`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="5" selected-page="1" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`;

class PageIndicatorChangePage extends LitElement {
  private page = 1;

  connectedCallback() {
    super.connectedCallback();
    this.startPageChanger();
  }

  private startPageChanger() {
    setInterval(() => {
      if (this.page > 4) {
        this.page = 1;
      } else {
        this.page = this.page + 1;
      }
    }, 1000);
  }

  render() {
    return html`
      <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-pageindicator page-count="5" selected-page=${this.page} style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
      </div>
    `;
  }
}

if (!customElements.get('page-indicator-change-page')) {
  customElements.define('page-indicator-change-page', PageIndicatorChangePage);
}

export const InsideContainerChangePage = () => html` <page-indicator-change-page></page-indicator-change-page> `;

export const InsideContainer10Pages = () => html`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator page-count="10" selected-page="3" style="padding-bottom: 12px; align-self: end;"> </w-pageindicator>
  </div>
`;

export const OutsideContainer = () => html`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator page-count="5" selected-page="1" style="padding-top: 16px;"> </w-pageindicator>
  </div>
`;
