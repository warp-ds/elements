## Usage

The tabs component consists of three custom elements that work together:

- `<w-tabs>` - The container that manages tab state and keyboard navigation
- `<w-tab>` - Individual tab buttons
- `<w-tab-panel>` - Content panels associated with each tab

Each `<w-tab>` has a `for` attribute that matches the `id` of its corresponding `<w-tab-panel>`.
