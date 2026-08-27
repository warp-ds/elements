import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,h as i,l as a,r as o,s,t as c,x as l}from"./decorate-Bt2QF_uA.js";import{a as u,n as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{n as h,t as g}from"./index.m-DHqwZk2H.js";import{t as _}from"./icon-ND47zKHd.js";import{n as v,t as y}from"./styles-Cw_r5k83.js";import{r as b,t as x}from"./if-defined-DBI32Ir5.js";var S;function C(){return(C=e((()=>{n(),S=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.w-full{width:100%}`)})))()}var w,T;function E(){return(E=e((()=>{g(),n(),o(),y(),C(),w={wrapper:`w-full`,horizontal:`flex`},T=class extends a{constructor(...e){super(...e),this.horizontal=!1,this.right=!1}static{this.styles=[v,S]}updated(){this.updateStepsContext()}updateStepsContext(){let e=this.querySelectorAll(`w-step`);e.forEach((t,n)=>{t.setContext({horizontal:this.horizontal,right:this.right,isLast:n===e.length-1,isFirst:n===0})})}render(){let e=h([w.wrapper,this.horizontal&&w.horizontal]);return i`
			<div role="list" class=${e}>
				<slot></slot>
			</div>
		`}},c([s({type:Boolean,reflect:!0})],T.prototype,`horizontal`,void 0),c([s({type:Boolean,reflect:!0})],T.prototype,`right`,void 0),customElements.get(`w-step-indicator`)||customElements.define(`w-step-indicator`,T)})))()}var D;function O(){return(O=e((()=>{D=JSON.parse(`{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})))()}var k;function A(){return(A=e((()=>{k=JSON.parse(`{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}`)})))()}var j;function M(){return(M=e((()=>{j=JSON.parse(`{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}`)})))()}var N;function P(){return(P=e((()=>{N=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}`)})))()}var F;function I(){return(I=e((()=>{F=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})))()}var L;function R(){return(R=e((()=>{n(),L=l(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.text-right{text-align:right}.border-2{border-width:2px}.rounded-full{border-radius:9999px}.flex{display:flex}.grid{display:grid}.flex-1{flex:1}.gap-x-8{column-gap:.8rem}.row-span-2{grid-row:span 2/span 2}.col-span-3{grid-column:span 3/span 3}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.col-start-2{grid-column-start:2}.grid-flow-col{grid-auto-flow:column}.grid-rows-\\[20px_auto\\]{grid-template-rows:20px auto}.grid-rows-\\[auto_20px\\]{grid-template-rows:auto 20px}.grid-cols-\\[1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr}.grid-cols-\\[1fr_20px\\]{grid-template-columns:1fr 20px}.grid-cols-\\[20px_1fr\\]{grid-template-columns:20px 1fr}.items-center{align-items:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-icon-inverted{color:var(--w-s-color-icon-inverted)}.s-border{border-color:var(--w-s-color-border)}.s-border-primary{border-color:var(--w-s-color-border-primary)}.h-2{height:.2rem}.h-20{height:2rem}.h-full{height:100%}.w-2{width:.2rem}.w-20{width:2rem}.w-full{width:100%}.last\\:mb-0:last-child{margin-bottom:0}.px-12{padding-left:1.2rem;padding-right:1.2rem}.pb-0{padding-bottom:0}.pb-32{padding-bottom:3.2rem}.invisible{visibility:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}`)})))()}var z,B;function V(){return(V=e((()=>{g(),f(),n(),o(),x(),_(),p(),y(),O(),A(),M(),P(),I(),R(),z={base:`group/step`,vertical:`group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-8`,horizontal:`group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid items-center`,alignLeft:`grid-cols-[20px_1fr]`,alignRight:`grid-cols-[1fr_20px] text-right`,dot:`rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted`,dotAlignRight:`col-start-2`,dotHorizontal:`row-start-2 justify-self-end`,dotActive:`s-border-primary s-bg-primary`,dotIncomplete:`s-border s-bg`,line:`transition-colors duration-300`,lineVertical:`w-2 h-full justify-self-center`,lineAlignRight:`col-start-2`,lineHorizontal:`h-2 w-full row-start-2`,lineIncomplete:`s-bg-disabled`,lineComplete:`s-bg-primary`,content:`last:mb-0`,contentVertical:`row-span-2 pb-32`,contentHorizontal:`col-span-3 px-12 row-start-1 text-center`},B=class extends a{static{this.styles=[v,L]}constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1,isLast:!1,isFirst:!1},this._internals=this.attachInternals(),m(k,N,j,D,F)}connectedCallback(){super.connectedCallback(),this._internals.role=`listitem`}setContext(e){this._context=e}getAriaLabel(){return this.completed?u._({id:`steps.aria.completed`,message:`Step indicator completed circle`,comment:`Completed circle`}):this.active?u._({id:`steps.aria.active`,message:`Step indicator active circle`,comment:`Active circle`}):u._({id:`steps.aria.emptyCircle`,message:`Empty circle`,comment:`Empty circle`})}render(){let e=!this._context.horizontal,t=!this._context.right,n=this._context.isFirst,a=this._context.isLast,o=h([z.base,e?z.vertical:z.horizontal,e?t?z.alignLeft:z.alignRight:``]),s=h([z.line,z.lineHorizontal,this.active||this.completed?z.lineComplete:z.lineIncomplete,n?`invisible`:``]),c=h([z.dot,e?t?``:z.dotAlignRight:z.dotHorizontal,this.active||this.completed?z.dotActive:z.dotIncomplete]),l=h([z.line,e?z.lineVertical:z.lineHorizontal,e&&!t?z.lineAlignRight:``,this.completed?z.lineComplete:z.lineIncomplete,a?`invisible`:``]),u=h([z.content,e?z.contentVertical:z.contentHorizontal,a?`pb-0`:``]);return i`
			<div
				class="${o}"
				style=${b(this._context.horizontal?`height: 100%;`:void 0)}
			>
				${e?r:i`<div class=${s}></div>`}
				<div
					class=${c}
					role="img"
					aria-label=${this.getAriaLabel()}
					aria-current=${b(this.active?`step`:void 0)}
				>
					${this.completed?i`<w-icon
									name="Check"
									size="small"
									locale="${d()}"
									data-testid="completed-icon"
									class="flex"
								></w-icon>`:r}
				</div>
				<div class=${l}></div>
				<div
					class=${u}
					style=${b(this._context.horizontal?`height: 100%;`:void 0)}
				>
					<slot></slot>
				</div>
			</div>
		`}},c([s({type:Boolean,reflect:!0})],B.prototype,`active`,void 0),c([s({type:Boolean,reflect:!0})],B.prototype,`completed`,void 0),c([t()],B.prototype,`_context`,void 0),customElements.get(`w-step`)||customElements.define(`w-step`,B)})))()}var H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{n(),E(),V(),H={title:`Components/Step Indicator`,component:`w-step-indicator`,argTypes:{horizontal:{control:{type:`boolean`},description:`Display steps in horizontal layout`,defaultValue:!1},right:{control:{type:`boolean`},description:`Align steps to the right (vertical layout only)`,defaultValue:!1}}},U={args:{horizontal:!1,right:!1},render:e=>i`
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
    `},W={args:{horizontal:!0,right:!1},render:e=>i`
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
    `},G={args:{horizontal:!1,right:!0},render:e=>i`
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
    `},K={render:()=>i`
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
    `},q={render:()=>i`
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
    `},J={render:()=>i`
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
    `},Y={render:()=>i`
        <w-step-indicator>
            <w-step completed>First</w-step>
            <w-step active>Second</w-step>
            <w-step>Third</w-step>
        </w-step-indicator>
    `},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <w-step-indicator>
            <w-step completed>First</w-step>
            <w-step active>Second</w-step>
            <w-step>Third</w-step>
        </w-step-indicator>
    \`
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Horizontal`,`RightAligned`,`SimpleSteps`,`SimpleHorizontal`,`AllCompleted`,`MinimalExample`]})))()}Z();export{J as AllCompleted,U as Default,W as Horizontal,Y as MinimalExample,G as RightAligned,q as SimpleHorizontal,K as SimpleSteps,X as __namedExportsOrder,H as default};