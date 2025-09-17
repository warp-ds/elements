import{j as e}from"./index-C8ADKtso.js";import{useMDXComponents as t}from"./index-BwRnHMUQ.js";import{M as r,C as s}from"./blocks-zmvb68Fe.js";import{P as o,B as l,M as c,L as d,a as h,S as p}from"./pagination.stories-BFUvn2fW.js";import"./preload-helper-DvrX7W50.js";import"./iframe-BcCnWFnD.js";import"./utilities-B5me8Aot.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:o,name:"Docs"}),`
`,e.jsx(n.h1,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.p,{children:"Pagination allows users to navigate through multiple pages of content by providing navigation controls with page numbers and directional arrows."}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"page-click"})," - Triggered when a link button in the pagination is clicked. Contains the page number in ",e.jsx(n.code,{children:"string"})," form."]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage guidelines"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"When to use:"})," Use pagination when you have a large dataset that needs to be split across multiple pages to improve performance and user experience."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Page numbering:"})," The component uses 1-indexed page numbers (first page is 1, not 0)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"URL structure:"})," The ",e.jsx(n.code,{children:"base-url"})," prop should include the URL pattern up to where the page number will be appended. For example, if your URLs are ",e.jsx(n.code,{children:"/search?page=1"}),", set ",e.jsx(n.code,{children:'base-url="/search?page="'}),"."]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The pagination component includes proper ARIA labels and semantic navigation structure:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Uses nav element with "Pages" heading for screen readers'}),`
`,e.jsxs(n.li,{children:["Current page is marked with ",e.jsx(n.code,{children:'aria-current="page"'})]}),`
`,e.jsx(n.li,{children:"Navigation buttons include descriptive screen reader text"}),`
`,e.jsx(n.li,{children:"All interactive elements meet minimum touch target size requirements (44px)"}),`
`,e.jsx(n.li,{children:"Keyboard navigation is fully supported"}),`
`]}),`
`,e.jsx(n.h2,{id:"visual-options",children:"Visual options"}),`
`,e.jsx(n.h3,{id:"basic-pagination",children:"Basic pagination"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"many-pages-with-limited-visible-pages",children:"Many pages with limited visible pages"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"single-page-no-pagination",children:"Single page (no pagination)"}),`
`,e.jsx(s,{of:p})]})}function v(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{v as default};
