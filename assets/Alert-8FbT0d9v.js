import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BG42LmKs.js";import{r as n}from"./react-DShTf-Dy.js";import{t as r}from"./mdx-react-shim-np44v9yQ.js";import{n as i,o as a,s as o}from"./blocks-16HHyp38.js";import{Info as s,Negative as c,Positive as l,Warning as u,WithDescription as d,n as f,t as p}from"./alert.stories-BpgGpeBk.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p,name:`Docs`}),`
`,(0,g.jsx)(t.h1,{id:`alert`,children:`Alert`}),`
`,(0,g.jsx)(t.p,{children:`Alert is an inline component used for displaying different types of messages. For accessibility reasons, alert should appear close to the element that triggered it.`}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(t.p,{children:`Use the ARIA live region role attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting role attribute to an empty string on w-alert element and assigning a respective role on the child element. Read more about live region role attribute on MDN.`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<w-alert id="selfHidingAlertId" variant="info" show role>
  <h3 role="alert" class="t5">This is a "info" variant of the alert element</h3>
  <p>You see this warning because you did something wrong</p>
  <w-button variant="primary" small aria-controls="selfHidingAlertId">Hide and show alert</w-button>
</w-alert>
`})}),`
`,(0,g.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(t.h3,{id:`info`,children:`Info`}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(t.h3,{id:`warning`,children:`Warning`}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`negative`,children:`Negative`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h3,{id:`positive`,children:`Positive`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h2,{id:`with-description`,children:`With description`}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),o(),f()}))();export{h as default};