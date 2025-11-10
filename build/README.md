# Build Guide

## Custom Element Manifest

This scans through the components and produces a JSON manifest file
called custom-elements.json in dist folder. Other build commands depend
on this so it needs to run first.

See https://github.com/webcomponents/custom-elements-manifest for more info.

```
pnpm run build:manifest
```

## Editor support

Using the custom elements manifest file, we can produce meta files to support
code completion in jetbrains and vscode with this editor build command.

```
pnpm run build:editor
```

## Components exports

We export components for backwards compatibility as well as for React wrappers.

```
pnpm run build:components
```

## Production bundle

The production bundle is a single file with all components packaged optimally with template minification and tersification etc. This is created in the eik folder for upload to the Eik CDN. All apps should consume Warp elements via this file whether they are in development or production mode, locally or in dev/prod.

```
pnpm run build:bundle
```

## Polyfill

We rely on a polyfill for CSS anchor positioning for certain components. The polyfill gets built to a separate bundle and lazy loaded when those components are used, and only for the browsers that don't have native support.

```
pnpm run build:polyfill
```

## Cloaking

Along with the production bundle, we supply cloaking CSS rules so that pages
can easily hide the first page render until the components are loaded. It's important that the components and the cloaking CSS file are loaded early and effectively to avoid delay on the first render.

```
pnpm run build:cloak
```

## Styles generation with UNO

This is a temporary build script used while styles are being rewritten to BEM.
It can be used to generate a styles.ts file in each component folder based on which uno classes are used in that folder's component file. The result should then be committed.

```
pnpm run build:styles
```