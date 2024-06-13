
# WarpModal Component

`WarpModal` is a customizable modal component built with LitElement. It includes subcomponents for the header and footer, providing a flexible structure for your web applications.
Modals (or dialogs) display important information that users need to acknowledge. They are overlays that prevent users from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require users to take an action before they can continue interacting with the rest of the site. It should be used thoughtfully and sparingly.

## Installation

To include `WarpModal` in your project, import the components as follows:

```javascript
import { WarpModal, WarpModalHeader, WarpModalFooter, ModalCanCloseMixin, ModalProvidesCanCloseToSlotsMixin } from './path-to-components';
```

## Usage

```html
<w-modal show content-id="main-content" ignore-backdrop-clicks="true">
  <w-modal-header slot="header" title="Modal Title" back="true" no-close="false">
    <div slot="top">
      <img src="top-content-image.jpg" alt="Top Content Image">
    </div>
  </w-modal-header>
  <div slot="content">
    <p>This is the main content of the modal. You can add any HTML content here.</p>
    <button type="button">Click Me</button>
  </div>
  <w-modal-footer slot="footer">
    <button type="button">Close</button>
  </w-modal-footer>
</w-modal>
```

## Props

### `WarpModal` (ModalMain)

| Property                 | Type    | Description                                      | Example                                |
|--------------------------|---------|--------------------------------------------------|----------------------------------------|
| `show`                   | Boolean | Controls the visibility of the modal             | `<w-modal show="true">`                |
| `content-id`             | String  | Sets the ID for the content element inside modal  | `<w-modal content-id="main-content">`  |
| `ignore-backdrop-clicks` | Boolean | Disables closing the modal on backdrop clicks     | `<w-modal ignore-backdrop-clicks="true">` |

### `WarpModalHeader`

| Property      | Type    | Description                                 | Example                                |
|---------------|---------|---------------------------------------------|----------------------------------------|
| `title`       | String  | Sets the title of the modal header          | `<w-modal-header title="Modal Title">` |
| `back`        | Boolean | Displays a back button if true              | `<w-modal-header back="true">`         |
| `no-close`    | Boolean | Hides the close button if true              | `<w-modal-header no-close="true">`     |

### `WarpModalFooter`

- No specific props for this component.

## Slots

### `WarpModal`

| Slot      | Description                          |
|-----------|--------------------------------------|
| `header`  | Slot for the modal header content    |
| `footer`  | Slot for the modal footer content    |
| `content` | Slot for the main content of the modal |

### `WarpModalHeader`

| Slot  | Description                                 |
|-------|---------------------------------------------|
| `top` | Slot for additional content at the top      |

## Mixins

### `CanCloseMixin`

`CanCloseMixin` provides a `close` method to the component. This method can be overridden to implement custom close behavior.

### `ProvidesCanCloseToSlotsMixin`

`ProvidesCanCloseToSlotsMixin` provides `close` functionality to elements in the component's slots. It listens for slot changes and assigns the parent's `close` method to any slotted elements that have a `patchClose` property set to true.

## Detailed Example

Here's a comprehensive example demonstrating the `WarpModal` component with all props and slots in use:

```html
<w-modal show content-id="main-content" ignore-backdrop-clicks="true">
  <w-modal-header slot="header" title="Modal Title" back="true" no-close="false">
    <div slot="top">
      <!-- Additional top content -->
      <img src="top-content-image.jpg" alt="Top Content Image">
    </div>
  </w-modal-header>
  <div slot="content">
    <!-- Main modal content -->
    <p>This is the main content of the modal. You can add any HTML content here.</p>
    <button type="button">Click Me</button>
  </div>
  <w-modal-footer slot="footer">
    <!-- Footer content -->
    <button type="button">Close</button>
  </w-modal-footer>
</w-modal>
```

## Events

### `WarpModal`

| Event     | Description                                  |
|-----------|----------------------------------------------|
| `shown`   | Fired when the modal is shown                |
| `hidden`  | Fired when the modal is hidden               |

### `WarpModalHeader`

| Event          | Description                                  |
|----------------|----------------------------------------------|
| `backClicked`  | Fired when the back button is clicked        |

## Methods

### `WarpModal`

- `open()`: Opens the modal and locks the scroll.
- `close()`: Closes the modal and unlocks the scroll.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
