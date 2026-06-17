import{i as e}from"./preload-helper-xPQekRTU.js";import{D as t,E as n,Ht as r,Kt as i,Lt as a,O as o,Rt as s,Wt as c,b as l,f as u,l as d,p as f,u as p}from"./iframe-Bggwegwf.js";import{n as m,t as h}from"./form-control-DtXadPi-.js";var g,_=e((()=>{a(),g=i(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-s-color-border-strong\\]{background-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:bg-\\[--w-s-color-border-strong-hover\\]{background-color:var(--w-s-color-border-strong-hover)}.border{border-width:1px}.rounded-full{border-radius:9999px}.block{display:block}.inline-block{display:inline-block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline{outline-style:solid}.left-0{left:0}.left-4{left:.4rem}.top-0{top:0}.top-4{top:.4rem}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.group:hover .group-hover\\:s-bg-hover{background-color:var(--w-s-color-background-hover)}.group:hover .group-hover\\:s-bg-primary-hover{background-color:var(--w-s-color-background-primary-hover)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-strong{border-color:var(--w-s-color-border-strong)}.group:hover .group-hover\\:s-border-strong-hover{border-color:var(--w-s-color-border-strong-hover)}.h-16{height:1.6rem}.h-24{height:2.4rem}.h-full{height:100%}.w-16{width:1.6rem}.w-44{width:4.4rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.translate-x-20{--w-translate-x:2rem;transform:translateX(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x), var(--w-translate-y), var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotateZ(var(--w-rotate-z)) skewX(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`)})),v,y,b=e((()=>{t(),h(),a(),l(),d(),_(),f(),v={base:`block relative h-24 w-44 cursor-pointer group focusable rounded-full`,disabled:`pointer-events-none`,track:`absolute top-0 left-0 h-full w-full rounded-full transition-colors`,trackActive:`s-bg-primary group-hover:s-bg-primary-hover`,trackInactive:`s-bg border s-border-strong group-hover:s-bg-hover group-hover:s-border-strong-hover`,trackDisabledOn:`s-bg-disabled`,trackDisabledOff:`s-bg-disabled-subtle border s-border-disabled`,handle:`absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform`,handleSelected:`translate-x-20`,handleActive:`s-bg`,handleNotDisabled:`bg-[--w-s-color-border-strong] group-hover:bg-[--w-s-color-border-strong-hover]`,handleDisabledOn:`s-bg-disabled-subtle`,handleDisabledOff:`s-bg-disabled`,a11y:`sr-only`},y=class extends m(s){constructor(...e){super(...e),this.checked=!1,this.disabled=!1,this.#e=!1,this._handleHostClick=e=>{this.disabled||e.composedPath()[0]===this&&this._handleClick()},this._handleKeyDown=e=>{this.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._handleClick())}}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}#e;static{this.styles=[p,g,c`
			:host {
				display: inline-block;
			}

			button:focus {
				outline: none;
			}

			button:focus-visible {
				outline: 2px solid var(--w-s-color-border-focus);
				outline-offset: var(--w-outline-offset, 1px);
			}
		`]}get _baseClasses(){return o([v.base,this.disabled&&v.disabled])}get _trackClasses(){return o([v.track,this.disabled?this.checked?v.trackDisabledOn:v.trackDisabledOff:this.checked?v.trackActive:v.trackInactive])}get _handleClasses(){return o([v.handle,this.checked&&v.handleSelected,this.disabled?this.checked?v.handleDisabledOn:v.handleDisabledOff:this.checked?v.handleActive:v.handleNotDisabled])}_handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:this.value||null},bubbles:!0,composed:!0})))}_syncA11yState(){this.internals.ariaChecked=this.checked?`true`:`false`,this.internals.ariaDisabled=this.disabled?`true`:null}connectedCallback(){this.#e=this.checked,super.connectedCallback(),this.internals.role=`switch`;let e=this.getAttribute(`aria-label`);e&&(this.internals.ariaLabel=e),this.disabled||this.setValue(this.checked&&this.value?this.value:null),this._syncA11yState(),this.addEventListener(`click`,this._handleHostClick),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){this.removeEventListener(`click`,this._handleHostClick),this.removeEventListener(`keydown`,this._handleKeyDown),super.disconnectedCallback()}willUpdate(e){e.has(`checked`)&&(this.disabled||this.setValue(this.checked&&this.value?this.value:null)),(e.has(`checked`)||e.has(`disabled`))&&this._syncA11yState()}resetFormControl(){this.checked=this.#e}render(){return r`
			<div>
				<button
					type="button"
					role="none"
					tabindex=${this.disabled?-1:0}
					class=${this._baseClasses}
					?disabled=${this.disabled}
					@click=${this._handleClick}
				>
					<span data-testid="track" class=${this._trackClasses}></span>
					<span data-testid="handle" class=${this._handleClasses}></span>
				</button>
			</div>
		`}},u([n({type:String,reflect:!0})],y.prototype,`name`,void 0),u([n({type:String,reflect:!0})],y.prototype,`value`,void 0),u([n({type:Boolean,reflect:!0})],y.prototype,`checked`,void 0),u([n({type:Boolean,reflect:!0})],y.prototype,`disabled`,void 0),customElements.get(`w-switch`)||customElements.define(`w-switch`,y)})),x,S,C,w,T,E,D,O,k;e((()=>{a(),b(),x={title:`Forms/Switch`,component:`w-switch`,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},value:{control:`text`}}},S={args:{checked:!1,disabled:!1}},C={args:{checked:!0,disabled:!1}},w={args:{checked:!1,disabled:!0}},T={args:{checked:!0,disabled:!0}},E={render:()=>r`
        <div style="display: inline-flex; align-items: center; gap: 8px;">
            <span id="switch-label">Enable notifications</span>
            <w-switch aria-labelledby="switch-label"></w-switch>
        </div>
    `},D={render:()=>r`
        <div style="display: inline-flex; align-items: center; gap: 8px;">
            <label for="native-label-switch">Enable notifications</label>
            <w-switch
                id="native-label-switch"
                name="notifications"
                value="enabled"
            ></w-switch>
        </div>
    `},O={render:()=>r`
            <form
                @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);if(!n)return;let r=new FormData(t),i=`notifications`,a=r.get(i);n.textContent=a===null?`Submitted: no switch value captured.`:`Submitted: ${i}=${String(a)}`}}
                style="display: grid; gap: 12px; max-width: 320px;"
            >
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
        `},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="display: inline-flex; align-items: center; gap: 8px;">
            <span id="switch-label">Enable notifications</span>
            <w-switch aria-labelledby="switch-label"></w-switch>
        </div>
    \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const status = form.querySelector("[data-status]") as HTMLElement | null;
      if (!status) return;
      const data = new FormData(form);
      const name = "notifications";
      const value = data.get(name);
      status.textContent = value === null ? "Submitted: no switch value captured." : \`Submitted: \${name}=\${String(value)}\`;
    };
    return html\`
            <form
                @submit=\${handleSubmit}
                style="display: grid; gap: 12px; max-width: 320px;"
            >
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`WithLabel`,`NativeLabel`,`SwitchFormAssociated`]}))();export{C as Checked,S as Default,w as Disabled,T as DisabledChecked,D as NativeLabel,O as SwitchFormAssociated,E as WithLabel,k as __namedExportsOrder,x as default};