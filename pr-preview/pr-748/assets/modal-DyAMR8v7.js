import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,h as n,l as r,r as i,s as a,t as o,y as s}from"./decorate-J4WBtiHw.js";import{t as c}from"./query-BHY-nhsh.js";import{n as l,t as u}from"./styles-CYn3YYhE.js";import{r as d,t as f}from"./if-defined-hoo3qVMT.js";function p(e){let t=-1;e.ontouchstart=e=>{e.targetTouches.length===1&&(t=e.targetTouches[0].clientY)},e.ontouchmove=n=>{if(n.targetTouches.length!==1)return;let r=n.targetTouches[0].clientY-t;return e.scrollTop===0&&r>0||T(e)&&r<0?b(n):(n.stopPropagation(),!0)}}function m(e){e.ontouchstart=null,e.ontouchmove=null}function h(e){if(!e)throw Error(`Could not run setup, an element must be provided`);_.some(t=>t===e)||(_.length||(S(),D()),p(e),_.push(e))}function g(){_.forEach(m),O(),w(),_=[]}var _,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{_=[],v={documentElement:{},body:{}},y=Object.freeze({documentElement:{"scrollbar-gutter":`stable`},body:{overflow:`hidden`,position:`relative`,height:`100%`}}),b=e=>{e.touches.length>1||e.preventDefault?.()},x=e=>([t,n])=>{v[e][t]=document[e].style[t],document[e].style[t]=n},S=()=>Object.entries(y).forEach(([e,t])=>{Object.entries(t).forEach(x(e))}),C=e=>([t,n])=>{document[e].style[t]=v[e][t]},w=()=>Object.entries(v).forEach(([e,t])=>{Object.entries(t).forEach(C(e))}),T=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight,E=e=>()=>document[e?`addEventListener`:`removeEventListener`](`touchmove`,b,{passive:!1}),D=E(!0),O=E()})))()}var A;function j(){return(j=e((()=>{t(),A=s`
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
`})))()}var M,N;function P(){return(P=e((()=>{M=e=>class extends e{constructor(...e){super(...e),this.patchClose=!0,this._close=null}close(){this._close()}},N=e=>class extends e{handleSlotChange(e){let t=e.target.assignedNodes({flatten:!0});for(let e of t.filter(e=>e.patchClose))e._close=()=>this.close()}}})))()}var F;function I(){return(I=e((()=>{t(),i(),f(),k(),u(),j(),P(),F=class extends N(r){static{this.styles=[l,A]}constructor(){super(),this.show=!1,this.ignoreBackdropClicks=!1,this._isClosing=!1,this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`command`,e=>{let t=e.command;t===`--show-modal`?this.open():(t===`--close`||t===`--confirm`)&&this.close()})}async open(){this._isClosing=!1,this.dialogEl.classList.remove(`close`),this.dialogEl.showModal(),this.handleListeners(),h(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent(`shown`,{bubbles:!0,composed:!0}))}close(){this.dialogEl?.open&&(this._isClosing=!0,this.handleListeners(`removeEventListener`),this.dialogEl.classList.add(`close`),this.dialogEl.addEventListener(`animationend`,async e=>{e.animationName===`w-modal-out`&&this._isClosing&&(this.dialogEl.classList.remove(`close`),this.dialogEl.close(),this._isClosing=!1,g(),this.show=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent(`hidden`,{bubbles:!0,composed:!0})))},{once:!0}))}updated(e){e.has(`show`)&&(e.get(`show`)!==void 0||this.show!==!1)&&this[this.show?`open`:`close`]()}handleListeners(e=`addEventListener`){document[e](`keydown`,this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e](`mousedown`,this.closeOnBackdropClick),this.dialogEl[e](`close`,this.eventPreventer),this.dialogEl[e](`cancel`,this.eventPreventer),this.dialogInnerEl[e](`transitionend`,this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key===`Escape`&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius=`0px`:this.dialogInnerEl.style.borderRadius=null}render(){return n`
			<dialog part="dialog">
				<div part="wrapper">
					<slot name="header" @slotchange="${this.handleSlotChange}"></slot>
					<div part="content" id=${d(this.contentId)}>
						<slot name="content" @slotchange="${this.handleSlotChange}"></slot>
					</div>
					<slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
				</div>
			</dialog>
		`}},o([a({type:Boolean})],F.prototype,`show`,void 0),o([a({type:String,attribute:`content-id`})],F.prototype,`contentId`,void 0),o([a({type:Boolean,attribute:`ignore-backdrop-clicks`})],F.prototype,`ignoreBackdropClicks`,void 0),o([c(`[part="dialog"]`)],F.prototype,`dialogEl`,void 0),o([c(`[part="wrapper"]`)],F.prototype,`dialogInnerEl`,void 0),o([c(`[part="content"]`)],F.prototype,`contentEl`,void 0),customElements.get(`w-modal`)||customElements.define(`w-modal`,F)})))()}export{P as i,M as n,N as r,I as t};