import{r as Z,n as s,t as C}from"./styles-Dxp8llA4.js";import"./expand-transition-Bg8EpfwP.js";import{x as o,i as X,a as Y}from"./iframe-CenlcFCF.js";import{W as z}from"./element-nI0p3MwD.js";import{o as B}from"./chevron-down-16-BFDDGMwT.js";import{r as d}from"./index.m-DF_LekKB.js";import{o as S}from"./if-defined-RWXx2HGU.js";import{u as E,s as I}from"./static-BgMX2g-l.js";import{i as k}from"./index-DaqRszEa.js";import"./preload-helper-CmsKOCeN.js";class N extends z{static properties={level:{type:Number}};static styles=[z.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?B(this._markup):o`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",N);var U={},$=["en","nb","fi","da","sv"],_="en",L=()=>{var t;let e;switch((t=process==null?void 0:U)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},T=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":_},y=t=>$.find(e=>t===e||t.toLowerCase().includes(e))||T();function A(){var t;if(typeof window>"u"){const e=L();return y(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=T();return $.includes(e)?y(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),y(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),_}}var W=(t,e,r,w,i,c)=>t==="nb"?r:t==="fi"?w:t==="da"?i:t==="sv"?c:e,D=(t,e,r,w,i)=>{const c=A(),v=W(c,t,e,r,w,i);k.load(c,v),k.activate(c)},p={nb:{"icon.title.chevron-up":["Oppoverpil"]},en:{"icon.title.chevron-up":["Upward arrow"]},fi:{"icon.title.chevron-up":["Nuoli ylöspäin"]},da:{"icon.title.chevron-up":["Pil opad"]},sv:{"icon.title.chevron-up":["Pil upp"]}};D(p.en,p.nb,p.fi,p.da,p.sv);var j=class extends X{render(){const t=k.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return E`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${I(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",j);const P=Y`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var H=Object.defineProperty,l=(t,e,r,w)=>{for(var i=void 0,c=t.length-1,v;c>=0;c--)(v=t[c])&&(i=v(e,r,i)||i);return i&&H(e,r,i),i};const O={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},a={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class n extends X{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Z,P,Y`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return d([a.wrapper,this.box&&a.box,this.bleed&&a.bleed])}get#t(){return d(this.buttonClass,[a.button,this.box&&a.buttonBox])}get#a(){return d([a.chevron,!this.box&&a.chevronNonBox])}get#r(){const e=d([a.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&a.elementsChevronCollapse]),r=d([a.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&a.elementsChevronExpand]);return this._showChevronUp?o`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:o`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#n(){return d(this.contentClass,[this.box&&O.base,this._hasTitle&&this.box&&a.contentWithTitle])}get#o(){return d([a.expansion,!this.expanded&&a.expansionNotExpanded])}get _expandableSlot(){return o`<div class="${this.#n}">
      <slot></slot>
    </div>`}render(){return o` <div class="${this.#e}">
      ${this._hasTitle?o`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${a.title}">
                ${this.title?o`<span class="${a.titleType}">${this.title}</span>`:o`<slot name="title"></slot>`}
                ${this.noChevron?"":o`<div class="${this.#a}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?o`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:o`<div class="${this.#o}" aria-hidden=${S(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}l([s({type:Boolean,reflect:!0})],n.prototype,"expanded");l([s({type:String})],n.prototype,"title");l([s({type:Boolean})],n.prototype,"box");l([s({type:Boolean})],n.prototype,"bleed");l([s({attribute:"button-class",type:String})],n.prototype,"buttonClass");l([s({attribute:"content-class",type:String})],n.prototype,"contentClass");l([s({attribute:"no-chevron",type:Boolean})],n.prototype,"noChevron");l([s({type:Boolean})],n.prototype,"animated");l([s({attribute:"heading-level",type:Number})],n.prototype,"headingLevel");l([s({type:Boolean,state:!0})],n.prototype,"_hasTitle");l([s({type:Boolean,state:!0})],n.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",n);const te={title:"Layout/Expandable",component:"w-expandable",render(t){return`
      <w-expandable ${C(t)}>
        <p>This is the expandable content that can be shown or hidden.</p>
        <p>It can contain multiple paragraphs and other elements.</p>
      </w-expandable>
    `},argTypes:{expanded:{type:"boolean",description:"Controls the expanded state"},title:{type:"string",description:"Title text for the expandable"},box:{type:"boolean",description:"Display as a padded box"},bleed:{type:"boolean",description:"Make full-width on mobile"},animated:{type:"boolean",description:"Animate open and close"},"no-chevron":{type:"boolean",description:"Hide the chevron icon"},"heading-level":{type:"number",description:"Wrap toggle button in heading element"},"button-class":{type:"string",description:"Additional CSS classes for button"},"content-class":{type:"string",description:"Additional CSS classes for content"}}},u={args:{title:"I'm expandable",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},h={args:{title:"I'm expanded by default",expanded:!0,box:!1,bleed:!1,animated:!1,"no-chevron":!1}},m={args:{title:"I'm a box expandable",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1}},f={args:{title:"I'm animated",expanded:!1,box:!0,bleed:!1,animated:!0,"no-chevron":!1}},b={args:{title:"I'm wrapped in h2",expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1,"heading-level":2}},x={args:{title:"I have no chevron",expanded:!1,box:!1,bleed:!1,animated:!1,"no-chevron":!0}},g={args:{expanded:!1,box:!0,bleed:!1,animated:!1,"no-chevron":!1},render(t){return`
      <w-expandable ${C(t)}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    `}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expandable",
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm expanded by default",
    expanded: true,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm a box expandable",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm animated",
    expanded: false,
    box: true,
    bleed: false,
    animated: true,
    'no-chevron': false
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "I'm wrapped in h2",
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false,
    'heading-level': 2
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'I have no chevron',
    expanded: false,
    box: false,
    bleed: false,
    animated: false,
    'no-chevron': true
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    box: true,
    bleed: false,
    animated: false,
    'no-chevron': false
  },
  render(args) {
    return \`
      <w-expandable \${toAttributeString(args)}>
        <div slot="title" style="display: flex; align-items: center;">
          <span style="margin-right: 8px;">🎯</span>
          <span>Custom title with icon</span>
        </div>
        <p>This expandable has a custom title slot with an icon.</p>
      </w-expandable>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const ae=["Default","Expanded","Box","Animated","WithHeading","NoChevron","CustomTitle"];export{f as Animated,m as Box,g as CustomTitle,u as Default,h as Expanded,x as NoChevron,b as WithHeading,ae as __namedExportsOrder,te as default};
