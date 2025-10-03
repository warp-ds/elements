# Warp-ds Elements

Welcome to [@warp-ds/elements](https://github.com/warp-ds/elements),
a collection of Web Components built with Lit to be used to build interfaces based on the [Warp Design System](https://github.com/warp-ds/).
This repository is maintained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to the [@warp-ds/elements](https://www.npmjs.com/package/@warp-ds/elements) library.

## How to contribute

If you'd like to contribute to `@warp-ds/elements`,
start by reviewing the [contributing guidelines](CONTRIBUTING.md).

## How to use

### Installation

Warp custom elements are supplied by the Eik CDN. 
In addition, you can install the `@warp-ds/elements` package to get intellisense
in your editor.

#### Step 1.

Add the following script and style to the very top of your document head to ensure performant loading

```html
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/elements/2.2.0-next.13/styles.css" crossorigin />
<script src="https://assets.finn.no/pkg/@warp-ds/elements/2.2.0-next.13/index.js" type="module"></script>
```

#### Step 2.

Be sure to preload whichever brand fonts you need for a page and load the correct font file:

```html
<!-- Finn example -->
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeAlleTegn-Light.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/FINNTypeAlleTegn-Medium.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css" crossorigin>
```

```html
<!-- Tori example -->
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/ToriSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/ToriSans-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/ToriSans-Italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/tori-fi.css" crossorigin>
```

```html
<!-- DBA example -->
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/ProximaNova-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/ProximaNova-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/dba-dk.css" crossorigin>
```

```html
<!-- Blocket example -->
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/BlocketSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/BlocketSans-Bold.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/BlocketSans-Medium.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/blocket-se.css" crossorigin>
```

#### Step 3.

You'll also want to load Warp tokens and resets CSS files to ensure consistent and correct styling for the brand.

```html
<!-- Finn example -->
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/finn-no.css" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css" crossorigin>
```

```html
<!-- Tori example -->
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/tori-fi.css" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css" crossorigin>
```

```html
<!-- DBA example -->
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/dba-dk.css" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css" crossorigin>
```

```html
<!-- Blocket example -->
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/blocket-se.css" crossorigin>
<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css" crossorigin>
```

#### Step 4.

Next, to add intellisense to your editor install `@warp-ds/elements` by using npm/pnpm. See the Editor integration below.

##### Install using npm

```sh
npm install @warp-ds/elements
```

##### Install using pnpm

```sh
pnpm add @warp-ds/elements
```

And then head on down to the editor configuration section below to complete setup.

### Using Warp elements with Borealis

If you are using Borealis modules from the Web Platform Team (and you should be) and keeping your app dependencies up to date (and you should be), then steps 2 and 3 are already taken care of for you, you just need to do steps 1 and 4.

### Documentation

For information on the components available in the package and how to use them,
see the [Warp Design System documentation](https://warp-ds.github.io/tech-docs/).

### Editor integration

#### Visual Studio Code

This module includes [Custom HTML and CSS data for Visual Studio Code](https://code.visualstudio.com/blogs/2020/02/24/custom-data-format).

##### Using Warp Elements in a plain HTML page

When developing, install Warp Elements locally using npm

```
npm install @warp-ds/elements
```

Add the following snippet to settings.json in vscode to tell it about Warp components

.vscode/settings.json

```json
{
  "html.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.html-custom-data.json"
  ],
  "css.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.css-custom-data.json"
  ]
}
```

restart vscode

Now, inside any .html files, you will get intellisense when using Warp Elements

```html
<w-button variant=""><w-button>
```

##### Using Warp Elements in JavaScript template literals

IntelliSense in JavaScript strings is not supported without additional plugins and syntax, such as comment hints (`/* html */`) or a tagged template literal similar to Lit.

##### Using Warp Elements in Lit html tagged template literals

When developing, install Warp Elements locally using npm

```
npm install @warp-ds/elements
```

Add the following snippet to settings.json in vscode to tell it about Warp components

.vscode/settings.json

```json
{
  "html.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.html-custom-data.json"
  ],
  "css.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.css-custom-data.json"
  ]
}
```

Install the lit-plugin vscode extension and restart vscode

Now, inside any html`` tagged template literals, you will get intellisense when using Warp Elements.

```html
<w-button variant=""><w-button>
```

##### Using Warp Elements in a React app, v19 or later

```
npm install @warp-ds/elements
```

Now, inside your react components, you will get intellisense when using Warp Elements.

```html
<w-button variant=""><w-button>
```

##### Using Warp Elements in a React app, v18 or earlier

React 18 and earlier do not support custom elements.

If you are on React 18 or early, we strongly urge you to please consider upgrading to React v19. 

If you cannot upgrade right away, Warp supplies custom element wrappers to add backwards compatibility. Use them like so:

```
npm install @warp-ds/elements
```

Wherever you need to use a component in your app, import the appropriate element from the React namespace

```js
import { Button } from "@warp-ds/elements/react/button";
```

and use the component

```js
<Button variant="primary"></Button>
```

you should get intellisense when using Warp Elements.

#### JetBrains products

We ship `web-types.json` which should get picked up automatically by JetBrains IDEA and similar products.

You should see code completions and inline docs for Warp elements when writing HTML.

### Ensure elements are ready (and avoid CLS and FOUCE)

To avoid issues like CLS (cumulative layout shift) and FOUCE (flash of unstyled custom elements), its important that Warp Elements is loaded before the page is rendered. For this reason, elements should not be bundled into the rest of your client side application and code and should be loaded in the document head, as early as possible (see installation above). When this is done correctly, elements will be loaded and ready about the same time as the rest of the page styles and wont cause delays in page load times. However, due to the way browsers work, a page render will occur without the components and an immediate re-render will occur with the components. This causes things to jump around on the page which in turn impacts lighthouse and other performance scores. Warp elements ships with a tool to prevent the initial render without components and only do the second, with components, render. This tool is called Warp Cloak and its usage is described below.

#### The Warp cloaking device

To use the Warp cloaking device to avoid CLS and FOUCE, simply add the warp-cloak class to your pages body, html or a wrapper div that contains all the pages visible elements (including the header and footer)

```html
<body class="warp-cloak">
```

That's it, your components should render just 1x, fully ready with no CLS and FOUCE.

## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/elements) and [Eik](https://assets.finn.no/pkg/@warp-ds/elements) using a `next` tag (e.g. `2.2.0-next.13`).
Anyone needing to use the latest changes of this package can point to the `next` version while waiting for the stable release.

## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.

## License

@warp-ds/elements is available under the [Apache-2.0 software license](https://github.com/warp-ds/elements/blob/main/LICENSE).
