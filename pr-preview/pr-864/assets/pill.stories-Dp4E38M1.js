import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{T as n,_ as r,a as i,d as a,g as o,i as s,k as c,r as l,t as u,v as d,y as f}from"./decorate-r9jH0CjD.js";import{n as p,t as m}from"./dist-gZ_m6TlA.js";import{n as h,r as g,t as _}from"./i18n-CH8KbyPD.js";import{t as v}from"./icon-BLxYKJ3e.js";import{n as y,t as b}from"./styles-zocEQ6mS.js";import{i as x,n as S,r as C}from"./utilities-DPMir1kO.js";var w;function T(){return(T=e((()=>{w=JSON.parse(`{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}`)})))()}var P;function F(){return(F=e((()=>{d(),P=c`
	:host {
		/* layout */
		--_padding-x: var(--w-c-pill-padding, 1.2rem);
		--_padding-y: var(--w-c-pill-padding, .8rem);

		/* border */
		--_border-width: var(--w-c-pill-border-width, 0);
		--_border-style: var(--w-c-pill-border-style, solid);
		--_border-color: var(--w-c-pill-color-border, transparent);
		--_border-radius: var(--w-c-pill-border-radius, 9999px);
		--_focus-outline: var(--w-c-pill-focus-outline, 2px solid var(--w-s-color-border-focus));
		--_focus-outline-offset: var(--w-c-pill-focus-outline-offset, 1px);

		/* text  */
		--_font-size: var(--w-c-pill-font-size, var(--w-font-size-xs));
		--_line-height: var(--w-c-pill-line-height, var(--w-line-height-xs));
		--_font-weight: var(--w-c-pill-font-weight, normal);
		--_suggestion-font-weight: var(--w-c-pill-suggestion-font-weight, 700);
		--_color-text: var(--w-c-pill-color-text, var(--w-s-color-text-inverted));
		--_color-text-hover: var(--w-c-pill-color-text-hover, var(--_color-text));
		--_color-text-active: var(--w-c-pill-color-text-active, var(--_color-text));
		--_suggestion-color-text: var(--w-c-pill-suggestion-color-text, var(--w-s-color-text));

		/* background */
		--_color-background: var(--w-c-pill-color-background, var(--w-s-color-background-primary));
		--_color-background-hover: var(--w-c-pill-color-background-hover, var(--w-s-color-background-primary-hover));
		--_color-background-active: var(--w-c-pill-color-background-active, var(--w-s-color-background-primary-active));
		--_suggestion-color-background: var(--w-c-pill-suggestion-color-background, var(--w-color-pill-suggestion-background));
		--_suggestion-color-background-hover: var(--w-c-pill-suggestion-color-background-hover, var(--w-color-pill-suggestion-background-hover));
		--_suggestion-color-background-active: var(--w-c-pill-suggestion-color-background-active, var(--w-color-pill-suggestion-background-active));

		/* motion */
		--_transition-property: var(--w-c-pill-transition-property, all);
		--_transition-duration: var(--w-c-pill-transition-duration, .15s);
		--_transition-timing-function: var(--w-c-pill-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
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
}`})))()}var I;function L(){return(L=e((()=>{d(),s(),v(),r(),i(),g(),b(),T(),D(),k(),j(),N(),F(),I=class extends f{static{this.styles=[y,P]}get openFilterSrText(){return o._({id:`pill.aria.openFilter`,message:`Open filter`,comment:`Fallback screen reader message for open filter`})}get removeFilterSrText(){return o._({id:`pill.aria.removeFilter`,message:`Remove filter {label}`,comment:`Fallback screen reader message for removal of the filter`})}constructor(){super(),this.canClose=!1,this.suggestion=!1,new l(this),_(E,A,O,w,M)}_onClick(){this.dispatchEvent(new CustomEvent(`w-pill-click`,{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent(`w-pill-close`,{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.openSrLabel&&(this.openAriaLabel=this.openSrLabel),this.closeSrLabel&&(this.closeAriaLabel=this.closeSrLabel)}render(){return n`
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
									locale="${h()}"
									part="close-icon"
								></w-icon>
							</button>`:null}
			</div>
		`}},u([a({attribute:`can-close`,type:Boolean})],I.prototype,`canClose`,void 0),u([a({attribute:`suggestion`,type:Boolean})],I.prototype,`suggestion`,void 0),u([a({attribute:`open-sr-label`,type:String})],I.prototype,`openSrLabel`,void 0),u([a({attribute:`open-aria-label`,type:String})],I.prototype,`openAriaLabel`,void 0),u([a({attribute:`close-sr-label`,type:String})],I.prototype,`closeSrLabel`,void 0),u([a({attribute:`close-aria-label`,type:String})],I.prototype,`closeAriaLabel`,void 0),customElements.get(`w-pill`)||customElements.define(`w-pill`,I)})))()}var R=t({Closable:()=>G,Default:()=>U,Suggestion:()=>W,__namedExportsOrder:()=>K,default:()=>H}),z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{C(),p(),d(),L(),{events:z,args:B,argTypes:V}=m(`w-pill`),H={title:`Buttons/Pill`,render(e){return n`<w-pill ${x(S(e))}>Lorem</w-pill>`},args:B,argTypes:V,parameters:{actions:{handles:z}}},U={args:{}},W={args:{suggestion:!0}},G={args:{canClose:!0}},K=[`Default`,`Suggestion`,`Closable`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    suggestion: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    canClose: true
  }
}`,...G.parameters?.docs?.source}}}})))()}export{R as a,q as i,U as n,W as r,G as t};