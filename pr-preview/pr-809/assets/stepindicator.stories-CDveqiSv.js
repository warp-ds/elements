import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{c as t,h as n,i as r,n as i,t as a}from"./lit-rOiCLj4P.js";import{a as o,n as s,o as c,r as l,t as u}from"./i18n-DlmjyDK4.js";import{l as d,r as f,s as p,t as m}from"./decorate-CrDY0Lq8.js";import{t as h}from"./icon-CCwOAt1w.js";import{n as g,t as _}from"./styles-DTXae_Hw.js";import{r as v,t as y}from"./if-defined-Ct7Um83u.js";var b;function x(){return(x=e((()=>{a(),b=n`
	[part="base"] {
		width: 100%;
	}

	:host([horizontal]) [part="base"] {
		display: flex;
	}
`})))()}var S;function C(){return(C=e((()=>{a(),f(),_(),x(),S=class extends i{constructor(...e){super(...e),this.horizontal=!1,this.right=!1}static{this.styles=[g,b]}updated(){this.updateStepsContext()}updateStepsContext(){this.querySelectorAll(`w-step`).forEach(e=>{e.setContext({horizontal:this.horizontal,right:this.right})})}render(){return t`
			<div role="list" part="base">
				<slot></slot>
			</div>
		`}},m([d({type:Boolean,reflect:!0})],S.prototype,`horizontal`,void 0),m([d({type:Boolean,reflect:!0})],S.prototype,`right`,void 0),customElements.get(`w-step-indicator`)||customElements.define(`w-step-indicator`,S)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})))()}var P;function F(){return(F=e((()=>{a(),P=n`
	:host {
		--_transition-property: var(
			--w-c-step-transition-property,
			color,
			background-color,
			border-color,
			text-decoration-color,
			fill,
			stroke
		);
		--_transition-duration: var(--w-c-step-transition-duration, 0.15s);
		--_transition-timing-function: var(
			--w-c-step-transition-timing-function,
			cubic-bezier(0.4, 0, 0.2, 1)
		);
		--_column-gap-vertical: var(--w-c-step-column-gap-vertical, 0.8rem);
		--_indicator-size: var(--w-c-step-indicator-size, 2rem);
		--_indicator-line-thickness: var(
			--w-c-step-indicator-line-thickness,
			0.2rem
		);
		--_indicator-line-color: var(
			--w-c-step-indicator-line-color,
			var(--w-s-color-background-disabled)
		);
		--_indicator-line-color-completed: var(
			--w-c-step-indicator-line-color-completed,
			var(--w-s-color-background-primary)
		);
		--_dot-color: var(--w-c-step-color, var(--w-s-color-icon-inverted));
		--_dot-color-border: var(--w-c-step-color-border, var(--w-s-color-border));
		--_dot-color-background: var(
			--w-c-step-color-background,
			var(--w-s-color-background)
		);
		--_dot-color-active: var(
			--w-c-step-color-active,
			var(--w-s-color-icon-inverted)
		);
		--_dot-color-border-active: var(
			--w-c-step-color-border-active,
			var(--w-s-color-border-primary)
		);
		--_dot-color-background-active: var(
			--w-c-step-color-background-active,
			var(--w-s-color-background-primary)
		);
		--_dot-color-completed: var(
			--w-c-step-color-completed,
			var(--w-s-color-icon-inverted)
		);
		--_dot-color-border-completed: var(
			--w-c-step-color-border-completed,
			var(--w-s-color-border-primary)
		);
		--_dot-color-background-completed: var(
			--w-c-step-color-background-completed,
			var(--w-s-color-background-primary)
		);
		--_dot-border-radius: var(--w-c-step-dot-border-radius, 9999px);
		--_dot-border-width: var(--w-c-step-dot-border-width, 2px);
		--_content-gap-vertical: var(--w-c-step-content-gap-vertical, 3.2rem);
		--_content-padding-inline-horizontal: var(
			--w-c-step-content-padding-inline-horizontal,
			1.2rem
		);
	}

	/* transitions */
	[part="line-horizontal"],
	[part="dot"],
	[part="line"] {
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
	}

	/* base/wrapper element */
	[part="base"] {
		grid-template-columns: var(--_indicator-size) 1fr;
		grid-template-rows: var(--_indicator-size) auto;
		grid-auto-flow: column;
		column-gap: var(--_column-gap-vertical);
		display: grid;
	}
	[data-orientation="horizontal"] {
		grid-auto-flow: row;
		column-gap: 0;
		height: 100%;
		align-items: center;
		grid-template-columns: 1fr var(--_indicator-size) 1fr;
		grid-template-rows: auto var(--_indicator-size);
	}
	[data-orientation="vertical"][data-align="right"] {
		grid-template-columns: 1fr var(--_indicator-size);
	}

	/* line-horizontal */
	[part="line-horizontal"] {
		width: 100%;
		height: var(--_indicator-line-thickness);
		grid-row-start: 2;
		background-color: var(--_indicator-line-color);
	}
	:host([active]) [part="line-horizontal"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host([completed]) [part="line-horizontal"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host(:first-child) [part="line-horizontal"] {
		visibility: hidden;
	}

	/* dot */
	[part="dot"] {
		border-color: var(--_dot-color-border);
		width: var(--_indicator-size);
		height: var(--_indicator-size);
		color: var(--_dot-color);
		background-color: var(--_dot-color-background);
		border-radius: var(--_dot-border-radius);
		border-width: var(--_dot-border-width);
	}
	[data-orientation="horizontal"] [part="dot"] {
		justify-self: end;
		grid-row-start: 2;
	}
	[data-orientation="vertical"][data-align="right"] [part="dot"] {
		grid-column-start: 2;
	}
	:host([active]) [part="dot"] {
		color: var(--_dot-color-active);
		border-color: var(--_dot-color-border-active);
		background-color: var(--_dot-color-background-active);
	}
	:host([completed]) [part="dot"] {
		color: var(--_dot-color-completed);
		border-color: var(--_dot-color-border-completed);
		background-color: var(--_dot-color-background-completed);
	}

	/* line */
	[part="line"] {
		width: var(--_indicator-line-thickness);
		height: 100%;
		justify-self: center;
		background-color: var(--_indicator-line-color);
	}
	[data-orientation="horizontal"] [part="line"] {
		width: 100%;
		height: var(--_indicator-line-thickness);
		grid-row-start: 2;
	}
	[data-orientation="vertical"][data-align="right"] [part="line"] {
		grid-column-start: 2;
	}
	:host([active]) [part="line"] {
		background-color: var(--_indicator-line-color);
	}
	:host([completed]) [part="line"] {
		background-color: var(--_indicator-line-color-completed);
	}
	:host(:last-child) [part="line"] {
		visibility: hidden;
	}

	/* content */
	[part="content"] {
		padding-bottom: var(--_content-gap-vertical);
		grid-row: span 2 / span 2;
	}
	:host(:last-child) [data-orientation="vertical"] [part="content"] {
		padding-bottom: 0;
	}
	[data-orientation="horizontal"] [part="content"] {
		height: 100%;
		margin-bottom: 0;
		padding-bottom: 0;
		padding-left: var(--_content-padding-inline-horizontal);
		padding-right: var(--_content-padding-inline-horizontal);
		grid-column: span 3 / span 3;
		text-align: center;
		grid-row: 1;
	}
	[data-orientation="vertical"][data-align="right"] [part="content"] {
		text-align: right;
	}
`})))()}var I;function L(){return(L=e((()=>{c(),a(),f(),y(),h(),l(),_(),T(),D(),k(),j(),N(),F(),I=class extends i{static{this.styles=[g,P]}constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1},this._internals=this.attachInternals(),u(E,A,O,w,M)}connectedCallback(){super.connectedCallback(),this._internals.role=`listitem`}setContext(e){this._context=e}getAriaLabel(){return this.completed?o._({id:`steps.aria.completed`,message:`Step indicator completed circle`,comment:`Completed circle`}):this.active?o._({id:`steps.aria.active`,message:`Step indicator active circle`,comment:`Active circle`}):o._({id:`steps.aria.emptyCircle`,message:`Empty circle`,comment:`Empty circle`})}render(){let{horizontal:e,right:n}=this._context;return t`
			<div
				part="base"
				data-orientation="${e?`horizontal`:`vertical`}"
				data-align="${n?`right`:`left`}"
			>
				${e?t`<div part="line-horizontal"></div>`:r}
				<div
					part="dot"
					role="img"
					aria-label=${this.getAriaLabel()}
					aria-current=${v(this.active?`step`:void 0)}
				>
					${this.completed?t`<w-icon
									name="Check"
									size="small"
									locale="${s()}"
									data-testid="completed-icon"
									part="completed-icon"
								></w-icon>`:r}
				</div>
				<div part="line"></div>
				<div part="content">
					<slot></slot>
				</div>
			</div>
		`}},m([d({type:Boolean,reflect:!0})],I.prototype,`active`,void 0),m([d({type:Boolean,reflect:!0})],I.prototype,`completed`,void 0),m([p()],I.prototype,`_context`,void 0),customElements.get(`w-step`)||customElements.define(`w-step`,I)})))()}var R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{a(),C(),L(),R={title:`Components/Step Indicator`,component:`w-step-indicator`,argTypes:{horizontal:{control:{type:`boolean`},description:`Display steps in horizontal layout`,defaultValue:!1},right:{control:{type:`boolean`},description:`Align steps to the right (vertical layout only)`,defaultValue:!1}}},z={args:{horizontal:!1,right:!1},render:e=>t`
        <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
            <w-step completed>
                <p class="text-body font-bold">Step 1: Account Setup</p>
                <p class="text-caption">
                    Create your account and verify your email address.
                </p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Step 2: Profile Information</p>
                <p class="text-caption">
                    Fill in your personal details and preferences.
                </p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 3: Payment Method</p>
                <p class="text-caption">
                    Add a payment method to complete your registration.
                </p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 4: Confirmation</p>
                <p class="text-caption">Review and confirm your information.</p>
            </w-step>
        </w-step-indicator>
    `},B={args:{horizontal:!0,right:!1},render:e=>t`
        <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
            <w-step completed>
                <p class="text-body font-bold">Setup</p>
                <p class="text-caption">Account created</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Profile</p>
                <p class="text-caption">Information added</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Payment</p>
                <p class="text-caption">Add payment method</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Done</p>
                <p class="text-caption">Complete setup</p>
            </w-step>
        </w-step-indicator>
    `},V={args:{horizontal:!1,right:!0},render:e=>t`
        <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
            <w-step completed>
                <p class="text-body font-bold">Order Placed</p>
                <p class="text-caption">
                    Your order has been received and is being processed.
                </p>
                <small>2:34 PM</small>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Payment Confirmed</p>
                <p class="text-caption">Payment has been successfully processed.</p>
                <small>2:35 PM</small>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Preparing for Shipment</p>
                <p class="text-caption">Your items are being prepared for shipment.</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Shipped</p>
                <p class="text-caption">Your order is on its way!</p>
            </w-step>
        </w-step-indicator>
    `},H={render:()=>t`
        <w-step-indicator>
            <w-step completed>
                <p class="text-body font-bold">Step 1</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Step 2</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Step 3</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 4</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 5</p>
            </w-step>
        </w-step-indicator>
    `},U={render:()=>t`
        <w-step-indicator horizontal>
            <w-step completed>
                <p class="text-body font-bold">Start</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Progress</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Current</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Next</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">End</p>
            </w-step>
        </w-step-indicator>
    `},W={render:()=>t`
        <w-step-indicator>
            <w-step completed>
                <p class="text-body font-bold">Registration</p>
                <p class="text-caption">Account successfully created</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Verification</p>
                <p class="text-caption">Email address verified</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Setup</p>
                <p class="text-caption">Profile information completed</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Welcome</p>
                <p class="text-caption">You're all set to get started!</p>
            </w-step>
        </w-step-indicator>
    `},G={render:()=>t`
        <w-step-indicator>
            <w-step completed>First</w-step>
            <w-step active>Second</w-step>
            <w-step>Third</w-step>
        </w-step-indicator>
    `},K=[`Default`,`Horizontal`,`RightAligned`,`SimpleSteps`,`SimpleHorizontal`,`AllCompleted`,`MinimalExample`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: false
  },
  render: args => html\`
        <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
            <w-step completed>
                <p class="text-body font-bold">Step 1: Account Setup</p>
                <p class="text-caption">
                    Create your account and verify your email address.
                </p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Step 2: Profile Information</p>
                <p class="text-caption">
                    Fill in your personal details and preferences.
                </p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 3: Payment Method</p>
                <p class="text-caption">
                    Add a payment method to complete your registration.
                </p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 4: Confirmation</p>
                <p class="text-caption">Review and confirm your information.</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    right: false
  },
  render: args => html\`
        <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
            <w-step completed>
                <p class="text-body font-bold">Setup</p>
                <p class="text-caption">Account created</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Profile</p>
                <p class="text-caption">Information added</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Payment</p>
                <p class="text-caption">Add payment method</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Done</p>
                <p class="text-caption">Complete setup</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: true
  },
  render: args => html\`
        <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
            <w-step completed>
                <p class="text-body font-bold">Order Placed</p>
                <p class="text-caption">
                    Your order has been received and is being processed.
                </p>
                <small>2:34 PM</small>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Payment Confirmed</p>
                <p class="text-caption">Payment has been successfully processed.</p>
                <small>2:35 PM</small>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Preparing for Shipment</p>
                <p class="text-caption">Your items are being prepared for shipment.</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Shipped</p>
                <p class="text-caption">Your order is on its way!</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-step-indicator>
            <w-step completed>
                <p class="text-body font-bold">Step 1</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Step 2</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Step 3</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 4</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Step 5</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-step-indicator horizontal>
            <w-step completed>
                <p class="text-body font-bold">Start</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Progress</p>
            </w-step>
            <w-step active>
                <p class="text-body font-bold">Current</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">Next</p>
            </w-step>
            <w-step>
                <p class="text-body font-bold">End</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-step-indicator>
            <w-step completed>
                <p class="text-body font-bold">Registration</p>
                <p class="text-caption">Account successfully created</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Verification</p>
                <p class="text-caption">Email address verified</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Setup</p>
                <p class="text-caption">Profile information completed</p>
            </w-step>
            <w-step completed>
                <p class="text-body font-bold">Welcome</p>
                <p class="text-caption">You're all set to get started!</p>
            </w-step>
        </w-step-indicator>
    \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-step-indicator>
            <w-step completed>First</w-step>
            <w-step active>Second</w-step>
            <w-step>Third</w-step>
        </w-step-indicator>
    \`
}`,...G.parameters?.docs?.source}}}})))()}q();export{W as AllCompleted,z as Default,B as Horizontal,G as MinimalExample,V as RightAligned,U as SimpleHorizontal,H as SimpleSteps,K as __namedExportsOrder,R as default};