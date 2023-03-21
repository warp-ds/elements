# Warp Elements

## Development

The project uses [Vite](https://vitejs.dev/) for "unbundled" local development. Start a local dev
server by running the following command:

```sh
pnpm run dev
```

Changes to either the custom elements or the HTML files should hot reload.


### Releases

This project uses
[Semantic Release](https://github.com/semantic-release/semantic-release) to
automate package publishing when making changes to the `main` or `alpha` branch.

It is recommended to branch off the `alpha` branch. Make sure `alpha` branch is 
updated with the latest `main`. 
Follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
when making changes. When your changes are ready for pull request, this should be 
opened against the `alpha` branch.


Please note that the version published will depend on your commit message
structure. You can use [commitizen](https://github.com/commitizen/cz-cli) to help
follow this structure:

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to
commit your changes (replacing `git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)