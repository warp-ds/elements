import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-DGxk81KK.js";import{t as r}from"./mdx-react-shim-fao0Lwfg.js";import{n as i,o as a,s as o}from"./blocks-CshAmzvN.js";import{Default as s,ManyTabs as c,WithIcons as l,n as u,t as d}from"./tabs.stories-DkQSVg6-.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:u,name:`Docs`}),`
`,(0,m.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,m.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(t.h2,{id:`withicons`,children:`WithIcons`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`manytabs`,children:`ManyTabs`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(t.p,{children:`w-tab elements will automatically generate id attributes for accessibility but this can cause hydration mismatch errors when using tabs in a React SSR + hydration application.
To avoid this, set ids on the w-tab elements manually like so:`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-js`,children:`<w-tabs active="towers">
    <w-tab for="fellowship" id="fellowship-tab">Fellowship</w-tab>
    <w-tab-panel id="fellowship">
        <p>And my axe!</p>
    </w-tab-panel>

    <w-tab for="towers" id="towers-tab">Towers</w-tab>
    <w-tab-panel id="towers">
        <p>I am on nobody's side, because nobody is on my side, little orc.</p>
    </w-tab-panel>

    <w-tab for="return" id="return-tab">Return</w-tab>
    <w-tab-panel id="return">
        <p>I am no man.</p>
    </w-tab-panel>
</w-tabs>
`})})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),r(),o(),d()}))();export{p as default};