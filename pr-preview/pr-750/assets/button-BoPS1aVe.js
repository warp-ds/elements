import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,d as n,h as r,l as i,r as a,s as o,t as s}from"./decorate-Bt2QF_uA.js";import{a as c,o as l,r as u,t as d}from"./i18n-CkjYRTT1.js";import{t as f}from"./query-BHY-nhsh.js";import{n as p,t as m}from"./styles-Cw_r5k83.js";import{n as h,t as g}from"./FormControlMixin-BCJbRrUC.js";import{r as _,t as v}from"./if-defined-DBI32Ir5.js";import{n as y,r as b,t as x}from"./link-cCGpWf37.js";import{n as S,r as C}from"./utils-qj3txzlQ.js";var w;function T(){return(T=e((()=>{w=JSON.parse(`{"button.aria.loading":["Indlæser..."],"button.aria.negativeDescription":["Attention"],"button.aria.primaryDescription":["Highlighted"]}`)})))()}var E;function D(){return(D=e((()=>{E=JSON.parse(`{"button.aria.loading":["Loading..."],"button.aria.negativeDescription":["Attention"],"button.aria.primaryDescription":["Highlighted"]}`)})))()}var O;function k(){return(k=e((()=>{O=JSON.parse(`{"button.aria.loading":["Ladataan..."],"button.aria.negativeDescription":["Attention"],"button.aria.primaryDescription":["Highlighted"]}`)})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"button.aria.loading":["Laster..."],"button.aria.negativeDescription":["Attention"],"button.aria.primaryDescription":["Highlighted"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"button.aria.loading":["Laddar ..."],"button.aria.negativeDescription":["Attention"],"button.aria.primaryDescription":["Highlighted"]}`)})))()}var P,F;function I(){return(I=e((()=>{l(),h(),t(),a(),u(),x(),v(),m(),S(),T(),D(),k(),j(),N(),y(),P=[`primary`,`secondary`,`negative`,`negativeQuiet`,`utility`,`pill`,`link`,`quiet`,`utilityQuiet`,`overlay`,`overlayInverted`,`overlayQuiet`,`overlayInvertedQuiet`],F=class extends g(i){static{this.styles=[p,b]}static{this.shadowRootOptions={...i.shadowRootOptions,delegatesFocus:!0}}#e;get#t(){if(this.ariaDescription)return this.ariaDescription;if(this.variant===`primary`)return c.t({id:`button.aria.primaryDescription`,message:`Highlighted`,comment:`Short (preferably a single word) description indicating to screen reader users that this button is visually highlighted`});if(this.variant===`negative`||this.variant===`negativeQuiet`)return c.t({id:`button.aria.negativeDescription`,message:`Attention`,comment:`Short (preferably a single word) description indicating to screen reader users that this button tries to get the user's attention`})}updated(e){e.has(`value`)&&this.setValue(this.value)}constructor(){super(),this.autofocus=!1,this.quiet=!1,this.iconOnly=!1,this.small=!1,this.loading=!1,this.disabled=!1,this.fullWidth=!1,this.#e=void 0,d(E,A,O,w,M),this.ariaValueTextLoading=c.t({id:`button.aria.loading`,message:`Loading...`,comment:`Screen reader message for buttons that are loading`})}connectedCallback(){super.connectedCallback();let e=this.variant||`secondary`;if(!P.includes(e))throw Error(`Invalid "variant" attribute. Set its value to one of the following:\n${P.join(`, `)}.`);this.#e=this.value}closestWithId(e){let t=this.shadowRoot,n;try{for(;t;){if(n=t.getElementById(e),n)return n;t=t.getRootNode().host?.getRootNode()}}catch{}return document.getElementById(e)}firstUpdated(){this.autofocus&&!this.href&&setTimeout(()=>this.focus(),0),this.buttonEl&&this.commandfor&&(this.buttonEl.commandForElement=this.closestWithId(this.commandfor))}_handleButtonClick(){this.type===`submit`&&this.internals.form?C(this.internals.form,this):this.type===`reset`&&this.internals.form&&this.internals.form.reset()}resetFormControl(){this.value=this.#e}render(){let e=this.variant||`secondary`;return r` ${this.href?r`
						<w-link
							href=${this.href}
							target=${this.target}
							variant=${this.quiet?`quiet`:e}
							?small=${this.small}
							?loading=${this.loading}
							?autofocus=${this.autofocus}
							?full-width=${this.fullWidth}
							class=${this.buttonClass}
							rel=${this.target===`_blank`?this.rel||`noopener`:void 0}
							aria-description=${_(this.#t)}
						>
							<slot></slot>
						</w-link>
					`:r`
						<button
							type=${this.type||`button`}
							part="base"
							class=${_(this.buttonClass)}
							@click="${this._handleButtonClick}"
							commandfor=${_(this.commandfor)}
							command=${_(this.command)}
							aria-description=${_(this.#t)}
						>
							<slot></slot>
						</button>
					`}
		${this.loading?r`<span
						class="sr-only"
						role="progressbar"
						aria-valuenow="{0}"
						aria-valuetext=${this.ariaValueTextLoading}
					></span>`:n}`}},s([o({reflect:!0})],F.prototype,`type`,void 0),s([o({type:Boolean,reflect:!0})],F.prototype,`autofocus`,void 0),s([o({reflect:!0})],F.prototype,`variant`,void 0),s([o({type:Boolean,reflect:!0})],F.prototype,`quiet`,void 0),s([o({type:Boolean,reflect:!0,attribute:`icon-only`})],F.prototype,`iconOnly`,void 0),s([o({type:Boolean,reflect:!0})],F.prototype,`small`,void 0),s([o({type:Boolean,reflect:!0})],F.prototype,`loading`,void 0),s([o({reflect:!0})],F.prototype,`href`,void 0),s([o({reflect:!0})],F.prototype,`target`,void 0),s([o({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),s([o({reflect:!0})],F.prototype,`rel`,void 0),s([o({attribute:`full-width`,type:Boolean,reflect:!0})],F.prototype,`fullWidth`,void 0),s([o({attribute:`button-class`,reflect:!0})],F.prototype,`buttonClass`,void 0),s([o({reflect:!0})],F.prototype,`name`,void 0),s([o({reflect:!0})],F.prototype,`value`,void 0),s([o()],F.prototype,`commandfor`,void 0),s([o()],F.prototype,`command`,void 0),s([f(`button`)],F.prototype,`buttonEl`,void 0),customElements.get(`w-button`)||customElements.define(`w-button`,F)})))()}export{I as t};