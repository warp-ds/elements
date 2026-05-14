import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{m as n,n as r,s as i,t as a}from"./lit-JruGAyH3.js";import{n as o,o as s,r as c,t as l}from"./decorate-Dk3JVGAn.js";import{n as u,t as d}from"./styles-DphVJT09.js";import{a as f,o as p}from"./iframe-BZHmUnG_.js";import{i as m,n as h,r as g,t as _}from"./utilities-3bRBgS0D.js";var v,y=e((()=>{a(),v=n`
  [part~='label'] {
    display: block;
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    user-select: none;
    cursor: pointer;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 2rem max-content;
    gap: 8px;
  }
  .hide-toggle {
    position: absolute;
    padding: 0;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    inset: 0;
  }
  .control {
    display: block;
    border-width: 1px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    cursor: pointer;
    appearance: none;
    user-select: none;
    flex-shrink: 0;
    height: 2rem;
    width: 2rem;
    background-color: var(--w-s-color-background);
    border-color: var(--w-s-color-border-strong);
    color: var(--w-s-color-icon-inverted);
    font-weight: 700;
    text-align: center;
    line-height: var(--w-line-height-xs);
    font-size: var(--w-font-size-m);
  }
  .checkbox {
    position: relative;
  }
  :host([type='checkbox']) .control {
    border-radius: 4px;
  }
  /* Default to radio styles when no type attribute is set */
  :host(:not([type])) .control,
  :host([type='radio']) .control,
  :host([role='radio']) .control {
    border-radius: 50%;
  }
  .checkbox:has(:checked, :indeterminate),
  :host([type='checkbox'][checked]) .control,
  :host([type='checkbox'][indeterminate]) .control {
    background-color: var(--w-s-color-background-primary);
    border-color: var(--w-s-color-border-primary);
  }
  .checkbox:has(:checked),
  :host([type='checkbox'][checked]) .control {
    background-image: var(--w-icon-toggle-checked);
    background-position: center;
  }
  :host(:not([type])[checked]) .control,
  :host([type='radio'][checked]) .control,
  /* :state is newly available, so we set an attribute in radio for compat */
  :host([role='radio'][checked-ui]) .control,
  :host([role='radio']:state(checked)) .control {
    border-color: var(--w-s-color-border-selected);
    border-width: 0.6rem;
  }
  .checkbox:has(:invalid),
  :host([invalid]) .control {
    border-color: var(--w-s-color-border-negative) !important;
  }
  /* handles invalid checkbox state inside w-checkbox */
  .checkbox:has(:checked, :indeterminate):has(:invalid),
  /* allows invalid to be set on the w-checkbox element */
  :host([invalid]) .checkbox:has(:checked, :indeterminate),
  :host([type='checkbox'][invalid][checked]) .control,
  :host([type='checkbox'][invalid][indeterminate]) .control {
    background-color: var(--w-s-color-background-negative);
  }

  :host(:focus-visible) {
    outline: none;
  }
  .checkbox:has(> input:focus-visible:not(:disabled)),
  :host(:focus-visible) .control {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  :host(:not([type])[disabled]) .control,
  :host([type='radio'][disabled]) .control,
  /* :state is newly available, so we set an attribute in radio for compat */
  :host([role='radio'][disabled-ui]) .control,
  :host([role='radio']:state(disabled)) .control,
  :host([type='checkbox'][disabled]) .control,
  .checkbox:has(> input:disabled) {
    border-color: var(--w-s-color-border-disabled);
    background-color: var(--w-s-color-background-disabled-subtle);
  }

  :host([type='checkbox'][disabled][checked]) .control,
  :host([type='checkbox'][disabled][indeterminate]) .control,
  .checkbox:has(:checked, :indeterminate):has(> input:disabled) {
    background-color: var(--w-s-color-background-disabled);
  }
`})),b,x=e((()=>{a(),c(),d(),y(),o(),b=class extends r{constructor(...e){super(...e),this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.disabled=!1}get indeterminateMarker(){return!this.checked&&this.indeterminate?`–`:``}render(){return i` <div class="control">${this.indeterminateMarker}</div> `}static{this.styles=[u,v]}},l([s({type:String,reflect:!0})],b.prototype,`type`,void 0),l([s({type:Boolean,reflect:!0})],b.prototype,`checked`,void 0),l([s({type:Boolean,reflect:!0})],b.prototype,`indeterminate`,void 0),l([s({type:Boolean,reflect:!0})],b.prototype,`invalid`,void 0),l([s({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),customElements.get(`w-dead-toggle`)||customElements.define(`w-dead-toggle`,b)})),S=t({Checkbox:()=>O,Checked:()=>A,Indeterminate:()=>k,Invalid:()=>j,Radio:()=>D,__namedExportsOrder:()=>M,default:()=>E}),C,w,T,E,D,O,k,A,j,M,N=e((()=>{g(),p(),a(),_(),x(),{events:C,args:w,argTypes:T}=f(`w-dead-toggle`),E={title:`Forms/Dead toggle`,render(e){return i`<w-dead-toggle ${m(h(e))}></w-dead-toggle>`},args:w,argTypes:T,parameters:{actions:{handles:C}}},D={args:{type:`radio`}},O={args:{type:`checkbox`}},k={args:{indeterminate:!0}},A={args:{checked:!0}},j={args:{invalid:!0}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'radio'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...j.parameters?.docs?.source}}},M=[`Radio`,`Checkbox`,`Indeterminate`,`Checked`,`Invalid`]}));N();export{O as Checkbox,A as Checked,k as Indeterminate,j as Invalid,D as Radio,M as __namedExportsOrder,E as default,N as n,S as t};