(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=globalThis,Jr=Ht.ShadowRoot&&(Ht.ShadyCSS===void 0||Ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qr=Symbol(),$o=new WeakMap;let ii=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Jr&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=$o.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&$o.set(r,e))}return e}toString(){return this.cssText}};const ni=t=>new ii(typeof t=="string"?t:t+"",void 0,qr),se=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new ii(r,t,qr)},jn=(t,e)=>{if(Jr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=Ht.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},xo=Jr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return ni(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hn,defineProperty:zn,getOwnPropertyDescriptor:Un,getOwnPropertyNames:Wn,getOwnPropertySymbols:Vn,getPrototypeOf:Jn}=Object,dr=globalThis,_o=dr.trustedTypes,qn=_o?_o.emptyScript:"",Qn=dr.reactiveElementPolyfillSupport,$t=(t,e)=>t,Ut={toAttribute(t,e){switch(e){case Boolean:t=t?qn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Qr=(t,e)=>!Hn(t,e),ko={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:Qr};Symbol.metadata??=Symbol("metadata"),dr.litPropertyMetadata??=new WeakMap;let He=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ko){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&zn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=Un(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);n.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ko}static _$Ei(){if(this.hasOwnProperty($t("elementProperties")))return;const e=Jn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($t("properties"))){const r=this.properties,o=[...Wn(r),...Vn(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(xo(i))}else e!==void 0&&r.push(xo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:Ut).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ut;this._$Em=i,this[i]=s.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Qr)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};He.elementStyles=[],He.shadowRootOptions={mode:"open"},He[$t("elementProperties")]=new Map,He[$t("finalized")]=new Map,Qn?.({ReactiveElement:He}),(dr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,Wt=Yr.trustedTypes,So=Wt?Wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Kr="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,Gr="?"+Se,Yn=`<${Gr}>`,Ve=document,kt=()=>Ve.createComment(""),St=t=>t===null||typeof t!="object"&&typeof t!="function",Zr=Array.isArray,si=t=>Zr(t)||typeof t?.[Symbol.iterator]=="function",$r=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=/-->/g,Co=/>/g,Me=RegExp(`>|${$r}(?:([^\\s"'>=/]+)(${$r}*=${$r}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ao=/'/g,Oo=/"/g,ai=/^(?:script|style|textarea|title)$/i,Kn=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=Kn(1),Ne=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Lo=new WeakMap,ze=Ve.createTreeWalker(Ve,129);function li(t,e){if(!Zr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return So!==void 0?So.createHTML(e):e}const ci=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=gt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,h=s.exec(a),h!==null);)f=s.lastIndex,s===gt?h[1]==="!--"?s=Eo:h[1]!==void 0?s=Co:h[2]!==void 0?(ai.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Me):h[3]!==void 0&&(s=Me):s===Me?h[0]===">"?(s=i??gt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Me:h[3]==='"'?Oo:Ao):s===Oo||s===Ao?s=Me:s===Eo||s===Co?s=gt:(s=Me,i=void 0);const d=s===Me&&t[l+1].startsWith("/>")?" ":"";n+=s===gt?a+Yn:c>=0?(o.push(u),a.slice(0,c)+Kr+a.slice(c)+Se+d):a+Se+(c===-2?l:d)}return[li(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Rr=class di{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=ci(e,r);if(this.el=di.createElement(u,o),ze.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=ze.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Kr)){const f=h[s++],d=i.getAttribute(c).split(Se),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:g[2],strings:d,ctor:g[1]==="."?pi:g[1]==="?"?fi:g[1]==="@"?gi:Pt}),i.removeAttribute(c)}else c.startsWith(Se)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(ai.test(i.tagName)){const c=i.textContent.split(Se),f=c.length-1;if(f>0){i.textContent=Wt?Wt.emptyScript:"";for(let d=0;d<f;d++)i.append(c[d],kt()),ze.nextNode(),a.push({type:2,index:++n});i.append(c[f],kt())}}}else if(i.nodeType===8)if(i.data===Gr)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(Se,c+1))!==-1;)a.push({type:7,index:n}),c+=Se.length-1}n++}}static createElement(e,r){const o=Ve.createElement("template");return o.innerHTML=e,o}};function Je(t,e,r=t,o){if(e===Ne)return e;let i=o!==void 0?r.o?.[o]:r.l;const n=St(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=Je(t,i._$AS(t,e.values),i,o)),e}class ui{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Ve).importNode(r,!0);ze.currentNode=i;let n=ze.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new ur(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new mi(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=ze.nextNode(),s++)}return ze.currentNode=Ve,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let ur=class hi{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Je(this,e,r),St(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):si(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&St(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ve.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Rr.createElement(li(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new ui(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Lo.get(e.strings);return r===void 0&&Lo.set(e.strings,r=new Rr(e)),r}k(e){Zr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new hi(this.O(kt()),this.O(kt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=F}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=Je(this,e,r,0),s=!St(e)||e!==this._$AH&&e!==Ne,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=Je(this,l[o+a],r,a),u===Ne&&(u=this._$AH[a]),s||=!St(u)||u!==this._$AH[a],u===F?e=F:e!==F&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pi extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class fi extends Pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class gi extends Pt{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=Je(this,e,r,0)??F)===Ne)return;const o=this._$AH,i=e===F&&o!==F||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==F&&(o===F||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class mi{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}}const Gn={M:Kr,P:Se,A:Gr,C:1,L:ci,R:ui,D:si,V:Je,I:ur,H:Pt,N:fi,U:gi,B:pi,F:mi},Zn=Yr.litHtmlPolyfillSupport;Zn?.(Rr,ur),(Yr.litHtmlVersions??=[]).push("3.2.0");const Xn=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new ur(e.insertBefore(kt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let W=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Xn(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Ne}};W._$litElement$=!0,W.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:W});const es=globalThis.litElementPolyfillSupport;es?.({LitElement:W});(globalThis.litElementVersions??=[]).push("4.1.0");function ts(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const To=String.raw`[A-Za-z][^/\s>]*`,rs=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,os=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,bi=String.raw`${rs}|${os}`,is=String.raw`"(?<quotedAttrValue>[^"]*)"`,ns=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,ss=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,as=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,ls=String.raw`${is}|${ns}|${ss}`,cs=String.raw`(?<attrName>${as})(?:\s*=\s*(?:${ls}))?`,ds=String.raw`${bi}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,vi=String.raw`(?<attrSpace>\s*)(?:${cs}|(?<attrText>${ds}))`,us={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${To})(?<attrs>(?:${vi})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${To})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${bi}|['"]`,wildcard:String.raw`.`},hs=Object.entries(us).map(([t,e])=>`(?<${t}>${e})`).join("|");function*ps(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const fs=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Et(t,e="  ",r=80){const o=new RegExp(hs,"gys"),i=new RegExp(vi,"gy"),n=[];let s=null,l=0,a=0,u="",h=0,c="";const f=()=>{if(c&&c!=`
`){const S=u.indexOf(`
`),A=S==-1?u.length:S;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",b=`${c}${p}${u}`;if(b){const S=b.lastIndexOf(`
`);S==-1?a+=b.length:a=b.length-S-1,n.push(b)}u=c=""},d=(...p)=>{for(const b of p)!s&&/^\s+$/.test(b)?(f(),c=b):(u||(h=l),u+=b)};for(const p of ps(o,t)){if(Et.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const b=p.groups.endTagName.toLowerCase();b==s&&(s=null),s||(--l,d(`</${b}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const b=p.groups.startTagName.toLowerCase();if(d(`<${b}`),++l,p.groups.attrs){let{lastIndex:A}=i,C,B;for(;C=i.exec(p.groups.attrs);){if({lastIndex:A}=i,Et.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(C.groups.attrText)):((C.groups.attrSpace||!B?.groups.attrText)&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),B=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const S=!!p.groups.closingSlash;d(S?" />":">"),S||fs.has(b)?--l:["pre","textarea","script","style"].includes(b)&&(s=b)}}f();let g=!1;for(;/^\s+$/.test(n[n.length-1]);){const p=n.pop();/\n/.test(p)&&(g=!0)}return g&&n.push(`
`),n.join("")}Et.default=Et;var gs=Et;const ms=ts(gs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yi=t=>(...e)=>({_$litDirective$:t,values:e});let $i=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ir extends $i{constructor(e){if(super(e),this.it=F,e.type!==wi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===F||e==null)return this._t=void 0,this.it=e;if(e===Ne)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ir.directiveName="unsafeHTML",Ir.resultType=1;const Xr=yi(Ir);class bs extends W{static styles=se`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=ms(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${Xr(this.source)}</code></pre>`}}customElements.define("syntax-highlight",bs);var I=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?I.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};const Re={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},rt={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},de={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},we={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},xr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},ge={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},re={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"},Oe="font-bold focusable justify-center transition-colors ease-in-out",U={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},P={primary:`border-0 rounded-8 ${Oe}`,secondary:`border-2 rounded-8 ${Oe}`,utility:`border rounded-4 ${Oe}`,negative:`border-0 rounded-8 ${Oe}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Oe}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${U.link}`},k={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},x={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${U.loading}`,quiet:`border-0 rounded-8 ${Oe}`,utilityQuiet:`border-0 rounded-4 ${Oe}`,negativeQuiet:`border-0 rounded-8 ${Oe}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${U.disabled}`},T={secondary:`${k.medium} ${x.medium} ${P.secondary} ${U.secondary}`,secondaryHref:`${k.medium} ${x.medium} ${P.secondary} ${U.secondary}`,secondaryDisabled:`${k.medium} ${x.medium} ${P.secondary} ${$.isDisabled}`,secondarySmall:`${x.xsmall} ${k.xsmall} ${P.secondary} ${U.secondary}`,secondarySmallDisabled:`${x.xsmall} ${k.xsmall} ${P.secondary} ${$.isDisabled}`,secondaryQuiet:`${k.medium} ${x.medium} ${$.quiet} ${U.quiet}`,secondaryQuietDisabled:`${k.medium} ${x.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${x.xsmall} ${k.xsmall} ${$.quiet} ${U.quiet}`,secondarySmallQuietDisabled:`${x.xsmall} ${k.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${k.medium} ${x.medium} ${P.secondary} ${$.inProgress}`,secondarySmallLoading:`${x.xsmall} ${k.xsmall}  ${P.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${x.xsmall} ${k.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${k.medium} ${x.medium} ${$.quiet} ${$.inProgress}`,primary:`${k.large} ${x.medium} ${P.primary} ${U.primary}`,primaryDisabled:`${k.large} ${x.medium} ${$.isDisabled} ${P.primary}`,primarySmall:`${k.small} ${x.xsmall} ${P.primary} ${U.primary}`,primarySmallDisabled:`${k.small} ${x.xsmall} ${$.isDisabled} ${P.primary} `,primaryQuiet:`${k.large} ${x.medium} ${$.quiet} ${U.quiet}`,primaryQuietDisabled:`${k.large} ${x.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${k.small} ${x.xsmall} ${$.quiet} ${U.quiet}`,primarySmallQuietDisabled:`${k.small} ${x.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${k.large} ${x.medium} ${$.inProgress} ${P.primary}`,primarySmallLoading:`${k.small} ${x.xsmall}  ${$.inProgress} ${P.primary}`,primarySmallQuietLoading:`${k.small} ${x.xsmall} ${$.quiet} ${$.inProgress} ${P.primary}`,primaryQuietLoading:`${k.large} ${x.medium} ${$.quiet} ${$.inProgress}`,utility:`${k.utility} ${x.medium} ${P.utility} ${U.utility}`,utilityDisabled:`${k.utility} ${x.medium} ${P.utility} ${$.isDisabled}`,utilityQuiet:`${k.large} ${x.medium} ${$.utilityQuiet} ${U.utilityQuiet}`,utilityQuietDisabled:`${k.large} ${x.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${k.smallUtility} ${x.xsmall} ${P.utility} ${U.utility}`,utilitySmallDisabled:`${k.smallUtility} ${x.xsmall} ${P.utility} ${$.isDisabled}`,utilitySmallQuiet:`${k.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${U.utilityQuiet}`,utilitySmallQuietDisabled:`${k.smallUtility} ${x.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${k.large} ${x.medium} ${P.utility} ${$.inProgress}`,utilitySmallLoading:`${k.smallUtility} ${x.xsmall} ${P.utility} ${$.inProgress}`,utilityQuietLoading:`${k.large} ${x.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${k.smallUtility} ${x.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${k.large} ${x.medium} ${P.negative} ${U.destructive}`,negativeDisabled:`${k.large} ${x.medium} ${P.negative} ${$.isDisabled}`,negativeQuiet:`${k.large} ${x.medium} ${$.negativeQuiet} ${U.negativeQuiet}`,negativeQuietDisabled:`${k.large} ${x.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${k.small} ${x.xsmall} ${P.negative} ${U.destructive}`,negativeSmallDisabled:`${k.small} ${x.xsmall} ${P.negative} ${$.isDisabled}`,negativeSmallQuiet:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${U.negativeQuiet}`,negativeSmallQuietDisabled:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${k.large} ${x.medium} ${P.negative} ${$.inProgress}`,negativeSmallLoading:`${k.small} ${x.xsmall} ${$.inProgress} ${P.negative}`,negativeQuietLoading:`${k.large} ${x.medium} ${$.negativeQuiet} ${P.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${k.small} ${x.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${k.pill} ${x.medium} ${P.pill} ${U.pill}`,pillSmall:`${k.pillSmall} ${x.xsmall} ${P.pill} ${U.pill}`,pillLoading:`${k.pill} ${x.medium} ${P.pill} ${$.inProgress}`,pillSmallLoading:`${k.pillSmall} ${x.xsmall} ${P.pill} ${$.inProgress}`,link:`${k.link} ${x.medium} ${P.link}`,linkSmall:`${k.link} ${x.xsmall} ${P.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"},mt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},Ce={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},ke={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Fr={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},nt={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},xi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",vs={wrapper:xi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ws={wrapper:xi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ot={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},et={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${x.medium} ${P.pill} ${U.pill} justify-self-end -mr-8 ml-8`};var eo={},_i={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(_i);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=_i;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,g,p){const b=r(d);if(Number.isNaN(b)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(g));return b}function i(d){const g=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(g)}function n(d,g){const p=o(d,e.ErrorType.MalformedUnicode,4);if(g!==void 0){const b=o(g,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,b)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const g=d.slice(1,-1),p=o(g,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(b){throw b instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):b}}function a(d,g=!1){if(g)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function f(d,g=!1){return d.replace(c,function(p,b,S,A,C,B,y,O,L){if(b!==void 0)return"\\";if(S!==void 0)return i(S);if(A!==void 0)return l(A);if(C!==void 0)return n(C,B);if(y!==void 0)return n(y);if(O==="0")return"\0";if(O!==void 0)return a(O,!g);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=f,t.default=f})(eo);const We=t=>typeof t=="string",ys=t=>typeof t=="function",No=new Map,ki="en";function to(t){return[...Array.isArray(t)?t:[t],ki]}function Si(t,e,r){const o=to(t);return Vt(()=>Jt("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(We(e)?new Date(e):e)}function jr(t,e,r){const o=to(t);return Vt(()=>Jt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Po(t,e,r,{offset:o=0,...i}){const n=to(t),s=e?Vt(()=>Jt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Vt(()=>Jt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Vt(t,e){const r=t();let o=No.get(r);return o||(o=e(),No.set(r,o)),o}function Jt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Ei=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,Ci="%__lingui_octothorpe__%",$s=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s]||{style:s},n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=jr(o,s,a);return l.replace(new RegExp(Ci,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Po(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Po(o,!0,s,l);return n(s-a,u)},select:xs,number:(s,l)=>jr(o,s,i(l)),date:(s,l)=>Si(o,s,i(l))}},xs=(t,e)=>e[t]??e.other;function _s(t,e,r){return(o={},i)=>{const n=$s(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Ci;if(We(c))return h+c;const[f,d,g]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(g).forEach(([S,A])=>{p[S]=s(A,d==="plural"||d==="selectordinal")}):p=g;let b;if(d){const S=n[d];b=S(o[f],p)}else b=o[f];return b==null?h:h+b},""):a,l=s(t);return We(l)&&Ei.test(l)?eo.unraw(l.trim()):We(l)?l.trim():l?String(l):""}}var ks=Object.defineProperty,Ss=(t,e,r)=>e in t?ks(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Es=(t,e,r)=>(Ss(t,e+"",r),r);let Cs=class{constructor(){Es(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var As=Object.defineProperty,Os=(t,e,r)=>e in t?As(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tt=(t,e,r)=>(Os(t,typeof e!="symbol"?e+"":e,r),r);let Ls=class extends Cs{constructor(e){super(),tt(this,"_locale",""),tt(this,"_locales"),tt(this,"_localeData",{}),tt(this,"_messages",{}),tt(this,"_missing"),tt(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??ki,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),We(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return ys(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return We(a)&&Ei.test(a)?JSON.parse(`"${a}"`):We(a)?a:_s(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Si(this._locales||this._locale,e,r)}number(e,r){return jr(this._locales||this._locale,e,r)}};function Ts(t={}){return new Ls(t)}const _r=Ts();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro=globalThis,qt=ro.trustedTypes,Do=qt?qt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ai="$lit$",Le=`lit$${Math.random().toFixed(9).slice(2)}$`,Oi="?"+Le,Ns=`<${Oi}>`,qe=document,Ct=()=>qe.createComment(""),At=t=>t===null||typeof t!="object"&&typeof t!="function",oo=Array.isArray,Ps=t=>oo(t)||typeof t?.[Symbol.iterator]=="function",kr=`[ 	
\f\r]`,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bo=/-->/g,Mo=/>/g,Ie=RegExp(`>|${kr}(?:([^\\s"'>=/]+)(${kr}*=${kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ro=/'/g,Io=/"/g,Li=/^(?:script|style|textarea|title)$/i,at=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Fo=new WeakMap,Ue=qe.createTreeWalker(qe,129);function Ti(t,e){if(!oo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Do!==void 0?Do.createHTML(e):e}const Ds=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=bt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,h=s.exec(a),h!==null);)f=s.lastIndex,s===bt?h[1]==="!--"?s=Bo:h[1]!==void 0?s=Mo:h[2]!==void 0?(Li.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Ie):h[3]!==void 0&&(s=Ie):s===Ie?h[0]===">"?(s=i??bt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Ie:h[3]==='"'?Io:Ro):s===Io||s===Ro?s=Ie:s===Bo||s===Mo?s=bt:(s=Ie,i=void 0);const d=s===Ie&&t[l+1].startsWith("/>")?" ":"";n+=s===bt?a+Ns:c>=0?(o.push(u),a.slice(0,c)+Ai+a.slice(c)+Le+d):a+Le+(c===-2?l:d)}return[Ti(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Ot{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Ds(e,r);if(this.el=Ot.createElement(u,o),Ue.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ue.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Ai)){const f=h[s++],d=i.getAttribute(c).split(Le),g=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:g[2],strings:d,ctor:g[1]==="."?Ms:g[1]==="?"?Rs:g[1]==="@"?Is:hr}),i.removeAttribute(c)}else c.startsWith(Le)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Li.test(i.tagName)){const c=i.textContent.split(Le),f=c.length-1;if(f>0){i.textContent=qt?qt.emptyScript:"";for(let d=0;d<f;d++)i.append(c[d],Ct()),Ue.nextNode(),a.push({type:2,index:++n});i.append(c[f],Ct())}}}else if(i.nodeType===8)if(i.data===Oi)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(Le,c+1))!==-1;)a.push({type:7,index:n}),c+=Le.length-1}n++}}static createElement(e,r){const o=qe.createElement("template");return o.innerHTML=e,o}}function lt(t,e,r=t,o){if(e===at)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const n=At(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=lt(t,i._$AS(t,e.values),i,o)),e}class Bs{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??qe).importNode(r,!0);Ue.currentNode=i;let n=Ue.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new Dt(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new Fs(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=Ue.nextNode(),s++)}return Ue.currentNode=qe,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Dt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=lt(this,e,r),At(e)?e===Z||e==null||e===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==at&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(qe.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ot.createElement(Ti(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Bs(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Fo.get(e.strings);return r===void 0&&Fo.set(e.strings,r=new Ot(e)),r}k(e){oo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Dt(this.O(Ct()),this.O(Ct()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=lt(this,e,r,0),s=!At(e)||e!==this._$AH&&e!==at,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=lt(this,l[o+a],r,a),u===at&&(u=this._$AH[a]),s||=!At(u)||u!==this._$AH[a],u===Z?e=Z:e!==Z&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ms extends hr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class Rs extends hr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class Is extends hr{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=lt(this,e,r,0)??Z)===at)return;const o=this._$AH,i=e===Z&&o!==Z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==Z&&(o===Z||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Fs{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}}const js=ro.litHtmlPolyfillSupport;js?.(Ot,Dt),(ro.litHtmlVersions??=[]).push("3.2.1");const Hs=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new Dt(e.insertBefore(Ct(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xt=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hs(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return at}};xt._$litElement$=!0,xt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:xt});const zs=globalThis.litElementPolyfillSupport;zs?.({LitElement:xt});(globalThis.litElementVersions??=[]).push("4.1.1");class Us extends xt{#e=!1;get i18n(){return this.#e||(_r.load(this.locale,this.translations),_r.activate(this.locale),this.#e=!0),_r}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const io=()=>!(typeof window<"u");class Ni{isServer=!1;css=""}const Ws=(t=[])=>{const e=new Ni;if(io()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},Vs=()=>Ws(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),Js=async(t=[])=>{const e=new Ni;if(io()){for(const n of t)e.css+=`@import url('${n}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(n=>fetch(n))),i=await Promise.all(o.map(n=>n.text()));for(const n of i)e.css+=n;return e},jo=async()=>Js(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(m){var v=m.replace(s,"");return v!==m&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),v.trim()}function a(m){return"isConnected"in m?m.isConnected:document.contains(m)}function u(m){return m.filter(function(v,N){return m.indexOf(v)===N})}function h(m,v){return m.filter(function(N){return v.indexOf(N)===-1})}function c(m){m.parentNode.removeChild(m)}function f(m){return m.shadowRoot||r.get(m)}var d=["addRule","deleteRule","insertRule","removeRule"],g=CSSStyleSheet,p=g.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function b(m){return typeof m=="object"?z.isPrototypeOf(m)||p.isPrototypeOf(m):!1}function S(m){return typeof m=="object"?p.isPrototypeOf(m):!1}var A=new WeakMap,C=new WeakMap,B=new WeakMap,y=new WeakMap;function O(m,v){var N=document.createElement("style");return B.get(m).set(v,N),C.get(m).push(v),N}function L(m,v){return B.get(m).get(v)}function M(m,v){B.get(m).delete(v),C.set(m,C.get(m).filter(function(N){return N!==v}))}function H(m,v){requestAnimationFrame(function(){v.textContent=A.get(m).textContent,y.get(m).forEach(function(N){return v.sheet[N.method].apply(v.sheet,N.args)})})}function V(m){if(!A.has(m))throw new TypeError("Illegal invocation")}function G(){var m=this,v=document.createElement("style");e.body.appendChild(v),A.set(m,v),C.set(m,[]),B.set(m,new WeakMap),y.set(m,[])}var z=G.prototype;z.replace=function(v){try{return this.replaceSync(v),Promise.resolve(this)}catch(N){return Promise.reject(N)}},z.replaceSync=function(v){if(V(this),typeof v=="string"){var N=this;A.get(N).textContent=l(v),y.set(N,[]),C.get(N).forEach(function(ne){ne.isConnected()&&H(N,L(N,ne))})}},i(z,"cssRules",{configurable:!0,enumerable:!0,get:function(){return V(this),A.get(this).sheet.cssRules}}),i(z,"media",{configurable:!0,enumerable:!0,get:function(){return V(this),A.get(this).sheet.media}}),d.forEach(function(m){z[m]=function(){var v=this;V(v);var N=arguments;y.get(v).push({method:m,args:N}),C.get(v).forEach(function(le){if(le.isConnected()){var te=L(v,le).sheet;te[m].apply(te,N)}});var ne=A.get(v).sheet;return ne[m].apply(ne,N)}}),i(G,Symbol.hasInstance,{configurable:!0,value:b});var ae={childList:!0,subtree:!0},D=new WeakMap;function X(m){var v=D.get(m);return v||(v=new wo(m),D.set(m,v)),v}function Q(m){i(m.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return X(this).sheets},set:function(v){X(this).update(v)}})}function oe(m,v){for(var N=document.createNodeIterator(m,NodeFilter.SHOW_ELEMENT,function(le){return f(le)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ne=void 0;ne=N.nextNode();)v(f(ne))}var ee=new WeakMap,ie=new WeakMap,Ze=new WeakMap;function In(m,v){return v instanceof HTMLStyleElement&&ie.get(m).some(function(N){return L(N,m)})}function vo(m){var v=ee.get(m);return v instanceof Document?v.body:v}function yr(m){var v=document.createDocumentFragment(),N=ie.get(m),ne=Ze.get(m),le=vo(m);ne.disconnect(),N.forEach(function(te){v.appendChild(L(te,m)||O(te,m))}),le.insertBefore(v,null),ne.observe(le,ae),N.forEach(function(te){H(te,L(te,m))})}function wo(m){var v=this;v.sheets=[],ee.set(v,m),ie.set(v,[]),Ze.set(v,new MutationObserver(function(N,ne){if(!document){ne.disconnect();return}N.forEach(function(le){t||n.call(le.addedNodes,function(te){te instanceof Element&&oe(te,function(Xe){X(Xe).connect()})}),n.call(le.removedNodes,function(te){te instanceof Element&&(In(v,te)&&yr(v),t||oe(te,function(Xe){X(Xe).disconnect()}))})})}))}if(wo.prototype={isConnected:function(){var m=ee.get(this);return m instanceof Document?m.readyState!=="loading":a(m.host)},connect:function(){var m=vo(this);Ze.get(this).observe(m,ae),ie.get(this).length>0&&yr(this),oe(m,function(v){X(v).connect()})},disconnect:function(){Ze.get(this).disconnect()},update:function(m){var v=this,N=ee.get(v)===document?"Document":"ShadowRoot";if(!Array.isArray(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Iterator getter is not callable.");if(!m.every(b))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Failed to convert value to 'CSSStyleSheet'");if(m.some(S))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+N+": Can't adopt non-constructed stylesheets");v.sheets=m;var ne=ie.get(v),le=u(m),te=h(ne,le);te.forEach(function(Xe){c(L(Xe,v)),M(Xe,v)}),ie.set(v,le),v.isConnected()&&le.length>0&&yr(v)}},window.CSSStyleSheet=G,Q(Document),"ShadowRoot"in window){Q(ShadowRoot);var yo=Element.prototype,Fn=yo.attachShadow;yo.attachShadow=function(v){var N=Fn.call(this,v);return v.mode==="closed"&&r.set(this,N),N}}var Ft=X(document);Ft.isConnected()?Ft.connect():document.addEventListener("DOMContentLoaded",Ft.connect.bind(Ft))})();let yt;if(io()){const t=await jo();yt=ni(t.css)}else{yt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await jo();yt.replaceSync(r.css)}catch{const e=Vs();yt.replaceSync(e.css)}}class j extends Us{static styles=[yt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??F;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=Symbol.for(""),qs=t=>{if(t?.r===Pi)return t?._$litStatic$},xe=t=>({_$litStatic$:t,r:Pi}),Ho=new Map,Qs=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(n=r[u],(i=qs(n))!==void 0);)a+=i+e[++u],h=!0;u!==o&&l.push(n),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=Ho.get(c))===void 0&&(s.raw=s,Ho.set(c,e=s)),r=l}return t(e,...r)},_e=Qs(w),Te=t=>typeof t=="string",Ys=t=>typeof t=="function",zo=new Map,Di="en";function no(t){return[...Array.isArray(t)?t:[t],Di]}function so(t,e,r){const o=no(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return Qt(()=>Yt("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(Te(e)?new Date(e):e)}function Ks(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return so(t,e,o)}function Hr(t,e,r){const o=no(t);return Qt(()=>Yt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Uo(t,e,r,{offset:o=0,...i}){const n=no(t),s=e?Qt(()=>Yt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Qt(()=>Yt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Qt(t,e){const r=t();let o=zo.get(r);return o||(o=e(),zo.set(r,o)),o}function Yt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Bi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Mi="%__lingui_octothorpe__%",Gs=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s],n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=Hr(o,s,a);return l.replace(new RegExp(Mi,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Uo(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Uo(o,!0,s,l);return n(s-a,u)},select:Zs,number:(s,l)=>Hr(o,s,i(l)||{style:l}),date:(s,l)=>so(o,s,i(l)||l),time:(s,l)=>Ks(o,s,i(l)||l)}},Zs=(t,e)=>e[t]??e.other;function Xs(t,e,r){return(o={},i)=>{const n=Gs(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Mi;if(Te(c))return h+c;const[f,d,g]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(g).forEach(([S,A])=>{p[S]=s(A,d==="plural"||d==="selectordinal")}):p=g;let b;if(d){const S=n[d];b=S(o[f],p)}else b=o[f];return b==null?h:h+b},""):a,l=s(t);return Te(l)&&Bi.test(l)?eo.unraw(l):Te(l)?l:l?String(l):""}}var ea=Object.defineProperty,ta=(t,e,r)=>e in t?ea(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ra=(t,e,r)=>(ta(t,e+"",r),r);class oa{constructor(){ra(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var ia=Object.defineProperty,na=(t,e,r)=>e in t?ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Fe=(t,e,r)=>(na(t,typeof e!="symbol"?e+"":e,r),r);class sa extends oa{constructor(e){super(),Fe(this,"_locale",""),Fe(this,"_locales"),Fe(this,"_localeData",{}),Fe(this,"_messages",{}),Fe(this,"_missing"),Fe(this,"_messageCompiler"),Fe(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Di,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),Te(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return Ys(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Te(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Te(a)&&Bi.test(a)?JSON.parse(`"${a}"`):Te(a)?a:Xs(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return so(this._locales||this._locale,e,r)}number(e,r){return Hr(this._locales||this._locale,e,r)}}function aa(t={}){return new sa(t)}const E=aa();var la={},ca=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),da=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),ua=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),ha=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),pa=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Ri=["en","nb","fi","da","sv"],Ii="en",fa=()=>{var t;let e;switch((t=process==null?void 0:la)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Fi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ii},Sr=t=>Ri.find(e=>t===e||t.toLowerCase().includes(e))||Fi();function ga(){var t;if(typeof window>"u"){const e=fa();return Sr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Fi();return Ri.includes(e)?Sr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Sr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ii}}var ma=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ba=(t,e,r,o,i)=>{const n=ga(),s=ma(n,t,e,r,o,i);E.load(n,s),E.activate(n)};ba(da,ca,ua,ha,pa);var va=class extends W{render(){const t=E.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",va);var wa={},ya=JSON.parse('{"icon.title.close":["Kryss"]}'),$a=JSON.parse('{"icon.title.close":["Cross"]}'),xa=JSON.parse('{"icon.title.close":["Rasti"]}'),_a=JSON.parse('{"icon.title.close":["Kryds"]}'),ka=JSON.parse('{"icon.title.close":["Kryss"]}'),ji=["en","nb","fi","da","sv"],Hi="en",Sa=()=>{var t;let e;switch((t=process==null?void 0:wa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},zi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Hi},Er=t=>ji.find(e=>t===e||t.toLowerCase().includes(e))||zi();function Ea(){var t;if(typeof window>"u"){const e=Sa();return Er(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=zi();return ji.includes(e)?Er(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Er(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Hi}}var Ca=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Aa=(t,e,r,o,i)=>{const n=Ea(),s=Ca(n,t,e,r,o,i);E.load(n,s),E.activate(n)};Aa($a,ya,xa,_a,ka);var Oa=class extends W{render(){const t=E.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Oa);const La=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function dt(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:La(e.toString())})),super.createProperty(e,o)}}}function Ta(){return`m${Math.random().toString(36).slice(2)}`}class Na extends dt(j){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[j.styles];get _classBase(){return this.slot==="suffix"?vs:ws}get _classes(){return I([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",Na);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pa={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:Qr},Da=(t=Pa,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function _(t){return(e,r)=>typeof r=="object"?Da(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ba(t){return _({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ma=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pr(t,e){return(r,o,i)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return Ma(r,o,{get(){return n(this)}})}}var Ra={},Ia=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),Fa=JSON.parse('{"icon.title.info":["Information circle"]}'),ja=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),Ha=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),za=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Ui=["en","nb","fi","da","sv"],Wi="en",Ua=()=>{var t;let e;switch((t=process==null?void 0:Ra)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Vi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Wi},Cr=t=>Ui.find(e=>t===e||t.toLowerCase().includes(e))||Vi();function Wa(){var t;if(typeof window>"u"){const e=Ua();return Cr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Vi();return Ui.includes(e)?Cr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Cr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Wi}}var Va=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Ja=(t,e,r,o,i)=>{const n=Wa(),s=Va(n,t,e,r,o,i);E.load(n,s),E.activate(n)};Ja(Fa,Ia,ja,Ha,za);var qa=class extends W{render(){const t=E.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",qa);var Qa={},Ya=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Ka=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),Ga=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),Za=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),Xa=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),Ji=["en","nb","fi","da","sv"],qi="en",el=()=>{var t;let e;switch((t=process==null?void 0:Qa)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Qi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":qi},Ar=t=>Ji.find(e=>t===e||t.toLowerCase().includes(e))||Qi();function tl(){var t;if(typeof window>"u"){const e=el();return Ar(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Qi();return Ji.includes(e)?Ar(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ar(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),qi}}var rl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ol=(t,e,r,o,i)=>{const n=tl(),s=rl(n,t,e,r,o,i);E.load(n,s),E.activate(n)};ol(Ka,Ya,Ga,Za,Xa);var il=class extends W{render(){const t=E.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",il);var nl={},sl=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),al=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),ll=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),cl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),dl=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),Yi=["en","nb","fi","da","sv"],Ki="en",ul=()=>{var t;let e;switch((t=process==null?void 0:nl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Gi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ki},Or=t=>Yi.find(e=>t===e||t.toLowerCase().includes(e))||Gi();function hl(){var t;if(typeof window>"u"){const e=ul();return Or(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Gi();return Yi.includes(e)?Or(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Or(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ki}}var pl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,fl=(t,e,r,o,i)=>{const n=hl(),s=pl(n,t,e,r,o,i);E.load(n,s),E.activate(n)};fl(al,sl,ll,cl,dl);var gl=class extends W{render(){const t=E.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",gl);var ml={},bl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),vl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),wl=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),yl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),$l=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),Zi=["en","nb","fi","da","sv"],Xi="en",xl=()=>{var t;let e;switch((t=process==null?void 0:ml)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},en=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xi},Lr=t=>Zi.find(e=>t===e||t.toLowerCase().includes(e))||en();function _l(){var t;if(typeof window>"u"){const e=xl();return Lr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=en();return Zi.includes(e)?Lr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Lr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xi}}var kl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Sl=(t,e,r,o,i)=>{const n=_l(),s=kl(n,t,e,r,o,i);E.load(n,s),E.activate(n)};Sl(vl,bl,wl,yl,$l);var El=class extends W{render(){const t=E.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",El);const Bt=se`
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
`,Mt=se`*, :before, :after {
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
        `;var Cl=Object.defineProperty,ao=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Cl(e,r,i),i};const vt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class fr extends W{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!vt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return I([mt.wrapper,mt[this.variant]])}get _iconClasses(){const e=mt[`${this.variant}Icon`];return I([mt.icon,e])}static{this.styles=[Bt,Mt,se`
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
          <div class=${mt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}ao([_({reflect:!0})],fr.prototype,"variant");ao([_({reflect:!0})],fr.prototype,"show");ao([_({reflect:!0})],fr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",fr);const Al=["top","right","bottom","left"],Qe=Math.min,pe=Math.max,Kt=Math.round,ye=t=>({x:t,y:t}),Ol={left:"right",right:"left",bottom:"top",top:"bottom"},Ll={start:"end",end:"start"};function zr(t,e,r){return pe(t,Qe(e,r))}function Ke(t,e){return typeof t=="function"?t(e):t}function Pe(t){return t.split("-")[0]}function ut(t){return t.split("-")[1]}function tn(t){return t==="x"?"y":"x"}function lo(t){return t==="y"?"height":"width"}function Ye(t){return["top","bottom"].includes(Pe(t))?"y":"x"}function co(t){return tn(Ye(t))}function Tl(t,e,r){r===void 0&&(r=!1);const o=ut(t),i=co(t),n=lo(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Gt(s)),[s,Gt(s)]}function Nl(t){const e=Gt(t);return[Ur(t),e,Ur(e)]}function Ur(t){return t.replace(/start|end/g,e=>Ll[e])}function Pl(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Dl(t,e,r,o){const i=ut(t);let n=Pl(Pe(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Ur)))),n}function Gt(t){return t.replace(/left|right|bottom|top/g,e=>Ol[e])}function Bl(t){return{top:0,right:0,bottom:0,left:0,...t}}function rn(t){return typeof t!="number"?Bl(t):{top:t,right:t,bottom:t,left:t}}function Zt(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function Wo(t,e,r){let{reference:o,floating:i}=t;const n=Ye(e),s=co(e),l=lo(s),a=Pe(e),u=n==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,f=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-i.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-i.width,y:c};break;default:d={x:o.x,y:o.y}}switch(ut(e)){case"start":d[s]-=f*(r&&u?-1:1);break;case"end":d[s]+=f*(r&&u?-1:1);break}return d}const Ml=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Wo(u,o,a),f=o,d={},g=0;for(let p=0;p<l.length;p++){const{name:b,fn:S}=l[p],{x:A,y:C,data:B,reset:y}=await S({x:h,y:c,initialPlacement:o,placement:f,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=A??h,c=C??c,d={...d,[b]:{...d[b],...B}},y&&g<=50&&(g++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(u=y.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:h,y:c}=Wo(u,f,a)),p=-1)}return{x:h,y:c,placement:f,strategy:i,middlewareData:d}};async function Lt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:f=!1,padding:d=0}=Ke(e,t),g=rn(d),b=l[f?c==="floating"?"reference":"floating":c],S=Zt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(b)))==null||r?b:b.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),B=await(n.isElement==null?void 0:n.isElement(C))?await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1}:{x:1,y:1},y=Zt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(S.top-y.top+g.top)/B.y,bottom:(y.bottom-S.bottom+g.bottom)/B.y,left:(S.left-y.left+g.left)/B.x,right:(y.right-S.right+g.right)/B.x}}const Rl=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ke(t,e)||{};if(u==null)return{};const c=rn(h),f={x:r,y:o},d=co(i),g=lo(d),p=await s.getDimensions(u),b=d==="y",S=b?"top":"left",A=b?"bottom":"right",C=b?"clientHeight":"clientWidth",B=n.reference[g]+n.reference[d]-f[d]-n.floating[g],y=f[d]-n.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=O?O[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(O)))&&(L=l.floating[C]||n.floating[g]);const M=B/2-y/2,H=L/2-p[g]/2-1,V=Qe(c[S],H),G=Qe(c[A],H),z=V,ae=L-p[g]-G,D=L/2-p[g]/2+M,X=zr(z,D,ae),Q=!a.arrow&&ut(i)!=null&&D!==X&&n.reference[g]/2-(D<z?V:G)-p[g]/2<0,oe=Q?D<z?D-z:D-ae:0;return{[d]:f[d]+oe,data:{[d]:X,centerOffset:D-X-oe,...Q&&{alignmentOffset:oe}},reset:Q}}}),Il=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...b}=Ke(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const S=Pe(i),A=Ye(l),C=Pe(l)===l,B=await(a.isRTL==null?void 0:a.isRTL(u.floating)),y=f||(C||!p?[Gt(l)]:Nl(l)),O=g!=="none";!f&&O&&y.push(...Dl(l,p,g,B));const L=[l,...y],M=await Lt(e,b),H=[];let V=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&H.push(M[S]),c){const D=Tl(i,s,B);H.push(M[D[0]],M[D[1]])}if(V=[...V,{placement:i,overflows:H}],!H.every(D=>D<=0)){var G,z;const D=(((G=n.flip)==null?void 0:G.index)||0)+1,X=L[D];if(X)return{data:{index:D,overflows:V},reset:{placement:X}};let Q=(z=V.filter(oe=>oe.overflows[0]<=0).sort((oe,ee)=>oe.overflows[1]-ee.overflows[1])[0])==null?void 0:z.placement;if(!Q)switch(d){case"bestFit":{var ae;const oe=(ae=V.filter(ee=>{if(O){const ie=Ye(ee.placement);return ie===A||ie==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ie=>ie>0).reduce((ie,Ze)=>ie+Ze,0)]).sort((ee,ie)=>ee[1]-ie[1])[0])==null?void 0:ae[0];oe&&(Q=oe);break}case"initialPlacement":Q=l;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};function Vo(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Jo(t){return Al.some(e=>t[e]>=0)}const Fl=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=Ke(t,e);switch(o){case"referenceHidden":{const n=await Lt(e,{...i,elementContext:"reference"}),s=Vo(n,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Jo(s)}}}case"escaped":{const n=await Lt(e,{...i,altBoundary:!0}),s=Vo(n,r.floating);return{data:{escapedOffsets:s,escaped:Jo(s)}}}default:return{}}}}};async function jl(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Pe(r),l=ut(r),a=Ye(r)==="y",u=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,c=Ke(e,t);let{mainAxis:f,crossAxis:d,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof g=="number"&&(d=l==="end"?g*-1:g),a?{x:d*h,y:f*u}:{x:f*u,y:d*h}}const Hl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await jl(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},zl=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:S,y:A}=b;return{x:S,y:A}}},...a}=Ke(t,e),u={x:r,y:o},h=await Lt(e,a),c=Ye(Pe(i)),f=tn(c);let d=u[f],g=u[c];if(n){const b=f==="y"?"top":"left",S=f==="y"?"bottom":"right",A=d+h[b],C=d-h[S];d=zr(A,d,C)}if(s){const b=c==="y"?"top":"left",S=c==="y"?"bottom":"right",A=g+h[b],C=g-h[S];g=zr(A,g,C)}const p=l.fn({...e,[f]:d,[c]:g});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[f]:n,[c]:s}}}}}},Ul=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ke(t,e),h=await Lt(e,u),c=Pe(i),f=ut(i),d=Ye(i)==="y",{width:g,height:p}=n.floating;let b,S;c==="top"||c==="bottom"?(b=c,S=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(S=c,b=f==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=g-h.left-h.right,B=Qe(p-h[b],A),y=Qe(g-h[S],C),O=!e.middlewareData.shift;let L=B,M=y;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!f){const V=pe(h.left,0),G=pe(h.right,0),z=pe(h.top,0),ae=pe(h.bottom,0);d?M=g-2*(V!==0||G!==0?V+G:pe(h.left,h.right)):L=p-2*(z!==0||ae!==0?z+ae:pe(h.top,h.bottom))}await a({...e,availableWidth:M,availableHeight:L});const H=await s.getDimensions(l.floating);return g!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function gr(){return typeof window<"u"}function ht(t){return on(t)?(t.nodeName||"").toLowerCase():"#document"}function ue(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ee(t){var e;return(e=(on(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function on(t){return gr()?t instanceof Node||t instanceof ue(t).Node:!1}function me(t){return gr()?t instanceof Element||t instanceof ue(t).Element:!1}function $e(t){return gr()?t instanceof HTMLElement||t instanceof ue(t).HTMLElement:!1}function qo(t){return!gr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ue(t).ShadowRoot}function Rt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=be(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Wl(t){return["table","td","th"].includes(ht(t))}function mr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function uo(t){const e=ho(),r=me(t)?be(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Vl(t){let e=De(t);for(;$e(e)&&!ct(e);){if(uo(e))return e;if(mr(e))return null;e=De(e)}return null}function ho(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(ht(t))}function be(t){return ue(t).getComputedStyle(t)}function br(t){return me(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function De(t){if(ht(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qo(t)&&t.host||Ee(t);return qo(e)?e.host:e}function nn(t){const e=De(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:$e(e)&&Rt(e)?e:nn(e)}function Wr(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=nn(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=ue(i);if(n){const l=Vr(s);return e.concat(s,s.visualViewport||[],Rt(i)?i:[],l&&r?Wr(l):[])}return e.concat(i,Wr(i,[],r))}function Vr(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function sn(t){const e=be(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$e(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,l=Kt(r)!==n||Kt(o)!==s;return l&&(r=n,o=s),{width:r,height:o,$:l}}function an(t){return me(t)?t:t.contextElement}function st(t){const e=an(t);if(!$e(e))return ye(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=sn(e);let s=(n?Kt(r.width):r.width)/o,l=(n?Kt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Jl=ye(0);function ln(t){const e=ue(t);return!ho()||!e.visualViewport?Jl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ql(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ue(t)?!1:e}function Tt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=an(t);let s=ye(1);e&&(o?me(o)&&(s=st(o)):s=st(t));const l=ql(n,r,o)?ln(n):ye(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(n){const f=ue(n),d=o&&me(o)?ue(o):o;let g=f,p=Vr(g);for(;p&&o&&d!==g;){const b=st(p),S=p.getBoundingClientRect(),A=be(p),C=S.left+(p.clientLeft+parseFloat(A.paddingLeft))*b.x,B=S.top+(p.clientTop+parseFloat(A.paddingTop))*b.y;a*=b.x,u*=b.y,h*=b.x,c*=b.y,a+=C,u+=B,g=ue(p),p=Vr(g)}}return Zt({width:h,height:c,x:a,y:u})}function po(t,e){const r=br(t).scrollLeft;return e?e.left+r:Tt(Ee(t)).left+r}function cn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:po(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function Ql(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=Ee(o),l=e?mr(e.floating):!1;if(o===s||l&&n)return r;let a={scrollLeft:0,scrollTop:0},u=ye(1);const h=ye(0),c=$e(o);if((c||!c&&!n)&&((ht(o)!=="body"||Rt(s))&&(a=br(o)),$e(o))){const d=Tt(o);u=st(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const f=s&&!c&&!n?cn(s,a,!0):ye(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+f.x,y:r.y*u.y-a.scrollTop*u.y+h.y+f.y}}function Yl(t){return Array.from(t.getClientRects())}function Kl(t){const e=Ee(t),r=br(t),o=t.ownerDocument.body,i=pe(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=pe(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+po(t);const l=-r.scrollTop;return be(o).direction==="rtl"&&(s+=pe(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:l}}function Gl(t,e){const r=ue(t),o=Ee(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const u=ho();(!u||u&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Zl(t,e){const r=Tt(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=$e(t)?st(t):ye(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,u=o*n.y;return{width:s,height:l,x:a,y:u}}function Qo(t,e,r){let o;if(e==="viewport")o=Gl(t,r);else if(e==="document")o=Kl(Ee(t));else if(me(e))o=Zl(e,r);else{const i=ln(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Zt(o)}function dn(t,e){const r=De(t);return r===e||!me(r)||ct(r)?!1:be(r).position==="fixed"||dn(r,e)}function Xl(t,e){const r=e.get(t);if(r)return r;let o=Wr(t,[],!1).filter(l=>me(l)&&ht(l)!=="body"),i=null;const n=be(t).position==="fixed";let s=n?De(t):t;for(;me(s)&&!ct(s);){const l=be(s),a=uo(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Rt(s)&&!a&&dn(t,s))?o=o.filter(h=>h!==s):i=l,s=De(s)}return e.set(t,o),o}function ec(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?mr(e)?[]:Xl(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=Qo(e,h,i);return u.top=pe(c.top,u.top),u.right=Qe(c.right,u.right),u.bottom=Qe(c.bottom,u.bottom),u.left=pe(c.left,u.left),u},Qo(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function tc(t){const{width:e,height:r}=sn(t);return{width:e,height:r}}function rc(t,e,r){const o=$e(e),i=Ee(e),n=r==="fixed",s=Tt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=ye(0);if(o||!o&&!n)if((ht(e)!=="body"||Rt(i))&&(l=br(e)),o){const f=Tt(e,!0,n,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=po(i));const u=i&&!o&&!n?cn(i,l):ye(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function Tr(t){return be(t).position==="static"}function Yo(t,e){if(!$e(t)||be(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Ee(t)===r&&(r=r.ownerDocument.body),r}function un(t,e){const r=ue(t);if(mr(t))return r;if(!$e(t)){let i=De(t);for(;i&&!ct(i);){if(me(i)&&!Tr(i))return i;i=De(i)}return r}let o=Yo(t,e);for(;o&&Wl(o)&&Tr(o);)o=Yo(o,e);return o&&ct(o)&&Tr(o)&&!uo(o)?r:o||Vl(t)||r}const oc=async function(t){const e=this.getOffsetParent||un,r=this.getDimensions,o=await r(t.floating);return{reference:rc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ic(t){return be(t).direction==="rtl"}const nc={convertOffsetParentRelativeRectToViewportRelativeRect:Ql,getDocumentElement:Ee,getClippingRect:ec,getOffsetParent:un,getElementRects:oc,getClientRects:Yl,getDimensions:tc,getScale:st,isElement:me,isRTL:ic},sc=Hl,ac=zl,lc=Il,cc=Ul,dc=Fl,uc=Rl,hc=(t,e,r)=>{const o=new Map,i={platform:nc,...r},n={...i.platform,_c:o};return Ml(t,e,{...i,platform:n})},Xt="top-start",er="top",tr="top-end",rr="right-start",or="right",ir="right-end",nr="bottom-start",Nt="bottom",sr="bottom-end",ar="left-start",lr="left",cr="left-end",Ko=[Xt,er,tr,rr,or,ir,nr,Nt,sr,ar,lr,cr],it={[Xt]:nr,[er]:Nt,[tr]:sr,[nr]:Xt,[Nt]:er,[sr]:tr,[ar]:rr,[lr]:or,[cr]:ir,[rr]:ar,[or]:lr,[ir]:cr},pc={[ar]:-45,[lr]:-45,[cr]:-45,[Xt]:45,[er]:45,[tr]:45,[rr]:135,[or]:135,[ir]:135,[nr]:-135,[Nt]:-135,[sr]:-135},hn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},fc=t=>t.split("-")[0],gc=t=>it[fc(t)],pn=t=>it[t],mc=t=>pc[pn(t)],bc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${hn(gc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},Go=8,jt=24;async function Zo(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return hc(e,r,{placement:t?.directionName??Nt,middleware:[sc({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&lc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&ac({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&uc({element:t?.arrowEl}),dc(),cc({apply(){Object.assign(r.style,{paddingRight:`${Go}px`,paddingLeft:`${Go}px`})}})]}).then(({x:o,y:i,middlewareData:n,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),n?.hide&&!t?.isCallout){const{referenceHidden:l}=n.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(n?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=n.arrow,h=window.getComputedStyle(r).direction==="rtl",c=pn(s).split("-")[1];let f="",d="",g="",p="";if(c==="start"){const b=typeof a=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"";f=typeof u=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"",d=h?b:"",p=h?"":b}else if(c==="end"){const b=typeof a=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"";d=h?"":b,p=h?b:"",g=typeof u=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",f=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:f,right:d,bottom:g,left:p}),bc(l,mc(s),s)}}),t}var vc={};const wc=["en","nb","fi","da","sv"],fn="en",Xo=t=>wc.find(e=>t===e||t.toLowerCase().includes(e))||fn;function yc(){if(typeof window>"u"){const t=vc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Xo(t)}try{const t=document.documentElement.lang;return Xo(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),fn}}const $c=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Be=(t,e,r,o,i)=>{const n=yc(),s=$c(n,t,e,r,o,i);E.load(n,s),E.activate(n)},xc=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),_c=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),kc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Sc=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Ec=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Cc extends dt(j){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[j.styles,se`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Be(_c,Sc,kc,xc,Ec),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(it).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(it))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Ko.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Ko)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?Zo(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return it[this._actualDirection]}get _arrowClasses(){return I([et.arrowBase,this._activeVariantClasses.arrow,et[`arrowDirection${hn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:et[r],arrow:et[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return I([et.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return E._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${et.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},Zo(this.attentionState)}pointingAtDirection(){switch(it[this._actualDirection]){case"top-start":case"top":case"top-end":return E._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return E._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return E._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return E._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return E._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return E._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return E._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return E._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Ta());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${J(this.className?this.className:void 0)}>
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
    `}}customElements.get("w-attention")||customElements.define("w-attention",Cc);class Ac extends j{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[j.styles];constructor(){super(),this.variant="neutral"}get _class(){return I([Re.base,Re[this.variant],!!this.position&&Re.positionBase,this.position==="top-left"&&Re.positionTL,this.position==="top-right"&&Re.positionTR,this.position==="bottom-right"&&Re.positionBR,this.position==="bottom-left"&&Re.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",Ac);class Oc extends j{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[j.styles,se`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return I([rt.base,this.bleed&&rt.bleed,this.info&&rt.info,this.neutral&&rt.neutral,this.bordered&&rt.bordered])}get _optOutRoleWithDefault(){return this.role===""?F:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",Oc);function Lc(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Tc=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),Nc=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Pc=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Dc=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Bc=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Mc=w`<span class=${ot.separator}>/</span>`;class Rc extends dt(j){static styles=[j.styles];static properties={ariaLabel:{type:String}};constructor(){super(),Be(Nc,Dc,Pc,Tc,Bc),this.ariaLabel=E._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screenreader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const n=i===this.children.length-1;return w`<span class=${ot.text} aria-current=${n?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?ot.link:ot.text),o});this._children=Lc(r,Mc)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ot.a11y}>${this.ariaLabel}</h2>
        <div class=${ot.wrapper}>${this._children}</div>
      </nav>
    `}}customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Rc);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Y=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function fo(t){var e,r,o,i,n,s,l,a,u,h,c,f,d,g,p,b,S,A;class C extends t{constructor(...y){var O,L,M;super(...y),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),n.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{Y(this,i,!0,"f"),Y(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{Y(this,r,!1,"f"),R(this,e,"m",b).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,i,"f")&&Y(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Y(this,l,!1,"f")),Y(this,i,!0,"f"),Y(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),f.set(this,void 0),d.set(this,!1),g.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,h,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const y=this.validators.map(M=>M.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...y])]}static getValidator(y){return this.validators.find(O=>O.attribute===y)||null}static getValidators(y){return this.validators.filter(O=>{var L;if(O.attribute===y||!((L=O.attribute)===null||L===void 0)&&L.includes(y))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(y,O,L){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,y,O,L);const V=this.constructor.getValidators(y);V?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue(y){var O;Y(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),Y(this,a,y,"f");const M=this.shouldFormValueUpdate()?y:null;this.internals.setFormValue(M),R(this,e,"m",b).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(y=>y(R(this,g,"f")))}formResetCallback(){var y,O;Y(this,i,!1,"f"),Y(this,o,!1,"f"),R(this,e,"m",p).call(this),(y=this.resetFormControl)===null||y===void 0||y.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakMap,g=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const y=R(this,o,"f")||R(this,i,"f")&&!this.validity.valid&&!R(this,r,"f");return y&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),y},b=function(y){const O=this.constructor,L={},M=O.validators,H=[],V=M.some(D=>D.isValid instanceof Promise);R(this,d,"f")||(Y(this,g,new Promise(D=>{Y(this,f,D,"f")}),"f"),Y(this,d,!0,"f")),R(this,n,"f")&&(R(this,n,"f").abort(),Y(this,s,R(this,n,"f"),"f"));const G=new AbortController;Y(this,n,G,"f");let z,ae=!1;M.length&&(M.forEach(D=>{const X=D.key||"customError",Q=D.isValid(this,y,G.signal);Q instanceof Promise?(H.push(Q),Q.then(ee=>{ee!=null&&(L[X]=!ee,z=R(this,e,"m",A).call(this,D,y),R(this,e,"m",S).call(this,L,z))})):(L[X]=!Q,this.validity[X]!==!Q&&(ae=!0),!Q&&!z&&(z=R(this,e,"m",A).call(this,D,y)))}),Promise.allSettled(H).then(()=>{var D;G?.signal.aborted||(Y(this,d,!1,"f"),(D=R(this,f,"f"))===null||D===void 0||D.call(this))}),(ae||!V)&&R(this,e,"m",S).call(this,L,z))},S=function(y,O){if(this.validationTarget)this.internals.setValidity(y,O,this.validationTarget),Y(this,l,!1,"f");else{if(this.internals.setValidity(y,O),this.internals.validity.valid)return;Y(this,l,!0,"f")}},A=function(y,O){if(this.validityCallback){const L=this.validityCallback(y.key||"customError");if(L)return L}return y.message instanceof Function?y.message(this,O):y.message},C}const Ic=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),Fc=JSON.parse('{"button.aria.loading":["Loading..."]}'),jc=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Hc=JSON.parse('{"button.aria.loading":["Laster..."]}'),zc=JSON.parse('{"button.aria.loading":["Laddar ..."]}');var Uc=Object.defineProperty,he=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Uc(e,r,i),i};const ei=["primary","secondary","negative","utility","pill","link"];class ce extends fo(dt(W)){constructor(){super(),this.type="button",Be(Fc,Hc,jc,Ic,zc),this.variant="secondary",this.ariaValueTextLoading=E._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Bt,Mt]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!ei.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${ei.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.primary,this.small&&!this.quiet&&!this.loading&&T.primarySmall,this.small&&this.quiet&&!this.loading&&T.primarySmallQuiet,this.small&&this.loading&&(this.quiet?T.primarySmallQuietLoading:T.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&T.primaryQuiet,!this.small&&this.loading&&(this.quiet?T.primaryQuietLoading:T.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.secondary,this.small&&!this.quiet&&!this.loading&&T.secondarySmall,this.small&&this.loading&&(this.quiet?T.secondarySmallQuietLoading:T.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&T.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&T.secondaryQuiet,!this.small&&this.loading&&(this.quiet?T.secondaryQuietLoading:T.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.utility,this.small&&!this.quiet&&!this.loading&&T.utilitySmall,this.small&&this.quiet&&!this.loading&&T.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?T.utilitySmallQuietLoading:T.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&T.utilityQuiet,!this.small&&this.loading&&(this.quiet?T.utilityQuietLoading:T.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&T.negative,this.small&&!this.quiet&&!this.loading&&T.negativeSmall,this.small&&this.quiet&&!this.loading&&T.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?T.negativeSmallQuietLoading:T.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&T.negativeQuiet,!this.small&&this.loading&&(this.quiet?T.negativeQuietLoading:T.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?T.pillSmall:T.pill),this.loading&&(this.small?T.pillSmallLoading:T.pillLoading)]}get _linkClasses(){return[this.small?T.linkSmall:T.link]}get _classes(){return I(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&T.linkAsButton,this.fullWidth?T.fullWidth:T.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}
        >
          <slot></slot>
        </a>`:w`<button
          type=${this.type||"button"}
          class=${this._classes}
          @click="${this._handleButtonClick}"
        >
          <slot></slot>
        </button>`}
    ${this.loading?w`<span
          class="sr-only"
          role="progressbar"
          aria-valuenow="{0}"
          aria-valuetext=${this.ariaValueTextLoading}
        ></span>`:null}`}}he([_({reflect:!0})],ce.prototype,"type");he([_({type:Boolean,reflect:!0})],ce.prototype,"autofocus");he([_({reflect:!0})],ce.prototype,"variant");he([_({type:Boolean,reflect:!0})],ce.prototype,"quiet");he([_({type:Boolean,reflect:!0})],ce.prototype,"small");he([_({type:Boolean,reflect:!0})],ce.prototype,"loading");he([_({reflect:!0})],ce.prototype,"href");he([_({reflect:!0})],ce.prototype,"target");he([_({reflect:!0})],ce.prototype,"rel");he([_({type:Boolean,reflect:!0})],ce.prototype,"fullWidth");he([_({reflect:!0})],ce.prototype,"buttonClass");he([_({reflect:!0})],ce.prototype,"name");he([_({reflect:!0})],ce.prototype,"value");customElements.get("w-button")||customElements.define("w-button",ce);const Wc=JSON.parse('{"card.button.text":["Vælg"]}'),Vc=JSON.parse('{"card.button.text":["Select"]}'),Jc=JSON.parse('{"card.button.text":["Valitse"]}'),qc=JSON.parse('{"card.button.text":["Velg"]}'),Qc=JSON.parse('{"card.button.text":["Välj"]}');var Yc=Object.defineProperty,go=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Yc(e,r,i),i};const ti={ENTER:"Enter",SPACE:" "};class vr extends W{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Be(Vc,qc,Jc,Wc,Qc),this.buttonText=E._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Bt,Mt,se`
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
    `]}get _containerClasses(){return I([we.base,this.flat?we.flat:we.shadow,this.selected&&!this.flat&&we.selected,this.selected&&this.flat?we.flatSelected:we.flatUnselected])}get _outlineClasses(){return I([we.outline,this.selected?we.outlineSelected:we.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${we.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===ti.ENTER||e.key===ti.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${J(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}go([_({type:Boolean,reflect:!0})],vr.prototype,"selected");go([_({type:Boolean})],vr.prototype,"flat");go([_({type:Boolean})],vr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",vr);var Kc={},Gc=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),Zc=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),Xc=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),ed=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),td=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),gn=["en","nb","fi","da","sv"],mn="en",rd=()=>{var t;let e;switch((t=process==null?void 0:Kc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},bn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":mn},Nr=t=>gn.find(e=>t===e||t.toLowerCase().includes(e))||bn();function od(){var t;if(typeof window>"u"){const e=rd();return Nr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=bn();return gn.includes(e)?Nr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Nr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),mn}}var id=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,nd=(t,e,r,o,i)=>{const n=od(),s=id(n,t,e,r,o,i);E.load(n,s),E.activate(n)};nd(Zc,Gc,Xc,ed,td);var sd=class extends W{render(){const t=E.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",sd);var ad={},ld=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),cd=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),dd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),ud=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),hd=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),vn=["en","nb","fi","da","sv"],wn="en",pd=()=>{var t;let e;switch((t=process==null?void 0:ad)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},yn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":wn},Pr=t=>vn.find(e=>t===e||t.toLowerCase().includes(e))||yn();function fd(){var t;if(typeof window>"u"){const e=pd();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=yn();return vn.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),wn}}var gd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,md=(t,e,r,o,i)=>{const n=fd(),s=gd(n,t,e,r,o,i);E.load(n,s),E.activate(n)};md(cd,ld,dd,ud,hd);var bd=class extends W{render(){const t=E.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",bd);var vd=Object.defineProperty,ve=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&vd(e,r,i),i};class fe extends W{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Bt,Mt,se`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return I([re.wrapper,this.box&&re.box,this.bleed&&re.bleed])}get#t(){return I(this.buttonClass,[re.button,this.box&&re.buttonBox])}get#i(){return I([re.chevron,!this.box&&re.chevronNonBox])}get#r(){const e=I([re.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&re.elementsChevronCollapse]),r=I([re.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&re.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return I(this.contentClass,[this.box&&rt.base,this._hasTitle&&this.box&&re.contentWithTitle])}get#n(){return I([re.expansion,!this.expanded&&re.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
                ${this.noChevron?"":w`<div class="${this.#i}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#n}" aria-hidden=${J(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}ve([_({type:Boolean,reflect:!0})],fe.prototype,"expanded");ve([_({type:String})],fe.prototype,"title");ve([_({type:Boolean})],fe.prototype,"box");ve([_({type:Boolean})],fe.prototype,"bleed");ve([_({attribute:"button-class",type:String})],fe.prototype,"buttonClass");ve([_({attribute:"content-class",type:String})],fe.prototype,"contentClass");ve([_({attribute:"no-chevron",type:Boolean})],fe.prototype,"noChevron");ve([_({type:Boolean})],fe.prototype,"animated");ve([_({attribute:"heading-level",type:Number})],fe.prototype,"headingLevel");ve([_({type:Boolean,state:!0})],fe.prototype,"_hasTitle");ve([_({type:Boolean,state:!0})],fe.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",fe);const $n=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},xn=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class wd extends $n(xn(W)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=se`
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
  `}}const yd=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),$d=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],xd={easing:"ease",duration:300};let _n=!1;const _d=typeof window<"u";if(_d){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>_n=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class kd{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||$d,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(yd(this.first,this.last))}get defaults(){return xd}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?_n?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var Sd={},Ed=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),Cd=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),Ad=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),Od=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),Ld=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),kn=["en","nb","fi","da","sv"],Sn="en",Td=()=>{var t;let e;switch((t=process==null?void 0:Sd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},En=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Sn},Dr=t=>kn.find(e=>t===e||t.toLowerCase().includes(e))||En();function Nd(){var t;if(typeof window>"u"){const e=Td();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=En();return kn.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Sn}}var Pd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Dd=(t,e,r,o,i)=>{const n=Nd(),s=Pd(n,t,e,r,o,i);E.load(n,s),E.activate(n)};Dd(Cd,Ed,Ad,Od,Ld);var Bd=class extends W{render(){const t=E.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Bd);const Md=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Rd=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Id=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Fd=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),jd=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Hd=Object.defineProperty,It=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Hd(e,r,i),i};class pt extends $n(W){constructor(){super(),this._hasTopContent=!1,Be(Rd,Fd,Id,Md,jd)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new kd(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
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
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=se`
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
  `}}It([_({type:String})],pt.prototype,"title");It([_({type:Boolean})],pt.prototype,"back");It([_({type:Boolean,attribute:"no-close"})],pt.prototype,"noClose");It([Ba()],pt.prototype,"_hasTopContent");It([pr(".title-el")],pt.prototype,"titleEl");let _t=[];const mo={documentElement:{},body:{}},zd=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Cn=t=>{t.touches.length>1||t.preventDefault?.()},Ud=t=>([e,r])=>{mo[t][e]=document[t].style[e],document[t].style[e]=r},Wd=()=>Object.entries(zd).forEach(([t,e])=>{Object.entries(e).forEach(Ud(t))}),Vd=t=>([e,r])=>{document[t].style[e]=mo[t][e]},Jd=()=>Object.entries(mo).forEach(([t,e])=>{Object.entries(e).forEach(Vd(t))}),qd=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Qd(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||qd(t)&&i<0?Cn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Yd(t){t.ontouchstart=null,t.ontouchmove=null}const An=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Cn,{passive:!1}),Kd=An(!0),Gd=An();function Zd(t){if(!t)throw Error("Could not run setup, an element must be provided");_t.some(e=>e===t)||(_t.length||(Wd(),Kd()),Qd(t),_t.push(t))}function Xd(){_t.forEach(Yd),Gd(),Jd(),_t=[]}var eu=Object.defineProperty,ft=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&eu(e,r,i),i};class Ge extends xn(W){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Zd(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Xd(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[se`
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
    `]}}ft([_({type:Boolean})],Ge.prototype,"show");ft([_({type:String,attribute:"content-id"})],Ge.prototype,"contentId");ft([_({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ge.prototype,"ignoreBackdropClicks");ft([pr(".dialog-el")],Ge.prototype,"dialogEl");ft([pr(".dialog-inner-el")],Ge.prototype,"dialogInnerEl");ft([pr(".content-el")],Ge.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ge),customElements.define("w-modal-header",pt),customElements.define("w-modal-footer",wd));const tu=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),ru=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),ou=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),iu=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),nu=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class su extends dt(j){static styles=[j.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Be(ru,iu,ou,tu,nu),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=E._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=E._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return I([de.button,de.label,this.suggestion?de.suggestion:de.filter,this.canClose?de.labelWithClose:de.labelWithoutClose])}get _closeClasses(){return I([de.button,de.close,this.suggestion?de.suggestion:de.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
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
    `}}customElements.get("w-pill")||customElements.define("w-pill",su);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(t,e,r){return t?e(t):r?.(t)}const au=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),lu=JSON.parse('{"select.label.optional":["(optional)"]}'),cu=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),du=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),uu=JSON.parse('{"select.label.optional":["(valfritt)"]}');class hu extends fo(dt(j)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[j.styles];constructor(){super(),Be(lu,du,cu,au,uu),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return I([ke.base,!this.invalid&&!this.disabled&&!this.readOnly&&ke.default,this.invalid&&ke.invalid,this.disabled&&ke.disabled,this.readOnly&&ke.readOnly])}get#t(){return I([nt.base,this.invalid?nt.colorInvalid:nt.color])}get#i(){return I([ke.chevron,this.disabled&&ke.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${ke.wrapper}">
      ${zt(this.label,()=>w`<label class="${Fr.base}" for="${this.#r}">
            ${this.label}
            ${zt(this.optional,()=>w`<span class="${Fr.optional}"
                  >${E._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${ke.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${J(this.#o)}"
          aria-invalid="${J(this.invalid)}"
          aria-errormessage="${J(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${Xr(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${zt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",hu);var pu=Object.defineProperty,K=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&pu(e,r,i),i};class q extends fo(W){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[Bt,Mt]}get _inputstyles(){return I([Ce.base,this._hasSuffix&&Ce.suffix,this._hasPrefix&&Ce.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Ce.default,this.invalid&&!this.disabled&&!this.readOnly&&Ce.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Ce.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Ce.readOnly])}get _helptextstyles(){return I([nt.base,this.invalid?nt.colorInvalid:nt.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Fr.base}
        >${this.label}</label
      >`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Ce.wrapper}">
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
          @focus="${this.handler}"
        />
        <slot @slotchange="${this.suffixSlotChange}" name="suffix"></slot>
      </div>
      ${this.helpText&&w`<div class="${this._helptextstyles}" id="${this._helpId}">
        ${this.helpText}
      </div>`}
    `}}K([_({type:Boolean,reflect:!0})],q.prototype,"disabled");K([_({type:Boolean,reflect:!0})],q.prototype,"invalid");K([_({type:String,reflect:!0})],q.prototype,"id");K([_({type:String,reflect:!0})],q.prototype,"label");K([_({type:String,reflect:!0})],q.prototype,"helpText");K([_({type:String,reflect:!0})],q.prototype,"size");K([_({type:Number,reflect:!0})],q.prototype,"max");K([_({type:Number,reflect:!0})],q.prototype,"min");K([_({type:Number,reflect:!0,attribute:"min-length"})],q.prototype,"minLength");K([_({type:Number,reflect:!0,attribute:"max-length"})],q.prototype,"maxLength");K([_({type:String,reflect:!0})],q.prototype,"pattern");K([_({type:String,reflect:!0})],q.prototype,"placeholder");K([_({type:Boolean,reflect:!0,attribute:"read-only"})],q.prototype,"readOnly");K([_({type:Boolean,reflect:!0})],q.prototype,"required");K([_({type:String,reflect:!0})],q.prototype,"type");K([_({type:String,reflect:!0})],q.prototype,"value");K([_({type:String,reflect:!0})],q.prototype,"name");K([_({type:Boolean})],q.prototype,"_hasPrefix");K([_({type:Boolean})],q.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",q);const wr=typeof window<"u";function fu(t,e){if(!wr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function gu(t){return wr?customElements.get("w-toast-container").init().del(t):void 0}function mu(t,e){if(!wr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:bu}=Gn,ri=()=>document.createComment(""),wt=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const n=o.insertBefore(ri(),i),s=o.insertBefore(ri(),i);r=new bu(n,s,t,t.options)}else{const n=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(n!==i||l){let a=r._$AA;for(;a!==n;){const u=a.nextSibling;o.insertBefore(a,i),a=u}}}return r},je=(t,e,r=t)=>(t._$AI(e,r),t),vu={},wu=(t,e=vu)=>t._$AH=e,yu=t=>t._$AH,Br=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},$u=yi(class extends $i{constructor(t){if(super(t),t.type!==wi.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],n=[];let s=0;for(const l of t)i[s]=o?o(l,s):s,n[s]=r(l,s),s++;return{values:n,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=yu(t),{values:n,keys:s}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=s,n;const l=this.ut??=[],a=[];let u,h,c=0,f=i.length-1,d=0,g=n.length-1;for(;c<=f&&d<=g;)if(i[c]===null)c++;else if(i[f]===null)f--;else if(l[c]===s[d])a[d]=je(i[c],n[d]),c++,d++;else if(l[f]===s[g])a[g]=je(i[f],n[g]),f--,g--;else if(l[c]===s[g])a[g]=je(i[c],n[g]),wt(t,a[g+1],i[c]),c++,g--;else if(l[f]===s[d])a[d]=je(i[f],n[d]),wt(t,i[c],i[f]),f--,d++;else if(u===void 0&&(u=oi(s,d,g),h=oi(l,c,f)),u.has(l[c]))if(u.has(l[f])){const p=h.get(s[d]),b=p!==void 0?i[p]:null;if(b===null){const S=wt(t,i[c]);je(S,n[d]),a[d]=S}else a[d]=je(b,n[d]),wt(t,i[c],b),i[p]=null;d++}else Br(i[f]),f--;else Br(i[c]),c++;for(;d<=g;){const p=wt(t,a[g+1]);je(p,n[d]),a[d++]=p}for(;c<=f;){const p=i[c++];p!==null&&Br(p)}return this.ut=s,wu(t,a),Ne}});class On extends j{static styles=[j.styles,se`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const n=this.renderRoot.querySelector(`#${i}`);o.push(n.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${xr.wrapper}">
        <div class="${xr.base}" id="w-toast-container-list">
          ${$u(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${xr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",On);const bo=typeof window<"u";let Ln=!0;if(bo){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Ln=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const Tn=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},Nn=t=>{const e=Ln?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},xu=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},_u=t=>()=>{t&&t()},Pn=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=xu(t,e);Tn(t),t.style.height="auto";let i=t.scrollHeight;if(bo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",Nn(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},Dn=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=_u(e);Tn(t);let i=t.scrollHeight;if(bo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",Nn(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},ku=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),Su=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),Eu=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),Cu=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Au=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Ae={success:"success",error:"error",warning:"warning"};class Ou extends j{static styles=[j.styles,se`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Be(Su,Cu,Eu,ku,Au),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&Pn(this._wrapper,()=>this._expanded=!0)}get#e(){return I([ge.base,this.type===Ae.success&&ge.positive,this.type===Ae.warning&&ge.warning,this.type===Ae.error&&ge.negative])}get#t(){return I([ge.iconBase,this.type===Ae.success&&ge.iconPositive,this.type===Ae.warning&&ge.iconWarning,this.type===Ae.error&&ge.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Ae.warning}get _error(){return this.type===Ae.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?E._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?E._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):E._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?Dn(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${ge.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ge.content}">
          <p>${this.text}</p>
        </div>
        ${zt(this.canclose===!0,()=>w`
            <button class="${ge.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",Ou);class Lu extends j{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&Pn(this._wrapper),!this.show&&!this._removeElement&&Dn(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[j.styles,se`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${J(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Lu);class Tu extends j{static properties={level:{type:Number}};static styles=[j.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?Xr(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Tu);var Nu={},Pu=JSON.parse('{"icon.title.bag":["Veske"]}'),Du=JSON.parse('{"icon.title.bag":["Handbag"]}'),Bu=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),Mu=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),Ru=JSON.parse('{"icon.title.bag":["Handväska"]}'),Bn=["en","nb","fi","da","sv"],Mn="en",Iu=()=>{var t;let e;switch((t=process==null?void 0:Nu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Rn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Mn},Mr=t=>Bn.find(e=>t===e||t.toLowerCase().includes(e))||Rn();function Fu(){var t;if(typeof window>"u"){const e=Iu();return Mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Rn();return Bn.includes(e)?Mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Mn}}var ju=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Hu=(t,e,r,o,i)=>{const n=Fu(),s=ju(n,t,e,r,o,i);E.load(n,s),E.activate(n)};Hu(Du,Pu,Bu,Mu,Ru);var zu=class extends W{render(){const t=E.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return _e`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${xe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",zu);wr&&(window.WarpToastContainer=On,window.toast=fu,window.updateToast=mu,window.removeToast=gu);const Uu={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class Wu extends j{static styles=[j.styles,se`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=Uu;return w`
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
      `)}}customElements.define("sidebar-element",Wu);
