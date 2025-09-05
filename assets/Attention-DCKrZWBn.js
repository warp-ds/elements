import{j as t}from"./index-BX4tXiAa.js";import{useMDXComponents as i}from"./index-DnE6RDA0.js";import{M as a,C as s}from"./blocks-mDbC9rXv.js";import{A as r,D as l}from"./attention.stories-DNxAAeA9.js";import"./preload-helper-Dch09mLN.js";import"./iframe-Bsfw-Lyz.js";import"./utilities-B6TGv-nm.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:r,name:"Docs"}),`
`,t.jsx(e.h1,{id:"attention",children:"Attention"}),`
`,t.jsx(s,{of:l}),`
`,t.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(e.p,{children:'If the Attention element has "left" or "top" position, it should be placed before the target element in the DOM.'}),`
`,t.jsxs(e.p,{children:["Attention element handles accessibility automatically by wrapping its slotted content with a div with either ",t.jsx(e.code,{children:'role="tooltip"'})," for tooltip or ",t.jsx(e.code,{children:'role="img"'})," for callout and popover, a default ",t.jsx(e.code,{children:"aria-label"})," and setting an ",t.jsx(e.code,{children:"aria-details"})," attribute on the target element. The default ",t.jsx(e.code,{children:"aria-label"})," also supports i18n."]}),`
`,t.jsxs(e.p,{children:["It is possible to tell assistive technologies to recognize only a part of Attention's text content. To do that set the role attribute on the relevant text element nested in ",t.jsx(e.code,{children:"w-attention"})," and reference it by id through the use of ",t.jsx(e.code,{children:"aria-details"}),". The ",t.jsx(e.code,{children:"aria-details"})," attribute is on the target element, not on ",t.jsx(e.code,{children:"w-attention"}),"."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<w-attention placement="top" popover>
  <div slot="message">
    <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
    <p>(this text is less relevant)</p>
  </div>
  <button
    aria-details="aria-content"
    id="target"
    class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
    slot="target">
    Click to toggle a popover on top
  </button>
</w-attention>
`})})]})}function j(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{j as default};
