import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-HKgIuKsZ.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./textfield.stories-DHorxyxk.js";function h(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(n,{of:c,name:`Docs`}),`
`,(0,_.jsx)(r.h1,{id:`textfield`,children:`TextField`}),`
`,(0,_.jsx)(r.p,{children:`A single line text input element.`}),`
`,(0,_.jsx)(t,{of:m}),`
`,(0,_.jsx)(r.h2,{id:`validation`,children:`Validation`}),`
`,(0,_.jsx)(r.p,{children:`Text fields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error.`}),`
`,(0,_.jsx)(t,{of:f}),`
`,(0,_.jsx)(r.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,_.jsx)(r.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,_.jsx)(r.p,{children:`Placeholder text can be used to describe the expected value or formatting for the w-textfield. Placeholder text will only appear when the w-textfield is empty, and should not be used as a substitute for labeling the element with a visible label.`}),`
`,(0,_.jsx)(t,{of:s}),`
`,(0,_.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,_.jsx)(r.p,{children:`Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.`}),`
`,(0,_.jsx)(t,{of:u}),`
`,(0,_.jsx)(r.h3,{id:`affix`,children:`Affix`}),`
`,(0,_.jsx)(r.p,{children:`If you wish to use an affix you must first use the w-affix element in conjunction with w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes. You must specify which slot to set the affix into (either prefix or suffix).`}),`
`,(0,_.jsx)(t,{of:d}),`
`,(0,_.jsxs)(r.p,{children:[`Use the `,(0,_.jsx)(r.code,{children:`slot`}),` attribute on `,(0,_.jsx)(r.code,{children:`w-affix`}),` to control its position. You can use both a prefix and suffix should you need to.`]}),`
`,(0,_.jsx)(r.pre,{children:(0,_.jsx)(r.code,{className:`language-html`,children:`<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
`})}),`
`,(0,_.jsx)(r.h3,{id:`read-only`,children:`Read only`}),`
`,(0,_.jsx)(r.p,{children:`The read-only boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See the MDN docs for more information.`}),`
`,(0,_.jsx)(t,{of:l})]})}function g(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=i(),a(),r(),p()})))()}v();export{g as default};