import{f as G,u as H,v as u,w as R,E as B,A as L,x as D,a as V,i as F,r as W,b as i,n,q as N,l as z,g as U}from"./iframe-DS9UuZL4.js";import{s as j,p as J}from"./utilities-D1lVcFD7.js";import{e as P}from"./query-NYTjQBeo.js";import{o as q}from"./if-defined-BAhYg_hD.js";import{F as M}from"./FormControlMixin-DJnJZbro.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=G(class extends H{constructor(a){if(super(a),a.type!==u.PROPERTY&&a.type!==u.ATTRIBUTE&&a.type!==u.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!R(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[e]){if(e===B||e===L)return e;const t=a.element,s=a.name;if(a.type===u.PROPERTY){if(e===t[s])return B}else if(a.type===u.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(s))return B}else if(a.type===u.ATTRIBUTE&&t.getAttribute(s)===e+"")return B;return D(a),e}}),Y=V`
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
`;var K=Object.defineProperty,d=(a,e,t,s)=>{for(var r=void 0,o=a.length-1,l;o>=0;o--)(l=a[o])&&(r=l(e,t,r)||r);return r&&K(e,t,r),r};class c extends M(F){constructor(){super(...arguments),this.name="",this.value=null,this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#e=!1,this.#t=!1,this.#r=!1,this.#i=!1,this.#n=()=>{this.#s(),this.#a()},this.#c=e=>{this.disabled||e.defaultPrevented||e.key!==" "&&e.key!=="Spacebar"&&e.key!=="Enter"||e.composedPath()[0]!==this.input&&(e.preventDefault(),this.click())}}static{this.styles=[W,Y]}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}#e;#t;#r;#i;connectedCallback(){super.connectedCallback(),this.setAttribute("type","checkbox");const e=this.getAttribute("value");this.value=e??"on",this.#e=this.hasAttribute("checked"),this.checked=this.#e,this.#b(),this.addEventListener("invalid",this.#n),this.addEventListener("keydown",this.#c),this.#o()}disconnectedCallback(){this.removeEventListener("invalid",this.#n),this.removeEventListener("keydown",this.#c),super.disconnectedCallback()}handleClick(){this.disabled||(this.#s(),this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}#n;#c;updated(e){super.updated(e),(e.has("checked")||e.has("indeterminate"))&&this.#v(),this.#p(e)&&(this.#o(),this.#a()),e.has("disabled")&&this.#b()}resetFormControl(){this.checked=this.#e,this.#o(),this.#a()}click(){this.disabled||this.input?.click()}focus(e){this.input?.focus(e)}blur(){this.input?.blur()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.#a(),this.internals.checkValidity()}reportValidity(){return this.#s(),this.#a(),this.internals.checkValidity()}#s(){this.#r=!0}#h(){return this.input?.validationMessage||" "}#u(){return this.input??void 0}#l(e){this.internals.setValidity(e,this.#h(),this.#u())}#a(){if(this.disabled){this.internals.setValidity({});return}const e=this.required&&!this.checked,t=this.invalid&&!this.#t;if(e){this.#t=!0,this.invalid=this.#r,this.#l({valueMissing:!0});return}if(this.#t&&(this.invalid=!1,this.#t=!1),t){this.#l({customError:!0});return}this.internals.setValidity({})}#o(){if(this.disabled){this.setValue(null);return}const e=this.checked?this.value:null;this.setValue(e)}#v(){this.input&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate)}#b(){this.hasAttribute("tabindex")&&!this.#i||(this.tabIndex=this.disabled?-1:0,this.#i=!0)}#p(e){return e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid")}render(){const e=!this.checked&&this.indeterminate,t=e?"mixed":this.checked?"true":"false";return i`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            part="input"
            class="input hide-toggle"
            type="checkbox"
            name=${this.name}
            value=${q(this.value)}
            .indeterminate=${A(this.indeterminate)}
            .checked=${A(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${t}
            aria-invalid=${q(this.invalid?"true":void 0)}
            @click=${this.handleClick} />
          ${e?"–":""}
        </span>

        <slot part="label"></slot>
      </label>
    `}}d([P('input[type="checkbox"]')],c.prototype,"input");d([n({reflect:!0})],c.prototype,"name");d([n({reflect:!0})],c.prototype,"value");d([n({type:Boolean,reflect:!0})],c.prototype,"indeterminate");d([n({type:Boolean,reflect:!0})],c.prototype,"checked");d([n({type:Boolean,reflect:!0})],c.prototype,"disabled");d([n({type:Boolean,reflect:!0})],c.prototype,"required");d([n({type:Boolean,reflect:!0})],c.prototype,"invalid");customElements.get("w-checkbox")||customElements.define("w-checkbox",c);const Q=JSON.parse('{"checkbox-group.validation.required":["Mindst én valgt mulighed er påkrævet."],"checkbox-group.label.optional":["Valgfri"]}'),X=JSON.parse('{"checkbox-group.validation.required":["At least one selection is required."],"checkbox-group.label.optional":["Optional"]}'),Z=JSON.parse('{"checkbox-group.validation.required":["Vähintään yksi valinta vaaditaan."],"checkbox-group.label.optional":["Valinnainen"]}'),ee=JSON.parse('{"checkbox-group.validation.required":["Minst ett valg er påkrevd."],"checkbox-group.label.optional":["Valgfri"]}'),te=JSON.parse('{"checkbox-group.validation.required":["Minst ett val krävs."],"checkbox-group.label.optional":["Valfritt"]}');var re=Object.defineProperty,b=(a,e,t,s)=>{for(var r=void 0,o=a.length-1,l;o>=0;o--)(l=a[o])&&(r=l(e,t,r)||r);return r&&re(e,t,r),r};N(X,ee,Z,Q,te);const ae=()=>z._({id:"checkbox-group.validation.required",message:"At least one selection is required.",comment:"Shown when required checkbox group has no selections"});class h extends M(F){#e=!1;#t=!1;#r=!1;static{this.styles=V`
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
  `}render(){const e=this.#h()>0,s=this.required&&!e&&this.#e,r=this.invalid||s,o=r?this.#v():this.helpText,l=o?"checkbox-group__help":void 0,$=this.label?"checkbox-group__label":void 0,O=r?"true":void 0;return i`
      <div class="wrapper">
        ${this.label?i`
              <div class="label" id="${$}">
                <span>${this.label}</span>
                ${this.optional?i`
                      <span class="optional">
                        ${z._({id:"checkbox-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
                      </span>
                    `:L}
              </div>
            `:L}
        <div
          class="checkbox-group"
          role="group"
          aria-labelledby=${q($)}
          aria-describedby=${q(l)}
          aria-invalid=${q(O)}
        >
          <slot></slot>
        </div>
        ${o?i`<div class="${r?"help-text error":"help-text"}" id="${l}">${o}</div>`:L}
      </div>
    `}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.#i),this.addEventListener("invalid",this.#n),this.addEventListener("slotchange",this.#c),this.setValue(null),this.#m()}disconnectedCallback(){this.removeEventListener("change",this.#i),this.removeEventListener("invalid",this.#n),this.removeEventListener("slotchange",this.#c),super.disconnectedCallback()}checkValidity(){return this.#d(),this.internals.checkValidity()}reportValidity(){return this.#s(),this.#d(),this.internals.checkValidity()}focus(e){const t=this.#a();if(t?.focus){t.focus(e);return}HTMLElement.prototype.focus.call(this,e)}#i=()=>{this.#s(),this.#d(),this.requestUpdate()};#n=()=>{this.#s(),this.#d(),this.requestUpdate()};#c=()=>{this.#u(),this.#d(),this.requestUpdate()};#s(){this.#e=!0}#h(){return this.#o().filter(e=>e.checked).length}#u(){if(this.name)for(const e of this.#o()){const t=e;t&&typeof t=="object"&&!t.name&&(t.name=this.name)}}#l(e){for(const t of this.#o())"invalid"in t&&(t.invalid=e)}#a(){return this.#o()[0]}#o(){return this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})??[]}#v(){return ae()}updated(e){super.updated(e),this.#b(e)&&(e.has("name")&&this.#u(),this.#d())}#b(e){return e.has("invalid")||e.has("required")||e.has("helpText")||e.has("name")}#p(e){const t=this.#a();this.internals.setValidity(e," ",t??void 0)}#k(e){if(!(this.hasAttribute("tabindex")&&!this.#r)){if(e){this.tabIndex=0,this.#r=!0;return}this.#r&&(this.removeAttribute("tabindex"),this.#r=!1)}}#d(){this.#m();const e=this.#h()>0,t=this.required&&!e,s=this.invalid,r=t&&this.#e,o=s||r;if(this.#k(o),t){this.#p({valueMissing:!0}),this.#l(o);return}if(s){this.#p({customError:!0}),this.#l(!0);return}this.internals.setValidity({}),this.#l(!1)}#m(){this.#t||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-checkbox-group: "name" is required for form submission.'),this.#t=!0))}}b([n({type:String,reflect:!0})],h.prototype,"label");b([n({type:String,reflect:!0})],h.prototype,"name");b([n({type:Boolean,reflect:!0})],h.prototype,"optional");b([n({type:String,reflect:!0,attribute:"help-text"})],h.prototype,"helpText");b([n({type:Boolean,reflect:!0})],h.prototype,"required");b([n({type:Boolean,reflect:!0})],h.prototype,"invalid");customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",h);const{events:oe,args:se,argTypes:ie}=U("w-checkbox"),ne={title:"Forms/Checkbox",render(a){return i`
      <w-checkbox ${j(J(a))}>Check me</w-checkbox>
    `},args:se,argTypes:ie,parameters:{actions:{handles:oe}}},p={},v={args:{name:"invalidfoo",value:"bar",invalid:!0}},m={args:{name:"indeterminatefoo",value:"bar",indeterminate:!0}},k={args:{name:"indeterminateerrorfoo",value:"bar",indeterminate:!0,invalid:!0}},x={args:{name:"indeterminatedisabledfoo",value:"bar",indeterminate:!0,disabled:!0}},g={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const s=t.currentTarget,r=s.querySelector("[data-status]");if(!r)return;const o=new FormData(s);r.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-checkbox name="newsletter" value="yes" required @invalid=${t=>{t.preventDefault();const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please check the box.")}}>
          Sign up for updates
        </w-checkbox>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},f={args:{name:"disabledfoo",value:"bar",disabled:!0}},w={render:()=>i`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},y={render:()=>i`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},_={render:()=>i`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},S={render:()=>i`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},I={render:()=>i`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `},C={render:()=>i`
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
    `};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'invalidfoo',
    value: 'bar',
    invalid: true
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatefoo',
    value: 'bar',
    indeterminate: true
  }
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminateerrorfoo',
    value: 'bar',
    indeterminate: true,
    invalid: true
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'indeterminatedisabledfoo',
    value: 'bar',
    indeterminate: true,
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabledfoo',
    value: 'bar',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group help-text="Select all that apply" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...y.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" help-text="help text" name="group" >
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" optional help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group label="Label" invalid help-text="help text" name="group">
      <w-checkbox value="foo">Foo</w-checkbox>
      <w-checkbox value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ce=["Default","Invalid","Indeterminate","IndeterminateError","IndeterminateDisabled","CheckboxFormAssociated","Disabled","CheckboxGroup","CheckboxGroupWithHelpText","CheckboxGroupWithLabel","CheckboxGroupWithHelpTextAndLabel","CheckboxGroupWithOptional","CheckboxGroupWithInvalid","CheckboxGroupRequired","CheckboxGroupFormAssociated"],pe=Object.freeze(Object.defineProperty({__proto__:null,CheckboxFormAssociated:g,CheckboxGroup:w,CheckboxGroupFormAssociated:T,CheckboxGroupRequired:E,CheckboxGroupWithHelpText:y,CheckboxGroupWithHelpTextAndLabel:S,CheckboxGroupWithInvalid:C,CheckboxGroupWithLabel:_,CheckboxGroupWithOptional:I,Default:p,Disabled:f,Indeterminate:m,IndeterminateDisabled:x,IndeterminateError:k,Invalid:v,__namedExportsOrder:ce,default:ne},Symbol.toStringTag,{value:"Module"}));export{pe as C,p as D,v as I,f as a,m as b,k as c,x as d,w as e,y as f,_ as g,I as h,E as i,g as j,T as k};
