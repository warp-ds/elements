## Usage

**Do:**

- Use the `<w-link>` component when you need a link that looks like a button.

**Do Not:**

- Use the `<w-link>` component when you need a link that looks like a link. In that case, use the native `<a>` tag.
- Use the `<w-link>` component when you need a button that looks like a button. In that case, use the native `<w-button>` tag.

The following table illustrates use cases and which element to use for the purpose.

| If desired behaviour is | and desired styling is | then use     |
| ----------------------- | ---------------------- | ------------ |
| link                    | button                 | `<w-link>`   |
| button                  | button                 | `<w-button>` |
| link                    | link                   | `<a>`        |
| button                  | link                   | `<w-button>` |
