import{f as S,p as A,t as l,q as O,E as b,A as C,s as $,a as F,i as I,r as G,b as t,n as c,l as L}from"./iframe-ChnmWH3r.js";import{e as V}from"./query-NYTjQBeo.js";import{o as B}from"./if-defined-CSZzHclI.js";import{F as R}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=S(class extends A{constructor(o){if(super(o),o.type!==l.PROPERTY&&o.type!==l.ATTRIBUTE&&o.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!O(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===b||e===C)return e;const r=o.element,d=o.name;if(o.type===l.PROPERTY){if(e===r[d])return b}else if(o.type===l.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(d))return b}else if(o.type===l.ATTRIBUTE&&r.getAttribute(d)===e+"")return b;return $(o),e}}),W=F`
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
`;var q=Object.defineProperty,n=(o,e,r,d)=>{for(var a=void 0,s=o.length-1,h;s>=0;s--)(h=o[s])&&(a=h(e,r,a)||a);return a&&q(e,r,a),a};class i extends R(I){constructor(){super(...arguments),this.name="",this._value=this.getAttribute("value")??null,this.value=this._value??"on",this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.disabled=!1,this.required=!1,this.#e=!1}static{this.styles=[G,W]}static{this.shadowRootOptions={...I.shadowRootOptions,delegatesFocus:!0}}#e;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox"),this.#r()}handleClick(){this.disabled||(this.#e=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.#e||(this.checked=this.defaultChecked))}updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),(e.has("checked")||e.has("value")||e.has("disabled")||e.has("required"))&&(this.#r(),this.#o())}resetFormControl(){this.checked=this.defaultChecked,this.#e=!1,this.#r(),this.#o()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#o(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.#o(),this.internals.checkValidity()}#o(){if(this.disabled){this.internals.setValidity({});return}if(this.required&&!this.checked){const e=this.input?.validationMessage||"Please fill out this field.",r=this.input??void 0;this.internals.setValidity({valueMissing:!0},e,r);return}this.internals.setValidity({})}#r(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}render(){const e=!this.checked&&this.indeterminate,r=e?"mixed":this.checked?"true":"false";return t`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${B(this._value)}
            .indeterminate=${z(this.indeterminate)}
            .checked=${z(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${r}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}n([V('input[type="checkbox"]')],i.prototype,"input");n([c({reflect:!0})],i.prototype,"name");n([c({reflect:!0})],i.prototype,"value");n([c({type:Boolean,reflect:!0})],i.prototype,"indeterminate");n([c({type:Boolean,reflect:!0})],i.prototype,"checked");n([c({type:Boolean})],i.prototype,"defaultChecked");n([c({type:Boolean,reflect:!0})],i.prototype,"disabled");n([c({type:Boolean,reflect:!0})],i.prototype,"required");customElements.get("w-checkbox")||customElements.define("w-checkbox",i);var D=Object.defineProperty,E=(o,e,r,d)=>{for(var a=void 0,s=o.length-1,h;s>=0;s--)(h=o[s])&&(a=h(e,r,a)||a);return a&&D(e,r,a),a};class T extends I{static{this.styles=F`
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
  `}render(){const e=this.helpText?"checkbox-group__help":void 0,r=this.label?"checkbox-group__label":void 0;return t`
      <div class="wrapper">
        ${this.label?t`
              <div class="label" id="${r}">
                <span>${this.label}</span>
                ${this.optional?t`
                      <span class="optional">
                        ${L._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:C}
              </div>
            `:C}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${B(r)}
          aria-describedby=${B(e)}
        >
          <slot></slot>
        </div>
        ${this.helpText?t`<div class="help-text" id="${e}">${this.helpText}</div>`:C}
      </div>
    `}}E([c({type:String,reflect:!0})],T.prototype,"label");E([c({type:Boolean,reflect:!0})],T.prototype,"optional");E([c({type:String,reflect:!0,attribute:"help-text"})],T.prototype,"helpText");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",T);const P={title:"Forms/Checkbox",render:()=>t`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},u={},p={render:()=>t`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`},k={render:()=>t`<w-checkbox name="indeterminatefoo" value="bar" indeterminate>Indeterminate checkbox</w-checkbox>`},x={render:()=>t`<w-checkbox name="indeterminateerrorfoo" value="bar" indeterminate invalid>Indeterminate checkbox</w-checkbox>`},v={render:()=>t`<w-checkbox name="indeterminatedisabledfoo" value="bar" indeterminate disabled>Indeterminate checkbox</w-checkbox>`},m={render:()=>t`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`},w={render:()=>t`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},g={render:()=>t`
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
  `};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`\n}',...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminatefoo" value="bar" indeterminate>Indeterminate checkbox</w-checkbox>`\n}',...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminateerrorfoo" value="bar" indeterminate invalid>Indeterminate checkbox</w-checkbox>`\n}',...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="indeterminatedisabledfoo" value="bar" indeterminate disabled>Indeterminate checkbox</w-checkbox>`\n}',...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`\n}',...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const Y=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional"];export{w as CheckboxGroup,g as CheckboxGroupWithHelpText,_ as CheckboxGroupWithHelpTextAndLabel,f as CheckboxGroupWithLabel,y as CheckboxGroupWithOptional,u as Default,m as Disabled,k as Indeterminate,v as IndeterminateDisabled,x as IndeterminateError,p as Invalid,Y as __namedExportsOrder,P as default};
