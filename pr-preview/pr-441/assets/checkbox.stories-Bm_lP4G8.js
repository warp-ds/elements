import{d as O,f as A,t as h,l as B,T as u,E as T,m as _,r as I,x as n,n as o,i as R,a as S}from"./iframe-Cn4XiedV.js";import{e as D}from"./query-NYTjQBeo.js";import{e as U}from"./class-map-I6zt9NO3.js";import{o as $}from"./if-defined-DmWHOOsf.js";import{B as C,H as V,R as F}from"./slot-C6n1rp1C.js";import"./check-16-6r17E-h_.js";import{t as q}from"./toggle-styles-BeSNkVPF.js";import"./preload-helper-Ct5FWWRu.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=O(class extends A{constructor(t){if(super(t),t.type!==h.PROPERTY&&t.type!==h.ATTRIBUTE&&t.type!==h.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!B(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===u||e===T)return e;const r=t.element,i=t.name;if(t.type===h.PROPERTY){if(e===r[i])return u}else if(t.type===h.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(i))return u}else if(t.type===h.ATTRIBUTE&&r.getAttribute(i)===e+"")return u;return _(t),e}});function v(t,e){const r={waitUntilFirstUpdate:!1,...e};return(i,c)=>{const{update:l}=i,d=Array.isArray(t)?t:[t];i.update=function(f){d.forEach(E=>{const x=E;if(f.has(x)){const w=f.get(x),g=this[x];w!==g&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[c](w,g)}}),l.call(this,f)}}}var P=Object.defineProperty,H=Object.getOwnPropertyDescriptor,a=(t,e,r,i)=>{for(var c=i>1?void 0:i?H(e,r):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(c=(i?d(e,r,c):d(c))||c);return i&&c&&P(e,r,c),c};class s extends C{constructor(){super(...arguments),this.hasSlotController=new V(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[I,q]}static{this.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[F({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("type","checkbox")}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),r=this.hint?!0:!!e,i=!this.checked&&this.indeterminate;return n`
      <label part="base" class="wrapper">
        <span part="control" class="checkbox control">
          <input
            class="input hide-toggle"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${$(this._value)}
            .indeterminate=${y(this.indeterminate)}
            .checked=${y(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />
          ${i?"–":""}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${r?"false":"true"} class="${U({"has-slotted":r})}">
        ${this.hint}
      </slot>
    `}}a([D('input[type="checkbox"]')],s.prototype,"input",2);a([o()],s.prototype,"title",2);a([o({reflect:!0})],s.prototype,"name",2);a([o({reflect:!0})],s.prototype,"value",1);a([o({reflect:!0})],s.prototype,"size",2);a([o({type:Boolean})],s.prototype,"disabled",2);a([o({type:Boolean,reflect:!0})],s.prototype,"indeterminate",2);a([o({type:Boolean,attribute:!1})],s.prototype,"checked",2);a([o({type:Boolean,reflect:!0,attribute:"checked"})],s.prototype,"defaultChecked",2);a([o({reflect:!0})],s.prototype,"form",2);a([o({type:Boolean,reflect:!0})],s.prototype,"required",2);a([o()],s.prototype,"hint",2);a([v("defaultChecked")],s.prototype,"handleDefaultCheckedChange",1);a([v(["checked","indeterminate"])],s.prototype,"handleStateChange",1);a([v("disabled")],s.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",s);class j extends R{static{this.styles=S`
    [part="checkbox-group"] {
      display: grid;
      gap: 16px;
    }
  `}render(){return n`<slot part="checkbox-group"></slot>`}}customElements.get("w-checkbox-group")||customElements.define("w-checkbox-group",j);const N={title:"Forms/Checkbox",render:()=>n`
      <w-checkbox name="foobar" value="foo">Check me</w-checkbox>
    `},p={},b={render:()=>n`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`},m={render:()=>n`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`},k={render:()=>n`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  `};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="invalidfoo" value="bar" invalid>Invalid checkbox</w-checkbox>`\n}',...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: () => html`<w-checkbox name="disabledfoo" value="bar" disabled>Disabled checkbox</w-checkbox>`\n}',...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-checkbox-group>
      <w-checkbox name="group" value="foo">Foo</w-checkbox>
      <w-checkbox name="group" value="bar">Bar</w-checkbox>
    </w-checkbox-group>
  \`
}`,...k.parameters?.docs?.source}}};const Q=["Default","Invalid","Disabled","BunchOfCheckboxes"];export{k as BunchOfCheckboxes,p as Default,m as Disabled,b as Invalid,Q as __namedExportsOrder,N as default};
