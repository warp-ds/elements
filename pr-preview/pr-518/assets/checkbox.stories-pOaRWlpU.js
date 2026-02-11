import{f as G,p as R,t as h,q as H,E as v,A as $,s as D,a as M,i as L,r as O,b as i,n as c,l as V,m as W,g as U}from"./iframe-DYb0rld_.js";import{s as j,p as N}from"./utilities-BIbceZT9.js";import{e as P}from"./query-NYTjQBeo.js";import{o as p}from"./if-defined-D7GrYlZk.js";import{F as A}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=G(class extends R{constructor(o){if(super(o),o.type!==h.PROPERTY&&o.type!==h.ATTRIBUTE&&o.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!H(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===v||e===$)return e;const t=o.element,a=o.name;if(o.type===h.PROPERTY){if(e===t[a])return v}else if(o.type===h.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(a))return v}else if(o.type===h.ATTRIBUTE&&t.getAttribute(a)===e+"")return v;return D(o),e}}),Y=M`
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
`;var Q=Object.defineProperty,l=(o,e,t,a)=>{for(var r=void 0,s=o.length-1,b;s>=0;s--)(b=o[s])&&(r=b(e,t,r)||r);return r&&Q(e,t,r),r};class n extends A(L){constructor(){super(...arguments),this.name="",this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#t=!1,this.#e=!1,this.#r=!1,this.#o=()=>{this.#r=!0,this.#a()}}static{this.styles=[O,Y]}static{this.shadowRootOptions={...L.shadowRootOptions,delegatesFocus:!0}}#t;#e;#r;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox");const e=this.getAttribute("value");this.value=e??"on",this.#t=this.hasAttribute("checked"),this.checked=this.#t,this.addEventListener("invalid",this.#o),this.#s()}disconnectedCallback(){this.removeEventListener("invalid",this.#o),super.disconnectedCallback()}handleClick(){this.disabled||(this.#r=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}#o;updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),(e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid"))&&(this.#s(),this.#a())}resetFormControl(){this.checked=this.#t,this.#s(),this.#a()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#a(),this.internals.checkValidity()}reportValidity(){return this.#r=!0,this.#a(),this.internals.checkValidity()}#a(){if(this.disabled){this.internals.setValidity({});return}if(this.required&&!this.checked){this.#e=!0,this.#r?this.invalid=!0:this.invalid=!1;const e=this.input?.validationMessage||" ",t=this.input??void 0;this.internals.setValidity({valueMissing:!0},e,t);return}if(this.invalid&&!this.#e){const e=this.input?.validationMessage||" ",t=this.input??void 0;this.internals.setValidity({customError:!0},e,t);return}this.#e&&(this.invalid=!1,this.#e=!1),this.internals.setValidity({})}#s(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}render(){const e=!this.checked&&this.indeterminate,t=e?"mixed":this.checked?"true":"false";return i`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${p(this.value)}
            .indeterminate=${z(this.indeterminate)}
            .checked=${z(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${t}
            aria-invalid=${p(this.invalid?"true":void 0)}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}l([P('input[type="checkbox"]')],n.prototype,"input");l([c({reflect:!0})],n.prototype,"name");l([c({reflect:!0})],n.prototype,"value");l([c({type:Boolean,reflect:!0})],n.prototype,"indeterminate");l([c({type:Boolean,reflect:!0})],n.prototype,"checked");l([c({type:Boolean,reflect:!0})],n.prototype,"disabled");l([c({type:Boolean,reflect:!0})],n.prototype,"required");l([c({type:Boolean,reflect:!0})],n.prototype,"invalid");customElements.get("w-checkbox")||customElements.define("w-checkbox",n);var J=Object.defineProperty,u=(o,e,t,a)=>{for(var r=void 0,s=o.length-1,b;s>=0;s--)(b=o[s])&&(r=b(e,t,r)||r);return r&&J(e,t,r),r};const m=()=>V._({id:"checkbox-group.validation.required",message:"At least one selection is required.",comment:"Shown when required checkbox group has no selections"});class d extends A(L){constructor(){super(...arguments),this._validationMessage=null,this.#t=!1,this.#e=!1,this.#r=()=>{this.#e=!0,this.#i()},this.#o=()=>{this.#e=!0,this.#i()}}#t;#e;static{this.styles=M`
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
  `}render(){const e=this.invalid||this._validationMessage,t=this.helpText||e?"checkbox-group__help":void 0,a=this.label?"checkbox-group__label":void 0,r=this._validationMessage??(this.invalid?m():this.helpText),s=e?"true":void 0;return i`
      <div class="wrapper">
        ${this.label?i`
              <div class="label" id="${a}">
                <span>${this.label}</span>
                ${this.optional?i`
                      <span class="optional">
                        ${V._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:$}
              </div>
            `:$}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${p(a)}
          aria-describedby=${p(t)}
          aria-invalid=${p(s)}
        >
          <slot></slot>
        </div>
        ${r?i`<div class="${e?"help-text error":"help-text"}" id="${t}">${r}</div>`:$}
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.#r),this.addEventListener("invalid",this.#o),this.setValue(null)}disconnectedCallback(){this.removeEventListener("change",this.#r),this.removeEventListener("invalid",this.#o),super.disconnectedCallback()}checkValidity(){return this.#i(),this.internals.checkValidity()}reportValidity(){return this.#e=!0,this.#i(),this.internals.checkValidity()}#r;#o;#a(){return(this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[]).filter(a=>a.checked).length}#s(e){const a=this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[];for(const r of a)"invalid"in r&&(r.invalid=e)}#c(){return(this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[])[0]}updated(e){super.updated(e),(e.has("invalid")||e.has("required")||e.has("helpText"))&&this.#i()}#i(){const e=this.#a()>0;if(this.required&&!e){if(this.#t=!0,this.#e){const a=m();this.invalid=!0,this._validationMessage=a}else this.invalid=!1,this._validationMessage=null;const t=m();this.internals.setValidity({valueMissing:!0},t,this.#c()),this.#s(this.invalid);return}if(this.#t&&(this.invalid=!1,this.#t=!1),this.invalid){const t=m();this._validationMessage=t,this.internals.setValidity({customError:!0},t,this.#c()),this.#s(!0);return}this._validationMessage=null,this.internals.setValidity({}),this.#s(!1)}}u([c({type:String,reflect:!0})],d.prototype,"label");u([c({type:Boolean,reflect:!0})],d.prototype,"optional");u([c({type:String,reflect:!0,attribute:"help-text"})],d.prototype,"helpText");u([c({type:Boolean,reflect:!0})],d.prototype,"required");u([c({type:Boolean,reflect:!0})],d.prototype,"invalid");u([W()],d.prototype,"_validationMessage");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",d);const{events:K,args:X,argTypes:Z}=U("w-checkbox"),ie={title:"Forms/Checkbox",render(o){return i`
      <w-checkbox ${j(N(o))}>Check me</w-checkbox>
    `},args:X,argTypes:Z,parameters:{actions:{handles:K}}},k={},x={args:{name:"invalidfoo",value:"bar",invalid:!0}},g={args:{name:"indeterminatefoo",value:"bar",indeterminate:!0}},w={args:{name:"indeterminateerrorfoo",value:"bar",indeterminate:!0,invalid:!0}},f={args:{name:"indeterminatedisabledfoo",value:"bar",indeterminate:!0,disabled:!0}},y={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const a=t.currentTarget,r=a.querySelector("[data-status]");if(!r)return;const s=new FormData(a);r.textContent=`Submitted value: ${s.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=${t=>{t.preventDefault();const s=t.currentTarget.closest("form")?.querySelector("[data-status]");s&&(s.textContent="Invalid: please check the box.")}}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},_={args:{name:"disabledfoo",value:"bar",disabled:!0}},C={render:()=>i`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},S={render:()=>i`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},E={render:()=>i`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},T={render:()=>i`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},I={render:()=>i`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},q={render:()=>i`
    <w-checkbox-group label="Label" invalid help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},B={render:()=>i`
    <w-checkbox-group label="Preferences" required help-text="Help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `},F={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          help-text="Choose an option"
          @invalid=${t=>{const s=t.currentTarget.closest("form")?.querySelector("[data-status]");s&&(s.textContent="Invalid: select at least one option.")}}
        >
          <w-checkbox name="group" value="foo">Foo</w-checkbox>
          <w-checkbox name="group" value="bar">Bar</w-checkbox>
          <w-checkbox name="group" value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"{}",...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  render: () => {
    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      status.textContent = \`Submitted value: \${data.get('newsletter') ?? 'none'}\`;
    };
    const handleInvalid = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: please check the box.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=\${handleInvalid}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" invalid help-text="help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...q.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Preferences" required help-text="Help text">
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
      <w-checkbox name="group" value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  \`
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};const ce=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","CheckboxFormAssociated","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional","CheckboxGroupWithInvalid","CheckboxGroupRequired","CheckboxGroupFormAssociated"];export{y as CheckboxFormAssociated,C as CheckboxGroup,F as CheckboxGroupFormAssociated,B as CheckboxGroupRequired,S as CheckboxGroupWithHelpText,T as CheckboxGroupWithHelpTextAndLabel,q as CheckboxGroupWithInvalid,E as CheckboxGroupWithLabel,I as CheckboxGroupWithOptional,k as Default,_ as Disabled,g as Indeterminate,f as IndeterminateDisabled,w as IndeterminateError,x as Invalid,ce as __namedExportsOrder,ie as default};
