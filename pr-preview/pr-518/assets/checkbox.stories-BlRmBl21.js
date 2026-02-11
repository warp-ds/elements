import{f as $,p as A,t as l,q as G,E as b,A as T,s as O,a as I,i as z,r as q,b as t,n as c,l as L,g as R}from"./iframe-BZefhVKV.js";import{s as V,p as W}from"./utilities-zPuYELX_.js";import{e as H}from"./query-NYTjQBeo.js";import{o as E}from"./if-defined-DhbCnufp.js";import{F as D}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=$(class extends A{constructor(r){if(super(r),r.type!==l.PROPERTY&&r.type!==l.ATTRIBUTE&&r.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!G(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===b||e===T)return e;const o=r.element,d=r.name;if(r.type===l.PROPERTY){if(e===o[d])return b}else if(r.type===l.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(d))return b}else if(r.type===l.ATTRIBUTE&&o.getAttribute(d)===e+"")return b;return O(r),e}}),M=I`
  :host {
    --_label-font-size: var(--w-c-checkbox-label-font-size, var(--w-font-size-m));
    --_label-line-height: var(--w-c-checkbox-label-line-height, var(--w-line-height-m));

    --_control-size: var(--w-c-checkbox-control-size, 2rem);
    --_gap: var(--w-c-checkbox-gap, 8px);
    --_radius: var(--w-c-checkbox-radius, 4px);
    --_border-width: var(--w-c-checkbox-border-width, 1px);

    --_bg-default: var(--w-c-checkbox-bg, var(--w-s-color-background));
    --_border-default: var(--w-c-checkbox-border-color, var(--w-s-color-border-strong));
    --_icon-color: var(--w-c-checkbox-icon-color, var(--w-s-color-icon-inverted));

    --_bg-checked: var(--w-c-checkbox-bg-checked, var(--w-s-color-background-primary));
    --_border-checked: var(--w-c-checkbox-border-color-checked, var(--w-s-color-border-primary));
    --_checked-icon: var(--w-c-checkbox-checked-icon, var(--w-icon-toggle-checked));

    --_border-invalid: var(--w-c-checkbox-border-color-invalid, var(--w-s-color-border-negative));
    --_bg-invalid-checked: var(--w-c-checkbox-bg-invalid-checked, var(--w-s-color-background-negative));

    --_bg-disabled: var(--w-c-checkbox-bg-disabled, var(--w-s-color-background-disabled-subtle));
    --_border-disabled: var(--w-c-checkbox-border-color-disabled, var(--w-s-color-border-disabled));
    --_bg-disabled-checked: var(--w-c-checkbox-bg-disabled-checked, var(--w-s-color-background-disabled));

    --_outline-width: var(--w-c-checkbox-outline-width, 2px);
    --_outline-color: var(--w-c-checkbox-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-checkbox-outline-offset, var(--w-outline-offset, 1px));

    --_transition: var(--w-c-checkbox-transition, all 150ms cubic-bezier(0.4, 0, 0.2, 1));

    --_bg: var(--_bg-default);
    --_border-color: var(--_border-default);
  }

  :host([type='checkbox']) {
    --_radius: var(--w-c-checkbox-radius, 4px);
  }

  :host([checked]),
  :host([indeterminate]) {
    --_bg: var(--_bg-checked);
    --_border-color: var(--_border-checked);
  }

  :host([invalid]) {
    --_border-color: var(--_border-invalid);
  }

  :host([invalid][checked]),
  :host([invalid][indeterminate]) {
    --_bg: var(--_bg-invalid-checked);
  }

  :host([disabled]) {
    --_bg: var(--_bg-disabled);
    --_border-color: var(--_border-disabled);
  }

  :host([disabled][checked]),
  :host([disabled][indeterminate]) {
    --_bg: var(--_bg-disabled-checked);
  }

  [part~='label'] {
    display: block;
    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    user-select: none;
    cursor: pointer;
  }

  [part='base'] {
    display: grid;
    grid-template-columns: var(--_control-size) max-content;
    gap: var(--_gap);
  }

  [part='input'] {
    position: absolute;
    padding: 0;
    margin: 0;
    opacity: 0;
    pointer-events: none;
    inset: 0;
  }

  [part='control'] {
    position: relative;
    display: block;
    height: var(--_control-size);
    width: var(--_control-size);
    flex-shrink: 0;

    border-width: var(--_border-width);
    border-style: solid;
    border-color: var(--_border-color);
    border-radius: var(--_radius);

    background-color: var(--_bg);
    color: var(--_icon-color);

    cursor: pointer;
    user-select: none;
    appearance: none;
    transition: var(--_transition);

    font-weight: 700;
    text-align: center;
    line-height: var(--w-line-height-xs);
    font-size: var(--w-font-size-m);
  }

  /* native invalid support without requiring [invalid] attribute */
  [part='control']:has(:invalid) {
    border-color: var(--_border-invalid) !important;
  }

  [part='control']:has(:checked, :indeterminate):has(:invalid) {
    background-color: var(--_bg-invalid-checked);
  }

  :host(:focus-visible) {
    outline: none;
  }

  [part='control']:has(> [part='input']:focus-visible:not(:disabled)),
  :host(:focus-visible) [part='control'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  /* checked icon (keep driven by actual input state for parity) */
  [part='control']:has(:checked) {
    background-image: var(--_checked-icon);
    background-position: center;
  }

  @media (prefers-reduced-motion: reduce) {
    :host { --w-c-checkbox-transition: none; }
  }

  @media (forced-colors: active) {
    :host {
      --w-c-checkbox-bg: Canvas;
      --w-c-checkbox-border-color: ButtonText;
      --w-c-checkbox-bg-checked: Highlight;
      --w-c-checkbox-border-color-checked: Highlight;
      --w-c-checkbox-outline-color: Highlight;
      --w-c-checkbox-bg-disabled: Canvas;
      --w-c-checkbox-border-color-disabled: GrayText;
      --w-c-checkbox-icon-color: CanvasText;
    }

    [part='control'] { forced-color-adjust: none; }
  }
`;var P=Object.defineProperty,s=(r,e,o,d)=>{for(var a=void 0,n=r.length-1,h;n>=0;n--)(h=r[n])&&(a=h(e,o,a)||a);return a&&P(e,o,a),a};class i extends D(z){constructor(){super(...arguments),this.name="",this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.#e=!1}static{this.styles=[q,M]}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}#e;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox");const e=this.getAttribute("value");this.value=e??"on",this.#e=this.hasAttribute("checked"),this.checked=this.#e,this.#o()}handleClick(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),(e.has("checked")||e.has("value")||e.has("disabled")||e.has("required"))&&(this.#o(),this.#r())}resetFormControl(){this.checked=this.#e,this.#o(),this.#r()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#r(),this.internals.checkValidity()}reportValidity(){return this.#r(),this.internals.checkValidity()}#r(){if(this.disabled){this.internals.setValidity({});return}if(this.required&&!this.checked){const e=this.input?.validationMessage||"Please fill out this field.",o=this.input??void 0;this.internals.setValidity({valueMissing:!0},e,o);return}this.internals.setValidity({})}#o(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}render(){const e=!this.checked&&this.indeterminate,o=e?"mixed":this.checked?"true":"false";return t`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${E(this.value)}
            .indeterminate=${F(this.indeterminate)}
            .checked=${F(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${o}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}s([H('input[type="checkbox"]')],i.prototype,"input");s([c({reflect:!0})],i.prototype,"name");s([c({reflect:!0})],i.prototype,"value");s([c({type:Boolean,reflect:!0})],i.prototype,"indeterminate");s([c({type:Boolean,reflect:!0})],i.prototype,"checked");s([c({type:Boolean,reflect:!0})],i.prototype,"disabled");s([c({type:Boolean,reflect:!0})],i.prototype,"required");customElements.get("w-checkbox")||customElements.define("w-checkbox",i);var U=Object.defineProperty,S=(r,e,o,d)=>{for(var a=void 0,n=r.length-1,h;n>=0;n--)(h=r[n])&&(a=h(e,o,a)||a);return a&&U(e,o,a),a};class B extends z{static{this.styles=I`
    .wrapper {
      display: inline-flex;
      flex-direction: column;
      gap: 16px;
    }

    .checkbox-group {
      display: grid;
      gap: 16px;
    }

    .label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: var(--w-font-size-s);
      line-height: var(--w-line-height-s);
      font-weight: 700;
      color: var(--w-s-color-text);
    }

    .optional {
      font-weight: 400;
      color: var(--w-s-color-text-subtle);
    }

    .help-text {
      display: block;
      font-size: var(--w-font-size-xs);
      line-height: var(--w-line-height-xs);
      color: var(--w-s-color-text-subtle);
    }
  `}render(){const e=this.helpText?"checkbox-group__help":void 0,o=this.label?"checkbox-group__label":void 0;return t`
      <div class="wrapper">
        ${this.label?t`
              <div class="label" id="${o}">
                <span>${this.label}</span>
                ${this.optional?t`
                      <span class="optional">
                        ${L._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:T}
              </div>
            `:T}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${E(o)}
          aria-describedby=${E(e)}
        >
          <slot></slot>
        </div>
        ${this.helpText?t`<div class="help-text" id="${e}">${this.helpText}</div>`:T}
      </div>
    `}}S([c({type:String,reflect:!0})],B.prototype,"label");S([c({type:Boolean,reflect:!0})],B.prototype,"optional");S([c({type:String,reflect:!0,attribute:"help-text"})],B.prototype,"helpText");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",B);const{events:j,args:N,argTypes:Y}=R("w-checkbox"),re={title:"Forms/Checkbox",render(r){return t`
      <w-checkbox ${V(W(r))}>Check me</w-checkbox>
    `},args:N,argTypes:Y,parameters:{actions:{handles:j}}},u={},p={args:{name:"invalidfoo",value:"bar",invalid:!0}},k={args:{name:"indeterminatefoo",value:"bar",indeterminate:!0}},x={args:{name:"indeterminateerrorfoo",value:"bar",indeterminate:!0,invalid:!0}},v={args:{name:"indeterminatedisabledfoo",value:"bar",indeterminate:!0,disabled:!0}},m={args:{name:"disabledfoo",value:"bar",disabled:!0}},g={render:()=>t`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},w={render:()=>t`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},f={render:()=>t`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},_={render:()=>t`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},y={render:()=>t`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},C={render:()=>t`
    <w-checkbox-group label="Preferences" required help-text="Select at least one option">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true
  }
}`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatefoo',
    value: 'bar',
    indeterminate: true
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminateerrorfoo',
    value: 'bar',
    indeterminate: true,
    invalid: true
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Preferences" required help-text="Select at least one option">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};const oe=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional","CheckboxGroupRequired"];export{g as CheckboxGroup,C as CheckboxGroupRequired,w as CheckboxGroupWithHelpText,_ as CheckboxGroupWithHelpTextAndLabel,f as CheckboxGroupWithLabel,y as CheckboxGroupWithOptional,u as Default,m as Disabled,k as Indeterminate,v as IndeterminateDisabled,x as IndeterminateError,p as Invalid,oe as __namedExportsOrder,re as default};
