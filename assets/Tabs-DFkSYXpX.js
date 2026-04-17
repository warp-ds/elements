import{j as n}from"./index-D7-HiEGT.js";import{useMDXComponents as i}from"./index-B332Pdph.js";import{M as o,C as a}from"./blocks-DOh1MFER.js";import{T as r,D as l,W as c,M as d}from"./tabs.stories-Bcd1vHE3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-DvrX7W50.js";import"./iframe-BnqHVJYW.js";import"./query-NYTjQBeo.js";import"./utils-CCcvPjT2.js";function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:r,name:"Docs"}),`
`,n.jsx(t.h1,{id:"tabs",children:"Tabs"}),`
`,n.jsx(t.h2,{id:"default",children:"Default"}),`
`,n.jsx(a,{of:l}),`
`,n.jsx(t.h2,{id:"withicons",children:"WithIcons"}),`
`,n.jsx(a,{of:c}),`
`,n.jsx(t.h2,{id:"manytabs",children:"ManyTabs"}),`
`,n.jsx(a,{of:d}),`
`,n.jsx(t.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(t.p,{children:`w-tab elements will automatically generate id attributes for accessibility but this can cause hydration mismatch errors when using tabs in a React SSR + hydration application.
To avoid this, set ids on the w-tab elements manually like so:`}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`<w-tabs active="towers">
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
`})})]})}function y(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(s,{...e})}):s(e)}export{y as default};
