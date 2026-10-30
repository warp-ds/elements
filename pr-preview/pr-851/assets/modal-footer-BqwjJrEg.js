import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{T as t,_ as n,a as r,d as i,g as a,i as o,k as s,l as c,o as l,r as u,t as d,v as f,x as p,y as m}from"./decorate-r9jH0CjD.js";import{n as h,r as g,t as _}from"./i18n-CH8KbyPD.js";import{t as v}from"./icon-BLxYKJ3e.js";import{n as y,t as b}from"./styles-zocEQ6mS.js";import{i as x,n as S,r as C}from"./modal-BT9evo1R.js";var w,T,E;function D(){return(D=e((()=>{w=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),T=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],E={easing:`ease`,duration:300}})))()}var O;function k(){return(k=e((()=>{if(O=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>O=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})))()}var A;function j(){return(j=e((()=>{D(),k(),A=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||T,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(w(this.first,this.last))}get defaults(){return E}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!O?this.mergedOptions:{...this.mergedOptions,duration:0}}}})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})))()}var I;function L(){return(L=e((()=>{I=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})))()}var R;function z(){return(z=e((()=>{R=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})))()}var B;function V(){return(V=e((()=>{B=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})))()}var H;function U(){return(U=e((()=>{f(),H=s`
	:host {
		--_font-size: var(--w-c-modal-header-font-size, var(--w-font-size-l));
		--_line-height: var(--w-c-modal-header-line-height, var(--w-line-height-l));
		--_title-margin: 0 0 6px 0;
		--_title-padding: 22px 0 0 16px;
		--_close-button-top: 14px;
		--_close-button-right: 0px;
		--_header-margin-bottom: var(--w-c-modal-header-margin-bottom, 8px);
	}

	@media (min-width: 480px) {
		:host {
			--_title-padding: 22px 0 0 32px;
			--_close-button-right: 14px;
		}
	}

	[part="header"] {
		display: grid;
		grid-template:
			"top top top"
			"title title title";
		margin-bottom: var(--_header-margin-bottom);
	}

	[part="header"][show-back]:not([show-close]) {
		grid-template:
			"top top top"
			"back title title";
	}

	[part="header"][show-close]:not([show-back]) {
		grid-template:
			"top top top"
			"title title close" / 1fr 1fr 44px;
	}

	[part="header"][show-back][show-close] {
		grid-template:
			"top top top"
			"back title close" / 44px 1fr 44px;
	}

	[part="top"]::slotted(*) {
		grid-area: top;
	}

	[part="title"] {
		grid-area: title;

		margin: var(--_title-margin);
		padding: var(--_title-padding);

		/* t3 */
		font-weight: 700;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
	}

	[part="header"][show-back] [part="title"] {
		text-align: center;
	}

	[part="back"] {
		grid-area: back;

		margin-block-end: -2px; /* align the touch target with the close button which is _slightly_ lower than the title */
		padding-block-start: 14px; /* same vertical position as the close button */
		padding-inline-start: 18px; /* 32px (left padding of title) - 14px (left padding of button) so icon aligns with text */
	}

	[part="header"][show-back] [part="title"] {
		padding-inline-start: 0;
	}

	[part="close"] {
		grid-area: close;

		position: absolute; /* so we can place it on top of the [part="top"] image */
		top: var(--_close-button-top);
		right: var(--_close-button-right);
	}

	[part="header"][show-top] [part="close"] {
		/* Invert the button colors on images */
		--w-c-button-color: var(--w-s-color-icon-inverted-static);
		--w-c-button-color-hover: var(--w-s-color-icon-inverted-static);
		--w-c-button-color-active: var(--w-s-color-icon-inverted-static);

		--w-c-button-bg: rgba(var(--w-rgb-black), 0.7);
		--w-c-button-bg-hover: rgba(var(--w-rgb-black), 0.85);
		--w-c-button-bg-active: rgba(var(--w-rgb-black), 1);
	}
`})))()}var W;function G(){return(G=e((()=>{j(),n(),f(),r(),o(),v(),g(),N(),F(),L(),z(),V(),x(),b(),U(),W=class extends S(m){static{this.styles=[y,H]}constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,new u(this),_(P,R,I,M,B)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`slot`)||(this.slot=`header`)}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new A(this.titleEl).when(async()=>{await this.updateComplete})}}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}render(){let e=this.back&&!this._hasTopContent,n=!this.noClose;return t`
			<div
				part="header"
				?show-top=${this._hasTopContent}
				?show-back=${e}
				?show-close=${n}
			>
				<slot
					part="top"
					name="top"
					@slotchange=${this.handleTopSlotChange}
				></slot>

				${e?t`<w-button
								type="button"
								part="back"
								title=""
								aria-label="${a._({id:`modal.aria.back`,message:`Back`,comment:`Aria label for the back button in modal`})}"
								variant="pill"
								icon-only
								@click="${this.emitBack}"
							>
								<w-icon
									name="ArrowLeft"
									size="small"
									locale="${h()}"
								></w-icon>
							</w-button>`:p}

				<p part="title">${this.title}</p>

				${n?t`<w-button
								type="button"
								part="close"
								title=""
								aria-label="${a._({id:`modal.aria.close`,message:`Close`,comment:`Aria label for the close button in modal`})}"
								variant="pill"
								icon-only
								@click="${this.close}"
							>
								<w-icon
									name="Close"
									size="small"
									locale="${h()}"
									style="height: 16px;"
									class="flex"
								></w-icon>
							</w-button>`:p}
			</div>
		`}},d([i({type:String})],W.prototype,`title`,void 0),d([i({type:Boolean})],W.prototype,`back`,void 0),d([i({type:Boolean,attribute:`no-close`})],W.prototype,`noClose`,void 0),d([c()],W.prototype,`_hasTopContent`,void 0),d([l(`[part="title"]`)],W.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,W)})))()}var K;function q(){return(q=e((()=>{f(),K=s`
	:host {
		--_gap: var(--w-c-modal-footer-gap, 8px);
	}

	[part="footer"] {
		display: flex;
		justify-content: flex-end;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
		padding-top: 2.4rem;
		gap: var(--_gap);
	}

	@media (min-width: 480px) {
		[part="footer"] {
			padding-left: 3.2rem;
			padding-right: 3.2rem;
		}
	}
`})))()}var J;function Y(){return(Y=e((()=>{f(),o(),x(),b(),q(),J=class extends S(C(m)){constructor(){super(),new u(this)}static{this.styles=[y,K]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`slot`)||(this.slot=`footer`)}render(){return t`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,J)})))()}export{G as n,Y as t};