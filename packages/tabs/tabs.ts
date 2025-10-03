// @warp-css;

import { html, LitElement, PropertyValues } from 'lit';

import { classNames } from '@chbphone55/classnames';
import { property, query } from 'lit/decorators.js';

import { reset } from '../styles.js';

import { styles } from './styles.js';

const ccTabs = {
  wrapper: 'inline-block border-b s-border mb-32',
  base: 'inline-grid relative -mb-1',
  selectionIndicator: 'absolute s-border-selected -bottom-0 border-b-4 transition-all',
};

const ccGridLayout = {
  cols1: 'grid-cols-1',
  cols2: 'grid-cols-2',
  cols3: 'grid-cols-3',
  cols4: 'grid-cols-4',
  cols5: 'grid-cols-5',
  cols6: 'grid-cols-6',
  cols7: 'grid-cols-7',
  cols8: 'grid-cols-8',
  cols9: 'grid-cols-9',
};

// Simple debounce utility
function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number = 200, immediate: boolean = false): T {
  let timeout: NodeJS.Timeout | null;
  return ((...args: unknown[]) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  }) as T;
}

export interface TabChangeEvent {
  name: string;
}

/**
 * Tabs are used to organize content by grouping similar information on the same page.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTabs extends LitElement {
  static styles = [reset, styles];

  @property({ reflect: true })
  active: string = '';

  @property({ attribute: 'tab-class', reflect: true })
  tabClass: string = '';

  @query('[role="tablist"]')
  private tabList!: HTMLElement;

  @query('.selection-indicator')
  private selectionIndicator!: HTMLElement;

  private _activeTab: string = '';
  private _resizeObserver?: ResizeObserver;
  private _updateSelectionIndicatorDebounced = debounce(this.updateSelectionIndicator.bind(this), 100);

  constructor() {
    super();
    this.addEventListener('tab-click', this._handleTabClick);
  }

  connectedCallback() {
    super.connectedCallback();

    // Set up resize observer for selection indicator updates
    if (typeof ResizeObserver !== 'undefined') {
      this._resizeObserver = new ResizeObserver(() => {
        this._updateSelectionIndicatorDebounced();
      });
      this._resizeObserver.observe(this);
    }

    // Fallback for older browsers
    window.addEventListener('resize', this._updateSelectionIndicatorDebounced);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this._updateSelectionIndicatorDebounced);
    this.removeEventListener('tab-click', this._handleTabClick);
  }

  firstUpdated() {
    this._initializeActiveTab();
    this.updateSelectionIndicator();
    this.updatePanels();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('active') && this.active !== this._activeTab) {
      this._activeTab = this.active;
      this.updateSelectionIndicator();
      this.updatePanels();
      this._notifyTabChange();
    }
  }

  private _initializeActiveTab() {
    const tabs = Array.from(this.querySelectorAll('w-tab'));
    const activeTab = tabs.find((tab) => tab.hasAttribute('active'));

    if (activeTab) {
      this._activeTab = activeTab.getAttribute('name') || '';
    } else if (tabs.length > 0) {
      this._activeTab = tabs[0].getAttribute('name') || '';
    }

    if (this._activeTab) {
      this.active = this._activeTab;
    }
  }

  private _handleTabClick = (event: CustomEvent<TabChangeEvent>) => {
    const newActiveTab = event.detail.name;
    if (newActiveTab !== this._activeTab) {
      this.active = newActiveTab;
      this._activeTab = newActiveTab;
      this.updateSelectionIndicator();
      this.updatePanels();
      this._notifyTabChange();
    }
  };

  private _notifyTabChange() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { name: this._activeTab },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private updateSelectionIndicator() {
    requestAnimationFrame(() => {
      if (!this.tabList || !this.selectionIndicator) return;

      const activeTab = this.tabList.querySelector(`w-tab[name="${this._activeTab}"]`) as HTMLElement;
      if (!activeTab) return;

      const tabListRect = this.tabList.getBoundingClientRect();
      const activeTabRect = activeTab.getBoundingClientRect();

      const left = activeTabRect.left - tabListRect.left;
      const width = activeTabRect.width;

      this.selectionIndicator.style.left = `${left}px`;
      this.selectionIndicator.style.width = `${width}px`;
    });
  }

  private updatePanels() {
    // Update tab panels visibility
    const panels = document.querySelectorAll('w-tab-panel');
    panels.forEach((panel) => {
      const panelName = panel.getAttribute('name');
      if (panelName === this._activeTab) {
        panel.removeAttribute('hidden');
        // Also explicitly set hidden property to false for web components
        (panel as HTMLElement).hidden = false;
      } else {
        panel.setAttribute('hidden', '');
        (panel as HTMLElement).hidden = true;
      }
    });

    // Update tab active states
    const tabs = this.querySelectorAll('w-tab');
    tabs.forEach((tab) => {
      const tabName = tab.getAttribute('name');
      if (tabName === this._activeTab) {
        tab.setAttribute('active', '');
      } else {
        tab.removeAttribute('active');
      }
    });
  }

  private _handleKeyDown = (event: KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.shiftKey || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }

    const tabs = Array.from(this.querySelectorAll('w-tab'));
    const currentIndex = tabs.findIndex((tab) => tab.getAttribute('name') === this._activeTab);

    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      case 'ArrowLeft':
        nextIndex = Math.max(0, currentIndex - 1);
        break;
      case 'ArrowRight':
        nextIndex = Math.min(tabs.length - 1, currentIndex + 1);
        break;
    }

    if (nextIndex !== currentIndex) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      const nextTabName = nextTab.getAttribute('name');

      if (nextTabName) {
        this.active = nextTabName;
        this._activeTab = nextTabName;
        this.updateSelectionIndicator();
        this.updatePanels();
        this._notifyTabChange();

        // Focus the next tab
        (nextTab as HTMLElement).focus();
      }
    }
  };

  private get _tabCount() {
    return this.querySelectorAll('w-tab').length;
  }

  private get _gridClass() {
    const count = Math.min(this._tabCount, 9);
    return ccGridLayout[`cols${count}` as keyof typeof ccGridLayout] || ccGridLayout.cols1;
  }

  render() {
    const navClasses = classNames(this.tabClass, ccTabs.wrapper);
    const divClasses = classNames([ccTabs.base, this._gridClass]);

    return html`
      <div class="${navClasses}">
        <div role="tablist" class="${divClasses}" @keydown="${this._handleKeyDown}">
          <slot></slot>
          <span class="selection-indicator ${ccTabs.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-tabs')) {
  customElements.define('w-tabs', WarpTabs);
}

declare global {
  interface HTMLElementTagNameMap {
    'w-tabs': WarpTabs;
  }
}
