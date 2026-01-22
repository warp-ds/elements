import{i as z,o as B,b as r,h as k,s as E,u as N,a as Y,r as I,k as c,n as s,g as O}from"./iframe-Do6BcuIq.js";import{s as C,p as T}from"./utilities-DW93ZOtp.js";import"./expand-transition-CVuaChbm.js";import{o as U}from"./if-defined-CyJ5Q75R.js";import"./chevron-down-16-9Vjx_hMT.js";class W extends z{static properties={level:{type:Number}};get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?B(this._markup):r`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",W);var L={},j=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),A=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),P=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),D=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),H=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),$=["en","nb","fi","da","sv"],S="en",J=()=>{var t;let e;switch((t=process==null?void 0:L)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Z=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":S},y=t=>$.find(e=>t===e||t.toLowerCase().includes(e))||Z();function M(){var t;if(typeof window>"u"){const e=J();return y(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,n=Z();return $.includes(e)?y(e??n):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),y(n))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),S}}var q=(t,e,n,f,i,d)=>t==="nb"?n:t==="fi"?f:t==="da"?i:t==="sv"?d:e,R=(t,e,n,f,i)=>{const d=M(),g=q(d,t,e,n,f,i);k.load(d,g),k.activate(d)};R(A,j,P,D,H);var F=class extends z{render(){const t=k.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return N`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${E(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",F);const K=Y`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-subtle-hover:hover{background-color:var(--w-s-color-background-subtle-hover)}.active\\:s-bg-subtle-active:active{background-color:var(--w-s-color-background-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.px-0{padding-left:0;padding-right:0}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-0{padding-top:0;padding-bottom:0}.py-16{padding-top:1.6rem;padding-bottom:1.6rem}.pt-0{padding-top:0}.pt-16{padding-top:1.6rem}.pt-8{padding-top:.8rem}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var G=Object.defineProperty,l=(t,e,n,f)=>{for(var i=void 0,d=t.length-1,g;d>=0;d--)(g=t[d])&&(i=g(e,n,i)||i);return i&&G(e,n,i),i};const Q={base:"group block relative break-words last-child:mb-0 px-16 rounded-8"},a={wrapper:"will-change-height s-text py-16",box:"s-bg-subtle hover:s-bg-subtle-hover active:s-bg-subtle-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 px-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class o extends z{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[I,K,Y`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,n=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||n}get#e(){return c([a.wrapper,this.box&&a.box,this.bleed&&a.bleed])}get#t(){return c(this.buttonClass,[a.button,this.box&&a.buttonBox])}get#a(){return c([a.chevron,!this.box&&a.chevronNonBox])}get#r(){const e=c([a.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&a.elementsChevronCollapse]),n=c([a.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&a.elementsChevronExpand]);return this._showChevronUp?r`<w-icon-chevron-up-16 style="display: flex;" class="${e}"></w-icon-chevron-up-16>`:r`<w-icon-chevron-down-16 style="display: flex;" class="${n}"></w-icon-chevron-down-16>`}get#n(){return c(this.contentClass,[this.box?"pt-16":"pt-8",this.box&&Q.base,this._hasTitle&&this.box&&a.contentWithTitle])}get#o(){return c([a.expansion,!this.expanded&&a.expansionNotExpanded])}get _expandableSlot(){return r`<div class="${this.#n}">
      <slot></slot>
    </div>`}render(){return r` <div class="${this.#e}">
      ${this._hasTitle?r`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${a.title}">
                ${this.title?r`<span class="${a.titleType}">${this.title}</span>`:r`<slot name="title"></slot>`}
                ${this.noChevron?"":r`<div class="${this.#a}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?r`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:r`<div class="${this.#o}" aria-hidden=${U(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}l([s({type:Boolean,reflect:!0})],o.prototype,"expanded");l([s({type:String})],o.prototype,"title");l([s({type:Boolean})],o.prototype,"box");l([s({type:Boolean})],o.prototype,"bleed");l([s({attribute:"button-class",type:String})],o.prototype,"buttonClass");l([s({attribute:"content-class",type:String})],o.prototype,"contentClass");l([s({attribute:"no-chevron",type:Boolean})],o.prototype,"noChevron");l([s({type:Boolean})],o.prototype,"animated");l([s({attribute:"heading-level",type:Number})],o.prototype,"headingLevel");l([s({type:Boolean,state:!0})],o.prototype,"_hasTitle");l([s({type:Boolean,state:!0})],o.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",o);var _=Object.freeze,V=Object.defineProperty,ee=(t,e)=>_(V(t,"raw",{value:_(t.slice())})),X;const{events:te,args:ae,argTypes:re}=O("w-expandable"),ne={title:"Layout/Expandable",render(t){return r`
      <w-expandable ${C(T(t))}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `},args:ae,argTypes:re,parameters:{actions:{handles:te}}},p={args:{title:"I'm expandable",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},w={args:{title:"I'm expanded by default",expanded:!0,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},v={args:{title:"I'm a box expandable",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1}},u={args:{title:"I'm animated",expanded:!1,box:!0,bleed:!1,animated:!0,"no-chevron":!1}},h={args:{title:"I'm wrapped in h2",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1,"heading-level":2}},m={args:{title:"I have no chevron",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!0}},b={args:{expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1},render(t){return r`
      <w-expandable ${C(T(t))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `}},x={args:{expanded:!0,box:!0,animated:!0},render(t){return r(X||(X=ee([`
      <w-button aria-label="Toggle expandable content without title" aria-controls="expandableWithoutTitle">Toggle</w-button>
      <w-expandable `,` id="expandableWithoutTitle">
        <p>with expanded content</p>
      </w-expandable>
      <script>
        document.querySelector('[aria-controls="expandableWithoutTitle"]').addEventListener('click', () => {
          const expand = document.getElementById('expandableWithoutTitle');
          if (expand.expanded) {
            expand.removeAttribute('expanded');
          } else {
            expand.setAttribute('expanded', 'true');
          }
        });
      <\/script>
    `])),C(T(t)))}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  },
  render(args) {
    return html\`
      <w-expandable \${spread(prespread(args))}>
        <div slot="title" style="display: flex; align-items: center;">
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    \`;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    box: true,
    animated: true
  },
  render(args) {
    return html\`
      <w-button aria-label="Toggle expandable content without title" aria-controls="expandableWithoutTitle">Toggle</w-button>
      <w-expandable \${spread(prespread(args))} id="expandableWithoutTitle">
        <p>with expanded content</p>
      </w-expandable>
      <script>
        document.querySelector('[aria-controls="expandableWithoutTitle"]').addEventListener('click', () => {
          const expand = document.getElementById('expandableWithoutTitle');
          if (expand.expanded) {
            expand.removeAttribute('expanded');
          } else {
            expand.setAttribute('expanded', 'true');
          }
        });
      <\/script>
    \`;
  }
}`,...x.parameters?.docs?.source}}};const oe=["Default","Expanded","Box","Animated","WithHeading","NoChevron","CustomTitle","NoTitle"],pe=Object.freeze(Object.defineProperty({__proto__:null,Animated:u,Box:v,CustomTitle:b,Default:p,Expanded:w,NoChevron:m,NoTitle:x,WithHeading:h,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{u as A,v as B,b as C,p as D,pe as E,x as N,h as W,w as a,m as b};
