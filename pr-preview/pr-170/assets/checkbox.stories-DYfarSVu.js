import{b as w,d as E,t as n,l as O,T as d,E as x,m as A,r as T,x as v,n as h}from"./iframe-jb_0V0qP.js";import{e as _}from"./query-NYTjQBeo.js";import{e as R}from"./class-map-BdONUqUz.js";import{o as B}from"./if-defined-D_cAJns_.js";import{B as C,H as U,R as S}from"./slot-4GoY6yqc.js";import"./check-16-CYpHsHzr.js";import{t as I}from"./toggle-styles-BR8Dt9b-.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=w(class extends E{constructor(t){if(super(t),t.type!==n.PROPERTY&&t.type!==n.ATTRIBUTE&&t.type!==n.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!O(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===d||e===x)return e;const r=t.element,a=t.name;if(t.type===n.PROPERTY){if(e===r[a])return d}else if(t.type===n.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(a))return d}else if(t.type===n.ATTRIBUTE&&r.getAttribute(a)===e+"")return d;return A(t),e}});function m(t,e){const r={waitUntilFirstUpdate:!1,...e};return(a,l)=>{const{update:c}=a,o=Array.isArray(t)?t:[t];a.update=function(p){o.forEach(g=>{const f=g;if(p.has(f)){const k=p.get(f),b=this[f];k!==b&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[l](k,b)}}),c.call(this,p)}}}var V=Object.defineProperty,$=Object.getOwnPropertyDescriptor,i=(t,e,r,a)=>{for(var l=a>1?void 0:a?$(e,r):e,c=t.length-1,o;c>=0;c--)(o=t[c])&&(l=(a?o(e,r,l):o(l))||l);return a&&l&&V(e,r,l),l};class s extends C{constructor(){super(...arguments),this.hasSlotController=new U(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[T,I]}static{this.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[S({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("type","checkbox")}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),r=this.hint?!0:!!e,a=!this.checked&&this.indeterminate;return v`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            class="input hide-toggle"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this._value)}
            .indeterminate=${y(this.indeterminate)}
            .checked=${y(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />
          ${a?"–":""}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${r?"false":"true"} class="${R({"has-slotted":r})}">
        ${this.hint}
      </slot>
    `}}i([_('input[type="checkbox"]')],s.prototype,"input",2);i([h()],s.prototype,"title",2);i([h({reflect:!0})],s.prototype,"name",2);i([h({reflect:!0})],s.prototype,"value",1);i([h({reflect:!0})],s.prototype,"size",2);i([h({type:Boolean})],s.prototype,"disabled",2);i([h({type:Boolean,reflect:!0})],s.prototype,"indeterminate",2);i([h({type:Boolean,attribute:!1})],s.prototype,"checked",2);i([h({type:Boolean,reflect:!0,attribute:"checked"})],s.prototype,"defaultChecked",2);i([h({reflect:!0})],s.prototype,"form",2);i([h({type:Boolean,reflect:!0})],s.prototype,"required",2);i([h()],s.prototype,"hint",2);i([m("defaultChecked")],s.prototype,"handleDefaultCheckedChange",1);i([m(["checked","indeterminate"])],s.prototype,"handleStateChange",1);i([m("disabled")],s.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",s);const Y={title:"Forms/Checkbox",render:()=>v`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},u={};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};const W=["Default"];export{u as Default,W as __namedExportsOrder,Y as default};
