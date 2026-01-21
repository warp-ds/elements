import{r as E,b as p,l as v,n as l,a as D,g as A}from"./iframe-BGr96k-y.js";import{s as x,p as C}from"./utilities-X1-Ht2NY.js";import{B as y}from"./form-associated-element-BVTL5OdW.js";import{t as S}from"./toggle-styles-BPtVUbaS.js";import{e as _}from"./query-NYTjQBeo.js";import{e as R}from"./class-map-CJZcKV56.js";import{H as q,R as $}from"./slot-CioHTnw0.js";import"./preload-helper-Ct5FWWRu.js";var B=Object.defineProperty,h=(i,e,t,a)=>{for(var r=void 0,o=i.length-1,s;o>=0;o--)(s=i[o])&&(r=s(e,t,r)||r);return r&&B(e,t,r),r};class c extends y{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[E,S]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this[t?"setAttribute":"removeAttribute"]("disabled-ui",""),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}h([v()],c.prototype,"checked");h([v()],c.prototype,"forceDisabled");h([l({reflect:!0})],c.prototype,"form");h([l({reflect:!0})],c.prototype,"value");h([l({reflect:!0})],c.prototype,"appearance");h([l({reflect:!0})],c.prototype,"size");h([l({type:Boolean})],c.prototype,"disabled");customElements.get("w-radio")||customElements.define("w-radio",c);const I="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let L=(i=21)=>{let e="",t=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)e+=I[t[i]&63];return e};function H(i=""){return`${i}${L()}`}const z=D`
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
`;var O=Object.defineProperty,V=Object.getOwnPropertyDescriptor,d=(i,e,t,a)=>{for(var r=a>1?void 0:a?V(e,t):e,o=i.length-1,s;o>=0;o--)(s=i[o])&&(r=(a?s(e,t,r):s(r))||r);return a&&r&&O(e,t,r),r};class n extends y{constructor(){super(),this.hasSlotController=new q(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("w-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const a=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const o of r)t!==o&&(o.checked=!1,o.setAttribute("tabindex","-1"));this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[z]}static get validators(){const e=[$({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:H("__w-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}static{this.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();let t=!1;if(e.forEach((a,r)=>{a.appearance==="button"&&(t=!0),a.setAttribute("size",this.size),a.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),a.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),a.toggleAttribute("data-w-radio-first",r===0),a.toggleAttribute("data-w-radio-inner",r!==0&&r!==e.length-1),a.toggleAttribute("data-w-radio-last",r===e.length-1),a.forceDisabled=this.disabled}),this.hasRadioButtons=t,await Promise.all(e.map(async a=>{await a.updateComplete,!a.disabled&&a.value===this.value?a.checked=!0:a.checked=!1})),this.disabled)e.forEach(a=>{a.tabIndex=-1});else{const a=e.filter(o=>!o.disabled),r=a.find(o=>o.checked);a.length>0&&(r?a.forEach(o=>{o.tabIndex=o.checked?0:-1}):a.forEach((o,s)=>{o.tabIndex=s===0?0:-1})),e.filter(o=>o.disabled).forEach(o=>{o.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(u=>!u.disabled);if(t.length<=0)return;e.preventDefault();const a=this.value,r=t.find(u=>u.checked)??t[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=t.indexOf(r)+o;s||(s=0),s<0&&(s=t.length-1),s>t.length-1&&(s=0);const k=t.some(u=>u.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(u=>{u.checked=!1,k||u.setAttribute("tabindex","-1")}),this.value=t[s].value,t[s].checked=!0,k?t[s].shadowRoot?.querySelector("button")?.focus():(t[s].setAttribute("tabindex","0"),t[s].focus()),this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),a=t.find(s=>s.checked),r=t.find(s=>!s.disabled),o=a||r;o&&o.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
      <fieldset
        part="form-control"
        class=${R({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a,"has-radio-buttons":this.hasRadioButtons})}
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
          class=${R({"has-slotted":r})}
          aria-hidden=${r?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}d([v()],n.prototype,"hasRadioButtons",2);d([_("slot:not([name])")],n.prototype,"defaultSlot",2);d([l()],n.prototype,"label",2);d([l({attribute:"hint"})],n.prototype,"hint",2);d([l({reflect:!0})],n.prototype,"name",2);d([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);d([l({reflect:!0})],n.prototype,"orientation",2);d([v()],n.prototype,"value",1);d([l({attribute:"value",reflect:!0})],n.prototype,"defaultValue",2);d([l({reflect:!0})],n.prototype,"size",2);d([l({type:Boolean,reflect:!0})],n.prototype,"required",2);d([l({type:Boolean,attribute:"with-label"})],n.prototype,"withLabel",2);d([l({type:Boolean,attribute:"with-hint"})],n.prototype,"withHint",2);customElements.get("w-radio-group")||customElements.define("w-radio-group",n);A("w-radio");A("w-radio-group");const N={title:"Forms/Radio",render:i=>p`
      <w-radio-group ${x(C(i))}>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},b={args:{label:"Group",name:"foobar",value:"foo"}},f={args:{label:"Disabled",disabled:!0}},m={args:{},render(){return p`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button>click me</button>
      </form>
    `}},g={args:{disabled:!0}},w={args:{},render(){return p`
      <w-radio-group>
        <w-radio value="foo" disabled appearance="button">disabled</w-radio>
        <w-radio value="bar" appearance="clickable">not disabled</w-radio>
      </w-radio-group>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar',
    value: 'foo'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group>
        <w-radio value="foo" disabled appearance="button">disabled</w-radio>
        <w-radio value="bar" appearance="clickable">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...w.parameters?.docs?.source}}};const J=["Default","Disabled","Required","DisabledGroup","DisabledRadio"];export{b as Default,f as Disabled,g as DisabledGroup,w as DisabledRadio,m as Required,J as __namedExportsOrder,N as default};
