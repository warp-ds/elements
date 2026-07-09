import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t,o as n}from"./react-C_CSCj7s.js";import{t as r}from"./mdx-react-shim-wZ56Y-Ct.js";import{n as i,o as a,s as o}from"./blocks-Ct395g16.js";import{ControlledSize as s,Default as c,Disabled as l,Invalid as u,NoVisualLabel as d,Optional as f,ReadOnly as p,WithHelpText as m,WithPlaceholder as h,WithTooltip as g,n as _,t as v}from"./textarea.stories-BzfQo6g9.js";function y(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{of:_,name:`Docs`}),`
`,(0,x.jsx)(n.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,x.jsx)(n.p,{children:`Used to capture extended user input, such as messages, item descriptions, comments, or reviews. Unlike the Textfield component, Textarea offers a multiline, spacious input experience.`}),`
`,(0,x.jsx)(i,{of:c}),`
`,(0,x.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,x.jsx)(n.p,{children:`Textareas can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error.`}),`
`,(0,x.jsx)(i,{of:u}),`
`,(0,x.jsx)(n.p,{children:`Textareas can be marked optional.`}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(n.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,x.jsx)(n.h3,{id:`help-text`,children:`Help text`}),`
`,(0,x.jsxs)(n.p,{children:[`You can use the `,(0,x.jsx)(n.code,{children:`help-text`}),` property to show a descriptive message below the textarea.`]}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(n.h3,{id:`tooltip`,children:`Tooltip`}),`
`,(0,x.jsxs)(n.p,{children:[`If you need to add supplementary information you can use the `,(0,x.jsx)(n.code,{children:`tooltip`}),` property.`]}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(n.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,x.jsx)(n.p,{children:`Placeholder text can be used to describe the expected value or formatting for the w-textarea. Placeholder text will only appear when the w-textarea is empty, and should not be used as a substitute for labeling the element with a visible label.`}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsx)(n.h3,{id:`without-visual-label`,children:`Without visual label`}),`
`,(0,x.jsxs)(n.p,{children:[`Take care to give the textarea an accessible label with `,(0,x.jsx)(n.code,{children:`aria-label`}),`. It should be obvious for sighted users what the textarea is for given its context.`]}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsx)(n.h3,{id:`control-the-textarea-height`,children:`Control the textarea height`}),`
`,(0,x.jsx)(n.p,{children:`By default the textarea is user-resizable, and adjusts its height to fit the content.`}),`
`,(0,x.jsx)(n.p,{children:`You can control the height of the textarea should you need to by setting both the minimum and maximum number of allowed rows.`}),`
`,(0,x.jsx)(n.p,{children:`Setting a maximum number of rows turns off the ability for the user to resize.`}),`
`,(0,x.jsx)(i,{of:s}),`
`,(0,x.jsx)(n.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,x.jsx)(n.p,{children:`Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.`}),`
`,(0,x.jsx)(n.p,{children:`A disabled textarea can not be resized by the user.`}),`
`,(0,x.jsx)(i,{of:l}),`
`,(0,x.jsx)(n.h3,{id:`read-only`,children:`Read only`}),`
`,(0,x.jsx)(n.p,{children:`The read-only boolean attribute makes the w-textarea's text content immutable. Unlike disabled the w-textarea remains focusable and the contents can still be copied. See the MDN docs for more information.`}),`
`,(0,x.jsx)(n.p,{children:`A readonly textarea can not be resized by the user.`}),`
`,(0,x.jsx)(i,{of:p})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=n(),r(),o(),v()}))();export{b as default};