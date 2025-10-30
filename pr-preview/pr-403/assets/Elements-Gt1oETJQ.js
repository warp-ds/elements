import{j as e}from"./index-DhQHbkge.js";import{useMDXComponents as t}from"./index-D2LXvqQ0.js";import"./_commonjsHelpers-CqkleIqs.js";function o(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"warp-dselements",children:"@warp-ds/elements"}),`
`,e.jsx(n.p,{children:"The home of the web component, or custom elements, implementation of Warp."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:"Install by using npm/pnpm or by adding a script link:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"npm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @warp-ds/elements
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"pnpm"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`pnpm add @warp-ds/elements
`})}),`
`,e.jsx(n.h4,{id:"using-a-direct-link-to-eik",children:"Using a direct link to Eik"}),`
`,e.jsxs(n.p,{children:["You can also add this ",e.jsx(n.code,{children:"script"})," tag to your document if you want to get all available elements (replace finn.no with your brand's domain):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<script type="module" src="https://assets.finn.no/pkg/@warp-ds/elements/v2/index.js" crossorigin><\/script>
`})}),`
`,e.jsxs(n.p,{children:["For performance you may want to import just the elements you use. Check the list of available files on ",e.jsx(n.a,{href:"https://assets.finn.no/pkg/@warp-ds/elements/v2/",rel:"nofollow",children:"https://assets.finn.no/pkg/@warp-ds/elements/v2/"}),"."]}),`
`,e.jsx(n.h3,{id:"import-components",children:"Import components"}),`
`,e.jsx(n.p,{children:"Importing individual components is recommended for performance reasons:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@warp-ds/elements/components/toast';
`})}),`
`,e.jsx(n.p,{children:"In a prototyping phase you may want to import all available components:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@warp-ds/elements';
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
`,e.jsx(n.h2,{id:"editor-integration",children:"Editor integration"}),`
`,e.jsx(n.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),`
`,e.jsxs(n.p,{children:["This module includes ",e.jsx(n.a,{href:"https://code.visualstudio.com/blogs/2020/02/24/custom-data-format",rel:"nofollow",children:"Custom HTML and CSS data for Visual Studio Code"}),"."]}),`
`,e.jsxs(n.p,{children:["Add this to your ",e.jsx(n.code,{children:"settings.json"})," and restart VS Code to get IntelliSense and inline documentation for Warp elements."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "html.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.html-custom-data.json"
  ],
  "css.customData": [
    "./node_modules/@warp-ds/elements/dist/vscode.css-custom-data.json"
  ]
}
`})}),`
`,e.jsx(n.h3,{id:"jetbrains-products",children:"JetBrains products"}),`
`,e.jsxs(n.p,{children:["We ship ",e.jsx(n.code,{children:"web-types.json"})," which should get picked up automatically by JetBrains IDEA and similar products."]}),`
`,e.jsx(n.p,{children:"You should see code completions and inline docs for Warp elements when writing HTML."})]})}function d(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{d as default};
