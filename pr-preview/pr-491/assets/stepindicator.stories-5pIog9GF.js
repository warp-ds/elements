import{a as T,i as C,q as $,r as P,k as l,b as o,n as f,d as v,l as F}from"./iframe-DHPAbabs.js";import"./check-16-BH6yjaXa.js";import"./preload-helper-Ct5FWWRu.js";const _=JSON.parse('{"steps.aria.emptyCircle":["Tom cirkel"],"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"]}'),A=JSON.parse('{"steps.aria.emptyCircle":["Empty circle"],"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"]}'),k=JSON.parse('{"steps.aria.emptyCircle":["Tyhjä ympyrä"],"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"]}'),E=JSON.parse('{"steps.aria.emptyCircle":["Tom sirkel"],"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"]}'),H=JSON.parse('{"steps.aria.emptyCircle":["Tom cirkel"],"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"]}'),I=T`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.grid{display:grid}.static{position:static}.w-full{width:100%}`;var M=Object.defineProperty,R=(s,t,n,p)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(t,n,r)||r);return r&&M(t,n,r),r};const x={wrapper:"w-full",horizontal:"flex"};class z extends C{constructor(){super(),this.horizontal=!1,this.right=!1,$(A,E,k,_,H)}static{this.styles=[P,I]}updated(){this.updateStepsContext()}updateStepsContext(){const t=this.querySelectorAll("w-step");t.forEach((n,p)=>{n.setContext({horizontal:this.horizontal,right:this.right,isLast:p===t.length-1,isFirst:p===0})})}render(){const t=l([x.wrapper,this.horizontal&&x.horizontal]);return o`
      <div role="list" class=${t} ${this.horizontal&&"style='display: grid; grid-auto-rows: 1fr;grid-template-columns: 1fr;'"}>
        <slot></slot>
      </div>
    `}}R([f({type:Boolean,reflect:!0})],z.prototype,"horizontal");R([f({type:Boolean,reflect:!0})],z.prototype,"right");customElements.get("w-step-indicator")||customElements.define("w-step-indicator",z);var Y=Object.defineProperty,b=(s,t,n,p)=>{for(var r=void 0,i=s.length-1,a;i>=0;i--)(a=s[i])&&(r=a(t,n,r)||r);return r&&Y(t,n,r),r};const e={base:"group/step",vertical:"group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16",horizontal:"group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid items-center",alignLeft:"grid-cols-[20px_1fr]",alignRight:"grid-cols-[1fr_20px] text-right",dot:"rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted",dotAlignRight:"col-start-2",dotHorizontal:"row-start-2 justify-self-end",dotActive:"s-border-primary s-bg-primary",dotIncomplete:"s-border s-bg",line:"transition-colors duration-300",lineVertical:"w-2 h-full justify-self-center",lineAlignRight:"col-start-2",lineHorizontal:"h-2 w-full row-start-2",lineIncomplete:"s-bg-disabled",lineComplete:"s-bg-primary",content:"last:mb-0",contentVertical:"row-span-2 pb-32",contentHorizontal:"col-span-3 px-16 row-start-1 text-center"},S={completed:v._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:v._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:v._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})};class y extends C{constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1,isLast:!1,isFirst:!1},$(A,E,k,_,H)}static{this.styles=[P,I]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}setContext(t){this._context=t,this.requestUpdate()}getAriaLabel(){return this.completed?S.completed:this.active?S.active:S.default}render(){const t=!this._context.horizontal,n=!this._context.right,p=this._context.isFirst,r=this._context.isLast,i=l([e.base,t?e.vertical:e.horizontal,t?n?e.alignLeft:e.alignRight:""]),a=l([e.line,e.lineHorizontal,this.active||this.completed?e.lineComplete:e.lineIncomplete,p?"invisible":""]),O=l([e.dot,t?n?"":e.dotAlignRight:e.dotHorizontal,this.active||this.completed?e.dotActive:e.dotIncomplete]),V=l([e.line,t?e.lineVertical:e.lineHorizontal,t&&!n?e.lineAlignRight:"",this.completed?e.lineComplete:e.lineIncomplete,r?"invisible":""]),L=l([e.content,t?e.contentVertical:e.contentHorizontal,r?"pb-0":""]);return o`
      <div class="${i}" style=${this._context.horizontal&&"height: 100%;"}>
        ${t?"":o`<div class=${a}></div>`}
        <div class=${O} role="img" aria-label=${this.getAriaLabel()} ${this.active?'aria-current="step"':""}>
          ${this.completed?o`<w-icon-check-16 data-testid="completed-icon"></w-icon-check-16>`:""}
        </div>
        <div class=${V}></div>
        <div class=${L} ${this._context.horizontal&&"style='height:100%;'"}>
          <slot></slot>
        </div>
      </div>
    `}}b([f({type:Boolean,reflect:!0})],y.prototype,"active");b([f({type:Boolean,reflect:!0})],y.prototype,"completed");b([F()],y.prototype,"_context");customElements.get("w-step")||customElements.define("w-step",y);const J={title:"Components/Step Indicator",component:"w-step-indicator",argTypes:{horizontal:{control:{type:"boolean"},description:"Display steps in horizontal layout",defaultValue:!1},right:{control:{type:"boolean"},description:"Align steps to the right (vertical layout only)",defaultValue:!1}}},c={args:{horizontal:!1,right:!1},render:s=>o`
    <w-step-indicator ?horizontal=${s.horizontal} ?right=${s.right}>
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
  `},d={args:{horizontal:!0,right:!1},render:s=>o`
    <w-step-indicator ?horizontal=${s.horizontal} ?right=${s.right}>
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
  `},m={args:{horizontal:!1,right:!0},render:s=>o`
    <w-step-indicator ?horizontal=${s.horizontal} ?right=${s.right}>
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
  `},h={render:()=>o`
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
  `},w={render:()=>o`
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
  `},g={render:()=>o`
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
  `},u={render:()=>o`
    <w-step-indicator>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-step-indicator>
  `};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-step-indicator>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-step-indicator>
  \`
}`,...u.parameters?.docs?.source}}};const B=["Default","Horizontal","RightAligned","SimpleSteps","SimpleHorizontal","AllCompleted","MinimalExample"];export{g as AllCompleted,c as Default,d as Horizontal,u as MinimalExample,m as RightAligned,w as SimpleHorizontal,h as SimpleSteps,B as __namedExportsOrder,J as default};
