import{f as R,u as D,v as b,w as G,E as B,A as $,x as H,a as z,i as F,r as N,b as i,n,q as W,l as V,m as U,g as j}from"./iframe-ER9f_Qwc.js";import{s as J,p as P}from"./utilities-CzU3eGY-.js";import{e as Y}from"./query-NYTjQBeo.js";import{o as p}from"./if-defined-BUtq9sgd.js";import{F as M}from"./FormControlMixin-DJnJZbro.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=R(class extends D{constructor(a){if(super(a),a.type!==b.PROPERTY&&a.type!==b.ATTRIBUTE&&a.type!==b.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!G(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[e]){if(e===B||e===$)return e;const t=a.element,s=a.name;if(a.type===b.PROPERTY){if(e===t[s])return B}else if(a.type===b.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return B}else if(a.type===b.ATTRIBUTE&&t.getAttribute(s)===e+"")return B;return H(a),e}}),K=z`
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
`;var Q=Object.defineProperty,X=Object.getOwnPropertyDescriptor,l=(a,e,t,s)=>{for(var r=s>1?void 0:s?X(e,t):e,o=a.length-1,d;o>=0;o--)(d=a[o])&&(r=(s?d(e,t,r):d(r))||r);return s&&r&&Q(e,t,r),r};class c extends M(F){constructor(){super(...arguments),this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#a=!1,this.#c=()=>{this.#s(),this.#r()},this.#l=e=>{this.disabled||e.defaultPrevented||e.key!==" "&&e.key!=="Spacebar"&&e.key!=="Enter"||e.composedPath()[0]!==this.input&&(e.preventDefault(),this.click())}}static{this.styles=[N,K]}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}set name(e){this._ownName=e}get name(){return this._ownName||this._groupName}#e;#t;#a;get _computedInvalid(){return this.invalid||this._groupInvalid===!0}connectedCallback(){super.connectedCallback();const e=this.getAttribute("value");this.value=e??"on",this.#e=this.hasAttribute("checked"),this.checked=this.#e,this.addEventListener("invalid",this.#c),this.addEventListener("keydown",this.#l),this.#o()}handleClick(){this.disabled||(this.#s(),this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}#c;#l;updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.#b(),this.#i(e)&&(this.#o(),this.#r())}resetFormControl(){this.checked=this.#e,this.#o(),this.#r()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#r(),this.internals.checkValidity()}reportValidity(){return this.#s(),this.#r(),this.internals.checkValidity()}#s(){this.#a=!0}#d(){return this.input?.validationMessage||" "}#u(){return this.input??void 0}#h(e){this.internals.setValidity(e,this.#d(),this.#u())}#r(){if(this.disabled){this.internals.setValidity({});return}const e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#a,this.#h({valueMissing:!0});return}if(this.#t&&(this.invalid=!1,this.#t=!1),t){this.#h({customError:!0});return}this.internals.setValidity({})}#o(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}#b(){this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate)}#i(e){return e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid")}render(){const e=!this.checked&&this.indeterminate,t=e?"mixed":this.checked?"true":"false";return i`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${p(this.name||void 0)}
            value=${p(this.value)}
            .indeterminate=${O(this.indeterminate)}
            .checked=${O(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${t}
            aria-invalid=${p(this._computedInvalid?"true":void 0)}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}l([Y('input[type="checkbox"]')],c.prototype,"input",2);l([n({reflect:!0})],c.prototype,"name",1);l([n({reflect:!0})],c.prototype,"value",2);l([n({type:Boolean,reflect:!0})],c.prototype,"indeterminate",2);l([n({type:Boolean,reflect:!0})],c.prototype,"checked",2);l([n({type:Boolean,reflect:!0})],c.prototype,"disabled",2);l([n({type:Boolean,reflect:!0})],c.prototype,"required",2);l([n({type:Boolean,reflect:!0})],c.prototype,"invalid",2);l([n({attribute:!1})],c.prototype,"_groupInvalid",2);l([n({attribute:!1})],c.prototype,"_groupName",2);customElements.get("w-checkbox")||customElements.define("w-checkbox",c);const Z=JSON.parse('{"checkbox-group.validation.required":["Mindst én valgt mulighed er påkrævet."],"checkbox-group.label.optional":["Valgfri"]}'),ee=JSON.parse('{"checkbox-group.validation.required":["At least one selection is required."],"checkbox-group.label.optional":["Optional"]}'),te=JSON.parse('{"checkbox-group.validation.required":["Vähintään yksi valinta vaaditaan."],"checkbox-group.label.optional":["Valinnainen"]}'),re=JSON.parse('{"checkbox-group.validation.required":["Minst ett valg er påkrevd."],"checkbox-group.label.optional":["Valgfri"]}'),ae=JSON.parse('{"checkbox-group.validation.required":["Minst ett val krävs."],"checkbox-group.label.optional":["Valfritt"]}');var oe=Object.defineProperty,u=(a,e,t,s)=>{for(var r=void 0,o=a.length-1,d;o>=0;o--)(d=a[o])&&(r=d(e,t,r)||r);return r&&oe(e,t,r),r};W(ee,re,te,Z,ae);const se=()=>V._({id:"checkbox-group.validation.required",message:"At least one selection is required.",comment:"Shown when required checkbox group has no selections"});class h extends M(F){constructor(){super(...arguments),this.optional=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this._internalTabIndex=-1,this.#c=()=>{this.#d(),this.#n(),this.requestUpdate()},this.#l=()=>{this.#d(),this.#n(),this.requestUpdate()},this.#s=()=>{this.#r(),this.#n(),this.requestUpdate()},this.#u=()=>{this.requestUpdate()}}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}#e;#t;#a;static{this.styles=z`
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
  `}render(){const e=this.#h()>0,s=this.required&&!e&&this.#e,r=this.invalid||s,o=r?this.#m():this.helpText,d=o?"checkbox-group__help":void 0,L=this.label?"checkbox-group__label":void 0,A=r?"true":void 0;return i`
      <div class="wrapper" tabindex="${this._internalTabIndex}">
        ${this.label?i`
              <div class="label" id="${L}">
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
          aria-labelledby=${p(L)}
          aria-describedby=${p(d)}
          aria-invalid=${p(A)}
        >
          <slot></slot>
        </div>
        ${o?i`<div class="${r?"help-text error":"help-text"}" id="${d}">${o}</div>`:$}
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.#c),this.addEventListener("invalid",this.#l),this.addEventListener("slotchange",this.#s),this.#a=V.on("change",this.#u),this.setValue(null),this.#v()}disconnectedCallback(){this.#a?.(),this.#a=void 0,super.disconnectedCallback()}checkValidity(){return this.#n(),this.internals.checkValidity()}reportValidity(){return this.#d(),this.#n(),this.internals.checkValidity()}focus(e){const t=this.#b();if(t?.focus){t.focus(e);return}HTMLElement.prototype.focus.call(this,e)}#c;#l;#s;#d(){this.#e=!0}#u;#h(){return this.#i().filter(e=>e.checked).length}#r(){if(this.name)for(const e of this.#i()){const t=e;t&&typeof t=="object"&&!t.name&&(t._groupName=this.name)}}#o(e){for(const t of this.#i())"_groupInvalid"in t&&(t._groupInvalid=e)}#b(){return this.#i()[0]}#i(){return this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[]}#m(){return se()}updated(e){super.updated(e),this.#k(e)&&(e.has("name")&&this.#r(),this.#n())}#k(e){return e.has("invalid")||e.has("required")||e.has("helpText")||e.has("name")}#p(e){const t=this.#b();this.internals.setValidity(e," ",t??void 0)}#x(e){this._internalTabIndex=e?0:-1}#n(){this.#v();const e=this.#h()>0,t=this.required&&!e,s=this.invalid,r=t&&this.#e,o=s||r;if(this.#x(o),t){this.#p({valueMissing:!0}),this.#o(o);return}if(s){this.#p({customError:!0}),this.#o(!0);return}this.internals.setValidity({}),this.#o(!1)}#v(){this.#t||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-checkbox-group: "name" is required for form submission.'),this.#t=!0))}}u([n({type:String,reflect:!0})],h.prototype,"label");u([n({type:String,reflect:!0})],h.prototype,"name");u([n({type:Boolean,reflect:!0})],h.prototype,"optional");u([n({type:String,reflect:!0,attribute:"help-text"})],h.prototype,"helpText");u([n({type:Boolean,reflect:!0})],h.prototype,"required");u([n({type:Boolean,reflect:!0})],h.prototype,"invalid");u([U()],h.prototype,"_internalTabIndex");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",h);const{events:ie,args:ne,argTypes:ce}=j("w-checkbox"),le={title:"Forms/Checkbox",render(a){return i`
      <w-checkbox ${J(P(a))}>Check me</w-checkbox>
    `},args:ne,argTypes:ce,parameters:{actions:{handles:ie}}},v={},m={args:{name:"invalidfoo",value:"bar",invalid:!0}},k={args:{name:"indeterminatefoo",value:"bar",indeterminate:!0}},x={args:{name:"indeterminateerrorfoo",value:"bar",indeterminate:!0,invalid:!0}},g={args:{name:"indeterminatedisabledfoo",value:"bar",indeterminate:!0,disabled:!0}},f={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const s=t.currentTarget,r=s.querySelector("[data-status]");if(!r)return;const o=new FormData(s);r.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=${t=>{t.preventDefault();const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please check the box.")}}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},w={args:{name:"disabledfoo",value:"bar",disabled:!0}},y={render:()=>i`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},_={render:()=>i`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},S={render:()=>i`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},I={render:()=>i`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},C={render:()=>i`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},q={render:()=>i`
    <w-checkbox-group label="Label" invalid help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},E={render:()=>i`
    <w-checkbox-group label="Preferences" required help-text="Help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
      <w-checkbox value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  `},T={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-checkbox-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${t=>{const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select at least one option.")}}
        >
          <w-checkbox value="foo">Foo</w-checkbox>
          <w-checkbox value="bar">Bar</w-checkbox>
          <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" invalid help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Preferences" required help-text="Help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
      <w-checkbox value="baz">Baz</w-checkbox>
    </w-checkbox-group>
  \`
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
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
          name="group"
          help-text="Choose an option"
          @invalid=\${handleInvalid}
        >
          <w-checkbox value="foo">Foo</w-checkbox>
          <w-checkbox value="bar">Bar</w-checkbox>
          <w-checkbox value="baz">Baz</w-checkbox>
        </w-checkbox-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...T.parameters?.docs?.source}}};const de=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","CheckboxFormAssociated","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional","CheckboxGroupWithInvalid","CheckboxGroupRequired","CheckboxGroupFormAssociated"],me=Object.freeze(Object.defineProperty({__proto__:null,CheckboxFormAssociated:f,CheckboxGroup:y,CheckboxGroupFormAssociated:T,CheckboxGroupRequired:E,CheckboxGroupWithHelpText:_,CheckboxGroupWithHelpTextAndLabel:I,CheckboxGroupWithInvalid:q,CheckboxGroupWithLabel:S,CheckboxGroupWithOptional:C,Default:v,Disabled:w,Indeterminate:k,IndeterminateDisabled:g,IndeterminateError:x,Invalid:m,__namedExportsOrder:de,default:le},Symbol.toStringTag,{value:"Module"}));export{me as C,v as D,m as I,w as a,k as b,x as c,g as d,y as e,_ as f,S as g,C as h,E as i,f as j,T as k};
