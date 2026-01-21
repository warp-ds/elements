import{a as S,b as t,n as y}from"./iframe-BGr96k-y.js";import{B as x}from"./form-associated-element-BVTL5OdW.js";import"./preload-helper-Ct5FWWRu.js";const A=S`
  :host {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    margin: 0;
    width: 2rem;
    height: 2rem;
    border: 1px solid var(--w-s-color-border-strong);
    border-radius: 50%;
    background-color: var(--w-s-color-background);
    cursor: pointer;
    flex-shrink: 0;
    transition-property: border-color, border-width, background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  input[type='radio']:checked {
    border-color: var(--w-s-color-border-selected);
    border-width: 0.6rem;
  }

  input[type='radio']:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: var(--w-outline-offset, 1px);
  }

  input[type='radio']:disabled {
    border-color: var(--w-s-color-border-disabled);
    background-color: var(--w-s-color-background-disabled-subtle);
    cursor: not-allowed;
  }

  input[type='radio']:disabled:checked {
    border-color: var(--w-s-color-border-disabled);
  }

  label {
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    user-select: none;
    cursor: pointer;
  }

  :host([disabled]) label {
    cursor: not-allowed;
    color: var(--w-s-color-text-disabled);
  }

  @media (prefers-reduced-motion: reduce) {
    input[type='radio'] {
      transition: none;
    }
  }

  /* Windows High Contrast Mode support */
  @media (forced-colors: active) {
    input[type='radio'] {
      forced-color-adjust: none;
      background-color: Canvas;
      border-color: ButtonText;
    }

    input[type='radio']:checked {
      background-color: Highlight;
      border-color: Highlight;
    }

    input[type='radio']:focus-visible {
      outline-color: Highlight;
    }

    input[type='radio']:disabled {
      border-color: GrayText;
      background-color: Canvas;
    }

    input[type='radio']:disabled:checked {
      background-color: GrayText;
      border-color: GrayText;
    }

    label {
      color: CanvasText;
    }

    :host([disabled]) label {
      color: GrayText;
    }
  }
`;var q=Object.defineProperty,g=(n,e,i,o)=>{for(var r=void 0,a=n.length-1,d;a>=0;a--)(d=n[a])&&(r=d(e,i,r)||r);return r&&q(e,i,r),r};const v=class C extends x{constructor(){super(...arguments),this.#a=`w-radio-basic-${C.#d++}`,this.value="",this.checked=!1,this.required=!1,this.#i=null,this.#o=e=>{if(e.key===" "){if(this.disabled||this.checked)return;if(e.preventDefault(),this.checked=!0,this.hasInteracted=!0,this.name){const R=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const c of R)c!==this&&c.checked&&(c.checked=!1,c.updateFormValue())}this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{checked:!0,value:this.value},bubbles:!0,composed:!0}));return}if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)||this.disabled||!this.name)return;const i=this.getRootNode(),o=Array.from(i.querySelectorAll(`w-radio-basic[name="${this.name}"]`)).filter(k=>!k.disabled);if(o.length<=1)return;e.preventDefault();const r=o.indexOf(this),a=["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let d=r+a;d<0?d=o.length-1:d>=o.length&&(d=0);const s=o[d];s.checked=!0,s.focus(),s!==this&&(this.checked=!1,this.updateFormValue()),s.updateFormValue(),s.dispatchEvent(new CustomEvent("change",{detail:{checked:!0,value:s.value},bubbles:!0,composed:!0}))}}static{this.css=[A]}static{this.shadowRootOptions={...x.shadowRootOptions,delegatesFocus:!0}}static#d=0;static get validators(){return[...super.validators,{observedAttributes:["required","disabled"],checkValidity:e=>{if(e.disabled)return{message:"",isValid:!0,invalidKeys:[]};if(!(e.required||e.hasAttribute("required")))return{message:"",isValid:!0,invalidKeys:[]};if(e.name){const o=e.getRootNode();if(Array.from(o.querySelectorAll(`w-radio-basic[name="${e.name}"]`)).some(d=>d.checked))return{message:"",isValid:!0,invalidKeys:[]}}else if(e.checked)return{message:"",isValid:!0,invalidKeys:[]};return{message:"Please select an option.",isValid:!1,invalidKeys:["valueMissing"]}}}]}#a;#i;connectedCallback(){this.#i=this.checked,super.connectedCallback(),this.updateFormValue(),this.addEventListener("keydown",this.#o),requestAnimationFrame(()=>this.#r())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.#o)}#r(){if(!this.name){this.#e(this.disabled?-1:0);return}const e=this.getRootNode(),i=Array.from(e.querySelectorAll(`w-radio-basic[name="${this.name}"]`)),o=i.filter(a=>!a.disabled),r=o.find(a=>a.checked);for(const a of i)a.disabled?a.#e(-1):r?a.#e(a===r?0:-1):a.#e(a===o[0]?0:-1)}#e(e){const i=this.shadowRoot?.querySelector("input");i&&(i.tabIndex=e)}#o;updateFormValue(){if(this.checked&&this.value?this.setValue(this.value):this.checked||this.setValue(null),this.updateValidity(),this.name&&this.checked){const i=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const o of i)o!==this&&o.updateValidity()}}_handleChange(e){const i=e.target;if(this.checked=i.checked,this.hasInteracted=!0,this.checked&&this.name){const r=this.getRootNode().querySelectorAll(`w-radio-basic[name="${this.name}"]`);for(const a of r)a!==this&&a.checked&&(a.checked=!1,a.updateFormValue())}this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}formResetCallback(){this.checked=this.#i??!1,super.formResetCallback(),this.updateFormValue()}willUpdate(e){super.willUpdate(e),(e.has("checked")||e.has("value"))&&this.updateFormValue(),(e.has("checked")||e.has("disabled"))&&this.updateComplete.then(()=>this.#r())}render(){return t`
      <input
        id=${this.#a}
        type="radio"
        .name=${this.name??""}
        .value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        ?required=${this.required}
        @change=${this._handleChange}
      />
      <label for=${this.#a}><slot></slot></label>
    `}};g([y({type:String,reflect:!0})],v.prototype,"value");g([y({type:Boolean,reflect:!0})],v.prototype,"checked");g([y({type:Boolean,reflect:!0})],v.prototype,"required");let F=v;customElements.get("w-radio-basic")||customElements.define("w-radio-basic",F);const E={title:"Forms/RadioBasic",component:"w-radio-basic"},l={render:()=>t`
    <w-radio-basic name="example" value="option1">Option 1</w-radio-basic>
  `},u={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="group" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="group" value="banana">Banana</w-radio-basic>
      <w-radio-basic name="group" value="cherry" checked>Cherry</w-radio-basic>
    </div>
  `},p={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="disabled-demo" value="unchecked" disabled>Disabled unchecked</w-radio-basic>
      <w-radio-basic name="disabled-demo" value="checked" disabled checked>Disabled checked</w-radio-basic>
    </div>
  `},b={render:()=>t`
    <div style="display: flex; gap: 32px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Enabled</strong>
        <w-radio-basic name="enabled-compare" value="unchecked">Unchecked</w-radio-basic>
        <w-radio-basic name="enabled-compare" value="checked" checked>Checked</w-radio-basic>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Disabled</strong>
        <w-radio-basic name="disabled-compare" value="unchecked" disabled>Unchecked</w-radio-basic>
        <w-radio-basic name="disabled-compare" value="checked" disabled checked>Checked</w-radio-basic>
      </div>
    </div>
  `},m={render:()=>t`
    <form style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="required-demo" value="one" required>Option one</w-radio-basic>
      <w-radio-basic name="required-demo" value="two" required>Option two</w-radio-basic>
      <button type="submit">Submit</button>
    </form>
  `},h={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        When <code>prefers-reduced-motion: reduce</code> is enabled in your OS settings,
        the radio button transitions are disabled. Click the radios below and observe
        the transition behavior.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="motion-demo" value="one">Option one</w-radio-basic>
        <w-radio-basic name="motion-demo" value="two">Option two</w-radio-basic>
        <w-radio-basic name="motion-demo" value="three">Option three</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        To test: Enable "Reduce motion" in your OS accessibility settings, then refresh.
      </p>
    </div>
  `},f={render:()=>t`
    <form @submit=${n=>{n.preventDefault(),console.log(new FormData(n.target))}}>
      <fieldset style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <legend>Choose a fruit</legend>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <w-radio-basic name="fruit" value="apple">Apple</w-radio-basic>
          <w-radio-basic name="fruit" value="banana">Banana</w-radio-basic>
          <w-radio-basic name="fruit" value="cherry">Cherry</w-radio-basic>
        </div>
      </fieldset>
      <button type="submit" style="margin-top: 16px;">Submit</button>
    </form>
  `},w={render:()=>t`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        Keyboard navigation matches native radio behavior:
      </p>
      <ul style="margin: 0; max-width: 400px; padding-left: 20px;">
        <li><kbd>Tab</kbd> - Focus the radio group (first or checked radio)</li>
        <li><kbd>Space</kbd> - Select the focused radio</li>
        <li><kbd>Arrow keys</kbd> - Move focus AND selection between radios</li>
        <li><kbd>Shift+Tab</kbd> - Leave the radio group</li>
      </ul>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="keyboard-demo" value="first">First option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="second">Second option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="third">Third option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="fourth">Fourth option</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        Arrow keys wrap around: pressing Down on the last option moves to the first.
      </p>
    </div>
  `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-radio-basic name="example" value="option1">Option 1</w-radio-basic>
  \`
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="group" value="apple">Apple</w-radio-basic>
      <w-radio-basic name="group" value="banana">Banana</w-radio-basic>
      <w-radio-basic name="group" value="cherry" checked>Cherry</w-radio-basic>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="disabled-demo" value="unchecked" disabled>Disabled unchecked</w-radio-basic>
      <w-radio-basic name="disabled-demo" value="checked" disabled checked>Disabled checked</w-radio-basic>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; gap: 32px;">
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Enabled</strong>
        <w-radio-basic name="enabled-compare" value="unchecked">Unchecked</w-radio-basic>
        <w-radio-basic name="enabled-compare" value="checked" checked>Checked</w-radio-basic>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <strong>Disabled</strong>
        <w-radio-basic name="disabled-compare" value="unchecked" disabled>Unchecked</w-radio-basic>
        <w-radio-basic name="disabled-compare" value="checked" disabled checked>Checked</w-radio-basic>
      </div>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form style="display: flex; flex-direction: column; gap: 8px;">
      <w-radio-basic name="required-demo" value="one" required>Option one</w-radio-basic>
      <w-radio-basic name="required-demo" value="two" required>Option two</w-radio-basic>
      <button type="submit">Submit</button>
    </form>
  \`
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        When <code>prefers-reduced-motion: reduce</code> is enabled in your OS settings,
        the radio button transitions are disabled. Click the radios below and observe
        the transition behavior.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="motion-demo" value="one">Option one</w-radio-basic>
        <w-radio-basic name="motion-demo" value="two">Option two</w-radio-basic>
        <w-radio-basic name="motion-demo" value="three">Option three</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        To test: Enable "Reduce motion" in your OS accessibility settings, then refresh.
      </p>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <form @submit=\${(e: Event) => {
    e.preventDefault();
    console.log(new FormData(e.target as HTMLFormElement));
  }}>
      <fieldset style="border: 1px solid #ccc; padding: 16px; border-radius: 8px;">
        <legend>Choose a fruit</legend>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <w-radio-basic name="fruit" value="apple">Apple</w-radio-basic>
          <w-radio-basic name="fruit" value="banana">Banana</w-radio-basic>
          <w-radio-basic name="fruit" value="cherry">Cherry</w-radio-basic>
        </div>
      </fieldset>
      <button type="submit" style="margin-top: 16px;">Submit</button>
    </form>
  \`
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; max-width: 400px;">
        Keyboard navigation matches native radio behavior:
      </p>
      <ul style="margin: 0; max-width: 400px; padding-left: 20px;">
        <li><kbd>Tab</kbd> - Focus the radio group (first or checked radio)</li>
        <li><kbd>Space</kbd> - Select the focused radio</li>
        <li><kbd>Arrow keys</kbd> - Move focus AND selection between radios</li>
        <li><kbd>Shift+Tab</kbd> - Leave the radio group</li>
      </ul>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <w-radio-basic name="keyboard-demo" value="first">First option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="second">Second option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="third">Third option</w-radio-basic>
        <w-radio-basic name="keyboard-demo" value="fourth">Fourth option</w-radio-basic>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #666;">
        Arrow keys wrap around: pressing Down on the last option moves to the first.
      </p>
    </div>
  \`
}`,...w.parameters?.docs?.source}}};const T=["Default","RadioGroup","Disabled","DisabledComparison","Required","ReducedMotion","InForm","KeyboardNavigation"];export{l as Default,p as Disabled,b as DisabledComparison,f as InForm,w as KeyboardNavigation,u as RadioGroup,h as ReducedMotion,m as Required,T as __namedExportsOrder,E as default};
