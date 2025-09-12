import{j as e}from"./index-BX4tXiAa.js";import{useMDXComponents as s}from"./index-DnE6RDA0.js";import{M as a,C as r}from"./blocks-Dc8FhSqY.js";import{T as i,D as p}from"./toast.stories-BYNEj68y.js";import"./preload-helper-Dch09mLN.js";import"./iframe-DyzFTF4h.js";import"./utilities-BpYr44Xl.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Docs"}),`
`,e.jsx(t.h1,{id:"toast",children:"Toast"}),`
`,e.jsx(t.p,{children:"Toast is a bit different from other packages in Warp Elements. You need to import functions from the package and call them as needed."}),`
`,e.jsx(t.p,{children:"The toast is intended to be used programmatically. JavaScript APIs are provided to create, update and remove toasts from a page while managing things like placement on the page for you."}),`
`,e.jsx(t.h2,{id:"import-functions-for-working-with-toasts",children:"Import functions for working with toasts"}),`
`,e.jsx(t.p,{children:"Be sure to import the elements package first as the toast APIs depend on this package."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import from '@warp-ds/elements/components/toast';
`})}),`
`,e.jsx(t.p,{children:"Once you have imported the elements package, import the toast api package."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import { toast, removeToast, updateToast } from '@warp-ds/elements/toast';
`})}),`
`,e.jsx(r,{of:p})]})}function g(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{g as default};
