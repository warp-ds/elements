import{n as e}from"./chunk-DnJy8xQt.js";import{At as t,B as n,Mt as r,Ot as i,Pt as a,T as o,_ as s,a as c,b as l,c as u,d,f,kt as p,l as m,o as h,s as g,u as _,w as v,y,z as b}from"./iframe-CL_-WKyb.js";import{n as x,t as S}from"./if-defined-BUgs5bYz.js";var C,w=e((()=>{i(),C=a`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.text-right{text-align:right}.border-2{border-width:2px}.rounded-full{border-radius:9999px}.flex{display:flex}.grid{display:grid}.flex-1{flex:1}.gap-x-16{column-gap:1.6rem}.gap-y-16{row-gap:1.6rem}.row-span-2{grid-row:span 2/span 2}.col-span-3{grid-column:span 3/span 3}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.col-start-2{grid-column-start:2}.grid-flow-col{grid-auto-flow:column}.grid-rows-\\[20px_auto\\]{grid-template-rows:20px auto}.grid-rows-\\[auto_20px\\]{grid-template-rows:auto 20px}.grid-cols-\\[1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr}.grid-cols-\\[1fr_20px\\]{grid-template-columns:1fr 20px}.grid-cols-\\[20px_1fr\\]{grid-template-columns:20px 1fr}.items-center{align-items:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-icon-inverted{color:var(--w-s-color-icon-inverted)}.s-border{border-color:var(--w-s-color-border)}.s-border-primary{border-color:var(--w-s-color-border-primary)}.h-2{height:.2rem}.h-20{height:2rem}.h-full{height:100%}.w-2{width:.2rem}.w-20{width:2rem}.w-full{width:100%}.last\\:mb-0:last-child{margin-bottom:0}.px-16{padding-left:1.6rem;padding-right:1.6rem}.pb-0{padding-bottom:0}.pb-32{padding-bottom:3.2rem}.invisible{visibility:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}`})),T,E,D=e((()=>{v(),i(),s(),c(),w(),f(),T={wrapper:`w-full`,horizontal:`flex`},E=class extends p{constructor(...e){super(...e),this.horizontal=!1,this.right=!1}static{this.styles=[h,C]}updated(){this.updateStepsContext()}updateStepsContext(){let e=this.querySelectorAll(`w-step`);e.forEach((t,n)=>{t.setContext({horizontal:this.horizontal,right:this.right,isLast:n===e.length-1,isFirst:n===0})})}render(){return r`
      <div role="list" class=${o([T.wrapper,this.horizontal&&T.horizontal])} ${this.horizontal&&`style='display: grid; grid-auto-rows: 1fr;grid-template-columns: 1fr;'`}>
        <slot></slot>
      </div>
    `}},d([l({type:Boolean,reflect:!0})],E.prototype,`horizontal`,void 0),d([l({type:Boolean,reflect:!0})],E.prototype,`right`,void 0),customElements.get(`w-step-indicator`)||customElements.define(`w-step-indicator`,E)})),O,k=e((()=>{O=JSON.parse(`{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})),A,j=e((()=>{A=JSON.parse(`{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}`)})),M,N=e((()=>{M=JSON.parse(`{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}`)})),P,F=e((()=>{P=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}`)})),I,L=e((()=>{I=JSON.parse(`{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}`)})),R,z,B=e((()=>{v(),n(),i(),s(),S(),_(),m(),w(),c(),k(),j(),N(),F(),L(),f(),R={base:`group/step`,vertical:`group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16`,horizontal:`group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid items-center`,alignLeft:`grid-cols-[20px_1fr]`,alignRight:`grid-cols-[1fr_20px] text-right`,dot:`rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted`,dotAlignRight:`col-start-2`,dotHorizontal:`row-start-2 justify-self-end`,dotActive:`s-border-primary s-bg-primary`,dotIncomplete:`s-border s-bg`,line:`transition-colors duration-300`,lineVertical:`w-2 h-full justify-self-center`,lineAlignRight:`col-start-2`,lineHorizontal:`h-2 w-full row-start-2`,lineIncomplete:`s-bg-disabled`,lineComplete:`s-bg-primary`,content:`last:mb-0`,contentVertical:`row-span-2 pb-32`,contentHorizontal:`col-span-3 px-16 row-start-1 text-center`},z=class extends p{static{this.styles=[h,C]}constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1,isLast:!1,isFirst:!1},this._internals=this.attachInternals(),g(A,P,M,O,I)}connectedCallback(){super.connectedCallback(),this._internals.role=`listitem`}setContext(e){this._context=e}getAriaLabel(){return this.completed?b._({id:`steps.aria.completed`,message:`Step indicator completed circle`,comment:`Completed circle`}):this.active?b._({id:`steps.aria.active`,message:`Step indicator active circle`,comment:`Active circle`}):b._({id:`steps.aria.emptyCircle`,message:`Empty circle`,comment:`Empty circle`})}render(){let e=!this._context.horizontal,n=!this._context.right,i=this._context.isFirst,a=this._context.isLast,s=o([R.base,e?R.vertical:R.horizontal,e?n?R.alignLeft:R.alignRight:``]),c=o([R.line,R.lineHorizontal,this.active||this.completed?R.lineComplete:R.lineIncomplete,i?`invisible`:``]),l=o([R.dot,e?n?``:R.dotAlignRight:R.dotHorizontal,this.active||this.completed?R.dotActive:R.dotIncomplete]),d=o([R.line,e?R.lineVertical:R.lineHorizontal,e&&!n?R.lineAlignRight:``,this.completed?R.lineComplete:R.lineIncomplete,a?`invisible`:``]),f=o([R.content,e?R.contentVertical:R.contentHorizontal,a?`pb-0`:``]);return r`
      <div class="${s}" style=${x(this._context.horizontal?`height: 100%;`:void 0)}>
        ${e?t:r`<div class=${c}></div>`}
        <div class=${l} role="img" aria-label=${this.getAriaLabel()} aria-current=${this.active?`step`:t}>
          ${this.completed?r`<w-icon name="Check" size="small" locale="${u()}" data-testid="completed-icon" class="flex"></w-icon>`:t}
        </div>
        <div class=${d}></div>
        <div class=${f} style=${x(this._context.horizontal?`height: 100%;`:void 0)}>
          <slot></slot>
        </div>
      </div>
    `}},d([l({type:Boolean,reflect:!0})],z.prototype,`active`,void 0),d([l({type:Boolean,reflect:!0})],z.prototype,`completed`,void 0),d([y()],z.prototype,`_context`,void 0),customElements.get(`w-step`)||customElements.define(`w-step`,z)})),V,H,U,W,G,K,q,J,Y;e((()=>{i(),D(),B(),V={title:`Components/Step Indicator`,component:`w-step-indicator`,argTypes:{horizontal:{control:{type:`boolean`},description:`Display steps in horizontal layout`,defaultValue:!1},right:{control:{type:`boolean`},description:`Align steps to the right (vertical layout only)`,defaultValue:!1}}},H={args:{horizontal:!1,right:!1},render:e=>r`
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
  `},U={args:{horizontal:!0,right:!1},render:e=>r`
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
  `},W={args:{horizontal:!1,right:!0},render:e=>r`
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
  `},G={render:()=>r`
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
  `},K={render:()=>r`
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
  `},q={render:()=>r`
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
  `},J={render:()=>r`
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