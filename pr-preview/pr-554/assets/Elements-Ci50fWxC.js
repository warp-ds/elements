import{j as e}from"./index-ZZUSM63k.js";import{useMDXComponents as o}from"./index-BhWgaUud.js";import"./_commonjsHelpers-CqkleIqs.js";function t(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"warp-dselements",children:"@warp-ds/elements"}),`
`,e.jsx(n.p,{children:"The home of Warp components for web. Can be used in plain HTML pages or your framework of choice."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"install",children:"Install"}),`
`,e.jsxs(n.p,{children:["Warp Elements are published to and delivered by our CDN server, Eik. You do not need to install ",e.jsx(n.code,{children:"@warp-ds/elements"})," to use the components, and you should not bundle the components into your client-side application code."]}),`
`,e.jsxs(n.p,{children:["If you want better DX (types, intellisense, and docs in editors), you can install ",e.jsx(n.code,{children:"@warp-ds/elements"})," locally and use it alongside the Web Components Language Server extension for VS Code."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"npm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @warp-ds/elements
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"pnpm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm add @warp-ds/elements
`})}),`
`,e.jsx(n.h4,{id:"using-borealis",children:"Using @borealis"}),`
`,e.jsxs(n.p,{children:["If you are on a recent version of ",e.jsx(n.code,{children:"@borealis"}),", you already have the latest version of Warp loaded optimally on your pages. No extra setup is required."]}),`
`,e.jsx(n.h4,{id:"without-borealis-load-from-eik",children:"Without @borealis (load from Eik)"}),`
`,e.jsx(n.p,{children:"Add the Warp script and stylesheet to the document head so it loads early:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/elements/~2/styles.css" crossorigin />
<script type="module" src="https://assets.finn.no/pkg/@warp-ds/elements/~2/index.js" crossorigin><\/script>
`})}),`
`,e.jsx(n.h3,{id:"avoid-fouc-with-warp-cloaking",children:"Avoid FOUC with Warp cloaking"}),`
`,e.jsxs(n.p,{children:["To avoid flash-of-unstyled-content and cumulative layout shift issues, wrap your page content in a ",e.jsx(n.code,{children:"warp-cloak"})," container. The cloak is removed automatically once Warp is ready."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="warp-cloak">
  <main>
    <!-- Your app -->
  </main>
</div>
`})}),`
`,e.jsx(n.h3,{id:"toast-api-the-only-bundling-exception",children:"Toast API (the only bundling exception)"}),`
`,e.jsx(n.p,{children:"Warp components should never be bundled into client-side application code. The only exception is the toast APIs, which are not included automatically on pages."}),`
`,e.jsx(n.p,{children:"You can either bundle them:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { toast, removeToast, updateToast } from '@warp-ds/elements/packages/toast';
`})}),`
`,e.jsx(n.p,{children:"Or load them directly from Eik:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { toast, removeToast, updateToast } from "https://assets.finn.no/pkg/@warp-ds/elements/~2/packages/toast/index.js";
`})}),`
`,e.jsx(n.h3,{id:"use-the-components-in-your-markup",children:"Use the components in your markup"}),`
`,e.jsx(n.p,{children:"Once the components have been imported you can use them in your HTML."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<w-breadcrumbs class="mt-10">
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page"> Oslo </a>
</w-breadcrumbs>
`})}),`
`,e.jsx(n.p,{children:"Check the sidebar to see available components in interactive demos. The demos include code examples (click Show code)."}),`
`,e.jsx(n.h3,{id:"react-v19",children:"React (v19+)"}),`
`,e.jsx(n.p,{children:"React 19+ supports custom elements directly. Make sure the Warp assets are loaded in the document head as described above, then use the elements in JSX."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export function Example() {
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
`,e.jsx(n.p,{children:'Any event that the component emits, can be used in React by prefixing it with "on".'}),`
`,e.jsx(n.h2,{id:"editor-integration",children:"Editor integration"}),`
`,e.jsx(n.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),`
`,e.jsxs(n.p,{children:["Install the ",e.jsx(n.a,{href:"https://wc-toolkit.com/integrations/web-components-language-server/",rel:"nofollow",children:"Web Components Language Server"})," extension."]}),`
`,e.jsxs(n.p,{children:["The extension automatically picks up the ",e.jsx(n.a,{href:"https://wc-toolkit.com/getting-started/",rel:"nofollow",children:"Custom Element Manifest"})," that we ship with ",e.jsx(n.code,{children:"@warp-ds/elements"}),"."]}),`
`,e.jsx(n.p,{children:"When starting a new app using Borealis starter templates, Vscode will suggest you install this extension."}),`
`,e.jsx(n.h3,{id:"jetbrains-products",children:"JetBrains products"}),`
`,e.jsxs(n.p,{children:["We ship ",e.jsx(n.code,{children:"web-types.json"})," which should get picked up automatically by JetBrains IDEA and similar products."]}),`
`,e.jsx(n.p,{children:"You should see code completions and inline docs for Warp elements when writing HTML."})]})}function l(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{l as default};
