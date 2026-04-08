import{j as t}from"./index-D7-HiEGT.js";import{useMDXComponents as s}from"./index-B332Pdph.js";import{M as a,C as n}from"./blocks-CexrhgsW.js";import{A as l,T as r,C as h,H as d,D as c,a as m}from"./attention.stories-ESZxUvQV.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-C0vVbCZn.js";import"./utilities-BQnhPOmL.js";import"./attention-BSOuibEg.js";import"./if-defined-BcRK7ehF.js";import"./button-f8dYpGex.js";import"./link-C-LIwZ8V.js";import"./FormControlMixin-DJnJZbro.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:l,name:"Docs"}),`
`,t.jsx(e.h1,{id:"attention",children:"Attention"}),`
`,t.jsx(e.h2,{id:"tooltip",children:"Tooltip"}),`
`,t.jsx(n,{of:r}),`
`,t.jsx(e.h2,{id:"callout",children:"Callout"}),`
`,t.jsx(n,{of:h}),`
`,t.jsx(e.h2,{id:"highlight",children:"Highlight"}),`
`,t.jsx(n,{of:d}),`
`,t.jsx(e.h2,{id:"dismissible-highlight",children:"Dismissible Highlight"}),`
`,t.jsx(n,{of:c}),`
`,t.jsx(e.h2,{id:"hydration-warnings-in-react",children:"Hydration Warnings In React"}),`
`,t.jsx(e.p,{children:"These can occur because the parent w-attention component will set a generated id attribute on the slotted message element and then set a aria-details on the slotted target element with the value of the generated id."}),`
`,t.jsx(e.p,{children:"To avoid this issue, you can manually set the id and aria-details attributes on the elements yourself to avoid them being auto generated like so:"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{children:`<w-attention>
  <w-button aria-details="123g12d3gf23f" variant="secondary" slot="target">Click me</w-button>
  <span id="123g12d3gf23f" slot="message">I'm a message</span>
</w-attention>
`})}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(e.p,{children:'If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.'}),`
`,t.jsxs(e.p,{children:["Attention element handles accessibility automatically by wrapping its slotted content with a ",t.jsx(e.code,{children:"div"})," with either ",t.jsx(e.code,{children:'role="tooltip"'})," for tooltip or ",t.jsx(e.code,{children:'role="img"'})," for callout and popover, a default ",t.jsx(e.code,{children:"aria-label"})," and setting an ",t.jsx(e.code,{children:"aria-details"})," attribute on the target element. The default ",t.jsx(e.code,{children:"aria-label"})," also supports i18n."]}),`
`,t.jsx(e.p,{children:"It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in w-attention and reference it by id through the use of aria-details. The aria-details attribute is on the target element, not on w-attention."}),`
`,t.jsx(n,{of:m})]})}function D(i={}){const{wrapper:e}={...s(),...i.components};return e?t.jsx(e,{...i,children:t.jsx(o,{...i})}):o(i)}export{D as default};
