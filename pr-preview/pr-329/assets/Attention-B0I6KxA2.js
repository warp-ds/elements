import{j as t}from"./index-C8ADKtso.js";import{useMDXComponents as s}from"./index-BwRnHMUQ.js";import{M as l,C as n}from"./blocks-BpkCo33P.js";import{A as a,T as r,C as h,H as c,D as d,a as p}from"./attention.stories-bsO1KzSY.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-B1E3SsWJ.js";import"./utilities-MepeHfpb.js";import"./if-defined-yDbQkK1N.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{of:a,name:"Docs"}),`
`,t.jsx(e.h1,{id:"attention",children:"Attention"}),`
`,t.jsx(e.h2,{id:"popover-with-icon-as-target-element",children:"Popover with icon as target element"}),`
`,t.jsx(n,{of:void 0}),`
`,t.jsx(e.h2,{id:"tooltip",children:"Tooltip"}),`
`,t.jsx(n,{of:r}),`
`,t.jsx(e.h2,{id:"callout",children:"Callout"}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h2,{id:"highlight",children:"Highlight"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"dismissible-highlight",children:"Dismissible Highlight"}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(e.p,{children:'If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.'}),`
`,t.jsxs(e.p,{children:["Attention element handles accessibility automatically by wrapping its slotted content with a ",t.jsx(e.code,{children:"div"})," with either ",t.jsx(e.code,{children:'role="tooltip"'})," for tooltip or ",t.jsx(e.code,{children:'role="img"'})," for callout and popover, a default ",t.jsx(e.code,{children:"aria-label"})," and setting an ",t.jsx(e.code,{children:"aria-details"})," attribute on the target element. The default ",t.jsx(e.code,{children:"aria-label"})," also supports i18n."]}),`
`,t.jsx(e.p,{children:"It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in w-attention and reference it by id through the use of aria-details. The aria-details attribute is on the target element, not on w-attention."}),`
`,t.jsx(n,{of:p})]})}function y(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(o,{...i})}):o(i)}export{y as default};
