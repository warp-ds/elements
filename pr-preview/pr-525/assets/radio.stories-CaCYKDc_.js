import{a as z,i as M,r as X,b as i,n as s,q as Y,p as G,k as N,m as O,g as U}from"./iframe-BeuuFToc.js";import{s as Z,p as P}from"./utilities-CPG0gMbY.js";import{F as J}from"./FormControlMixin-DJnJZbro.js";import{o as W}from"./if-defined-Bll7dD4E.js";import"./preload-helper-Ct5FWWRu.js";const j=z`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit !important;
  }
`,ee=z`
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
`;var te=Object.defineProperty,p=(n,e,t,a)=>{for(var r=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(r=l(e,t,r)||r);return r&&te(e,t,r),r};class h extends J(M){constructor(){super(),this.forceDisabled=!1,this.name="",this.value=null,this.checked=!1,this.disabled=!1,this.required=!1,this.invalid=!1,this.#a=!1,this.#e=!1,this.#t=!1,this.#r=!1,this.handleClick=()=>{this.isInGroup()||this.isEffectivelyDisabled||(this.#t=!0,this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},this.handleInvalid=()=>{this.#t=!0,this.updateValidity()},this.handleKeyDown=e=>{this.isInGroup()||this.isEffectivelyDisabled||e.defaultPrevented||e.key!==" "&&e.key!=="Spacebar"&&e.key!=="Enter"||(e.preventDefault(),this.click())},this.addEventListener("click",this.handleClick),this.addEventListener("invalid",this.handleInvalid),this.addEventListener("keydown",this.handleKeyDown)}static{this.styles=[j,X,ee]}#a;#e;#t;#r;connectedCallback(){super.connectedCallback(),this.setAttribute("type","radio"),this.value=this.getAttribute("value")??"on",this.#a=this.hasAttribute("checked"),this.checked=this.#a,this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.#r=!0,this.tabIndex=0),this.syncAriaDisabled(),this.syncTabIndex(),this.syncFormValue(),this.updateValidity()}get isEffectivelyDisabled(){return this.disabled||this.forceDisabled}syncAriaDisabled(){this.setAttribute("aria-disabled",this.isEffectivelyDisabled?"true":"false")}updated(e){super.updated(e),e.has("checked")&&(this[this.checked?"setAttribute":"removeAttribute"]("checked-ui",""),this.setAttribute("aria-checked",this.checked?"true":"false"),this.checked&&!this.isInGroup()&&this.uncheckOtherRadios(),this.syncTabIndex()),(e.has("disabled")||e.has("forceDisabled"))&&(this[this.isEffectivelyDisabled?"setAttribute":"removeAttribute"]("disabled-ui",""),this.syncAriaDisabled(),this.syncTabIndex()),e.has("invalid")&&this.toggleAttribute("aria-invalid",this.invalid),e.has("name")&&this.checked&&!this.isInGroup()&&this.uncheckOtherRadios(),this.shouldSyncFormState(e)&&(this.syncFormValue(),this.updateValidity())}resetFormControl(){this.checked=this.#a,this.syncFormValue(),this.updateValidity()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.#t=!0,this.updateValidity(),this.internals.checkValidity()}isInGroup(){return!!this.closest("w-radio-group")}getRadioScope(){return this.internals.form??this.closest("form")??document}uncheckOtherRadios(){if(!this.name)return;const e=this.getRadioScope();Array.from(e.querySelectorAll(`w-radio[name="${this.name}"]`)).forEach(a=>{a!==this&&(a.closest("w-radio-group")||a.checked&&(a.checked=!1))})}updateValidity(){if(this.isEffectivelyDisabled||this.isInGroup()){this.internals.setValidity({});return}const e=this.required&&!this.checked,t=this.invalid&&!this.#e;if(e){this.#e=!0,this.invalid=this.#t,this.internals.setValidity({valueMissing:!0},this.internals.validationMessage||" ");return}if(this.#e&&(this.invalid=!1,this.#e=!1),t){this.internals.setValidity({customError:!0},this.internals.validationMessage||" ");return}this.internals.setValidity({})}syncFormValue(){if(this.isEffectivelyDisabled){this.setValue(null);return}this.setValue(this.checked?this.value:null)}syncTabIndex(){if(this.isInGroup()){this.isEffectivelyDisabled&&(this.tabIndex=-1);return}this.hasAttribute("tabindex")&&!this.#r||(this.tabIndex=this.isEffectivelyDisabled?-1:0,this.#r=!0)}shouldSyncFormState(e){return e.has("checked")||e.has("value")||e.has("disabled")||e.has("required")||e.has("invalid")||e.has("forceDisabled")}render(){return i`
      <div class="wrapper">
        <div part="control" class="control"></div>
        <slot part="label" class="label"></slot>
      </div>
    `}}p([s({type:Boolean})],h.prototype,"forceDisabled");p([s({reflect:!0})],h.prototype,"name");p([s({reflect:!0})],h.prototype,"value");p([s({type:Boolean,reflect:!0})],h.prototype,"checked");p([s({type:Boolean})],h.prototype,"disabled");p([s({type:Boolean,reflect:!0})],h.prototype,"required");p([s({type:Boolean,reflect:!0})],h.prototype,"invalid");customElements.get("w-radio")||customElements.define("w-radio",h);const ae=JSON.parse('{"radio-group.validation.required":["Vælg en mulighed."],"radio-group.label.optional":["Valgfri"]}'),re=JSON.parse('{"radio-group.validation.required":["Please select an option."],"radio-group.label.optional":["Optional"]}'),oe=JSON.parse('{"radio-group.validation.required":["Valitse vaihtoehto."],"radio-group.label.optional":["Valinnainen"]}'),ie=JSON.parse('{"radio-group.validation.required":["Velg et alternativ."],"radio-group.label.optional":["Valgfri"]}'),se=JSON.parse('{"radio-group.validation.required":["Välj ett alternativ."],"radio-group.label.optional":["Valfritt"]}'),le=z`
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

`;var ne=Object.defineProperty,u=(n,e,t,a)=>{for(var r=void 0,o=n.length-1,l;o>=0;o--)(l=n[o])&&(r=l(e,t,r)||r);return r&&ne(e,t,r),r};Y(re,ie,oe,ae,se);const de=()=>G._({id:"radio-group.validation.required",message:"Please select an option.",comment:"Shown when required radio group has no selections"});class d extends J(M){constructor(){super(),this.hasInteracted=!1,this.hasWarnedMissingName=!1,this.autoTabIndex=!1,this.label="",this.helpText="",this.optional=!1,this.invalid=!1,this.name=null,this.disabled=!1,this.required=!1,this.defaultCheckedValue=void 0,this.slottedHelpText=null,this.nameManagedRadios=new WeakSet,this.handleRadioClick=e=>{const t=e.target.closest("w-radio");if(!t||t.disabled||t.forceDisabled||this.disabled)return;const a=this.getCheckedValue(),r=this.getAllRadios();this.selectSingleRadio(t,r),this.getCheckedValue()!==a&&this.updateComplete.then(this.emitSelectionChange)},this.handleInvalid=e=>{e.preventDefault(),this.hasInteracted=!0,this.updateValidity()},this.handleHelpTextSlotChange=()=>{this.syncSlottedHelpText(),this.requestUpdate()},this.handleI18nChange=()=>{this.requestUpdate()},this.emitSelectionChange=()=>{this.hasInteracted=!0,this.syncFormValue(),this.updateValidity(),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this.captureDefaultSelection=()=>{this.defaultCheckedValue===void 0&&(this.defaultCheckedValue=this.getCheckedValue())},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick),this.addEventListener("invalid",this.handleInvalid)}static{this.styles=[j,le]}static{this.shadowRootOptions={...M.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("name")||e.has("required")||e.has("invalid")||e.has("helpText"))&&(this.syncRadioElements(),this.syncFormValue(),this.updateValidity())}connectedCallback(){super.connectedCallback(),this.syncSlottedHelpText(),this.syncFormValue(),this.updateValidity(),this.unsubscribeI18n=G.on("change",this.handleI18nChange),this.warnIfMissingName(),this.updateComplete.then(this.captureDefaultSelection)}disconnectedCallback(){this.unsubscribeI18n?.(),this.unsubscribeI18n=void 0,super.disconnectedCallback()}resetFormControl(){const e=this.defaultCheckedValue??null;this.getAllRadios().forEach(t=>{t.checked=e?t.value===e:!1}),this.syncRadioElements(),this.syncFormValue(),this.updateValidity()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}getCheckedValue(){return this.getAllRadios().find(t=>t.checked)?.value??null}getEnabledRadios(e=this.getAllRadios()){return e.filter(t=>!t.disabled)}selectSingleRadio(e,t=this.getAllRadios()){t.forEach(a=>{const r=a===e;a.checked=r,a.setAttribute("tabindex",r?"0":"-1")})}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();e.forEach((t,a)=>{t.toggleAttribute("data-w-radio-first",a===0),t.toggleAttribute("data-w-radio-inner",a!==0&&a!==e.length-1),t.toggleAttribute("data-w-radio-last",a===e.length-1),t.forceDisabled=this.disabled,this.name?(!t.getAttribute("name")||this.nameManagedRadios.has(t))&&(t.setAttribute("name",this.name),this.nameManagedRadios.add(t)):this.nameManagedRadios.has(t)&&(t.removeAttribute("name"),this.nameManagedRadios.delete(t))}),await Promise.all(e.map(async t=>t.updateComplete)),this.normalizeCheckedRadios(e),this.syncTabOrder(e)}syncTabOrder(e){if(this.disabled){e.forEach(r=>{r.tabIndex=-1});return}const t=this.getEnabledRadios(e),a=t.find(r=>r.checked);t.length>0&&(a?t.forEach(r=>{r.tabIndex=r.checked?0:-1}):t.forEach((r,o)=>{r.tabIndex=o===0?0:-1})),e.filter(r=>r.disabled).forEach(r=>{r.tabIndex=-1})}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const t=this.getAllRadios(),a=this.getEnabledRadios(t);if(a.length<=0)return;e.preventDefault();const r=this.getCheckedValue(),o=a.find(L=>L.checked)??a[0],l=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let c=a.indexOf(o)+l;c<0&&(c=a.length-1),c>=a.length&&(c=0),this.selectSingleRadio(a[c],t),a[c].focus(),this.getCheckedValue()!==r&&this.updateComplete.then(this.emitSelectionChange)}focus(e){if(this.disabled)return;const t=this.getAllRadios(),a=t.find(l=>l.checked),r=t.find(l=>!l.disabled),o=a||r;o&&o.focus(e)}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.hasInteracted=!0,this.updateValidity(),this.internals.checkValidity()}hasSlottedContent(e){if(this.querySelector(`[slot="${e}"]`))return!0;const t=this.shadowRoot?.querySelector(`slot[name="${e}"]`);return t?t.assignedNodes({flatten:!0}).some(a=>a.nodeType===Node.ELEMENT_NODE?!0:a.nodeType===Node.TEXT_NODE?!!a.textContent?.trim():!1):!1}syncFormValue(){this.setValue(null)}syncSlottedHelpText(){const e=this.querySelector('[slot="help-text"]');if(!e){this.slottedHelpText=null;return}this.slottedHelpText=e.textContent?.trim()||null}updateValidity(){if(this.warnIfMissingName(),this.disabled){this.internals.setValidity({}),this.syncChildInvalid(!1),this.syncHostTabIndex(!1);return}const e=this.required&&!this.getCheckedValue(),t=this.invalid,a=e&&this.hasInteracted,r=t||a;if(this.syncHostTabIndex(r),e){this.setValidityState({valueMissing:!0}),this.syncChildInvalid(r);return}if(t){this.setValidityState({customError:!0}),this.syncChildInvalid(!0);return}this.internals.setValidity({}),this.syncChildInvalid(!1)}normalizeCheckedRadios(e){const t=e.find(a=>a.checked);t&&e.forEach(a=>{a!==t&&(a.checked=!1)})}syncChildInvalid(e){this.getAllRadios().forEach(t=>{t.invalid=e})}setValidityState(e){const t=this.validationTarget;this.internals.setValidity(e," ",t??void 0)}syncHostTabIndex(e){if(!(this.hasAttribute("tabindex")&&!this.autoTabIndex)){if(e){this.tabIndex=0,this.autoTabIndex=!0;return}this.autoTabIndex&&(this.removeAttribute("tabindex"),this.autoTabIndex=!1)}}warnIfMissingName(){this.hasWarnedMissingName||this.internals.form&&(this.name&&this.name.trim().length>0||(console.warn('w-radio-group: "name" is required for form submission.'),this.hasWarnedMissingName=!0))}render(){const e=this.hasSlottedContent("label"),t=this.hasSlottedContent("help-text"),a=this.label?!0:!!e,r=this.helpText?!0:!!t,l=this.required&&!this.getCheckedValue()&&this.hasInteracted,c=this.invalid||l,H=c,L=c?de():this.helpText,B=c||r,K=B?"help-text":void 0,Q=this.slottedHelpText||void 0;return i`
      <fieldset
        part="form-control"
        class=${N({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":a,"radio-group-required":this.required})}
        role="radiogroup"
        aria-labelledby=${W(a?"label":void 0)}
        aria-describedby=${W(K)}
        aria-errormessage="error-message"
        aria-invalid=${H?"true":void 0}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${a?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
          ${this.optional?i` <span class="optional">
                ${G._({id:"radio-group.label.optional",message:"Optional",comment:"Shown behind label when marked as optional"})}
              </span>`:null}
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        ${B?i`
              <div
                id="help-text"
                part="help-text"
                class=${N({"has-slotted":r,error:H})}
                aria-hidden=${B?"false":"true"}
                aria-label=${Q}>
                <slot name="help-text" @slotchange=${this.handleHelpTextSlotChange}>${L}</slot>
              </div>
            `:null}
      </fieldset>
    `}}u([O()],d.prototype,"hasInteracted");u([O()],d.prototype,"hasWarnedMissingName");u([O()],d.prototype,"autoTabIndex");u([s()],d.prototype,"label");u([s({attribute:"help-text"})],d.prototype,"helpText");u([s({type:Boolean,reflect:!0})],d.prototype,"optional");u([s({type:Boolean,reflect:!0})],d.prototype,"invalid");u([s({reflect:!0})],d.prototype,"name");u([s({type:Boolean,reflect:!0})],d.prototype,"disabled");u([s({type:Boolean,reflect:!0})],d.prototype,"required");customElements.get("w-radio-group")||customElements.define("w-radio-group",d);U("w-radio");U("w-radio-group");const me={title:"Forms/Radio",render:n=>i`
      <w-radio-group ${Z(P(n))}>
        <w-radio value="foo" checked>foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `},b={args:{label:"Group",name:"foobar"}},m={args:{},render(){return i` <w-radio value="single">Single radio</w-radio> `}},v={args:{},render(){return i` <w-radio value="single" invalid>Single invalid radio</w-radio> `}},f={args:{},render(){return i` <w-radio value="single" disabled>Single disabled radio</w-radio> `}},g={args:{},render(){return i`
      <form @submit=${t=>{t.preventDefault();const a=t.currentTarget,r=a.querySelector("[data-status]");if(!r)return;const o=new FormData(a);r.textContent=`Submitted value: ${o.get("newsletter")??"none"}`}} style="display: grid; gap: 12px;">
        <w-radio name="newsletter" value="yes" required @invalid=${t=>{t.preventDefault();const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: please select the radio.")}}>
          Sign up for updates
        </w-radio>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `}},w={args:{},render(){return i`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    `}},y={args:{label:"Disabled",disabled:!0}},x={args:{},render(){return i`
      <form>
        <w-radio-group required>
          <w-radio value="foo">foo</w-radio>
          <w-radio value="bar">bar</w-radio>
        </w-radio-group>
        <button style="margin-top: 16px;">click me</button>
      </form>
    `}},S={args:{disabled:!0,helpText:"This group is disabled"}},k={args:{},render(){return i`
      <w-radio-group>
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    `}},I={args:{label:"Help text",helpText:"Pick one option",name:"help-text"}},T={args:{label:"Optional",optional:!0,helpText:"This is optional",name:"optional"}},R={render:()=>i`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},E={render:()=>i`
    <w-radio-group help-text="Select one" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},C={render:()=>i`
    <w-radio-group label="Label" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},V={render:()=>i`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},_={render:()=>i`
    <w-radio-group label="Label" optional help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},q={render:()=>i`
    <w-radio-group label="Label" invalid help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  `},A={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group
          label="Preferences"
          required
          name="group"
          help-text="Choose an option"
          @invalid=${t=>{const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}
        >
          <w-radio value="foo">Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},D={render:()=>i`
      <form @submit=${t=>{t.preventDefault();const r=t.currentTarget.querySelector("[data-status]");r&&(r.textContent="Submitted.")}} style="display: grid; gap: 12px;">
        <w-radio-group label="Preferences" name="group" help-text="Choose an option" @invalid=${t=>{const o=t.currentTarget.closest("form")?.querySelector("[data-status]");o&&(o.textContent="Invalid: select an option.")}}>
          <w-radio value="foo" checked>Foo</w-radio>
          <w-radio value="bar">Bar</w-radio>
          <w-radio value="baz">Baz</w-radio>
        </w-radio-group>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `},F={args:{},render(){return i`
      <w-radio-group label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}},$={args:{},render(){return i`
      <w-radio-group>
        <span slot="label">Slotted label</span>
        <span slot="help-text">Slotted hint text</span>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Group',
    name: 'foobar'
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single">Single radio</w-radio> \`;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" invalid>Single invalid radio</w-radio> \`;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\` <w-radio value="single" disabled>Single disabled radio</w-radio> \`;
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <div style="display: grid; gap: 12px;">
        <w-radio name="standalone" value="one">Standalone one</w-radio>
        <w-radio name="standalone" value="two">Standalone two</w-radio>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    helpText: 'This group is disabled'
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group>
        <w-radio value="foo" disabled>disabled</w-radio>
        <w-radio value="bar">not disabled</w-radio>
      </w-radio-group>
    \`;
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Help text',
    helpText: 'Pick one option',
    name: 'help-text'
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional',
    optional: true,
    helpText: 'This is optional',
    name: 'optional'
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...R.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-group label="Label" help-text="help text" name="group">
      <w-radio value="foo">Foo</w-radio>
      <w-radio value="bar">Bar</w-radio>
    </w-radio-group>
  \`
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-radio-group label="Invalid group" invalid>
        <w-radio value="foo">foo</w-radio>
        <w-radio value="bar">bar</w-radio>
      </w-radio-group>
    \`;
  }
}`,...F.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const ve=["Default","SingleRadioDefault","SingleRadioInvalid","SingleRadioDisabled","SingleRadioFormAssociated","StandaloneRadioGroupByName","Disabled","Required","DisabledGroup","DisabledRadio","HelpText","Optional","RadioGroup","RadioGroupWithHelpText","RadioGroupWithLabel","RadioGroupWithHelpTextAndLabel","RadioGroupWithOptional","RadioGroupWithInvalid","RadioGroupRequired","RadioGroupFormAssociated","InvalidWithMessage","SlottedLabelAndHint"];export{b as Default,y as Disabled,S as DisabledGroup,k as DisabledRadio,I as HelpText,F as InvalidWithMessage,T as Optional,R as RadioGroup,D as RadioGroupFormAssociated,A as RadioGroupRequired,E as RadioGroupWithHelpText,V as RadioGroupWithHelpTextAndLabel,q as RadioGroupWithInvalid,C as RadioGroupWithLabel,_ as RadioGroupWithOptional,x as Required,m as SingleRadioDefault,f as SingleRadioDisabled,g as SingleRadioFormAssociated,v as SingleRadioInvalid,$ as SlottedLabelAndHint,w as StandaloneRadioGroupByName,ve as __namedExportsOrder,me as default};
