// @warp-css;

import { classNames } from '@chbphone55/classnames';
import { html, LitElement, PropertyValues } from 'lit';
import { property, query } from 'lit/decorators.js';

import { reset } from '../styles.js';
import { WarpTab } from '../tab/tab.js';
import { WarpTabPanel } from '../tab-panel/tab-panel.js';
import { styles } from './styles.js';

const ccTabs = {
  wrapper: 'border-b s-border mb-32',
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
function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait = 200, immediate = false): T {
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

/**
 * Tabs are used to organize content by grouping similar information on the same page.
 *
 * [See Storybook for usage examples](https://warp-ds.github.io/elements/?path=/docs/tabs--docs)
 */
export class WarpTabs extends LitElement {
  static styles = [reset, styles];

  @property({ reflect: true })
  active = '';

  @query('[role="tablist"]')
  private tabList!: HTMLElement;

  @query('.selection-indicator')
  private selectionIndicator!: HTMLElement;

  private _activeTabFor = '';
  private _resizeObserver?: ResizeObserver;
  private _updateSelectionIndicatorDebounced = debounce(this.updateSelectionIndicator.bind(this), 100);

  private _assignSlots = () => {
    Array.from(this.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) return;

      // Only set slot if not already set by the consumer.
      if (child.tagName === 'W-TAB' && !child.getAttribute('slot')) child.setAttribute('slot', 'tabs');
      if (child.tagName === 'W-TAB-PANEL' && !child.getAttribute('slot')) child.setAttribute('slot', 'panels');
    });
    this.requestUpdate();
  };

  constructor() {
    super();
    this.addEventListener('click', this._handleTabClick);
  }

  connectedCallback() {
    super.connectedCallback();

    this._assignSlots();

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
    this.removeEventListener('click', this._handleTabClick);
  }

  firstUpdated() {
    this._assignSlots();
    this._initializeActiveTab();
    this.updateSelectionIndicator();
    this.updatePanels();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('active') && this.active !== this._activeTabFor) {
      this._activeTabFor = this.active;
      this.updateSelectionIndicator();
      this.updatePanels();
      this._notifyTabChange();
    }
  }

  get tabs() {
    const slot = this.shadowRoot?.querySelector('slot[name="tabs"]') as HTMLSlotElement | null;
    if (!slot) return [];

    const slottedElements = slot.assignedElements({ flatten: true });
    return slottedElements.filter((el) => el.tagName.toLowerCase() === 'w-tab');
  }

  get activeTab() {
    const activeTabs = this.tabs.filter((tab: HTMLElement & { for: string }) => tab.for === this._activeTabFor);
    return activeTabs[0];
  }

  private _initializeActiveTab() {
    if (this.activeTab) {
      this._activeTabFor = this.activeTab.getAttribute('for') || '';
    } else if (this.tabs.length > 0) {
      this._activeTabFor = this.tabs[0].getAttribute('for') || '';
    }

    if (this._activeTabFor) {
      this.active = this._activeTabFor;
    }
  }

  private _handleTabClick = (event: PointerEvent & { tab?: WarpTab }) => {
    const newActiveTab = event.tab?.for;
    if (!newActiveTab) return;
    if (newActiveTab !== this._activeTabFor) {
      this.active = newActiveTab;
      this._activeTabFor = newActiveTab;
      this.updateSelectionIndicator();
      this.updatePanels();
      this._notifyTabChange();
    }
  };

  private _notifyTabChange() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { panelId: this._activeTabFor },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private updateSelectionIndicator() {
    requestAnimationFrame(() => {
      if (!this.tabList || !this.selectionIndicator) return;

      if (!this.activeTab) return;

      const tabListRect = this.tabList.getBoundingClientRect();
      const activeTabRect = this.activeTab.getBoundingClientRect();

      const left = activeTabRect.left - tabListRect.left;
      const width = activeTabRect.width;

      this.selectionIndicator.style.left = `${left}px`;
      this.selectionIndicator.style.width = `${width}px`;
    });
  }

  private updatePanels() {
    // Update tab panels visibility
    const panels: WarpTabPanel[] = Array.from(this.querySelectorAll('w-tab-panel'));

    panels.forEach((panel) => {
      if (panel.id === this._activeTabFor) {
        panel.hidden = false;
      } else {
        panel.hidden = true;
      }
    });

    // Update tab active states
    const tabs: WarpTab[] = Array.from(this.querySelectorAll('w-tab'));
    tabs.forEach((tab) => {
      if (tab.for === this._activeTabFor) {
        tab.active = true;
        tab.tabIndex = 0;
      } else {
        tab.active = false;
        tab.tabIndex = -1;
      }
    });
  }

  private _handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
    ) {
      return;
    }

    const tabs: WarpTab[] = Array.from(this.querySelectorAll('w-tab'));
    const currentIndex = tabs.findIndex((tab) => tab.for === this._activeTabFor);

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
      const nextTabName = nextTab.for;

      if (nextTabName) {
        this.active = nextTabName;
        this._activeTabFor = nextTabName;
        this.updateSelectionIndicator();
        this.updatePanels();
        this._notifyTabChange();

        // Focus the next tab
        const el = nextTab;
        el.tabIndex = 0; // All tabs are initially -1
        el.focus();
        tabs.forEach((t) => {
          t.tabIndex = t === el ? 0 : -1;
        });
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
    const navClasses = classNames(ccTabs.wrapper);
    const divClasses = classNames([ccTabs.base, this._gridClass]);

    return html`
      <div class="${navClasses}">
        <div role="tablist" class="${divClasses}" @keydown="${this._handleKeyDown}">
          <slot name="tabs" @slotchange="${this._assignSlots}"></slot>
          <span class="selection-indicator ${ccTabs.selectionIndicator}" data-testid="selection-indicator"></span>
        </div>
      </div>
      <slot name="panels" @slotchange="${this._assignSlots}"></slot>
      <slot @slotchange="${this._assignSlots}"></slot>
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
