/**
 * React compatibility layer for Warp Tabs components.
 * This provides React-like interfaces for easier migration from React components.
 */

import { html, TemplateResult } from 'lit';

// Type definitions for React-like props
export interface TabsProps {
  children?: TemplateResult | TemplateResult[];
  active?: string;
  className?: string;
  onChange?: (name: string) => void;
  style?: string;
}

export interface TabProps {
  className?: string;
  over?: boolean;
  children?: TemplateResult;
  name: string;
  label: string;
  isActive?: boolean;
  style?: string;
  onClick?: (event: CustomEvent) => void;
}

export interface TabPanelProps {
  children?: TemplateResult | TemplateResult[];
  name: string;
  hidden?: boolean;
}

/**
 * React-style wrapper for w-tabs element
 */
export function Tabs(props: TabsProps): TemplateResult {
  const { children, active, className, onChange, style, ...rest } = props;

  return html`
    <w-tabs
      active="${active || ''}"
      tab-class="${className || ''}"
      style="${style || ''}"
      @change="${onChange ? (e: CustomEvent) => onChange(e.detail.name) : undefined}"
      ...${rest}>
      ${children}
    </w-tabs>
  `;
}

/**
 * React-style wrapper for w-tab element
 */
export function Tab(props: TabProps): TemplateResult {
  const { className, over, children, name, label, isActive, style, onClick, ...rest } = props;

  return html`
    <w-tab
      name="${name}"
      label="${label}"
      ?active="${isActive}"
      ?over="${over}"
      tab-class="${className || ''}"
      style="${style || ''}"
      @click="${onClick}"
      ...${rest}>
      ${children ? html`<span slot="icon">${children}</span>` : ''}
    </w-tab>
  `;
}

/**
 * React-style wrapper for w-tab-panel element
 */
export function TabPanel(props: TabPanelProps): TemplateResult {
  const { children, name, hidden, ...rest } = props;

  return html` <w-tab-panel name="${name}" ?hidden="${hidden}" ...${rest}> ${children} </w-tab-panel>`;
}
