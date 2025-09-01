(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,Dr=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pr=Symbol(),oo=new WeakMap;let Ro=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Dr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=oo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&oo.set(r,e))}return e}toString(){return this.cssText}};const Fo=t=>new Ro(typeof t=="string"?t:t+"",void 0,Pr),te=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new Ro(r,t,Pr)},vi=(t,e)=>{if(Dr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),n=Nt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},no=Dr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Fo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wi,defineProperty:yi,getOwnPropertyDescriptor:xi,getOwnPropertyNames:$i,getOwnPropertySymbols:ki,getPrototypeOf:_i}=Object,rr=globalThis,io=rr.trustedTypes,Si=io?io.emptyScript:"",Ei=rr.reactiveElementPolyfillSupport,yt=(t,e)=>t,Bt={toAttribute(t,e){switch(e){case Boolean:t=t?Si:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Nr=(t,e)=>!wi(t,e),so={attribute:!0,type:String,converter:Bt,reflect:!1,useDefault:!1,hasChanged:Nr};Symbol.metadata??=Symbol("metadata"),rr.litPropertyMetadata??=new WeakMap;let Qe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=so){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&yi(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){const{get:n,set:i}=xi(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:n,set(s){const a=n?.call(this);i?.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??so}static _$Ei(){if(this.hasOwnProperty(yt("elementProperties")))return;const e=_i(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yt("properties"))){const r=this.properties,o=[...$i(r),...ki(r)];for(const n of o)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)r.unshift(no(n))}else e!==void 0&&r.push(no(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Bt).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Bt;this._$Em=n;const a=s.fromAttribute(r,i.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){const n=this.constructor,i=this[e];if(o??=n.getPropertyOptions(e),!((o.hasChanged??Nr)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:n,wrapped:i},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??r??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o){const{wrapped:s}=i,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},Qe[yt("elementProperties")]=new Map,Qe[yt("finalized")]=new Map,Ei?.({ReactiveElement:Qe}),(rr.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=globalThis,Rt=Mr.trustedTypes,ao=Rt?Rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Br="$lit$",ye=`lit$${Math.random().toFixed(9).slice(2)}$`,Rr="?"+ye,Ci=`<${Rr}>`,Fe=document,$t=()=>Fe.createComment(""),kt=t=>t===null||typeof t!="object"&&typeof t!="function",Fr=Array.isArray,Io=t=>Fr(t)||typeof t?.[Symbol.iterator]=="function",dr=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lo=/-->/g,co=/>/g,De=RegExp(`>|${dr}(?:([^\\s"'>=/]+)(${dr}*=${dr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uo=/'/g,ho=/"/g,jo=/^(?:script|style|textarea|title)$/i,Ai=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=Ai(1),Ce=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),po=new WeakMap,Be=Fe.createTreeWalker(Fe,129);function zo(t,e){if(!Fr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ao!==void 0?ao.createHTML(e):e}const Uo=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=it;for(let a=0;a<r;a++){const l=t[a];let u,p,d=-1,m=0;for(;m<l.length&&(s.lastIndex=m,p=s.exec(l),p!==null);)m=s.lastIndex,s===it?p[1]==="!--"?s=lo:p[1]!==void 0?s=co:p[2]!==void 0?(jo.test(p[2])&&(n=RegExp("</"+p[2],"g")),s=De):p[3]!==void 0&&(s=De):s===De?p[0]===">"?(s=n??it,d=-1):p[1]===void 0?d=-2:(d=s.lastIndex-p[2].length,u=p[1],s=p[3]===void 0?De:p[3]==='"'?ho:uo):s===ho||s===uo?s=De:s===lo||s===co?s=it:(s=De,n=void 0);const c=s===De&&t[a+1].startsWith("/>")?" ":"";i+=s===it?l+Ci:d>=0?(o.push(u),l.slice(0,d)+Br+l.slice(d)+ye+c):l+ye+(d===-2?a:c)}return[zo(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class _t{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const a=e.length-1,l=this.parts,[u,p]=Uo(e,r);if(this.el=_t.createElement(u,o),Be.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=Be.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Br)){const m=p[s++],c=n.getAttribute(d).split(ye),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:f[2],strings:c,ctor:f[1]==="."?Wo:f[1]==="?"?Vo:f[1]==="@"?qo:Lt}),n.removeAttribute(d)}else d.startsWith(ye)&&(l.push({type:6,index:i}),n.removeAttribute(d));if(jo.test(n.tagName)){const d=n.textContent.split(ye),m=d.length-1;if(m>0){n.textContent=Rt?Rt.emptyScript:"";for(let c=0;c<m;c++)n.append(d[c],$t()),Be.nextNode(),l.push({type:2,index:++i});n.append(d[m],$t())}}}else if(n.nodeType===8)if(n.data===Rr)l.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(ye,d+1))!==-1;)l.push({type:7,index:i}),d+=ye.length-1}i++}}static createElement(e,r){const o=Fe.createElement("template");return o.innerHTML=e,o}}function Ie(t,e,r=t,o){if(e===Ce)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=kt(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=Ie(t,n._$AS(t,e.values),n,o)),e}let Ho=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??Fe).importNode(r,!0);Be.currentNode=n;let i=Be.nextNode(),s=0,a=0,l=o[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new et(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new Qo(i,this,e)),this._$AV.push(u),l=o[++a]}s!==l?.index&&(i=Be.nextNode(),s++)}return Be.currentNode=Fe,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}};class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ie(this,e,r),kt(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Ce&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Io(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Fe.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=_t.createElement(zo(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Ho(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=po.get(e.strings);return r===void 0&&po.set(e.strings,r=new _t(e)),r}k(e){Fr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new et(this.O($t()),this.O($t()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=Ie(this,e,r,0),s=!kt(e)||e!==this._$AH&&e!==Ce,s&&(this._$AH=e);else{const a=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Ie(this,a[o+l],r,l),u===Ce&&(u=this._$AH[l]),s||=!kt(u)||u!==this._$AH[l],u===I?e=I:e!==I&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!n&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Wo extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Vo extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class qo extends Lt{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=Ie(this,e,r,0)??I)===Ce)return;const o=this._$AH,n=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==I&&(o===I||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Qo{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}}const Li={M:Br,P:ye,A:Rr,C:1,L:Uo,R:Ho,D:Io,V:Ie,I:et,H:Lt,N:Vo,U:qo,B:Wo,F:Qo},Ti=Mr.litHtmlPolyfillSupport;Ti?.(_t,et),(Mr.litHtmlVersions??=[]).push("3.3.1");const Oi=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new et(e.insertBefore($t(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir=globalThis;let Q=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oi(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ce}};Q._$litElement$=!0,Q.finalized=!0,Ir.litElementHydrateSupport?.({LitElement:Q});const Di=Ir.litElementPolyfillSupport;Di?.({LitElement:Q});(Ir.litElementVersions??=[]).push("4.2.1");function Pi(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const fo=String.raw`[A-Za-z][^/\s>]*`,Ni=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Mi=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Jo=String.raw`${Ni}|${Mi}`,Bi=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ri=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Fi=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Ii=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,ji=String.raw`${Bi}|${Ri}|${Fi}`,zi=String.raw`(?<attrName>${Ii})(?:\s*=\s*(?:${ji}))?`,Ui=String.raw`${Jo}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Yo=String.raw`(?<attrSpace>\s*)(?:${zi}|(?<attrText>${Ui}))`,Hi={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${fo})(?<attrs>(?:${Yo})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${fo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Jo}|['"]`,wildcard:String.raw`.`},Wi=Object.entries(Hi).map(([t,e])=>`(?<${t}>${e})`).join("|");function*Vi(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const qi=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function St(t,e="  ",r=80){const o=new RegExp(Wi,"gys"),n=new RegExp(Yo,"gy"),i=[];let s=null,a=0,l=0,u="",p=0,d="";const m=()=>{if(d&&d!=`
`){const _=u.indexOf(`
`),C=_==-1?u.length:_;l+d.length+C>r&&(d=`
`)}const h=d==`
`&&u?e.repeat(p):"",b=`${d}${h}${u}`;if(b){const _=b.lastIndexOf(`
`);_==-1?l+=b.length:l=b.length-_-1,i.push(b)}u=d=""},c=(...h)=>{for(const b of h)!s&&/^\s+$/.test(b)?(m(),d=b):(u||(p=a),u+=b)};for(const h of Vi(o,t)){if(St.__strict&&h.groups.wildcard)throw new Error("Unexpected wildcard");if(h.groups.endTag){const b=h.groups.endTagName.toLowerCase();b==s&&(s=null),s||(--a,c(`</${b}>`))}if(s)c(h[0]);else if(h.groups.space)c(...h[0].match(/\n/g)?.slice(0,2)??[" "]);else if(h.groups.comment||h.groups.dtd||h.groups.text||h.groups.wildcard)c(h[0]);else if(h.groups.startTag){const b=h.groups.startTagName.toLowerCase();if(c(`<${b}`),++a,h.groups.attrs){let{lastIndex:C}=n,E,M;for(;E=n.exec(h.groups.attrs);){if({lastIndex:C}=n,St.__strict&&E.groups.attrText)throw new Error("Unexpected attr text");E.groups.attrText?(E.groups.attrSpace&&c(/\n/.test(E.groups.attrSpace)?`
`:" "),c(E.groups.attrText)):((E.groups.attrSpace||!M?.groups.attrText)&&c(/\n/.test(E.groups.attrSpace)?`
`:" "),c(`${E.groups.attrName}${E.groups.quotedAttrValue?`="${E.groups.quotedAttrValue}"`:E.groups.singleQuotedAttrValue?`='${E.groups.singleQuotedAttrValue}'`:E.groups.unquotedAttrValue?`=${E.groups.unquotedAttrValue}`:""}`)),M=E}if(C!=h.groups.attrs.length)throw new Error("Failed to parse attributes")}const _=!!h.groups.closingSlash;c(_?" />":">"),_||qi.has(b)?--a:["pre","textarea","script","style"].includes(b)&&(s=b)}}m();let f=!1;for(;/^\s+$/.test(i[i.length-1]);){const h=i.pop();/\n/.test(h)&&(f=!0)}return f&&i.push(`
`),i.join("")}St.default=St;var Qi=St;const Ji=Pi(Qi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xo=t=>(...e)=>({_$litDirective$:t,values:e});let Go=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Sr=class extends Go{constructor(e){if(super(e),this.it=I,e.type!==Ko.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===Ce)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Sr.directiveName="unsafeHTML",Sr.resultType=1;const jr=Xo(Sr);class Yi extends Q{static styles=te`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(n=>n.nodeType===Node.TEXT_NODE?n.textContent:n.outerHTML).join("").trim();r=Ji(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${jr(this.source)}</code></pre>`}}customElements.define("syntax-highlight",Yi);var F=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?F.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(n){return o[n]?n:""}):"")},[]).join(" ")};const Pe={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},Je={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},ae={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},fe={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},ur={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},ue={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},ee={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"},Se="font-bold focusable justify-center transition-colors ease-in-out",H={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},D={primary:`border-0 rounded-8 ${Se}`,secondary:`border-2 rounded-8 ${Se}`,utility:`border rounded-4 ${Se}`,negative:`border-0 rounded-8 ${Se}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Se}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${H.link}`},k={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},$={medium:"text-m leading-[24]",xsmall:"text-xs"},x={inProgress:`border-transparent animate-inprogress pointer-events-none ${H.loading}`,quiet:`border-0 rounded-8 ${Se}`,utilityQuiet:`border-0 rounded-4 ${Se}`,negativeQuiet:`border-0 rounded-8 ${Se}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${H.disabled}`},T={secondary:`${k.medium} ${$.medium} ${D.secondary} ${H.secondary}`,secondaryHref:`${k.medium} ${$.medium} ${D.secondary} ${H.secondary}`,secondaryDisabled:`${k.medium} ${$.medium} ${D.secondary} ${x.isDisabled}`,secondarySmall:`${$.xsmall} ${k.xsmall} ${D.secondary} ${H.secondary}`,secondarySmallDisabled:`${$.xsmall} ${k.xsmall} ${D.secondary} ${x.isDisabled}`,secondaryQuiet:`${k.medium} ${$.medium} ${x.quiet} ${H.quiet}`,secondaryQuietDisabled:`${k.medium} ${$.medium} ${x.quiet} ${x.isDisabled}`,secondarySmallQuiet:`${$.xsmall} ${k.xsmall} ${x.quiet} ${H.quiet}`,secondarySmallQuietDisabled:`${$.xsmall} ${k.xsmall} ${x.quiet} ${x.isDisabled}`,secondaryLoading:`${k.medium} ${$.medium} ${D.secondary} ${x.inProgress}`,secondarySmallLoading:`${$.xsmall} ${k.xsmall}  ${D.secondary} ${x.inProgress}`,secondarySmallQuietLoading:`${$.xsmall} ${k.xsmall} ${x.quiet} ${x.inProgress}`,secondaryQuietLoading:`${k.medium} ${$.medium} ${x.quiet} ${x.inProgress}`,primary:`${k.large} ${$.medium} ${D.primary} ${H.primary}`,primaryDisabled:`${k.large} ${$.medium} ${x.isDisabled} ${D.primary}`,primarySmall:`${k.small} ${$.xsmall} ${D.primary} ${H.primary}`,primarySmallDisabled:`${k.small} ${$.xsmall} ${x.isDisabled} ${D.primary} `,primaryQuiet:`${k.large} ${$.medium} ${x.quiet} ${H.quiet}`,primaryQuietDisabled:`${k.large} ${$.medium} ${x.quiet} ${x.isDisabled}`,primarySmallQuiet:`${k.small} ${$.xsmall} ${x.quiet} ${H.quiet}`,primarySmallQuietDisabled:`${k.small} ${$.xsmall} ${x.quiet} ${x.isDisabled}`,primaryLoading:`${k.large} ${$.medium} ${x.inProgress} ${D.primary}`,primarySmallLoading:`${k.small} ${$.xsmall}  ${x.inProgress} ${D.primary}`,primarySmallQuietLoading:`${k.small} ${$.xsmall} ${x.quiet} ${x.inProgress} ${D.primary}`,primaryQuietLoading:`${k.large} ${$.medium} ${x.quiet} ${x.inProgress}`,utility:`${k.utility} ${$.medium} ${D.utility} ${H.utility}`,utilityDisabled:`${k.utility} ${$.medium} ${D.utility} ${x.isDisabled}`,utilityQuiet:`${k.large} ${$.medium} ${x.utilityQuiet} ${H.utilityQuiet}`,utilityQuietDisabled:`${k.large} ${$.medium} ${x.utilityQuiet} ${x.isDisabled}`,utilitySmall:`${k.smallUtility} ${$.xsmall} ${D.utility} ${H.utility}`,utilitySmallDisabled:`${k.smallUtility} ${$.xsmall} ${D.utility} ${x.isDisabled}`,utilitySmallQuiet:`${k.smallUtility} ${$.xsmall} ${x.utilityQuiet} ${H.utilityQuiet}`,utilitySmallQuietDisabled:`${k.smallUtility} ${$.xsmall} ${x.utilityQuiet} ${x.isDisabled}`,utilityLoading:`${k.large} ${$.medium} ${D.utility} ${x.inProgress}`,utilitySmallLoading:`${k.smallUtility} ${$.xsmall} ${D.utility} ${x.inProgress}`,utilityQuietLoading:`${k.large} ${$.medium} ${x.inProgress} ${x.utilityQuiet}`,utilitySmallQuietLoading:`${k.smallUtility} ${$.xsmall} ${x.inProgress} ${x.utilityQuiet}`,negative:`${k.large} ${$.medium} ${D.negative} ${H.destructive}`,negativeDisabled:`${k.large} ${$.medium} ${D.negative} ${x.isDisabled}`,negativeQuiet:`${k.large} ${$.medium} ${x.negativeQuiet} ${H.negativeQuiet}`,negativeQuietDisabled:`${k.large} ${$.medium} ${x.negativeQuiet}${x.isDisabled}`,negativeSmall:`${k.small} ${$.xsmall} ${D.negative} ${H.destructive}`,negativeSmallDisabled:`${k.small} ${$.xsmall} ${D.negative} ${x.isDisabled}`,negativeSmallQuiet:`${k.small} ${$.xsmall} ${x.negativeQuiet} ${H.negativeQuiet}`,negativeSmallQuietDisabled:`${k.small} ${$.xsmall} ${x.negativeQuiet} ${x.isDisabled}`,negativeLoading:`${k.large} ${$.medium} ${D.negative} ${x.inProgress}`,negativeSmallLoading:`${k.small} ${$.xsmall} ${x.inProgress} ${D.negative}`,negativeQuietLoading:`${k.large} ${$.medium} ${x.negativeQuiet} ${D.negative} ${x.inProgress}`,negativeSmallQuietLoading:`${k.small} ${$.xsmall} ${x.negativeQuiet} ${x.inProgress}`,pill:`${k.pill} ${$.medium} ${D.pill} ${H.pill}`,pillSmall:`${k.pillSmall} ${$.xsmall} ${D.pill} ${H.pill}`,pillLoading:`${k.pill} ${$.medium} ${D.pill} ${x.inProgress}`,pillSmallLoading:`${k.pillSmall} ${$.xsmall} ${D.pill} ${x.inProgress}`,link:`${k.link} ${$.medium} ${D.link}`,linkSmall:`${k.link} ${$.xsmall} ${D.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},st={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},ke={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},we={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Er={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Xe={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},Zo="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",Ki={wrapper:Zo+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Xi={wrapper:Zo+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Ye={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Ve={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${$.medium} ${D.pill} ${H.pill} justify-self-end -mr-8 ml-8`};var en={},tn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(tn);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=tn;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(c){return!c.match(/[^a-f0-9]/i)?parseInt(c,16):NaN}function o(c,f,h){const b=r(c);if(Number.isNaN(b)||h!==void 0&&h!==c.length)throw new SyntaxError(e.errorMessages.get(f));return b}function n(c){const f=o(c,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function i(c,f){const h=o(c,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const b=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(h,b)}return String.fromCharCode(h)}function s(c){return c.charAt(0)==="{"&&c.charAt(c.length-1)==="}"}function a(c){if(!s(c))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=c.slice(1,-1),h=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(h)}catch(b){throw b instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):b}}function l(c,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const h=parseInt(c,8);return String.fromCharCode(h)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function p(c){return u.get(c)||c}const d=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function m(c,f=!1){return c.replace(d,function(h,b,_,C,E,M,y,A,L){if(b!==void 0)return"\\";if(_!==void 0)return n(_);if(C!==void 0)return a(C);if(E!==void 0)return i(E,M);if(y!==void 0)return i(y);if(A==="0")return"\0";if(A!==void 0)return l(A,!f);if(L!==void 0)return p(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=m,t.default=m})(en);const Re=t=>typeof t=="string",Gi=t=>typeof t=="function",go=new Map,rn="en";function zr(t){return[...Array.isArray(t)?t:[t],rn]}function on(t,e,r){const o=zr(t);return Ft(()=>It("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Re(e)?new Date(e):e)}function Cr(t,e,r){const o=zr(t);return Ft(()=>It("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function mo(t,e,r,{offset:o=0,...n}){const i=zr(t),s=e?Ft(()=>It("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Ft(()=>It("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function Ft(t,e){const r=t();let o=go.get(r);return o||(o=e(),go.set(r,o)),o}function It(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const nn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,sn="%__lingui_octothorpe__%",Zi=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s]||{style:s},i=(s,a)=>{const l=Object.keys(r).length?n("number"):void 0,u=Cr(o,s,l);return a.replace(new RegExp(sn,"g"),u)};return{plural:(s,a)=>{const{offset:l=0}=a,u=mo(o,!1,s,a);return i(s-l,u)},selectordinal:(s,a)=>{const{offset:l=0}=a,u=mo(o,!0,s,a);return i(s-l,u)},select:es,number:(s,a)=>Cr(o,s,n(a)),date:(s,a)=>on(o,s,n(a))}},es=(t,e)=>e[t]??e.other;function ts(t,e,r){return(o={},n)=>{const i=Zi(e,r,n),s=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+sn;if(Re(d))return p+d;const[m,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([_,C])=>{h[_]=s(C,c==="plural"||c==="selectordinal")}):h=f;let b;if(c){const _=i[c];b=_(o[m],h)}else b=o[m];return b==null?p:p+b},""):l,a=s(t);return Re(a)&&nn.test(a)?en.unraw(a.trim()):Re(a)?a.trim():a?String(a):""}}var rs=Object.defineProperty,os=(t,e,r)=>e in t?rs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ns=(t,e,r)=>(os(t,e+"",r),r);let is=class{constructor(){ns(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var ss=Object.defineProperty,as=(t,e,r)=>e in t?ss(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qe=(t,e,r)=>(as(t,typeof e!="symbol"?e+"":e,r),r);let ls=class extends is{constructor(e){super(),qe(this,"_locale",""),qe(this,"_locales"),qe(this,"_localeData",{}),qe(this,"_messages",{}),qe(this,"_missing"),qe(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??rn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let n=o?.message;e||(e=""),Re(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,a=this._missing;if(a&&s)return Gi(a)?a(this._locale,e):a;s&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Re(l)&&nn.test(l)?JSON.parse(`"${l}"`):Re(l)?l:ts(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return on(this._locales||this._locale,e,r)}number(e,r){return Cr(this._locales||this._locale,e,r)}};function cs(t={}){return new ls(t)}const hr=cs();class ds extends Q{#e=!1;get i18n(){return this.#e||(hr.load(this.locale,this.translations),hr.activate(this.locale),this.#e=!0),hr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Ur=()=>!(typeof window<"u");class an{isServer=!1;css=""}const us=(t=[])=>{const e=new an;if(Ur()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const n=new XMLHttpRequest;n.open("GET",o,!1),n.send(),e.css+=n.responseText}return e},hs=()=>us(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),ps=async(t=[])=>{const e=new an;if(Ur()){for(const i of t)e.css+=`@import url('${i}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(i=>fetch(i))),n=await Promise.all(o.map(i=>i.text()));for(const i of n)e.css+=i;return e},bo=async()=>ps(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function a(g){var v=g.replace(s,"");return v!==g&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),v.trim()}function l(g){return"isConnected"in g?g.isConnected:document.contains(g)}function u(g){return g.filter(function(v,O){return g.indexOf(v)===O})}function p(g,v){return g.filter(function(O){return v.indexOf(O)===-1})}function d(g){g.parentNode.removeChild(g)}function m(g){return g.shadowRoot||r.get(g)}var c=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,h=f.prototype;h.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},h.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function b(g){return typeof g=="object"?U.isPrototypeOf(g)||h.isPrototypeOf(g):!1}function _(g){return typeof g=="object"?h.isPrototypeOf(g):!1}var C=new WeakMap,E=new WeakMap,M=new WeakMap,y=new WeakMap;function A(g,v){var O=document.createElement("style");return M.get(g).set(v,O),E.get(g).push(v),O}function L(g,v){return M.get(g).get(v)}function B(g,v){M.get(g).delete(v),E.set(g,E.get(g).filter(function(O){return O!==v}))}function j(g,v){requestAnimationFrame(function(){v.textContent=C.get(g).textContent,y.get(g).forEach(function(O){return v.sheet[O.method].apply(v.sheet,O.args)})})}function z(g){if(!C.has(g))throw new TypeError("Illegal invocation")}function K(){var g=this,v=document.createElement("style");e.body.appendChild(v),C.set(g,v),E.set(g,[]),M.set(g,new WeakMap),y.set(g,[])}var U=K.prototype;U.replace=function(v){try{return this.replaceSync(v),Promise.resolve(this)}catch(O){return Promise.reject(O)}},U.replaceSync=function(v){if(z(this),typeof v=="string"){var O=this;C.get(O).textContent=a(v),y.set(O,[]),E.get(O).forEach(function(oe){oe.isConnected()&&j(O,L(O,oe))})}},n(U,"cssRules",{configurable:!0,enumerable:!0,get:function(){return z(this),C.get(this).sheet.cssRules}}),n(U,"media",{configurable:!0,enumerable:!0,get:function(){return z(this),C.get(this).sheet.media}}),c.forEach(function(g){U[g]=function(){var v=this;z(v);var O=arguments;y.get(v).push({method:g,args:O}),E.get(v).forEach(function(ie){if(ie.isConnected()){var G=L(v,ie).sheet;G[g].apply(G,O)}});var oe=C.get(v).sheet;return oe[g].apply(oe,O)}}),n(K,Symbol.hasInstance,{configurable:!0,value:b});var ne={childList:!0,subtree:!0},N=new WeakMap;function X(g){var v=N.get(g);return v||(v=new to(g),N.set(g,v)),v}function J(g){n(g.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return X(this).sheets},set:function(v){X(this).update(v)}})}function Z(g,v){for(var O=document.createNodeIterator(g,NodeFilter.SHOW_ELEMENT,function(ie){return m(ie)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),oe=void 0;oe=O.nextNode();)v(m(oe))}var q=new WeakMap,re=new WeakMap,He=new WeakMap;function mi(g,v){return v instanceof HTMLStyleElement&&re.get(g).some(function(O){return L(O,g)})}function eo(g){var v=q.get(g);return v instanceof Document?v.body:v}function cr(g){var v=document.createDocumentFragment(),O=re.get(g),oe=He.get(g),ie=eo(g);oe.disconnect(),O.forEach(function(G){v.appendChild(L(G,g)||A(G,g))}),ie.insertBefore(v,null),oe.observe(ie,ne),O.forEach(function(G){j(G,L(G,g))})}function to(g){var v=this;v.sheets=[],q.set(v,g),re.set(v,[]),He.set(v,new MutationObserver(function(O,oe){if(!document){oe.disconnect();return}O.forEach(function(ie){t||i.call(ie.addedNodes,function(G){G instanceof Element&&Z(G,function(We){X(We).connect()})}),i.call(ie.removedNodes,function(G){G instanceof Element&&(mi(v,G)&&cr(v),t||Z(G,function(We){X(We).disconnect()}))})})}))}if(to.prototype={isConnected:function(){var g=q.get(this);return g instanceof Document?g.readyState!=="loading":l(g.host)},connect:function(){var g=eo(this);He.get(this).observe(g,ne),re.get(this).length>0&&cr(this),Z(g,function(v){X(v).connect()})},disconnect:function(){He.get(this).disconnect()},update:function(g){var v=this,O=q.get(v)===document?"Document":"ShadowRoot";if(!Array.isArray(g))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+O+": Iterator getter is not callable.");if(!g.every(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+O+": Failed to convert value to 'CSSStyleSheet'");if(g.some(_))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+O+": Can't adopt non-constructed stylesheets");v.sheets=g;var oe=re.get(v),ie=u(g),G=p(oe,ie);G.forEach(function(We){d(L(We,v)),B(We,v)}),re.set(v,ie),v.isConnected()&&ie.length>0&&cr(v)}},window.CSSStyleSheet=K,J(Document),"ShadowRoot"in window){J(ShadowRoot);var ro=Element.prototype,bi=ro.attachShadow;ro.attachShadow=function(v){var O=bi.call(this,v);return v.mode==="closed"&&r.set(this,O),O}}var Dt=X(document);Dt.isConnected()?Dt.connect():document.addEventListener("DOMContentLoaded",Dt.connect.bind(Dt))})();let wt;if(Ur()){const t=await bo();wt=Fo(t.css)}else{wt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await bo();wt.replaceSync(r.css)}catch{const e=hs();wt.replaceSync(e.css)}}class P extends ds{static styles=[wt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=t=>t??I;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ln=Symbol.for(""),fs=t=>{if(t?.r===ln)return t?._$litStatic$},be=t=>({_$litStatic$:t,r:ln}),vo=new Map,gs=t=>(e,...r)=>{const o=r.length;let n,i;const s=[],a=[];let l,u=0,p=!1;for(;u<o;){for(l=e[u];u<o&&(i=r[u],(n=fs(i))!==void 0);)l+=n+e[++u],p=!0;u!==o&&a.push(i),s.push(l),u++}if(u===o&&s.push(e[o]),p){const d=s.join("$$lit$$");(e=vo.get(d))===void 0&&(s.raw=s,vo.set(d,e=s)),r=a}return t(e,...r)},ve=gs(w),Ee=t=>typeof t=="string",ms=t=>typeof t=="function",wo=new Map,cn="en";function Hr(t){return[...Array.isArray(t)?t:[t],cn]}function Wr(t,e,r){const o=Hr(t);r||(r="default");let n;if(typeof r=="string")switch(n={day:"numeric",month:"short",year:"numeric"},r){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric";break}else n=r;return jt(()=>zt("date",o,r),()=>new Intl.DateTimeFormat(o,n)).format(Ee(e)?new Date(e):e)}function bs(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return Wr(t,e,o)}function Ar(t,e,r){const o=Hr(t);return jt(()=>zt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function yo(t,e,r,{offset:o=0,...n}){const i=Hr(t),s=e?jt(()=>zt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):jt(()=>zt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function jt(t,e){const r=t();let o=wo.get(r);return o||(o=e(),wo.set(r,o)),o}function zt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const dn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,un=t=>t.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g,(e,r,o)=>{if(r){const n=parseInt(r,16);return String.fromCharCode(n)}else{const n=parseInt(o,16);return String.fromCharCode(n)}}),hn="%__lingui_octothorpe__%",vs=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s],i=(s,a)=>{const l=Object.keys(r).length?n("number"):void 0,u=Ar(o,s,l);return a.replace(new RegExp(hn,"g"),u)};return{plural:(s,a)=>{const{offset:l=0}=a,u=yo(o,!1,s,a);return i(s-l,u)},selectordinal:(s,a)=>{const{offset:l=0}=a,u=yo(o,!0,s,a);return i(s-l,u)},select:ws,number:(s,a)=>Ar(o,s,n(a)||{style:a}),date:(s,a)=>Wr(o,s,n(a)||a),time:(s,a)=>bs(o,s,n(a)||a)}},ws=(t,e)=>e[t]??e.other;function ys(t,e,r){return(o={},n)=>{const i=vs(e,r,n),s=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+hn;if(Ee(d))return p+d;const[m,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([_,C])=>{h[_]=s(C,c==="plural"||c==="selectordinal")}):h=f;let b;if(c){const _=i[c];b=_(o[m],h)}else b=o[m];return b==null?p:p+b},""):l,a=s(t);return Ee(a)&&dn.test(a)?un(a):Ee(a)?a:a?String(a):""}}var xs=Object.defineProperty,$s=(t,e,r)=>e in t?xs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ks=(t,e,r)=>($s(t,e+"",r),r);class _s{constructor(){ks(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ss=Object.defineProperty,Es=(t,e,r)=>e in t?Ss(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ne=(t,e,r)=>(Es(t,typeof e!="symbol"?e+"":e,r),r);class Cs extends _s{constructor(e){super(),Ne(this,"_locale",""),Ne(this,"_locales"),Ne(this,"_localeData",{}),Ne(this,"_messages",{}),Ne(this,"_missing"),Ne(this,"_messageCompiler"),Ne(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??cn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let n=o?.message;e||(e=""),Ee(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,a=this._missing;if(a&&s)return ms(a)?a(this._locale,e):a;s&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Ee(l)&&(this._messageCompiler?l=this._messageCompiler(l):console.warn(`Uncompiled message detected! Message:

> ${l}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Ee(l)&&dn.test(l)?un(l):Ee(l)?l:ys(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return Wr(this._locales||this._locale,e,r)}number(e,r){return Ar(this._locales||this._locale,e,r)}}function As(t={}){return new Cs(t)}const S=As();var Ls={},pn=["en","nb","fi","da","sv"],fn="en",Ts=()=>{var t;let e;switch((t=process==null?void 0:Ls)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},gn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":fn},pr=t=>pn.find(e=>t===e||t.toLowerCase().includes(e))||gn();function Os(){var t;if(typeof window>"u"){const e=Ts();return pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=gn();return pn.includes(e)?pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),fn}}var Ds=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Ps=(t,e,r,o,n)=>{const i=Os(),s=Ds(i,t,e,r,o,n);S.load(i,s),S.activate(i)},at={nb:{"icon.title.search":["Forstørrelsesglass"]},en:{"icon.title.search":["Magnifying glass"]},fi:{"icon.title.search":["Suurennuslasi"]},da:{"icon.title.search":["Forstørrelsesglas"]},sv:{"icon.title.search":["Förstoringsglas"]}};Ps(at.en,at.nb,at.fi,at.da,at.sv);var Ns=class extends Q{render(){const t=S.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",Ns);var Ms={},mn=["en","nb","fi","da","sv"],bn="en",Bs=()=>{var t;let e;switch((t=process==null?void 0:Ms)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},vn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":bn},fr=t=>mn.find(e=>t===e||t.toLowerCase().includes(e))||vn();function Rs(){var t;if(typeof window>"u"){const e=Bs();return fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=vn();return mn.includes(e)?fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),bn}}var Fs=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Is=(t,e,r,o,n)=>{const i=Rs(),s=Fs(i,t,e,r,o,n);S.load(i,s),S.activate(i)},lt={nb:{"icon.title.close":["Kryss"]},en:{"icon.title.close":["Cross"]},fi:{"icon.title.close":["Rasti"]},da:{"icon.title.close":["Kryds"]},sv:{"icon.title.close":["Kryss"]}};Is(lt.en,lt.nb,lt.fi,lt.da,lt.sv);var js=class extends Q{render(){const t=S.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",js);const zs=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Te(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:zs(e.toString())})),super.createProperty(e,o)}}}function Us(){return`m${Math.random().toString(36).slice(2)}`}class Hs extends Te(P){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[P.styles];get _classBase(){return this.slot==="suffix"?Ki:Xi}get _classes(){return F([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
      <button aria-label="${V(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return w`
      <button aria-label="${V(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return w`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",Hs);var Ws={},wn=["en","nb","fi","da","sv"],yn="en",Vs=()=>{var t;let e;switch((t=process==null?void 0:Ws)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},xn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":yn},gr=t=>wn.find(e=>t===e||t.toLowerCase().includes(e))||xn();function qs(){var t;if(typeof window>"u"){const e=Vs();return gr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=xn();return wn.includes(e)?gr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),gr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),yn}}var Qs=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Js=(t,e,r,o,n)=>{const i=qs(),s=Qs(i,t,e,r,o,n);S.load(i,s),S.activate(i)},ct={nb:{"icon.title.info":["Informasjonssirkel"]},en:{"icon.title.info":["Information circle"]},fi:{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]},da:{"icon.title.info":["Informationscirkel"]},sv:{"icon.title.info":["Informationscirkel"]}};Js(ct.en,ct.nb,ct.fi,ct.da,ct.sv);var Ys=class extends Q{render(){const t=S.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",Ys);var Ks={},$n=["en","nb","fi","da","sv"],kn="en",Xs=()=>{var t;let e;switch((t=process==null?void 0:Ks)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},_n=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":kn},mr=t=>$n.find(e=>t===e||t.toLowerCase().includes(e))||_n();function Gs(){var t;if(typeof window>"u"){const e=Xs();return mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=_n();return $n.includes(e)?mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),kn}}var Zs=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ea=(t,e,r,o,n)=>{const i=Gs(),s=Zs(i,t,e,r,o,n);S.load(i,s),S.activate(i)},dt={nb:{"icon.title.warning":["Varseltrekant med utropstegn"]},en:{"icon.title.warning":["Warning triangle with exclamation point"]},fi:{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]},da:{"icon.title.warning":["Advarselstrekant med et udråbstegn"]},sv:{"icon.title.warning":["Varningstriangel med utropstecken"]}};ea(dt.en,dt.nb,dt.fi,dt.da,dt.sv);var ta=class extends Q{render(){const t=S.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",ta);var ra={},Sn=["en","nb","fi","da","sv"],En="en",oa=()=>{var t;let e;switch((t=process==null?void 0:ra)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Cn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":En},br=t=>Sn.find(e=>t===e||t.toLowerCase().includes(e))||Cn();function na(){var t;if(typeof window>"u"){const e=oa();return br(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Cn();return Sn.includes(e)?br(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),br(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),En}}var ia=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,sa=(t,e,r,o,n)=>{const i=na(),s=ia(i,t,e,r,o,n);S.load(i,s),S.activate(i)},ut={nb:{"icon.title.error":["Åttekant med utropstegn"]},en:{"icon.title.error":["Octagon with exclamation point"]},fi:{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]},da:{"icon.title.error":["Ottekant med et udråbstegn"]},sv:{"icon.title.error":["Oktagon med utropstecken"]}};sa(ut.en,ut.nb,ut.fi,ut.da,ut.sv);var aa=class extends Q{render(){const t=S.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",aa);var la={},An=["en","nb","fi","da","sv"],Ln="en",ca=()=>{var t;let e;switch((t=process==null?void 0:la)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Tn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ln},vr=t=>An.find(e=>t===e||t.toLowerCase().includes(e))||Tn();function da(){var t;if(typeof window>"u"){const e=ca();return vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Tn();return An.includes(e)?vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ln}}var ua=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ha=(t,e,r,o,n)=>{const i=da(),s=ua(i,t,e,r,o,n);S.load(i,s),S.activate(i)},ht={nb:{"icon.title.success":["Sirkel med sjekkmerke"]},en:{"icon.title.success":["Circle with checkmark"]},fi:{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]},da:{"icon.title.success":["Cirkel med et flueben"]},sv:{"icon.title.success":["Cirkel med bock"]}};ha(ht.en,ht.nb,ht.fi,ht.da,ht.sv);var pa=class extends Q{render(){const t=S.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",pa);const pt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class fa extends P{static properties={variant:{type:String,reflect:!0},show:{type:Boolean,reflect:!0},role:{type:String,reflect:!0}};constructor(){super(),this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!pt[this.variant])throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return F([st.wrapper,st[this.variant]])}get _iconClasses(){const e=st[`${this.variant}Icon`];return F([st.icon,e])}static styles=[P.styles,te`
      :host {
        display: block;
      }
      ::slotted(:first-child) {
        margin-top: 0px;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];get _icon(){return this.variant===pt.info?w`<w-icon-info-16></w-icon-info-16>`:this.variant===pt.warning?w`<w-icon-warning-16></w-icon-warning-16>`:this.variant===pt.negative?w`<w-icon-error-16></w-icon-error-16>`:this.variant===pt.positive?w`<w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${st.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}customElements.get("w-alert")||customElements.define("w-alert",fa);const ga=["top","right","bottom","left"],je=Math.min,de=Math.max,Ut=Math.round,ge=t=>({x:t,y:t}),ma={left:"right",right:"left",bottom:"top",top:"bottom"},ba={start:"end",end:"start"};function Lr(t,e,r){return de(t,je(e,r))}function ze(t,e){return typeof t=="function"?t(e):t}function Ae(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function On(t){return t==="x"?"y":"x"}function Vr(t){return t==="y"?"height":"width"}const va=new Set(["top","bottom"]);function xe(t){return va.has(Ae(t))?"y":"x"}function qr(t){return On(xe(t))}function wa(t,e,r){r===void 0&&(r=!1);const o=tt(t),n=qr(t),i=Vr(n);let s=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Ht(s)),[s,Ht(s)]}function ya(t){const e=Ht(t);return[Tr(t),e,Tr(e)]}function Tr(t){return t.replace(/start|end/g,e=>ba[e])}const xo=["left","right"],$o=["right","left"],xa=["top","bottom"],$a=["bottom","top"];function ka(t,e,r){switch(t){case"top":case"bottom":return r?e?$o:xo:e?xo:$o;case"left":case"right":return e?xa:$a;default:return[]}}function _a(t,e,r,o){const n=tt(t);let i=ka(Ae(t),r==="start",o);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(Tr)))),i}function Ht(t){return t.replace(/left|right|bottom|top/g,e=>ma[e])}function Sa(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dn(t){return typeof t!="number"?Sa(t):{top:t,right:t,bottom:t,left:t}}function Wt(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function ko(t,e,r){let{reference:o,floating:n}=t;const i=xe(e),s=qr(e),a=Vr(s),l=Ae(e),u=i==="y",p=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,m=o[a]/2-n[a]/2;let c;switch(l){case"top":c={x:p,y:o.y-n.height};break;case"bottom":c={x:p,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:d};break;case"left":c={x:o.x-n.width,y:d};break;default:c={x:o.x,y:o.y}}switch(tt(e)){case"start":c[s]-=m*(r&&u?-1:1);break;case"end":c[s]+=m*(r&&u?-1:1);break}return c}const Ea=async(t,e,r)=>{const{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:s}=r,a=i.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:d}=ko(u,o,l),m=o,c={},f=0;for(let h=0;h<a.length;h++){const{name:b,fn:_}=a[h],{x:C,y:E,data:M,reset:y}=await _({x:p,y:d,initialPlacement:o,placement:m,strategy:n,middlewareData:c,rects:u,platform:s,elements:{reference:t,floating:e}});p=C??p,d=E??d,c={...c,[b]:{...c[b],...M}},y&&f<=50&&(f++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):y.rects),{x:p,y:d}=ko(u,m,l)),h=-1)}return{x:p,y:d,placement:m,strategy:n,middlewareData:c}};async function Et(t,e){var r;e===void 0&&(e={});const{x:o,y:n,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:m=!1,padding:c=0}=ze(e,t),f=Dn(c),b=a[m?d==="floating"?"reference":"floating":d],_=Wt(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(b)))==null||r?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:u,rootBoundary:p,strategy:l})),C=d==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,E=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),M=await(i.isElement==null?void 0:i.isElement(E))?await(i.getScale==null?void 0:i.getScale(E))||{x:1,y:1}:{x:1,y:1},y=Wt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:E,strategy:l}):C);return{top:(_.top-y.top+f.top)/M.y,bottom:(y.bottom-_.bottom+f.bottom)/M.y,left:(_.left-y.left+f.left)/M.x,right:(y.right-_.right+f.right)/M.x}}const Ca=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:n,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:u,padding:p=0}=ze(t,e)||{};if(u==null)return{};const d=Dn(p),m={x:r,y:o},c=qr(n),f=Vr(c),h=await s.getDimensions(u),b=c==="y",_=b?"top":"left",C=b?"bottom":"right",E=b?"clientHeight":"clientWidth",M=i.reference[f]+i.reference[c]-m[c]-i.floating[f],y=m[c]-i.reference[c],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=A?A[E]:0;(!L||!await(s.isElement==null?void 0:s.isElement(A)))&&(L=a.floating[E]||i.floating[f]);const B=M/2-y/2,j=L/2-h[f]/2-1,z=je(d[_],j),K=je(d[C],j),U=z,ne=L-h[f]-K,N=L/2-h[f]/2+B,X=Lr(U,N,ne),J=!l.arrow&&tt(n)!=null&&N!==X&&i.reference[f]/2-(N<U?z:K)-h[f]/2<0,Z=J?N<U?N-U:N-ne:0;return{[c]:m[c]+Z,data:{[c]:X,centerOffset:N-X-Z,...J&&{alignmentOffset:Z}},reset:J}}}),Aa=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:n,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:u}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...b}=ze(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const _=Ae(n),C=xe(a),E=Ae(a)===a,M=await(l.isRTL==null?void 0:l.isRTL(u.floating)),y=m||(E||!h?[Ht(a)]:ya(a)),A=f!=="none";!m&&A&&y.push(..._a(a,h,f,M));const L=[a,...y],B=await Et(e,b),j=[];let z=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&j.push(B[_]),d){const N=wa(n,s,M);j.push(B[N[0]],B[N[1]])}if(z=[...z,{placement:n,overflows:j}],!j.every(N=>N<=0)){var K,U;const N=(((K=i.flip)==null?void 0:K.index)||0)+1,X=L[N];if(X&&(!(d==="alignment"?C!==xe(X):!1)||z.every(q=>xe(q.placement)===C?q.overflows[0]>0:!0)))return{data:{index:N,overflows:z},reset:{placement:X}};let J=(U=z.filter(Z=>Z.overflows[0]<=0).sort((Z,q)=>Z.overflows[1]-q.overflows[1])[0])==null?void 0:U.placement;if(!J)switch(c){case"bestFit":{var ne;const Z=(ne=z.filter(q=>{if(A){const re=xe(q.placement);return re===C||re==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(re=>re>0).reduce((re,He)=>re+He,0)]).sort((q,re)=>q[1]-re[1])[0])==null?void 0:ne[0];Z&&(J=Z);break}case"initialPlacement":J=a;break}if(n!==J)return{reset:{placement:J}}}return{}}}};function _o(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function So(t){return ga.some(e=>t[e]>=0)}const La=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...n}=ze(t,e);switch(o){case"referenceHidden":{const i=await Et(e,{...n,elementContext:"reference"}),s=_o(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:So(s)}}}case"escaped":{const i=await Et(e,{...n,altBoundary:!0}),s=_o(i,r.floating);return{data:{escapedOffsets:s,escaped:So(s)}}}default:return{}}}}},Ta=new Set(["left","top"]);async function Oa(t,e){const{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=Ae(r),a=tt(r),l=xe(r)==="y",u=Ta.has(s)?-1:1,p=i&&l?-1:1,d=ze(e,t);let{mainAxis:m,crossAxis:c,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof f=="number"&&(c=a==="end"?f*-1:f),l?{x:c*p,y:m*u}:{x:m*u,y:c*p}}const Da=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:n,y:i,placement:s,middlewareData:a}=e,l=await Oa(e,t);return s===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:s}}}}},Pa=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:_,y:C}=b;return{x:_,y:C}}},...l}=ze(t,e),u={x:r,y:o},p=await Et(e,l),d=xe(Ae(n)),m=On(d);let c=u[m],f=u[d];if(i){const b=m==="y"?"top":"left",_=m==="y"?"bottom":"right",C=c+p[b],E=c-p[_];c=Lr(C,c,E)}if(s){const b=d==="y"?"top":"left",_=d==="y"?"bottom":"right",C=f+p[b],E=f-p[_];f=Lr(C,f,E)}const h=a.fn({...e,[m]:c,[d]:f});return{...h,data:{x:h.x-r,y:h.y-o,enabled:{[m]:i,[d]:s}}}}}},Na=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:n,rects:i,platform:s,elements:a}=e,{apply:l=()=>{},...u}=ze(t,e),p=await Et(e,u),d=Ae(n),m=tt(n),c=xe(n)==="y",{width:f,height:h}=i.floating;let b,_;d==="top"||d==="bottom"?(b=d,_=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(_=d,b=m==="end"?"top":"bottom");const C=h-p.top-p.bottom,E=f-p.left-p.right,M=je(h-p[b],C),y=je(f-p[_],E),A=!e.middlewareData.shift;let L=M,B=y;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(B=E),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=C),A&&!m){const z=de(p.left,0),K=de(p.right,0),U=de(p.top,0),ne=de(p.bottom,0);c?B=f-2*(z!==0||K!==0?z+K:de(p.left,p.right)):L=h-2*(U!==0||ne!==0?U+ne:de(p.top,p.bottom))}await l({...e,availableWidth:B,availableHeight:L});const j=await s.getDimensions(a.floating);return f!==j.width||h!==j.height?{reset:{rects:!0}}:{}}}};function or(){return typeof window<"u"}function rt(t){return Pn(t)?(t.nodeName||"").toLowerCase():"#document"}function le(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $e(t){var e;return(e=(Pn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pn(t){return or()?t instanceof Node||t instanceof le(t).Node:!1}function he(t){return or()?t instanceof Element||t instanceof le(t).Element:!1}function me(t){return or()?t instanceof HTMLElement||t instanceof le(t).HTMLElement:!1}function Eo(t){return!or()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof le(t).ShadowRoot}const Ma=new Set(["inline","contents"]);function Tt(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=pe(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!Ma.has(n)}const Ba=new Set(["table","td","th"]);function Ra(t){return Ba.has(rt(t))}const Fa=[":popover-open",":modal"];function nr(t){return Fa.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ia=["transform","translate","scale","rotate","perspective"],ja=["transform","translate","scale","rotate","perspective","filter"],za=["paint","layout","strict","content"];function Qr(t){const e=Jr(),r=he(t)?pe(t):t;return Ia.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||ja.some(o=>(r.willChange||"").includes(o))||za.some(o=>(r.contain||"").includes(o))}function Ua(t){let e=Le(t);for(;me(e)&&!Ze(e);){if(Qr(e))return e;if(nr(e))return null;e=Le(e)}return null}function Jr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ha=new Set(["html","body","#document"]);function Ze(t){return Ha.has(rt(t))}function pe(t){return le(t).getComputedStyle(t)}function ir(t){return he(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Le(t){if(rt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Eo(t)&&t.host||$e(t);return Eo(e)?e.host:e}function Nn(t){const e=Le(t);return Ze(e)?t.ownerDocument?t.ownerDocument.body:t.body:me(e)&&Tt(e)?e:Nn(e)}function Mn(t,e,r){var o;e===void 0&&(e=[]);const n=Nn(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=le(n);return i?(Or(s),e.concat(s,s.visualViewport||[],Tt(n)?n:[],[])):e.concat(n,Mn(n,[]))}function Or(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Bn(t){const e=pe(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=me(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,a=Ut(r)!==i||Ut(o)!==s;return a&&(r=i,o=s),{width:r,height:o,$:a}}function Rn(t){return he(t)?t:t.contextElement}function Ge(t){const e=Rn(t);if(!me(e))return ge(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=Bn(e);let s=(i?Ut(r.width):r.width)/o,a=(i?Ut(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Wa=ge(0);function Fn(t){const e=le(t);return!Jr()||!e.visualViewport?Wa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Va(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==le(t)?!1:e}function Ct(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),i=Rn(t);let s=ge(1);e&&(o?he(o)&&(s=Ge(o)):s=Ge(t));const a=Va(i,r,o)?Fn(i):ge(0);let l=(n.left+a.x)/s.x,u=(n.top+a.y)/s.y,p=n.width/s.x,d=n.height/s.y;if(i){const m=le(i),c=o&&he(o)?le(o):o;let f=m,h=Or(f);for(;h&&o&&c!==f;){const b=Ge(h),_=h.getBoundingClientRect(),C=pe(h),E=_.left+(h.clientLeft+parseFloat(C.paddingLeft))*b.x,M=_.top+(h.clientTop+parseFloat(C.paddingTop))*b.y;l*=b.x,u*=b.y,p*=b.x,d*=b.y,l+=E,u+=M,f=le(h),h=Or(f)}}return Wt({width:p,height:d,x:l,y:u})}function Yr(t,e){const r=ir(t).scrollLeft;return e?e.left+r:Ct($e(t)).left+r}function In(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(r?0:Yr(t,o)),i=o.top+e.scrollTop;return{x:n,y:i}}function qa(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t;const i=n==="fixed",s=$e(o),a=e?nr(e.floating):!1;if(o===s||a&&i)return r;let l={scrollLeft:0,scrollTop:0},u=ge(1);const p=ge(0),d=me(o);if((d||!d&&!i)&&((rt(o)!=="body"||Tt(s))&&(l=ir(o)),me(o))){const c=Ct(o);u=Ge(o),p.x=c.x+o.clientLeft,p.y=c.y+o.clientTop}const m=s&&!d&&!i?In(s,l,!0):ge(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+p.x+m.x,y:r.y*u.y-l.scrollTop*u.y+p.y+m.y}}function Qa(t){return Array.from(t.getClientRects())}function Ja(t){const e=$e(t),r=ir(t),o=t.ownerDocument.body,n=de(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=de(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Yr(t);const a=-r.scrollTop;return pe(o).direction==="rtl"&&(s+=de(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:s,y:a}}function Ya(t,e){const r=le(t),o=$e(t),n=r.visualViewport;let i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){i=n.width,s=n.height;const u=Jr();(!u||u&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:i,height:s,x:a,y:l}}function Ka(t,e){const r=Ct(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=me(t)?Ge(t):ge(1),s=t.clientWidth*i.x,a=t.clientHeight*i.y,l=n*i.x,u=o*i.y;return{width:s,height:a,x:l,y:u}}function Co(t,e,r){let o;if(e==="viewport")o=Ya(t,r);else if(e==="document")o=Ja($e(t));else if(he(e))o=Ka(e,r);else{const n=Fn(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Wt(o)}function jn(t,e){const r=Le(t);return r===e||!he(r)||Ze(r)?!1:pe(r).position==="fixed"||jn(r,e)}function Xa(t,e){const r=e.get(t);if(r)return r;let o=Mn(t,[]).filter(a=>he(a)&&rt(a)!=="body"),n=null;const i=pe(t).position==="fixed";let s=i?Le(t):t;for(;he(s)&&!Ze(s);){const a=pe(s),l=Qr(s);!l&&a.position==="fixed"&&(n=null),(i?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Tt(s)&&!l&&jn(t,s))?o=o.filter(p=>p!==s):n=a,s=Le(s)}return e.set(t,o),o}function Ga(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t;const s=[...r==="clippingAncestors"?nr(e)?[]:Xa(e,this._c):[].concat(r),o],a=s[0],l=s.reduce((u,p)=>{const d=Co(e,p,n);return u.top=de(d.top,u.top),u.right=je(d.right,u.right),u.bottom=je(d.bottom,u.bottom),u.left=de(d.left,u.left),u},Co(e,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Za(t){const{width:e,height:r}=Bn(t);return{width:e,height:r}}function el(t,e,r){const o=me(e),n=$e(e),i=r==="fixed",s=Ct(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const l=ge(0);if(o||!o&&!i)if((rt(e)!=="body"||Tt(n))&&(a=ir(e)),o){const m=Ct(e,!0,i,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else n&&(l.x=Yr(n));const u=n&&!o&&!i?In(n,a):ge(0),p=s.left+a.scrollLeft-l.x-u.x,d=s.top+a.scrollTop-l.y-u.y;return{x:p,y:d,width:s.width,height:s.height}}function wr(t){return pe(t).position==="static"}function Ao(t,e){if(!me(t)||pe(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return $e(t)===r&&(r=r.ownerDocument.body),r}function zn(t,e){const r=le(t);if(nr(t))return r;if(!me(t)){let n=Le(t);for(;n&&!Ze(n);){if(he(n)&&!wr(n))return n;n=Le(n)}return r}let o=Ao(t,e);for(;o&&Ra(o)&&wr(o);)o=Ao(o,e);return o&&Ze(o)&&wr(o)&&!Qr(o)?r:o||Ua(t)||r}const tl=async function(t){const e=this.getOffsetParent||zn,r=this.getDimensions,o=await r(t.floating);return{reference:el(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function rl(t){return pe(t).direction==="rtl"}const ol={convertOffsetParentRelativeRectToViewportRelativeRect:qa,getDocumentElement:$e,getClippingRect:Ga,getOffsetParent:zn,getElementRects:tl,getClientRects:Qa,getDimensions:Za,getScale:Ge,isElement:he,isRTL:rl},nl=Da,il=Pa,sl=Aa,al=Na,ll=La,cl=Ca,dl=(t,e,r)=>{const o=new Map,n={platform:ol,...r},i={...n.platform,_c:o};return Ea(t,e,{...n,platform:i})},Vt="top-start",qt="top",Qt="top-end",Jt="right-start",Yt="right",Kt="right-end",Xt="bottom-start",At="bottom",Gt="bottom-end",Zt="left-start",er="left",tr="left-end",Lo=[Vt,qt,Qt,Jt,Yt,Kt,Xt,At,Gt,Zt,er,tr],Ke={[Vt]:Xt,[qt]:At,[Qt]:Gt,[Xt]:Vt,[At]:qt,[Gt]:Qt,[Zt]:Jt,[er]:Yt,[tr]:Kt,[Jt]:Zt,[Yt]:er,[Kt]:tr},ul={[Zt]:-45,[er]:-45,[tr]:-45,[Vt]:45,[qt]:45,[Qt]:45,[Jt]:135,[Yt]:135,[Kt]:135,[Xt]:-135,[At]:-135,[Gt]:-135},Un=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},hl=t=>t.split("-")[0],pl=t=>Ke[hl(t)],Hn=t=>Ke[t],fl=t=>ul[Hn(t)],gl=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${Un(pl(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},To=8,Pt=24;async function Oo(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return dl(e,r,{placement:t?.directionName??At,middleware:[nl({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&sl({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&il({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&cl({element:t?.arrowEl}),ll(),al({apply(){Object.assign(r.style,{paddingRight:`${To}px`,paddingLeft:`${To}px`})}})]}).then(({x:o,y:n,middlewareData:i,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${n}px`}),i?.hide&&!t?.isCallout){const{referenceHidden:a}=i.hide;Object.assign(r.style,{visibility:a?"hidden":""})}if(i?.arrow&&t?.arrowEl){const a=t?.arrowEl,{x:l,y:u}=i.arrow,p=window.getComputedStyle(r).direction==="rtl",d=Hn(s).split("-")[1];let m="",c="",f="",h="";if(d==="start"){const b=typeof l=="number"?`calc(${Pt}px - ${a.offsetWidth/2}px)`:"";m=typeof u=="number"?`calc(${Pt}px - ${a.offsetWidth/2}px)`:"",c=p?b:"",h=p?"":b}else if(d==="end"){const b=typeof l=="number"?`calc(${Pt}px - ${a.offsetWidth/2}px)`:"";c=p?"":b,h=p?b:"",f=typeof u=="number"?`calc(${Pt}px - ${a.offsetWidth/2}px)`:""}else h=typeof l=="number"?`${l}px`:"",m=typeof u=="number"?`${u}px`:"";Object.assign(a.style,{top:m,right:c,bottom:f,left:h}),gl(a,fl(s),s)}}),t}var ml={};const bl=["en","nb","fi","da","sv"],Wn="en",Do=t=>bl.find(e=>t===e||t.toLowerCase().includes(e))||Wn;function vl(){if(typeof window>"u"){const t=ml.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Do(t)}try{const t=document.documentElement.lang;return Do(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Wn}}const wl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Oe=(t,e,r,o,n)=>{const i=vl(),s=wl(i,t,e,r,o,n);S.load(i,s),S.activate(i)},yl=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),xl=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),$l=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),kl=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),_l=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Sl extends Te(P){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[P.styles,te`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Oe(xl,kl,$l,yl,_l),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(Ke).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(Ke))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Lo.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Lo)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?Oo(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return Ke[this._actualDirection]}get _arrowClasses(){return F([Ve.arrowBase,this._activeVariantClasses.arrow,Ve[`arrowDirection${Un(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:Ve[r],arrow:Ve[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return F([Ve.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return S._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${Ve.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},Oo(this.attentionState)}pointingAtDirection(){switch(Ke[this._actualDirection]){case"top-start":case"top":case"top-end":return S._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return S._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return S._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return S._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return S._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return S._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return S._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return S._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Us());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${V(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?w`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:I}
              </div>
            `:w`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:I}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",Sl);class El extends P{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[P.styles];constructor(){super(),this.variant="neutral"}get _class(){return F([Pe.base,Pe[this.variant],!!this.position&&Pe.positionBase,this.position==="top-left"&&Pe.positionTL,this.position==="top-right"&&Pe.positionTR,this.position==="bottom-right"&&Pe.positionBR,this.position==="bottom-left"&&Pe.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",El);class Cl extends P{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[P.styles,te`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return F([Je.base,this.bleed&&Je.bleed,this.info&&Je.info,this.neutral&&Je.neutral,this.bordered&&Je.bordered])}get _optOutRoleWithDefault(){return this.role===""?I:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",Cl);function Al(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Ll=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),Tl=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Ol=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Dl=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Pl=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Nl=w`<span class=${Ye.separator}>/</span>`;class Ml extends Te(P){static styles=[P.styles];static properties={ariaLabel:{type:String}};constructor(){super(),Oe(Tl,Dl,Ol,Ll,Pl),this.ariaLabel=S._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,n)=>{if(typeof o=="string"){const i=n===this.children.length-1;return w`<span class=${Ye.text} aria-current=${i?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?Ye.link:Ye.text),o});this._children=Al(r,Nl)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${Ye.a11y}>${this.ariaLabel}</h2>
        <div class=${Ye.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Ml);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Y=function(t,e,r,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(t,r):n?n.value=r:e.set(t,r),r};function Kr(t){var e,r,o,n,i,s,a,l,u,p,d,m,c,f,h,b,_,C;class E extends t{constructor(...y){var A,L,B;super(...y),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),n.set(this,!1),i.set(this,void 0),s.set(this,void 0),a.set(this,!0),l.set(this,""),u.set(this,()=>{Y(this,n,!0,"f"),Y(this,r,!0,"f"),R(this,e,"m",h).call(this)}),p.set(this,()=>{Y(this,r,!1,"f"),R(this,e,"m",b).call(this,this.shouldFormValueUpdate()?R(this,l,"f"):""),!this.validity.valid&&R(this,n,"f")&&Y(this,o,!0,"f");const j=R(this,e,"m",h).call(this);this.validationMessageCallback&&this.validationMessageCallback(j?this.internals.validationMessage:"")}),d.set(this,()=>{var j;R(this,a,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Y(this,a,!1,"f")),Y(this,n,!0,"f"),Y(this,o,!0,"f"),R(this,e,"m",h).call(this),(j=this===null||this===void 0?void 0:this.validationMessageCallback)===null||j===void 0||j.call(this,this.showError?this.internals.validationMessage:"")}),m.set(this,void 0),c.set(this,!1),f.set(this,Promise.resolve()),(A=this.addEventListener)===null||A===void 0||A.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,p,"f")),(B=this.addEventListener)===null||B===void 0||B.call(this,"invalid",R(this,d,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const y=this.validators.map(B=>B.attribute).flat(),A=super.observedAttributes||[];return[...new Set([...A,...y])]}static getValidator(y){return this.validators.find(A=>A.attribute===y)||null}static getValidators(y){return this.validators.filter(A=>{var L;if(A.attribute===y||!((L=A.attribute)===null||L===void 0)&&L.includes(y))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",h).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(y,A,L){var B;(B=super.attributeChangedCallback)===null||B===void 0||B.call(this,y,A,L);const z=this.constructor.getValidators(y);z?.length&&this.validationTarget&&this.setValue(R(this,l,"f"))}setValue(y){var A;Y(this,o,!1,"f"),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,""),Y(this,l,y,"f");const B=this.shouldFormValueUpdate()?y:null;this.internals.setFormValue(B),R(this,e,"m",b).call(this,B),this.valueChangedCallback&&this.valueChangedCallback(B),R(this,e,"m",h).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(y=>y(R(this,f,"f")))}formResetCallback(){var y,A;Y(this,n,!1,"f"),Y(this,o,!1,"f"),R(this,e,"m",h).call(this),(y=this.resetFormControl)===null||y===void 0||y.call(this),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,R(this,e,"m",h).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,s=new WeakMap,a=new WeakMap,l=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,m=new WeakMap,c=new WeakMap,f=new WeakMap,e=new WeakSet,h=function(){if(this.hasAttribute("disabled"))return!1;const y=R(this,o,"f")||R(this,n,"f")&&!this.validity.valid&&!R(this,r,"f");return y&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),y},b=function(y){const A=this.constructor,L={},B=A.validators,j=[],z=B.some(N=>N.isValid instanceof Promise);R(this,c,"f")||(Y(this,f,new Promise(N=>{Y(this,m,N,"f")}),"f"),Y(this,c,!0,"f")),R(this,i,"f")&&(R(this,i,"f").abort(),Y(this,s,R(this,i,"f"),"f"));const K=new AbortController;Y(this,i,K,"f");let U,ne=!1;B.length&&(B.forEach(N=>{const X=N.key||"customError",J=N.isValid(this,y,K.signal);J instanceof Promise?(j.push(J),J.then(q=>{q!=null&&(L[X]=!q,U=R(this,e,"m",C).call(this,N,y),R(this,e,"m",_).call(this,L,U))})):(L[X]=!J,this.validity[X]!==!J&&(ne=!0),!J&&!U&&(U=R(this,e,"m",C).call(this,N,y)))}),Promise.allSettled(j).then(()=>{var N;K?.signal.aborted||(Y(this,c,!1,"f"),(N=R(this,m,"f"))===null||N===void 0||N.call(this))}),(ne||!z)&&R(this,e,"m",_).call(this,L,U))},_=function(y,A){if(this.validationTarget)this.internals.setValidity(y,A,this.validationTarget),Y(this,a,!1,"f");else{if(this.internals.setValidity(y,A),this.internals.validity.valid)return;Y(this,a,!0,"f")}},C=function(y,A){if(this.validityCallback){const L=this.validityCallback(y.key||"customError");if(L)return L}return y.message instanceof Function?y.message(this,A):y.message},E}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bl={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:Nr},Rl=(t=Bl,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(o==="setter"){const{name:s}=r;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+o)};function W(t){return(e,r)=>typeof r=="object"?Rl(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fl(t){return W({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Il=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sr(t,e){return(r,o,n)=>{const i=s=>s.renderRoot?.querySelector(t)??null;return Il(r,o,{get(){return i(this)}})}}const Vn=te`
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
`,qn=te`*, :before, :after {
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
        `,jl=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),zl=JSON.parse('{"button.aria.loading":["Loading..."]}'),Ul=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Hl=JSON.parse('{"button.aria.loading":["Laster..."]}'),Wl=JSON.parse('{"button.aria.loading":["Laddar ..."]}');var Vl=Object.defineProperty,ce=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Vl(e,r,n),n};const Po=["primary","secondary","negative","utility","pill","link"];class se extends Kr(Te(Q)){constructor(){super(),this.type="button",Oe(zl,Hl,Ul,jl,Wl),this.variant="secondary",this.ariaValueTextLoading=S._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...P.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Vn,qn]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!Po.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${Po.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.primary,this.small&&!this.quiet&&!this.loading&&T.primarySmall,this.small&&this.quiet&&!this.loading&&T.primarySmallQuiet,this.small&&this.loading&&(this.quiet?T.primarySmallQuietLoading:T.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&T.primaryQuiet,!this.small&&this.loading&&(this.quiet?T.primaryQuietLoading:T.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.secondary,this.small&&!this.quiet&&!this.loading&&T.secondarySmall,this.small&&this.loading&&(this.quiet?T.secondarySmallQuietLoading:T.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&T.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&T.secondaryQuiet,!this.small&&this.loading&&(this.quiet?T.secondaryQuietLoading:T.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.utility,this.small&&!this.quiet&&!this.loading&&T.utilitySmall,this.small&&this.quiet&&!this.loading&&T.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?T.utilitySmallQuietLoading:T.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&T.utilityQuiet,!this.small&&this.loading&&(this.quiet?T.utilityQuietLoading:T.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.negative,this.small&&!this.quiet&&!this.loading&&T.negativeSmall,this.small&&this.quiet&&!this.loading&&T.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?T.negativeSmallQuietLoading:T.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&T.negativeQuiet,!this.small&&this.loading&&(this.quiet?T.negativeQuietLoading:T.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?T.pillSmall:T.pill),this.loading&&(this.small?T.pillSmallLoading:T.pillLoading)]}get _linkClasses(){return[this.small?T.linkSmall:T.link]}get _classes(){return F(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&T.linkAsButton,this.fullWidth?T.fullWidth:T.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}ce([W({reflect:!0})],se.prototype,"type");ce([W({type:Boolean,reflect:!0})],se.prototype,"autofocus");ce([W({reflect:!0})],se.prototype,"variant");ce([W({type:Boolean,reflect:!0})],se.prototype,"quiet");ce([W({type:Boolean,reflect:!0})],se.prototype,"small");ce([W({type:Boolean,reflect:!0})],se.prototype,"loading");ce([W({reflect:!0})],se.prototype,"href");ce([W({reflect:!0})],se.prototype,"target");ce([W({reflect:!0})],se.prototype,"rel");ce([W({type:Boolean,reflect:!0})],se.prototype,"fullWidth");ce([W({reflect:!0})],se.prototype,"buttonClass");ce([W({reflect:!0})],se.prototype,"name");ce([W({reflect:!0})],se.prototype,"value");customElements.get("w-button")||customElements.define("w-button",se);const ql=JSON.parse('{"card.button.text":["Vælg"]}'),Ql=JSON.parse('{"card.button.text":["Select"]}'),Jl=JSON.parse('{"card.button.text":["Valitse"]}'),Yl=JSON.parse('{"card.button.text":["Velg"]}'),Kl=JSON.parse('{"card.button.text":["Välj"]}');var Xl=Object.defineProperty,Xr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Xl(e,r,n),n};const No={ENTER:"Enter",SPACE:" "};class ar extends P{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Oe(Ql,Yl,Jl,ql,Kl),this.buttonText=S._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Vn,qn,te`
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
    `]}get _containerClasses(){return F([fe.base,this.flat?fe.flat:fe.shadow,this.selected&&!this.flat&&fe.selected,this.selected&&this.flat?fe.flatSelected:fe.flatUnselected])}get _outlineClasses(){return F([fe.outline,this.selected?fe.outlineSelected:fe.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${fe.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===No.ENTER||e.key===No.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${V(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Xr([W({type:Boolean,reflect:!0})],ar.prototype,"selected");Xr([W({type:Boolean})],ar.prototype,"flat");Xr([W({type:Boolean})],ar.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",ar);var Gl={},Qn=["en","nb","fi","da","sv"],Jn="en",Zl=()=>{var t;let e;switch((t=process==null?void 0:Gl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Yn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Jn},yr=t=>Qn.find(e=>t===e||t.toLowerCase().includes(e))||Yn();function ec(){var t;if(typeof window>"u"){const e=Zl();return yr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Yn();return Qn.includes(e)?yr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),yr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Jn}}var tc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,rc=(t,e,r,o,n)=>{const i=ec(),s=tc(i,t,e,r,o,n);S.load(i,s),S.activate(i)},ft={nb:{"icon.title.chevron-down":["Nedoverpil"]},en:{"icon.title.chevron-down":["Downward arrow"]},fi:{"icon.title.chevron-down":["Nuoli alaspäin"]},da:{"icon.title.chevron-down":["Pil nedad"]},sv:{"icon.title.chevron-down":["Pil ned"]}};rc(ft.en,ft.nb,ft.fi,ft.da,ft.sv);var oc=class extends Q{render(){const t=S.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",oc);var nc={},Kn=["en","nb","fi","da","sv"],Xn="en",ic=()=>{var t;let e;switch((t=process==null?void 0:nc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Gn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xn},xr=t=>Kn.find(e=>t===e||t.toLowerCase().includes(e))||Gn();function sc(){var t;if(typeof window>"u"){const e=ic();return xr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Gn();return Kn.includes(e)?xr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),xr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xn}}var ac=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,lc=(t,e,r,o,n)=>{const i=sc(),s=ac(i,t,e,r,o,n);S.load(i,s),S.activate(i)},gt={nb:{"icon.title.chevron-up":["Oppoverpil"]},en:{"icon.title.chevron-up":["Upward arrow"]},fi:{"icon.title.chevron-up":["Nuoli ylöspäin"]},da:{"icon.title.chevron-up":["Pil opad"]},sv:{"icon.title.chevron-up":["Pil upp"]}};lc(gt.en,gt.nb,gt.fi,gt.da,gt.sv);var cc=class extends Q{render(){const t=S.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",cc);class dc extends Te(P){static properties={expanded:{type:Boolean,reflect:!0},title:{type:String},box:{type:Boolean},bleed:{type:Boolean},buttonClass:{type:String},contentClass:{type:String},noChevron:{type:Boolean},animated:{type:Boolean},headingLevel:{type:Number},_hasTitle:{type:Boolean,state:!0},_showChevronUp:{type:Boolean,state:!0}};constructor(){super(),this.expanded=!1,this.animated=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this._hasTitle=!0,this._showChevronUp=this.expanded}static styles=[P.styles,te`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){this._hasTitle=!!this.title||this.renderRoot.querySelector("slot[name='title']").assignedNodes().length>0}get#e(){return F([ee.wrapper,this.box&&ee.box,this.bleed&&ee.bleed])}get#t(){return F(this.buttonClass,[ee.button,this.box&&ee.buttonBox])}get#n(){return F([ee.chevron,!this.box&&ee.chevronNonBox])}get#r(){const e=F([ee.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&ee.elementsChevronCollapse]),r=F([ee.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&ee.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return F(this.contentClass,[this.box&&Je.base,this._hasTitle&&this.box&&ee.contentWithTitle])}get#i(){return F([ee.expansion,!this.expanded&&ee.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return w` <div class="${this.#e}">
      ${this._hasTitle?w`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${ee.title}">
                ${this.title?w`<span class="${ee.titleType}">${this.title}</span>`:w`<slot name="title"></slot>`}
                ${this.noChevron?"":w`<div class="${this.#n}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#i}" aria-hidden=${V(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}customElements.get("w-expandable")||customElements.define("w-expandable",dc);const Zn=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},ei=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(n=>n.patchClose))o._close=()=>this.close()}};class uc extends Zn(ei(Q)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=te`
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
  `}}const hc=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),pc=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],fc={easing:"ease",duration:300};let ti=!1;const gc=typeof window<"u";if(gc){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>ti=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class mc{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:n=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||pc,this.shouldReduceMotion=n}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(hc(this.first,this.last))}get defaults(){return fc}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?ti?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var bc={},ri=["en","nb","fi","da","sv"],oi="en",vc=()=>{var t;let e;switch((t=process==null?void 0:bc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ni=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":oi},$r=t=>ri.find(e=>t===e||t.toLowerCase().includes(e))||ni();function wc(){var t;if(typeof window>"u"){const e=vc();return $r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ni();return ri.includes(e)?$r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),$r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),oi}}var yc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,xc=(t,e,r,o,n)=>{const i=wc(),s=yc(i,t,e,r,o,n);S.load(i,s),S.activate(i)},mt={nb:{"icon.title.arrow-left":["Pil som peker mot venstre"]},en:{"icon.title.arrow-left":["Leftward-pointing arrow"]},fi:{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]},da:{"icon.title.arrow-left":["Pil til venstre"]},sv:{"icon.title.arrow-left":["Pil som pekar vänster"]}};xc(mt.en,mt.nb,mt.fi,mt.da,mt.sv);var $c=class extends Q{render(){const t=S.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",$c);const kc=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),_c=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Sc=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Ec=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Cc=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Ac=Object.defineProperty,Ot=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Ac(e,r,n),n};class ot extends Zn(Q){constructor(){super(),this._hasTopContent=!1,Oe(_c,Ec,Sc,kc,Cc)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new mc(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${S._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:I}get closeButton(){return this.noClose?I:w`<button
      type="button"
      aria-label="${S._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=te`
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
  `}}Ot([W({type:String})],ot.prototype,"title");Ot([W({type:Boolean})],ot.prototype,"back");Ot([W({type:Boolean,attribute:"no-close"})],ot.prototype,"noClose");Ot([Fl()],ot.prototype,"_hasTopContent");Ot([sr(".title-el")],ot.prototype,"titleEl");let xt=[];const Gr={documentElement:{},body:{}},Lc=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),ii=t=>{t.touches.length>1||t.preventDefault?.()},Tc=t=>([e,r])=>{Gr[t][e]=document[t].style[e],document[t].style[e]=r},Oc=()=>Object.entries(Lc).forEach(([t,e])=>{Object.entries(e).forEach(Tc(t))}),Dc=t=>([e,r])=>{document[t].style[e]=Gr[t][e]},Pc=()=>Object.entries(Gr).forEach(([t,e])=>{Object.entries(e).forEach(Dc(t))}),Nc=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Mc(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const n=o.targetTouches[0].clientY-e;return t.scrollTop===0&&n>0||Nc(t)&&n<0?ii(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Bc(t){t.ontouchstart=null,t.ontouchmove=null}const si=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",ii,{passive:!1}),Rc=si(!0),Fc=si();function Ic(t){if(!t)throw Error("Could not run setup, an element must be provided");xt.some(e=>e===t)||(xt.length||(Oc(),Rc()),Mc(t),xt.push(t))}function jc(){xt.forEach(Bc),Fc(),Pc(),xt=[]}var zc=Object.defineProperty,nt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&zc(e,r,n),n};class Ue extends ei(Q){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Ic(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),jc(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[te`
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
    `]}}nt([W({type:Boolean})],Ue.prototype,"show");nt([W({type:String,attribute:"content-id"})],Ue.prototype,"contentId");nt([W({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ue.prototype,"ignoreBackdropClicks");nt([sr(".dialog-el")],Ue.prototype,"dialogEl");nt([sr(".dialog-inner-el")],Ue.prototype,"dialogInnerEl");nt([sr(".content-el")],Ue.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ue),customElements.define("w-modal-header",ot),customElements.define("w-modal-footer",uc));const Uc=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Hc=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Wc=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Vc=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),qc=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Qc extends Te(P){static styles=[P.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Oe(Hc,Vc,Wc,Uc,qc),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=S._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=S._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return F([ae.button,ae.label,this.suggestion?ae.suggestion:ae.filter,this.canClose?ae.labelWithClose:ae.labelWithoutClose])}get _closeClasses(){return F([ae.button,ae.close,this.suggestion?ae.suggestion:ae.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${ae.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${ae.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${ae.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",Qc);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(t,e,r){return t?e(t):r?.(t)}const Jc=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Yc=JSON.parse('{"select.label.optional":["(optional)"]}'),Kc=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),Xc=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Gc=JSON.parse('{"select.label.optional":["(valfritt)"]}');class Zc extends Kr(Te(P)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[P.styles];constructor(){super(),Oe(Yc,Xc,Kc,Jc,Gc),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return F([we.base,!this.invalid&&!this.disabled&&!this.readOnly&&we.default,this.invalid&&we.invalid,this.disabled&&we.disabled,this.readOnly&&we.readOnly])}get#t(){return F([Xe.base,this.invalid?Xe.colorInvalid:Xe.color])}get#n(){return F([we.chevron,this.disabled&&we.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${we.wrapper}">
      ${Mt(this.label,()=>w`<label class="${Er.base}" for="${this.#r}">
            ${this.label}
            ${Mt(this.optional,()=>w`<span class="${Er.optional}"
                  >${S._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${we.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${V(this.#o)}"
          aria-invalid="${V(this.invalid)}"
          aria-errormessage="${V(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${jr(this._options)}
        </select>
        <div class="${this.#n}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Mt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",Zc);class ed extends Kr(Te(P)){static properties={disabled:{type:Boolean},invalid:{type:Boolean},id:{type:String},label:{type:String},helpText:{type:String},size:{type:String},max:{type:Number},min:{type:Number},minLength:{type:Number},maxLength:{type:Number},pattern:{type:String},placeholder:{type:String},readOnly:{type:Boolean},required:{type:Boolean},type:{type:String},value:{type:String},name:{type:String},_hasPrefix:{state:!0},_hasSuffix:{state:!0}};static styles=[P.styles,te`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];constructor(){super(),this.type="text"}get _inputStyles(){return F([ke.base,this._hasSuffix&&ke.suffix,this._hasPrefix&&ke.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&ke.default,this.invalid&&!this.disabled&&!this.readOnly&&ke.invalid,!this.invalid&&this.disabled&&!this.readOnly&&ke.disabled,!this.invalid&&!this.disabled&&this.readOnly&&ke.readOnly])}get _helpTextStyles(){return F([Xe.base,this.invalid?Xe.colorInvalid:Xe.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Er.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.target;this.setValue(o);const n=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(n)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${ke.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputStyles}"
          type="${this.type}"
          min="${V(this.min)}"
          max="${V(this.max)}"
          size="${V(this.size)}"
          minlength="${V(this.minLength)}"
          maxlength="${V(this.maxLength)}"
          name="${V(this.name)}"
          pattern="${V(this.pattern)}"
          placeholder="${V(this.placeholder)}"
          value="${V(this.value)}"
          aria-describedby="${V(this._helpId)}"
          aria-errormessage="${V(this._error)}"
          aria-invalid="${V(this.invalid)}"
          id="${this._id}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readOnly}"
          ?required="${this.required}"
          @blur="${this.handler}"
          @change="${this.handler}"
          @focus="${this.handler}" />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText&&w`<div class="${this._helpTextStyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}customElements.get("w-textfield")||customElements.define("w-textfield",ed);const lr=typeof window<"u";function td(t,e){if(!lr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function rd(t){return lr?customElements.get("w-toast-container").init().del(t):void 0}function od(t,e){if(!lr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:nd}=Li,Mo=()=>document.createComment(""),bt=(t,e,r)=>{const o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=o.insertBefore(Mo(),n),s=o.insertBefore(Mo(),n);r=new nd(i,s,t,t.options)}else{const i=r._$AB.nextSibling,s=r._$AM,a=s!==t;if(a){let l;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(l=t._$AU)!==s._$AU&&r._$AP(l)}if(i!==n||a){let l=r._$AA;for(;l!==i;){const u=l.nextSibling;o.insertBefore(l,n),l=u}}}return r},Me=(t,e,r=t)=>(t._$AI(e,r),t),id={},sd=(t,e=id)=>t._$AH=e,ad=t=>t._$AH,kr=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=(t,e,r)=>{const o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},ld=Xo(class extends Go{constructor(t){if(super(t),t.type!==Ko.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const n=[],i=[];let s=0;for(const a of t)n[s]=o?o(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const n=ad(t),{values:i,keys:s}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=s,i;const a=this.ut??=[],l=[];let u,p,d=0,m=n.length-1,c=0,f=i.length-1;for(;d<=m&&c<=f;)if(n[d]===null)d++;else if(n[m]===null)m--;else if(a[d]===s[c])l[c]=Me(n[d],i[c]),d++,c++;else if(a[m]===s[f])l[f]=Me(n[m],i[f]),m--,f--;else if(a[d]===s[f])l[f]=Me(n[d],i[f]),bt(t,l[f+1],n[d]),d++,f--;else if(a[m]===s[c])l[c]=Me(n[m],i[c]),bt(t,n[d],n[m]),m--,c++;else if(u===void 0&&(u=Bo(s,c,f),p=Bo(a,d,m)),u.has(a[d]))if(u.has(a[m])){const h=p.get(s[c]),b=h!==void 0?n[h]:null;if(b===null){const _=bt(t,n[d]);Me(_,i[c]),l[c]=_}else l[c]=Me(b,i[c]),bt(t,n[d],b),n[h]=null;c++}else kr(n[m]),m--;else kr(n[d]),d++;for(;c<=f;){const h=bt(t,l[f+1]);Me(h,i[c]),l[c++]=h}for(;d<=m;){const h=n[d++];h!==null&&kr(h)}return this.ut=s,sd(t,l),Ce}});class ai extends P{static styles=[P.styles,te`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const n of this._toasts)Date.now()<=n[1].duration?e.push(n):r.push(n);const o=[];for(const[n]of r){const i=this.renderRoot.querySelector(`#${n}`);o.push(i.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${ur.wrapper}">
        <div class="${ur.base}" id="w-toast-container-list">
          ${ld(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${ur.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",ai);const Zr=typeof window<"u";let li=!0;if(Zr){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>li=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const ci=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},di=t=>{const e=li?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},cd=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},dd=t=>()=>{t&&t()},ui=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=cd(t,e);ci(t),t.style.height="auto";let n=t.scrollHeight;if(Zr&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",di(t),requestAnimationFrame(()=>t.style.height=n+"px")}),r)return r},hi=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=dd(e);ci(t);let n=t.scrollHeight;if(Zr&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=n+"px",t.style.transitionTimingFunction="ease-in",di(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},ud=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),hd=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),pd=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),fd=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),gd=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),_e={success:"success",error:"error",warning:"warning"};class md extends P{static styles=[P.styles,te`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Oe(hd,fd,pd,ud,gd),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&ui(this._wrapper,()=>this._expanded=!0)}get#e(){return F([ue.base,this.type===_e.success&&ue.positive,this.type===_e.warning&&ue.warning,this.type===_e.error&&ue.negative])}get#t(){return F([ue.iconBase,this.type===_e.success&&ue.iconPositive,this.type===_e.warning&&ue.iconWarning,this.type===_e.error&&ue.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===_e.warning}get _error(){return this.type===_e.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?S._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?S._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):S._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?hi(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${ue.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ue.content}">
          <p>${this.text}</p>
        </div>
        ${Mt(this.canclose===!0,()=>w`
            <button class="${ue.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",md);class bd extends P{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&ui(this._wrapper),!this.show&&!this._removeElement&&hi(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[P.styles,te`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${V(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",bd);class vd extends P{static properties={level:{type:Number}};static styles=[P.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?jr(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",vd);var wd={},pi=["en","nb","fi","da","sv"],fi="en",yd=()=>{var t;let e;switch((t=process==null?void 0:wd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},gi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":fi},_r=t=>pi.find(e=>t===e||t.toLowerCase().includes(e))||gi();function xd(){var t;if(typeof window>"u"){const e=yd();return _r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=gi();return pi.includes(e)?_r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),fi}}var $d=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,kd=(t,e,r,o,n)=>{const i=xd(),s=$d(i,t,e,r,o,n);S.load(i,s),S.activate(i)},vt={nb:{"icon.title.bag":["Veske"]},en:{"icon.title.bag":["Handbag"]},fi:{"icon.title.bag":["Käsilaukku"]},da:{"icon.title.bag":["Håndtaske"]},sv:{"icon.title.bag":["Handväska"]}};kd(vt.en,vt.nb,vt.fi,vt.da,vt.sv);var _d=class extends Q{render(){const t=S.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return ve`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${be(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",_d);lr&&(window.WarpToastContainer=ai,window.toast=td,window.updateToast=od,window.removeToast=rd);const Sd={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Ed extends P{static styles=[P.styles,te`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Sd;return w`
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
      `)}}customElements.define("sidebar-element",Ed);
