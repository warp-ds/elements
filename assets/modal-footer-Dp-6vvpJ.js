import{i as e}from"./preload-helper-CwA5MRLW.js";import{A as t,Bt as n,E as r,Ht as i,J as a,Lt as o,Rt as s,Wt as c,b as l,d as u,f as d,j as f,k as p,l as m,p as h,q as g,u as _,w as v,x as y}from"./iframe-CYNlGj6M.js";function b(e){let t=-1;e.ontouchstart=e=>{e.targetTouches.length===1&&(t=e.targetTouches[0].clientY)},e.ontouchmove=n=>{if(n.targetTouches.length!==1)return;let r=n.targetTouches[0].clientY-t;return e.scrollTop===0&&r>0||k(e)&&r<0?w(n):(n.stopPropagation(),!0)}}function ee(e){e.ontouchstart=null,e.ontouchmove=null}function te(e){if(!e)throw Error(`Could not run setup, an element must be provided`);x.some(t=>t===e)||(x.length||(E(),j()),b(e),x.push(e))}function ne(){x.forEach(ee),M(),O(),x=[]}var x,S,C,w,T,E,D,O,k,A,j,M,re=e((()=>{x=[],S={documentElement:{},body:{}},C=Object.freeze({documentElement:{"scrollbar-gutter":`stable`},body:{overflow:`hidden`,position:`relative`,height:`100%`}}),w=e=>{e.touches.length>1||e.preventDefault?.()},T=e=>([t,n])=>{S[e][t]=document[e].style[t],document[e].style[t]=n},E=()=>Object.entries(C).forEach(([e,t])=>{Object.entries(t).forEach(T(e))}),D=e=>([t,n])=>{document[e].style[t]=S[e][t]},O=()=>Object.entries(S).forEach(([e,t])=>{Object.entries(t).forEach(D(e))}),k=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight,A=e=>()=>document[e?`addEventListener`:`removeEventListener`](`touchmove`,w,{passive:!1}),j=A(!0),M=A()})),N,P,F=e((()=>{N=e=>class extends e{constructor(...e){super(...e),this.patchClose=!0,this._close=null}close(){this._close()}},P=e=>class extends e{handleSlotChange(e){let t=e.target.assignedNodes({flatten:!0});for(let e of t.filter(e=>e.patchClose))e._close=()=>this.close()}}})),I,ie=e((()=>{o(),l(),re(),m(),F(),h(),I=class extends P(s){constructor(){super(),this.show=!1,this.ignoreBackdropClicks=!1,this._isClosing=!1,this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(`command`,e=>{let t=e.command;t===`--show-modal`?this.open():(t===`--close`||t===`--confirm`)&&this.close()})}async open(){this._isClosing=!1,this.dialogEl.classList.remove(`close`),this.dialogEl.showModal(),this.handleListeners(),te(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent(`shown`,{bubbles:!0,composed:!0}))}close(){this.dialogEl?.open&&(this._isClosing=!0,this.handleListeners(`removeEventListener`),this.dialogEl.classList.add(`close`),this.dialogEl.addEventListener(`animationend`,async e=>{e.animationName===`w-modal-out`&&this._isClosing&&(this.dialogEl.classList.remove(`close`),this.dialogEl.close(),this._isClosing=!1,ne(),this.show=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent(`hidden`,{bubbles:!0,composed:!0})))},{once:!0}))}render(){return i`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has(`show`)&&(e.get(`show`)===void 0&&this.show===!1||this[this.show?`open`:`close`]())}handleListeners(e=`addEventListener`){document[e](`keydown`,this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e](`mousedown`,this.closeOnBackdropClick),this.dialogEl[e](`close`,this.eventPreventer),this.dialogEl[e](`cancel`,this.eventPreventer),this.dialogInnerEl[e](`transitionend`,this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key===`Escape`&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius=`0px`:this.dialogInnerEl.style.borderRadius=null}static{this.styles=[_,c`
      .dialog-el {
        --w-modal-translate-distance: 100%;
        --w-modal-max-height: 80%;
        --w-modal-width: 640px;
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
      .dialog-inner-el {
        will-change: height;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        background-color: var(--w-s-color-background);
        color: var(--w-s-color-text);
        box-shadow: var(--w-shadow-m);
        height: var(--w-modal-height);
        max-height: var(--w-modal-max-height);
        min-height: var(--w-modal-min-height);
        width: var(--w-modal-width);
        backface-visibility: hidden;
        padding-bottom: calc(32px + env(safe-area-inset-bottom, 0px));
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
      .content-el {
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
        .dialog-el {
          --w-modal-translate-distance: 50%;
          place-content: center;
          place-items: center;
        }
        .dialog-inner-el {
          margin-left: 1.6rem;
          margin-right: 1.6rem;
          padding-bottom: 3.2rem;
        }
        .content-el {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }
      @media (max-width: 479.9px) {
        .dialog-inner-el {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      .dialog-el[open] {
        animation: w-modal-in 0.3s ease-in-out forwards;
        display: flex;
        position: fixed;
      }
      .dialog-el.close {
        animation: w-modal-out 0.3s ease-in-out forwards;
      }
      .dialog-el[open]::backdrop {
        animation: backdrop-in 0.3s ease-in-out forwards;
      }
      .dialog-el.close::backdrop {
        animation: backdrop-out 0.3s ease-in-out forwards;
      }
      /* shouldn't need two (in/out) animations declared here, but reversing is being weird */
      @keyframes w-modal-in {
        from {
          transform: translateY(var(--w-modal-translate-distance));
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
          transform: translateY(var(--w-modal-translate-distance));
          opacity: 0;
        }
      }
      @keyframes backdrop-in {
        from {
          background: transparent;
        }
        to {
          background: rgba(0, 0, 0, 0.25);
        }
      }
      @keyframes backdrop-out {
        from {
          background: rgba(0, 0, 0, 0.25);
        }
        to {
          background: transparent;
        }
      }
    `]}},d([r({type:Boolean})],I.prototype,`show`,void 0),d([r({type:String,attribute:`content-id`})],I.prototype,`contentId`,void 0),d([r({type:Boolean,attribute:`ignore-backdrop-clicks`})],I.prototype,`ignoreBackdropClicks`,void 0),d([y(`.dialog-el`)],I.prototype,`dialogEl`,void 0),d([y(`.dialog-inner-el`)],I.prototype,`dialogInnerEl`,void 0),d([y(`.content-el`)],I.prototype,`contentEl`,void 0),customElements.get(`w-modal`)||customElements.define(`w-modal`,I)})),L,R,z,B=e((()=>{L=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),R=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],z={easing:`ease`,duration:300}})),V,H=e((()=>{if(V=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>V=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})),U,W=e((()=>{B(),H(),U=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||R,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(L(this.first,this.last))}get defaults(){return z}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!V?this.mergedOptions:{...this.mergedOptions,duration:0}}}})),G,K=e((()=>{G=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})),q,J=e((()=>{q=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})),Y,ae=e((()=>{Y=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})),X,oe=e((()=>{X=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})),Z,se=e((()=>{Z=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})),Q,ce=e((()=>{W(),a(),o(),l(),u(),f(),K(),J(),ae(),oe(),se(),F(),m(),h(),Q=class extends N(s){constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,p(q,X,Y,G,Z)}render(){return i`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?``:`header-title-bar`}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new U(this.titleEl).when(async()=>{await this.updateComplete})}}get titleClasses(){return[`header-title`,this.back?`header-title-with-back-button`:`header-title-without-back-button`,this._hasTopContent?`header-title-with-top-area`:``].join(` `)}get backButton(){return this.back&&!this._hasTopContent?i`<button
          type="button"
          title=""
          aria-label="${g._({id:`modal.aria.back`,message:`Back`,comment:`Aria label for the back button in modal`})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon name="ArrowLeft" size="small" locale="${t()}" style="display: flex;" class="flex"></w-icon>
        </button>`:n}get closeButton(){return this.noClose?n:i`<div class="header-close-button-container">
        <w-button
            type="button"
            title=""
            aria-label="${g._({id:`modal.aria.close`,message:`Close`,comment:`Aria label for the close button in modal`})}"
            variant="pill"
            small
            @click="${this.close}">
                <w-icon name="Close" size="small" locale="${t()}" style="display: flex;" class="flex"></w-icon>
        </w-button>
    </div>`}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}static{this.styles=[_,c`
      .header {
        position: relative;
        padding-bottom: 0.8rem;
      }
      .header-title-bar {
        display: grid;
        flex-shrink: 0 !important;
        gap: 1.2rem;
        grid-template-columns: auto 1fr auto;
        align-items: flex-start;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 1.6rem;
      }
      .header-title {
        font-weight: 700;
        font-size: var(--w-font-size-l);
        line-height: var(--w-line-height-l);
        align-self: center;
        margin: 0;
      }
      .header-title-with-back-button {
        justify-self: center;
      }
      .header-title-without-back-button {
        grid-column: span 2 / span 2;
      }
      .header-title-with-top-area {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 1.6rem;
      }
      .header-button:hover {
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      }
      .header-button:focus,
      .header-button:focus-visible {
        outline: 2px solid var(--w-s-color-border-focus);
        outline-offset: var(--w-outline-offset, 1px);
      }
      .header-button:not(:focus-visible) {
        outline: none;
      }
      .header-button {
        border-width: 0;
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        min-width: 40px;
        padding: 0.4rem;
        font-weight: 700;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        font-size: var(--w-font-size-m);
        line-height: var(--w-line-height-m);
        line-height: 2.4rem;
      }
      .header-button-left {
        background-color: transparent;
        color: var(--w-s-color-icon);
        margin-left: -0.8rem;
      }
      .header-button-left:hover {
        background-color: var(--w-color-button-pill-background-hover);
      }
      .header-button-left:active {
        background-color: var(--w-color-button-pill-background-active);
      }
      .header-close-button-container {
        position: absolute;
        right: 2rem;
        top: 2.4rem;
      }
      @media (min-width: 480px) {
        .header-title-bar {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
          padding-top: 2.4rem;
        }
        .header-title-with-top-area {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
        .header-button {
          min-height: 32px;
          min-width: 32px;
        }
      }
    `]}},d([r({type:String})],Q.prototype,`title`,void 0),d([r({type:Boolean})],Q.prototype,`back`,void 0),d([r({type:Boolean,attribute:`no-close`})],Q.prototype,`noClose`,void 0),d([v()],Q.prototype,`_hasTopContent`,void 0),d([y(`.title-el`)],Q.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,Q)})),$,le=e((()=>{o(),F(),m(),$=class extends N(P(s)){render(){return i`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[_,c`
      .footer {
        display: flex;
        flex-shrink: 0;
        justify-content: flex-end;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        padding-top: 2.4rem;
      }
      @media (min-width: 480px) {
        .footer {
          padding-left: 3.2rem;
          padding-right: 3.2rem;
        }
      }
    `]}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,$)}));export{ce as n,ie as r,le as t};