import{i as e}from"./preload-helper-CwA5MRLW.js";import{A as t,Bt as n,C as r,D as i,Ht as a,J as o,Kt as s,Lt as c,O as l,Rt as u,_ as d,c as f,j as p,k as m,l as h,o as g,q as _,s as v,u as y,x as b}from"./iframe-CSK5tmm9.js";import{r as x,t as S}from"./if-defined-DK5DH2FI.js";var C,w=e((()=>{c(),C=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.grid{display:grid}.static{position:static}.w-full{width:100%}`)})),T,E,D=e((()=>{i(),c(),d(),g(),w(),y(),T={wrapper:`w-full`,horizontal:`flex`},E=class extends u{constructor(...e){super(...e),this.horizontal=!1,this.right=!1}static{this.styles=[v,C]}updated(){this.updateStepsContext()}updateStepsContext(){let e=this.querySelectorAll(`w-step`);e.forEach((t,n)=>{t.setContext({horizontal:this.horizontal,right:this.right,isLast:n===e.length-1,isFirst:n===0})})}render(){return a`
      <div role="list" class=${l([T.wrapper,this.horizontal&&T.horizontal])} ${this.horizontal&&`style='display: grid; grid-auto-rows: 1fr;grid-template-columns: 1fr;'`}>
        <slot></slot>
      </div>
    `}},h([r({type:Boolean,reflect:!0})],E.prototype,`horizontal`,void 0),h([r({type:Boolean,reflect:!0})],E.prototype,`right`,void 0),customElements.get(`w-step-indicator`)||customElements.define(`w-step-indicator`,E)})),O,k=e((()=>{O=JSON.parse(`{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})),A,j=e((()=>{A=JSON.parse(`{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}`)})),M,N=e((()=>{M=JSON.parse(`{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}`)})),P,F=e((()=>{P=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}`)})),I,L=e((()=>{I=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})),R,z,B=e((()=>{i(),o(),c(),d(),S(),f(),p(),w(),g(),k(),j(),N(),F(),L(),y(),R={base:`group/step`,vertical:`group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16`,horizontal:`group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid items-center`,alignLeft:`grid-cols-[20px_1fr]`,alignRight:`grid-cols-[1fr_20px] text-right`,dot:`rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted`,dotAlignRight:`col-start-2`,dotHorizontal:`row-start-2 justify-self-end`,dotActive:`s-border-primary s-bg-primary`,dotIncomplete:`s-border s-bg`,line:`transition-colors duration-300`,lineVertical:`w-2 h-full justify-self-center`,lineAlignRight:`col-start-2`,lineHorizontal:`h-2 w-full row-start-2`,lineIncomplete:`s-bg-disabled`,lineComplete:`s-bg-primary`,content:`last:mb-0`,contentVertical:`row-span-2 pb-32`,contentHorizontal:`col-span-3 px-16 row-start-1 text-center`},z=class extends u{static{this.styles=[v,C]}constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1,isLast:!1,isFirst:!1},this._internals=this.attachInternals(),m(A,P,M,O,I)}connectedCallback(){super.connectedCallback(),this._internals.role=`listitem`}setContext(e){this._context=e}getAriaLabel(){return this.completed?_._({id:`steps.aria.completed`,message:`Step indicator completed circle`,comment:`Completed circle`}):this.active?_._({id:`steps.aria.active`,message:`Step indicator active circle`,comment:`Active circle`}):_._({id:`steps.aria.emptyCircle`,message:`Empty circle`,comment:`Empty circle`})}render(){let e=!this._context.horizontal,r=!this._context.right,i=this._context.isFirst,o=this._context.isLast,s=l([R.base,e?R.vertical:R.horizontal,e?r?R.alignLeft:R.alignRight:``]),c=l([R.line,R.lineHorizontal,this.active||this.completed?R.lineComplete:R.lineIncomplete,i?`invisible`:``]),u=l([R.dot,e?r?``:R.dotAlignRight:R.dotHorizontal,this.active||this.completed?R.dotActive:R.dotIncomplete]),d=l([R.line,e?R.lineVertical:R.lineHorizontal,e&&!r?R.lineAlignRight:``,this.completed?R.lineComplete:R.lineIncomplete,o?`invisible`:``]),f=l([R.content,e?R.contentVertical:R.contentHorizontal,o?`pb-0`:``]);return a`
      <div class="${s}" style=${x(this._context.horizontal?`height: 100%;`:void 0)}>
        ${e?n:a`<div class=${c}></div>`}
        <div class=${u} role="img" aria-label=${this.getAriaLabel()} aria-current=${this.active?`step`:n}>
          ${this.completed?a`<w-icon name="Check" size="small" locale="${t()}" data-testid="completed-icon" class="flex"></w-icon>`:n}
        </div>
        <div class=${d}></div>
        <div class=${f} style=${x(this._context.horizontal?`height: 100%;`:void 0)}>
          <slot></slot>
        </div>
      </div>
    `}},h([r({type:Boolean,reflect:!0})],z.prototype,`active`,void 0),h([r({type:Boolean,reflect:!0})],z.prototype,`completed`,void 0),h([b()],z.prototype,`_context`,void 0),customElements.get(`w-step`)||customElements.define(`w-step`,z)})),V,H,U,W,G,K,q,J,Y;e((()=>{c(),D(),B(),V={title:`Components/Step Indicator`,component:`w-step-indicator`,argTypes:{horizontal:{control:{type:`boolean`},description:`Display steps in horizontal layout`,defaultValue:!1},right:{control:{type:`boolean`},description:`Align steps to the right (vertical layout only)`,defaultValue:!1}}},H={args:{horizontal:!1,right:!1},render:e=>a`
    <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
      <w-step completed>
        <h3>Step 1: Account Setup</h3>
        <p>Create your account and verify your email address.</p>
      </w-step>
      <w-step active>
        <h3>Step 2: Profile Information</h3>
        <p>Fill in your personal details and preferences.</p>
      </w-step>
      <w-step>
        <h3>Step 3: Payment Method</h3>
        <p>Add a payment method to complete your registration.</p>
      </w-step>
      <w-step>
        <h3>Step 4: Confirmation</h3>
        <p>Review and confirm your information.</p>
      </w-step>
    </w-step-indicator>
  `},U={args:{horizontal:!0,right:!1},render:e=>a`
    <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
      <w-step completed>
        <h4>Setup</h4>
        <p>Account created</p>
      </w-step>
      <w-step completed>
        <h4>Profile</h4>
        <p>Information added</p>
      </w-step>
      <w-step active>
        <h4>Payment</h4>
        <p>Add payment method</p>
      </w-step>
      <w-step>
        <h4>Done</h4>
        <p>Complete setup</p>
      </w-step>
    </w-step-indicator>
  `},W={args:{horizontal:!1,right:!0},render:e=>a`
    <w-step-indicator ?horizontal=${e.horizontal} ?right=${e.right}>
      <w-step completed>
        <h3>Order Placed</h3>
        <p>Your order has been received and is being processed.</p>
        <small>2:34 PM</small>
      </w-step>
      <w-step completed>
        <h3>Payment Confirmed</h3>
        <p>Payment has been successfully processed.</p>
        <small>2:35 PM</small>
      </w-step>
      <w-step active>
        <h3>Preparing for Shipment</h3>
        <p>Your items are being prepared for shipment.</p>
      </w-step>
      <w-step>
        <h3>Shipped</h3>
        <p>Your order is on its way!</p>
      </w-step>
    </w-step-indicator>
  `},G={render:()=>a`
    <w-step-indicator>
      <w-step completed>
        <strong>Step 1</strong>
      </w-step>
      <w-step completed>
        <strong>Step 2</strong>
      </w-step>
      <w-step active>
        <strong>Step 3</strong>
      </w-step>
      <w-step>
        <strong>Step 4</strong>
      </w-step>
      <w-step>
        <strong>Step 5</strong>
      </w-step>
    </w-step-indicator>
  `},K={render:()=>a`
    <w-step-indicator horizontal>
      <w-step completed>
        <strong>Start</strong>
      </w-step>
      <w-step completed>
        <strong>Progress</strong>
      </w-step>
      <w-step active>
        <strong>Current</strong>
      </w-step>
      <w-step>
        <strong>Next</strong>
      </w-step>
      <w-step>
        <strong>End</strong>
      </w-step>
    </w-step-indicator>
  `},q={render:()=>a`
    <w-step-indicator>
      <w-step completed>
        <h3>Registration</h3>
        <p>Account successfully created</p>
      </w-step>
      <w-step completed>
        <h3>Verification</h3>
        <p>Email address verified</p>
      </w-step>
      <w-step completed>
        <h3>Setup</h3>
        <p>Profile information completed</p>
      </w-step>
      <w-step completed>
        <h3>Welcome</h3>
        <p>You're all set to get started!</p>
      </w-step>
    </w-step-indicator>
  `},J={render:()=>a`
    <w-step-indicator>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-step-indicator>
  `},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: false
  },
  render: args => html\`
    <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
      <w-step completed>
        <h3>Step 1: Account Setup</h3>
        <p>Create your account and verify your email address.</p>
      </w-step>
      <w-step active>
        <h3>Step 2: Profile Information</h3>
        <p>Fill in your personal details and preferences.</p>
      </w-step>
      <w-step>
        <h3>Step 3: Payment Method</h3>
        <p>Add a payment method to complete your registration.</p>
      </w-step>
      <w-step>
        <h3>Step 4: Confirmation</h3>
        <p>Review and confirm your information.</p>
      </w-step>
    </w-step-indicator>
  \`
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    right: false
  },
  render: args => html\`
    <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
      <w-step completed>
        <h4>Setup</h4>
        <p>Account created</p>
      </w-step>
      <w-step completed>
        <h4>Profile</h4>
        <p>Information added</p>
      </w-step>
      <w-step active>
        <h4>Payment</h4>
        <p>Add payment method</p>
      </w-step>
      <w-step>
        <h4>Done</h4>
        <p>Complete setup</p>
      </w-step>
    </w-step-indicator>
  \`
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: true
  },
  render: args => html\`
    <w-step-indicator ?horizontal=\${args.horizontal} ?right=\${args.right}>
      <w-step completed>
        <h3>Order Placed</h3>
        <p>Your order has been received and is being processed.</p>
        <small>2:34 PM</small>
      </w-step>
      <w-step completed>
        <h3>Payment Confirmed</h3>
        <p>Payment has been successfully processed.</p>
        <small>2:35 PM</small>
      </w-step>
      <w-step active>
        <h3>Preparing for Shipment</h3>
        <p>Your items are being prepared for shipment.</p>
      </w-step>
      <w-step>
        <h3>Shipped</h3>
        <p>Your order is on its way!</p>
      </w-step>
    </w-step-indicator>
  \`
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-step-indicator>
      <w-step completed>
        <strong>Step 1</strong>
      </w-step>
      <w-step completed>
        <strong>Step 2</strong>
      </w-step>
      <w-step active>
        <strong>Step 3</strong>
      </w-step>
      <w-step>
        <strong>Step 4</strong>
      </w-step>
      <w-step>
        <strong>Step 5</strong>
      </w-step>
    </w-step-indicator>
  \`
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-step-indicator horizontal>
      <w-step completed>
        <strong>Start</strong>
      </w-step>
      <w-step completed>
        <strong>Progress</strong>
      </w-step>
      <w-step active>
        <strong>Current</strong>
      </w-step>
      <w-step>
        <strong>Next</strong>
      </w-step>
      <w-step>
        <strong>End</strong>
      </w-step>
    </w-step-indicator>
  \`
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-step-indicator>
      <w-step completed>
        <h3>Registration</h3>
        <p>Account successfully created</p>
      </w-step>
      <w-step completed>
        <h3>Verification</h3>
        <p>Email address verified</p>
      </w-step>
      <w-step completed>
        <h3>Setup</h3>
        <p>Profile information completed</p>
      </w-step>
      <w-step completed>
        <h3>Welcome</h3>
        <p>You're all set to get started!</p>
      </w-step>
    </w-step-indicator>
  \`
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-step-indicator>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-step-indicator>
  \`
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`Horizontal`,`RightAligned`,`SimpleSteps`,`SimpleHorizontal`,`AllCompleted`,`MinimalExample`]}))();export{q as AllCompleted,H as Default,U as Horizontal,J as MinimalExample,W as RightAligned,K as SimpleHorizontal,G as SimpleSteps,Y as __namedExportsOrder,V as default};