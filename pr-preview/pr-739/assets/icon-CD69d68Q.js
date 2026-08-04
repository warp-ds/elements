import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,c as n,h as r,l as i,r as a,s as o,t as s,y as c}from"./decorate-Bt2QF_uA.js";import{n as l,t as u}from"./class-map-DaGxfNVq.js";var d;function f(){return(f=e((()=>{n(),d=c`
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
`})))()}function p(e,t={}){let n=t.responseParser??(e=>e.text());return m.has(e)||m.set(e,fetch(e).then(n)),m.get(e)}var m,h,g;function _(){return(_=e((()=>{n(),a(),u(),f(),m=new Map,h=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>`,g=class extends i{constructor(...e){super(...e),this.locale=document.documentElement.lang||`en`,this.svg=null}static{this.styles=[d]}async fetchIcon(e){let t=`https://assets.finn.no/pkg/eikons/~1/${this.locale}/${e}.svg`;try{let e=await p(t);return new DOMParser().parseFromString(e,`text/html`).body.querySelector(`svg`)}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has(`name`)||e.has(`locale`))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||=new DOMParser().parseFromString(h,`text/html`).body.firstElementChild,this.svg=e}render(){let e=this.size||`medium`,t=this.name||``,n={"w-icon":!0,"w-icon--s":e===`small`,"w-icon--m":e===`medium`,"w-icon--l":e===`large`},i=typeof e==`string`&&e.endsWith(`px`)?`--w-icon-size: ${e};`:``;return r`<div
			class="${l(n)}"
			style="${i}"
			part="w-${t.toLowerCase()}"
		>
			${this.svg}
		</div>`}},s([o({type:String,reflect:!0})],g.prototype,`name`,void 0),s([o({type:String,reflect:!0})],g.prototype,`size`,void 0),s([o({type:String,reflect:!0,useDefault:!0})],g.prototype,`locale`,void 0),s([t()],g.prototype,`svg`,void 0),customElements.get(`w-icon`)||customElements.define(`w-icon`,g)})))()}export{_ as t};