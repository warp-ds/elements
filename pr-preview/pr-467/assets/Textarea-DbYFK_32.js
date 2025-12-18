import{j as e}from"./index-_uh9JCM-.js";import{useMDXComponents as s}from"./index-pIcGub2r.js";import{M as o,C as n}from"./blocks-B8ReFDzD.js";import{T as r,D as l,I as h,O as d,W as c,a as x,N as u,C as p,b as m,R as b}from"./textarea.stories-C8C04LK-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-B83mLrjr.js";import"./utilities-Dlx7hxsr.js";import"./if-defined-CNJgngFw.js";import"./FormControlMixin-DJnJZbro.js";function i(a){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r,name:"Docs"}),`
`,e.jsx(t.h1,{id:"textarea",children:"Textarea"}),`
`,e.jsx(t.p,{children:"Used to capture extended user input, such as messages, item descriptions, comments, or reviews. Unlike the Textfield component, Textarea offers a multiline, spacious input experience."}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.h2,{id:"validation",children:"Validation"}),`
`,e.jsx(t.p,{children:"Textareas can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error."}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(t.p,{children:"Textareas can be marked optional."}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h2,{id:"visual-options",children:"Visual options"}),`
`,e.jsx(t.h3,{id:"help-text",children:"Help text"}),`
`,e.jsxs(t.p,{children:["You can use the ",e.jsx(t.code,{children:"help-text"})," property to show a descriptive message below the textarea."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(t.p,{children:"Placeholder text can be used to describe the expected value or formatting for the w-textarea. Placeholder text will only appear when the w-textarea is empty, and should not be used as a substitute for labeling the element with a visible label."}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h3,{id:"without-visual-label",children:"Without visual label"}),`
`,e.jsxs(t.p,{children:["Take care to give the textarea an accessible label with ",e.jsx(t.code,{children:"aria-label"}),". It should be obvious for sighted users what the textarea is for given its context."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"control-the-textarea-height",children:"Control the textarea height"}),`
`,e.jsx(t.p,{children:"By default the textarea is user-resizable, and adjusts its height to fit the content."}),`
`,e.jsx(t.p,{children:"You can control the height of the textarea should you need to by setting both the minimum and maximum number of allowed rows."}),`
`,e.jsx(t.p,{children:"Setting a maximum number of rows turns off the ability for the user to resize."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(t.p,{children:"Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element."}),`
`,e.jsx(t.p,{children:"A disabled textarea can not be resized by the user."}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"read-only",children:"Read only"}),`
`,e.jsx(t.p,{children:"The read-only boolean attribute makes the w-textarea's text content immutable. Unlike disabled the w-textarea remains focusable and the contents can still be copied. See the MDN docs for more information."}),`
`,e.jsx(t.p,{children:"A readonly textarea can not be resized by the user."}),`
`,e.jsx(n,{of:b})]})}function k(a={}){const{wrapper:t}={...s(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(i,{...a})}):i(a)}export{k as default};
