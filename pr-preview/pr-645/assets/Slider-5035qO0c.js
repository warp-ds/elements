import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BG42LmKs.js";import{r as n}from"./react-DShTf-Dy.js";import{t as r}from"./mdx-react-shim-np44v9yQ.js";import{n as i,o as a,s as o}from"./blocks-Co7lvBZk.js";import{Marks as s,OpenEnded as c,Range as l,RangeError as u,Single as d,SingleError as f,Step as p,SuffixCurrency as m,SuffixKilometers as h,SuffixSquareMeters as g,n as _,t as v}from"./slider.stories-xEuaGn3h.js";function y(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{of:_,name:`Docs`}),`
`,(0,x.jsx)(t.h1,{id:`sliders`,children:`Sliders`}),`
`,(0,x.jsx)(t.p,{children:`Sliders allow users to adjust a numeric value within a given continuous range.`}),`
`,(0,x.jsx)(t.p,{children:`A slider provides a visual indication of an adjustable value within a defined range (minimum and maximum values) by moving a handle along a horizontal track.`}),`
`,(0,x.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(t.p,{children:[`When you use `,(0,x.jsx)(t.a,{href:`#range-slider`,children:`range sliders`}),` you must provide an `,(0,x.jsx)(t.code,{children:`aria-label`}),` to each `,(0,x.jsx)(t.code,{children:`<w-slider-thumb>`}),` component. The `,(0,x.jsx)(t.code,{children:`<w-slider>`}),` component's label is used as a fallback with the suffixes "min" and "max", but these should not be relied on.`]}),`
`,(0,x.jsx)(t.p,{children:`The label is announced by screen readers for the range input and related text input.`}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-html`,children:`<w-slider label="Apartment size" min="0" max="250" suffix="m²">
  <w-slider-thumb slot="from" aria-label="From square meters" name="from"></w-slider-thumb>
  <w-slider-thumb slot="to" aria-label="To square meters" name="to"></w-slider-thumb>
</w-slider>
`})}),`
`,(0,x.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,x.jsx)(t.p,{children:`Sliders come in two variants:`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`Single (default)`}),`
`,(0,x.jsx)(t.li,{children:`Range`}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`single-slider`,children:`Single slider`}),`
`,(0,x.jsx)(t.p,{children:`Single sliders allow users to select a single value within the slider track.`}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsx)(t.h2,{id:`range-slider`,children:`Range slider`}),`
`,(0,x.jsx)(t.p,{children:`Range sliders allow users to define minimum and maximum values from a predefined range within the slider track.`}),`
`,(0,x.jsx)(i,{of:l}),`
`,(0,x.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(t.p,{children:`These examples show the range slider, but the single slider has the same options.`}),`
`,(0,x.jsx)(t.h3,{id:`suffixes`,children:`Suffixes`}),`
`,(0,x.jsx)(t.p,{children:`Sliders can define a suffix that will be added to the labels and input fields.`}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsx)(t.h3,{id:`tick-marks`,children:`Tick marks`}),`
`,(0,x.jsx)(t.p,{children:`The sliders can have tick marks shown at selected intervals below the slider track.`}),`
`,(0,x.jsx)(t.p,{children:`Because of the way range sliders are arranged to avoid collision, these visual markers will only make sense for single sliders. For range sliders one of the two slider thumbs will always miss the mark.`}),`
`,(0,x.jsx)(i,{of:s}),`
`,(0,x.jsx)(t.h3,{id:`granularity`,children:`Granularity`}),`
`,(0,x.jsxs)(t.p,{children:[`You can define a `,(0,x.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/range#setting_the_values_granularity`,rel:`nofollow`,children:[(0,x.jsx)(t.code,{children:`step`}),` attribute`]}),` to control the possible granularity in the slider. The default value in browsers is `,(0,x.jsx)(t.code,{children:`1`}),`.`]}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsx)(t.h3,{id:`slider-with-over-and-under-max-values`,children:`Slider with over and under max values`}),`
`,(0,x.jsxs)(t.p,{children:[`Use the `,(0,x.jsx)(t.code,{children:`formatter`}),` property to create sliders that should include values before and after the minimum and maximum values.`]}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsx)(t.li,{children:`Before and after a year.`}),`
`,(0,x.jsx)(t.li,{children:`Under and over a sum or distance.`}),`
`]}),`
`,(0,x.jsxs)(t.p,{children:[`The input will always produce a value. You should treat a value equal to `,(0,x.jsx)(t.code,{children:`min`}),` as the signal to include all values up to that value. Similarly, a value equal to `,(0,x.jsx)(t.code,{children:`max`}),` should mean "value and over" for this type of slider.`]}),`
`,(0,x.jsx)(t.h4,{id:`accessibility-1`,children:`Accessibility`}),`
`,(0,x.jsxs)(t.p,{children:[`Use `,(0,x.jsx)(t.code,{children:`aria-description`}),` on `,(0,x.jsx)(t.code,{children:`<w-slider-thumb>`}),` to explain that a value of X means "up to and including X" and vice versa for the to-value. Internally the attribute is rendered in a visually hidden element and refered to with `,(0,x.jsx)(t.code,{children:`aria-describedby`}),` since `,(0,x.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description`,rel:`nofollow`,children:[(0,x.jsx)(t.code,{children:`aria-description`}),` support is still not great`]}),`.`]}),`
`,(0,x.jsx)(i,{of:c}),`
`,(0,x.jsx)(t.h3,{id:`error-state`,children:`Error state`}),`
`,(0,x.jsx)(t.p,{children:`With the input fields a user might input values that are outside the allowed minimum and maximum values, or where the from value is higher than the to value in range sliders. In these cases the input field gets highlighted with the error color and a validation error message is shown below it.`}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsx)(i,{of:u})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),r(),o(),v()}))();export{b as default};