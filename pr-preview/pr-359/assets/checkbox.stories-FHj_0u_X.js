import{b as C,d as x,t as c,k as E,T as d,E as O,m as T,a as _,x as y,n as s}from"./iframe-VLPhfu7A.js";import{e as A}from"./query-NYTjQBeo.js";import{e as R}from"./class-map-DAN39-8t.js";import{o as B}from"./if-defined-BkmMlLZh.js";import{B as v,H as U,R as $}from"./slot-I0reD-3M.js";import"./check-16-D72agutz.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=C(class extends x{constructor(t){if(super(t),t.type!==c.PROPERTY&&t.type!==c.ATTRIBUTE&&t.type!==c.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!E(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===d||e===O)return e;const a=t.element,o=t.name;if(t.type===c.PROPERTY){if(e===a[o])return d}else if(t.type===c.BOOLEAN_ATTRIBUTE){if(!!e===a.hasAttribute(o))return d}else if(t.type===c.ATTRIBUTE&&a.getAttribute(o)===e+"")return d;return T(t),e}});function f(t,e){const a={waitUntilFirstUpdate:!1,...e};return(o,n)=>{const{update:l}=o,h=Array.isArray(t)?t:[t];o.update=function(p){h.forEach(w=>{const b=w;if(p.has(b)){const m=p.get(b),k=this[b];m!==k&&(!a.waitUntilFirstUpdate||this.hasUpdated)&&this[n](m,k)}}),l.call(this,p)}}}const q=_`
:host {
  display: block;
  user-select: none;
  -webkit-user-select: none;
}

[part~='control'] {
  position: relative;
  width: 2rem;
  height: 2rem;
  border-color: var(--w-s-color-border);
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  background-color: var(--w-s-color-background);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  margin-right: 0.8rem;
  text-align: center;
  line-height: var(--w-line-height-xs);
  font-size: var(--w-font-size-m);
}

[part~='base'] {
  display: flex;
  align-items: center;
  position: relative;
  color: currentColor;
  vertical-align: middle;
  cursor: pointer;
}

[part~='label'] {
  display: block;
  font-size: var(--w-font-size-m);
  line-height: var(--w-line-height-m);
  user-select: none;
  cursor: pointer;
  padding: 0.2rem 0;
}

label:hover [part~='control']:not(:has(:checked, :indeterminate)) {
  background-color: var(--w-s-color-background-hover);
  border-color: var(--w-s-color-border-primary);
}

label:hover [part~='control']:has(:checked, :indeterminate) {
  border-color: var(--w-s-color-border-primary-hover);
  background-color: var(--w-s-color-background-primary-hover);
}

[part~='control']:has(:checked, :indeterminate) {
  color: var(--checked-icon-color, white);
  border-color: var(--w-s-color-border-primary);
  background-color: var(--w-s-color-background-primary);
}

[part~='control']:has(:indeterminate) {
  font-weight: 700;
}

[part~='control']:has(:invalid) {
  border-color: var(--w-s-color-border-negative);
}

[part~='control']:has(:invalid):hover {
  background-color: var(--w-s-color-background-negative-subtle-hover);
}

[part~='control']:has(:checked):has(:invalid) {
  background-color: var(--w-s-color-background-negative);
}

[part~='control']:has(:checked) {
  background-image: var(--w-icon-toggle-checked);
  background-position: center;
}

/* Focus */
[part~='control']:has(> input:focus-visible:not(:disabled)) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/* Disabled */
:host [part~='base']:has(input:disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

input {
  position: absolute;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
}

[part~='icon'] {
  display: flex;

  input:not(:checked, :indeterminate) + & {
    visibility: hidden;
  }
}

:host([required]) [part~='label']::after {
  content: var(--wa-form-control-required-content);
  color: var(--wa-form-control-required-content-color);
  margin-inline-start: var(--wa-form-control-required-content-offset);
}`;var S=Object.defineProperty,V=Object.getOwnPropertyDescriptor,i=(t,e,a,o)=>{for(var n=o>1?void 0:o?V(e,a):e,l=t.length-1,h;l>=0;l--)(h=t[l])&&(n=(o?h(e,a,n):h(n))||n);return o&&n&&S(e,a,n),n};class r extends v{constructor(){super(...arguments),this.hasSlotController=new U(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[q]}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[$({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),a=this.hint?!0:!!e,o=!this.checked&&this.indeterminate;return y`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this._value)}
            .indeterminate=${g(this.indeterminate)}
            .checked=${g(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />
          ${o?"–":""}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${a?"false":"true"} class="${R({"has-slotted":a})}">
        ${this.hint}
      </slot>
    `}}i([A('input[type="checkbox"]')],r.prototype,"input",2);i([s()],r.prototype,"title",2);i([s({reflect:!0})],r.prototype,"name",2);i([s({reflect:!0})],r.prototype,"value",1);i([s({reflect:!0})],r.prototype,"size",2);i([s({type:Boolean})],r.prototype,"disabled",2);i([s({type:Boolean,reflect:!0})],r.prototype,"indeterminate",2);i([s({type:Boolean,attribute:!1})],r.prototype,"checked",2);i([s({type:Boolean,reflect:!0,attribute:"checked"})],r.prototype,"defaultChecked",2);i([s({reflect:!0})],r.prototype,"form",2);i([s({type:Boolean,reflect:!0})],r.prototype,"required",2);i([s()],r.prototype,"hint",2);i([f("defaultChecked")],r.prototype,"handleDefaultCheckedChange",1);i([f(["checked","indeterminate"])],r.prototype,"handleStateChange",1);i([f("disabled")],r.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",r);const L={title:"Forms/Checkbox",render:()=>y`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},u={};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};const Y=["Default"];export{u as Default,Y as __namedExportsOrder,L as default};
