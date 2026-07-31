import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,d as r,h as i,l as a,r as o,s,t as c,y as l}from"./decorate-Bt2QF_uA.js";import{a as u,n as d,o as ee,r as te,t as ne}from"./i18n-CkjYRTT1.js";import{t as f}from"./query-BHY-nhsh.js";import{t as re}from"./icon-CD69d68Q.js";import{n as p,t as m}from"./styles-Cw_r5k83.js";import{r as ie,t as ae}from"./if-defined-DBI32Ir5.js";function oe(e){let t=-1;e.ontouchstart=e=>{e.targetTouches.length===1&&(t=e.targetTouches[0].clientY)},e.ontouchmove=n=>{if(n.targetTouches.length!==1)return;let r=n.targetTouches[0].clientY-t;return e.scrollTop===0&&r>0||C(e)&&r<0?v(n):(n.stopPropagation(),!0)}}function se(e){e.ontouchstart=null,e.ontouchmove=null}function ce(e){if(!e)throw Error(`Could not run setup, an element must be provided`);h.some(t=>t===e)||(h.length||(b(),T()),oe(e),h.push(e))}function le(){h.forEach(se),E(),S(),h=[]}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{h=[],g={documentElement:{},body:{}},_=Object.freeze({documentElement:{"scrollbar-gutter":`stable`},body:{overflow:`hidden`,position:`relative`,height:`100%`}}),v=e=>{e.touches.length>1||e.preventDefault?.()},y=e=>([t,n])=>{g[e][t]=document[e].style[t],document[e].style[t]=n},b=()=>Object.entries(_).forEach(([e,t])=>{Object.entries(t).forEach(y(e))}),x=e=>([t,n])=>{document[e].style[t]=g[e][t]},S=()=>Object.entries(g).forEach(([e,t])=>{Object.entries(t).forEach(x(e))}),C=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight,w=e=>()=>document[e?`addEventListener`:`removeEventListener`](`touchmove`,v,{passive:!1}),T=w(!0),E=w()})))()}var O;function k(){return(k=e((()=>{n(),O=l`
	:host {
		--_backdrop-bg: var(
			--w-c-modal-backdrop-color,
			light-dark(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.75))
		);
		--_background-color: var(--w-c-modal-bg, var(--w-s-color-background));
		--_box-shadow: var(--w-c-modal-box-shadow, var(--w-shadow-l));
		--_color: var(--w-c-modal-color, var(--w-s-color-text));
		--_height: var(
			--w-c-modal-height,
			var(--w-modal-height) /* --w-modal-height kept for backwards compat */
		);
		--_max-height: var(
			--w-c-modal-max-height,
			var(--w-modal-max-height, 80%)
				/* --w-modal-max-height kept for backwards compat */
		);
		--_min-height: var(
			--w-c-modal-min-height,
			var(--w-modal-min-heigh)
				/* --w-modal-min-height kept for backwards compat */
		);
		--_padding-bottom: var(
			--w-c-modal-padding-bottom,
			calc(32px + env(safe-area-inset-bottom, 0px))
		);
		--_translate-distance: var(
			--w-c-modal-translate-distance,
			var(--w-modal-translate-distance, 100%)
				/* --w-modal-translate-distance kept for backwards compat */
		);
		--_width: var(
			--w-c-modal-width,
			var(--w-modal-width, 640px)
				/* --w-modal-width kept for backwards compat */
		);
	}

	[part="dialog"] {
		background-color: transparent;
		border-width: 0;
		align-items: flex-end;
		inset: 0rem;
		height: unset;
		max-height: unset;
		max-width: unset;
		width: unset;
		margin: auto;
		padding: 0rem;
		backface-visibility: hidden;
	}

	[part="dialog"]::backdrop {
		background: var(--_backdrop-bg);
	}

	[part="wrapper"] {
		will-change: height;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
		background-color: var(--_background-color);
		color: var(--_color);
		box-shadow: var(--_box-shadow);
		height: var(--_height);
		max-height: var(--_max-height);
		min-height: var(--_min-height);
		width: var(--_width);
		backface-visibility: hidden;
		padding-bottom: var(--_padding-bottom);
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	[part="content"] {
		display: block;
		flex-shrink: 1;
		flex-grow: 1;
		overflow-x: hidden;
		overflow-y: auto;
		position: relative;
		margin-bottom: 0rem;
		padding-left: 1.6rem;
		padding-right: 1.6rem;
	}

	@media (min-width: 480px) {
		[part="dialog"] {
			--w-c-modal-translate-distance: 50%;
			place-content: center;
			place-items: center;
		}
		[part="wrapper"] {
			margin-left: 1.6rem;
			margin-right: 1.6rem;
			padding-bottom: 3.2rem;
		}
		[part="content"] {
			padding-left: 3.2rem;
			padding-right: 3.2rem;
		}
	}

	@media (max-width: 479.9px) {
		[part="wrapper"] {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	[part="dialog"][open] {
		animation: w-modal-in 0.3s ease-in-out forwards;
		display: flex;
		position: fixed;
	}

	[part="dialog"].close {
		animation: w-modal-out 0.3s ease-in-out forwards;
	}

	[part="dialog"][open]::backdrop {
		animation: backdrop-in 0.3s ease-in-out forwards;
	}

	[part="dialog"].close::backdrop {
		animation: backdrop-out 0.3s ease-in-out forwards;
	}

	/* shouldn't need two (in/out) animations declared here, but reversing is being weird */
	@keyframes w-modal-in {
		from {
			transform: translateY(var(--_translate-distance));
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes w-modal-out {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(var(--_translate-distance));
			opacity: 0;
		}
	}

	@keyframes backdrop-in {
		from {
			background: transparent;
		}
		to {
			background: var(--_backdrop-bg);
		}
	}

	@keyframes backdrop-out {
		from {
			background: var(--_backdrop-bg);
		}
		to {
			background: transparent;
		}
	}
`})))()}var A,j;function M(){return(M=e((()=>{A=e=>class extends e{constructor(...e){super(...e),this.patchClose=!0,this._close=null}close(){this._close()}},j=e=>class extends e{handleSlotChange(e){let t=e.target.assignedNodes({flatten:!0});for(let e of t.filter(e=>e.patchClose))e._close=()=>this.close()}}})))()}var N;function P(){return(P=e((()=>{n(),o(),ae(),D(),m(),k(),M(),N=class extends j(a){static{this.styles=[p,O]}constructor(){super(),this.show=!1,this.ignoreBackdropClicks=!1,this._isClosing=!1,this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`command`,e=>{let t=e.command;t===`--show-modal`?this.open():(t===`--close`||t===`--confirm`)&&this.close()})}async open(){this._isClosing=!1,this.dialogEl.classList.remove(`close`),this.dialogEl.showModal(),this.handleListeners(),ce(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent(`shown`,{bubbles:!0,composed:!0}))}close(){this.dialogEl?.open&&(this._isClosing=!0,this.handleListeners(`removeEventListener`),this.dialogEl.classList.add(`close`),this.dialogEl.addEventListener(`animationend`,async e=>{e.animationName===`w-modal-out`&&this._isClosing&&(this.dialogEl.classList.remove(`close`),this.dialogEl.close(),this._isClosing=!1,le(),this.show=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent(`hidden`,{bubbles:!0,composed:!0})))},{once:!0}))}updated(e){e.has(`show`)&&(e.get(`show`)!==void 0||this.show!==!1)&&this[this.show?`open`:`close`]()}handleListeners(e=`addEventListener`){document[e](`keydown`,this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e](`mousedown`,this.closeOnBackdropClick),this.dialogEl[e](`close`,this.eventPreventer),this.dialogEl[e](`cancel`,this.eventPreventer),this.dialogInnerEl[e](`transitionend`,this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key===`Escape`&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius=`0px`:this.dialogInnerEl.style.borderRadius=null}render(){return i`
			<dialog part="dialog">
				<div part="wrapper">
					<slot name="header" @slotchange="${this.handleSlotChange}"></slot>
					<div part="content" id=${ie(this.contentId)}>
						<slot name="content" @slotchange="${this.handleSlotChange}"></slot>
					</div>
					<slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
				</div>
			</dialog>
		`}},c([s({type:Boolean})],N.prototype,`show`,void 0),c([s({type:String,attribute:`content-id`})],N.prototype,`contentId`,void 0),c([s({type:Boolean,attribute:`ignore-backdrop-clicks`})],N.prototype,`ignoreBackdropClicks`,void 0),c([f(`[part="dialog"]`)],N.prototype,`dialogEl`,void 0),c([f(`[part="wrapper"]`)],N.prototype,`dialogInnerEl`,void 0),c([f(`[part="content"]`)],N.prototype,`contentEl`,void 0),customElements.get(`w-modal`)||customElements.define(`w-modal`,N)})))()}var ue,F,I;function L(){return(L=e((()=>{ue=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),F=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],I={easing:`ease`,duration:300}})))()}var R;function z(){return(z=e((()=>{if(R=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>R=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})))()}var B;function V(){return(V=e((()=>{L(),z(),B=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||F,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(ue(this.first,this.last))}get defaults(){return I}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!R?this.mergedOptions:{...this.mergedOptions,duration:0}}}})))()}var H;function U(){return(U=e((()=>{H=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})))()}var W;function G(){return(G=e((()=>{W=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})))()}var K;function q(){return(q=e((()=>{K=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})))()}var J;function Y(){return(Y=e((()=>{J=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})))()}var X;function Z(){return(Z=e((()=>{X=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})))()}var de;function fe(){return(fe=e((()=>{n(),de=l`
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
			"title title close";
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
`})))()}var Q;function pe(){return(pe=e((()=>{V(),ee(),n(),o(),re(),te(),U(),G(),q(),Y(),Z(),M(),m(),fe(),Q=class extends A(a){static{this.styles=[p,de]}constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,ne(W,J,K,H,X)}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new B(this.titleEl).when(async()=>{await this.updateComplete})}}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}render(){let e=this.back&&!this._hasTopContent,t=!this.noClose;return i`
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
		`}},c([s({type:String})],Q.prototype,`title`,void 0),c([s({type:Boolean})],Q.prototype,`back`,void 0),c([s({type:Boolean,attribute:`no-close`})],Q.prototype,`noClose`,void 0),c([t()],Q.prototype,`_hasTopContent`,void 0),c([f(`[part="title"]`)],Q.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,Q)})))()}var me;function he(){return(he=e((()=>{n(),me=l`
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
`})))()}var ge;function $(){return($=e((()=>{n(),M(),m(),he(),ge=class extends A(j(a)){static{this.styles=[p,me]}render(){return i`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,ge)})))()}export{pe as n,P as r,$ as t};