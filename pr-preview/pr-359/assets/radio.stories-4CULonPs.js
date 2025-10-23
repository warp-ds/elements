import{a as g,x as m,l as b,n as s}from"./iframe-VLPhfu7A.js";import{B as p,H as y,R as k}from"./slot-I0reD-3M.js";import{e as R}from"./query-NYTjQBeo.js";import{e as v}from"./class-map-DAN39-8t.js";import"./preload-helper-Ct5FWWRu.js";const x=g`
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
`;var A=Object.defineProperty,h=(n,t,e,a)=>{for(var o=void 0,r=n.length-1,i;r>=0;r--)(i=n[r])&&(o=i(t,e,o)||o);return o&&A(t,e,o),o};class u extends p{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[x]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this.customStates.set("disabled",e),this.setAttribute("aria-disabled",e?"true":"false"),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return m`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `}}h([b()],u.prototype,"checked");h([b()],u.prototype,"forceDisabled");h([s({reflect:!0})],u.prototype,"form");h([s({reflect:!0})],u.prototype,"value");h([s({reflect:!0})],u.prototype,"appearance");h([s({reflect:!0})],u.prototype,"size");h([s({type:Boolean})],u.prototype,"disabled");const E="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let C=(n=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(n|=0));for(;n--;)t+=E[e[n]&63];return t};function D(n=""){return`${n}${C()}`}const z=g`
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
`;var _=Object.defineProperty,B=Object.getOwnPropertyDescriptor,d=(n,t,e,a)=>{for(var o=a>1?void 0:a?B(t,e):t,r=n.length-1,i;r>=0;r--)(i=n[r])&&(o=(a?i(t,e,o):i(o))||o);return a&&o&&_(t,e,o),o};class l extends p{constructor(){super(),this.hasSlotController=new y(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=t=>{const e=t.target.closest("w-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const a=this.value;this.value=e.value,e.checked=!0;const o=this.getAllRadios();for(const r of o)e!==r&&(r.checked=!1,r.setAttribute("tabindex","-1"));this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[z]}static get validators(){const t=[k({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:D("__w-radio")})})];return[...super.validators,...t]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){typeof t=="number"&&(t=String(t)),this.valueHasChanged=!0,this._value=t}static{this.shadowRootOptions={...p.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const t=this.querySelector(":is(w-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("value"))&&this.syncRadioElements()}formResetCallback(...t){this.value=this.defaultValue,super.formResetCallback(...t),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();let e=!1;if(t.forEach((a,o)=>{a.appearance==="button"&&(e=!0),a.setAttribute("size",this.size),a.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),a.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),a.toggleAttribute("data-w-radio-first",o===0),a.toggleAttribute("data-w-radio-inner",o!==0&&o!==t.length-1),a.toggleAttribute("data-w-radio-last",o===t.length-1),a.forceDisabled=this.disabled}),this.hasRadioButtons=e,await Promise.all(t.map(async a=>{await a.updateComplete,!a.disabled&&a.value===this.value?a.checked=!0:a.checked=!1})),this.disabled)t.forEach(a=>{a.tabIndex=-1});else{const a=t.filter(r=>!r.disabled),o=a.find(r=>r.checked);a.length>0&&(o?a.forEach(r=>{r.tabIndex=r.checked?0:-1}):a.forEach((r,i)=>{r.tabIndex=i===0?0:-1})),t.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(c=>!c.disabled);if(e.length<=0)return;t.preventDefault();const a=this.value,o=e.find(c=>c.checked)??e[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let i=e.indexOf(o)+r;i||(i=0),i<0&&(i=e.length-1),i>e.length-1&&(i=0);const w=e.some(c=>c.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,w||c.setAttribute("tabindex","-1")}),this.value=e[i].value,e[i].checked=!0,w?e[i].shadowRoot?.querySelector("button")?.focus():(e[i].setAttribute("tabindex","0"),e[i].focus()),this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),t.preventDefault()}focus(t){if(this.disabled)return;const e=this.getAllRadios(),a=e.find(i=>i.checked),o=e.find(i=>!i.disabled),r=a||o;r&&r.focus(t)}render(){const t=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,e=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!t,o=this.hint?!0:!!e;return m`
      <fieldset
        part="form-control"
        class=${v({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a,"has-radio-buttons":this.hasRadioButtons})}
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
          class=${v({"has-slotted":o})}
          aria-hidden=${o?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}d([b()],l.prototype,"hasRadioButtons",2);d([R("slot:not([name])")],l.prototype,"defaultSlot",2);d([s()],l.prototype,"label",2);d([s({attribute:"hint"})],l.prototype,"hint",2);d([s({reflect:!0})],l.prototype,"name",2);d([s({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([s({reflect:!0})],l.prototype,"orientation",2);d([b()],l.prototype,"value",1);d([s({attribute:"value",reflect:!0})],l.prototype,"defaultValue",2);d([s({reflect:!0})],l.prototype,"size",2);d([s({type:Boolean,reflect:!0})],l.prototype,"required",2);d([s({type:Boolean,attribute:"with-label"})],l.prototype,"withLabel",2);d([s({type:Boolean,attribute:"with-hint"})],l.prototype,"withHint",2);customElements.get("w-radio")||(customElements.define("w-radio",u),customElements.define("w-radio-group",l));const H={title:"Forms/Radio",render:()=>m`
      <w-radio-group label="Group" name="foobar" value="foo">
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},f={};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};const O=["Default"];export{f as Default,O as __namedExportsOrder,H as default};
