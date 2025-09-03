(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,eo=Yt.ShadowRoot&&(Yt.ShadyCSS===void 0||Yt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,to=Symbol(),Oo=new WeakMap;let hn=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==to)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(eo&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Oo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Oo.set(r,e))}return e}toString(){return this.cssText}};const pn=t=>new hn(typeof t=="string"?t:t+"",void 0,to),I=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new hn(r,t,to)},ea=(t,e)=>{if(eo)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),n=Yt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},To=eo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return pn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ta,defineProperty:ra,getOwnPropertyDescriptor:oa,getOwnPropertyNames:na,getOwnPropertySymbols:ia,getPrototypeOf:aa}=Object,gr=globalThis,Do=gr.trustedTypes,sa=Do?Do.emptyScript:"",la=gr.reactiveElementPolyfillSupport,At=(t,e)=>t,Xt={toAttribute(t,e){switch(e){case Boolean:t=t?sa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ro=(t,e)=>!ta(t,e),No={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:ro};Symbol.metadata??=Symbol("metadata"),gr.litPropertyMetadata??=new WeakMap;let Ke=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=No){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&ra(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){const{get:n,set:i}=oa(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:n,set(a){const s=n?.call(this);i?.call(this,a),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??No}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const e=aa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const r=this.properties,o=[...na(r),...ia(r)];for(const n of o)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)r.unshift(To(n))}else e!==void 0&&r.push(To(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ea(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Xt).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Xt;this._$Em=n;const s=a.fromAttribute(r,i.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){const n=this.constructor,i=this[e];if(o??=n.getPropertyOptions(e),!((o.hasChanged??ro)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:n,wrapped:i},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??r??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o){const{wrapped:a}=i,s=this[n];a!==!0||this._$AL.has(n)||s===void 0||this.C(n,void 0,i,s)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Ke.elementStyles=[],Ke.shadowRootOptions={mode:"open"},Ke[At("elementProperties")]=new Map,Ke[At("finalized")]=new Map,la?.({ReactiveElement:Ke}),(gr.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=globalThis,Jt=oo.trustedTypes,Bo=Jt?Jt.createPolicy("lit-html",{createHTML:t=>t}):void 0,no="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,io="?"+Ce,ca=`<${io}>`,He=document,Pt=()=>He.createComment(""),Ot=t=>t===null||typeof t!="object"&&typeof t!="function",ao=Array.isArray,fn=t=>ao(t)||typeof t?.[Symbol.iterator]=="function",Cr=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mo=/-->/g,zo=/>/g,Re=RegExp(`>|${Cr}(?:([^\\s"'>=/]+)(${Cr}*=${Cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ro=/'/g,jo=/"/g,gn=/^(?:script|style|textarea|title)$/i,da=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=da(1),Le=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Fo=new WeakMap,Ie=He.createTreeWalker(He,129);function bn(t,e){if(!ao(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bo!==void 0?Bo.createHTML(e):e}const mn=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",a=ct;for(let s=0;s<r;s++){const l=t[s];let u,p,d=-1,b=0;for(;b<l.length&&(a.lastIndex=b,p=a.exec(l),p!==null);)b=a.lastIndex,a===ct?p[1]==="!--"?a=Mo:p[1]!==void 0?a=zo:p[2]!==void 0?(gn.test(p[2])&&(n=RegExp("</"+p[2],"g")),a=Re):p[3]!==void 0&&(a=Re):a===Re?p[0]===">"?(a=n??ct,d=-1):p[1]===void 0?d=-2:(d=a.lastIndex-p[2].length,u=p[1],a=p[3]===void 0?Re:p[3]==='"'?jo:Ro):a===jo||a===Ro?a=Re:a===Mo||a===zo?a=ct:(a=Re,n=void 0);const c=a===Re&&t[s+1].startsWith("/>")?" ":"";i+=a===ct?l+ca:d>=0?(o.push(u),l.slice(0,d)+no+l.slice(d)+Ce+c):l+Ce+(d===-2?s:c)}return[bn(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Tt{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,a=0;const s=e.length-1,l=this.parts,[u,p]=mn(e,r);if(this.el=Tt.createElement(u,o),Ie.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=Ie.nextNode())!==null&&l.length<s;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(no)){const b=p[a++],c=n.getAttribute(d).split(Ce),f=/([.?@])?(.*)/.exec(b);l.push({type:1,index:i,name:f[2],strings:c,ctor:f[1]==="."?wn:f[1]==="?"?yn:f[1]==="@"?xn:zt}),n.removeAttribute(d)}else d.startsWith(Ce)&&(l.push({type:6,index:i}),n.removeAttribute(d));if(gn.test(n.tagName)){const d=n.textContent.split(Ce),b=d.length-1;if(b>0){n.textContent=Jt?Jt.emptyScript:"";for(let c=0;c<b;c++)n.append(d[c],Pt()),Ie.nextNode(),l.push({type:2,index:++i});n.append(d[b],Pt())}}}else if(n.nodeType===8)if(n.data===io)l.push({type:2,index:i});else{let d=-1;for(;(d=n.data.indexOf(Ce,d+1))!==-1;)l.push({type:7,index:i}),d+=Ce.length-1}i++}}static createElement(e,r){const o=He.createElement("template");return o.innerHTML=e,o}}function We(t,e,r=t,o){if(e===Le)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=Ot(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=We(t,n._$AS(t,e.values),n,o)),e}let vn=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??He).importNode(r,!0);Ie.currentNode=n;let i=Ie.nextNode(),a=0,s=0,l=o[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new ot(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new kn(i,this,e)),this._$AV.push(u),l=o[++s]}a!==l?.index&&(i=Ie.nextNode(),a++)}return Ie.currentNode=He,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}};class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=We(this,e,r),Ot(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==Le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&Ot(this._$AH)?this._$AA.nextSibling.data=e:this.T(He.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Tt.createElement(bn(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new vn(n,this),a=i.u(this.options);i.p(r),this.T(a),this._$AH=i}}_$AC(e){let r=Fo.get(e.strings);return r===void 0&&Fo.set(e.strings,r=new Tt(e)),r}k(e){ao(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new ot(this.O(Pt()),this.O(Pt()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class zt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}_$AI(e,r=this,o,n){const i=this.strings;let a=!1;if(i===void 0)e=We(this,e,r,0),a=!Ot(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{const s=e;let l,u;for(e=i[0],l=0;l<i.length-1;l++)u=We(this,s[o+l],r,l),u===Le&&(u=this._$AH[l]),a||=!Ot(u)||u!==this._$AH[l],u===j?e=j:e!==j&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!n&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class wn extends zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class yn extends zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class xn extends zt{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=We(this,e,r,0)??j)===Le)return;const o=this._$AH,n=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==j&&(o===j||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class kn{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){We(this,e)}}const ua={M:no,P:Ce,A:io,C:1,L:mn,R:vn,D:fn,V:We,I:ot,H:zt,N:yn,U:xn,B:wn,F:kn},ha=oo.litHtmlPolyfillSupport;ha?.(Tt,ot),(oo.litHtmlVersions??=[]).push("3.3.1");const pa=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new ot(e.insertBefore(Pt(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=globalThis;let D=class extends Ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}};D._$litElement$=!0,D.finalized=!0,so.litElementHydrateSupport?.({LitElement:D});const fa=so.litElementPolyfillSupport;fa?.({LitElement:D});(so.litElementVersions??=[]).push("4.2.1");function ga(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const Io=String.raw`[A-Za-z][^/\s>]*`,ba=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,ma=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,$n=String.raw`${ba}|${ma}`,va=String.raw`"(?<quotedAttrValue>[^"]*)"`,wa=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,ya=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,xa=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,ka=String.raw`${va}|${wa}|${ya}`,$a=String.raw`(?<attrName>${xa})(?:\s*=\s*(?:${ka}))?`,_a=String.raw`${$n}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,_n=String.raw`(?<attrSpace>\s*)(?:${$a}|(?<attrText>${_a}))`,Sa={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Io})(?<attrs>(?:${_n})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Io})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${$n}|['"]`,wildcard:String.raw`.`},Ea=Object.entries(Sa).map(([t,e])=>`(?<${t}>${e})`).join("|");function*Ca(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const Aa=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Dt(t,e="  ",r=80){const o=new RegExp(Ea,"gys"),n=new RegExp(_n,"gy"),i=[];let a=null,s=0,l=0,u="",p=0,d="";const b=()=>{if(d&&d!=`
`){const E=u.indexOf(`
`),A=E==-1?u.length:E;l+d.length+A>r&&(d=`
`)}const h=d==`
`&&u?e.repeat(p):"",v=`${d}${h}${u}`;if(v){const E=v.lastIndexOf(`
`);E==-1?l+=v.length:l=v.length-E-1,i.push(v)}u=d=""},c=(...h)=>{for(const v of h)!a&&/^\s+$/.test(v)?(b(),d=v):(u||(p=s),u+=v)};for(const h of Ca(o,t)){if(Dt.__strict&&h.groups.wildcard)throw new Error("Unexpected wildcard");if(h.groups.endTag){const v=h.groups.endTagName.toLowerCase();v==a&&(a=null),a||(--s,c(`</${v}>`))}if(a)c(h[0]);else if(h.groups.space)c(...h[0].match(/\n/g)?.slice(0,2)??[" "]);else if(h.groups.comment||h.groups.dtd||h.groups.text||h.groups.wildcard)c(h[0]);else if(h.groups.startTag){const v=h.groups.startTagName.toLowerCase();if(c(`<${v}`),++s,h.groups.attrs){let{lastIndex:A}=n,C,M;for(;C=n.exec(h.groups.attrs);){if({lastIndex:A}=n,Dt.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&c(/\n/.test(C.groups.attrSpace)?`
`:" "),c(C.groups.attrText)):((C.groups.attrSpace||!M?.groups.attrText)&&c(/\n/.test(C.groups.attrSpace)?`
`:" "),c(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),M=C}if(A!=h.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!h.groups.closingSlash;c(E?" />":">"),E||Aa.has(v)?--s:["pre","textarea","script","style"].includes(v)&&(a=v)}}b();let f=!1;for(;/^\s+$/.test(i[i.length-1]);){const h=i.pop();/\n/.test(h)&&(f=!0)}return f&&i.push(`
`),i.join("")}Dt.default=Dt;var La=Dt;const Pa=ga(La);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},co=t=>(...e)=>({_$litDirective$:t,values:e});let uo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qr=class extends uo{constructor(e){if(super(e),this.it=j,e.type!==lo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===Le)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Qr.directiveName="unsafeHTML",Qr.resultType=1;const ho=co(Qr);class Oa extends D{static styles=I`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(n=>n.nodeType===Node.TEXT_NODE?n.textContent:n.outerHTML).join("").trim();r=Pa(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${ho(this.source)}</code></pre>`}}customElements.define("syntax-highlight",Oa);var F=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?F.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(n){return o[n]?n:""}):"")},[]).join(" ")};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ta={attribute:!0,type:String,converter:Xt,reflect:!1,hasChanged:ro},Da=(t=Ta,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:a}=r;return{set(s){const l=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,l,t)},init(s){return s!==void 0&&this.C(a,void 0,t,s),s}}}if(o==="setter"){const{name:a}=r;return function(s){const l=this[a];e.call(this,s),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+o)};function m(t){return(e,r)=>typeof r=="object"?Da(t,e,r):((o,n,i)=>{const a=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Na(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ba=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function br(t,e){return(r,o,n)=>{const i=a=>a.renderRoot?.querySelector(t)??null;return Ba(r,o,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=t=>t??j,ae=I`
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
`;I`*, :before, :after {
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
        `;const Ma=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-text{color:var(--w-s-color-text)}.w-40{width:4rem}.w-max{width:max-content}.pb-0{padding-bottom:0}.pl-12{padding-left:1.2rem}.pr-12{padding-right:1.2rem}.cursor-default{cursor:default}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=Symbol.for(""),za=t=>{if(t?.r===Sn)return t?._$litStatic$},he=t=>({_$litStatic$:t,r:Sn}),Uo=new Map,Ra=t=>(e,...r)=>{const o=r.length;let n,i;const a=[],s=[];let l,u=0,p=!1;for(;u<o;){for(l=e[u];u<o&&(i=r[u],(n=za(i))!==void 0);)l+=n+e[++u],p=!0;u!==o&&s.push(i),a.push(l),u++}if(u===o&&a.push(e[o]),p){const d=a.join("$$lit$$");(e=Uo.get(d))===void 0&&(a.raw=a,Uo.set(d,e=a)),r=s}return t(e,...r)},pe=Ra(w),Be=t=>typeof t=="string",ja=t=>typeof t=="function",Ho=new Map,En="en";function po(t){return[...Array.isArray(t)?t:[t],En]}function fo(t,e,r){const o=po(t);r||(r="default");let n;if(typeof r=="string")switch(n={day:"numeric",month:"short",year:"numeric"},r){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric";break}else n=r;return Zt(()=>Kt("date",o,r),()=>new Intl.DateTimeFormat(o,n)).format(Be(e)?new Date(e):e)}function Fa(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return fo(t,e,o)}function Xr(t,e,r){const o=po(t);return Zt(()=>Kt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Wo(t,e,r,{offset:o=0,...n}){const i=po(t),a=e?Zt(()=>Kt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Zt(()=>Kt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[a.select(r-o)]??n.other}function Zt(t,e){const r=t();let o=Ho.get(r);return o||(o=e(),Ho.set(r,o)),o}function Kt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Cn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,An=t=>t.replace(/\\u([a-fA-F0-9]{4})|\\x([a-fA-F0-9]{2})/g,(e,r,o)=>{if(r){const n=parseInt(r,16);return String.fromCharCode(n)}else{const n=parseInt(o,16);return String.fromCharCode(n)}}),Ln="%__lingui_octothorpe__%",Ia=(t,e,r={})=>{const o=e||t,n=a=>typeof a=="object"?a:r[a],i=(a,s)=>{const l=Object.keys(r).length?n("number"):void 0,u=Xr(o,a,l);return s.replace(new RegExp(Ln,"g"),u)};return{plural:(a,s)=>{const{offset:l=0}=s,u=Wo(o,!1,a,s);return i(a-l,u)},selectordinal:(a,s)=>{const{offset:l=0}=s,u=Wo(o,!0,a,s);return i(a-l,u)},select:Ua,number:(a,s)=>Xr(o,a,n(s)||{style:s}),date:(a,s)=>fo(o,a,n(s)||s),time:(a,s)=>Fa(o,a,n(s)||s)}},Ua=(t,e)=>e[t]??e.other;function Ha(t,e,r){return(o={},n)=>{const i=Ia(e,r,n),a=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+Ln;if(Be(d))return p+d;const[b,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([E,A])=>{h[E]=a(A,c==="plural"||c==="selectordinal")}):h=f;let v;if(c){const E=i[c];v=E(o[b],h)}else v=o[b];return v==null?p:p+v},""):l,s=a(t);return Be(s)&&Cn.test(s)?An(s):Be(s)?s:s?String(s):""}}var Wa=Object.defineProperty,Va=(t,e,r)=>e in t?Wa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,qa=(t,e,r)=>(Va(t,e+"",r),r);let Ya=class{constructor(){qa(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var Qa=Object.defineProperty,Xa=(t,e,r)=>e in t?Qa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,je=(t,e,r)=>(Xa(t,typeof e!="symbol"?e+"":e,r),r);let Ja=class extends Ya{constructor(e){super(),je(this,"_locale",""),je(this,"_locales"),je(this,"_localeData",{}),je(this,"_messages",{}),je(this,"_missing"),je(this,"_messageCompiler"),je(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??En,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let n=o?.message;e||(e=""),Be(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],a=i===void 0,s=this._missing;if(s&&a)return ja(s)?s(this._locale,e):s;a&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Be(l)&&(this._messageCompiler?l=this._messageCompiler(l):console.warn(`Uncompiled message detected! Message:

> ${l}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Be(l)&&Cn.test(l)?An(l):Be(l)?l:Ha(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return fo(this._locales||this._locale,e,r)}number(e,r){return Xr(this._locales||this._locale,e,r)}};function Za(t={}){return new Ja(t)}const x=Za();var Ka={},Pn=["en","nb","fi","da","sv"],On="en",Ga=()=>{var t;let e;switch((t=process==null?void 0:Ka)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Tn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":On},Ar=t=>Pn.find(e=>t===e||t.toLowerCase().includes(e))||Tn();function es(){var t;if(typeof window>"u"){const e=Ga();return Ar(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Tn();return Pn.includes(e)?Ar(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ar(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),On}}var ts=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,rs=(t,e,r,o,n)=>{const i=es(),a=ts(i,t,e,r,o,n);x.load(i,a),x.activate(i)},dt={nb:{"icon.title.search":["Forstørrelsesglass"]},en:{"icon.title.search":["Magnifying glass"]},fi:{"icon.title.search":["Suurennuslasi"]},da:{"icon.title.search":["Forstørrelsesglas"]},sv:{"icon.title.search":["Förstoringsglas"]}};rs(dt.en,dt.nb,dt.fi,dt.da,dt.sv);var os=class extends D{render(){const t=x.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",os);var ns={},Dn=["en","nb","fi","da","sv"],Nn="en",is=()=>{var t;let e;switch((t=process==null?void 0:ns)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Bn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Nn},Lr=t=>Dn.find(e=>t===e||t.toLowerCase().includes(e))||Bn();function as(){var t;if(typeof window>"u"){const e=is();return Lr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Bn();return Dn.includes(e)?Lr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Lr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Nn}}var ss=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ls=(t,e,r,o,n)=>{const i=as(),a=ss(i,t,e,r,o,n);x.load(i,a),x.activate(i)},ut={nb:{"icon.title.close":["Kryss"]},en:{"icon.title.close":["Cross"]},fi:{"icon.title.close":["Rasti"]},da:{"icon.title.close":["Kryds"]},sv:{"icon.title.close":["Kryss"]}};ls(ut.en,ut.nb,ut.fi,ut.da,ut.sv);var cs=class extends D{render(){const t=x.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",cs);var ds=Object.defineProperty,mr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&ds(e,r,n),n};const Mn="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",us={wrapper:Mn+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},hs={wrapper:Mn+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"};class Rt extends D{constructor(){super(...arguments),this.clear=!1,this.search=!1}static{this.styles=[ae,Ma]}get _classBase(){return this.slot==="suffix"?us:hs}get _classes(){return F([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}mr([m({attribute:"aria-label"})],Rt.prototype,"ariaLabel");mr([m({type:Boolean})],Rt.prototype,"clear");mr([m({type:Boolean})],Rt.prototype,"search");mr([m()],Rt.prototype,"label");customElements.get("w-affix")||customElements.define("w-affix",Rt);var ps={},zn=["en","nb","fi","da","sv"],Rn="en",fs=()=>{var t;let e;switch((t=process==null?void 0:ps)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},jn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Rn},Pr=t=>zn.find(e=>t===e||t.toLowerCase().includes(e))||jn();function gs(){var t;if(typeof window>"u"){const e=fs();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=jn();return zn.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Rn}}var bs=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ms=(t,e,r,o,n)=>{const i=gs(),a=bs(i,t,e,r,o,n);x.load(i,a),x.activate(i)},ht={nb:{"icon.title.info":["Informasjonssirkel"]},en:{"icon.title.info":["Information circle"]},fi:{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]},da:{"icon.title.info":["Informationscirkel"]},sv:{"icon.title.info":["Informationscirkel"]}};ms(ht.en,ht.nb,ht.fi,ht.da,ht.sv);var vs=class extends D{render(){const t=x.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",vs);var ws={},Fn=["en","nb","fi","da","sv"],In="en",ys=()=>{var t;let e;switch((t=process==null?void 0:ws)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Un=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":In},Or=t=>Fn.find(e=>t===e||t.toLowerCase().includes(e))||Un();function xs(){var t;if(typeof window>"u"){const e=ys();return Or(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Un();return Fn.includes(e)?Or(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Or(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),In}}var ks=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,$s=(t,e,r,o,n)=>{const i=xs(),a=ks(i,t,e,r,o,n);x.load(i,a),x.activate(i)},pt={nb:{"icon.title.warning":["Varseltrekant med utropstegn"]},en:{"icon.title.warning":["Warning triangle with exclamation point"]},fi:{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]},da:{"icon.title.warning":["Advarselstrekant med et udråbstegn"]},sv:{"icon.title.warning":["Varningstriangel med utropstecken"]}};$s(pt.en,pt.nb,pt.fi,pt.da,pt.sv);var _s=class extends D{render(){const t=x.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",_s);var Ss={},Hn=["en","nb","fi","da","sv"],Wn="en",Es=()=>{var t;let e;switch((t=process==null?void 0:Ss)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Vn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Wn},Tr=t=>Hn.find(e=>t===e||t.toLowerCase().includes(e))||Vn();function Cs(){var t;if(typeof window>"u"){const e=Es();return Tr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Vn();return Hn.includes(e)?Tr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Tr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Wn}}var As=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Ls=(t,e,r,o,n)=>{const i=Cs(),a=As(i,t,e,r,o,n);x.load(i,a),x.activate(i)},ft={nb:{"icon.title.error":["Åttekant med utropstegn"]},en:{"icon.title.error":["Octagon with exclamation point"]},fi:{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]},da:{"icon.title.error":["Ottekant med et udråbstegn"]},sv:{"icon.title.error":["Oktagon med utropstecken"]}};Ls(ft.en,ft.nb,ft.fi,ft.da,ft.sv);var Ps=class extends D{render(){const t=x.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",Ps);var Os={},qn=["en","nb","fi","da","sv"],Yn="en",Ts=()=>{var t;let e;switch((t=process==null?void 0:Os)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Qn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Yn},Dr=t=>qn.find(e=>t===e||t.toLowerCase().includes(e))||Qn();function Ds(){var t;if(typeof window>"u"){const e=Ts();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Qn();return qn.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Yn}}var Ns=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Bs=(t,e,r,o,n)=>{const i=Ds(),a=Ns(i,t,e,r,o,n);x.load(i,a),x.activate(i)},gt={nb:{"icon.title.success":["Sirkel med sjekkmerke"]},en:{"icon.title.success":["Circle with checkmark"]},fi:{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]},da:{"icon.title.success":["Cirkel med et flueben"]},sv:{"icon.title.success":["Cirkel med bock"]}};Bs(gt.en,gt.nb,gt.fi,gt.da,gt.sv);var Ms=class extends D{render(){const t=x.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",Ms);const zs=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Rs=Object.defineProperty,go=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&Rs(e,r,n),n};const bt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},mt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class vr extends D{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!mt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return F([bt.wrapper,bt[this.variant]])}get _iconClasses(){const e=bt[`${this.variant}Icon`];return F([bt.icon,e])}static{this.styles=[ae,zs,I`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===mt.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===mt.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===mt.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===mt.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${bt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}go([m({reflect:!0})],vr.prototype,"variant");go([m({type:Boolean,reflect:!0})],vr.prototype,"show");go([m({reflect:!0})],vr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",vr);const js=["top","right","bottom","left"],Ve=Math.min,ge=Math.max,Gt=Math.round,_e=t=>({x:t,y:t}),Fs={left:"right",right:"left",bottom:"top",top:"bottom"},Is={start:"end",end:"start"};function Jr(t,e,r){return ge(t,Ve(e,r))}function qe(t,e){return typeof t=="function"?t(e):t}function Me(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function Xn(t){return t==="x"?"y":"x"}function bo(t){return t==="y"?"height":"width"}const Us=new Set(["top","bottom"]);function Ae(t){return Us.has(Me(t))?"y":"x"}function mo(t){return Xn(Ae(t))}function Hs(t,e,r){r===void 0&&(r=!1);const o=nt(t),n=mo(t),i=bo(n);let a=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=er(a)),[a,er(a)]}function Ws(t){const e=er(t);return[Zr(t),e,Zr(e)]}function Zr(t){return t.replace(/start|end/g,e=>Is[e])}const Vo=["left","right"],qo=["right","left"],Vs=["top","bottom"],qs=["bottom","top"];function Ys(t,e,r){switch(t){case"top":case"bottom":return r?e?qo:Vo:e?Vo:qo;case"left":case"right":return e?Vs:qs;default:return[]}}function Qs(t,e,r,o){const n=nt(t);let i=Ys(Me(t),r==="start",o);return n&&(i=i.map(a=>a+"-"+n),e&&(i=i.concat(i.map(Zr)))),i}function er(t){return t.replace(/left|right|bottom|top/g,e=>Fs[e])}function Xs(t){return{top:0,right:0,bottom:0,left:0,...t}}function Jn(t){return typeof t!="number"?Xs(t):{top:t,right:t,bottom:t,left:t}}function tr(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function Yo(t,e,r){let{reference:o,floating:n}=t;const i=Ae(e),a=mo(e),s=bo(a),l=Me(e),u=i==="y",p=o.x+o.width/2-n.width/2,d=o.y+o.height/2-n.height/2,b=o[s]/2-n[s]/2;let c;switch(l){case"top":c={x:p,y:o.y-n.height};break;case"bottom":c={x:p,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:d};break;case"left":c={x:o.x-n.width,y:d};break;default:c={x:o.x,y:o.y}}switch(nt(e)){case"start":c[a]-=b*(r&&u?-1:1);break;case"end":c[a]+=b*(r&&u?-1:1);break}return c}const Js=async(t,e,r)=>{const{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:a}=r,s=i.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:p,y:d}=Yo(u,o,l),b=o,c={},f=0;for(let h=0;h<s.length;h++){const{name:v,fn:E}=s[h],{x:A,y:C,data:M,reset:k}=await E({x:p,y:d,initialPlacement:o,placement:b,strategy:n,middlewareData:c,rects:u,platform:a,elements:{reference:t,floating:e}});p=A??p,d=C??d,c={...c,[v]:{...c[v],...M}},k&&f<=50&&(f++,typeof k=="object"&&(k.placement&&(b=k.placement),k.rects&&(u=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:n}):k.rects),{x:p,y:d}=Yo(u,b,l)),h=-1)}return{x:p,y:d,placement:b,strategy:n,middlewareData:c}};async function Nt(t,e){var r;e===void 0&&(e={});const{x:o,y:n,platform:i,rects:a,elements:s,strategy:l}=t,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:b=!1,padding:c=0}=qe(e,t),f=Jn(c),v=s[b?d==="floating"?"reference":"floating":d],E=tr(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(v)))==null||r?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:u,rootBoundary:p,strategy:l})),A=d==="floating"?{x:o,y:n,width:a.floating.width,height:a.floating.height}:a.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),M=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},k=tr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:A,offsetParent:C,strategy:l}):A);return{top:(E.top-k.top+f.top)/M.y,bottom:(k.bottom-E.bottom+f.bottom)/M.y,left:(E.left-k.left+f.left)/M.x,right:(k.right-E.right+f.right)/M.x}}const Zs=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:n,rects:i,platform:a,elements:s,middlewareData:l}=e,{element:u,padding:p=0}=qe(t,e)||{};if(u==null)return{};const d=Jn(p),b={x:r,y:o},c=mo(n),f=bo(c),h=await a.getDimensions(u),v=c==="y",E=v?"top":"left",A=v?"bottom":"right",C=v?"clientHeight":"clientWidth",M=i.reference[f]+i.reference[c]-b[c]-i.floating[f],k=b[c]-i.reference[c],L=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let P=L?L[C]:0;(!P||!await(a.isElement==null?void 0:a.isElement(L)))&&(P=s.floating[C]||i.floating[f]);const z=M/2-k/2,U=P/2-h[f]/2-1,H=Ve(d[E],U),K=Ve(d[A],U),W=H,se=P-h[f]-K,B=P/2-h[f]/2+z,G=Jr(W,B,se),X=!l.arrow&&nt(n)!=null&&B!==G&&i.reference[f]/2-(B<W?H:K)-h[f]/2<0,te=X?B<W?B-W:B-se:0;return{[c]:b[c]+te,data:{[c]:G,centerOffset:B-G-te,...X&&{alignmentOffset:te}},reset:X}}}),Ks=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:n,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:u}=e,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:b,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:h=!0,...v}=qe(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const E=Me(n),A=Ae(s),C=Me(s)===s,M=await(l.isRTL==null?void 0:l.isRTL(u.floating)),k=b||(C||!h?[er(s)]:Ws(s)),L=f!=="none";!b&&L&&k.push(...Qs(s,h,f,M));const P=[s,...k],z=await Nt(e,v),U=[];let H=((o=i.flip)==null?void 0:o.overflows)||[];if(p&&U.push(z[E]),d){const B=Hs(n,a,M);U.push(z[B[0]],z[B[1]])}if(H=[...H,{placement:n,overflows:U}],!U.every(B=>B<=0)){var K,W;const B=(((K=i.flip)==null?void 0:K.index)||0)+1,G=P[B];if(G&&(!(d==="alignment"?A!==Ae(G):!1)||H.every(Y=>Ae(Y.placement)===A?Y.overflows[0]>0:!0)))return{data:{index:B,overflows:H},reset:{placement:G}};let X=(W=H.filter(te=>te.overflows[0]<=0).sort((te,Y)=>te.overflows[1]-Y.overflows[1])[0])==null?void 0:W.placement;if(!X)switch(c){case"bestFit":{var se;const te=(se=H.filter(Y=>{if(L){const ne=Ae(Y.placement);return ne===A||ne==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(ne=>ne>0).reduce((ne,Qe)=>ne+Qe,0)]).sort((Y,ne)=>Y[1]-ne[1])[0])==null?void 0:se[0];te&&(X=te);break}case"initialPlacement":X=s;break}if(n!==X)return{reset:{placement:X}}}return{}}}};function Qo(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Xo(t){return js.some(e=>t[e]>=0)}const Gs=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...n}=qe(t,e);switch(o){case"referenceHidden":{const i=await Nt(e,{...n,elementContext:"reference"}),a=Qo(i,r.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Xo(a)}}}case"escaped":{const i=await Nt(e,{...n,altBoundary:!0}),a=Qo(i,r.floating);return{data:{escapedOffsets:a,escaped:Xo(a)}}}default:return{}}}}},el=new Set(["left","top"]);async function tl(t,e){const{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),a=Me(r),s=nt(r),l=Ae(r)==="y",u=el.has(a)?-1:1,p=i&&l?-1:1,d=qe(e,t);let{mainAxis:b,crossAxis:c,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof f=="number"&&(c=s==="end"?f*-1:f),l?{x:c*p,y:b*u}:{x:b*u,y:c*p}}const rl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:n,y:i,placement:a,middlewareData:s}=e,l=await tl(e,t);return a===((r=s.offset)==null?void 0:r.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:a}}}}},ol=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:v=>{let{x:E,y:A}=v;return{x:E,y:A}}},...l}=qe(t,e),u={x:r,y:o},p=await Nt(e,l),d=Ae(Me(n)),b=Xn(d);let c=u[b],f=u[d];if(i){const v=b==="y"?"top":"left",E=b==="y"?"bottom":"right",A=c+p[v],C=c-p[E];c=Jr(A,c,C)}if(a){const v=d==="y"?"top":"left",E=d==="y"?"bottom":"right",A=f+p[v],C=f-p[E];f=Jr(A,f,C)}const h=s.fn({...e,[b]:c,[d]:f});return{...h,data:{x:h.x-r,y:h.y-o,enabled:{[b]:i,[d]:a}}}}}},nl=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:n,rects:i,platform:a,elements:s}=e,{apply:l=()=>{},...u}=qe(t,e),p=await Nt(e,u),d=Me(n),b=nt(n),c=Ae(n)==="y",{width:f,height:h}=i.floating;let v,E;d==="top"||d==="bottom"?(v=d,E=b===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(E=d,v=b==="end"?"top":"bottom");const A=h-p.top-p.bottom,C=f-p.left-p.right,M=Ve(h-p[v],A),k=Ve(f-p[E],C),L=!e.middlewareData.shift;let P=M,z=k;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=A),L&&!b){const H=ge(p.left,0),K=ge(p.right,0),W=ge(p.top,0),se=ge(p.bottom,0);c?z=f-2*(H!==0||K!==0?H+K:ge(p.left,p.right)):P=h-2*(W!==0||se!==0?W+se:ge(p.top,p.bottom))}await l({...e,availableWidth:z,availableHeight:P});const U=await a.getDimensions(s.floating);return f!==U.width||h!==U.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<"u"}function it(t){return Zn(t)?(t.nodeName||"").toLowerCase():"#document"}function ue(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Pe(t){var e;return(e=(Zn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Zn(t){return wr()?t instanceof Node||t instanceof ue(t).Node:!1}function we(t){return wr()?t instanceof Element||t instanceof ue(t).Element:!1}function Se(t){return wr()?t instanceof HTMLElement||t instanceof ue(t).HTMLElement:!1}function Jo(t){return!wr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ue(t).ShadowRoot}const il=new Set(["inline","contents"]);function jt(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=ye(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!il.has(n)}const al=new Set(["table","td","th"]);function sl(t){return al.has(it(t))}const ll=[":popover-open",":modal"];function yr(t){return ll.some(e=>{try{return t.matches(e)}catch{return!1}})}const cl=["transform","translate","scale","rotate","perspective"],dl=["transform","translate","scale","rotate","perspective","filter"],ul=["paint","layout","strict","content"];function vo(t){const e=wo(),r=we(t)?ye(t):t;return cl.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||dl.some(o=>(r.willChange||"").includes(o))||ul.some(o=>(r.contain||"").includes(o))}function hl(t){let e=ze(t);for(;Se(e)&&!rt(e);){if(vo(e))return e;if(yr(e))return null;e=ze(e)}return null}function wo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const pl=new Set(["html","body","#document"]);function rt(t){return pl.has(it(t))}function ye(t){return ue(t).getComputedStyle(t)}function xr(t){return we(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ze(t){if(it(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Jo(t)&&t.host||Pe(t);return Jo(e)?e.host:e}function Kn(t){const e=ze(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Se(e)&&jt(e)?e:Kn(e)}function Gn(t,e,r){var o;e===void 0&&(e=[]);const n=Kn(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),a=ue(n);return i?(Kr(a),e.concat(a,a.visualViewport||[],jt(n)?n:[],[])):e.concat(n,Gn(n,[]))}function Kr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ei(t){const e=ye(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=Se(t),i=n?t.offsetWidth:r,a=n?t.offsetHeight:o,s=Gt(r)!==i||Gt(o)!==a;return s&&(r=i,o=a),{width:r,height:o,$:s}}function ti(t){return we(t)?t:t.contextElement}function tt(t){const e=ti(t);if(!Se(e))return _e(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=ei(e);let a=(i?Gt(r.width):r.width)/o,s=(i?Gt(r.height):r.height)/n;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const fl=_e(0);function ri(t){const e=ue(t);return!wo()||!e.visualViewport?fl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function gl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ue(t)?!1:e}function Bt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),i=ti(t);let a=_e(1);e&&(o?we(o)&&(a=tt(o)):a=tt(t));const s=gl(i,r,o)?ri(i):_e(0);let l=(n.left+s.x)/a.x,u=(n.top+s.y)/a.y,p=n.width/a.x,d=n.height/a.y;if(i){const b=ue(i),c=o&&we(o)?ue(o):o;let f=b,h=Kr(f);for(;h&&o&&c!==f;){const v=tt(h),E=h.getBoundingClientRect(),A=ye(h),C=E.left+(h.clientLeft+parseFloat(A.paddingLeft))*v.x,M=E.top+(h.clientTop+parseFloat(A.paddingTop))*v.y;l*=v.x,u*=v.y,p*=v.x,d*=v.y,l+=C,u+=M,f=ue(h),h=Kr(f)}}return tr({width:p,height:d,x:l,y:u})}function yo(t,e){const r=xr(t).scrollLeft;return e?e.left+r:Bt(Pe(t)).left+r}function oi(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(r?0:yo(t,o)),i=o.top+e.scrollTop;return{x:n,y:i}}function bl(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t;const i=n==="fixed",a=Pe(o),s=e?yr(e.floating):!1;if(o===a||s&&i)return r;let l={scrollLeft:0,scrollTop:0},u=_e(1);const p=_e(0),d=Se(o);if((d||!d&&!i)&&((it(o)!=="body"||jt(a))&&(l=xr(o)),Se(o))){const c=Bt(o);u=tt(o),p.x=c.x+o.clientLeft,p.y=c.y+o.clientTop}const b=a&&!d&&!i?oi(a,l,!0):_e(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+p.x+b.x,y:r.y*u.y-l.scrollTop*u.y+p.y+b.y}}function ml(t){return Array.from(t.getClientRects())}function vl(t){const e=Pe(t),r=xr(t),o=t.ownerDocument.body,n=ge(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=ge(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let a=-r.scrollLeft+yo(t);const s=-r.scrollTop;return ye(o).direction==="rtl"&&(a+=ge(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:a,y:s}}function wl(t,e){const r=ue(t),o=Pe(t),n=r.visualViewport;let i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;const u=wo();(!u||u&&e==="fixed")&&(s=n.offsetLeft,l=n.offsetTop)}return{width:i,height:a,x:s,y:l}}function yl(t,e){const r=Bt(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=Se(t)?tt(t):_e(1),a=t.clientWidth*i.x,s=t.clientHeight*i.y,l=n*i.x,u=o*i.y;return{width:a,height:s,x:l,y:u}}function Zo(t,e,r){let o;if(e==="viewport")o=wl(t,r);else if(e==="document")o=vl(Pe(t));else if(we(e))o=yl(e,r);else{const n=ri(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return tr(o)}function ni(t,e){const r=ze(t);return r===e||!we(r)||rt(r)?!1:ye(r).position==="fixed"||ni(r,e)}function xl(t,e){const r=e.get(t);if(r)return r;let o=Gn(t,[]).filter(s=>we(s)&&it(s)!=="body"),n=null;const i=ye(t).position==="fixed";let a=i?ze(t):t;for(;we(a)&&!rt(a);){const s=ye(a),l=vo(a);!l&&s.position==="fixed"&&(n=null),(i?!l&&!n:!l&&s.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||jt(a)&&!l&&ni(t,a))?o=o.filter(p=>p!==a):n=s,a=ze(a)}return e.set(t,o),o}function kl(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t;const a=[...r==="clippingAncestors"?yr(e)?[]:xl(e,this._c):[].concat(r),o],s=a[0],l=a.reduce((u,p)=>{const d=Zo(e,p,n);return u.top=ge(d.top,u.top),u.right=Ve(d.right,u.right),u.bottom=Ve(d.bottom,u.bottom),u.left=ge(d.left,u.left),u},Zo(e,s,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function $l(t){const{width:e,height:r}=ei(t);return{width:e,height:r}}function _l(t,e,r){const o=Se(e),n=Pe(e),i=r==="fixed",a=Bt(t,!0,i,e);let s={scrollLeft:0,scrollTop:0};const l=_e(0);if(o||!o&&!i)if((it(e)!=="body"||jt(n))&&(s=xr(e)),o){const b=Bt(e,!0,i,e);l.x=b.x+e.clientLeft,l.y=b.y+e.clientTop}else n&&(l.x=yo(n));const u=n&&!o&&!i?oi(n,s):_e(0),p=a.left+s.scrollLeft-l.x-u.x,d=a.top+s.scrollTop-l.y-u.y;return{x:p,y:d,width:a.width,height:a.height}}function Nr(t){return ye(t).position==="static"}function Ko(t,e){if(!Se(t)||ye(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Pe(t)===r&&(r=r.ownerDocument.body),r}function ii(t,e){const r=ue(t);if(yr(t))return r;if(!Se(t)){let n=ze(t);for(;n&&!rt(n);){if(we(n)&&!Nr(n))return n;n=ze(n)}return r}let o=Ko(t,e);for(;o&&sl(o)&&Nr(o);)o=Ko(o,e);return o&&rt(o)&&Nr(o)&&!vo(o)?r:o||hl(t)||r}const Sl=async function(t){const e=this.getOffsetParent||ii,r=this.getDimensions,o=await r(t.floating);return{reference:_l(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function El(t){return ye(t).direction==="rtl"}const Cl={convertOffsetParentRelativeRectToViewportRelativeRect:bl,getDocumentElement:Pe,getClippingRect:kl,getOffsetParent:ii,getElementRects:Sl,getClientRects:ml,getDimensions:$l,getScale:tt,isElement:we,isRTL:El},Al=rl,Ll=ol,Pl=Ks,Ol=nl,Tl=Gs,Dl=Zs,Nl=(t,e,r)=>{const o=new Map,n={platform:Cl,...r},i={...n.platform,_c:o};return Js(t,e,{...n,platform:i})},rr="top-start",or="top",nr="top-end",ir="right-start",ar="right",sr="right-end",lr="bottom-start",Mt="bottom",cr="bottom-end",dr="left-start",ur="left",hr="left-end",Go=[rr,or,nr,ir,ar,sr,lr,Mt,cr,dr,ur,hr],et={[rr]:lr,[or]:Mt,[nr]:cr,[lr]:rr,[Mt]:or,[cr]:nr,[dr]:ir,[ur]:ar,[hr]:sr,[ir]:dr,[ar]:ur,[sr]:hr},Bl={[dr]:-45,[ur]:-45,[hr]:-45,[rr]:45,[or]:45,[nr]:45,[ir]:135,[ar]:135,[sr]:135,[lr]:-135,[Mt]:-135,[cr]:-135},ai=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},Ml=t=>t.split("-")[0],zl=t=>et[Ml(t)],si=t=>et[t],Rl=t=>Bl[si(t)],jl=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${ai(zl(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},en=8,Vt=24;async function tn(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return Nl(e,r,{placement:t?.directionName??Mt,middleware:[Al({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Pl({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Ll({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Dl({element:t?.arrowEl}),Tl(),Ol({apply(){Object.assign(r.style,{paddingRight:`${en}px`,paddingLeft:`${en}px`})}})]}).then(({x:o,y:n,middlewareData:i,placement:a})=>{if(t.actualDirection=a,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${n}px`}),i?.hide&&!t?.isCallout){const{referenceHidden:s}=i.hide;Object.assign(r.style,{visibility:s?"hidden":""})}if(i?.arrow&&t?.arrowEl){const s=t?.arrowEl,{x:l,y:u}=i.arrow,p=window.getComputedStyle(r).direction==="rtl",d=si(a).split("-")[1];let b="",c="",f="",h="";if(d==="start"){const v=typeof l=="number"?`calc(${Vt}px - ${s.offsetWidth/2}px)`:"";b=typeof u=="number"?`calc(${Vt}px - ${s.offsetWidth/2}px)`:"",c=p?v:"",h=p?"":v}else if(d==="end"){const v=typeof l=="number"?`calc(${Vt}px - ${s.offsetWidth/2}px)`:"";c=p?"":v,h=p?v:"",f=typeof u=="number"?`calc(${Vt}px - ${s.offsetWidth/2}px)`:""}else h=typeof l=="number"?`${l}px`:"",b=typeof u=="number"?`${u}px`:"";Object.assign(s.style,{top:b,right:c,bottom:f,left:h}),jl(s,Rl(a),a)}}),t}const de={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Br={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},ve={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},vt="font-bold focusable justify-center transition-colors ease-in-out",li={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},Fl={primary:`border-0 rounded-8 ${vt}`,secondary:`border-2 rounded-8 ${vt}`,utility:`border rounded-4 ${vt}`,negative:`border-0 rounded-8 ${vt}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${vt}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${li.link}`},Il={medium:"text-m leading-[24]",xsmall:"text-xs"},Je={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Il.medium} ${Fl.pill} ${li.pill} justify-self-end -mr-8 ml-8`};var ci={},di={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(di);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=di;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(c){return!c.match(/[^a-f0-9]/i)?parseInt(c,16):NaN}function o(c,f,h){const v=r(c);if(Number.isNaN(v)||h!==void 0&&h!==c.length)throw new SyntaxError(e.errorMessages.get(f));return v}function n(c){const f=o(c,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function i(c,f){const h=o(c,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const v=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(h,v)}return String.fromCharCode(h)}function a(c){return c.charAt(0)==="{"&&c.charAt(c.length-1)==="}"}function s(c){if(!a(c))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=c.slice(1,-1),h=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(h)}catch(v){throw v instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):v}}function l(c,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const h=parseInt(c,8);return String.fromCharCode(h)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function p(c){return u.get(c)||c}const d=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function b(c,f=!1){return c.replace(d,function(h,v,E,A,C,M,k,L,P){if(v!==void 0)return"\\";if(E!==void 0)return n(E);if(A!==void 0)return s(A);if(C!==void 0)return i(C,M);if(k!==void 0)return i(k);if(L==="0")return"\0";if(L!==void 0)return l(L,!f);if(P!==void 0)return p(P);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=b,t.default=b})(ci);const Ue=t=>typeof t=="string",Ul=t=>typeof t=="function",rn=new Map,ui="en";function xo(t){return[...Array.isArray(t)?t:[t],ui]}function hi(t,e,r){const o=xo(t);return pr(()=>fr("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ue(e)?new Date(e):e)}function Gr(t,e,r){const o=xo(t);return pr(()=>fr("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function on(t,e,r,{offset:o=0,...n}){const i=xo(t),a=e?pr(()=>fr("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):pr(()=>fr("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[a.select(r-o)]??n.other}function pr(t,e){const r=t();let o=rn.get(r);return o||(o=e(),rn.set(r,o)),o}function fr(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const pi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,fi="%__lingui_octothorpe__%",Hl=(t,e,r={})=>{const o=e||t,n=a=>typeof a=="object"?a:r[a]||{style:a},i=(a,s)=>{const l=Object.keys(r).length?n("number"):void 0,u=Gr(o,a,l);return s.replace(new RegExp(fi,"g"),u)};return{plural:(a,s)=>{const{offset:l=0}=s,u=on(o,!1,a,s);return i(a-l,u)},selectordinal:(a,s)=>{const{offset:l=0}=s,u=on(o,!0,a,s);return i(a-l,u)},select:Wl,number:(a,s)=>Gr(o,a,n(s)),date:(a,s)=>hi(o,a,n(s))}},Wl=(t,e)=>e[t]??e.other;function Vl(t,e,r){return(o={},n)=>{const i=Hl(e,r,n),a=(l,u=!1)=>Array.isArray(l)?l.reduce((p,d)=>{if(d==="#"&&u)return p+fi;if(Ue(d))return p+d;const[b,c,f]=d;let h={};c==="plural"||c==="selectordinal"||c==="select"?Object.entries(f).forEach(([E,A])=>{h[E]=a(A,c==="plural"||c==="selectordinal")}):h=f;let v;if(c){const E=i[c];v=E(o[b],h)}else v=o[b];return v==null?p:p+v},""):l,s=a(t);return Ue(s)&&pi.test(s)?ci.unraw(s.trim()):Ue(s)?s.trim():s?String(s):""}}var ql=Object.defineProperty,Yl=(t,e,r)=>e in t?ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ql=(t,e,r)=>(Yl(t,e+"",r),r);class Xl{constructor(){Ql(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Jl=Object.defineProperty,Zl=(t,e,r)=>e in t?Jl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ze=(t,e,r)=>(Zl(t,typeof e!="symbol"?e+"":e,r),r);class Kl extends Xl{constructor(e){super(),Ze(this,"_locale",""),Ze(this,"_locales"),Ze(this,"_localeData",{}),Ze(this,"_messages",{}),Ze(this,"_missing"),Ze(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??ui,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let n=o?.message;e||(e=""),Ue(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],a=i===void 0,s=this._missing;if(s&&a)return Ul(s)?s(this._locale,e):s;a&&this.emit("missing",{id:e,locale:this._locale});let l=i||n||e;return Ue(l)&&pi.test(l)?JSON.parse(`"${l}"`):Ue(l)?l:Vl(l,this._locale,this._locales)(r,o?.formats)}date(e,r){return hi(this._locales||this._locale,e,r)}number(e,r){return Gr(this._locales||this._locale,e,r)}}function Gl(t={}){return new Kl(t)}const Mr=Gl();class ec extends D{#e=!1;get i18n(){return this.#e||(Mr.load(this.locale,this.translations),Mr.activate(this.locale),this.#e=!0),Mr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const ko=()=>!(typeof window<"u");class gi{isServer=!1;css=""}const tc=(t=[])=>{const e=new gi;if(ko()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const n=new XMLHttpRequest;n.open("GET",o,!1),n.send(),e.css+=n.responseText}return e},rc=()=>tc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),oc=async(t=[])=>{const e=new gi;if(ko()){for(const i of t)e.css+=`@import url('${i}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(i=>fetch(i))),n=await Promise.all(o.map(i=>i.text()));for(const i of n)e.css+=i;return e},nn=async()=>oc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,a=/@import.+?;?$/gm;function s(g){var y=g.replace(a,"");return y!==g&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function l(g){return"isConnected"in g?g.isConnected:document.contains(g)}function u(g){return g.filter(function(y,T){return g.indexOf(y)===T})}function p(g,y){return g.filter(function(T){return y.indexOf(T)===-1})}function d(g){g.parentNode.removeChild(g)}function b(g){return g.shadowRoot||r.get(g)}var c=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,h=f.prototype;h.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},h.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function v(g){return typeof g=="object"?W.isPrototypeOf(g)||h.isPrototypeOf(g):!1}function E(g){return typeof g=="object"?h.isPrototypeOf(g):!1}var A=new WeakMap,C=new WeakMap,M=new WeakMap,k=new WeakMap;function L(g,y){var T=document.createElement("style");return M.get(g).set(y,T),C.get(g).push(y),T}function P(g,y){return M.get(g).get(y)}function z(g,y){M.get(g).delete(y),C.set(g,C.get(g).filter(function(T){return T!==y}))}function U(g,y){requestAnimationFrame(function(){y.textContent=A.get(g).textContent,k.get(g).forEach(function(T){return y.sheet[T.method].apply(y.sheet,T.args)})})}function H(g){if(!A.has(g))throw new TypeError("Illegal invocation")}function K(){var g=this,y=document.createElement("style");e.body.appendChild(y),A.set(g,y),C.set(g,[]),M.set(g,new WeakMap),k.set(g,[])}var W=K.prototype;W.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(T){return Promise.reject(T)}},W.replaceSync=function(y){if(H(this),typeof y=="string"){var T=this;A.get(T).textContent=s(y),k.set(T,[]),C.get(T).forEach(function(ie){ie.isConnected()&&U(T,P(T,ie))})}},n(W,"cssRules",{configurable:!0,enumerable:!0,get:function(){return H(this),A.get(this).sheet.cssRules}}),n(W,"media",{configurable:!0,enumerable:!0,get:function(){return H(this),A.get(this).sheet.media}}),c.forEach(function(g){W[g]=function(){var y=this;H(y);var T=arguments;k.get(y).push({method:g,args:T}),C.get(y).forEach(function(le){if(le.isConnected()){var ee=P(y,le).sheet;ee[g].apply(ee,T)}});var ie=A.get(y).sheet;return ie[g].apply(ie,T)}}),n(K,Symbol.hasInstance,{configurable:!0,value:v});var se={childList:!0,subtree:!0},B=new WeakMap;function G(g){var y=B.get(g);return y||(y=new Lo(g),B.set(g,y)),y}function X(g){n(g.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(y){G(this).update(y)}})}function te(g,y){for(var T=document.createNodeIterator(g,NodeFilter.SHOW_ELEMENT,function(le){return b(le)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ie=void 0;ie=T.nextNode();)y(b(ie))}var Y=new WeakMap,ne=new WeakMap,Qe=new WeakMap;function Ki(g,y){return y instanceof HTMLStyleElement&&ne.get(g).some(function(T){return P(T,g)})}function Ao(g){var y=Y.get(g);return y instanceof Document?y.body:y}function Er(g){var y=document.createDocumentFragment(),T=ne.get(g),ie=Qe.get(g),le=Ao(g);ie.disconnect(),T.forEach(function(ee){y.appendChild(P(ee,g)||L(ee,g))}),le.insertBefore(y,null),ie.observe(le,se),T.forEach(function(ee){U(ee,P(ee,g))})}function Lo(g){var y=this;y.sheets=[],Y.set(y,g),ne.set(y,[]),Qe.set(y,new MutationObserver(function(T,ie){if(!document){ie.disconnect();return}T.forEach(function(le){t||i.call(le.addedNodes,function(ee){ee instanceof Element&&te(ee,function(Xe){G(Xe).connect()})}),i.call(le.removedNodes,function(ee){ee instanceof Element&&(Ki(y,ee)&&Er(y),t||te(ee,function(Xe){G(Xe).disconnect()}))})})}))}if(Lo.prototype={isConnected:function(){var g=Y.get(this);return g instanceof Document?g.readyState!=="loading":l(g.host)},connect:function(){var g=Ao(this);Qe.get(this).observe(g,se),ne.get(this).length>0&&Er(this),te(g,function(y){G(y).connect()})},disconnect:function(){Qe.get(this).disconnect()},update:function(g){var y=this,T=Y.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(g))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!g.every(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(g.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");y.sheets=g;var ie=ne.get(y),le=u(g),ee=p(ie,le);ee.forEach(function(Xe){d(P(Xe,y)),z(Xe,y)}),ne.set(y,le),y.isConnected()&&le.length>0&&Er(y)}},window.CSSStyleSheet=K,X(Document),"ShadowRoot"in window){X(ShadowRoot);var Po=Element.prototype,Gi=Po.attachShadow;Po.attachShadow=function(y){var T=Gi.call(this,y);return y.mode==="closed"&&r.set(this,T),T}}var Wt=G(document);Wt.isConnected()?Wt.connect():document.addEventListener("DOMContentLoaded",Wt.connect.bind(Wt))})();let Ct;if(ko()){const t=await nn();Ct=pn(t.css)}else{Ct=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await nn();Ct.replaceSync(r.css)}catch{const e=rc();Ct.replaceSync(e.css)}}class oe extends ec{static styles=[Ct]}var nc={};const ic=["en","nb","fi","da","sv"],bi="en",an=t=>ic.find(e=>t===e||t.toLowerCase().includes(e))||bi;function ac(){if(typeof window>"u"){const t=nc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return an(t)}try{const t=document.documentElement.lang;return an(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),bi}}const sc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Oe=(t,e,r,o,n)=>{const i=ac(),a=sc(i,t,e,r,o,n);x.load(i,a),x.activate(i)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lc=co(class extends uo{constructor(t){if(super(t),t.type!==lo.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Le}}),cc=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function mi(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:cc(e.toString())})),super.createProperty(e,o)}}}function dc(){return`m${Math.random().toString(36).slice(2)}`}const uc=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),hc=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),pc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),fc=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),gc=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class bc extends mi(oe){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[oe.styles,I`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Oe(hc,fc,pc,uc,gc),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(et).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(et))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Go.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Go)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?tn(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return et[this._actualDirection]}get _arrowClasses(){return F([Je.arrowBase,this._activeVariantClasses.arrow,Je[`arrowDirection${ai(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:Je[r],arrow:Je[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return F([Je.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return x._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${Je.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},tn(this.attentionState)}pointingAtDirection(){switch(et[this._actualDirection]){case"top-start":case"top":case"top-end":return x._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return x._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return x._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return x._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return x._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return x._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return x._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return x._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=dc());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${q(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?w`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:j}
              </div>
            `:w`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:j}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",bc);const mc=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var vc=Object.defineProperty,vi=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&vc(e,r,n),n};class $o extends D{constructor(){super(...arguments),this.variant="neutral"}static{this.styles=[ae,mc]}get _class(){return F(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",this.variant==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",this.variant==="info"&&"bg-[--w-color-badge-info-background] s-text",this.variant==="positive"&&"bg-[--w-color-badge-positive-background] s-text",this.variant==="warning"&&"bg-[--w-color-badge-warning-background] s-text",this.variant==="negative"&&"bg-[--w-color-badge-negative-background] s-text",this.variant==="disabled"&&"s-bg-disabled s-text",this.variant==="price"&&"bg-[--w-black/70] s-text-inverted-static",this.variant==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}vi([m({type:String,reflect:!0})],$o.prototype,"variant");vi([m({type:String,reflect:!0})],$o.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",$o);const wc=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var yc=Object.defineProperty,Ft=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&yc(e,r,n),n};class at extends D{static{this.styles=[ae,wc]}get _class(){return F(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?j:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}Ft([m({type:Boolean,reflect:!0})],at.prototype,"bleed");Ft([m({type:Boolean,reflect:!0})],at.prototype,"bordered");Ft([m({type:Boolean,reflect:!0})],at.prototype,"info");Ft([m({type:Boolean,reflect:!0})],at.prototype,"neutral");Ft([m({type:String,reflect:!0})],at.prototype,"role");customElements.get("w-box")||customElements.define("w-box",at);function xc(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const kc=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),$c=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),_c=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Sc=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Ec=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Cc=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var Ac=Object.defineProperty,Lc=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&Ac(e,r,n),n};const Ge={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Pc=w`<span class=${Ge.separator}>/</span>`;class wi extends D{static{this.styles=[ae,Cc]}constructor(){super(),Oe($c,Sc,_c,kc,Ec),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,n)=>{if(typeof o=="string"){const i=n===this.children.length-1;return w`<span class=${Ge.text} aria-current=${i?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?Ge.link:Ge.text),o});this._children=xc(r,Pc)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${Ge.a11y}>${this.ariaLabel}</h2>
        <div class=${Ge.wrapper}>${this._children}</div>
      </nav>
    `}}Lc([m({attribute:"aria-label",type:String})],wi.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",wi);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},J=function(t,e,r,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(t,r):n?n.value=r:e.set(t,r),r};function _o(t){var e,r,o,n,i,a,s,l,u,p,d,b,c,f,h,v,E,A;class C extends t{constructor(...k){var L,P,z;super(...k),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),n.set(this,!1),i.set(this,void 0),a.set(this,void 0),s.set(this,!0),l.set(this,""),u.set(this,()=>{J(this,n,!0,"f"),J(this,r,!0,"f"),R(this,e,"m",h).call(this)}),p.set(this,()=>{J(this,r,!1,"f"),R(this,e,"m",v).call(this,this.shouldFormValueUpdate()?R(this,l,"f"):""),!this.validity.valid&&R(this,n,"f")&&J(this,o,!0,"f");const U=R(this,e,"m",h).call(this);this.validationMessageCallback&&this.validationMessageCallback(U?this.internals.validationMessage:"")}),d.set(this,()=>{var U;R(this,s,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),J(this,s,!1,"f")),J(this,n,!0,"f"),J(this,o,!0,"f"),R(this,e,"m",h).call(this),(U=this===null||this===void 0?void 0:this.validationMessageCallback)===null||U===void 0||U.call(this,this.showError?this.internals.validationMessage:"")}),b.set(this,void 0),c.set(this,!1),f.set(this,Promise.resolve()),(L=this.addEventListener)===null||L===void 0||L.call(this,"focus",R(this,u,"f")),(P=this.addEventListener)===null||P===void 0||P.call(this,"blur",R(this,p,"f")),(z=this.addEventListener)===null||z===void 0||z.call(this,"invalid",R(this,d,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const k=this.validators.map(z=>z.attribute).flat(),L=super.observedAttributes||[];return[...new Set([...L,...k])]}static getValidator(k){return this.validators.find(L=>L.attribute===k)||null}static getValidators(k){return this.validators.filter(L=>{var P;if(L.attribute===k||!((P=L.attribute)===null||P===void 0)&&P.includes(k))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",h).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(k,L,P){var z;(z=super.attributeChangedCallback)===null||z===void 0||z.call(this,k,L,P);const H=this.constructor.getValidators(k);H?.length&&this.validationTarget&&this.setValue(R(this,l,"f"))}setValue(k){var L;J(this,o,!1,"f"),(L=this.validationMessageCallback)===null||L===void 0||L.call(this,""),J(this,l,k,"f");const z=this.shouldFormValueUpdate()?k:null;this.internals.setFormValue(z),R(this,e,"m",v).call(this,z),this.valueChangedCallback&&this.valueChangedCallback(z),R(this,e,"m",h).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(k=>k(R(this,f,"f")))}formResetCallback(){var k,L;J(this,n,!1,"f"),J(this,o,!1,"f"),R(this,e,"m",h).call(this),(k=this.resetFormControl)===null||k===void 0||k.call(this),(L=this.validationMessageCallback)===null||L===void 0||L.call(this,R(this,e,"m",h).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,a=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,p=new WeakMap,d=new WeakMap,b=new WeakMap,c=new WeakMap,f=new WeakMap,e=new WeakSet,h=function(){if(this.hasAttribute("disabled"))return!1;const k=R(this,o,"f")||R(this,n,"f")&&!this.validity.valid&&!R(this,r,"f");return k&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),k},v=function(k){const L=this.constructor,P={},z=L.validators,U=[],H=z.some(B=>B.isValid instanceof Promise);R(this,c,"f")||(J(this,f,new Promise(B=>{J(this,b,B,"f")}),"f"),J(this,c,!0,"f")),R(this,i,"f")&&(R(this,i,"f").abort(),J(this,a,R(this,i,"f"),"f"));const K=new AbortController;J(this,i,K,"f");let W,se=!1;z.length&&(z.forEach(B=>{const G=B.key||"customError",X=B.isValid(this,k,K.signal);X instanceof Promise?(U.push(X),X.then(Y=>{Y!=null&&(P[G]=!Y,W=R(this,e,"m",A).call(this,B,k),R(this,e,"m",E).call(this,P,W))})):(P[G]=!X,this.validity[G]!==!X&&(se=!0),!X&&!W&&(W=R(this,e,"m",A).call(this,B,k)))}),Promise.allSettled(U).then(()=>{var B;K?.signal.aborted||(J(this,c,!1,"f"),(B=R(this,b,"f"))===null||B===void 0||B.call(this))}),(se||!H)&&R(this,e,"m",E).call(this,P,W))},E=function(k,L){if(this.validationTarget)this.internals.setValidity(k,L,this.validationTarget),J(this,s,!1,"f");else{if(this.internals.setValidity(k,L),this.internals.validity.valid)return;J(this,s,!0,"f")}},A=function(k,L){if(this.validityCallback){const P=this.validityCallback(k.key||"customError");if(P)return P}return k.message instanceof Function?k.message(this,L):k.message},C}const Oc=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),Tc=JSON.parse('{"button.aria.loading":["Loading..."]}'),Dc=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Nc=JSON.parse('{"button.aria.loading":["Laster..."]}'),Bc=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Mc=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var zc=Object.defineProperty,fe=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&zc(e,r,n),n};const sn=["primary","secondary","negative","utility","pill","link"],Ne="font-bold focusable justify-center transition-colors ease-in-out",V={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},N={primary:`border-0 rounded-8 ${Ne}`,secondary:`border-2 rounded-8 ${Ne}`,utility:`border rounded-4 ${Ne}`,negative:`border-0 rounded-8 ${Ne}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Ne}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${V.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${V.loading}`,quiet:`border-0 rounded-8 ${Ne}`,utilityQuiet:`border-0 rounded-4 ${Ne}`,negativeQuiet:`border-0 rounded-8 ${Ne}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${V.disabled}`},O={secondary:`${_.medium} ${S.medium} ${N.secondary} ${V.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${N.secondary} ${V.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${N.secondary} ${$.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${N.secondary} ${V.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${N.secondary} ${$.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${$.quiet} ${V.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${$.quiet} ${V.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${N.secondary} ${$.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${N.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${$.quiet} ${$.inProgress}`,primary:`${_.large} ${S.medium} ${N.primary} ${V.primary}`,primaryDisabled:`${_.large} ${S.medium} ${$.isDisabled} ${N.primary}`,primarySmall:`${_.small} ${S.xsmall} ${N.primary} ${V.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${$.isDisabled} ${N.primary} `,primaryQuiet:`${_.large} ${S.medium} ${$.quiet} ${V.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${$.quiet} ${V.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${$.inProgress} ${N.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${$.inProgress} ${N.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${$.quiet} ${$.inProgress} ${N.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${$.quiet} ${$.inProgress}`,utility:`${_.utility} ${S.medium} ${N.utility} ${V.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${N.utility} ${$.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${$.utilityQuiet} ${V.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${N.utility} ${V.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${N.utility} ${$.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${$.utilityQuiet} ${V.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${N.utility} ${$.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${N.utility} ${$.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${_.large} ${S.medium} ${N.negative} ${V.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${N.negative} ${$.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${$.negativeQuiet} ${V.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${N.negative} ${V.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${N.negative} ${$.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${V.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${N.negative} ${$.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${$.inProgress} ${N.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${$.negativeQuiet} ${N.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${_.pill} ${S.medium} ${N.pill} ${V.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${N.pill} ${V.pill}`,pillLoading:`${_.pill} ${S.medium} ${N.pill} ${$.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${N.pill} ${$.inProgress}`,link:`${_.link} ${S.medium} ${N.link}`,linkSmall:`${_.link} ${S.xsmall} ${N.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class ce extends _o(D){constructor(){super(),this.type="button",Oe(Tc,Nc,Dc,Oc,Bc),this.variant="secondary",this.ariaValueTextLoading=x._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[ae,Mc]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!sn.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${sn.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.primary,this.small&&!this.quiet&&!this.loading&&O.primarySmall,this.small&&this.quiet&&!this.loading&&O.primarySmallQuiet,this.small&&this.loading&&(this.quiet?O.primarySmallQuietLoading:O.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&O.primaryQuiet,!this.small&&this.loading&&(this.quiet?O.primaryQuietLoading:O.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.secondary,this.small&&!this.quiet&&!this.loading&&O.secondarySmall,this.small&&this.loading&&(this.quiet?O.secondarySmallQuietLoading:O.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&O.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&O.secondaryQuiet,!this.small&&this.loading&&(this.quiet?O.secondaryQuietLoading:O.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.utility,this.small&&!this.quiet&&!this.loading&&O.utilitySmall,this.small&&this.quiet&&!this.loading&&O.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?O.utilitySmallQuietLoading:O.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&O.utilityQuiet,!this.small&&this.loading&&(this.quiet?O.utilityQuietLoading:O.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.negative,this.small&&!this.quiet&&!this.loading&&O.negativeSmall,this.small&&this.quiet&&!this.loading&&O.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?O.negativeSmallQuietLoading:O.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&O.negativeQuiet,!this.small&&this.loading&&(this.quiet?O.negativeQuietLoading:O.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?O.pillSmall:O.pill),this.loading&&(this.small?O.pillSmallLoading:O.pillLoading)]}get _linkClasses(){return[this.small?O.linkSmall:O.link]}get _classes(){return F(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&O.linkAsButton,this.fullWidth?O.fullWidth:O.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}fe([m({reflect:!0})],ce.prototype,"type");fe([m({type:Boolean,reflect:!0})],ce.prototype,"autofocus");fe([m({reflect:!0})],ce.prototype,"variant");fe([m({type:Boolean,reflect:!0})],ce.prototype,"quiet");fe([m({type:Boolean,reflect:!0})],ce.prototype,"small");fe([m({type:Boolean,reflect:!0})],ce.prototype,"loading");fe([m({reflect:!0})],ce.prototype,"href");fe([m({reflect:!0})],ce.prototype,"target");fe([m({reflect:!0})],ce.prototype,"rel");fe([m({attribute:"full-width",type:Boolean,reflect:!0})],ce.prototype,"fullWidth");fe([m({attribute:"button-class",reflect:!0})],ce.prototype,"buttonClass");fe([m({reflect:!0})],ce.prototype,"name");fe([m({reflect:!0})],ce.prototype,"value");customElements.get("w-button")||customElements.define("w-button",ce);const Rc=JSON.parse('{"card.button.text":["Vælg"]}'),jc=JSON.parse('{"card.button.text":["Select"]}'),Fc=JSON.parse('{"card.button.text":["Valitse"]}'),Ic=JSON.parse('{"card.button.text":["Velg"]}'),Uc=JSON.parse('{"card.button.text":["Välj"]}'),Hc=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Wc=Object.defineProperty,So=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&Wc(e,r,n),n};const $e={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},ln={ENTER:"Enter",SPACE:" "};class kr extends D{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Oe(jc,Ic,Fc,Rc,Uc),this.buttonText=x._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[ae,Hc,I`
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
    `]}get _containerClasses(){return F([$e.base,this.flat?$e.flat:$e.shadow,this.selected&&!this.flat&&$e.selected,this.selected&&this.flat?$e.flatSelected:$e.flatUnselected])}get _outlineClasses(){return F([$e.outline,this.selected?$e.outlineSelected:$e.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${$e.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===ln.ENTER||e.key===ln.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${q(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}So([m({type:Boolean,reflect:!0})],kr.prototype,"selected");So([m({type:Boolean})],kr.prototype,"flat");So([m({type:Boolean})],kr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",kr);var Vc=Object.defineProperty,$r=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&Vc(e,r,n),n};class It extends D{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=lc({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[ae,I`
      div {
        display: block;
        border-width: 1px;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        cursor: pointer;
        appearance: none;
        user-select: none;
        flex-shrink: 0;
        height: 2rem;
        width: 2rem;
        background-color: var(--w-s-color-background);
        border-color: var(--w-s-color-border);
        color: var(--w-s-color-icon-inverted);
        font-weight: 700;
        text-align: center;
        line-height: var(--w-line-height-xs);
        font-size: var(--w-font-size-m);
      }
      :host([type='checkbox']) div {
        border-radius: 2px;
      }
      :host([type='checkbox'][checked]) div,
      :host([type='checkbox'][indeterminate]) div {
        background-color: var(--w-s-color-background-primary);
        border-color: var(--w-s-color-border-primary);
      }
      :host([type='checkbox'][checked]) div {
        background-image: var(--w-icon-toggle-checked);
      }
      :host([type='radio']) div {
        border-radius: 50%;
      }
      :host([type='radio'][checked]) div {
        border-color: var(--w-s-color-border-selected);
        border-width: 0.6rem;
      }
      :host([invalid]) div {
        border-color: var(--w-s-color-border-negative) !important;
      }
      :host([type='checkbox'][invalid][checked]) div,
      :host([type='checkbox'][invalid][indeterminate]) div {
        background-color: var(--w-s-color-background-negative);
      }
    `]}}$r([m({type:String})],It.prototype,"type");$r([m({type:Boolean,reflect:!0})],It.prototype,"checked");$r([m({type:Boolean,reflect:!0})],It.prototype,"indeterminate");$r([m({type:Boolean,reflect:!0})],It.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",It);var qc={},yi=["en","nb","fi","da","sv"],xi="en",Yc=()=>{var t;let e;switch((t=process==null?void 0:qc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ki=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":xi},zr=t=>yi.find(e=>t===e||t.toLowerCase().includes(e))||ki();function Qc(){var t;if(typeof window>"u"){const e=Yc();return zr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ki();return yi.includes(e)?zr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),zr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),xi}}var Xc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Jc=(t,e,r,o,n)=>{const i=Qc(),a=Xc(i,t,e,r,o,n);x.load(i,a),x.activate(i)},wt={nb:{"icon.title.chevron-down":["Nedoverpil"]},en:{"icon.title.chevron-down":["Downward arrow"]},fi:{"icon.title.chevron-down":["Nuoli alaspäin"]},da:{"icon.title.chevron-down":["Pil nedad"]},sv:{"icon.title.chevron-down":["Pil ned"]}};Jc(wt.en,wt.nb,wt.fi,wt.da,wt.sv);var Zc=class extends D{render(){const t=x.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",Zc);var Kc={},$i=["en","nb","fi","da","sv"],_i="en",Gc=()=>{var t;let e;switch((t=process==null?void 0:Kc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Si=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":_i},Rr=t=>$i.find(e=>t===e||t.toLowerCase().includes(e))||Si();function ed(){var t;if(typeof window>"u"){const e=Gc();return Rr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Si();return $i.includes(e)?Rr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Rr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),_i}}var td=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,rd=(t,e,r,o,n)=>{const i=ed(),a=td(i,t,e,r,o,n);x.load(i,a),x.activate(i)},yt={nb:{"icon.title.chevron-up":["Oppoverpil"]},en:{"icon.title.chevron-up":["Upward arrow"]},fi:{"icon.title.chevron-up":["Nuoli ylöspäin"]},da:{"icon.title.chevron-up":["Pil opad"]},sv:{"icon.title.chevron-up":["Pil upp"]}};rd(yt.en,yt.nb,yt.fi,yt.da,yt.sv);var od=class extends D{render(){const t=x.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",od);const nd=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var id=Object.defineProperty,xe=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&id(e,r,n),n};const ad={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},re={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class be extends D{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[ae,nd,I`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return F([re.wrapper,this.box&&re.box,this.bleed&&re.bleed])}get#t(){return F(this.buttonClass,[re.button,this.box&&re.buttonBox])}get#n(){return F([re.chevron,!this.box&&re.chevronNonBox])}get#r(){const e=F([re.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&re.elementsChevronCollapse]),r=F([re.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&re.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return F(this.contentClass,[this.box&&ad.base,this._hasTitle&&this.box&&re.contentWithTitle])}get#i(){return F([re.expansion,!this.expanded&&re.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return w` <div class="${this.#e}">
      ${this._hasTitle?w`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${re.title}">
                ${this.title?w`<span class="${re.titleType}">${this.title}</span>`:w`<slot name="title"></slot>`}
                ${this.noChevron?"":w`<div class="${this.#n}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#i}" aria-hidden=${q(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}xe([m({type:Boolean,reflect:!0})],be.prototype,"expanded");xe([m({type:String})],be.prototype,"title");xe([m({type:Boolean})],be.prototype,"box");xe([m({type:Boolean})],be.prototype,"bleed");xe([m({attribute:"button-class",type:String})],be.prototype,"buttonClass");xe([m({attribute:"content-class",type:String})],be.prototype,"contentClass");xe([m({attribute:"no-chevron",type:Boolean})],be.prototype,"noChevron");xe([m({type:Boolean})],be.prototype,"animated");xe([m({attribute:"heading-level",type:Number})],be.prototype,"headingLevel");xe([m({type:Boolean,state:!0})],be.prototype,"_hasTitle");xe([m({type:Boolean,state:!0})],be.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",be);const Ei=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Ci=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(n=>n.patchClose))o._close=()=>this.close()}};class sd extends Ei(Ci(D)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[ae,I`
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
    `]}}const ld=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),cd=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],dd={easing:"ease",duration:300};let Ai=!1;const ud=typeof window<"u";if(ud){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Ai=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class hd{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:n=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||cd,this.shouldReduceMotion=n}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(ld(this.first,this.last))}get defaults(){return dd}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Ai?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var pd={},Li=["en","nb","fi","da","sv"],Pi="en",fd=()=>{var t;let e;switch((t=process==null?void 0:pd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Oi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Pi},jr=t=>Li.find(e=>t===e||t.toLowerCase().includes(e))||Oi();function gd(){var t;if(typeof window>"u"){const e=fd();return jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Oi();return Li.includes(e)?jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Pi}}var bd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,md=(t,e,r,o,n)=>{const i=gd(),a=bd(i,t,e,r,o,n);x.load(i,a),x.activate(i)},xt={nb:{"icon.title.arrow-left":["Pil som peker mot venstre"]},en:{"icon.title.arrow-left":["Leftward-pointing arrow"]},fi:{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]},da:{"icon.title.arrow-left":["Pil til venstre"]},sv:{"icon.title.arrow-left":["Pil som pekar vänster"]}};md(xt.en,xt.nb,xt.fi,xt.da,xt.sv);var vd=class extends D{render(){const t=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",vd);const wd=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),yd=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),xd=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),kd=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),$d=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var _d=Object.defineProperty,Ut=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&_d(e,r,n),n};class st extends Ei(D){constructor(){super(),this._hasTopContent=!1,Oe(yd,kd,xd,wd,$d)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new hd(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${x._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:j}get closeButton(){return this.noClose?j:w`<button
      type="button"
      aria-label="${x._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[ae,I`
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
    `]}}Ut([m({type:String})],st.prototype,"title");Ut([m({type:Boolean})],st.prototype,"back");Ut([m({type:Boolean,attribute:"no-close"})],st.prototype,"noClose");Ut([Na()],st.prototype,"_hasTopContent");Ut([br(".title-el")],st.prototype,"titleEl");let Lt=[];const Eo={documentElement:{},body:{}},Sd=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Ti=t=>{t.touches.length>1||t.preventDefault?.()},Ed=t=>([e,r])=>{Eo[t][e]=document[t].style[e],document[t].style[e]=r},Cd=()=>Object.entries(Sd).forEach(([t,e])=>{Object.entries(e).forEach(Ed(t))}),Ad=t=>([e,r])=>{document[t].style[e]=Eo[t][e]},Ld=()=>Object.entries(Eo).forEach(([t,e])=>{Object.entries(e).forEach(Ad(t))}),Pd=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Od(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const n=o.targetTouches[0].clientY-e;return t.scrollTop===0&&n>0||Pd(t)&&n<0?Ti(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Td(t){t.ontouchstart=null,t.ontouchmove=null}const Di=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Ti,{passive:!1}),Dd=Di(!0),Nd=Di();function Bd(t){if(!t)throw Error("Could not run setup, an element must be provided");Lt.some(e=>e===t)||(Lt.length||(Cd(),Dd()),Od(t),Lt.push(t))}function Md(){Lt.forEach(Td),Nd(),Ld(),Lt=[]}var zd=Object.defineProperty,lt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&zd(e,r,n),n};class Ye extends Ci(D){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Bd(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Md(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[ae,I`
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
    `]}}lt([m({type:Boolean})],Ye.prototype,"show");lt([m({type:String,attribute:"content-id"})],Ye.prototype,"contentId");lt([m({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ye.prototype,"ignoreBackdropClicks");lt([br(".dialog-el")],Ye.prototype,"dialogEl");lt([br(".dialog-inner-el")],Ye.prototype,"dialogInnerEl");lt([br(".content-el")],Ye.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ye),customElements.define("w-modal-header",st),customElements.define("w-modal-footer",sd));var Rd={},Ni=["en","nb","fi","da","sv"],Bi="en",jd=()=>{var t;let e;switch((t=process==null?void 0:Rd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Mi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Bi},Fr=t=>Ni.find(e=>t===e||t.toLowerCase().includes(e))||Mi();function Fd(){var t;if(typeof window>"u"){const e=jd();return Fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Mi();return Ni.includes(e)?Fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Bi}}var Id=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Ud=(t,e,r,o,n)=>{const i=Fd(),a=Id(i,t,e,r,o,n);x.load(i,a),x.activate(i)},kt={nb:{"icon.title.chevron-double-left":["Dobbel pil til venstre"]},en:{"icon.title.chevron-double-left":["Double leftward arrow"]},fi:{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]},da:{"icon.title.chevron-double-left":["Dobbelt venstrepil"]},sv:{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}};Ud(kt.en,kt.nb,kt.fi,kt.da,kt.sv);var Hd=class extends D{render(){const t=x.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",Hd);var Wd={},zi=["en","nb","fi","da","sv"],Ri="en",Vd=()=>{var t;let e;switch((t=process==null?void 0:Wd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ji=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ri},Ir=t=>zi.find(e=>t===e||t.toLowerCase().includes(e))||ji();function qd(){var t;if(typeof window>"u"){const e=Vd();return Ir(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ji();return zi.includes(e)?Ir(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ir(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ri}}var Yd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Qd=(t,e,r,o,n)=>{const i=qd(),a=Yd(i,t,e,r,o,n);x.load(i,a),x.activate(i)},$t={nb:{"icon.title.chevron-left":["Pil til venstre"]},en:{"icon.title.chevron-left":["Leftward arrow"]},fi:{"icon.title.chevron-left":["Nuoli vasemmalle"]},da:{"icon.title.chevron-left":["Pil til venstre"]},sv:{"icon.title.chevron-left":["Pil vänster"]}};Qd($t.en,$t.nb,$t.fi,$t.da,$t.sv);var Xd=class extends D{render(){const t=x.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",Xd);var Jd={},Fi=["en","nb","fi","da","sv"],Ii="en",Zd=()=>{var t;let e;switch((t=process==null?void 0:Jd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ui=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ii},Ur=t=>Fi.find(e=>t===e||t.toLowerCase().includes(e))||Ui();function Kd(){var t;if(typeof window>"u"){const e=Zd();return Ur(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ui();return Fi.includes(e)?Ur(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ur(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ii}}var Gd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,eu=(t,e,r,o,n)=>{const i=Kd(),a=Gd(i,t,e,r,o,n);x.load(i,a),x.activate(i)},_t={nb:{"icon.title.chevron-right":["Pil til høyre"]},en:{"icon.title.chevron-right":["Rightward arrow"]},fi:{"icon.title.chevron-right":["Nuoli oikealle"]},da:{"icon.title.chevron-right":["Pil til højre"]},sv:{"icon.title.chevron-right":["Pil höger"]}};eu(_t.en,_t.nb,_t.fi,_t.da,_t.sv);var tu=class extends D{render(){const t=x.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",tu);const ru=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),ou=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),nu=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),iu=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),au=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),su=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}}`;var lu=Object.defineProperty,_r=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&lu(e,r,n),n};const Hr=x._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),qt="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class Ht extends D{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,Oe(ou,iu,nu,ru,au)}static{this.styles=[ae,su]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(n,i)=>i+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(n,i)=>r+i)}render(){const e=this.visiblePageNumbers;return w`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${x._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?w`<a
              href="${this.baseUrl}1"
              class="${qt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${Hr}</span>
            </a>`:j}
        ${this.shouldShowPreviousPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${qt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${Hr}</span>
            </a>`:j}
        ${e.map(r=>{const o=r===this.currentPageNumber,n=`${this.baseUrl}${r}`;let i=qt;o?i+=" s-bg-primary s-text-inverted":i+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const a=x._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return w`<a aria-label="${a}" href="${n}" class="${i}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${qt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${x._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${Hr}</span>
            </a>`:j}
      </div>
    </nav>`}}_r([m({type:String,reflect:!0,attribute:"base-url"})],Ht.prototype,"baseUrl");_r([m({type:Number,reflect:!0})],Ht.prototype,"pages");_r([m({type:Number,reflect:!0,attribute:"current-page"})],Ht.prototype,"currentPageNumber");_r([m({type:Number,reflect:!0,attribute:"visible-pages"})],Ht.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",Ht);const cu=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),du=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),uu=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),hu=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),pu=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class fu extends mi(oe){static styles=[oe.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Oe(du,hu,uu,cu,pu),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=x._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=x._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return F([de.button,de.label,this.suggestion?de.suggestion:de.filter,this.canClose?de.labelWithClose:de.labelWithoutClose])}get _closeClasses(){return F([de.button,de.close,this.suggestion?de.suggestion:de.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${de.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${de.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${de.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",fu);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qt(t,e,r){return t?e(t):r?.(t)}const gu=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),bu=JSON.parse('{"select.label.optional":["(optional)"]}'),mu=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),vu=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),wu=JSON.parse('{"select.label.optional":["(valfritt)"]}'),yu=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var xu=Object.defineProperty,ke=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&xu(e,r,n),n};const Ee={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},cn={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Wr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class me extends _o(D){constructor(){super(),this._setValue=e=>{this.value=e,this.setValue(e)},Oe(bu,vu,mu,gu,wu),this._options=this.innerHTML}static{this.styles=[ae,yu]}firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return F([Ee.base,!this.invalid&&!this.disabled&&!this.readOnly&&Ee.default,this.invalid&&Ee.invalid,this.disabled&&Ee.disabled,this.readOnly&&Ee.readOnly])}get#t(){return F([Wr.base,this.invalid?Wr.colorInvalid:Wr.color])}get#n(){return F([Ee.chevron,this.disabled&&Ee.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Ee.wrapper}">
      ${Qt(this.label,()=>w`<label class="${cn.base}" for="${this.#r}">
            ${this.label}
            ${Qt(this.optional,()=>w`<span class="${cn.optional}"
                  >${x._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Ee.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${q(this.#o)}"
          aria-invalid="${q(this.invalid)}"
          aria-errormessage="${q(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${ho(this._options)}
        </select>
        <div class="${this.#n}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Qt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}ke([m({attribute:"auto-focus",type:Boolean,reflect:!0})],me.prototype,"autoFocus");ke([m({type:Boolean,reflect:!0})],me.prototype,"invalid");ke([m({type:Boolean,reflect:!0})],me.prototype,"always");ke([m({reflect:!0})],me.prototype,"hint");ke([m({reflect:!0})],me.prototype,"label");ke([m({type:Boolean,reflect:!0})],me.prototype,"optional");ke([m({type:Boolean,reflect:!0})],me.prototype,"disabled");ke([m({attribute:"read-only",type:Boolean,reflect:!0})],me.prototype,"readOnly");ke([m({state:!0})],me.prototype,"_options");ke([m({reflect:!0})],me.prototype,"name");ke([m({reflect:!0})],me.prototype,"value");customElements.get("w-select")||customElements.define("w-select",me);const ku=I`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var $u=Object.defineProperty,Z=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,a;i>=0;i--)(a=t[i])&&(n=a(e,r,n)||n);return n&&$u(e,r,n),n};const Te={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},_u={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Vr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class Q extends _o(D){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[ae,ku]}get _inputstyles(){return F([Te.base,this._hasSuffix&&Te.suffix,this._hasPrefix&&Te.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Te.default,this.invalid&&!this.disabled&&!this.readOnly&&Te.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Te.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Te.readOnly])}get _helptextstyles(){return F([Vr.base,this.invalid?Vr.colorInvalid:Vr.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${_u.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const n=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(n)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Te.wrapper}">
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
    `}}Z([m({type:Boolean,reflect:!0})],Q.prototype,"disabled");Z([m({type:Boolean,reflect:!0})],Q.prototype,"invalid");Z([m({type:String,reflect:!0})],Q.prototype,"id");Z([m({type:String,reflect:!0})],Q.prototype,"label");Z([m({type:String,reflect:!0})],Q.prototype,"helpText");Z([m({type:String,reflect:!0})],Q.prototype,"size");Z([m({type:Number,reflect:!0})],Q.prototype,"max");Z([m({type:Number,reflect:!0})],Q.prototype,"min");Z([m({type:Number,reflect:!0,attribute:"min-length"})],Q.prototype,"minLength");Z([m({type:Number,reflect:!0,attribute:"max-length"})],Q.prototype,"maxLength");Z([m({type:String,reflect:!0})],Q.prototype,"pattern");Z([m({type:String,reflect:!0})],Q.prototype,"placeholder");Z([m({type:Boolean,reflect:!0,attribute:"read-only"})],Q.prototype,"readOnly");Z([m({type:Boolean,reflect:!0})],Q.prototype,"required");Z([m({type:String,reflect:!0})],Q.prototype,"type");Z([m({type:String,reflect:!0})],Q.prototype,"value");Z([m({type:String,reflect:!0})],Q.prototype,"name");Z([m({type:Boolean})],Q.prototype,"_hasPrefix");Z([m({type:Boolean})],Q.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",Q);const Sr=typeof window<"u";function Su(t,e){if(!Sr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Eu(t){return Sr?customElements.get("w-toast-container").init().del(t):void 0}function Cu(t,e){if(!Sr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Au}=ua,dn=()=>document.createComment(""),St=(t,e,r)=>{const o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=o.insertBefore(dn(),n),a=o.insertBefore(dn(),n);r=new Au(i,a,t,t.options)}else{const i=r._$AB.nextSibling,a=r._$AM,s=a!==t;if(s){let l;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(l=t._$AU)!==a._$AU&&r._$AP(l)}if(i!==n||s){let l=r._$AA;for(;l!==i;){const u=l.nextSibling;o.insertBefore(l,n),l=u}}}return r},Fe=(t,e,r=t)=>(t._$AI(e,r),t),Lu={},Pu=(t,e=Lu)=>t._$AH=e,Ou=t=>t._$AH,qr=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const un=(t,e,r)=>{const o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},Tu=co(class extends uo{constructor(t){if(super(t),t.type!==lo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const n=[],i=[];let a=0;for(const s of t)n[a]=o?o(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const n=Ou(t),{values:i,keys:a}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=a,i;const s=this.ut??=[],l=[];let u,p,d=0,b=n.length-1,c=0,f=i.length-1;for(;d<=b&&c<=f;)if(n[d]===null)d++;else if(n[b]===null)b--;else if(s[d]===a[c])l[c]=Fe(n[d],i[c]),d++,c++;else if(s[b]===a[f])l[f]=Fe(n[b],i[f]),b--,f--;else if(s[d]===a[f])l[f]=Fe(n[d],i[f]),St(t,l[f+1],n[d]),d++,f--;else if(s[b]===a[c])l[c]=Fe(n[b],i[c]),St(t,n[d],n[b]),b--,c++;else if(u===void 0&&(u=un(a,c,f),p=un(s,d,b)),u.has(s[d]))if(u.has(s[b])){const h=p.get(a[c]),v=h!==void 0?n[h]:null;if(v===null){const E=St(t,n[d]);Fe(E,i[c]),l[c]=E}else l[c]=Fe(v,i[c]),St(t,n[d],v),n[h]=null;c++}else qr(n[b]),b--;else qr(n[d]),d++;for(;c<=f;){const h=St(t,l[f+1]);Fe(h,i[c]),l[c++]=h}for(;d<=b;){const h=n[d++];h!==null&&qr(h)}return this.ut=a,Pu(t,l),Le}});class Hi extends oe{static styles=[oe.styles,I`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const n of this._toasts)Date.now()<=n[1].duration?e.push(n):r.push(n);const o=[];for(const[n]of r){const i=this.renderRoot.querySelector(`#${n}`);o.push(i.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Br.wrapper}">
        <div class="${Br.base}" id="w-toast-container-list">
          ${Tu(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Br.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",Hi);const Co=typeof window<"u";let Wi=!0;if(Co){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Wi=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const Vi=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},qi=t=>{const e=Wi?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},Du=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Nu=t=>()=>{t&&t()},Yi=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Du(t,e);Vi(t),t.style.height="auto";let n=t.scrollHeight;if(Co&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",qi(t),requestAnimationFrame(()=>t.style.height=n+"px")}),r)return r},Qi=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Nu(e);Vi(t);let n=t.scrollHeight;if(Co&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=n+"px",t.style.transitionTimingFunction="ease-in",qi(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},Bu=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),Mu=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),zu=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),Ru=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),ju=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),De={success:"success",error:"error",warning:"warning"};class Fu extends oe{static styles=[oe.styles,I`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Oe(Mu,Ru,zu,Bu,ju),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&Yi(this._wrapper,()=>this._expanded=!0)}get#e(){return F([ve.base,this.type===De.success&&ve.positive,this.type===De.warning&&ve.warning,this.type===De.error&&ve.negative])}get#t(){return F([ve.iconBase,this.type===De.success&&ve.iconPositive,this.type===De.warning&&ve.iconWarning,this.type===De.error&&ve.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===De.warning}get _error(){return this.type===De.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?x._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?x._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):x._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?Qi(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${ve.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ve.content}">
          <p>${this.text}</p>
        </div>
        ${Qt(this.canclose===!0,()=>w`
            <button class="${ve.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",Fu);class Iu extends oe{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&Yi(this._wrapper),!this.show&&!this._removeElement&&Qi(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[oe.styles,I`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${q(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Iu);class Uu extends oe{static properties={level:{type:Number}};static styles=[oe.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?ho(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Uu);var Hu={},Xi=["en","nb","fi","da","sv"],Ji="en",Wu=()=>{var t;let e;switch((t=process==null?void 0:Hu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Zi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ji},Yr=t=>Xi.find(e=>t===e||t.toLowerCase().includes(e))||Zi();function Vu(){var t;if(typeof window>"u"){const e=Wu();return Yr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Zi();return Xi.includes(e)?Yr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Yr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ji}}var qu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Yu=(t,e,r,o,n)=>{const i=Vu(),a=qu(i,t,e,r,o,n);x.load(i,a),x.activate(i)},Et={nb:{"icon.title.bag":["Veske"]},en:{"icon.title.bag":["Handbag"]},fi:{"icon.title.bag":["Käsilaukku"]},da:{"icon.title.bag":["Håndtaske"]},sv:{"icon.title.bag":["Handväska"]}};Yu(Et.en,Et.nb,Et.fi,Et.da,Et.sv);var Qu=class extends D{render(){const t=x.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",Qu);Sr&&(window.WarpToastContainer=Hi,window.toast=Su,window.updateToast=Cu,window.removeToast=Eu);const Xu={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Ju extends oe{static styles=[oe.styles,I`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Xu;return w`
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
      `)}}customElements.define("sidebar-element",Ju);
