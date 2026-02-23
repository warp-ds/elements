import{j as e}from"./index-D7-HiEGT.js";import{useMDXComponents as a}from"./index-B332Pdph.js";import{M as l,C as s}from"./blocks-BFDL6DlS.js";import{S as t,a as d,R as o,b as h,c,d as u,M as m,e as x,O as p,f,g as j}from"./slider.stories-FBByIQXL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-U8bjqJHK.js";import"./affix-CWOb-1nb.js";import"./if-defined-BW-wF7gC.js";import"./attention-B1wF6G3D.js";import"./button-CdJeR1_O.js";import"./link-CFJgJ25k.js";import"./FormControlMixin-DJnJZbro.js";import"./textfield-Dr5L6Sdj.js";import"./query-NYTjQBeo.js";function r(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Docs"}),`
`,e.jsx(i.h1,{id:"sliders",children:"Sliders"}),`
`,e.jsx(i.p,{children:"Sliders allow users to adjust a numeric value within a given continuous range."}),`
`,e.jsx(i.p,{children:"A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track."}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["When you use ",e.jsx(i.a,{href:"#range-slider",children:"range sliders"})," you must provide an ",e.jsx(i.code,{children:"aria-label"})," to each ",e.jsx(i.code,{children:"<w-slider-thumb>"})," component. The ",e.jsx(i.code,{children:"<w-slider>"}),` component's label is used as a fallback with the suffixes "min" and "max", but these should not be relied on.`]}),`
`,e.jsx(i.p,{children:"The label is announced by screen readers for the range input and related text input."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<w-slider label="Apartment size" min="0" max="250" suffix="m²">
  <w-slider-thumb slot="from" aria-label="From square meters" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" aria-label="To square meters" name="to"></w-slider-thumb>
</w-slider>
`})}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.p,{children:"Sliders come in two variants:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Single (default)"}),`
`,e.jsx(i.li,{children:"Range"}),`
`]}),`
`,e.jsx(i.h2,{id:"single-slider",children:"Single slider"}),`
`,e.jsx(i.p,{children:"Single sliders allow users to select a single value within the slider track."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i.h2,{id:"range-slider",children:"Range slider"}),`
`,e.jsx(i.p,{children:"Range sliders allow users to define minimum and maximum values from a predefined range within the slider track."}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(i.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(i.p,{children:"These examples show the range slider, but the single slider has the same options."}),`
`,e.jsx(i.h3,{id:"suffixes",children:"Suffixes"}),`
`,e.jsx(i.p,{children:"Sliders can define a suffix that will be added to the labels and input fields."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(i.h3,{id:"tick-marks",children:"Tick marks"}),`
`,e.jsx(i.p,{children:"The sliders can have tick marks shown at selected intervals below the slider track."}),`
`,e.jsx(i.p,{children:"Because of the way range sliders are arranged to avoid collision, these visual markers will only make sense for single sliders. For range sliders one of the two slider thumbs will always miss the mark."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(i.h3,{id:"granularity",children:"Granularity"}),`
`,e.jsxs(i.p,{children:["You can define a ",e.jsxs(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#setting_the_values_granularity",rel:"nofollow",children:[e.jsx(i.code,{children:"step"})," attribute"]})," to control the possible granularity in the slider. The default value in browsers is ",e.jsx(i.code,{children:"1"}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(i.h3,{id:"slider-with-over-and-under-max-values",children:"Slider with over and under max values"}),`
`,e.jsxs(i.p,{children:["Use the ",e.jsx(i.code,{children:"formatter"})," property to create sliders that should include values before and after the minimum and maximum values."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Before and after a year."}),`
`,e.jsx(i.li,{children:"Under and over a sum or distance."}),`
`]}),`
`,e.jsxs(i.p,{children:["The input will always produce a value. You should treat a value equal to ",e.jsx(i.code,{children:"min"})," as the signal to include all values up to that value. Similarly, a value equal to ",e.jsx(i.code,{children:"max"}),' should mean "value and over" for this type of slider.']}),`
`,e.jsx(i.h4,{id:"accessibility-1",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["Use ",e.jsx(i.code,{children:"aria-description"})," on ",e.jsx(i.code,{children:"<w-slider-thumb>"}),' to explain that a value of X means "up to and including X" and vice versa for the to-value. Internally the attribute is rendered in a visually hidden element and refered to with ',e.jsx(i.code,{children:"aria-describedby"})," since ",e.jsxs(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description",rel:"nofollow",children:[e.jsx(i.code,{children:"aria-description"})," support is still not great"]}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(i.h3,{id:"error-state",children:"Error state"}),`
`,e.jsx(i.p,{children:"With the input fields a user might input values that are outside the allowed minimum and maximum values, or where the from value is higher than the to value in range sliders. In these cases the input field gets highlighted with the error color and a validation error message is shown below it."}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(s,{of:j})]})}function X(n={}){const{wrapper:i}={...a(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{X as default};
