# Custom Element Manifest

Configuration for the `cem` (Custom Element Manifest) CLI which generates the `dist/custom-elements.json` file.

The Custom Element Manifest is used in various developer tools to provide documentation and code completion for custom elements. It's also the source of truth for Storybook documentation of attributes (properties/props) and events.

See [Custom Elements Manifest from Open WC](https://custom-elements-manifest.open-wc.org/analyzer/getting-started/#documenting-your-components) and [Web Components Toolkit](https://wc-toolkit.com/cem-utilities/overview/) to learn more.

## Types

We use the @wc-toolkit/jsx-types plugin to generate a correct dist/index.d.ts file from custom-elements.json as part of the build.