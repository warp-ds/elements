import{a as M,i as B,r as X,b as s,n,q as Y,p as G,k as O,m as z,g as W}from"./iframe-D3t5ub0k.js";import{s as Z,p as P}from"./utilities-Ci-6vOBe.js";import{F as U}from"./FormControlMixin-DJnJZbro.js";import{o as N}from"./if-defined-jgaPZfxs.js";import"./preload-helper-Ct5FWWRu.js";const J=M`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`,ee=M`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--_gap);

    --_gap: var(--w-c-radio-gap, 8px);

    --_size: var(--w-c-radio-size, 2rem);
    --_radius: var(--w-c-radio-radius, 50%);
    --_border-width: var(--w-c-radio-border-width, 1px);
    --_checked-border-width: var(--w-c-radio-checked-border-width, 0.6rem);

    --_bg: var(--w-c-radio-bg, var(--w-s-color-background));
    --_border-color: var(--w-c-radio-border-color, var(--w-s-color-border-strong));
    --_border-color-checked: var(--w-c-radio-border-color-checked, var(--w-s-color-border-selected));
    --_border-color-invalid: var(--w-c-radio-border-color-invalid, var(--w-s-color-border-negative));

    --_outline-width: var(--w-c-radio-outline-width, 2px);
    --_outline-color: var(--w-c-radio-outline-color, var(--w-s-color-border-focus));
    --_outline-offset: var(--w-c-radio-outline-offset, var(--w-outline-offset, 1px));

    --_border-color-disabled: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --_bg-disabled: var(--w-c-radio-bg-disabled, var(--w-s-color-background-disabled-subtle));

    --_label-font-size: var(--w-c-radio-label-font-size, var(--w-font-size-m));
    --_label-line-height: var(--w-c-radio-label-line-height, var(--w-line-height-m));
    --_label-color: var(--w-c-radio-label-color, currentColor);
    --_label-color-disabled: var(--w-c-radio-label-color-disabled, var(--w-s-color-text-disabled));

    --_cursor: var(--w-c-radio-cursor, pointer);
    --_cursor-disabled: var(--w-c-radio-cursor-disabled, not-allowed);

    --_transition: var(
      --w-c-radio-transition,
      border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
      border-width 150ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)
    );
  }

  :host([disabled-ui]) {
    --w-c-radio-border-color: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-bg: var(--w-c-radio-bg-disabled, var(--w-s-color-background-disabled-subtle));
    --w-c-radio-border-color-checked: var(--w-c-radio-border-color-disabled, var(--w-s-color-border-disabled));
    --w-c-radio-label-color: var(--w-c-radio-label-color-disabled, var(--w-s-color-text-disabled));
    --w-c-radio-cursor: var(--w-c-radio-cursor-disabled, not-allowed);
  }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--_gap);
  }

  [part='control'] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;

    width: var(--_size);
    height: var(--_size);
    border-style: solid;
    border-width: var(--_border-width);
    border-color: var(--_border-color);
    border-radius: var(--_radius);
    background-color: var(--_bg);
    cursor: var(--_cursor);
    flex-shrink: 0;

    transition: var(--_transition);
  }

  :host([checked-ui]) [part='control'],
  :host([role='radio'][checked-ui]) [part='control'],
  :host([role='radio']:state(checked)) [part='control'] {
    border-color: var(--_border-color-checked);
    border-width: var(--_checked-border-width);
  }

  :host([invalid]) [part='control'] {
    border-color: var(--_border-color-invalid);
  }

  :host(:focus-visible) [part='control'] {
    outline: var(--_outline-width) solid var(--_outline-color);
    outline-offset: var(--_outline-offset);
  }

  :host([disabled-ui]) [part='control'],
  :host([role='radio']:state(disabled)) [part='control'] {
    border-color: var(--_border-color-disabled);
    background-color: var(--_bg-disabled);
    cursor: var(--_cursor-disabled);
  }

  :host([disabled-ui][checked-ui]) [part='control'] {
    border-color: var(--_border-color-disabled);
  }

  [part='label'] {
    font-size: var(--_label-font-size);
    line-height: var(--_label-line-height);
    color: var(--_label-color);
    user-select: none;
    cursor: var(--_cursor);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --w-c-radio-transition: none;
    }
  }

  @media (forced-colors: active) {
    :host {
      --w-c-radio-bg: Canvas;
      --w-c-radio-border-color: ButtonText;
      --w-c-radio-border-color-checked: Highlight;
      --w-c-radio-outline-color: Highlight;
      --w-c-radio-bg-disabled: Canvas;
      --w-c-radio-border-color-disabled: GrayText;
      --w-c-radio-label-color: CanvasText;
      --w-c-radio-label-color-disabled: GrayText;
    }

    [part='control'] {
      forced-color-adjust: none;
    }

    :host([checked-ui]) [part='control'],
    :host([role='radio']:state(checked)) [part='control'] {
      background-color: var(--_border-color-checked);
      border-color: var(--_border-color-checked);
    }

    :host([disabled-ui][checked-ui]) [part='control'],
    :host([role='radio']:state(disabled):state(checked)) [part='control'] {
      background-color: var(--_border-color-disabled);
      border-color: var(--_border-color-disabled);
    }
  }
`;var te=Object.defineProperty,p=(l,t,e,a)=>{for(var r=void 0,o=l.length-1,i;o>=0;o--)(i=l[o])&&(r=i(t,e,r)||r);return r&&te(t,e,r),r};class h extends U(B){constructor(){super(),this.forceDisabled=!1,this.name="",this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#r=!1,this.#e=!1,this.#t=!1,this.#a=!1,this.handleClick=()=>{this.isInGroup()||this.disabled||this.forceDisabled||(this.#t=!0,this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},this.handleInvalid=()=>{this.#t=!0,this.updateValidity()},this.handleKeyDown=t=>{this.isInGroup()||this.disabled||this.forceDisabled||t.defaultPrevented||t.key!==" "&&t.key!=="Spacebar"&&t.key!=="Enter"||(t.preventDefault(),this.click())},this.addEventListener("click",this.handleClick),this.addEventListener("invalid",this.handleInvalid),this.addEventListener("keydown",this.handleKeyDown)}static{this.styles=[J,X,ee]}#r;#e;#t;#a;connectedCallback(){super.connectedCallback(),this.setAttribute("type","radio"),this.value=this.getAttribute("value")??"on",this.#r=this.hasAttribute("checked"),this.checked=this.#r,this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.#a=!0,this.tabIndex=0),this.syncAriaDisabled(),this.syncTabIndex(),this.syncFormValue(),this.updateValidity()}syncAriaDisabled(){this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(t){if(super.updated(t),t.has("checked")&&(this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),this.checked&&!this.isInGroup()&&this.uncheckOtherRadios(),this.syncTabIndex()),t.has("disabled")||t.has("forceDisabled")){const e=this.disabled||this.forceDisabled;this[e?"setAttribute":"removeAttribute"]("disabled-ui",""),this.syncAriaDisabled(),this.syncTabIndex()}t.has("invalid")&&(this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")),t.has("name")&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios(),this.shouldSyncFormState(t)&&(this.syncFormValue(),this.updateValidity())}resetFormControl(){this.checked=this.#r,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#t=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest("w-radio-group")}getRadioScope(){return this.internals.form??this.closest("form")??document}uncheckOtherRadios(){if(!this.name)return;const t=this.getRadioScope();Array.from(t.querySelectorAll(`w-radio[name="${this.name}"]`)).forEach(a=>{a!==this&&(a.closest("w-radio-group")||a.checked&&(a.checked=!1))})}updateValidity(){if(this.disabled||this.forceDisabled||this.isInGroup()){this.internals.setValidity({});return}const t=this.required&&!this.checked,e=this.invalid&&!this.#e;if(t){this.#e=!0,this.invalid=this.#t,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||" ");return}if(this.#e&&(this.invalid=!1,this.#e=!1),e){this.internals.setValidity({customError:!0},this.internals.validationMessage||" ");return}this.internals.setValidity({})}syncFormValue(){if(this.disabled||this.forceDisabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}syncTabIndex(){if(this.isInGroup()){(this.disabled||this.forceDisabled)&&(this.tabIndex=-1);return}if(this.hasAttribute("tabindex")&&!this.#a)return;const e=this.disabled||this.forceDisabled;this.tabIndex=e?-1:0,this.#a=!0}shouldSyncFormState(t){return t.has("checked")||t.has("value")||t.has("disabled")||t.has("required")||t.has("invalid")||t.has("forceDisabled")}render(){return s`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}p([n({type:Boolean})],h.prototype,"forceDisabled");p([n({reflect:!0})],h.prototype,"name");p([n({reflect:!0})],h.prototype,"value");p([n({type:Boolean,reflect:!0})],h.prototype,"checked");p([n({type:Boolean})],h.prototype,"disabled");p([n({type:Boolean,reflect:!0})],h.prototype,"required");p([n({type:Boolean,reflect:!0})],h.prototype,"invalid");customElements.get("w-radio")||customElements.define("w-radio",h);const re=JSON.parse('{"radio-group.validation.required":["Vælg en mulighed."],"radio-group.label.optional":["Valgfri"]}'),ae=JSON.parse('{"radio-group.validation.required":["Please select an option."],"radio-group.label.optional":["Optional"]}'),oe=JSON.parse('{"radio-group.validation.required":["Valitse vaihtoehto."],"radio-group.label.optional":["Valinnainen"]}'),ie=JSON.parse('{"radio-group.validation.required":["Velg et alternativ."],"radio-group.label.optional":["Valgfri"]}'),se=JSON.parse('{"radio-group.validation.required":["Välj ett alternativ."],"radio-group.label.optional":["Valfritt"]}'),ne=M`
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
    padding-bottom: 16px;
    color: var(--w-s-color-text);
    display: block;
  }

  .optional {
    font-weight: 400;
    color: var(--w-s-color-text-subtle);
    margin-inline-start: 0.5rem;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
  }

  /* Help text */
  [part~='help-text'] {
    margin-block-start: 16px;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    color: var(--w-s-color-text-subtle);
  }

  :host([disabled]) [part~='help-text'] {
    color: var(--w-s-color-text-disabled);
  }

  [part~='help-text'].error {
    color: var(--w-s-color-text-negative);
  }

`;var le=Object.defineProperty,u=(l,t,e,a)=>{for(var r=void 0,o=l.length-1,i;o>=0;o--)(i=l[o])&&(r=i(t,e,r)||r);return r&&le(t,e,r),r};Y(ae,ie,oe,re,se);const de=()=>G._({id:"radio-group.validation.required",message:"Please select an option.",comment:"Shown when required radio group has no selections"});class d extends U(B){constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label="",this.helpText="",this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHintText=null,this.handleRadioClick=t=>{const e=t.target.closest("w-radio");if(!e||e.disabled||e.forceDisabled||this.disabled)return;const a=this.getCheckedValue();e.checked=!0,this.getAllRadios().forEach(i=>{i!==e&&(i.checked=!1,i.setAttribute("tabindex","-1"))}),e.setAttribute("tabindex","0"),this.getCheckedValue()!==a&&this.updateComplete.then(()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.handleInvalid=t=>{t.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHintSlotChange=()=>{this.syncSlottedHintText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick),this.addEventListener("invalid",this.handleInvalid)}static{this.styles=[J,ne]}static{this.shadowRootOptions={...B.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const t=this.querySelector(":is(w-radio):not([disabled])");if(t)return t}updated(t){(t.has("disabled")||t.has("name")||t.has("required")||t.has("invalid")||t.has("helpText"))&&(this.syncRadioElements(),this.syncFormValue(),this.updateValidity())}connectedCallback(){super.connectedCallback(),this.syncSlottedHintText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=G.on("change",this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}resetFormControl(){const t=this.defaultCheckedValue??null;this.getAllRadios().forEach(e=>{e.checked=t?e.value===t:!1}),this.syncRadioElements(),this.syncFormValue(),this.updateValidity()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}getCheckedValue(){return this.getAllRadios().find(e=>e.checked)?.value??null}handleLabelClick(){this.focus()}async syncRadioElements(){const t=this.getAllRadios();if(t.forEach((e,a)=>{e.toggleAttribute("data-w-radio-first",a===0),e.toggleAttribute("data-w-radio-inner",a!==0&&a!==t.length-1),e.toggleAttribute("data-w-radio-last",a===t.length-1),e.forceDisabled=this.disabled;const r=e.getAttribute("data-name-from-group")==="true";this.name?(!e.getAttribute("name")||r)&&(e.setAttribute("name",this.name),e.setAttribute("data-name-from-group","true")):r&&(e.removeAttribute("name"),e.removeAttribute("data-name-from-group"))}),await Promise.all(t.map(async e=>e.updateComplete)),this.normalizeCheckedRadios(t),this.disabled)t.forEach(e=>{e.tabIndex=-1});else{const e=t.filter(r=>!r.disabled),a=e.find(r=>r.checked);e.length>0&&(a?e.forEach(r=>{r.tabIndex=r.checked?0:-1}):e.forEach((r,o)=>{r.tabIndex=o===0?0:-1})),t.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)||this.disabled)return;const e=this.getAllRadios().filter(c=>!c.disabled);if(e.length<=0)return;t.preventDefault();const a=this.getCheckedValue(),r=e.find(c=>c.checked)??e[0],o=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let i=e.indexOf(r)+o;i<0&&(i=e.length-1),i>=e.length&&(i=0),this.getAllRadios().forEach(c=>{c.checked=!1,c.setAttribute("tabindex","-1")}),e[i].checked=!0,e[i].setAttribute("tabindex","0"),e[i].focus(),this.getCheckedValue()!==a&&this.updateComplete.then(()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}focus(t){if(this.disabled)return;const e=this.getAllRadios(),a=e.find(i=>i.checked),r=e.find(i=>!i.disabled),o=a||r;o&&o.focus(t)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}getHasSlotted(t){if(this.querySelector(`[slot="${t}"]`))return!0;const e=this.shadowRoot?.querySelector(`slot[name="${t}"]`);return e?e.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE?!0:a.nodeType===Node.TEXT_NODE?!!a.textContent?.trim():!1):!1}syncFormValue(){this.setValue(null)}syncSlottedHintText(){const t=this.querySelector('[slot="help-text"]');if(!t){this.slottedHintText=null;return}this.slottedHintText=t.textContent?.trim()||null}updateValidity(){if(this.warnIfMissingName(),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}const t=this.required&&!this.getCheckedValue(),e=this.invalid,a=t&&this.hasInteracted,r=e||a;if(this.syncHostTabIndex(r),t){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(r);return}if(e){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(t){const e=t.find(a=>a.checked);e&&t.forEach(a=>{a!==e&&(a.checked=!1)})}syncChildInvalid(t){this.getAllRadios().forEach(e=>{"invalid"in e&&(e.invalid=t)})}setValidityState(t){const e=this.validationTarget;this.internals.setValidity(t," ",e??void 0)}syncHostTabIndex(t){if(!(this.hasAttribute("tabindex")&&!this.autoTabIndex)){if(t){this.tabIndex=0,this.autoTabIndex=!0;return}this.autoTabIndex&&(this.removeAttribute("tabindex"),this.autoTabIndex=!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-radio-group: "name" is required for form submission.'),this.hasWarnedMissingName=!0))}render(){const t=this.getHasSlotted("label"),e=this.getHasSlotted("help-text"),a=this.label?!0:!!t,r=this.helpText?!0:!!e,i=this.required&&!this.getCheckedValue()&&this.hasInteracted,b=this.invalid||i,c=b,j=b?de():this.helpText,L=b||r,K=L?"help-text":void 0,Q=this.slottedHintText||void 0;return s`
      <fieldset
        part="form-control"
        class=${O({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a,"radio-group-required":this.required})}
        role="radiogroup"
        aria-labelledby=${N(a?"label":void 0)}
        aria-describedby=${N(K)}
        aria-errormessage="error-message"
        aria-invalid=${c?"true":void 0}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
          ${this.optional?s` <span class="optional">
                ${G._({id:"radio-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
              </span>`:null}
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${L?s`
              <div
                id="help-text"
                part="help-text"
                class=${O({"has-slotted":r,error:c})}
                aria-hidden=${L?"false":"true"}
                aria-label=${Q}>
                <slot name="help-text" @slotchange=${this.handleHintSlotChange}>${j}</slot>
              </div>
            `:null}
      </fieldset>
    `}}u([z()],d.prototype,"hasInteracted");u([z()],d.prototype,"hasWarnedMissingName");u([z()],d.prototype,"autoTabIndex");u([n()],d.prototype,"label");u([n({attribute:"help-text"})],d.prototype,"helpText");u([n({type:Boolean,reflect:!0})],d.prototype,"optional");u([n({type:Boolean,reflect:!0})],d.prototype,"invalid");u([n({reflect:!0})],d.prototype,"name");u([n({type:Boolean,reflect:!0})],d.prototype,"disabled");u([n({type:Boolean,reflect:!0})],d.prototype,"required");customElements.get("w-radio-group")||customElements.define("w-radio-group",d);W("w-radio");W("w-radio-group");const me={title:"Forms/Radio",render:l=>s`
      <w-radio-group ${Z(P(l))}>
        <w-radio value="foo" checked>foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},m={args:{label:"Group",name:"foobar"}},f={args:{},render(){return s` <w-radio value="single">Single radio</w-radio> `}},v={args:{},render(){return s` <w-radio value="single" invalid>Single invalid radio</w-radio> `}},g={args:{},render(){return s` <w-radio value="single" disabled>Single disabled radio</w-radio> `}},w={args:{},render(){return s`
      <form @submit=${e=>{e.preventDefault();const a=e.currentTarget,r=a.querySelector("[data-status]");if(!r)return;const o=new FormData(a);r.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${e=>{e.preventDefault();const o=e.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please select the radio.")}}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `}},y={args:{},render(){return s`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `}},x={args:{label:"Disabled",disabled:!0}},k={args:{},render(){return s`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `}},S={args:{disabled:!0,helpText:"This group is disabled"}},I={args:{},render(){return s`
      <w-radio-group>
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `}},T={args:{label:"Help text",helpText:"Pick one option",name:"help-text"}},R={args:{label:"Optional",optional:!0,helpText:"This is optional",name:"optional"}},V={render:()=>s`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},E={render:()=>s`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},C={render:()=>s`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},A={render:()=>s`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},_={render:()=>s`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},q={render:()=>s`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},D={render:()=>s`
      <form @submit=${e=>{e.preventDefault();const r=e.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${e=>{const o=e.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},F={render:()=>s`
      <form @submit=${e=>{e.preventDefault();const r=e.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group label="Preferences" name="group" help-text="Choose an option" @invalid=${e=>{const o=e.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},H={args:{},render(){return s`
      <w-radio-group label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},$={args:{},render(){return s`
      <w-radio-group>
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" invalid>Single invalid radio</w-radio> \`;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" disabled>Single disabled radio</w-radio> \`;
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      status.textContent = \`Submitted value: \${data.get('newsletter') ?? 'none'}\`;
    };
    const handleInvalid = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: please select the radio.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=\${handleInvalid}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    \`;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    \`;
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    helpText: 'This group is disabled'
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group>
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text'
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional'
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...E.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...A.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,..._.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=\${handleInvalid}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Submitted.';
    };
    const handleInvalid = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const form = target.closest('form');
      const status = form?.querySelector('[data-status]') as HTMLElement | null;
      if (status) status.textContent = 'Invalid: select an option.';
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px;">
        <w-radio-group label="Preferences" name="group" help-text="Choose an option" @invalid=\${handleInvalid}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group>
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...$.parameters?.docs?.source}}};const fe=["Default","SingleRadioDefault","SingleRadioInvalid","SingleRadioDisabled","SingleRadioFormAssociated","StandaloneRadioGroupByName","Disabled","Required","DisabledGroup","DisabledRadio","HelpText","Optional","RadioGroup","RadioGroupWithHelpText","RadioGroupWithLabel","RadioGroupWithHelpTextAndLabel","RadioGroupWithOptional","RadioGroupWithInvalid","RadioGroupRequired","RadioGroupFormAssociated","InvalidWithMessage","SlottedLabelAndHint"];export{m as Default,x as Disabled,S as DisabledGroup,I as DisabledRadio,T as HelpText,H as InvalidWithMessage,R as Optional,V as RadioGroup,F as RadioGroupFormAssociated,D as RadioGroupRequired,E as RadioGroupWithHelpText,A as RadioGroupWithHelpTextAndLabel,q as RadioGroupWithInvalid,C as RadioGroupWithLabel,_ as RadioGroupWithOptional,k as Required,f as SingleRadioDefault,g as SingleRadioDisabled,w as SingleRadioFormAssociated,v as SingleRadioInvalid,$ as SlottedLabelAndHint,y as StandaloneRadioGroupByName,fe as __namedExportsOrder,me as default};
