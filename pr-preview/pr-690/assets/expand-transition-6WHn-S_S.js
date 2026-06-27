import{i as e}from"./preload-helper-CT_b8DTk.js";import{c as t,h as n,l as r,y as i}from"./decorators-CPAv1fbk.js";import{c as a,o,s}from"./iframe-JOZezF-2.js";import{r as c,t as l}from"./if-defined-B0oikEng.js";var u,d=e((()=>{t(),l(),a(),u=class extends r{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&s(this._wrapper),!this.show&&!this._removeElement&&o(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[i`
			:host {
				display: block;
			}
		`];render(){return n`<div aria-hidden=${c(this.show?void 0:`true`)}>
			${this._removeElement?n``:n`<slot></slot>`}
		</div>`}},customElements.get(`w-expand-transition`)||customElements.define(`w-expand-transition`,u)}));export{d as t};