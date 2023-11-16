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

### Documentation

For information on the components available in the package and how to use them,
see the [Warp Design System documentation](https://warp-ds.github.io/tech-docs/).


## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/elements) and [Eik](https://assets.finn.no/pkg/@warp-ds/elements) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.


## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.

## Styling components inside the Shadow DOM

It is possible to style components that are inside the Shadow DOM by enabling `shadow-dom` mode in the plugin (this is already prepared for development mode in vite.config.js) and including `@unocss-placeholder` inside each component's static styles:

```js
static styles = [
    css`
      @unocss-placeholder
      `,
  ]
```

Once you have this in place you can style the component using the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">::part CSS pseudo-element</a> that is also supported by <a href="https://unocss.dev/integrations/vite#part-built-in-support" target="_blank">UnoCSS</a>.

You simply add `part=<part-name>` as an attribute inside the component that you want to style, for example:

```html
<svg part="style-svg"></svg>
```

Then you apply style to that part-name in the component that is using the component that you want to style:
```html
<web-component-with-parts>
  <svg class="part-[style-svg]:w-20 part-[style-svg]:h-20"></svg>
</web-component-with-parts>
```



## License

@warp-ds/elements is available under the [Apache-2.0 software license](https://github.com/warp-ds/elements/blob/main/LICENSE).
