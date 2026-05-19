## Accessibility

The tabs component follows the WAI-ARIA Tabs pattern:

- The tab list gets `role="tablist"`
- Each tab button gets `role="tab"` with `aria-selected` reflecting its active state
- Each tab button gets `aria-controls` pointing to its associated panel
- Each panel gets `role="tabpanel"` with `aria-labelledby` pointing to its associated tab
- Keyboard navigation is supported:
  - `ArrowLeft`/`ArrowRight`: Navigate between tabs
  - `Home`: Move to first tab
  - `End`: Move to last tab
