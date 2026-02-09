import{f as S,o as F,t as d,p as A,E as p,A as I,q as $,i as T,r as L,b as r,n as c,a as G,l as V}from"./iframe-BAKuq-5b.js";import{e as D}from"./query-NYTjQBeo.js";import{o as B}from"./if-defined-BaZfVmpS.js";import{t as R}from"./toggle-styles-Dzj3aQhU.js";import{F as W}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=S(class extends F{constructor(t){if(super(t),t.type!==d.PROPERTY&&t.type!==d.ATTRIBUTE&&t.type!==d.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!A(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===p||e===I)return e;const o=t.element,s=t.name;if(t.type===d.PROPERTY){if(e===o[s])return p}else if(t.type===d.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(s))return p}else if(t.type===d.ATTRIBUTE&&o.getAttribute(s)===e+"")return p;return $(t),e}});var q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,n=(t,e,o,s)=>{for(var a=s>1?void 0:s?U(e,o):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=(s?h(e,o,a):h(a))||a);return s&&a&&q(e,o,a),a};class i extends W(T){constructor(){super(...arguments),this.name="",this._value=this.getAttribute("value")??null,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.disabled=!1,this.required=!1,this.#e=!1}static{this.styles=[L,R]}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}get value(){return this._value??"on"}set value(e){this._value=e}#e;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox"),this.#r()}handleClick(){this.disabled||(this.#e=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.#e||(this.checked=this.defaultChecked))}updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),(e.has("checked")||e.has("value")||e.has("disabled")||e.has("required"))&&(this.#r(),this.#t())}resetFormControl(){this.checked=this.defaultChecked,this.#e=!1,this.#r(),this.#t()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#t(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.#t(),this.internals.checkValidity()}#t(){if(this.disabled){this.internals.setValidity({});return}if(this.required&&!this.checked){const e=this.input?.validationMessage||"Please fill out this field.",o=this.input??void 0;this.internals.setValidity({valueMissing:!0},e,o);return}this.internals.setValidity({})}#r(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}render(){const e=!this.checked&&this.indeterminate;return r`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${B(this._value)}
            .indeterminate=${O(this.indeterminate)}
            .checked=${O(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}n([D('input[type="checkbox"]')],i.prototype,"input",2);n([c({reflect:!0})],i.prototype,"name",2);n([c({reflect:!0})],i.prototype,"value",1);n([c({type:Boolean,reflect:!0})],i.prototype,"indeterminate",2);n([c({type:Boolean,attribute:!1})],i.prototype,"checked",2);n([c({type:Boolean,reflect:!0,attribute:"checked"})],i.prototype,"defaultChecked",2);n([c({type:Boolean,reflect:!0})],i.prototype,"disabled",2);n([c({type:Boolean,reflect:!0})],i.prototype,"required",2);customElements.get("w-checkbox")||customElements.define("w-checkbox",i);var M=Object.defineProperty,E=(t,e,o,s)=>{for(var a=void 0,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=h(e,o,a)||a);return a&&M(e,o,a),a};class _ extends T{static{this.styles=G`
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
  `}render(){const e=this.helpText?"checkbox-group__help":void 0,o=this.label?"checkbox-group__label":void 0;return r`
      <div class="wrapper">
        ${this.label?r`
              <div class="label" id="${o}">
                <span>${this.label}</span>
                ${this.optional?r`
                      <span class="optional">
                        ${V._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:I}
              </div>
            `:I}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${B(o)}
          aria-describedby=${B(e)}
        >
          <slot></slot>
        </div>
        ${this.helpText?r`<div class="help-text" id="${e}">${this.helpText}</div>`:I}
      </div>
    `}}E([c({type:String,reflect:!0})],_.prototype,"label");E([c({type:Boolean,reflect:!0})],_.prototype,"optional");E([c({type:String,reflect:!0,attribute:"help-text"})],_.prototype,"helpText");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",_);const J={title:"Forms/Checkbox",render:()=>r`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},u={},b={render:()=>r`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`},m={render:()=>r`<w-checkbox name="indeterminatefoo" value="bar" indeterminate>Indeterminate checkbox</w-checkbox>`},x={render:()=>r`<w-checkbox name="indeterminateerrorfoo" value="bar" indeterminate invalid>Indeterminate checkbox</w-checkbox>`},k={render:()=>r`<w-checkbox name="indeterminatedisabledfoo" value="bar" indeterminate disabled>Indeterminate checkbox</w-checkbox>`},w={render:()=>r`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`},f={render:()=>r`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},v={render:()=>r`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},g={render:()=>r`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},y={render:()=>r`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},C={render:()=>r`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`\n}',...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminatefoo" value="bar" indeterminate>Indeterminate checkbox</w-checkbox>`\n}',...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminateerrorfoo" value="bar" indeterminate invalid>Indeterminate checkbox</w-checkbox>`\n}',...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminatedisabledfoo" value="bar" indeterminate disabled>Indeterminate checkbox</w-checkbox>`\n}',...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`\n}',...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};const K=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional"];export{f as CheckboxGroup,v as CheckboxGroupWithHelpText,y as CheckboxGroupWithHelpTextAndLabel,g as CheckboxGroupWithLabel,C as CheckboxGroupWithOptional,u as Default,w as Disabled,m as Indeterminate,k as IndeterminateDisabled,x as IndeterminateError,b as Invalid,K as __namedExportsOrder,J as default};
