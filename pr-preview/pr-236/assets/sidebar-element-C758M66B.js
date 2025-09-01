(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,Rr=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ir=Symbol(),uo=new WeakMap;let Qo=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Ir)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Rr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=uo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&uo.set(r,e))}return e}toString(){return this.cssText}};const Yo=t=>new Qo(typeof t=="string"?t:t+"",void 0,Ir),ee=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Qo(r,t,Ir)},On=(t,e)=>{if(Rr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=Dt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},ho=Rr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Yo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tn,defineProperty:Nn,getOwnPropertyDescriptor:Dn,getOwnPropertyNames:Pn,getOwnPropertySymbols:Bn,getPrototypeOf:Mn}=Object,rr=globalThis,po=rr.trustedTypes,Rn=po?po.emptyScript:"",In=rr.reactiveElementPolyfillSupport,ft=(t,e)=>t,Bt={toAttribute(t,e){switch(e){case Boolean:t=t?Rn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Fr=(t,e)=>!Tn(t,e),go={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:Fr};Symbol.metadata??=Symbol("metadata"),rr.litPropertyMetadata??=new WeakMap;let Me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=go){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Nn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=Dn(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);n.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??go}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;const e=Mn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){const r=this.properties,o=[...Pn(r),...Bn(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(ho(i))}else e!==void 0&&r.push(ho(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return On(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:Bt).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Bt;this._$Em=i,this[i]=s.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Fr)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Me.elementStyles=[],Me.shadowRootOptions={mode:"open"},Me[ft("elementProperties")]=new Map,Me[ft("finalized")]=new Map,In?.({ReactiveElement:Me}),(rr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=globalThis,Mt=Hr.trustedTypes,fo=Mt?Mt.createPolicy("lit-html",{createHTML:t=>t}):void 0,jr="$lit$",we=`lit$${Math.random().toFixed(9).slice(2)}$`,zr="?"+we,Fn=`<${zr}>`,He=document,vt=()=>He.createComment(""),wt=t=>t===null||typeof t!="object"&&typeof t!="function",Ur=Array.isArray,Ko=t=>Ur(t)||typeof t?.[Symbol.iterator]=="function",hr=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,bo=/>/g,Te=RegExp(`>|${hr}(?:([^\\s"'>=/]+)(${hr}*=${hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,wo=/"/g,Go=/^(?:script|style|textarea|title)$/i,Hn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=Hn(1),Ee=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),yo=new WeakMap,Re=He.createTreeWalker(He,129);function Zo(t,e){if(!Ur(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(e):e}const Xo=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=ct;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===ct?h[1]==="!--"?s=mo:h[1]!==void 0?s=bo:h[2]!==void 0?(Go.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Te):h[3]!==void 0&&(s=Te):s===Te?h[0]===">"?(s=i??ct,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Te:h[3]==='"'?wo:vo):s===wo||s===vo?s=Te:s===mo||s===bo?s=ct:(s=Te,i=void 0);const d=s===Te&&t[l+1].startsWith("/>")?" ":"";n+=s===ct?a+Fn:c>=0?(o.push(u),a.slice(0,c)+jr+a.slice(c)+we+d):a+we+(c===-2?l:d)}return[Zo(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Ar=class ei{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Xo(e,r);if(this.el=ei.createElement(u,o),Re.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Re.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(jr)){const g=h[s++],d=i.getAttribute(c).split(we),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?oi:f[1]==="?"?ii:f[1]==="@"?ni:Ct}),i.removeAttribute(c)}else c.startsWith(we)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Go.test(i.tagName)){const c=i.textContent.split(we),g=c.length-1;if(g>0){i.textContent=Mt?Mt.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],vt()),Re.nextNode(),a.push({type:2,index:++n});i.append(c[g],vt())}}}else if(i.nodeType===8)if(i.data===zr)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(we,c+1))!==-1;)a.push({type:7,index:n}),c+=we.length-1}n++}}static createElement(e,r){const o=He.createElement("template");return o.innerHTML=e,o}};function je(t,e,r=t,o){if(e===Ee)return e;let i=o!==void 0?r.o?.[o]:r.l;const n=wt(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=je(t,i._$AS(t,e.values),i,o)),e}class ti{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??He).importNode(r,!0);Re.currentNode=i;let n=Re.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new or(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new si(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=Re.nextNode(),s++)}return Re.currentNode=He,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let or=class ri{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=je(this,e,r),wt(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ko(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(He.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ar.createElement(Zo(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new ti(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=yo.get(e.strings);return r===void 0&&yo.set(e.strings,r=new Ar(e)),r}k(e){Ur(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new ri(this.O(vt()),this.O(vt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=je(this,e,r,0),s=!wt(e)||e!==this._$AH&&e!==Ee,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=je(this,l[o+a],r,a),u===Ee&&(u=this._$AH[a]),s||=!wt(u)||u!==this._$AH[a],u===F?e=F:e!==F&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oi extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ii extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ni extends Ct{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=je(this,e,r,0)??F)===Ee)return;const o=this._$AH,i=e===F&&o!==F||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==F&&(o===F||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class si{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}}const jn={M:jr,P:we,A:zr,C:1,L:Xo,R:ti,D:Ko,V:je,I:or,H:Ct,N:ii,U:ni,B:oi,F:si},zn=Hr.litHtmlPolyfillSupport;zn?.(Ar,or),(Hr.litHtmlVersions??=[]).push("3.2.0");const Un=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new or(e.insertBefore(vt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let q=class extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Un(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Ee}};q._$litElement$=!0,q.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:q});const Wn=globalThis.litElementPolyfillSupport;Wn?.({LitElement:q});(globalThis.litElementVersions??=[]).push("4.1.0");function Vn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const $o=String.raw`[A-Za-z][^/\s>]*`,Jn=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,qn=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,ai=String.raw`${Jn}|${qn}`,Qn=String.raw`"(?<quotedAttrValue>[^"]*)"`,Yn=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Kn=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Gn=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Zn=String.raw`${Qn}|${Yn}|${Kn}`,Xn=String.raw`(?<attrName>${Gn})(?:\s*=\s*(?:${Zn}))?`,es=String.raw`${ai}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,li=String.raw`(?<attrSpace>\s*)(?:${Xn}|(?<attrText>${es}))`,ts={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${$o})(?<attrs>(?:${li})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${$o})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${ai}|['"]`,wildcard:String.raw`.`},rs=Object.entries(ts).map(([t,e])=>`(?<${t}>${e})`).join("|");function*os(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const is=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function yt(t,e="  ",r=80){const o=new RegExp(rs,"gys"),i=new RegExp(li,"gy"),n=[];let s=null,l=0,a=0,u="",h=0,c="";const g=()=>{if(c&&c!=`
`){const k=u.indexOf(`
`),C=k==-1?u.length:k;a+c.length+C>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",b=`${c}${p}${u}`;if(b){const k=b.lastIndexOf(`
`);k==-1?a+=b.length:a=b.length-k-1,n.push(b)}u=c=""},d=(...p)=>{for(const b of p)!s&&/^\s+$/.test(b)?(g(),c=b):(u||(h=l),u+=b)};for(const p of os(o,t)){if(yt.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const b=p.groups.endTagName.toLowerCase();b==s&&(s=null),s||(--l,d(`</${b}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const b=p.groups.startTagName.toLowerCase();if(d(`<${b}`),++l,p.groups.attrs){let{lastIndex:C}=i,E,B;for(;E=i.exec(p.groups.attrs);){if({lastIndex:C}=i,yt.__strict&&E.groups.attrText)throw new Error("Unexpected attr text");E.groups.attrText?(E.groups.attrSpace&&d(/\n/.test(E.groups.attrSpace)?`
`:" "),d(E.groups.attrText)):((E.groups.attrSpace||!B?.groups.attrText)&&d(/\n/.test(E.groups.attrSpace)?`
`:" "),d(`${E.groups.attrName}${E.groups.quotedAttrValue?`="${E.groups.quotedAttrValue}"`:E.groups.singleQuotedAttrValue?`='${E.groups.singleQuotedAttrValue}'`:E.groups.unquotedAttrValue?`=${E.groups.unquotedAttrValue}`:""}`)),B=E}if(C!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const k=!!p.groups.closingSlash;d(k?" />":">"),k||is.has(b)?--l:["pre","textarea","script","style"].includes(b)&&(s=b)}}g();let f=!1;for(;/^\s+$/.test(n[n.length-1]);){const p=n.pop();/\n/.test(p)&&(f=!0)}return f&&n.push(`
`),n.join("")}yt.default=yt;var ns=yt;const ss=Vn(ns);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},di=t=>(...e)=>({_$litDirective$:t,values:e});let ui=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lr extends ui{constructor(e){if(super(e),this.it=F,e.type!==ci.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===Ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Lr.directiveName="unsafeHTML",Lr.resultType=1;const Wr=di(Lr);class as extends q{static styles=ee`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=ss(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${Wr(this.source)}</code></pre>`}}customElements.define("syntax-highlight",as);var I=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?I.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};const Ne={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},Ge={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},se={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},he={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},pr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},ce={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},X={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"},_e="font-bold focusable justify-center transition-colors ease-in-out",z={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},N={primary:`border-0 rounded-8 ${_e}`,secondary:`border-2 rounded-8 ${_e}`,utility:`border rounded-4 ${_e}`,negative:`border-0 rounded-8 ${_e}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${_e}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${z.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},x={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${z.loading}`,quiet:`border-0 rounded-8 ${_e}`,utilityQuiet:`border-0 rounded-4 ${_e}`,negativeQuiet:`border-0 rounded-8 ${_e}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${z.disabled}`},O={secondary:`${_.medium} ${x.medium} ${N.secondary} ${z.secondary}`,secondaryHref:`${_.medium} ${x.medium} ${N.secondary} ${z.secondary}`,secondaryDisabled:`${_.medium} ${x.medium} ${N.secondary} ${$.isDisabled}`,secondarySmall:`${x.xsmall} ${_.xsmall} ${N.secondary} ${z.secondary}`,secondarySmallDisabled:`${x.xsmall} ${_.xsmall} ${N.secondary} ${$.isDisabled}`,secondaryQuiet:`${_.medium} ${x.medium} ${$.quiet} ${z.quiet}`,secondaryQuietDisabled:`${_.medium} ${x.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${x.xsmall} ${_.xsmall} ${$.quiet} ${z.quiet}`,secondarySmallQuietDisabled:`${x.xsmall} ${_.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${_.medium} ${x.medium} ${N.secondary} ${$.inProgress}`,secondarySmallLoading:`${x.xsmall} ${_.xsmall}  ${N.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${x.xsmall} ${_.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${_.medium} ${x.medium} ${$.quiet} ${$.inProgress}`,primary:`${_.large} ${x.medium} ${N.primary} ${z.primary}`,primaryDisabled:`${_.large} ${x.medium} ${$.isDisabled} ${N.primary}`,primarySmall:`${_.small} ${x.xsmall} ${N.primary} ${z.primary}`,primarySmallDisabled:`${_.small} ${x.xsmall} ${$.isDisabled} ${N.primary} `,primaryQuiet:`${_.large} ${x.medium} ${$.quiet} ${z.quiet}`,primaryQuietDisabled:`${_.large} ${x.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${_.small} ${x.xsmall} ${$.quiet} ${z.quiet}`,primarySmallQuietDisabled:`${_.small} ${x.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${_.large} ${x.medium} ${$.inProgress} ${N.primary}`,primarySmallLoading:`${_.small} ${x.xsmall}  ${$.inProgress} ${N.primary}`,primarySmallQuietLoading:`${_.small} ${x.xsmall} ${$.quiet} ${$.inProgress} ${N.primary}`,primaryQuietLoading:`${_.large} ${x.medium} ${$.quiet} ${$.inProgress}`,utility:`${_.utility} ${x.medium} ${N.utility} ${z.utility}`,utilityDisabled:`${_.utility} ${x.medium} ${N.utility} ${$.isDisabled}`,utilityQuiet:`${_.large} ${x.medium} ${$.utilityQuiet} ${z.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${x.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${_.smallUtility} ${x.xsmall} ${N.utility} ${z.utility}`,utilitySmallDisabled:`${_.smallUtility} ${x.xsmall} ${N.utility} ${$.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${z.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${_.large} ${x.medium} ${N.utility} ${$.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${x.xsmall} ${N.utility} ${$.inProgress}`,utilityQuietLoading:`${_.large} ${x.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${x.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${_.large} ${x.medium} ${N.negative} ${z.destructive}`,negativeDisabled:`${_.large} ${x.medium} ${N.negative} ${$.isDisabled}`,negativeQuiet:`${_.large} ${x.medium} ${$.negativeQuiet} ${z.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${x.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${_.small} ${x.xsmall} ${N.negative} ${z.destructive}`,negativeSmallDisabled:`${_.small} ${x.xsmall} ${N.negative} ${$.isDisabled}`,negativeSmallQuiet:`${_.small} ${x.xsmall} ${$.negativeQuiet} ${z.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${x.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${_.large} ${x.medium} ${N.negative} ${$.inProgress}`,negativeSmallLoading:`${_.small} ${x.xsmall} ${$.inProgress} ${N.negative}`,negativeQuietLoading:`${_.large} ${x.medium} ${$.negativeQuiet} ${N.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${_.small} ${x.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${_.pill} ${x.medium} ${N.pill} ${z.pill}`,pillSmall:`${_.pillSmall} ${x.xsmall} ${N.pill} ${z.pill}`,pillLoading:`${_.pill} ${x.medium} ${N.pill} ${$.inProgress}`,pillSmallLoading:`${_.pillSmall} ${x.xsmall} ${N.pill} ${$.inProgress}`,link:`${_.link} ${x.medium} ${N.link}`,linkSmall:`${_.link} ${x.xsmall} ${N.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},dt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},$e={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},ve={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Or={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},et={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},hi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",ls={wrapper:hi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},cs={wrapper:hi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Ze={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Ye={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${x.medium} ${N.pill} ${z.pill} justify-self-end -mr-8 ml-8`};var Vr={},pi={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(pi);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=pi;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,f,p){const b=r(d);if(Number.isNaN(b)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(f));return b}function i(d){const f=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function n(d,f){const p=o(d,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const b=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,b)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=d.slice(1,-1),p=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(b){throw b instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):b}}function a(d,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(d,f=!1){return d.replace(c,function(p,b,k,C,E,B,y,A,L){if(b!==void 0)return"\\";if(k!==void 0)return i(k);if(C!==void 0)return l(C);if(E!==void 0)return n(E,B);if(y!==void 0)return n(y);if(A==="0")return"\0";if(A!==void 0)return a(A,!f);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(Vr);const Fe=t=>typeof t=="string",ds=t=>typeof t=="function",xo=new Map,gi="en";function Jr(t){return[...Array.isArray(t)?t:[t],gi]}function fi(t,e,r){const o=Jr(t);return Rt(()=>It("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Fe(e)?new Date(e):e)}function Tr(t,e,r){const o=Jr(t);return Rt(()=>It("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function _o(t,e,r,{offset:o=0,...i}){const n=Jr(t),s=e?Rt(()=>It("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Rt(()=>It("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Rt(t,e){const r=t();let o=xo.get(r);return o||(o=e(),xo.set(r,o)),o}function It(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const mi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,bi="%__lingui_octothorpe__%",us=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s]||{style:s},n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=Tr(o,s,a);return l.replace(new RegExp(bi,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=_o(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=_o(o,!0,s,l);return n(s-a,u)},select:hs,number:(s,l)=>Tr(o,s,i(l)),date:(s,l)=>fi(o,s,i(l))}},hs=(t,e)=>e[t]??e.other;function ps(t,e,r){return(o={},i)=>{const n=us(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+bi;if(Fe(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([k,C])=>{p[k]=s(C,d==="plural"||d==="selectordinal")}):p=f;let b;if(d){const k=n[d];b=k(o[g],p)}else b=o[g];return b==null?h:h+b},""):a,l=s(t);return Fe(l)&&mi.test(l)?Vr.unraw(l.trim()):Fe(l)?l.trim():l?String(l):""}}var gs=Object.defineProperty,fs=(t,e,r)=>e in t?gs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ms=(t,e,r)=>(fs(t,e+"",r),r);let bs=class{constructor(){ms(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var vs=Object.defineProperty,ws=(t,e,r)=>e in t?vs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ke=(t,e,r)=>(ws(t,typeof e!="symbol"?e+"":e,r),r);let ys=class extends bs{constructor(e){super(),Ke(this,"_locale",""),Ke(this,"_locales"),Ke(this,"_localeData",{}),Ke(this,"_messages",{}),Ke(this,"_missing"),Ke(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??gi,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Fe(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return ds(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Fe(a)&&mi.test(a)?JSON.parse(`"${a}"`):Fe(a)?a:ps(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return fi(this._locales||this._locale,e,r)}number(e,r){return Tr(this._locales||this._locale,e,r)}};function $s(t={}){return new ys(t)}const gr=$s();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,Ft=qr.trustedTypes,ko=Ft?Ft.createPolicy("lit-html",{createHTML:t=>t}):void 0,vi="$lit$",ke=`lit$${Math.random().toFixed(9).slice(2)}$`,wi="?"+ke,xs=`<${wi}>`,ze=document,$t=()=>ze.createComment(""),xt=t=>t===null||typeof t!="object"&&typeof t!="function",Qr=Array.isArray,_s=t=>Qr(t)||typeof t?.[Symbol.iterator]=="function",fr=`[ 	
\f\r]`,ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,So=/-->/g,Eo=/>/g,De=RegExp(`>|${fr}(?:([^\\s"'>=/]+)(${fr}*=${fr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Co=/'/g,Ao=/"/g,yi=/^(?:script|style|textarea|title)$/i,rt=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Lo=new WeakMap,Ie=ze.createTreeWalker(ze,129);function $i(t,e){if(!Qr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ko!==void 0?ko.createHTML(e):e}const ks=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=ut;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===ut?h[1]==="!--"?s=So:h[1]!==void 0?s=Eo:h[2]!==void 0?(yi.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=De):h[3]!==void 0&&(s=De):s===De?h[0]===">"?(s=i??ut,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?De:h[3]==='"'?Ao:Co):s===Ao||s===Co?s=De:s===So||s===Eo?s=ut:(s=De,i=void 0);const d=s===De&&t[l+1].startsWith("/>")?" ":"";n+=s===ut?a+xs:c>=0?(o.push(u),a.slice(0,c)+vi+a.slice(c)+ke+d):a+ke+(c===-2?l:d)}return[$i(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class _t{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=ks(e,r);if(this.el=_t.createElement(u,o),Ie.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ie.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(vi)){const g=h[s++],d=i.getAttribute(c).split(ke),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?Es:f[1]==="?"?Cs:f[1]==="@"?As:ir}),i.removeAttribute(c)}else c.startsWith(ke)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(yi.test(i.tagName)){const c=i.textContent.split(ke),g=c.length-1;if(g>0){i.textContent=Ft?Ft.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],$t()),Ie.nextNode(),a.push({type:2,index:++n});i.append(c[g],$t())}}}else if(i.nodeType===8)if(i.data===wi)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(ke,c+1))!==-1;)a.push({type:7,index:n}),c+=ke.length-1}n++}}static createElement(e,r){const o=ze.createElement("template");return o.innerHTML=e,o}}function ot(t,e,r=t,o){if(e===rt)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const n=xt(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=ot(t,i._$AS(t,e.values),i,o)),e}class Ss{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??ze).importNode(r,!0);Ie.currentNode=i;let n=Ie.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new At(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new Ls(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=Ie.nextNode(),s++)}return Ie.currentNode=ze,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class At{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ot(this,e,r),xt(e)?e===Y||e==null||e===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==rt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_s(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ze.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=_t.createElement($i(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Ss(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Lo.get(e.strings);return r===void 0&&Lo.set(e.strings,r=new _t(e)),r}k(e){Qr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new At(this.O($t()),this.O($t()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ir{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=ot(this,e,r,0),s=!xt(e)||e!==this._$AH&&e!==rt,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=ot(this,l[o+a],r,a),u===rt&&(u=this._$AH[a]),s||=!xt(u)||u!==this._$AH[a],u===Y?e=Y:e!==Y&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Es extends ir{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class Cs extends ir{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class As extends ir{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=ot(this,e,r,0)??Y)===rt)return;const o=this._$AH,i=e===Y&&o!==Y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Y&&(o===Y||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ls{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}}const Os=qr.litHtmlPolyfillSupport;Os?.(_t,At),(qr.litHtmlVersions??=[]).push("3.2.1");const Ts=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new At(e.insertBefore($t(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rt}};mt._$litElement$=!0,mt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:mt});const Ns=globalThis.litElementPolyfillSupport;Ns?.({LitElement:mt});(globalThis.litElementVersions??=[]).push("4.1.1");class Ds extends mt{#e=!1;get i18n(){return this.#e||(gr.load(this.locale,this.translations),gr.activate(this.locale),this.#e=!0),gr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Yr=()=>!(typeof window<"u");class xi{isServer=!1;css=""}const Ps=(t=[])=>{const e=new xi;if(Yr()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},Bs=()=>Ps(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),Ms=async(t=[])=>{const e=new xi;if(Yr()){for(const n of t)e.css+=`@import url('${n}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(n=>fetch(n))),i=await Promise.all(o.map(n=>n.text()));for(const n of i)e.css+=n;return e},Oo=async()=>Ms(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(m){var v=m.replace(s,"");return v!==m&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),v.trim()}function a(m){return"isConnected"in m?m.isConnected:document.contains(m)}function u(m){return m.filter(function(v,T){return m.indexOf(v)===T})}function h(m,v){return m.filter(function(T){return v.indexOf(T)===-1})}function c(m){m.parentNode.removeChild(m)}function g(m){return m.shadowRoot||r.get(m)}var d=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,p=f.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function b(m){return typeof m=="object"?j.isPrototypeOf(m)||p.isPrototypeOf(m):!1}function k(m){return typeof m=="object"?p.isPrototypeOf(m):!1}var C=new WeakMap,E=new WeakMap,B=new WeakMap,y=new WeakMap;function A(m,v){var T=document.createElement("style");return B.get(m).set(v,T),E.get(m).push(v),T}function L(m,v){return B.get(m).get(v)}function M(m,v){B.get(m).delete(v),E.set(m,E.get(m).filter(function(T){return T!==v}))}function H(m,v){requestAnimationFrame(function(){v.textContent=C.get(m).textContent,y.get(m).forEach(function(T){return v.sheet[T.method].apply(v.sheet,T.args)})})}function U(m){if(!C.has(m))throw new TypeError("Illegal invocation")}function Q(){var m=this,v=document.createElement("style");e.body.appendChild(v),C.set(m,v),E.set(m,[]),B.set(m,new WeakMap),y.set(m,[])}var j=Q.prototype;j.replace=function(v){try{return this.replaceSync(v),Promise.resolve(this)}catch(T){return Promise.reject(T)}},j.replaceSync=function(v){if(U(this),typeof v=="string"){var T=this;C.get(T).textContent=l(v),y.set(T,[]),E.get(T).forEach(function(oe){oe.isConnected()&&H(T,L(T,oe))})}},i(j,"cssRules",{configurable:!0,enumerable:!0,get:function(){return U(this),C.get(this).sheet.cssRules}}),i(j,"media",{configurable:!0,enumerable:!0,get:function(){return U(this),C.get(this).sheet.media}}),d.forEach(function(m){j[m]=function(){var v=this;U(v);var T=arguments;y.get(v).push({method:m,args:T}),E.get(v).forEach(function(ne){if(ne.isConnected()){var Z=L(v,ne).sheet;Z[m].apply(Z,T)}});var oe=C.get(v).sheet;return oe[m].apply(oe,T)}}),i(Q,Symbol.hasInstance,{configurable:!0,value:b});var ie={childList:!0,subtree:!0},P=new WeakMap;function K(m){var v=P.get(m);return v||(v=new lo(m),P.set(m,v)),v}function V(m){i(m.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return K(this).sheets},set:function(v){K(this).update(v)}})}function te(m,v){for(var T=document.createNodeIterator(m,NodeFilter.SHOW_ELEMENT,function(ne){return g(ne)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),oe=void 0;oe=T.nextNode();)v(g(oe))}var G=new WeakMap,re=new WeakMap,qe=new WeakMap;function An(m,v){return v instanceof HTMLStyleElement&&re.get(m).some(function(T){return L(T,m)})}function ao(m){var v=G.get(m);return v instanceof Document?v.body:v}function ur(m){var v=document.createDocumentFragment(),T=re.get(m),oe=qe.get(m),ne=ao(m);oe.disconnect(),T.forEach(function(Z){v.appendChild(L(Z,m)||A(Z,m))}),ne.insertBefore(v,null),oe.observe(ne,ie),T.forEach(function(Z){H(Z,L(Z,m))})}function lo(m){var v=this;v.sheets=[],G.set(v,m),re.set(v,[]),qe.set(v,new MutationObserver(function(T,oe){if(!document){oe.disconnect();return}T.forEach(function(ne){t||n.call(ne.addedNodes,function(Z){Z instanceof Element&&te(Z,function(Qe){K(Qe).connect()})}),n.call(ne.removedNodes,function(Z){Z instanceof Element&&(An(v,Z)&&ur(v),t||te(Z,function(Qe){K(Qe).disconnect()}))})})}))}if(lo.prototype={isConnected:function(){var m=G.get(this);return m instanceof Document?m.readyState!=="loading":a(m.host)},connect:function(){var m=ao(this);qe.get(this).observe(m,ie),re.get(this).length>0&&ur(this),te(m,function(v){K(v).connect()})},disconnect:function(){qe.get(this).disconnect()},update:function(m){var v=this,T=G.get(v)===document?"Document":"ShadowRoot";if(!Array.isArray(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!m.every(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(m.some(k))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");v.sheets=m;var oe=re.get(v),ne=u(m),Z=h(oe,ne);Z.forEach(function(Qe){c(L(Qe,v)),M(Qe,v)}),re.set(v,ne),v.isConnected()&&ne.length>0&&ur(v)}},window.CSSStyleSheet=Q,V(Document),"ShadowRoot"in window){V(ShadowRoot);var co=Element.prototype,Ln=co.attachShadow;co.attachShadow=function(v){var T=Ln.call(this,v);return v.mode==="closed"&&r.set(this,T),T}}var Tt=K(document);Tt.isConnected()?Tt.connect():document.addEventListener("DOMContentLoaded",Tt.connect.bind(Tt))})();let gt;if(Yr()){const t=await Oo();gt=Yo(t.css)}else{gt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await Oo();gt.replaceSync(r.css)}catch{const e=Bs();gt.replaceSync(e.css)}}class D extends Ds{static styles=[gt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>t??F;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=Symbol.for(""),Rs=t=>{if(t?.r===_i)return t?._$litStatic$},fe=t=>({_$litStatic$:t,r:_i}),To=new Map,Is=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(n=r[u],(i=Rs(n))!==void 0);)a+=i+e[++u],h=!0;u!==o&&l.push(n),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=To.get(c))===void 0&&(s.raw=s,To.set(c,e=s)),r=l}return t(e,...r)},me=Is(w),Se=t=>typeof t=="string",Fs=t=>typeof t=="function",No=new Map,ki="en";function Kr(t){return[...Array.isArray(t)?t:[t],ki]}function Gr(t,e,r){const o=Kr(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return Ht(()=>jt("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(Se(e)?new Date(e):e)}function Hs(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return Gr(t,e,o)}function Nr(t,e,r){const o=Kr(t);return Ht(()=>jt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Do(t,e,r,{offset:o=0,...i}){const n=Kr(t),s=e?Ht(()=>jt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Ht(()=>jt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Ht(t,e){const r=t();let o=No.get(r);return o||(o=e(),No.set(r,o)),o}function jt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Si=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Ei="%__lingui_octothorpe__%",js=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s],n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=Nr(o,s,a);return l.replace(new RegExp(Ei,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Do(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Do(o,!0,s,l);return n(s-a,u)},select:zs,number:(s,l)=>Nr(o,s,i(l)||{style:l}),date:(s,l)=>Gr(o,s,i(l)||l),time:(s,l)=>Hs(o,s,i(l)||l)}},zs=(t,e)=>e[t]??e.other;function Us(t,e,r){return(o={},i)=>{const n=js(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Ei;if(Se(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([k,C])=>{p[k]=s(C,d==="plural"||d==="selectordinal")}):p=f;let b;if(d){const k=n[d];b=k(o[g],p)}else b=o[g];return b==null?h:h+b},""):a,l=s(t);return Se(l)&&Si.test(l)?Vr.unraw(l):Se(l)?l:l?String(l):""}}var Ws=Object.defineProperty,Vs=(t,e,r)=>e in t?Ws(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Js=(t,e,r)=>(Vs(t,e+"",r),r);class qs{constructor(){Js(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Qs=Object.defineProperty,Ys=(t,e,r)=>e in t?Qs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pe=(t,e,r)=>(Ys(t,typeof e!="symbol"?e+"":e,r),r);class Ks extends qs{constructor(e){super(),Pe(this,"_locale",""),Pe(this,"_locales"),Pe(this,"_localeData",{}),Pe(this,"_messages",{}),Pe(this,"_missing"),Pe(this,"_messageCompiler"),Pe(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??ki,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),Se(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return Fs(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Se(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Se(a)&&Si.test(a)?JSON.parse(`"${a}"`):Se(a)?a:Us(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Gr(this._locales||this._locale,e,r)}number(e,r){return Nr(this._locales||this._locale,e,r)}}function Gs(t={}){return new Ks(t)}const S=Gs();var Zs={},Xs=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),ea=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),ta=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),ra=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),oa=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Ci=["en","nb","fi","da","sv"],Ai="en",ia=()=>{var t;let e;switch((t=process==null?void 0:Zs)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Li=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ai},mr=t=>Ci.find(e=>t===e||t.toLowerCase().includes(e))||Li();function na(){var t;if(typeof window>"u"){const e=ia();return mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Li();return Ci.includes(e)?mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ai}}var sa=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,aa=(t,e,r,o,i)=>{const n=na(),s=sa(n,t,e,r,o,i);S.load(n,s),S.activate(n)};aa(ea,Xs,ta,ra,oa);var la=class extends q{render(){const t=S.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",la);var ca={},da=JSON.parse('{"icon.title.close":["Kryss"]}'),ua=JSON.parse('{"icon.title.close":["Cross"]}'),ha=JSON.parse('{"icon.title.close":["Rasti"]}'),pa=JSON.parse('{"icon.title.close":["Kryds"]}'),ga=JSON.parse('{"icon.title.close":["Kryss"]}'),Oi=["en","nb","fi","da","sv"],Ti="en",fa=()=>{var t;let e;switch((t=process==null?void 0:ca)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ni=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ti},br=t=>Oi.find(e=>t===e||t.toLowerCase().includes(e))||Ni();function ma(){var t;if(typeof window>"u"){const e=fa();return br(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ni();return Oi.includes(e)?br(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),br(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ti}}var ba=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,va=(t,e,r,o,i)=>{const n=ma(),s=ba(n,t,e,r,o,i);S.load(n,s),S.activate(n)};va(ua,da,ha,pa,ga);var wa=class extends q{render(){const t=S.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",wa);const ya=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Le(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:ya(e.toString())})),super.createProperty(e,o)}}}function $a(){return`m${Math.random().toString(36).slice(2)}`}class xa extends Le(D){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[D.styles];get _classBase(){return this.slot==="suffix"?ls:cs}get _classes(){return I([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
      <button aria-label="${W(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return w`
      <button aria-label="${W(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return w`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",xa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _a={attribute:!0,type:String,converter:Bt,reflect:!1,hasChanged:Fr},ka=(t=_a,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function be(t){return(e,r)=>typeof r=="object"?ka(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Sa(t){return be({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ea=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function nr(t,e){return(r,o,i)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return Ea(r,o,{get(){return n(this)}})}}var Ca={},Aa=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),La=JSON.parse('{"icon.title.info":["Information circle"]}'),Oa=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),Ta=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Na=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Di=["en","nb","fi","da","sv"],Pi="en",Da=()=>{var t;let e;switch((t=process==null?void 0:Ca)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Bi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Pi},vr=t=>Di.find(e=>t===e||t.toLowerCase().includes(e))||Bi();function Pa(){var t;if(typeof window>"u"){const e=Da();return vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Bi();return Di.includes(e)?vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Pi}}var Ba=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Ma=(t,e,r,o,i)=>{const n=Pa(),s=Ba(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Ma(La,Aa,Oa,Ta,Na);var Ra=class extends q{render(){const t=S.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",Ra);var Ia={},Fa=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Ha=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),ja=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),za=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),Ua=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),Mi=["en","nb","fi","da","sv"],Ri="en",Wa=()=>{var t;let e;switch((t=process==null?void 0:Ia)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ii=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ri},wr=t=>Mi.find(e=>t===e||t.toLowerCase().includes(e))||Ii();function Va(){var t;if(typeof window>"u"){const e=Wa();return wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ii();return Mi.includes(e)?wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ri}}var Ja=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,qa=(t,e,r,o,i)=>{const n=Va(),s=Ja(n,t,e,r,o,i);S.load(n,s),S.activate(n)};qa(Ha,Fa,ja,za,Ua);var Qa=class extends q{render(){const t=S.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",Qa);var Ya={},Ka=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),Ga=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),Za=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),Xa=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),el=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),Fi=["en","nb","fi","da","sv"],Hi="en",tl=()=>{var t;let e;switch((t=process==null?void 0:Ya)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ji=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Hi},yr=t=>Fi.find(e=>t===e||t.toLowerCase().includes(e))||ji();function rl(){var t;if(typeof window>"u"){const e=tl();return yr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ji();return Fi.includes(e)?yr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),yr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Hi}}var ol=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,il=(t,e,r,o,i)=>{const n=rl(),s=ol(n,t,e,r,o,i);S.load(n,s),S.activate(n)};il(Ga,Ka,Za,Xa,el);var nl=class extends q{render(){const t=S.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",nl);var sl={},al=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),ll=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),cl=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),dl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),ul=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),zi=["en","nb","fi","da","sv"],Ui="en",hl=()=>{var t;let e;switch((t=process==null?void 0:sl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Wi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ui},$r=t=>zi.find(e=>t===e||t.toLowerCase().includes(e))||Wi();function pl(){var t;if(typeof window>"u"){const e=hl();return $r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Wi();return zi.includes(e)?$r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),$r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ui}}var gl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,fl=(t,e,r,o,i)=>{const n=pl(),s=gl(n,t,e,r,o,i);S.load(n,s),S.activate(n)};fl(ll,al,cl,dl,ul);var ml=class extends q{render(){const t=S.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",ml);const bl=ee`
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
  [type="button"],
  [type="reset"],
  [type="submit"] {
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
  [type="search"] {
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
  [role="button"] {
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
  [tabindex="-1"]:focus:not(:focus-visible) {
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
`,vl=ee`*, :before, :after {
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
        `;var wl=Object.defineProperty,Zr=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&wl(e,r,i),i};const ht={negative:"negative",positive:"positive",warning:"warning",info:"info"};class sr extends q{constructor(){super(),this.variant="info",this.show=!1,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!ht[this.variant])throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return I([dt.wrapper,dt[this.variant]])}get _iconClasses(){const e=dt[`${this.variant}Icon`];return I([dt.icon,e])}static{this.styles=[bl,vl,ee`
            :host {
                display: block;
            }

            ::slotted(:first-child) {
                margin-top: 0px;
            }

            ::slotted(:last-child) {
                margin-bottom: 0px !important;
            }
        `]}get _icon(){return this.variant===ht.info?w`
                <w-icon-info-16></w-icon-info-16>`:this.variant===ht.warning?w`
                <w-icon-warning-16></w-icon-warning-16>`:this.variant===ht.negative?w`
                <w-icon-error-16></w-icon-error-16>`:this.variant===ht.positive?w`
                <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
            <w-expand-transition ?show=${this.show}>
                <div role=${this.role} class=${this._wrapperClasses}>
                    <div class=${this._iconClasses}>${this._icon}</div>
                    <div class=${dt.textWrapper}>
                        <slot></slot>
                    </div>
                </div>
            </w-expand-transition>
        `}}Zr([be({reflect:!0})],sr.prototype,"variant");Zr([be({reflect:!0})],sr.prototype,"show");Zr([be({reflect:!0})],sr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",sr);const yl=["top","right","bottom","left"],Ue=Math.min,le=Math.max,zt=Math.round,pe=t=>({x:t,y:t}),$l={left:"right",right:"left",bottom:"top",top:"bottom"},xl={start:"end",end:"start"};function Dr(t,e,r){return le(t,Ue(e,r))}function Ve(t,e){return typeof t=="function"?t(e):t}function Ce(t){return t.split("-")[0]}function nt(t){return t.split("-")[1]}function Vi(t){return t==="x"?"y":"x"}function Xr(t){return t==="y"?"height":"width"}function We(t){return["top","bottom"].includes(Ce(t))?"y":"x"}function eo(t){return Vi(We(t))}function _l(t,e,r){r===void 0&&(r=!1);const o=nt(t),i=eo(t),n=Xr(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Ut(s)),[s,Ut(s)]}function kl(t){const e=Ut(t);return[Pr(t),e,Pr(e)]}function Pr(t){return t.replace(/start|end/g,e=>xl[e])}function Sl(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function El(t,e,r,o){const i=nt(t);let n=Sl(Ce(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Pr)))),n}function Ut(t){return t.replace(/left|right|bottom|top/g,e=>$l[e])}function Cl(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ji(t){return typeof t!="number"?Cl(t):{top:t,right:t,bottom:t,left:t}}function Wt(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function Po(t,e,r){let{reference:o,floating:i}=t;const n=We(e),s=eo(e),l=Xr(s),a=Ce(e),u=n==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-i.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-i.width,y:c};break;default:d={x:o.x,y:o.y}}switch(nt(e)){case"start":d[s]-=g*(r&&u?-1:1);break;case"end":d[s]+=g*(r&&u?-1:1);break}return d}const Al=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Po(u,o,a),g=o,d={},f=0;for(let p=0;p<l.length;p++){const{name:b,fn:k}=l[p],{x:C,y:E,data:B,reset:y}=await k({x:h,y:c,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=C??h,c=E??c,d={...d,[b]:{...d[b],...B}},y&&f<=50&&(f++,typeof y=="object"&&(y.placement&&(g=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:h,y:c}=Po(u,g,a)),p=-1)}return{x:h,y:c,placement:g,strategy:i,middlewareData:d}};async function kt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:d=0}=Ve(e,t),f=Ji(d),b=l[g?c==="floating"?"reference":"floating":c],k=Wt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),C=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(E))?await(n.getScale==null?void 0:n.getScale(E))||{x:1,y:1}:{x:1,y:1},y=Wt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:E,strategy:a}):C);return{top:(k.top-y.top+f.top)/B.y,bottom:(y.bottom-k.bottom+f.bottom)/B.y,left:(k.left-y.left+f.left)/B.x,right:(y.right-k.right+f.right)/B.x}}const Ll=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ve(t,e)||{};if(u==null)return{};const c=Ji(h),g={x:r,y:o},d=eo(i),f=Xr(d),p=await s.getDimensions(u),b=d==="y",k=b?"top":"left",C=b?"bottom":"right",E=b?"clientHeight":"clientWidth",B=n.reference[f]+n.reference[d]-g[d]-n.floating[f],y=g[d]-n.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=A?A[E]:0;(!L||!await(s.isElement==null?void 0:s.isElement(A)))&&(L=l.floating[E]||n.floating[f]);const M=B/2-y/2,H=L/2-p[f]/2-1,U=Ue(c[k],H),Q=Ue(c[C],H),j=U,ie=L-p[f]-Q,P=L/2-p[f]/2+M,K=Dr(j,P,ie),V=!a.arrow&&nt(i)!=null&&P!==K&&n.reference[f]/2-(P<j?U:Q)-p[f]/2<0,te=V?P<j?P-j:P-ie:0;return{[d]:g[d]+te,data:{[d]:K,centerOffset:P-K-te,...V&&{alignmentOffset:te}},reset:V}}}),Ol=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...b}=Ve(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const k=Ce(i),C=We(l),E=Ce(l)===l,B=await(a.isRTL==null?void 0:a.isRTL(u.floating)),y=g||(E||!p?[Ut(l)]:kl(l)),A=f!=="none";!g&&A&&y.push(...El(l,p,f,B));const L=[l,...y],M=await kt(e,b),H=[];let U=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&H.push(M[k]),c){const P=_l(i,s,B);H.push(M[P[0]],M[P[1]])}if(U=[...U,{placement:i,overflows:H}],!H.every(P=>P<=0)){var Q,j;const P=(((Q=n.flip)==null?void 0:Q.index)||0)+1,K=L[P];if(K)return{data:{index:P,overflows:U},reset:{placement:K}};let V=(j=U.filter(te=>te.overflows[0]<=0).sort((te,G)=>te.overflows[1]-G.overflows[1])[0])==null?void 0:j.placement;if(!V)switch(d){case"bestFit":{var ie;const te=(ie=U.filter(G=>{if(A){const re=We(G.placement);return re===C||re==="y"}return!0}).map(G=>[G.placement,G.overflows.filter(re=>re>0).reduce((re,qe)=>re+qe,0)]).sort((G,re)=>G[1]-re[1])[0])==null?void 0:ie[0];te&&(V=te);break}case"initialPlacement":V=l;break}if(i!==V)return{reset:{placement:V}}}return{}}}};function Bo(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Mo(t){return yl.some(e=>t[e]>=0)}const Tl=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=Ve(t,e);switch(o){case"referenceHidden":{const n=await kt(e,{...i,elementContext:"reference"}),s=Bo(n,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Mo(s)}}}case"escaped":{const n=await kt(e,{...i,altBoundary:!0}),s=Bo(n,r.floating);return{data:{escapedOffsets:s,escaped:Mo(s)}}}default:return{}}}}};async function Nl(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Ce(r),l=nt(r),a=We(r)==="y",u=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,c=Ve(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(d=l==="end"?f*-1:f),a?{x:d*h,y:g*u}:{x:g*u,y:d*h}}const Dl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await Nl(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},Pl=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:k,y:C}=b;return{x:k,y:C}}},...a}=Ve(t,e),u={x:r,y:o},h=await kt(e,a),c=We(Ce(i)),g=Vi(c);let d=u[g],f=u[c];if(n){const b=g==="y"?"top":"left",k=g==="y"?"bottom":"right",C=d+h[b],E=d-h[k];d=Dr(C,d,E)}if(s){const b=c==="y"?"top":"left",k=c==="y"?"bottom":"right",C=f+h[b],E=f-h[k];f=Dr(C,f,E)}const p=l.fn({...e,[g]:d,[c]:f});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[g]:n,[c]:s}}}}}},Bl=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ve(t,e),h=await kt(e,u),c=Ce(i),g=nt(i),d=We(i)==="y",{width:f,height:p}=n.floating;let b,k;c==="top"||c==="bottom"?(b=c,k=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(k=c,b=g==="end"?"top":"bottom");const C=p-h.top-h.bottom,E=f-h.left-h.right,B=Ue(p-h[b],C),y=Ue(f-h[k],E),A=!e.middlewareData.shift;let L=B,M=y;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=E),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=C),A&&!g){const U=le(h.left,0),Q=le(h.right,0),j=le(h.top,0),ie=le(h.bottom,0);d?M=f-2*(U!==0||Q!==0?U+Q:le(h.left,h.right)):L=p-2*(j!==0||ie!==0?j+ie:le(h.top,h.bottom))}await a({...e,availableWidth:M,availableHeight:L});const H=await s.getDimensions(l.floating);return f!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function ar(){return typeof window<"u"}function st(t){return qi(t)?(t.nodeName||"").toLowerCase():"#document"}function ae(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ye(t){var e;return(e=(qi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qi(t){return ar()?t instanceof Node||t instanceof ae(t).Node:!1}function de(t){return ar()?t instanceof Element||t instanceof ae(t).Element:!1}function ge(t){return ar()?t instanceof HTMLElement||t instanceof ae(t).HTMLElement:!1}function Ro(t){return!ar()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ae(t).ShadowRoot}function Lt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=ue(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Ml(t){return["table","td","th"].includes(st(t))}function lr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function to(t){const e=ro(),r=de(t)?ue(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Rl(t){let e=Ae(t);for(;ge(e)&&!it(e);){if(to(e))return e;if(lr(e))return null;e=Ae(e)}return null}function ro(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(st(t))}function ue(t){return ae(t).getComputedStyle(t)}function cr(t){return de(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ae(t){if(st(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ro(t)&&t.host||ye(t);return Ro(e)?e.host:e}function Qi(t){const e=Ae(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:ge(e)&&Lt(e)?e:Qi(e)}function Br(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Qi(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=ae(i);if(n){const l=Mr(s);return e.concat(s,s.visualViewport||[],Lt(i)?i:[],l&&r?Br(l):[])}return e.concat(i,Br(i,[],r))}function Mr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Yi(t){const e=ue(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=ge(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,l=zt(r)!==n||zt(o)!==s;return l&&(r=n,o=s),{width:r,height:o,$:l}}function Ki(t){return de(t)?t:t.contextElement}function tt(t){const e=Ki(t);if(!ge(e))return pe(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=Yi(e);let s=(n?zt(r.width):r.width)/o,l=(n?zt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Il=pe(0);function Gi(t){const e=ae(t);return!ro()||!e.visualViewport?Il:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Fl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ae(t)?!1:e}function St(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=Ki(t);let s=pe(1);e&&(o?de(o)&&(s=tt(o)):s=tt(t));const l=Fl(n,r,o)?Gi(n):pe(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(n){const g=ae(n),d=o&&de(o)?ae(o):o;let f=g,p=Mr(f);for(;p&&o&&d!==f;){const b=tt(p),k=p.getBoundingClientRect(),C=ue(p),E=k.left+(p.clientLeft+parseFloat(C.paddingLeft))*b.x,B=k.top+(p.clientTop+parseFloat(C.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,c*=b.y,a+=E,u+=B,f=ae(p),p=Mr(f)}}return Wt({width:h,height:c,x:a,y:u})}function oo(t,e){const r=cr(t).scrollLeft;return e?e.left+r:St(ye(t)).left+r}function Zi(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:oo(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function Hl(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=ye(o),l=e?lr(e.floating):!1;if(o===s||l&&n)return r;let a={scrollLeft:0,scrollTop:0},u=pe(1);const h=pe(0),c=ge(o);if((c||!c&&!n)&&((st(o)!=="body"||Lt(s))&&(a=cr(o)),ge(o))){const d=St(o);u=tt(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!c&&!n?Zi(s,a,!0):pe(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+g.x,y:r.y*u.y-a.scrollTop*u.y+h.y+g.y}}function jl(t){return Array.from(t.getClientRects())}function zl(t){const e=ye(t),r=cr(t),o=t.ownerDocument.body,i=le(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=le(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+oo(t);const l=-r.scrollTop;return ue(o).direction==="rtl"&&(s+=le(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:l}}function Ul(t,e){const r=ae(t),o=ye(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const u=ro();(!u||u&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Wl(t,e){const r=St(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=ge(t)?tt(t):pe(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,u=o*n.y;return{width:s,height:l,x:a,y:u}}function Io(t,e,r){let o;if(e==="viewport")o=Ul(t,r);else if(e==="document")o=zl(ye(t));else if(de(e))o=Wl(e,r);else{const i=Gi(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Wt(o)}function Xi(t,e){const r=Ae(t);return r===e||!de(r)||it(r)?!1:ue(r).position==="fixed"||Xi(r,e)}function Vl(t,e){const r=e.get(t);if(r)return r;let o=Br(t,[],!1).filter(l=>de(l)&&st(l)!=="body"),i=null;const n=ue(t).position==="fixed";let s=n?Ae(t):t;for(;de(s)&&!it(s);){const l=ue(s),a=to(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Lt(s)&&!a&&Xi(t,s))?o=o.filter(h=>h!==s):i=l,s=Ae(s)}return e.set(t,o),o}function Jl(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?lr(e)?[]:Vl(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=Io(e,h,i);return u.top=le(c.top,u.top),u.right=Ue(c.right,u.right),u.bottom=Ue(c.bottom,u.bottom),u.left=le(c.left,u.left),u},Io(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ql(t){const{width:e,height:r}=Yi(t);return{width:e,height:r}}function Ql(t,e,r){const o=ge(e),i=ye(e),n=r==="fixed",s=St(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=pe(0);if(o||!o&&!n)if((st(e)!=="body"||Lt(i))&&(l=cr(e)),o){const g=St(e,!0,n,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else i&&(a.x=oo(i));const u=i&&!o&&!n?Zi(i,l):pe(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function xr(t){return ue(t).position==="static"}function Fo(t,e){if(!ge(t)||ue(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return ye(t)===r&&(r=r.ownerDocument.body),r}function en(t,e){const r=ae(t);if(lr(t))return r;if(!ge(t)){let i=Ae(t);for(;i&&!it(i);){if(de(i)&&!xr(i))return i;i=Ae(i)}return r}let o=Fo(t,e);for(;o&&Ml(o)&&xr(o);)o=Fo(o,e);return o&&it(o)&&xr(o)&&!to(o)?r:o||Rl(t)||r}const Yl=async function(t){const e=this.getOffsetParent||en,r=this.getDimensions,o=await r(t.floating);return{reference:Ql(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Kl(t){return ue(t).direction==="rtl"}const Gl={convertOffsetParentRelativeRectToViewportRelativeRect:Hl,getDocumentElement:ye,getClippingRect:Jl,getOffsetParent:en,getElementRects:Yl,getClientRects:jl,getDimensions:ql,getScale:tt,isElement:de,isRTL:Kl},Zl=Dl,Xl=Pl,ec=Ol,tc=Bl,rc=Tl,oc=Ll,ic=(t,e,r)=>{const o=new Map,i={platform:Gl,...r},n={...i.platform,_c:o};return Al(t,e,{...i,platform:n})},Vt="top-start",Jt="top",qt="top-end",Qt="right-start",Yt="right",Kt="right-end",Gt="bottom-start",Et="bottom",Zt="bottom-end",Xt="left-start",er="left",tr="left-end",Ho=[Vt,Jt,qt,Qt,Yt,Kt,Gt,Et,Zt,Xt,er,tr],Xe={[Vt]:Gt,[Jt]:Et,[qt]:Zt,[Gt]:Vt,[Et]:Jt,[Zt]:qt,[Xt]:Qt,[er]:Yt,[tr]:Kt,[Qt]:Xt,[Yt]:er,[Kt]:tr},nc={[Xt]:-45,[er]:-45,[tr]:-45,[Vt]:45,[Jt]:45,[qt]:45,[Qt]:135,[Yt]:135,[Kt]:135,[Gt]:-135,[Et]:-135,[Zt]:-135},tn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},sc=t=>t.split("-")[0],ac=t=>Xe[sc(t)],rn=t=>Xe[t],lc=t=>nc[rn(t)],cc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${tn(ac(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},jo=8,Nt=24;async function zo(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return ic(e,r,{placement:t?.directionName??Et,middleware:[Zl({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&ec({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Xl({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&oc({element:t?.arrowEl}),rc(),tc({apply(){Object.assign(r.style,{paddingRight:`${jo}px`,paddingLeft:`${jo}px`})}})]}).then(({x:o,y:i,middlewareData:n,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),n?.hide&&!t?.isCallout){const{referenceHidden:l}=n.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(n?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=n.arrow,h=window.getComputedStyle(r).direction==="rtl",c=rn(s).split("-")[1];let g="",d="",f="",p="";if(c==="start"){const b=typeof a=="number"?`calc(${Nt}px - ${l.offsetWidth/2}px)`:"";g=typeof u=="number"?`calc(${Nt}px - ${l.offsetWidth/2}px)`:"",d=h?b:"",p=h?"":b}else if(c==="end"){const b=typeof a=="number"?`calc(${Nt}px - ${l.offsetWidth/2}px)`:"";d=h?"":b,p=h?b:"",f=typeof u=="number"?`calc(${Nt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",g=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:g,right:d,bottom:f,left:p}),cc(l,lc(s),s)}}),t}var dc={};const uc=["en","nb","fi","da","sv"],on="en",Uo=t=>uc.find(e=>t===e||t.toLowerCase().includes(e))||on;function hc(){if(typeof window>"u"){const t=dc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Uo(t)}try{const t=document.documentElement.lang;return Uo(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),on}}const pc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Oe=(t,e,r,o,i)=>{const n=hc(),s=pc(n,t,e,r,o,i);S.load(n,s),S.activate(n)},gc=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),fc=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),mc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),bc=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),vc=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class wc extends Le(D){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[D.styles,ee`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Oe(fc,bc,mc,gc,vc),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(Xe).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(Xe))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Ho.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Ho)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?zo(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return Xe[this._actualDirection]}get _arrowClasses(){return I([Ye.arrowBase,this._activeVariantClasses.arrow,Ye[`arrowDirection${tn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:Ye[r],arrow:Ye[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return I([Ye.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return S._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${Ye.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},zo(this.attentionState)}pointingAtDirection(){switch(Xe[this._actualDirection]){case"top-start":case"top":case"top-end":return S._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return S._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return S._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return S._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return S._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return S._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return S._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return S._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=$a());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${W(this.className?this.className:void 0)}>
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
    `}}customElements.get("w-attention")||customElements.define("w-attention",wc);class yc extends D{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[D.styles];constructor(){super(),this.variant="neutral"}get _class(){return I([Ne.base,Ne[this.variant],!!this.position&&Ne.positionBase,this.position==="top-left"&&Ne.positionTL,this.position==="top-right"&&Ne.positionTR,this.position==="bottom-right"&&Ne.positionBR,this.position==="bottom-left"&&Ne.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",yc);class $c extends D{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[D.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return I([Ge.base,this.bleed&&Ge.bleed,this.info&&Ge.info,this.neutral&&Ge.neutral,this.bordered&&Ge.bordered])}get _optOutRoleWithDefault(){return this.role===""?F:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",$c);function xc(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const _c=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),kc=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Sc=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Ec=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Cc=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Ac=w`<span class=${Ze.separator}>/</span>`;class Lc extends Le(D){static styles=[D.styles];static properties={ariaLabel:{type:String}};constructor(){super(),Oe(kc,Ec,Sc,_c,Cc),this.ariaLabel=S._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const n=i===children.length-1;return w`<span class=${Ze.text} aria-current=${n?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?Ze.link:Ze.text),o});this._children=xc(r,Ac)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${Ze.a11y}>${this.ariaLabel}</h2>
        <div class=${Ze.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Lc);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},J=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function io(t){var e,r,o,i,n,s,l,a,u,h,c,g,d,f,p,b,k,C;class E extends t{constructor(...y){var A,L,M;super(...y),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),n.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{J(this,i,!0,"f"),J(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{J(this,r,!1,"f"),R(this,e,"m",b).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,i,"f")&&J(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),J(this,l,!1,"f")),J(this,i,!0,"f"),J(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),d.set(this,!1),f.set(this,Promise.resolve()),(A=this.addEventListener)===null||A===void 0||A.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,h,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const y=this.validators.map(M=>M.attribute).flat(),A=super.observedAttributes||[];return[...new Set([...A,...y])]}static getValidator(y){return this.validators.find(A=>A.attribute===y)||null}static getValidators(y){return this.validators.filter(A=>{var L;if(A.attribute===y||!((L=A.attribute)===null||L===void 0)&&L.includes(y))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(y,A,L){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,y,A,L);const U=this.constructor.getValidators(y);U?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue(y){var A;J(this,o,!1,"f"),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,""),J(this,a,y,"f");const M=this.shouldFormValueUpdate()?y:null;this.internals.setFormValue(M),R(this,e,"m",b).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(y=>y(R(this,f,"f")))}formResetCallback(){var y,A;J(this,i,!1,"f"),J(this,o,!1,"f"),R(this,e,"m",p).call(this),(y=this.resetFormControl)===null||y===void 0||y.call(this),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,d=new WeakMap,f=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const y=R(this,o,"f")||R(this,i,"f")&&!this.validity.valid&&!R(this,r,"f");return y&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),y},b=function(y){const A=this.constructor,L={},M=A.validators,H=[],U=M.some(P=>P.isValid instanceof Promise);R(this,d,"f")||(J(this,f,new Promise(P=>{J(this,g,P,"f")}),"f"),J(this,d,!0,"f")),R(this,n,"f")&&(R(this,n,"f").abort(),J(this,s,R(this,n,"f"),"f"));const Q=new AbortController;J(this,n,Q,"f");let j,ie=!1;M.length&&(M.forEach(P=>{const K=P.key||"customError",V=P.isValid(this,y,Q.signal);V instanceof Promise?(H.push(V),V.then(G=>{G!=null&&(L[K]=!G,j=R(this,e,"m",C).call(this,P,y),R(this,e,"m",k).call(this,L,j))})):(L[K]=!V,this.validity[K]!==!V&&(ie=!0),!V&&!j&&(j=R(this,e,"m",C).call(this,P,y)))}),Promise.allSettled(H).then(()=>{var P;Q?.signal.aborted||(J(this,d,!1,"f"),(P=R(this,g,"f"))===null||P===void 0||P.call(this))}),(ie||!U)&&R(this,e,"m",k).call(this,L,j))},k=function(y,A){if(this.validationTarget)this.internals.setValidity(y,A,this.validationTarget),J(this,l,!1,"f");else{if(this.internals.setValidity(y,A),this.internals.validity.valid)return;J(this,l,!0,"f")}},C=function(y,A){if(this.validityCallback){const L=this.validityCallback(y.key||"customError");if(L)return L}return y.message instanceof Function?y.message(this,A):y.message},E}const Oc=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),Tc=JSON.parse('{"button.aria.loading":["Loading..."]}'),Nc=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Dc=JSON.parse('{"button.aria.loading":["Laster..."]}'),Pc=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Wo=["primary","secondary","negative","utility","pill","link"];class Bc extends io(Le(D)){static shadowRootOptions={...D.shadowRootOptions,delegatesFocus:!0};static properties={type:{type:"button"|"submit"|"reset",reflect:!0},autofocus:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},quiet:{type:Boolean,reflect:!0},small:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},href:{type:String,reflect:!0},target:{type:String,reflect:!0},rel:{type:String,reflect:!0},fullWidth:{type:Boolean,reflect:!0},buttonClass:{type:String,reflect:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[D.styles];updated(e){e.has("value")&&this.setValue(this.value)}constructor(){super(),Oe(Tc,Dc,Nc,Oc,Pc),this.variant="secondary",this.ariaValueTextLoading=S._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"})}connectedCallback(){if(super.connectedCallback(),!Wo.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${Wo.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.primary,this.small&&!this.quiet&&!this.loading&&O.primarySmall,this.small&&this.quiet&&!this.loading&&O.primarySmallQuiet,this.small&&this.loading&&(this.quiet?O.primarySmallQuietLoading:O.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&O.primaryQuiet,!this.small&&this.loading&&(this.quiet?O.primaryQuietLoading:O.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.secondary,this.small&&!this.quiet&&!this.loading&&O.secondarySmall,this.small&&this.loading&&(this.quiet?O.secondarySmallQuietLoading:O.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&O.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&O.secondaryQuiet,!this.small&&this.loading&&(this.quiet?O.secondaryQuietLoading:O.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.utility,this.small&&!this.quiet&&!this.loading&&O.utilitySmall,this.small&&this.quiet&&!this.loading&&O.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?O.utilitySmallQuietLoading:O.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&O.utilityQuiet,!this.small&&this.loading&&(this.quiet?O.utilityQuietLoading:O.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&O.negative,this.small&&!this.quiet&&!this.loading&&O.negativeSmall,this.small&&this.quiet&&!this.loading&&O.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?O.negativeSmallQuietLoading:O.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&O.negativeQuiet,!this.small&&this.loading&&(this.quiet?O.negativeQuietLoading:O.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?O.pillSmall:O.pill),this.loading&&(this.small?O.pillSmallLoading:O.pillLoading)]}get _linkClasses(){return[this.small?O.linkSmall:O.link]}get _classes(){return I(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&O.linkAsButton,this.fullWidth?O.fullWidth:O.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}customElements.get("w-button")||customElements.define("w-button",Bc);const Mc=JSON.parse('{"card.button.text":["Vælg"]}'),Rc=JSON.parse('{"card.button.text":["Select"]}'),Ic=JSON.parse('{"card.button.text":["Valitse"]}'),Fc=JSON.parse('{"card.button.text":["Velg"]}'),Hc=JSON.parse('{"card.button.text":["Välj"]}'),Vo={ENTER:"Enter",SPACE:" "};class jc extends D{static properties={selected:{type:Boolean,reflect:!0},flat:{type:Boolean},clickable:{type:Boolean}};constructor(){super(),Oe(Rc,Fc,Ic,Mc,Hc),this.selected=!1,this.flat=!1,this.clickable=!1,this.buttonText=S._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static styles=[D.styles,ee`
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
    `];get _containerClasses(){return I([he.base,this.flat?he.flat:he.shadow,this.selected&&!this.flat&&he.selected,this.selected&&this.flat?he.flatSelected:he.flatUnselected])}get _outlineClasses(){return I([he.outline,this.selected?he.outlineSelected:he.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${he.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===Vo.ENTER||e.key===Vo.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${W(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}customElements.get("w-card")||customElements.define("w-card",jc);var zc={},Uc=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),Wc=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),Vc=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),Jc=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),qc=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),nn=["en","nb","fi","da","sv"],sn="en",Qc=()=>{var t;let e;switch((t=process==null?void 0:zc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},an=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":sn},_r=t=>nn.find(e=>t===e||t.toLowerCase().includes(e))||an();function Yc(){var t;if(typeof window>"u"){const e=Qc();return _r(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=an();return nn.includes(e)?_r(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),_r(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),sn}}var Kc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Gc=(t,e,r,o,i)=>{const n=Yc(),s=Kc(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Gc(Wc,Uc,Vc,Jc,qc);var Zc=class extends q{render(){const t=S.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",Zc);var Xc={},ed=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),td=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),rd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),od=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),id=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),ln=["en","nb","fi","da","sv"],cn="en",nd=()=>{var t;let e;switch((t=process==null?void 0:Xc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},dn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":cn},kr=t=>ln.find(e=>t===e||t.toLowerCase().includes(e))||dn();function sd(){var t;if(typeof window>"u"){const e=nd();return kr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=dn();return ln.includes(e)?kr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),kr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),cn}}var ad=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ld=(t,e,r,o,i)=>{const n=sd(),s=ad(n,t,e,r,o,i);S.load(n,s),S.activate(n)};ld(td,ed,rd,od,id);var cd=class extends q{render(){const t=S.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",cd);class dd extends Le(D){static properties={expanded:{type:Boolean,reflect:!0},title:{type:String},box:{type:Boolean},bleed:{type:Boolean},buttonClass:{type:String},contentClass:{type:String},noChevron:{type:Boolean},animated:{type:Boolean},headingLevel:{type:Number},_hasTitle:{type:Boolean,state:!0},_showChevronUp:{type:Boolean,state:!0}};constructor(){super(),this.expanded=!1,this.animated=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this._hasTitle=!0,this._showChevronUp=this.expanded}static styles=[D.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){this._hasTitle=!!this.title||this.renderRoot.querySelector("slot[name='title']").assignedNodes().length>0}get#e(){return I([X.wrapper,this.box&&X.box,this.bleed&&X.bleed])}get#t(){return I(this.buttonClass,[X.button,this.box&&X.buttonBox])}get#i(){return I([X.chevron,!this.box&&X.chevronNonBox])}get#r(){const e=I([X.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&X.elementsChevronCollapse]),r=I([X.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&X.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return I(this.contentClass,[this.box&&Ge.base,this._hasTitle&&this.box&&X.contentWithTitle])}get#n(){return I([X.expansion,!this.expanded&&X.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return w` <div class="${this.#e}">
      ${this._hasTitle?w`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${X.title}">
                ${this.title?w`<span class="${X.titleType}">${this.title}</span>`:w`<slot name="title"></slot>`}
                ${this.noChevron?"":w`<div class="${this.#i}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#n}" aria-hidden=${W(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}customElements.get("w-expandable")||customElements.define("w-expandable",dd);const un=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},hn=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class ud extends un(hn(q)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=ee`
    .footer {
      display:flex;
      flex-shrink:0;
      justify-content:flex-end;
      padding-left:1.6rem;
      padding-right:1.6rem;
      padding-top:2.4rem;
    }
    @media (min-width: 480px){
      .footer {
        padding-left:3.2rem;
        padding-right:3.2rem;
      }
    }
  `}}const hd=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),pd=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],gd={easing:"ease",duration:300};let pn=!1;const fd=typeof window<"u";if(fd){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>pn=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class md{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||pd,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(hd(this.first,this.last))}get defaults(){return gd}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?pn?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var bd={},vd=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),wd=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),yd=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),$d=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),xd=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),gn=["en","nb","fi","da","sv"],fn="en",_d=()=>{var t;let e;switch((t=process==null?void 0:bd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},mn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":fn},Sr=t=>gn.find(e=>t===e||t.toLowerCase().includes(e))||mn();function kd(){var t;if(typeof window>"u"){const e=_d();return Sr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=mn();return gn.includes(e)?Sr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Sr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),fn}}var Sd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Ed=(t,e,r,o,i)=>{const n=kd(),s=Sd(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Ed(wd,vd,yd,$d,xd);var Cd=class extends q{render(){const t=S.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Cd);const Ad=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Ld=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Od=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Td=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Nd=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Dd=Object.defineProperty,Ot=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Dd(e,r,i),i};class at extends un(q){constructor(){super(),this._hasTopContent=!1,Oe(Ld,Td,Od,Ad,Nd)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new md(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${S._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:F}get closeButton(){return this.noClose?F:w`<button
      type="button"
      aria-label="${S._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=ee`
    .header {
      position: relative;
      padding-bottom: 0.8rem;
    }
    .header-title-bar {
      display:grid;
      flex-shrink:0 !important;
      gap:1.2rem;
      grid-template-columns:auto 1fr auto;
      align-items:flex-start;
      padding-left:1.6rem;
      padding-right:1.6rem;
      padding-top:1.6rem;
    }
    .header-title {
      font-weight:700;
      font-size:var(--w-font-size-l);
      line-height:var(--w-line-height-l);
      align-self:center;
      margin: 0;
    }
    .header-title-with-back-button {
      justify-self:center;
    }
    .header-title-without-back-button {
      grid-column:span 2/span 2;
    }
    .header-title-with-top-area {
      padding-left:1.6rem;
      padding-right:1.6rem;
      padding-top:1.6rem;
    }
    .header-button:hover {
      -webkit-background-clip:padding-box;
      background-clip:padding-box;
    }
    .header-button:focus, .header-button:focus-visible {
      outline:2px solid var(--w-s-color-border-focus);
      outline-offset:var(--w-outline-offset, 1px);
    }
    .header-button:not(:focus-visible){
      outline:none;
    }
    .header-button {
      border-width:0;
      border-radius:9999px;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:40px;
      min-width:40px;
      padding:0.4rem;
      font-weight:700;
      transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;
      transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration:150ms;
      font-size:var(--w-font-size-m);line-height:var(--w-line-height-m);
      line-height:2.4rem;
    }
    .header-button-left {
      background-color:transparent;
      color:var(--w-s-color-icon);
      margin-left:-0.8rem;
    }
    .header-button-left:hover {
      background-color:var(--w-color-button-pill-background-hover);
    }
    .header-button-left:active {
      background-color:var(--w-color-button-pill-background-active);
    }
    .header-close-button {
      background-color:transparent;
      color:var(--w-s-color-icon);
      margin-right:-0.8rem;
    }
    .header-close-button:hover {
      background-color:var(--w-color-button-pill-background-hover);
    }
    .header-close-button:active {
      background-color:var(--w-color-button-pill-background-active);
    }
    .header-close-button-on-image {
      background-color:rgba(var(--w-rgb-black),0.7);
      right:0.8rem;
      top:0.8rem;
      position:absolute;
      z-index:10;
      color:var(--w-s-color-text-inverted);
    }
    .header-close-button-on-image:hover {
      background-color:rgba(var(--w-rgb-black),0.85);
    }
    .header-close-button-on-image:active {
      background-color:var(--w-black);
    }
    @media (min-width: 480px){
      .header-title-bar {
        padding-left:3.2rem;
        padding-right:3.2rem;
        padding-top:2.4rem;
      }
      .header-title-with-top-area {
        padding-left:3.2rem;
        padding-right:3.2rem;
      }
      .header-button {
        min-height:32px;
        min-width:32px;
      }
    }
  `}}Ot([be({type:String})],at.prototype,"title");Ot([be({type:Boolean})],at.prototype,"back");Ot([be({type:Boolean,attribute:"no-close"})],at.prototype,"noClose");Ot([Sa()],at.prototype,"_hasTopContent");Ot([nr(".title-el")],at.prototype,"titleEl");let bt=[];const no={documentElement:{},body:{}},Pd=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),bn=t=>{t.touches.length>1||t.preventDefault?.()},Bd=t=>([e,r])=>{no[t][e]=document[t].style[e],document[t].style[e]=r},Md=()=>Object.entries(Pd).forEach(([t,e])=>{Object.entries(e).forEach(Bd(t))}),Rd=t=>([e,r])=>{document[t].style[e]=no[t][e]},Id=()=>Object.entries(no).forEach(([t,e])=>{Object.entries(e).forEach(Rd(t))}),Fd=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Hd(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||Fd(t)&&i<0?bn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function jd(t){t.ontouchstart=null,t.ontouchmove=null}const vn=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",bn,{passive:!1}),zd=vn(!0),Ud=vn();function Wd(t){if(!t)throw Error("Could not run setup, an element must be provided");bt.some(e=>e===t)||(bt.length||(Md(),zd()),Hd(t),bt.push(t))}function Vd(){bt.forEach(jd),Ud(),Id(),bt=[]}var Jd=Object.defineProperty,lt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Jd(e,r,i),i};class Je extends hn(q){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Wd(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Vd(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
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
        --w-modal-max-height:80%;
        --w-modal-width:640px;
        background-color:transparent;
        border-width:0;
        align-items:flex-end;
        inset:0rem;
        height:unset;
        max-height:unset;
        max-width:unset;
        width:unset;
        margin:auto;
        padding:0rem;
        backface-visibility:hidden;
      }
      .dialog-inner-el {
        will-change:height;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        overflow:hidden;
        position:relative;
        background-color:var(--w-s-color-background);
        box-shadow:var(--w-shadow-m);
        height:var(--w-modal-height);
        max-height:var(--w-modal-max-height);
        min-height:var(--w-modal-min-height);
        width:var(--w-modal-width);
        backface-visibility:hidden;
        padding-bottom:calc(32px + env(safe-area-inset-bottom, 0px));
        transition-property:all;
        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration:150ms;
        transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
      }
      .content-el {
        display:block;
        flex-shrink:1;
        flex-grow:1;
        overflow-x:hidden;
        overflow-y:auto;
        position:relative;
        margin-bottom:0rem;
        padding-left:1.6rem;
        padding-right:1.6rem;
      }
      @media (min-width: 480px) {
        .dialog-el {
          --w-modal-translate-distance: 50%;
          place-content:center;
          place-items:center;
        }
        .dialog-inner-el {
          margin-left:1.6rem;
          margin-right:1.6rem;
          padding-bottom:3.2rem;
        }
        .content-el {
          padding-left:3.2rem;
          padding-right:3.2rem;
        }
      }
      @media (max-width: 479.9px){
        .dialog-inner-el {
          border-bottom-left-radius:0;
          border-bottom-right-radius:0;
        }
      }
      .dialog-el[open] {
        animation: w-modal-in 0.3s ease-in-out forwards;
        display:flex;
        position:fixed;
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
    `]}}lt([be({type:Boolean})],Je.prototype,"show");lt([be({type:String,attribute:"content-id"})],Je.prototype,"contentId");lt([be({type:Boolean,attribute:"ignore-backdrop-clicks"})],Je.prototype,"ignoreBackdropClicks");lt([nr(".dialog-el")],Je.prototype,"dialogEl");lt([nr(".dialog-inner-el")],Je.prototype,"dialogInnerEl");lt([nr(".content-el")],Je.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Je),customElements.define("w-modal-header",at),customElements.define("w-modal-footer",ud));const qd=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Qd=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Yd=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Kd=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Gd=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Zd extends Le(D){static styles=[D.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Oe(Qd,Kd,Yd,qd,Gd),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=S._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=S._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return I([se.button,se.label,this.suggestion?se.suggestion:se.filter,this.canClose?se.labelWithClose:se.labelWithoutClose])}get _closeClasses(){return I([se.button,se.close,this.suggestion?se.suggestion:se.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${se.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${se.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${se.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",Zd);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(t,e,r){return t?e(t):r?.(t)}const Xd=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),eu=JSON.parse('{"select.label.optional":["(optional)"]}'),tu=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),ru=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),ou=JSON.parse('{"select.label.optional":["(valfritt)"]}');class iu extends io(Le(D)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[D.styles];constructor(){super(),Oe(eu,ru,tu,Xd,ou),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return I([ve.base,!this.invalid&&!this.disabled&&!this.readOnly&&ve.default,this.invalid&&ve.invalid,this.disabled&&ve.disabled,this.readOnly&&ve.readOnly])}get#t(){return I([et.base,this.invalid?et.colorInvalid:et.color])}get#i(){return I([ve.chevron,this.disabled&&ve.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${ve.wrapper}">
      ${Pt(this.label,()=>w`<label class="${Or.base}" for="${this.#r}">
            ${this.label}
            ${Pt(this.optional,()=>w`<span class="${Or.optional}"
                  >${S._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${ve.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${W(this.#o)}"
          aria-invalid="${W(this.invalid)}"
          aria-errormessage="${W(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${Wr(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Pt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",iu);class nu extends io(Le(D)){static properties={disabled:{type:Boolean},invalid:{type:Boolean},id:{type:String},label:{type:String},helpText:{type:String},size:{type:String},max:{type:Number},min:{type:Number},minLength:{type:Number},maxLength:{type:Number},pattern:{type:String},placeholder:{type:String},readOnly:{type:Boolean},required:{type:Boolean},type:{type:String},value:{type:String},name:{type:String},_hasPrefix:{state:!0},_hasSuffix:{state:!0}};static styles=[D.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];constructor(){super(),this.type="text"}get _inputStyles(){return I([$e.base,this._hasSuffix&&$e.suffix,this._hasPrefix&&$e.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&$e.default,this.invalid&&!this.disabled&&!this.readOnly&&$e.invalid,!this.invalid&&this.disabled&&!this.readOnly&&$e.disabled,!this.invalid&&!this.disabled&&this.readOnly&&$e.readOnly])}get _helpTextStyles(){return I([et.base,this.invalid?et.colorInvalid:et.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Or.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.target;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(e){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(e){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${$e.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputStyles}"
          type="${this.type}"
          min="${W(this.min)}"
          max="${W(this.max)}"
          size="${W(this.size)}"
          minlength="${W(this.minLength)}"
          maxlength="${W(this.maxLength)}"
          name="${W(this.name)}"
          pattern="${W(this.pattern)}"
          placeholder="${W(this.placeholder)}"
          value="${W(this.value)}"
          aria-describedby="${W(this._helpId)}"
          aria-errormessage="${W(this._error)}"
          aria-invalid="${W(this.invalid)}"
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
    `}}customElements.get("w-textfield")||customElements.define("w-textfield",nu);const dr=typeof window<"u";function su(t,e){if(!dr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function au(t){return dr?customElements.get("w-toast-container").init().del(t):void 0}function lu(t,e){if(!dr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:cu}=jn,Jo=()=>document.createComment(""),pt=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const n=o.insertBefore(Jo(),i),s=o.insertBefore(Jo(),i);r=new cu(n,s,t,t.options)}else{const n=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(n!==i||l){let a=r._$AA;for(;a!==n;){const u=a.nextSibling;o.insertBefore(a,i),a=u}}}return r},Be=(t,e,r=t)=>(t._$AI(e,r),t),du={},uu=(t,e=du)=>t._$AH=e,hu=t=>t._$AH,Er=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},pu=di(class extends ui{constructor(t){if(super(t),t.type!==ci.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],n=[];let s=0;for(const l of t)i[s]=o?o(l,s):s,n[s]=r(l,s),s++;return{values:n,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=hu(t),{values:n,keys:s}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=s,n;const l=this.ut??=[],a=[];let u,h,c=0,g=i.length-1,d=0,f=n.length-1;for(;c<=g&&d<=f;)if(i[c]===null)c++;else if(i[g]===null)g--;else if(l[c]===s[d])a[d]=Be(i[c],n[d]),c++,d++;else if(l[g]===s[f])a[f]=Be(i[g],n[f]),g--,f--;else if(l[c]===s[f])a[f]=Be(i[c],n[f]),pt(t,a[f+1],i[c]),c++,f--;else if(l[g]===s[d])a[d]=Be(i[g],n[d]),pt(t,i[c],i[g]),g--,d++;else if(u===void 0&&(u=qo(s,d,f),h=qo(l,c,g)),u.has(l[c]))if(u.has(l[g])){const p=h.get(s[d]),b=p!==void 0?i[p]:null;if(b===null){const k=pt(t,i[c]);Be(k,n[d]),a[d]=k}else a[d]=Be(b,n[d]),pt(t,i[c],b),i[p]=null;d++}else Er(i[g]),g--;else Er(i[c]),c++;for(;d<=f;){const p=pt(t,a[f+1]);Be(p,n[d]),a[d++]=p}for(;c<=g;){const p=i[c++];p!==null&&Er(p)}return this.ut=s,uu(t,a),Ee}});class wn extends D{static styles=[D.styles,ee`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const n=this.renderRoot.querySelector(`#${i}`);o.push(n.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${pr.wrapper}">
        <div class="${pr.base}" id="w-toast-container-list">
          ${pu(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${pr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",wn);const so=typeof window<"u";let yn=!0;if(so){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>yn=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const $n=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},xn=t=>{const e=yn?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},gu=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},fu=t=>()=>{t&&t()},_n=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=gu(t,e);$n(t),t.style.height="auto";let i=t.scrollHeight;if(so&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",xn(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},kn=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=fu(e);$n(t);let i=t.scrollHeight;if(so&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",xn(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},mu=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),bu=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),vu=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),wu=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),yu=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),xe={success:"success",error:"error",warning:"warning"};class $u extends D{static styles=[D.styles,ee`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Oe(bu,wu,vu,mu,yu),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&_n(this._wrapper,()=>this._expanded=!0)}get#e(){return I([ce.base,this.type===xe.success&&ce.positive,this.type===xe.warning&&ce.warning,this.type===xe.error&&ce.negative])}get#t(){return I([ce.iconBase,this.type===xe.success&&ce.iconPositive,this.type===xe.warning&&ce.iconWarning,this.type===xe.error&&ce.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===xe.warning}get _error(){return this.type===xe.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?S._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?S._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):S._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?kn(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${ce.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ce.content}">
          <p>${this.text}</p>
        </div>
        ${Pt(this.canclose===!0,()=>w`
            <button class="${ce.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",$u);class xu extends D{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&_n(this._wrapper),!this.show&&!this._removeElement&&kn(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[D.styles,ee`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${W(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",xu);class _u extends D{static properties={level:{type:Number}};static styles=[D.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?Wr(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",_u);var ku={},Su=JSON.parse('{"icon.title.bag":["Veske"]}'),Eu=JSON.parse('{"icon.title.bag":["Handbag"]}'),Cu=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),Au=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),Lu=JSON.parse('{"icon.title.bag":["Handväska"]}'),Sn=["en","nb","fi","da","sv"],En="en",Ou=()=>{var t;let e;switch((t=process==null?void 0:ku)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Cn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":En},Cr=t=>Sn.find(e=>t===e||t.toLowerCase().includes(e))||Cn();function Tu(){var t;if(typeof window>"u"){const e=Ou();return Cr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Cn();return Sn.includes(e)?Cr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Cr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),En}}var Nu=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Du=(t,e,r,o,i)=>{const n=Tu(),s=Nu(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Du(Eu,Su,Cu,Au,Lu);var Pu=class extends q{render(){const t=S.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return me`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${fe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",Pu);dr&&(window.WarpToastContainer=wn,window.toast=su,window.updateToast=lu,window.removeToast=au);const Bu={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Mu extends D{static styles=[D.styles,ee`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Bu;return w`
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
      `)}}customElements.define("sidebar-element",Mu);
