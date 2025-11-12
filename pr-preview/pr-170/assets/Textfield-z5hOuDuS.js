import{j as e}from"./index--3ao69lH.js";import{useMDXComponents as s}from"./index-CnnVKR98.js";import{M as a,C as n}from"./blocks-CPbWY64d.js";import{T as r,D as l,I as d,W as h,a as f,b as c,R as x}from"./textfield.stories-BnEJzi9A.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-DP0bK18L.js";import"./utilities-BiWJ4bJy.js";import"./index-BucbJmLp.js";import"./query-NYTjQBeo.js";import"./class-map-C5KQu6z4.js";import"./if-defined-LgRwYGvQ.js";import"./FormControlMixin-DJnJZbro.js";function o(i){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,name:"Docs"}),`
`,e.jsx(t.h1,{id:"textfield",children:"TextField"}),`
`,e.jsx(t.p,{children:"A single line text input element."}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(t.p,{children:"Text fields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error."}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"visual-options",children:"Visual options"}),`
`,e.jsx(t.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(t.p,{children:"Placeholder text can be used to describe the expected value or formatting for the w-textfield. Placeholder text will only appear when the w-textfield is empty, and should not be used as a substitute for labeling the element with a visible label."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t.p,{children:"Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element."}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(t.h3,{id:"affix",children:"Affix"}),`
`,e.jsx(t.p,{children:"If you wish to use an affix you must first use the w-affix element in conjunction with w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes. You must specify which slot to set the affix into (either prefix or suffix)."}),`
`,e.jsx(n,{of:c}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"slot"})," attribute on ",e.jsx(t.code,{children:"w-affix"})," to control its position. You can use both a prefix and suffix should you need to."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
`})}),`
`,e.jsx(t.h3,{id:"read-only",children:"Read only"}),`
`,e.jsx(t.p,{children:"The read-only boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See the MDN docs for more information."}),`
`,e.jsx(n,{of:x})]})}function A(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}export{A as default};
