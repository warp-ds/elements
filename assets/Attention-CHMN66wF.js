import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BG42LmKs.js";import{r as n}from"./react-DShTf-Dy.js";import{t as r}from"./mdx-react-shim-np44v9yQ.js";import{n as i,o as a,s as o}from"./blocks-jCkEKraP.js";import{AccessibleTooltip as s,Callout as c,DismissibleHighlight as l,Highlight as u,ToolTip as d,n as f,t as p}from"./attention.stories-CICtc0X0.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p,name:`Docs`}),`
`,(0,g.jsx)(t.h1,{id:`attention`,children:`Attention`}),`
`,(0,g.jsx)(t.h2,{id:`tooltip`,children:`Tooltip`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`callout`,children:`Callout`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h2,{id:`highlight`,children:`Highlight`}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`dismissible-highlight`,children:`Dismissible Highlight`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`hydration-warnings-in-react`,children:`Hydration Warnings In React`}),`
`,(0,g.jsx)(t.p,{children:`These can occur because the parent w-attention component will set a generated id attribute on the slotted message element and then set a aria-details on the slotted target element with the value of the generated id.`}),`
`,(0,g.jsx)(t.p,{children:`To avoid this issue, you can manually set the id and aria-details attributes on the elements yourself to avoid them being auto generated like so:`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{children:`<w-attention>
  <w-button aria-details="123g12d3gf23f" variant="secondary" slot="target">Click me</w-button>
  <span id="123g12d3gf23f" slot="message">I'm a message</span>
</w-attention>
`})}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(t.p,{children:`If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.`}),`
`,(0,g.jsxs)(t.p,{children:[`Attention element handles accessibility automatically by wrapping its slotted content with a `,(0,g.jsx)(t.code,{children:`div`}),` with either `,(0,g.jsx)(t.code,{children:`role="tooltip"`}),` for tooltip or `,(0,g.jsx)(t.code,{children:`role="img"`}),` for callout and popover, a default `,(0,g.jsx)(t.code,{children:`aria-label`}),` and setting an `,(0,g.jsx)(t.code,{children:`aria-details`}),` attribute on the target element. The default `,(0,g.jsx)(t.code,{children:`aria-label`}),` also supports i18n.`]}),`
`,(0,g.jsx)(t.p,{children:`It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in w-attention and reference it by id through the use of aria-details. The aria-details attribute is on the target element, not on w-attention.`}),`
`,(0,g.jsx)(i,{of:s})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),o(),f()}))();export{h as default};