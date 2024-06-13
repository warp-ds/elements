
# WarpModal Component

`WarpModal` is a customizable modal component built with LitElement. It includes subcomponents for the header and footer, providing a flexible structure for your web applications.
Modals (or dialogs) display important information that users need to acknowledge. They are overlays that prevent users from interacting with the rest of the application until a specific action is taken. They can be disruptive because they require users to take an action before they can continue interacting with the rest of the site. It should be used thoughtfully and sparingly.


## Main structure
```html
<w-modal ... >
  <w-modal-header slot="header" ... />
  <div slot="content" ... />
  <w-modal-footer slot="footer" ... />
</w-modal>
```

## Supported features in this version
### Back button on the top left
This is disabled if there is a picture added to the header (As in the detailed example below)

### Image top
An image can be added to the top of the dialogue (See example below)

## Unsupported features that are unclear, please let us know if needed
Its unclear if and how this has to natively support any process kinda buttons (Back and forth navigation within the modal), Where these are supposed to be placed and what the close button is supposed to be placed if that is the place for the next button.

One tidy solution would be to have an alternative w-modal-header, w-modal-header-process or something similar that could be used instead for these cases, that would remove the need for logic in the header and clean up the styling for it quite a bit.

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

| Slot      | Description                            |
| --------- | -------------------------------------- |
| `header`  | Slot for the modal header subcomponent |
| `footer`  | Slot for the modal footer subcomponent |
| `content` | Slot for the main content of the modal |

### `WarpModalHeader`

| Slot  | Description                                                                     |
| ----- | ------------------------------------------------------------------------------- |
| `top` | Slot for additional content at the top, This is where a header picture would go |
|       |                                                                                 |

## Mixins

### `CanCloseMixin`

`CanCloseMixin` provides a `close` method to the component. This method can be overridden to implement custom close behavior.

### `ProvidesCanCloseToSlotsMixin`

`ProvidesCanCloseToSlotsMixin` provides `close` functionality to elements in the component's slots. It listens for slot changes and assigns the parent's `close` method to any slotted elements that have a `patchClose` property set to true.


## Detailed Example

Here's a comprehensive example demonstrating the `WarpModal` component with all props and slots in use, this example has bleeding image on top:

```html
<w-button id="modal-open-button" aria-haspopup="dialog">Open a modal</w-button>

<w-modal id="example-modal" show content-id="main-content" ignore-backdrop-clicks="true">
  <w-modal-header slot="header" title="Look a doggo!">
    <img slot="top" class="h-[256] w-full object-cover" src="https://source.unsplash.com/random?dog" alt="a picture of a dog">
  </w-modal-header>
  <div slot="content">
    <p>This is the main content of the modal. You can add any HTML content here.</p>
  </div>
  <w-modal-footer slot="footer">
    <w-button variant="primary" id="modal-close-button">OK</w-button>
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
