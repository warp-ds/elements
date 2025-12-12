import{j as e}from"./index--3ao69lH.js";import{useMDXComponents as s}from"./index-CnnVKR98.js";import"./_commonjsHelpers-CqkleIqs.js";function o(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),`
`,e.jsx(t.h2,{id:"how-do-i-get-intellisense-for-warp-elements",children:"How do I get IntelliSense for Warp Elements?"}),`
`,e.jsxs(t.p,{children:["Install the ",e.jsx(t.a,{href:"https://wc-toolkit.com/integrations/web-components-language-server/",rel:"nofollow",children:"Web Components Language Server"})," extension (available in several editors)."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=wc-toolkit.web-components-language-server",rel:"nofollow",children:"VS Code"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://plugins.jetbrains.com/plugin/29094-web-components-language-server",rel:"nofollow",children:"JetBrains products"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://open-vsx.org/extension/wc-toolkit/web-components-language-server",rel:"nofollow",children:"VSCodium and other VSCode forks"})}),`
`]}),`
`,e.jsxs(t.p,{children:["The extension automatically picks up the ",e.jsx(t.a,{href:"https://wc-toolkit.com/getting-started/",rel:"nofollow",children:"Custom Element Manifest"})," that we ship with ",e.jsx(t.code,{children:"@warp-ds/elements"}),"."]}),`
`,e.jsx(t.h2,{id:"why-are-inputs-and-buttons-not-clickable-in-my-modal-or-drawer-component",children:"Why are inputs and buttons not clickable in my modal or drawer component?"}),`
`,e.jsxs(t.p,{children:["If you use a ",e.jsx(t.a,{href:"https://css-tricks.com/a-primer-on-focus-trapping/",rel:"nofollow",children:"focus trap"}),", or you use a dependency that does, that focus trap might need extra configuration to work with custom elements."]}),`
`,e.jsxs(t.p,{children:["For example, the ",e.jsx(t.a,{href:"https://github.com/focus-trap/focus-trap#shadow-dom",rel:"nofollow",children:"focus-trap module"})," used by ",e.jsx(t.a,{href:"https://github.com/stipsan/react-spring-bottom-sheet",rel:"nofollow",children:"react-spring-bottom-sheet"})," will not work with custom elements by default. It thinks clicks inside a custom element is outside of the focus trap, and so cancels the click."]}),`
`,e.jsx(t.p,{children:"If you run into this problem in a dependency, either work with the maintainer to fix the problem, replace the dependency, patch it locally, or fork it to add support."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const fallback = fallbackRef.current
const trap = createFocusTrap(targetRef.current, {
  // tabbableOptions.getShadowRoot is required in \`focus-trap\` when using custom elements
  tabbableOptions: {
    getShadowRoot: true,
  },
  initialFocus: initialFocusRef
    ? () => initialFocusRef?.current || fallback
    : undefined,
  fallbackFocus: fallback,
  escapeDeactivates: false,
  clickOutsideDeactivates: false,
})
`})})]})}function a(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{a as default};
