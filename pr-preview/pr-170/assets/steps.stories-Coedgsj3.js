import{f as c,i as z,s as V,u as F,a as Y,l as $,r as A,j as l,x as i,n as b,k as D}from"./iframe-DyRUkJnr.js";import"./preload-helper-Ct5FWWRu.js";var J={},P=["en","nb","fi","da","sv"],E="en",W=()=>{var t;let e;switch((t=process==null?void 0:J)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},L=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":E},k=t=>P.find(e=>t===e||t.toLowerCase().includes(e))||L();function q(){var t;if(typeof window>"u"){const e=W();return k(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=L();return P.includes(e)?k(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),k(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),E}}var U=(t,e,r,a,o,n)=>t==="nb"?r:t==="fi"?a:t==="da"?o:t==="sv"?n:e,K=(t,e,r,a,o)=>{const n=q(),p=U(n,t,e,r,a,o);c.load(n,p),c.activate(n)},d={nb:{"icon.title.check":["Sjekkmerke"]},en:{"icon.title.check":["Checkmark"]},fi:{"icon.title.check":["Valintamerkki"]},da:{"icon.title.check":["Flueben"]},sv:{"icon.title.check":["Bock"]}};K(d.en,d.nb,d.fi,d.da,d.sv);var G=class extends z{render(){const t=c.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"});return F`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-check-16-part">${V(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path></svg>`}};customElements.get("w-icon-check-16")||customElements.define("w-icon-check-16",G);const I=JSON.parse('{"steps.aria.active":["Trinindikator aktiv cirkel"],"steps.aria.completed":["Trinindikator fuldført cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}'),R=JSON.parse('{"steps.aria.active":["Step indicator active circle"],"steps.aria.completed":["Step indicator completed circle"],"steps.aria.emptyCircle":["Empty circle"]}'),H=JSON.parse('{"steps.aria.active":["Vaiheilmaisin aktiivinen ympyrä"],"steps.aria.completed":["Vaiheilmaisin valmis ympyrä"],"steps.aria.emptyCircle":["Tyhjä ympyrä"]}'),B=JSON.parse('{"steps.aria.active":["Stegindikator aktiv sirkel"],"steps.aria.completed":["Stegindikator hel sirkel"],"steps.aria.emptyCircle":["Tom sirkel"]}'),T=JSON.parse('{"steps.aria.active":["Stegindikator aktiv cirkel"],"steps.aria.completed":["Stegindikator fulländad cirkel"],"steps.aria.emptyCircle":["Tom cirkel"]}'),j=Y`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.text-right{text-align:right}.border-2{border-width:2px}.rounded-full{border-radius:9999px}.flex{display:flex}.grid{display:grid}.flex-1{flex:1}.gap-x-16{column-gap:1.6rem}.gap-y-16{row-gap:1.6rem}.row-span-2{grid-row:span 2/span 2}.col-span-3{grid-column:span 3/span 3}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.col-start-2{grid-column-start:2}.grid-flow-col{grid-auto-flow:column}.grid-rows-\\[20px_auto\\]{grid-template-rows:20px auto}.grid-rows-\\[auto_20px\\]{grid-template-rows:auto 20px}.grid-cols-\\[1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr}.grid-cols-\\[1fr_20px\\]{grid-template-columns:1fr 20px}.grid-cols-\\[20px_1fr\\]{grid-template-columns:20px 1fr}.items-center{align-items:center}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-icon-inverted{color:var(--w-s-color-icon-inverted)}.s-border{border-color:var(--w-s-color-border)}.s-border-primary{border-color:var(--w-s-color-border-primary)}.h-2{height:.2rem}.h-20{height:2rem}.h-full{height:100%}.w-2{width:.2rem}.w-20{width:2rem}.w-full{width:100%}.last\\:mb-0:last-child{margin-bottom:0}.px-16{padding-left:1.6rem;padding-right:1.6rem}.pb-0{padding-bottom:0}.pb-32{padding-bottom:3.2rem}.invisible{visibility:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}`;var Q=Object.defineProperty,m=(t,e,r,a)=>{for(var o=void 0,n=t.length-1,p;n>=0;n--)(p=t[n])&&(o=p(e,r,o)||o);return o&&Q(e,r,o),o};const _={wrapper:"w-full",horizontal:"flex"},s={base:"group/step",vertical:"group/stepv grid-rows-[20px_auto] grid grid-flow-col gap-x-16",horizontal:"group/steph grid-rows-[auto_20px] grid-cols-[1fr_20px_1fr] flex-1 grid gap-y-16 items-center",alignLeft:"grid-cols-[20px_1fr]",alignRight:"grid-cols-[1fr_20px] text-right",dot:"rounded-full border-2 h-20 w-20 transition-colors duration-300 s-icon-inverted",dotAlignRight:"col-start-2",dotHorizontal:"row-start-2 justify-self-end",dotActive:"s-border-primary s-bg-primary",dotIncomplete:"s-border s-bg",line:"transition-colors duration-300",lineVertical:"w-2 h-full justify-self-center",lineAlignRight:"col-start-2",lineHorizontal:"h-2 w-full row-start-2",lineIncomplete:"s-bg-disabled",lineComplete:"s-bg-primary",content:"last:mb-0",contentVertical:"row-span-2 pb-32",contentHorizontal:"col-span-3 px-16 row-start-1 text-center"};class C extends z{constructor(){super(),this.horizontal=!1,this.right=!1,$(R,B,H,I,T)}static{this.styles=[A,j]}updated(){this.updateStepsContext()}updateStepsContext(){const e=this.querySelectorAll("w-step");e.forEach((r,a)=>{r.setContext({horizontal:this.horizontal,right:this.right,isLast:a===e.length-1,isFirst:a===0})})}render(){const e=l([_.wrapper,this.horizontal&&_.horizontal]);return i`
      <ul class=${e}>
        <slot></slot>
      </ul>
    `}}m([b({type:Boolean,reflect:!0})],C.prototype,"horizontal");m([b({type:Boolean,reflect:!0})],C.prototype,"right");const x={completed:c._({id:"steps.aria.completed",message:"Step indicator completed circle",comment:"Completed circle"}),active:c._({id:"steps.aria.active",message:"Step indicator active circle",comment:"Active circle"}),default:c._({id:"steps.aria.emptyCircle",message:"Empty circle",comment:"Empty circle"})};class S extends z{constructor(){super(),this.active=!1,this.completed=!1,this._context={horizontal:!1,right:!1,isLast:!1,isFirst:!1},$(R,B,H,I,T)}static{this.styles=[A,j]}setContext(e){this._context=e,this.requestUpdate()}getAriaLabel(){return this.completed?x.completed:this.active?x.active:x.default}render(){const e=!this._context.horizontal,r=!this._context.right,a=this._context.isFirst,o=this._context.isLast,n=l([s.base,e?s.vertical:s.horizontal,e?r?s.alignLeft:s.alignRight:""]),p=l([s.line,s.lineHorizontal,this.active||this.completed?s.lineComplete:s.lineIncomplete,a?"invisible":""]),M=l([s.dot,e?r?"":s.dotAlignRight:s.dotHorizontal,this.active||this.completed?s.dotActive:s.dotIncomplete]),N=l([s.line,e?s.lineVertical:s.lineHorizontal,e&&!r?s.lineAlignRight:"",this.completed?s.lineComplete:s.lineIncomplete,o?"invisible":""]),O=l([s.content,e?s.contentVertical:s.contentHorizontal,o?"pb-0":""]);return i`
      <li class=${n}>
        ${e?"":i`<div class=${p}></div>`}
        <div class=${M} role="img" aria-label=${this.getAriaLabel()} ${this.active?'aria-current="step"':""}>
          ${this.completed?i`<w-icon-check-16 data-testid="completed-icon"></w-icon-check-16>`:""}
        </div>
        <div class=${N}></div>
        <div class=${O}>
          <slot></slot>
        </div>
      </li>
    `}}m([b({type:Boolean,reflect:!0})],S.prototype,"active");m([b({type:Boolean,reflect:!0})],S.prototype,"completed");m([D()],S.prototype,"_context");customElements.get("w-steps")||customElements.define("w-steps",C);customElements.get("w-step")||customElements.define("w-step",S);const ee={title:"Components/Steps",component:"w-steps",argTypes:{horizontal:{control:{type:"boolean"},description:"Display steps in horizontal layout",defaultValue:!1},right:{control:{type:"boolean"},description:"Align steps to the right (vertical layout only)",defaultValue:!1}}},h={args:{horizontal:!1,right:!1},render:t=>i`
    <w-steps ?horizontal=${t.horizontal} ?right=${t.right}>
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
    </w-steps>
  `},w={args:{horizontal:!0,right:!1},render:t=>i`
    <w-steps ?horizontal=${t.horizontal} ?right=${t.right}>
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
    </w-steps>
  `},g={args:{horizontal:!1,right:!0},render:t=>i`
    <w-steps ?horizontal=${t.horizontal} ?right=${t.right}>
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
    </w-steps>
  `},u={render:()=>i`
    <w-steps>
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
    </w-steps>
  `},f={render:()=>i`
    <w-steps horizontal>
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
    </w-steps>
  `},v={render:()=>i`
    <w-steps>
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
    </w-steps>
  `},y={render:()=>i`
    <w-steps>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-steps>
  `};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: false
  },
  render: args => html\`
    <w-steps ?horizontal=\${args.horizontal} ?right=\${args.right}>
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
    </w-steps>
  \`
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    right: false
  },
  render: args => html\`
    <w-steps ?horizontal=\${args.horizontal} ?right=\${args.right}>
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
    </w-steps>
  \`
}`,...w.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: false,
    right: true
  },
  render: args => html\`
    <w-steps ?horizontal=\${args.horizontal} ?right=\${args.right}>
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
    </w-steps>
  \`
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-steps>
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
    </w-steps>
  \`
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-steps horizontal>
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
    </w-steps>
  \`
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-steps>
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
    </w-steps>
  \`
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <w-steps>
      <w-step completed>First</w-step>
      <w-step active>Second</w-step>
      <w-step>Third</w-step>
    </w-steps>
  \`
}`,...y.parameters?.docs?.source}}};const te=["Default","Horizontal","RightAligned","SimpleSteps","SimpleHorizontal","AllCompleted","MinimalExample"];export{v as AllCompleted,h as Default,w as Horizontal,y as MinimalExample,g as RightAligned,f as SimpleHorizontal,u as SimpleSteps,te as __namedExportsOrder,ee as default};
