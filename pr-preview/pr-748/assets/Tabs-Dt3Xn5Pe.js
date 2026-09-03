import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-C0qXtmTr.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,i as c,n as l,r as u,t as d}from"./tabs.stories-Em2DjqMK.js";function f(e){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{of:s,name:`Docs`}),`
`,(0,m.jsx)(r.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,m.jsx)(r.h2,{id:`default`,children:`Default`}),`
`,(0,m.jsx)(t,{of:d}),`
`,(0,m.jsx)(r.h2,{id:`withicons`,children:`WithIcons`}),`
`,(0,m.jsx)(t,{of:u}),`
`,(0,m.jsx)(r.h2,{id:`manytabs`,children:`ManyTabs`}),`
`,(0,m.jsx)(t,{of:l}),`
`,(0,m.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,m.jsx)(r.p,{children:`w-tab elements will automatically generate id attributes for accessibility but this can cause hydration mismatch errors when using tabs in a React SSR + hydration application.
To avoid this, set ids on the w-tab elements manually like so:`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-js`,children:`<w-tabs active="towers">
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
`})})]})}function p(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=i(),a(),r(),c()})))()}h();export{p as default};