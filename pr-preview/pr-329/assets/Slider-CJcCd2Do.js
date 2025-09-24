import{j as e}from"./index-C8ADKtso.js";import{useMDXComponents as r}from"./index-BwRnHMUQ.js";import{M as l,C as s}from"./blocks-BPvtwTP_.js";import{S as t,a as d,R as o,b as h,c as u,d as c,M as x,e as m,O as f,f as j,g as p}from"./slider.stories-D4daX3jn.js";import"./preload-helper-DvrX7W50.js";import"./iframe-OFY4kkpb.js";function a(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t,name:"Docs"}),`
`,e.jsx(n.h1,{id:"sliders",children:"Sliders"}),`
`,e.jsx(n.p,{children:"Sliders allow users to adjust a numeric value within a given continuous range."}),`
`,e.jsx(n.p,{children:"A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track."}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.p,{children:"Sliders come in two variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Single (default)"}),`
`,e.jsx(n.li,{children:"Range"}),`
`]}),`
`,e.jsx(n.h2,{id:"single-slider",children:"Single slider"}),`
`,e.jsx(n.p,{children:"Single sliders allow users to select a single value within the slider track."}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"range-slider",children:"Range slider"}),`
`,e.jsx(n.p,{children:"Range sliders allow users to define minimum and maximum values from a predefined range within the slider track."}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"These examples show the range slider, but the single slider has the same options."}),`
`,e.jsx(n.h3,{id:"suffixes",children:"Suffixes"}),`
`,e.jsx(n.p,{children:"Sliders can define a suffix that will be added to the labels and input fields."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"tick-marks",children:"Tick marks"}),`
`,e.jsx(n.p,{children:"The sliders can have tick marks shown at selected intervals below the slider track."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"granularity",children:"Granularity"}),`
`,e.jsxs(n.p,{children:["You can define a ",e.jsxs(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#setting_the_values_granularity",rel:"nofollow",children:[e.jsx(n.code,{children:"step"})," attribute"]})," to control the possible granularity in the slider. The default value in browsers is ",e.jsx(n.code,{children:"1"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"slider-with-over-and-under-max-values",children:"Slider with over and under max values"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"formatter"})," property to create sliders that should include values before and after the minimum and maximum values."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Before and after a year."}),`
`,e.jsx(n.li,{children:"Under and over a sum or distance."}),`
`]}),`
`,e.jsxs(n.p,{children:["The input will always produce a value. You should treat a value equal to ",e.jsx(n.code,{children:"min"})," as the signal to include all values up to that value. Similarly, a value equal to ",e.jsx(n.code,{children:"max"}),' should mean "value and over" for this type of slider.']}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"error-state",children:"Error state"}),`
`,e.jsx(n.p,{children:"With the input fields a user might input values that are outside the allowed minimum and maximum values, or where the from value is higher than the to value in range sliders. In these cases the input field gets highlighted with the error color and a validation error message is shown below it."}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:p})]})}function k(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{k as default};
