import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-CXZ2plg1.js";import{r as n}from"./react-DGxk81KK.js";import{t as r}from"./mdx-react-shim-fao0Lwfg.js";import{n as i,o as a,s as o}from"./blocks-kX6c6tVV.js";import{ControlledSize as s,Default as c,Disabled as l,Invalid as u,NoVisualLabel as d,Optional as f,ReadOnly as p,WithHelpText as m,WithPlaceholder as h,n as g,t as _}from"./textarea.stories-MZCXrAZr.js";function v(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:g,name:`Docs`}),`
`,(0,b.jsx)(t.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,b.jsx)(t.p,{children:`Used to capture extended user input, such as messages, item descriptions, comments, or reviews. Unlike the Textfield component, Textarea offers a multiline, spacious input experience.`}),`
`,(0,b.jsx)(i,{of:c}),`
`,(0,b.jsx)(t.h2,{id:`validation`,children:`Validation`}),`
`,(0,b.jsx)(t.p,{children:`Textareas can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error.`}),`
`,(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(t.p,{children:`Textareas can be marked optional.`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(t.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,b.jsx)(t.h3,{id:`help-text`,children:`Help text`}),`
`,(0,b.jsxs)(t.p,{children:[`You can use the `,(0,b.jsx)(t.code,{children:`help-text`}),` property to show a descriptive message below the textarea.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(t.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,b.jsx)(t.p,{children:`Placeholder text can be used to describe the expected value or formatting for the w-textarea. Placeholder text will only appear when the w-textarea is empty, and should not be used as a substitute for labeling the element with a visible label.`}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(t.h3,{id:`without-visual-label`,children:`Without visual label`}),`
`,(0,b.jsxs)(t.p,{children:[`Take care to give the textarea an accessible label with `,(0,b.jsx)(t.code,{children:`aria-label`}),`. It should be obvious for sighted users what the textarea is for given its context.`]}),`
`,(0,b.jsx)(i,{of:d}),`
`,(0,b.jsx)(t.h3,{id:`control-the-textarea-height`,children:`Control the textarea height`}),`
`,(0,b.jsx)(t.p,{children:`By default the textarea is user-resizable, and adjusts its height to fit the content.`}),`
`,(0,b.jsx)(t.p,{children:`You can control the height of the textarea should you need to by setting both the minimum and maximum number of allowed rows.`}),`
`,(0,b.jsx)(t.p,{children:`Setting a maximum number of rows turns off the ability for the user to resize.`}),`
`,(0,b.jsx)(i,{of:s}),`
`,(0,b.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,b.jsx)(t.p,{children:`Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.`}),`
`,(0,b.jsx)(t.p,{children:`A disabled textarea can not be resized by the user.`}),`
`,(0,b.jsx)(i,{of:l}),`
`,(0,b.jsx)(t.h3,{id:`read-only`,children:`Read only`}),`
`,(0,b.jsx)(t.p,{children:`The read-only boolean attribute makes the w-textarea's text content immutable. Unlike disabled the w-textarea remains focusable and the contents can still be copied. See the MDN docs for more information.`}),`
`,(0,b.jsx)(t.p,{children:`A readonly textarea can not be resized by the user.`}),`
`,(0,b.jsx)(i,{of:p})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),r(),o(),_()}))();export{y as default};