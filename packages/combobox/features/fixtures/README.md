# Fixtures

This folder holds HTML that the feature files one level up mount with `ctl mount --file`.

Command blocks normally pass their HTML inline, wrapped in single quotes for the shell. That breaks when the HTML itself needs single quotes, as a JSON attribute (`options='[...]'`) or an inline handler with JavaScript strings does. `ctl check` runs blocks without a shell, so heredocs and similar workarounds aren't allowed either. With the HTML in a file here, the command stays a plain `ctl` line and the HTML stays in the repo, where anyone can read and review it.

- `options.html`, used by `options.md`: option children with and without a `label` attribute, and the `options` property set as JSON.
- `remote-search.html`, used by `remote-search.md`: an `onchange` handler that stands in for a consumer's server search, since inline `<script>` tags don't run in mounted HTML.

Rules:

- Write the HTML inline unless it needs single quotes.
- Name a fixture after the feature file that uses it.
- Fixtures aren't tests and aren't published; they exist only so the feature files' commands can run.
