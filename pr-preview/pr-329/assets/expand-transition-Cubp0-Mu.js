import{W as t,e as s,c as i,i as r,o as n,x as e}from"./iframe-D9yHRnPP.js";class o extends t{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&s(this._wrapper),!this.show&&!this._removeElement&&i(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[t.styles,r`
      :host {
        display: block;
      }
    `];render(){return e`<div aria-hidden=${n(this.show?void 0:"true")}>${this._removeElement?e``:e`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",o);
