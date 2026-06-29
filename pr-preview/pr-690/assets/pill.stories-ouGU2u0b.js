import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{c as n,h as r,l as i,s as a,t as o,x as s}from"./decorators-CPAv1fbk.js";import{C as c,N as l,P as u,S as d,_ as f,b as p,d as m,f as h,l as g,p as _,u as v,v as y,x as b,y as x}from"./iframe-Bsse8mc5.js";import{a as S,n as C,r as w,t as T}from"./utilities-Pi3Nxy55.js";var E,D=t((()=>{E=JSON.parse(`{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})),O,k=t((()=>{O=JSON.parse(`{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}`)})),A,j=t((()=>{A=JSON.parse(`{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}`)})),M,N=t((()=>{M=JSON.parse(`{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})),P,F=t((()=>{P=JSON.parse(`{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}`)})),I,L=t((()=>{n(),I=s(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-color-pill-suggestion-background\\]{background-color:var(--w-color-pill-suggestion-background)}.hover\\:bg-\\[--w-color-pill-suggestion-background-hover\\]:hover{background-color:var(--w-color-pill-suggestion-background-hover)}.active\\:bg-\\[--w-color-pill-suggestion-background-active\\]:active{background-color:var(--w-color-pill-suggestion-background-active)}.rounded{border-radius:4px}.rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.hover\\:s-bg-primary-hover:hover{background-color:var(--w-s-color-background-primary-hover)}.active\\:s-bg-primary-active:active{background-color:var(--w-s-color-background-primary-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.h-16{height:1.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.pl-12{padding-left:1.2rem}.pl-4{padding-left:.4rem}.pr-12{padding-right:1.2rem}.pr-2{padding-right:.2rem}.font-bold{font-weight:700}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`)})),R,z,B=t((()=>{n(),m(),f(),u(),o(),b(),g(),D(),k(),j(),N(),F(),L(),_(),R={wrapper:`flex items-center`,button:`inline-flex items-center focusable text-xs transition-all`,suggestion:`bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold`,filter:`s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted`,label:`pl-12 py-8 rounded-l-full`,labelWithoutClose:`pr-12 rounded-r-full`,labelWithClose:`pr-2`,close:`pr-12 pl-4 py-8 rounded-r-full`,closeIcon:`h-16`,a11y:`sr-only`},z=class extends i{static{this.styles=[v,I]}constructor(){super(),this.canClose=!1,this.suggestion=!1,x(O,M,A,E,P),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=l._({id:`pill.aria.openFilter`,message:`Open filter`,comment:`Fallback screen reader message for open filter`}),this.removeFilterSrText=l._({id:`pill.aria.removeFilter`,message:`Remove filter {label}`,comment:`Fallback screen reader message for removal of the filter`})}get _labelClasses(){return y([R.button,R.label,this.suggestion?R.suggestion:R.filter,this.canClose?R.labelWithClose:R.labelWithoutClose])}get _closeClasses(){return y([R.button,R.close,this.suggestion?R.suggestion:R.filter])}_onClick(){this.dispatchEvent(new CustomEvent(`w-pill-click`,{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent(`w-pill-close`,{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.openSrLabel&&(this.openAriaLabel=this.openSrLabel),this.closeSrLabel&&(this.closeAriaLabel=this.closeSrLabel)}render(){return r`
			<div class="${R.wrapper}">
				<button
					type="button"
					class="${this._labelClasses}"
					@click="${this._onClick}"
				>
					<span class="${R.a11y}"
						>${this.openAriaLabel?this.openAriaLabel:this.openFilterSrText}</span
					>
					<slot></slot>
				</button>
				${this.canClose?r` <button
							type="button"
							class="${this._closeClasses}"
							@click="${this._onClose}"
						>
							<span class="${R.a11y}"
								>${this.closeAriaLabel?this.closeAriaLabel:this.removeFilterSrText}</span
							>
							<w-icon
								name="Close"
								size="small"
								locale="${p()}"
								class="${R.closeIcon}"
								class="flex"
							></w-icon>
						</button>`:null}
			</div>
		`}},h([a({attribute:`can-close`,type:Boolean})],z.prototype,`canClose`,void 0),h([a({attribute:`suggestion`,type:Boolean})],z.prototype,`suggestion`,void 0),h([a({attribute:`open-sr-label`,type:String})],z.prototype,`openSrLabel`,void 0),h([a({attribute:`open-aria-label`,type:String})],z.prototype,`openAriaLabel`,void 0),h([a({attribute:`close-sr-label`,type:String})],z.prototype,`closeSrLabel`,void 0),h([a({attribute:`close-aria-label`,type:String})],z.prototype,`closeAriaLabel`,void 0),customElements.get(`w-pill`)||customElements.define(`w-pill`,z)})),V=e({Closable:()=>J,Default:()=>K,Suggestion:()=>q,__namedExportsOrder:()=>Y,default:()=>G}),H,U,W,G,K,q,J,Y,X=t((()=>{w(),c(),n(),T(),B(),{events:H,args:U,argTypes:W}=d(`w-pill`),G={title:`Buttons/Pill`,render(e){return r`<w-pill ${S(C(e))}>Lorem</w-pill>`},args:U,argTypes:W,parameters:{actions:{handles:H}}},K={args:{}},q={args:{suggestion:!0}},J={args:{"can-close":!0}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    suggestion: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    "can-close": true
  }
}`,...J.parameters?.docs?.source}}},Y=[`Default`,`Suggestion`,`Closable`]}));X();export{J as Closable,K as Default,q as Suggestion,Y as __namedExportsOrder,G as default,V as n,X as t};