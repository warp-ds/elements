import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BG42LmKs.js";import{r as n}from"./react-DShTf-Dy.js";import{t as r}from"./mdx-react-shim-np44v9yQ.js";import{n as i,o as a,s as o}from"./blocks-DuF9VpDn.js";import{Default as s,Disabled as c,Invalid as l,ReadOnly as u,WithPlaceholder as d,WithSuffix as f,n as p,t as m}from"./textfield.stories-DRKMlXiJ.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p,name:`Docs`}),`
`,(0,_.jsx)(t.h1,{id:`textfield`,children:`TextField`}),`
`,(0,_.jsx)(t.p,{children:`A single line text input element.`}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsx)(t.h2,{id:`validation`,children:`Validation`}),`
`,(0,_.jsx)(t.p,{children:`Text fields can communicate to the user whether the current value is invalid. Implement your own validation logic in your app and set the error prop to display it as invalid. error is often paired with help-text to provide feedback to the user about the error.`}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`visual-options`,children:`Visual options`}),`
`,(0,_.jsx)(t.h3,{id:`placeholder`,children:`Placeholder`}),`
`,(0,_.jsx)(t.p,{children:`Placeholder text can be used to describe the expected value or formatting for the w-textfield. Placeholder text will only appear when the w-textfield is empty, and should not be used as a substitute for labeling the element with a visible label.`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,_.jsx)(t.p,{children:`Keep in mind that using disabled in its current form is an anti-pattern. There will ALWAYS be users who don't understand why an element is disabled, or users who can't even see that it is disabled because of poor lighting conditions or other reasons. Please consider more informative alternatives before choosing to use disabled on an element.`}),`
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(t.h3,{id:`affix`,children:`Affix`}),`
`,(0,_.jsx)(t.p,{children:`If you wish to use an affix you must first use the w-affix element in conjunction with w-textfield. Include the affix as a child of w-textfield and set the appropiate attributes. You must specify which slot to set the affix into (either prefix or suffix).`}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsxs)(t.p,{children:[`Use the `,(0,_.jsx)(t.code,{children:`slot`}),` attribute on `,(0,_.jsx)(t.code,{children:`w-affix`}),` to control its position. You can use both a prefix and suffix should you need to.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-html`,children:`<w-textfield label="Price" placeholder="1 000 000">
  <w-affix slot="prefix" label="kr"></w-affix>
  <w-affix slot="suffix" search aria-label="Search"></w-affix>
</w-textfield>
`})}),`
`,(0,_.jsx)(t.h3,{id:`read-only`,children:`Read only`}),`
`,(0,_.jsx)(t.p,{children:`The read-only boolean attribute makes the w-textfield's text content immutable. Unlike disabled the w-textfield remains focusable and the contents can still be copied. See the MDN docs for more information.`}),`
`,(0,_.jsx)(i,{of:u})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),r(),o(),m()}))();export{g as default};