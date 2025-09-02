(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=globalThis,Jr=Ft.ShadowRoot&&(Ft.ShadyCSS===void 0||Ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qr=Symbol(),_o=new WeakMap;let ai=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Jr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=_o.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&_o.set(r,e))}return e}toString(){return this.cssText}};const li=t=>new ai(typeof t=="string"?t:t+"",void 0,qr),ee=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new ai(r,t,qr)},jn=(t,e)=>{if(Jr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=Ft.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},So=Jr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return li(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hn,defineProperty:zn,getOwnPropertyDescriptor:Un,getOwnPropertyNames:Wn,getOwnPropertySymbols:Vn,getPrototypeOf:Jn}=Object,lr=globalThis,Eo=lr.trustedTypes,qn=Eo?Eo.emptyScript:"",Qn=lr.reactiveElementPolyfillSupport,yt=(t,e)=>t,Ht={toAttribute(t,e){switch(e){case Boolean:t=t?qn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Qr=(t,e)=>!Hn(t,e),Co={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Qr};Symbol.metadata??=Symbol("metadata"),lr.litPropertyMetadata??=new WeakMap;let je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Co){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&zn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=Un(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);n.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Co}static _$Ei(){if(this.hasOwnProperty(yt("elementProperties")))return;const e=Jn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yt("properties"))){const r=this.properties,o=[...Wn(r),...Vn(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(So(i))}else e!==void 0&&r.push(So(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:Ht).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ht;this._$Em=i,this[i]=s.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Qr)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[yt("elementProperties")]=new Map,je[yt("finalized")]=new Map,Qn?.({ReactiveElement:je}),(lr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,zt=Yr.trustedTypes,Ao=zt?zt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Kr="$lit$",ke=`lit$${Math.random().toFixed(9).slice(2)}$`,Gr="?"+ke,Yn=`<${Gr}>`,We=document,kt=()=>We.createComment(""),_t=t=>t===null||typeof t!="object"&&typeof t!="function",Zr=Array.isArray,ci=t=>Zr(t)||typeof t?.[Symbol.iterator]=="function",$r=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oo=/-->/g,Lo=/>/g,Be=RegExp(`>|${$r}(?:([^\\s"'>=/]+)(${$r}*=${$r}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),To=/'/g,No=/"/g,di=/^(?:script|style|textarea|title)$/i,Kn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),v=Kn(1),_e=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Po=new WeakMap,He=We.createTreeWalker(We,129);function ui(t,e){if(!Zr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ao!==void 0?Ao.createHTML(e):e}const hi=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=gt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===gt?h[1]==="!--"?s=Oo:h[1]!==void 0?s=Lo:h[2]!==void 0?(di.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Be):h[3]!==void 0&&(s=Be):s===Be?h[0]===">"?(s=i??gt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Be:h[3]==='"'?No:To):s===No||s===To?s=Be:s===Oo||s===Lo?s=gt:(s=Be,i=void 0);const d=s===Be&&t[l+1].startsWith("/>")?" ":"";n+=s===gt?a+Yn:c>=0?(o.push(u),a.slice(0,c)+Kr+a.slice(c)+ke+d):a+ke+(c===-2?l:d)}return[ui(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Rr=class pi{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=hi(e,r);if(this.el=pi.createElement(u,o),He.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=He.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Kr)){const g=h[s++],d=i.getAttribute(c).split(ke),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?mi:f[1]==="?"?bi:f[1]==="@"?vi:Nt}),i.removeAttribute(c)}else c.startsWith(ke)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(di.test(i.tagName)){const c=i.textContent.split(ke),g=c.length-1;if(g>0){i.textContent=zt?zt.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],kt()),He.nextNode(),a.push({type:2,index:++n});i.append(c[g],kt())}}}else if(i.nodeType===8)if(i.data===Gr)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(ke,c+1))!==-1;)a.push({type:7,index:n}),c+=ke.length-1}n++}}static createElement(e,r){const o=We.createElement("template");return o.innerHTML=e,o}};function Ve(t,e,r=t,o){if(e===_e)return e;let i=o!==void 0?r.o?.[o]:r.l;const n=_t(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=Ve(t,i._$AS(t,e.values),i,o)),e}class gi{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??We).importNode(r,!0);He.currentNode=i;let n=He.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new cr(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new wi(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=He.nextNode(),s++)}return He.currentNode=We,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let cr=class fi{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ve(this,e,r),_t(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==_e&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ci(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&_t(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Rr.createElement(ui(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new gi(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Po.get(e.strings);return r===void 0&&Po.set(e.strings,r=new Rr(e)),r}k(e){Zr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new fi(this.O(kt()),this.O(kt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=j}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=Ve(this,e,r,0),s=!_t(e)||e!==this._$AH&&e!==_e,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=Ve(this,l[o+a],r,a),u===_e&&(u=this._$AH[a]),s||=!_t(u)||u!==this._$AH[a],u===j?e=j:e!==j&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mi extends Nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class bi extends Nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class vi extends Nt{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=Ve(this,e,r,0)??j)===_e)return;const o=this._$AH,i=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==j&&(o===j||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class wi{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}}const Gn={M:Kr,P:ke,A:Gr,C:1,L:hi,R:gi,D:ci,V:Ve,I:cr,H:Nt,N:bi,U:vi,B:mi,F:wi},Zn=Yr.litHtmlPolyfillSupport;Zn?.(Rr,cr),(Yr.litHtmlVersions??=[]).push("3.2.0");const Xn=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new cr(e.insertBefore(kt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let W=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Xn(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return _e}};W._$litElement$=!0,W.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:W});const es=globalThis.litElementPolyfillSupport;es?.({LitElement:W});(globalThis.litElementVersions??=[]).push("4.1.0");function ts(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const Do=String.raw`[A-Za-z][^/\s>]*`,rs=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,os=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,yi=String.raw`${rs}|${os}`,is=String.raw`"(?<quotedAttrValue>[^"]*)"`,ns=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,ss=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,as=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,ls=String.raw`${is}|${ns}|${ss}`,cs=String.raw`(?<attrName>${as})(?:\s*=\s*(?:${ls}))?`,ds=String.raw`${yi}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,$i=String.raw`(?<attrSpace>\s*)(?:${cs}|(?<attrText>${ds}))`,us={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Do})(?<attrs>(?:${$i})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Do})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${yi}|['"]`,wildcard:String.raw`.`},hs=Object.entries(us).map(([t,e])=>`(?<${t}>${e})`).join("|");function*ps(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const gs=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function St(t,e="  ",r=80){const o=new RegExp(hs,"gys"),i=new RegExp($i,"gy"),n=[];let s=null,l=0,a=0,u="",h=0,c="";const g=()=>{if(c&&c!=`
`){const _=u.indexOf(`
`),C=_==-1?u.length:_;a+c.length+C>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",b=`${c}${p}${u}`;if(b){const _=b.lastIndexOf(`
`);_==-1?a+=b.length:a=b.length-_-1,n.push(b)}u=c=""},d=(...p)=>{for(const b of p)!s&&/^\s+$/.test(b)?(g(),c=b):(u||(h=l),u+=b)};for(const p of ps(o,t)){if(St.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const b=p.groups.endTagName.toLowerCase();b==s&&(s=null),s||(--l,d(`</${b}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const b=p.groups.startTagName.toLowerCase();if(d(`<${b}`),++l,p.groups.attrs){let{lastIndex:C}=i,E,B;for(;E=i.exec(p.groups.attrs);){if({lastIndex:C}=i,St.__strict&&E.groups.attrText)throw new Error("Unexpected attr text");E.groups.attrText?(E.groups.attrSpace&&d(/\n/.test(E.groups.attrSpace)?`
`:" "),d(E.groups.attrText)):((E.groups.attrSpace||!B?.groups.attrText)&&d(/\n/.test(E.groups.attrSpace)?`
`:" "),d(`${E.groups.attrName}${E.groups.quotedAttrValue?`="${E.groups.quotedAttrValue}"`:E.groups.singleQuotedAttrValue?`='${E.groups.singleQuotedAttrValue}'`:E.groups.unquotedAttrValue?`=${E.groups.unquotedAttrValue}`:""}`)),B=E}if(C!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const _=!!p.groups.closingSlash;d(_?" />":">"),_||gs.has(b)?--l:["pre","textarea","script","style"].includes(b)&&(s=b)}}g();let f=!1;for(;/^\s+$/.test(n[n.length-1]);){const p=n.pop();/\n/.test(p)&&(f=!0)}return f&&n.push(`
`),n.join("")}St.default=St;var fs=St;const ms=ts(fs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},eo=t=>(...e)=>({_$litDirective$:t,values:e});let to=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ir extends to{constructor(e){if(super(e),this.it=j,e.type!==Xr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===_e)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ir.directiveName="unsafeHTML",Ir.resultType=1;const ro=eo(Ir);class bs extends W{static styles=ee`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=ms(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return v` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${ro(this.source)}</code></pre>`}}customElements.define("syntax-highlight",bs);var I=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?I.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};const Me={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},rt={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},le={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},be={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},xr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},pe={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},te={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"},Ae="font-bold focusable justify-center transition-colors ease-in-out",U={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},P={primary:`border-0 rounded-8 ${Ae}`,secondary:`border-2 rounded-8 ${Ae}`,utility:`border rounded-4 ${Ae}`,negative:`border-0 rounded-8 ${Ae}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Ae}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${U.link}`},k={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},x={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${U.loading}`,quiet:`border-0 rounded-8 ${Ae}`,utilityQuiet:`border-0 rounded-4 ${Ae}`,negativeQuiet:`border-0 rounded-8 ${Ae}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${U.disabled}`},L={secondary:`${k.medium} ${x.medium} ${P.secondary} ${U.secondary}`,secondaryHref:`${k.medium} ${x.medium} ${P.secondary} ${U.secondary}`,secondaryDisabled:`${k.medium} ${x.medium} ${P.secondary} ${$.isDisabled}`,secondarySmall:`${x.xsmall} ${k.xsmall} ${P.secondary} ${U.secondary}`,secondarySmallDisabled:`${x.xsmall} ${k.xsmall} ${P.secondary} ${$.isDisabled}`,secondaryQuiet:`${k.medium} ${x.medium} ${$.quiet} ${U.quiet}`,secondaryQuietDisabled:`${k.medium} ${x.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${x.xsmall} ${k.xsmall} ${$.quiet} ${U.quiet}`,secondarySmallQuietDisabled:`${x.xsmall} ${k.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${k.medium} ${x.medium} ${P.secondary} ${$.inProgress}`,secondarySmallLoading:`${x.xsmall} ${k.xsmall}  ${P.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${x.xsmall} ${k.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${k.medium} ${x.medium} ${$.quiet} ${$.inProgress}`,primary:`${k.large} ${x.medium} ${P.primary} ${U.primary}`,primaryDisabled:`${k.large} ${x.medium} ${$.isDisabled} ${P.primary}`,primarySmall:`${k.small} ${x.xsmall} ${P.primary} ${U.primary}`,primarySmallDisabled:`${k.small} ${x.xsmall} ${$.isDisabled} ${P.primary} `,primaryQuiet:`${k.large} ${x.medium} ${$.quiet} ${U.quiet}`,primaryQuietDisabled:`${k.large} ${x.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${k.small} ${x.xsmall} ${$.quiet} ${U.quiet}`,primarySmallQuietDisabled:`${k.small} ${x.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${k.large} ${x.medium} ${$.inProgress} ${P.primary}`,primarySmallLoading:`${k.small} ${x.xsmall}  ${$.inProgress} ${P.primary}`,primarySmallQuietLoading:`${k.small} ${x.xsmall} ${$.quiet} ${$.inProgress} ${P.primary}`,primaryQuietLoading:`${k.large} ${x.medium} ${$.quiet} ${$.inProgress}`,utility:`${k.utility} ${x.medium} ${P.utility} ${U.utility}`,utilityDisabled:`${k.utility} ${x.medium} ${P.utility} ${$.isDisabled}`,utilityQuiet:`${k.large} ${x.medium} ${$.utilityQuiet} ${U.utilityQuiet}`,utilityQuietDisabled:`${k.large} ${x.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${k.smallUtility} ${x.xsmall} ${P.utility} ${U.utility}`,utilitySmallDisabled:`${k.smallUtility} ${x.xsmall} ${P.utility} ${$.isDisabled}`,utilitySmallQuiet:`${k.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${U.utilityQuiet}`,utilitySmallQuietDisabled:`${k.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${k.large} ${x.medium} ${P.utility} ${$.inProgress}`,utilitySmallLoading:`${k.smallUtility} ${x.xsmall} ${P.utility} ${$.inProgress}`,utilityQuietLoading:`${k.large} ${x.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${k.smallUtility} ${x.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${k.large} ${x.medium} ${P.negative} ${U.destructive}`,negativeDisabled:`${k.large} ${x.medium} ${P.negative} ${$.isDisabled}`,negativeQuiet:`${k.large} ${x.medium} ${$.negativeQuiet} ${U.negativeQuiet}`,negativeQuietDisabled:`${k.large} ${x.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${k.small} ${x.xsmall} ${P.negative} ${U.destructive}`,negativeSmallDisabled:`${k.small} ${x.xsmall} ${P.negative} ${$.isDisabled}`,negativeSmallQuiet:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${U.negativeQuiet}`,negativeSmallQuietDisabled:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${k.large} ${x.medium} ${P.negative} ${$.inProgress}`,negativeSmallLoading:`${k.small} ${x.xsmall} ${$.inProgress} ${P.negative}`,negativeQuietLoading:`${k.large} ${x.medium} ${$.negativeQuiet} ${P.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${k.pill} ${x.medium} ${P.pill} ${U.pill}`,pillSmall:`${k.pillSmall} ${x.xsmall} ${P.pill} ${U.pill}`,pillLoading:`${k.pill} ${x.medium} ${P.pill} ${$.inProgress}`,pillSmallLoading:`${k.pillSmall} ${x.xsmall} ${P.pill} ${$.inProgress}`,link:`${k.link} ${x.medium} ${P.link}`,linkSmall:`${k.link} ${x.xsmall} ${P.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},ft={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},Ee={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},xe={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Fr={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},nt={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},xi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",vs={wrapper:xi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ws={wrapper:xi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ot={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},et={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${x.medium} ${P.pill} ${U.pill} justify-self-end -mr-8 ml-8`};var oo={},ki={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(ki);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=ki;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,f,p){const b=r(d);if(Number.isNaN(b)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(f));return b}function i(d){const f=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function n(d,f){const p=o(d,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const b=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,b)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=d.slice(1,-1),p=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(b){throw b instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):b}}function a(d,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(d,f=!1){return d.replace(c,function(p,b,_,C,E,B,y,A,O){if(b!==void 0)return"\\";if(_!==void 0)return i(_);if(C!==void 0)return l(C);if(E!==void 0)return n(E,B);if(y!==void 0)return n(y);if(A==="0")return"\0";if(A!==void 0)return a(A,!f);if(O!==void 0)return h(O);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(oo);const Ue=t=>typeof t=="string",ys=t=>typeof t=="function",Bo=new Map,_i="en";function io(t){return[...Array.isArray(t)?t:[t],_i]}function Si(t,e,r){const o=io(t);return Ut(()=>Wt("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ue(e)?new Date(e):e)}function jr(t,e,r){const o=io(t);return Ut(()=>Wt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Mo(t,e,r,{offset:o=0,...i}){const n=io(t),s=e?Ut(()=>Wt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Ut(()=>Wt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Ut(t,e){const r=t();let o=Bo.get(r);return o||(o=e(),Bo.set(r,o)),o}function Wt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Ei=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,Ci="%__lingui_octothorpe__%",$s=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s]||{style:s},n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=jr(o,s,a);return l.replace(new RegExp(Ci,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Mo(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Mo(o,!0,s,l);return n(s-a,u)},select:xs,number:(s,l)=>jr(o,s,i(l)),date:(s,l)=>Si(o,s,i(l))}},xs=(t,e)=>e[t]??e.other;function ks(t,e,r){return(o={},i)=>{const n=$s(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Ci;if(Ue(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([_,C])=>{p[_]=s(C,d==="plural"||d==="selectordinal")}):p=f;let b;if(d){const _=n[d];b=_(o[g],p)}else b=o[g];return b==null?h:h+b},""):a,l=s(t);return Ue(l)&&Ei.test(l)?oo.unraw(l.trim()):Ue(l)?l.trim():l?String(l):""}}var _s=Object.defineProperty,Ss=(t,e,r)=>e in t?_s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Es=(t,e,r)=>(Ss(t,e+"",r),r);let Cs=class{constructor(){Es(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var As=Object.defineProperty,Os=(t,e,r)=>e in t?As(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tt=(t,e,r)=>(Os(t,typeof e!="symbol"?e+"":e,r),r);let Ls=class extends Cs{constructor(e){super(),tt(this,"_locale",""),tt(this,"_locales"),tt(this,"_localeData",{}),tt(this,"_messages",{}),tt(this,"_missing"),tt(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??_i,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Ue(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return ys(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Ue(a)&&Ei.test(a)?JSON.parse(`"${a}"`):Ue(a)?a:ks(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Si(this._locales||this._locale,e,r)}number(e,r){return jr(this._locales||this._locale,e,r)}};function Ts(t={}){return new Ls(t)}const kr=Ts();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis,Vt=no.trustedTypes,Ro=Vt?Vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ai="$lit$",Oe=`lit$${Math.random().toFixed(9).slice(2)}$`,Oi="?"+Oe,Ns=`<${Oi}>`,Je=document,Et=()=>Je.createComment(""),Ct=t=>t===null||typeof t!="object"&&typeof t!="function",so=Array.isArray,Ps=t=>so(t)||typeof t?.[Symbol.iterator]=="function",_r=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Io=/-->/g,Fo=/>/g,Re=RegExp(`>|${_r}(?:([^\\s"'>=/]+)(${_r}*=${_r}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jo=/'/g,Ho=/"/g,Li=/^(?:script|style|textarea|title)$/i,at=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),zo=new WeakMap,ze=Je.createTreeWalker(Je,129);function Ti(t,e){if(!so(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ro!==void 0?Ro.createHTML(e):e}const Ds=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=mt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===mt?h[1]==="!--"?s=Io:h[1]!==void 0?s=Fo:h[2]!==void 0?(Li.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Re):h[3]!==void 0&&(s=Re):s===Re?h[0]===">"?(s=i??mt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Re:h[3]==='"'?Ho:jo):s===Ho||s===jo?s=Re:s===Io||s===Fo?s=mt:(s=Re,i=void 0);const d=s===Re&&t[l+1].startsWith("/>")?" ":"";n+=s===mt?a+Ns:c>=0?(o.push(u),a.slice(0,c)+Ai+a.slice(c)+Oe+d):a+Oe+(c===-2?l:d)}return[Ti(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class At{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Ds(e,r);if(this.el=At.createElement(u,o),ze.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=ze.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Ai)){const g=h[s++],d=i.getAttribute(c).split(Oe),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?Ms:f[1]==="?"?Rs:f[1]==="@"?Is:dr}),i.removeAttribute(c)}else c.startsWith(Oe)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Li.test(i.tagName)){const c=i.textContent.split(Oe),g=c.length-1;if(g>0){i.textContent=Vt?Vt.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],Et()),ze.nextNode(),a.push({type:2,index:++n});i.append(c[g],Et())}}}else if(i.nodeType===8)if(i.data===Oi)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(Oe,c+1))!==-1;)a.push({type:7,index:n}),c+=Oe.length-1}n++}}static createElement(e,r){const o=Je.createElement("template");return o.innerHTML=e,o}}function lt(t,e,r=t,o){if(e===at)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const n=Ct(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=lt(t,i._$AS(t,e.values),i,o)),e}class Bs{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Je).importNode(r,!0);ze.currentNode=i;let n=ze.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new Pt(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new Fs(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=ze.nextNode(),s++)}return ze.currentNode=Je,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Pt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=lt(this,e,r),Ct(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==at&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Ct(this._$AH)?this._$AA.nextSibling.data=e:this.T(Je.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=At.createElement(Ti(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Bs(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=zo.get(e.strings);return r===void 0&&zo.set(e.strings,r=new At(e)),r}k(e){so(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Pt(this.O(Et()),this.O(Et()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class dr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=lt(this,e,r,0),s=!Ct(e)||e!==this._$AH&&e!==at,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=lt(this,l[o+a],r,a),u===at&&(u=this._$AH[a]),s||=!Ct(u)||u!==this._$AH[a],u===K?e=K:e!==K&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ms extends dr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class Rs extends dr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Is extends dr{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=lt(this,e,r,0)??K)===at)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Fs{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}}const js=no.litHtmlPolyfillSupport;js?.(At,Pt),(no.litHtmlVersions??=[]).push("3.2.1");const Hs=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new Pt(e.insertBefore(Et(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $t=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hs(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return at}};$t._$litElement$=!0,$t.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:$t});const zs=globalThis.litElementPolyfillSupport;zs?.({LitElement:$t});(globalThis.litElementVersions??=[]).push("4.1.1");class Us extends $t{#e=!1;get i18n(){return this.#e||(kr.load(this.locale,this.translations),kr.activate(this.locale),this.#e=!0),kr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const ao=()=>!(typeof window<"u");class Ni{isServer=!1;css=""}const Ws=(t=[])=>{const e=new Ni;if(ao()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},Vs=()=>Ws(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),Js=async(t=[])=>{const e=new Ni;if(ao()){for(const n of t)e.css+=`@import url('${n}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(n=>fetch(n))),i=await Promise.all(o.map(n=>n.text()));for(const n of i)e.css+=n;return e},Uo=async()=>Js(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(m){var w=m.replace(s,"");return w!==m&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),w.trim()}function a(m){return"isConnected"in m?m.isConnected:document.contains(m)}function u(m){return m.filter(function(w,N){return m.indexOf(w)===N})}function h(m,w){return m.filter(function(N){return w.indexOf(N)===-1})}function c(m){m.parentNode.removeChild(m)}function g(m){return m.shadowRoot||r.get(m)}var d=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,p=f.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function b(m){return typeof m=="object"?z.isPrototypeOf(m)||p.isPrototypeOf(m):!1}function _(m){return typeof m=="object"?p.isPrototypeOf(m):!1}var C=new WeakMap,E=new WeakMap,B=new WeakMap,y=new WeakMap;function A(m,w){var N=document.createElement("style");return B.get(m).set(w,N),E.get(m).push(w),N}function O(m,w){return B.get(m).get(w)}function M(m,w){B.get(m).delete(w),E.set(m,E.get(m).filter(function(N){return N!==w}))}function H(m,w){requestAnimationFrame(function(){w.textContent=C.get(m).textContent,y.get(m).forEach(function(N){return w.sheet[N.method].apply(w.sheet,N.args)})})}function V(m){if(!C.has(m))throw new TypeError("Illegal invocation")}function Y(){var m=this,w=document.createElement("style");e.body.appendChild(w),C.set(m,w),E.set(m,[]),B.set(m,new WeakMap),y.set(m,[])}var z=Y.prototype;z.replace=function(w){try{return this.replaceSync(w),Promise.resolve(this)}catch(N){return Promise.reject(N)}},z.replaceSync=function(w){if(V(this),typeof w=="string"){var N=this;C.get(N).textContent=l(w),y.set(N,[]),E.get(N).forEach(function(ie){ie.isConnected()&&H(N,O(N,ie))})}},i(z,"cssRules",{configurable:!0,enumerable:!0,get:function(){return V(this),C.get(this).sheet.cssRules}}),i(z,"media",{configurable:!0,enumerable:!0,get:function(){return V(this),C.get(this).sheet.media}}),d.forEach(function(m){z[m]=function(){var w=this;V(w);var N=arguments;y.get(w).push({method:m,args:N}),E.get(w).forEach(function(se){if(se.isConnected()){var X=O(w,se).sheet;X[m].apply(X,N)}});var ie=C.get(w).sheet;return ie[m].apply(ie,N)}}),i(Y,Symbol.hasInstance,{configurable:!0,value:b});var ne={childList:!0,subtree:!0},D=new WeakMap;function G(m){var w=D.get(m);return w||(w=new xo(m),D.set(m,w)),w}function q(m){i(m.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(w){G(this).update(w)}})}function re(m,w){for(var N=document.createNodeIterator(m,NodeFilter.SHOW_ELEMENT,function(se){return g(se)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ie=void 0;ie=N.nextNode();)w(g(ie))}var Z=new WeakMap,oe=new WeakMap,Ze=new WeakMap;function In(m,w){return w instanceof HTMLStyleElement&&oe.get(m).some(function(N){return O(N,m)})}function $o(m){var w=Z.get(m);return w instanceof Document?w.body:w}function yr(m){var w=document.createDocumentFragment(),N=oe.get(m),ie=Ze.get(m),se=$o(m);ie.disconnect(),N.forEach(function(X){w.appendChild(O(X,m)||A(X,m))}),se.insertBefore(w,null),ie.observe(se,ne),N.forEach(function(X){H(X,O(X,m))})}function xo(m){var w=this;w.sheets=[],Z.set(w,m),oe.set(w,[]),Ze.set(w,new MutationObserver(function(N,ie){if(!document){ie.disconnect();return}N.forEach(function(se){t||n.call(se.addedNodes,function(X){X instanceof Element&&re(X,function(Xe){G(Xe).connect()})}),n.call(se.removedNodes,function(X){X instanceof Element&&(In(w,X)&&yr(w),t||re(X,function(Xe){G(Xe).disconnect()}))})})}))}if(xo.prototype={isConnected:function(){var m=Z.get(this);return m instanceof Document?m.readyState!=="loading":a(m.host)},connect:function(){var m=$o(this);Ze.get(this).observe(m,ne),oe.get(this).length>0&&yr(this),re(m,function(w){G(w).connect()})},disconnect:function(){Ze.get(this).disconnect()},update:function(m){var w=this,N=Z.get(w)===document?"Document":"ShadowRoot";if(!Array.isArray(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Iterator getter is not callable.");if(!m.every(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Failed to convert value to 'CSSStyleSheet'");if(m.some(_))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Can't adopt non-constructed stylesheets");w.sheets=m;var ie=oe.get(w),se=u(m),X=h(ie,se);X.forEach(function(Xe){c(O(Xe,w)),M(Xe,w)}),oe.set(w,se),w.isConnected()&&se.length>0&&yr(w)}},window.CSSStyleSheet=Y,q(Document),"ShadowRoot"in window){q(ShadowRoot);var ko=Element.prototype,Fn=ko.attachShadow;ko.attachShadow=function(w){var N=Fn.call(this,w);return w.mode==="closed"&&r.set(this,N),N}}var Rt=G(document);Rt.isConnected()?Rt.connect():document.addEventListener("DOMContentLoaded",Rt.connect.bind(Rt))})();let wt;if(ao()){const t=await Uo();wt=li(t.css)}else{wt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await Uo();wt.replaceSync(r.css)}catch{const e=Vs();wt.replaceSync(e.css)}}class F extends Us{static styles=[wt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??j;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=Symbol.for(""),qs=t=>{if(t?.r===Pi)return t?._$litStatic$},ye=t=>({_$litStatic$:t,r:Pi}),Wo=new Map,Qs=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(n=r[u],(i=qs(n))!==void 0);)a+=i+e[++u],h=!0;u!==o&&l.push(n),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=Wo.get(c))===void 0&&(s.raw=s,Wo.set(c,e=s)),r=l}return t(e,...r)},$e=Qs(v),Le=t=>typeof t=="string",Ys=t=>typeof t=="function",Vo=new Map,Di="en";function lo(t){return[...Array.isArray(t)?t:[t],Di]}function co(t,e,r){const o=lo(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return Jt(()=>qt("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(Le(e)?new Date(e):e)}function Ks(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return co(t,e,o)}function Hr(t,e,r){const o=lo(t);return Jt(()=>qt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Jo(t,e,r,{offset:o=0,...i}){const n=lo(t),s=e?Jt(()=>qt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Jt(()=>qt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Jt(t,e){const r=t();let o=Vo.get(r);return o||(o=e(),Vo.set(r,o)),o}function qt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Bi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Mi="%__lingui_octothorpe__%",Gs=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s],n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=Hr(o,s,a);return l.replace(new RegExp(Mi,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Jo(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Jo(o,!0,s,l);return n(s-a,u)},select:Zs,number:(s,l)=>Hr(o,s,i(l)||{style:l}),date:(s,l)=>co(o,s,i(l)||l),time:(s,l)=>Ks(o,s,i(l)||l)}},Zs=(t,e)=>e[t]??e.other;function Xs(t,e,r){return(o={},i)=>{const n=Gs(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Mi;if(Le(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([_,C])=>{p[_]=s(C,d==="plural"||d==="selectordinal")}):p=f;let b;if(d){const _=n[d];b=_(o[g],p)}else b=o[g];return b==null?h:h+b},""):a,l=s(t);return Le(l)&&Bi.test(l)?oo.unraw(l):Le(l)?l:l?String(l):""}}var ea=Object.defineProperty,ta=(t,e,r)=>e in t?ea(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ra=(t,e,r)=>(ta(t,e+"",r),r);class oa{constructor(){ra(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var ia=Object.defineProperty,na=(t,e,r)=>e in t?ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ie=(t,e,r)=>(na(t,typeof e!="symbol"?e+"":e,r),r);class sa extends oa{constructor(e){super(),Ie(this,"_locale",""),Ie(this,"_locales"),Ie(this,"_localeData",{}),Ie(this,"_messages",{}),Ie(this,"_missing"),Ie(this,"_messageCompiler"),Ie(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Di,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),Le(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return Ys(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Le(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Le(a)&&Bi.test(a)?JSON.parse(`"${a}"`):Le(a)?a:Xs(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return co(this._locales||this._locale,e,r)}number(e,r){return Hr(this._locales||this._locale,e,r)}}function aa(t={}){return new sa(t)}const S=aa();var la={},ca=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),da=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),ua=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),ha=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),pa=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Ri=["en","nb","fi","da","sv"],Ii="en",ga=()=>{var t;let e;switch((t=process==null?void 0:la)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Fi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ii},Sr=t=>Ri.find(e=>t===e||t.toLowerCase().includes(e))||Fi();function fa(){var t;if(typeof window>"u"){const e=ga();return Sr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Fi();return Ri.includes(e)?Sr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Sr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ii}}var ma=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ba=(t,e,r,o,i)=>{const n=fa(),s=ma(n,t,e,r,o,i);S.load(n,s),S.activate(n)};ba(da,ca,ua,ha,pa);var va=class extends W{render(){const t=S.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",va);var wa={},ya=JSON.parse('{"icon.title.close":["Kryss"]}'),$a=JSON.parse('{"icon.title.close":["Cross"]}'),xa=JSON.parse('{"icon.title.close":["Rasti"]}'),ka=JSON.parse('{"icon.title.close":["Kryds"]}'),_a=JSON.parse('{"icon.title.close":["Kryss"]}'),ji=["en","nb","fi","da","sv"],Hi="en",Sa=()=>{var t;let e;switch((t=process==null?void 0:wa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},zi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Hi},Er=t=>ji.find(e=>t===e||t.toLowerCase().includes(e))||zi();function Ea(){var t;if(typeof window>"u"){const e=Sa();return Er(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=zi();return ji.includes(e)?Er(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Er(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Hi}}var Ca=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Aa=(t,e,r,o,i)=>{const n=Ea(),s=Ca(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Aa($a,ya,xa,ka,_a);var Oa=class extends W{render(){const t=S.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Oa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const La=eo(class extends to{constructor(t){if(super(t),t.type!==Xr.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return _e}}),Ta=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Ye(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:Ta(e.toString())})),super.createProperty(e,o)}}}function Na(){return`m${Math.random().toString(36).slice(2)}`}class Pa extends Ye(F){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[F.styles];get _classBase(){return this.slot==="suffix"?vs:ws}get _classes(){return I([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return v`
      <button aria-label="${J(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return v`
      <button aria-label="${J(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return v`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return v`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",Pa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Qr},Ba=(t=Da,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function T(t){return(e,r)=>typeof r=="object"?Ba(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ma(t){return T({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ur(t,e){return(r,o,i)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return Ra(r,o,{get(){return n(this)}})}}var Ia={},Fa=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),ja=JSON.parse('{"icon.title.info":["Information circle"]}'),Ha=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),za=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Ua=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Ui=["en","nb","fi","da","sv"],Wi="en",Wa=()=>{var t;let e;switch((t=process==null?void 0:Ia)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Vi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Wi},Cr=t=>Ui.find(e=>t===e||t.toLowerCase().includes(e))||Vi();function Va(){var t;if(typeof window>"u"){const e=Wa();return Cr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Vi();return Ui.includes(e)?Cr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Cr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Wi}}var Ja=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,qa=(t,e,r,o,i)=>{const n=Va(),s=Ja(n,t,e,r,o,i);S.load(n,s),S.activate(n)};qa(ja,Fa,Ha,za,Ua);var Qa=class extends W{render(){const t=S.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",Qa);var Ya={},Ka=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Ga=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),Za=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),Xa=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),el=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),Ji=["en","nb","fi","da","sv"],qi="en",tl=()=>{var t;let e;switch((t=process==null?void 0:Ya)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Qi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":qi},Ar=t=>Ji.find(e=>t===e||t.toLowerCase().includes(e))||Qi();function rl(){var t;if(typeof window>"u"){const e=tl();return Ar(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Qi();return Ji.includes(e)?Ar(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ar(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),qi}}var ol=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,il=(t,e,r,o,i)=>{const n=rl(),s=ol(n,t,e,r,o,i);S.load(n,s),S.activate(n)};il(Ga,Ka,Za,Xa,el);var nl=class extends W{render(){const t=S.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",nl);var sl={},al=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),ll=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),cl=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),dl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),ul=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),Yi=["en","nb","fi","da","sv"],Ki="en",hl=()=>{var t;let e;switch((t=process==null?void 0:sl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Gi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ki},Or=t=>Yi.find(e=>t===e||t.toLowerCase().includes(e))||Gi();function pl(){var t;if(typeof window>"u"){const e=hl();return Or(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Gi();return Yi.includes(e)?Or(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Or(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ki}}var gl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,fl=(t,e,r,o,i)=>{const n=pl(),s=gl(n,t,e,r,o,i);S.load(n,s),S.activate(n)};fl(ll,al,cl,dl,ul);var ml=class extends W{render(){const t=S.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",ml);var bl={},vl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),wl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),yl=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),$l=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),xl=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),Zi=["en","nb","fi","da","sv"],Xi="en",kl=()=>{var t;let e;switch((t=process==null?void 0:bl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},en=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xi},Lr=t=>Zi.find(e=>t===e||t.toLowerCase().includes(e))||en();function _l(){var t;if(typeof window>"u"){const e=kl();return Lr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=en();return Zi.includes(e)?Lr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Lr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xi}}var Sl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,El=(t,e,r,o,i)=>{const n=_l(),s=Sl(n,t,e,r,o,i);S.load(n,s),S.activate(n)};El(wl,vl,yl,$l,xl);var Cl=class extends W{render(){const t=S.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",Cl);const Pe=ee`
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
`,hr=ee`*, :before, :after {
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
        `;var Al=Object.defineProperty,uo=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Al(e,r,i),i};const bt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class pr extends W{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!bt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return I([ft.wrapper,ft[this.variant]])}get _iconClasses(){const e=ft[`${this.variant}Icon`];return I([ft.icon,e])}static{this.styles=[Pe,hr,ee`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===bt.info?v` <w-icon-info-16></w-icon-info-16>`:this.variant===bt.warning?v` <w-icon-warning-16></w-icon-warning-16>`:this.variant===bt.negative?v` <w-icon-error-16></w-icon-error-16>`:this.variant===bt.positive?v` <w-icon-success-16></w-icon-success-16>`:""}render(){return v`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${ft.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}uo([T({reflect:!0})],pr.prototype,"variant");uo([T({type:Boolean,reflect:!0})],pr.prototype,"show");uo([T({reflect:!0})],pr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",pr);const Ol=["top","right","bottom","left"],qe=Math.min,ue=Math.max,Qt=Math.round,ve=t=>({x:t,y:t}),Ll={left:"right",right:"left",bottom:"top",top:"bottom"},Tl={start:"end",end:"start"};function zr(t,e,r){return ue(t,qe(e,r))}function Ke(t,e){return typeof t=="function"?t(e):t}function Te(t){return t.split("-")[0]}function dt(t){return t.split("-")[1]}function tn(t){return t==="x"?"y":"x"}function ho(t){return t==="y"?"height":"width"}function Qe(t){return["top","bottom"].includes(Te(t))?"y":"x"}function po(t){return tn(Qe(t))}function Nl(t,e,r){r===void 0&&(r=!1);const o=dt(t),i=po(t),n=ho(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Yt(s)),[s,Yt(s)]}function Pl(t){const e=Yt(t);return[Ur(t),e,Ur(e)]}function Ur(t){return t.replace(/start|end/g,e=>Tl[e])}function Dl(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Bl(t,e,r,o){const i=dt(t);let n=Dl(Te(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Ur)))),n}function Yt(t){return t.replace(/left|right|bottom|top/g,e=>Ll[e])}function Ml(t){return{top:0,right:0,bottom:0,left:0,...t}}function rn(t){return typeof t!="number"?Ml(t):{top:t,right:t,bottom:t,left:t}}function Kt(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function qo(t,e,r){let{reference:o,floating:i}=t;const n=Qe(e),s=po(e),l=ho(s),a=Te(e),u=n==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-i.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-i.width,y:c};break;default:d={x:o.x,y:o.y}}switch(dt(e)){case"start":d[s]-=g*(r&&u?-1:1);break;case"end":d[s]+=g*(r&&u?-1:1);break}return d}const Rl=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=qo(u,o,a),g=o,d={},f=0;for(let p=0;p<l.length;p++){const{name:b,fn:_}=l[p],{x:C,y:E,data:B,reset:y}=await _({x:h,y:c,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=C??h,c=E??c,d={...d,[b]:{...d[b],...B}},y&&f<=50&&(f++,typeof y=="object"&&(y.placement&&(g=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:h,y:c}=qo(u,g,a)),p=-1)}return{x:h,y:c,placement:g,strategy:i,middlewareData:d}};async function Ot(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:d=0}=Ke(e,t),f=rn(d),b=l[g?c==="floating"?"reference":"floating":c],_=Kt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),C=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,E=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(E))?await(n.getScale==null?void 0:n.getScale(E))||{x:1,y:1}:{x:1,y:1},y=Kt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:E,strategy:a}):C);return{top:(_.top-y.top+f.top)/B.y,bottom:(y.bottom-_.bottom+f.bottom)/B.y,left:(_.left-y.left+f.left)/B.x,right:(y.right-_.right+f.right)/B.x}}const Il=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ke(t,e)||{};if(u==null)return{};const c=rn(h),g={x:r,y:o},d=po(i),f=ho(d),p=await s.getDimensions(u),b=d==="y",_=b?"top":"left",C=b?"bottom":"right",E=b?"clientHeight":"clientWidth",B=n.reference[f]+n.reference[d]-g[d]-n.floating[f],y=g[d]-n.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let O=A?A[E]:0;(!O||!await(s.isElement==null?void 0:s.isElement(A)))&&(O=l.floating[E]||n.floating[f]);const M=B/2-y/2,H=O/2-p[f]/2-1,V=qe(c[_],H),Y=qe(c[C],H),z=V,ne=O-p[f]-Y,D=O/2-p[f]/2+M,G=zr(z,D,ne),q=!a.arrow&&dt(i)!=null&&D!==G&&n.reference[f]/2-(D<z?V:Y)-p[f]/2<0,re=q?D<z?D-z:D-ne:0;return{[d]:g[d]+re,data:{[d]:G,centerOffset:D-G-re,...q&&{alignmentOffset:re}},reset:q}}}),Fl=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...b}=Ke(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const _=Te(i),C=Qe(l),E=Te(l)===l,B=await(a.isRTL==null?void 0:a.isRTL(u.floating)),y=g||(E||!p?[Yt(l)]:Pl(l)),A=f!=="none";!g&&A&&y.push(...Bl(l,p,f,B));const O=[l,...y],M=await Ot(e,b),H=[];let V=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&H.push(M[_]),c){const D=Nl(i,s,B);H.push(M[D[0]],M[D[1]])}if(V=[...V,{placement:i,overflows:H}],!H.every(D=>D<=0)){var Y,z;const D=(((Y=n.flip)==null?void 0:Y.index)||0)+1,G=O[D];if(G)return{data:{index:D,overflows:V},reset:{placement:G}};let q=(z=V.filter(re=>re.overflows[0]<=0).sort((re,Z)=>re.overflows[1]-Z.overflows[1])[0])==null?void 0:z.placement;if(!q)switch(d){case"bestFit":{var ne;const re=(ne=V.filter(Z=>{if(A){const oe=Qe(Z.placement);return oe===C||oe==="y"}return!0}).map(Z=>[Z.placement,Z.overflows.filter(oe=>oe>0).reduce((oe,Ze)=>oe+Ze,0)]).sort((Z,oe)=>Z[1]-oe[1])[0])==null?void 0:ne[0];re&&(q=re);break}case"initialPlacement":q=l;break}if(i!==q)return{reset:{placement:q}}}return{}}}};function Qo(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Yo(t){return Ol.some(e=>t[e]>=0)}const jl=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=Ke(t,e);switch(o){case"referenceHidden":{const n=await Ot(e,{...i,elementContext:"reference"}),s=Qo(n,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Yo(s)}}}case"escaped":{const n=await Ot(e,{...i,altBoundary:!0}),s=Qo(n,r.floating);return{data:{escapedOffsets:s,escaped:Yo(s)}}}default:return{}}}}};async function Hl(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Te(r),l=dt(r),a=Qe(r)==="y",u=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,c=Ke(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(d=l==="end"?f*-1:f),a?{x:d*h,y:g*u}:{x:g*u,y:d*h}}const zl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await Hl(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},Ul=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:_,y:C}=b;return{x:_,y:C}}},...a}=Ke(t,e),u={x:r,y:o},h=await Ot(e,a),c=Qe(Te(i)),g=tn(c);let d=u[g],f=u[c];if(n){const b=g==="y"?"top":"left",_=g==="y"?"bottom":"right",C=d+h[b],E=d-h[_];d=zr(C,d,E)}if(s){const b=c==="y"?"top":"left",_=c==="y"?"bottom":"right",C=f+h[b],E=f-h[_];f=zr(C,f,E)}const p=l.fn({...e,[g]:d,[c]:f});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[g]:n,[c]:s}}}}}},Wl=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ke(t,e),h=await Ot(e,u),c=Te(i),g=dt(i),d=Qe(i)==="y",{width:f,height:p}=n.floating;let b,_;c==="top"||c==="bottom"?(b=c,_=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(_=c,b=g==="end"?"top":"bottom");const C=p-h.top-h.bottom,E=f-h.left-h.right,B=qe(p-h[b],C),y=qe(f-h[_],E),A=!e.middlewareData.shift;let O=B,M=y;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=E),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(O=C),A&&!g){const V=ue(h.left,0),Y=ue(h.right,0),z=ue(h.top,0),ne=ue(h.bottom,0);d?M=f-2*(V!==0||Y!==0?V+Y:ue(h.left,h.right)):O=p-2*(z!==0||ne!==0?z+ne:ue(h.top,h.bottom))}await a({...e,availableWidth:M,availableHeight:O});const H=await s.getDimensions(l.floating);return f!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function gr(){return typeof window<"u"}function ut(t){return on(t)?(t.nodeName||"").toLowerCase():"#document"}function ce(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Se(t){var e;return(e=(on(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function on(t){return gr()?t instanceof Node||t instanceof ce(t).Node:!1}function ge(t){return gr()?t instanceof Element||t instanceof ce(t).Element:!1}function we(t){return gr()?t instanceof HTMLElement||t instanceof ce(t).HTMLElement:!1}function Ko(t){return!gr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ce(t).ShadowRoot}function Dt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=fe(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Vl(t){return["table","td","th"].includes(ut(t))}function fr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function go(t){const e=fo(),r=ge(t)?fe(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Jl(t){let e=Ne(t);for(;we(e)&&!ct(e);){if(go(e))return e;if(fr(e))return null;e=Ne(e)}return null}function fo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(ut(t))}function fe(t){return ce(t).getComputedStyle(t)}function mr(t){return ge(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ne(t){if(ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ko(t)&&t.host||Se(t);return Ko(e)?e.host:e}function nn(t){const e=Ne(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:we(e)&&Dt(e)?e:nn(e)}function Wr(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=nn(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=ce(i);if(n){const l=Vr(s);return e.concat(s,s.visualViewport||[],Dt(i)?i:[],l&&r?Wr(l):[])}return e.concat(i,Wr(i,[],r))}function Vr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function sn(t){const e=fe(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=we(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,l=Qt(r)!==n||Qt(o)!==s;return l&&(r=n,o=s),{width:r,height:o,$:l}}function an(t){return ge(t)?t:t.contextElement}function st(t){const e=an(t);if(!we(e))return ve(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=sn(e);let s=(n?Qt(r.width):r.width)/o,l=(n?Qt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ql=ve(0);function ln(t){const e=ce(t);return!fo()||!e.visualViewport?ql:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ql(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ce(t)?!1:e}function Lt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=an(t);let s=ve(1);e&&(o?ge(o)&&(s=st(o)):s=st(t));const l=Ql(n,r,o)?ln(n):ve(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(n){const g=ce(n),d=o&&ge(o)?ce(o):o;let f=g,p=Vr(f);for(;p&&o&&d!==f;){const b=st(p),_=p.getBoundingClientRect(),C=fe(p),E=_.left+(p.clientLeft+parseFloat(C.paddingLeft))*b.x,B=_.top+(p.clientTop+parseFloat(C.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,c*=b.y,a+=E,u+=B,f=ce(p),p=Vr(f)}}return Kt({width:h,height:c,x:a,y:u})}function mo(t,e){const r=mr(t).scrollLeft;return e?e.left+r:Lt(Se(t)).left+r}function cn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:mo(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function Yl(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=Se(o),l=e?fr(e.floating):!1;if(o===s||l&&n)return r;let a={scrollLeft:0,scrollTop:0},u=ve(1);const h=ve(0),c=we(o);if((c||!c&&!n)&&((ut(o)!=="body"||Dt(s))&&(a=mr(o)),we(o))){const d=Lt(o);u=st(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!c&&!n?cn(s,a,!0):ve(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+g.x,y:r.y*u.y-a.scrollTop*u.y+h.y+g.y}}function Kl(t){return Array.from(t.getClientRects())}function Gl(t){const e=Se(t),r=mr(t),o=t.ownerDocument.body,i=ue(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=ue(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+mo(t);const l=-r.scrollTop;return fe(o).direction==="rtl"&&(s+=ue(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:l}}function Zl(t,e){const r=ce(t),o=Se(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const u=fo();(!u||u&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Xl(t,e){const r=Lt(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=we(t)?st(t):ve(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,u=o*n.y;return{width:s,height:l,x:a,y:u}}function Go(t,e,r){let o;if(e==="viewport")o=Zl(t,r);else if(e==="document")o=Gl(Se(t));else if(ge(e))o=Xl(e,r);else{const i=ln(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Kt(o)}function dn(t,e){const r=Ne(t);return r===e||!ge(r)||ct(r)?!1:fe(r).position==="fixed"||dn(r,e)}function ec(t,e){const r=e.get(t);if(r)return r;let o=Wr(t,[],!1).filter(l=>ge(l)&&ut(l)!=="body"),i=null;const n=fe(t).position==="fixed";let s=n?Ne(t):t;for(;ge(s)&&!ct(s);){const l=fe(s),a=go(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Dt(s)&&!a&&dn(t,s))?o=o.filter(h=>h!==s):i=l,s=Ne(s)}return e.set(t,o),o}function tc(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?fr(e)?[]:ec(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=Go(e,h,i);return u.top=ue(c.top,u.top),u.right=qe(c.right,u.right),u.bottom=qe(c.bottom,u.bottom),u.left=ue(c.left,u.left),u},Go(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function rc(t){const{width:e,height:r}=sn(t);return{width:e,height:r}}function oc(t,e,r){const o=we(e),i=Se(e),n=r==="fixed",s=Lt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=ve(0);if(o||!o&&!n)if((ut(e)!=="body"||Dt(i))&&(l=mr(e)),o){const g=Lt(e,!0,n,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else i&&(a.x=mo(i));const u=i&&!o&&!n?cn(i,l):ve(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function Tr(t){return fe(t).position==="static"}function Zo(t,e){if(!we(t)||fe(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Se(t)===r&&(r=r.ownerDocument.body),r}function un(t,e){const r=ce(t);if(fr(t))return r;if(!we(t)){let i=Ne(t);for(;i&&!ct(i);){if(ge(i)&&!Tr(i))return i;i=Ne(i)}return r}let o=Zo(t,e);for(;o&&Vl(o)&&Tr(o);)o=Zo(o,e);return o&&ct(o)&&Tr(o)&&!go(o)?r:o||Jl(t)||r}const ic=async function(t){const e=this.getOffsetParent||un,r=this.getDimensions,o=await r(t.floating);return{reference:oc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nc(t){return fe(t).direction==="rtl"}const sc={convertOffsetParentRelativeRectToViewportRelativeRect:Yl,getDocumentElement:Se,getClippingRect:tc,getOffsetParent:un,getElementRects:ic,getClientRects:Kl,getDimensions:rc,getScale:st,isElement:ge,isRTL:nc},ac=zl,lc=Ul,cc=Fl,dc=Wl,uc=jl,hc=Il,pc=(t,e,r)=>{const o=new Map,i={platform:sc,...r},n={...i.platform,_c:o};return Rl(t,e,{...i,platform:n})},Gt="top-start",Zt="top",Xt="top-end",er="right-start",tr="right",rr="right-end",or="bottom-start",Tt="bottom",ir="bottom-end",nr="left-start",sr="left",ar="left-end",Xo=[Gt,Zt,Xt,er,tr,rr,or,Tt,ir,nr,sr,ar],it={[Gt]:or,[Zt]:Tt,[Xt]:ir,[or]:Gt,[Tt]:Zt,[ir]:Xt,[nr]:er,[sr]:tr,[ar]:rr,[er]:nr,[tr]:sr,[rr]:ar},gc={[nr]:-45,[sr]:-45,[ar]:-45,[Gt]:45,[Zt]:45,[Xt]:45,[er]:135,[tr]:135,[rr]:135,[or]:-135,[Tt]:-135,[ir]:-135},hn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},fc=t=>t.split("-")[0],mc=t=>it[fc(t)],pn=t=>it[t],bc=t=>gc[pn(t)],vc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${hn(mc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},ei=8,It=24;async function ti(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return pc(e,r,{placement:t?.directionName??Tt,middleware:[ac({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&cc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&lc({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&hc({element:t?.arrowEl}),uc(),dc({apply(){Object.assign(r.style,{paddingRight:`${ei}px`,paddingLeft:`${ei}px`})}})]}).then(({x:o,y:i,middlewareData:n,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),n?.hide&&!t?.isCallout){const{referenceHidden:l}=n.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(n?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=n.arrow,h=window.getComputedStyle(r).direction==="rtl",c=pn(s).split("-")[1];let g="",d="",f="",p="";if(c==="start"){const b=typeof a=="number"?`calc(${It}px - ${l.offsetWidth/2}px)`:"";g=typeof u=="number"?`calc(${It}px - ${l.offsetWidth/2}px)`:"",d=h?b:"",p=h?"":b}else if(c==="end"){const b=typeof a=="number"?`calc(${It}px - ${l.offsetWidth/2}px)`:"";d=h?"":b,p=h?b:"",f=typeof u=="number"?`calc(${It}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",g=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:g,right:d,bottom:f,left:p}),vc(l,bc(s),s)}}),t}var wc={};const yc=["en","nb","fi","da","sv"],gn="en",ri=t=>yc.find(e=>t===e||t.toLowerCase().includes(e))||gn;function $c(){if(typeof window>"u"){const t=wc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return ri(t)}try{const t=document.documentElement.lang;return ri(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),gn}}const xc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,De=(t,e,r,o,i)=>{const n=$c(),s=xc(n,t,e,r,o,i);S.load(n,s),S.activate(n)},kc=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),_c=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),Sc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Ec=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Cc=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Ac extends Ye(F){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[F.styles,ee`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),De(_c,Ec,Sc,kc,Cc),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(it).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(it))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Xo.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Xo)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?ti(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return it[this._actualDirection]}get _arrowClasses(){return I([et.arrowBase,this._activeVariantClasses.arrow,et[`arrowDirection${hn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":v`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:et[r],arrow:et[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return I([et.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return S._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return v`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${et.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},ti(this.attentionState)}pointingAtDirection(){switch(it[this._actualDirection]){case"top-start":case"top":case"top-end":return S._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return S._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return S._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return S._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return S._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return S._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return S._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return S._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Na());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?v``:v`
      <div class=${J(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?v`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:j}
              </div>
            `:v`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:j}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",Ac);class Oc extends F{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[F.styles];constructor(){super(),this.variant="neutral"}get _class(){return I([Me.base,Me[this.variant],!!this.position&&Me.positionBase,this.position==="top-left"&&Me.positionTL,this.position==="top-right"&&Me.positionTR,this.position==="bottom-right"&&Me.positionBR,this.position==="bottom-left"&&Me.positionBL])}render(){return v`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",Oc);class Lc extends F{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[F.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return I([rt.base,this.bleed&&rt.bleed,this.info&&rt.info,this.neutral&&rt.neutral,this.bordered&&rt.bordered])}get _optOutRoleWithDefault(){return this.role===""?j:this.role??"region"}render(){return v`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",Lc);function Tc(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Nc=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),Pc=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Dc=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Bc=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Mc=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Rc=v`<span class=${ot.separator}>/</span>`;class Ic extends Ye(F){static styles=[F.styles];static properties={ariaLabel:{type:String}};constructor(){super(),De(Pc,Bc,Dc,Nc,Mc),this.ariaLabel=S._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const n=i===this.children.length-1;return v`<span class=${ot.text} aria-current=${n?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?ot.link:ot.text),o});this._children=Tc(r,Rc)}render(){return v`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ot.a11y}>${this.ariaLabel}</h2>
        <div class=${ot.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Ic);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Q=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function bo(t){var e,r,o,i,n,s,l,a,u,h,c,g,d,f,p,b,_,C;class E extends t{constructor(...y){var A,O,M;super(...y),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),n.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{Q(this,i,!0,"f"),Q(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{Q(this,r,!1,"f"),R(this,e,"m",b).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,i,"f")&&Q(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Q(this,l,!1,"f")),Q(this,i,!0,"f"),Q(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),d.set(this,!1),f.set(this,Promise.resolve()),(A=this.addEventListener)===null||A===void 0||A.call(this,"focus",R(this,u,"f")),(O=this.addEventListener)===null||O===void 0||O.call(this,"blur",R(this,h,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const y=this.validators.map(M=>M.attribute).flat(),A=super.observedAttributes||[];return[...new Set([...A,...y])]}static getValidator(y){return this.validators.find(A=>A.attribute===y)||null}static getValidators(y){return this.validators.filter(A=>{var O;if(A.attribute===y||!((O=A.attribute)===null||O===void 0)&&O.includes(y))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(y,A,O){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,y,A,O);const V=this.constructor.getValidators(y);V?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue(y){var A;Q(this,o,!1,"f"),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,""),Q(this,a,y,"f");const M=this.shouldFormValueUpdate()?y:null;this.internals.setFormValue(M),R(this,e,"m",b).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(y=>y(R(this,f,"f")))}formResetCallback(){var y,A;Q(this,i,!1,"f"),Q(this,o,!1,"f"),R(this,e,"m",p).call(this),(y=this.resetFormControl)===null||y===void 0||y.call(this),(A=this.validationMessageCallback)===null||A===void 0||A.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,d=new WeakMap,f=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const y=R(this,o,"f")||R(this,i,"f")&&!this.validity.valid&&!R(this,r,"f");return y&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),y},b=function(y){const A=this.constructor,O={},M=A.validators,H=[],V=M.some(D=>D.isValid instanceof Promise);R(this,d,"f")||(Q(this,f,new Promise(D=>{Q(this,g,D,"f")}),"f"),Q(this,d,!0,"f")),R(this,n,"f")&&(R(this,n,"f").abort(),Q(this,s,R(this,n,"f"),"f"));const Y=new AbortController;Q(this,n,Y,"f");let z,ne=!1;M.length&&(M.forEach(D=>{const G=D.key||"customError",q=D.isValid(this,y,Y.signal);q instanceof Promise?(H.push(q),q.then(Z=>{Z!=null&&(O[G]=!Z,z=R(this,e,"m",C).call(this,D,y),R(this,e,"m",_).call(this,O,z))})):(O[G]=!q,this.validity[G]!==!q&&(ne=!0),!q&&!z&&(z=R(this,e,"m",C).call(this,D,y)))}),Promise.allSettled(H).then(()=>{var D;Y?.signal.aborted||(Q(this,d,!1,"f"),(D=R(this,g,"f"))===null||D===void 0||D.call(this))}),(ne||!V)&&R(this,e,"m",_).call(this,O,z))},_=function(y,A){if(this.validationTarget)this.internals.setValidity(y,A,this.validationTarget),Q(this,l,!1,"f");else{if(this.internals.setValidity(y,A),this.internals.validity.valid)return;Q(this,l,!0,"f")}},C=function(y,A){if(this.validityCallback){const O=this.validityCallback(y.key||"customError");if(O)return O}return y.message instanceof Function?y.message(this,A):y.message},E}const Fc=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),jc=JSON.parse('{"button.aria.loading":["Loading..."]}'),Hc=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),zc=JSON.parse('{"button.aria.loading":["Laster..."]}'),Uc=JSON.parse('{"button.aria.loading":["Laddar ..."]}');var Wc=Object.defineProperty,de=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Wc(e,r,i),i};const oi=["primary","secondary","negative","utility","pill","link"];class ae extends bo(Ye(W)){constructor(){super(),this.type="button",De(jc,zc,Hc,Fc,Uc),this.variant="secondary",this.ariaValueTextLoading=S._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Pe,hr]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!oi.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${oi.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&L.primary,this.small&&!this.quiet&&!this.loading&&L.primarySmall,this.small&&this.quiet&&!this.loading&&L.primarySmallQuiet,this.small&&this.loading&&(this.quiet?L.primarySmallQuietLoading:L.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&L.primaryQuiet,!this.small&&this.loading&&(this.quiet?L.primaryQuietLoading:L.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&L.secondary,this.small&&!this.quiet&&!this.loading&&L.secondarySmall,this.small&&this.loading&&(this.quiet?L.secondarySmallQuietLoading:L.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&L.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&L.secondaryQuiet,!this.small&&this.loading&&(this.quiet?L.secondaryQuietLoading:L.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&L.utility,this.small&&!this.quiet&&!this.loading&&L.utilitySmall,this.small&&this.quiet&&!this.loading&&L.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?L.utilitySmallQuietLoading:L.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&L.utilityQuiet,!this.small&&this.loading&&(this.quiet?L.utilityQuietLoading:L.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&L.negative,this.small&&!this.quiet&&!this.loading&&L.negativeSmall,this.small&&this.quiet&&!this.loading&&L.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?L.negativeSmallQuietLoading:L.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&L.negativeQuiet,!this.small&&this.loading&&(this.quiet?L.negativeQuietLoading:L.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?L.pillSmall:L.pill),this.loading&&(this.small?L.pillSmallLoading:L.pillLoading)]}get _linkClasses(){return[this.small?L.linkSmall:L.link]}get _classes(){return I(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&L.linkAsButton,this.fullWidth?L.fullWidth:L.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return v` ${this.href?v`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:v`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?v`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}de([T({reflect:!0})],ae.prototype,"type");de([T({type:Boolean,reflect:!0})],ae.prototype,"autofocus");de([T({reflect:!0})],ae.prototype,"variant");de([T({type:Boolean,reflect:!0})],ae.prototype,"quiet");de([T({type:Boolean,reflect:!0})],ae.prototype,"small");de([T({type:Boolean,reflect:!0})],ae.prototype,"loading");de([T({reflect:!0})],ae.prototype,"href");de([T({reflect:!0})],ae.prototype,"target");de([T({reflect:!0})],ae.prototype,"rel");de([T({type:Boolean,reflect:!0})],ae.prototype,"fullWidth");de([T({reflect:!0})],ae.prototype,"buttonClass");de([T({reflect:!0})],ae.prototype,"name");de([T({reflect:!0})],ae.prototype,"value");customElements.get("w-button")||customElements.define("w-button",ae);const Vc=JSON.parse('{"card.button.text":["Vælg"]}'),Jc=JSON.parse('{"card.button.text":["Select"]}'),qc=JSON.parse('{"card.button.text":["Valitse"]}'),Qc=JSON.parse('{"card.button.text":["Velg"]}'),Yc=JSON.parse('{"card.button.text":["Välj"]}');var Kc=Object.defineProperty,vo=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Kc(e,r,i),i};const ii={ENTER:"Enter",SPACE:" "};class br extends W{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,De(Jc,Qc,qc,Vc,Yc),this.buttonText=S._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Pe,hr,ee`
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
    `]}get _containerClasses(){return I([be.base,this.flat?be.flat:be.shadow,this.selected&&!this.flat&&be.selected,this.selected&&this.flat?be.flatSelected:be.flatUnselected])}get _outlineClasses(){return I([be.outline,this.selected?be.outlineSelected:be.outlineUnselected])}get _interactiveElement(){const e=()=>v`<button class="${be.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>v`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===ii.ENTER||e.key===ii.SPACE)&&(e.preventDefault(),this.click())}render(){return v`
      <div tabindex=${J(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":v`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}vo([T({type:Boolean,reflect:!0})],br.prototype,"selected");vo([T({type:Boolean})],br.prototype,"flat");vo([T({type:Boolean})],br.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",br);var Gc=Object.defineProperty,vr=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Gc(e,r,i),i};class Bt extends W{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=La({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return v` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[Pe,ee`
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
    `]}}vr([T({type:String})],Bt.prototype,"type");vr([T({type:Boolean,reflect:!0})],Bt.prototype,"checked");vr([T({type:Boolean,reflect:!0})],Bt.prototype,"indeterminate");vr([T({type:Boolean,reflect:!0})],Bt.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",Bt);var Zc={},Xc=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),ed=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),td=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),rd=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),od=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),fn=["en","nb","fi","da","sv"],mn="en",id=()=>{var t;let e;switch((t=process==null?void 0:Zc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},bn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":mn},Nr=t=>fn.find(e=>t===e||t.toLowerCase().includes(e))||bn();function nd(){var t;if(typeof window>"u"){const e=id();return Nr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=bn();return fn.includes(e)?Nr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Nr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),mn}}var sd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ad=(t,e,r,o,i)=>{const n=nd(),s=sd(n,t,e,r,o,i);S.load(n,s),S.activate(n)};ad(ed,Xc,td,rd,od);var ld=class extends W{render(){const t=S.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",ld);var cd={},dd=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),ud=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),hd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),pd=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),gd=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),vn=["en","nb","fi","da","sv"],wn="en",fd=()=>{var t;let e;switch((t=process==null?void 0:cd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},yn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":wn},Pr=t=>vn.find(e=>t===e||t.toLowerCase().includes(e))||yn();function md(){var t;if(typeof window>"u"){const e=fd();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=yn();return vn.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),wn}}var bd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,vd=(t,e,r,o,i)=>{const n=md(),s=bd(n,t,e,r,o,i);S.load(n,s),S.activate(n)};vd(ud,dd,hd,pd,gd);var wd=class extends W{render(){const t=S.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",wd);var yd=Object.defineProperty,me=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&yd(e,r,i),i};class he extends W{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Pe,hr,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return I([te.wrapper,this.box&&te.box,this.bleed&&te.bleed])}get#t(){return I(this.buttonClass,[te.button,this.box&&te.buttonBox])}get#i(){return I([te.chevron,!this.box&&te.chevronNonBox])}get#r(){const e=I([te.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&te.elementsChevronCollapse]),r=I([te.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&te.elementsChevronExpand]);return this._showChevronUp?v`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:v`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return I(this.contentClass,[this.box&&rt.base,this._hasTitle&&this.box&&te.contentWithTitle])}get#n(){return I([te.expansion,!this.expanded&&te.expansionNotExpanded])}get _expandableSlot(){return v`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return v` <div class="${this.#e}">
      ${this._hasTitle?v`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${te.title}">
                ${this.title?v`<span class="${te.titleType}">${this.title}</span>`:v`<slot name="title"></slot>`}
                ${this.noChevron?"":v`<div class="${this.#i}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?v`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:v`<div class="${this.#n}" aria-hidden=${J(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}me([T({type:Boolean,reflect:!0})],he.prototype,"expanded");me([T({type:String})],he.prototype,"title");me([T({type:Boolean})],he.prototype,"box");me([T({type:Boolean})],he.prototype,"bleed");me([T({attribute:"button-class",type:String})],he.prototype,"buttonClass");me([T({attribute:"content-class",type:String})],he.prototype,"contentClass");me([T({attribute:"no-chevron",type:Boolean})],he.prototype,"noChevron");me([T({type:Boolean})],he.prototype,"animated");me([T({attribute:"heading-level",type:Number})],he.prototype,"headingLevel");me([T({type:Boolean,state:!0})],he.prototype,"_hasTitle");me([T({type:Boolean,state:!0})],he.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",he);const $n=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},xn=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class $d extends $n(xn(W)){render(){return v`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[Pe,ee`
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
    `]}}const xd=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),kd=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],_d={easing:"ease",duration:300};let kn=!1;const Sd=typeof window<"u";if(Sd){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>kn=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class Ed{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||kd,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(xd(this.first,this.last))}get defaults(){return _d}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?kn?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var Cd={},Ad=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),Od=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),Ld=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),Td=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),Nd=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),_n=["en","nb","fi","da","sv"],Sn="en",Pd=()=>{var t;let e;switch((t=process==null?void 0:Cd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},En=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Sn},Dr=t=>_n.find(e=>t===e||t.toLowerCase().includes(e))||En();function Dd(){var t;if(typeof window>"u"){const e=Pd();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=En();return _n.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Sn}}var Bd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Md=(t,e,r,o,i)=>{const n=Dd(),s=Bd(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Md(Od,Ad,Ld,Td,Nd);var Rd=class extends W{render(){const t=S.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Rd);const Id=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Fd=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),jd=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Hd=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),zd=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Ud=Object.defineProperty,Mt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Ud(e,r,i),i};class ht extends $n(W){constructor(){super(),this._hasTopContent=!1,De(Fd,Hd,jd,Id,zd)}render(){return v`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new Ed(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?v`<button
          type="button"
          aria-label="${S._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:j}get closeButton(){return this.noClose?j:v`<button
      type="button"
      aria-label="${S._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[Pe,ee`
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
    `]}}Mt([T({type:String})],ht.prototype,"title");Mt([T({type:Boolean})],ht.prototype,"back");Mt([T({type:Boolean,attribute:"no-close"})],ht.prototype,"noClose");Mt([Ma()],ht.prototype,"_hasTopContent");Mt([ur(".title-el")],ht.prototype,"titleEl");let xt=[];const wo={documentElement:{},body:{}},Wd=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Cn=t=>{t.touches.length>1||t.preventDefault?.()},Vd=t=>([e,r])=>{wo[t][e]=document[t].style[e],document[t].style[e]=r},Jd=()=>Object.entries(Wd).forEach(([t,e])=>{Object.entries(e).forEach(Vd(t))}),qd=t=>([e,r])=>{document[t].style[e]=wo[t][e]},Qd=()=>Object.entries(wo).forEach(([t,e])=>{Object.entries(e).forEach(qd(t))}),Yd=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Kd(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||Yd(t)&&i<0?Cn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Gd(t){t.ontouchstart=null,t.ontouchmove=null}const An=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Cn,{passive:!1}),Zd=An(!0),Xd=An();function eu(t){if(!t)throw Error("Could not run setup, an element must be provided");xt.some(e=>e===t)||(xt.length||(Jd(),Zd()),Kd(t),xt.push(t))}function tu(){xt.forEach(Gd),Xd(),Qd(),xt=[]}var ru=Object.defineProperty,pt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&ru(e,r,i),i};class Ge extends xn(W){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),eu(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),tu(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return v`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[Pe,ee`
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
    `]}}pt([T({type:Boolean})],Ge.prototype,"show");pt([T({type:String,attribute:"content-id"})],Ge.prototype,"contentId");pt([T({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ge.prototype,"ignoreBackdropClicks");pt([ur(".dialog-el")],Ge.prototype,"dialogEl");pt([ur(".dialog-inner-el")],Ge.prototype,"dialogInnerEl");pt([ur(".content-el")],Ge.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ge),customElements.define("w-modal-header",ht),customElements.define("w-modal-footer",$d));const ou=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),iu=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),nu=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),su=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),au=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class lu extends Ye(F){static styles=[F.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),De(iu,su,nu,ou,au),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=S._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=S._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return I([le.button,le.label,this.suggestion?le.suggestion:le.filter,this.canClose?le.labelWithClose:le.labelWithoutClose])}get _closeClasses(){return I([le.button,le.close,this.suggestion?le.suggestion:le.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return v`
      <div class="${le.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${le.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?v`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${le.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",lu);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jt(t,e,r){return t?e(t):r?.(t)}const cu=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),du=JSON.parse('{"select.label.optional":["(optional)"]}'),uu=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),hu=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),pu=JSON.parse('{"select.label.optional":["(valfritt)"]}');class gu extends bo(Ye(F)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[F.styles];constructor(){super(),De(du,hu,uu,cu,pu),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return I([xe.base,!this.invalid&&!this.disabled&&!this.readOnly&&xe.default,this.invalid&&xe.invalid,this.disabled&&xe.disabled,this.readOnly&&xe.readOnly])}get#t(){return I([nt.base,this.invalid?nt.colorInvalid:nt.color])}get#i(){return I([xe.chevron,this.disabled&&xe.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return v`<div class="${xe.wrapper}">
      ${jt(this.label,()=>v`<label class="${Fr.base}" for="${this.#r}">
            ${this.label}
            ${jt(this.optional,()=>v`<span class="${Fr.optional}"
                  >${S._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${xe.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${J(this.#o)}"
          aria-invalid="${J(this.invalid)}"
          aria-errormessage="${J(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${ro(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${jt(this.always||this.invalid,()=>v`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",gu);class fu extends bo(Ye(F)){static properties={disabled:{type:Boolean},invalid:{type:Boolean},id:{type:String},label:{type:String},helpText:{type:String},size:{type:String},max:{type:Number},min:{type:Number},minLength:{type:Number},maxLength:{type:Number},pattern:{type:String},placeholder:{type:String},readOnly:{type:Boolean},required:{type:Boolean},type:{type:String},value:{type:String},name:{type:String},_hasPrefix:{state:!0},_hasSuffix:{state:!0}};static styles=[F.styles,ee`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `];constructor(){super(),this.type="text"}get _inputStyles(){return I([Ee.base,this._hasSuffix&&Ee.suffix,this._hasPrefix&&Ee.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Ee.default,this.invalid&&!this.disabled&&!this.readOnly&&Ee.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Ee.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Ee.readOnly])}get _helpTextStyles(){return I([nt.base,this.invalid?nt.colorInvalid:nt.color])}get _label(){if(this.label)return v`<label for="${this._id}" class=${Fr.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.target;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return v`
      ${this._label}
      <div class="${Ee.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputStyles}"
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
      ${this.helpText&&v`<div class="${this._helpTextStyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}customElements.get("w-textfield")||customElements.define("w-textfield",fu);const wr=typeof window<"u";function mu(t,e){if(!wr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function bu(t){return wr?customElements.get("w-toast-container").init().del(t):void 0}function vu(t,e){if(!wr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:wu}=Gn,ni=()=>document.createComment(""),vt=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const n=o.insertBefore(ni(),i),s=o.insertBefore(ni(),i);r=new wu(n,s,t,t.options)}else{const n=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(n!==i||l){let a=r._$AA;for(;a!==n;){const u=a.nextSibling;o.insertBefore(a,i),a=u}}}return r},Fe=(t,e,r=t)=>(t._$AI(e,r),t),yu={},$u=(t,e=yu)=>t._$AH=e,xu=t=>t._$AH,Br=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},ku=eo(class extends to{constructor(t){if(super(t),t.type!==Xr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],n=[];let s=0;for(const l of t)i[s]=o?o(l,s):s,n[s]=r(l,s),s++;return{values:n,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=xu(t),{values:n,keys:s}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=s,n;const l=this.ut??=[],a=[];let u,h,c=0,g=i.length-1,d=0,f=n.length-1;for(;c<=g&&d<=f;)if(i[c]===null)c++;else if(i[g]===null)g--;else if(l[c]===s[d])a[d]=Fe(i[c],n[d]),c++,d++;else if(l[g]===s[f])a[f]=Fe(i[g],n[f]),g--,f--;else if(l[c]===s[f])a[f]=Fe(i[c],n[f]),vt(t,a[f+1],i[c]),c++,f--;else if(l[g]===s[d])a[d]=Fe(i[g],n[d]),vt(t,i[c],i[g]),g--,d++;else if(u===void 0&&(u=si(s,d,f),h=si(l,c,g)),u.has(l[c]))if(u.has(l[g])){const p=h.get(s[d]),b=p!==void 0?i[p]:null;if(b===null){const _=vt(t,i[c]);Fe(_,n[d]),a[d]=_}else a[d]=Fe(b,n[d]),vt(t,i[c],b),i[p]=null;d++}else Br(i[g]),g--;else Br(i[c]),c++;for(;d<=f;){const p=vt(t,a[f+1]);Fe(p,n[d]),a[d++]=p}for(;c<=g;){const p=i[c++];p!==null&&Br(p)}return this.ut=s,$u(t,a),_e}});class On extends F{static styles=[F.styles,ee`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const n=this.renderRoot.querySelector(`#${i}`);o.push(n.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return v`
      <aside class="${xr.wrapper}">
        <div class="${xr.base}" id="w-toast-container-list">
          ${ku(this._toastsArray,e=>e.id,e=>v` <w-toast
                class="${xr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",On);const yo=typeof window<"u";let Ln=!0;if(yo){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Ln=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const Tn=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},Nn=t=>{const e=Ln?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},_u=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Su=t=>()=>{t&&t()},Pn=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=_u(t,e);Tn(t),t.style.height="auto";let i=t.scrollHeight;if(yo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",Nn(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},Dn=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=Su(e);Tn(t);let i=t.scrollHeight;if(yo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",Nn(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},Eu=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),Cu=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),Au=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),Ou=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Lu=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Ce={success:"success",error:"error",warning:"warning"};class Tu extends F{static styles=[F.styles,ee`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),De(Cu,Ou,Au,Eu,Lu),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&Pn(this._wrapper,()=>this._expanded=!0)}get#e(){return I([pe.base,this.type===Ce.success&&pe.positive,this.type===Ce.warning&&pe.warning,this.type===Ce.error&&pe.negative])}get#t(){return I([pe.iconBase,this.type===Ce.success&&pe.iconPositive,this.type===Ce.warning&&pe.iconWarning,this.type===Ce.error&&pe.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Ce.warning}get _error(){return this.type===Ce.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?S._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?S._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):S._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?v`<w-icon-warning-16></w-icon-warning-16>`:this._error?v`<w-icon-error-16></w-icon-error-16>`:v`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?Dn(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?v` <section class="${pe.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${pe.content}">
          <p>${this.text}</p>
        </div>
        ${jt(this.canclose===!0,()=>v`
            <button class="${pe.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:v``}}customElements.get("w-toast")||customElements.define("w-toast",Tu);class Nu extends F{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&Pn(this._wrapper),!this.show&&!this._removeElement&&Dn(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[F.styles,ee`
      :host {
        display: block;
      }
    `];render(){return v`<div aria-hidden=${J(this.show?void 0:"true")}>${this._removeElement?v``:v`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Nu);class Pu extends F{static properties={level:{type:Number}};static styles=[F.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?ro(this._markup):v`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Pu);var Du={},Bu=JSON.parse('{"icon.title.bag":["Veske"]}'),Mu=JSON.parse('{"icon.title.bag":["Handbag"]}'),Ru=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),Iu=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),Fu=JSON.parse('{"icon.title.bag":["Handväska"]}'),Bn=["en","nb","fi","da","sv"],Mn="en",ju=()=>{var t;let e;switch((t=process==null?void 0:Du)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Rn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Mn},Mr=t=>Bn.find(e=>t===e||t.toLowerCase().includes(e))||Rn();function Hu(){var t;if(typeof window>"u"){const e=ju();return Mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Rn();return Bn.includes(e)?Mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Mn}}var zu=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Uu=(t,e,r,o,i)=>{const n=Hu(),s=zu(n,t,e,r,o,i);S.load(n,s),S.activate(n)};Uu(Mu,Bu,Ru,Iu,Fu);var Wu=class extends W{render(){const t=S.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return $e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${ye(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",Wu);wr&&(window.WarpToastContainer=On,window.toast=mu,window.updateToast=vu,window.removeToast=bu);const Vu={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Ju extends F{static styles=[F.styles,ee`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Vu;return v`
      <nav class="sidebar p-24 s-bg-subtle mr-12">
        <h2>
          <a href="${e.href}" class="no-underline py-2">${e.title}</a>
        </h2>

        <ul class="py-8">
          ${this.renderItems(r)}
        </ul>
      </nav>
    `}renderItems(e){return e.map(r=>v`
        <li>
          ${r.href?v`<a class="no-underline py-2 px-16 text-m" href="${r.href}">${r.title}</a>`:v`<span class="pt-2 text-m font-bold">${r.title}</span>`}
          ${r.items?v`<ul class="py-4">
                ${this.renderItems(r.items)}
              </ul>`:""}
        </li>
      `)}}customElements.define("sidebar-element",Ju);
