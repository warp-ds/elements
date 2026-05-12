import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BG42LmKs.js";import{r as n}from"./react-DShTf-Dy.js";import{t as r}from"./mdx-react-shim-np44v9yQ.js";import{n as i,o as a,s as o}from"./blocks-BJi_evMG.js";import{BasicPagination as s,LastPageSelected as c,ManyPagesWithLimitedVisible as l,MiddlePageSelected as u,SinglePage as d,n as f,t as p}from"./pagination.stories-kGTjplwU.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f,name:`Docs`}),`
`,(0,g.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,g.jsx)(t.p,{children:`Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows.`}),`
`,(0,g.jsx)(t.h2,{id:`events`,children:`Events`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`page-click`}),` - Triggered when a link button in the pagination is clicked. Contains the page number in `,(0,g.jsx)(t.code,{children:`string`}),` form.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`When to use:`}),` Use pagination when you have a large dataset that needs to be split across multiple pages to improve performance and user experience.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Page numbering:`}),` The component uses 1-indexed page numbers (first page is 1, not 0).`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`URL structure:`}),` The `,(0,g.jsx)(t.code,{children:`base-url`}),` prop should include the URL pattern up to where the page number will be appended. For example, if your URLs are `,(0,g.jsx)(t.code,{children:`/search?page=1`}),`, set `,(0,g.jsx)(t.code,{children:`base-url="/search?page="`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(t.p,{children:`The pagination component includes proper ARIA labels and semantic navigation structure:`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsx)(t.li,{children:`Uses nav element with "Pages" heading for screen readers`}),`
`,(0,g.jsxs)(t.li,{children:[`Current page is marked with `,(0,g.jsx)(t.code,{children:`aria-current="page"`})]}),`
`,(0,g.jsx)(t.li,{children:`Navigation buttons include descriptive screen reader text`}),`
`,(0,g.jsx)(t.li,{children:`All interactive elements meet minimum touch target size requirements (44px)`}),`
`,(0,g.jsx)(t.li,{children:`Keyboard navigation is fully supported`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,g.jsx)(t.h3,{id:`basic-pagination`,children:`Basic pagination`}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(t.h3,{id:`many-pages-with-limited-visible-pages`,children:`Many pages with limited visible pages`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`single-page-no-pagination`,children:`Single page (no pagination)`}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),o(),p()}))();export{h as default};