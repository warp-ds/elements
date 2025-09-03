(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=globalThis,ro=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oo=Symbol(),Ro=new WeakMap;let yi=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ro&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Ro.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ro.set(r,e))}return e}toString(){return this.cssText}};const io=t=>new yi(typeof t=="string"?t:t+"",void 0,oo),W=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new yi(r,t,oo)},en=(t,e)=>{if(ro)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=Qt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},Mo=ro?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return io(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tn,defineProperty:rn,getOwnPropertyDescriptor:on,getOwnPropertyNames:sn,getOwnPropertySymbols:nn,getPrototypeOf:an}=Object,vr=globalThis,zo=vr.trustedTypes,ln=zo?zo.emptyScript:"",cn=vr.reactiveElementPolyfillSupport,Ct=(t,e)=>t,Zt={toAttribute(t,e){switch(e){case Boolean:t=t?ln:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},so=(t,e)=>!tn(t,e),Io={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:so};Symbol.metadata??=Symbol("metadata"),vr.litPropertyMetadata??=new WeakMap;let We=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Io){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&rn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:s}=on(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i?.call(this)},set(n){const l=i?.call(this);s.call(this,n),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Io}static _$Ei(){if(this.hasOwnProperty(Ct("elementProperties")))return;const e=an(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ct("properties"))){const r=this.properties,o=[...sn(r),...nn(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(Mo(i))}else e!==void 0&&r.push(Mo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return en(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:Zt).toAttribute(r,o.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Zt;this._$Em=i,this[i]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??so)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};We.elementStyles=[],We.shadowRootOptions={mode:"open"},We[Ct("elementProperties")]=new Map,We[Ct("finalized")]=new Map,cn?.({ReactiveElement:We}),(vr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis,Kt=no.trustedTypes,jo=Kt?Kt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ao="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,lo="?"+Ae,dn=`<${lo}>`,Xe=document,Lt=()=>Xe.createComment(""),Tt=t=>t===null||typeof t!="object"&&typeof t!="function",co=Array.isArray,xi=t=>co(t)||typeof t?.[Symbol.iterator]=="function",Or=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fo=/-->/g,Ho=/>/g,Fe=RegExp(`>|${Or}(?:([^\\s"'>=/]+)(${Or}*=${Or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vo=/'/g,Uo=/"/g,$i=/^(?:script|style|textarea|title)$/i,un=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=un(1),Oe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),qo=new WeakMap,Je=Xe.createTreeWalker(Xe,129);function ki(t,e){if(!co(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return jo!==void 0?jo.createHTML(e):e}const _i=(t,e)=>{const r=t.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=wt;for(let l=0;l<r;l++){const a=t[l];let d,h,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===wt?h[1]==="!--"?n=Fo:h[1]!==void 0?n=Ho:h[2]!==void 0?($i.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=Fe):h[3]!==void 0&&(n=Fe):n===Fe?h[0]===">"?(n=i??wt,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?Fe:h[3]==='"'?Uo:Vo):n===Uo||n===Vo?n=Fe:n===Fo||n===Ho?n=wt:(n=Fe,i=void 0);const u=n===Fe&&t[l+1].startsWith("/>")?" ":"";s+=n===wt?a+dn:c>=0?(o.push(d),a.slice(0,c)+ao+a.slice(c)+Ae+u):a+Ae+(c===-2?l:u)}return[ki(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Jr=class Si{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[d,h]=_i(e,r);if(this.el=Si.createElement(d,o),Je.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Je.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ao)){const f=h[n++],u=i.getAttribute(c).split(Ae),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:g[2],strings:u,ctor:g[1]==="."?Ai:g[1]==="?"?Oi:g[1]==="@"?Li:It}),i.removeAttribute(c)}else c.startsWith(Ae)&&(a.push({type:6,index:s}),i.removeAttribute(c));if($i.test(i.tagName)){const c=i.textContent.split(Ae),f=c.length-1;if(f>0){i.textContent=Kt?Kt.emptyScript:"";for(let u=0;u<f;u++)i.append(c[u],Lt()),Je.nextNode(),a.push({type:2,index:++s});i.append(c[f],Lt())}}}else if(i.nodeType===8)if(i.data===lo)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Ae,c+1))!==-1;)a.push({type:7,index:s}),c+=Ae.length-1}s++}}static createElement(e,r){const o=Xe.createElement("template");return o.innerHTML=e,o}};function Ze(t,e,r=t,o){if(e===Oe)return e;let i=o!==void 0?r.o?.[o]:r.l;const s=Tt(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=Ze(t,i._$AS(t,e.values),i,o)),e}class Ei{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Xe).importNode(r,!0);Je.currentNode=i;let s=Je.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new wr(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new Ti(s,this,e)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(s=Je.nextNode(),n++)}return Je.currentNode=Xe,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let wr=class Ci{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ze(this,e,r),Tt(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&Tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Jr.createElement(ki(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Ei(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=qo.get(e.strings);return r===void 0&&qo.set(e.strings,r=new Jr(e)),r}k(e){co(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of e)i===r.length?r.push(o=new Ci(this.O(Lt()),this.O(Lt()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class It{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)e=Ze(this,e,r,0),n=!Tt(e)||e!==this._$AH&&e!==Oe,n&&(this._$AH=e);else{const l=e;let a,d;for(e=s[0],a=0;a<s.length-1;a++)d=Ze(this,l[o+a],r,a),d===Oe&&(d=this._$AH[a]),n||=!Tt(d)||d!==this._$AH[a],d===I?e=I:e!==I&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ai extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Oi extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class Li extends It{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=Ze(this,e,r,0)??I)===Oe)return;const o=this._$AH,i=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==I&&(o===I||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ti{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ze(this,e)}}const hn={M:ao,P:Ae,A:lo,C:1,L:_i,R:Ei,D:xi,V:Ze,I:wr,H:It,N:Oi,U:Li,B:Ai,F:Ti},pn=no.litHtmlPolyfillSupport;pn?.(Jr,wr),(no.litHtmlVersions??=[]).push("3.2.0");const fn=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new wr(e.insertBefore(Lt(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j=class extends We{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=fn(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Oe}};j._$litElement$=!0,j.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:j});const gn=globalThis.litElementPolyfillSupport;gn?.({LitElement:j});(globalThis.litElementVersions??=[]).push("4.1.0");function bn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const Wo=String.raw`[A-Za-z][^/\s>]*`,mn=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,vn=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Ni=String.raw`${mn}|${vn}`,wn=String.raw`"(?<quotedAttrValue>[^"]*)"`,yn=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,xn=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,$n=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,kn=String.raw`${wn}|${yn}|${xn}`,_n=String.raw`(?<attrName>${$n})(?:\s*=\s*(?:${kn}))?`,Sn=String.raw`${Ni}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Di=String.raw`(?<attrSpace>\s*)(?:${_n}|(?<attrText>${Sn}))`,En={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Wo})(?<attrs>(?:${Di})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Wo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Ni}|['"]`,wildcard:String.raw`.`},Cn=Object.entries(En).map(([t,e])=>`(?<${t}>${e})`).join("|");function*An(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const On=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Nt(t,e="  ",r=80){const o=new RegExp(Cn,"gys"),i=new RegExp(Di,"gy"),s=[];let n=null,l=0,a=0,d="",h=0,c="";const f=()=>{if(c&&c!=`
`){const S=d.indexOf(`
`),A=S==-1?d.length:S;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&d?e.repeat(h):"",m=`${c}${p}${d}`;if(m){const S=m.lastIndexOf(`
`);S==-1?a+=m.length:a=m.length-S-1,s.push(m)}d=c=""},u=(...p)=>{for(const m of p)!n&&/^\s+$/.test(m)?(f(),c=m):(d||(h=l),d+=m)};for(const p of An(o,t)){if(Nt.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const m=p.groups.endTagName.toLowerCase();m==n&&(n=null),n||(--l,u(`</${m}>`))}if(n)u(p[0]);else if(p.groups.space)u(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)u(p[0]);else if(p.groups.startTag){const m=p.groups.startTagName.toLowerCase();if(u(`<${m}`),++l,p.groups.attrs){let{lastIndex:A}=i,C,B;for(;C=i.exec(p.groups.attrs);){if({lastIndex:A}=i,Nt.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(C.groups.attrText)):((C.groups.attrSpace||!B?.groups.attrText)&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),B=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const S=!!p.groups.closingSlash;u(S?" />":">"),S||On.has(m)?--l:["pre","textarea","script","style"].includes(m)&&(n=m)}}f();let g=!1;for(;/^\s+$/.test(s[s.length-1]);){const p=s.pop();/\n/.test(p)&&(g=!0)}return g&&s.push(`
`),s.join("")}Nt.default=Nt;var Ln=Nt;const Tn=bn(Ln);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ho=t=>(...e)=>({_$litDirective$:t,values:e});let po=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yr extends po{constructor(e){if(super(e),this.it=I,e.type!==uo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===Oe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yr.directiveName="unsafeHTML",Yr.resultType=1;const fo=ho(Yr);class Nn extends j{static styles=W`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=Tn(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${fo(this.source)}</code></pre>`}}customElements.define("syntax-highlight",Nn);var z=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?z.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};const He={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},yt={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},ue={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Lr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},me={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},xt="font-bold focusable justify-center transition-colors ease-in-out",Pi={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},Dn={primary:`border-0 rounded-8 ${xt}`,secondary:`border-2 rounded-8 ${xt}`,utility:`border rounded-4 ${xt}`,negative:`border-0 rounded-8 ${xt}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${xt}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${Pi.link}`},Pn={medium:"text-m leading-[24]",xsmall:"text-xs"},Ce={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Jo={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Tr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},Bi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",Bn={wrapper:Bi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Rn={wrapper:Bi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},nt={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Pn.medium} ${Dn.pill} ${Pi.pill} justify-self-end -mr-8 ml-8`};var go={},Ri={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Ri);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Ri;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(u){return!u.match(/[^a-f0-9]/i)?parseInt(u,16):NaN}function o(u,g,p){const m=r(u);if(Number.isNaN(m)||p!==void 0&&p!==u.length)throw new SyntaxError(e.errorMessages.get(g));return m}function i(u){const g=o(u,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(g)}function s(u,g){const p=o(u,e.ErrorType.MalformedUnicode,4);if(g!==void 0){const m=o(g,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,m)}return String.fromCharCode(p)}function n(u){return u.charAt(0)==="{"&&u.charAt(u.length-1)==="}"}function l(u){if(!n(u))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const g=u.slice(1,-1),p=o(g,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(m){throw m instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):m}}function a(u,g=!1){if(g)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(u,8);return String.fromCharCode(p)}const d=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(u){return d.get(u)||u}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function f(u,g=!1){return u.replace(c,function(p,m,S,A,C,B,x,O,L){if(m!==void 0)return"\\";if(S!==void 0)return i(S);if(A!==void 0)return l(A);if(C!==void 0)return s(C,B);if(x!==void 0)return s(x);if(O==="0")return"\0";if(O!==void 0)return a(O,!g);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=f,t.default=f})(go);const Qe=t=>typeof t=="string",Mn=t=>typeof t=="function",Yo=new Map,Mi="en";function bo(t){return[...Array.isArray(t)?t:[t],Mi]}function zi(t,e,r){const o=bo(t);return Gt(()=>er("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Qe(e)?new Date(e):e)}function Qr(t,e,r){const o=bo(t);return Gt(()=>er("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Qo(t,e,r,{offset:o=0,...i}){const s=bo(t),n=e?Gt(()=>er("plural-ordinal",s),()=>new Intl.PluralRules(s,{type:"ordinal"})):Gt(()=>er("plural-cardinal",s),()=>new Intl.PluralRules(s,{type:"cardinal"}));return i[r]??i[n.select(r-o)]??i.other}function Gt(t,e){const r=t();let o=Yo.get(r);return o||(o=e(),Yo.set(r,o)),o}function er(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Ii=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,ji="%__lingui_octothorpe__%",zn=(t,e,r={})=>{const o=e||t,i=n=>typeof n=="object"?n:r[n]||{style:n},s=(n,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=Qr(o,n,a);return l.replace(new RegExp(ji,"g"),d)};return{plural:(n,l)=>{const{offset:a=0}=l,d=Qo(o,!1,n,l);return s(n-a,d)},selectordinal:(n,l)=>{const{offset:a=0}=l,d=Qo(o,!0,n,l);return s(n-a,d)},select:In,number:(n,l)=>Qr(o,n,i(l)),date:(n,l)=>zi(o,n,i(l))}},In=(t,e)=>e[t]??e.other;function jn(t,e,r){return(o={},i)=>{const s=zn(e,r,i),n=(a,d=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&d)return h+ji;if(Qe(c))return h+c;const[f,u,g]=c;let p={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(g).forEach(([S,A])=>{p[S]=n(A,u==="plural"||u==="selectordinal")}):p=g;let m;if(u){const S=s[u];m=S(o[f],p)}else m=o[f];return m==null?h:h+m},""):a,l=n(t);return Qe(l)&&Ii.test(l)?go.unraw(l.trim()):Qe(l)?l.trim():l?String(l):""}}var Fn=Object.defineProperty,Hn=(t,e,r)=>e in t?Fn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Vn=(t,e,r)=>(Hn(t,e+"",r),r);let Un=class{constructor(){Vn(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var qn=Object.defineProperty,Wn=(t,e,r)=>e in t?qn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,at=(t,e,r)=>(Wn(t,typeof e!="symbol"?e+"":e,r),r);let Jn=class extends Un{constructor(e){super(),at(this,"_locale",""),at(this,"_locales"),at(this,"_localeData",{}),at(this,"_messages",{}),at(this,"_missing"),at(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Mi,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Qe(e)||(r=e.values||r,i=e.message,e=e.id);const s=this.messages[e],n=s===void 0,l=this._missing;if(l&&n)return Mn(l)?l(this._locale,e):l;n&&this.emit("missing",{id:e,locale:this._locale});let a=s||i||e;return Qe(a)&&Ii.test(a)?JSON.parse(`"${a}"`):Qe(a)?a:jn(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return zi(this._locales||this._locale,e,r)}number(e,r){return Qr(this._locales||this._locale,e,r)}};function Yn(t={}){return new Jn(t)}const Nr=Yn();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=globalThis,tr=mo.trustedTypes,Xo=tr?tr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Fi="$lit$",Pe=`lit$${Math.random().toFixed(9).slice(2)}$`,Hi="?"+Pe,Qn=`<${Hi}>`,Ke=document,Dt=()=>Ke.createComment(""),Pt=t=>t===null||typeof t!="object"&&typeof t!="function",vo=Array.isArray,Xn=t=>vo(t)||typeof t?.[Symbol.iterator]=="function",Dr=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zo=/-->/g,Ko=/>/g,Ve=RegExp(`>|${Dr}(?:([^\\s"'>=/]+)(${Dr}*=${Dr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Go=/'/g,ei=/"/g,Vi=/^(?:script|style|textarea|title)$/i,ut=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),ti=new WeakMap,Ye=Ke.createTreeWalker(Ke,129);function Ui(t,e){if(!vo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xo!==void 0?Xo.createHTML(e):e}const Zn=(t,e)=>{const r=t.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=$t;for(let l=0;l<r;l++){const a=t[l];let d,h,c=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===$t?h[1]==="!--"?n=Zo:h[1]!==void 0?n=Ko:h[2]!==void 0?(Vi.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=Ve):h[3]!==void 0&&(n=Ve):n===Ve?h[0]===">"?(n=i??$t,c=-1):h[1]===void 0?c=-2:(c=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?Ve:h[3]==='"'?ei:Go):n===ei||n===Go?n=Ve:n===Zo||n===Ko?n=$t:(n=Ve,i=void 0);const u=n===Ve&&t[l+1].startsWith("/>")?" ":"";s+=n===$t?a+Qn:c>=0?(o.push(d),a.slice(0,c)+Fi+a.slice(c)+Pe+u):a+Pe+(c===-2?l:u)}return[Ui(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Bt{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[d,h]=Zn(e,r);if(this.el=Bt.createElement(d,o),Ye.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ye.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Fi)){const f=h[n++],u=i.getAttribute(c).split(Pe),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:g[2],strings:u,ctor:g[1]==="."?Gn:g[1]==="?"?ea:g[1]==="@"?ta:yr}),i.removeAttribute(c)}else c.startsWith(Pe)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(Vi.test(i.tagName)){const c=i.textContent.split(Pe),f=c.length-1;if(f>0){i.textContent=tr?tr.emptyScript:"";for(let u=0;u<f;u++)i.append(c[u],Dt()),Ye.nextNode(),a.push({type:2,index:++s});i.append(c[f],Dt())}}}else if(i.nodeType===8)if(i.data===Hi)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Pe,c+1))!==-1;)a.push({type:7,index:s}),c+=Pe.length-1}s++}}static createElement(e,r){const o=Ke.createElement("template");return o.innerHTML=e,o}}function ht(t,e,r=t,o){if(e===ut)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Pt(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=ht(t,i._$AS(t,e.values),i,o)),e}class Kn{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Ke).importNode(r,!0);Ye.currentNode=i;let s=Ye.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new jt(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new ra(s,this,e)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(s=Ye.nextNode(),n++)}return Ye.currentNode=Ke,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class jt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ht(this,e,r),Pt(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==ut&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&Pt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ke.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Bt.createElement(Ui(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Kn(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=ti.get(e.strings);return r===void 0&&ti.set(e.strings,r=new Bt(e)),r}k(e){vo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of e)i===r.length?r.push(o=new jt(this.O(Dt()),this.O(Dt()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class yr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)e=ht(this,e,r,0),n=!Pt(e)||e!==this._$AH&&e!==ut,n&&(this._$AH=e);else{const l=e;let a,d;for(e=s[0],a=0;a<s.length-1;a++)d=ht(this,l[o+a],r,a),d===ut&&(d=this._$AH[a]),n||=!Pt(d)||d!==this._$AH[a],d===G?e=G:e!==G&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gn extends yr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class ea extends yr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ta extends yr{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=ht(this,e,r,0)??G)===ut)return;const o=this._$AH,i=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==G&&(o===G||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ra{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ht(this,e)}}const oa=mo.litHtmlPolyfillSupport;oa?.(Bt,jt),(mo.litHtmlVersions??=[]).push("3.2.1");const ia=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new jt(e.insertBefore(Dt(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let At=class extends We{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ia(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ut}};At._$litElement$=!0,At.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:At});const sa=globalThis.litElementPolyfillSupport;sa?.({LitElement:At});(globalThis.litElementVersions??=[]).push("4.1.1");class na extends At{#e=!1;get i18n(){return this.#e||(Nr.load(this.locale,this.translations),Nr.activate(this.locale),this.#e=!0),Nr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const wo=()=>!(typeof window<"u");class qi{isServer=!1;css=""}const aa=(t=[])=>{const e=new qi;if(wo()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},la=()=>aa(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),ca=async(t=[])=>{const e=new qi;if(wo()){for(const s of t)e.css+=`@import url('${s}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(s=>fetch(s))),i=await Promise.all(o.map(s=>s.text()));for(const s of i)e.css+=s;return e},ri=async()=>ca(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,s=Array.prototype.forEach,n=/@import.+?;?$/gm;function l(b){var y=b.replace(n,"");return y!==b&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function a(b){return"isConnected"in b?b.isConnected:document.contains(b)}function d(b){return b.filter(function(y,N){return b.indexOf(y)===N})}function h(b,y){return b.filter(function(N){return y.indexOf(N)===-1})}function c(b){b.parentNode.removeChild(b)}function f(b){return b.shadowRoot||r.get(b)}var u=["addRule","deleteRule","insertRule","removeRule"],g=CSSStyleSheet,p=g.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function m(b){return typeof b=="object"?V.isPrototypeOf(b)||p.isPrototypeOf(b):!1}function S(b){return typeof b=="object"?p.isPrototypeOf(b):!1}var A=new WeakMap,C=new WeakMap,B=new WeakMap,x=new WeakMap;function O(b,y){var N=document.createElement("style");return B.get(b).set(y,N),C.get(b).push(y),N}function L(b,y){return B.get(b).get(y)}function R(b,y){B.get(b).delete(y),C.set(b,C.get(b).filter(function(N){return N!==y}))}function H(b,y){requestAnimationFrame(function(){y.textContent=A.get(b).textContent,x.get(b).forEach(function(N){return y.sheet[N.method].apply(y.sheet,N.args)})})}function U(b){if(!A.has(b))throw new TypeError("Illegal invocation")}function K(){var b=this,y=document.createElement("style");e.body.appendChild(y),A.set(b,y),C.set(b,[]),B.set(b,new WeakMap),x.set(b,[])}var V=K.prototype;V.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(N){return Promise.reject(N)}},V.replaceSync=function(y){if(U(this),typeof y=="string"){var N=this;A.get(N).textContent=l(y),x.set(N,[]),C.get(N).forEach(function(ne){ne.isConnected()&&H(N,L(N,ne))})}},i(V,"cssRules",{configurable:!0,enumerable:!0,get:function(){return U(this),A.get(this).sheet.cssRules}}),i(V,"media",{configurable:!0,enumerable:!0,get:function(){return U(this),A.get(this).sheet.media}}),u.forEach(function(b){V[b]=function(){var y=this;U(y);var N=arguments;x.get(y).push({method:b,args:N}),C.get(y).forEach(function(le){if(le.isConnected()){var re=L(y,le).sheet;re[b].apply(re,N)}});var ne=A.get(y).sheet;return ne[b].apply(ne,N)}}),i(K,Symbol.hasInstance,{configurable:!0,value:m});var ae={childList:!0,subtree:!0},P=new WeakMap;function ee(b){var y=P.get(b);return y||(y=new Po(b),P.set(b,y)),y}function Q(b){i(b.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return ee(this).sheets},set:function(y){ee(this).update(y)}})}function ie(b,y){for(var N=document.createNodeIterator(b,NodeFilter.SHOW_ELEMENT,function(le){return f(le)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ne=void 0;ne=N.nextNode();)y(f(ne))}var te=new WeakMap,se=new WeakMap,it=new WeakMap;function Ks(b,y){return y instanceof HTMLStyleElement&&se.get(b).some(function(N){return L(N,b)})}function Do(b){var y=te.get(b);return y instanceof Document?y.body:y}function Ar(b){var y=document.createDocumentFragment(),N=se.get(b),ne=it.get(b),le=Do(b);ne.disconnect(),N.forEach(function(re){y.appendChild(L(re,b)||O(re,b))}),le.insertBefore(y,null),ne.observe(le,ae),N.forEach(function(re){H(re,L(re,b))})}function Po(b){var y=this;y.sheets=[],te.set(y,b),se.set(y,[]),it.set(y,new MutationObserver(function(N,ne){if(!document){ne.disconnect();return}N.forEach(function(le){t||s.call(le.addedNodes,function(re){re instanceof Element&&ie(re,function(st){ee(st).connect()})}),s.call(le.removedNodes,function(re){re instanceof Element&&(Ks(y,re)&&Ar(y),t||ie(re,function(st){ee(st).disconnect()}))})})}))}if(Po.prototype={isConnected:function(){var b=te.get(this);return b instanceof Document?b.readyState!=="loading":a(b.host)},connect:function(){var b=Do(this);it.get(this).observe(b,ae),se.get(this).length>0&&Ar(this),ie(b,function(y){ee(y).connect()})},disconnect:function(){it.get(this).disconnect()},update:function(b){var y=this,N=te.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Iterator getter is not callable.");if(!b.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Failed to convert value to 'CSSStyleSheet'");if(b.some(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Can't adopt non-constructed stylesheets");y.sheets=b;var ne=se.get(y),le=d(b),re=h(ne,le);re.forEach(function(st){c(L(st,y)),R(st,y)}),se.set(y,le),y.isConnected()&&le.length>0&&Ar(y)}},window.CSSStyleSheet=K,Q(Document),"ShadowRoot"in window){Q(ShadowRoot);var Bo=Element.prototype,Gs=Bo.attachShadow;Bo.attachShadow=function(y){var N=Gs.call(this,y);return y.mode==="closed"&&r.set(this,N),N}}var Jt=ee(document);Jt.isConnected()?Jt.connect():document.addEventListener("DOMContentLoaded",Jt.connect.bind(Jt))})();let Et;if(wo()){const t=await ri();Et=io(t.css)}else{Et=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await ri();Et.replaceSync(r.css)}catch{const e=la();Et.replaceSync(e.css)}}class F extends na{static styles=[Et]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??I;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=Symbol.for(""),da=t=>{if(t?.r===Wi)return t?._$litStatic$},_e=t=>({_$litStatic$:t,r:Wi}),oi=new Map,ua=t=>(e,...r)=>{const o=r.length;let i,s;const n=[],l=[];let a,d=0,h=!1;for(;d<o;){for(a=e[d];d<o&&(s=r[d],(i=da(s))!==void 0);)a+=i+e[++d],h=!0;d!==o&&l.push(s),n.push(a),d++}if(d===o&&n.push(e[o]),h){const c=n.join("$$lit$$");(e=oi.get(c))===void 0&&(n.raw=n,oi.set(c,e=n)),r=l}return t(e,...r)},Se=ua(w),Re=t=>typeof t=="string",ha=t=>typeof t=="function",ii=new Map,Ji="en";function yo(t){return[...Array.isArray(t)?t:[t],Ji]}function xo(t,e,r){const o=yo(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return rr(()=>or("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(Re(e)?new Date(e):e)}function pa(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return xo(t,e,o)}function Xr(t,e,r){const o=yo(t);return rr(()=>or("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function si(t,e,r,{offset:o=0,...i}){const s=yo(t),n=e?rr(()=>or("plural-ordinal",s),()=>new Intl.PluralRules(s,{type:"ordinal"})):rr(()=>or("plural-cardinal",s),()=>new Intl.PluralRules(s,{type:"cardinal"}));return i[r]??i[n.select(r-o)]??i.other}function rr(t,e){const r=t();let o=ii.get(r);return o||(o=e(),ii.set(r,o)),o}function or(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Yi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Qi="%__lingui_octothorpe__%",fa=(t,e,r={})=>{const o=e||t,i=n=>typeof n=="object"?n:r[n],s=(n,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=Xr(o,n,a);return l.replace(new RegExp(Qi,"g"),d)};return{plural:(n,l)=>{const{offset:a=0}=l,d=si(o,!1,n,l);return s(n-a,d)},selectordinal:(n,l)=>{const{offset:a=0}=l,d=si(o,!0,n,l);return s(n-a,d)},select:ga,number:(n,l)=>Xr(o,n,i(l)||{style:l}),date:(n,l)=>xo(o,n,i(l)||l),time:(n,l)=>pa(o,n,i(l)||l)}},ga=(t,e)=>e[t]??e.other;function ba(t,e,r){return(o={},i)=>{const s=fa(e,r,i),n=(a,d=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&d)return h+Qi;if(Re(c))return h+c;const[f,u,g]=c;let p={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(g).forEach(([S,A])=>{p[S]=n(A,u==="plural"||u==="selectordinal")}):p=g;let m;if(u){const S=s[u];m=S(o[f],p)}else m=o[f];return m==null?h:h+m},""):a,l=n(t);return Re(l)&&Yi.test(l)?go.unraw(l):Re(l)?l:l?String(l):""}}var ma=Object.defineProperty,va=(t,e,r)=>e in t?ma(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,wa=(t,e,r)=>(va(t,e+"",r),r);class ya{constructor(){wa(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var xa=Object.defineProperty,$a=(t,e,r)=>e in t?xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ue=(t,e,r)=>($a(t,typeof e!="symbol"?e+"":e,r),r);class ka extends ya{constructor(e){super(),Ue(this,"_locale",""),Ue(this,"_locales"),Ue(this,"_localeData",{}),Ue(this,"_messages",{}),Ue(this,"_missing"),Ue(this,"_messageCompiler"),Ue(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Ji,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),Re(e)||(r=e.values||r,i=e.message,e=e.id);const s=this.messages[e],n=s===void 0,l=this._missing;if(l&&n)return ha(l)?l(this._locale,e):l;n&&this.emit("missing",{id:e,locale:this._locale});let a=s||i||e;return Re(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Re(a)&&Yi.test(a)?JSON.parse(`"${a}"`):Re(a)?a:ba(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return xo(this._locales||this._locale,e,r)}number(e,r){return Xr(this._locales||this._locale,e,r)}}function _a(t={}){return new ka(t)}const E=_a();var Sa={},Ea=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),Ca=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),Aa=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),Oa=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),La=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Xi=["en","nb","fi","da","sv"],Zi="en",Ta=()=>{var t;let e;switch((t=process==null?void 0:Sa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ki=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Zi},Pr=t=>Xi.find(e=>t===e||t.toLowerCase().includes(e))||Ki();function Na(){var t;if(typeof window>"u"){const e=Ta();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ki();return Xi.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Zi}}var Da=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Pa=(t,e,r,o,i)=>{const s=Na(),n=Da(s,t,e,r,o,i);E.load(s,n),E.activate(s)};Pa(Ca,Ea,Aa,Oa,La);var Ba=class extends j{render(){const t=E.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",Ba);var Ra={},Ma=JSON.parse('{"icon.title.close":["Kryss"]}'),za=JSON.parse('{"icon.title.close":["Cross"]}'),Ia=JSON.parse('{"icon.title.close":["Rasti"]}'),ja=JSON.parse('{"icon.title.close":["Kryds"]}'),Fa=JSON.parse('{"icon.title.close":["Kryss"]}'),Gi=["en","nb","fi","da","sv"],es="en",Ha=()=>{var t;let e;switch((t=process==null?void 0:Ra)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ts=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":es},Br=t=>Gi.find(e=>t===e||t.toLowerCase().includes(e))||ts();function Va(){var t;if(typeof window>"u"){const e=Ha();return Br(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ts();return Gi.includes(e)?Br(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Br(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),es}}var Ua=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,qa=(t,e,r,o,i)=>{const s=Va(),n=Ua(s,t,e,r,o,i);E.load(s,n),E.activate(s)};qa(za,Ma,Ia,ja,Fa);var Wa=class extends j{render(){const t=E.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Wa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=ho(class extends po{constructor(t){if(super(t),t.type!==uo.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Oe}}),Ja=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Ft(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:Ja(e.toString())})),super.createProperty(e,o)}}}function Ya(){return`m${Math.random().toString(36).slice(2)}`}class Qa extends Ft(F){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[F.styles];get _classBase(){return this.slot==="suffix"?Bn:Rn}get _classes(){return z([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
      <button aria-label="${J(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return w`
      <button aria-label="${J(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return w`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",Qa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:so},Za=(t=Xa,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),o==="accessor"){const{name:n}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=r;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function v(t){return(e,r)=>typeof r=="object"?Za(t,e,r):((o,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(t){return v({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(t,e){return(r,o,i)=>{const s=n=>n.renderRoot?.querySelector(t)??null;return Ka(r,o,{get(){return s(this)}})}}var Ga={},el=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),tl=JSON.parse('{"icon.title.info":["Information circle"]}'),rl=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),ol=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),il=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),rs=["en","nb","fi","da","sv"],os="en",sl=()=>{var t;let e;switch((t=process==null?void 0:Ga)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},is=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":os},Rr=t=>rs.find(e=>t===e||t.toLowerCase().includes(e))||is();function nl(){var t;if(typeof window>"u"){const e=sl();return Rr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=is();return rs.includes(e)?Rr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Rr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),os}}var al=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,ll=(t,e,r,o,i)=>{const s=nl(),n=al(s,t,e,r,o,i);E.load(s,n),E.activate(s)};ll(tl,el,rl,ol,il);var cl=class extends j{render(){const t=E.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",cl);var dl={},ul=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),hl=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),pl=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),fl=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),gl=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),ss=["en","nb","fi","da","sv"],ns="en",bl=()=>{var t;let e;switch((t=process==null?void 0:dl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},as=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ns},Mr=t=>ss.find(e=>t===e||t.toLowerCase().includes(e))||as();function ml(){var t;if(typeof window>"u"){const e=bl();return Mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=as();return ss.includes(e)?Mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ns}}var vl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,wl=(t,e,r,o,i)=>{const s=ml(),n=vl(s,t,e,r,o,i);E.load(s,n),E.activate(s)};wl(hl,ul,pl,fl,gl);var yl=class extends j{render(){const t=E.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",yl);var xl={},$l=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),kl=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),_l=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),Sl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),El=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),ls=["en","nb","fi","da","sv"],cs="en",Cl=()=>{var t;let e;switch((t=process==null?void 0:xl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ds=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":cs},zr=t=>ls.find(e=>t===e||t.toLowerCase().includes(e))||ds();function Al(){var t;if(typeof window>"u"){const e=Cl();return zr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ds();return ls.includes(e)?zr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),zr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),cs}}var Ol=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Ll=(t,e,r,o,i)=>{const s=Al(),n=Ol(s,t,e,r,o,i);E.load(s,n),E.activate(s)};Ll(kl,$l,_l,Sl,El);var Tl=class extends j{render(){const t=E.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",Tl);var Nl={},Dl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),Pl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),Bl=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),Rl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),Ml=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),us=["en","nb","fi","da","sv"],hs="en",zl=()=>{var t;let e;switch((t=process==null?void 0:Nl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ps=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":hs},Ir=t=>us.find(e=>t===e||t.toLowerCase().includes(e))||ps();function Il(){var t;if(typeof window>"u"){const e=zl();return Ir(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ps();return us.includes(e)?Ir(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ir(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),hs}}var jl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Fl=(t,e,r,o,i)=>{const s=Il(),n=jl(s,t,e,r,o,i);E.load(s,n),E.activate(s)};Fl(Pl,Dl,Bl,Rl,Ml);var Hl=class extends j{render(){const t=E.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",Hl);const Ee=W`
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
`;W`*, :before, :after {
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
        `;const Vl=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Ul=Object.defineProperty,$o=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Ul(e,r,i),i};const kt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},_t={negative:"negative",positive:"positive",warning:"warning",info:"info"};class xr extends j{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!_t[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return z([kt.wrapper,kt[this.variant]])}get _iconClasses(){const e=kt[`${this.variant}Icon`];return z([kt.icon,e])}static{this.styles=[Ee,Vl,W`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===_t.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===_t.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===_t.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===_t.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${kt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}$o([v({reflect:!0})],xr.prototype,"variant");$o([v({type:Boolean,reflect:!0})],xr.prototype,"show");$o([v({reflect:!0})],xr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",xr);const ql=["top","right","bottom","left"],Ge=Math.min,ge=Math.max,ir=Math.round,$e=t=>({x:t,y:t}),Wl={left:"right",right:"left",bottom:"top",top:"bottom"},Jl={start:"end",end:"start"};function Kr(t,e,r){return ge(t,Ge(e,r))}function tt(t,e){return typeof t=="function"?t(e):t}function Me(t){return t.split("-")[0]}function ft(t){return t.split("-")[1]}function fs(t){return t==="x"?"y":"x"}function ko(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(Me(t))?"y":"x"}function _o(t){return fs(et(t))}function Yl(t,e,r){r===void 0&&(r=!1);const o=ft(t),i=_o(t),s=ko(i);let n=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=sr(n)),[n,sr(n)]}function Ql(t){const e=sr(t);return[Gr(t),e,Gr(e)]}function Gr(t){return t.replace(/start|end/g,e=>Jl[e])}function Xl(t,e,r){const o=["left","right"],i=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?s:n;default:return[]}}function Zl(t,e,r,o){const i=ft(t);let s=Xl(Me(t),r==="start",o);return i&&(s=s.map(n=>n+"-"+i),e&&(s=s.concat(s.map(Gr)))),s}function sr(t){return t.replace(/left|right|bottom|top/g,e=>Wl[e])}function Kl(t){return{top:0,right:0,bottom:0,left:0,...t}}function gs(t){return typeof t!="number"?Kl(t):{top:t,right:t,bottom:t,left:t}}function nr(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function ni(t,e,r){let{reference:o,floating:i}=t;const s=et(e),n=_o(e),l=ko(n),a=Me(e),d=s==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,f=o[l]/2-i[l]/2;let u;switch(a){case"top":u={x:h,y:o.y-i.height};break;case"bottom":u={x:h,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:c};break;case"left":u={x:o.x-i.width,y:c};break;default:u={x:o.x,y:o.y}}switch(ft(e)){case"start":u[n]-=f*(r&&d?-1:1);break;case"end":u[n]+=f*(r&&d?-1:1);break}return u}const Gl=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:n}=r,l=s.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=ni(d,o,a),f=o,u={},g=0;for(let p=0;p<l.length;p++){const{name:m,fn:S}=l[p],{x:A,y:C,data:B,reset:x}=await S({x:h,y:c,initialPlacement:o,placement:f,strategy:i,middlewareData:u,rects:d,platform:n,elements:{reference:t,floating:e}});h=A??h,c=C??c,u={...u,[m]:{...u[m],...B}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:h,y:c}=ni(d,f,a)),p=-1)}return{x:h,y:c,placement:f,strategy:i,middlewareData:u}};async function Rt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:n,elements:l,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:f=!1,padding:u=0}=tt(e,t),g=gs(u),m=l[f?c==="floating"?"reference":"floating":c],S=nr(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(m)))==null||r?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:i,width:n.floating.width,height:n.floating.height}:n.reference,C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),B=await(s.isElement==null?void 0:s.isElement(C))?await(s.getScale==null?void 0:s.getScale(C))||{x:1,y:1}:{x:1,y:1},x=nr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(S.top-x.top+g.top)/B.y,bottom:(x.bottom-S.bottom+g.bottom)/B.y,left:(S.left-x.left+g.left)/B.x,right:(x.right-S.right+g.right)/B.x}}const ec=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:s,platform:n,elements:l,middlewareData:a}=e,{element:d,padding:h=0}=tt(t,e)||{};if(d==null)return{};const c=gs(h),f={x:r,y:o},u=_o(i),g=ko(u),p=await n.getDimensions(d),m=u==="y",S=m?"top":"left",A=m?"bottom":"right",C=m?"clientHeight":"clientWidth",B=s.reference[g]+s.reference[u]-f[u]-s.floating[g],x=f[u]-s.reference[u],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let L=O?O[C]:0;(!L||!await(n.isElement==null?void 0:n.isElement(O)))&&(L=l.floating[C]||s.floating[g]);const R=B/2-x/2,H=L/2-p[g]/2-1,U=Ge(c[S],H),K=Ge(c[A],H),V=U,ae=L-p[g]-K,P=L/2-p[g]/2+R,ee=Kr(V,P,ae),Q=!a.arrow&&ft(i)!=null&&P!==ee&&s.reference[g]/2-(P<V?U:K)-p[g]/2<0,ie=Q?P<V?P-V:P-ae:0;return{[u]:f[u]+ie,data:{[u]:ee,centerOffset:P-ee-ie,...Q&&{alignmentOffset:ie}},reset:Q}}}),tc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:s,rects:n,initialPlacement:l,platform:a,elements:d}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...m}=tt(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const S=Me(i),A=et(l),C=Me(l)===l,B=await(a.isRTL==null?void 0:a.isRTL(d.floating)),x=f||(C||!p?[sr(l)]:Ql(l)),O=g!=="none";!f&&O&&x.push(...Zl(l,p,g,B));const L=[l,...x],R=await Rt(e,m),H=[];let U=((o=s.flip)==null?void 0:o.overflows)||[];if(h&&H.push(R[S]),c){const P=Yl(i,n,B);H.push(R[P[0]],R[P[1]])}if(U=[...U,{placement:i,overflows:H}],!H.every(P=>P<=0)){var K,V;const P=(((K=s.flip)==null?void 0:K.index)||0)+1,ee=L[P];if(ee)return{data:{index:P,overflows:U},reset:{placement:ee}};let Q=(V=U.filter(ie=>ie.overflows[0]<=0).sort((ie,te)=>ie.overflows[1]-te.overflows[1])[0])==null?void 0:V.placement;if(!Q)switch(u){case"bestFit":{var ae;const ie=(ae=U.filter(te=>{if(O){const se=et(te.placement);return se===A||se==="y"}return!0}).map(te=>[te.placement,te.overflows.filter(se=>se>0).reduce((se,it)=>se+it,0)]).sort((te,se)=>te[1]-se[1])[0])==null?void 0:ae[0];ie&&(Q=ie);break}case"initialPlacement":Q=l;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};function ai(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function li(t){return ql.some(e=>t[e]>=0)}const rc=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=tt(t,e);switch(o){case"referenceHidden":{const s=await Rt(e,{...i,elementContext:"reference"}),n=ai(s,r.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:li(n)}}}case"escaped":{const s=await Rt(e,{...i,altBoundary:!0}),n=ai(s,r.floating);return{data:{escapedOffsets:n,escaped:li(n)}}}default:return{}}}}};async function oc(t,e){const{placement:r,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),n=Me(r),l=ft(r),a=et(r)==="y",d=["left","top"].includes(n)?-1:1,h=s&&a?-1:1,c=tt(e,t);let{mainAxis:f,crossAxis:u,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof g=="number"&&(u=l==="end"?g*-1:g),a?{x:u*h,y:f*d}:{x:f*d,y:u*h}}const ic=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:s,placement:n,middlewareData:l}=e,a=await oc(e,t);return n===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:n}}}}},sc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:l={fn:m=>{let{x:S,y:A}=m;return{x:S,y:A}}},...a}=tt(t,e),d={x:r,y:o},h=await Rt(e,a),c=et(Me(i)),f=fs(c);let u=d[f],g=d[c];if(s){const m=f==="y"?"top":"left",S=f==="y"?"bottom":"right",A=u+h[m],C=u-h[S];u=Kr(A,u,C)}if(n){const m=c==="y"?"top":"left",S=c==="y"?"bottom":"right",A=g+h[m],C=g-h[S];g=Kr(A,g,C)}const p=l.fn({...e,[f]:u,[c]:g});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[f]:s,[c]:n}}}}}},nc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:s,platform:n,elements:l}=e,{apply:a=()=>{},...d}=tt(t,e),h=await Rt(e,d),c=Me(i),f=ft(i),u=et(i)==="y",{width:g,height:p}=s.floating;let m,S;c==="top"||c==="bottom"?(m=c,S=f===(await(n.isRTL==null?void 0:n.isRTL(l.floating))?"start":"end")?"left":"right"):(S=c,m=f==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=g-h.left-h.right,B=Ge(p-h[m],A),x=Ge(g-h[S],C),O=!e.middlewareData.shift;let L=B,R=x;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(R=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!f){const U=ge(h.left,0),K=ge(h.right,0),V=ge(h.top,0),ae=ge(h.bottom,0);u?R=g-2*(U!==0||K!==0?U+K:ge(h.left,h.right)):L=p-2*(V!==0||ae!==0?V+ae:ge(h.top,h.bottom))}await a({...e,availableWidth:R,availableHeight:L});const H=await n.getDimensions(l.floating);return g!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function $r(){return typeof window<"u"}function gt(t){return bs(t)?(t.nodeName||"").toLowerCase():"#document"}function he(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Te(t){var e;return(e=(bs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function bs(t){return $r()?t instanceof Node||t instanceof he(t).Node:!1}function ve(t){return $r()?t instanceof Element||t instanceof he(t).Element:!1}function ke(t){return $r()?t instanceof HTMLElement||t instanceof he(t).HTMLElement:!1}function ci(t){return!$r()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof he(t).ShadowRoot}function Ut(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=we(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function ac(t){return["table","td","th"].includes(gt(t))}function kr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function So(t){const e=Eo(),r=ve(t)?we(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function lc(t){let e=ze(t);for(;ke(e)&&!pt(e);){if(So(e))return e;if(kr(e))return null;e=ze(e)}return null}function Eo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function pt(t){return["html","body","#document"].includes(gt(t))}function we(t){return he(t).getComputedStyle(t)}function _r(t){return ve(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ze(t){if(gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ci(t)&&t.host||Te(t);return ci(e)?e.host:e}function ms(t){const e=ze(t);return pt(e)?t.ownerDocument?t.ownerDocument.body:t.body:ke(e)&&Ut(e)?e:ms(e)}function eo(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=ms(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),n=he(i);if(s){const l=to(n);return e.concat(n,n.visualViewport||[],Ut(i)?i:[],l&&r?eo(l):[])}return e.concat(i,eo(i,[],r))}function to(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vs(t){const e=we(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=ke(t),s=i?t.offsetWidth:r,n=i?t.offsetHeight:o,l=ir(r)!==s||ir(o)!==n;return l&&(r=s,o=n),{width:r,height:o,$:l}}function ws(t){return ve(t)?t:t.contextElement}function dt(t){const e=ws(t);if(!ke(e))return $e(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:s}=vs(e);let n=(s?ir(r.width):r.width)/o,l=(s?ir(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const cc=$e(0);function ys(t){const e=he(t);return!Eo()||!e.visualViewport?cc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function dc(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==he(t)?!1:e}function Mt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=ws(t);let n=$e(1);e&&(o?ve(o)&&(n=dt(o)):n=dt(t));const l=dc(s,r,o)?ys(s):$e(0);let a=(i.left+l.x)/n.x,d=(i.top+l.y)/n.y,h=i.width/n.x,c=i.height/n.y;if(s){const f=he(s),u=o&&ve(o)?he(o):o;let g=f,p=to(g);for(;p&&o&&u!==g;){const m=dt(p),S=p.getBoundingClientRect(),A=we(p),C=S.left+(p.clientLeft+parseFloat(A.paddingLeft))*m.x,B=S.top+(p.clientTop+parseFloat(A.paddingTop))*m.y;a*=m.x,d*=m.y,h*=m.x,c*=m.y,a+=C,d+=B,g=he(p),p=to(g)}}return nr({width:h,height:c,x:a,y:d})}function Co(t,e){const r=_r(t).scrollLeft;return e?e.left+r:Mt(Te(t)).left+r}function xs(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Co(t,o)),s=o.top+e.scrollTop;return{x:i,y:s}}function uc(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const s=i==="fixed",n=Te(o),l=e?kr(e.floating):!1;if(o===n||l&&s)return r;let a={scrollLeft:0,scrollTop:0},d=$e(1);const h=$e(0),c=ke(o);if((c||!c&&!s)&&((gt(o)!=="body"||Ut(n))&&(a=_r(o)),ke(o))){const u=Mt(o);d=dt(o),h.x=u.x+o.clientLeft,h.y=u.y+o.clientTop}const f=n&&!c&&!s?xs(n,a,!0):$e(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-a.scrollLeft*d.x+h.x+f.x,y:r.y*d.y-a.scrollTop*d.y+h.y+f.y}}function hc(t){return Array.from(t.getClientRects())}function pc(t){const e=Te(t),r=_r(t),o=t.ownerDocument.body,i=ge(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=ge(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-r.scrollLeft+Co(t);const l=-r.scrollTop;return we(o).direction==="rtl"&&(n+=ge(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:n,y:l}}function fc(t,e){const r=he(t),o=Te(t),i=r.visualViewport;let s=o.clientWidth,n=o.clientHeight,l=0,a=0;if(i){s=i.width,n=i.height;const d=Eo();(!d||d&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:n,x:l,y:a}}function gc(t,e){const r=Mt(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,s=ke(t)?dt(t):$e(1),n=t.clientWidth*s.x,l=t.clientHeight*s.y,a=i*s.x,d=o*s.y;return{width:n,height:l,x:a,y:d}}function di(t,e,r){let o;if(e==="viewport")o=fc(t,r);else if(e==="document")o=pc(Te(t));else if(ve(e))o=gc(e,r);else{const i=ys(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return nr(o)}function $s(t,e){const r=ze(t);return r===e||!ve(r)||pt(r)?!1:we(r).position==="fixed"||$s(r,e)}function bc(t,e){const r=e.get(t);if(r)return r;let o=eo(t,[],!1).filter(l=>ve(l)&&gt(l)!=="body"),i=null;const s=we(t).position==="fixed";let n=s?ze(t):t;for(;ve(n)&&!pt(n);){const l=we(n),a=So(n);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ut(n)&&!a&&$s(t,n))?o=o.filter(h=>h!==n):i=l,n=ze(n)}return e.set(t,o),o}function mc(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const n=[...r==="clippingAncestors"?kr(e)?[]:bc(e,this._c):[].concat(r),o],l=n[0],a=n.reduce((d,h)=>{const c=di(e,h,i);return d.top=ge(c.top,d.top),d.right=Ge(c.right,d.right),d.bottom=Ge(c.bottom,d.bottom),d.left=ge(c.left,d.left),d},di(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function vc(t){const{width:e,height:r}=vs(t);return{width:e,height:r}}function wc(t,e,r){const o=ke(e),i=Te(e),s=r==="fixed",n=Mt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=$e(0);if(o||!o&&!s)if((gt(e)!=="body"||Ut(i))&&(l=_r(e)),o){const f=Mt(e,!0,s,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=Co(i));const d=i&&!o&&!s?xs(i,l):$e(0),h=n.left+l.scrollLeft-a.x-d.x,c=n.top+l.scrollTop-a.y-d.y;return{x:h,y:c,width:n.width,height:n.height}}function jr(t){return we(t).position==="static"}function ui(t,e){if(!ke(t)||we(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Te(t)===r&&(r=r.ownerDocument.body),r}function ks(t,e){const r=he(t);if(kr(t))return r;if(!ke(t)){let i=ze(t);for(;i&&!pt(i);){if(ve(i)&&!jr(i))return i;i=ze(i)}return r}let o=ui(t,e);for(;o&&ac(o)&&jr(o);)o=ui(o,e);return o&&pt(o)&&jr(o)&&!So(o)?r:o||lc(t)||r}const yc=async function(t){const e=this.getOffsetParent||ks,r=this.getDimensions,o=await r(t.floating);return{reference:wc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function xc(t){return we(t).direction==="rtl"}const $c={convertOffsetParentRelativeRectToViewportRelativeRect:uc,getDocumentElement:Te,getClippingRect:mc,getOffsetParent:ks,getElementRects:yc,getClientRects:hc,getDimensions:vc,getScale:dt,isElement:ve,isRTL:xc},kc=ic,_c=sc,Sc=tc,Ec=nc,Cc=rc,Ac=ec,Oc=(t,e,r)=>{const o=new Map,i={platform:$c,...r},s={...i.platform,_c:o};return Gl(t,e,{...i,platform:s})},ar="top-start",lr="top",cr="top-end",dr="right-start",ur="right",hr="right-end",pr="bottom-start",zt="bottom",fr="bottom-end",gr="left-start",br="left",mr="left-end",hi=[ar,lr,cr,dr,ur,hr,pr,zt,fr,gr,br,mr],ct={[ar]:pr,[lr]:zt,[cr]:fr,[pr]:ar,[zt]:lr,[fr]:cr,[gr]:dr,[br]:ur,[mr]:hr,[dr]:gr,[ur]:br,[hr]:mr},Lc={[gr]:-45,[br]:-45,[mr]:-45,[ar]:45,[lr]:45,[cr]:45,[dr]:135,[ur]:135,[hr]:135,[pr]:-135,[zt]:-135,[fr]:-135},_s=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},Tc=t=>t.split("-")[0],Nc=t=>ct[Tc(t)],Ss=t=>ct[t],Dc=t=>Lc[Ss(t)],Pc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${_s(Nc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},pi=8,Yt=24;async function fi(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return Oc(e,r,{placement:t?.directionName??zt,middleware:[kc({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Sc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&_c({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Ac({element:t?.arrowEl}),Cc(),Ec({apply(){Object.assign(r.style,{paddingRight:`${pi}px`,paddingLeft:`${pi}px`})}})]}).then(({x:o,y:i,middlewareData:s,placement:n})=>{if(t.actualDirection=n,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),s?.hide&&!t?.isCallout){const{referenceHidden:l}=s.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(s?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:d}=s.arrow,h=window.getComputedStyle(r).direction==="rtl",c=Ss(n).split("-")[1];let f="",u="",g="",p="";if(c==="start"){const m=typeof a=="number"?`calc(${Yt}px - ${l.offsetWidth/2}px)`:"";f=typeof d=="number"?`calc(${Yt}px - ${l.offsetWidth/2}px)`:"",u=h?m:"",p=h?"":m}else if(c==="end"){const m=typeof a=="number"?`calc(${Yt}px - ${l.offsetWidth/2}px)`:"";u=h?"":m,p=h?m:"",g=typeof d=="number"?`calc(${Yt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",f=typeof d=="number"?`${d}px`:"";Object.assign(l.style,{top:f,right:u,bottom:g,left:p}),Pc(l,Dc(n),n)}}),t}var Bc={};const Rc=["en","nb","fi","da","sv"],Es="en",gi=t=>Rc.find(e=>t===e||t.toLowerCase().includes(e))||Es;function Mc(){if(typeof window>"u"){const t=Bc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return gi(t)}try{const t=document.documentElement.lang;return gi(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Es}}const zc=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Ie=(t,e,r,o,i)=>{const s=Mc(),n=zc(s,t,e,r,o,i);E.load(s,n),E.activate(s)},Ic=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),jc=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),Fc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Hc=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Vc=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Uc extends Ft(F){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[F.styles,W`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Ie(jc,Hc,Fc,Ic,Vc),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(ct).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(ct))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>hi.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(hi)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?fi(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return ct[this._actualDirection]}get _arrowClasses(){return z([nt.arrowBase,this._activeVariantClasses.arrow,nt[`arrowDirection${_s(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:nt[r],arrow:nt[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return z([nt.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return E._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${nt.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},fi(this.attentionState)}pointingAtDirection(){switch(ct[this._actualDirection]){case"top-start":case"top":case"top-end":return E._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return E._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return E._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return E._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return E._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return E._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return E._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return E._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Ya());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${J(this.className?this.className:void 0)}>
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
    `}}customElements.get("w-attention")||customElements.define("w-attention",Uc);class qc extends F{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[F.styles];constructor(){super(),this.variant="neutral"}get _class(){return z([He.base,He[this.variant],!!this.position&&He.positionBase,this.position==="top-left"&&He.positionTL,this.position==="top-right"&&He.positionTR,this.position==="bottom-right"&&He.positionBR,this.position==="bottom-left"&&He.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",qc);class Wc extends F{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[F.styles,W`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return z([yt.base,this.bleed&&yt.bleed,this.info&&yt.info,this.neutral&&yt.neutral,this.bordered&&yt.bordered])}get _optOutRoleWithDefault(){return this.role===""?I:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",Wc);function Jc(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Yc=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`,Qc=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),Xc=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Zc=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Kc=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Gc=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}');var ed=Object.defineProperty,td=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&ed(e,r,i),i};const lt={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},rd=w`<span class=${lt.separator}>/</span>`;class Cs extends j{static{this.styles=[Ee,Yc]}constructor(){super(),Ie(Xc,Kc,Zc,Qc,Gc),this.ariaLabel=E._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const s=i===this.children.length-1;return w`<span class=${lt.text} aria-current=${s?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?lt.link:lt.text),o});this._children=Jc(r,rd)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${lt.a11y}>${this.ariaLabel}</h2>
        <div class=${lt.wrapper}>${this._children}</div>
      </nav>
    `}}td([v({attribute:"aria-label",type:String})],Cs.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Cs);var M=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},X=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function Ao(t){var e,r,o,i,s,n,l,a,d,h,c,f,u,g,p,m,S,A;class C extends t{constructor(...x){var O,L,R;super(...x),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),s.set(this,void 0),n.set(this,void 0),l.set(this,!0),a.set(this,""),d.set(this,()=>{X(this,i,!0,"f"),X(this,r,!0,"f"),M(this,e,"m",p).call(this)}),h.set(this,()=>{X(this,r,!1,"f"),M(this,e,"m",m).call(this,this.shouldFormValueUpdate()?M(this,a,"f"):""),!this.validity.valid&&M(this,i,"f")&&X(this,o,!0,"f");const H=M(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;M(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),X(this,l,!1,"f")),X(this,i,!0,"f"),X(this,o,!0,"f"),M(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),f.set(this,void 0),u.set(this,!1),g.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",M(this,d,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",M(this,h,"f")),(R=this.addEventListener)===null||R===void 0||R.call(this,"invalid",M(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const x=this.validators.map(R=>R.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...x])]}static getValidator(x){return this.validators.find(O=>O.attribute===x)||null}static getValidators(x){return this.validators.filter(O=>{var L;if(O.attribute===x||!((L=O.attribute)===null||L===void 0)&&L.includes(x))return!0})}get form(){return this.internals.form}get showError(){return M(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(x,O,L){var R;(R=super.attributeChangedCallback)===null||R===void 0||R.call(this,x,O,L);const U=this.constructor.getValidators(x);U?.length&&this.validationTarget&&this.setValue(M(this,a,"f"))}setValue(x){var O;X(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),X(this,a,x,"f");const R=this.shouldFormValueUpdate()?x:null;this.internals.setFormValue(R),M(this,e,"m",m).call(this,R),this.valueChangedCallback&&this.valueChangedCallback(R),M(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(x=>x(M(this,g,"f")))}formResetCallback(){var x,O;X(this,i,!1,"f"),X(this,o,!1,"f"),M(this,e,"m",p).call(this),(x=this.resetFormControl)===null||x===void 0||x.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,M(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,l=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,c=new WeakMap,f=new WeakMap,u=new WeakMap,g=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const x=M(this,o,"f")||M(this,i,"f")&&!this.validity.valid&&!M(this,r,"f");return x&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),x},m=function(x){const O=this.constructor,L={},R=O.validators,H=[],U=R.some(P=>P.isValid instanceof Promise);M(this,u,"f")||(X(this,g,new Promise(P=>{X(this,f,P,"f")}),"f"),X(this,u,!0,"f")),M(this,s,"f")&&(M(this,s,"f").abort(),X(this,n,M(this,s,"f"),"f"));const K=new AbortController;X(this,s,K,"f");let V,ae=!1;R.length&&(R.forEach(P=>{const ee=P.key||"customError",Q=P.isValid(this,x,K.signal);Q instanceof Promise?(H.push(Q),Q.then(te=>{te!=null&&(L[ee]=!te,V=M(this,e,"m",A).call(this,P,x),M(this,e,"m",S).call(this,L,V))})):(L[ee]=!Q,this.validity[ee]!==!Q&&(ae=!0),!Q&&!V&&(V=M(this,e,"m",A).call(this,P,x)))}),Promise.allSettled(H).then(()=>{var P;K?.signal.aborted||(X(this,u,!1,"f"),(P=M(this,f,"f"))===null||P===void 0||P.call(this))}),(ae||!U)&&M(this,e,"m",S).call(this,L,V))},S=function(x,O){if(this.validationTarget)this.internals.setValidity(x,O,this.validationTarget),X(this,l,!1,"f");else{if(this.internals.setValidity(x,O),this.internals.validity.valid)return;X(this,l,!0,"f")}},A=function(x,O){if(this.validityCallback){const L=this.validityCallback(x.key||"customError");if(L)return L}return x.message instanceof Function?x.message(this,O):x.message},C}const od=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),id=JSON.parse('{"button.aria.loading":["Loading..."]}'),sd=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),nd=JSON.parse('{"button.aria.loading":["Laster..."]}'),ad=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),ld=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var cd=Object.defineProperty,pe=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&cd(e,r,i),i};const bi=["primary","secondary","negative","utility","pill","link"],Be="font-bold focusable justify-center transition-colors ease-in-out",q={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},D={primary:`border-0 rounded-8 ${Be}`,secondary:`border-2 rounded-8 ${Be}`,utility:`border rounded-4 ${Be}`,negative:`border-0 rounded-8 ${Be}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Be}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${q.link}`},k={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},_={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${q.loading}`,quiet:`border-0 rounded-8 ${Be}`,utilityQuiet:`border-0 rounded-4 ${Be}`,negativeQuiet:`border-0 rounded-8 ${Be}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${q.disabled}`},T={secondary:`${k.medium} ${_.medium} ${D.secondary} ${q.secondary}`,secondaryHref:`${k.medium} ${_.medium} ${D.secondary} ${q.secondary}`,secondaryDisabled:`${k.medium} ${_.medium} ${D.secondary} ${$.isDisabled}`,secondarySmall:`${_.xsmall} ${k.xsmall} ${D.secondary} ${q.secondary}`,secondarySmallDisabled:`${_.xsmall} ${k.xsmall} ${D.secondary} ${$.isDisabled}`,secondaryQuiet:`${k.medium} ${_.medium} ${$.quiet} ${q.quiet}`,secondaryQuietDisabled:`${k.medium} ${_.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${_.xsmall} ${k.xsmall} ${$.quiet} ${q.quiet}`,secondarySmallQuietDisabled:`${_.xsmall} ${k.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${k.medium} ${_.medium} ${D.secondary} ${$.inProgress}`,secondarySmallLoading:`${_.xsmall} ${k.xsmall}  ${D.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${_.xsmall} ${k.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${k.medium} ${_.medium} ${$.quiet} ${$.inProgress}`,primary:`${k.large} ${_.medium} ${D.primary} ${q.primary}`,primaryDisabled:`${k.large} ${_.medium} ${$.isDisabled} ${D.primary}`,primarySmall:`${k.small} ${_.xsmall} ${D.primary} ${q.primary}`,primarySmallDisabled:`${k.small} ${_.xsmall} ${$.isDisabled} ${D.primary} `,primaryQuiet:`${k.large} ${_.medium} ${$.quiet} ${q.quiet}`,primaryQuietDisabled:`${k.large} ${_.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${k.small} ${_.xsmall} ${$.quiet} ${q.quiet}`,primarySmallQuietDisabled:`${k.small} ${_.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${k.large} ${_.medium} ${$.inProgress} ${D.primary}`,primarySmallLoading:`${k.small} ${_.xsmall}  ${$.inProgress} ${D.primary}`,primarySmallQuietLoading:`${k.small} ${_.xsmall} ${$.quiet} ${$.inProgress} ${D.primary}`,primaryQuietLoading:`${k.large} ${_.medium} ${$.quiet} ${$.inProgress}`,utility:`${k.utility} ${_.medium} ${D.utility} ${q.utility}`,utilityDisabled:`${k.utility} ${_.medium} ${D.utility} ${$.isDisabled}`,utilityQuiet:`${k.large} ${_.medium} ${$.utilityQuiet} ${q.utilityQuiet}`,utilityQuietDisabled:`${k.large} ${_.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${k.smallUtility} ${_.xsmall} ${D.utility} ${q.utility}`,utilitySmallDisabled:`${k.smallUtility} ${_.xsmall} ${D.utility} ${$.isDisabled}`,utilitySmallQuiet:`${k.smallUtility} ${_.xsmall} ${$.utilityQuiet} ${q.utilityQuiet}`,utilitySmallQuietDisabled:`${k.smallUtility} ${_.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${k.large} ${_.medium} ${D.utility} ${$.inProgress}`,utilitySmallLoading:`${k.smallUtility} ${_.xsmall} ${D.utility} ${$.inProgress}`,utilityQuietLoading:`${k.large} ${_.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${k.smallUtility} ${_.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${k.large} ${_.medium} ${D.negative} ${q.destructive}`,negativeDisabled:`${k.large} ${_.medium} ${D.negative} ${$.isDisabled}`,negativeQuiet:`${k.large} ${_.medium} ${$.negativeQuiet} ${q.negativeQuiet}`,negativeQuietDisabled:`${k.large} ${_.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${k.small} ${_.xsmall} ${D.negative} ${q.destructive}`,negativeSmallDisabled:`${k.small} ${_.xsmall} ${D.negative} ${$.isDisabled}`,negativeSmallQuiet:`${k.small} ${_.xsmall} ${$.negativeQuiet} ${q.negativeQuiet}`,negativeSmallQuietDisabled:`${k.small} ${_.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${k.large} ${_.medium} ${D.negative} ${$.inProgress}`,negativeSmallLoading:`${k.small} ${_.xsmall} ${$.inProgress} ${D.negative}`,negativeQuietLoading:`${k.large} ${_.medium} ${$.negativeQuiet} ${D.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${k.small} ${_.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${k.pill} ${_.medium} ${D.pill} ${q.pill}`,pillSmall:`${k.pillSmall} ${_.xsmall} ${D.pill} ${q.pill}`,pillLoading:`${k.pill} ${_.medium} ${D.pill} ${$.inProgress}`,pillSmallLoading:`${k.pillSmall} ${_.xsmall} ${D.pill} ${$.inProgress}`,link:`${k.link} ${_.medium} ${D.link}`,linkSmall:`${k.link} ${_.xsmall} ${D.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class ce extends Ao(Ft(j)){constructor(){super(),this.type="button",Ie(id,nd,sd,od,ad),this.variant="secondary",this.ariaValueTextLoading=E._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Ee,ld]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!bi.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${bi.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.primary,this.small&&!this.quiet&&!this.loading&&T.primarySmall,this.small&&this.quiet&&!this.loading&&T.primarySmallQuiet,this.small&&this.loading&&(this.quiet?T.primarySmallQuietLoading:T.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&T.primaryQuiet,!this.small&&this.loading&&(this.quiet?T.primaryQuietLoading:T.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.secondary,this.small&&!this.quiet&&!this.loading&&T.secondarySmall,this.small&&this.loading&&(this.quiet?T.secondarySmallQuietLoading:T.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&T.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&T.secondaryQuiet,!this.small&&this.loading&&(this.quiet?T.secondaryQuietLoading:T.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.utility,this.small&&!this.quiet&&!this.loading&&T.utilitySmall,this.small&&this.quiet&&!this.loading&&T.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?T.utilitySmallQuietLoading:T.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&T.utilityQuiet,!this.small&&this.loading&&(this.quiet?T.utilityQuietLoading:T.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.negative,this.small&&!this.quiet&&!this.loading&&T.negativeSmall,this.small&&this.quiet&&!this.loading&&T.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?T.negativeSmallQuietLoading:T.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&T.negativeQuiet,!this.small&&this.loading&&(this.quiet?T.negativeQuietLoading:T.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?T.pillSmall:T.pill),this.loading&&(this.small?T.pillSmallLoading:T.pillLoading)]}get _linkClasses(){return[this.small?T.linkSmall:T.link]}get _classes(){return z(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&T.linkAsButton,this.fullWidth?T.fullWidth:T.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}pe([v({reflect:!0})],ce.prototype,"type");pe([v({type:Boolean,reflect:!0})],ce.prototype,"autofocus");pe([v({reflect:!0})],ce.prototype,"variant");pe([v({type:Boolean,reflect:!0})],ce.prototype,"quiet");pe([v({type:Boolean,reflect:!0})],ce.prototype,"small");pe([v({type:Boolean,reflect:!0})],ce.prototype,"loading");pe([v({reflect:!0})],ce.prototype,"href");pe([v({reflect:!0})],ce.prototype,"target");pe([v({reflect:!0})],ce.prototype,"rel");pe([v({type:Boolean,reflect:!0})],ce.prototype,"fullWidth");pe([v({reflect:!0})],ce.prototype,"buttonClass");pe([v({reflect:!0})],ce.prototype,"name");pe([v({reflect:!0})],ce.prototype,"value");customElements.get("w-button")||customElements.define("w-button",ce);const dd=JSON.parse('{"card.button.text":["Vælg"]}'),ud=JSON.parse('{"card.button.text":["Select"]}'),hd=JSON.parse('{"card.button.text":["Valitse"]}'),pd=JSON.parse('{"card.button.text":["Velg"]}'),fd=JSON.parse('{"card.button.text":["Välj"]}'),gd=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var bd=Object.defineProperty,Oo=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&bd(e,r,i),i};const xe={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},mi={ENTER:"Enter",SPACE:" "};class Sr extends j{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Ie(ud,pd,hd,dd,fd),this.buttonText=E._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Ee,gd,W`
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
    `]}get _containerClasses(){return z([xe.base,this.flat?xe.flat:xe.shadow,this.selected&&!this.flat&&xe.selected,this.selected&&this.flat?xe.flatSelected:xe.flatUnselected])}get _outlineClasses(){return z([xe.outline,this.selected?xe.outlineSelected:xe.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${xe.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===mi.ENTER||e.key===mi.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${J(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Oo([v({type:Boolean,reflect:!0})],Sr.prototype,"selected");Oo([v({type:Boolean})],Sr.prototype,"flat");Oo([v({type:Boolean})],Sr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",Sr);var md=Object.defineProperty,Er=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&md(e,r,i),i};class qt extends j{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=Zr({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[Ee,W`
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
    `]}}Er([v({type:String})],qt.prototype,"type");Er([v({type:Boolean,reflect:!0})],qt.prototype,"checked");Er([v({type:Boolean,reflect:!0})],qt.prototype,"indeterminate");Er([v({type:Boolean,reflect:!0})],qt.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",qt);var vd={},wd=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),yd=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),xd=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),$d=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),kd=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),As=["en","nb","fi","da","sv"],Os="en",_d=()=>{var t;let e;switch((t=process==null?void 0:vd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ls=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Os},Fr=t=>As.find(e=>t===e||t.toLowerCase().includes(e))||Ls();function Sd(){var t;if(typeof window>"u"){const e=_d();return Fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ls();return As.includes(e)?Fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Os}}var Ed=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Cd=(t,e,r,o,i)=>{const s=Sd(),n=Ed(s,t,e,r,o,i);E.load(s,n),E.activate(s)};Cd(yd,wd,xd,$d,kd);var Ad=class extends j{render(){const t=E.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",Ad);var Od={},Ld=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),Td=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),Nd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),Dd=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),Pd=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),Ts=["en","nb","fi","da","sv"],Ns="en",Bd=()=>{var t;let e;switch((t=process==null?void 0:Od)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ds=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ns},Hr=t=>Ts.find(e=>t===e||t.toLowerCase().includes(e))||Ds();function Rd(){var t;if(typeof window>"u"){const e=Bd();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ds();return Ts.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ns}}var Md=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,zd=(t,e,r,o,i)=>{const s=Rd(),n=Md(s,t,e,r,o,i);E.load(s,n),E.activate(s)};zd(Td,Ld,Nd,Dd,Pd);var Id=class extends j{render(){const t=E.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",Id);const jd=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var Fd=Object.defineProperty,ye=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Fd(e,r,i),i};const Hd={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},oe={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class be extends j{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Ee,jd,W`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return z([oe.wrapper,this.box&&oe.box,this.bleed&&oe.bleed])}get#t(){return z(this.buttonClass,[oe.button,this.box&&oe.buttonBox])}get#i(){return z([oe.chevron,!this.box&&oe.chevronNonBox])}get#r(){const e=z([oe.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&oe.elementsChevronCollapse]),r=z([oe.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&oe.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return z(this.contentClass,[this.box&&Hd.base,this._hasTitle&&this.box&&oe.contentWithTitle])}get#s(){return z([oe.expansion,!this.expanded&&oe.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
                ${this.noChevron?"":w`<div class="${this.#i}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#s}" aria-hidden=${J(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}ye([v({type:Boolean,reflect:!0})],be.prototype,"expanded");ye([v({type:String})],be.prototype,"title");ye([v({type:Boolean})],be.prototype,"box");ye([v({type:Boolean})],be.prototype,"bleed");ye([v({attribute:"button-class",type:String})],be.prototype,"buttonClass");ye([v({attribute:"content-class",type:String})],be.prototype,"contentClass");ye([v({attribute:"no-chevron",type:Boolean})],be.prototype,"noChevron");ye([v({type:Boolean})],be.prototype,"animated");ye([v({attribute:"heading-level",type:Number})],be.prototype,"headingLevel");ye([v({type:Boolean,state:!0})],be.prototype,"_hasTitle");ye([v({type:Boolean,state:!0})],be.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",be);const Ps=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Bs=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class Vd extends Ps(Bs(j)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[Ee,W`
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
    `]}}const Ud=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),qd=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],Wd={easing:"ease",duration:300};let Rs=!1;const Jd=typeof window<"u";if(Jd){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Rs=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class Yd{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||qd,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(Ud(this.first,this.last))}get defaults(){return Wd}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Rs?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var Qd={},Xd=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),Zd=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),Kd=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),Gd=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),eu=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),Ms=["en","nb","fi","da","sv"],zs="en",tu=()=>{var t;let e;switch((t=process==null?void 0:Qd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Is=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":zs},Vr=t=>Ms.find(e=>t===e||t.toLowerCase().includes(e))||Is();function ru(){var t;if(typeof window>"u"){const e=tu();return Vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Is();return Ms.includes(e)?Vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),zs}}var ou=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,iu=(t,e,r,o,i)=>{const s=ru(),n=ou(s,t,e,r,o,i);E.load(s,n),E.activate(s)};iu(Zd,Xd,Kd,Gd,eu);var su=class extends j{render(){const t=E.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",su);const nu=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),au=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),lu=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),cu=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),du=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var uu=Object.defineProperty,Wt=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&uu(e,r,i),i};class bt extends Ps(j){constructor(){super(),this._hasTopContent=!1,Ie(au,cu,lu,nu,du)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new Yd(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${E._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:I}get closeButton(){return this.noClose?I:w`<button
      type="button"
      aria-label="${E._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[Ee,W`
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
    `]}}Wt([v({type:String})],bt.prototype,"title");Wt([v({type:Boolean})],bt.prototype,"back");Wt([v({type:Boolean,attribute:"no-close"})],bt.prototype,"noClose");Wt([Ht()],bt.prototype,"_hasTopContent");Wt([Vt(".title-el")],bt.prototype,"titleEl");let Ot=[];const Lo={documentElement:{},body:{}},hu=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),js=t=>{t.touches.length>1||t.preventDefault?.()},pu=t=>([e,r])=>{Lo[t][e]=document[t].style[e],document[t].style[e]=r},fu=()=>Object.entries(hu).forEach(([t,e])=>{Object.entries(e).forEach(pu(t))}),gu=t=>([e,r])=>{document[t].style[e]=Lo[t][e]},bu=()=>Object.entries(Lo).forEach(([t,e])=>{Object.entries(e).forEach(gu(t))}),mu=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function vu(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||mu(t)&&i<0?js(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function wu(t){t.ontouchstart=null,t.ontouchmove=null}const Fs=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",js,{passive:!1}),yu=Fs(!0),xu=Fs();function $u(t){if(!t)throw Error("Could not run setup, an element must be provided");Ot.some(e=>e===t)||(Ot.length||(fu(),yu()),vu(t),Ot.push(t))}function ku(){Ot.forEach(wu),xu(),bu(),Ot=[]}var _u=Object.defineProperty,mt=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&_u(e,r,i),i};class rt extends Bs(j){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),$u(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),ku(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[Ee,W`
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
    `]}}mt([v({type:Boolean})],rt.prototype,"show");mt([v({type:String,attribute:"content-id"})],rt.prototype,"contentId");mt([v({type:Boolean,attribute:"ignore-backdrop-clicks"})],rt.prototype,"ignoreBackdropClicks");mt([Vt(".dialog-el")],rt.prototype,"dialogEl");mt([Vt(".dialog-inner-el")],rt.prototype,"dialogInnerEl");mt([Vt(".content-el")],rt.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",rt),customElements.define("w-modal-header",bt),customElements.define("w-modal-footer",Vd));const Su=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Eu=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Cu=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Au=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Ou=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Lu extends Ft(F){static styles=[F.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Ie(Eu,Au,Cu,Su,Ou),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=E._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=E._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return z([ue.button,ue.label,this.suggestion?ue.suggestion:ue.filter,this.canClose?ue.labelWithClose:ue.labelWithoutClose])}get _closeClasses(){return z([ue.button,ue.close,this.suggestion?ue.suggestion:ue.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${ue.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${ue.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${ue.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",Lu);const Tu=":host{box-sizing:border-box!important}:host *,:host *:before,:host *:after{box-sizing:inherit!important}";var Nu=Object.defineProperty,Hs=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Nu(e,r,i),i};class To extends j{constructor(){super(),this.#e=!1,this.initialReflectedProperties=new Map,this.customStates={set:(r,o)=>{this.internals?.states&&(o?this.internals.states.add(r):this.internals.states.delete(r))},has:r=>this.internals?.states?this.internals.states.has(r):!1};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);const e=this.constructor;for(const[r,o]of e.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof r=="string"&&this.customStates.set(`initial-${r}-${o.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Tu,...e].map(r=>typeof r=="string"?io(r):r)}#e;attributeChangedCallback(e,r,o){this.#e||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),this.#e=!0),super.attributeChangedCallback(e,r,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((r,o)=>{e.has(o)&&this[o]==null&&(this[o]=r)})}relayNativeEvent(e,r){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...r}))}}Hs([v()],To.prototype,"dir");Hs([v()],To.prototype,"lang");const Du=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}});class Pu extends Event{constructor(){super("w-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}var Bu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,vt=(t,e,r,o)=>{for(var i=o>1?void 0:o?Ru(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&Bu(e,r,i),i};class Le extends To{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Pu))},this.handleInteraction=e=>{const r=this.emittedEvents;r.includes(e.type)||r.push(e.type),r.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static{this.formAssociated=!0}static get validators(){return[Du()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const r of this.validators)if(r.observedAttributes)for(const o of r.observedAttributes)e.add(o);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const r=this.value;if(Array.isArray(r)){if(this.name){const o=new FormData;for(const i of r)o.append(this.name,i);this.setValue(o,o)}}else this.setValue(r,r)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const r=e[0],o=e[1];let i=e[2];i||(i=this.validationTarget),this.internals.setValidity(r,o,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,r=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!r),this.customStates.set("valid",r),this.customStates.set("user-invalid",!r&&o),this.customStates.set("user-valid",r&&o)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,r){this.value=e,r==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[r,o]=e;this.internals.setFormValue(r,o)}get allValidators(){const e=this.constructor.validators||[],r=this.validators||[];return[...e,...r]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const r={customError:!!this.customError},o=this.validationTarget||this.input||void 0;let i="";for(const s of e){const{isValid:n,message:l,invalidKeys:a}=s.checkValidity(this);n||(i||(i=l),a?.length>=0&&a.forEach(d=>r[d]=!0))}i||(i=this.validationMessage),this.setValidity(r,i,o)}}vt([v({reflect:!0})],Le.prototype,"name",2);vt([v({type:Boolean})],Le.prototype,"disabled",2);vt([v({state:!0,attribute:!1})],Le.prototype,"valueHasChanged",2);vt([v({state:!0,attribute:!1})],Le.prototype,"hasInteracted",2);vt([v({attribute:"custom-error",reflect:!0})],Le.prototype,"customError",2);vt([v({attribute:!1,state:!0,type:Object})],Le.prototype,"validity",1);const Mu=':host{color:var(--wa-form-control-value-color);display:inline-flex;flex-direction:row;align-items:top;font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);cursor:pointer;user-select:none;-webkit-user-select:none}:host(:focus){outline:none}[part~=label]{display:inline}[part~=hint]{margin-block-start:.5em}:host([appearance="default"]){.control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--wa-form-control-toggle-size, 2rem);height:var(--wa-form-control-toggle-size, 2rem);border-color:var(--wa-form-control-border-color, gray);border-radius:50%;border-style:var(--wa-form-control-border-style, solid);border-width:var(--wa-form-control-border-width, 1px);background-color:var(--wa-form-control-background-color, white);color:transparent;transition:background var(--wa-transition-normal, .3s),border-color var(--wa-transition-fast, .1s),border-width var(--wa-transition-normal, .3s),box-shadow var(--wa-transition-fast, .1s),color var(--wa-transition-fast, .1s);transition-timing-function:var(--wa-transition-easing, ease);margin-inline-end:.5em}}:host([appearance="clickable"]) .control{position:absolute;inset:0;height:100%;width:100%;cursor:pointer}:host(:state(checked)):not(:host([appearance="clickable"])) .control{border-color:var(--wa-form-control-activated-color, blue);background-color:var(--wa-form-control-background-color, white);border-width:.6rem}:host(:focus-visible) .control{outline:var(--wa-focus-ring, orange);outline-offset:var(--wa-focus-ring-offset, 2px)}:host(:state(disabled)){opacity:.5;cursor:not-allowed}:host([appearance="button"]){align-items:center;min-height:var(--wa-form-control-height);background-color:var(--wa-color-surface-default);border:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-radius:var(--wa-border-radius-m);padding:0 var(--wa-form-control-padding-inline);transition:background-color var(--wa-transition-fast),border-color var(--wa-transition-fast);.control{display:none}}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-first]){border-start-end-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-last]){border-start-start-radius:0;border-end-start-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-first]){border-end-start-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-last]){border-start-start-radius:0;border-start-end-radius:0}@media (hover: hover){:host([appearance="button"]:hover:not(:state(disabled),:state(checked))){background-color:color-mix(in srgb,var(--wa-color-surface-default) 95%,var(--wa-color-mix-hover))}}:host([appearance="button"]:focus-visible){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"]:state(checked)){border-color:var(--wa-form-control-activated-color);background-color:var(--wa-color-brand-fill-quiet)}:host([appearance="button"]:state(checked):focus-visible){outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"][data-wa-radio-horizontal]:not([data-wa-radio-first])){margin-inline-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"][data-wa-radio-vertical]:not([data-wa-radio-first])){margin-block-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"]:hover),:host([appearance="button"]:state(checked)){position:relative;z-index:1}:host([appearance="button"]:focus-visible){z-index:2}';var zu=Object.defineProperty,ot=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&zu(e,r,i),i};class je extends Le{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[Mu]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const r=this.disabled||this.forceDisabled;this.customStates.set("disabled",r),this.setAttribute("aria-disabled",r?"true":"false"),r?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `}}ot([Ht()],je.prototype,"checked");ot([Ht()],je.prototype,"forceDisabled");ot([v({reflect:!0})],je.prototype,"form");ot([v({reflect:!0})],je.prototype,"value");ot([v({reflect:!0})],je.prototype,"appearance");ot([v({reflect:!0})],je.prototype,"size");ot([v({type:Boolean})],je.prototype,"disabled");const Iu="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let ju=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Iu[r[t]&63];return e};function Fu(t=""){return`${t}${ju()}`}const Hu=':host{display:block}.form-control{position:relative;border:none;padding:0;margin:0}.label{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s);font-weight:700;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;cursor:pointer;padding-bottom:.4rem;color:var(--w-s-color-text);display:block}.radio-group-required .label:after{content:var(--wa-form-control-required-content);margin-inline-start:var(--wa-form-control-required-content-offset)}.button-group{display:flex}[part~=form-control-input]{display:flex;flex-direction:column;flex-wrap:wrap;gap:.75em}:host([orientation="horizontal"]) [part~=form-control-input]{flex-direction:row;gap:1em}[part~=hint]{margin-block-start:.5em}:host fieldset.has-radio-buttons{[part~=form-control-input]{gap:0}}',Vu=(t={})=>{let{validationElement:e,validationProperty:r}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),r||(r="value");const o={observedAttributes:["required"],message:e.validationMessage,checkValidity(i){const s={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[r]&&(s.message=typeof o.message=="function"?o.message(i):o.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return o};class Uu{constructor(e,...r){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=r}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const r=e;if(r.tagName.toLowerCase()==="w-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}var qu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,fe=(t,e,r,o)=>{for(var i=o>1?void 0:o?Wu(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&qu(e,r,i),i};class de extends Le{constructor(){super(),this.hasSlotController=new Uu(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const r=e.target.closest("w-radio");if(!r||r.disabled||r.forceDisabled||this.disabled)return;const o=this.value;this.value=r.value,r.checked=!0;const i=this.getAllRadios();for(const s of i)r!==s&&(s.checked=!1,s.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[Hu]}static get validators(){const e=[Vu({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:Fu("__w-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}static{this.shadowRootOptions={...Le.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();let r=!1;if(e.forEach((o,i)=>{o.appearance==="button"&&(r=!0),o.setAttribute("size",this.size),o.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),o.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),o.toggleAttribute("data-w-radio-first",i===0),o.toggleAttribute("data-w-radio-inner",i!==0&&i!==e.length-1),o.toggleAttribute("data-w-radio-last",i===e.length-1),o.forceDisabled=this.disabled}),this.hasRadioButtons=r,await Promise.all(e.map(async o=>{await o.updateComplete,!o.disabled&&o.value===this.value?o.checked=!0:o.checked=!1})),this.disabled)e.forEach(o=>{o.tabIndex=-1});else{const o=e.filter(s=>!s.disabled),i=o.find(s=>s.checked);o.length>0&&(i?o.forEach(s=>{s.tabIndex=s.checked?0:-1}):o.forEach((s,n)=>{s.tabIndex=n===0?0:-1})),e.filter(s=>s.disabled).forEach(s=>{s.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const r=this.getAllRadios().filter(a=>!a.disabled);if(r.length<=0)return;e.preventDefault();const o=this.value,i=r.find(a=>a.checked)??r[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let n=r.indexOf(i)+s;n||(n=0),n<0&&(n=r.length-1),n>r.length-1&&(n=0);const l=r.some(a=>a.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(a=>{a.checked=!1,l||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,l?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const r=this.getAllRadios(),o=r.find(n=>n.checked),i=r.find(n=>!n.disabled),s=o||i;s&&s.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,r=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=this.label?!0:!!e,i=this.hint?!0:!!r;return w`
      <fieldset
        part="form-control"
        class=${Zr({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o,"has-radio-buttons":this.hasRadioButtons})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}>
        <label
          part="form-control-label"
          id="label"
          class="label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}>
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Zr({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}fe([Ht()],de.prototype,"hasRadioButtons",2);fe([Vt("slot:not([name])")],de.prototype,"defaultSlot",2);fe([v()],de.prototype,"label",2);fe([v({attribute:"hint"})],de.prototype,"hint",2);fe([v({reflect:!0})],de.prototype,"name",2);fe([v({type:Boolean,reflect:!0})],de.prototype,"disabled",2);fe([v({reflect:!0})],de.prototype,"orientation",2);fe([Ht()],de.prototype,"value",1);fe([v({attribute:"value",reflect:!0})],de.prototype,"defaultValue",2);fe([v({reflect:!0})],de.prototype,"size",2);fe([v({type:Boolean,reflect:!0})],de.prototype,"required",2);fe([v({type:Boolean,attribute:"with-label"})],de.prototype,"withLabel",2);fe([v({type:Boolean,attribute:"with-hint"})],de.prototype,"withHint",2);customElements.get("w-radio")||(customElements.define("w-radio",je),customElements.define("w-radio-group",de));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xt(t,e,r){return t?e(t):r?.(t)}const Ju=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Yu=JSON.parse('{"select.label.optional":["(optional)"]}'),Qu=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),Xu=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Zu=JSON.parse('{"select.label.optional":["(valfritt)"]}');class Ku extends Ao(Ft(F)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[F.styles];constructor(){super(),Ie(Yu,Xu,Qu,Ju,Zu),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return z([Ce.base,!this.invalid&&!this.disabled&&!this.readOnly&&Ce.default,this.invalid&&Ce.invalid,this.disabled&&Ce.disabled,this.readOnly&&Ce.readOnly])}get#t(){return z([Tr.base,this.invalid?Tr.colorInvalid:Tr.color])}get#i(){return z([Ce.chevron,this.disabled&&Ce.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Ce.wrapper}">
      ${Xt(this.label,()=>w`<label class="${Jo.base}" for="${this.#r}">
            ${this.label}
            ${Xt(this.optional,()=>w`<span class="${Jo.optional}"
                  >${E._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Ce.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${J(this.#o)}"
          aria-invalid="${J(this.invalid)}"
          aria-errormessage="${J(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${fo(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Xt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",Ku);const Gu=W`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var eh=Object.defineProperty,Z=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&eh(e,r,i),i};const Ne={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},th={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Ur={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class Y extends Ao(j){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[Ee,Gu]}get _inputstyles(){return z([Ne.base,this._hasSuffix&&Ne.suffix,this._hasPrefix&&Ne.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Ne.default,this.invalid&&!this.disabled&&!this.readOnly&&Ne.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Ne.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Ne.readOnly])}get _helptextstyles(){return z([Ur.base,this.invalid?Ur.colorInvalid:Ur.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${th.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Ne.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputstyles}"
          type="${this.type}"
          min="${J(this.min)}"
          max="${J(this.max)}"
          size="${J(this.size)}"
          minlength="${J(this.minLength)}"
          maxlength="${J(this.maxLength)}"
          name="${J(this.name)}"
          pattern="${J(this.pattern)}"
          placeholder="${J(this.placeholder)}"
          value="${J(this.value)}"
          aria-describedby="${J(this._helpId)}"
          aria-errormessage="${J(this._error)}"
          aria-invalid="${J(this.invalid)}"
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
    `}}Z([v({type:Boolean,reflect:!0})],Y.prototype,"disabled");Z([v({type:Boolean,reflect:!0})],Y.prototype,"invalid");Z([v({type:String,reflect:!0})],Y.prototype,"id");Z([v({type:String,reflect:!0})],Y.prototype,"label");Z([v({type:String,reflect:!0})],Y.prototype,"helpText");Z([v({type:String,reflect:!0})],Y.prototype,"size");Z([v({type:Number,reflect:!0})],Y.prototype,"max");Z([v({type:Number,reflect:!0})],Y.prototype,"min");Z([v({type:Number,reflect:!0,attribute:"min-length"})],Y.prototype,"minLength");Z([v({type:Number,reflect:!0,attribute:"max-length"})],Y.prototype,"maxLength");Z([v({type:String,reflect:!0})],Y.prototype,"pattern");Z([v({type:String,reflect:!0})],Y.prototype,"placeholder");Z([v({type:Boolean,reflect:!0,attribute:"read-only"})],Y.prototype,"readOnly");Z([v({type:Boolean,reflect:!0})],Y.prototype,"required");Z([v({type:String,reflect:!0})],Y.prototype,"type");Z([v({type:String,reflect:!0})],Y.prototype,"value");Z([v({type:String,reflect:!0})],Y.prototype,"name");Z([v({type:Boolean})],Y.prototype,"_hasPrefix");Z([v({type:Boolean})],Y.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",Y);const Cr=typeof window<"u";function rh(t,e){if(!Cr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function oh(t){return Cr?customElements.get("w-toast-container").init().del(t):void 0}function ih(t,e){if(!Cr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:sh}=hn,vi=()=>document.createComment(""),St=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=o.insertBefore(vi(),i),n=o.insertBefore(vi(),i);r=new sh(s,n,t,t.options)}else{const s=r._$AB.nextSibling,n=r._$AM,l=n!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==n._$AU&&r._$AP(a)}if(s!==i||l){let a=r._$AA;for(;a!==s;){const d=a.nextSibling;o.insertBefore(a,i),a=d}}}return r},qe=(t,e,r=t)=>(t._$AI(e,r),t),nh={},ah=(t,e=nh)=>t._$AH=e,lh=t=>t._$AH,qr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},ch=ho(class extends po{constructor(t){if(super(t),t.type!==uo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],s=[];let n=0;for(const l of t)i[n]=o?o(l,n):n,s[n]=r(l,n),n++;return{values:s,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=lh(t),{values:s,keys:n}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=n,s;const l=this.ut??=[],a=[];let d,h,c=0,f=i.length-1,u=0,g=s.length-1;for(;c<=f&&u<=g;)if(i[c]===null)c++;else if(i[f]===null)f--;else if(l[c]===n[u])a[u]=qe(i[c],s[u]),c++,u++;else if(l[f]===n[g])a[g]=qe(i[f],s[g]),f--,g--;else if(l[c]===n[g])a[g]=qe(i[c],s[g]),St(t,a[g+1],i[c]),c++,g--;else if(l[f]===n[u])a[u]=qe(i[f],s[u]),St(t,i[c],i[f]),f--,u++;else if(d===void 0&&(d=wi(n,u,g),h=wi(l,c,f)),d.has(l[c]))if(d.has(l[f])){const p=h.get(n[u]),m=p!==void 0?i[p]:null;if(m===null){const S=St(t,i[c]);qe(S,s[u]),a[u]=S}else a[u]=qe(m,s[u]),St(t,i[c],m),i[p]=null;u++}else qr(i[f]),f--;else qr(i[c]),c++;for(;u<=g;){const p=St(t,a[g+1]);qe(p,s[u]),a[u++]=p}for(;c<=f;){const p=i[c++];p!==null&&qr(p)}return this.ut=n,ah(t,a),Oe}});class Vs extends F{static styles=[F.styles,W`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const s=this.renderRoot.querySelector(`#${i}`);o.push(s.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Lr.wrapper}">
        <div class="${Lr.base}" id="w-toast-container-list">
          ${ch(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Lr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",Vs);const No=typeof window<"u";let Us=!0;if(No){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Us=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const qs=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},Ws=t=>{const e=Us?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},dh=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},uh=t=>()=>{t&&t()},Js=(t,e)=>{const r=(()=>{if(!e)return new Promise(s=>{e=s})})(),o=dh(t,e);qs(t),t.style.height="auto";let i=t.scrollHeight;if(No&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",Ws(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},Ys=(t,e)=>{const r=(()=>{if(!e)return new Promise(s=>{e=s})})(),o=uh(e);qs(t);let i=t.scrollHeight;if(No&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",Ws(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},hh=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),ph=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),fh=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),gh=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),bh=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),De={success:"success",error:"error",warning:"warning"};class mh extends F{static styles=[F.styles,W`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Ie(ph,gh,fh,hh,bh),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&Js(this._wrapper,()=>this._expanded=!0)}get#e(){return z([me.base,this.type===De.success&&me.positive,this.type===De.warning&&me.warning,this.type===De.error&&me.negative])}get#t(){return z([me.iconBase,this.type===De.success&&me.iconPositive,this.type===De.warning&&me.iconWarning,this.type===De.error&&me.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===De.warning}get _error(){return this.type===De.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?E._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?E._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):E._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?Ys(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${me.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${me.content}">
          <p>${this.text}</p>
        </div>
        ${Xt(this.canclose===!0,()=>w`
            <button class="${me.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",mh);class vh extends F{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&Js(this._wrapper),!this.show&&!this._removeElement&&Ys(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[F.styles,W`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${J(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",vh);class wh extends F{static properties={level:{type:Number}};static styles=[F.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?fo(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",wh);var yh={},xh=JSON.parse('{"icon.title.bag":["Veske"]}'),$h=JSON.parse('{"icon.title.bag":["Handbag"]}'),kh=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),_h=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),Sh=JSON.parse('{"icon.title.bag":["Handväska"]}'),Qs=["en","nb","fi","da","sv"],Xs="en",Eh=()=>{var t;let e;switch((t=process==null?void 0:yh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Zs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xs},Wr=t=>Qs.find(e=>t===e||t.toLowerCase().includes(e))||Zs();function Ch(){var t;if(typeof window>"u"){const e=Eh();return Wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Zs();return Qs.includes(e)?Wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xs}}var Ah=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Oh=(t,e,r,o,i)=>{const s=Ch(),n=Ah(s,t,e,r,o,i);E.load(s,n),E.activate(s)};Oh($h,xh,kh,_h,Sh);var Lh=class extends j{render(){const t=E.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return Se`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${_e(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",Lh);Cr&&(window.WarpToastContainer=Vs,window.toast=rh,window.updateToast=ih,window.removeToast=oh);const Th={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Checkbox",href:"/elements/checkbox.html"},{title:"Radio",href:"/elements/radio.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Nh extends F{static styles=[F.styles,W`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Th;return w`
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
      `)}}customElements.define("sidebar-element",Nh);
