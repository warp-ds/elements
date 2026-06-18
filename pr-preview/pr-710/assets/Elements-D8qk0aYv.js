import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t,o as n}from"./react-C_CSCj7s.js";import{t as r}from"./mdx-react-shim-wZ56Y-Ct.js";function i(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:`warp-dselements`,children:`@warp-ds/elements`}),`
`,(0,o.jsx)(n.p,{children:`The home of Warp components for web. Can be used in plain HTML pages or your framework of choice.`}),`
`,(0,o.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,o.jsx)(n.h3,{id:`install`,children:`Install`}),`
`,(0,o.jsxs)(n.p,{children:[`Warp Elements are published to and delivered by our CDN server, Eik. You do not need to install `,(0,o.jsx)(n.code,{children:`@warp-ds/elements`}),` to use the components, and you should not bundle the components into your client-side application code.`]}),`
`,(0,o.jsxs)(n.p,{children:[`If you want better DX (types, intellisense, and docs in editors), you can install `,(0,o.jsx)(n.code,{children:`@warp-ds/elements`}),` locally and use it alongside the Web Components Language Server extension for VS Code.`]}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:`npm`}),`:`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-sh`,children:`npm install @warp-ds/elements
`})}),`
`,(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:`pnpm`}),`:`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-sh`,children:`pnpm add @warp-ds/elements
`})}),`
`,(0,o.jsx)(n.h4,{id:`using-borealis`,children:`Using @borealis`}),`
`,(0,o.jsxs)(n.p,{children:[`If you are on a recent version of `,(0,o.jsx)(n.code,{children:`@borealis`}),`, you already have the latest version of Warp loaded optimally on your pages. No extra setup is required.`]}),`
`,(0,o.jsx)(n.h4,{id:`without-borealis-load-from-eik`,children:`Without @borealis (load from Eik)`}),`
`,(0,o.jsx)(n.p,{children:`Add the Warp script and stylesheet to the document head so it loads early:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/elements/~2/styles.css" crossorigin />
<script type="module" src="https://assets.finn.no/pkg/@warp-ds/elements/~2/index.js" crossorigin><\/script>
`})}),`
`,(0,o.jsx)(n.h3,{id:`avoid-fouc-with-warp-cloaking`,children:`Avoid FOUC with Warp cloaking`}),`
`,(0,o.jsxs)(n.p,{children:[`To avoid flash-of-unstyled-content and cumulative layout shift issues, wrap your page content in a `,(0,o.jsx)(n.code,{children:`warp-cloak`}),` container. The cloak is removed automatically once Warp is ready.`]}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<div class="warp-cloak">
  <main>
    <!-- Your app -->
  </main>
</div>
`})}),`
`,(0,o.jsx)(n.h3,{id:`toast-api-the-only-bundling-exception`,children:`Toast API (the only bundling exception)`}),`
`,(0,o.jsx)(n.p,{children:`Warp components should never be bundled into client-side application code. The only exception is the toast APIs, which are not included automatically on pages.`}),`
`,(0,o.jsx)(n.p,{children:`You can either bundle them:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`import { toast, removeToast, updateToast } from '@warp-ds/elements/packages/toast';
`})}),`
`,(0,o.jsx)(n.p,{children:`Or load them directly from Eik:`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-ts`,children:`import { toast, removeToast, updateToast } from "https://assets.finn.no/pkg/@warp-ds/elements/~2/packages/toast/index.js";
`})}),`
`,(0,o.jsx)(n.h3,{id:`use-the-components-in-your-markup`,children:`Use the components in your markup`}),`
`,(0,o.jsx)(n.p,{children:`Once the components have been imported you can use them in your HTML.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-html`,children:`<w-breadcrumbs class="mt-10">
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page"> Oslo </a>
</w-breadcrumbs>
`})}),`
`,(0,o.jsx)(n.p,{children:`Check the sidebar to see available components in interactive demos. The demos include code examples (click Show code).`}),`
`,(0,o.jsx)(n.h3,{id:`react-v19`,children:`React (v19+)`}),`
`,(0,o.jsx)(n.p,{children:`React 19+ supports custom elements directly. Make sure the Warp assets are loaded in the document head as described above, then use the elements in JSX.`}),`
`,(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:`language-tsx`,children:`export function Example() {
  const handleClick = () => {
    toast({ title: 'Saved', description: 'Your changes are live.' });
  };

  return (
    <section>
      <w-badge variant="neutral">New</w-badge>
      <w-button variant="primary" onClick={handleClick}>
        Continue
      </w-button>
    </section>
  );
}
`})}),`
`,(0,o.jsx)(n.p,{children:`Any event that the component emits, can be used in React by prefixing it with "on".`}),`
`,(0,o.jsx)(n.h2,{id:`editor-integration`,children:`Editor integration`}),`
`,(0,o.jsx)(n.h3,{id:`visual-studio-code`,children:`Visual Studio Code`}),`
`,(0,o.jsxs)(n.p,{children:[`Install the `,(0,o.jsx)(n.a,{href:`https://wc-toolkit.com/integrations/web-components-language-server/`,rel:`nofollow`,children:`Web Components Language Server`}),` extension.`]}),`
`,(0,o.jsxs)(n.p,{children:[`The extension automatically picks up the `,(0,o.jsx)(n.a,{href:`https://wc-toolkit.com/getting-started/`,rel:`nofollow`,children:`Custom Element Manifest`}),` that we ship with `,(0,o.jsx)(n.code,{children:`@warp-ds/elements`}),`.`]}),`
`,(0,o.jsx)(n.p,{children:`When starting a new app using Borealis starter templates, Vscode will suggest you install this extension.`}),`
`,(0,o.jsx)(n.h3,{id:`jetbrains-products`,children:`JetBrains products`}),`
`,(0,o.jsxs)(n.p,{children:[`We ship `,(0,o.jsx)(n.code,{children:`web-types.json`}),` which should get picked up automatically by JetBrains IDEA and similar products.`]}),`
`,(0,o.jsx)(n.p,{children:`You should see code completions and inline docs for Warp elements when writing HTML.`})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}var o;e((()=>{o=n(),r()}))();export{a as default};