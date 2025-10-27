import{j as e}from"./index-DhQHbkge.js";import{useMDXComponents as o}from"./index-D2LXvqQ0.js";import{M as s,C as i}from"./blocks-BElPcRa-.js";import{A as a,I as l,W as d,N as h,P as c,a as m}from"./alert.stories-Dc6nw35j.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-rXaGb3MH.js";import"./utilities-7apwteCz.js";import"./expand-transition-D74dqBbQ.js";import"./if-defined-DSDW5aht.js";function r(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a,name:"Docs"}),`
`,e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(t.p,{children:"Alert is an inline component used for displaying different types of messages. For accessibility reasons, alert should appear close to the element that triggered it."}),`
`,e.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(t.p,{children:'Use the ARIA live region role attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting role attribute to an empty string on w-alert element and assigning a respective role on the child element. Read more about live region role attribute on MDN.'}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<w-alert id="selfHidingAlertId" variant="info" show role>
  <h3 role="alert" class="t5">This is a "info" variant of the alert element</h3>
  <p>You see this warning because you did something wrong</p>
  <w-button variant="primary" small aria-controls="selfHidingAlertId">Hide and show alert</w-button>
</w-alert>
`})}),`
`,e.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(t.h3,{id:"info",children:"Info"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t.h3,{id:"warning",children:"Warning"}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(t.h3,{id:"negative",children:"Negative"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"positive",children:"Positive"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(t.h2,{id:"with-description",children:"With description"}),`
`,e.jsx(i,{of:m})]})}function A(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{A as default};
