import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{At as n,B as r,D as i,E as a,Mt as o,Ot as s,Pt as c,_ as l,a as u,b as d,c as f,d as p,f as ee,kt as m,l as te,o as h,s as ne,u as re,v as g,y as ie,z as _}from"./iframe-BcsZ2l20.js";import{i as v,n as y,r as ae,t as oe}from"./utilities-D54CgKit.js";function se(e){let t=-1;e.ontouchstart=e=>{e.targetTouches.length===1&&(t=e.targetTouches[0].clientY)},e.ontouchmove=n=>{if(n.targetTouches.length!==1)return;let r=n.targetTouches[0].clientY-t;return e.scrollTop===0&&r>0||E(e)&&r<0?S(n):(n.stopPropagation(),!0)}}function ce(e){e.ontouchstart=null,e.ontouchmove=null}function le(e){if(!e)throw Error(`Could not run setup, an element must be provided`);b.some(t=>t===e)||(b.length||(C(),O()),se(e),b.push(e))}function ue(){b.forEach(ce),k(),T(),b=[]}var b,x,de,S,fe,C,w,T,E,D,O,k,pe=e((()=>{b=[],x={documentElement:{},body:{}},de=Object.freeze({documentElement:{"scrollbar-gutter":`stable`},body:{overflow:`hidden`,position:`relative`,height:`100%`}}),S=e=>{e.touches.length>1||e.preventDefault?.()},fe=e=>([t,n])=>{x[e][t]=document[e].style[t],document[e].style[t]=n},C=()=>Object.entries(de).forEach(([e,t])=>{Object.entries(t).forEach(fe(e))}),w=e=>([t,n])=>{document[e].style[t]=x[e][t]},T=()=>Object.entries(x).forEach(([e,t])=>{Object.entries(t).forEach(w(e))}),E=e=>e.scrollHeight-Math.abs(e.scrollTop)===e.clientHeight,D=e=>()=>document[e?`addEventListener`:`removeEventListener`](`touchmove`,S,{passive:!1}),O=D(!0),k=D()})),A,j,M=e((()=>{A=e=>class extends e{constructor(...e){super(...e),this.patchClose=!0,this._close=null}close(){this._close()}},j=e=>class extends e{handleSlotChange(e){let t=e.target.assignedNodes({flatten:!0});for(let e of t.filter(e=>e.patchClose))e._close=()=>this.close()}}})),N,me=e((()=>{s(),l(),pe(),u(),M(),ee(),N=class extends j(m){constructor(){super(),this.show=!1,this.ignoreBackdropClicks=!1,this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),le(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent(`shown`,{bubbles:!0,composed:!0}))}close(){this.dialogEl?.open&&(this.handleListeners(`removeEventListener`),this.dialogEl.classList.add(`close`),this.dialogEl.addEventListener(`animationend`,async()=>{this.dialogEl.classList.remove(`close`),this.dialogEl.close(),ue(),await this.updateComplete,this.dispatchEvent(new CustomEvent(`hidden`,{bubbles:!0,composed:!0}))},{once:!0}))}render(){return o`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has(`show`)&&(e.get(`show`)===void 0&&this.show===!1||this[this.show?`open`:`close`]())}handleListeners(e=`addEventListener`){document[e](`keydown`,this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e](`mousedown`,this.closeOnBackdropClick),this.dialogEl[e](`close`,this.eventPreventer),this.dialogEl[e](`cancel`,this.eventPreventer),this.dialogInnerEl[e](`transitionend`,this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key===`Escape`&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius=`0px`:this.dialogInnerEl.style.borderRadius=null}static{this.styles=[h,c`
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
    `]}},p([d({type:Boolean})],N.prototype,`show`,void 0),p([d({type:String,attribute:`content-id`})],N.prototype,`contentId`,void 0),p([d({type:Boolean,attribute:`ignore-backdrop-clicks`})],N.prototype,`ignoreBackdropClicks`,void 0),p([g(`.dialog-el`)],N.prototype,`dialogEl`,void 0),p([g(`.dialog-inner-el`)],N.prototype,`dialogInnerEl`,void 0),p([g(`.content-el`)],N.prototype,`contentEl`,void 0),customElements.get(`w-modal`)||customElements.define(`w-modal`,N)})),P,F,I,he=e((()=>{P=(e,t)=>({dx:e.left-t.left,dy:e.top-t.top,dw:e.width/t.width,dh:e.height/t.height,first:e,last:t}),F=({dx:e,dy:t})=>[{transform:`translate(${e}px, ${t}px)`},{transform:`none`}],I={easing:`ease`,duration:300}})),L,ge=e((()=>{if(L=!1,typeof window<`u`){let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=({matches:e})=>L=e;e.addEventListener&&e.addEventListener(`change`,t),t(e)}})),R,_e=e((()=>{he(),ge(),R=class{first;last;el;constructor(e,{animation:t={},keyframes:n,respectReduceMotion:r=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=t,this.keyframeGenerator=n||F,this.shouldReduceMotion=r}async when(e){this.prep();let t=await e();return await this.play(),t}prep(){this.first=this.el.getBoundingClientRect()}async play(){this.last=this.el.getBoundingClientRect(),this.el.animate&&await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(P(this.first,this.last))}get defaults(){return I}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return!this.shouldReduceMotion||!L?this.mergedOptions:{...this.mergedOptions,duration:0}}}})),z,ve=e((()=>{z=JSON.parse(`{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}`)})),ye,be=e((()=>{ye=JSON.parse(`{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}`)})),B,xe=e((()=>{B=JSON.parse(`{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}`)})),V,Se=e((()=>{V=JSON.parse(`{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}`)})),H,Ce=e((()=>{H=JSON.parse(`{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}`)})),U,we=e((()=>{_e(),r(),s(),l(),re(),te(),ve(),be(),xe(),Se(),Ce(),M(),u(),ee(),U=class extends A(m){constructor(){super(),this.back=!1,this.noClose=!1,this._hasTopContent=!1,ne(ye,V,B,z,H)}render(){return o`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?``:`header-title-bar`}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){if(e.has(`back`)){if(!this.titleEl)return;new R(this.titleEl).when(async()=>{await this.updateComplete})}}get titleClasses(){return[`header-title`,this.back?`header-title-with-back-button`:`header-title-without-back-button`,this._hasTopContent?`header-title-with-top-area`:``].join(` `)}get backButton(){return this.back&&!this._hasTopContent?o`<button
          type="button"
          aria-label="${_._({id:`modal.aria.back`,message:`Back`,comment:`Aria label for the back button in modal`})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon name="ArrowLeft" size="small" locale="${f()}" style="display: flex;" class="flex"></w-icon>
        </button>`:n}get closeButton(){return this.noClose?n:o`<div class="header-close-button-container">
        <w-button
            type="button"
            aria-label="${_._({id:`modal.aria.close`,message:`Close`,comment:`Aria label for the close button in modal`})}"
            variant="pill"
            small=""
            @click="${this.close}">
                <w-icon name="Close" size="small" locale="${f()}" style="display: flex;" class="flex"></w-icon>
        </w-button>
    </div>`}emitBack(){this.dispatchEvent(new CustomEvent(`backClicked`,{bubbles:!0,composed:!0}))}handleTopSlotChange(e){let t=e.target.assignedElements({flatten:!0});this._hasTopContent=!!t.length}static{this.styles=[h,c`
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
    `]}},p([d({type:String})],U.prototype,`title`,void 0),p([d({type:Boolean})],U.prototype,`back`,void 0),p([d({type:Boolean,attribute:`no-close`})],U.prototype,`noClose`,void 0),p([ie()],U.prototype,`_hasTopContent`,void 0),p([g(`.title-el`)],U.prototype,`titleEl`,void 0),customElements.get(`w-modal-header`)||customElements.define(`w-modal-header`,U)})),W,Te=e((()=>{s(),M(),u(),W=class extends A(j(m)){render(){return o`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[h,c`
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
    `]}},customElements.get(`w-modal-footer`)||customElements.define(`w-modal-footer`,W)})),Ee=t({Default:()=>J,Modal:()=>X,ModalFooter:()=>Q,ModalHeader:()=>Z,WithImage:()=>Y,__namedExportsOrder:()=>$,default:()=>q}),G,K,De,Oe,ke,Ae,je,Me,Ne,q,J,Y,X,Z,Q,$,Pe=e((()=>{ae(),i(),s(),oe(),me(),we(),Te(),{events:G,args:K,argTypes:De}=a(`w-modal`),{events:Oe,args:ke,argTypes:Ae}=a(`w-modal-header`),{events:je,args:Me,argTypes:Ne}=a(`w-modal-footer`),q={title:`Overlays/Modal`},J={args:{},render(){return o`
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
    `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined(`w-button`),customElements.whenDefined(`w-modal`),customElements.whenDefined(`w-modal-header`),customElements.whenDefined(`w-modal-footer`)]);let t=e.querySelector(`#modal-open-button-one`),n=e.querySelector(`#modal-close-button-one`),r=e.querySelector(`#modal-toggle-back-one`),i=e.querySelector(`#modal-close-button-cancel`),a=e.querySelector(`#example-modal-one`),o=e.querySelector(`#modal-header-one`);t&&a&&t.addEventListener(`click`,()=>a.open()),n&&a&&n.addEventListener(`click`,()=>a.close()),i&&a&&i.addEventListener(`click`,()=>a.close()),r&&o&&r.addEventListener(`click`,()=>{o.back=!o.back})},parameters:{docs:{story:{autoplay:!0}}}},Y={args:{},render(){return o`
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
    `},play:async({canvasElement:e})=>{await Promise.all([customElements.whenDefined(`w-button`),customElements.whenDefined(`w-modal`),customElements.whenDefined(`w-modal-header`),customElements.whenDefined(`w-modal-footer`)]);let t=e.querySelector(`#modal-open-button-two`),n=e.querySelector(`#modal-close-button-two`),r=e.querySelector(`#example-modal-two`);t&&r&&t.addEventListener(`click`,()=>r.open()),n&&r&&n.addEventListener(`click`,()=>r.close())},parameters:{docs:{story:{autoplay:!0}}}},X={render(e){return o`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal ${v(y(e))}></w-modal>
    `},args:K,argTypes:De,parameters:{actions:{handles:G}}},Z={render(e){return o`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-header ${v(y(e))}></w-modal-header>
    `},args:ke,argTypes:Ae,parameters:{actions:{handles:Oe}}},Q={render(e){return o`
      <p>
        This is here to document attributes. See the Default example for a
        complete usage example.
      </p>
      <w-modal-footer ${v(y(e))}></w-modal-footer>
    `},args:Me,argTypes:Ne,parameters:{actions:{handles:je}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithImage`,`Modal`,`ModalHeader`,`ModalFooter`]}));Pe();export{J as Default,X as Modal,Q as ModalFooter,Z as ModalHeader,Y as WithImage,$ as __namedExportsOrder,q as default,Ee as n,Pe as t};