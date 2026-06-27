import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{c as n,h as r,l as i,s as a,t as o,y as s}from"./decorators-CPAv1fbk.js";import{C as c,S as l,l as u,u as d}from"./iframe-JOZezF-2.js";import{a as f,n as p,r as m,t as h}from"./utilities-CIV6bzq0.js";var g,_=t((()=>{n(),g=s`
	[part~="label"] {
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
	:host([type="checkbox"]) .control {
		border-radius: 4px;
	}
	/* Default to radio styles when no type attribute is set */
	:host(:not([type])) .control,
	:host([type="radio"]) .control,
	:host([role="radio"]) .control {
		border-radius: 50%;
	}
	.checkbox:has(:checked, :indeterminate),
	:host([type="checkbox"][checked]) .control,
	:host([type="checkbox"][indeterminate]) .control {
		background-color: var(--w-s-color-background-primary);
		border-color: var(--w-s-color-border-primary);
	}
	.checkbox:has(:checked),
	:host([type="checkbox"][checked]) .control {
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

	:host([type="checkbox"][disabled][checked]) .control,
	:host([type="checkbox"][disabled][indeterminate]) .control,
	.checkbox:has(:checked, :indeterminate):has(> input:disabled) {
		background-color: var(--w-s-color-background-disabled);
	}
`})),v,y=t((()=>{n(),o(),u(),_(),v=class extends i{@a({type:String,reflect:!0})type;@a({type:Boolean,reflect:!0})checked=!1;@a({type:Boolean,reflect:!0})indeterminate=!1;@a({type:Boolean,reflect:!0})invalid=!1;@a({type:Boolean,reflect:!0})disabled=!1;get indeterminateMarker(){return!this.checked&&this.indeterminate?`–`:``}render(){return r` <div class="control">${this.indeterminateMarker}</div> `}static styles=[d,g]},customElements.get(`w-dead-toggle`)||customElements.define(`w-dead-toggle`,v)})),b=e({Checkbox:()=>E,Checked:()=>O,Indeterminate:()=>D,Invalid:()=>k,Radio:()=>T,__namedExportsOrder:()=>A,default:()=>w}),x,S,C,w,T,E,D,O,k,A,j=t((()=>{m(),c(),n(),h(),y(),{events:x,args:S,argTypes:C}=l(`w-dead-toggle`),w={title:`Forms/Dead toggle`,render(e){return r`<w-dead-toggle ${f(p(e))}></w-dead-toggle>`},args:S,argTypes:C,parameters:{actions:{handles:x}}},T={args:{type:`radio`}},E={args:{type:`checkbox`}},D={args:{indeterminate:!0}},O={args:{checked:!0}},k={args:{invalid:!0}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    type: "radio"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: "checkbox"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...k.parameters?.docs?.source}}},A=[`Radio`,`Checkbox`,`Indeterminate`,`Checked`,`Invalid`]}));j();export{E as Checkbox,O as Checked,D as Indeterminate,k as Invalid,T as Radio,A as __namedExportsOrder,w as default,j as n,b as t};