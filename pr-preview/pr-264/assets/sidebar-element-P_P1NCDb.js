(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=globalThis,to=Ut.ShadowRoot&&(Ut.ShadyCSS===void 0||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ro=Symbol(),Po=new WeakMap;let bn=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ro)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(to&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Po.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Po.set(r,e))}return e}toString(){return this.cssText}};const wn=t=>new bn(typeof t=="string"?t:t+"",void 0,ro),V=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new bn(r,t,ro)},as=(t,e)=>{if(to)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),n=Ut.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},Bo=to?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return wn(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ls,defineProperty:cs,getOwnPropertyDescriptor:ds,getOwnPropertyNames:us,getOwnPropertySymbols:hs,getPrototypeOf:ps}=Object,hr=globalThis,Do=hr.trustedTypes,gs=Do?Do.emptyScript:"",fs=hr.reactiveElementPolyfillSupport,xt=(t,e)=>t,Wt={toAttribute(t,e){switch(e){case Boolean:t=t?gs:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},oo=(t,e)=>!ls(t,e),Mo={attribute:!0,type:String,converter:Wt,reflect:!1,hasChanged:oo};Symbol.metadata??=Symbol("metadata"),hr.litPropertyMetadata??=new WeakMap;let He=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Mo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&cs(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){const{get:n,set:i}=ds(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return n?.call(this)},set(s){const l=n?.call(this);i.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Mo}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const e=ps(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const r=this.properties,o=[...us(r),...hs(r)];for(const n of o)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const n of o)r.unshift(Bo(n))}else e!==void 0&&r.push(Bo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return as(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:Wt).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Wt;this._$Em=n,this[n]=s.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??oo)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,i]of o)i.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],i)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};He.elementStyles=[],He.shadowRootOptions={mode:"open"},He[xt("elementProperties")]=new Map,He[xt("finalized")]=new Map,fs?.({ReactiveElement:He}),(hr.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const no=globalThis,Vt=no.trustedTypes,Ro=Vt?Vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,io="$lit$",Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,so="?"+Ee,ms=`<${so}>`,Ve=document,_t=()=>Ve.createComment(""),St=t=>t===null||typeof t!="object"&&typeof t!="function",ao=Array.isArray,yn=t=>ao(t)||typeof t?.[Symbol.iterator]=="function",Sr=`[ 	
\f\r]`,pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zo=/-->/g,Io=/>/g,Re=RegExp(`>|${Sr}(?:([^\\s"'>=/]+)(${Sr}*=${Sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fo=/'/g,jo=/"/g,xn=/^(?:script|style|textarea|title)$/i,vs=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),b=vs(1),Ce=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Ho=new WeakMap,Ue=Ve.createTreeWalker(Ve,129);function $n(t,e){if(!ao(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ro!==void 0?Ro.createHTML(e):e}const kn=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=pt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===pt?h[1]==="!--"?s=zo:h[1]!==void 0?s=Io:h[2]!==void 0?(xn.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=Re):h[3]!==void 0&&(s=Re):s===Re?h[0]===">"?(s=n??pt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Re:h[3]==='"'?jo:Fo):s===jo||s===Fo?s=Re:s===zo||s===Io?s=pt:(s=Re,n=void 0);const d=s===Re&&t[l+1].startsWith("/>")?" ":"";i+=s===pt?a+ms:c>=0?(o.push(u),a.slice(0,c)+io+a.slice(c)+Ee+d):a+Ee+(c===-2?l:d)}return[$n(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let qr=class _n{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const l=e.length-1,a=this.parts,[u,h]=kn(e,r);if(this.el=_n.createElement(u,o),Ue.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Ue.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(io)){const g=h[s++],d=n.getAttribute(c).split(Ee),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:f[2],strings:d,ctor:f[1]==="."?Cn:f[1]==="?"?An:f[1]==="@"?On:Pt}),n.removeAttribute(c)}else c.startsWith(Ee)&&(a.push({type:6,index:i}),n.removeAttribute(c));if(xn.test(n.tagName)){const c=n.textContent.split(Ee),g=c.length-1;if(g>0){n.textContent=Vt?Vt.emptyScript:"";for(let d=0;d<g;d++)n.append(c[d],_t()),Ue.nextNode(),a.push({type:2,index:++i});n.append(c[g],_t())}}}else if(n.nodeType===8)if(n.data===so)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(Ee,c+1))!==-1;)a.push({type:7,index:i}),c+=Ee.length-1}i++}}static createElement(e,r){const o=Ve.createElement("template");return o.innerHTML=e,o}};function qe(t,e,r=t,o){if(e===Ce)return e;let n=o!==void 0?r.o?.[o]:r.l;const i=St(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=n:r.l=n),n!==void 0&&(e=qe(t,n._$AS(t,e.values),n,o)),e}class Sn{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??Ve).importNode(r,!0);Ue.currentNode=n;let i=Ue.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new pr(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new Ln(i,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(i=Ue.nextNode(),s++)}return Ue.currentNode=Ve,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let pr=class En{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,n){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=qe(this,e,r),St(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==Ce&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&St(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ve.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=qr.createElement($n(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new Sn(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=Ho.get(e.strings);return r===void 0&&Ho.set(e.strings,r=new qr(e)),r}k(e){ao(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new En(this.O(_t()),this.O(_t()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=qe(this,e,r,0),s=!St(e)||e!==this._$AH&&e!==Ce,s&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=qe(this,l[o+a],r,a),u===Ce&&(u=this._$AH[a]),s||=!St(u)||u!==this._$AH[a],u===z?e=z:e!==z&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!n&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cn extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class An extends Pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class On extends Pt{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=qe(this,e,r,0)??z)===Ce)return;const o=this._$AH,n=e===z&&o!==z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==z&&(o===z||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ln{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}}const bs={M:io,P:Ee,A:so,C:1,L:kn,R:Sn,D:yn,V:qe,I:pr,H:Pt,N:An,U:On,B:Cn,F:Ln},ws=no.litHtmlPolyfillSupport;ws?.(qr,pr),(no.litHtmlVersions??=[]).push("3.2.0");const ys=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new pr(e.insertBefore(_t(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let I=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=ys(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Ce}};I._$litElement$=!0,I.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:I});const xs=globalThis.litElementPolyfillSupport;xs?.({LitElement:I});(globalThis.litElementVersions??=[]).push("4.1.0");function $s(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const Uo=String.raw`[A-Za-z][^/\s>]*`,ks=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,_s=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Nn=String.raw`${ks}|${_s}`,Ss=String.raw`"(?<quotedAttrValue>[^"]*)"`,Es=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Cs=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,As=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Os=String.raw`${Ss}|${Es}|${Cs}`,Ls=String.raw`(?<attrName>${As})(?:\s*=\s*(?:${Os}))?`,Ns=String.raw`${Nn}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Tn=String.raw`(?<attrSpace>\s*)(?:${Ls}|(?<attrText>${Ns}))`,Ts={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Uo})(?<attrs>(?:${Tn})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Uo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Nn}|['"]`,wildcard:String.raw`.`},Ps=Object.entries(Ts).map(([t,e])=>`(?<${t}>${e})`).join("|");function*Bs(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const Ds=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Et(t,e="  ",r=80){const o=new RegExp(Ps,"gys"),n=new RegExp(Tn,"gy"),i=[];let s=null,l=0,a=0,u="",h=0,c="";const g=()=>{if(c&&c!=`
`){const E=u.indexOf(`
`),A=E==-1?u.length:E;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",v=`${c}${p}${u}`;if(v){const E=v.lastIndexOf(`
`);E==-1?a+=v.length:a=v.length-E-1,i.push(v)}u=c=""},d=(...p)=>{for(const v of p)!s&&/^\s+$/.test(v)?(g(),c=v):(u||(h=l),u+=v)};for(const p of Bs(o,t)){if(Et.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const v=p.groups.endTagName.toLowerCase();v==s&&(s=null),s||(--l,d(`</${v}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const v=p.groups.startTagName.toLowerCase();if(d(`<${v}`),++l,p.groups.attrs){let{lastIndex:A}=n,C,D;for(;C=n.exec(p.groups.attrs);){if({lastIndex:A}=n,Et.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(C.groups.attrText)):((C.groups.attrSpace||!D?.groups.attrText)&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),D=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!p.groups.closingSlash;d(E?" />":">"),E||Ds.has(v)?--l:["pre","textarea","script","style"].includes(v)&&(s=v)}}g();let f=!1;for(;/^\s+$/.test(i[i.length-1]);){const p=i.pop();/\n/.test(p)&&(f=!0)}return f&&i.push(`
`),i.join("")}Et.default=Et;var Ms=Et;const Rs=$s(Ms);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},co=t=>(...e)=>({_$litDirective$:t,values:e});let uo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Yr extends uo{constructor(e){if(super(e),this.it=z,e.type!==lo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===Ce)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Yr.directiveName="unsafeHTML",Yr.resultType=1;const ho=co(Yr);class zs extends I{static styles=V`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(n=>n.nodeType===Node.TEXT_NODE?n.textContent:n.outerHTML).join("").trim();r=Rs(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return b` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${ho(this.source)}</code></pre>`}}customElements.define("syntax-highlight",zs);var F=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?F.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(n){return o[n]?n:""}):"")},[]).join(" ")};const ze={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},gt={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},de={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Er={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},ve={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},ft="font-bold focusable justify-center transition-colors ease-in-out",Pn={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},Is={primary:`border-0 rounded-8 ${ft}`,secondary:`border-2 rounded-8 ${ft}`,utility:`border rounded-4 ${ft}`,negative:`border-0 rounded-8 ${ft}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${ft}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${Pn.link}`},Fs={medium:"text-m leading-[24]",xsmall:"text-xs"},Se={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Jo={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Cr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},Bn="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",js={wrapper:Bn+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Hs={wrapper:Bn+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},tt={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Fs.medium} ${Is.pill} ${Pn.pill} justify-self-end -mr-8 ml-8`};var po={},Dn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Dn);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Dn;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,f,p){const v=r(d);if(Number.isNaN(v)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(f));return v}function n(d){const f=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function i(d,f){const p=o(d,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const v=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,v)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=d.slice(1,-1),p=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(v){throw v instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):v}}function a(d,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(d,f=!1){return d.replace(c,function(p,v,E,A,C,D,$,O,L){if(v!==void 0)return"\\";if(E!==void 0)return n(E);if(A!==void 0)return l(A);if(C!==void 0)return i(C,D);if($!==void 0)return i($);if(O==="0")return"\0";if(O!==void 0)return a(O,!f);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(po);const We=t=>typeof t=="string",Us=t=>typeof t=="function",Wo=new Map,Mn="en";function go(t){return[...Array.isArray(t)?t:[t],Mn]}function Rn(t,e,r){const o=go(t);return qt(()=>Yt("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(We(e)?new Date(e):e)}function Qr(t,e,r){const o=go(t);return qt(()=>Yt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Vo(t,e,r,{offset:o=0,...n}){const i=go(t),s=e?qt(()=>Yt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):qt(()=>Yt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function qt(t,e){const r=t();let o=Wo.get(r);return o||(o=e(),Wo.set(r,o)),o}function Yt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const zn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,In="%__lingui_octothorpe__%",Js=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s]||{style:s},i=(s,l)=>{const a=Object.keys(r).length?n("number"):void 0,u=Qr(o,s,a);return l.replace(new RegExp(In,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Vo(o,!1,s,l);return i(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Vo(o,!0,s,l);return i(s-a,u)},select:Ws,number:(s,l)=>Qr(o,s,n(l)),date:(s,l)=>Rn(o,s,n(l))}},Ws=(t,e)=>e[t]??e.other;function Vs(t,e,r){return(o={},n)=>{const i=Js(e,r,n),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+In;if(We(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let v;if(d){const E=i[d];v=E(o[g],p)}else v=o[g];return v==null?h:h+v},""):a,l=s(t);return We(l)&&zn.test(l)?po.unraw(l.trim()):We(l)?l.trim():l?String(l):""}}var qs=Object.defineProperty,Ys=(t,e,r)=>e in t?qs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Qs=(t,e,r)=>(Ys(t,e+"",r),r);let Xs=class{constructor(){Qs(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var Zs=Object.defineProperty,Ks=(t,e,r)=>e in t?Zs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,rt=(t,e,r)=>(Ks(t,typeof e!="symbol"?e+"":e,r),r);let Gs=class extends Xs{constructor(e){super(),rt(this,"_locale",""),rt(this,"_locales"),rt(this,"_localeData",{}),rt(this,"_messages",{}),rt(this,"_missing"),rt(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Mn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let n=o?.message;e||(e=""),We(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,l=this._missing;if(l&&s)return Us(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=i||n||e;return We(a)&&zn.test(a)?JSON.parse(`"${a}"`):We(a)?a:Vs(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Rn(this._locales||this._locale,e,r)}number(e,r){return Qr(this._locales||this._locale,e,r)}};function ea(t={}){return new Gs(t)}const Ar=ea();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=globalThis,Qt=fo.trustedTypes,qo=Qt?Qt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Fn="$lit$",Te=`lit$${Math.random().toFixed(9).slice(2)}$`,jn="?"+Te,ta=`<${jn}>`,Ye=document,Ct=()=>Ye.createComment(""),At=t=>t===null||typeof t!="object"&&typeof t!="function",mo=Array.isArray,ra=t=>mo(t)||typeof t?.[Symbol.iterator]=="function",Or=`[ 	
\f\r]`,mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yo=/-->/g,Qo=/>/g,Ie=RegExp(`>|${Or}(?:([^\\s"'>=/]+)(${Or}*=${Or}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xo=/'/g,Zo=/"/g,Hn=/^(?:script|style|textarea|title)$/i,st=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Ko=new WeakMap,Je=Ye.createTreeWalker(Ye,129);function Un(t,e){if(!mo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qo!==void 0?qo.createHTML(e):e}const oa=(t,e)=>{const r=t.length-1,o=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=mt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===mt?h[1]==="!--"?s=Yo:h[1]!==void 0?s=Qo:h[2]!==void 0?(Hn.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=Ie):h[3]!==void 0&&(s=Ie):s===Ie?h[0]===">"?(s=n??mt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Ie:h[3]==='"'?Zo:Xo):s===Zo||s===Xo?s=Ie:s===Yo||s===Qo?s=mt:(s=Ie,n=void 0);const d=s===Ie&&t[l+1].startsWith("/>")?" ":"";i+=s===mt?a+ta:c>=0?(o.push(u),a.slice(0,c)+Fn+a.slice(c)+Te+d):a+Te+(c===-2?l:d)}return[Un(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Ot{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0;const l=e.length-1,a=this.parts,[u,h]=oa(e,r);if(this.el=Ot.createElement(u,o),Je.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Je.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(Fn)){const g=h[s++],d=n.getAttribute(c).split(Te),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:f[2],strings:d,ctor:f[1]==="."?ia:f[1]==="?"?sa:f[1]==="@"?aa:gr}),n.removeAttribute(c)}else c.startsWith(Te)&&(a.push({type:6,index:i}),n.removeAttribute(c));if(Hn.test(n.tagName)){const c=n.textContent.split(Te),g=c.length-1;if(g>0){n.textContent=Qt?Qt.emptyScript:"";for(let d=0;d<g;d++)n.append(c[d],Ct()),Je.nextNode(),a.push({type:2,index:++i});n.append(c[g],Ct())}}}else if(n.nodeType===8)if(n.data===jn)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(Te,c+1))!==-1;)a.push({type:7,index:i}),c+=Te.length-1}i++}}static createElement(e,r){const o=Ye.createElement("template");return o.innerHTML=e,o}}function at(t,e,r=t,o){if(e===st)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const i=At(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=at(t,n._$AS(t,e.values),n,o)),e}class na{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??Ye).importNode(r,!0);Je.currentNode=n;let i=Je.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new Bt(i,i.nextSibling,this,e):a.type===1?u=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(u=new la(i,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(i=Je.nextNode(),s++)}return Je.currentNode=Ye,n}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Bt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=at(this,e,r),At(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ra(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Ot.createElement(Un(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const i=new na(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=Ko.get(e.strings);return r===void 0&&Ko.set(e.strings,r=new Ot(e)),r}k(e){mo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const i of e)n===r.length?r.push(o=new Bt(this.O(Ct()),this.O(Ct()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class gr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,r=this,o,n){const i=this.strings;let s=!1;if(i===void 0)e=at(this,e,r,0),s=!At(e)||e!==this._$AH&&e!==st,s&&(this._$AH=e);else{const l=e;let a,u;for(e=i[0],a=0;a<i.length-1;a++)u=at(this,l[o+a],r,a),u===st&&(u=this._$AH[a]),s||=!At(u)||u!==this._$AH[a],u===G?e=G:e!==G&&(e+=(u??"")+i[a+1]),this._$AH[a]=u}s&&!n&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ia extends gr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class sa extends gr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class aa extends gr{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=at(this,e,r,0)??G)===st)return;const o=this._$AH,n=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==G&&(o===G||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class la{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){at(this,e)}}const ca=fo.litHtmlPolyfillSupport;ca?.(Ot,Bt),(fo.litHtmlVersions??=[]).push("3.2.1");const da=(t,e,r)=>{const o=r?.renderBefore??e;let n=o._$litPart$;if(n===void 0){const i=r?.renderBefore??null;o._$litPart$=n=new Bt(e.insertBefore(Ct(),i),i,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $t=class extends He{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=da(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};$t._$litElement$=!0,$t.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:$t});const ua=globalThis.litElementPolyfillSupport;ua?.({LitElement:$t});(globalThis.litElementVersions??=[]).push("4.1.1");class ha extends $t{#e=!1;get i18n(){return this.#e||(Ar.load(this.locale,this.translations),Ar.activate(this.locale),this.#e=!0),Ar}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const vo=()=>!(typeof window<"u");class Jn{isServer=!1;css=""}const pa=(t=[])=>{const e=new Jn;if(vo()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const n=new XMLHttpRequest;n.open("GET",o,!1),n.send(),e.css+=n.responseText}return e},ga=()=>pa(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),fa=async(t=[])=>{const e=new Jn;if(vo()){for(const i of t)e.css+=`@import url('${i}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(i=>fetch(i))),n=await Promise.all(o.map(i=>i.text()));for(const i of n)e.css+=i;return e},Go=async()=>fa(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,n=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(m){var w=m.replace(s,"");return w!==m&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),w.trim()}function a(m){return"isConnected"in m?m.isConnected:document.contains(m)}function u(m){return m.filter(function(w,T){return m.indexOf(w)===T})}function h(m,w){return m.filter(function(T){return w.indexOf(T)===-1})}function c(m){m.parentNode.removeChild(m)}function g(m){return m.shadowRoot||r.get(m)}var d=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,p=f.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function v(m){return typeof m=="object"?U.isPrototypeOf(m)||p.isPrototypeOf(m):!1}function E(m){return typeof m=="object"?p.isPrototypeOf(m):!1}var A=new WeakMap,C=new WeakMap,D=new WeakMap,$=new WeakMap;function O(m,w){var T=document.createElement("style");return D.get(m).set(w,T),C.get(m).push(w),T}function L(m,w){return D.get(m).get(w)}function M(m,w){D.get(m).delete(w),C.set(m,C.get(m).filter(function(T){return T!==w}))}function H(m,w){requestAnimationFrame(function(){w.textContent=A.get(m).textContent,$.get(m).forEach(function(T){return w.sheet[T.method].apply(w.sheet,T.args)})})}function J(m){if(!A.has(m))throw new TypeError("Illegal invocation")}function K(){var m=this,w=document.createElement("style");e.body.appendChild(w),A.set(m,w),C.set(m,[]),D.set(m,new WeakMap),$.set(m,[])}var U=K.prototype;U.replace=function(w){try{return this.replaceSync(w),Promise.resolve(this)}catch(T){return Promise.reject(T)}},U.replaceSync=function(w){if(J(this),typeof w=="string"){var T=this;A.get(T).textContent=l(w),$.set(T,[]),C.get(T).forEach(function(se){se.isConnected()&&H(T,L(T,se))})}},n(U,"cssRules",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.cssRules}}),n(U,"media",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.media}}),d.forEach(function(m){U[m]=function(){var w=this;J(w);var T=arguments;$.get(w).push({method:m,args:T}),C.get(w).forEach(function(le){if(le.isConnected()){var re=L(w,le).sheet;re[m].apply(re,T)}});var se=A.get(w).sheet;return se[m].apply(se,T)}}),n(K,Symbol.hasInstance,{configurable:!0,value:v});var ae={childList:!0,subtree:!0},B=new WeakMap;function ee(m){var w=B.get(m);return w||(w=new No(m),B.set(m,w)),w}function Q(m){n(m.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return ee(this).sheets},set:function(w){ee(this).update(w)}})}function ne(m,w){for(var T=document.createNodeIterator(m,NodeFilter.SHOW_ELEMENT,function(le){return g(le)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),se=void 0;se=T.nextNode();)w(g(se))}var te=new WeakMap,ie=new WeakMap,Ge=new WeakMap;function is(m,w){return w instanceof HTMLStyleElement&&ie.get(m).some(function(T){return L(T,m)})}function Lo(m){var w=te.get(m);return w instanceof Document?w.body:w}function _r(m){var w=document.createDocumentFragment(),T=ie.get(m),se=Ge.get(m),le=Lo(m);se.disconnect(),T.forEach(function(re){w.appendChild(L(re,m)||O(re,m))}),le.insertBefore(w,null),se.observe(le,ae),T.forEach(function(re){H(re,L(re,m))})}function No(m){var w=this;w.sheets=[],te.set(w,m),ie.set(w,[]),Ge.set(w,new MutationObserver(function(T,se){if(!document){se.disconnect();return}T.forEach(function(le){t||i.call(le.addedNodes,function(re){re instanceof Element&&ne(re,function(et){ee(et).connect()})}),i.call(le.removedNodes,function(re){re instanceof Element&&(is(w,re)&&_r(w),t||ne(re,function(et){ee(et).disconnect()}))})})}))}if(No.prototype={isConnected:function(){var m=te.get(this);return m instanceof Document?m.readyState!=="loading":a(m.host)},connect:function(){var m=Lo(this);Ge.get(this).observe(m,ae),ie.get(this).length>0&&_r(this),ne(m,function(w){ee(w).connect()})},disconnect:function(){Ge.get(this).disconnect()},update:function(m){var w=this,T=te.get(w)===document?"Document":"ShadowRoot";if(!Array.isArray(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!m.every(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(m.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");w.sheets=m;var se=ie.get(w),le=u(m),re=h(se,le);re.forEach(function(et){c(L(et,w)),M(et,w)}),ie.set(w,le),w.isConnected()&&le.length>0&&_r(w)}},window.CSSStyleSheet=K,Q(Document),"ShadowRoot"in window){Q(ShadowRoot);var To=Element.prototype,ss=To.attachShadow;To.attachShadow=function(w){var T=ss.call(this,w);return w.mode==="closed"&&r.set(this,T),T}}var Ft=ee(document);Ft.isConnected()?Ft.connect():document.addEventListener("DOMContentLoaded",Ft.connect.bind(Ft))})();let yt;if(vo()){const t=await Go();yt=wn(t.css)}else{yt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await Go();yt.replaceSync(r.css)}catch{const e=ga();yt.replaceSync(e.css)}}class j extends ha{static styles=[yt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=t=>t??z;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=Symbol.for(""),ma=t=>{if(t?.r===Wn)return t?._$litStatic$},he=t=>({_$litStatic$:t,r:Wn}),en=new Map,va=t=>(e,...r)=>{const o=r.length;let n,i;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(i=r[u],(n=ma(i))!==void 0);)a+=n+e[++u],h=!0;u!==o&&l.push(i),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=en.get(c))===void 0&&(s.raw=s,en.set(c,e=s)),r=l}return t(e,...r)},pe=va(b),Be=t=>typeof t=="string",ba=t=>typeof t=="function",tn=new Map,Vn="en";function bo(t){return[...Array.isArray(t)?t:[t],Vn]}function wo(t,e,r){const o=bo(t);r||(r="default");let n;if(typeof r=="string")switch(n={day:"numeric",month:"short",year:"numeric"},r){case"full":n.weekday="long";case"long":n.month="long";break;case"short":n.month="numeric";break}else n=r;return Xt(()=>Zt("date",o,r),()=>new Intl.DateTimeFormat(o,n)).format(Be(e)?new Date(e):e)}function wa(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return wo(t,e,o)}function Xr(t,e,r){const o=bo(t);return Xt(()=>Zt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function rn(t,e,r,{offset:o=0,...n}){const i=bo(t),s=e?Xt(()=>Zt("plural-ordinal",i),()=>new Intl.PluralRules(i,{type:"ordinal"})):Xt(()=>Zt("plural-cardinal",i),()=>new Intl.PluralRules(i,{type:"cardinal"}));return n[r]??n[s.select(r-o)]??n.other}function Xt(t,e){const r=t();let o=tn.get(r);return o||(o=e(),tn.set(r,o)),o}function Zt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const qn=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Yn="%__lingui_octothorpe__%",ya=(t,e,r={})=>{const o=e||t,n=s=>typeof s=="object"?s:r[s],i=(s,l)=>{const a=Object.keys(r).length?n("number"):void 0,u=Xr(o,s,a);return l.replace(new RegExp(Yn,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=rn(o,!1,s,l);return i(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=rn(o,!0,s,l);return i(s-a,u)},select:xa,number:(s,l)=>Xr(o,s,n(l)||{style:l}),date:(s,l)=>wo(o,s,n(l)||l),time:(s,l)=>wa(o,s,n(l)||l)}},xa=(t,e)=>e[t]??e.other;function $a(t,e,r){return(o={},n)=>{const i=ya(e,r,n),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Yn;if(Be(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let v;if(d){const E=i[d];v=E(o[g],p)}else v=o[g];return v==null?h:h+v},""):a,l=s(t);return Be(l)&&qn.test(l)?po.unraw(l):Be(l)?l:l?String(l):""}}var ka=Object.defineProperty,_a=(t,e,r)=>e in t?ka(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Sa=(t,e,r)=>(_a(t,e+"",r),r);class Ea{constructor(){Sa(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const n=o.indexOf(r);~n&&o.splice(n,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(n=>n.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ca=Object.defineProperty,Aa=(t,e,r)=>e in t?Ca(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Fe=(t,e,r)=>(Aa(t,typeof e!="symbol"?e+"":e,r),r);class Oa extends Ea{constructor(e){super(),Fe(this,"_locale",""),Fe(this,"_locales"),Fe(this,"_localeData",{}),Fe(this,"_messages",{}),Fe(this,"_missing"),Fe(this,"_messageCompiler"),Fe(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Vn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,n])=>this._load(o,n)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let n=o?.message;e||(e=""),Be(e)||(r=e.values||r,n=e.message,e=e.id);const i=this.messages[e],s=i===void 0,l=this._missing;if(l&&s)return ba(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=i||n||e;return Be(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Be(a)&&qn.test(a)?JSON.parse(`"${a}"`):Be(a)?a:$a(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return wo(this._locales||this._locale,e,r)}number(e,r){return Xr(this._locales||this._locale,e,r)}}function La(t={}){return new Oa(t)}const y=La();var Na={},Ta=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),Pa=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),Ba=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),Da=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),Ma=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Qn=["en","nb","fi","da","sv"],Xn="en",Ra=()=>{var t;let e;switch((t=process==null?void 0:Na)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Zn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xn},Lr=t=>Qn.find(e=>t===e||t.toLowerCase().includes(e))||Zn();function za(){var t;if(typeof window>"u"){const e=Ra();return Lr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Zn();return Qn.includes(e)?Lr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Lr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xn}}var Ia=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Fa=(t,e,r,o,n)=>{const i=za(),s=Ia(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Fa(Pa,Ta,Ba,Da,Ma);var ja=class extends I{render(){const t=y.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",ja);var Ha={},Ua=JSON.parse('{"icon.title.close":["Kryss"]}'),Ja=JSON.parse('{"icon.title.close":["Cross"]}'),Wa=JSON.parse('{"icon.title.close":["Rasti"]}'),Va=JSON.parse('{"icon.title.close":["Kryds"]}'),qa=JSON.parse('{"icon.title.close":["Kryss"]}'),Kn=["en","nb","fi","da","sv"],Gn="en",Ya=()=>{var t;let e;switch((t=process==null?void 0:Ha)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ei=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Gn},Nr=t=>Kn.find(e=>t===e||t.toLowerCase().includes(e))||ei();function Qa(){var t;if(typeof window>"u"){const e=Ya();return Nr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ei();return Kn.includes(e)?Nr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Nr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Gn}}var Xa=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Za=(t,e,r,o,n)=>{const i=Qa(),s=Xa(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Za(Ja,Ua,Wa,Va,qa);var Ka=class extends I{render(){const t=y.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Ka);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ga=co(class extends uo{constructor(t){if(super(t),t.type!==lo.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const n=!!e[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Ce}}),el=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Dt(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:el(e.toString())})),super.createProperty(e,o)}}}function tl(){return`m${Math.random().toString(36).slice(2)}`}class rl extends Dt(j){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[j.styles];get _classBase(){return this.slot==="suffix"?js:Hs}get _classes(){return F([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return b`
      <button aria-label="${q(this.ariaLabel)}" class="${this._classes}" type="submit">
        <w-icon-search-16></w-icon-search-16>
      </button>
    `}get _clearButton(){return b`
      <button aria-label="${q(this.ariaLabel)}" class="${this._classes}" type="reset">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}get _text(){return b`
      <div class="${this._classes}">
        <span class="${this._classBase.label}">${this.label}</span>
      </div>
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return b`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",rl);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ol={attribute:!0,type:String,converter:Wt,reflect:!1,hasChanged:oo},nl=(t=ol,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function x(t){return(e,r)=>typeof r=="object"?nl(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function il(t){return x({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sl=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fr(t,e){return(r,o,n)=>{const i=s=>s.renderRoot?.querySelector(t)??null;return sl(r,o,{get(){return i(this)}})}}var al={},ll=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),cl=JSON.parse('{"icon.title.info":["Information circle"]}'),dl=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),ul=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),hl=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),ti=["en","nb","fi","da","sv"],ri="en",pl=()=>{var t;let e;switch((t=process==null?void 0:al)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},oi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ri},Tr=t=>ti.find(e=>t===e||t.toLowerCase().includes(e))||oi();function gl(){var t;if(typeof window>"u"){const e=pl();return Tr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=oi();return ti.includes(e)?Tr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Tr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ri}}var fl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ml=(t,e,r,o,n)=>{const i=gl(),s=fl(i,t,e,r,o,n);y.load(i,s),y.activate(i)};ml(cl,ll,dl,ul,hl);var vl=class extends I{render(){const t=y.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",vl);var bl={},wl=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),yl=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),xl=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),$l=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),kl=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),ni=["en","nb","fi","da","sv"],ii="en",_l=()=>{var t;let e;switch((t=process==null?void 0:bl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},si=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ii},Pr=t=>ni.find(e=>t===e||t.toLowerCase().includes(e))||si();function Sl(){var t;if(typeof window>"u"){const e=_l();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=si();return ni.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ii}}var El=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Cl=(t,e,r,o,n)=>{const i=Sl(),s=El(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Cl(yl,wl,xl,$l,kl);var Al=class extends I{render(){const t=y.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",Al);var Ol={},Ll=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),Nl=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),Tl=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),Pl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),Bl=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),ai=["en","nb","fi","da","sv"],li="en",Dl=()=>{var t;let e;switch((t=process==null?void 0:Ol)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ci=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":li},Br=t=>ai.find(e=>t===e||t.toLowerCase().includes(e))||ci();function Ml(){var t;if(typeof window>"u"){const e=Dl();return Br(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ci();return ai.includes(e)?Br(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Br(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),li}}var Rl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,zl=(t,e,r,o,n)=>{const i=Ml(),s=Rl(i,t,e,r,o,n);y.load(i,s),y.activate(i)};zl(Nl,Ll,Tl,Pl,Bl);var Il=class extends I{render(){const t=y.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",Il);var Fl={},jl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),Hl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),Ul=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),Jl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),Wl=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),di=["en","nb","fi","da","sv"],ui="en",Vl=()=>{var t;let e;switch((t=process==null?void 0:Fl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},hi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ui},Dr=t=>di.find(e=>t===e||t.toLowerCase().includes(e))||hi();function ql(){var t;if(typeof window>"u"){const e=Vl();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=hi();return di.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ui}}var Yl=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Ql=(t,e,r,o,n)=>{const i=ql(),s=Yl(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Ql(Hl,jl,Ul,Jl,Wl);var Xl=class extends I{render(){const t=y.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",Xl);const ye=V`
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
`,Zl=V`*, :before, :after {
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
        `,Kl=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Gl=Object.defineProperty,yo=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Gl(e,r,n),n};const vt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},bt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class mr extends I{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!bt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return F([vt.wrapper,vt[this.variant]])}get _iconClasses(){const e=vt[`${this.variant}Icon`];return F([vt.icon,e])}static{this.styles=[ye,Kl,V`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===bt.info?b` <w-icon-info-16></w-icon-info-16>`:this.variant===bt.warning?b` <w-icon-warning-16></w-icon-warning-16>`:this.variant===bt.negative?b` <w-icon-error-16></w-icon-error-16>`:this.variant===bt.positive?b` <w-icon-success-16></w-icon-success-16>`:""}render(){return b`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${vt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}yo([x({reflect:!0})],mr.prototype,"variant");yo([x({type:Boolean,reflect:!0})],mr.prototype,"show");yo([x({reflect:!0})],mr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",mr);const ec=["top","right","bottom","left"],Qe=Math.min,fe=Math.max,Kt=Math.round,ke=t=>({x:t,y:t}),tc={left:"right",right:"left",bottom:"top",top:"bottom"},rc={start:"end",end:"start"};function Zr(t,e,r){return fe(t,Qe(e,r))}function Ze(t,e){return typeof t=="function"?t(e):t}function De(t){return t.split("-")[0]}function ct(t){return t.split("-")[1]}function pi(t){return t==="x"?"y":"x"}function xo(t){return t==="y"?"height":"width"}function Xe(t){return["top","bottom"].includes(De(t))?"y":"x"}function $o(t){return pi(Xe(t))}function oc(t,e,r){r===void 0&&(r=!1);const o=ct(t),n=$o(t),i=xo(n);let s=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Gt(s)),[s,Gt(s)]}function nc(t){const e=Gt(t);return[Kr(t),e,Kr(e)]}function Kr(t){return t.replace(/start|end/g,e=>rc[e])}function ic(t,e,r){const o=["left","right"],n=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?n:o:e?o:n;case"left":case"right":return e?i:s;default:return[]}}function sc(t,e,r,o){const n=ct(t);let i=ic(De(t),r==="start",o);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(Kr)))),i}function Gt(t){return t.replace(/left|right|bottom|top/g,e=>tc[e])}function ac(t){return{top:0,right:0,bottom:0,left:0,...t}}function gi(t){return typeof t!="number"?ac(t):{top:t,right:t,bottom:t,left:t}}function er(t){const{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function on(t,e,r){let{reference:o,floating:n}=t;const i=Xe(e),s=$o(e),l=xo(s),a=De(e),u=i==="y",h=o.x+o.width/2-n.width/2,c=o.y+o.height/2-n.height/2,g=o[l]/2-n[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-n.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-n.width,y:c};break;default:d={x:o.x,y:o.y}}switch(ct(e)){case"start":d[s]-=g*(r&&u?-1:1);break;case"end":d[s]+=g*(r&&u?-1:1);break}return d}const lc=async(t,e,r)=>{const{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:s}=r,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:c}=on(u,o,a),g=o,d={},f=0;for(let p=0;p<l.length;p++){const{name:v,fn:E}=l[p],{x:A,y:C,data:D,reset:$}=await E({x:h,y:c,initialPlacement:o,placement:g,strategy:n,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=A??h,c=C??c,d={...d,[v]:{...d[v],...D}},$&&f<=50&&(f++,typeof $=="object"&&($.placement&&(g=$.placement),$.rects&&(u=$.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):$.rects),{x:h,y:c}=on(u,g,a)),p=-1)}return{x:h,y:c,placement:g,strategy:n,middlewareData:d}};async function Lt(t,e){var r;e===void 0&&(e={});const{x:o,y:n,platform:i,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:d=0}=Ze(e,t),f=gi(d),v=l[g?c==="floating"?"reference":"floating":c],E=er(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(v)))==null||r?v:v.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),D=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},$=er(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(E.top-$.top+f.top)/D.y,bottom:($.bottom-E.bottom+f.bottom)/D.y,left:(E.left-$.left+f.left)/D.x,right:($.right-E.right+f.right)/D.x}}const cc=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:n,rects:i,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ze(t,e)||{};if(u==null)return{};const c=gi(h),g={x:r,y:o},d=$o(n),f=xo(d),p=await s.getDimensions(u),v=d==="y",E=v?"top":"left",A=v?"bottom":"right",C=v?"clientHeight":"clientWidth",D=i.reference[f]+i.reference[d]-g[d]-i.floating[f],$=g[d]-i.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=O?O[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(O)))&&(L=l.floating[C]||i.floating[f]);const M=D/2-$/2,H=L/2-p[f]/2-1,J=Qe(c[E],H),K=Qe(c[A],H),U=J,ae=L-p[f]-K,B=L/2-p[f]/2+M,ee=Zr(U,B,ae),Q=!a.arrow&&ct(n)!=null&&B!==ee&&i.reference[f]/2-(B<U?J:K)-p[f]/2<0,ne=Q?B<U?B-U:B-ae:0;return{[d]:g[d]+ne,data:{[d]:ee,centerOffset:B-ee-ne,...Q&&{alignmentOffset:ne}},reset:Q}}}),dc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:n,middlewareData:i,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...v}=Ze(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};const E=De(n),A=Xe(l),C=De(l)===l,D=await(a.isRTL==null?void 0:a.isRTL(u.floating)),$=g||(C||!p?[Gt(l)]:nc(l)),O=f!=="none";!g&&O&&$.push(...sc(l,p,f,D));const L=[l,...$],M=await Lt(e,v),H=[];let J=((o=i.flip)==null?void 0:o.overflows)||[];if(h&&H.push(M[E]),c){const B=oc(n,s,D);H.push(M[B[0]],M[B[1]])}if(J=[...J,{placement:n,overflows:H}],!H.every(B=>B<=0)){var K,U;const B=(((K=i.flip)==null?void 0:K.index)||0)+1,ee=L[B];if(ee)return{data:{index:B,overflows:J},reset:{placement:ee}};let Q=(U=J.filter(ne=>ne.overflows[0]<=0).sort((ne,te)=>ne.overflows[1]-te.overflows[1])[0])==null?void 0:U.placement;if(!Q)switch(d){case"bestFit":{var ae;const ne=(ae=J.filter(te=>{if(O){const ie=Xe(te.placement);return ie===A||ie==="y"}return!0}).map(te=>[te.placement,te.overflows.filter(ie=>ie>0).reduce((ie,Ge)=>ie+Ge,0)]).sort((te,ie)=>te[1]-ie[1])[0])==null?void 0:ae[0];ne&&(Q=ne);break}case"initialPlacement":Q=l;break}if(n!==Q)return{reset:{placement:Q}}}return{}}}};function nn(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function sn(t){return ec.some(e=>t[e]>=0)}const uc=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...n}=Ze(t,e);switch(o){case"referenceHidden":{const i=await Lt(e,{...n,elementContext:"reference"}),s=nn(i,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:sn(s)}}}case"escaped":{const i=await Lt(e,{...n,altBoundary:!0}),s=nn(i,r.floating);return{data:{escapedOffsets:s,escaped:sn(s)}}}default:return{}}}}};async function hc(t,e){const{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=De(r),l=ct(r),a=Xe(r)==="y",u=["left","top"].includes(s)?-1:1,h=i&&a?-1:1,c=Ze(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(d=l==="end"?f*-1:f),a?{x:d*h,y:g*u}:{x:g*u,y:d*h}}const pc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:n,y:i,placement:s,middlewareData:l}=e,a=await hc(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:n+a.x,y:i+a.y,data:{...a,placement:s}}}}},gc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:n}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:E,y:A}=v;return{x:E,y:A}}},...a}=Ze(t,e),u={x:r,y:o},h=await Lt(e,a),c=Xe(De(n)),g=pi(c);let d=u[g],f=u[c];if(i){const v=g==="y"?"top":"left",E=g==="y"?"bottom":"right",A=d+h[v],C=d-h[E];d=Zr(A,d,C)}if(s){const v=c==="y"?"top":"left",E=c==="y"?"bottom":"right",A=f+h[v],C=f-h[E];f=Zr(A,f,C)}const p=l.fn({...e,[g]:d,[c]:f});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[g]:i,[c]:s}}}}}},fc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:n,rects:i,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ze(t,e),h=await Lt(e,u),c=De(n),g=ct(n),d=Xe(n)==="y",{width:f,height:p}=i.floating;let v,E;c==="top"||c==="bottom"?(v=c,E=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(E=c,v=g==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=f-h.left-h.right,D=Qe(p-h[v],A),$=Qe(f-h[E],C),O=!e.middlewareData.shift;let L=D,M=$;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!g){const J=fe(h.left,0),K=fe(h.right,0),U=fe(h.top,0),ae=fe(h.bottom,0);d?M=f-2*(J!==0||K!==0?J+K:fe(h.left,h.right)):L=p-2*(U!==0||ae!==0?U+ae:fe(h.top,h.bottom))}await a({...e,availableWidth:M,availableHeight:L});const H=await s.getDimensions(l.floating);return f!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function vr(){return typeof window<"u"}function dt(t){return fi(t)?(t.nodeName||"").toLowerCase():"#document"}function ue(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ae(t){var e;return(e=(fi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fi(t){return vr()?t instanceof Node||t instanceof ue(t).Node:!1}function be(t){return vr()?t instanceof Element||t instanceof ue(t).Element:!1}function _e(t){return vr()?t instanceof HTMLElement||t instanceof ue(t).HTMLElement:!1}function an(t){return!vr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ue(t).ShadowRoot}function Mt(t){const{overflow:e,overflowX:r,overflowY:o,display:n}=we(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(n)}function mc(t){return["table","td","th"].includes(dt(t))}function br(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function ko(t){const e=_o(),r=be(t)?we(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function vc(t){let e=Me(t);for(;_e(e)&&!lt(e);){if(ko(e))return e;if(br(e))return null;e=Me(e)}return null}function _o(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(dt(t))}function we(t){return ue(t).getComputedStyle(t)}function wr(t){return be(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Me(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||an(t)&&t.host||Ae(t);return an(e)?e.host:e}function mi(t){const e=Me(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:_e(e)&&Mt(e)?e:mi(e)}function Gr(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=mi(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=ue(n);if(i){const l=eo(s);return e.concat(s,s.visualViewport||[],Mt(n)?n:[],l&&r?Gr(l):[])}return e.concat(n,Gr(n,[],r))}function eo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vi(t){const e=we(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=_e(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,l=Kt(r)!==i||Kt(o)!==s;return l&&(r=i,o=s),{width:r,height:o,$:l}}function bi(t){return be(t)?t:t.contextElement}function it(t){const e=bi(t);if(!_e(e))return ke(1);const r=e.getBoundingClientRect(),{width:o,height:n,$:i}=vi(e);let s=(i?Kt(r.width):r.width)/o,l=(i?Kt(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const bc=ke(0);function wi(t){const e=ue(t);return!_o()||!e.visualViewport?bc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function wc(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ue(t)?!1:e}function Nt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),i=bi(t);let s=ke(1);e&&(o?be(o)&&(s=it(o)):s=it(t));const l=wc(i,r,o)?wi(i):ke(0);let a=(n.left+l.x)/s.x,u=(n.top+l.y)/s.y,h=n.width/s.x,c=n.height/s.y;if(i){const g=ue(i),d=o&&be(o)?ue(o):o;let f=g,p=eo(f);for(;p&&o&&d!==f;){const v=it(p),E=p.getBoundingClientRect(),A=we(p),C=E.left+(p.clientLeft+parseFloat(A.paddingLeft))*v.x,D=E.top+(p.clientTop+parseFloat(A.paddingTop))*v.y;a*=v.x,u*=v.y,h*=v.x,c*=v.y,a+=C,u+=D,f=ue(p),p=eo(f)}}return er({width:h,height:c,x:a,y:u})}function So(t,e){const r=wr(t).scrollLeft;return e?e.left+r:Nt(Ae(t)).left+r}function yi(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(r?0:So(t,o)),i=o.top+e.scrollTop;return{x:n,y:i}}function yc(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t;const i=n==="fixed",s=Ae(o),l=e?br(e.floating):!1;if(o===s||l&&i)return r;let a={scrollLeft:0,scrollTop:0},u=ke(1);const h=ke(0),c=_e(o);if((c||!c&&!i)&&((dt(o)!=="body"||Mt(s))&&(a=wr(o)),_e(o))){const d=Nt(o);u=it(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!c&&!i?yi(s,a,!0):ke(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+g.x,y:r.y*u.y-a.scrollTop*u.y+h.y+g.y}}function xc(t){return Array.from(t.getClientRects())}function $c(t){const e=Ae(t),r=wr(t),o=t.ownerDocument.body,n=fe(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=fe(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+So(t);const l=-r.scrollTop;return we(o).direction==="rtl"&&(s+=fe(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:s,y:l}}function kc(t,e){const r=ue(t),o=Ae(t),n=r.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,a=0;if(n){i=n.width,s=n.height;const u=_o();(!u||u&&e==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:i,height:s,x:l,y:a}}function _c(t,e){const r=Nt(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=_e(t)?it(t):ke(1),s=t.clientWidth*i.x,l=t.clientHeight*i.y,a=n*i.x,u=o*i.y;return{width:s,height:l,x:a,y:u}}function ln(t,e,r){let o;if(e==="viewport")o=kc(t,r);else if(e==="document")o=$c(Ae(t));else if(be(e))o=_c(e,r);else{const n=wi(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return er(o)}function xi(t,e){const r=Me(t);return r===e||!be(r)||lt(r)?!1:we(r).position==="fixed"||xi(r,e)}function Sc(t,e){const r=e.get(t);if(r)return r;let o=Gr(t,[],!1).filter(l=>be(l)&&dt(l)!=="body"),n=null;const i=we(t).position==="fixed";let s=i?Me(t):t;for(;be(s)&&!lt(s);){const l=we(s),a=ko(s);!a&&l.position==="fixed"&&(n=null),(i?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Mt(s)&&!a&&xi(t,s))?o=o.filter(h=>h!==s):n=l,s=Me(s)}return e.set(t,o),o}function Ec(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t;const s=[...r==="clippingAncestors"?br(e)?[]:Sc(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=ln(e,h,n);return u.top=fe(c.top,u.top),u.right=Qe(c.right,u.right),u.bottom=Qe(c.bottom,u.bottom),u.left=fe(c.left,u.left),u},ln(e,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Cc(t){const{width:e,height:r}=vi(t);return{width:e,height:r}}function Ac(t,e,r){const o=_e(e),n=Ae(e),i=r==="fixed",s=Nt(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=ke(0);if(o||!o&&!i)if((dt(e)!=="body"||Mt(n))&&(l=wr(e)),o){const g=Nt(e,!0,i,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else n&&(a.x=So(n));const u=n&&!o&&!i?yi(n,l):ke(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function Mr(t){return we(t).position==="static"}function cn(t,e){if(!_e(t)||we(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Ae(t)===r&&(r=r.ownerDocument.body),r}function $i(t,e){const r=ue(t);if(br(t))return r;if(!_e(t)){let n=Me(t);for(;n&&!lt(n);){if(be(n)&&!Mr(n))return n;n=Me(n)}return r}let o=cn(t,e);for(;o&&mc(o)&&Mr(o);)o=cn(o,e);return o&&lt(o)&&Mr(o)&&!ko(o)?r:o||vc(t)||r}const Oc=async function(t){const e=this.getOffsetParent||$i,r=this.getDimensions,o=await r(t.floating);return{reference:Ac(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Lc(t){return we(t).direction==="rtl"}const Nc={convertOffsetParentRelativeRectToViewportRelativeRect:yc,getDocumentElement:Ae,getClippingRect:Ec,getOffsetParent:$i,getElementRects:Oc,getClientRects:xc,getDimensions:Cc,getScale:it,isElement:be,isRTL:Lc},Tc=pc,Pc=gc,Bc=dc,Dc=fc,Mc=uc,Rc=cc,zc=(t,e,r)=>{const o=new Map,n={platform:Nc,...r},i={...n.platform,_c:o};return lc(t,e,{...n,platform:i})},tr="top-start",rr="top",or="top-end",nr="right-start",ir="right",sr="right-end",ar="bottom-start",Tt="bottom",lr="bottom-end",cr="left-start",dr="left",ur="left-end",dn=[tr,rr,or,nr,ir,sr,ar,Tt,lr,cr,dr,ur],nt={[tr]:ar,[rr]:Tt,[or]:lr,[ar]:tr,[Tt]:rr,[lr]:or,[cr]:nr,[dr]:ir,[ur]:sr,[nr]:cr,[ir]:dr,[sr]:ur},Ic={[cr]:-45,[dr]:-45,[ur]:-45,[tr]:45,[rr]:45,[or]:45,[nr]:135,[ir]:135,[sr]:135,[ar]:-135,[Tt]:-135,[lr]:-135},ki=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},Fc=t=>t.split("-")[0],jc=t=>nt[Fc(t)],_i=t=>nt[t],Hc=t=>Ic[_i(t)],Uc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${ki(jc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},un=8,jt=24;async function hn(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return zc(e,r,{placement:t?.directionName??Tt,middleware:[Tc({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Bc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Pc({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Rc({element:t?.arrowEl}),Mc(),Dc({apply(){Object.assign(r.style,{paddingRight:`${un}px`,paddingLeft:`${un}px`})}})]}).then(({x:o,y:n,middlewareData:i,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${n}px`}),i?.hide&&!t?.isCallout){const{referenceHidden:l}=i.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(i?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=i.arrow,h=window.getComputedStyle(r).direction==="rtl",c=_i(s).split("-")[1];let g="",d="",f="",p="";if(c==="start"){const v=typeof a=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"";g=typeof u=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"",d=h?v:"",p=h?"":v}else if(c==="end"){const v=typeof a=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:"";d=h?"":v,p=h?v:"",f=typeof u=="number"?`calc(${jt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",g=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:g,right:d,bottom:f,left:p}),Uc(l,Hc(s),s)}}),t}var Jc={};const Wc=["en","nb","fi","da","sv"],Si="en",pn=t=>Wc.find(e=>t===e||t.toLowerCase().includes(e))||Si;function Vc(){if(typeof window>"u"){const t=Jc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return pn(t)}try{const t=document.documentElement.lang;return pn(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Si}}const qc=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Oe=(t,e,r,o,n)=>{const i=Vc(),s=qc(i,t,e,r,o,n);y.load(i,s),y.activate(i)},Yc=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),Qc=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),Xc=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Zc=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Kc=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class Gc extends Dt(j){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[j.styles,V`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Oe(Qc,Zc,Xc,Yc,Kc),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(nt).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(nt))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>dn.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(dn)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?hn(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return nt[this._actualDirection]}get _arrowClasses(){return F([tt.arrowBase,this._activeVariantClasses.arrow,tt[`arrowDirection${ki(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":b`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:tt[r],arrow:tt[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return F([tt.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return y._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return b`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${tt.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},hn(this.attentionState)}pointingAtDirection(){switch(nt[this._actualDirection]){case"top-start":case"top":case"top-end":return y._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return y._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return y._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return y._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return y._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return y._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return y._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return y._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=tl());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?b``:b`
      <div class=${q(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?b`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:z}
              </div>
            `:b`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:z}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",Gc);class ed extends j{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[j.styles];constructor(){super(),this.variant="neutral"}get _class(){return F([ze.base,ze[this.variant],!!this.position&&ze.positionBase,this.position==="top-left"&&ze.positionTL,this.position==="top-right"&&ze.positionTR,this.position==="bottom-right"&&ze.positionBR,this.position==="bottom-left"&&ze.positionBL])}render(){return b`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",ed);class td extends j{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[j.styles,V`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return F([gt.base,this.bleed&&gt.bleed,this.info&&gt.info,this.neutral&&gt.neutral,this.bordered&&gt.bordered])}get _optOutRoleWithDefault(){return this.role===""?z:this.role??"region"}render(){return b`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",td);function rd(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const od=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`,nd=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),id=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),sd=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),ad=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),ld=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}');var cd=Object.defineProperty,dd=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&cd(e,r,n),n};const ot={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},ud=b`<span class=${ot.separator}>/</span>`;class Ei extends I{static{this.styles=[ye,od]}constructor(){super(),Oe(id,ad,sd,nd,ld),this.ariaLabel=y._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,n)=>{if(typeof o=="string"){const i=n===this.children.length-1;return b`<span class=${ot.text} aria-current=${i?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?ot.link:ot.text),o});this._children=rd(r,ud)}render(){return b`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ot.a11y}>${this.ariaLabel}</h2>
        <div class=${ot.wrapper}>${this._children}</div>
      </nav>
    `}}dd([x({attribute:"aria-label",type:String})],Ei.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Ei);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},X=function(t,e,r,o,n){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!n:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?n.call(t,r):n?n.value=r:e.set(t,r),r};function Eo(t){var e,r,o,n,i,s,l,a,u,h,c,g,d,f,p,v,E,A;class C extends t{constructor(...$){var O,L,M;super(...$),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),n.set(this,!1),i.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{X(this,n,!0,"f"),X(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{X(this,r,!1,"f"),R(this,e,"m",v).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,n,"f")&&X(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),X(this,l,!1,"f")),X(this,n,!0,"f"),X(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),d.set(this,!1),f.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,h,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const $=this.validators.map(M=>M.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...$])]}static getValidator($){return this.validators.find(O=>O.attribute===$)||null}static getValidators($){return this.validators.filter(O=>{var L;if(O.attribute===$||!((L=O.attribute)===null||L===void 0)&&L.includes($))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback($,O,L){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,$,O,L);const J=this.constructor.getValidators($);J?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue($){var O;X(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),X(this,a,$,"f");const M=this.shouldFormValueUpdate()?$:null;this.internals.setFormValue(M),R(this,e,"m",v).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise($=>$(R(this,f,"f")))}formResetCallback(){var $,O;X(this,n,!1,"f"),X(this,o,!1,"f"),R(this,e,"m",p).call(this),($=this.resetFormControl)===null||$===void 0||$.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,n=new WeakMap,i=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,d=new WeakMap,f=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const $=R(this,o,"f")||R(this,n,"f")&&!this.validity.valid&&!R(this,r,"f");return $&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),$},v=function($){const O=this.constructor,L={},M=O.validators,H=[],J=M.some(B=>B.isValid instanceof Promise);R(this,d,"f")||(X(this,f,new Promise(B=>{X(this,g,B,"f")}),"f"),X(this,d,!0,"f")),R(this,i,"f")&&(R(this,i,"f").abort(),X(this,s,R(this,i,"f"),"f"));const K=new AbortController;X(this,i,K,"f");let U,ae=!1;M.length&&(M.forEach(B=>{const ee=B.key||"customError",Q=B.isValid(this,$,K.signal);Q instanceof Promise?(H.push(Q),Q.then(te=>{te!=null&&(L[ee]=!te,U=R(this,e,"m",A).call(this,B,$),R(this,e,"m",E).call(this,L,U))})):(L[ee]=!Q,this.validity[ee]!==!Q&&(ae=!0),!Q&&!U&&(U=R(this,e,"m",A).call(this,B,$)))}),Promise.allSettled(H).then(()=>{var B;K?.signal.aborted||(X(this,d,!1,"f"),(B=R(this,g,"f"))===null||B===void 0||B.call(this))}),(ae||!J)&&R(this,e,"m",E).call(this,L,U))},E=function($,O){if(this.validationTarget)this.internals.setValidity($,O,this.validationTarget),X(this,l,!1,"f");else{if(this.internals.setValidity($,O),this.internals.validity.valid)return;X(this,l,!0,"f")}},A=function($,O){if(this.validityCallback){const L=this.validityCallback($.key||"customError");if(L)return L}return $.message instanceof Function?$.message(this,O):$.message},C}const hd=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),pd=JSON.parse('{"button.aria.loading":["Loading..."]}'),gd=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),fd=JSON.parse('{"button.aria.loading":["Laster..."]}'),md=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),vd=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var bd=Object.defineProperty,ge=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&bd(e,r,n),n};const gn=["primary","secondary","negative","utility","pill","link"],Pe="font-bold focusable justify-center transition-colors ease-in-out",W={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},P={primary:`border-0 rounded-8 ${Pe}`,secondary:`border-2 rounded-8 ${Pe}`,utility:`border rounded-4 ${Pe}`,negative:`border-0 rounded-8 ${Pe}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Pe}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${W.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},k={inProgress:`border-transparent animate-inprogress pointer-events-none ${W.loading}`,quiet:`border-0 rounded-8 ${Pe}`,utilityQuiet:`border-0 rounded-4 ${Pe}`,negativeQuiet:`border-0 rounded-8 ${Pe}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${W.disabled}`},N={secondary:`${_.medium} ${S.medium} ${P.secondary} ${W.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${P.secondary} ${W.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${P.secondary} ${k.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${P.secondary} ${W.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${P.secondary} ${k.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${k.quiet} ${W.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${k.quiet} ${k.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${k.quiet} ${W.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${P.secondary} ${k.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${P.secondary} ${k.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${k.quiet} ${k.inProgress}`,primary:`${_.large} ${S.medium} ${P.primary} ${W.primary}`,primaryDisabled:`${_.large} ${S.medium} ${k.isDisabled} ${P.primary}`,primarySmall:`${_.small} ${S.xsmall} ${P.primary} ${W.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${k.isDisabled} ${P.primary} `,primaryQuiet:`${_.large} ${S.medium} ${k.quiet} ${W.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${k.quiet} ${k.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${k.quiet} ${W.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${k.quiet} ${k.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${k.inProgress} ${P.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${k.inProgress} ${P.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${k.quiet} ${k.inProgress} ${P.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${k.quiet} ${k.inProgress}`,utility:`${_.utility} ${S.medium} ${P.utility} ${W.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${P.utility} ${k.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${k.utilityQuiet} ${W.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${k.utilityQuiet} ${k.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${P.utility} ${W.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${W.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${k.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${P.utility} ${k.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${k.inProgress} ${k.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${k.inProgress} ${k.utilityQuiet}`,negative:`${_.large} ${S.medium} ${P.negative} ${W.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${P.negative} ${k.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${k.negativeQuiet}${k.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${P.negative} ${W.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${P.negative} ${k.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${P.negative} ${k.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${k.inProgress} ${P.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${k.negativeQuiet} ${P.negative} ${k.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.inProgress}`,pill:`${_.pill} ${S.medium} ${P.pill} ${W.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${P.pill} ${W.pill}`,pillLoading:`${_.pill} ${S.medium} ${P.pill} ${k.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${P.pill} ${k.inProgress}`,link:`${_.link} ${S.medium} ${P.link}`,linkSmall:`${_.link} ${S.xsmall} ${P.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class ce extends Eo(Dt(I)){constructor(){super(),this.type="button",Oe(pd,fd,gd,hd,md),this.variant="secondary",this.ariaValueTextLoading=y._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[ye,vd]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!gn.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${gn.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.primary,this.small&&!this.quiet&&!this.loading&&N.primarySmall,this.small&&this.quiet&&!this.loading&&N.primarySmallQuiet,this.small&&this.loading&&(this.quiet?N.primarySmallQuietLoading:N.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&N.primaryQuiet,!this.small&&this.loading&&(this.quiet?N.primaryQuietLoading:N.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.secondary,this.small&&!this.quiet&&!this.loading&&N.secondarySmall,this.small&&this.loading&&(this.quiet?N.secondarySmallQuietLoading:N.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&N.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&N.secondaryQuiet,!this.small&&this.loading&&(this.quiet?N.secondaryQuietLoading:N.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.utility,this.small&&!this.quiet&&!this.loading&&N.utilitySmall,this.small&&this.quiet&&!this.loading&&N.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?N.utilitySmallQuietLoading:N.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&N.utilityQuiet,!this.small&&this.loading&&(this.quiet?N.utilityQuietLoading:N.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.negative,this.small&&!this.quiet&&!this.loading&&N.negativeSmall,this.small&&this.quiet&&!this.loading&&N.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?N.negativeSmallQuietLoading:N.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&N.negativeQuiet,!this.small&&this.loading&&(this.quiet?N.negativeQuietLoading:N.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?N.pillSmall:N.pill),this.loading&&(this.small?N.pillSmallLoading:N.pillLoading)]}get _linkClasses(){return[this.small?N.linkSmall:N.link]}get _classes(){return F(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&N.linkAsButton,this.fullWidth?N.fullWidth:N.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return b` ${this.href?b`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:b`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?b`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}ge([x({reflect:!0})],ce.prototype,"type");ge([x({type:Boolean,reflect:!0})],ce.prototype,"autofocus");ge([x({reflect:!0})],ce.prototype,"variant");ge([x({type:Boolean,reflect:!0})],ce.prototype,"quiet");ge([x({type:Boolean,reflect:!0})],ce.prototype,"small");ge([x({type:Boolean,reflect:!0})],ce.prototype,"loading");ge([x({reflect:!0})],ce.prototype,"href");ge([x({reflect:!0})],ce.prototype,"target");ge([x({reflect:!0})],ce.prototype,"rel");ge([x({type:Boolean,reflect:!0})],ce.prototype,"fullWidth");ge([x({reflect:!0})],ce.prototype,"buttonClass");ge([x({reflect:!0})],ce.prototype,"name");ge([x({reflect:!0})],ce.prototype,"value");customElements.get("w-button")||customElements.define("w-button",ce);const wd=JSON.parse('{"card.button.text":["Vælg"]}'),yd=JSON.parse('{"card.button.text":["Select"]}'),xd=JSON.parse('{"card.button.text":["Valitse"]}'),$d=JSON.parse('{"card.button.text":["Velg"]}'),kd=JSON.parse('{"card.button.text":["Välj"]}'),_d=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Sd=Object.defineProperty,Co=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Sd(e,r,n),n};const $e={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},fn={ENTER:"Enter",SPACE:" "};class yr extends I{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Oe(yd,$d,xd,wd,kd),this.buttonText=y._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[ye,_d,V`
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
    `]}get _containerClasses(){return F([$e.base,this.flat?$e.flat:$e.shadow,this.selected&&!this.flat&&$e.selected,this.selected&&this.flat?$e.flatSelected:$e.flatUnselected])}get _outlineClasses(){return F([$e.outline,this.selected?$e.outlineSelected:$e.outlineUnselected])}get _interactiveElement(){const e=()=>b`<button class="${$e.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>b`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===fn.ENTER||e.key===fn.SPACE)&&(e.preventDefault(),this.click())}render(){return b`
      <div tabindex=${q(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":b`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Co([x({type:Boolean,reflect:!0})],yr.prototype,"selected");Co([x({type:Boolean})],yr.prototype,"flat");Co([x({type:Boolean})],yr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",yr);var Ed=Object.defineProperty,xr=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Ed(e,r,n),n};class Rt extends I{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=Ga({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return b` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[ye,V`
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
    `]}}xr([x({type:String})],Rt.prototype,"type");xr([x({type:Boolean,reflect:!0})],Rt.prototype,"checked");xr([x({type:Boolean,reflect:!0})],Rt.prototype,"indeterminate");xr([x({type:Boolean,reflect:!0})],Rt.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",Rt);var Cd={},Ad=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),Od=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),Ld=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),Nd=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),Td=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),Ci=["en","nb","fi","da","sv"],Ai="en",Pd=()=>{var t;let e;switch((t=process==null?void 0:Cd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Oi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ai},Rr=t=>Ci.find(e=>t===e||t.toLowerCase().includes(e))||Oi();function Bd(){var t;if(typeof window>"u"){const e=Pd();return Rr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Oi();return Ci.includes(e)?Rr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Rr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ai}}var Dd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Md=(t,e,r,o,n)=>{const i=Bd(),s=Dd(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Md(Od,Ad,Ld,Nd,Td);var Rd=class extends I{render(){const t=y.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",Rd);var zd={},Id=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),Fd=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),jd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),Hd=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),Ud=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),Li=["en","nb","fi","da","sv"],Ni="en",Jd=()=>{var t;let e;switch((t=process==null?void 0:zd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ti=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ni},zr=t=>Li.find(e=>t===e||t.toLowerCase().includes(e))||Ti();function Wd(){var t;if(typeof window>"u"){const e=Jd();return zr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ti();return Li.includes(e)?zr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),zr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ni}}var Vd=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,qd=(t,e,r,o,n)=>{const i=Wd(),s=Vd(i,t,e,r,o,n);y.load(i,s),y.activate(i)};qd(Fd,Id,jd,Hd,Ud);var Yd=class extends I{render(){const t=y.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",Yd);const Qd=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var Xd=Object.defineProperty,xe=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Xd(e,r,n),n};const Zd={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},oe={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class me extends I{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[ye,Qd,V`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return F([oe.wrapper,this.box&&oe.box,this.bleed&&oe.bleed])}get#t(){return F(this.buttonClass,[oe.button,this.box&&oe.buttonBox])}get#n(){return F([oe.chevron,!this.box&&oe.chevronNonBox])}get#r(){const e=F([oe.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&oe.elementsChevronCollapse]),r=F([oe.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&oe.elementsChevronExpand]);return this._showChevronUp?b`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:b`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return F(this.contentClass,[this.box&&Zd.base,this._hasTitle&&this.box&&oe.contentWithTitle])}get#i(){return F([oe.expansion,!this.expanded&&oe.expansionNotExpanded])}get _expandableSlot(){return b`<div class="${this.#o}">
      <slot></slot>
    </div>`}render(){return b` <div class="${this.#e}">
      ${this._hasTitle?b`<w-unstyled-heading level=${this.headingLevel}>
            <button
              type="button"
              aria-expanded="${this.expanded}"
              class="${this.#t}"
              @click=${()=>this.expanded=!this.expanded}>
              <div class="${oe.title}">
                ${this.title?b`<span class="${oe.titleType}">${this.title}</span>`:b`<slot name="title"></slot>`}
                ${this.noChevron?"":b`<div class="${this.#n}">${this.#r}</div>`}
              </div>
            </button>
          </w-unstyled-heading>`:""}
      ${this.animated?b`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:b`<div class="${this.#i}" aria-hidden=${q(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}xe([x({type:Boolean,reflect:!0})],me.prototype,"expanded");xe([x({type:String})],me.prototype,"title");xe([x({type:Boolean})],me.prototype,"box");xe([x({type:Boolean})],me.prototype,"bleed");xe([x({attribute:"button-class",type:String})],me.prototype,"buttonClass");xe([x({attribute:"content-class",type:String})],me.prototype,"contentClass");xe([x({attribute:"no-chevron",type:Boolean})],me.prototype,"noChevron");xe([x({type:Boolean})],me.prototype,"animated");xe([x({attribute:"heading-level",type:Number})],me.prototype,"headingLevel");xe([x({type:Boolean,state:!0})],me.prototype,"_hasTitle");xe([x({type:Boolean,state:!0})],me.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",me);const Pi=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Bi=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(n=>n.patchClose))o._close=()=>this.close()}};class Kd extends Pi(Bi(I)){render(){return b`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[ye,V`
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
    `]}}const Gd=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),eu=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],tu={easing:"ease",duration:300};let Di=!1;const ru=typeof window<"u";if(ru){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Di=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class ou{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:n=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||eu,this.shouldReduceMotion=n}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(Gd(this.first,this.last))}get defaults(){return tu}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Di?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var nu={},iu=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),su=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),au=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),lu=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),cu=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),Mi=["en","nb","fi","da","sv"],Ri="en",du=()=>{var t;let e;switch((t=process==null?void 0:nu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},zi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ri},Ir=t=>Mi.find(e=>t===e||t.toLowerCase().includes(e))||zi();function uu(){var t;if(typeof window>"u"){const e=du();return Ir(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=zi();return Mi.includes(e)?Ir(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ir(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ri}}var hu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,pu=(t,e,r,o,n)=>{const i=uu(),s=hu(i,t,e,r,o,n);y.load(i,s),y.activate(i)};pu(su,iu,au,lu,cu);var gu=class extends I{render(){const t=y.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",gu);const fu=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),mu=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),vu=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),bu=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),wu=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var yu=Object.defineProperty,zt=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&yu(e,r,n),n};class ut extends Pi(I){constructor(){super(),this._hasTopContent=!1,Oe(mu,bu,vu,fu,wu)}render(){return b`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new ou(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?b`<button
          type="button"
          aria-label="${y._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:z}get closeButton(){return this.noClose?z:b`<button
      type="button"
      aria-label="${y._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[ye,V`
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
    `]}}zt([x({type:String})],ut.prototype,"title");zt([x({type:Boolean})],ut.prototype,"back");zt([x({type:Boolean,attribute:"no-close"})],ut.prototype,"noClose");zt([il()],ut.prototype,"_hasTopContent");zt([fr(".title-el")],ut.prototype,"titleEl");let kt=[];const Ao={documentElement:{},body:{}},xu=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Ii=t=>{t.touches.length>1||t.preventDefault?.()},$u=t=>([e,r])=>{Ao[t][e]=document[t].style[e],document[t].style[e]=r},ku=()=>Object.entries(xu).forEach(([t,e])=>{Object.entries(e).forEach($u(t))}),_u=t=>([e,r])=>{document[t].style[e]=Ao[t][e]},Su=()=>Object.entries(Ao).forEach(([t,e])=>{Object.entries(e).forEach(_u(t))}),Eu=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function Cu(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const n=o.targetTouches[0].clientY-e;return t.scrollTop===0&&n>0||Eu(t)&&n<0?Ii(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Au(t){t.ontouchstart=null,t.ontouchmove=null}const Fi=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Ii,{passive:!1}),Ou=Fi(!0),Lu=Fi();function Nu(t){if(!t)throw Error("Could not run setup, an element must be provided");kt.some(e=>e===t)||(kt.length||(ku(),Ou()),Cu(t),kt.push(t))}function Tu(){kt.forEach(Au),Lu(),Su(),kt=[]}var Pu=Object.defineProperty,ht=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Pu(e,r,n),n};class Ke extends Bi(I){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Nu(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Tu(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return b`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[ye,V`
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
    `]}}ht([x({type:Boolean})],Ke.prototype,"show");ht([x({type:String,attribute:"content-id"})],Ke.prototype,"contentId");ht([x({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ke.prototype,"ignoreBackdropClicks");ht([fr(".dialog-el")],Ke.prototype,"dialogEl");ht([fr(".dialog-inner-el")],Ke.prototype,"dialogInnerEl");ht([fr(".content-el")],Ke.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ke),customElements.define("w-modal-header",ut),customElements.define("w-modal-footer",Kd));var Bu={},Du=JSON.parse('{"icon.title.chevron-double-left":["Dobbel pil til venstre"]}'),Mu=JSON.parse('{"icon.title.chevron-double-left":["Double leftward arrow"]}'),Ru=JSON.parse('{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]}'),zu=JSON.parse('{"icon.title.chevron-double-left":["Dobbelt venstrepil"]}'),Iu=JSON.parse('{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}'),ji=["en","nb","fi","da","sv"],Hi="en",Fu=()=>{var t;let e;switch((t=process==null?void 0:Bu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ui=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Hi},Fr=t=>ji.find(e=>t===e||t.toLowerCase().includes(e))||Ui();function ju(){var t;if(typeof window>"u"){const e=Fu();return Fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ui();return ji.includes(e)?Fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Hi}}var Hu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,Uu=(t,e,r,o,n)=>{const i=ju(),s=Hu(i,t,e,r,o,n);y.load(i,s),y.activate(i)};Uu(Mu,Du,Ru,zu,Iu);var Ju=class extends I{render(){const t=y.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",Ju);var Wu={},Vu=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),qu=JSON.parse('{"icon.title.chevron-left":["Leftward arrow"]}'),Yu=JSON.parse('{"icon.title.chevron-left":["Nuoli vasemmalle"]}'),Qu=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),Xu=JSON.parse('{"icon.title.chevron-left":["Pil vänster"]}'),Ji=["en","nb","fi","da","sv"],Wi="en",Zu=()=>{var t;let e;switch((t=process==null?void 0:Wu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Vi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Wi},jr=t=>Ji.find(e=>t===e||t.toLowerCase().includes(e))||Vi();function Ku(){var t;if(typeof window>"u"){const e=Zu();return jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Vi();return Ji.includes(e)?jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Wi}}var Gu=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,eh=(t,e,r,o,n)=>{const i=Ku(),s=Gu(i,t,e,r,o,n);y.load(i,s),y.activate(i)};eh(qu,Vu,Yu,Qu,Xu);var th=class extends I{render(){const t=y.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",th);var rh={},oh=JSON.parse('{"icon.title.chevron-right":["Pil til høyre"]}'),nh=JSON.parse('{"icon.title.chevron-right":["Rightward arrow"]}'),ih=JSON.parse('{"icon.title.chevron-right":["Nuoli oikealle"]}'),sh=JSON.parse('{"icon.title.chevron-right":["Pil til højre"]}'),ah=JSON.parse('{"icon.title.chevron-right":["Pil höger"]}'),qi=["en","nb","fi","da","sv"],Yi="en",lh=()=>{var t;let e;switch((t=process==null?void 0:rh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Qi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Yi},Hr=t=>qi.find(e=>t===e||t.toLowerCase().includes(e))||Qi();function ch(){var t;if(typeof window>"u"){const e=lh();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Qi();return qi.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Yi}}var dh=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,uh=(t,e,r,o,n)=>{const i=ch(),s=dh(i,t,e,r,o,n);y.load(i,s),y.activate(i)};uh(nh,oh,ih,sh,ah);var hh=class extends I{render(){const t=y.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",hh);const ph=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),gh=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),fh=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),mh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),vh=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}');var bh=Object.defineProperty,$r=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&bh(e,r,n),n};const Ur=y._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),Ht="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class It extends I{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,Oe(gh,mh,fh,ph,vh)}static{this.styles=[ye,Zl]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(n,i)=>i+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(n,i)=>r+i)}render(){const e=this.visiblePageNumbers;return b`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${y._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?b`<a
              href="${this.baseUrl}1"
              class="${Ht+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${y._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${Ur}</span>
            </a>`:z}
        ${this.shouldShowPreviousPageButton?b`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${Ht+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${y._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${Ur}</span>
            </a>`:z}
        ${e.map(r=>{const o=r===this.currentPageNumber,n=`${this.baseUrl}${r}`;let i=Ht;o?i+=" s-bg-primary s-text-inverted":i+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const s=y._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return b`<a aria-label="${s}" href="${n}" class="${i}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?b`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${Ht+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${y._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${Ur}</span>
            </a>`:z}
      </div>
    </nav>`}}$r([x({type:String,reflect:!0,attribute:"base-url"})],It.prototype,"baseUrl");$r([x({type:Number,reflect:!0})],It.prototype,"pages");$r([x({type:Number,reflect:!0,attribute:"current-page"})],It.prototype,"currentPageNumber");$r([x({type:Number,reflect:!0,attribute:"visible-pages"})],It.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",It);const wh=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),yh=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),xh=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),$h=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),kh=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class _h extends Dt(j){static styles=[j.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),Oe(yh,$h,xh,wh,kh),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=y._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=y._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return F([de.button,de.label,this.suggestion?de.suggestion:de.filter,this.canClose?de.labelWithClose:de.labelWithoutClose])}get _closeClasses(){return F([de.button,de.close,this.suggestion?de.suggestion:de.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return b`
      <div class="${de.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${de.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?b`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${de.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",_h);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(t,e,r){return t?e(t):r?.(t)}const Sh=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Eh=JSON.parse('{"select.label.optional":["(optional)"]}'),Ch=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),Ah=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Oh=JSON.parse('{"select.label.optional":["(valfritt)"]}');class Lh extends Eo(Dt(j)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[j.styles];constructor(){super(),Oe(Eh,Ah,Ch,Sh,Oh),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return F([Se.base,!this.invalid&&!this.disabled&&!this.readOnly&&Se.default,this.invalid&&Se.invalid,this.disabled&&Se.disabled,this.readOnly&&Se.readOnly])}get#t(){return F([Cr.base,this.invalid?Cr.colorInvalid:Cr.color])}get#n(){return F([Se.chevron,this.disabled&&Se.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return b`<div class="${Se.wrapper}">
      ${Jt(this.label,()=>b`<label class="${Jo.base}" for="${this.#r}">
            ${this.label}
            ${Jt(this.optional,()=>b`<span class="${Jo.optional}"
                  >${y._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Se.selectWrapper}">
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
      ${Jt(this.always||this.invalid,()=>b`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",Lh);const Nh=V`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Th=Object.defineProperty,Z=(t,e,r,o)=>{for(var n=void 0,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=s(e,r,n)||n);return n&&Th(e,r,n),n};const Le={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},Ph={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Jr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class Y extends Eo(I){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[ye,Nh]}get _inputstyles(){return F([Le.base,this._hasSuffix&&Le.suffix,this._hasPrefix&&Le.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Le.default,this.invalid&&!this.disabled&&!this.readOnly&&Le.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Le.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Le.readOnly])}get _helptextstyles(){return F([Jr.base,this.invalid?Jr.colorInvalid:Jr.color])}get _label(){if(this.label)return b`<label for="${this._id}" class=${Ph.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const n=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(n)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return b`
      ${this._label}
      <div class="${Le.wrapper}">
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
      ${this.helpText&&b`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}Z([x({type:Boolean,reflect:!0})],Y.prototype,"disabled");Z([x({type:Boolean,reflect:!0})],Y.prototype,"invalid");Z([x({type:String,reflect:!0})],Y.prototype,"id");Z([x({type:String,reflect:!0})],Y.prototype,"label");Z([x({type:String,reflect:!0})],Y.prototype,"helpText");Z([x({type:String,reflect:!0})],Y.prototype,"size");Z([x({type:Number,reflect:!0})],Y.prototype,"max");Z([x({type:Number,reflect:!0})],Y.prototype,"min");Z([x({type:Number,reflect:!0,attribute:"min-length"})],Y.prototype,"minLength");Z([x({type:Number,reflect:!0,attribute:"max-length"})],Y.prototype,"maxLength");Z([x({type:String,reflect:!0})],Y.prototype,"pattern");Z([x({type:String,reflect:!0})],Y.prototype,"placeholder");Z([x({type:Boolean,reflect:!0,attribute:"read-only"})],Y.prototype,"readOnly");Z([x({type:Boolean,reflect:!0})],Y.prototype,"required");Z([x({type:String,reflect:!0})],Y.prototype,"type");Z([x({type:String,reflect:!0})],Y.prototype,"value");Z([x({type:String,reflect:!0})],Y.prototype,"name");Z([x({type:Boolean})],Y.prototype,"_hasPrefix");Z([x({type:Boolean})],Y.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",Y);const kr=typeof window<"u";function Bh(t,e){if(!kr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Dh(t){return kr?customElements.get("w-toast-container").init().del(t):void 0}function Mh(t,e){if(!kr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Rh}=bs,mn=()=>document.createComment(""),wt=(t,e,r)=>{const o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=o.insertBefore(mn(),n),s=o.insertBefore(mn(),n);r=new Rh(i,s,t,t.options)}else{const i=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(i!==n||l){let a=r._$AA;for(;a!==i;){const u=a.nextSibling;o.insertBefore(a,n),a=u}}}return r},je=(t,e,r=t)=>(t._$AI(e,r),t),zh={},Ih=(t,e=zh)=>t._$AH=e,Fh=t=>t._$AH,Wr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vn=(t,e,r)=>{const o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},jh=co(class extends uo{constructor(t){if(super(t),t.type!==lo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const n=[],i=[];let s=0;for(const l of t)n[s]=o?o(l,s):s,i[s]=r(l,s),s++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const n=Fh(t),{values:i,keys:s}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=s,i;const l=this.ut??=[],a=[];let u,h,c=0,g=n.length-1,d=0,f=i.length-1;for(;c<=g&&d<=f;)if(n[c]===null)c++;else if(n[g]===null)g--;else if(l[c]===s[d])a[d]=je(n[c],i[d]),c++,d++;else if(l[g]===s[f])a[f]=je(n[g],i[f]),g--,f--;else if(l[c]===s[f])a[f]=je(n[c],i[f]),wt(t,a[f+1],n[c]),c++,f--;else if(l[g]===s[d])a[d]=je(n[g],i[d]),wt(t,n[c],n[g]),g--,d++;else if(u===void 0&&(u=vn(s,d,f),h=vn(l,c,g)),u.has(l[c]))if(u.has(l[g])){const p=h.get(s[d]),v=p!==void 0?n[p]:null;if(v===null){const E=wt(t,n[c]);je(E,i[d]),a[d]=E}else a[d]=je(v,i[d]),wt(t,n[c],v),n[p]=null;d++}else Wr(n[g]),g--;else Wr(n[c]),c++;for(;d<=f;){const p=wt(t,a[f+1]);je(p,i[d]),a[d++]=p}for(;c<=g;){const p=n[c++];p!==null&&Wr(p)}return this.ut=s,Ih(t,a),Ce}});class Xi extends j{static styles=[j.styles,V`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const n of this._toasts)Date.now()<=n[1].duration?e.push(n):r.push(n);const o=[];for(const[n]of r){const i=this.renderRoot.querySelector(`#${n}`);o.push(i.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return b`
      <aside class="${Er.wrapper}">
        <div class="${Er.base}" id="w-toast-container-list">
          ${jh(this._toastsArray,e=>e.id,e=>b` <w-toast
                class="${Er.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",Xi);const Oo=typeof window<"u";let Zi=!0;if(Oo){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Zi=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const Ki=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},Gi=t=>{const e=Zi?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},Hh=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Uh=t=>()=>{t&&t()},es=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Hh(t,e);Ki(t),t.style.height="auto";let n=t.scrollHeight;if(Oo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",Gi(t),requestAnimationFrame(()=>t.style.height=n+"px")}),r)return r},ts=(t,e)=>{const r=(()=>{if(!e)return new Promise(i=>{e=i})})(),o=Uh(e);Ki(t);let n=t.scrollHeight;if(Oo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=n+"px",t.style.transitionTimingFunction="ease-in",Gi(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},Jh=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),Wh=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),Vh=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),qh=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Yh=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Ne={success:"success",error:"error",warning:"warning"};class Qh extends j{static styles=[j.styles,V`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Oe(Wh,qh,Vh,Jh,Yh),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&es(this._wrapper,()=>this._expanded=!0)}get#e(){return F([ve.base,this.type===Ne.success&&ve.positive,this.type===Ne.warning&&ve.warning,this.type===Ne.error&&ve.negative])}get#t(){return F([ve.iconBase,this.type===Ne.success&&ve.iconPositive,this.type===Ne.warning&&ve.iconWarning,this.type===Ne.error&&ve.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Ne.warning}get _error(){return this.type===Ne.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?y._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?y._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):y._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?b`<w-icon-warning-16></w-icon-warning-16>`:this._error?b`<w-icon-error-16></w-icon-error-16>`:b`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?ts(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?b` <section class="${ve.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${ve.content}">
          <p>${this.text}</p>
        </div>
        ${Jt(this.canclose===!0,()=>b`
            <button class="${ve.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:b``}}customElements.get("w-toast")||customElements.define("w-toast",Qh);class Xh extends j{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&es(this._wrapper),!this.show&&!this._removeElement&&ts(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[j.styles,V`
      :host {
        display: block;
      }
    `];render(){return b`<div aria-hidden=${q(this.show?void 0:"true")}>${this._removeElement?b``:b`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Xh);class Zh extends j{static properties={level:{type:Number}};static styles=[j.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?ho(this._markup):b`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Zh);var Kh={},Gh=JSON.parse('{"icon.title.bag":["Veske"]}'),ep=JSON.parse('{"icon.title.bag":["Handbag"]}'),tp=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),rp=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),op=JSON.parse('{"icon.title.bag":["Handväska"]}'),rs=["en","nb","fi","da","sv"],os="en",np=()=>{var t;let e;switch((t=process==null?void 0:Kh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ns=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":os},Vr=t=>rs.find(e=>t===e||t.toLowerCase().includes(e))||ns();function ip(){var t;if(typeof window>"u"){const e=np();return Vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ns();return rs.includes(e)?Vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),os}}var sp=(t,e,r,o,n,i)=>t==="nb"?r:t==="fi"?o:t==="da"?n:t==="sv"?i:e,ap=(t,e,r,o,n)=>{const i=ip(),s=sp(i,t,e,r,o,n);y.load(i,s),y.activate(i)};ap(ep,Gh,tp,rp,op);var lp=class extends I{render(){const t=y.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",lp);kr&&(window.WarpToastContainer=Xi,window.toast=Bh,window.updateToast=Mh,window.removeToast=Dh);const cp={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class dp extends j{static styles=[j.styles,V`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=cp;return b`
      <nav class="sidebar p-24 s-bg-subtle mr-12">
        <h2>
          <a href="${e.href}" class="no-underline py-2">${e.title}</a>
        </h2>

        <ul class="py-8">
          ${this.renderItems(r)}
        </ul>
      </nav>
    `}renderItems(e){return e.map(r=>b`
        <li>
          ${r.href?b`<a class="no-underline py-2 px-16 text-m" href="${r.href}">${r.title}</a>`:b`<span class="pt-2 text-m font-bold">${r.title}</span>`}
          ${r.items?b`<ul class="py-4">
                ${this.renderItems(r.items)}
              </ul>`:""}
        </li>
      `)}}customElements.define("sidebar-element",dp);
