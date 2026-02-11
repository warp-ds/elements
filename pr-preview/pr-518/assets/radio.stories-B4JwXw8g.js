import{a as C,i as I,u as _,n as l,r as x,b as m,m as k,k as A,g as R}from"./iframe-DYb0rld_.js";import{s as q,p as $}from"./utilities-BIbceZT9.js";import{t as O}from"./toggle-styles-D5Uh3kyO.js";import{e as L}from"./query-NYTjQBeo.js";import{u as B}from"./utils-CCcvPjT2.js";import"./preload-helper-Ct5FWWRu.js";const N=C`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`;var z=Object.defineProperty,S=(o,t,e,s)=>{for(var i=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(i=r(t,e,i)||i);return i&&z(t,e,i),i};class V extends I{constructor(){super(),this.#t=!1,this.initialReflectedProperties=new Map,this.customStates={set:(e,s)=>{this.internals?.states&&(s?this.internals.states.add(e):this.internals.states.delete(e))},has:e=>this.internals?.states?this.internals.states.has(e):!1};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);const t=this.constructor;for(const[e,s]of t.elementProperties)s.default==="inherit"&&s.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${s.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[N,...t].map(e=>typeof e=="string"?_(e):e)}#t;attributeChangedCallback(t,e,s){this.#t||(this.constructor.elementProperties.forEach((i,a)=>{i.reflect&&this[a]!=null&&this.initialReflectedProperties.set(a,this[a])}),this.#t=!0),super.attributeChangedCallback(t,e,s)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,s)=>{t.has(s)&&this[s]==null&&(this[s]=e)})}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}}S([l()],V.prototype,"dir");S([l()],V.prototype,"lang");const H=()=>({observedAttributes:["custom-error"],checkValidity(o){const t={message:"",isValid:!0,invalidKeys:[]};return o.customError&&(t.message=o.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}});class P extends Event{constructor(){super("w-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}var U=Object.defineProperty,T=Object.getOwnPropertyDescriptor,p=(o,t,e,s)=>{for(var i=s>1?void 0:s?T(t,e):t,a=o.length-1,r;a>=0;a--)(r=o[a])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&U(t,e,i),i};class h extends V{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new P))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static{this.formAssociated=!0}static get validators(){return[H()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const s of e.observedAttributes)t.add(s);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const s=new FormData;for(const i of e)s.append(this.name,i);this.setValue(s,s)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],s=t[1];let i=t[2];i||(i=this.validationTarget),this.internals.setValidity(e,s,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,s=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&s),this.customStates.set("user-valid",e&&s)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,s]=t;this.internals.setFormValue(e,s)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},s=this.validationTarget||this.input||void 0;let i="";for(const a of t){const{isValid:r,message:b,invalidKeys:u}=a.checkValidity(this);r||(i||(i=b),u?.length>=0&&u.forEach(D=>e[D]=!0))}i||(i=this.validationMessage),this.setValidity(e,i,s)}}p([l({reflect:!0})],h.prototype,"name",2);p([l({type:Boolean})],h.prototype,"disabled",2);p([l({state:!0,attribute:!1})],h.prototype,"valueHasChanged",2);p([l({state:!0,attribute:!1})],h.prototype,"hasInteracted",2);p([l({attribute:"custom-error",reflect:!0})],h.prototype,"customError",2);p([l({attribute:!1,state:!0,type:Object})],h.prototype,"validity",1);var j=Object.defineProperty,f=(o,t,e,s)=>{for(var i=void 0,a=o.length-1,r;a>=0;a--)(r=o[a])&&(i=r(t,e,i)||i);return i&&j(t,e,i),i};class c extends h{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[x,O]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this[e?"setAttribute":"removeAttribute"]("disabled-ui",""),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return m`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}f([k()],c.prototype,"checked");f([k()],c.prototype,"forceDisabled");f([l({reflect:!0})],c.prototype,"form");f([l({reflect:!0})],c.prototype,"value");f([l({reflect:!0})],c.prototype,"appearance");f([l({reflect:!0})],c.prototype,"size");f([l({type:Boolean})],c.prototype,"disabled");customElements.get("w-radio")||customElements.define("w-radio",c);const M=(o={})=>{let{validationElement:t,validationProperty:e}=o;t||(t=Object.assign(document.createElement("input"),{required:!0})),e||(e="value");const s={observedAttributes:["required"],message:t.validationMessage,checkValidity(i){const a={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[e]&&(a.message=typeof s.message=="function"?s.message(i):s.message||"",a.isValid=!1,a.invalidKeys.push("valueMissing")),a}};return s};class F{constructor(t,...e){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="w-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot?.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot?.removeEventListener("slotchange",this.handleSlotChange)}}const K=C`
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
`;var G=Object.defineProperty,W=Object.getOwnPropertyDescriptor,d=(o,t,e,s)=>{for(var i=s>1?void 0:s?W(t,e):t,a=o.length-1,r;a>=0;a--)(r=o[a])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&G(t,e,i),i};class n extends h{constructor(){super(),this.hasSlotController=new F(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("w-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const s=this.value;this.value=e.value,e.checked=!0;const i=this.getAllRadios();for(const a of i)e!==a&&(a.checked=!1,a.setAttribute("tabindex","-1"));this.value!==s&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[K]}static get validators(){const t=[M({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:B("__w-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const t=this.querySelector(":is(w-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();let e=!1;if(t.forEach((s,i)=>{s.appearance==="button"&&(e=!0),s.setAttribute("size",this.size),s.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),s.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),s.toggleAttribute("data-w-radio-first",i===0),s.toggleAttribute("data-w-radio-inner",i!==0&&i!==t.length-1),s.toggleAttribute("data-w-radio-last",i===t.length-1),s.forceDisabled=this.disabled}),this.hasRadioButtons=e,await Promise.all(t.map(async s=>{await s.updateComplete,!s.disabled&&s.value===this.value?s.checked=!0:s.checked=!1})),this.disabled)t.forEach(s=>{s.tabIndex=-1});else{const s=t.filter(a=>!a.disabled),i=s.find(a=>a.checked);s.length>0&&(i?s.forEach(a=>{a.tabIndex=a.checked?0:-1}):s.forEach((a,r)=>{a.tabIndex=r===0?0:-1})),t.filter(a=>a.disabled).forEach(a=>{a.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(u=>!u.disabled);if(e.length<=0)return;t.preventDefault();const s=this.value,i=e.find(u=>u.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let r=e.indexOf(i)+a;r||(r=0),r<0&&(r=e.length-1),r>e.length-1&&(r=0);const b=e.some(u=>u.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(u=>{u.checked=!1,b||u.setAttribute("tabindex","-1")}),this.value=e[r].value,e[r].checked=!0,b?e[r].shadowRoot?.querySelector("button")?.focus():(e[r].setAttribute("tabindex","0"),e[r].focus()),this.value!==s&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),s=e.find(r=>r.checked),i=e.find(r=>!r.disabled),a=s||i;a&&a.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,s=this.label?!0:!!t,i=this.hint?!0:!!e;return m`
      <fieldset
        part="form-control"
        class=${A({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":s,"has-radio-buttons":this.hasRadioButtons})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${A({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}d([k()],n.prototype,"hasRadioButtons",2);d([L("slot:not([name])")],n.prototype,"defaultSlot",2);d([l()],n.prototype,"label",2);d([l({attribute:"hint"})],n.prototype,"hint",2);d([l({reflect:!0})],n.prototype,"name",2);d([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);d([l({reflect:!0})],n.prototype,"orientation",2);d([k()],n.prototype,"value",1);d([l({attribute:"value",reflect:!0})],n.prototype,"defaultValue",2);d([l({reflect:!0})],n.prototype,"size",2);d([l({type:Boolean,reflect:!0})],n.prototype,"required",2);d([l({type:Boolean,attribute:"with-label"})],n.prototype,"withLabel",2);d([l({type:Boolean,attribute:"with-hint"})],n.prototype,"withHint",2);customElements.get("w-radio-group")||customElements.define("w-radio-group",n);R("w-radio");R("w-radio-group");const et={title:"Forms/Radio",render:o=>m`
      <w-radio-group ${q($(o))}>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},v={args:{label:"Group",name:"foobar",value:"foo"}},g={args:{label:"Disabled",disabled:!0}},y={args:{},render(){return m`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button>click me</button>
      </form>
    `}},w={args:{disabled:!0}},E={args:{},render(){return m`
      <w-radio-group>
        <w-radio value="foo" disabled appearance="button">disabled</w-radio>
        <w-radio value="bar" appearance="clickable">not disabled</w-radio>
      </w-radio-group>
    `}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar',
    value: 'foo'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button>click me</button>
      </form>
    \`;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group>
        <w-radio value="foo" disabled appearance="button">disabled</w-radio>
        <w-radio value="bar" appearance="clickable">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...E.parameters?.docs?.source}}};const st=["Default","Disabled","Required","DisabledGroup","DisabledRadio"];export{v as Default,g as Disabled,w as DisabledGroup,E as DisabledRadio,y as Required,st as __namedExportsOrder,et as default};
