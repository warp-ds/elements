import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,n as r,t as i}from"./lit-BcpSydpl.js";import{r as a,s as o,t as s}from"./decorate-DkSsDgub.js";import{n as c,t as l}from"./styles-C65P6sGa.js";import{i as u,n as d,r as f}from"./utilities-CmV72L-s.js";import{n as p,t as m}from"./FormControlMixin-BCJbRrUC.js";var h;function g(){return(g=e((()=>{i(),h=n`
	:host {
		--_border-width: var(--w-c-switch-border-width, 1px);
		--_border-radius: var(--w-c-switch-border-radius, 9999px);
		--_handle-border-radius: var(--w-c-switch-border-radius-handle, 9999px);

		--_background-color: var(
			--w-c-switch-color-background,
			var(--w-s-color-background)
		);
		--_background-color-hover: var(
			--w-c-switch-color-background-hover,
			var(--w-s-color-background-hover)
		);
		--_background-color-active: var(
			--w-c-switch-color-background-active,
			var(--w-s-color-background-primary)
		);
		--_background-color-active-hover: var(
			--w-c-switch-color-background-active-hover,
			var(--w-s-color-background-primary-hover)
		);
		--_background-color-disabled: var(
			--w-c-switch-color-background-disabled,
			var(--w-s-color-background-disabled-subtle)
		);
		--_background-color-active-disabled: var(
			--w-c-switch-color-background-active-disabled,
			var(--w-s-color-background-disabled)
		);

		--_border-color: var(
			--w-c-switch-color-border,
			var(--w-s-color-border-strong)
		);
		--_border-color-hover: var(
			--w-c-switch-color-border-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_border-color-active: var(
			--w-c-switch-color-border-active,
			var(--w-s-color-background-primary)
		);
		--_border-color-active-hover: var(
			--w-c-switch-color-border-active-hover,
			var(--w-s-color-background-primary-hover)
		);
		--_border-color-disabled: var(
			--w-c-switch-color-border-disabled,
			var(--w-s-color-border-disabled)
		);
		--_border-color-active-disabled: var(
			--w-c-switch-color-border-active-disabled,
			var(--w-s-color-background-disabled)
		);

		--_handle-color: var(
			--w-c-switch-color-handle,
			var(--w-s-color-border-strong)
		);
		--_handle-color-hover: var(
			--w-c-switch-color-handle-hover,
			var(--w-s-color-border-strong-hover)
		);
		--_handle-color-active: var(
			--w-c-switch-color-handle-active,
			var(--w-s-color-background)
		);
		--_handle-color-active-hover: var(
			--w-c-switch-color-handle-active-hover,
			var(--w-s-color-background-hover)
		);
		--_handle-color-disabled: var(
			--w-c-switch-color-handle-disabled,
			var(--w-s-color-background-disabled)
		);
		--_handle-color-active-disabled: var(
			--w-c-switch-color-handle-active-disabled,
			var(--w-s-color-background-disabled-subtle)
		);

		--_height: var(--w-c-switch-height, 2.4rem);
		--_width: var(--w-c-switch-width, 4.4rem);
		--_handle-height: var(--w-c-switch-height-handle, 1.6rem);
		--_handle-width: var(--w-c-switch-width-handle, 1.6rem);
		--_handle-gap: var(--w-c-switch-gap-handle, 0.4rem);

		--_transition: var(
			--w-c-switch-transition,
			background-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			border-color 150ms cubic-bezier(0.4, 0, 0.2, 1),
			transform 150ms cubic-bezier(0.4, 0, 0.2, 1)
		);

		border-radius: var(--_border-radius); /* for outline */
		display: inline-block;
	}

	:host(:focus) {
		outline: none;
	}

	:host(:focus-visible) {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, 1px);
	}

	:host(:hover) {
		--_background-color: var(--_background-color-hover);
		--_border-color: var(--_border-color-hover);
		--_handle-color: var(--_handle-color-hover);
	}

	:host([checked]) {
		--_background-color: var(--_background-color-active);
		--_border-color: var(--_border-color-active);
		--_handle-color: var(--_handle-color-active);
	}

	:host([checked]:hover) {
		--_background-color: var(--_background-color-active-hover);
		--_border-color: var(--_border-color-active-hover);
		--_handle-color: var(--_handle-color-active-hover);
	}

	:host([checked]) [part="handle"] {
		transform: translateX(
			calc(var(--_width) - var(--_handle-width) - calc(var(--_handle-gap) * 2))
		);
	}

	:host([disabled]) {
		pointer-events: none;
		--_background-color: var(--_background-color-disabled);
		--_border-color: var(--_border-color-disabled);
		--_handle-color: var(--_handle-color-disabled);
	}

	:host([checked][disabled]) {
		--_background-color: var(--_background-color-active-disabled);
		--_border-color: var(--_border-color-active-disabled);
		--_handle-color: var(--_handle-color-active-disabled);
	}

	[part="base"] {
		background-color: var(--_background-color);
		border-radius: var(--_border-radius);
		cursor: pointer;
		display: block;
		height: var(--_height);
		position: relative;
		width: var(--_width);
		transition: var(--_transition);
	}

	[part="track"] {
		border-radius: var(--_border-radius);
		border-color: var(--_border-color);
		border-width: var(--_border-width);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		transition: var(--_transition);
	}

	[part="handle"] {
		background-color: var(--_background-color);
		background-color: var(--_handle-color);
		border-radius: var(--_handle-border-radius);
		height: var(--_handle-height);
		left: var(--_handle-gap);
		position: absolute;
		top: var(--_handle-gap);
		transition: var(--_transition);
		width: var(--_handle-width);
	}
`})))()}var _;function v(){return(v=e((()=>{p(),i(),a(),l(),g(),_=class extends m(r){constructor(...e){super(...e),this.checked=!1,this.disabled=!1,this.tabIndex=0,this.#e=!1,this._handleKeyDown=e=>{this.disabled||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this._handleClick())}}#e;static{this.styles=[c,h]}_handleClick(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:this.checked,value:this.value||null},bubbles:!0,composed:!0})))}_syncA11yState(){this.internals.ariaChecked=this.checked?`true`:`false`,this.internals.ariaDisabled=this.disabled?`true`:null}connectedCallback(){this.#e=this.checked,super.connectedCallback(),this.internals.role=`switch`;let e=this.getAttribute(`aria-label`);e&&(this.internals.ariaLabel=e),this.disabled||this.setValue(this.checked&&this.value?this.value:null),this._syncA11yState(),this.addEventListener(`click`,this._handleClick),this.addEventListener(`keydown`,this._handleKeyDown)}disconnectedCallback(){this.removeEventListener(`click`,this._handleClick),this.removeEventListener(`keydown`,this._handleKeyDown),super.disconnectedCallback()}willUpdate(e){e.has(`checked`)&&(this.disabled||this.setValue(this.checked&&this.value?this.value:null)),(e.has(`checked`)||e.has(`disabled`))&&this._syncA11yState()}resetFormControl(){this.checked=this.#e}render(){return t`
			<div part="base">
				<span data-testid="track" part="track"></span>
				<span data-testid="handle" part="handle"></span>
			</div>
		`}},s([o({type:String,reflect:!0})],_.prototype,`name`,void 0),s([o({type:String,reflect:!0})],_.prototype,`value`,void 0),s([o({type:Boolean,reflect:!0})],_.prototype,`checked`,void 0),s([o({type:Boolean,reflect:!0})],_.prototype,`disabled`,void 0),s([o({type:Number,reflect:!0,attribute:`tabindex`})],_.prototype,`tabIndex`,void 0),customElements.get(`w-switch`)||customElements.define(`w-switch`,_)})))()}var y,b,x,S,C,w,T;function E(){return(E=e((()=>{f(),i(),v(),y={title:`Forms/Switch`,component:`w-switch`,argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},value:{control:`text`}},render(e){return t`
            <div style="display: inline-flex; align-items: center; gap: 8px;">
                <label id="switch-label">Enable notifications</label>
                <w-switch
                    aria-labelledby="switch-label"
                    ${u(d(e))}
                ></w-switch>
            </div>
        `}},b={args:{checked:!1,disabled:!1}},x={args:{checked:!0,disabled:!1}},S={args:{checked:!1,disabled:!0}},C={args:{checked:!0,disabled:!0}},w={render:()=>t`
            <form
                @submit=${e=>{e.preventDefault();let t=e.currentTarget,n=t.querySelector(`[data-status]`);if(!n)return;let r=new FormData(t),i=`notifications`,a=r.get(i);n.textContent=a===null?`Submitted: no switch value captured.`:`Submitted: ${i}=${String(a)}`}}
                style="display: grid; gap: 12px; max-width: 320px;"
            >
                <div style="display: inline-flex; align-items: center; gap: 8px;">
                    <label for="switch-form">Enable notifications</label>
                    <w-switch
                        id="switch-form"
                        name="notifications"
                        value="enabled"
                    ></w-switch>
                </div>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        `},T=[`Default`,`Checked`,`Disabled`,`DisabledChecked`,`SwitchFormAssociated`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
                    <label for="switch-form">Enable notifications</label>
                    <w-switch
                        id="switch-form"
                        name="notifications"
                        value="enabled"
                    ></w-switch>
                </div>
                <button type="submit">Submit</button>
                <div data-status aria-live="polite"></div>
            </form>
        \`;
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{x as Checked,b as Default,S as Disabled,C as DisabledChecked,w as SwitchFormAssociated,T as __namedExportsOrder,y as default};