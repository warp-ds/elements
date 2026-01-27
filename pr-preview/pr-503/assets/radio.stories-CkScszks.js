import{r as E,b as p,l as v,n as i,a as D,g as A}from"./iframe-BGeWIGj7.js";import{s as x,p as C}from"./utilities-B89Z5-ni.js";import{t as S}from"./toggle-styles-Bm2ejicw.js";import{B as y,H as _,R as q}from"./slot-VW1Wj8V3.js";import{e as B}from"./query-NYTjQBeo.js";import{e as R}from"./class-map--hdDVgLU.js";import{u as I}from"./utils-CCcvPjT2.js";import"./preload-helper-Ct5FWWRu.js";var L=Object.defineProperty,h=(d,e,t,a)=>{for(var r=void 0,s=d.length-1,o;s>=0;s--)(o=d[s])&&(r=o(e,t,r)||r);return r&&L(e,t,r),r};class u extends y{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[E,S]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const t=this.disabled||this.forceDisabled;this.customStates.set("disabled",t),this[t?"setAttribute":"removeAttribute"]("disabled-ui",""),this.setAttribute("aria-disabled",t?"true":"false"),t?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return p`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}h([v()],u.prototype,"checked");h([v()],u.prototype,"forceDisabled");h([i({reflect:!0})],u.prototype,"form");h([i({reflect:!0})],u.prototype,"value");h([i({reflect:!0})],u.prototype,"appearance");h([i({reflect:!0})],u.prototype,"size");h([i({type:Boolean})],u.prototype,"disabled");customElements.get("w-radio")||customElements.define("w-radio",u);const $=D`
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
`;var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,n=(d,e,t,a)=>{for(var r=a>1?void 0:a?H(e,t):e,s=d.length-1,o;s>=0;s--)(o=d[s])&&(r=(a?o(e,t,r):o(r))||r);return a&&r&&z(e,t,r),r};class l extends y{constructor(){super(),this.hasSlotController=new _(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const t=e.target.closest("w-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const a=this.value;this.value=t.value,t.checked=!0;const r=this.getAllRadios();for(const s of r)t!==s&&(s.checked=!1,s.setAttribute("tabindex","-1"));this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[$]}static get validators(){const e=[q({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:I("__w-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}static{this.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();let t=!1;if(e.forEach((a,r)=>{a.appearance==="button"&&(t=!0),a.setAttribute("size",this.size),a.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),a.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),a.toggleAttribute("data-w-radio-first",r===0),a.toggleAttribute("data-w-radio-inner",r!==0&&r!==e.length-1),a.toggleAttribute("data-w-radio-last",r===e.length-1),a.forceDisabled=this.disabled}),this.hasRadioButtons=t,await Promise.all(e.map(async a=>{await a.updateComplete,!a.disabled&&a.value===this.value?a.checked=!0:a.checked=!1})),this.disabled)e.forEach(a=>{a.tabIndex=-1});else{const a=e.filter(s=>!s.disabled),r=a.find(s=>s.checked);a.length>0&&(r?a.forEach(s=>{s.tabIndex=s.checked?0:-1}):a.forEach((s,o)=>{s.tabIndex=o===0?0:-1})),e.filter(s=>s.disabled).forEach(s=>{s.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios().filter(c=>!c.disabled);if(t.length<=0)return;e.preventDefault();const a=this.value,r=t.find(c=>c.checked)??t[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let o=t.indexOf(r)+s;o||(o=0),o<0&&(o=t.length-1),o>t.length-1&&(o=0);const k=t.some(c=>c.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(c=>{c.checked=!1,k||c.setAttribute("tabindex","-1")}),this.value=t[o].value,t[o].checked=!0,k?t[o].shadowRoot?.querySelector("button")?.focus():(t[o].setAttribute("tabindex","0"),t[o].focus()),this.value!==a&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const t=this.getAllRadios(),a=t.find(o=>o.checked),r=t.find(o=>!o.disabled),s=a||r;s&&s.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,t=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,a=this.label?!0:!!e,r=this.hint?!0:!!t;return p`
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
    `}}n([v()],l.prototype,"hasRadioButtons",2);n([B("slot:not([name])")],l.prototype,"defaultSlot",2);n([i()],l.prototype,"label",2);n([i({attribute:"hint"})],l.prototype,"hint",2);n([i({reflect:!0})],l.prototype,"name",2);n([i({type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([i({reflect:!0})],l.prototype,"orientation",2);n([v()],l.prototype,"value",1);n([i({attribute:"value",reflect:!0})],l.prototype,"defaultValue",2);n([i({reflect:!0})],l.prototype,"size",2);n([i({type:Boolean,reflect:!0})],l.prototype,"required",2);n([i({type:Boolean,attribute:"with-label"})],l.prototype,"withLabel",2);n([i({type:Boolean,attribute:"with-hint"})],l.prototype,"withHint",2);customElements.get("w-radio-group")||customElements.define("w-radio-group",l);A("w-radio");A("w-radio-group");const T={title:"Forms/Radio",render:d=>p`
      <w-radio-group ${x(C(d))}>
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
}`,...w.parameters?.docs?.source}}};const W=["Default","Disabled","Required","DisabledGroup","DisabledRadio"];export{b as Default,f as Disabled,g as DisabledGroup,w as DisabledRadio,m as Required,W as __namedExportsOrder,T as default};
