import{a as g,i as C,y as A,n as l,x as w,k as v}from"./iframe-Br4v-q0T.js";import{e as R}from"./query-NYTjQBeo.js";import{e as E}from"./class-map-x4VmMOpv.js";import"./preload-helper-Ct5FWWRu.js";const x=g`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`;var S=Object.defineProperty,k=(o,t,e,a)=>{for(var s=void 0,i=o.length-1,r;i>=0;i--)(r=o[i])&&(s=r(t,e,s)||s);return s&&S(t,e,s),s};class y extends C{constructor(){super(),this.#t=!1,this.initialReflectedProperties=new Map,this.customStates={set:(e,a)=>{this.internals?.states&&(a?this.internals.states.add(e):this.internals.states.delete(e))},has:e=>this.internals?.states?this.internals.states.has(e):!1};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);const t=this.constructor;for(const[e,a]of t.elementProperties)a.default==="inherit"&&a.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${a.initial}`,!0)}static get styles(){const t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[x,...t].map(e=>typeof e=="string"?A(e):e)}#t;attributeChangedCallback(t,e,a){this.#t||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),this.#t=!0),super.attributeChangedCallback(t,e,a)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,a)=>{t.has(a)&&this[a]==null&&(this[a]=e)})}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}}k([l()],y.prototype,"dir");k([l()],y.prototype,"lang");const I=()=>({observedAttributes:["custom-error"],checkValidity(o){const t={message:"",isValid:!0,invalidKeys:[]};return o.customError&&(t.message=o.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}});class D extends Event{constructor(){super("w-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}var _=Object.defineProperty,q=Object.getOwnPropertyDescriptor,p=(o,t,e,a)=>{for(var s=a>1?void 0:a?q(t,e):t,i=o.length-1,r;i>=0;i--)(r=o[i])&&(s=(a?r(t,e,s):r(s))||s);return a&&s&&_(t,e,s),s};class h extends y{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new D))},this.handleInteraction=t=>{const e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static{this.formAssociated=!0}static get validators(){return[I()]}static get observedAttributes(){const t=new Set(super.observedAttributes||[]);for(const e of this.validators)if(e.observedAttributes)for(const a of e.observedAttributes)t.add(a);return[...t]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")){const e=this.value;if(Array.isArray(e)){if(this.name){const a=new FormData;for(const s of e)a.append(this.name,s);this.setValue(a,a)}}else this.setValue(e,e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){const e=t[0],a=t[1];let s=t[2];s||(s=this.validationTarget),this.internals.setValidity(e,a,s||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const t=!!this.required,e=this.internals.validity.valid,a=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&a),this.customStates.set("user-valid",e&&a)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...t){const[e,a]=t;this.internals.setFormValue(e,a)}get allValidators(){const t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const t=this.allValidators;if(!t?.length)return;const e={customError:!!this.customError},a=this.validationTarget||this.input||void 0;let s="";for(const i of t){const{isValid:r,message:b,invalidKeys:c}=i.checkValidity(this);r||(s||(s=b),c?.length>=0&&c.forEach(V=>e[V]=!0))}s||(s=this.validationMessage),this.setValidity(e,s,a)}}p([l({reflect:!0})],h.prototype,"name",2);p([l({type:Boolean})],h.prototype,"disabled",2);p([l({state:!0,attribute:!1})],h.prototype,"valueHasChanged",2);p([l({state:!0,attribute:!1})],h.prototype,"hasInteracted",2);p([l({attribute:"custom-error",reflect:!0})],h.prototype,"customError",2);p([l({attribute:!1,state:!0,type:Object})],h.prototype,"validity",1);const $=g`
  :host {
    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default appearance */
  :host([appearance='default']) .control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size, 2rem);
    height: var(--wa-form-control-toggle-size, 2rem);
    border-color: var(--wa-form-control-border-color, gray);
    border-radius: 50%;
    border-style: var(--wa-form-control-border-style, solid);
    border-width: var(--wa-form-control-border-width, 1px);
    background-color: var(--wa-form-control-background-color, white);
    color: transparent;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    margin-inline-end: 0.5em;
  }

  :host([appearance='clickable']) .control {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  /* Checked */
  :host(:state(checked)):not(:host([appearance='clickable'])) .control {
    /* color: var(--checked-icon-color, white); */
    border-color: var(--wa-form-control-activated-color, blue);
    background-color: var(--wa-form-control-background-color, white);
    border-width: 0.6rem;
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  :host([appearance='clickable']:focus-visible) .control {
    outline-offset: -4px;
    border-radius: 8px;
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Button appearance */
  :host([appearance='button']) {
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  :host([appearance='button']) .control {
    display: none;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Remove inner borders and handle overlap */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`;var z=Object.defineProperty,f=(o,t,e,a)=>{for(var s=void 0,i=o.length-1,r;i>=0;i--)(r=o[i])&&(s=r(t,e,s)||s);return s&&z(t,e,s),s};class u extends h{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[$]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `}}f([v()],u.prototype,"checked");f([v()],u.prototype,"forceDisabled");f([l({reflect:!0})],u.prototype,"form");f([l({reflect:!0})],u.prototype,"value");f([l({reflect:!0})],u.prototype,"appearance");f([l({reflect:!0})],u.prototype,"size");f([l({type:Boolean})],u.prototype,"disabled");const O="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let L=(o=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(o|=0));for(;o--;)t+=O[e[o]&63];return t};function B(o=""){return`${o}${L()}`}const N=g`
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
    gap: 0.75em;
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
`,H=(o={})=>{let{validationElement:t,validationProperty:e}=o;t||(t=Object.assign(document.createElement("input"),{required:!0})),e||(e="value");const a={observedAttributes:["required"],message:t.validationMessage,checkValidity(s){const i={message:"",isValid:!0,invalidKeys:[]};return(s.required??s.hasAttribute("required"))&&!s[e]&&(i.message=typeof a.message=="function"?a.message(s):a.message||"",i.isValid=!1,i.invalidKeys.push("valueMissing")),i}};return a};class U{constructor(t,...e){this.slotNames=[],this.handleSlotChange=a=>{const s=a.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="w-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}var j=Object.defineProperty,P=Object.getOwnPropertyDescriptor,d=(o,t,e,a)=>{for(var s=a>1?void 0:a?P(t,e):t,i=o.length-1,r;i>=0;i--)(r=o[i])&&(s=(a?r(t,e,s):r(s))||s);return a&&s&&j(t,e,s),s};class n extends h{constructor(){super(),this.hasSlotController=new U(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("w-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const a=this.value;this.value=e.value,e.checked=!0;const s=this.getAllRadios();for(const i of s)e!==i&&(i.checked=!1,i.setAttribute("tabindex","-1"));this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[N]}static get validators(){const t=[H({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:B("__w-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}static{this.shadowRootOptions={...h.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const t=this.querySelector(":is(w-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();let e=!1;if(t.forEach((a,s)=>{a.appearance==="button"&&(e=!0),a.setAttribute("size",this.size),a.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),a.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),a.toggleAttribute("data-w-radio-first",s===0),a.toggleAttribute("data-w-radio-inner",s!==0&&s!==t.length-1),a.toggleAttribute("data-w-radio-last",s===t.length-1),a.forceDisabled=this.disabled}),this.hasRadioButtons=e,await Promise.all(t.map(async a=>{await a.updateComplete,!a.disabled&&a.value===this.value?a.checked=!0:a.checked=!1})),this.disabled)t.forEach(a=>{a.tabIndex=-1});else{const a=t.filter(i=>!i.disabled),s=a.find(i=>i.checked);a.length>0&&(s?a.forEach(i=>{i.tabIndex=i.checked?0:-1}):a.forEach((i,r)=>{i.tabIndex=r===0?0:-1})),t.filter(i=>i.disabled).forEach(i=>{i.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(c=>!c.disabled);if(e.length<=0)return;t.preventDefault();const a=this.value,s=e.find(c=>c.checked)??e[0],i=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let r=e.indexOf(s)+i;r||(r=0),r<0&&(r=e.length-1),r>e.length-1&&(r=0);const b=e.some(c=>c.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,b||c.setAttribute("tabindex","-1")}),this.value=e[r].value,e[r].checked=!0,b?e[r].shadowRoot.querySelector("button").focus():(e[r].setAttribute("tabindex","0"),e[r].focus()),this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),a=e.find(r=>r.checked),s=e.find(r=>!r.disabled),i=a||s;i&&i.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!t,s=this.hint?!0:!!e;return w`
      <fieldset
        part="form-control"
        class=${E({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a,"has-radio-buttons":this.hasRadioButtons})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${E({"has-slotted":s})}
          aria-hidden=${s?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}d([v()],n.prototype,"hasRadioButtons",2);d([R("slot:not([name])")],n.prototype,"defaultSlot",2);d([l()],n.prototype,"label",2);d([l({attribute:"hint"})],n.prototype,"hint",2);d([l({reflect:!0})],n.prototype,"name",2);d([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);d([l({reflect:!0})],n.prototype,"orientation",2);d([v()],n.prototype,"value",1);d([l({attribute:"value",reflect:!0})],n.prototype,"defaultValue",2);d([l({reflect:!0})],n.prototype,"size",2);d([l({type:Boolean,reflect:!0})],n.prototype,"required",2);d([l({type:Boolean,attribute:"with-label"})],n.prototype,"withLabel",2);d([l({type:Boolean,attribute:"with-hint"})],n.prototype,"withHint",2);customElements.get("w-radio")||(customElements.define("w-radio",u),customElements.define("w-radio-group",n));const W={title:"Forms/Radio",render:()=>w`
      <w-radio-group label="Group" name="foobar" value="foo">
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},m={};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};const G=["Default"];export{m as Default,G as __namedExportsOrder,W as default};
