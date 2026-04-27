import{n as e}from"./chunk-BneVvdWh.js";import{m as t,n,s as r,t as i}from"./lit-C07f_Bua.js";import{a,n as o,o as s,r as c,t as l}from"./decorate-BZxMavXy.js";import{n as u,t as d}from"./class-map-DFBsEYAd.js";var f,p=e((()=>{i(),f=t`
:host {
  display: inline-block;
}
.w-icon {
  --_w-icon-size: var(--w-icon-size, 24px);
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
  display: flex;
}
.w-icon svg {
  pointer-events: none;
  height: var(--_w-icon-size);
  width: var(--_w-icon-size);
}
.w-icon--s {
  --w-icon-size: 16px;
}
.w-icon--m {
  --w-icon-size: 24px;
}
.w-icon--l {
  --w-icon-size: 32px;
}

`}));function m(e,t={}){let n=t.responseParser??(e=>e.text());return h.has(e)||h.set(e,fetch(e).then(n)),h.get(e)}var h,g,_,v=e((()=>{i(),c(),d(),p(),o(),h=new Map,g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>`,_=class extends n{constructor(...e){super(...e),this.locale=document.documentElement.lang||`en`,this.svg=null}static{this.styles=[f]}async fetchIcon(e){let t=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{let e=await m(t);return new DOMParser().parseFromString(e,`text/html`).body.querySelector(`svg`)}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has(`name`)||e.has(`locale`))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||=new DOMParser().parseFromString(g,`text/html`).body.firstElementChild,this.svg=e}render(){let e=this.size||`medium`,t=this.name||``,n={"w-icon":!0,"w-icon--s":e===`small`,"w-icon--m":e===`medium`,"w-icon--l":e===`large`},i=typeof e==`string`&&e.endsWith(`px`)?`--w-icon-size: ${e};`:``;return r`<div class="${u(n)}" style="${i}" part="w-${t.toLowerCase()}">${this.svg}</div>`}},l([s({type:String,reflect:!0})],_.prototype,`name`,void 0),l([s({type:String,reflect:!0})],_.prototype,`size`,void 0),l([s({type:String,reflect:!0,useDefault:!0})],_.prototype,`locale`,void 0),l([a()],_.prototype,`svg`,void 0),customElements.get(`w-icon`)||customElements.define(`w-icon`,_)}));export{v as t};