import{x as i,r as S,a as E,i as k,f as w,s as R,u as W,l as D,E as I,n as d,k as Y,g as B}from"./iframe-C-mUxWFo.js";import{s as T,p as O}from"./utilities-CZjp31oJ.js";import{e as v}from"./query-NYTjQBeo.js";const _=e=>class extends e{constructor(){super(...arguments),this.patchClose=!0,this._close=null}close(){this._close()}},H=e=>class extends e{handleSlotChange(t){const o=t.target.assignedNodes({flatten:!0});for(const r of o.filter(a=>a.patchClose))r._close=()=>this.close()}};let J=class extends _(H(k)){render(){return i`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[S,E`
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
    `]}};customElements.get("w-modal-footer")||customElements.define("w-modal-footer",J);const K=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),G=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:"none"}],U={easing:"ease",duration:300};let j=!1;const Q=typeof window<"u";if(Q){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=({matches:o})=>j=o;e.addEventListener&&e.addEventListener("change",t),t(e)}class V{first;last;el;constructor(t,{animation:o={},keyframes:r,respectReduceMotion:a=!0}={}){this.el=t,this.first={},this.last={},this.userAnimationOptions=o,this.keyframeGenerator=r||G,this.shouldReduceMotion=a}async when(t){this.prep();const o=await t();return await this.play(),o}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(K(this.first,this.last))}get defaults(){return U}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?j?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var X={},Z=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),ee=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),te=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),oe=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),ae=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),F=["en","nb","fi","da","sv"],z="en",re=()=>{var e;let t;switch((e=process==null?void 0:X)==null?void 0:e.NMP_BRAND){case"FINN":t="nb";break;case"TORI":t="fi";break;case"BLOCKET":t="sv";break;case"DBA":t="da";break;default:t="en"}return t},P=()=>{var e;const t=(e=document?.location)==null?void 0:e.hostname;return t?.includes("finn")?"nb":t.includes("tori")?"fi":t.includes("blocket")?"sv":t.includes("dba")?"da":z},x=e=>F.find(t=>e===t||e.toLowerCase().includes(t))||P();function ne(){var e;if(typeof window>"u"){const t=re();return x(t)}try{const t=(e=document?.documentElement)==null?void 0:e.lang,o=P();return F.includes(t)?x(t??o):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),x(o))}catch(t){return console.warn("could not detect locale, falling back to source locale",t),z}}var ie=(e,t,o,r,a,n)=>e==="nb"?o:e==="fi"?r:e==="da"?a:e==="sv"?n:t,se=(e,t,o,r,a)=>{const n=ne(),s=ie(n,e,t,o,r,a);w.load(n,s),w.activate(n)};se(ee,Z,te,oe,ae);var le=class extends k{render(){const e=w.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return W`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${R(`<title>${e}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",le);const de=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),ce=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),he=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),me=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),ue=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var pe=Object.defineProperty,y=(e,t,o,r)=>{for(var a=void 0,n=e.length-1,s;n>=0;n--)(s=e[n])&&(a=s(t,o,a)||a);return a&&pe(t,o,a),a};let c=class extends _(k){constructor(){super(),this._hasTopContent=!1,D(ce,me,he,de,ue)}render(){return i`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(t){t.has("back")&&new V(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?i`<button
          type="button"
          aria-label="${w._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:I}get closeButton(){return this.noClose?I:i`<button
      type="button"
      aria-label="${w._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(t){const o=t.target.assignedElements({flatten:!0});this._hasTopContent=!!o.length}static{this.styles=[S,E`
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
      .header-close-button {
        background-color: transparent;
        color: var(--w-s-color-icon);
        margin-right: -0.8rem;
      }
      .header-close-button:hover {
        background-color: var(--w-color-button-pill-background-hover);
      }
      .header-close-button:active {
        background-color: var(--w-color-button-pill-background-active);
      }
      .header-close-button-on-image {
        background-color: rgba(var(--w-rgb-black), 0.7);
        right: 0.8rem;
        top: 0.8rem;
        position: absolute;
        z-index: 10;
        color: var(--w-s-color-text-inverted);
      }
      .header-close-button-on-image:hover {
        background-color: rgba(var(--w-rgb-black), 0.85);
      }
      .header-close-button-on-image:active {
        background-color: var(--w-black);
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
    `]}};y([d({type:String})],c.prototype,"title");y([d({type:Boolean})],c.prototype,"back");y([d({type:Boolean,attribute:"no-close"})],c.prototype,"noClose");y([Y()],c.prototype,"_hasTopContent");y([v(".title-el")],c.prototype,"titleEl");customElements.get("w-modal-header")||customElements.define("w-modal-header",c);let f=[];const C={documentElement:{},body:{}},ge=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),A=e=>{e.touches.length>1||e.preventDefault?.()},be=e=>([t,o])=>{C[e][t]=document[e].style[t],document[e].style[t]=o},fe=()=>Object.entries(ge).forEach(([e,t])=>{Object.entries(t).forEach(be(e))}),we=e=>([t,o])=>{document[e].style[t]=C[e][t]},ye=()=>Object.entries(C).forEach(([e,t])=>{Object.entries(t).forEach(we(e))}),ke=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight;function ve(e){let t=-1;const o=r=>{if(r.targetTouches.length!==1)return;const a=r.targetTouches[0].clientY-t;return e.scrollTop===0&&a>0||ke(e)&&a<0?A(r):(r.stopPropagation(),!0)};e.ontouchstart=r=>{r.targetTouches.length===1&&(t=r.targetTouches[0].clientY)},e.ontouchmove=o}function xe(e){e.ontouchstart=null,e.ontouchmove=null}const q=e=>()=>document[e?"addEventListener":"removeEventListener"]("touchmove",A,{passive:!1}),Se=q(!0),Ee=q();function Be(e){if(!e)throw Error("Could not run setup, an element must be provided");f.some(t=>t===e)||(f.length||(fe(),Se()),ve(e),f.push(e))}function Te(){f.forEach(xe),Ee(),ye(),f=[]}var Oe=Object.defineProperty,h=(e,t,o,r)=>{for(var a=void 0,n=e.length-1,s;n>=0;n--)(s=e[n])&&(a=s(t,o,a)||a);return a&&Oe(t,o,a),a};class l extends H(k){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Be(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Te(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return i`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(t){t.has("show")&&this[this.show?"open":"close"]()}handleListeners(t="addEventListener"){document[t]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[t]("mousedown",this.closeOnBackdropClick),this.dialogEl[t]("close",this.eventPreventer),this.dialogEl[t]("cancel",this.eventPreventer),this.dialogInnerEl[t]("transitionend",this.modifyBorderRadius)}eventPreventer(t){t.preventDefault()}closeOnBackdropClick(t){this.dialogEl===t.target&&this.close()}interceptEscape(t){t.key==="Escape"&&(t.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[S,E`
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
    `]}}h([d({type:Boolean})],l.prototype,"show");h([d({type:String,attribute:"content-id"})],l.prototype,"contentId");h([d({type:Boolean,attribute:"ignore-backdrop-clicks"})],l.prototype,"ignoreBackdropClicks");h([v(".dialog-el")],l.prototype,"dialogEl");h([v(".dialog-inner-el")],l.prototype,"dialogInnerEl");h([v(".content-el")],l.prototype,"contentEl");customElements.get("w-modal")||customElements.define("w-modal",l);var L=Object.freeze,Ce=Object.defineProperty,N=(e,t)=>L(Ce(e,"raw",{value:L(e.slice())})),M,$;const{events:Ie,args:Le,argTypes:Me}=B("w-modal"),{events:$e,args:_e,argTypes:He}=B("w-modal-header"),{events:je,args:Fe,argTypes:ze}=B("w-modal-footer"),Pe={title:"Overlays/Modal"},m={args:{},render(){return i(M||(M=N([`
      <w-button id="modal-open-button-one" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-one">
        <w-modal-header id="modal-header-one" slot="header" title="An example modal"></w-modal-header>
        <div slot="content">
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small>Toggle back button</w-button>
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never capture the Method Man's stature. So uhh, tic toc and keep
            ticking, while I get you flipping off what I'm kicking. Yes, the rhythm, the rebel, alone in my level heat it up past the
            boiling point of metal. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. My
            beats travel like a vortex through your spine, to the top of your cerebral cortex. Yes, the rhythm, the rebel, alone in my level
            heat it up past the boiling point of metal. Small change, they putting shame in the game. Murderous material, made by a madman,
            it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your cerebral cortex. The rebel, I make more noise than heavy
            metal. Now, lo and behold, another deadly episode, bound to catch another charge when I explode Perpendicular to the square we
            stay in gold like Flair, escape from your dragon's lair in particular. Handcuffed in the back of a bus, forty of us. Slammin a
            hype verse til ya head burst. Handcuffed in the back of a bus, forty of us. I bomb atomically Socrates' philosophies and
            hypothesis can't define how I be dropping these mockeries. I be that insane one from the psycho ward, I'm on the trigger, plus I
            got the Wu-Tang sword. Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a handgun was silent, not even a Tec. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor. The Wu is comin thru, the outcome is critical, Muckin wit my
            style, is sort of like a Miracle. We got stick-up kids, corrupt cops, and pop rocks. Step through your section with the Force
            like Luke Skywalker, rhyme author, orchestrate mind torture. Rae got it going on pal, call me the rap assassinator, rhymes
            rugged and built like Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-one">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonOne = document.querySelector('#modal-open-button-one');
        const closeButtonOne = document.querySelector('#modal-close-button-one');
        const toggleBackButtonOne = document.querySelector('#modal-toggle-back-one');
        const modalOne = document.querySelector('#example-modal-one');
        const modalHeaderOne = document.querySelector('#modal-header-one');
        openButtonOne.addEventListener('click', () => modalOne.open());
        closeButtonOne.addEventListener('click', () => modalOne.close());
        toggleBackButtonOne.addEventListener('click', () => {
          modalHeaderOne.back = !modalHeaderOne.back;
        });
      <\/script>
    `])))}},u={args:{},render(){return i($||($=N([`
      <w-button id="modal-open-button-two" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-two">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog" />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonTwo = document.querySelector('#modal-open-button-two');
        const closeButtonTwo = document.querySelector('#modal-close-button-two');
        const modalTwo = document.querySelector('#example-modal-two');
        openButtonTwo.addEventListener('click', () => modalTwo.open());
        closeButtonTwo.addEventListener('click', () => modalTwo.close());
      <\/script>
    `])))}},p={render(e){return i`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal ${T(O(e))}></w-modal>
    `},args:Le,argTypes:Me,parameters:{actions:{handles:Ie}}},g={render(e){return i`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-header ${T(O(e))}></w-modal-header>
    `},args:_e,argTypes:He,parameters:{actions:{handles:$e}}},b={render(e){return i`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
      <w-modal-footer ${T(O(e))}></w-modal-footer>
    `},args:Fe,argTypes:ze,parameters:{actions:{handles:je}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-one" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-one">
        <w-modal-header id="modal-header-one" slot="header" title="An example modal"></w-modal-header>
        <div slot="content">
          <div style="margin-bottom: 12px">
            <w-button id="modal-toggle-back-one" variant="utility" small>Toggle back button</w-button>
          </div>
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
          <p>
            First I'm gonna getcha, once I gotcha, I gat-cha, You could never capture the Method Man's stature. So uhh, tic toc and keep
            ticking, while I get you flipping off what I'm kicking. Yes, the rhythm, the rebel, alone in my level heat it up past the
            boiling point of metal. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. My
            beats travel like a vortex through your spine, to the top of your cerebral cortex. Yes, the rhythm, the rebel, alone in my level
            heat it up past the boiling point of metal. Small change, they putting shame in the game. Murderous material, made by a madman,
            it's the mic wrecker, Inspector, bad man.
          </p>
          <p>
            My beats travel like a vortex through your spine, to the top of your cerebral cortex. The rebel, I make more noise than heavy
            metal. Now, lo and behold, another deadly episode, bound to catch another charge when I explode Perpendicular to the square we
            stay in gold like Flair, escape from your dragon's lair in particular. Handcuffed in the back of a bus, forty of us. Slammin a
            hype verse til ya head burst. Handcuffed in the back of a bus, forty of us. I bomb atomically Socrates' philosophies and
            hypothesis can't define how I be dropping these mockeries. I be that insane one from the psycho ward, I'm on the trigger, plus I
            got the Wu-Tang sword. Step through your section with the Force like Luke Skywalker, rhyme author, orchestrate mind torture.
          </p>
          <p>
            It was the night before New Year's all through the projects, not a handgun was silent, not even a Tec. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor. The Wu is comin thru, the outcome is critical, Muckin wit my
            style, is sort of like a Miracle. We got stick-up kids, corrupt cops, and pop rocks. Step through your section with the Force
            like Luke Skywalker, rhyme author, orchestrate mind torture. Rae got it going on pal, call me the rap assassinator, rhymes
            rugged and built like Schwarzenegger.
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-one">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonOne = document.querySelector('#modal-open-button-one');
        const closeButtonOne = document.querySelector('#modal-close-button-one');
        const toggleBackButtonOne = document.querySelector('#modal-toggle-back-one');
        const modalOne = document.querySelector('#example-modal-one');
        const modalHeaderOne = document.querySelector('#modal-header-one');
        openButtonOne.addEventListener('click', () => modalOne.open());
        closeButtonOne.addEventListener('click', () => modalOne.close());
        toggleBackButtonOne.addEventListener('click', () => {
          modalHeaderOne.back = !modalHeaderOne.back;
        });
      <\/script>
    \`;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-button id="modal-open-button-two" aria-haspopup="dialog">Open a modal</w-button>
      <w-modal id="example-modal-two">
        <w-modal-header slot="header" title="Look a doggo!">
          <img
            slot="top"
            style="height: 256px; width: 100%; object-fit: cover;"
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e"
            alt="A really nice dog" />
        </w-modal-header>
        <div slot="content">
          <p>
            I bomb atomically, Socrates' philosophies and hypotheses Can't define how I be droppin' these mockeries Lyrically perform armed
            robbery Flee with the lottery, possibly they spotted me Battle-scarred Shogun, explosion when my pen hits tremendous
            Ultra-violet shine blind forensics I inspect view through the future see millennium Killa Beez sold fifty gold, sixty platinum
            Shackling the masses with drastic rap tactics Graphic displays melt the steel like blacksmiths Black Wu jackets, Queen Beez ease
            the guns in Rumble with patrolmen, tear gas laced the function Heads by the score take flight, incite a war Chicks hit the
            floor, diehard fans demand more Behold the bold soldier, control the globe slowly Proceeds to blow, swingin' swords like Shinobi
            Stomp grounds and pound footprints in solid rock Wu got it locked, performin' live on your hottest block
          </p>
        </div>
        <w-modal-footer slot="footer">
          <w-button variant="primary" id="modal-close-button-two">OK</w-button>
        </w-modal-footer>
      </w-modal>

      <script>
        const openButtonTwo = document.querySelector('#modal-open-button-two');
        const closeButtonTwo = document.querySelector('#modal-close-button-two');
        const modalTwo = document.querySelector('#example-modal-two');
        openButtonTwo.addEventListener('click', () => modalTwo.open());
        closeButtonTwo.addEventListener('click', () => modalTwo.close());
      <\/script>
    \`;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render(args) {
    return html\`
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
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
      <p>This is here to document attributes. See the Default example for a complete usage example.</p>
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
}`,...b.parameters?.docs?.source}}};const Ae=["Default","WithImage","Modal","ModalHeader","ModalFooter"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Modal:p,ModalFooter:b,ModalHeader:g,WithImage:u,__namedExportsOrder:Ae,default:Pe},Symbol.toStringTag,{value:"Module"}));export{m as D,Ye as M,u as W};
