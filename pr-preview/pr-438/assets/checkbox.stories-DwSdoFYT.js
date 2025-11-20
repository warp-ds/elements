import{b as E,d as O,t as h,k as A,T as d,E as T,m as _,r as I,x as m,n as c}from"./iframe-C4h4s3eg.js";import{e as R}from"./query-NYTjQBeo.js";import{e as B}from"./class-map-DCzBz25r.js";import{o as S}from"./if-defined-L95DIRl2.js";import{B as x,H as D,R as U}from"./slot--XOnGvnB.js";import"./check-16-BQIWesAv.js";import{t as V}from"./toggle-styles-zQ7e0Ggq.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=E(class extends O{constructor(t){if(super(t),t.type!==h.PROPERTY&&t.type!==h.ATTRIBUTE&&t.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!A(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===d||e===T)return e;const r=t.element,i=t.name;if(t.type===h.PROPERTY){if(e===r[i])return d}else if(t.type===h.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return d}else if(t.type===h.ATTRIBUTE&&r.getAttribute(i)===e+"")return d;return _(t),e}});function v(t,e){const r={waitUntilFirstUpdate:!1,...e};return(i,o)=>{const{update:n}=i,l=Array.isArray(t)?t:[t];i.update=function(f){l.forEach(g=>{const k=g;if(f.has(k)){const C=f.get(k),y=this[k];C!==y&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](C,y)}}),n.call(this,f)}}}var $=Object.defineProperty,q=Object.getOwnPropertyDescriptor,a=(t,e,r,i)=>{for(var o=i>1?void 0:i?q(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(o=(i?l(e,r,o):l(o))||o);return i&&o&&$(e,r,o),o};class s extends x{constructor(){super(...arguments),this.hasSlotController=new D(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[I,V]}static{this.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[U({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("type","checkbox")}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),r=this.hint?!0:!!e,i=!this.checked&&this.indeterminate;return m`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            class="input hide-toggle"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${S(this._value)}
            .indeterminate=${w(this.indeterminate)}
            .checked=${w(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />
          ${i?"–":""}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${r?"false":"true"} class="${B({"has-slotted":r})}">
        ${this.hint}
      </slot>
    `}}a([R('input[type="checkbox"]')],s.prototype,"input",2);a([c()],s.prototype,"title",2);a([c({reflect:!0})],s.prototype,"name",2);a([c({reflect:!0})],s.prototype,"value",1);a([c({reflect:!0})],s.prototype,"size",2);a([c({type:Boolean})],s.prototype,"disabled",2);a([c({type:Boolean,reflect:!0})],s.prototype,"indeterminate",2);a([c({type:Boolean,attribute:!1})],s.prototype,"checked",2);a([c({type:Boolean,reflect:!0,attribute:"checked"})],s.prototype,"defaultChecked",2);a([c({reflect:!0})],s.prototype,"form",2);a([c({type:Boolean,reflect:!0})],s.prototype,"required",2);a([c()],s.prototype,"hint",2);a([v("defaultChecked")],s.prototype,"handleDefaultCheckedChange",1);a([v(["checked","indeterminate"])],s.prototype,"handleStateChange",1);a([v("disabled")],s.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",s);const G={title:"Forms/Checkbox",render:()=>m`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},u={},p={render:()=>m`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`},b={render:()=>m`<w-checkbox name="invalidfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`\n}',...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="invalidfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`\n}',...b.parameters?.docs?.source}}};const J=["Default","Invalid","Disabled"];export{u as Default,b as Disabled,p as Invalid,J as __namedExportsOrder,G as default};
