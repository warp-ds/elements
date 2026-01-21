import{j as t}from"./index-D7-HiEGT.js";import{useMDXComponents as s}from"./index-B332Pdph.js";import{M as l,C as o}from"./blocks-q2QumoQb.js";import{A as r,T as a,C as h,H as c,D as d,a as p}from"./attention.stories-AUoHMCs8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-CxzpyLC-.js";import"./utilities-BESujbUo.js";import"./attention-DqM_kZ78.js";import"./if-defined-CbyTrJTH.js";import"./button-BlgDPNdq.js";import"./link-DHQcKmFK.js";import"./class-map-DJbiv8i_.js";import"./FormControlMixin-DJnJZbro.js";function n(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:r,name:"Docs"}),`
`,t.jsx(e.h1,{id:"attention",children:"Attention"}),`
`,t.jsx(e.h2,{id:"tooltip",children:"Tooltip"}),`
`,t.jsx(o,{of:a}),`
`,t.jsx(e.h2,{id:"callout",children:"Callout"}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h2,{id:"highlight",children:"Highlight"}),`
`,t.jsx(o,{of:c}),`
`,t.jsx(e.h2,{id:"dismissible-highlight",children:"Dismissible Highlight"}),`
`,t.jsx(o,{of:d}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(e.p,{children:'If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.'}),`
`,t.jsxs(e.p,{children:["Attention element handles accessibility automatically by wrapping its slotted content with a ",t.jsx(e.code,{children:"div"})," with either ",t.jsx(e.code,{children:'role="tooltip"'})," for tooltip or ",t.jsx(e.code,{children:'role="img"'})," for callout and popover, a default ",t.jsx(e.code,{children:"aria-label"})," and setting an ",t.jsx(e.code,{children:"aria-details"})," attribute on the target element. The default ",t.jsx(e.code,{children:"aria-label"})," also supports i18n."]}),`
`,t.jsx(e.p,{children:"It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in w-attention and reference it by id through the use of aria-details. The aria-details attribute is on the target element, not on w-attention."}),`
`,t.jsx(o,{of:p})]})}function v(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(n,{...i})}):n(i)}export{v as default};
