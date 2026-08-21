import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-BGWYg9PU.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./alert.stories-C9GA6LLz.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:u,name:`Docs`}),`
`,(0,g.jsx)(r.h1,{id:`alert`,children:`Alert`}),`
`,(0,g.jsx)(r.p,{children:`Alert is an inline component used for displaying different types of messages. For accessibility reasons, alert should appear close to the element that triggered it.`}),`
`,(0,g.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(r.p,{children:`Use the ARIA live region role attribute to provide meaning to the alert element (defaults to "alert"). If you want to remove the role from the alert and assign it to its particular child (e.g. title), you can do so by setting role attribute to an empty string on w-alert element and assigning a respective role on the child element. Read more about live region role attribute on MDN.`}),`
`,(0,g.jsx)(r.pre,{children:(0,g.jsx)(r.code,{className:`language-html`,children:`<w-alert id="selfHidingAlertId" variant="info" show role>
  <h3 role="alert" class="t5">This is a "info" variant of the alert element</h3>
  <p>You see this warning because you did something wrong</p>
  <w-button variant="primary" small aria-controls="selfHidingAlertId">Hide and show alert</w-button>
</w-alert>
`})}),`
`,(0,g.jsx)(r.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(r.h3,{id:`info`,children:`Info`}),`
`,(0,g.jsx)(t,{of:p}),`
`,(0,g.jsx)(r.h3,{id:`warning`,children:`Warning`}),`
`,(0,g.jsx)(t,{of:c}),`
`,(0,g.jsx)(r.h3,{id:`negative`,children:`Negative`}),`
`,(0,g.jsx)(t,{of:l}),`
`,(0,g.jsx)(r.h3,{id:`positive`,children:`Positive`}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(r.h2,{id:`with-description`,children:`With description`}),`
`,(0,g.jsx)(t,{of:s})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=i(),a(),r(),f()})))()}_();export{h as default};