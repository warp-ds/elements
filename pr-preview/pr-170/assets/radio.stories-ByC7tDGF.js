import{r as w,b as m,l as p,n as r,a as y}from"./iframe-7RbQ2Zc3.js";import{B as b,H as k,R as A}from"./slot-BIR6eMAx.js";import{t as R}from"./toggle-styles-BBe1-kye.js";import{e as E}from"./query-NYTjQBeo.js";import{e as g}from"./class-map-CboGs1Uf.js";import"./preload-helper-Ct5FWWRu.js";var x=Object.defineProperty,u=(n,t,e,i)=>{for(var s=void 0,a=n.length-1,o;a>=0;a--)(o=n[a])&&(s=o(t,e,s)||s);return s&&x(t,e,s),s};class c extends b{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[w,R]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this[e?"setAttribute":"removeAttribute"]("disabled-ui",""),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return m`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}u([p()],c.prototype,"checked");u([p()],c.prototype,"forceDisabled");u([r({reflect:!0})],c.prototype,"form");u([r({reflect:!0})],c.prototype,"value");u([r({reflect:!0})],c.prototype,"appearance");u([r({reflect:!0})],c.prototype,"size");u([r({type:Boolean})],c.prototype,"disabled");customElements.get("w-radio")||customElements.define("w-radio",c);const C="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let D=(n=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(n|=0));for(;n--;)t+=C[e[n]&63];return t};function _(n=""){return`${n}${D()}`}const S=y`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: grayscale;
    cursor: pointer;
    padding-bottom: 0.4rem;
    color: var(--w-s-color-text);
    display: block;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  .button-group {
    display: flex;
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
    gap: 1em;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Radios have the "button" appearance */
  :host fieldset.has-radio-buttons {
    [part~='form-control-input'] {
      gap: 0;
    }
  }
`;var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,d=(n,t,e,i)=>{for(var s=i>1?void 0:i?I(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&B(t,e,s),s};class l extends b{constructor(){super(),this.hasSlotController=new k(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("w-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const i=this.value;this.value=e.value,e.checked=!0;const s=this.getAllRadios();for(const a of s)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[S]}static get validators(){const t=[A({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:_("__w-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}static{this.shadowRootOptions={...b.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const t=this.querySelector(":is(w-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();let e=!1;if(t.forEach((i,s)=>{i.appearance==="button"&&(e=!0),i.setAttribute("size",this.size),i.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),i.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),i.toggleAttribute("data-w-radio-first",s===0),i.toggleAttribute("data-w-radio-inner",s!==0&&s!==t.length-1),i.toggleAttribute("data-w-radio-last",s===t.length-1),i.forceDisabled=this.disabled}),this.hasRadioButtons=e,await Promise.all(t.map(async i=>{await i.updateComplete,!i.disabled&&i.value===this.value?i.checked=!0:i.checked=!1})),this.disabled)t.forEach(i=>{i.tabIndex=-1});else{const i=t.filter(a=>!a.disabled),s=i.find(a=>a.checked);i.length>0&&(s?i.forEach(a=>{a.tabIndex=a.checked?0:-1}):i.forEach((a,o)=>{a.tabIndex=o===0?0:-1})),t.filter(a=>a.disabled).forEach(a=>{a.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(h=>!h.disabled);if(e.length<=0)return;t.preventDefault();const i=this.value,s=e.find(h=>h.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let o=e.indexOf(s)+a;o||(o=0),o<0&&(o=e.length-1),o>e.length-1&&(o=0);const v=e.some(h=>h.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(h=>{h.checked=!1,v||h.setAttribute("tabindex","-1")}),this.value=e[o].value,e[o].checked=!0,v?e[o].shadowRoot?.querySelector("button")?.focus():(e[o].setAttribute("tabindex","0"),e[o].focus()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),i=e.find(o=>o.checked),s=e.find(o=>!o.disabled),a=i||s;a&&a.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,i=this.label?!0:!!t,s=this.hint?!0:!!e;return m`
      <fieldset
        part="form-control"
        class=${g({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":i,"has-radio-buttons":this.hasRadioButtons})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${g({"has-slotted":s})}
          aria-hidden=${s?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}d([p()],l.prototype,"hasRadioButtons",2);d([E("slot:not([name])")],l.prototype,"defaultSlot",2);d([r()],l.prototype,"label",2);d([r({attribute:"hint"})],l.prototype,"hint",2);d([r({reflect:!0})],l.prototype,"name",2);d([r({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([r({reflect:!0})],l.prototype,"orientation",2);d([p()],l.prototype,"value",1);d([r({attribute:"value",reflect:!0})],l.prototype,"defaultValue",2);d([r({reflect:!0})],l.prototype,"size",2);d([r({type:Boolean,reflect:!0})],l.prototype,"required",2);d([r({type:Boolean,attribute:"with-label"})],l.prototype,"withLabel",2);d([r({type:Boolean,attribute:"with-hint"})],l.prototype,"withHint",2);customElements.get("w-radio-group")||customElements.define("w-radio-group",l);const V={title:"Forms/Radio",render:()=>m`
      <w-radio-group label="Group" name="foobar" value="foo">
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},f={};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};const U=["Default"];export{f as Default,U as __namedExportsOrder,V as default};
