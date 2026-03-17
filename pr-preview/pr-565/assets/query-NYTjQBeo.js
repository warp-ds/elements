/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(o,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(o,r,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function a(o,r){return(e,n,s)=>{const l=u=>u.renderRoot?.querySelector(o)??null;if(r){const{get:u,set:c}=typeof n=="object"?e:s??(()=>{const t=Symbol();return{get(){return this[t]},set(h){this[t]=h}}})();return i(e,n,{get(){let t=u.call(this);return t===void 0&&(t=l(this),(t!==null||this.hasUpdated)&&c.call(this,t)),t}})}return i(e,n,{get(){return l(this)}})}}export{a as e};
