import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,h as i,l as a,r as o,s,t as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,n as d,o as f,r as p,t as m}from"./i18n-CkjYRTT1.js";import{t as h}from"./query-BHY-nhsh.js";import{t as g}from"./icon-ND47zKHd.js";import{n as _,t as v}from"./styles-Cw_r5k83.js";import{i as y,n as b,r as x}from"./modal-CIOf8Xw7.js";var S,C,w;function T(){return(T=e((()=>{S=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),C=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],w={easing:`ease`,duration:300}})))()}var E;function D(){return(D=e((()=>{if(E=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>E=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})))()}var O;function k(){return(k=e((()=>{T(),D(),O=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||C,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(S(this.first,this.last))}get defaults(){return w}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!E?this.mergedOptions:{...this.mergedOptions,duration:0}}}})))()}var A;function j(){return(j=e((()=>{A=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})))()}var M;function N(){return(N=e((()=>{M=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})))()}var P;function F(){return(F=e((()=>{P=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})))()}var I;function L(){return(L=e((()=>{I=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})))()}var R;function z(){return(z=e((()=>{R=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})))()}var B;function V(){return(V=e((()=>{n(),B=l`
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
`})))()}var H;function U(){return(U=e((()=>{k(),f(),n(),o(),g(),p(),j(),N(),F(),L(),z(),y(),v(),V(),H=class extends b(a){static{this.styles=[_,B]}constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,m(M,I,P,A,R)}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new O(this.titleEl).when(async()=>{await this.updateComplete})}}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}render(){let e=this.back&&!this._hasTopContent,t=!this.noClose;return i`
			<div
				part="header"
				?show-top=${this._hasTopContent}
				?show-back=${e}
				?show-close=${t}
			>
				<slot
					part="top"
					name="top"
					@slotchange=${this.handleTopSlotChange}
				></slot>

				${e?i`<w-button
								type="button"
								part="back"
								title=""
								aria-label="${u._({id:`modal.aria.back`,message:`Back`,comment:`Aria label for the back button in modal`})}"
								variant="pill"
								icon-only
								@click="${this.emitBack}"
							>
								<w-icon
									name="ArrowLeft"
									size="small"
									locale="${d()}"
								></w-icon>
							</w-button>`:r}

				<p part="title">${this.title}</p>

				${t?i`<w-button
								type="button"
								part="close"
								title=""
								aria-label="${u._({id:`modal.aria.close`,message:`Close`,comment:`Aria label for the close button in modal`})}"
								variant="pill"
								icon-only
								@click="${this.close}"
							>
								<w-icon
									name="Close"
									size="small"
									locale="${d()}"
									style="height: 16px;"
									class="flex"
								></w-icon>
							</w-button>`:r}
			</div>
		`}},c([s({type:String})],H.prototype,`title`,void 0),c([s({type:Boolean})],H.prototype,`back`,void 0),c([s({type:Boolean,attribute:`no-close`})],H.prototype,`noClose`,void 0),c([t()],H.prototype,`_hasTopContent`,void 0),c([h(`[part="title"]`)],H.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,H)})))()}var W;function G(){return(G=e((()=>{n(),W=l`
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
`})))()}var K;function q(){return(q=e((()=>{n(),y(),v(),G(),K=class extends b(x(a)){static{this.styles=[_,W]}render(){return i`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,K)})))()}export{U as n,q as t};