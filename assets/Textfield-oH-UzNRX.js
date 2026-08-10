import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,o as n,s as r}from"./blocks-DAIyXY5k.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,r as o}from"./lib-BRDOWE9X.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./textfield.stories-x-YzGkLh.js";function _(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...o(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(n,{of:g,name:`Docs`}),`
`,(0,y.jsx)(r.h1,{id:`textfield`,children:`TextField`}),`
`,(0,y.jsx)(r.p,{children:`A single line text input element.`}),`
`,(0,y.jsx)(t,{of:h}),`
`,(0,y.jsx)(r.h2,{id:`validation`,children:`Validation`}),`
`,(0,y.jsx)(r.p,{children:`Text fields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error.`}),`
`,(0,y.jsx)(t,{of:p}),`
`,(0,y.jsx)(r.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,y.jsx)(r.h3,{id:`help-text`,children:`Help text`}),`
`,(0,y.jsxs)(r.p,{children:[`You can use the `,(0,y.jsx)(r.code,{children:`help-text`}),` property to show a descriptive message below the textarea.`]}),`
`,(0,y.jsx)(t,{of:s}),`
`,(0,y.jsx)(r.h3,{id:`tooltip`,children:`Tooltip`}),`
`,(0,y.jsxs)(r.p,{children:[`If you need to add supplementary information you can use the `,(0,y.jsx)(r.code,{children:`tooltip`}),` property.`]}),`
`,(0,y.jsx)(t,{of:c}),`
`,(0,y.jsx)(r.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,y.jsx)(r.p,{children:`Placeholder text can be used to describe the expected value or formatting for the w-textfield. Placeholder text will only appear when the w-textfield is empty, and should not be used as a substitute for labeling the element with a visible label.`}),`
`,(0,y.jsx)(t,{of:f}),`
`,(0,y.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,y.jsx)(r.p,{children:`Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.`}),`
`,(0,y.jsx)(t,{of:d}),`
`,(0,y.jsx)(r.h3,{id:`affix`,children:`Affix`}),`
`,(0,y.jsx)(r.p,{children:`If you wish to use an affix you must first use the w-affix element in conjunction with w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes. You must specify which slot to set the affix into (either prefix or suffix).`}),`
`,(0,y.jsx)(t,{of:m}),`
`,(0,y.jsxs)(r.p,{children:[`Use the `,(0,y.jsx)(r.code,{children:`slot`}),` attribute on `,(0,y.jsx)(r.code,{children:`w-affix`}),` to control its position. You can use both a prefix and suffix should you need to.`]}),`
`,(0,y.jsx)(r.pre,{children:(0,y.jsx)(r.code,{className:`language-html`,children:`<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
`})}),`
`,(0,y.jsx)(r.h3,{id:`read-only`,children:`Read only`}),`
`,(0,y.jsx)(r.p,{children:`The read-only boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See the MDN docs for more information.`}),`
`,(0,y.jsx)(t,{of:l})]})}function v(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=i(),a(),r(),u()})))()}b();export{v as default};