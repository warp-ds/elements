# Localization

The component's own strings, the status message and "Optional", in da, en, fi, nb and sv.

## Sub-features

- status-text: "2 forslag" and "Ingen forslag" in nb, "2 förslag" in sv, "2 ehdotusta" in fi, "2 forslag" in da, "2 suggestions" in en. no test outside en.
- optional-text: "Valgfri" (nb, da), "Valfritt" (sv), "Valinnainen" (fi), "Optional" (en).
- locale-detection: the language comes from `<html lang>`, else the frame's or parent's, and any language other than the five falls back to en.
- live-switch: changing `lang` later switches the status at its next render, but not "Optional". no test

## How to get to it (user POV)

A page with `<html lang="nb">`. A Norwegian screen reader user opens the list and hears "2 forslag", and the label reads "Country Valgfri".

## Driving it with ctl

```bash
node .agents/skills/verify-elements/ctl.mjs eval 'document.documentElement.lang = "nb"'
node .agents/skills/verify-elements/ctl.mjs mount '<w-combobox label="Country" optional><option value="no">Norway</option><option value="se">Sweden</option></w-combobox>' --with textfield
node .agents/skills/verify-elements/ctl.mjs press ArrowDown --selector 'role=textbox[name=/^Country/]'
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs eval 'document.documentElement.lang = "sv"'
node .agents/skills/verify-elements/ctl.mjs press Escape ArrowDown
node .agents/skills/verify-elements/ctl.mjs snapshot
node .agents/skills/verify-elements/ctl.mjs eval 'document.documentElement.lang = "en"'
```

- status-text: the first `snapshot` has `status: 2 forslag`. For another language, change `"nb"` in the first line.
- optional-text: the first `snapshot` has `textbox "Country Valgfri"`.
- locale-detection: the strings follow the `lang` set before the mount. The page starts as `en`.
- live-switch: after switching to `sv`, the second `snapshot` has `status: 2 förslag` but still `textbox "Country Valgfri"`.

## Gotchas

- `lang` survives `mount`. Set it back to `en` afterwards, as the block's last line does.
- Suspected bug: after a `lang` change, "Optional" stays in the old language until something else re-renders the field. `i18n.ts` dispatches `warp-i18n-change`, but nothing listens. Repro: the block above.
