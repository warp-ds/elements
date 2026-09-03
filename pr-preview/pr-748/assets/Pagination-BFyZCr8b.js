import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-C0qXtmTr.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./pagination.stories-CIqlwqD_.js";function m(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{of:f,name:`Docs`}),`
`,(0,g.jsx)(r.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,g.jsx)(r.p,{children:`Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.`}),`
`,(0,g.jsx)(r.h2,{id:`events`,children:`Events`}),`
`,(0,g.jsxs)(r.ul,{children:[`
`,(0,g.jsxs)(r.li,{children:[(0,g.jsx)(r.code,{children:`page-click`}),` - Triggered when a link button in the pagination is clicked. Contains the page number in `,(0,g.jsx)(r.code,{children:`string`}),` form.`]}),`
`]}),`
`,(0,g.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`When to use:`}),` Use pagination when you have a large dataset that needs to be split across multiple pages to improve performance and user experience.`]}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`Page numbering:`}),` The component uses 1-indexed page numbers (first page is 1, not 0).`]}),`
`,(0,g.jsxs)(r.p,{children:[(0,g.jsx)(r.strong,{children:`URL structure:`}),` The `,(0,g.jsx)(r.code,{children:`base-url`}),` prop should include the URL pattern up to where the page number will be appended. For example, if your URLs are `,(0,g.jsx)(r.code,{children:`/search?page=1`}),`, set `,(0,g.jsx)(r.code,{children:`base-url="/search?page="`}),`.`]}),`
`,(0,g.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(r.p,{children:`The pagination component includes proper ARIA labels and semantic navigation structure:`}),`
`,(0,g.jsxs)(r.ul,{children:[`
`,(0,g.jsx)(r.li,{children:`Uses nav element with "Pages" heading for screen readers`}),`
`,(0,g.jsxs)(r.li,{children:[`Current page is marked with `,(0,g.jsx)(r.code,{children:`aria-current="page"`})]}),`
`,(0,g.jsx)(r.li,{children:`Navigation buttons include descriptive screen reader text`}),`
`,(0,g.jsx)(r.li,{children:`All interactive elements meet minimum touch target size requirements (44px)`}),`
`,(0,g.jsx)(r.li,{children:`Keyboard navigation is fully supported`}),`
`]}),`
`,(0,g.jsx)(r.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,g.jsx)(r.h3,{id:`basic-pagination`,children:`Basic pagination`}),`
`,(0,g.jsx)(t,{of:p}),`
`,(0,g.jsx)(t,{of:c}),`
`,(0,g.jsx)(t,{of:l}),`
`,(0,g.jsx)(r.h3,{id:`many-pages-with-limited-visible-pages`,children:`Many pages with limited visible pages`}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(r.h3,{id:`single-page-no-pagination`,children:`Single page (no pagination)`}),`
`,(0,g.jsx)(t,{of:s})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=i(),a(),r(),u()})))()}_();export{h as default};