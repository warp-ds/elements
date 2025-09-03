(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=globalThis,no=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,io=Symbol(),zo=new WeakMap;let $n=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==io)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(no&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=zo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&zo.set(r,e))}return e}toString(){return this.cssText}};const kn=t=>new $n(typeof t=="string"?t:t+"",void 0,io),F=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new $n(r,t,io)},ps=(t,e)=>{if(no)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),n=Wt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},Ro=no?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return kn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:gs,defineProperty:fs,getOwnPropertyDescriptor:bs,getOwnPropertyNames:vs,getOwnPropertySymbols:ms,getPrototypeOf:ws}=Object,gr=globalThis,Io=gr.trustedTypes,ys=Io?Io.emptyScript:"",xs=gr.reactiveElementPolyfillSupport,$t=(t,e)=>t,qt={toAttribute(t,e){switch(e){case Boolean:t=t?ys:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},so=(t,e)=>!gs(t,e),jo={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:so};Symbol.metadata??=Symbol("metadata"),gr.litPropertyMetadata??=new WeakMap;let Ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=jo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&fs(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){const{get:n,set:i}=bs(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return n?.call(this)},set(s){const l=n?.call(this);i.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jo}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;const e=ws(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){const r=this.properties,o=[...vs(r),...ms(r)];for(const n of o)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)r.unshift(Ro(n))}else e!==void 0&&r.push(Ro(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ps(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:qt).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:qt;this._$Em=n,this[n]=s.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??so)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Ue[$t("elementProperties")]=new Map,Ue[$t("finalized")]=new Map,xs?.({ReactiveElement:Ue}),(gr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=globalThis,Yt=ao.trustedTypes,Fo=Yt?Yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,lo="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,co="?"+Ae,$s=`<${co}>`,qe=document,St=()=>qe.createComment(""),Et=t=>t===null||typeof t!="object"&&typeof t!="function",uo=Array.isArray,_n=t=>uo(t)||typeof t?.[Symbol.iterator]=="function",Ar=`[ 	
\f\r]`,ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ho=/-->/g,Uo=/>/g,Ie=RegExp(`>|${Ar}(?:([^\\s"'>=/]+)(${Ar}*=${Ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jo=/'/g,Wo=/"/g,Sn=/^(?:script|style|textarea|title)$/i,ks=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=ks(1),Oe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Vo=new WeakMap,Je=qe.createTreeWalker(qe,129);function En(t,e){if(!uo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fo!==void 0?Fo.createHTML(e):e}const Cn=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=ft;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===ft?h[1]==="!--"?s=Ho:h[1]!==void 0?s=Uo:h[2]!==void 0?(Sn.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=Ie):h[3]!==void 0&&(s=Ie):s===Ie?h[0]===">"?(s=n??ft,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Ie:h[3]==='"'?Wo:Jo):s===Wo||s===Jo?s=Ie:s===Ho||s===Uo?s=ft:(s=Ie,n=void 0);const d=s===Ie&&t[l+1].startsWith("/>")?" ":"";i+=s===ft?a+$s:c>=0?(o.push(u),a.slice(0,c)+lo+a.slice(c)+Ae+d):a+Ae+(c===-2?l:d)}return[En(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Xr=class An{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Cn(e,r);if(this.el=An.createElement(u,o),Je.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Je.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(lo)){const g=h[s++],d=n.getAttribute(c).split(Ae),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:f[2],strings:d,ctor:f[1]==="."?Nn:f[1]==="?"?Tn:f[1]==="@"?Pn:Dt}),n.removeAttribute(c)}else c.startsWith(Ae)&&(a.push({type:6,index:i}),n.removeAttribute(c));if(Sn.test(n.tagName)){const c=n.textContent.split(Ae),g=c.length-1;if(g>0){n.textContent=Yt?Yt.emptyScript:"";for(let d=0;d<g;d++)n.append(c[d],St()),Je.nextNode(),a.push({type:2,index:++i});n.append(c[g],St())}}}else if(n.nodeType===8)if(n.data===co)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(Ae,c+1))!==-1;)a.push({type:7,index:i}),c+=Ae.length-1}i++}}static createElement(e,r){const o=qe.createElement("template");return o.innerHTML=e,o}};function Ye(t,e,r=t,o){if(e===Oe)return e;let n=o!==void 0?r.o?.[o]:r.l;const i=Et(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=n:r.l=n),n!==void 0&&(e=Ye(t,n._$AS(t,e.values),n,o)),e}class On{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??qe).importNode(r,!0);Je.currentNode=n;let i=Je.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new fr(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new Dn(i,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(i=Je.nextNode(),s++)}return Je.currentNode=qe,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let fr=class Ln{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,n){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ye(this,e,r),Et(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_n(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&Et(this._$AH)?this._$AA.nextSibling.data=e:this.T(qe.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Xr.createElement(En(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new On(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=Vo.get(e.strings);return r===void 0&&Vo.set(e.strings,r=new Xr(e)),r}k(e){uo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new Ln(this.O(St()),this.O(St()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=Ye(this,e,r,0),s=!Et(e)||e!==this._$AH&&e!==Oe,s&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=Ye(this,l[o+a],r,a),u===Oe&&(u=this._$AH[a]),s||=!Et(u)||u!==this._$AH[a],u===I?e=I:e!==I&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!n&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nn extends Dt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Tn extends Dt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class Pn extends Dt{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=Ye(this,e,r,0)??I)===Oe)return;const o=this._$AH,n=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==I&&(o===I||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Dn{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}}const _s={M:lo,P:Ae,A:co,C:1,L:Cn,R:On,D:_n,V:Ye,I:fr,H:Dt,N:Tn,U:Pn,B:Nn,F:Dn},Ss=ao.litHtmlPolyfillSupport;Ss?.(Xr,fr),(ao.litHtmlVersions??=[]).push("3.2.0");const Es=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new fr(e.insertBefore(St(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Es(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Oe}};D._$litElement$=!0,D.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:D});const Cs=globalThis.litElementPolyfillSupport;Cs?.({LitElement:D});(globalThis.litElementVersions??=[]).push("4.1.0");function As(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const qo=String.raw`[A-Za-z][^/\s>]*`,Os=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Ls=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Bn=String.raw`${Os}|${Ls}`,Ns=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ts=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Ps=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Ds=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Bs=String.raw`${Ns}|${Ts}|${Ps}`,Ms=String.raw`(?<attrName>${Ds})(?:\s*=\s*(?:${Bs}))?`,zs=String.raw`${Bn}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Mn=String.raw`(?<attrSpace>\s*)(?:${Ms}|(?<attrText>${zs}))`,Rs={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${qo})(?<attrs>(?:${Mn})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${qo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Bn}|['"]`,wildcard:String.raw`.`},Is=Object.entries(Rs).map(([t,e])=>`(?<${t}>${e})`).join("|");function*js(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const Fs=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Ct(t,e="  ",r=80){const o=new RegExp(Is,"gys"),n=new RegExp(Mn,"gy"),i=[];let s=null,l=0,a=0,u="",h=0,c="";const g=()=>{if(c&&c!=`
`){const E=u.indexOf(`
`),A=E==-1?u.length:E;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",m=`${c}${p}${u}`;if(m){const E=m.lastIndexOf(`
`);E==-1?a+=m.length:a=m.length-E-1,i.push(m)}u=c=""},d=(...p)=>{for(const m of p)!s&&/^\s+$/.test(m)?(g(),c=m):(u||(h=l),u+=m)};for(const p of js(o,t)){if(Ct.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const m=p.groups.endTagName.toLowerCase();m==s&&(s=null),s||(--l,d(`</${m}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const m=p.groups.startTagName.toLowerCase();if(d(`<${m}`),++l,p.groups.attrs){let{lastIndex:A}=n,C,M;for(;C=n.exec(p.groups.attrs);){if({lastIndex:A}=n,Ct.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(C.groups.attrText)):((C.groups.attrSpace||!M?.groups.attrText)&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),M=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!p.groups.closingSlash;d(E?" />":">"),E||Fs.has(m)?--l:["pre","textarea","script","style"].includes(m)&&(s=m)}}g();let f=!1;for(;/^\s+$/.test(i[i.length-1]);){const p=i.pop();/\n/.test(p)&&(f=!0)}return f&&i.push(`
`),i.join("")}Ct.default=Ct;var Hs=Ct;const Us=As(Hs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},po=t=>(...e)=>({_$litDirective$:t,values:e});let go=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zr extends go{constructor(e){if(super(e),this.it=I,e.type!==ho.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===Oe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Zr.directiveName="unsafeHTML",Zr.resultType=1;const fo=po(Zr);class Js extends D{static styles=F`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(n=>n.nodeType===Node.TEXT_NODE?n.textContent:n.outerHTML).join("").trim();r=Us(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${fo(this.source)}</code></pre>`}}customElements.define("syntax-highlight",Js);var j=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?j.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(n){return o[n]?n:""}):"")},[]).join(" ")};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws={attribute:!0,type:String,converter:qt,reflect:!1,hasChanged:so},Vs=(t=Ws,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function v(t){return(e,r)=>typeof r=="object"?Vs(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qs(t){return v({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function br(t,e){return(r,o,n)=>{const i=s=>s.renderRoot?.querySelector(t)??null;return Ys(r,o,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=t=>t??I,ae=F`
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
`;F`*, :before, :after {
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
        `;const Qs=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-text{color:var(--w-s-color-text)}.w-40{width:4rem}.w-max{width:max-content}.pb-0{padding-bottom:0}.pl-12{padding-left:1.2rem}.pr-12{padding-right:1.2rem}.cursor-default{cursor:default}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zn=Symbol.for(""),Xs=t=>{if(t?.r===zn)return t?._$litStatic$},pe=t=>({_$litStatic$:t,r:zn}),Yo=new Map,Zs=t=>(e,...r)=>{const o=r.length;let n,i;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(i=r[u],(n=Xs(i))!==void 0);)a+=n+e[++u],h=!0;u!==o&&l.push(i),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=Yo.get(c))===void 0&&(s.raw=s,Yo.set(c,e=s)),r=l}return t(e,...r)},ge=Zs(w);var bo={},Rn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Rn);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Rn;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,f,p){const m=r(d);if(Number.isNaN(m)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(f));return m}function n(d){const f=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function i(d,f){const p=o(d,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const m=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,m)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=d.slice(1,-1),p=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(m){throw m instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):m}}function a(d,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(d,f=!1){return d.replace(c,function(p,m,E,A,C,M,$,O,L){if(m!==void 0)return"\\";if(E!==void 0)return n(E);if(A!==void 0)return l(A);if(C!==void 0)return i(C,M);if($!==void 0)return i($);if(O==="0")return"\0";if(O!==void 0)return a(O,!f);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(bo);const Me=t=>typeof t=="string",Ks=t=>typeof t=="function",Qo=new Map,In="en";function vo(t){return[...Array.isArray(t)?t:[t],In]}function mo(t,e,r){const o=vo(t);r||(r="default");let n;if(typeof r=="string")switch(n={day:"numeric",month:"short",year:"numeric"},r){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric";break}else n=r;return Qt(()=>Xt("date",o,r),()=>new Intl.DateTimeFormat(o,n)).format(Me(e)?new Date(e):e)}function Gs(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return mo(t,e,o)}function Kr(t,e,r){const o=vo(t);return Qt(()=>Xt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Xo(t,e,r,{offset:o=0,...n}){const i=vo(t),s=e?Qt(()=>Xt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Qt(()=>Xt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function Qt(t,e){const r=t();let o=Qo.get(r);return o||(o=e(),Qo.set(r,o)),o}function Xt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const jn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Fn="%__lingui_octothorpe__%",ea=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s],i=(s,l)=>{const a=Object.keys(r).length?n("number"):void 0,u=Kr(o,s,a);return l.replace(new RegExp(Fn,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Xo(o,!1,s,l);return i(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Xo(o,!0,s,l);return i(s-a,u)},select:ta,number:(s,l)=>Kr(o,s,n(l)||{style:l}),date:(s,l)=>mo(o,s,n(l)||l),time:(s,l)=>Gs(o,s,n(l)||l)}},ta=(t,e)=>e[t]??e.other;function ra(t,e,r){return(o={},n)=>{const i=ea(e,r,n),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Fn;if(Me(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let m;if(d){const E=i[d];m=E(o[g],p)}else m=o[g];return m==null?h:h+m},""):a,l=s(t);return Me(l)&&jn.test(l)?bo.unraw(l):Me(l)?l:l?String(l):""}}var oa=Object.defineProperty,na=(t,e,r)=>e in t?oa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ia=(t,e,r)=>(na(t,e+"",r),r);let sa=class{constructor(){ia(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var aa=Object.defineProperty,la=(t,e,r)=>e in t?aa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,je=(t,e,r)=>(la(t,typeof e!="symbol"?e+"":e,r),r);let ca=class extends sa{constructor(e){super(),je(this,"_locale",""),je(this,"_locales"),je(this,"_localeData",{}),je(this,"_messages",{}),je(this,"_missing"),je(this,"_messageCompiler"),je(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??In,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let n=o?.message;e||(e=""),Me(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,l=this._missing;if(l&&s)return Ks(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=i||n||e;return Me(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Me(a)&&jn.test(a)?JSON.parse(`"${a}"`):Me(a)?a:ra(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return mo(this._locales||this._locale,e,r)}number(e,r){return Kr(this._locales||this._locale,e,r)}};function da(t={}){return new ca(t)}const x=da();var ua={},ha=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),pa=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),ga=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),fa=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),ba=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Hn=["en","nb","fi","da","sv"],Un="en",va=()=>{var t;let e;switch((t=process==null?void 0:ua)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Jn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Un},Or=t=>Hn.find(e=>t===e||t.toLowerCase().includes(e))||Jn();function ma(){var t;if(typeof window>"u"){const e=va();return Or(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Jn();return Hn.includes(e)?Or(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Or(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Un}}var wa=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ya=(t,e,r,o,n)=>{const i=ma(),s=wa(i,t,e,r,o,n);x.load(i,s),x.activate(i)};ya(pa,ha,ga,fa,ba);var xa=class extends D{render(){const t=x.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",xa);var $a={},ka=JSON.parse('{"icon.title.close":["Kryss"]}'),_a=JSON.parse('{"icon.title.close":["Cross"]}'),Sa=JSON.parse('{"icon.title.close":["Rasti"]}'),Ea=JSON.parse('{"icon.title.close":["Kryds"]}'),Ca=JSON.parse('{"icon.title.close":["Kryss"]}'),Wn=["en","nb","fi","da","sv"],Vn="en",Aa=()=>{var t;let e;switch((t=process==null?void 0:$a)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},qn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Vn},Lr=t=>Wn.find(e=>t===e||t.toLowerCase().includes(e))||qn();function Oa(){var t;if(typeof window>"u"){const e=Aa();return Lr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=qn();return Wn.includes(e)?Lr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Lr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Vn}}var La=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Na=(t,e,r,o,n)=>{const i=Oa(),s=La(i,t,e,r,o,n);x.load(i,s),x.activate(i)};Na(_a,ka,Sa,Ea,Ca);var Ta=class extends D{render(){const t=x.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Ta);var Pa=Object.defineProperty,vr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Pa(e,r,n),n};const Yn="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",Da={wrapper:Yn+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Ba={wrapper:Yn+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"};class Bt extends D{constructor(){super(...arguments),this.clear=!1,this.search=!1}static{this.styles=[ae,Qs]}get _classBase(){return this.slot==="suffix"?Da:Ba}get _classes(){return j([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}vr([v({attribute:"aria-label"})],Bt.prototype,"ariaLabel");vr([v({type:Boolean})],Bt.prototype,"clear");vr([v({type:Boolean})],Bt.prototype,"search");vr([v()],Bt.prototype,"label");customElements.get("w-affix")||customElements.define("w-affix",Bt);var Ma={},za=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),Ra=JSON.parse('{"icon.title.info":["Information circle"]}'),Ia=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),ja=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Fa=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Qn=["en","nb","fi","da","sv"],Xn="en",Ha=()=>{var t;let e;switch((t=process==null?void 0:Ma)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Zn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xn},Nr=t=>Qn.find(e=>t===e||t.toLowerCase().includes(e))||Zn();function Ua(){var t;if(typeof window>"u"){const e=Ha();return Nr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Zn();return Qn.includes(e)?Nr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Nr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xn}}var Ja=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Wa=(t,e,r,o,n)=>{const i=Ua(),s=Ja(i,t,e,r,o,n);x.load(i,s),x.activate(i)};Wa(Ra,za,Ia,ja,Fa);var Va=class extends D{render(){const t=x.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",Va);var qa={},Ya=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Qa=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),Xa=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),Za=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),Ka=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),Kn=["en","nb","fi","da","sv"],Gn="en",Ga=()=>{var t;let e;switch((t=process==null?void 0:qa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ei=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Gn},Tr=t=>Kn.find(e=>t===e||t.toLowerCase().includes(e))||ei();function el(){var t;if(typeof window>"u"){const e=Ga();return Tr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ei();return Kn.includes(e)?Tr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Tr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Gn}}var tl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,rl=(t,e,r,o,n)=>{const i=el(),s=tl(i,t,e,r,o,n);x.load(i,s),x.activate(i)};rl(Qa,Ya,Xa,Za,Ka);var ol=class extends D{render(){const t=x.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",ol);var nl={},il=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),sl=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),al=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),ll=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),cl=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),ti=["en","nb","fi","da","sv"],ri="en",dl=()=>{var t;let e;switch((t=process==null?void 0:nl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},oi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ri},Pr=t=>ti.find(e=>t===e||t.toLowerCase().includes(e))||oi();function ul(){var t;if(typeof window>"u"){const e=dl();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=oi();return ti.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ri}}var hl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,pl=(t,e,r,o,n)=>{const i=ul(),s=hl(i,t,e,r,o,n);x.load(i,s),x.activate(i)};pl(sl,il,al,ll,cl);var gl=class extends D{render(){const t=x.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",gl);var fl={},bl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),vl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),ml=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),wl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),yl=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),ni=["en","nb","fi","da","sv"],ii="en",xl=()=>{var t;let e;switch((t=process==null?void 0:fl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},si=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ii},Dr=t=>ni.find(e=>t===e||t.toLowerCase().includes(e))||si();function $l(){var t;if(typeof window>"u"){const e=xl();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=si();return ni.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ii}}var kl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,_l=(t,e,r,o,n)=>{const i=$l(),s=kl(i,t,e,r,o,n);x.load(i,s),x.activate(i)};_l(vl,bl,ml,wl,yl);var Sl=class extends D{render(){const t=x.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",Sl);const El=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Cl=Object.defineProperty,wo=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Cl(e,r,n),n};const bt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},vt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class mr extends D{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!vt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return j([bt.wrapper,bt[this.variant]])}get _iconClasses(){const e=bt[`${this.variant}Icon`];return j([bt.icon,e])}static{this.styles=[ae,El,F`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===vt.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===vt.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===vt.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===vt.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${bt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}wo([v({reflect:!0})],mr.prototype,"variant");wo([v({type:Boolean,reflect:!0})],mr.prototype,"show");wo([v({reflect:!0})],mr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",mr);const Al=["top","right","bottom","left"],Qe=Math.min,be=Math.max,Zt=Math.round,Se=t=>({x:t,y:t}),Ol={left:"right",right:"left",bottom:"top",top:"bottom"},Ll={start:"end",end:"start"};function Gr(t,e,r){return be(t,Qe(e,r))}function Ke(t,e){return typeof t=="function"?t(e):t}function ze(t){return t.split("-")[0]}function dt(t){return t.split("-")[1]}function ai(t){return t==="x"?"y":"x"}function yo(t){return t==="y"?"height":"width"}function Xe(t){return["top","bottom"].includes(ze(t))?"y":"x"}function xo(t){return ai(Xe(t))}function Nl(t,e,r){r===void 0&&(r=!1);const o=dt(t),n=xo(t),i=yo(n);let s=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Kt(s)),[s,Kt(s)]}function Tl(t){const e=Kt(t);return[eo(t),e,eo(e)]}function eo(t){return t.replace(/start|end/g,e=>Ll[e])}function Pl(t,e,r){const o=["left","right"],n=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?n:o:e?o:n;case"left":case"right":return e?i:s;default:return[]}}function Dl(t,e,r,o){const n=dt(t);let i=Pl(ze(t),r==="start",o);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(eo)))),i}function Kt(t){return t.replace(/left|right|bottom|top/g,e=>Ol[e])}function Bl(t){return{top:0,right:0,bottom:0,left:0,...t}}function li(t){return typeof t!="number"?Bl(t):{top:t,right:t,bottom:t,left:t}}function Gt(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function Zo(t,e,r){let{reference:o,floating:n}=t;const i=Xe(e),s=xo(e),l=yo(s),a=ze(e),u=i==="y",h=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2,g=o[l]/2-n[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-n.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-n.width,y:c};break;default:d={x:o.x,y:o.y}}switch(dt(e)){case"start":d[s]-=g*(r&&u?-1:1);break;case"end":d[s]+=g*(r&&u?-1:1);break}return d}const Ml=async(t,e,r)=>{const{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:s}=r,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:c}=Zo(u,o,a),g=o,d={},f=0;for(let p=0;p<l.length;p++){const{name:m,fn:E}=l[p],{x:A,y:C,data:M,reset:$}=await E({x:h,y:c,initialPlacement:o,placement:g,strategy:n,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=A??h,c=C??c,d={...d,[m]:{...d[m],...M}},$&&f<=50&&(f++,typeof $=="object"&&($.placement&&(g=$.placement),$.rects&&(u=$.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):$.rects),{x:h,y:c}=Zo(u,g,a)),p=-1)}return{x:h,y:c,placement:g,strategy:n,middlewareData:d}};async function At(t,e){var r;e===void 0&&(e={});const{x:o,y:n,platform:i,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:d=0}=Ke(e,t),f=li(d),m=l[g?c==="floating"?"reference":"floating":c],E=Gt(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(m)))==null||r?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),M=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},$=Gt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(E.top-$.top+f.top)/M.y,bottom:($.bottom-E.bottom+f.bottom)/M.y,left:(E.left-$.left+f.left)/M.x,right:($.right-E.right+f.right)/M.x}}const zl=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:n,rects:i,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ke(t,e)||{};if(u==null)return{};const c=li(h),g={x:r,y:o},d=xo(n),f=yo(d),p=await s.getDimensions(u),m=d==="y",E=m?"top":"left",A=m?"bottom":"right",C=m?"clientHeight":"clientWidth",M=i.reference[f]+i.reference[d]-g[d]-i.floating[f],$=g[d]-i.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=O?O[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(O)))&&(L=l.floating[C]||i.floating[f]);const z=M/2-$/2,H=L/2-p[f]/2-1,J=Qe(c[E],H),Z=Qe(c[A],H),U=J,le=L-p[f]-Z,B=L/2-p[f]/2+z,G=Gr(U,B,le),Y=!a.arrow&&dt(n)!=null&&B!==G&&i.reference[f]/2-(B<U?J:Z)-p[f]/2<0,ne=Y?B<U?B-U:B-le:0;return{[d]:g[d]+ne,data:{[d]:G,centerOffset:B-G-ne,...Y&&{alignmentOffset:ne}},reset:Y}}}),Rl=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:n,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...m}=Ke(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const E=ze(n),A=Xe(l),C=ze(l)===l,M=await(a.isRTL==null?void 0:a.isRTL(u.floating)),$=g||(C||!p?[Kt(l)]:Tl(l)),O=f!=="none";!g&&O&&$.push(...Dl(l,p,f,M));const L=[l,...$],z=await At(e,m),H=[];let J=((o=i.flip)==null?void 0:o.overflows)||[];if(h&&H.push(z[E]),c){const B=Nl(n,s,M);H.push(z[B[0]],z[B[1]])}if(J=[...J,{placement:n,overflows:H}],!H.every(B=>B<=0)){var Z,U;const B=(((Z=i.flip)==null?void 0:Z.index)||0)+1,G=L[B];if(G)return{data:{index:B,overflows:J},reset:{placement:G}};let Y=(U=J.filter(ne=>ne.overflows[0]<=0).sort((ne,ee)=>ne.overflows[1]-ee.overflows[1])[0])==null?void 0:U.placement;if(!Y)switch(d){case"bestFit":{var le;const ne=(le=J.filter(ee=>{if(O){const ie=Xe(ee.placement);return ie===A||ie==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ie=>ie>0).reduce((ie,et)=>ie+et,0)]).sort((ee,ie)=>ee[1]-ie[1])[0])==null?void 0:le[0];ne&&(Y=ne);break}case"initialPlacement":Y=l;break}if(n!==Y)return{reset:{placement:Y}}}return{}}}};function Ko(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Go(t){return Al.some(e=>t[e]>=0)}const Il=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...n}=Ke(t,e);switch(o){case"referenceHidden":{const i=await At(e,{...n,elementContext:"reference"}),s=Ko(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Go(s)}}}case"escaped":{const i=await At(e,{...n,altBoundary:!0}),s=Ko(i,r.floating);return{data:{escapedOffsets:s,escaped:Go(s)}}}default:return{}}}}};async function jl(t,e){const{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=ze(r),l=dt(r),a=Xe(r)==="y",u=["left","top"].includes(s)?-1:1,h=i&&a?-1:1,c=Ke(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(d=l==="end"?f*-1:f),a?{x:d*h,y:g*u}:{x:g*u,y:d*h}}const Fl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:n,y:i,placement:s,middlewareData:l}=e,a=await jl(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:n+a.x,y:i+a.y,data:{...a,placement:s}}}}},Hl=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:m=>{let{x:E,y:A}=m;return{x:E,y:A}}},...a}=Ke(t,e),u={x:r,y:o},h=await At(e,a),c=Xe(ze(n)),g=ai(c);let d=u[g],f=u[c];if(i){const m=g==="y"?"top":"left",E=g==="y"?"bottom":"right",A=d+h[m],C=d-h[E];d=Gr(A,d,C)}if(s){const m=c==="y"?"top":"left",E=c==="y"?"bottom":"right",A=f+h[m],C=f-h[E];f=Gr(A,f,C)}const p=l.fn({...e,[g]:d,[c]:f});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[g]:i,[c]:s}}}}}},Ul=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:n,rects:i,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ke(t,e),h=await At(e,u),c=ze(n),g=dt(n),d=Xe(n)==="y",{width:f,height:p}=i.floating;let m,E;c==="top"||c==="bottom"?(m=c,E=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(E=c,m=g==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=f-h.left-h.right,M=Qe(p-h[m],A),$=Qe(f-h[E],C),O=!e.middlewareData.shift;let L=M,z=$;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!g){const J=be(h.left,0),Z=be(h.right,0),U=be(h.top,0),le=be(h.bottom,0);d?z=f-2*(J!==0||Z!==0?J+Z:be(h.left,h.right)):L=p-2*(U!==0||le!==0?U+le:be(h.top,h.bottom))}await a({...e,availableWidth:z,availableHeight:L});const H=await s.getDimensions(l.floating);return f!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<"u"}function ut(t){return ci(t)?(t.nodeName||"").toLowerCase():"#document"}function he(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Le(t){var e;return(e=(ci(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ci(t){return wr()?t instanceof Node||t instanceof he(t).Node:!1}function ye(t){return wr()?t instanceof Element||t instanceof he(t).Element:!1}function Ee(t){return wr()?t instanceof HTMLElement||t instanceof he(t).HTMLElement:!1}function en(t){return!wr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof he(t).ShadowRoot}function Mt(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=xe(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(n)}function Jl(t){return["table","td","th"].includes(ut(t))}function yr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function $o(t){const e=ko(),r=ye(t)?xe(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Wl(t){let e=Re(t);for(;Ee(e)&&!at(e);){if($o(e))return e;if(yr(e))return null;e=Re(e)}return null}function ko(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function at(t){return["html","body","#document"].includes(ut(t))}function xe(t){return he(t).getComputedStyle(t)}function xr(t){return ye(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Re(t){if(ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||en(t)&&t.host||Le(t);return en(e)?e.host:e}function di(t){const e=Re(t);return at(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ee(e)&&Mt(e)?e:di(e)}function to(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=di(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=he(n);if(i){const l=ro(s);return e.concat(s,s.visualViewport||[],Mt(n)?n:[],l&&r?to(l):[])}return e.concat(n,to(n,[],r))}function ro(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ui(t){const e=xe(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=Ee(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,l=Zt(r)!==i||Zt(o)!==s;return l&&(r=i,o=s),{width:r,height:o,$:l}}function hi(t){return ye(t)?t:t.contextElement}function st(t){const e=hi(t);if(!Ee(e))return Se(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=ui(e);let s=(i?Zt(r.width):r.width)/o,l=(i?Zt(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Vl=Se(0);function pi(t){const e=he(t);return!ko()||!e.visualViewport?Vl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ql(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==he(t)?!1:e}function Ot(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),i=hi(t);let s=Se(1);e&&(o?ye(o)&&(s=st(o)):s=st(t));const l=ql(i,r,o)?pi(i):Se(0);let a=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,h=n.width/s.x,c=n.height/s.y;if(i){const g=he(i),d=o&&ye(o)?he(o):o;let f=g,p=ro(f);for(;p&&o&&d!==f;){const m=st(p),E=p.getBoundingClientRect(),A=xe(p),C=E.left+(p.clientLeft+parseFloat(A.paddingLeft))*m.x,M=E.top+(p.clientTop+parseFloat(A.paddingTop))*m.y;a*=m.x,u*=m.y,h*=m.x,c*=m.y,a+=C,u+=M,f=he(p),p=ro(f)}}return Gt({width:h,height:c,x:a,y:u})}function _o(t,e){const r=xr(t).scrollLeft;return e?e.left+r:Ot(Le(t)).left+r}function gi(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(r?0:_o(t,o)),i=o.top+e.scrollTop;return{x:n,y:i}}function Yl(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t;const i=n==="fixed",s=Le(o),l=e?yr(e.floating):!1;if(o===s||l&&i)return r;let a={scrollLeft:0,scrollTop:0},u=Se(1);const h=Se(0),c=Ee(o);if((c||!c&&!i)&&((ut(o)!=="body"||Mt(s))&&(a=xr(o)),Ee(o))){const d=Ot(o);u=st(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!c&&!i?gi(s,a,!0):Se(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+g.x,y:r.y*u.y-a.scrollTop*u.y+h.y+g.y}}function Ql(t){return Array.from(t.getClientRects())}function Xl(t){const e=Le(t),r=xr(t),o=t.ownerDocument.body,n=be(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=be(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+_o(t);const l=-r.scrollTop;return xe(o).direction==="rtl"&&(s+=be(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:s,y:l}}function Zl(t,e){const r=he(t),o=Le(t),n=r.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,a=0;if(n){i=n.width,s=n.height;const u=ko();(!u||u&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:i,height:s,x:l,y:a}}function Kl(t,e){const r=Ot(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=Ee(t)?st(t):Se(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,a=n*i.x,u=o*i.y;return{width:s,height:l,x:a,y:u}}function tn(t,e,r){let o;if(e==="viewport")o=Zl(t,r);else if(e==="document")o=Xl(Le(t));else if(ye(e))o=Kl(e,r);else{const n=pi(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Gt(o)}function fi(t,e){const r=Re(t);return r===e||!ye(r)||at(r)?!1:xe(r).position==="fixed"||fi(r,e)}function Gl(t,e){const r=e.get(t);if(r)return r;let o=to(t,[],!1).filter(l=>ye(l)&&ut(l)!=="body"),n=null;const i=xe(t).position==="fixed";let s=i?Re(t):t;for(;ye(s)&&!at(s);){const l=xe(s),a=$o(s);!a&&l.position==="fixed"&&(n=null),(i?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Mt(s)&&!a&&fi(t,s))?o=o.filter(h=>h!==s):n=l,s=Re(s)}return e.set(t,o),o}function ec(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t;const s=[...r==="clippingAncestors"?yr(e)?[]:Gl(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=tn(e,h,n);return u.top=be(c.top,u.top),u.right=Qe(c.right,u.right),u.bottom=Qe(c.bottom,u.bottom),u.left=be(c.left,u.left),u},tn(e,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function tc(t){const{width:e,height:r}=ui(t);return{width:e,height:r}}function rc(t,e,r){const o=Ee(e),n=Le(e),i=r==="fixed",s=Ot(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=Se(0);if(o||!o&&!i)if((ut(e)!=="body"||Mt(n))&&(l=xr(e)),o){const g=Ot(e,!0,i,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else n&&(a.x=_o(n));const u=n&&!o&&!i?gi(n,l):Se(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function Br(t){return xe(t).position==="static"}function rn(t,e){if(!Ee(t)||xe(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Le(t)===r&&(r=r.ownerDocument.body),r}function bi(t,e){const r=he(t);if(yr(t))return r;if(!Ee(t)){let n=Re(t);for(;n&&!at(n);){if(ye(n)&&!Br(n))return n;n=Re(n)}return r}let o=rn(t,e);for(;o&&Jl(o)&&Br(o);)o=rn(o,e);return o&&at(o)&&Br(o)&&!$o(o)?r:o||Wl(t)||r}const oc=async function(t){const e=this.getOffsetParent||bi,r=this.getDimensions,o=await r(t.floating);return{reference:rc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nc(t){return xe(t).direction==="rtl"}const ic={convertOffsetParentRelativeRectToViewportRelativeRect:Yl,getDocumentElement:Le,getClippingRect:ec,getOffsetParent:bi,getElementRects:oc,getClientRects:Ql,getDimensions:tc,getScale:st,isElement:ye,isRTL:nc},sc=Fl,ac=Hl,lc=Rl,cc=Ul,dc=Il,uc=zl,hc=(t,e,r)=>{const o=new Map,n={platform:ic,...r},i={...n.platform,_c:o};return Ml(t,e,{...n,platform:i})},er="top-start",tr="top",rr="top-end",or="right-start",nr="right",ir="right-end",sr="bottom-start",Lt="bottom",ar="bottom-end",lr="left-start",cr="left",dr="left-end",on=[er,tr,rr,or,nr,ir,sr,Lt,ar,lr,cr,dr],it={[er]:sr,[tr]:Lt,[rr]:ar,[sr]:er,[Lt]:tr,[ar]:rr,[lr]:or,[cr]:nr,[dr]:ir,[or]:lr,[nr]:cr,[ir]:dr},pc={[lr]:-45,[cr]:-45,[dr]:-45,[er]:45,[tr]:45,[rr]:45,[or]:135,[nr]:135,[ir]:135,[sr]:-135,[Lt]:-135,[ar]:-135},vi=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},gc=t=>t.split("-")[0],fc=t=>it[gc(t)],mi=t=>it[t],bc=t=>pc[mi(t)],vc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${vi(fc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},nn=8,Ut=24;async function sn(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return hc(e,r,{placement:t?.directionName??Lt,middleware:[sc({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&lc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&ac({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&uc({element:t?.arrowEl}),dc(),cc({apply(){Object.assign(r.style,{paddingRight:`${nn}px`,paddingLeft:`${nn}px`})}})]}).then(({x:o,y:n,middlewareData:i,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${n}px`}),i?.hide&&!t?.isCallout){const{referenceHidden:l}=i.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(i?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=i.arrow,h=window.getComputedStyle(r).direction==="rtl",c=mi(s).split("-")[1];let g="",d="",f="",p="";if(c==="start"){const m=typeof a=="number"?`calc(${Ut}px - ${l.offsetWidth/2}px)`:"";g=typeof u=="number"?`calc(${Ut}px - ${l.offsetWidth/2}px)`:"",d=h?m:"",p=h?"":m}else if(c==="end"){const m=typeof a=="number"?`calc(${Ut}px - ${l.offsetWidth/2}px)`:"";d=h?"":m,p=h?m:"",f=typeof u=="number"?`calc(${Ut}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",g=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:g,right:d,bottom:f,left:p}),vc(l,bc(s),s)}}),t}const ue={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Mr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},we={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},mt="font-bold focusable justify-center transition-colors ease-in-out",wi={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},mc={primary:`border-0 rounded-8 ${mt}`,secondary:`border-2 rounded-8 ${mt}`,utility:`border rounded-4 ${mt}`,negative:`border-0 rounded-8 ${mt}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${mt}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${wi.link}`},wc={medium:"text-m leading-[24]",xsmall:"text-xs"},rt={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${wc.medium} ${mc.pill} ${wi.pill} justify-self-end -mr-8 ml-8`},Ve=t=>typeof t=="string",yc=t=>typeof t=="function",an=new Map,yi="en";function So(t){return[...Array.isArray(t)?t:[t],yi]}function xi(t,e,r){const o=So(t);return ur(()=>hr("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ve(e)?new Date(e):e)}function oo(t,e,r){const o=So(t);return ur(()=>hr("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function ln(t,e,r,{offset:o=0,...n}){const i=So(t),s=e?ur(()=>hr("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):ur(()=>hr("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function ur(t,e){const r=t();let o=an.get(r);return o||(o=e(),an.set(r,o)),o}function hr(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const $i=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,ki="%__lingui_octothorpe__%",xc=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s]||{style:s},i=(s,l)=>{const a=Object.keys(r).length?n("number"):void 0,u=oo(o,s,a);return l.replace(new RegExp(ki,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=ln(o,!1,s,l);return i(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=ln(o,!0,s,l);return i(s-a,u)},select:$c,number:(s,l)=>oo(o,s,n(l)),date:(s,l)=>xi(o,s,n(l))}},$c=(t,e)=>e[t]??e.other;function kc(t,e,r){return(o={},n)=>{const i=xc(e,r,n),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+ki;if(Ve(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let m;if(d){const E=i[d];m=E(o[g],p)}else m=o[g];return m==null?h:h+m},""):a,l=s(t);return Ve(l)&&$i.test(l)?bo.unraw(l.trim()):Ve(l)?l.trim():l?String(l):""}}var _c=Object.defineProperty,Sc=(t,e,r)=>e in t?_c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ec=(t,e,r)=>(Sc(t,e+"",r),r);class Cc{constructor(){Ec(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ac=Object.defineProperty,Oc=(t,e,r)=>e in t?Ac(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ot=(t,e,r)=>(Oc(t,typeof e!="symbol"?e+"":e,r),r);class Lc extends Cc{constructor(e){super(),ot(this,"_locale",""),ot(this,"_locales"),ot(this,"_localeData",{}),ot(this,"_messages",{}),ot(this,"_missing"),ot(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??yi,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let n=o?.message;e||(e=""),Ve(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,l=this._missing;if(l&&s)return yc(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=i||n||e;return Ve(a)&&$i.test(a)?JSON.parse(`"${a}"`):Ve(a)?a:kc(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return xi(this._locales||this._locale,e,r)}number(e,r){return oo(this._locales||this._locale,e,r)}}function Nc(t={}){return new Lc(t)}const zr=Nc();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=globalThis,pr=Eo.trustedTypes,cn=pr?pr.createPolicy("lit-html",{createHTML:t=>t}):void 0,_i="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Si="?"+De,Tc=`<${Si}>`,Ze=document,Nt=()=>Ze.createComment(""),Tt=t=>t===null||typeof t!="object"&&typeof t!="function",Co=Array.isArray,Pc=t=>Co(t)||typeof t?.[Symbol.iterator]=="function",Rr=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dn=/-->/g,un=/>/g,Fe=RegExp(`>|${Rr}(?:([^\\s"'>=/]+)(${Rr}*=${Rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hn=/'/g,pn=/"/g,Ei=/^(?:script|style|textarea|title)$/i,lt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),gn=new WeakMap,We=Ze.createTreeWalker(Ze,129);function Ci(t,e){if(!Co(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return cn!==void 0?cn.createHTML(e):e}const Dc=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=wt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===wt?h[1]==="!--"?s=dn:h[1]!==void 0?s=un:h[2]!==void 0?(Ei.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=Fe):h[3]!==void 0&&(s=Fe):s===Fe?h[0]===">"?(s=n??wt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Fe:h[3]==='"'?pn:hn):s===pn||s===hn?s=Fe:s===dn||s===un?s=wt:(s=Fe,n=void 0);const d=s===Fe&&t[l+1].startsWith("/>")?" ":"";i+=s===wt?a+Tc:c>=0?(o.push(u),a.slice(0,c)+_i+a.slice(c)+De+d):a+De+(c===-2?l:d)}return[Ci(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Pt{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Dc(e,r);if(this.el=Pt.createElement(u,o),We.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=We.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(_i)){const g=h[s++],d=n.getAttribute(c).split(De),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:f[2],strings:d,ctor:f[1]==="."?Mc:f[1]==="?"?zc:f[1]==="@"?Rc:$r}),n.removeAttribute(c)}else c.startsWith(De)&&(a.push({type:6,index:i}),n.removeAttribute(c));if(Ei.test(n.tagName)){const c=n.textContent.split(De),g=c.length-1;if(g>0){n.textContent=pr?pr.emptyScript:"";for(let d=0;d<g;d++)n.append(c[d],Nt()),We.nextNode(),a.push({type:2,index:++i});n.append(c[g],Nt())}}}else if(n.nodeType===8)if(n.data===Si)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(De,c+1))!==-1;)a.push({type:7,index:i}),c+=De.length-1}i++}}static createElement(e,r){const o=Ze.createElement("template");return o.innerHTML=e,o}}function ct(t,e,r=t,o){if(e===lt)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=Tt(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=ct(t,n._$AS(t,e.values),n,o)),e}class Bc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??Ze).importNode(r,!0);We.currentNode=n;let i=We.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new zt(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new Ic(i,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(i=We.nextNode(),s++)}return We.currentNode=Ze,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class zt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ct(this,e,r),Tt(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ze.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Pt.createElement(Ci(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Bc(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=gn.get(e.strings);return r===void 0&&gn.set(e.strings,r=new Pt(e)),r}k(e){Co(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new zt(this.O(Nt()),this.O(Nt()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class $r{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=ct(this,e,r,0),s=!Tt(e)||e!==this._$AH&&e!==lt,s&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=ct(this,l[o+a],r,a),u===lt&&(u=this._$AH[a]),s||=!Tt(u)||u!==this._$AH[a],u===K?e=K:e!==K&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!n&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Mc extends $r{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class zc extends $r{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Rc extends $r{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=ct(this,e,r,0)??K)===lt)return;const o=this._$AH,n=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==K&&(o===K||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ic{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ct(this,e)}}const jc=Eo.litHtmlPolyfillSupport;jc?.(Pt,zt),(Eo.litHtmlVersions??=[]).push("3.2.1");const Fc=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new zt(e.insertBefore(Nt(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let kt=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return lt}};kt._$litElement$=!0,kt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:kt});const Hc=globalThis.litElementPolyfillSupport;Hc?.({LitElement:kt});(globalThis.litElementVersions??=[]).push("4.1.1");class Uc extends kt{#e=!1;get i18n(){return this.#e||(zr.load(this.locale,this.translations),zr.activate(this.locale),this.#e=!0),zr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Ao=()=>!(typeof window<"u");class Ai{isServer=!1;css=""}const Jc=(t=[])=>{const e=new Ai;if(Ao()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const n=new XMLHttpRequest;n.open("GET",o,!1),n.send(),e.css+=n.responseText}return e},Wc=()=>Jc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),Vc=async(t=[])=>{const e=new Ai;if(Ao()){for(const i of t)e.css+=`@import url('${i}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(i=>fetch(i))),n=await Promise.all(o.map(i=>i.text()));for(const i of n)e.css+=i;return e},fn=async()=>Vc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(b){var y=b.replace(s,"");return y!==b&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function a(b){return"isConnected"in b?b.isConnected:document.contains(b)}function u(b){return b.filter(function(y,T){return b.indexOf(y)===T})}function h(b,y){return b.filter(function(T){return y.indexOf(T)===-1})}function c(b){b.parentNode.removeChild(b)}function g(b){return b.shadowRoot||r.get(b)}var d=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,p=f.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function m(b){return typeof b=="object"?U.isPrototypeOf(b)||p.isPrototypeOf(b):!1}function E(b){return typeof b=="object"?p.isPrototypeOf(b):!1}var A=new WeakMap,C=new WeakMap,M=new WeakMap,$=new WeakMap;function O(b,y){var T=document.createElement("style");return M.get(b).set(y,T),C.get(b).push(y),T}function L(b,y){return M.get(b).get(y)}function z(b,y){M.get(b).delete(y),C.set(b,C.get(b).filter(function(T){return T!==y}))}function H(b,y){requestAnimationFrame(function(){y.textContent=A.get(b).textContent,$.get(b).forEach(function(T){return y.sheet[T.method].apply(y.sheet,T.args)})})}function J(b){if(!A.has(b))throw new TypeError("Illegal invocation")}function Z(){var b=this,y=document.createElement("style");e.body.appendChild(y),A.set(b,y),C.set(b,[]),M.set(b,new WeakMap),$.set(b,[])}var U=Z.prototype;U.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(T){return Promise.reject(T)}},U.replaceSync=function(y){if(J(this),typeof y=="string"){var T=this;A.get(T).textContent=l(y),$.set(T,[]),C.get(T).forEach(function(se){se.isConnected()&&H(T,L(T,se))})}},n(U,"cssRules",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.cssRules}}),n(U,"media",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.media}}),d.forEach(function(b){U[b]=function(){var y=this;J(y);var T=arguments;$.get(y).push({method:b,args:T}),C.get(y).forEach(function(ce){if(ce.isConnected()){var te=L(y,ce).sheet;te[b].apply(te,T)}});var se=A.get(y).sheet;return se[b].apply(se,T)}}),n(Z,Symbol.hasInstance,{configurable:!0,value:m});var le={childList:!0,subtree:!0},B=new WeakMap;function G(b){var y=B.get(b);return y||(y=new Bo(b),B.set(b,y)),y}function Y(b){n(b.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(y){G(this).update(y)}})}function ne(b,y){for(var T=document.createNodeIterator(b,NodeFilter.SHOW_ELEMENT,function(ce){return g(ce)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),se=void 0;se=T.nextNode();)y(g(se))}var ee=new WeakMap,ie=new WeakMap,et=new WeakMap;function us(b,y){return y instanceof HTMLStyleElement&&ie.get(b).some(function(T){return L(T,b)})}function Do(b){var y=ee.get(b);return y instanceof Document?y.body:y}function Cr(b){var y=document.createDocumentFragment(),T=ie.get(b),se=et.get(b),ce=Do(b);se.disconnect(),T.forEach(function(te){y.appendChild(L(te,b)||O(te,b))}),ce.insertBefore(y,null),se.observe(ce,le),T.forEach(function(te){H(te,L(te,b))})}function Bo(b){var y=this;y.sheets=[],ee.set(y,b),ie.set(y,[]),et.set(y,new MutationObserver(function(T,se){if(!document){se.disconnect();return}T.forEach(function(ce){t||i.call(ce.addedNodes,function(te){te instanceof Element&&ne(te,function(tt){G(tt).connect()})}),i.call(ce.removedNodes,function(te){te instanceof Element&&(us(y,te)&&Cr(y),t||ne(te,function(tt){G(tt).disconnect()}))})})}))}if(Bo.prototype={isConnected:function(){var b=ee.get(this);return b instanceof Document?b.readyState!=="loading":a(b.host)},connect:function(){var b=Do(this);et.get(this).observe(b,le),ie.get(this).length>0&&Cr(this),ne(b,function(y){G(y).connect()})},disconnect:function(){et.get(this).disconnect()},update:function(b){var y=this,T=ee.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!b.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(b.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");y.sheets=b;var se=ie.get(y),ce=u(b),te=h(se,ce);te.forEach(function(tt){c(L(tt,y)),z(tt,y)}),ie.set(y,ce),y.isConnected()&&ce.length>0&&Cr(y)}},window.CSSStyleSheet=Z,Y(Document),"ShadowRoot"in window){Y(ShadowRoot);var Mo=Element.prototype,hs=Mo.attachShadow;Mo.attachShadow=function(y){var T=hs.call(this,y);return y.mode==="closed"&&r.set(this,T),T}}var Ht=G(document);Ht.isConnected()?Ht.connect():document.addEventListener("DOMContentLoaded",Ht.connect.bind(Ht))})();let xt;if(Ao()){const t=await fn();xt=kn(t.css)}else{xt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await fn();xt.replaceSync(r.css)}catch{const e=Wc();xt.replaceSync(e.css)}}class oe extends Uc{static styles=[xt]}var qc={};const Yc=["en","nb","fi","da","sv"],Oi="en",bn=t=>Yc.find(e=>t===e||t.toLowerCase().includes(e))||Oi;function Qc(){if(typeof window>"u"){const t=qc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return bn(t)}try{const t=document.documentElement.lang;return bn(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Oi}}const Xc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Ne=(t,e,r,o,n)=>{const i=Qc(),s=Xc(i,t,e,r,o,n);x.load(i,s),x.activate(i)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc=po(class extends go{constructor(t){if(super(t),t.type!==ho.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Oe}}),Kc=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Li(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:Kc(e.toString())})),super.createProperty(e,o)}}}function Gc(){return`m${Math.random().toString(36).slice(2)}`}const ed=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),td=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),rd=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),od=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),nd=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class id extends Li(oe){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[oe.styles,F`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Ne(td,od,rd,ed,nd),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(it).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(it))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>on.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(on)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?sn(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return it[this._actualDirection]}get _arrowClasses(){return j([rt.arrowBase,this._activeVariantClasses.arrow,rt[`arrowDirection${vi(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:rt[r],arrow:rt[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return j([rt.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return x._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${rt.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},sn(this.attentionState)}pointingAtDirection(){switch(it[this._actualDirection]){case"top-start":case"top":case"top-end":return x._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return x._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return x._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return x._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return x._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return x._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return x._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return x._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Gc());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
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
    `}}customElements.get("w-attention")||customElements.define("w-attention",id);const sd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var ad=Object.defineProperty,Ni=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&ad(e,r,n),n};class Oo extends D{constructor(){super(...arguments),this.variant="neutral"}static{this.styles=[ae,sd]}get _class(){return j(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",this.variant==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",this.variant==="info"&&"bg-[--w-color-badge-info-background] s-text",this.variant==="positive"&&"bg-[--w-color-badge-positive-background] s-text",this.variant==="warning"&&"bg-[--w-color-badge-warning-background] s-text",this.variant==="negative"&&"bg-[--w-color-badge-negative-background] s-text",this.variant==="disabled"&&"s-bg-disabled s-text",this.variant==="price"&&"bg-[--w-black/70] s-text-inverted-static",this.variant==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}Ni([v({type:String,reflect:!0})],Oo.prototype,"variant");Ni([v({type:String,reflect:!0})],Oo.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",Oo);const ld=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var cd=Object.defineProperty,Rt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&cd(e,r,n),n};class ht extends D{static{this.styles=[ae,ld]}get _class(){return j(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?I:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}Rt([v({type:Boolean,reflect:!0})],ht.prototype,"bleed");Rt([v({type:Boolean,reflect:!0})],ht.prototype,"bordered");Rt([v({type:Boolean,reflect:!0})],ht.prototype,"info");Rt([v({type:Boolean,reflect:!0})],ht.prototype,"neutral");Rt([v({type:String,reflect:!0})],ht.prototype,"role");customElements.get("w-box")||customElements.define("w-box",ht);function dd(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const ud=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),hd=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),pd=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),gd=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),fd=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),bd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var vd=Object.defineProperty,md=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&vd(e,r,n),n};const nt={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},wd=w`<span class=${nt.separator}>/</span>`;class Ti extends D{static{this.styles=[ae,bd]}constructor(){super(),Ne(hd,gd,pd,ud,fd),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,n)=>{if(typeof o=="string"){const i=n===this.children.length-1;return w`<span class=${nt.text} aria-current=${i?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?nt.link:nt.text),o});this._children=dd(r,wd)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${nt.a11y}>${this.ariaLabel}</h2>
        <div class=${nt.wrapper}>${this._children}</div>
      </nav>
    `}}md([v({attribute:"aria-label",type:String})],Ti.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Ti);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Q=function(t,e,r,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(t,r):n?n.value=r:e.set(t,r),r};function Lo(t){var e,r,o,n,i,s,l,a,u,h,c,g,d,f,p,m,E,A;class C extends t{constructor(...$){var O,L,z;super(...$),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),n.set(this,!1),i.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{Q(this,n,!0,"f"),Q(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{Q(this,r,!1,"f"),R(this,e,"m",m).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,n,"f")&&Q(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Q(this,l,!1,"f")),Q(this,n,!0,"f"),Q(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),d.set(this,!1),f.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,h,"f")),(z=this.addEventListener)===null||z===void 0||z.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const $=this.validators.map(z=>z.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...$])]}static getValidator($){return this.validators.find(O=>O.attribute===$)||null}static getValidators($){return this.validators.filter(O=>{var L;if(O.attribute===$||!((L=O.attribute)===null||L===void 0)&&L.includes($))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback($,O,L){var z;(z=super.attributeChangedCallback)===null||z===void 0||z.call(this,$,O,L);const J=this.constructor.getValidators($);J?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue($){var O;Q(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),Q(this,a,$,"f");const z=this.shouldFormValueUpdate()?$:null;this.internals.setFormValue(z),R(this,e,"m",m).call(this,z),this.valueChangedCallback&&this.valueChangedCallback(z),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise($=>$(R(this,f,"f")))}formResetCallback(){var $,O;Q(this,n,!1,"f"),Q(this,o,!1,"f"),R(this,e,"m",p).call(this),($=this.resetFormControl)===null||$===void 0||$.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,d=new WeakMap,f=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const $=R(this,o,"f")||R(this,n,"f")&&!this.validity.valid&&!R(this,r,"f");return $&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),$},m=function($){const O=this.constructor,L={},z=O.validators,H=[],J=z.some(B=>B.isValid instanceof Promise);R(this,d,"f")||(Q(this,f,new Promise(B=>{Q(this,g,B,"f")}),"f"),Q(this,d,!0,"f")),R(this,i,"f")&&(R(this,i,"f").abort(),Q(this,s,R(this,i,"f"),"f"));const Z=new AbortController;Q(this,i,Z,"f");let U,le=!1;z.length&&(z.forEach(B=>{const G=B.key||"customError",Y=B.isValid(this,$,Z.signal);Y instanceof Promise?(H.push(Y),Y.then(ee=>{ee!=null&&(L[G]=!ee,U=R(this,e,"m",A).call(this,B,$),R(this,e,"m",E).call(this,L,U))})):(L[G]=!Y,this.validity[G]!==!Y&&(le=!0),!Y&&!U&&(U=R(this,e,"m",A).call(this,B,$)))}),Promise.allSettled(H).then(()=>{var B;Z?.signal.aborted||(Q(this,d,!1,"f"),(B=R(this,g,"f"))===null||B===void 0||B.call(this))}),(le||!J)&&R(this,e,"m",E).call(this,L,U))},E=function($,O){if(this.validationTarget)this.internals.setValidity($,O,this.validationTarget),Q(this,l,!1,"f");else{if(this.internals.setValidity($,O),this.internals.validity.valid)return;Q(this,l,!0,"f")}},A=function($,O){if(this.validityCallback){const L=this.validityCallback($.key||"customError");if(L)return L}return $.message instanceof Function?$.message(this,O):$.message},C}const yd=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),xd=JSON.parse('{"button.aria.loading":["Loading..."]}'),$d=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),kd=JSON.parse('{"button.aria.loading":["Laster..."]}'),_d=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Sd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var Ed=Object.defineProperty,fe=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Ed(e,r,n),n};const vn=["primary","secondary","negative","utility","pill","link"],Be="font-bold focusable justify-center transition-colors ease-in-out",W={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},P={primary:`border-0 rounded-8 ${Be}`,secondary:`border-2 rounded-8 ${Be}`,utility:`border rounded-4 ${Be}`,negative:`border-0 rounded-8 ${Be}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Be}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${W.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},k={inProgress:`border-transparent animate-inprogress pointer-events-none ${W.loading}`,quiet:`border-0 rounded-8 ${Be}`,utilityQuiet:`border-0 rounded-4 ${Be}`,negativeQuiet:`border-0 rounded-8 ${Be}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${W.disabled}`},N={secondary:`${_.medium} ${S.medium} ${P.secondary} ${W.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${P.secondary} ${W.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${P.secondary} ${k.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${P.secondary} ${W.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${P.secondary} ${k.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${k.quiet} ${W.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${k.quiet} ${k.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${k.quiet} ${W.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${P.secondary} ${k.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${P.secondary} ${k.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${k.quiet} ${k.inProgress}`,primary:`${_.large} ${S.medium} ${P.primary} ${W.primary}`,primaryDisabled:`${_.large} ${S.medium} ${k.isDisabled} ${P.primary}`,primarySmall:`${_.small} ${S.xsmall} ${P.primary} ${W.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${k.isDisabled} ${P.primary} `,primaryQuiet:`${_.large} ${S.medium} ${k.quiet} ${W.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${k.quiet} ${k.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${k.quiet} ${W.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${k.quiet} ${k.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${k.inProgress} ${P.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${k.inProgress} ${P.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${k.quiet} ${k.inProgress} ${P.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${k.quiet} ${k.inProgress}`,utility:`${_.utility} ${S.medium} ${P.utility} ${W.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${P.utility} ${k.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${k.utilityQuiet} ${W.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${k.utilityQuiet} ${k.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${P.utility} ${W.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${W.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${k.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${P.utility} ${k.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${k.inProgress} ${k.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${k.inProgress} ${k.utilityQuiet}`,negative:`${_.large} ${S.medium} ${P.negative} ${W.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${P.negative} ${k.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${k.negativeQuiet}${k.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${P.negative} ${W.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${P.negative} ${k.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${P.negative} ${k.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${k.inProgress} ${P.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${k.negativeQuiet} ${P.negative} ${k.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.inProgress}`,pill:`${_.pill} ${S.medium} ${P.pill} ${W.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${P.pill} ${W.pill}`,pillLoading:`${_.pill} ${S.medium} ${P.pill} ${k.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${P.pill} ${k.inProgress}`,link:`${_.link} ${S.medium} ${P.link}`,linkSmall:`${_.link} ${S.xsmall} ${P.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class de extends Lo(D){constructor(){super(),this.type="button",Ne(xd,kd,$d,yd,_d),this.variant="secondary",this.ariaValueTextLoading=x._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[ae,Sd]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!vn.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${vn.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.primary,this.small&&!this.quiet&&!this.loading&&N.primarySmall,this.small&&this.quiet&&!this.loading&&N.primarySmallQuiet,this.small&&this.loading&&(this.quiet?N.primarySmallQuietLoading:N.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&N.primaryQuiet,!this.small&&this.loading&&(this.quiet?N.primaryQuietLoading:N.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.secondary,this.small&&!this.quiet&&!this.loading&&N.secondarySmall,this.small&&this.loading&&(this.quiet?N.secondarySmallQuietLoading:N.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&N.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&N.secondaryQuiet,!this.small&&this.loading&&(this.quiet?N.secondaryQuietLoading:N.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.utility,this.small&&!this.quiet&&!this.loading&&N.utilitySmall,this.small&&this.quiet&&!this.loading&&N.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?N.utilitySmallQuietLoading:N.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&N.utilityQuiet,!this.small&&this.loading&&(this.quiet?N.utilityQuietLoading:N.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.negative,this.small&&!this.quiet&&!this.loading&&N.negativeSmall,this.small&&this.quiet&&!this.loading&&N.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?N.negativeSmallQuietLoading:N.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&N.negativeQuiet,!this.small&&this.loading&&(this.quiet?N.negativeQuietLoading:N.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?N.pillSmall:N.pill),this.loading&&(this.small?N.pillSmallLoading:N.pillLoading)]}get _linkClasses(){return[this.small?N.linkSmall:N.link]}get _classes(){return j(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&N.linkAsButton,this.fullWidth?N.fullWidth:N.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}fe([v({reflect:!0})],de.prototype,"type");fe([v({type:Boolean,reflect:!0})],de.prototype,"autofocus");fe([v({reflect:!0})],de.prototype,"variant");fe([v({type:Boolean,reflect:!0})],de.prototype,"quiet");fe([v({type:Boolean,reflect:!0})],de.prototype,"small");fe([v({type:Boolean,reflect:!0})],de.prototype,"loading");fe([v({reflect:!0})],de.prototype,"href");fe([v({reflect:!0})],de.prototype,"target");fe([v({reflect:!0})],de.prototype,"rel");fe([v({attribute:"full-width",type:Boolean,reflect:!0})],de.prototype,"fullWidth");fe([v({attribute:"button-class",reflect:!0})],de.prototype,"buttonClass");fe([v({reflect:!0})],de.prototype,"name");fe([v({reflect:!0})],de.prototype,"value");customElements.get("w-button")||customElements.define("w-button",de);const Cd=JSON.parse('{"card.button.text":["Vælg"]}'),Ad=JSON.parse('{"card.button.text":["Select"]}'),Od=JSON.parse('{"card.button.text":["Valitse"]}'),Ld=JSON.parse('{"card.button.text":["Velg"]}'),Nd=JSON.parse('{"card.button.text":["Välj"]}'),Td=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Pd=Object.defineProperty,No=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Pd(e,r,n),n};const _e={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},mn={ENTER:"Enter",SPACE:" "};class kr extends D{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Ne(Ad,Ld,Od,Cd,Nd),this.buttonText=x._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[ae,Td,F`
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
    `]}get _containerClasses(){return j([_e.base,this.flat?_e.flat:_e.shadow,this.selected&&!this.flat&&_e.selected,this.selected&&this.flat?_e.flatSelected:_e.flatUnselected])}get _outlineClasses(){return j([_e.outline,this.selected?_e.outlineSelected:_e.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${_e.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===mn.ENTER||e.key===mn.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${V(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}No([v({type:Boolean,reflect:!0})],kr.prototype,"selected");No([v({type:Boolean})],kr.prototype,"flat");No([v({type:Boolean})],kr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",kr);var Dd=Object.defineProperty,_r=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Dd(e,r,n),n};class It extends D{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=Zc({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[ae,F`
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
    `]}}_r([v({type:String})],It.prototype,"type");_r([v({type:Boolean,reflect:!0})],It.prototype,"checked");_r([v({type:Boolean,reflect:!0})],It.prototype,"indeterminate");_r([v({type:Boolean,reflect:!0})],It.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",It);var Bd={},Md=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),zd=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),Rd=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),Id=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),jd=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),Pi=["en","nb","fi","da","sv"],Di="en",Fd=()=>{var t;let e;switch((t=process==null?void 0:Bd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Bi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Di},Ir=t=>Pi.find(e=>t===e||t.toLowerCase().includes(e))||Bi();function Hd(){var t;if(typeof window>"u"){const e=Fd();return Ir(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Bi();return Pi.includes(e)?Ir(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ir(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Di}}var Ud=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Jd=(t,e,r,o,n)=>{const i=Hd(),s=Ud(i,t,e,r,o,n);x.load(i,s),x.activate(i)};Jd(zd,Md,Rd,Id,jd);var Wd=class extends D{render(){const t=x.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",Wd);var Vd={},qd=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),Yd=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),Qd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),Xd=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),Zd=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),Mi=["en","nb","fi","da","sv"],zi="en",Kd=()=>{var t;let e;switch((t=process==null?void 0:Vd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ri=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":zi},jr=t=>Mi.find(e=>t===e||t.toLowerCase().includes(e))||Ri();function Gd(){var t;if(typeof window>"u"){const e=Kd();return jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ri();return Mi.includes(e)?jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),zi}}var eu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,tu=(t,e,r,o,n)=>{const i=Gd(),s=eu(i,t,e,r,o,n);x.load(i,s),x.activate(i)};tu(Yd,qd,Qd,Xd,Zd);var ru=class extends D{render(){const t=x.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",ru);const ou=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var nu=Object.defineProperty,$e=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&nu(e,r,n),n};const iu={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},re={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class ve extends D{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[ae,ou,F`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return j([re.wrapper,this.box&&re.box,this.bleed&&re.bleed])}get#t(){return j(this.buttonClass,[re.button,this.box&&re.buttonBox])}get#n(){return j([re.chevron,!this.box&&re.chevronNonBox])}get#r(){const e=j([re.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&re.elementsChevronCollapse]),r=j([re.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&re.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return j(this.contentClass,[this.box&&iu.base,this._hasTitle&&this.box&&re.contentWithTitle])}get#i(){return j([re.expansion,!this.expanded&&re.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#i}" aria-hidden=${V(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}$e([v({type:Boolean,reflect:!0})],ve.prototype,"expanded");$e([v({type:String})],ve.prototype,"title");$e([v({type:Boolean})],ve.prototype,"box");$e([v({type:Boolean})],ve.prototype,"bleed");$e([v({attribute:"button-class",type:String})],ve.prototype,"buttonClass");$e([v({attribute:"content-class",type:String})],ve.prototype,"contentClass");$e([v({attribute:"no-chevron",type:Boolean})],ve.prototype,"noChevron");$e([v({type:Boolean})],ve.prototype,"animated");$e([v({attribute:"heading-level",type:Number})],ve.prototype,"headingLevel");$e([v({type:Boolean,state:!0})],ve.prototype,"_hasTitle");$e([v({type:Boolean,state:!0})],ve.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",ve);const Ii=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},ji=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(n=>n.patchClose))o._close=()=>this.close()}};class su extends Ii(ji(D)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[ae,F`
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
    `]}}const au=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),lu=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],cu={easing:"ease",duration:300};let Fi=!1;const du=typeof window<"u";if(du){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Fi=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class uu{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:n=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||lu,this.shouldReduceMotion=n}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(au(this.first,this.last))}get defaults(){return cu}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Fi?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var hu={},pu=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),gu=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),fu=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),bu=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),vu=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),Hi=["en","nb","fi","da","sv"],Ui="en",mu=()=>{var t;let e;switch((t=process==null?void 0:hu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ji=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ui},Fr=t=>Hi.find(e=>t===e||t.toLowerCase().includes(e))||Ji();function wu(){var t;if(typeof window>"u"){const e=mu();return Fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ji();return Hi.includes(e)?Fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ui}}var yu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,xu=(t,e,r,o,n)=>{const i=wu(),s=yu(i,t,e,r,o,n);x.load(i,s),x.activate(i)};xu(gu,pu,fu,bu,vu);var $u=class extends D{render(){const t=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",$u);const ku=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),_u=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Su=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Eu=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Cu=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Au=Object.defineProperty,jt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Au(e,r,n),n};class pt extends Ii(D){constructor(){super(),this._hasTopContent=!1,Ne(_u,Eu,Su,ku,Cu)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new uu(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${x._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:I}get closeButton(){return this.noClose?I:w`<button
      type="button"
      aria-label="${x._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[ae,F`
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
    `]}}jt([v({type:String})],pt.prototype,"title");jt([v({type:Boolean})],pt.prototype,"back");jt([v({type:Boolean,attribute:"no-close"})],pt.prototype,"noClose");jt([qs()],pt.prototype,"_hasTopContent");jt([br(".title-el")],pt.prototype,"titleEl");let _t=[];const To={documentElement:{},body:{}},Ou=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Wi=t=>{t.touches.length>1||t.preventDefault?.()},Lu=t=>([e,r])=>{To[t][e]=document[t].style[e],document[t].style[e]=r},Nu=()=>Object.entries(Ou).forEach(([t,e])=>{Object.entries(e).forEach(Lu(t))}),Tu=t=>([e,r])=>{document[t].style[e]=To[t][e]},Pu=()=>Object.entries(To).forEach(([t,e])=>{Object.entries(e).forEach(Tu(t))}),Du=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Bu(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const n=o.targetTouches[0].clientY-e;return t.scrollTop===0&&n>0||Du(t)&&n<0?Wi(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Mu(t){t.ontouchstart=null,t.ontouchmove=null}const Vi=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Wi,{passive:!1}),zu=Vi(!0),Ru=Vi();function Iu(t){if(!t)throw Error("Could not run setup, an element must be provided");_t.some(e=>e===t)||(_t.length||(Nu(),zu()),Bu(t),_t.push(t))}function ju(){_t.forEach(Mu),Ru(),Pu(),_t=[]}var Fu=Object.defineProperty,gt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Fu(e,r,n),n};class Ge extends ji(D){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Iu(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),ju(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[ae,F`
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
    `]}}gt([v({type:Boolean})],Ge.prototype,"show");gt([v({type:String,attribute:"content-id"})],Ge.prototype,"contentId");gt([v({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ge.prototype,"ignoreBackdropClicks");gt([br(".dialog-el")],Ge.prototype,"dialogEl");gt([br(".dialog-inner-el")],Ge.prototype,"dialogInnerEl");gt([br(".content-el")],Ge.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ge),customElements.define("w-modal-header",pt),customElements.define("w-modal-footer",su));var Hu={},Uu=JSON.parse('{"icon.title.chevron-double-left":["Dobbel pil til venstre"]}'),Ju=JSON.parse('{"icon.title.chevron-double-left":["Double leftward arrow"]}'),Wu=JSON.parse('{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]}'),Vu=JSON.parse('{"icon.title.chevron-double-left":["Dobbelt venstrepil"]}'),qu=JSON.parse('{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}'),qi=["en","nb","fi","da","sv"],Yi="en",Yu=()=>{var t;let e;switch((t=process==null?void 0:Hu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Qi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Yi},Hr=t=>qi.find(e=>t===e||t.toLowerCase().includes(e))||Qi();function Qu(){var t;if(typeof window>"u"){const e=Yu();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Qi();return qi.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Yi}}var Xu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Zu=(t,e,r,o,n)=>{const i=Qu(),s=Xu(i,t,e,r,o,n);x.load(i,s),x.activate(i)};Zu(Ju,Uu,Wu,Vu,qu);var Ku=class extends D{render(){const t=x.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",Ku);var Gu={},eh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),th=JSON.parse('{"icon.title.chevron-left":["Leftward arrow"]}'),rh=JSON.parse('{"icon.title.chevron-left":["Nuoli vasemmalle"]}'),oh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),nh=JSON.parse('{"icon.title.chevron-left":["Pil vänster"]}'),Xi=["en","nb","fi","da","sv"],Zi="en",ih=()=>{var t;let e;switch((t=process==null?void 0:Gu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ki=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Zi},Ur=t=>Xi.find(e=>t===e||t.toLowerCase().includes(e))||Ki();function sh(){var t;if(typeof window>"u"){const e=ih();return Ur(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ki();return Xi.includes(e)?Ur(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ur(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Zi}}var ah=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,lh=(t,e,r,o,n)=>{const i=sh(),s=ah(i,t,e,r,o,n);x.load(i,s),x.activate(i)};lh(th,eh,rh,oh,nh);var ch=class extends D{render(){const t=x.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",ch);var dh={},uh=JSON.parse('{"icon.title.chevron-right":["Pil til høyre"]}'),hh=JSON.parse('{"icon.title.chevron-right":["Rightward arrow"]}'),ph=JSON.parse('{"icon.title.chevron-right":["Nuoli oikealle"]}'),gh=JSON.parse('{"icon.title.chevron-right":["Pil til højre"]}'),fh=JSON.parse('{"icon.title.chevron-right":["Pil höger"]}'),Gi=["en","nb","fi","da","sv"],es="en",bh=()=>{var t;let e;switch((t=process==null?void 0:dh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ts=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":es},Jr=t=>Gi.find(e=>t===e||t.toLowerCase().includes(e))||ts();function vh(){var t;if(typeof window>"u"){const e=bh();return Jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ts();return Gi.includes(e)?Jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),es}}var mh=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,wh=(t,e,r,o,n)=>{const i=vh(),s=mh(i,t,e,r,o,n);x.load(i,s),x.activate(i)};wh(hh,uh,ph,gh,fh);var yh=class extends D{render(){const t=x.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",yh);const xh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),$h=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),kh=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),_h=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Sh=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),Eh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}}`;var Ch=Object.defineProperty,Sr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Ch(e,r,n),n};const Wr=x._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),Jt="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class Ft extends D{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,Ne($h,_h,kh,xh,Sh)}static{this.styles=[ae,Eh]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(n,i)=>i+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(n,i)=>r+i)}render(){const e=this.visiblePageNumbers;return w`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${x._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?w`<a
              href="${this.baseUrl}1"
              class="${Jt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${Wr}</span>
            </a>`:I}
        ${this.shouldShowPreviousPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${Jt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${Wr}</span>
            </a>`:I}
        ${e.map(r=>{const o=r===this.currentPageNumber,n=`${this.baseUrl}${r}`;let i=Jt;o?i+=" s-bg-primary s-text-inverted":i+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const s=x._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return w`<a aria-label="${s}" href="${n}" class="${i}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${Jt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${x._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${Wr}</span>
            </a>`:I}
      </div>
    </nav>`}}Sr([v({type:String,reflect:!0,attribute:"base-url"})],Ft.prototype,"baseUrl");Sr([v({type:Number,reflect:!0})],Ft.prototype,"pages");Sr([v({type:Number,reflect:!0,attribute:"current-page"})],Ft.prototype,"currentPageNumber");Sr([v({type:Number,reflect:!0,attribute:"visible-pages"})],Ft.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",Ft);const Ah=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Oh=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Lh=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Nh=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Th=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Ph extends Li(oe){static styles=[oe.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Ne(Oh,Nh,Lh,Ah,Th),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=x._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=x._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return j([ue.button,ue.label,this.suggestion?ue.suggestion:ue.filter,this.canClose?ue.labelWithClose:ue.labelWithoutClose])}get _closeClasses(){return j([ue.button,ue.close,this.suggestion?ue.suggestion:ue.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
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
    `}}customElements.get("w-pill")||customElements.define("w-pill",Ph);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(t,e,r){return t?e(t):r?.(t)}const Dh=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Bh=JSON.parse('{"select.label.optional":["(optional)"]}'),Mh=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),zh=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Rh=JSON.parse('{"select.label.optional":["(valfritt)"]}'),Ih=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var jh=Object.defineProperty,ke=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&jh(e,r,n),n};const Ce={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},wn={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Vr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class me extends Lo(D){constructor(){super(),this._setValue=e=>{this.value=e,this.setValue(e)},Ne(Bh,zh,Mh,Dh,Rh),this._options=this.innerHTML}static{this.styles=[ae,Ih]}firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return j([Ce.base,!this.invalid&&!this.disabled&&!this.readOnly&&Ce.default,this.invalid&&Ce.invalid,this.disabled&&Ce.disabled,this.readOnly&&Ce.readOnly])}get#t(){return j([Vr.base,this.invalid?Vr.colorInvalid:Vr.color])}get#n(){return j([Ce.chevron,this.disabled&&Ce.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Ce.wrapper}">
      ${Vt(this.label,()=>w`<label class="${wn.base}" for="${this.#r}">
            ${this.label}
            ${Vt(this.optional,()=>w`<span class="${wn.optional}"
                  >${x._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Ce.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${V(this.#o)}"
          aria-invalid="${V(this.invalid)}"
          aria-errormessage="${V(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${fo(this._options)}
        </select>
        <div class="${this.#n}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Vt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}ke([v({attribute:"auto-focus",type:Boolean,reflect:!0})],me.prototype,"autoFocus");ke([v({type:Boolean,reflect:!0})],me.prototype,"invalid");ke([v({type:Boolean,reflect:!0})],me.prototype,"always");ke([v({reflect:!0})],me.prototype,"hint");ke([v({reflect:!0})],me.prototype,"label");ke([v({type:Boolean,reflect:!0})],me.prototype,"optional");ke([v({type:Boolean,reflect:!0})],me.prototype,"disabled");ke([v({attribute:"read-only",type:Boolean,reflect:!0})],me.prototype,"readOnly");ke([v({state:!0})],me.prototype,"_options");ke([v({reflect:!0})],me.prototype,"name");ke([v({reflect:!0})],me.prototype,"value");customElements.get("w-select")||customElements.define("w-select",me);const Fh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Hh=Object.defineProperty,X=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Hh(e,r,n),n};const Te={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},Uh={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},qr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class q extends Lo(D){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[ae,Fh]}get _inputstyles(){return j([Te.base,this._hasSuffix&&Te.suffix,this._hasPrefix&&Te.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Te.default,this.invalid&&!this.disabled&&!this.readOnly&&Te.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Te.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Te.readOnly])}get _helptextstyles(){return j([qr.base,this.invalid?qr.colorInvalid:qr.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Uh.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const n=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(n)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Te.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputstyles}"
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
      ${this.helpText&&w`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}X([v({type:Boolean,reflect:!0})],q.prototype,"disabled");X([v({type:Boolean,reflect:!0})],q.prototype,"invalid");X([v({type:String,reflect:!0})],q.prototype,"id");X([v({type:String,reflect:!0})],q.prototype,"label");X([v({type:String,reflect:!0})],q.prototype,"helpText");X([v({type:String,reflect:!0})],q.prototype,"size");X([v({type:Number,reflect:!0})],q.prototype,"max");X([v({type:Number,reflect:!0})],q.prototype,"min");X([v({type:Number,reflect:!0,attribute:"min-length"})],q.prototype,"minLength");X([v({type:Number,reflect:!0,attribute:"max-length"})],q.prototype,"maxLength");X([v({type:String,reflect:!0})],q.prototype,"pattern");X([v({type:String,reflect:!0})],q.prototype,"placeholder");X([v({type:Boolean,reflect:!0,attribute:"read-only"})],q.prototype,"readOnly");X([v({type:Boolean,reflect:!0})],q.prototype,"required");X([v({type:String,reflect:!0})],q.prototype,"type");X([v({type:String,reflect:!0})],q.prototype,"value");X([v({type:String,reflect:!0})],q.prototype,"name");X([v({type:Boolean})],q.prototype,"_hasPrefix");X([v({type:Boolean})],q.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",q);const Er=typeof window<"u";function Jh(t,e){if(!Er)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Wh(t){return Er?customElements.get("w-toast-container").init().del(t):void 0}function Vh(t,e){if(!Er)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:qh}=_s,yn=()=>document.createComment(""),yt=(t,e,r)=>{const o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=o.insertBefore(yn(),n),s=o.insertBefore(yn(),n);r=new qh(i,s,t,t.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(i!==n||l){let a=r._$AA;for(;a!==i;){const u=a.nextSibling;o.insertBefore(a,n),a=u}}}return r},He=(t,e,r=t)=>(t._$AI(e,r),t),Yh={},Qh=(t,e=Yh)=>t._$AH=e,Xh=t=>t._$AH,Yr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=(t,e,r)=>{const o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},Zh=po(class extends go{constructor(t){if(super(t),t.type!==ho.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const n=[],i=[];let s=0;for(const l of t)n[s]=o?o(l,s):s,i[s]=r(l,s),s++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const n=Xh(t),{values:i,keys:s}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=s,i;const l=this.ut??=[],a=[];let u,h,c=0,g=n.length-1,d=0,f=i.length-1;for(;c<=g&&d<=f;)if(n[c]===null)c++;else if(n[g]===null)g--;else if(l[c]===s[d])a[d]=He(n[c],i[d]),c++,d++;else if(l[g]===s[f])a[f]=He(n[g],i[f]),g--,f--;else if(l[c]===s[f])a[f]=He(n[c],i[f]),yt(t,a[f+1],n[c]),c++,f--;else if(l[g]===s[d])a[d]=He(n[g],i[d]),yt(t,n[c],n[g]),g--,d++;else if(u===void 0&&(u=xn(s,d,f),h=xn(l,c,g)),u.has(l[c]))if(u.has(l[g])){const p=h.get(s[d]),m=p!==void 0?n[p]:null;if(m===null){const E=yt(t,n[c]);He(E,i[d]),a[d]=E}else a[d]=He(m,i[d]),yt(t,n[c],m),n[p]=null;d++}else Yr(n[g]),g--;else Yr(n[c]),c++;for(;d<=f;){const p=yt(t,a[f+1]);He(p,i[d]),a[d++]=p}for(;c<=g;){const p=n[c++];p!==null&&Yr(p)}return this.ut=s,Qh(t,a),Oe}});class rs extends oe{static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const n of this._toasts)Date.now()<=n[1].duration?e.push(n):r.push(n);const o=[];for(const[n]of r){const i=this.renderRoot.querySelector(`#${n}`);o.push(i.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Mr.wrapper}">
        <div class="${Mr.base}" id="w-toast-container-list">
          ${Zh(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Mr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",rs);const Po=typeof window<"u";let os=!0;if(Po){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>os=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const ns=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},is=t=>{const e=os?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},Kh=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Gh=t=>()=>{t&&t()},ss=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Kh(t,e);ns(t),t.style.height="auto";let n=t.scrollHeight;if(Po&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",is(t),requestAnimationFrame(()=>t.style.height=n+"px")}),r)return r},as=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Gh(e);ns(t);let n=t.scrollHeight;if(Po&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=n+"px",t.style.transitionTimingFunction="ease-in",is(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},ep=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),tp=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),rp=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),op=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),np=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Pe={success:"success",error:"error",warning:"warning"};class ip extends oe{static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Ne(tp,op,rp,ep,np),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&ss(this._wrapper,()=>this._expanded=!0)}get#e(){return j([we.base,this.type===Pe.success&&we.positive,this.type===Pe.warning&&we.warning,this.type===Pe.error&&we.negative])}get#t(){return j([we.iconBase,this.type===Pe.success&&we.iconPositive,this.type===Pe.warning&&we.iconWarning,this.type===Pe.error&&we.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Pe.warning}get _error(){return this.type===Pe.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?x._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?x._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):x._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?as(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${we.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${we.content}">
          <p>${this.text}</p>
        </div>
        ${Vt(this.canclose===!0,()=>w`
            <button class="${we.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",ip);class sp extends oe{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&ss(this._wrapper),!this.show&&!this._removeElement&&as(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${V(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",sp);class ap extends oe{static properties={level:{type:Number}};static styles=[oe.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?fo(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",ap);var lp={},cp=JSON.parse('{"icon.title.bag":["Veske"]}'),dp=JSON.parse('{"icon.title.bag":["Handbag"]}'),up=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),hp=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),pp=JSON.parse('{"icon.title.bag":["Handväska"]}'),ls=["en","nb","fi","da","sv"],cs="en",gp=()=>{var t;let e;switch((t=process==null?void 0:lp)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ds=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":cs},Qr=t=>ls.find(e=>t===e||t.toLowerCase().includes(e))||ds();function fp(){var t;if(typeof window>"u"){const e=gp();return Qr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ds();return ls.includes(e)?Qr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Qr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),cs}}var bp=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,vp=(t,e,r,o,n)=>{const i=fp(),s=bp(i,t,e,r,o,n);x.load(i,s),x.activate(i)};vp(dp,cp,up,hp,pp);var mp=class extends D{render(){const t=x.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",mp);Er&&(window.WarpToastContainer=rs,window.toast=Jh,window.updateToast=Vh,window.removeToast=Wh);const wp={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class yp extends oe{static styles=[oe.styles,F`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=wp;return w`
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
      `)}}customElements.define("sidebar-element",yp);
