(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=globalThis,zr=Ft.ShadowRoot&&(Ft.ShadyCSS===void 0||Ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fr=Symbol(),uo=new WeakMap;let Wo=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Fr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(zr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=uo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&uo.set(r,e))}return e}toString(){return this.cssText}};const Vo=t=>new Wo(typeof t=="string"?t:t+"",void 0,Fr),ee=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new Wo(r,t,Fr)},_i=(t,e)=>{if(zr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),n=Ft.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},ho=zr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Vo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Si,defineProperty:Ei,getOwnPropertyDescriptor:Ci,getOwnPropertyNames:Ai,getOwnPropertySymbols:Li,getPrototypeOf:Oi}=Object,ar=globalThis,po=ar.trustedTypes,Ti=po?po.emptyScript:"",Pi=ar.reactiveElementPolyfillSupport,_t=(t,e)=>t,jt={toAttribute(t,e){switch(e){case Boolean:t=t?Ti:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ir=(t,e)=>!Si(t,e),fo={attribute:!0,type:String,converter:jt,reflect:!1,useDefault:!1,hasChanged:Ir};Symbol.metadata??=Symbol("metadata"),ar.litPropertyMetadata??=new WeakMap;let Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=fo){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&Ei(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){const{get:n,set:i}=Ci(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:n,set(s){const a=n?.call(this);i?.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fo}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;const e=Oi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){const r=this.properties,o=[...Ai(r),...Li(r)];for(const n of o)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)r.unshift(ho(n))}else e!==void 0&&r.push(ho(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _i(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:jt).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:jt;this._$Em=n;const a=s.fromAttribute(r,i.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){const n=this.constructor,i=this[e];if(o??=n.getPropertyOptions(e),!((o.hasChanged??Ir)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:n,wrapped:i},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??r??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o){const{wrapped:s}=i,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[_t("elementProperties")]=new Map,Je[_t("finalized")]=new Map,Pi?.({ReactiveElement:Je}),(ar.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jr=globalThis,Ut=jr.trustedTypes,go=Ut?Ut.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ur="$lit$",_e=`lit$${Math.random().toFixed(9).slice(2)}$`,Hr="?"+_e,Di=`<${Hr}>`,je=document,Et=()=>je.createComment(""),Ct=t=>t===null||typeof t!="object"&&typeof t!="function",Wr=Array.isArray,qo=t=>Wr(t)||typeof t?.[Symbol.iterator]=="function",mr=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,bo=/>/g,Ne=RegExp(`>|${mr}(?:([^\\s"'>=/]+)(${mr}*=${mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,wo=/"/g,Yo=/^(?:script|style|textarea|title)$/i,Bi=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=Bi(1),Te=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),yo=new WeakMap,Fe=je.createTreeWalker(je,129);function Qo(t,e){if(!Wr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return go!==void 0?go.createHTML(e):e}const Xo=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=lt;for(let a=0;a<r;a++){const l=t[a];let u,p,d=-1,m=0;for(;m<l.length&&(s.lastIndex=m,p=s.exec(l),p!==null);)m=s.lastIndex,s===lt?p[1]==="!--"?s=mo:p[1]!==void 0?s=bo:p[2]!==void 0?(Yo.test(p[2])&&(n=RegExp("</"+p[2],"g")),s=Ne):p[3]!==void 0&&(s=Ne):s===Ne?p[0]===">"?(s=n??lt,d=-1):p[1]===void 0?d=-2:(d=s.lastIndex-p[2].length,u=p[1],s=p[3]===void 0?Ne:p[3]==='"'?wo:vo):s===wo||s===vo?s=Ne:s===mo||s===bo?s=lt:(s=Ne,n=void 0);const c=s===Ne&&t[a+1].startsWith("/>")?" ":"";i+=s===lt?l+Di:d>=0?(o.push(u),l.slice(0,d)+Ur+l.slice(d)+_e+c):l+_e+(d===-2?a:c)}return[Qo(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class At{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[u,p]=Xo(e,r);if(this.el=At.createElement(u,o),Fe.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=Fe.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Ur)){const m=p[s++],c=n.getAttribute(d).split(_e),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:f[2],strings:c,ctor:f[1]==="."?Zo:f[1]==="?"?Ko:f[1]==="@"?Go:Dt}),n.removeAttribute(d)}else d.startsWith(_e)&&(l.push({type:6,index:i}),n.removeAttribute(d));if(Yo.test(n.tagName)){const d=n.textContent.split(_e),m=d.length-1;if(m>0){n.textContent=Ut?Ut.emptyScript:"";for(let c=0;c<m;c++)n.append(d[c],Et()),Fe.nextNode(),l.push({type:2,index:++i});n.append(d[m],Et())}}}else if(n.nodeType===8)if(n.data===Hr)l.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(_e,d+1))!==-1;)l.push({type:7,index:i}),d+=_e.length-1}i++}}static createElement(e,r){const o=je.createElement("template");return o.innerHTML=e,o}}function Ue(t,e,r=t,o){if(e===Te)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=Ct(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=Ue(t,n._$AS(t,e.values),n,o)),e}let Jo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??je).importNode(r,!0);Fe.currentNode=n;let i=Fe.nextNode(),s=0,a=0,l=o[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new rt(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new en(i,this,e)),this._$AV.push(u),l=o[++a]}s!==l?.index&&(i=Fe.nextNode(),s++)}return Fe.currentNode=je,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}};class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ue(this,e,r),Ct(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Te&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&Ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(je.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=At.createElement(Qo(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Jo(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=yo.get(e.strings);return r===void 0&&yo.set(e.strings,r=new At(e)),r}k(e){Wr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new rt(this.O(Et()),this.O(Et()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=Ue(this,e,r,0),s=!Ct(e)||e!==this._$AH&&e!==Te,s&&(this._$AH=e);else{const a=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Ue(this,a[o+l],r,l),u===Te&&(u=this._$AH[l]),s||=!Ct(u)||u!==this._$AH[l],u===F?e=F:e!==F&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!n&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Zo extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class Ko extends Dt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class Go extends Dt{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=Ue(this,e,r,0)??F)===Te)return;const o=this._$AH,n=e===F&&o!==F||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==F&&(o===F||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class en{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}}const Ni={M:Ur,P:_e,A:Hr,C:1,L:Xo,R:Jo,D:qo,V:Ue,I:rt,H:Dt,N:Ko,U:Go,B:Zo,F:en},Mi=jr.litHtmlPolyfillSupport;Mi?.(At,rt),(jr.litHtmlVersions??=[]).push("3.3.1");const Ri=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new rt(e.insertBefore(Et(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=globalThis;let j=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ri(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};j._$litElement$=!0,j.finalized=!0,Vr.litElementHydrateSupport?.({LitElement:j});const zi=Vr.litElementPolyfillSupport;zi?.({LitElement:j});(Vr.litElementVersions??=[]).push("4.2.1");function Fi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const xo=String.raw`[A-Za-z][^/\s>]*`,Ii=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,ji=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,tn=String.raw`${Ii}|${ji}`,Ui=String.raw`"(?<quotedAttrValue>[^"]*)"`,Hi=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Wi=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Vi=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,qi=String.raw`${Ui}|${Hi}|${Wi}`,Yi=String.raw`(?<attrName>${Vi})(?:\s*=\s*(?:${qi}))?`,Qi=String.raw`${tn}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,rn=String.raw`(?<attrSpace>\s*)(?:${Yi}|(?<attrText>${Qi}))`,Xi={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${xo})(?<attrs>(?:${rn})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${xo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${tn}|['"]`,wildcard:String.raw`.`},Ji=Object.entries(Xi).map(([t,e])=>`(?<${t}>${e})`).join("|");function*Zi(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const Ki=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Lt(t,e="  ",r=80){const o=new RegExp(Ji,"gys"),n=new RegExp(rn,"gy"),i=[];let s=null,a=0,l=0,u="",p=0,d="";const m=()=>{if(d&&d!=`
`){const S=u.indexOf(`
`),A=S==-1?u.length:S;l+d.length+A>r&&(d=`
`)}const h=d==`
`&&u?e.repeat(p):"",b=`${d}${h}${u}`;if(b){const S=b.lastIndexOf(`
`);S==-1?l+=b.length:l=b.length-S-1,i.push(b)}u=d=""},c=(...h)=>{for(const b of h)!s&&/^\s+$/.test(b)?(m(),d=b):(u||(p=a),u+=b)};for(const h of Zi(o,t)){if(Lt.__strict&&h.groups.wildcard)throw new Error("Unexpected wildcard");if(h.groups.endTag){const b=h.groups.endTagName.toLowerCase();b==s&&(s=null),s||(--a,c(`</${b}>`))}if(s)c(h[0]);else if(h.groups.space)c(...h[0].match(/\n/g)?.slice(0,2)??[" "]);else if(h.groups.comment||h.groups.dtd||h.groups.text||h.groups.wildcard)c(h[0]);else if(h.groups.startTag){const b=h.groups.startTagName.toLowerCase();if(c(`<${b}`),++a,h.groups.attrs){let{lastIndex:A}=n,C,N;for(;C=n.exec(h.groups.attrs);){if({lastIndex:A}=n,Lt.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&c(/\n/.test(C.groups.attrSpace)?`
`:" "),c(C.groups.attrText)):((C.groups.attrSpace||!N?.groups.attrText)&&c(/\n/.test(C.groups.attrSpace)?`
`:" "),c(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),N=C}if(A!=h.groups.attrs.length)throw new Error("Failed to parse attributes")}const S=!!h.groups.closingSlash;c(S?" />":">"),S||Ki.has(b)?--a:["pre","textarea","script","style"].includes(b)&&(s=b)}}m();let f=!1;for(;/^\s+$/.test(i[i.length-1]);){const h=i.pop();/\n/.test(h)&&(f=!0)}return f&&i.push(`
`),i.join("")}Lt.default=Lt;var Gi=Lt;const es=Fi(Gi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const on={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},nn=t=>(...e)=>({_$litDirective$:t,values:e});let sn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tr=class extends sn{constructor(e){if(super(e),this.it=F,e.type!==on.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Tr.directiveName="unsafeHTML",Tr.resultType=1;const qr=nn(Tr);class ts extends j{static styles=ee`
    :host {
      display: block;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    pre {
      background-color: var(--w-bluegray-50);
      font-family:
        Monaco,
        Ubuntu Mono,
        Consolas,
        monospace;
      font-size: 14px;
      margin: 0;
      padding: 16px;
      overflow-x: auto;
    }

    slot {
      display: none;
    }
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(n=>n.nodeType===Node.TEXT_NODE?n.textContent:n.outerHTML).join("").trim();r=es(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${qr(this.source)}</code></pre>`}}customElements.define("syntax-highlight",ts);var z=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?z.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(n){return o[n]?n:""}):"")},[]).join(" ")};const Me={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},ct={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},ce={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},br={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},fe={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},Le="font-bold focusable justify-center transition-colors ease-in-out",V={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},D={primary:`border-0 rounded-8 ${Le}`,secondary:`border-2 rounded-8 ${Le}`,utility:`border rounded-4 ${Le}`,negative:`border-0 rounded-8 ${Le}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Le}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${V.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},$={medium:"text-m leading-[24]",xsmall:"text-xs"},x={inProgress:`border-transparent animate-inprogress pointer-events-none ${V.loading}`,quiet:`border-0 rounded-8 ${Le}`,utilityQuiet:`border-0 rounded-4 ${Le}`,negativeQuiet:`border-0 rounded-8 ${Le}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${V.disabled}`},T={secondary:`${_.medium} ${$.medium} ${D.secondary} ${V.secondary}`,secondaryHref:`${_.medium} ${$.medium} ${D.secondary} ${V.secondary}`,secondaryDisabled:`${_.medium} ${$.medium} ${D.secondary} ${x.isDisabled}`,secondarySmall:`${$.xsmall} ${_.xsmall} ${D.secondary} ${V.secondary}`,secondarySmallDisabled:`${$.xsmall} ${_.xsmall} ${D.secondary} ${x.isDisabled}`,secondaryQuiet:`${_.medium} ${$.medium} ${x.quiet} ${V.quiet}`,secondaryQuietDisabled:`${_.medium} ${$.medium} ${x.quiet} ${x.isDisabled}`,secondarySmallQuiet:`${$.xsmall} ${_.xsmall} ${x.quiet} ${V.quiet}`,secondarySmallQuietDisabled:`${$.xsmall} ${_.xsmall} ${x.quiet} ${x.isDisabled}`,secondaryLoading:`${_.medium} ${$.medium} ${D.secondary} ${x.inProgress}`,secondarySmallLoading:`${$.xsmall} ${_.xsmall}  ${D.secondary} ${x.inProgress}`,secondarySmallQuietLoading:`${$.xsmall} ${_.xsmall} ${x.quiet} ${x.inProgress}`,secondaryQuietLoading:`${_.medium} ${$.medium} ${x.quiet} ${x.inProgress}`,primary:`${_.large} ${$.medium} ${D.primary} ${V.primary}`,primaryDisabled:`${_.large} ${$.medium} ${x.isDisabled} ${D.primary}`,primarySmall:`${_.small} ${$.xsmall} ${D.primary} ${V.primary}`,primarySmallDisabled:`${_.small} ${$.xsmall} ${x.isDisabled} ${D.primary} `,primaryQuiet:`${_.large} ${$.medium} ${x.quiet} ${V.quiet}`,primaryQuietDisabled:`${_.large} ${$.medium} ${x.quiet} ${x.isDisabled}`,primarySmallQuiet:`${_.small} ${$.xsmall} ${x.quiet} ${V.quiet}`,primarySmallQuietDisabled:`${_.small} ${$.xsmall} ${x.quiet} ${x.isDisabled}`,primaryLoading:`${_.large} ${$.medium} ${x.inProgress} ${D.primary}`,primarySmallLoading:`${_.small} ${$.xsmall}  ${x.inProgress} ${D.primary}`,primarySmallQuietLoading:`${_.small} ${$.xsmall} ${x.quiet} ${x.inProgress} ${D.primary}`,primaryQuietLoading:`${_.large} ${$.medium} ${x.quiet} ${x.inProgress}`,utility:`${_.utility} ${$.medium} ${D.utility} ${V.utility}`,utilityDisabled:`${_.utility} ${$.medium} ${D.utility} ${x.isDisabled}`,utilityQuiet:`${_.large} ${$.medium} ${x.utilityQuiet} ${V.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${$.medium} ${x.utilityQuiet} ${x.isDisabled}`,utilitySmall:`${_.smallUtility} ${$.xsmall} ${D.utility} ${V.utility}`,utilitySmallDisabled:`${_.smallUtility} ${$.xsmall} ${D.utility} ${x.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${$.xsmall} ${x.utilityQuiet} ${V.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${$.xsmall} ${x.utilityQuiet} ${x.isDisabled}`,utilityLoading:`${_.large} ${$.medium} ${D.utility} ${x.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${$.xsmall} ${D.utility} ${x.inProgress}`,utilityQuietLoading:`${_.large} ${$.medium} ${x.inProgress} ${x.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${$.xsmall} ${x.inProgress} ${x.utilityQuiet}`,negative:`${_.large} ${$.medium} ${D.negative} ${V.destructive}`,negativeDisabled:`${_.large} ${$.medium} ${D.negative} ${x.isDisabled}`,negativeQuiet:`${_.large} ${$.medium} ${x.negativeQuiet} ${V.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${$.medium} ${x.negativeQuiet}${x.isDisabled}`,negativeSmall:`${_.small} ${$.xsmall} ${D.negative} ${V.destructive}`,negativeSmallDisabled:`${_.small} ${$.xsmall} ${D.negative} ${x.isDisabled}`,negativeSmallQuiet:`${_.small} ${$.xsmall} ${x.negativeQuiet} ${V.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${$.xsmall} ${x.negativeQuiet} ${x.isDisabled}`,negativeLoading:`${_.large} ${$.medium} ${D.negative} ${x.inProgress}`,negativeSmallLoading:`${_.small} ${$.xsmall} ${x.inProgress} ${D.negative}`,negativeQuietLoading:`${_.large} ${$.medium} ${x.negativeQuiet} ${D.negative} ${x.inProgress}`,negativeSmallQuietLoading:`${_.small} ${$.xsmall} ${x.negativeQuiet} ${x.inProgress}`,pill:`${_.pill} ${$.medium} ${D.pill} ${V.pill}`,pillSmall:`${_.pillSmall} ${$.xsmall} ${D.pill} ${V.pill}`,pillLoading:`${_.pill} ${$.medium} ${D.pill} ${x.inProgress}`,pillSmallLoading:`${_.pillSmall} ${$.xsmall} ${D.pill} ${x.inProgress}`,link:`${_.link} ${$.medium} ${D.link}`,linkSmall:`${_.link} ${$.xsmall} ${D.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},Ce={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},ke={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Pr={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Ge={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},an="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",rs={wrapper:an+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},os={wrapper:an+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Ze={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Qe={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${$.medium} ${D.pill} ${V.pill} justify-self-end -mr-8 ml-8`};var ln={},cn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(cn);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=cn;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(c){return!c.match(/[^a-f0-9]/i)?parseInt(c,16):NaN}function o(c,f,h){const b=r(c);if(Number.isNaN(b)||h!==void 0&&h!==c.length)throw new SyntaxError(e.errorMessages.get(f));return b}function n(c){const f=o(c,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function i(c,f){const h=o(c,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const b=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(h,b)}return String.fromCharCode(h)}function s(c){return c.charAt(0)==="{"&&c.charAt(c.length-1)==="}"}function a(c){if(!s(c))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=c.slice(1,-1),h=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(h)}catch(b){throw b instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):b}}function l(c,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const h=parseInt(c,8);return String.fromCharCode(h)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function p(c){return u.get(c)||c}const d=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function m(c,f=!1){return c.replace(d,function(h,b,S,A,C,N,y,L,O){if(b!==void 0)return"\\";if(S!==void 0)return n(S);if(A!==void 0)return a(A);if(C!==void 0)return i(C,N);if(y!==void 0)return i(y);if(L==="0")return"\0";if(L!==void 0)return l(L,!f);if(O!==void 0)return p(O);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=m,t.default=m})(ln);const Ie=t=>typeof t=="string",ns=t=>typeof t=="function",$o=new Map,dn="en";function Yr(t){return[...Array.isArray(t)?t:[t],dn]}function un(t,e,r){const o=Yr(t);return Ht(()=>Wt("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ie(e)?new Date(e):e)}function Dr(t,e,r){const o=Yr(t);return Ht(()=>Wt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function ko(t,e,r,{offset:o=0,...n}){const i=Yr(t),s=e?Ht(()=>Wt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Ht(()=>Wt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function Ht(t,e){const r=t();let o=$o.get(r);return o||(o=e(),$o.set(r,o)),o}function Wt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const hn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,pn="%__lingui_octothorpe__%",is=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s]||{style:s},i=(s,a)=>{const l=Object.keys(r).length?n("number"):void 0,u=Dr(o,s,l);return a.replace(new RegExp(pn,"g"),u)};return{plural:(s,a)=>{const{offset:l=0}=a,u=ko(o,!1,s,a);return i(s-l,u)},selectordinal:(s,a)=>{const{offset:l=0}=a,u=ko(o,!0,s,a);return i(s-l,u)},select:ss,number:(s,a)=>Dr(o,s,n(a)),date:(s,a)=>un(o,s,n(a))}},ss=(t,e)=>e[t]??e.other;function as(t,e,r){return(o={},n)=>{const i=is(e,r,n),s=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+pn;if(Ie(d))return p+d;const[m,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([S,A])=>{h[S]=s(A,c==="plural"||c==="selectordinal")}):h=f;let b;if(c){const S=i[c];b=S(o[m],h)}else b=o[m];return b==null?p:p+b},""):l,a=s(t);return Ie(a)&&hn.test(a)?ln.unraw(a.trim()):Ie(a)?a.trim():a?String(a):""}}var ls=Object.defineProperty,cs=(t,e,r)=>e in t?ls(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ds=(t,e,r)=>(cs(t,e+"",r),r);let us=class{constructor(){ds(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var hs=Object.defineProperty,ps=(t,e,r)=>e in t?hs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Xe=(t,e,r)=>(ps(t,typeof e!="symbol"?e+"":e,r),r);let fs=class extends us{constructor(e){super(),Xe(this,"_locale",""),Xe(this,"_locales"),Xe(this,"_localeData",{}),Xe(this,"_messages",{}),Xe(this,"_missing"),Xe(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??dn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let n=o?.message;e||(e=""),Ie(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,a=this._missing;if(a&&s)return ns(a)?a(this._locale,e):a;s&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Ie(l)&&hn.test(l)?JSON.parse(`"${l}"`):Ie(l)?l:as(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return un(this._locales||this._locale,e,r)}number(e,r){return Dr(this._locales||this._locale,e,r)}};function gs(t={}){return new fs(t)}const vr=gs();class ms extends j{#e=!1;get i18n(){return this.#e||(vr.load(this.locale,this.translations),vr.activate(this.locale),this.#e=!0),vr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Qr=()=>!(typeof window<"u");class fn{isServer=!1;css=""}const bs=(t=[])=>{const e=new fn;if(Qr()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const n=new XMLHttpRequest;n.open("GET",o,!1),n.send(),e.css+=n.responseText}return e},vs=()=>bs(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),ws=async(t=[])=>{const e=new fn;if(Qr()){for(const i of t)e.css+=`@import url('${i}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(i=>fetch(i))),n=await Promise.all(o.map(i=>i.text()));for(const i of n)e.css+=i;return e},_o=async()=>ws(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function a(g){var v=g.replace(s,"");return v!==g&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),v.trim()}function l(g){return"isConnected"in g?g.isConnected:document.contains(g)}function u(g){return g.filter(function(v,P){return g.indexOf(v)===P})}function p(g,v){return g.filter(function(P){return v.indexOf(P)===-1})}function d(g){g.parentNode.removeChild(g)}function m(g){return g.shadowRoot||r.get(g)}var c=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,h=f.prototype;h.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},h.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function b(g){return typeof g=="object"?W.isPrototypeOf(g)||h.isPrototypeOf(g):!1}function S(g){return typeof g=="object"?h.isPrototypeOf(g):!1}var A=new WeakMap,C=new WeakMap,N=new WeakMap,y=new WeakMap;function L(g,v){var P=document.createElement("style");return N.get(g).set(v,P),C.get(g).push(v),P}function O(g,v){return N.get(g).get(v)}function M(g,v){N.get(g).delete(v),C.set(g,C.get(g).filter(function(P){return P!==v}))}function U(g,v){requestAnimationFrame(function(){v.textContent=A.get(g).textContent,y.get(g).forEach(function(P){return v.sheet[P.method].apply(v.sheet,P.args)})})}function H(g){if(!A.has(g))throw new TypeError("Illegal invocation")}function K(){var g=this,v=document.createElement("style");e.body.appendChild(v),A.set(g,v),C.set(g,[]),N.set(g,new WeakMap),y.set(g,[])}var W=K.prototype;W.replace=function(v){try{return this.replaceSync(v),Promise.resolve(this)}catch(P){return Promise.reject(P)}},W.replaceSync=function(v){if(H(this),typeof v=="string"){var P=this;A.get(P).textContent=a(v),y.set(P,[]),C.get(P).forEach(function(ie){ie.isConnected()&&U(P,O(P,ie))})}},n(W,"cssRules",{configurable:!0,enumerable:!0,get:function(){return H(this),A.get(this).sheet.cssRules}}),n(W,"media",{configurable:!0,enumerable:!0,get:function(){return H(this),A.get(this).sheet.media}}),c.forEach(function(g){W[g]=function(){var v=this;H(v);var P=arguments;y.get(v).push({method:g,args:P}),C.get(v).forEach(function(ae){if(ae.isConnected()){var te=O(v,ae).sheet;te[g].apply(te,P)}});var ie=A.get(v).sheet;return ie[g].apply(ie,P)}}),n(K,Symbol.hasInstance,{configurable:!0,value:b});var se={childList:!0,subtree:!0},B=new WeakMap;function G(g){var v=B.get(g);return v||(v=new lo(g),B.set(g,v)),v}function X(g){n(g.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(v){G(this).update(v)}})}function re(g,v){for(var P=document.createNodeIterator(g,NodeFilter.SHOW_ELEMENT,function(ae){return m(ae)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ie=void 0;ie=P.nextNode();)v(m(ie))}var Y=new WeakMap,ne=new WeakMap,qe=new WeakMap;function $i(g,v){return v instanceof HTMLStyleElement&&ne.get(g).some(function(P){return O(P,g)})}function ao(g){var v=Y.get(g);return v instanceof Document?v.body:v}function gr(g){var v=document.createDocumentFragment(),P=ne.get(g),ie=qe.get(g),ae=ao(g);ie.disconnect(),P.forEach(function(te){v.appendChild(O(te,g)||L(te,g))}),ae.insertBefore(v,null),ie.observe(ae,se),P.forEach(function(te){U(te,O(te,g))})}function lo(g){var v=this;v.sheets=[],Y.set(v,g),ne.set(v,[]),qe.set(v,new MutationObserver(function(P,ie){if(!document){ie.disconnect();return}P.forEach(function(ae){t||i.call(ae.addedNodes,function(te){te instanceof Element&&re(te,function(Ye){G(Ye).connect()})}),i.call(ae.removedNodes,function(te){te instanceof Element&&($i(v,te)&&gr(v),t||re(te,function(Ye){G(Ye).disconnect()}))})})}))}if(lo.prototype={isConnected:function(){var g=Y.get(this);return g instanceof Document?g.readyState!=="loading":l(g.host)},connect:function(){var g=ao(this);qe.get(this).observe(g,se),ne.get(this).length>0&&gr(this),re(g,function(v){G(v).connect()})},disconnect:function(){qe.get(this).disconnect()},update:function(g){var v=this,P=Y.get(v)===document?"Document":"ShadowRoot";if(!Array.isArray(g))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+P+": Iterator getter is not callable.");if(!g.every(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+P+": Failed to convert value to 'CSSStyleSheet'");if(g.some(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+P+": Can't adopt non-constructed stylesheets");v.sheets=g;var ie=ne.get(v),ae=u(g),te=p(ie,ae);te.forEach(function(Ye){d(O(Ye,v)),M(Ye,v)}),ne.set(v,ae),v.isConnected()&&ae.length>0&&gr(v)}},window.CSSStyleSheet=K,X(Document),"ShadowRoot"in window){X(ShadowRoot);var co=Element.prototype,ki=co.attachShadow;co.attachShadow=function(v){var P=ki.call(this,v);return v.mode==="closed"&&r.set(this,P),P}}var Rt=G(document);Rt.isConnected()?Rt.connect():document.addEventListener("DOMContentLoaded",Rt.connect.bind(Rt))})();let kt;if(Qr()){const t=await _o();kt=Vo(t.css)}else{kt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await _o();kt.replaceSync(r.css)}catch{const e=vs();kt.replaceSync(e.css)}}class I extends ms{static styles=[kt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=t=>t??F;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gn=Symbol.for(""),ys=t=>{if(t?.r===gn)return t?._$litStatic$},xe=t=>({_$litStatic$:t,r:gn}),So=new Map,xs=t=>(e,...r)=>{const o=r.length;let n,i;const s=[],a=[];let l,u=0,p=!1;for(;u<o;){for(l=e[u];u<o&&(i=r[u],(n=ys(i))!==void 0);)l+=n+e[++u],p=!0;u!==o&&a.push(i),s.push(l),u++}if(u===o&&s.push(e[o]),p){const d=s.join("$$lit$$");(e=So.get(d))===void 0&&(s.raw=s,So.set(d,e=s)),r=a}return t(e,...r)},$e=xs(w),Oe=t=>typeof t=="string",$s=t=>typeof t=="function",Eo=new Map,mn="en";function Xr(t){return[...Array.isArray(t)?t:[t],mn]}function Jr(t,e,r){const o=Xr(t);r||(r="default");let n;if(typeof r=="string")switch(n={day:"numeric",month:"short",year:"numeric"},r){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric";break}else n=r;return Vt(()=>qt("date",o,r),()=>new Intl.DateTimeFormat(o,n)).format(Oe(e)?new Date(e):e)}function ks(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return Jr(t,e,o)}function Br(t,e,r){const o=Xr(t);return Vt(()=>qt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Co(t,e,r,{offset:o=0,...n}){const i=Xr(t),s=e?Vt(()=>qt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Vt(()=>qt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function Vt(t,e){const r=t();let o=Eo.get(r);return o||(o=e(),Eo.set(r,o)),o}function qt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const bn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,vn=t=>t.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g,(e,r,o)=>{if(r){const n=parseInt(r,16);return String.fromCharCode(n)}else{const n=parseInt(o,16);return String.fromCharCode(n)}}),wn="%__lingui_octothorpe__%",_s=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s],i=(s,a)=>{const l=Object.keys(r).length?n("number"):void 0,u=Br(o,s,l);return a.replace(new RegExp(wn,"g"),u)};return{plural:(s,a)=>{const{offset:l=0}=a,u=Co(o,!1,s,a);return i(s-l,u)},selectordinal:(s,a)=>{const{offset:l=0}=a,u=Co(o,!0,s,a);return i(s-l,u)},select:Ss,number:(s,a)=>Br(o,s,n(a)||{style:a}),date:(s,a)=>Jr(o,s,n(a)||a),time:(s,a)=>ks(o,s,n(a)||a)}},Ss=(t,e)=>e[t]??e.other;function Es(t,e,r){return(o={},n)=>{const i=_s(e,r,n),s=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+wn;if(Oe(d))return p+d;const[m,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([S,A])=>{h[S]=s(A,c==="plural"||c==="selectordinal")}):h=f;let b;if(c){const S=i[c];b=S(o[m],h)}else b=o[m];return b==null?p:p+b},""):l,a=s(t);return Oe(a)&&bn.test(a)?vn(a):Oe(a)?a:a?String(a):""}}var Cs=Object.defineProperty,As=(t,e,r)=>e in t?Cs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ls=(t,e,r)=>(As(t,e+"",r),r);class Os{constructor(){Ls(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ts=Object.defineProperty,Ps=(t,e,r)=>e in t?Ts(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Re=(t,e,r)=>(Ps(t,typeof e!="symbol"?e+"":e,r),r);class Ds extends Os{constructor(e){super(),Re(this,"_locale",""),Re(this,"_locales"),Re(this,"_localeData",{}),Re(this,"_messages",{}),Re(this,"_missing"),Re(this,"_messageCompiler"),Re(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??mn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let n=o?.message;e||(e=""),Oe(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,a=this._missing;if(a&&s)return $s(a)?a(this._locale,e):a;s&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Oe(l)&&(this._messageCompiler?l=this._messageCompiler(l):console.warn(`Uncompiled message detected! Message:

> ${l}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Oe(l)&&bn.test(l)?vn(l):Oe(l)?l:Es(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return Jr(this._locales||this._locale,e,r)}number(e,r){return Br(this._locales||this._locale,e,r)}}function Bs(t={}){return new Ds(t)}const E=Bs();var Ns={},yn=["en","nb","fi","da","sv"],xn="en",Ms=()=>{var t;let e;switch((t=process==null?void 0:Ns)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},$n=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":xn},wr=t=>yn.find(e=>t===e||t.toLowerCase().includes(e))||$n();function Rs(){var t;if(typeof window>"u"){const e=Ms();return wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=$n();return yn.includes(e)?wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),xn}}var zs=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Fs=(t,e,r,o,n)=>{const i=Rs(),s=zs(i,t,e,r,o,n);E.load(i,s),E.activate(i)},dt={nb:{"icon.title.search":["Forstørrelsesglass"]},en:{"icon.title.search":["Magnifying glass"]},fi:{"icon.title.search":["Suurennuslasi"]},da:{"icon.title.search":["Forstørrelsesglas"]},sv:{"icon.title.search":["Förstoringsglas"]}};Fs(dt.en,dt.nb,dt.fi,dt.da,dt.sv);var Is=class extends j{render(){const t=E.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",Is);var js={},kn=["en","nb","fi","da","sv"],_n="en",Us=()=>{var t;let e;switch((t=process==null?void 0:js)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Sn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":_n},yr=t=>kn.find(e=>t===e||t.toLowerCase().includes(e))||Sn();function Hs(){var t;if(typeof window>"u"){const e=Us();return yr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Sn();return kn.includes(e)?yr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),yr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),_n}}var Ws=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Vs=(t,e,r,o,n)=>{const i=Hs(),s=Ws(i,t,e,r,o,n);E.load(i,s),E.activate(i)},ut={nb:{"icon.title.close":["Kryss"]},en:{"icon.title.close":["Cross"]},fi:{"icon.title.close":["Rasti"]},da:{"icon.title.close":["Kryds"]},sv:{"icon.title.close":["Kryss"]}};Vs(ut.en,ut.nb,ut.fi,ut.da,ut.sv);var qs=class extends j{render(){const t=E.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",qs);const Ys=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function ot(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:Ys(e.toString())})),super.createProperty(e,o)}}}function Qs(){return`m${Math.random().toString(36).slice(2)}`}class Xs extends ot(I){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[I.styles];get _classBase(){return this.slot==="suffix"?rs:os}get _classes(){return z([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
      <button aria-label="${q(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return w`
      <button aria-label="${q(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return w`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",Xs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:Ir},Zs=(t=Js,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(o==="setter"){const{name:s}=r;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+o)};function k(t){return(e,r)=>typeof r=="object"?Zs(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ks(t){return k({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lr(t,e){return(r,o,n)=>{const i=s=>s.renderRoot?.querySelector(t)??null;return Gs(r,o,{get(){return i(this)}})}}var ea={},En=["en","nb","fi","da","sv"],Cn="en",ta=()=>{var t;let e;switch((t=process==null?void 0:ea)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},An=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Cn},xr=t=>En.find(e=>t===e||t.toLowerCase().includes(e))||An();function ra(){var t;if(typeof window>"u"){const e=ta();return xr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=An();return En.includes(e)?xr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),xr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Cn}}var oa=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,na=(t,e,r,o,n)=>{const i=ra(),s=oa(i,t,e,r,o,n);E.load(i,s),E.activate(i)},ht={nb:{"icon.title.info":["Informasjonssirkel"]},en:{"icon.title.info":["Information circle"]},fi:{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]},da:{"icon.title.info":["Informationscirkel"]},sv:{"icon.title.info":["Informationscirkel"]}};na(ht.en,ht.nb,ht.fi,ht.da,ht.sv);var ia=class extends j{render(){const t=E.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",ia);var sa={},Ln=["en","nb","fi","da","sv"],On="en",aa=()=>{var t;let e;switch((t=process==null?void 0:sa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Tn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":On},$r=t=>Ln.find(e=>t===e||t.toLowerCase().includes(e))||Tn();function la(){var t;if(typeof window>"u"){const e=aa();return $r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Tn();return Ln.includes(e)?$r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),$r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),On}}var ca=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,da=(t,e,r,o,n)=>{const i=la(),s=ca(i,t,e,r,o,n);E.load(i,s),E.activate(i)},pt={nb:{"icon.title.warning":["Varseltrekant med utropstegn"]},en:{"icon.title.warning":["Warning triangle with exclamation point"]},fi:{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]},da:{"icon.title.warning":["Advarselstrekant med et udråbstegn"]},sv:{"icon.title.warning":["Varningstriangel med utropstecken"]}};da(pt.en,pt.nb,pt.fi,pt.da,pt.sv);var ua=class extends j{render(){const t=E.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",ua);var ha={},Pn=["en","nb","fi","da","sv"],Dn="en",pa=()=>{var t;let e;switch((t=process==null?void 0:ha)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Bn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Dn},kr=t=>Pn.find(e=>t===e||t.toLowerCase().includes(e))||Bn();function fa(){var t;if(typeof window>"u"){const e=pa();return kr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Bn();return Pn.includes(e)?kr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),kr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Dn}}var ga=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ma=(t,e,r,o,n)=>{const i=fa(),s=ga(i,t,e,r,o,n);E.load(i,s),E.activate(i)},ft={nb:{"icon.title.error":["Åttekant med utropstegn"]},en:{"icon.title.error":["Octagon with exclamation point"]},fi:{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]},da:{"icon.title.error":["Ottekant med et udråbstegn"]},sv:{"icon.title.error":["Oktagon med utropstecken"]}};ma(ft.en,ft.nb,ft.fi,ft.da,ft.sv);var ba=class extends j{render(){const t=E.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",ba);var va={},Nn=["en","nb","fi","da","sv"],Mn="en",wa=()=>{var t;let e;switch((t=process==null?void 0:va)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Rn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Mn},_r=t=>Nn.find(e=>t===e||t.toLowerCase().includes(e))||Rn();function ya(){var t;if(typeof window>"u"){const e=wa();return _r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Rn();return Nn.includes(e)?_r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Mn}}var xa=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,$a=(t,e,r,o,n)=>{const i=ya(),s=xa(i,t,e,r,o,n);E.load(i,s),E.activate(i)},gt={nb:{"icon.title.success":["Sirkel med sjekkmerke"]},en:{"icon.title.success":["Circle with checkmark"]},fi:{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]},da:{"icon.title.success":["Cirkel med et flueben"]},sv:{"icon.title.success":["Cirkel med bock"]}};$a(gt.en,gt.nb,gt.fi,gt.da,gt.sv);var ka=class extends j{render(){const t=E.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",ka);const Bt=ee`
  *,
  :before,
  :after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--w-s-color-border);
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: var(--w-s-color-background);
    min-height: 100%;
    margin: 0;
    overflow-y: scroll;
  }
  body,
  :host {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--w-font-family);
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
    color: var(--w-s-color-text);
  }
  hr {
    color: inherit;
    border-top-width: 1px;
    height: 0;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 700;
  }
  a {
    cursor: pointer;
    color: var(--w-s-color-text-link);
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
  a:focus-visible {
    outline: 2px solid var(--w-s-color-border-focus);
    outline-offset: 1px;
  }
  b,
  strong {
    font-weight: 700;
  }
  code,
  kbd,
  samp,
  pre {
    font-family:
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      Liberation Mono,
      Courier New,
      monospace;
    font-size: 1em;
  }
  sub,
  sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  :-moz-focusring {
    outline: auto;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  progress {
    vertical-align: baseline;
  }
  ::-webkit-inner-spin-button {
    height: auto;
  }
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  fieldset {
    margin: 0;
    padding: 0;
  }
  legend {
    padding: 0;
  }
  ol,
  ul,
  menu {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  textarea {
    resize: vertical;
  }
  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: var(--w-s-color-text-placeholder);
  }
  button,
  [role='button'] {
    cursor: pointer;
  }
  :disabled {
    cursor: default;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    vertical-align: middle;
    display: block;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
  h1 {
    font-size: var(--w-font-size-xxl);
    line-height: var(--w-line-height-xxl);
  }
  h2 {
    font-size: var(--w-font-size-xl);
    line-height: var(--w-line-height-xl);
  }
  h3 {
    font-size: var(--w-font-size-l);
    line-height: var(--w-line-height-l);
  }
  h4 {
    font-size: var(--w-font-size-m);
    line-height: var(--w-line-height-m);
  }
  h5 {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
  }
  dt,
  dd {
    margin: 0 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  dl,
  p,
  blockquote {
    margin: 0 0 8px;
  }
  [hidden] {
    display: none !important;
  }
  [tabindex='-1']:focus:not(:focus-visible) {
    outline: none;
  }
  legend {
    float: left;
    width: 100%;
    margin: 0;
    padding: 0;
    display: table;
  }
  legend + * {
    clear: both;
  }
  fieldset {
    border: 0;
    min-width: 0;
    margin: 0;
    padding: 0.01em 0 0;
  }
  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }
  svg {
    pointer-events: none;
  }
`,zn=ee`*, :before, :after {
            --w-rotate: 0;
            --w-rotate-x: 0;
            --w-rotate-y: 0;
            --w-rotate-z: 0;
            --w-scale-x: 1;
            --w-scale-y: 1;
            --w-scale-z: 1;
            --w-skew-x: 0;
            --w-skew-y: 0;
            --w-translate-x: 0;
            --w-translate-y: 0;
            --w-translate-z: 0
        }

            .h4, .t4 {
                font-weight: 700;
                font-size: var(--w-font-size-m);
                line-height: var(--w-line-height-m)
            }

            .t3 {
                font-weight: 700;
                font-size: var(--w-font-size-l);
                line-height: var(--w-line-height-l)
            }

            @media (min-width: 480px) {
                .sm\\:h3 {
                    font-weight: 700;
                    font-size: var(--w-font-size-l);
                    line-height: var(--w-line-height-l)
                }
            }

            .text-center {
                text-align: center
            }

            .before\\:text-center:before {
                text-align: center
            }

            .text-left {
                text-align: left
            }

            .text-right {
                text-align: right
            }

            .align-middle {
                vertical-align: middle
            }

            .animate-inprogress {
                background-image: linear-gradient(135deg, rgba(0, 0, 0, .05) 25%, transparent 0, transparent 50%, rgba(0, 0, 0, .05) 0, rgba(0, 0, 0, .05) 75%, transparent 0, transparent) !important;
                background-size: 30px 30px;
                animation: animate-inprogress 3s linear infinite
            }

            @keyframes animate-inprogress {
                0% {
                    background-position: 0 0
                }
                to {
                    background-position: 60px 0
                }
            }

            .\\[--w-modal-max-height\\:80\\%\\] {
                --w-modal-max-height: 80%
            }

            .\\[--w-modal-width\\:640px\\] {
                --w-modal-width: 640px
            }

            .focus\\:\\[--w-outline-offset\\:-2px\\]:focus {
                --w-outline-offset: -2px
            }

            .backdrop-blur {
                -webkit-backdrop-filter: blur(4px);
                backdrop-filter: blur(4px)
            }

            .peer:checked ~ .peer-checked\\:before\\:bg-center:before {
                background-position: center
            }

            .hover\\:bg-clip-padding:hover {
                -webkit-background-clip: padding-box;
                background-clip: padding-box
            }

            .bg-transparent, .group\\/steph:first-child .group-first\\/steph\\:bg-transparent, .group\\/steph:last-child .group-last\\/steph\\:bg-transparent {
                background-color: transparent
            }

            .bg-\\[--w-black\\/25\\] {
                background-color: rgba(var(--w-rgb-black), .25)
            }

            .bg-\\[--w-black\\/70\\], .bg-\\[var\\(--w-black\\)\\/70\\] {
                background-color: rgba(var(--w-rgb-black), .7)
            }

            .bg-\\[--w-color-badge-info-background\\] {
                background-color: var(--w-color-badge-info-background)
            }

            .bg-\\[--w-color-badge-negative-background\\] {
                background-color: var(--w-color-badge-negative-background)
            }

            .bg-\\[--w-color-badge-neutral-background\\] {
                background-color: var(--w-color-badge-neutral-background)
            }

            .bg-\\[--w-color-badge-positive-background\\] {
                background-color: var(--w-color-badge-positive-background)
            }

            .bg-\\[--w-color-badge-sponsored-background\\] {
                background-color: var(--w-color-badge-sponsored-background)
            }

            .bg-\\[--w-color-badge-warning-background\\] {
                background-color: var(--w-color-badge-warning-background)
            }

            .bg-\\[--w-color-button-primary-background\\] {
                background-color: var(--w-color-button-primary-background)
            }

            .bg-\\[--w-color-buttongroup-utility-background-selected\\] {
                background-color: var(--w-color-buttongroup-utility-background-selected)
            }

            .bg-\\[--w-color-callout-background\\] {
                background-color: var(--w-color-callout-background)
            }

            .bg-\\[--w-color-pill-suggestion-background\\] {
                background-color: var(--w-color-pill-suggestion-background)
            }

            .bg-\\[--w-color-switch-track-background\\] {
                background-color: var(--w-color-switch-track-background)
            }

            .bg-\\[--w-s-color-surface-elevated-100\\] {
                background-color: var(--w-s-color-surface-elevated-100)
            }

            .bg-\\[--w-s-color-surface-elevated-300\\] {
                background-color: var(--w-s-color-surface-elevated-300)
            }

            .bg-\\[--w-s-icon-selected\\] {
                background-color: var(--w-s-icon-selected)
            }

            .group:hover .group-hover\\:bg-\\[--w-color-switch-track-background-hover\\] {
                background-color: var(--w-color-switch-track-background-hover)
            }

            .hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover {
                background-color: var(--w-color-button-pill-background-hover)
            }

            .hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover {
                background-color: var(--w-color-button-primary-background-hover)
            }

            .hover\\:bg-\\[--w-color-buttongroup-utility-background-hover\\]:hover {
                background-color: var(--w-color-buttongroup-utility-background-hover)
            }

            .hover\\:bg-\\[--w-color-pill-suggestion-background-hover\\]:hover {
                background-color: var(--w-color-pill-suggestion-background-hover)
            }

            .hover\\:bg-\\[--w-s-icon-subtle\\]:hover {
                background-color: var(--w-s-icon-subtle)
            }

            .hover\\:bg-\\[var\\(--w-black\\)\\/85\\]:hover {
                background-color: rgba(var(--w-rgb-black), .85)
            }

            .active\\:bg-\\[--w-color-button-pill-background-active\\]:active {
                background-color: var(--w-color-button-pill-background-active)
            }

            .active\\:bg-\\[--w-color-button-primary-background-active\\]:active {
                background-color: var(--w-color-button-primary-background-active)
            }

            .active\\:bg-\\[--w-color-buttongroup-utility-background-selected\\]:active {
                background-color: var(--w-color-buttongroup-utility-background-selected)
            }

            .active\\:bg-\\[--w-color-pill-suggestion-background-active\\]:active {
                background-color: var(--w-color-pill-suggestion-background-active)
            }

            .active\\:bg-\\[var\\(--w-black\\)\\]:active {
                background-color: var(--w-black)
            }

            .peer:checked ~ .peer-checked\\:before\\:bg-\\[url\\(var\\(--w-icon-toggle-checked\\)\\)\\]:before {
                background-image: var(--w-icon-toggle-checked)
            }

            .appearance-none {
                -moz-appearance: none;
                appearance: none;
                -webkit-appearance: none
            }

            .will-change-height {
                will-change: height
            }

            .border, .border-1 {
                border-width: 1px
            }

            .border-b {
                border-bottom-width: 1px
            }

            .before\\:border:before {
                border-width: 1px
            }

            .border-0 {
                border-width: 0
            }

            .border-2 {
                border-width: 2px
            }

            .border-b-0 {
                border-bottom-width: 0
            }

            .border-b-4 {
                border-bottom-width: 4px
            }

            .border-l-4 {
                border-left-width: 4px
            }

            .border-r-0, .group:not(:last-of-type) .group-not-last-of-type\\:border-r-0 {
                border-right-width: 0
            }

            .peer:checked ~ .peer-checked\\:before\\:border-\\[6\\]:before {
                border-width: .6rem
            }

            .border-transparent {
                border-color: transparent
            }

            .border-\\[--w-color-buttongroup-utility-border\\] {
                border-color: var(--w-color-buttongroup-utility-border)
            }

            .border-\\[--w-color-callout-border\\] {
                border-color: var(--w-color-callout-border)
            }

            .border-\\[--w-s-color-background-inverted\\] {
                border-color: var(--w-s-color-background-inverted)
            }

            .border-\\[--w-s-color-surface-elevated-300\\] {
                border-color: var(--w-s-color-surface-elevated-300)
            }

            .active\\:border-\\[--w-color-buttongroup-utility-border-selected\\]:active {
                border-color: var(--w-color-buttongroup-utility-border-selected)
            }

            .divide-x > * + * {
                --w-divide-x-reverse: 0;
                border-left-width: calc(1px * calc(1 - var(--w-divide-x-reverse)));
                border-right-width: calc(1px * var(--w-divide-x-reverse))
            }

            .divide-y > * + * {
                --w-divide-y-reverse: 0;
                border-top-width: calc(1px * calc(1 - var(--w-divide-y-reverse)));
                border-bottom-width: calc(1px * var(--w-divide-y-reverse))
            }

            .rounded-4 {
                border-radius: 4px
            }

            .rounded-8 {
                border-radius: 8px
            }

            .rounded-full {
                border-radius: 9999px
            }

            .before\\:rounded-2:before {
                border-radius: 2px
            }

            .before\\:rounded-full:before {
                border-radius: 9999px
            }

            .rounded-b-0 {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0
            }

            .rounded-bl-0 {
                border-bottom-left-radius: 0
            }

            .rounded-br-0 {
                border-bottom-right-radius: 0
            }

            .rounded-l-0 {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0
            }

            .rounded-l-full {
                border-top-left-radius: 9999px;
                border-bottom-left-radius: 9999px
            }

            .rounded-r-0 {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0
            }

            .rounded-r-full {
                border-top-right-radius: 9999px;
                border-bottom-right-radius: 9999px
            }

            .rounded-tl-0 {
                border-top-left-radius: 0
            }

            .rounded-tl-4 {
                border-top-left-radius: 4px
            }

            .rounded-tr-0 {
                border-top-right-radius: 0
            }

            .group:first-of-type .group-first-of-type\\:rounded-bl-8 {
                border-bottom-left-radius: 8px
            }

            .group:first-of-type .group-first-of-type\\:rounded-tl-8 {
                border-top-left-radius: 8px
            }

            .first\\:rounded-lb-4:first-child {
                border-bottom-left-radius: 4px
            }

            .first\\:rounded-lt-4:first-child {
                border-top-left-radius: 4px
            }

            .first\\:rounded-rt-4:first-child {
                border-top-right-radius: 4px
            }

            .group:last-of-type .group-last-of-type\\:rounded-br-8 {
                border-bottom-right-radius: 8px
            }

            .group:last-of-type .group-last-of-type\\:rounded-tr-8 {
                border-top-right-radius: 8px
            }

            .last\\:rounded-lb-4:last-child {
                border-bottom-left-radius: 4px
            }

            .last\\:rounded-rb-4:last-child {
                border-bottom-right-radius: 4px
            }

            .last\\:rounded-rt-4:last-child {
                border-top-right-radius: 4px
            }

            .caret-current {
                caret-color: currentColor
            }

            .opacity-25 {
                opacity: 25%
            }

            .block {
                display: block
            }

            .before\\:block:before {
                display: block
            }

            .inline-block {
                display: inline-block
            }

            .inline {
                display: inline
            }

            .flex, .open\\:flex[open] {
                display: flex
            }

            .inline-flex {
                display: inline-flex
            }

            .grid {
                display: grid
            }

            .inline-grid {
                display: inline-grid
            }

            .hidden, .group\\/stepv:last-child .group-last\\/stepv\\:hidden {
                display: none
            }

            .before\\:hidden:before {
                display: none
            }

            .hover\\:underline:hover {
                text-decoration-line: underline
            }

            .focus\\:underline:focus {
                text-decoration-line: underline
            }

            .focus-visible\\:underline:focus-visible {
                text-decoration-line: underline
            }

            .active\\:underline:active {
                text-decoration-line: underline
            }

            .hover\\:no-underline:hover {
                text-decoration: none
            }

            .focus\\:no-underline:focus {
                text-decoration: none
            }

            .active\\:no-underline:active {
                text-decoration: none
            }

            .flex-1 {
                flex: 1 1 0%
            }

            .shrink {
                flex-shrink: 1
            }

            .shrink-0 {
                flex-shrink: 0
            }

            .shrink-0\\! {
                flex-shrink: 0 !important
            }

            .grow, .grow-1 {
                flex-grow: 1
            }

            .basis-auto {
                flex-basis: auto
            }

            .flex-col {
                flex-direction: column
            }

            .focus-within\\:focusable:focus-within {
                outline: 2px solid var(--w-s-color-border-focus);
                outline-offset: var(--w-outline-offset, 1px)
            }

            .focusable:focus, .focusable:focus-visible {
                outline: 2px solid var(--w-s-color-border-focus);
                outline-offset: var(--w-outline-offset, 1px)
            }

            .focusable:not(:focus-visible) {
                outline: none
            }

            .peer:focus ~ .peer-focus\\:focusable, .peer:focus-visible ~ .peer-focus\\:focusable {
                outline: 2px solid var(--w-s-color-border-focus);
                outline-offset: var(--w-outline-offset, 1px)
            }

            .peer:not(:focus-visible) ~ .peer-focus\\:focusable {
                outline: none
            }

            .focusable-inset {
                --w-outline-offset: -3px
            }

            .gap-12 {
                gap: 1.2rem
            }

            .gap-8 {
                gap: .8rem
            }

            .gap-x-16 {
                column-gap: 1.6rem
            }

            .gap-y-16 {
                row-gap: 1.6rem
            }

            .row-span-2 {
                grid-row: span 2/span 2
            }

            .col-span-2 {
                grid-column: span 2/span 2
            }

            .col-span-3 {
                grid-column: span 3/span 3
            }

            .row-start-1 {
                grid-row-start: 1
            }

            .row-start-2 {
                grid-row-start: 2
            }

            .col-start-2 {
                grid-column-start: 2
            }

            .auto-rows-auto {
                grid-auto-rows: auto
            }

            .grid-flow-col {
                grid-auto-flow: column
            }

            .grid-rows-\\[20px_auto\\] {
                grid-template-rows:20px auto
            }

            .grid-rows-\\[auto_20px\\] {
                grid-template-rows:auto 20px
            }

            .grid-cols-\\[1fr_20px_1fr\\] {
                grid-template-columns:1fr 20px 1fr
            }

            .grid-cols-\\[1fr_20px\\] {
                grid-template-columns:1fr 20px
            }

            .grid-cols-\\[20px_1fr\\] {
                grid-template-columns:20px 1fr
            }

            .grid-cols-\\[auto_1fr_auto\\] {
                grid-template-columns:auto 1fr auto
            }

            .grid-cols-1 {
                grid-template-columns:repeat(1, minmax(0, 1fr))
            }

            .grid-cols-2 {
                grid-template-columns:repeat(2, minmax(0, 1fr))
            }

            .grid-cols-3 {
                grid-template-columns:repeat(3, minmax(0, 1fr))
            }

            .grid-cols-4 {
                grid-template-columns:repeat(4, minmax(0, 1fr))
            }

            .grid-cols-5 {
                grid-template-columns:repeat(5, minmax(0, 1fr))
            }

            .grid-cols-6 {
                grid-template-columns:repeat(6, minmax(0, 1fr))
            }

            .grid-cols-7 {
                grid-template-columns:repeat(7, minmax(0, 1fr))
            }

            .grid-cols-8 {
                grid-template-columns:repeat(8, minmax(0, 1fr))
            }

            .grid-cols-9 {
                grid-template-columns:repeat(9, minmax(0, 1fr))
            }

            .overflow-hidden {
                overflow: hidden
            }

            .overflow-x-hidden {
                overflow-x: hidden
            }

            .overflow-y-auto {
                overflow-y: auto
            }

            .list-none {
                list-style-type: none
            }

            .outline-\\[--w-s-color-border-negative\\]\\! {
                outline-color: var(--w-s-color-border-negative) !important
            }

            .outline-none {
                outline: 2px solid transparent;
                outline-offset: 2px
            }

            .focus\\:outline-none:focus {
                outline: 2px solid transparent;
                outline-offset: 2px
            }

            .items-start {
                align-items: flex-start
            }

            .items-end {
                align-items: flex-end
            }

            .items-center {
                align-items: center
            }

            .self-center {
                align-self: center
            }

            .inset-0 {
                top: 0rem;
                right: 0rem;
                bottom: 0rem;
                left: 0rem
            }

            .-bottom-0 {
                bottom: -0rem
            }

            .bottom-0 {
                bottom: 0rem
            }

            .bottom-10 {
                bottom: 1rem
            }

            .bottom-16 {
                bottom: 1.6rem
            }

            .left-0 {
                left: 0rem
            }

            .left-4 {
                left: .4rem
            }

            .right-0 {
                right: 0rem
            }

            .right-8 {
                right: .8rem
            }

            .top-\\[1\\.92rem\\] {
                top: 1.92rem
            }

            .top-0 {
                top: 0rem
            }

            .top-20 {
                top: 2rem
            }

            .top-4 {
                top: .4rem
            }

            .top-8 {
                top: .8rem
            }

            .before\\:bottom-0:before {
                bottom: 0rem
            }

            .before\\:left-0:before {
                left: 0rem
            }

            .before\\:right-0:before {
                right: 0rem
            }

            .before\\:top-2:before {
                top: .2rem
            }

            .-bottom-\\[8px\\] {
                bottom: -8px
            }

            .-left-\\[8px\\] {
                left: -8px
            }

            .-right-\\[8px\\] {
                right: -8px
            }

            .-top-\\[8px\\] {
                top: -8px
            }

            .top-\\[19px\\] {
                top: 19px
            }

            .top-\\[30\\%\\] {
                top: 30%
            }

            .justify-end {
                justify-content: flex-end
            }

            .justify-center {
                justify-content: center
            }

            .justify-between {
                justify-content: space-between
            }

            .justify-items-center {
                justify-items: center
            }

            .justify-self-start {
                justify-self: start
            }

            .justify-self-end {
                justify-self: end
            }

            .justify-self-center {
                justify-self: center
            }

            .absolute {
                position: absolute
            }

            .fixed {
                position: fixed
            }

            .relative {
                position: relative
            }

            .open\\:fixed[open] {
                position: fixed
            }

            .before\\:absolute:before {
                position: absolute
            }

            .z-10, .peer:checked ~ .peer-checked\\:z-10 {
                z-index: 10
            }

            .z-30 {
                z-index: 30
            }

            .z-50 {
                z-index: 50
            }

            .hover\\:z-30:hover {
                z-index: 30
            }

            .\\!s-bg-selected {
                background-color: var(--w-s-color-background-selected) !important
            }

            .s-bg {
                background-color: var(--w-s-color-background)
            }

            .s-bg-disabled {
                background-color: var(--w-s-color-background-disabled)
            }

            .s-bg-disabled-subtle {
                background-color: var(--w-s-color-background-disabled-subtle)
            }

            .s-bg-info-subtle {
                background-color: var(--w-s-color-background-info-subtle)
            }

            .s-bg-inverted {
                background-color: var(--w-s-color-background-inverted)
            }

            .s-bg-negative {
                background-color: var(--w-s-color-background-negative)
            }

            .s-bg-negative-subtle {
                background-color: var(--w-s-color-background-negative-subtle)
            }

            .s-bg-positive-subtle {
                background-color: var(--w-s-color-background-positive-subtle)
            }

            .s-bg-primary, .peer:checked ~ .peer-checked\\:s-bg-primary {
                background-color: var(--w-s-color-background-primary)
            }

            .s-bg-selected {
                background-color: var(--w-s-color-background-selected)
            }

            .s-bg-subtle {
                background-color: var(--w-s-color-background-subtle)
            }

            .s-bg-warning-subtle {
                background-color: var(--w-s-color-background-warning-subtle)
            }

            .peer:checked:hover ~ .peer-checked\\:peer-hover\\:before\\:s-bg-negative-hover:before {
                background-color: var(--w-s-color-background-negative-hover)
            }

            .peer:checked:hover ~ .peer-checked\\:peer-hover\\:before\\:s-bg-primary-hover:before {
                background-color: var(--w-s-color-background-primary-hover)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-bg-disabled:before {
                background-color: var(--w-s-color-background-disabled)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-bg-negative:before {
                background-color: var(--w-s-color-background-negative)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-bg-primary:before {
                background-color: var(--w-s-color-background-primary)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-bg-disabled:before {
                background-color: var(--w-s-color-background-disabled)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-bg-negative:before {
                background-color: var(--w-s-color-background-negative)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-bg-primary:before {
                background-color: var(--w-s-color-background-primary)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:hover\\:before\\:s-bg-negative-hover:hover:before {
                background-color: var(--w-s-color-background-negative-hover)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:hover\\:before\\:s-bg-primary-hover:hover:before {
                background-color: var(--w-s-color-background-primary-hover)
            }

            .\\!hover\\:s-bg-selected-hover:hover {
                background-color: var(--w-s-color-background-selected-hover) !important
            }

            .group:hover .group-hover\\:s-bg-primary-hover {
                background-color: var(--w-s-color-background-primary-hover)
            }

            .hover\\:before\\:s-bg-hover:hover:before {
                background-color: var(--w-s-color-background-hover)
            }

            .hover\\:before\\:s-bg-negative-subtle-hover:hover:before {
                background-color: var(--w-s-color-background-negative-subtle-hover)
            }

            .hover\\:s-bg-hover:hover {
                background-color: var(--w-s-color-background-hover)
            }

            .hover\\:s-bg-negative-hover:hover {
                background-color: var(--w-s-color-background-negative-hover)
            }

            .hover\\:s-bg-negative-subtle-hover:hover {
                background-color: var(--w-s-color-background-negative-subtle-hover)
            }

            .hover\\:s-bg-primary-hover:hover {
                background-color: var(--w-s-color-background-primary-hover)
            }

            .hover\\:s-bg-selected-hover:hover {
                background-color: var(--w-s-color-background-selected-hover)
            }

            .peer:hover:not(:checked) ~ .peer-hover\\:peer-not-checked\\:s-bg-hover {
                background-color: var(--w-s-color-background-hover)
            }

            .peer:hover ~ .peer-hover\\:before\\:s-bg-hover:before {
                background-color: var(--w-s-color-background-hover)
            }

            .peer:hover ~ .peer-hover\\:before\\:s-bg-negative-subtle:before {
                background-color: var(--w-s-color-background-negative-subtle)
            }

            .focus\\:s-bg-primary-hover:focus {
                background-color: var(--w-s-color-background-primary-hover)
            }

            .\\!active\\:s-bg-selected-active:active {
                background-color: var(--w-s-color-background-selected-active) !important
            }

            .active\\:s-bg-active:active {
                background-color: var(--w-s-color-background-active)
            }

            .active\\:s-bg-negative-active:active {
                background-color: var(--w-s-color-background-negative-active)
            }

            .active\\:s-bg-negative-subtle-active:active {
                background-color: var(--w-s-color-background-negative-subtle-active)
            }

            .active\\:s-bg-primary-active:active {
                background-color: var(--w-s-color-background-primary-active)
            }

            .active\\:s-bg-selected-active:active {
                background-color: var(--w-s-color-background-selected-active)
            }

            .before\\:s-bg-disabled-subtle:before {
                background-color: var(--w-s-color-background-disabled-subtle)
            }

            .before\\:s-bg:before {
                background-color: var(--w-s-color-background)
            }

            .s-text {
                color: var(--w-s-color-text)
            }

            .s-text-disabled {
                color: var(--w-s-color-text-disabled)
            }

            .s-text-inverted, .peer:checked ~ .peer-checked\\:s-text-inverted {
                color: var(--w-s-color-text-inverted)
            }

            .s-text-inverted-static {
                color: var(--w-s-color-text-inverted-static)
            }

            .s-text-link {
                color: var(--w-s-color-text-link)
            }

            .s-text-negative {
                color: var(--w-s-color-text-negative)
            }

            .s-text-subtle {
                color: var(--w-s-color-text-subtle)
            }

            .hover\\:s-text-link:hover {
                color: var(--w-s-color-text-link)
            }

            .active\\:s-text:active {
                color: var(--w-s-color-text)
            }

            .placeholder\\:s-text-placeholder::placeholder {
                color: var(--w-s-color-text-placeholder)
            }

            .s-icon {
                color: var(--w-s-color-icon)
            }

            .s-icon-info {
                color: var(--w-s-color-icon-info)
            }

            .s-icon-inverted {
                color: var(--w-s-color-icon-inverted)
            }

            .s-icon-negative {
                color: var(--w-s-color-icon-negative)
            }

            .s-icon-positive {
                color: var(--w-s-color-icon-positive)
            }

            .s-icon-warning {
                color: var(--w-s-color-icon-warning)
            }

            .hover\\:s-icon-hover:hover {
                color: var(--w-s-color-icon-hover)
            }

            .active\\:s-icon-active:active {
                color: var(--w-s-color-icon-active)
            }

            .before\\:s-icon-inverted:before {
                color: var(--w-s-color-icon-inverted)
            }

            .s-border {
                border-color: var(--w-s-color-border)
            }

            .s-border-disabled {
                border-color: var(--w-s-color-border-disabled)
            }

            .s-border-info-subtle {
                border-color: var(--w-s-color-border-info-subtle)
            }

            .s-border-l-info {
                border-left-color: var(--w-s-color-border-info)
            }

            .s-border-l-negative {
                border-left-color: var(--w-s-color-border-negative)
            }

            .s-border-l-positive {
                border-left-color: var(--w-s-color-border-positive)
            }

            .s-border-l-warning {
                border-left-color: var(--w-s-color-border-warning)
            }

            .s-border-negative {
                border-color: var(--w-s-color-border-negative)
            }

            .s-border-negative-subtle {
                border-color: var(--w-s-color-border-negative-subtle)
            }

            .s-border-positive-subtle {
                border-color: var(--w-s-color-border-positive-subtle)
            }

            .s-border-primary, .peer:checked ~ .peer-checked\\:s-border-primary {
                border-color: var(--w-s-color-border-primary)
            }

            .s-border-selected {
                border-color: var(--w-s-color-border-selected)
            }

            .s-border-warning-subtle {
                border-color: var(--w-s-color-border-warning-subtle)
            }

            .peer:checked:hover ~ .peer-checked\\:peer-hover\\:before\\:s-border-negative-hover:before {
                border-color: var(--w-s-color-border-negative-hover)
            }

            .peer:checked:hover ~ .peer-checked\\:peer-hover\\:before\\:s-border-primary-hover:before {
                border-color: var(--w-s-color-border-primary-hover)
            }

            .peer:checked:hover ~ .peer-checked\\:peer-hover\\:before\\:s-border-selected-hover:before {
                border-color: var(--w-s-color-border-selected-hover)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-border-disabled:before {
                border-color: var(--w-s-color-border-disabled)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-border-negative:before {
                border-color: var(--w-s-color-border-negative)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-border-primary:before {
                border-color: var(--w-s-color-border-primary)
            }

            .peer:checked ~ .peer-checked\\:before\\:s-border-selected:before {
                border-color: var(--w-s-color-border-selected)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-border-disabled:before {
                border-color: var(--w-s-color-border-disabled)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-border-negative:before {
                border-color: var(--w-s-color-border-negative)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:before\\:s-border-primary:before {
                border-color: var(--w-s-color-border-primary)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:hover\\:before\\:s-border-negative-hover:hover:before {
                border-color: var(--w-s-color-border-negative-hover)
            }

            .peer:indeterminate ~ .peer-indeterminate\\:hover\\:before\\:s-border-primary-hover:hover:before {
                border-color: var(--w-s-color-border-primary-hover)
            }

            .group:hover .group-hover\\:s-border-selected-hover {
                border-color: var(--w-s-color-border-selected-hover)
            }

            .hover\\:before\\:s-border-negative-hover:hover:before {
                border-color: var(--w-s-color-border-negative-hover)
            }

            .hover\\:before\\:s-border-primary:hover:before {
                border-color: var(--w-s-color-border-primary)
            }

            .hover\\:s-border-disabled:hover {
                border-color: var(--w-s-color-border-disabled)
            }

            .hover\\:s-border-hover:hover {
                border-color: var(--w-s-color-border-hover)
            }

            .hover\\:s-border-negative-hover:hover {
                border-color: var(--w-s-color-border-negative-hover)
            }

            .hover\\:s-border-primary-hover:hover {
                border-color: var(--w-s-color-border-primary-hover)
            }

            .hover\\:s-border-primary:hover {
                border-color: var(--w-s-color-border-primary)
            }

            .hover\\:s-border-selected-hover:hover {
                border-color: var(--w-s-color-border-selected-hover)
            }

            .peer:hover ~ .peer-hover\\:before\\:s-border-negative-hover:before {
                border-color: var(--w-s-color-border-negative-hover)
            }

            .peer:hover ~ .peer-hover\\:before\\:s-border-primary:before {
                border-color: var(--w-s-color-border-primary)
            }

            .focus\\:s-border-primary-hover:focus {
                border-color: var(--w-s-color-border-primary-hover)
            }

            .active\\:s-border-active:active {
                border-color: var(--w-s-color-border-active)
            }

            .active\\:s-border-disabled:active {
                border-color: var(--w-s-color-border-disabled)
            }

            .active\\:s-border-primary-active:active {
                border-color: var(--w-s-color-border-primary-active)
            }

            .active\\:s-border-selected-active:active {
                border-color: var(--w-s-color-border-selected-active)
            }

            .active\\:s-border-selected:active {
                border-color: var(--w-s-color-border-selected)
            }

            .group:active .group-active\\:s-border-active {
                border-color: var(--w-s-color-border-active)
            }

            .group:active .group-active\\:s-border-selected-active {
                border-color: var(--w-s-color-border-selected-active)
            }

            .before\\:s-border-disabled:before {
                border-color: var(--w-s-color-border-disabled)
            }

            .before\\:s-border-negative:before {
                border-color: var(--w-s-color-border-negative)
            }

            .s-surface-sunken {
                background-color: var(--w-s-color-surface-sunken)
            }

            .s-surface-elevated-200 {
                background-color: var(--w-s-color-surface-elevated-200);
                box-shadow: var(--w-s-shadow-surface-elevated-200)
            }

            .hover\\:s-surface-elevated-200-hover:hover {
                background-color: var(--w-s-color-surface-elevated-200-hover);
                box-shadow: var(--w-s-shadow-surface-elevated-200-hover)
            }

            .active\\:s-surface-elevated-200-active:active {
                background-color: var(--w-s-color-surface-elevated-200-active);
                box-shadow: var(--w-s-shadow-surface-elevated-200-active)
            }

            .drop-shadow-m {
                filter: drop-shadow(rgba(64, 64, 64, .24) 0 3px 8px) drop-shadow(rgba(64, 64, 64, .16) 0 3px 6px)
            }

            .shadow-m {
                box-shadow: var(--w-shadow-m)
            }

            .shadow-s {
                box-shadow: var(--w-shadow-s)
            }

            .shadow-\\[--w-shadow-slider\\] {
                box-shadow: var(--w-shadow-slider)
            }

            .hover\\:shadow-\\[--w-shadow-slider-handle-hover\\]:hover {
                box-shadow: var(--w-shadow-slider-handle-hover)
            }

            .focus\\:shadow-\\[--w-shadow-slider-handle-hover\\]:focus {
                box-shadow: var(--w-shadow-slider-handle-hover)
            }

            .active\\:shadow-\\[--w-shadow-slider-handle-active\\]:active {
                box-shadow: var(--w-shadow-slider-handle-active)
            }

            .h-0 {
                height: 0rem
            }

            .h-16 {
                height: 1.6rem
            }

            .h-2 {
                height: .2rem
            }

            .h-20 {
                height: 2rem
            }

            .h-24 {
                height: 2.4rem
            }

            .h-4 {
                height: .4rem
            }

            .h-44 {
                height: 4.4rem
            }

            .h-6 {
                height: .6rem
            }

            .h-8 {
                height: .8rem
            }

            .h-full {
                height: 100%
            }

            .h-unset {
                height: unset
            }

            .max-h-unset {
                max-height: unset
            }

            .max-w-full {
                max-width: 100%
            }

            .max-w-max {
                max-width: max-content
            }

            .max-w-unset {
                max-width: unset
            }

            .min-h-32 {
                min-height: 3.2rem
            }

            .min-h-40 {
                min-height: 4rem
            }

            .min-w-16 {
                min-width: 1.6rem
            }

            .min-w-32 {
                min-width: 3.2rem
            }

            .w-16 {
                width: 1.6rem
            }

            .w-2 {
                width: .2rem
            }

            .w-20 {
                width: 2rem
            }

            .w-24 {
                width: 2.4rem
            }

            .w-32 {
                width: 3.2rem
            }

            .w-40 {
                width: 4rem
            }

            .w-44 {
                width: 4.4rem
            }

            .w-8 {
                width: .8rem
            }

            .w-full {
                width: 100%
            }

            .w-max {
                width: max-content
            }

            .w-unset {
                width: unset
            }

            .before\\:h-20:before {
                height: 2rem
            }

            .before\\:h-full:before {
                height: 100%
            }

            .before\\:w-20:before {
                width: 2rem
            }

            .before\\:w-32:before {
                width: 3.2rem
            }

            .h-\\[--w-modal-height\\] {
                height: var(--w-modal-height)
            }

            .h-\\[14px\\] {
                height: 14px
            }

            .h-\\[16px\\] {
                height: 16px
            }

            .max-h-\\[--w-modal-max-height\\] {
                max-height: var(--w-modal-max-height)
            }

            .min-h-\\[--w-modal-min-height\\] {
                min-height: var(--w-modal-min-height)
            }

            .min-h-\\[32px\\] {
                min-height: 32px
            }

            .min-h-\\[40px\\] {
                min-height: 40px
            }

            .min-h-\\[42\\] {
                min-height: 4.2rem
            }

            .min-h-\\[44px\\] {
                min-height: 44px
            }

            .min-w-\\[32px\\] {
                min-width: 32px
            }

            .min-w-\\[40px\\] {
                min-width: 40px
            }

            .min-w-\\[44px\\] {
                min-width: 44px
            }

            .w-\\[--w-modal-width\\] {
                width: var(--w-modal-width)
            }

            .w-\\[14px\\] {
                width: 14px
            }

            .w-\\[16px\\] {
                width: 16px
            }

            .space-x-8 > :not([hidden]) ~ :not([hidden]) {
                --w-space-x-reverse: 0;
                margin-left: calc(.8rem * calc(1 - var(--w-space-x-reverse)));
                margin-right: calc(.8rem * var(--w-space-x-reverse))
            }

            .space-y-16 > :not([hidden]) ~ :not([hidden]) {
                --w-space-y-reverse: 0;
                margin-top: calc(1.6rem * calc(1 - var(--w-space-y-reverse)));
                margin-bottom: calc(1.6rem * var(--w-space-y-reverse))
            }

            .m-0 {
                margin: 0rem
            }

            .m-auto {
                margin: auto
            }

            .-mx-16 {
                margin-left: -1.6rem;
                margin-right: -1.6rem
            }

            .mx-0 {
                margin-left: 0rem;
                margin-right: 0rem
            }

            .mx-8 {
                margin-left: .8rem;
                margin-right: .8rem
            }

            .mx-auto {
                margin-left: auto;
                margin-right: auto
            }

            .-mb-1 {
                margin-bottom: -.1rem
            }

            .-ml-8 {
                margin-left: -.8rem
            }

            .-mr-1 {
                margin-right: -.1rem
            }

            .-mr-8 {
                margin-right: -.8rem
            }

            .-mt-2 {
                margin-top: -.2rem
            }

            .-mt-4 {
                margin-top: -.4rem
            }

            .last-child\\:mb-0 > :last-child, .mb-0 {
                margin-bottom: 0rem
            }

            .mb-32 {
                margin-bottom: 3.2rem
            }

            .ml-8 {
                margin-left: .8rem
            }

            .ml-auto {
                margin-left: auto
            }

            .mr-8 {
                margin-right: .8rem
            }

            .mt-16 {
                margin-top: 1.6rem
            }

            .mt-4 {
                margin-top: .4rem
            }

            .group:not(:first-child) .group-not-first\\:-ml-2 {
                margin-left: -.2rem
            }

            .last\\:mb-0:last-child {
                margin-bottom: 0rem
            }

            .last\\:mr-0:last-child {
                margin-right: 0rem
            }

            .m-\\[8px\\] {
                margin: 8px
            }

            .p-0 {
                padding: 0rem
            }

            .p-16 {
                padding: 1.6rem
            }

            .p-4 {
                padding: .4rem
            }

            .p-8 {
                padding: .8rem
            }

            .px-0 {
                padding-left: 0rem;
                padding-right: 0rem
            }

            .px-1 {
                padding-left: .1rem;
                padding-right: .1rem
            }

            .px-12 {
                padding-left: 1.2rem;
                padding-right: 1.2rem
            }

            .px-14 {
                padding-left: 1.4rem;
                padding-right: 1.4rem
            }

            .px-16 {
                padding-left: 1.6rem;
                padding-right: 1.6rem
            }

            .px-8 {
                padding-left: .8rem;
                padding-right: .8rem
            }

            .py-0 {
                padding-top: 0rem;
                padding-bottom: 0rem
            }

            .py-1 {
                padding-top: .1rem;
                padding-bottom: .1rem
            }

            .py-10 {
                padding-top: 1rem;
                padding-bottom: 1rem
            }

            .py-12 {
                padding-top: 1.2rem;
                padding-bottom: 1.2rem
            }

            .py-2 {
                padding-top: .2rem;
                padding-bottom: .2rem
            }

            .py-4 {
                padding-top: .4rem;
                padding-bottom: .4rem
            }

            .py-6 {
                padding-top: .6rem;
                padding-bottom: .6rem
            }

            .py-8 {
                padding-top: .8rem;
                padding-bottom: .8rem
            }

            .pb-0 {
                padding-bottom: 0rem
            }

            .pb-32 {
                padding-bottom: 3.2rem
            }

            .pb-4 {
                padding-bottom: .4rem
            }

            .pb-8 {
                padding-bottom: .8rem
            }

            .pl-0 {
                padding-left: 0rem
            }

            .pl-1 {
                padding-left: .1rem
            }

            .pl-12 {
                padding-left: 1.2rem
            }

            .pl-28 {
                padding-left: 2.8rem
            }

            .pl-4 {
                padding-left: .4rem
            }

            .pl-8 {
                padding-left: .8rem
            }

            .pr-12 {
                padding-right: 1.2rem
            }

            .pr-14 {
                padding-right: 1.4rem
            }

            .pr-2 {
                padding-right: .2rem
            }

            .pr-32 {
                padding-right: 3.2rem
            }

            .pr-40 {
                padding-right: 4rem
            }

            .pt-0 {
                padding-top: 0rem
            }

            .pt-1 {
                padding-top: .1rem
            }

            .pt-16 {
                padding-top: 1.6rem
            }

            .pt-24 {
                padding-top: 2.4rem
            }

            .pt-8 {
                padding-top: .8rem
            }

            .group\\/step:last-child .group-last\\/step\\:last\\:pb-0:last-child {
                padding-bottom: 0rem
            }

            .last\\:pb-1:last-child {
                padding-bottom: .1rem
            }

            .last\\:pr-1:last-child {
                padding-right: .1rem
            }

            .p-\\[8px\\] {
                padding: 8px
            }

            .px-\\[15px\\] {
                padding-left: 15px;
                padding-right: 15px
            }

            .px-\\[8px\\] {
                padding-left: 8px;
                padding-right: 8px
            }

            .py-\\[11px\\] {
                padding-top: 11px;
                padding-bottom: 11px
            }

            .py-\\[5px\\] {
                padding-top: 5px;
                padding-bottom: 5px
            }

            .py-\\[7px\\] {
                padding-top: 7px;
                padding-bottom: 7px
            }

            .pl-\\[var\\(--w-prefix-width\\,_40px\\)\\] {
                padding-left: var(--w-prefix-width, 40px)
            }

            .invisible {
                visibility: hidden
            }

            .backface-hidden {
                backface-visibility: hidden
            }

            .break-words {
                overflow-wrap: break-word
            }

            .before\\:content-\\[\\"â€“\\"\\]:before {
                content: "â€“"
            }

            .before\\:content-\\[\\"\\"\\]:before {
                content: ""
            }

            .cursor-default {
                cursor: default
            }

            .cursor-pointer {
                cursor: pointer
            }

            .antialiased {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                font-smoothing: grayscale
            }

            .font-bold {
                font-weight: 700
            }

            .before\\:font-bold:before {
                font-weight: 700
            }

            .font-normal {
                font-weight: 400
            }

            .pointer-events-auto {
                pointer-events: auto
            }

            .pointer-events-none {
                pointer-events: none
            }

            .before\\:pointer-events-none:before {
                pointer-events: none
            }

            .pb-safe-\\[32\\] {
                padding-bottom: calc(32px + env(safe-area-inset-bottom, 0px))
            }

            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0
            }

            .touch-pan-y {
                touch-action: pan-y
            }

            .select-none {
                -webkit-user-select: none;
                user-select: none
            }

            .translate-x-20 {
                --w-translate-x: 2rem;
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .translate-z-0 {
                --w-translate-z: 0rem;
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .-rotate-180, .part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part) {
                --w-rotate-x: 0;
                --w-rotate-y: 0;
                --w-rotate-z: 0;
                --w-rotate: -180deg;
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part), .rotate-180 {
                --w-rotate-x: 0;
                --w-rotate-y: 0;
                --w-rotate-z: 0;
                --w-rotate: 180deg;
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .rotate-90 {
                --w-rotate-x: 0;
                --w-rotate-y: 0;
                --w-rotate-z: 0;
                --w-rotate: 90deg;
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part), .part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part), .transform {
                transform: translate(var(--w-translate-x)) translateY(var(--w-translate-y)) translateZ(var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part), .part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part), .transform-gpu {
                transform: translate3d(var(--w-translate-x), var(--w-translate-y), var(--w-translate-z)) rotate(var(--w-rotate)) rotateX(var(--w-rotate-x)) rotateY(var(--w-rotate-y)) rotate(var(--w-rotate-z)) skew(var(--w-skew-x)) skewY(var(--w-skew-y)) scaleX(var(--w-scale-x)) scaleY(var(--w-scale-y)) scaleZ(var(--w-scale-z))
            }

            .part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part), .part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part), .transition-transform {
                transition-property: transform;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .15s
            }

            .transition-300 {
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .3s
            }

            .transition-all {
                transition-property: all;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .15s
            }

            .transition-colors {
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .15s
            }

            .transition-shadow {
                transition-property: box-shadow;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .15s
            }

            .before\\:transition-all:before {
                transition-property: all;
                transition-timing-function: cubic-bezier(.4, 0, .2, 1);
                transition-duration: .15s
            }

            .duration-300 {
                transition-duration: .3s
            }

            .ease-in-out, .part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part), .part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part) {
                transition-timing-function: cubic-bezier(.4, 0, .2, 1)
            }

            .text-m {
                font-size: var(--w-font-size-m);
                line-height: var(--w-line-height-m)
            }

            .text-s {
                font-size: var(--w-font-size-s);
                line-height: var(--w-line-height-s)
            }

            .text-xs {
                font-size: var(--w-font-size-xs);
                line-height: var(--w-line-height-xs)
            }

            .leading-m {
                line-height: var(--w-line-height-m)
            }

            .before\\:leading-xs:before {
                line-height: var(--w-line-height-xs)
            }

            .leading-\\[24\\] {
                line-height: 2.4rem
            }

            @media (max-width: 479.9px) {
                .lt-sm\\:rounded-b-0 {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0
                }
            }
            @media (min-width: 480px) {
                .sm\\:border-b-0 {
                    border-bottom-width: 0
                }

                .sm\\:rounded-8 {
                    border-radius: 8px
                }

                .sm\\:rounded-b-8 {
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px
                }

                .sm\\:gap-16 {
                    gap: 1.6rem
                }

                .sm\\:place-content-center {
                    place-content: center
                }

                .sm\\:place-items-center {
                    place-items: center
                }

                .sm\\:h-24 {
                    height: 2.4rem
                }

                .sm\\:min-h-48 {
                    min-height: 4.8rem
                }

                .sm\\:w-24 {
                    width: 2.4rem
                }

                .sm\\:min-h-\\[32px\\] {
                    min-height: 32px
                }

                .sm\\:min-h-\\[44px\\] {
                    min-height: 44px
                }

                .sm\\:min-h-\\[45\\] {
                    min-height: 4.5rem
                }

                .sm\\:min-w-\\[32px\\] {
                    min-width: 32px
                }

                .sm\\:min-w-\\[44px\\] {
                    min-width: 44px
                }

                .sm\\:mx-0 {
                    margin-left: 0rem;
                    margin-right: 0rem
                }

                .sm\\:mx-16 {
                    margin-left: 1.6rem;
                    margin-right: 1.6rem
                }

                .sm\\:-ml-12 {
                    margin-left: -1.2rem
                }

                .sm\\:-mr-12 {
                    margin-right: -1.2rem
                }

                .sm\\:-mt-8 {
                    margin-top: -.8rem
                }

                .sm\\:px-32 {
                    padding-left: 3.2rem;
                    padding-right: 3.2rem
                }

                .sm\\:py-0 {
                    padding-top: 0rem;
                    padding-bottom: 0rem
                }

                .sm\\:pb-32 {
                    padding-bottom: 3.2rem
                }

                .sm\\:pt-24 {
                    padding-top: 2.4rem
                }

                .sm\\:pt-32 {
                    padding-top: 3.2rem
                }
            }
            @media (min-width: 768px) {
                .md\\:block {
                    display: block
                }

                .md\\:hidden {
                    display: none
                }
            }
        `,_a=ee`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Sa=Object.defineProperty,Zr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Sa(e,r,n),n};const mt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},bt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class cr extends j{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!bt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return z([mt.wrapper,mt[this.variant]])}get _iconClasses(){const e=mt[`${this.variant}Icon`];return z([mt.icon,e])}static{this.styles=[Bt,_a,ee`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===bt.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===bt.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===bt.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===bt.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${mt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}Zr([k({reflect:!0})],cr.prototype,"variant");Zr([k({type:Boolean,reflect:!0})],cr.prototype,"show");Zr([k({reflect:!0})],cr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",cr);const Ea=["top","right","bottom","left"],He=Math.min,he=Math.max,Yt=Math.round,we=t=>({x:t,y:t}),Ca={left:"right",right:"left",bottom:"top",top:"bottom"},Aa={start:"end",end:"start"};function Nr(t,e,r){return he(t,He(e,r))}function We(t,e){return typeof t=="function"?t(e):t}function Pe(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function Fn(t){return t==="x"?"y":"x"}function Kr(t){return t==="y"?"height":"width"}const La=new Set(["top","bottom"]);function Se(t){return La.has(Pe(t))?"y":"x"}function Gr(t){return Fn(Se(t))}function Oa(t,e,r){r===void 0&&(r=!1);const o=nt(t),n=Gr(t),i=Kr(n);let s=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Qt(s)),[s,Qt(s)]}function Ta(t){const e=Qt(t);return[Mr(t),e,Mr(e)]}function Mr(t){return t.replace(/start|end/g,e=>Aa[e])}const Ao=["left","right"],Lo=["right","left"],Pa=["top","bottom"],Da=["bottom","top"];function Ba(t,e,r){switch(t){case"top":case"bottom":return r?e?Lo:Ao:e?Ao:Lo;case"left":case"right":return e?Pa:Da;default:return[]}}function Na(t,e,r,o){const n=nt(t);let i=Ba(Pe(t),r==="start",o);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(Mr)))),i}function Qt(t){return t.replace(/left|right|bottom|top/g,e=>Ca[e])}function Ma(t){return{top:0,right:0,bottom:0,left:0,...t}}function In(t){return typeof t!="number"?Ma(t):{top:t,right:t,bottom:t,left:t}}function Xt(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function Oo(t,e,r){let{reference:o,floating:n}=t;const i=Se(e),s=Gr(e),a=Kr(s),l=Pe(e),u=i==="y",p=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,m=o[a]/2-n[a]/2;let c;switch(l){case"top":c={x:p,y:o.y-n.height};break;case"bottom":c={x:p,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:d};break;case"left":c={x:o.x-n.width,y:d};break;default:c={x:o.x,y:o.y}}switch(nt(e)){case"start":c[s]-=m*(r&&u?-1:1);break;case"end":c[s]+=m*(r&&u?-1:1);break}return c}const Ra=async(t,e,r)=>{const{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:s}=r,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:d}=Oo(u,o,l),m=o,c={},f=0;for(let h=0;h<a.length;h++){const{name:b,fn:S}=a[h],{x:A,y:C,data:N,reset:y}=await S({x:p,y:d,initialPlacement:o,placement:m,strategy:n,middlewareData:c,rects:u,platform:s,elements:{reference:t,floating:e}});p=A??p,d=C??d,c={...c,[b]:{...c[b],...N}},y&&f<=50&&(f++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):y.rects),{x:p,y:d}=Oo(u,m,l)),h=-1)}return{x:p,y:d,placement:m,strategy:n,middlewareData:c}};async function Ot(t,e){var r;e===void 0&&(e={});const{x:o,y:n,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:c=0}=We(e,t),f=In(c),b=a[m?d==="floating"?"reference":"floating":d],S=Xt(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(b)))==null||r?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:p,strategy:l})),A=d==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),N=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},y=Xt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:A,offsetParent:C,strategy:l}):A);return{top:(S.top-y.top+f.top)/N.y,bottom:(y.bottom-S.bottom+f.bottom)/N.y,left:(S.left-y.left+f.left)/N.x,right:(y.right-S.right+f.right)/N.x}}const za=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:n,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:u,padding:p=0}=We(t,e)||{};if(u==null)return{};const d=In(p),m={x:r,y:o},c=Gr(n),f=Kr(c),h=await s.getDimensions(u),b=c==="y",S=b?"top":"left",A=b?"bottom":"right",C=b?"clientHeight":"clientWidth",N=i.reference[f]+i.reference[c]-m[c]-i.floating[f],y=m[c]-i.reference[c],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let O=L?L[C]:0;(!O||!await(s.isElement==null?void 0:s.isElement(L)))&&(O=a.floating[C]||i.floating[f]);const M=N/2-y/2,U=O/2-h[f]/2-1,H=He(d[S],U),K=He(d[A],U),W=H,se=O-h[f]-K,B=O/2-h[f]/2+M,G=Nr(W,B,se),X=!l.arrow&&nt(n)!=null&&B!==G&&i.reference[f]/2-(B<W?H:K)-h[f]/2<0,re=X?B<W?B-W:B-se:0;return{[c]:m[c]+re,data:{[c]:G,centerOffset:B-G-re,...X&&{alignmentOffset:re}},reset:X}}}),Fa=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:n,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...b}=We(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const S=Pe(n),A=Se(a),C=Pe(a)===a,N=await(l.isRTL==null?void 0:l.isRTL(u.floating)),y=m||(C||!h?[Qt(a)]:Ta(a)),L=f!=="none";!m&&L&&y.push(...Na(a,h,f,N));const O=[a,...y],M=await Ot(e,b),U=[];let H=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&U.push(M[S]),d){const B=Oa(n,s,N);U.push(M[B[0]],M[B[1]])}if(H=[...H,{placement:n,overflows:U}],!U.every(B=>B<=0)){var K,W;const B=(((K=i.flip)==null?void 0:K.index)||0)+1,G=O[B];if(G&&(!(d==="alignment"?A!==Se(G):!1)||H.every(Y=>Se(Y.placement)===A?Y.overflows[0]>0:!0)))return{data:{index:B,overflows:H},reset:{placement:G}};let X=(W=H.filter(re=>re.overflows[0]<=0).sort((re,Y)=>re.overflows[1]-Y.overflows[1])[0])==null?void 0:W.placement;if(!X)switch(c){case"bestFit":{var se;const re=(se=H.filter(Y=>{if(L){const ne=Se(Y.placement);return ne===A||ne==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(ne=>ne>0).reduce((ne,qe)=>ne+qe,0)]).sort((Y,ne)=>Y[1]-ne[1])[0])==null?void 0:se[0];re&&(X=re);break}case"initialPlacement":X=a;break}if(n!==X)return{reset:{placement:X}}}return{}}}};function To(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Po(t){return Ea.some(e=>t[e]>=0)}const Ia=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...n}=We(t,e);switch(o){case"referenceHidden":{const i=await Ot(e,{...n,elementContext:"reference"}),s=To(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Po(s)}}}case"escaped":{const i=await Ot(e,{...n,altBoundary:!0}),s=To(i,r.floating);return{data:{escapedOffsets:s,escaped:Po(s)}}}default:return{}}}}},ja=new Set(["left","top"]);async function Ua(t,e){const{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=Pe(r),a=nt(r),l=Se(r)==="y",u=ja.has(s)?-1:1,p=i&&l?-1:1,d=We(e,t);let{mainAxis:m,crossAxis:c,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof f=="number"&&(c=a==="end"?f*-1:f),l?{x:c*p,y:m*u}:{x:m*u,y:c*p}}const Ha=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:n,y:i,placement:s,middlewareData:a}=e,l=await Ua(e,t);return s===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:s}}}}},Wa=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:S,y:A}=b;return{x:S,y:A}}},...l}=We(t,e),u={x:r,y:o},p=await Ot(e,l),d=Se(Pe(n)),m=Fn(d);let c=u[m],f=u[d];if(i){const b=m==="y"?"top":"left",S=m==="y"?"bottom":"right",A=c+p[b],C=c-p[S];c=Nr(A,c,C)}if(s){const b=d==="y"?"top":"left",S=d==="y"?"bottom":"right",A=f+p[b],C=f-p[S];f=Nr(A,f,C)}const h=a.fn({...e,[m]:c,[d]:f});return{...h,data:{x:h.x-r,y:h.y-o,enabled:{[m]:i,[d]:s}}}}}},Va=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:n,rects:i,platform:s,elements:a}=e,{apply:l=()=>{},...u}=We(t,e),p=await Ot(e,u),d=Pe(n),m=nt(n),c=Se(n)==="y",{width:f,height:h}=i.floating;let b,S;d==="top"||d==="bottom"?(b=d,S=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(S=d,b=m==="end"?"top":"bottom");const A=h-p.top-p.bottom,C=f-p.left-p.right,N=He(h-p[b],A),y=He(f-p[S],C),L=!e.middlewareData.shift;let O=N,M=y;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(O=A),L&&!m){const H=he(p.left,0),K=he(p.right,0),W=he(p.top,0),se=he(p.bottom,0);c?M=f-2*(H!==0||K!==0?H+K:he(p.left,p.right)):O=h-2*(W!==0||se!==0?W+se:he(p.top,p.bottom))}await l({...e,availableWidth:M,availableHeight:O});const U=await s.getDimensions(a.floating);return f!==U.width||h!==U.height?{reset:{rects:!0}}:{}}}};function dr(){return typeof window<"u"}function it(t){return jn(t)?(t.nodeName||"").toLowerCase():"#document"}function de(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ee(t){var e;return(e=(jn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jn(t){return dr()?t instanceof Node||t instanceof de(t).Node:!1}function ge(t){return dr()?t instanceof Element||t instanceof de(t).Element:!1}function ye(t){return dr()?t instanceof HTMLElement||t instanceof de(t).HTMLElement:!1}function Do(t){return!dr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof de(t).ShadowRoot}const qa=new Set(["inline","contents"]);function Nt(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=me(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!qa.has(n)}const Ya=new Set(["table","td","th"]);function Qa(t){return Ya.has(it(t))}const Xa=[":popover-open",":modal"];function ur(t){return Xa.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ja=["transform","translate","scale","rotate","perspective"],Za=["transform","translate","scale","rotate","perspective","filter"],Ka=["paint","layout","strict","content"];function eo(t){const e=to(),r=ge(t)?me(t):t;return Ja.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||Za.some(o=>(r.willChange||"").includes(o))||Ka.some(o=>(r.contain||"").includes(o))}function Ga(t){let e=De(t);for(;ye(e)&&!tt(e);){if(eo(e))return e;if(ur(e))return null;e=De(e)}return null}function to(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const el=new Set(["html","body","#document"]);function tt(t){return el.has(it(t))}function me(t){return de(t).getComputedStyle(t)}function hr(t){return ge(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function De(t){if(it(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Do(t)&&t.host||Ee(t);return Do(e)?e.host:e}function Un(t){const e=De(t);return tt(e)?t.ownerDocument?t.ownerDocument.body:t.body:ye(e)&&Nt(e)?e:Un(e)}function Hn(t,e,r){var o;e===void 0&&(e=[]);const n=Un(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=de(n);return i?(Rr(s),e.concat(s,s.visualViewport||[],Nt(n)?n:[],[])):e.concat(n,Hn(n,[]))}function Rr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wn(t){const e=me(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=ye(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,a=Yt(r)!==i||Yt(o)!==s;return a&&(r=i,o=s),{width:r,height:o,$:a}}function Vn(t){return ge(t)?t:t.contextElement}function et(t){const e=Vn(t);if(!ye(e))return we(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=Wn(e);let s=(i?Yt(r.width):r.width)/o,a=(i?Yt(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const tl=we(0);function qn(t){const e=de(t);return!to()||!e.visualViewport?tl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function rl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==de(t)?!1:e}function Tt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),i=Vn(t);let s=we(1);e&&(o?ge(o)&&(s=et(o)):s=et(t));const a=rl(i,r,o)?qn(i):we(0);let l=(n.left+a.x)/s.x,u=(n.top+a.y)/s.y,p=n.width/s.x,d=n.height/s.y;if(i){const m=de(i),c=o&&ge(o)?de(o):o;let f=m,h=Rr(f);for(;h&&o&&c!==f;){const b=et(h),S=h.getBoundingClientRect(),A=me(h),C=S.left+(h.clientLeft+parseFloat(A.paddingLeft))*b.x,N=S.top+(h.clientTop+parseFloat(A.paddingTop))*b.y;l*=b.x,u*=b.y,p*=b.x,d*=b.y,l+=C,u+=N,f=de(h),h=Rr(f)}}return Xt({width:p,height:d,x:l,y:u})}function ro(t,e){const r=hr(t).scrollLeft;return e?e.left+r:Tt(Ee(t)).left+r}function Yn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(r?0:ro(t,o)),i=o.top+e.scrollTop;return{x:n,y:i}}function ol(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t;const i=n==="fixed",s=Ee(o),a=e?ur(e.floating):!1;if(o===s||a&&i)return r;let l={scrollLeft:0,scrollTop:0},u=we(1);const p=we(0),d=ye(o);if((d||!d&&!i)&&((it(o)!=="body"||Nt(s))&&(l=hr(o)),ye(o))){const c=Tt(o);u=et(o),p.x=c.x+o.clientLeft,p.y=c.y+o.clientTop}const m=s&&!d&&!i?Yn(s,l,!0):we(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+p.x+m.x,y:r.y*u.y-l.scrollTop*u.y+p.y+m.y}}function nl(t){return Array.from(t.getClientRects())}function il(t){const e=Ee(t),r=hr(t),o=t.ownerDocument.body,n=he(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=he(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+ro(t);const a=-r.scrollTop;return me(o).direction==="rtl"&&(s+=he(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:s,y:a}}function sl(t,e){const r=de(t),o=Ee(t),n=r.visualViewport;let i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){i=n.width,s=n.height;const u=to();(!u||u&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:i,height:s,x:a,y:l}}function al(t,e){const r=Tt(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=ye(t)?et(t):we(1),s=t.clientWidth*i.x,a=t.clientHeight*i.y,l=n*i.x,u=o*i.y;return{width:s,height:a,x:l,y:u}}function Bo(t,e,r){let o;if(e==="viewport")o=sl(t,r);else if(e==="document")o=il(Ee(t));else if(ge(e))o=al(e,r);else{const n=qn(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Xt(o)}function Qn(t,e){const r=De(t);return r===e||!ge(r)||tt(r)?!1:me(r).position==="fixed"||Qn(r,e)}function ll(t,e){const r=e.get(t);if(r)return r;let o=Hn(t,[]).filter(a=>ge(a)&&it(a)!=="body"),n=null;const i=me(t).position==="fixed";let s=i?De(t):t;for(;ge(s)&&!tt(s);){const a=me(s),l=eo(s);!l&&a.position==="fixed"&&(n=null),(i?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Nt(s)&&!l&&Qn(t,s))?o=o.filter(p=>p!==s):n=a,s=De(s)}return e.set(t,o),o}function cl(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t;const s=[...r==="clippingAncestors"?ur(e)?[]:ll(e,this._c):[].concat(r),o],a=s[0],l=s.reduce((u,p)=>{const d=Bo(e,p,n);return u.top=he(d.top,u.top),u.right=He(d.right,u.right),u.bottom=He(d.bottom,u.bottom),u.left=he(d.left,u.left),u},Bo(e,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function dl(t){const{width:e,height:r}=Wn(t);return{width:e,height:r}}function ul(t,e,r){const o=ye(e),n=Ee(e),i=r==="fixed",s=Tt(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const l=we(0);if(o||!o&&!i)if((it(e)!=="body"||Nt(n))&&(a=hr(e)),o){const m=Tt(e,!0,i,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else n&&(l.x=ro(n));const u=n&&!o&&!i?Yn(n,a):we(0),p=s.left+a.scrollLeft-l.x-u.x,d=s.top+a.scrollTop-l.y-u.y;return{x:p,y:d,width:s.width,height:s.height}}function Sr(t){return me(t).position==="static"}function No(t,e){if(!ye(t)||me(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Ee(t)===r&&(r=r.ownerDocument.body),r}function Xn(t,e){const r=de(t);if(ur(t))return r;if(!ye(t)){let n=De(t);for(;n&&!tt(n);){if(ge(n)&&!Sr(n))return n;n=De(n)}return r}let o=No(t,e);for(;o&&Qa(o)&&Sr(o);)o=No(o,e);return o&&tt(o)&&Sr(o)&&!eo(o)?r:o||Ga(t)||r}const hl=async function(t){const e=this.getOffsetParent||Xn,r=this.getDimensions,o=await r(t.floating);return{reference:ul(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function pl(t){return me(t).direction==="rtl"}const fl={convertOffsetParentRelativeRectToViewportRelativeRect:ol,getDocumentElement:Ee,getClippingRect:cl,getOffsetParent:Xn,getElementRects:hl,getClientRects:nl,getDimensions:dl,getScale:et,isElement:ge,isRTL:pl},gl=Ha,ml=Wa,bl=Fa,vl=Va,wl=Ia,yl=za,xl=(t,e,r)=>{const o=new Map,n={platform:fl,...r},i={...n.platform,_c:o};return Ra(t,e,{...n,platform:i})},Jt="top-start",Zt="top",Kt="top-end",Gt="right-start",er="right",tr="right-end",rr="bottom-start",Pt="bottom",or="bottom-end",nr="left-start",ir="left",sr="left-end",Mo=[Jt,Zt,Kt,Gt,er,tr,rr,Pt,or,nr,ir,sr],Ke={[Jt]:rr,[Zt]:Pt,[Kt]:or,[rr]:Jt,[Pt]:Zt,[or]:Kt,[nr]:Gt,[ir]:er,[sr]:tr,[Gt]:nr,[er]:ir,[tr]:sr},$l={[nr]:-45,[ir]:-45,[sr]:-45,[Jt]:45,[Zt]:45,[Kt]:45,[Gt]:135,[er]:135,[tr]:135,[rr]:-135,[Pt]:-135,[or]:-135},Jn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},kl=t=>t.split("-")[0],_l=t=>Ke[kl(t)],Zn=t=>Ke[t],Sl=t=>$l[Zn(t)],El=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${Jn(_l(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},Ro=8,zt=24;async function zo(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return xl(e,r,{placement:t?.directionName??Pt,middleware:[gl({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&bl({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&ml({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&yl({element:t?.arrowEl}),wl(),vl({apply(){Object.assign(r.style,{paddingRight:`${Ro}px`,paddingLeft:`${Ro}px`})}})]}).then(({x:o,y:n,middlewareData:i,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${n}px`}),i?.hide&&!t?.isCallout){const{referenceHidden:a}=i.hide;Object.assign(r.style,{visibility:a?"hidden":""})}if(i?.arrow&&t?.arrowEl){const a=t?.arrowEl,{x:l,y:u}=i.arrow,p=window.getComputedStyle(r).direction==="rtl",d=Zn(s).split("-")[1];let m="",c="",f="",h="";if(d==="start"){const b=typeof l=="number"?`calc(${zt}px - ${a.offsetWidth/2}px)`:"";m=typeof u=="number"?`calc(${zt}px - ${a.offsetWidth/2}px)`:"",c=p?b:"",h=p?"":b}else if(d==="end"){const b=typeof l=="number"?`calc(${zt}px - ${a.offsetWidth/2}px)`:"";c=p?"":b,h=p?b:"",f=typeof u=="number"?`calc(${zt}px - ${a.offsetWidth/2}px)`:""}else h=typeof l=="number"?`${l}px`:"",m=typeof u=="number"?`${u}px`:"";Object.assign(a.style,{top:m,right:c,bottom:f,left:h}),El(a,Sl(s),s)}}),t}var Cl={};const Al=["en","nb","fi","da","sv"],Kn="en",Fo=t=>Al.find(e=>t===e||t.toLowerCase().includes(e))||Kn;function Ll(){if(typeof window>"u"){const t=Cl.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Fo(t)}try{const t=document.documentElement.lang;return Fo(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Kn}}const Ol=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Be=(t,e,r,o,n)=>{const i=Ll(),s=Ol(i,t,e,r,o,n);E.load(i,s),E.activate(i)},Tl=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),Pl=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),Dl=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Bl=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Nl=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Ml extends ot(I){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[I.styles,ee`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Be(Pl,Bl,Dl,Tl,Nl),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(Ke).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(Ke))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Mo.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Mo)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?zo(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return Ke[this._actualDirection]}get _arrowClasses(){return z([Qe.arrowBase,this._activeVariantClasses.arrow,Qe[`arrowDirection${Jn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:Qe[r],arrow:Qe[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return z([Qe.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return E._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${Qe.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},zo(this.attentionState)}pointingAtDirection(){switch(Ke[this._actualDirection]){case"top-start":case"top":case"top-end":return E._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return E._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return E._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return E._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return E._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return E._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return E._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return E._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Qs());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${q(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?w`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:F}
              </div>
            `:w`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:F}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",Ml);class Rl extends I{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[I.styles];constructor(){super(),this.variant="neutral"}get _class(){return z([Me.base,Me[this.variant],!!this.position&&Me.positionBase,this.position==="top-left"&&Me.positionTL,this.position==="top-right"&&Me.positionTR,this.position==="bottom-right"&&Me.positionBR,this.position==="bottom-left"&&Me.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",Rl);class zl extends I{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[I.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return z([ct.base,this.bleed&&ct.bleed,this.info&&ct.info,this.neutral&&ct.neutral,this.bordered&&ct.bordered])}get _optOutRoleWithDefault(){return this.role===""?F:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",zl);function Fl(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Il=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),jl=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Ul=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Hl=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Wl=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Vl=w`<span class=${Ze.separator}>/</span>`;class ql extends ot(I){static styles=[I.styles];static properties={ariaLabel:{type:String}};constructor(){super(),Be(jl,Hl,Ul,Il,Wl),this.ariaLabel=E._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,n)=>{if(typeof o=="string"){const i=n===this.children.length-1;return w`<span class=${Ze.text} aria-current=${i?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?Ze.link:Ze.text),o});this._children=Fl(r,Vl)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${Ze.a11y}>${this.ariaLabel}</h2>
        <div class=${Ze.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",ql);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},J=function(t,e,r,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(t,r):n?n.value=r:e.set(t,r),r};function oo(t){var e,r,o,n,i,s,a,l,u,p,d,m,c,f,h,b,S,A;class C extends t{constructor(...y){var L,O,M;super(...y),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),n.set(this,!1),i.set(this,void 0),s.set(this,void 0),a.set(this,!0),l.set(this,""),u.set(this,()=>{J(this,n,!0,"f"),J(this,r,!0,"f"),R(this,e,"m",h).call(this)}),p.set(this,()=>{J(this,r,!1,"f"),R(this,e,"m",b).call(this,this.shouldFormValueUpdate()?R(this,l,"f"):""),!this.validity.valid&&R(this,n,"f")&&J(this,o,!0,"f");const U=R(this,e,"m",h).call(this);this.validationMessageCallback&&this.validationMessageCallback(U?this.internals.validationMessage:"")}),d.set(this,()=>{var U;R(this,a,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),J(this,a,!1,"f")),J(this,n,!0,"f"),J(this,o,!0,"f"),R(this,e,"m",h).call(this),(U=this===null||this===void 0?void 0:this.validationMessageCallback)===null||U===void 0||U.call(this,this.showError?this.internals.validationMessage:"")}),m.set(this,void 0),c.set(this,!1),f.set(this,Promise.resolve()),(L=this.addEventListener)===null||L===void 0||L.call(this,"focus",R(this,u,"f")),(O=this.addEventListener)===null||O===void 0||O.call(this,"blur",R(this,p,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",R(this,d,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const y=this.validators.map(M=>M.attribute).flat(),L=super.observedAttributes||[];return[...new Set([...L,...y])]}static getValidator(y){return this.validators.find(L=>L.attribute===y)||null}static getValidators(y){return this.validators.filter(L=>{var O;if(L.attribute===y||!((O=L.attribute)===null||O===void 0)&&O.includes(y))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",h).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(y,L,O){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,y,L,O);const H=this.constructor.getValidators(y);H?.length&&this.validationTarget&&this.setValue(R(this,l,"f"))}setValue(y){var L;J(this,o,!1,"f"),(L=this.validationMessageCallback)===null||L===void 0||L.call(this,""),J(this,l,y,"f");const M=this.shouldFormValueUpdate()?y:null;this.internals.setFormValue(M),R(this,e,"m",b).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),R(this,e,"m",h).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(y=>y(R(this,f,"f")))}formResetCallback(){var y,L;J(this,n,!1,"f"),J(this,o,!1,"f"),R(this,e,"m",h).call(this),(y=this.resetFormControl)===null||y===void 0||y.call(this),(L=this.validationMessageCallback)===null||L===void 0||L.call(this,R(this,e,"m",h).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,m=new WeakMap,c=new WeakMap,f=new WeakMap,e=new WeakSet,h=function(){if(this.hasAttribute("disabled"))return!1;const y=R(this,o,"f")||R(this,n,"f")&&!this.validity.valid&&!R(this,r,"f");return y&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),y},b=function(y){const L=this.constructor,O={},M=L.validators,U=[],H=M.some(B=>B.isValid instanceof Promise);R(this,c,"f")||(J(this,f,new Promise(B=>{J(this,m,B,"f")}),"f"),J(this,c,!0,"f")),R(this,i,"f")&&(R(this,i,"f").abort(),J(this,s,R(this,i,"f"),"f"));const K=new AbortController;J(this,i,K,"f");let W,se=!1;M.length&&(M.forEach(B=>{const G=B.key||"customError",X=B.isValid(this,y,K.signal);X instanceof Promise?(U.push(X),X.then(Y=>{Y!=null&&(O[G]=!Y,W=R(this,e,"m",A).call(this,B,y),R(this,e,"m",S).call(this,O,W))})):(O[G]=!X,this.validity[G]!==!X&&(se=!0),!X&&!W&&(W=R(this,e,"m",A).call(this,B,y)))}),Promise.allSettled(U).then(()=>{var B;K?.signal.aborted||(J(this,c,!1,"f"),(B=R(this,m,"f"))===null||B===void 0||B.call(this))}),(se||!H)&&R(this,e,"m",S).call(this,O,W))},S=function(y,L){if(this.validationTarget)this.internals.setValidity(y,L,this.validationTarget),J(this,a,!1,"f");else{if(this.internals.setValidity(y,L),this.internals.validity.valid)return;J(this,a,!0,"f")}},A=function(y,L){if(this.validityCallback){const O=this.validityCallback(y.key||"customError");if(O)return O}return y.message instanceof Function?y.message(this,L):y.message},C}const Yl=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),Ql=JSON.parse('{"button.aria.loading":["Loading..."]}'),Xl=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Jl=JSON.parse('{"button.aria.loading":["Laster..."]}'),Zl=JSON.parse('{"button.aria.loading":["Laddar ..."]}');var Kl=Object.defineProperty,ue=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Kl(e,r,n),n};const Io=["primary","secondary","negative","utility","pill","link"];class le extends oo(ot(j)){constructor(){super(),this.type="button",Be(Ql,Jl,Xl,Yl,Zl),this.variant="secondary",this.ariaValueTextLoading=E._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...I.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Bt,zn]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!Io.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${Io.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.primary,this.small&&!this.quiet&&!this.loading&&T.primarySmall,this.small&&this.quiet&&!this.loading&&T.primarySmallQuiet,this.small&&this.loading&&(this.quiet?T.primarySmallQuietLoading:T.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&T.primaryQuiet,!this.small&&this.loading&&(this.quiet?T.primaryQuietLoading:T.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.secondary,this.small&&!this.quiet&&!this.loading&&T.secondarySmall,this.small&&this.loading&&(this.quiet?T.secondarySmallQuietLoading:T.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&T.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&T.secondaryQuiet,!this.small&&this.loading&&(this.quiet?T.secondaryQuietLoading:T.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.utility,this.small&&!this.quiet&&!this.loading&&T.utilitySmall,this.small&&this.quiet&&!this.loading&&T.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?T.utilitySmallQuietLoading:T.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&T.utilityQuiet,!this.small&&this.loading&&(this.quiet?T.utilityQuietLoading:T.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.negative,this.small&&!this.quiet&&!this.loading&&T.negativeSmall,this.small&&this.quiet&&!this.loading&&T.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?T.negativeSmallQuietLoading:T.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&T.negativeQuiet,!this.small&&this.loading&&(this.quiet?T.negativeQuietLoading:T.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?T.pillSmall:T.pill),this.loading&&(this.small?T.pillSmallLoading:T.pillLoading)]}get _linkClasses(){return[this.small?T.linkSmall:T.link]}get _classes(){return z(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&T.linkAsButton,this.fullWidth?T.fullWidth:T.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}ue([k({reflect:!0})],le.prototype,"type");ue([k({type:Boolean,reflect:!0})],le.prototype,"autofocus");ue([k({reflect:!0})],le.prototype,"variant");ue([k({type:Boolean,reflect:!0})],le.prototype,"quiet");ue([k({type:Boolean,reflect:!0})],le.prototype,"small");ue([k({type:Boolean,reflect:!0})],le.prototype,"loading");ue([k({reflect:!0})],le.prototype,"href");ue([k({reflect:!0})],le.prototype,"target");ue([k({reflect:!0})],le.prototype,"rel");ue([k({type:Boolean,reflect:!0})],le.prototype,"fullWidth");ue([k({reflect:!0})],le.prototype,"buttonClass");ue([k({reflect:!0})],le.prototype,"name");ue([k({reflect:!0})],le.prototype,"value");customElements.get("w-button")||customElements.define("w-button",le);const Gl=JSON.parse('{"card.button.text":["Vælg"]}'),ec=JSON.parse('{"card.button.text":["Select"]}'),tc=JSON.parse('{"card.button.text":["Valitse"]}'),rc=JSON.parse('{"card.button.text":["Velg"]}'),oc=JSON.parse('{"card.button.text":["Välj"]}'),nc=ee`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var ic=Object.defineProperty,no=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&ic(e,r,n),n};const ve={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},jo={ENTER:"Enter",SPACE:" "};class pr extends j{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Be(ec,rc,tc,Gl,oc),this.buttonText=E._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Bt,nc,ee`
      a::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      :host {
        display: block;
      }
    `]}get _containerClasses(){return z([ve.base,this.flat?ve.flat:ve.shadow,this.selected&&!this.flat&&ve.selected,this.selected&&this.flat?ve.flatSelected:ve.flatUnselected])}get _outlineClasses(){return z([ve.outline,this.selected?ve.outlineSelected:ve.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${ve.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===jo.ENTER||e.key===jo.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${q(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}no([k({type:Boolean,reflect:!0})],pr.prototype,"selected");no([k({type:Boolean})],pr.prototype,"flat");no([k({type:Boolean})],pr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",pr);var sc={},Gn=["en","nb","fi","da","sv"],ei="en",ac=()=>{var t;let e;switch((t=process==null?void 0:sc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ti=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ei},Er=t=>Gn.find(e=>t===e||t.toLowerCase().includes(e))||ti();function lc(){var t;if(typeof window>"u"){const e=ac();return Er(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ti();return Gn.includes(e)?Er(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Er(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ei}}var cc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,dc=(t,e,r,o,n)=>{const i=lc(),s=cc(i,t,e,r,o,n);E.load(i,s),E.activate(i)},vt={nb:{"icon.title.chevron-down":["Nedoverpil"]},en:{"icon.title.chevron-down":["Downward arrow"]},fi:{"icon.title.chevron-down":["Nuoli alaspäin"]},da:{"icon.title.chevron-down":["Pil nedad"]},sv:{"icon.title.chevron-down":["Pil ned"]}};dc(vt.en,vt.nb,vt.fi,vt.da,vt.sv);var uc=class extends j{render(){const t=E.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",uc);var hc={},ri=["en","nb","fi","da","sv"],oi="en",pc=()=>{var t;let e;switch((t=process==null?void 0:hc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ni=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":oi},Cr=t=>ri.find(e=>t===e||t.toLowerCase().includes(e))||ni();function fc(){var t;if(typeof window>"u"){const e=pc();return Cr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ni();return ri.includes(e)?Cr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Cr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),oi}}var gc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,mc=(t,e,r,o,n)=>{const i=fc(),s=gc(i,t,e,r,o,n);E.load(i,s),E.activate(i)},wt={nb:{"icon.title.chevron-up":["Oppoverpil"]},en:{"icon.title.chevron-up":["Upward arrow"]},fi:{"icon.title.chevron-up":["Nuoli ylöspäin"]},da:{"icon.title.chevron-up":["Pil opad"]},sv:{"icon.title.chevron-up":["Pil upp"]}};mc(wt.en,wt.nb,wt.fi,wt.da,wt.sv);var bc=class extends j{render(){const t=E.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",bc);const vc=ee`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var wc=Object.defineProperty,be=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&wc(e,r,n),n};const yc={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},oe={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class pe extends j{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Bt,vc,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return z([oe.wrapper,this.box&&oe.box,this.bleed&&oe.bleed])}get#t(){return z(this.buttonClass,[oe.button,this.box&&oe.buttonBox])}get#n(){return z([oe.chevron,!this.box&&oe.chevronNonBox])}get#r(){const e=z([oe.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&oe.elementsChevronCollapse]),r=z([oe.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&oe.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return z(this.contentClass,[this.box&&yc.base,this._hasTitle&&this.box&&oe.contentWithTitle])}get#i(){return z([oe.expansion,!this.expanded&&oe.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return w` <div class="${this.#e}">
      ${this._hasTitle?w`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${oe.title}">
                ${this.title?w`<span class="${oe.titleType}">${this.title}</span>`:w`<slot name="title"></slot>`}
                ${this.noChevron?"":w`<div class="${this.#n}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#i}" aria-hidden=${q(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}be([k({type:Boolean,reflect:!0})],pe.prototype,"expanded");be([k({type:String})],pe.prototype,"title");be([k({type:Boolean})],pe.prototype,"box");be([k({type:Boolean})],pe.prototype,"bleed");be([k({attribute:"button-class",type:String})],pe.prototype,"buttonClass");be([k({attribute:"content-class",type:String})],pe.prototype,"contentClass");be([k({attribute:"no-chevron",type:Boolean})],pe.prototype,"noChevron");be([k({type:Boolean})],pe.prototype,"animated");be([k({attribute:"heading-level",type:Number})],pe.prototype,"headingLevel");be([k({type:Boolean,state:!0})],pe.prototype,"_hasTitle");be([k({type:Boolean,state:!0})],pe.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",pe);const ii=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},si=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(n=>n.patchClose))o._close=()=>this.close()}};class xc extends ii(si(j)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=ee`
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
  `}}const $c=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),kc=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],_c={easing:"ease",duration:300};let ai=!1;const Sc=typeof window<"u";if(Sc){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>ai=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class Ec{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:n=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||kc,this.shouldReduceMotion=n}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator($c(this.first,this.last))}get defaults(){return _c}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?ai?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var Cc={},li=["en","nb","fi","da","sv"],ci="en",Ac=()=>{var t;let e;switch((t=process==null?void 0:Cc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},di=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ci},Ar=t=>li.find(e=>t===e||t.toLowerCase().includes(e))||di();function Lc(){var t;if(typeof window>"u"){const e=Ac();return Ar(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=di();return li.includes(e)?Ar(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ar(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ci}}var Oc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Tc=(t,e,r,o,n)=>{const i=Lc(),s=Oc(i,t,e,r,o,n);E.load(i,s),E.activate(i)},yt={nb:{"icon.title.arrow-left":["Pil som peker mot venstre"]},en:{"icon.title.arrow-left":["Leftward-pointing arrow"]},fi:{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]},da:{"icon.title.arrow-left":["Pil til venstre"]},sv:{"icon.title.arrow-left":["Pil som pekar vänster"]}};Tc(yt.en,yt.nb,yt.fi,yt.da,yt.sv);var Pc=class extends j{render(){const t=E.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Pc);const Dc=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Bc=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Nc=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Mc=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Rc=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var zc=Object.defineProperty,Mt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&zc(e,r,n),n};class st extends ii(j){constructor(){super(),this._hasTopContent=!1,Be(Bc,Mc,Nc,Dc,Rc)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new Ec(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${E._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:F}get closeButton(){return this.noClose?F:w`<button
      type="button"
      aria-label="${E._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=ee`
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
  `}}Mt([k({type:String})],st.prototype,"title");Mt([k({type:Boolean})],st.prototype,"back");Mt([k({type:Boolean,attribute:"no-close"})],st.prototype,"noClose");Mt([Ks()],st.prototype,"_hasTopContent");Mt([lr(".title-el")],st.prototype,"titleEl");let St=[];const io={documentElement:{},body:{}},Fc=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),ui=t=>{t.touches.length>1||t.preventDefault?.()},Ic=t=>([e,r])=>{io[t][e]=document[t].style[e],document[t].style[e]=r},jc=()=>Object.entries(Fc).forEach(([t,e])=>{Object.entries(e).forEach(Ic(t))}),Uc=t=>([e,r])=>{document[t].style[e]=io[t][e]},Hc=()=>Object.entries(io).forEach(([t,e])=>{Object.entries(e).forEach(Uc(t))}),Wc=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Vc(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const n=o.targetTouches[0].clientY-e;return t.scrollTop===0&&n>0||Wc(t)&&n<0?ui(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function qc(t){t.ontouchstart=null,t.ontouchmove=null}const hi=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",ui,{passive:!1}),Yc=hi(!0),Qc=hi();function Xc(t){if(!t)throw Error("Could not run setup, an element must be provided");St.some(e=>e===t)||(St.length||(jc(),Yc()),Vc(t),St.push(t))}function Jc(){St.forEach(qc),Qc(),Hc(),St=[]}var Zc=Object.defineProperty,at=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Zc(e,r,n),n};class Ve extends si(j){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Xc(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Jc(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[ee`
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
    `]}}at([k({type:Boolean})],Ve.prototype,"show");at([k({type:String,attribute:"content-id"})],Ve.prototype,"contentId");at([k({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ve.prototype,"ignoreBackdropClicks");at([lr(".dialog-el")],Ve.prototype,"dialogEl");at([lr(".dialog-inner-el")],Ve.prototype,"dialogInnerEl");at([lr(".content-el")],Ve.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ve),customElements.define("w-modal-header",st),customElements.define("w-modal-footer",xc));const Kc=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Gc=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),ed=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),td=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),rd=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class od extends ot(I){static styles=[I.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Be(Gc,td,ed,Kc,rd),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=E._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=E._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return z([ce.button,ce.label,this.suggestion?ce.suggestion:ce.filter,this.canClose?ce.labelWithClose:ce.labelWithoutClose])}get _closeClasses(){return z([ce.button,ce.close,this.suggestion?ce.suggestion:ce.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${ce.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${ce.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${ce.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",od);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(t,e,r){return t?e(t):r?.(t)}const nd=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),id=JSON.parse('{"select.label.optional":["(optional)"]}'),sd=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),ad=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),ld=JSON.parse('{"select.label.optional":["(valfritt)"]}');class cd extends oo(ot(I)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[I.styles];constructor(){super(),Be(id,ad,sd,nd,ld),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return z([ke.base,!this.invalid&&!this.disabled&&!this.readOnly&&ke.default,this.invalid&&ke.invalid,this.disabled&&ke.disabled,this.readOnly&&ke.readOnly])}get#t(){return z([Ge.base,this.invalid?Ge.colorInvalid:Ge.color])}get#n(){return z([ke.chevron,this.disabled&&ke.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${ke.wrapper}">
      ${It(this.label,()=>w`<label class="${Pr.base}" for="${this.#r}">
            ${this.label}
            ${It(this.optional,()=>w`<span class="${Pr.optional}"
                  >${E._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${ke.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${q(this.#o)}"
          aria-invalid="${q(this.invalid)}"
          aria-errormessage="${q(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${qr(this._options)}
        </select>
        <div class="${this.#n}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${It(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",cd);var dd=Object.defineProperty,Z=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&dd(e,r,n),n};class Q extends oo(j){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...I.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[Bt,zn]}get _inputstyles(){return z([Ce.base,this._hasSuffix&&Ce.suffix,this._hasPrefix&&Ce.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Ce.default,this.invalid&&!this.disabled&&!this.readOnly&&Ce.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Ce.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Ce.readOnly])}get _helptextstyles(){return z([Ge.base,this.invalid?Ge.colorInvalid:Ge.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Pr.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const n=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(n)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Ce.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputstyles}"
          type="${this.type}"
          min="${q(this.min)}"
          max="${q(this.max)}"
          size="${q(this.size)}"
          minlength="${q(this.minLength)}"
          maxlength="${q(this.maxLength)}"
          name="${q(this.name)}"
          pattern="${q(this.pattern)}"
          placeholder="${q(this.placeholder)}"
          value="${q(this.value)}"
          aria-describedby="${q(this._helpId)}"
          aria-errormessage="${q(this._error)}"
          aria-invalid="${q(this.invalid)}"
          id="${this._id}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          ?required="${this.required}"
          @blur="${this.handler}"
          @change="${this.handler}"
          @focus="${this.handler}" />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText&&w`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}Z([k({type:Boolean,reflect:!0})],Q.prototype,"disabled");Z([k({type:Boolean,reflect:!0})],Q.prototype,"invalid");Z([k({type:String,reflect:!0})],Q.prototype,"id");Z([k({type:String,reflect:!0})],Q.prototype,"label");Z([k({type:String,reflect:!0})],Q.prototype,"helpText");Z([k({type:String,reflect:!0})],Q.prototype,"size");Z([k({type:Number,reflect:!0})],Q.prototype,"max");Z([k({type:Number,reflect:!0})],Q.prototype,"min");Z([k({type:Number,reflect:!0,attribute:"min-length"})],Q.prototype,"minLength");Z([k({type:Number,reflect:!0,attribute:"max-length"})],Q.prototype,"maxLength");Z([k({type:String,reflect:!0})],Q.prototype,"pattern");Z([k({type:String,reflect:!0})],Q.prototype,"placeholder");Z([k({type:Boolean,reflect:!0,attribute:"read-only"})],Q.prototype,"readOnly");Z([k({type:Boolean,reflect:!0})],Q.prototype,"required");Z([k({type:String,reflect:!0})],Q.prototype,"type");Z([k({type:String,reflect:!0})],Q.prototype,"value");Z([k({type:String,reflect:!0})],Q.prototype,"name");Z([k({type:Boolean})],Q.prototype,"_hasPrefix");Z([k({type:Boolean})],Q.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",Q);const fr=typeof window<"u";function ud(t,e){if(!fr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function hd(t){return fr?customElements.get("w-toast-container").init().del(t):void 0}function pd(t,e){if(!fr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:fd}=Ni,Uo=()=>document.createComment(""),xt=(t,e,r)=>{const o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=o.insertBefore(Uo(),n),s=o.insertBefore(Uo(),n);r=new fd(i,s,t,t.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==t;if(a){let l;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(l=t._$AU)!==s._$AU&&r._$AP(l)}if(i!==n||a){let l=r._$AA;for(;l!==i;){const u=l.nextSibling;o.insertBefore(l,n),l=u}}}return r},ze=(t,e,r=t)=>(t._$AI(e,r),t),gd={},md=(t,e=gd)=>t._$AH=e,bd=t=>t._$AH,Lr=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ho=(t,e,r)=>{const o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},vd=nn(class extends sn{constructor(t){if(super(t),t.type!==on.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const n=[],i=[];let s=0;for(const a of t)n[s]=o?o(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const n=bd(t),{values:i,keys:s}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=s,i;const a=this.ut??=[],l=[];let u,p,d=0,m=n.length-1,c=0,f=i.length-1;for(;d<=m&&c<=f;)if(n[d]===null)d++;else if(n[m]===null)m--;else if(a[d]===s[c])l[c]=ze(n[d],i[c]),d++,c++;else if(a[m]===s[f])l[f]=ze(n[m],i[f]),m--,f--;else if(a[d]===s[f])l[f]=ze(n[d],i[f]),xt(t,l[f+1],n[d]),d++,f--;else if(a[m]===s[c])l[c]=ze(n[m],i[c]),xt(t,n[d],n[m]),m--,c++;else if(u===void 0&&(u=Ho(s,c,f),p=Ho(a,d,m)),u.has(a[d]))if(u.has(a[m])){const h=p.get(s[c]),b=h!==void 0?n[h]:null;if(b===null){const S=xt(t,n[d]);ze(S,i[c]),l[c]=S}else l[c]=ze(b,i[c]),xt(t,n[d],b),n[h]=null;c++}else Lr(n[m]),m--;else Lr(n[d]),d++;for(;c<=f;){const h=xt(t,l[f+1]);ze(h,i[c]),l[c++]=h}for(;d<=m;){const h=n[d++];h!==null&&Lr(h)}return this.ut=s,md(t,l),Te}});class pi extends I{static styles=[I.styles,ee`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const n of this._toasts)Date.now()<=n[1].duration?e.push(n):r.push(n);const o=[];for(const[n]of r){const i=this.renderRoot.querySelector(`#${n}`);o.push(i.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${br.wrapper}">
        <div class="${br.base}" id="w-toast-container-list">
          ${vd(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${br.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",pi);const so=typeof window<"u";let fi=!0;if(so){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>fi=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const gi=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},mi=t=>{const e=fi?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},wd=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},yd=t=>()=>{t&&t()},bi=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=wd(t,e);gi(t),t.style.height="auto";let n=t.scrollHeight;if(so&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",mi(t),requestAnimationFrame(()=>t.style.height=n+"px")}),r)return r},vi=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=yd(e);gi(t);let n=t.scrollHeight;if(so&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=n+"px",t.style.transitionTimingFunction="ease-in",mi(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},xd=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),$d=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),kd=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),_d=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Sd=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Ae={success:"success",error:"error",warning:"warning"};class Ed extends I{static styles=[I.styles,ee`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Be($d,_d,kd,xd,Sd),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&bi(this._wrapper,()=>this._expanded=!0)}get#e(){return z([fe.base,this.type===Ae.success&&fe.positive,this.type===Ae.warning&&fe.warning,this.type===Ae.error&&fe.negative])}get#t(){return z([fe.iconBase,this.type===Ae.success&&fe.iconPositive,this.type===Ae.warning&&fe.iconWarning,this.type===Ae.error&&fe.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Ae.warning}get _error(){return this.type===Ae.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?E._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?E._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):E._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?vi(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${fe.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${fe.content}">
          <p>${this.text}</p>
        </div>
        ${It(this.canclose===!0,()=>w`
            <button class="${fe.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",Ed);class Cd extends I{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&bi(this._wrapper),!this.show&&!this._removeElement&&vi(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[I.styles,ee`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${q(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Cd);class Ad extends I{static properties={level:{type:Number}};static styles=[I.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?qr(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Ad);var Ld={},wi=["en","nb","fi","da","sv"],yi="en",Od=()=>{var t;let e;switch((t=process==null?void 0:Ld)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},xi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":yi},Or=t=>wi.find(e=>t===e||t.toLowerCase().includes(e))||xi();function Td(){var t;if(typeof window>"u"){const e=Od();return Or(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=xi();return wi.includes(e)?Or(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Or(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),yi}}var Pd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Dd=(t,e,r,o,n)=>{const i=Td(),s=Pd(i,t,e,r,o,n);E.load(i,s),E.activate(i)},$t={nb:{"icon.title.bag":["Veske"]},en:{"icon.title.bag":["Handbag"]},fi:{"icon.title.bag":["Käsilaukku"]},da:{"icon.title.bag":["Håndtaske"]},sv:{"icon.title.bag":["Handväska"]}};Dd($t.en,$t.nb,$t.fi,$t.da,$t.sv);var Bd=class extends j{render(){const t=E.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",Bd);fr&&(window.WarpToastContainer=pi,window.toast=ud,window.updateToast=pd,window.removeToast=hd);const Nd={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Md extends I{static styles=[I.styles,ee`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Nd;return w`
      <nav class="sidebar p-24 s-bg-subtle mr-12">
        <h2>
          <a href="${e.href}" class="no-underline py-2">${e.title}</a>
        </h2>

        <ul class="py-8">
          ${this.renderItems(r)}
        </ul>
      </nav>
    `}renderItems(e){return e.map(r=>w`
        <li>
          ${r.href?w`<a class="no-underline py-2 px-16 text-m" href="${r.href}">${r.title}</a>`:w`<span class="pt-2 text-m font-bold">${r.title}</span>`}
          ${r.items?w`<ul class="py-4">
                ${this.renderItems(r.items)}
              </ul>`:""}
        </li>
      `)}}customElements.define("sidebar-element",Md);
