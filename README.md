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
### Import components
This project builds both the whole Elements package and separate component packages that are published to EIK, making it possible for the user to choose to either import all of the components:
```js
import '@warp-ds/elements';
```
or a specific component: 
```js
import '@warp-ds/elements/components/toast';
```

### Documentation

For information on the components available in the package and how to use them,
see the [Warp Design System documentation](https://warp-ds.github.io/tech-docs/).

## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/elements) and [Eik](https://assets.finn.no/pkg/@warp-ds/elements) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.

## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.

## Styling components inside the Shadow DOM

It is possible to style components that are inside the Shadow DOM by including `@unocss-placeholder` inside the static styles of the component that contains the component you want to style:

```js
// web-component-container/index.js

static styles = [
    css`
      @unocss-placeholder
      `,
  ]
```

Once you have this in place, you can style the component using the [part CSS pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) that is also supported by [UnoCSS](https://unocss.dev/integrations/vite#part-built-in-support).

You simply add `part=<part-name>` to the component that you want to style:

```js
// web-component-with-parts/index.js

<h2 part='heading'>
  <slot></slot>
</h2>
```

Then you apply style to that part-name in the component that contains the component that you want to style:

```js
// web-component-container/index.js

<div>
  <web-component-with-parts class='part-[heading]:s-text-positive part-[heading]:pl-4'>
    I'm an h2 heading
  </web-component-with-parts>
</div>
```

## License

@warp-ds/elements is available under the [Apache-2.0 software license](https://github.com/warp-ds/elements/blob/main/LICENSE).
