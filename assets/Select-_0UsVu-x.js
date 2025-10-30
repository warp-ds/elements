import{j as e}from"./index-DhQHbkge.js";import{useMDXComponents as s}from"./index-D2LXvqQ0.js";import{M as a,C as i}from"./blocks-BUTCIDb6.js";import{S as r,D as l,I as d,H as h,O as c,a as p,R as m,N as u}from"./select.stories-BKpNQaPt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-DvrX7W50.js";import"./iframe-sRUIv3bR.js";import"./utilities-KYyv0Psn.js";import"./if-defined-B8weeiS3.js";import"./chevron-down-16-CnUtwZXH.js";import"./FormControlMixin-DJnJZbro.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Docs"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.p,{children:"A dropdown component for selecting a single value."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Inputs can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the ",e.jsx(n.code,{children:"invalid"})," prop to display it as invalid. ",e.jsx(n.code,{children:"invalid"})," is often paired with ",e.jsx(n.code,{children:"hint"})," to provide feedback to the user about the error."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"visual-options",children:"Visual options"}),`
`,e.jsx(n.h3,{id:"hint",children:"Hint"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"optional",children:"Optional"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read only"}),`
`,e.jsx(n.p,{children:"The read-only boolean attribute makes the selection immutable. Unlike disabled the field remains focusable."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"no-label",children:"No label"}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"aria-label"})," or an external ",e.jsx(n.code,{children:"<label>"})," element with the ",e.jsx(n.code,{children:"for"})," attribute should you want to."]}),`
`,e.jsx(i,{of:u})]})}function S(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{S as default};
