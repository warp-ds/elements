# Fabric Elements

## Development

The project uses [Vite](https://vitejs.dev/) for "unbundled" local development. Start a local dev
server by running the following command:

```sh
npm run dev
```

Changes to either the custom elements or the HTML files should hot reload.

## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to
automate package publishing when making changes to the `main` or `next` branch.

It is recommended to branch off the `next` branch and follow
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) when making changes.
When your changes are ready for pull request, this should be opened against the `next` branch.

[Read more in-depth about Fabric Releases here](https://github.com/fabric-ds/issues/blob/779d59723993c13d62374516259602d967da56ca/rfcs/0004-releases.md).

Please note that the version published will depend on your commit message structure. We use
[commitizen](https://github.com/commitizen/cz-cli) to help follow this structure:

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes
(replacing `git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)
