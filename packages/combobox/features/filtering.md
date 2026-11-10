# Filtering

How the typed text narrows the list, what happens when nothing matches, and how matches are highlighted.

## Sub-features

- filter-by-label: case-insensitive substring match on each option's label, or its value when it has no label. The value of a labelled option is never matched. Story Default.
- no-match: when no option matches, the list hides and the status reads "No suggestions". no test
- reopen-filtered: a field showing a picked label lists only options whose label contains it, so after picking Norway, reopening lists only Norway. no test
- match-text-segments: `match-text-segments` bolds the first part of each label that matches the typed text. Story WithTextMatching, no test.

## How to get to it (user POV)

Any `<w-combobox>` with options; add `match-text-segments` for the bold matches. The user types, reads the shorter list, and picks from it.

## Driving it with ctl

```bash
pnpm ctl mount '<w-combobox label="Country" match-text-segments><option value="no">Norway</option><option value="se">Sweden</option><option value="dk">Denmark</option></w-combobox>' --with textfield
pnpm ctl type 'role=textbox[name="Country"]' DEN
pnpm ctl snapshot 'role=listbox'
pnpm ctl screenshot
pnpm ctl press ControlOrMeta+a Backspace s e
pnpm ctl snapshot
pnpm ctl press ControlOrMeta+a Backspace n o r ArrowDown Enter ArrowDown
pnpm ctl snapshot 'role=listbox'
```

- filter-by-label: after `DEN`, the listbox holds `Sweden` and `Denmark`. After `se`, nothing is listed, although `se` is Sweden's value.
- no-match: the snapshot after `se` has `status: No suggestions`, no listbox and `combobox` without `[expanded]`.
- reopen-filtered: the last press picks Norway and reopens; the listbox holds only `Norway`.
- match-text-segments: the screenshot shows `den` in Sweden and `Den` in Denmark in bold. `snapshot` doesn't show bold.

## Gotchas

- The filter uses the text in the field. Picking an option puts its label there, so the next opening is filtered by that label.
- The bold segment follows the typed text even while ArrowDown previews another label in the input.
