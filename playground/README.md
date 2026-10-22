# Playground

A bare page that renders components from source with the Warp CDN styles. The `verify-elements` daemon serves it with Vite and drives it; see [.agents/skills/verify-elements/SKILL.md](../.agents/skills/verify-elements/SKILL.md). Any Vite server started from the repo root can serve it too, at `/playground/?brand=<brand>` (default `finn-no`).

## Styles

`index.html` loads the stylesheets from `.storybook/preview-head.html` and the color scheme from `.storybook/preview.css`:

- **Static links** for the stylesheets that are the same for every brand: resets and components.
- **Built from `?brand=`** for the brand's fonts and `tokens/<brand>.css`. A `-dark` brand uses the light brand's fonts and sets `data-w-theme="dark"`.

`window.playground.styles` reports which brand stylesheets loaded; the page isn't ready until they have. A spike showed this renders pixel-identical to Storybook. The padding on `#mount` matches Storybook's default story padding.

## `window.playground`

| Member | Does |
|---|---|
| `mount(html, { with })` | Replaces `#mount` with the HTML and imports `/packages/<name>/<name>.ts` for every `w-<name>` tag in it, plus any names in `with`. Waits until the components are defined and rendered. Returns `tags`, `modules`, `errors`, `undefinedTags` and `warnings`. |
| `settle()` | Waits for pending Lit updates and two animation frames. |
| `events()` | Every CustomEvent dispatched by a `w-*` element since the last mount: `type`, `target`, `insideShadowOf`, `detail`, `time`. |
| `focused()` | The deepest focused element through shadow roots, with its value. |
| `inventory()` | Every `w-*` element on the page, including inside shadow roots, and whether it's defined. |
| `styles` | `{ href, ok }` for each brand stylesheet. |
| `serialize(value)` | A JSON-safe copy of any value: elements become `<tag#id>`, functions `[function]`, cycles `[circular]`. |
| `brand`, `ready` | The brand in use, and `true` once the page is ready. |

## Behavior to know

- **Missing imports are reported, not loaded.** `mount` imports only the tags in the HTML. When a component renders a `w-*` element that nothing imported, `mount` returns a warning instead of loading it, because the missing import is a product bug. `with` loads it explicitly.
- **Events are recorded by wrapping `EventTarget.prototype.dispatchEvent`.** A listener on the document wouldn't see non-bubbling events or events inside shadow roots.
- **The console is muted while an event's detail is copied.** `w-textfield` wraps the detail of its deprecated CustomEvent in a Proxy that logs a warning on every read (`packages/textfield/textfield.ts`). Without muting, recording an event would fill the console log. That deprecated event is also why the combobox fires duplicate events: it handles both the native event and this copy. Removing the copy from `w-textfield` would fix both, but it's a breaking change for consumers who listen to it.
- **Inline `<script>` tags in mounted HTML don't run**, because the HTML is inserted with `innerHTML`. Inline `on*` attributes do run.
- **Imported modules stay loaded between mounts.** A component imported by an earlier mount is already defined on the next one, so a missing-import warning only shows on the first mount after `up`. Page globals and `<html lang>` survive mounts too.
