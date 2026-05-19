## Usage

The steps component consists of two custom elements that work together:

- `<w-step-indicator>` - The container that manages step layout and orientation
- `<w-step>` - Individual step items within the indicator

Each `<w-step>` can be marked as `active` or `completed` to indicate progress. The `<w-step-indicator>` component automatically handles:

- Vertical and horizontal layouts
- Left and right alignment (for vertical layout)
- Visual connecting lines between steps
- ARIA attributes for accessibility
