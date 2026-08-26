import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,l as i,r as a,s as o,t as s,x as c}from"./decorate-Bt2QF_uA.js";import{a as l,n as u,o as d,r as f,t as p}from"./i18n-Bcb14Fzc.js";import{n as m,t as h}from"./dist-D5kJVy4t.js";import{n as g,t as _}from"./index.m-DHqwZk2H.js";import{t as v}from"./icon-ND47zKHd.js";import{n as y,t as b}from"./styles-Cw_r5k83.js";import{i as x,n as S,r as C}from"./utilities-BHNt5DhH.js";var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}`)})))()}var P;function F(){return(F=e((()=>{n(),P=c(`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-color-pill-suggestion-background\\]{background-color:var(--w-color-pill-suggestion-background)}.hover\\:bg-\\[--w-color-pill-suggestion-background-hover\\]:hover{background-color:var(--w-color-pill-suggestion-background-hover)}.active\\:bg-\\[--w-color-pill-suggestion-background-active\\]:active{background-color:var(--w-color-pill-suggestion-background-active)}.rounded{border-radius:4px}.rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.hover\\:s-bg-primary-hover:hover{background-color:var(--w-s-color-background-primary-hover)}.active\\:s-bg-primary-active:active{background-color:var(--w-s-color-background-primary-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.h-16{height:1.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.pl-12{padding-left:1.2rem}.pl-4{padding-left:.4rem}.pr-12{padding-right:1.2rem}.pr-2{padding-right:.2rem}.font-bold{font-weight:700}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`)})))()}var I,L;function R(){return(R=e((()=>{n(),v(),_(),d(),a(),f(),b(),T(),D(),k(),j(),N(),F(),I={wrapper:`flex items-center`,button:`inline-flex items-center focusable text-xs transition-all`,suggestion:`bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold`,filter:`s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted`,label:`pl-12 py-8 rounded-l-full`,labelWithoutClose:`pr-12 rounded-r-full`,labelWithClose:`pr-2`,close:`pr-12 pl-4 py-8 rounded-r-full`,closeIcon:`h-16`,a11y:`sr-only`},L=class extends i{static{this.styles=[y,P]}constructor(){super(),this.canClose=!1,this.suggestion=!1,p(E,A,O,w,M),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=l._({id:`pill.aria.openFilter`,message:`Open filter`,comment:`Fallback screen reader message for open filter`}),this.removeFilterSrText=l._({id:`pill.aria.removeFilter`,message:`Remove filter {label}`,comment:`Fallback screen reader message for removal of the filter`})}get _labelClasses(){return g([I.button,I.label,this.suggestion?I.suggestion:I.filter,this.canClose?I.labelWithClose:I.labelWithoutClose])}get _closeClasses(){return g([I.button,I.close,this.suggestion?I.suggestion:I.filter])}_onClick(){this.dispatchEvent(new CustomEvent(`w-pill-click`,{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent(`w-pill-close`,{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.openSrLabel&&(this.openAriaLabel=this.openSrLabel),this.closeSrLabel&&(this.closeAriaLabel=this.closeSrLabel)}render(){return r`
			<div class="${I.wrapper}">
				<button
					type="button"
					class="${this._labelClasses}"
					@click="${this._onClick}"
				>
					<span class="${I.a11y}"
						>${this.openAriaLabel?this.openAriaLabel:this.openFilterSrText}</span
					>
					<slot></slot>
				</button>
				${this.canClose?r` <button
								type="button"
								class="${this._closeClasses}"
								@click="${this._onClose}"
							>
								<span class="${I.a11y}"
									>${this.closeAriaLabel?this.closeAriaLabel:this.removeFilterSrText}</span
								>
								<w-icon
									name="Close"
									size="small"
									locale="${u()}"
									class="${I.closeIcon}"
									class="flex"
								></w-icon>
							</button>`:null}
			</div>
		`}},s([o({attribute:`can-close`,type:Boolean})],L.prototype,`canClose`,void 0),s([o({attribute:`suggestion`,type:Boolean})],L.prototype,`suggestion`,void 0),s([o({attribute:`open-sr-label`,type:String})],L.prototype,`openSrLabel`,void 0),s([o({attribute:`open-aria-label`,type:String})],L.prototype,`openAriaLabel`,void 0),s([o({attribute:`close-sr-label`,type:String})],L.prototype,`closeSrLabel`,void 0),s([o({attribute:`close-aria-label`,type:String})],L.prototype,`closeAriaLabel`,void 0),customElements.get(`w-pill`)||customElements.define(`w-pill`,L)})))()}var z=t({Closable:()=>K,Default:()=>W,Suggestion:()=>G,__namedExportsOrder:()=>q,default:()=>U}),B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{C(),m(),n(),R(),{events:B,args:V,argTypes:H}=h(`w-pill`),U={title:`Buttons/Pill`,render(e){return r`<w-pill ${x(S(e))}>Lorem</w-pill>`},args:V,argTypes:H,parameters:{actions:{handles:B}}},W={args:{}},G={args:{suggestion:!0}},K={args:{"can-close":!0}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    suggestion: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    "can-close": true
  }
}`,...K.parameters?.docs?.source}}},q=[`Default`,`Suggestion`,`Closable`]})))()}export{z as a,J as i,W as n,G as r,K as t};