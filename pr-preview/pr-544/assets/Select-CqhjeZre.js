import{j as e}from"./index-D7-HiEGT.js";import{useMDXComponents as s}from"./index-B332Pdph.js";import{M as a,C as o}from"./blocks-CP3d0L2y.js";import{S as l,D as r,I as d,P as h,H as c,O as p,a as x,R as u,N as m}from"./select.stories-BbLdWbaN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-0jXpqwHM.js";import"./utilities-B3dJaT9k.js";import"./if-defined-D7UQ2yQ3.js";import"./FormControlMixin-DJnJZbro.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsx(n.p,{children:"A dropdown component for selecting a single value."}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"validation",children:"Validation"}),`
`,e.jsxs(n.p,{children:["Inputs can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the ",e.jsx(n.code,{children:"invalid"})," prop to display it as invalid. ",e.jsx(n.code,{children:"invalid"})," is often paired with ",e.jsx(n.code,{children:"hint"})," to provide feedback to the user about the error."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"visual-options",children:"Visual options"}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(n.p,{children:["To add a placeholder in selects, use an ",e.jsx(n.code,{children:'<option value="">'})," element with your placeholder text."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"help-text",children:"Help text"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"optional",children:"Optional"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element."}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"read-only",children:"Read only"}),`
`,e.jsx(n.p,{children:"The read-only boolean attribute makes the selection immutable. Unlike disabled the field remains focusable."}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"no-label",children:"No label"}),`
`,e.jsxs(n.p,{children:["You can use ",e.jsx(n.code,{children:"aria-label"})," or an external ",e.jsx(n.code,{children:"<label>"})," element with the ",e.jsx(n.code,{children:"for"})," attribute should you want to."]}),`
`,e.jsx(o,{of:m})]})}function S(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{S as default};
