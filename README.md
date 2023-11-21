# Warp-ds Elements

Welcome to [@warp-ds/elements](https://github.com/warp-ds/elements),
a collection of Web Components built with Lit to be used to build interfaces based on the [Warp Design System](https://github.com/warp-ds/).
This repository is maintained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to the [@warp-ds/vue](https://www.npmjs.com/package/@warp-ds/elements) library.


## How to contribute

If you'd like to contribute to `@warp-ds/elements`,
start by reviewing the [contributing guidelines](CONTRIBUTING.md).


## How to use

### Installation

Install by using npm/pnpm or by adding a script link:

#### Install using npm
```sh
npm install @warp-ds/elements
```

#### Install using pnpm
```sh
pnpm add @warp-ds/elements
```

#### Using a direct link to Eik
```html
<script src="https://assets.finn.no/pkg/@warp-ds/elements/v1"></script>
```
#### Import components
This project builds both the whole Elements package and separate component packages that are published to EIK, making it possible for the user to choose to either import all of the components:
```js
import from '@warp-ds/elements'
```
or a specific component: 
```js
import '@warp-ds/elements/components/toast'
```

### Documentation

For information on the components available in the package and how to use them,
see the [Warp Design System documentation](https://warp-ds.github.io/tech-docs/).


## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/elements) and [Eik](https://assets.finn.no/pkg/@warp-ds/elements) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.


## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.


## License

@warp-ds/elements is available under the [Apache-2.0 software license](https://github.com/warp-ds/elements/blob/main/LICENSE).
