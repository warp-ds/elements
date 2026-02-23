import{b as i,r as k,a as v,n as d,i as x,q as _,A as T,p as I,d as M,m as F,g as E}from"./iframe-DBupccSK.js";import{s as S,p as B}from"./utilities-DXAqOW0R.js";import{e as y}from"./query-NYTjQBeo.js";let f=[];const C={documentElement:{},body:{}},z=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),L=e=>{e.touches.length>1||e.preventDefault?.()},j=e=>([t,o])=>{C[e][t]=document[e].style[t],document[e].style[t]=o},q=()=>Object.entries(z).forEach(([e,t])=>{Object.entries(t).forEach(j(e))}),A=e=>([t,o])=>{document[e].style[t]=C[e][t]},P=()=>Object.entries(C).forEach(([e,t])=>{Object.entries(t).forEach(A(e))}),W=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function R(e){let t=-1;const o=n=>{if(n.targetTouches.length!==1)return;const a=n.targetTouches[0].clientY-t;return e.scrollTop===0&&a>0||W(e)&&a<0?L(n):(n.stopPropagation(),!0)};e.ontouchstart=n=>{n.targetTouches.length===1&&(t=n.targetTouches[0].clientY)},e.ontouchmove=o}function Y(e){e.ontouchstart=null,e.ontouchmove=null}const $=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",L,{passive:!1}),N=$(!0),J=$();function K(e){if(!e)throw Error("Could not run setup, an element must be provided");f.some(t=>t===e)||(f.length||(q(),N()),R(e),f.push(e))}function G(){f.forEach(Y),J(),P(),f=[]}const O=e=>class extends e{constructor(){super(...arguments),this.patchClose=!0,this._close=null}close(){this._close()}},D=e=>class extends e{handleSlotChange(t){const o=t.target.assignedNodes({flatten:!0});for(const n of o.filter(a=>a.patchClose))n._close=()=>this.close()}};var U=Object.defineProperty,c=(e,t,o,n)=>{for(var a=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=s(t,o,a)||a);return a&&U(t,o,a),a};class l extends D(x){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),K(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),G(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return i`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(t){t.has("show")&&this[this.show?"open":"close"]()}handleListeners(t="addEventListener"){document[t]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[t]("mousedown",this.closeOnBackdropClick),this.dialogEl[t]("close",this.eventPreventer),this.dialogEl[t]("cancel",this.eventPreventer),this.dialogInnerEl[t]("transitionend",this.modifyBorderRadius)}eventPreventer(t){t.preventDefault()}closeOnBackdropClick(t){this.dialogEl===t.target&&this.close()}interceptEscape(t){t.key==="Escape"&&(t.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[k,v`
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
    `]}}c([d({type:Boolean})],l.prototype,"show");c([d({type:String,attribute:"content-id"})],l.prototype,"contentId");c([d({type:Boolean,attribute:"ignore-backdrop-clicks"})],l.prototype,"ignoreBackdropClicks");c([y(".dialog-el")],l.prototype,"dialogEl");c([y(".dialog-inner-el")],l.prototype,"dialogInnerEl");c([y(".content-el")],l.prototype,"contentEl");customElements.get("w-modal")||customElements.define("w-modal",l);const Q=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),V=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:"none"}],X={easing:"ease",duration:300};let H=!1;const Z=typeof window<"u";if(Z){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=({matches:o})=>H=o;e.addEventListener&&e.addEventListener("change",t),t(e)}class ee{first;last;el;constructor(t,{animation:o={},keyframes:n,respectReduceMotion:a=!0}={}){this.el=t,this.first={},this.last={},this.userAnimationOptions=o,this.keyframeGenerator=n||V,this.shouldReduceMotion=a}async when(t){this.prep();const o=await t();return await this.play(),o}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(Q(this.first,this.last))}get defaults(){return X}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?H?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}const te=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),oe=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),ae=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),ne=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),re=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var ie=Object.defineProperty,w=(e,t,o,n)=>{for(var a=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=s(t,o,a)||a);return a&&ie(t,o,a),a};let h=class extends O(x){constructor(){super(),this._hasTopContent=!1,_(oe,ne,ae,te,re)}render(){return i`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(t){if(t.has("back")){if(!this.titleEl)return;new ee(this.titleEl).when(async()=>{await this.updateComplete})}}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?i`<button
          type="button"
          aria-label="${I._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon name="ArrowLeft" size="small" locale="${M()}" style="display: flex;" class="flex"></w-icon>
        </button>`:T}get closeButton(){return this.noClose?T:i`<div class="header-close-button-container">
        <w-button
            type="button"
            aria-label="${I._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
            variant="pill"
            small=""
            @click="${this.close}">
                <w-icon name="Close" size="small" locale="${M()}" style="display: flex;" class="flex"></w-icon>
        </w-button>
    </div>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(t){const o=t.target.assignedElements({flatten:!0});this._hasTopContent=!!o.length}static{this.styles=[k,v`
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
    `]}};w([d({type:String})],h.prototype,"title");w([d({type:Boolean})],h.prototype,"back");w([d({type:Boolean,attribute:"no-close"})],h.prototype,"noClose");w([F()],h.prototype,"_hasTopContent");w([y(".title-el")],h.prototype,"titleEl");customElements.get("w-modal-header")||customElements.define("w-modal-header",h);let se=class extends O(D(x)){render(){return i`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[k,v`
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
    `]}};customElements.get("w-modal-footer")||customElements.define("w-modal-footer",se);const{events:le,args:de,argTypes:ce}=E("w-modal"),{events:he,args:me,argTypes:pe}=E("w-modal-header"),{events:ue,args:ge,argTypes:be}=E("w-modal-footer"),fe={title:"Overlays/Modal"},m={args:{},render(){return i`
      <w-button id="modal-open-button-one" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-one">
        <w-modal-header
          id="modal-header-one"
          slot="header"
          title="An example modal"
        ></w-modal-header>
        <div slot="content">
          <h2 class="h4 mb-16">Triumph by Wu Tang Clan</h2>
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small
              >Toggle back button</w-button
            >
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't
            define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me
            Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future
            see millennium Killa Beez sold fifty gold, sixty platinum Shackling
            the masses with drastic rap tactics Graphic displays melt the steel
            like blacksmiths Black Wu jackets, Queen Beez ease the guns in
            Rumble with patrolmen, tear gas laced the function Heads by the
            score take flight, incite a war Chicks hit the floor, diehard fans
            demand more Behold the bold soldier, control the globe slowly
            Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
            pound footprints in solid rock Wu got it locked, performin' live on
            your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never
            capture the Method Man's stature. So uhh, tic toc and keep ticking,
            while I get you flipping off what I'm kicking. Yes, the rhythm, the
            rebel, alone in my level heat it up past the boiling point of metal.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. My beats travel like a vortex through
            your spine, to the top of your cerebral cortex. Yes, the rhythm, the
            rebel, alone in my level heat it up past the boiling point of metal.
            Small change, they putting shame in the game. Murderous material,
            made by a madman, it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your
            cerebral cortex. The rebel, I make more noise than heavy metal. Now,
            lo and behold, another deadly episode, bound to catch another charge
            when I explode Perpendicular to the square we stay in gold like
            Flair, escape from your dragon's lair in particular. Handcuffed in
            the back of a bus, forty of us. Slammin a hype verse til ya head
            burst. Handcuffed in the back of a bus, forty of us. I bomb
            atomically Socrates' philosophies and hypothesis can't define how I
            be dropping these mockeries. I be that insane one from the psycho
            ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
            your section with the Force like Luke Skywalker, rhyme author,
            orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a
            handgun was silent, not even a Tec. I smoke on the mic like smoking
            Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
            is comin thru, the outcome is critical, Muckin wit my style, is sort
            of like a Miracle. We got stick-up kids, corrupt cops, and pop
            rocks. Step through your section with the Force like Luke Skywalker,
            rhyme author, orchestrate mind torture. Rae got it going on pal,
            call me the rap assassinator, rhymes rugged and built like
            Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <div class="flex gap-16">
            <w-button variant="secondary" id="modal-close-button-cancel"
              >Cancel</w-button
            >
            <w-button variant="primary" id="modal-close-button-one"
              >Confirm</w-button
            >
          </div>
        </w-modal-footer>
      </w-modal>
    `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined("w-button"),customElements.whenDefined("w-modal"),customElements.whenDefined("w-modal-header"),customElements.whenDefined("w-modal-footer")]);const t=e.querySelector("#modal-open-button-one"),o=e.querySelector("#modal-close-button-one"),n=e.querySelector("#modal-toggle-back-one"),a=e.querySelector("#modal-close-button-cancel"),r=e.querySelector("#example-modal-one"),s=e.querySelector("#modal-header-one");t&&r&&t.addEventListener("click",()=>r.open()),o&&r&&o.addEventListener("click",()=>r.close()),a&&r&&a.addEventListener("click",()=>r.close()),n&&s&&n.addEventListener("click",()=>{s.back=!s.back})},parameters:{docs:{story:{autoplay:!0}}}},p={args:{},render(){return i`
      <w-button id="modal-open-button-two" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-two" style="--w-s-color-icon: var(--w-s-color-icon-inverted)">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog"
          />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't
            define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me
            Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future
            see millennium Killa Beez sold fifty gold, sixty platinum Shackling
            the masses with drastic rap tactics Graphic displays melt the steel
            like blacksmiths Black Wu jackets, Queen Beez ease the guns in
            Rumble with patrolmen, tear gas laced the function Heads by the
            score take flight, incite a war Chicks hit the floor, diehard fans
            demand more Behold the bold soldier, control the globe slowly
            Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
            pound footprints in solid rock Wu got it locked, performin' live on
            your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>
    `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined("w-button"),customElements.whenDefined("w-modal"),customElements.whenDefined("w-modal-header"),customElements.whenDefined("w-modal-footer")]);const t=e.querySelector("#modal-open-button-two"),o=e.querySelector("#modal-close-button-two"),n=e.querySelector("#example-modal-two");t&&n&&t.addEventListener("click",()=>n.open()),o&&n&&o.addEventListener("click",()=>n.close())},parameters:{docs:{story:{autoplay:!0}}}},u={render(e){return i`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal ${S(B(e))}></w-modal>
    `},args:de,argTypes:ce,parameters:{actions:{handles:le}}},g={render(e){return i`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-header ${S(B(e))}></w-modal-header>
    `},args:me,argTypes:pe,parameters:{actions:{handles:he}}},b={render(e){return i`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-footer ${S(B(e))}></w-modal-footer>
    `},args:ge,argTypes:be,parameters:{actions:{handles:ue}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-one" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-one">
        <w-modal-header
          id="modal-header-one"
          slot="header"
          title="An example modal"
        ></w-modal-header>
        <div slot="content">
          <h2 class="h4 mb-16">Triumph by Wu Tang Clan</h2>
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small
              >Toggle back button</w-button
            >
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't
            define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me
            Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future
            see millennium Killa Beez sold fifty gold, sixty platinum Shackling
            the masses with drastic rap tactics Graphic displays melt the steel
            like blacksmiths Black Wu jackets, Queen Beez ease the guns in
            Rumble with patrolmen, tear gas laced the function Heads by the
            score take flight, incite a war Chicks hit the floor, diehard fans
            demand more Behold the bold soldier, control the globe slowly
            Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
            pound footprints in solid rock Wu got it locked, performin' live on
            your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never
            capture the Method Man's stature. So uhh, tic toc and keep ticking,
            while I get you flipping off what I'm kicking. Yes, the rhythm, the
            rebel, alone in my level heat it up past the boiling point of metal.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. My beats travel like a vortex through
            your spine, to the top of your cerebral cortex. Yes, the rhythm, the
            rebel, alone in my level heat it up past the boiling point of metal.
            Small change, they putting shame in the game. Murderous material,
            made by a madman, it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your
            cerebral cortex. The rebel, I make more noise than heavy metal. Now,
            lo and behold, another deadly episode, bound to catch another charge
            when I explode Perpendicular to the square we stay in gold like
            Flair, escape from your dragon's lair in particular. Handcuffed in
            the back of a bus, forty of us. Slammin a hype verse til ya head
            burst. Handcuffed in the back of a bus, forty of us. I bomb
            atomically Socrates' philosophies and hypothesis can't define how I
            be dropping these mockeries. I be that insane one from the psycho
            ward, I'm on the trigger, plus I got the Wu-Tang sword. Step through
            your section with the Force like Luke Skywalker, rhyme author,
            orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a
            handgun was silent, not even a Tec. I smoke on the mic like smoking
            Joe Frazier, the hell raiser, raising hell with the flavor. The Wu
            is comin thru, the outcome is critical, Muckin wit my style, is sort
            of like a Miracle. We got stick-up kids, corrupt cops, and pop
            rocks. Step through your section with the Force like Luke Skywalker,
            rhyme author, orchestrate mind torture. Rae got it going on pal,
            call me the rap assassinator, rhymes rugged and built like
            Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <div class="flex gap-16">
            <w-button variant="secondary" id="modal-close-button-cancel"
              >Cancel</w-button
            >
            <w-button variant="primary" id="modal-close-button-one"
              >Confirm</w-button
            >
          </div>
        </w-modal-footer>
      </w-modal>
    \`;
  },
  play: async ({
    canvasElement
  }) => {
    await Promise.all([customElements.whenDefined('w-button'), customElements.whenDefined('w-modal'), customElements.whenDefined('w-modal-header'), customElements.whenDefined('w-modal-footer')]);
    const openButton = canvasElement.querySelector('#modal-open-button-one');
    const closeButton = canvasElement.querySelector('#modal-close-button-one');
    const toggleBackButton = canvasElement.querySelector('#modal-toggle-back-one');
    const cancelButton = canvasElement.querySelector('#modal-close-button-cancel');
    const modal: ModalMain = canvasElement.querySelector('#example-modal-one');
    const modalHeader: ModalHeaderType = canvasElement.querySelector('#modal-header-one');
    if (openButton && modal) {
      openButton.addEventListener('click', () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener('click', () => modal.close());
    }
    if (cancelButton && modal) {
      cancelButton.addEventListener('click', () => modal.close());
    }
    if (toggleBackButton && modalHeader) {
      toggleBackButton.addEventListener('click', () => {
        modalHeader.back = !modalHeader.back;
      });
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-two" aria-haspopup="dialog"
        >Open a modal</w-button
      >
      <w-modal id="example-modal-two" style="--w-s-color-icon: var(--w-s-color-icon-inverted)">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog"
          />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't
            define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me
            Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future
            see millennium Killa Beez sold fifty gold, sixty platinum Shackling
            the masses with drastic rap tactics Graphic displays melt the steel
            like blacksmiths Black Wu jackets, Queen Beez ease the guns in
            Rumble with patrolmen, tear gas laced the function Heads by the
            score take flight, incite a war Chicks hit the floor, diehard fans
            demand more Behold the bold soldier, control the globe slowly
            Proceeds to blow, swingin' swords like Shinobi Stomp grounds and
            pound footprints in solid rock Wu got it locked, performin' live on
            your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>
    \`;
  },
  play: async ({
    canvasElement
  }) => {
    await Promise.all([customElements.whenDefined('w-button'), customElements.whenDefined('w-modal'), customElements.whenDefined('w-modal-header'), customElements.whenDefined('w-modal-footer')]);
    const openButton = canvasElement.querySelector('#modal-open-button-two');
    const closeButton = canvasElement.querySelector('#modal-close-button-two');
    const modal: ModalMain = canvasElement.querySelector('#example-modal-two');
    if (openButton && modal) {
      openButton.addEventListener('click', () => modal.open());
    }
    if (closeButton && modal) {
      closeButton.addEventListener('click', () => modal.close());
    }
  },
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal \${spread(prespread(args))}></w-modal>
    \`;
  },
  args: modalArgs,
  argTypes: modalArgTypes,
  parameters: {
    actions: {
      handles: modalEvents
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-header \${spread(prespread(args))}></w-modal-header>
    \`;
  },
  args: modalHeaderArgs,
  argTypes: modalHeaderArgTypes,
  parameters: {
    actions: {
      handles: modalHeaderEvents
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-footer \${spread(prespread(args))}></w-modal-footer>
    \`;
  },
  args: modalFooterArgs,
  argTypes: modalFooterArgTypes,
  parameters: {
    actions: {
      handles: modalFooterEvents
    }
  }
}`,...b.parameters?.docs?.source}}};const we=["Default","WithImage","Modal","ModalHeader","ModalFooter"],Se=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Modal:u,ModalFooter:b,ModalHeader:g,WithImage:p,__namedExportsOrder:we,default:fe},Symbol.toStringTag,{value:"Module"}));export{m as D,Se as M,p as W};
