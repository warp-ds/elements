import{j as e}from"./index-D7-HiEGT.js";import{useMDXComponents as s}from"./index-B332Pdph.js";import{M as a,C as r}from"./blocks-B8IitHQt.js";import{T as i,D as p}from"./toast.stories-BU2F4bcs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-B5gR0VqZ.js";import"./utilities-CAPn2sX8.js";import"./button-DeuMJuP3.js";import"./link-CmJTHope.js";import"./FormControlMixin-DJnJZbro.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:i,name:"Docs"}),`
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
`,e.jsx(r,{of:p})]})}function w(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{w as default};
