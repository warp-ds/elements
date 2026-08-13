import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-HKgIuKsZ.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./attention.stories-Cf2NbQhD.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:u,name:`Docs`}),`
`,(0,g.jsx)(r.h1,{id:`attention`,children:`Attention`}),`
`,(0,g.jsx)(r.h2,{id:`tooltip`,children:`Tooltip`}),`
`,(0,g.jsx)(t,{of:s}),`
`,(0,g.jsx)(r.h2,{id:`callout`,children:`Callout`}),`
`,(0,g.jsx)(t,{of:l}),`
`,(0,g.jsx)(r.h2,{id:`highlight`,children:`Highlight`}),`
`,(0,g.jsx)(t,{of:c}),`
`,(0,g.jsx)(r.h2,{id:`dismissible-highlight`,children:`Dismissible Highlight`}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`hydration-warnings-in-react`,children:`Hydration Warnings In React`}),`
`,(0,g.jsx)(r.p,{children:`These can occur because the parent w-attention component will set a generated id attribute on the slotted message element and then set a aria-details on the slotted target element with the value of the generated id.`}),`
`,(0,g.jsx)(r.p,{children:`To avoid this issue, you can manually set the id and aria-details attributes on the elements yourself to avoid them being auto generated like so:`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{children:`<w-attention>
  <w-button aria-details="123g12d3gf23f" variant="secondary" slot="target">Click me</w-button>
  <span id="123g12d3gf23f" slot="message">I'm a message</span>
</w-attention>
`})}),`
`,(0,g.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(r.p,{children:`If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.`}),`
`,(0,g.jsxs)(r.p,{children:[`Attention element handles accessibility automatically by wrapping its slotted content with a `,(0,g.jsx)(r.code,{children:`div`}),` with either `,(0,g.jsx)(r.code,{children:`role="tooltip"`}),` for tooltip or `,(0,g.jsx)(r.code,{children:`role="img"`}),` for callout and popover, a default `,(0,g.jsx)(r.code,{children:`aria-label`}),` and setting an `,(0,g.jsx)(r.code,{children:`aria-details`}),` attribute on the target element. The default `,(0,g.jsx)(r.code,{children:`aria-label`}),` also supports i18n.`]}),`
`,(0,g.jsx)(r.p,{children:`It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in w-attention and reference it by id through the use of aria-details. The aria-details attribute is on the target element, not on w-attention.`}),`
`,(0,g.jsx)(t,{of:p})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=i(),a(),r(),f()})))()}_();export{h as default};