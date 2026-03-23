import{a as k,i as y,r as x,j as g,b as w,n as v}from"./iframe-rWEhEzzi.js";import{F as S}from"./FormControlMixin-DJnJZbro.js";import"./preload-helper-Ct5FWWRu.js";const C=k`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-s-color-border-strong\\]{background-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:bg-\\[--w-s-color-border-strong-hover\\]{background-color:var(--w-s-color-border-strong-hover)}.border{border-width:1px}.rounded-full{border-radius:9999px}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.left-0{left:0}.left-4{left:.4rem}.top-0{top:0}.top-4{top:.4rem}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.group:hover .group-hover\\:s-bg-hover{background-color:var(--w-s-color-background-hover)}.group:hover .group-hover\\:s-bg-primary-hover{background-color:var(--w-s-color-background-primary-hover)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:s-border-strong-hover{border-color:var(--w-s-color-border-strong-hover)}.h-16{height:1.6rem}.h-24{height:2.4rem}.h-full{height:100%}.w-16{width:1.6rem}.w-44{width:4.4rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.translate-x-20{--w-translate-x:2rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var D=Object.defineProperty,f=(n,e,r,m)=>{for(var a=void 0,s=n.length-1,o;s>=0;s--)(o=n[s])&&(a=o(e,r,a)||a);return a&&D(e,r,a),a};const t={base:"block relative h-24 w-44 cursor-pointer group focusable rounded-full",disabled:"pointer-events-none",track:"absolute top-0 left-0 h-full w-full rounded-full transition-colors",trackActive:"s-bg-primary group-hover:s-bg-primary-hover",trackInactive:"s-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover",trackDisabledOn:"s-bg-disabled",trackDisabledOff:"s-bg-disabled-subtle border s-border-disabled",handle:"absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform",handleSelected:"translate-x-20",handleActive:"s-bg",handleNotDisabled:"bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]",handleDisabledOn:"s-bg-disabled-subtle",handleDisabledOff:"s-bg-disabled"};class i extends S(y){constructor(){super(...arguments),this.name="",this.value="",this.checked=!1,this.disabled=!1,this.#e=null,this._handleHostClick=e=>{this.disabled||e.composedPath()[0]===this&&this._handleClick()},this._handleKeyDown=e=>{this.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this._handleClick())}}#e;static{this.styles=[x,C,k`
      :host {
        display: inline-block;
      }

      :host(:focus),
      :host(:focus-visible) {
        outline: none;
      }

      :host(:focus) button,
      :host(:focus-visible) button {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
      }

      :host(:focus:not(:focus-visible)) button {
        outline: none;
      }
    `]}get _baseClasses(){return g([t.base,this.disabled&&t.disabled])}get _trackClasses(){return g([t.track,this.disabled?this.checked?t.trackDisabledOn:t.trackDisabledOff:this.checked?t.trackActive:t.trackInactive])}get _handleClasses(){return g([t.handle,this.checked&&t.handleSelected,this.disabled?this.checked?t.handleDisabledOn:t.handleDisabledOff:this.checked?t.handleActive:t.handleNotDisabled])}_handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value||null},bubbles:!0,composed:!0})))}_syncA11yState(){if(this.internals.ariaChecked=this.checked?"true":"false",this.tabIndex=this.disabled?-1:0,this.disabled){this.internals.ariaDisabled="true";return}this.internals.ariaDisabled=null}connectedCallback(){this.#e=this.checked,super.connectedCallback(),this.internals.role="switch";const e=this.getAttribute("aria-label");e&&(this.internals.ariaLabel=e,this.removeAttribute("aria-label")),this.disabled||this.setValue(this.checked&&this.value?this.value:null),this._syncA11yState(),this.addEventListener("click",this._handleHostClick),this.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){this.removeEventListener("click",this._handleHostClick),this.removeEventListener("keydown",this._handleKeyDown),super.disconnectedCallback()}willUpdate(e){e.has("checked")&&(this.disabled||this.setValue(this.checked&&this.value?this.value:null)),(e.has("checked")||e.has("disabled"))&&this._syncA11yState()}resetFormControl(){this.checked=this.#e}render(){return w`
      <div>
        <button
          type="button"
          role="none"
          tabindex="-1"
          class=${this._baseClasses}
          ?disabled=${this.disabled}
          @click=${this._handleClick}
        >
          <span data-testid="track" class=${this._trackClasses}></span>
          <span data-testid="handle" class=${this._handleClasses}></span>
        </button>
      </div>
    `}}f([v({type:String,reflect:!0})],i.prototype,"name");f([v({type:String,reflect:!0})],i.prototype,"value");f([v({type:Boolean,reflect:!0})],i.prototype,"checked");f([v({type:Boolean,reflect:!0})],i.prototype,"disabled");customElements.get("w-switch")||customElements.define("w-switch",i);const $={title:"Forms/Switch",component:"w-switch",argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},value:{control:"text"}}},l={args:{checked:!1,disabled:!1}},c={args:{checked:!0,disabled:!1}},d={args:{checked:!1,disabled:!0}},h={args:{checked:!0,disabled:!0}},b={render:()=>w`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <span id="switch-label">Enable notifications</span>
      <w-switch aria-labelledby="switch-label"></w-switch>
    </div>
  `},u={render:()=>w`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <label for="native-label-switch">Enable notifications</label>
      <w-switch
        id="native-label-switch"
        name="notifications"
        value="enabled"
      ></w-switch>
    </div>
  `},p={render:()=>w`
      <form @submit=${e=>{e.preventDefault();const r=e.currentTarget,m=r.querySelector("[data-status]");if(!m)return;const a=new FormData(r),s="notifications",o=a.get(s);m.textContent=o===null?"Submitted: no switch value captured.":`Submitted: ${s}=${String(o)}`}} style="display: grid; gap: 12px; max-width: 320px;">
        <div style="display: inline-flex; align-items: center; gap: 8px;">
          <span id="switch-form-label">Enable notifications</span>
          <w-switch
            aria-labelledby="switch-form-label"
            name="notifications"
            value="enabled"
          ></w-switch>
        </div>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    `};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <span id="switch-label">Enable notifications</span>
      <w-switch aria-labelledby="switch-label"></w-switch>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <label for="native-label-switch">Enable notifications</label>
      <w-switch
        id="native-label-switch"
        name="notifications"
        value="enabled"
      ></w-switch>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector('[data-status]') as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      const name = 'notifications';
      const value = data.get(name);
      status.textContent = value === null ? 'Submitted: no switch value captured.' : \`Submitted: \${name}=\${String(value)}\`;
    };
    return html\`
      <form @submit=\${handleSubmit} style="display: grid; gap: 12px; max-width: 320px;">
        <div style="display: inline-flex; align-items: center; gap: 8px;">
          <span id="switch-form-label">Enable notifications</span>
          <w-switch
            aria-labelledby="switch-form-label"
            name="notifications"
            value="enabled"
          ></w-switch>
        </div>
        <button type="submit">Submit</button>
        <div data-status aria-live="polite"></div>
      </form>
    \`;
  }
}`,...p.parameters?.docs?.source}}};const z=["Default","Checked","Disabled","DisabledChecked","WithLabel","NativeLabel","SwitchFormAssociated"];export{c as Checked,l as Default,d as Disabled,h as DisabledChecked,u as NativeLabel,p as SwitchFormAssociated,b as WithLabel,z as __namedExportsOrder,$ as default};
