import{f as M,p as A,t as h,q as G,E as k,A as F,s as R,a as $,i as z,r as H,b as i,n as s,l as O,m as W,g as D}from"./iframe-CCllbzP2.js";import{s as U,p as j}from"./utilities-CsL0QzMl.js";import{e as N}from"./query-NYTjQBeo.js";import{o as v}from"./if-defined-BqCkhVAc.js";import{F as L}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=M(class extends A{constructor(r){if(super(r),r.type!==h.PROPERTY&&r.type!==h.ATTRIBUTE&&r.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!G(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===k||e===F)return e;const t=r.element,a=r.name;if(r.type===h.PROPERTY){if(e===t[a])return k}else if(r.type===h.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(a))return k}else if(r.type===h.ATTRIBUTE&&t.getAttribute(a)===e+"")return k;return R(r),e}}),P=$`
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
`;var Y=Object.defineProperty,l=(r,e,t,a)=>{for(var o=void 0,c=r.length-1,b;c>=0;c--)(b=r[c])&&(o=b(e,t,o)||o);return o&&Y(e,t,o),o};class n extends L(z){constructor(){super(...arguments),this.name="",this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#t=!1,this.#e=!1}static{this.styles=[H,P]}static{this.shadowRootOptions={...z.shadowRootOptions,delegatesFocus:!0}}#t;#e;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox");const e=this.getAttribute("value");this.value=e??"on",this.#t=this.hasAttribute("checked"),this.checked=this.#t,this.#o()}handleClick(){this.disabled||(this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),(e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid"))&&(this.#o(),this.#r())}resetFormControl(){this.checked=this.#t,this.#o(),this.#r()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#r(),this.internals.checkValidity()}reportValidity(){return this.#r(),this.internals.checkValidity()}#r(){if(this.disabled){this.internals.setValidity({});return}if(this.required&&!this.checked){this.#e=!0,this.invalid=!0;const e=this.input?.validationMessage||" ",t=this.input??void 0;this.internals.setValidity({valueMissing:!0},e,t);return}if(this.invalid&&!this.#e){const e=this.input?.validationMessage||" ",t=this.input??void 0;this.internals.setValidity({customError:!0},e,t);return}this.#e&&(this.invalid=!1,this.#e=!1),this.internals.setValidity({})}#o(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}render(){const e=!this.checked&&this.indeterminate,t=e?"mixed":this.checked?"true":"false";return i`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${v(this.value)}
            .indeterminate=${V(this.indeterminate)}
            .checked=${V(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${t}
            aria-invalid=${v(this.invalid?"true":void 0)}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}l([N('input[type="checkbox"]')],n.prototype,"input");l([s({reflect:!0})],n.prototype,"name");l([s({reflect:!0})],n.prototype,"value");l([s({type:Boolean,reflect:!0})],n.prototype,"indeterminate");l([s({type:Boolean,reflect:!0})],n.prototype,"checked");l([s({type:Boolean,reflect:!0})],n.prototype,"disabled");l([s({type:Boolean,reflect:!0})],n.prototype,"required");l([s({type:Boolean,reflect:!0})],n.prototype,"invalid");customElements.get("w-checkbox")||customElements.define("w-checkbox",n);var Q=Object.defineProperty,u=(r,e,t,a)=>{for(var o=void 0,c=r.length-1,b;c>=0;c--)(b=r[c])&&(o=b(e,t,o)||o);return o&&Q(e,t,o),o};const p="At least one selection is required.";class d extends L(z){constructor(){super(...arguments),this._validationMessage=null,this.#t=!1,this.#e=!1,this.#r=()=>{this.#e=!0,this.#a()},this.#o=()=>{this.#e=!0,this.#a()}}#t;#e;static{this.styles=$`
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

    .error {
      color: var(--w-s-color-text-negative);
    }
  `}render(){const e=this.invalid||this._validationMessage,t=this.helpText||e?"checkbox-group__help":void 0,a=this.label?"checkbox-group__label":void 0,o=this._validationMessage??(this.invalid?p:this.helpText),c=e?"true":void 0;return i`
      <div class="wrapper">
        ${this.label?i`
              <div class="label" id="${a}">
                <span>${this.label}</span>
                ${this.optional?i`
                      <span class="optional">
                        ${O._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:F}
              </div>
            `:F}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${v(a)}
          aria-describedby=${v(t)}
          aria-invalid=${v(c)}
        >
          <slot></slot>
        </div>
        ${o?i`<div class="${e?"help-text error":"help-text"}" id="${t}">${o}</div>`:F}
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.#r),this.addEventListener("invalid",this.#o),this.setValue(null)}disconnectedCallback(){this.removeEventListener("change",this.#r),this.removeEventListener("invalid",this.#o),super.disconnectedCallback()}checkValidity(){return this.#a(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.#a(),this.internals.checkValidity()}#r;#o;#s(){return(this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[]).filter(a=>a.checked).length}#i(e){const a=this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[];for(const o of a)"invalid"in o&&(o.invalid=e)}#c(){return(this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[])[0]}updated(e){super.updated(e),(e.has("invalid")||e.has("required")||e.has("helpText"))&&this.#a()}#a(){const e=this.#s()>0;if(this.required&&!e){this.#t=!0,this.#e?(this.invalid=!0,this._validationMessage=p):(this.invalid=!1,this._validationMessage=null),this.internals.setValidity({valueMissing:!0},p,this.#c()),this.#i(this.invalid);return}if(this.#t&&(this.invalid=!1,this.#t=!1),this.invalid){this._validationMessage=p,this.internals.setValidity({customError:!0},p,this.#c()),this.#i(!0);return}this._validationMessage=null,this.internals.setValidity({}),this.#i(!1)}}u([s({type:String,reflect:!0})],d.prototype,"label");u([s({type:Boolean,reflect:!0})],d.prototype,"optional");u([s({type:String,reflect:!0,attribute:"help-text"})],d.prototype,"helpText");u([s({type:Boolean,reflect:!0})],d.prototype,"required");u([s({type:Boolean,reflect:!0})],d.prototype,"invalid");u([W()],d.prototype,"_validationMessage");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",d);const{events:J,args:K,argTypes:X}=D("w-checkbox"),ie={title:"Forms/Checkbox",render(r){return i`
      <w-checkbox ${U(j(r))}>Check me</w-checkbox>
    `},args:K,argTypes:X,parameters:{actions:{handles:J}}},m={},x={args:{name:"invalidfoo",value:"bar",invalid:!0}},g={args:{name:"indeterminatefoo",value:"bar",indeterminate:!0}},w={args:{name:"indeterminateerrorfoo",value:"bar",indeterminate:!0,invalid:!0}},f={args:{name:"indeterminatedisabledfoo",value:"bar",indeterminate:!0,disabled:!0}},y={args:{name:"disabledfoo",value:"bar",disabled:!0}},_={render:()=>i`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},C={render:()=>i`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},E={render:()=>i`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},S={render:()=>i`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},T={render:()=>i`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},B={render:()=>i`
    <w-checkbox-group label="Label" invalid help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},I={render:()=>i`
    <w-checkbox-group label="Preferences" required help-text="Help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `},q={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const o=t.currentTarget.querySelector("[data-status]");o&&(o.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          help-text="Choose an option"
          @invalid=${t=>{const c=t.currentTarget.closest("form")?.querySelector("[data-status]");c&&(c.textContent="Invalid: select at least one option.")}}
        >
          <w-checkbox name="group" value="foo">Foo</w-checkbox>
          <w-checkbox name="group" value="bar">Bar</w-checkbox>
          <w-checkbox name="group" value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatefoo',
    value: 'bar',
    indeterminate: true
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminateerrorfoo',
    value: 'bar',
    indeterminate: true,
    invalid: true
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" invalid help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...B.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Preferences" required help-text="Help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  \`
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select at least one option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          help-text="Choose an option"
          @invalid=\${handleInvalid}
        >
          <w-checkbox name="group" value="foo">Foo</w-checkbox>
          <w-checkbox name="group" value="bar">Bar</w-checkbox>
          <w-checkbox name="group" value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...q.parameters?.docs?.source}}};const ce=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional","CheckboxGroupWithInvalid","CheckboxGroupRequired","CheckboxGroupFormAssociated"];export{_ as CheckboxGroup,q as CheckboxGroupFormAssociated,I as CheckboxGroupRequired,C as CheckboxGroupWithHelpText,S as CheckboxGroupWithHelpTextAndLabel,B as CheckboxGroupWithInvalid,E as CheckboxGroupWithLabel,T as CheckboxGroupWithOptional,m as Default,y as Disabled,g as Indeterminate,f as IndeterminateDisabled,w as IndeterminateError,x as Invalid,ce as __namedExportsOrder,ie as default};
