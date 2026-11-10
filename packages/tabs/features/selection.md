# Selection

Which tab is selected, how it changes, and which panel shows.

## Sub-features

- default: without `active`, or with one that matches no tab, the first tab is selected on load and `active` is set to its `for`, without a `change`. Story ManyTabs.
- active-attribute: `active="<panel id>"` selects that tab on load. Changing the attribute later switches tabs. Story Default.
- click: clicking a tab selects it, shows its panel and updates `active`. Clicking the selected tab does nothing.
- change-event: `change` on `w-tabs` with `{panelId}` whenever the selection changes, by click, by key or by code setting `active`. no test
- panels: only the selected tab's panel shows. The others render nothing.

## How to get to it (user POV)

`<w-tabs>` with `w-tab` and `w-tab-panel` children, optionally with `active="<panel id>"`. The user clicks a tab, and the consumer listens for `change` or reads `active`.

## Driving it with ctl

```bash
pnpm ctl mount '<w-tabs active="nope"><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab for="three">Three</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel><w-tab-panel id="three">Third panel</w-tab-panel></w-tabs>'
pnpm ctl events
pnpm ctl eval 'document.querySelector("w-tabs").getAttribute("active")'
pnpm ctl click 'w-tab[for="two"]'
pnpm ctl click 'w-tab[for="two"]'
pnpm ctl eval 'document.querySelector("w-tabs").setAttribute("active", "three")'
pnpm ctl events --type change
pnpm ctl snapshot --platform
pnpm ctl mount '<w-tabs active="two"><w-tab for="one">One</w-tab><w-tab for="two">Two</w-tab><w-tab-panel id="one">First panel</w-tab-panel><w-tab-panel id="two">Second panel</w-tab-panel></w-tabs>'
pnpm ctl snapshot --platform
```

- default: `events` is empty after the mount, and `active` reads `one`.
- click, change-event: the first click reports `change` `{"panelId":"two"}` and the second nothing. `events --type change` then holds `two`, then `three` from the `setAttribute`.
- panels: the first `snapshot` shows `tab "Three" [selected]` and one `tabpanel` holding "Third panel".
- active-attribute: the last `snapshot` shows `tab "Two" [selected]` and "Second panel".

## Gotchas

- Setting `active` from code fires `change`, the same as a click. Native inputs don't fire `change` for changes made in code.
- Suspected bug: setting `active` after load to an id that matches no tab fires `change` with that id, leaves no tab selected and no panel shown, and drops the tabs out of the Tab order. Repro: the core mount, `eval 'document.querySelector("w-tabs").setAttribute("active", "nope")'`, then `snapshot --platform` shows no `[selected]` and no `tabpanel`.
