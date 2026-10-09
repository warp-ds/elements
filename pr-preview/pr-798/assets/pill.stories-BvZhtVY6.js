import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{c as n,h as r,n as i,t as a}from"./lit-BcpSydpl.js";import{a as o,n as s,o as c,r as l,t as u}from"./i18n-CkjYRTT1.js";import{r as d,s as f,t as p}from"./decorate-DkSsDgub.js";import{n as m,t as h}from"./dist-Ps3JgUEV.js";import{t as g}from"./icon-BiweboAb.js";import{n as _,t as v}from"./styles-C65P6sGa.js";import{i as y,n as b,r as x}from"./utilities-bFq4FP4z.js";var S;function C(){return(C=e((()=>{S=JSON.parse(`{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}`)})))()}var M;function N(){return(N=e((()=>{a(),M=r`
	:host {
		/* layout */
		--_padding-x:var(--w-c-pill-padding, 1.2rem);
		--_padding-y:var(--w-c-pill-padding, .8rem);

		/* border */
		--_border-width:var(--w-c-pill-border-width, 0);
		--_border-style:var(--w-c-pill-border-style, solid);
		--_border-color:var(--w-c-pill-border-color, transparent);
		--_border-radius:var(--w-c-pill-border-radius, 9999px);
		--_focus-outline:var(--w-c-pill-focus-outline, 2px solid var(--w-s-color-border-focus));
		--_focus-outline-offset:var(--w-c-pill-focus-outline-offset, 1px);

		/* text  */
		--_font-size:var(--w-c-pill-font-size, var(--w-font-size-xs));
		--_line-height:var(--w-c-pill-line-height, var(--w-line-height-xs));
		--_font-weight:var(--w-c-pill-font-weight, normal);
		--_suggestion-font-weight:var(--w-c-pill-suggestion-font-weight, 700);
		--_color-text:var(--w-c-pill-color-text, var(--w-s-color-text-inverted));
		--_color-text-hover:var(--w-c-pill-color-text-hover, var(--_color-text));
		--_color-text-active:var(--w-c-pill-color-text-active, var(--_color-text));
		--_suggestion-color-text:var(--w-c-pill-suggestion-color-text, var(--w-s-color-text));

		/* background */
		--_color-background:var(--w-c-pill-color-background, var(--w-s-color-background-primary));
		--_color-background-hover:var(--w-c-pill-color-background-hover, var(--w-s-color-background-primary-hover));
		--_color-background-active:var(--w-c-pill-color-background-active, var(--w-s-color-background-primary-active));
		--_suggestion-color-background:var(--w-c-pill-suggestion-color-background, var(--w-color-pill-suggestion-background));
		--_suggestion-color-background-hover:var(--w-c-pill-suggestion-color-background-hover, var(--w-color-pill-suggestion-background-hover));
		--_suggestion-color-background-active:var(--w-c-pill-suggestion-color-background-active, var(--w-color-pill-suggestion-background-active));

		/* motion */
		--_transition-property:var(--w-c-pill-transition-property, all);
		--_transition-duration:var(--w-c-pill-transition-duration, .15s);
		--_transition-timing-function:var(--w-c-pill-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
	[part="base"] {
		align-items: center;
		display: flex;
	}
	[part="label"] {
		outline: none;
		font-size: var(--_font-size);
		font-weight: var(--_font-weight);
		line-height: var(--_line-height);
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
		padding-right: var(--_padding-x);
		padding-left: var(--_padding-x);
		padding-top: var(--_padding-y);
		padding-bottom: var(--_padding-y);
		color: var(--_color-text);
		background-color: var(--_color-background);
		align-items: center;
		display: inline-flex;
		border-top-right-radius: var(--_border-radius);
		border-bottom-right-radius: var(--_border-radius);
		border-top-left-radius: var(--_border-radius);
		border-bottom-left-radius: var(--_border-radius);
		border-width: var(--_border-width);
		border-style: var(--_border-style);
		border-color: var(--_border-color);
	}
	[part="label"]:hover, [part="close-button"]:hover {
		color: var(--_color-text-hover);
		background-color: var(--_color-background-hover);
	}
	[part="label"]:active, [part="close-button"]:active {
		color: var(--_color-text-active);
		background-color: var(--_color-background-active);
	}
	[part="label"]:focus-visible, [part="close-button"]:focus-visible {
		outline: var(--_focus-outline);
    	outline-offset: var(--_focus-outline-offset);
	}
	:host([suggestion]) [part="label"] {
    	background-color: var(--_suggestion-color-background);
		color: var(--_suggestion-color-text);
		font-weight: var(--_suggestion-font-weight);
	}
	:host([suggestion]) [part="label"]:hover {
    	background-color: var(--_suggestion-color-background-hover);
	}
	:host([suggestion]) [part="label"]:active {
    	background-color: var(--_suggestion-color-background-active);
	}
	:host([suggestion]) [part="label"]:focus-visible {
    	outline: var(--_focus-outline);
    	outline-offset: var(--_focus-outline-offset);
	}
	:host([can-close]) [part="label"] {
		padding-right: calc(var(--_padding-x) / 6);
		border-top-right-radius: 0;
    	border-bottom-right-radius: 0;
	}
	[part="close-button"] {
		outline: none;
		font-size: var(--w-font-size-xs);
		line-height: var(--w-line-height-xs);
		transition-property: var(--_transition-property);
		transition-duration: var(--_transition-duration);
		transition-timing-function: var(--_transition-timing-function);
		padding-right: var(--_padding-x);
		padding-left: calc(var(--_padding-x) / 3);
		padding-top: var(--_padding-y);
		padding-bottom: var(--_padding-y);
		color: var(--_color-text);
		background-color: var(--_color-background);
		align-items: center;
		display: inline-flex;
		border-top-right-radius: var(--_border-radius);
		border-bottom-right-radius: var(--_border-radius);
	}
}`})))()}var P;function F(){return(F=e((()=>{a(),g(),c(),d(),l(),v(),C(),T(),D(),k(),j(),N(),P=class extends i{static{this.styles=[_,M]}constructor(){super(),this.canClose=!1,this.suggestion=!1,u(w,O,E,S,A),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=o._({id:`pill.aria.openFilter`,message:`Open filter`,comment:`Fallback screen reader message for open filter`}),this.removeFilterSrText=o._({id:`pill.aria.removeFilter`,message:`Remove filter {label}`,comment:`Fallback screen reader message for removal of the filter`})}_onClick(){this.dispatchEvent(new CustomEvent(`w-pill-click`,{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent(`w-pill-close`,{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.openSrLabel&&(this.openAriaLabel=this.openSrLabel),this.closeSrLabel&&(this.closeAriaLabel=this.closeSrLabel)}render(){return n`
			<div part="base">
				<button type="button" part="label" @click="${this._onClick}">
					<span class="sr-only"
						>${this.openAriaLabel?this.openAriaLabel:this.openFilterSrText}</span
					>
					<slot></slot>
				</button>
				${this.canClose?n` <button
								type="button"
								part="close-button"
								@click="${this._onClose}"
							>
								<span class="sr-only"
									>${this.closeAriaLabel?this.closeAriaLabel:this.removeFilterSrText}</span
								>
								<w-icon
									name="Close"
									size="small"
									locale="${s()}"
									part="close-icon"
								></w-icon>
							</button>`:null}
			</div>
		`}},p([f({attribute:`can-close`,type:Boolean})],P.prototype,`canClose`,void 0),p([f({attribute:`suggestion`,type:Boolean})],P.prototype,`suggestion`,void 0),p([f({attribute:`open-sr-label`,type:String})],P.prototype,`openSrLabel`,void 0),p([f({attribute:`open-aria-label`,type:String})],P.prototype,`openAriaLabel`,void 0),p([f({attribute:`close-sr-label`,type:String})],P.prototype,`closeSrLabel`,void 0),p([f({attribute:`close-aria-label`,type:String})],P.prototype,`closeAriaLabel`,void 0),customElements.get(`w-pill`)||customElements.define(`w-pill`,P)})))()}var I=t({Closable:()=>U,Default:()=>V,Suggestion:()=>H,__namedExportsOrder:()=>W,default:()=>B}),L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{x(),m(),a(),F(),{events:L,args:R,argTypes:z}=h(`w-pill`),B={title:`Buttons/Pill`,render(e){return n`<w-pill ${y(b(e))}>Lorem</w-pill>`},args:R,argTypes:z,parameters:{actions:{handles:L}}},V={args:{}},H={args:{suggestion:!0}},U={args:{canClose:!0}},W=[`Default`,`Suggestion`,`Closable`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    suggestion: true
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    canClose: true
  }
}`,...U.parameters?.docs?.source}}}})))()}export{I as a,G as i,V as n,H as r,U as t};