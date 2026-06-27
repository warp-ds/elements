import{i as e}from"./preload-helper-CT_b8DTk.js";import{a as t,c as n,d as r,h as i,l as a,n as o,s,t as c,y as l}from"./decorators-CPAv1fbk.js";import{N as u,P as ee,b as d,d as te,f,l as p,p as m,u as h,x as ne,y as re}from"./iframe-JOZezF-2.js";import{r as ie,t as g}from"./if-defined-B0oikEng.js";function ae(e){let t=-1;e.ontouchstart=e=>{e.targetTouches.length===1&&(t=e.targetTouches[0].clientY)},e.ontouchmove=n=>{if(n.targetTouches.length!==1)return;let r=n.targetTouches[0].clientY-t;return e.scrollTop===0&&r>0||E(e)&&r<0?x(n):(n.stopPropagation(),!0)}}function oe(e){e.ontouchstart=null,e.ontouchmove=null}function _(e){if(!e)throw Error(`Could not run setup, an element must be provided`);v.some(t=>t===e)||(v.length||(C(),O()),ae(e),v.push(e))}function se(){v.forEach(oe),k(),T(),v=[]}var v,y,b,x,S,C,w,T,E,D,O,k,ce=e((()=>{v=[],y={documentElement:{},body:{}},b=Object.freeze({documentElement:{"scrollbar-gutter":`stable`},body:{overflow:`hidden`,position:`relative`,height:`100%`}}),x=e=>{e.touches.length>1||e.preventDefault?.()},S=e=>([t,n])=>{y[e][t]=document[e].style[t],document[e].style[t]=n},C=()=>Object.entries(b).forEach(([e,t])=>{Object.entries(t).forEach(S(e))}),w=e=>([t,n])=>{document[e].style[t]=y[e][t]},T=()=>Object.entries(y).forEach(([e,t])=>{Object.entries(t).forEach(w(e))}),E=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight,D=e=>()=>document[e?`addEventListener`:`removeEventListener`](`touchmove`,x,{passive:!1}),O=D(!0),k=D()})),A,j=e((()=>{n(),A=l`
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
`})),M,N,P=e((()=>{M=e=>class extends e{constructor(...e){super(...e),this.patchClose=!0,this._close=null}close(){this._close()}},N=e=>class extends e{handleSlotChange(e){let t=e.target.assignedNodes({flatten:!0});for(let e of t.filter(e=>e.patchClose))e._close=()=>this.close()}}})),F,le=e((()=>{n(),c(),g(),ce(),p(),j(),P(),m(),F=class extends N(a){static{this.styles=[h,A]}constructor(){super(),this.show=!1,this.ignoreBackdropClicks=!1,this._isClosing=!1,this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`command`,e=>{let t=e.command;t===`--show-modal`?this.open():(t===`--close`||t===`--confirm`)&&this.close()})}async open(){this._isClosing=!1,this.dialogEl.classList.remove(`close`),this.dialogEl.showModal(),this.handleListeners(),_(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent(`shown`,{bubbles:!0,composed:!0}))}close(){this.dialogEl?.open&&(this._isClosing=!0,this.handleListeners(`removeEventListener`),this.dialogEl.classList.add(`close`),this.dialogEl.addEventListener(`animationend`,async e=>{e.animationName===`w-modal-out`&&this._isClosing&&(this.dialogEl.classList.remove(`close`),this.dialogEl.close(),this._isClosing=!1,se(),this.show=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent(`hidden`,{bubbles:!0,composed:!0})))},{once:!0}))}updated(e){e.has(`show`)&&(e.get(`show`)===void 0&&this.show===!1||this[this.show?`open`:`close`]())}handleListeners(e=`addEventListener`){document[e](`keydown`,this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e](`mousedown`,this.closeOnBackdropClick),this.dialogEl[e](`close`,this.eventPreventer),this.dialogEl[e](`cancel`,this.eventPreventer),this.dialogInnerEl[e](`transitionend`,this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key===`Escape`&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius=`0px`:this.dialogInnerEl.style.borderRadius=null}render(){return i`
			<dialog part="dialog">
				<div part="wrapper">
					<slot name="header" @slotchange="${this.handleSlotChange}"></slot>
					<div part="content" id=${ie(this.contentId)}>
						<slot name="content" @slotchange="${this.handleSlotChange}"></slot>
					</div>
					<slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
				</div>
			</dialog>
		`}},f([s({type:Boolean})],F.prototype,`show`,void 0),f([s({type:String,attribute:`content-id`})],F.prototype,`contentId`,void 0),f([s({type:Boolean,attribute:`ignore-backdrop-clicks`})],F.prototype,`ignoreBackdropClicks`,void 0),f([o(`[part="dialog"]`)],F.prototype,`dialogEl`,void 0),f([o(`[part="wrapper"]`)],F.prototype,`dialogInnerEl`,void 0),f([o(`[part="content"]`)],F.prototype,`contentEl`,void 0),customElements.get(`w-modal`)||customElements.define(`w-modal`,F)})),I,L,R,z=e((()=>{I=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),L=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],R={easing:`ease`,duration:300}})),B,V=e((()=>{if(B=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>B=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})),H,U=e((()=>{z(),V(),H=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||L,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(I(this.first,this.last))}get defaults(){return R}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!B?this.mergedOptions:{...this.mergedOptions,duration:0}}}})),W,ue=e((()=>{W=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})),G,de=e((()=>{G=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})),K,fe=e((()=>{K=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})),q,pe=e((()=>{q=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})),J,me=e((()=>{J=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})),Y,X=e((()=>{n(),Y=l`
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
`})),Z,he=e((()=>{U(),ee(),n(),c(),te(),ne(),ue(),de(),fe(),pe(),me(),P(),p(),X(),m(),Z=class extends M(a){static{this.styles=[h,Y]}constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,re(G,q,K,W,J)}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new H(this.titleEl).when(async()=>{await this.updateComplete})}}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}render(){let e=this.back&&!this._hasTopContent,t=!this.noClose;return i`
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
		`}},f([s({type:String})],Z.prototype,`title`,void 0),f([s({type:Boolean})],Z.prototype,`back`,void 0),f([s({type:Boolean,attribute:`no-close`})],Z.prototype,`noClose`,void 0),f([t()],Z.prototype,`_hasTopContent`,void 0),f([o(`[part="title"]`)],Z.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,Z)})),Q,ge=e((()=>{n(),Q=l`
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
`})),$,_e=e((()=>{n(),P(),p(),ge(),$=class extends M(N(a)){static{this.styles=[h,Q]}render(){return i`
			<slot part="footer" @slotchange="${this.handleSlotChange}"></slot>
		`}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,$)}));export{he as n,le as r,_e as t};