(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=globalThis,bo=er.ShadowRoot&&(er.ShadyCSS===void 0||er.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mo=Symbol(),Wo=new WeakMap;let Ti=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==mo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(bo&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Wo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Wo.set(r,e))}return e}toString(){return this.cssText}};const vo=t=>new Ti(typeof t=="string"?t:t+"",void 0,mo),U=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new Ti(r,t,mo)},As=(t,e)=>{if(bo)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=er.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},Yo=bo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return vo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Os,defineProperty:Ls,getOwnPropertyDescriptor:Ns,getOwnPropertyNames:Ts,getOwnPropertySymbols:Ps,getPrototypeOf:Bs}=Object,_r=globalThis,Qo=_r.trustedTypes,Ds=Qo?Qo.emptyScript:"",Rs=_r.reactiveElementPolyfillSupport,Nt=(t,e)=>t,rr={toAttribute(t,e){switch(e){case Boolean:t=t?Ds:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},wo=(t,e)=>!Os(t,e),Xo={attribute:!0,type:String,converter:rr,reflect:!1,hasChanged:wo};Symbol.metadata??=Symbol("metadata"),_r.litPropertyMetadata??=new WeakMap;let Qe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Xo){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Ls(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=Ns(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);n.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xo}static _$Ei(){if(this.hasOwnProperty(Nt("elementProperties")))return;const e=Bs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Nt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nt("properties"))){const r=this.properties,o=[...Ts(r),...Ps(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(Yo(i))}else e!==void 0&&r.push(Yo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return As(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:rr).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:rr;this._$Em=i,this[i]=s.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??wo)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},Qe[Nt("elementProperties")]=new Map,Qe[Nt("finalized")]=new Map,Rs?.({ReactiveElement:Qe}),(_r.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=globalThis,or=yo.trustedTypes,Zo=or?or.createPolicy("lit-html",{createHTML:t=>t}):void 0,xo="$lit$",Pe=`lit$${Math.random().toFixed(9).slice(2)}$`,$o="?"+Pe,Ms=`<${$o}>`,Ge=document,Bt=()=>Ge.createComment(""),Dt=t=>t===null||typeof t!="object"&&typeof t!="function",ko=Array.isArray,Pi=t=>ko(t)||typeof t?.[Symbol.iterator]=="function",zr=`[ 	
\f\r]`,kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ko=/-->/g,Go=/>/g,Ue=RegExp(`>|${zr}(?:([^\\s"'>=/]+)(${zr}*=${zr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ei=/'/g,ti=/"/g,Bi=/^(?:script|style|textarea|title)$/i,zs=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=zs(1),be=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),ri=new WeakMap,Xe=Ge.createTreeWalker(Ge,129);function Di(t,e){if(!ko(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zo!==void 0?Zo.createHTML(e):e}const Ri=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=kt;for(let l=0;l<r;l++){const a=t[l];let d,h,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,h=s.exec(a),h!==null);)f=s.lastIndex,s===kt?h[1]==="!--"?s=Ko:h[1]!==void 0?s=Go:h[2]!==void 0?(Bi.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Ue):h[3]!==void 0&&(s=Ue):s===Ue?h[0]===">"?(s=i??kt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,d=h[1],s=h[3]===void 0?Ue:h[3]==='"'?ti:ei):s===ti||s===ei?s=Ue:s===Ko||s===Go?s=kt:(s=Ue,i=void 0);const u=s===Ue&&t[l+1].startsWith("/>")?" ":"";n+=s===kt?a+Ms:c>=0?(o.push(d),a.slice(0,c)+xo+a.slice(c)+Pe+u):a+Pe+(c===-2?l:u)}return[Di(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let ao=class Mi{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[d,h]=Ri(e,r);if(this.el=Mi.createElement(d,o),Xe.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Xe.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(xo)){const f=h[s++],u=i.getAttribute(c).split(Pe),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:b[2],strings:u,ctor:b[1]==="."?ji:b[1]==="?"?Fi:b[1]==="@"?Vi:Ht}),i.removeAttribute(c)}else c.startsWith(Pe)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Bi.test(i.tagName)){const c=i.textContent.split(Pe),f=c.length-1;if(f>0){i.textContent=or?or.emptyScript:"";for(let u=0;u<f;u++)i.append(c[u],Bt()),Xe.nextNode(),a.push({type:2,index:++n});i.append(c[f],Bt())}}}else if(i.nodeType===8)if(i.data===$o)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(Pe,c+1))!==-1;)a.push({type:7,index:n}),c+=Pe.length-1}n++}}static createElement(e,r){const o=Ge.createElement("template");return o.innerHTML=e,o}};function et(t,e,r=t,o){if(e===be)return e;let i=o!==void 0?r.o?.[o]:r.l;const n=Dt(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=et(t,i._$AS(t,e.values),i,o)),e}class zi{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Ge).importNode(r,!0);Xe.currentNode=i;let n=Xe.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new Sr(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new Hi(n,this,e)),this._$AV.push(d),a=o[++l]}s!==a?.index&&(n=Xe.nextNode(),s++)}return Xe.currentNode=Ge,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let Sr=class Ii{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=et(this,e,r),Dt(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&Dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ge.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ao.createElement(Di(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new zi(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=ri.get(e.strings);return r===void 0&&ri.set(e.strings,r=new ao(e)),r}k(e){ko(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Ii(this.O(Bt()),this.O(Bt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=et(this,e,r,0),s=!Dt(e)||e!==this._$AH&&e!==be,s&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=et(this,l[o+a],r,a),d===be&&(d=this._$AH[a]),s||=!Dt(d)||d!==this._$AH[a],d===D?e=D:e!==D&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}s&&!i&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ji extends Ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}}class Fi extends Ht{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}}class Vi extends Ht{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=et(this,e,r,0)??D)===be)return;const o=this._$AH,i=e===D&&o!==D||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==D&&(o===D||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Hi{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){et(this,e)}}const Is={M:xo,P:Pe,A:$o,C:1,L:Ri,R:zi,D:Pi,V:et,I:Sr,H:Ht,N:Fi,U:Vi,B:ji,F:Hi},js=yo.litHtmlPolyfillSupport;js?.(ao,Sr),(yo.litHtmlVersions??=[]).push("3.2.0");const Fs=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new Sr(e.insertBefore(Bt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Fs(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return be}};R._$litElement$=!0,R.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:R});const Vs=globalThis.litElementPolyfillSupport;Vs?.({LitElement:R});(globalThis.litElementVersions??=[]).push("4.1.0");function Hs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const oi=String.raw`[A-Za-z][^/\s>]*`,Us=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,qs=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Ui=String.raw`${Us}|${qs}`,Js=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ws=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Ys=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Qs=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Xs=String.raw`${Js}|${Ws}|${Ys}`,Zs=String.raw`(?<attrName>${Qs})(?:\s*=\s*(?:${Xs}))?`,Ks=String.raw`${Ui}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,qi=String.raw`(?<attrSpace>\s*)(?:${Zs}|(?<attrText>${Ks}))`,Gs={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${oi})(?<attrs>(?:${qi})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${oi})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Ui}|['"]`,wildcard:String.raw`.`},ea=Object.entries(Gs).map(([t,e])=>`(?<${t}>${e})`).join("|");function*ta(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const ra=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Rt(t,e="  ",r=80){const o=new RegExp(ea,"gys"),i=new RegExp(qi,"gy"),n=[];let s=null,l=0,a=0,d="",h=0,c="";const f=()=>{if(c&&c!=`
`){const E=d.indexOf(`
`),A=E==-1?d.length:E;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&d?e.repeat(h):"",v=`${c}${p}${d}`;if(v){const E=v.lastIndexOf(`
`);E==-1?a+=v.length:a=v.length-E-1,n.push(v)}d=c=""},u=(...p)=>{for(const v of p)!s&&/^\s+$/.test(v)?(f(),c=v):(d||(h=l),d+=v)};for(const p of ta(o,t)){if(Rt.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const v=p.groups.endTagName.toLowerCase();v==s&&(s=null),s||(--l,u(`</${v}>`))}if(s)u(p[0]);else if(p.groups.space)u(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)u(p[0]);else if(p.groups.startTag){const v=p.groups.startTagName.toLowerCase();if(u(`<${v}`),++l,p.groups.attrs){let{lastIndex:A}=i,C,M;for(;C=i.exec(p.groups.attrs);){if({lastIndex:A}=i,Rt.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(C.groups.attrText)):((C.groups.attrSpace||!M?.groups.attrText)&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),M=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!p.groups.closingSlash;u(E?" />":">"),E||ra.has(v)?--l:["pre","textarea","script","style"].includes(v)&&(s=v)}}f();let b=!1;for(;/^\s+$/.test(n[n.length-1]);){const p=n.pop();/\n/.test(p)&&(b=!0)}return b&&n.push(`
`),n.join("")}Rt.default=Rt;var oa=Rt;const ia=Hs(oa);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Er=t=>(...e)=>({_$litDirective$:t,values:e});let Cr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lo extends Cr{constructor(e){if(super(e),this.it=D,e.type!==Te.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===D||e==null)return this._t=void 0,this.it=e;if(e===be)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}lo.directiveName="unsafeHTML",lo.resultType=1;const _o=Er(lo);class na extends R{static styles=U`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=ia(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${_o(this.source)}</code></pre>`}}customElements.define("syntax-highlight",na);var j=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?j.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};const qe={base:"py-4 px-8 border-0 rounded-4 text-xs inline-flex",neutral:"bg-[--w-color-badge-neutral-background] s-text",info:"bg-[--w-color-badge-info-background] s-text",positive:"bg-[--w-color-badge-positive-background] s-text",warning:"bg-[--w-color-badge-warning-background] s-text",negative:"bg-[--w-color-badge-negative-background] s-text",disabled:"s-bg-disabled s-text",price:"bg-[--w-black/70] s-text-inverted-static",sponsored:"bg-[--w-color-badge-sponsored-background] s-text",positionBase:"absolute backdrop-blur",positionTL:"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",positionTR:"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",positionBR:"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",positionBL:"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"},_t={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},fe={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Ir={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},$e={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},St="font-bold focusable justify-center transition-colors ease-in-out",Ji={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},sa={primary:`border-0 rounded-8 ${St}`,secondary:`border-2 rounded-8 ${St}`,utility:`border rounded-4 ${St}`,negative:`border-0 rounded-8 ${St}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${St}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${Ji.link}`},aa={medium:"text-m leading-[24]",xsmall:"text-xs"},Ne={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},ii={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},jr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"},Wi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",la={wrapper:Wi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ca={wrapper:Wi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},ct={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${aa.medium} ${sa.pill} ${Ji.pill} justify-self-end -mr-8 ml-8`};var So={},Yi={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Yi);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Yi;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(u){return!u.match(/[^a-f0-9]/i)?parseInt(u,16):NaN}function o(u,b,p){const v=r(u);if(Number.isNaN(v)||p!==void 0&&p!==u.length)throw new SyntaxError(e.errorMessages.get(b));return v}function i(u){const b=o(u,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(b)}function n(u,b){const p=o(u,e.ErrorType.MalformedUnicode,4);if(b!==void 0){const v=o(b,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,v)}return String.fromCharCode(p)}function s(u){return u.charAt(0)==="{"&&u.charAt(u.length-1)==="}"}function l(u){if(!s(u))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const b=u.slice(1,-1),p=o(b,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(v){throw v instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):v}}function a(u,b=!1){if(b)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(u,8);return String.fromCharCode(p)}const d=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(u){return d.get(u)||u}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function f(u,b=!1){return u.replace(c,function(p,v,E,A,C,M,$,O,L){if(v!==void 0)return"\\";if(E!==void 0)return i(E);if(A!==void 0)return l(A);if(C!==void 0)return n(C,M);if($!==void 0)return n($);if(O==="0")return"\0";if(O!==void 0)return a(O,!b);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=f,t.default=f})(So);const Ke=t=>typeof t=="string",da=t=>typeof t=="function",ni=new Map,Qi="en";function Eo(t){return[...Array.isArray(t)?t:[t],Qi]}function Xi(t,e,r){const o=Eo(t);return ir(()=>nr("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ke(e)?new Date(e):e)}function co(t,e,r){const o=Eo(t);return ir(()=>nr("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function si(t,e,r,{offset:o=0,...i}){const n=Eo(t),s=e?ir(()=>nr("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):ir(()=>nr("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function ir(t,e){const r=t();let o=ni.get(r);return o||(o=e(),ni.set(r,o)),o}function nr(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Zi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,Ki="%__lingui_octothorpe__%",ua=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s]||{style:s},n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=co(o,s,a);return l.replace(new RegExp(Ki,"g"),d)};return{plural:(s,l)=>{const{offset:a=0}=l,d=si(o,!1,s,l);return n(s-a,d)},selectordinal:(s,l)=>{const{offset:a=0}=l,d=si(o,!0,s,l);return n(s-a,d)},select:ha,number:(s,l)=>co(o,s,i(l)),date:(s,l)=>Xi(o,s,i(l))}},ha=(t,e)=>e[t]??e.other;function pa(t,e,r){return(o={},i)=>{const n=ua(e,r,i),s=(a,d=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&d)return h+Ki;if(Ke(c))return h+c;const[f,u,b]=c;let p={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(b).forEach(([E,A])=>{p[E]=s(A,u==="plural"||u==="selectordinal")}):p=b;let v;if(u){const E=n[u];v=E(o[f],p)}else v=o[f];return v==null?h:h+v},""):a,l=s(t);return Ke(l)&&Zi.test(l)?So.unraw(l.trim()):Ke(l)?l.trim():l?String(l):""}}var ga=Object.defineProperty,fa=(t,e,r)=>e in t?ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ba=(t,e,r)=>(fa(t,e+"",r),r);let ma=class{constructor(){ba(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var va=Object.defineProperty,wa=(t,e,r)=>e in t?va(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,dt=(t,e,r)=>(wa(t,typeof e!="symbol"?e+"":e,r),r);let ya=class extends ma{constructor(e){super(),dt(this,"_locale",""),dt(this,"_locales"),dt(this,"_localeData",{}),dt(this,"_messages",{}),dt(this,"_missing"),dt(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Qi,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Ke(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return da(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Ke(a)&&Zi.test(a)?JSON.parse(`"${a}"`):Ke(a)?a:pa(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Xi(this._locales||this._locale,e,r)}number(e,r){return co(this._locales||this._locale,e,r)}};function xa(t={}){return new ya(t)}const Fr=xa();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=globalThis,sr=Co.trustedTypes,ai=sr?sr.createPolicy("lit-html",{createHTML:t=>t}):void 0,Gi="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,en="?"+ze,$a=`<${en}>`,tt=document,Mt=()=>tt.createComment(""),zt=t=>t===null||typeof t!="object"&&typeof t!="function",Ao=Array.isArray,ka=t=>Ao(t)||typeof t?.[Symbol.iterator]=="function",Vr=`[ 	
\f\r]`,Et=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,li=/-->/g,ci=/>/g,Je=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),di=/'/g,ui=/"/g,tn=/^(?:script|style|textarea|title)$/i,gt=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),hi=new WeakMap,Ze=tt.createTreeWalker(tt,129);function rn(t,e){if(!Ao(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ai!==void 0?ai.createHTML(e):e}const _a=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=Et;for(let l=0;l<r;l++){const a=t[l];let d,h,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,h=s.exec(a),h!==null);)f=s.lastIndex,s===Et?h[1]==="!--"?s=li:h[1]!==void 0?s=ci:h[2]!==void 0?(tn.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Je):h[3]!==void 0&&(s=Je):s===Je?h[0]===">"?(s=i??Et,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,d=h[1],s=h[3]===void 0?Je:h[3]==='"'?ui:di):s===ui||s===di?s=Je:s===li||s===ci?s=Et:(s=Je,i=void 0);const u=s===Je&&t[l+1].startsWith("/>")?" ":"";n+=s===Et?a+$a:c>=0?(o.push(d),a.slice(0,c)+Gi+a.slice(c)+ze+u):a+ze+(c===-2?l:u)}return[rn(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class It{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[d,h]=_a(e,r);if(this.el=It.createElement(d,o),Ze.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ze.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Gi)){const f=h[s++],u=i.getAttribute(c).split(ze),b=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:b[2],strings:u,ctor:b[1]==="."?Ea:b[1]==="?"?Ca:b[1]==="@"?Aa:Ar}),i.removeAttribute(c)}else c.startsWith(ze)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(tn.test(i.tagName)){const c=i.textContent.split(ze),f=c.length-1;if(f>0){i.textContent=sr?sr.emptyScript:"";for(let u=0;u<f;u++)i.append(c[u],Mt()),Ze.nextNode(),a.push({type:2,index:++n});i.append(c[f],Mt())}}}else if(i.nodeType===8)if(i.data===en)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(ze,c+1))!==-1;)a.push({type:7,index:n}),c+=ze.length-1}n++}}static createElement(e,r){const o=tt.createElement("template");return o.innerHTML=e,o}}function ft(t,e,r=t,o){if(e===gt)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const n=zt(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=ft(t,i._$AS(t,e.values),i,o)),e}class Sa{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??tt).importNode(r,!0);Ze.currentNode=i;let n=Ze.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new Ut(n,n.nextSibling,this,e):a.type===1?d=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(d=new Oa(n,this,e)),this._$AV.push(d),a=o[++l]}s!==a?.index&&(n=Ze.nextNode(),s++)}return Ze.currentNode=tt,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Ut{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ft(this,e,r),zt(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ka(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&zt(this._$AH)?this._$AA.nextSibling.data=e:this.T(tt.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=It.createElement(rn(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Sa(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=hi.get(e.strings);return r===void 0&&hi.set(e.strings,r=new It(e)),r}k(e){Ao(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Ut(this.O(Mt()),this.O(Mt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ar{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=G}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=ft(this,e,r,0),s=!zt(e)||e!==this._$AH&&e!==gt,s&&(this._$AH=e);else{const l=e;let a,d;for(e=n[0],a=0;a<n.length-1;a++)d=ft(this,l[o+a],r,a),d===gt&&(d=this._$AH[a]),s||=!zt(d)||d!==this._$AH[a],d===G?e=G:e!==G&&(e+=(d??"")+n[a+1]),this._$AH[a]=d}s&&!i&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ea extends Ar{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class Ca extends Ar{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class Aa extends Ar{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=ft(this,e,r,0)??G)===gt)return;const o=this._$AH,i=e===G&&o!==G||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==G&&(o===G||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Oa{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ft(this,e)}}const La=Co.litHtmlPolyfillSupport;La?.(It,Ut),(Co.litHtmlVersions??=[]).push("3.2.1");const Na=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new Ut(e.insertBefore(Mt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tt=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Na(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return gt}};Tt._$litElement$=!0,Tt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Tt});const Ta=globalThis.litElementPolyfillSupport;Ta?.({LitElement:Tt});(globalThis.litElementVersions??=[]).push("4.1.1");class Pa extends Tt{#e=!1;get i18n(){return this.#e||(Fr.load(this.locale,this.translations),Fr.activate(this.locale),this.#e=!0),Fr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Oo=()=>!(typeof window<"u");class on{isServer=!1;css=""}const Ba=(t=[])=>{const e=new on;if(Oo()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},Da=()=>Ba(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),Ra=async(t=[])=>{const e=new on;if(Oo()){for(const n of t)e.css+=`@import url('${n}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(n=>fetch(n))),i=await Promise.all(o.map(n=>n.text()));for(const n of i)e.css+=n;return e},pi=async()=>Ra(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(m){var y=m.replace(s,"");return y!==m&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function a(m){return"isConnected"in m?m.isConnected:document.contains(m)}function d(m){return m.filter(function(y,T){return m.indexOf(y)===T})}function h(m,y){return m.filter(function(T){return y.indexOf(T)===-1})}function c(m){m.parentNode.removeChild(m)}function f(m){return m.shadowRoot||r.get(m)}var u=["addRule","deleteRule","insertRule","removeRule"],b=CSSStyleSheet,p=b.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function v(m){return typeof m=="object"?H.isPrototypeOf(m)||p.isPrototypeOf(m):!1}function E(m){return typeof m=="object"?p.isPrototypeOf(m):!1}var A=new WeakMap,C=new WeakMap,M=new WeakMap,$=new WeakMap;function O(m,y){var T=document.createElement("style");return M.get(m).set(y,T),C.get(m).push(y),T}function L(m,y){return M.get(m).get(y)}function z(m,y){M.get(m).delete(y),C.set(m,C.get(m).filter(function(T){return T!==y}))}function V(m,y){requestAnimationFrame(function(){y.textContent=A.get(m).textContent,$.get(m).forEach(function(T){return y.sheet[T.method].apply(y.sheet,T.args)})})}function q(m){if(!A.has(m))throw new TypeError("Illegal invocation")}function K(){var m=this,y=document.createElement("style");e.body.appendChild(y),A.set(m,y),C.set(m,[]),M.set(m,new WeakMap),$.set(m,[])}var H=K.prototype;H.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(T){return Promise.reject(T)}},H.replaceSync=function(y){if(q(this),typeof y=="string"){var T=this;A.get(T).textContent=l(y),$.set(T,[]),C.get(T).forEach(function(ae){ae.isConnected()&&V(T,L(T,ae))})}},i(H,"cssRules",{configurable:!0,enumerable:!0,get:function(){return q(this),A.get(this).sheet.cssRules}}),i(H,"media",{configurable:!0,enumerable:!0,get:function(){return q(this),A.get(this).sheet.media}}),u.forEach(function(m){H[m]=function(){var y=this;q(y);var T=arguments;$.get(y).push({method:m,args:T}),C.get(y).forEach(function(de){if(de.isConnected()){var re=L(y,de).sheet;re[m].apply(re,T)}});var ae=A.get(y).sheet;return ae[m].apply(ae,T)}}),i(K,Symbol.hasInstance,{configurable:!0,value:v});var ce={childList:!0,subtree:!0},B=new WeakMap;function ee(m){var y=B.get(m);return y||(y=new qo(m),B.set(m,y)),y}function Q(m){i(m.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return ee(this).sheets},set:function(y){ee(this).update(y)}})}function ne(m,y){for(var T=document.createNodeIterator(m,NodeFilter.SHOW_ELEMENT,function(de){return f(de)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ae=void 0;ae=T.nextNode();)y(f(ae))}var te=new WeakMap,se=new WeakMap,at=new WeakMap;function Es(m,y){return y instanceof HTMLStyleElement&&se.get(m).some(function(T){return L(T,m)})}function Uo(m){var y=te.get(m);return y instanceof Document?y.body:y}function Mr(m){var y=document.createDocumentFragment(),T=se.get(m),ae=at.get(m),de=Uo(m);ae.disconnect(),T.forEach(function(re){y.appendChild(L(re,m)||O(re,m))}),de.insertBefore(y,null),ae.observe(de,ce),T.forEach(function(re){V(re,L(re,m))})}function qo(m){var y=this;y.sheets=[],te.set(y,m),se.set(y,[]),at.set(y,new MutationObserver(function(T,ae){if(!document){ae.disconnect();return}T.forEach(function(de){t||n.call(de.addedNodes,function(re){re instanceof Element&&ne(re,function(lt){ee(lt).connect()})}),n.call(de.removedNodes,function(re){re instanceof Element&&(Es(y,re)&&Mr(y),t||ne(re,function(lt){ee(lt).disconnect()}))})})}))}if(qo.prototype={isConnected:function(){var m=te.get(this);return m instanceof Document?m.readyState!=="loading":a(m.host)},connect:function(){var m=Uo(this);at.get(this).observe(m,ce),se.get(this).length>0&&Mr(this),ne(m,function(y){ee(y).connect()})},disconnect:function(){at.get(this).disconnect()},update:function(m){var y=this,T=te.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!m.every(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(m.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");y.sheets=m;var ae=se.get(y),de=d(m),re=h(ae,de);re.forEach(function(lt){c(L(lt,y)),z(lt,y)}),se.set(y,de),y.isConnected()&&de.length>0&&Mr(y)}},window.CSSStyleSheet=K,Q(Document),"ShadowRoot"in window){Q(ShadowRoot);var Jo=Element.prototype,Cs=Jo.attachShadow;Jo.attachShadow=function(y){var T=Cs.call(this,y);return y.mode==="closed"&&r.set(this,T),T}}var Zt=ee(document);Zt.isConnected()?Zt.connect():document.addEventListener("DOMContentLoaded",Zt.connect.bind(Zt))})();let Lt;if(Oo()){const t=await pi();Lt=vo(t.css)}else{Lt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await pi();Lt.replaceSync(r.css)}catch{const e=Da();Lt.replaceSync(e.css)}}class F extends Pa{static styles=[Lt]}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>t??D;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=Symbol.for(""),Ma=t=>{if(t?.r===nn)return t?._$litStatic$},ue=t=>({_$litStatic$:t,r:nn}),gi=new Map,za=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,d=0,h=!1;for(;d<o;){for(a=e[d];d<o&&(n=r[d],(i=Ma(n))!==void 0);)a+=i+e[++d],h=!0;d!==o&&l.push(n),s.push(a),d++}if(d===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=gi.get(c))===void 0&&(s.raw=s,gi.set(c,e=s)),r=l}return t(e,...r)},he=za(w),je=t=>typeof t=="string",Ia=t=>typeof t=="function",fi=new Map,sn="en";function Lo(t){return[...Array.isArray(t)?t:[t],sn]}function No(t,e,r){const o=Lo(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return ar(()=>lr("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(je(e)?new Date(e):e)}function ja(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return No(t,e,o)}function uo(t,e,r){const o=Lo(t);return ar(()=>lr("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function bi(t,e,r,{offset:o=0,...i}){const n=Lo(t),s=e?ar(()=>lr("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):ar(()=>lr("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function ar(t,e){const r=t();let o=fi.get(r);return o||(o=e(),fi.set(r,o)),o}function lr(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const an=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,ln="%__lingui_octothorpe__%",Fa=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s],n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=uo(o,s,a);return l.replace(new RegExp(ln,"g"),d)};return{plural:(s,l)=>{const{offset:a=0}=l,d=bi(o,!1,s,l);return n(s-a,d)},selectordinal:(s,l)=>{const{offset:a=0}=l,d=bi(o,!0,s,l);return n(s-a,d)},select:Va,number:(s,l)=>uo(o,s,i(l)||{style:l}),date:(s,l)=>No(o,s,i(l)||l),time:(s,l)=>ja(o,s,i(l)||l)}},Va=(t,e)=>e[t]??e.other;function Ha(t,e,r){return(o={},i)=>{const n=Fa(e,r,i),s=(a,d=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&d)return h+ln;if(je(c))return h+c;const[f,u,b]=c;let p={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(b).forEach(([E,A])=>{p[E]=s(A,u==="plural"||u==="selectordinal")}):p=b;let v;if(u){const E=n[u];v=E(o[f],p)}else v=o[f];return v==null?h:h+v},""):a,l=s(t);return je(l)&&an.test(l)?So.unraw(l):je(l)?l:l?String(l):""}}var Ua=Object.defineProperty,qa=(t,e,r)=>e in t?Ua(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ja=(t,e,r)=>(qa(t,e+"",r),r);class Wa{constructor(){Ja(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ya=Object.defineProperty,Qa=(t,e,r)=>e in t?Ya(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,We=(t,e,r)=>(Qa(t,typeof e!="symbol"?e+"":e,r),r);class Xa extends Wa{constructor(e){super(),We(this,"_locale",""),We(this,"_locales"),We(this,"_localeData",{}),We(this,"_messages",{}),We(this,"_missing"),We(this,"_messageCompiler"),We(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??sn,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),je(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return Ia(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return je(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),je(a)&&an.test(a)?JSON.parse(`"${a}"`):je(a)?a:Ha(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return No(this._locales||this._locale,e,r)}number(e,r){return uo(this._locales||this._locale,e,r)}}function Za(t={}){return new Xa(t)}const x=Za();var Ka={},Ga=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),el=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),tl=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),rl=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),ol=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),cn=["en","nb","fi","da","sv"],dn="en",il=()=>{var t;let e;switch((t=process==null?void 0:Ka)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},un=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":dn},Hr=t=>cn.find(e=>t===e||t.toLowerCase().includes(e))||un();function nl(){var t;if(typeof window>"u"){const e=il();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=un();return cn.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),dn}}var sl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,al=(t,e,r,o,i)=>{const n=nl(),s=sl(n,t,e,r,o,i);x.load(n,s),x.activate(n)};al(el,Ga,tl,rl,ol);var ll=class extends R{render(){const t=x.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",ll);var cl={},dl=JSON.parse('{"icon.title.close":["Kryss"]}'),ul=JSON.parse('{"icon.title.close":["Cross"]}'),hl=JSON.parse('{"icon.title.close":["Rasti"]}'),pl=JSON.parse('{"icon.title.close":["Kryds"]}'),gl=JSON.parse('{"icon.title.close":["Kryss"]}'),hn=["en","nb","fi","da","sv"],pn="en",fl=()=>{var t;let e;switch((t=process==null?void 0:cl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},gn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":pn},Ur=t=>hn.find(e=>t===e||t.toLowerCase().includes(e))||gn();function bl(){var t;if(typeof window>"u"){const e=fl();return Ur(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=gn();return hn.includes(e)?Ur(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ur(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),pn}}var ml=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,vl=(t,e,r,o,i)=>{const n=bl(),s=ml(n,t,e,r,o,i);x.load(n,s),x.activate(n)};vl(ul,dl,hl,pl,gl);var wl=class extends R{render(){const t=x.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",wl);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cr=Er(class extends Cr{constructor(t){if(super(t),t.type!==Te.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return be}}),yl=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function qt(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:yl(e.toString())})),super.createProperty(e,o)}}}function xl(){return`m${Math.random().toString(36).slice(2)}`}class $l extends qt(F){static properties={ariaLabel:{type:String},clear:{type:Boolean},search:{type:Boolean},label:{type:String}};static styles=[F.styles];get _classBase(){return this.slot==="suffix"?la:ca}get _classes(){return j([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}customElements.get("w-affix")||customElements.define("w-affix",$l);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kl={attribute:!0,type:String,converter:rr,reflect:!1,hasChanged:wo},_l=(t=kl,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function g(t){return(e,r)=>typeof r=="object"?_l(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t,e){return(r,o,i)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return Sl(r,o,{get(){return n(this)}})}}var El={},Cl=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),Al=JSON.parse('{"icon.title.info":["Information circle"]}'),Ol=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),Ll=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Nl=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),fn=["en","nb","fi","da","sv"],bn="en",Tl=()=>{var t;let e;switch((t=process==null?void 0:El)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},mn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":bn},qr=t=>fn.find(e=>t===e||t.toLowerCase().includes(e))||mn();function Pl(){var t;if(typeof window>"u"){const e=Tl();return qr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=mn();return fn.includes(e)?qr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),qr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),bn}}var Bl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Dl=(t,e,r,o,i)=>{const n=Pl(),s=Bl(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Dl(Al,Cl,Ol,Ll,Nl);var Rl=class extends R{render(){const t=x.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",Rl);var Ml={},zl=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Il=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),jl=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),Fl=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),Vl=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),vn=["en","nb","fi","da","sv"],wn="en",Hl=()=>{var t;let e;switch((t=process==null?void 0:Ml)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},yn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":wn},Jr=t=>vn.find(e=>t===e||t.toLowerCase().includes(e))||yn();function Ul(){var t;if(typeof window>"u"){const e=Hl();return Jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=yn();return vn.includes(e)?Jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),wn}}var ql=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Jl=(t,e,r,o,i)=>{const n=Ul(),s=ql(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Jl(Il,zl,jl,Fl,Vl);var Wl=class extends R{render(){const t=x.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",Wl);var Yl={},Ql=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),Xl=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),Zl=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),Kl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),Gl=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),xn=["en","nb","fi","da","sv"],$n="en",ec=()=>{var t;let e;switch((t=process==null?void 0:Yl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},kn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":$n},Wr=t=>xn.find(e=>t===e||t.toLowerCase().includes(e))||kn();function tc(){var t;if(typeof window>"u"){const e=ec();return Wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=kn();return xn.includes(e)?Wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),$n}}var rc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,oc=(t,e,r,o,i)=>{const n=tc(),s=rc(n,t,e,r,o,i);x.load(n,s),x.activate(n)};oc(Xl,Ql,Zl,Kl,Gl);var ic=class extends R{render(){const t=x.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",ic);var nc={},sc=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),ac=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),lc=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),cc=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),dc=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),_n=["en","nb","fi","da","sv"],Sn="en",uc=()=>{var t;let e;switch((t=process==null?void 0:nc)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},En=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Sn},Yr=t=>_n.find(e=>t===e||t.toLowerCase().includes(e))||En();function hc(){var t;if(typeof window>"u"){const e=uc();return Yr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=En();return _n.includes(e)?Yr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Yr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Sn}}var pc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,gc=(t,e,r,o,i)=>{const n=hc(),s=pc(n,t,e,r,o,i);x.load(n,s),x.activate(n)};gc(ac,sc,lc,cc,dc);var fc=class extends R{render(){const t=x.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",fc);const Ee=U`
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
`;U`*, :before, :after {
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
        `;const bc=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var mc=Object.defineProperty,To=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&mc(e,r,i),i};const Ct={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},At={negative:"negative",positive:"positive",warning:"warning",info:"info"};class Or extends R{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!At[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return j([Ct.wrapper,Ct[this.variant]])}get _iconClasses(){const e=Ct[`${this.variant}Icon`];return j([Ct.icon,e])}static{this.styles=[Ee,bc,U`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===At.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===At.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===At.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===At.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${Ct.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}To([g({reflect:!0})],Or.prototype,"variant");To([g({type:Boolean,reflect:!0})],Or.prototype,"show");To([g({reflect:!0})],Or.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",Or);const vc=["top","right","bottom","left"],rt=Math.min,ye=Math.max,dr=Math.round,Oe=t=>({x:t,y:t}),wc={left:"right",right:"left",bottom:"top",top:"bottom"},yc={start:"end",end:"start"};function ho(t,e,r){return ye(t,rt(e,r))}function it(t,e){return typeof t=="function"?t(e):t}function Fe(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function Cn(t){return t==="x"?"y":"x"}function Po(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(Fe(t))?"y":"x"}function Bo(t){return Cn(ot(t))}function xc(t,e,r){r===void 0&&(r=!1);const o=vt(t),i=Bo(t),n=Po(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=ur(s)),[s,ur(s)]}function $c(t){const e=ur(t);return[po(t),e,po(e)]}function po(t){return t.replace(/start|end/g,e=>yc[e])}function kc(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function _c(t,e,r,o){const i=vt(t);let n=kc(Fe(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(po)))),n}function ur(t){return t.replace(/left|right|bottom|top/g,e=>wc[e])}function Sc(t){return{top:0,right:0,bottom:0,left:0,...t}}function An(t){return typeof t!="number"?Sc(t):{top:t,right:t,bottom:t,left:t}}function hr(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function mi(t,e,r){let{reference:o,floating:i}=t;const n=ot(e),s=Bo(e),l=Po(s),a=Fe(e),d=n==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,f=o[l]/2-i[l]/2;let u;switch(a){case"top":u={x:h,y:o.y-i.height};break;case"bottom":u={x:h,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:c};break;case"left":u={x:o.x-i.width,y:c};break;default:u={x:o.x,y:o.y}}switch(vt(e)){case"start":u[s]-=f*(r&&d?-1:1);break;case"end":u[s]+=f*(r&&d?-1:1);break}return u}const Ec=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let d=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=mi(d,o,a),f=o,u={},b=0;for(let p=0;p<l.length;p++){const{name:v,fn:E}=l[p],{x:A,y:C,data:M,reset:$}=await E({x:h,y:c,initialPlacement:o,placement:f,strategy:i,middlewareData:u,rects:d,platform:s,elements:{reference:t,floating:e}});h=A??h,c=C??c,u={...u,[v]:{...u[v],...M}},$&&b<=50&&(b++,typeof $=="object"&&($.placement&&(f=$.placement),$.rects&&(d=$.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):$.rects),{x:h,y:c}=mi(d,f,a)),p=-1)}return{x:h,y:c,placement:f,strategy:i,middlewareData:u}};async function jt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:f=!1,padding:u=0}=it(e,t),b=An(u),v=l[f?c==="floating"?"reference":"floating":c],E=hr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(v)))==null||r?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),M=await(n.isElement==null?void 0:n.isElement(C))?await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1}:{x:1,y:1},$=hr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(E.top-$.top+b.top)/M.y,bottom:($.bottom-E.bottom+b.bottom)/M.y,left:(E.left-$.left+b.left)/M.x,right:($.right-E.right+b.right)/M.x}}const Cc=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:d,padding:h=0}=it(t,e)||{};if(d==null)return{};const c=An(h),f={x:r,y:o},u=Bo(i),b=Po(u),p=await s.getDimensions(d),v=u==="y",E=v?"top":"left",A=v?"bottom":"right",C=v?"clientHeight":"clientWidth",M=n.reference[b]+n.reference[u]-f[u]-n.floating[b],$=f[u]-n.reference[u],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(d));let L=O?O[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(O)))&&(L=l.floating[C]||n.floating[b]);const z=M/2-$/2,V=L/2-p[b]/2-1,q=rt(c[E],V),K=rt(c[A],V),H=q,ce=L-p[b]-K,B=L/2-p[b]/2+z,ee=ho(H,B,ce),Q=!a.arrow&&vt(i)!=null&&B!==ee&&n.reference[b]/2-(B<H?q:K)-p[b]/2<0,ne=Q?B<H?B-H:B-ce:0;return{[u]:f[u]+ne,data:{[u]:ee,centerOffset:B-ee-ne,...Q&&{alignmentOffset:ne}},reset:Q}}}),Ac=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:d}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...v}=it(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const E=Fe(i),A=ot(l),C=Fe(l)===l,M=await(a.isRTL==null?void 0:a.isRTL(d.floating)),$=f||(C||!p?[ur(l)]:$c(l)),O=b!=="none";!f&&O&&$.push(..._c(l,p,b,M));const L=[l,...$],z=await jt(e,v),V=[];let q=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&V.push(z[E]),c){const B=xc(i,s,M);V.push(z[B[0]],z[B[1]])}if(q=[...q,{placement:i,overflows:V}],!V.every(B=>B<=0)){var K,H;const B=(((K=n.flip)==null?void 0:K.index)||0)+1,ee=L[B];if(ee)return{data:{index:B,overflows:q},reset:{placement:ee}};let Q=(H=q.filter(ne=>ne.overflows[0]<=0).sort((ne,te)=>ne.overflows[1]-te.overflows[1])[0])==null?void 0:H.placement;if(!Q)switch(u){case"bestFit":{var ce;const ne=(ce=q.filter(te=>{if(O){const se=ot(te.placement);return se===A||se==="y"}return!0}).map(te=>[te.placement,te.overflows.filter(se=>se>0).reduce((se,at)=>se+at,0)]).sort((te,se)=>te[1]-se[1])[0])==null?void 0:ce[0];ne&&(Q=ne);break}case"initialPlacement":Q=l;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};function vi(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function wi(t){return vc.some(e=>t[e]>=0)}const Oc=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=it(t,e);switch(o){case"referenceHidden":{const n=await jt(e,{...i,elementContext:"reference"}),s=vi(n,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:wi(s)}}}case"escaped":{const n=await jt(e,{...i,altBoundary:!0}),s=vi(n,r.floating);return{data:{escapedOffsets:s,escaped:wi(s)}}}default:return{}}}}};async function Lc(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Fe(r),l=vt(r),a=ot(r)==="y",d=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,c=it(e,t);let{mainAxis:f,crossAxis:u,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof b=="number"&&(u=l==="end"?b*-1:b),a?{x:u*h,y:f*d}:{x:f*d,y:u*h}}const Nc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await Lc(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},Tc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:E,y:A}=v;return{x:E,y:A}}},...a}=it(t,e),d={x:r,y:o},h=await jt(e,a),c=ot(Fe(i)),f=Cn(c);let u=d[f],b=d[c];if(n){const v=f==="y"?"top":"left",E=f==="y"?"bottom":"right",A=u+h[v],C=u-h[E];u=ho(A,u,C)}if(s){const v=c==="y"?"top":"left",E=c==="y"?"bottom":"right",A=b+h[v],C=b-h[E];b=ho(A,b,C)}const p=l.fn({...e,[f]:u,[c]:b});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[f]:n,[c]:s}}}}}},Pc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...d}=it(t,e),h=await jt(e,d),c=Fe(i),f=vt(i),u=ot(i)==="y",{width:b,height:p}=n.floating;let v,E;c==="top"||c==="bottom"?(v=c,E=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(E=c,v=f==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=b-h.left-h.right,M=rt(p-h[v],A),$=rt(b-h[E],C),O=!e.middlewareData.shift;let L=M,z=$;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!f){const q=ye(h.left,0),K=ye(h.right,0),H=ye(h.top,0),ce=ye(h.bottom,0);u?z=b-2*(q!==0||K!==0?q+K:ye(h.left,h.right)):L=p-2*(H!==0||ce!==0?H+ce:ye(h.top,h.bottom))}await a({...e,availableWidth:z,availableHeight:L});const V=await s.getDimensions(l.floating);return b!==V.width||p!==V.height?{reset:{rects:!0}}:{}}}};function Lr(){return typeof window<"u"}function wt(t){return On(t)?(t.nodeName||"").toLowerCase():"#document"}function me(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Be(t){var e;return(e=(On(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function On(t){return Lr()?t instanceof Node||t instanceof me(t).Node:!1}function ke(t){return Lr()?t instanceof Element||t instanceof me(t).Element:!1}function Le(t){return Lr()?t instanceof HTMLElement||t instanceof me(t).HTMLElement:!1}function yi(t){return!Lr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof me(t).ShadowRoot}function Wt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=_e(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Bc(t){return["table","td","th"].includes(wt(t))}function Nr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Do(t){const e=Ro(),r=ke(t)?_e(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Dc(t){let e=Ve(t);for(;Le(e)&&!bt(e);){if(Do(e))return e;if(Nr(e))return null;e=Ve(e)}return null}function Ro(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function bt(t){return["html","body","#document"].includes(wt(t))}function _e(t){return me(t).getComputedStyle(t)}function Tr(t){return ke(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ve(t){if(wt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yi(t)&&t.host||Be(t);return yi(e)?e.host:e}function Ln(t){const e=Ve(t);return bt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Le(e)&&Wt(e)?e:Ln(e)}function go(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=Ln(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=me(i);if(n){const l=fo(s);return e.concat(s,s.visualViewport||[],Wt(i)?i:[],l&&r?go(l):[])}return e.concat(i,go(i,[],r))}function fo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Nn(t){const e=_e(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=Le(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,l=dr(r)!==n||dr(o)!==s;return l&&(r=n,o=s),{width:r,height:o,$:l}}function Tn(t){return ke(t)?t:t.contextElement}function pt(t){const e=Tn(t);if(!Le(e))return Oe(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=Nn(e);let s=(n?dr(r.width):r.width)/o,l=(n?dr(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Rc=Oe(0);function Pn(t){const e=me(t);return!Ro()||!e.visualViewport?Rc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Mc(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==me(t)?!1:e}function Ft(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=Tn(t);let s=Oe(1);e&&(o?ke(o)&&(s=pt(o)):s=pt(t));const l=Mc(n,r,o)?Pn(n):Oe(0);let a=(i.left+l.x)/s.x,d=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(n){const f=me(n),u=o&&ke(o)?me(o):o;let b=f,p=fo(b);for(;p&&o&&u!==b;){const v=pt(p),E=p.getBoundingClientRect(),A=_e(p),C=E.left+(p.clientLeft+parseFloat(A.paddingLeft))*v.x,M=E.top+(p.clientTop+parseFloat(A.paddingTop))*v.y;a*=v.x,d*=v.y,h*=v.x,c*=v.y,a+=C,d+=M,b=me(p),p=fo(b)}}return hr({width:h,height:c,x:a,y:d})}function Mo(t,e){const r=Tr(t).scrollLeft;return e?e.left+r:Ft(Be(t)).left+r}function Bn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Mo(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function zc(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=Be(o),l=e?Nr(e.floating):!1;if(o===s||l&&n)return r;let a={scrollLeft:0,scrollTop:0},d=Oe(1);const h=Oe(0),c=Le(o);if((c||!c&&!n)&&((wt(o)!=="body"||Wt(s))&&(a=Tr(o)),Le(o))){const u=Ft(o);d=pt(o),h.x=u.x+o.clientLeft,h.y=u.y+o.clientTop}const f=s&&!c&&!n?Bn(s,a,!0):Oe(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-a.scrollLeft*d.x+h.x+f.x,y:r.y*d.y-a.scrollTop*d.y+h.y+f.y}}function Ic(t){return Array.from(t.getClientRects())}function jc(t){const e=Be(t),r=Tr(t),o=t.ownerDocument.body,i=ye(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=ye(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Mo(t);const l=-r.scrollTop;return _e(o).direction==="rtl"&&(s+=ye(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:l}}function Fc(t,e){const r=me(t),o=Be(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const d=Ro();(!d||d&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Vc(t,e){const r=Ft(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=Le(t)?pt(t):Oe(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,d=o*n.y;return{width:s,height:l,x:a,y:d}}function xi(t,e,r){let o;if(e==="viewport")o=Fc(t,r);else if(e==="document")o=jc(Be(t));else if(ke(e))o=Vc(e,r);else{const i=Pn(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return hr(o)}function Dn(t,e){const r=Ve(t);return r===e||!ke(r)||bt(r)?!1:_e(r).position==="fixed"||Dn(r,e)}function Hc(t,e){const r=e.get(t);if(r)return r;let o=go(t,[],!1).filter(l=>ke(l)&&wt(l)!=="body"),i=null;const n=_e(t).position==="fixed";let s=n?Ve(t):t;for(;ke(s)&&!bt(s);){const l=_e(s),a=Do(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Wt(s)&&!a&&Dn(t,s))?o=o.filter(h=>h!==s):i=l,s=Ve(s)}return e.set(t,o),o}function Uc(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?Nr(e)?[]:Hc(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((d,h)=>{const c=xi(e,h,i);return d.top=ye(c.top,d.top),d.right=rt(c.right,d.right),d.bottom=rt(c.bottom,d.bottom),d.left=ye(c.left,d.left),d},xi(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function qc(t){const{width:e,height:r}=Nn(t);return{width:e,height:r}}function Jc(t,e,r){const o=Le(e),i=Be(e),n=r==="fixed",s=Ft(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=Oe(0);if(o||!o&&!n)if((wt(e)!=="body"||Wt(i))&&(l=Tr(e)),o){const f=Ft(e,!0,n,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=Mo(i));const d=i&&!o&&!n?Bn(i,l):Oe(0),h=s.left+l.scrollLeft-a.x-d.x,c=s.top+l.scrollTop-a.y-d.y;return{x:h,y:c,width:s.width,height:s.height}}function Qr(t){return _e(t).position==="static"}function $i(t,e){if(!Le(t)||_e(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Be(t)===r&&(r=r.ownerDocument.body),r}function Rn(t,e){const r=me(t);if(Nr(t))return r;if(!Le(t)){let i=Ve(t);for(;i&&!bt(i);){if(ke(i)&&!Qr(i))return i;i=Ve(i)}return r}let o=$i(t,e);for(;o&&Bc(o)&&Qr(o);)o=$i(o,e);return o&&bt(o)&&Qr(o)&&!Do(o)?r:o||Dc(t)||r}const Wc=async function(t){const e=this.getOffsetParent||Rn,r=this.getDimensions,o=await r(t.floating);return{reference:Jc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Yc(t){return _e(t).direction==="rtl"}const Qc={convertOffsetParentRelativeRectToViewportRelativeRect:zc,getDocumentElement:Be,getClippingRect:Uc,getOffsetParent:Rn,getElementRects:Wc,getClientRects:Ic,getDimensions:qc,getScale:pt,isElement:ke,isRTL:Yc},Xc=Nc,Zc=Tc,Kc=Ac,Gc=Pc,ed=Oc,td=Cc,rd=(t,e,r)=>{const o=new Map,i={platform:Qc,...r},n={...i.platform,_c:o};return Ec(t,e,{...i,platform:n})},pr="top-start",gr="top",fr="top-end",br="right-start",mr="right",vr="right-end",wr="bottom-start",Vt="bottom",yr="bottom-end",xr="left-start",$r="left",kr="left-end",ki=[pr,gr,fr,br,mr,vr,wr,Vt,yr,xr,$r,kr],ht={[pr]:wr,[gr]:Vt,[fr]:yr,[wr]:pr,[Vt]:gr,[yr]:fr,[xr]:br,[$r]:mr,[kr]:vr,[br]:xr,[mr]:$r,[vr]:kr},od={[xr]:-45,[$r]:-45,[kr]:-45,[pr]:45,[gr]:45,[fr]:45,[br]:135,[mr]:135,[vr]:135,[wr]:-135,[Vt]:-135,[yr]:-135},Mn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},id=t=>t.split("-")[0],nd=t=>ht[id(t)],zn=t=>ht[t],sd=t=>od[zn(t)],ad=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${Mn(nd(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},_i=8,Kt=24;async function Si(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return rd(e,r,{placement:t?.directionName??Vt,middleware:[Xc({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Kc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Zc({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&td({element:t?.arrowEl}),ed(),Gc({apply(){Object.assign(r.style,{paddingRight:`${_i}px`,paddingLeft:`${_i}px`})}})]}).then(({x:o,y:i,middlewareData:n,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),n?.hide&&!t?.isCallout){const{referenceHidden:l}=n.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(n?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:d}=n.arrow,h=window.getComputedStyle(r).direction==="rtl",c=zn(s).split("-")[1];let f="",u="",b="",p="";if(c==="start"){const v=typeof a=="number"?`calc(${Kt}px - ${l.offsetWidth/2}px)`:"";f=typeof d=="number"?`calc(${Kt}px - ${l.offsetWidth/2}px)`:"",u=h?v:"",p=h?"":v}else if(c==="end"){const v=typeof a=="number"?`calc(${Kt}px - ${l.offsetWidth/2}px)`:"";u=h?"":v,p=h?v:"",b=typeof d=="number"?`calc(${Kt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",f=typeof d=="number"?`${d}px`:"";Object.assign(l.style,{top:f,right:u,bottom:b,left:p}),ad(l,sd(s),s)}}),t}var ld={};const cd=["en","nb","fi","da","sv"],In="en",Ei=t=>cd.find(e=>t===e||t.toLowerCase().includes(e))||In;function dd(){if(typeof window>"u"){const t=ld.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Ei(t)}try{const t=document.documentElement.lang;return Ei(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),In}}const ud=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,De=(t,e,r,o,i)=>{const n=dd(),s=ud(n,t,e,r,o,i);x.load(n,s),x.activate(n)},hd=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),pd=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),gd=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),fd=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),bd=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class md extends qt(F){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[F.styles,U`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),De(pd,fd,gd,hd,bd),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(ht).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(ht))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>ki.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(ki)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?Si(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return ht[this._actualDirection]}get _arrowClasses(){return j([ct.arrowBase,this._activeVariantClasses.arrow,ct[`arrowDirection${Mn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:ct[r],arrow:ct[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return j([ct.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return x._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${ct.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},Si(this.attentionState)}pointingAtDirection(){switch(ht[this._actualDirection]){case"top-start":case"top":case"top-end":return x._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return x._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return x._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return x._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return x._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return x._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return x._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return x._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=xl());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${W(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?w`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:D}
              </div>
            `:w`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:D}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",md);class vd extends F{static properties={variant:{type:"neutral"|"info"|"positive"|"warning"|"negative"|"disabled"|"price"},position:{type:"top-left"|"top-right"|"bottom-right"|"bottom-left"}};static styles=[F.styles];constructor(){super(),this.variant="neutral"}get _class(){return j([qe.base,qe[this.variant],!!this.position&&qe.positionBase,this.position==="top-left"&&qe.positionTL,this.position==="top-right"&&qe.positionTR,this.position==="bottom-right"&&qe.positionBR,this.position==="bottom-left"&&qe.positionBL])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-badge")||customElements.define("w-badge",vd);class wd extends F{static properties={bleed:{type:Boolean},bordered:{type:Boolean},info:{type:Boolean},neutral:{type:Boolean},role:{type:String}};static styles=[F.styles,U`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0 !important;
      }
    `];get _class(){return j([_t.base,this.bleed&&_t.bleed,this.info&&_t.info,this.neutral&&_t.neutral,this.bordered&&_t.bordered])}get _optOutRoleWithDefault(){return this.role===""?D:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}customElements.get("w-box")||customElements.define("w-box",wd);function yd(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const xd=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),$d=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),kd=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),_d=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Sd=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Ed=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var Cd=Object.defineProperty,Ad=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Cd(e,r,i),i};const ut={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Od=w`<span class=${ut.separator}>/</span>`;class jn extends R{static{this.styles=[Ee,Ed]}constructor(){super(),De($d,_d,kd,xd,Sd),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const n=i===this.children.length-1;return w`<span class=${ut.text} aria-current=${n?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?ut.link:ut.text),o});this._children=yd(r,Od)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ut.a11y}>${this.ariaLabel}</h2>
        <div class=${ut.wrapper}>${this._children}</div>
      </nav>
    `}}Ad([g({attribute:"aria-label",type:String})],jn.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",jn);var I=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},X=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function zo(t){var e,r,o,i,n,s,l,a,d,h,c,f,u,b,p,v,E,A;class C extends t{constructor(...$){var O,L,z;super(...$),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),n.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),d.set(this,()=>{X(this,i,!0,"f"),X(this,r,!0,"f"),I(this,e,"m",p).call(this)}),h.set(this,()=>{X(this,r,!1,"f"),I(this,e,"m",v).call(this,this.shouldFormValueUpdate()?I(this,a,"f"):""),!this.validity.valid&&I(this,i,"f")&&X(this,o,!0,"f");const V=I(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(V?this.internals.validationMessage:"")}),c.set(this,()=>{var V;I(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),X(this,l,!1,"f")),X(this,i,!0,"f"),X(this,o,!0,"f"),I(this,e,"m",p).call(this),(V=this===null||this===void 0?void 0:this.validationMessageCallback)===null||V===void 0||V.call(this,this.showError?this.internals.validationMessage:"")}),f.set(this,void 0),u.set(this,!1),b.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",I(this,d,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",I(this,h,"f")),(z=this.addEventListener)===null||z===void 0||z.call(this,"invalid",I(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const $=this.validators.map(z=>z.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...$])]}static getValidator($){return this.validators.find(O=>O.attribute===$)||null}static getValidators($){return this.validators.filter(O=>{var L;if(O.attribute===$||!((L=O.attribute)===null||L===void 0)&&L.includes($))return!0})}get form(){return this.internals.form}get showError(){return I(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback($,O,L){var z;(z=super.attributeChangedCallback)===null||z===void 0||z.call(this,$,O,L);const q=this.constructor.getValidators($);q?.length&&this.validationTarget&&this.setValue(I(this,a,"f"))}setValue($){var O;X(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),X(this,a,$,"f");const z=this.shouldFormValueUpdate()?$:null;this.internals.setFormValue(z),I(this,e,"m",v).call(this,z),this.valueChangedCallback&&this.valueChangedCallback(z),I(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise($=>$(I(this,b,"f")))}formResetCallback(){var $,O;X(this,i,!1,"f"),X(this,o,!1,"f"),I(this,e,"m",p).call(this),($=this.resetFormControl)===null||$===void 0||$.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,I(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,d=new WeakMap,h=new WeakMap,c=new WeakMap,f=new WeakMap,u=new WeakMap,b=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const $=I(this,o,"f")||I(this,i,"f")&&!this.validity.valid&&!I(this,r,"f");return $&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),$},v=function($){const O=this.constructor,L={},z=O.validators,V=[],q=z.some(B=>B.isValid instanceof Promise);I(this,u,"f")||(X(this,b,new Promise(B=>{X(this,f,B,"f")}),"f"),X(this,u,!0,"f")),I(this,n,"f")&&(I(this,n,"f").abort(),X(this,s,I(this,n,"f"),"f"));const K=new AbortController;X(this,n,K,"f");let H,ce=!1;z.length&&(z.forEach(B=>{const ee=B.key||"customError",Q=B.isValid(this,$,K.signal);Q instanceof Promise?(V.push(Q),Q.then(te=>{te!=null&&(L[ee]=!te,H=I(this,e,"m",A).call(this,B,$),I(this,e,"m",E).call(this,L,H))})):(L[ee]=!Q,this.validity[ee]!==!Q&&(ce=!0),!Q&&!H&&(H=I(this,e,"m",A).call(this,B,$)))}),Promise.allSettled(V).then(()=>{var B;K?.signal.aborted||(X(this,u,!1,"f"),(B=I(this,f,"f"))===null||B===void 0||B.call(this))}),(ce||!q)&&I(this,e,"m",E).call(this,L,H))},E=function($,O){if(this.validationTarget)this.internals.setValidity($,O,this.validationTarget),X(this,l,!1,"f");else{if(this.internals.setValidity($,O),this.internals.validity.valid)return;X(this,l,!0,"f")}},A=function($,O){if(this.validityCallback){const L=this.validityCallback($.key||"customError");if(L)return L}return $.message instanceof Function?$.message(this,O):$.message},C}const Ld=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),Nd=JSON.parse('{"button.aria.loading":["Loading..."]}'),Td=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Pd=JSON.parse('{"button.aria.loading":["Laster..."]}'),Bd=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Dd=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var Rd=Object.defineProperty,ve=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Rd(e,r,i),i};const Ci=["primary","secondary","negative","utility","pill","link"],Ie="font-bold focusable justify-center transition-colors ease-in-out",J={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},P={primary:`border-0 rounded-8 ${Ie}`,secondary:`border-2 rounded-8 ${Ie}`,utility:`border rounded-4 ${Ie}`,negative:`border-0 rounded-8 ${Ie}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Ie}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${J.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},k={inProgress:`border-transparent animate-inprogress pointer-events-none ${J.loading}`,quiet:`border-0 rounded-8 ${Ie}`,utilityQuiet:`border-0 rounded-4 ${Ie}`,negativeQuiet:`border-0 rounded-8 ${Ie}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${J.disabled}`},N={secondary:`${_.medium} ${S.medium} ${P.secondary} ${J.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${P.secondary} ${J.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${P.secondary} ${k.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${P.secondary} ${J.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${P.secondary} ${k.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${k.quiet} ${J.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${k.quiet} ${k.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${k.quiet} ${J.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${P.secondary} ${k.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${P.secondary} ${k.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${k.quiet} ${k.inProgress}`,primary:`${_.large} ${S.medium} ${P.primary} ${J.primary}`,primaryDisabled:`${_.large} ${S.medium} ${k.isDisabled} ${P.primary}`,primarySmall:`${_.small} ${S.xsmall} ${P.primary} ${J.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${k.isDisabled} ${P.primary} `,primaryQuiet:`${_.large} ${S.medium} ${k.quiet} ${J.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${k.quiet} ${k.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${k.quiet} ${J.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${k.quiet} ${k.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${k.inProgress} ${P.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${k.inProgress} ${P.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${k.quiet} ${k.inProgress} ${P.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${k.quiet} ${k.inProgress}`,utility:`${_.utility} ${S.medium} ${P.utility} ${J.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${P.utility} ${k.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${k.utilityQuiet} ${J.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${k.utilityQuiet} ${k.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${P.utility} ${J.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${J.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${k.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${P.utility} ${k.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${P.utility} ${k.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${k.inProgress} ${k.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${k.inProgress} ${k.utilityQuiet}`,negative:`${_.large} ${S.medium} ${P.negative} ${J.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${P.negative} ${k.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${k.negativeQuiet} ${J.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${k.negativeQuiet}${k.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${P.negative} ${J.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${P.negative} ${k.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${J.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${P.negative} ${k.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${k.inProgress} ${P.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${k.negativeQuiet} ${P.negative} ${k.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.inProgress}`,pill:`${_.pill} ${S.medium} ${P.pill} ${J.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${P.pill} ${J.pill}`,pillLoading:`${_.pill} ${S.medium} ${P.pill} ${k.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${P.pill} ${k.inProgress}`,link:`${_.link} ${S.medium} ${P.link}`,linkSmall:`${_.link} ${S.xsmall} ${P.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class pe extends zo(qt(R)){constructor(){super(),this.type="button",De(Nd,Pd,Td,Ld,Bd),this.variant="secondary",this.ariaValueTextLoading=x._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[Ee,Dd]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!Ci.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${Ci.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.primary,this.small&&!this.quiet&&!this.loading&&N.primarySmall,this.small&&this.quiet&&!this.loading&&N.primarySmallQuiet,this.small&&this.loading&&(this.quiet?N.primarySmallQuietLoading:N.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&N.primaryQuiet,!this.small&&this.loading&&(this.quiet?N.primaryQuietLoading:N.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.secondary,this.small&&!this.quiet&&!this.loading&&N.secondarySmall,this.small&&this.loading&&(this.quiet?N.secondarySmallQuietLoading:N.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&N.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&N.secondaryQuiet,!this.small&&this.loading&&(this.quiet?N.secondaryQuietLoading:N.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.utility,this.small&&!this.quiet&&!this.loading&&N.utilitySmall,this.small&&this.quiet&&!this.loading&&N.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?N.utilitySmallQuietLoading:N.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&N.utilityQuiet,!this.small&&this.loading&&(this.quiet?N.utilityQuietLoading:N.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.negative,this.small&&!this.quiet&&!this.loading&&N.negativeSmall,this.small&&this.quiet&&!this.loading&&N.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?N.negativeSmallQuietLoading:N.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&N.negativeQuiet,!this.small&&this.loading&&(this.quiet?N.negativeQuietLoading:N.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?N.pillSmall:N.pill),this.loading&&(this.small?N.pillSmallLoading:N.pillLoading)]}get _linkClasses(){return[this.small?N.linkSmall:N.link]}get _classes(){return j(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&N.linkAsButton,this.fullWidth?N.fullWidth:N.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}ve([g({reflect:!0})],pe.prototype,"type");ve([g({type:Boolean,reflect:!0})],pe.prototype,"autofocus");ve([g({reflect:!0})],pe.prototype,"variant");ve([g({type:Boolean,reflect:!0})],pe.prototype,"quiet");ve([g({type:Boolean,reflect:!0})],pe.prototype,"small");ve([g({type:Boolean,reflect:!0})],pe.prototype,"loading");ve([g({reflect:!0})],pe.prototype,"href");ve([g({reflect:!0})],pe.prototype,"target");ve([g({reflect:!0})],pe.prototype,"rel");ve([g({type:Boolean,reflect:!0})],pe.prototype,"fullWidth");ve([g({reflect:!0})],pe.prototype,"buttonClass");ve([g({reflect:!0})],pe.prototype,"name");ve([g({reflect:!0})],pe.prototype,"value");customElements.get("w-button")||customElements.define("w-button",pe);const Md=JSON.parse('{"card.button.text":["Vælg"]}'),zd=JSON.parse('{"card.button.text":["Select"]}'),Id=JSON.parse('{"card.button.text":["Valitse"]}'),jd=JSON.parse('{"card.button.text":["Velg"]}'),Fd=JSON.parse('{"card.button.text":["Välj"]}'),Vd=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Hd=Object.defineProperty,Io=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Hd(e,r,i),i};const Ae={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},Ai={ENTER:"Enter",SPACE:" "};class Pr extends R{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,De(zd,jd,Id,Md,Fd),this.buttonText=x._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[Ee,Vd,U`
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
    `]}get _containerClasses(){return j([Ae.base,this.flat?Ae.flat:Ae.shadow,this.selected&&!this.flat&&Ae.selected,this.selected&&this.flat?Ae.flatSelected:Ae.flatUnselected])}get _outlineClasses(){return j([Ae.outline,this.selected?Ae.outlineSelected:Ae.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${Ae.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===Ai.ENTER||e.key===Ai.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${W(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Io([g({type:Boolean,reflect:!0})],Pr.prototype,"selected");Io([g({type:Boolean})],Pr.prototype,"flat");Io([g({type:Boolean})],Pr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",Pr);var Ud=Object.defineProperty,Br=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Ud(e,r,i),i};class Yt extends R{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=cr({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[Ee,U`
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
    `]}}Br([g({type:String})],Yt.prototype,"type");Br([g({type:Boolean,reflect:!0})],Yt.prototype,"checked");Br([g({type:Boolean,reflect:!0})],Yt.prototype,"indeterminate");Br([g({type:Boolean,reflect:!0})],Yt.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",Yt);var qd={},Jd=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),Wd=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),Yd=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),Qd=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),Xd=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),Fn=["en","nb","fi","da","sv"],Vn="en",Zd=()=>{var t;let e;switch((t=process==null?void 0:qd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Hn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Vn},Xr=t=>Fn.find(e=>t===e||t.toLowerCase().includes(e))||Hn();function Kd(){var t;if(typeof window>"u"){const e=Zd();return Xr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Hn();return Fn.includes(e)?Xr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Xr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Vn}}var Gd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,eu=(t,e,r,o,i)=>{const n=Kd(),s=Gd(n,t,e,r,o,i);x.load(n,s),x.activate(n)};eu(Wd,Jd,Yd,Qd,Xd);var tu=class extends R{render(){const t=x.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",tu);var ru={},ou=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),iu=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),nu=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),su=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),au=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),Un=["en","nb","fi","da","sv"],qn="en",lu=()=>{var t;let e;switch((t=process==null?void 0:ru)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Jn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":qn},Zr=t=>Un.find(e=>t===e||t.toLowerCase().includes(e))||Jn();function cu(){var t;if(typeof window>"u"){const e=lu();return Zr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Jn();return Un.includes(e)?Zr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Zr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),qn}}var du=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,uu=(t,e,r,o,i)=>{const n=cu(),s=du(n,t,e,r,o,i);x.load(n,s),x.activate(n)};uu(iu,ou,nu,su,au);var hu=class extends R{render(){const t=x.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",hu);const pu=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var gu=Object.defineProperty,Ce=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&gu(e,r,i),i};const fu={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},oe={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class xe extends R{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[Ee,pu,U`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return j([oe.wrapper,this.box&&oe.box,this.bleed&&oe.bleed])}get#t(){return j(this.buttonClass,[oe.button,this.box&&oe.buttonBox])}get#i(){return j([oe.chevron,!this.box&&oe.chevronNonBox])}get#r(){const e=j([oe.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&oe.elementsChevronCollapse]),r=j([oe.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&oe.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return j(this.contentClass,[this.box&&fu.base,this._hasTitle&&this.box&&oe.contentWithTitle])}get#n(){return j([oe.expansion,!this.expanded&&oe.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#n}" aria-hidden=${W(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}Ce([g({type:Boolean,reflect:!0})],xe.prototype,"expanded");Ce([g({type:String})],xe.prototype,"title");Ce([g({type:Boolean})],xe.prototype,"box");Ce([g({type:Boolean})],xe.prototype,"bleed");Ce([g({attribute:"button-class",type:String})],xe.prototype,"buttonClass");Ce([g({attribute:"content-class",type:String})],xe.prototype,"contentClass");Ce([g({attribute:"no-chevron",type:Boolean})],xe.prototype,"noChevron");Ce([g({type:Boolean})],xe.prototype,"animated");Ce([g({attribute:"heading-level",type:Number})],xe.prototype,"headingLevel");Ce([g({type:Boolean,state:!0})],xe.prototype,"_hasTitle");Ce([g({type:Boolean,state:!0})],xe.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",xe);const Wn=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Yn=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class bu extends Wn(Yn(R)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[Ee,U`
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
    `]}}const mu=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),vu=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],wu={easing:"ease",duration:300};let Qn=!1;const yu=typeof window<"u";if(yu){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Qn=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class xu{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||vu,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(mu(this.first,this.last))}get defaults(){return wu}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Qn?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var $u={},ku=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),_u=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),Su=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),Eu=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),Cu=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),Xn=["en","nb","fi","da","sv"],Zn="en",Au=()=>{var t;let e;switch((t=process==null?void 0:$u)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Kn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Zn},Kr=t=>Xn.find(e=>t===e||t.toLowerCase().includes(e))||Kn();function Ou(){var t;if(typeof window>"u"){const e=Au();return Kr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Kn();return Xn.includes(e)?Kr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Kr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Zn}}var Lu=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Nu=(t,e,r,o,i)=>{const n=Ou(),s=Lu(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Nu(_u,ku,Su,Eu,Cu);var Tu=class extends R{render(){const t=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Tu);const Pu=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Bu=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Du=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Ru=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Mu=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var zu=Object.defineProperty,Qt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&zu(e,r,i),i};class yt extends Wn(R){constructor(){super(),this._hasTopContent=!1,De(Bu,Ru,Du,Pu,Mu)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new xu(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${x._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:D}get closeButton(){return this.noClose?D:w`<button
      type="button"
      aria-label="${x._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[Ee,U`
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
    `]}}Qt([g({type:String})],yt.prototype,"title");Qt([g({type:Boolean})],yt.prototype,"back");Qt([g({type:Boolean,attribute:"no-close"})],yt.prototype,"noClose");Qt([Jt()],yt.prototype,"_hasTopContent");Qt([mt(".title-el")],yt.prototype,"titleEl");let Pt=[];const jo={documentElement:{},body:{}},Iu=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Gn=t=>{t.touches.length>1||t.preventDefault?.()},ju=t=>([e,r])=>{jo[t][e]=document[t].style[e],document[t].style[e]=r},Fu=()=>Object.entries(Iu).forEach(([t,e])=>{Object.entries(e).forEach(ju(t))}),Vu=t=>([e,r])=>{document[t].style[e]=jo[t][e]},Hu=()=>Object.entries(jo).forEach(([t,e])=>{Object.entries(e).forEach(Vu(t))}),Uu=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function qu(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||Uu(t)&&i<0?Gn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Ju(t){t.ontouchstart=null,t.ontouchmove=null}const es=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Gn,{passive:!1}),Wu=es(!0),Yu=es();function Qu(t){if(!t)throw Error("Could not run setup, an element must be provided");Pt.some(e=>e===t)||(Pt.length||(Fu(),Wu()),qu(t),Pt.push(t))}function Xu(){Pt.forEach(Ju),Yu(),Hu(),Pt=[]}var Zu=Object.defineProperty,xt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Zu(e,r,i),i};class nt extends Yn(R){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Qu(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Xu(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[Ee,U`
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
    `]}}xt([g({type:Boolean})],nt.prototype,"show");xt([g({type:String,attribute:"content-id"})],nt.prototype,"contentId");xt([g({type:Boolean,attribute:"ignore-backdrop-clicks"})],nt.prototype,"ignoreBackdropClicks");xt([mt(".dialog-el")],nt.prototype,"dialogEl");xt([mt(".dialog-inner-el")],nt.prototype,"dialogInnerEl");xt([mt(".content-el")],nt.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",nt),customElements.define("w-modal-header",yt),customElements.define("w-modal-footer",bu));var Ku={},Gu=JSON.parse('{"icon.title.chevron-double-left":["Dobbel pil til venstre"]}'),eh=JSON.parse('{"icon.title.chevron-double-left":["Double leftward arrow"]}'),th=JSON.parse('{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]}'),rh=JSON.parse('{"icon.title.chevron-double-left":["Dobbelt venstrepil"]}'),oh=JSON.parse('{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}'),ts=["en","nb","fi","da","sv"],rs="en",ih=()=>{var t;let e;switch((t=process==null?void 0:Ku)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},os=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":rs},Gr=t=>ts.find(e=>t===e||t.toLowerCase().includes(e))||os();function nh(){var t;if(typeof window>"u"){const e=ih();return Gr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=os();return ts.includes(e)?Gr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Gr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),rs}}var sh=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ah=(t,e,r,o,i)=>{const n=nh(),s=sh(n,t,e,r,o,i);x.load(n,s),x.activate(n)};ah(eh,Gu,th,rh,oh);var lh=class extends R{render(){const t=x.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",lh);var ch={},dh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),uh=JSON.parse('{"icon.title.chevron-left":["Leftward arrow"]}'),hh=JSON.parse('{"icon.title.chevron-left":["Nuoli vasemmalle"]}'),ph=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),gh=JSON.parse('{"icon.title.chevron-left":["Pil vänster"]}'),is=["en","nb","fi","da","sv"],ns="en",fh=()=>{var t;let e;switch((t=process==null?void 0:ch)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ss=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ns},eo=t=>is.find(e=>t===e||t.toLowerCase().includes(e))||ss();function bh(){var t;if(typeof window>"u"){const e=fh();return eo(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ss();return is.includes(e)?eo(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),eo(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ns}}var mh=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,vh=(t,e,r,o,i)=>{const n=bh(),s=mh(n,t,e,r,o,i);x.load(n,s),x.activate(n)};vh(uh,dh,hh,ph,gh);var wh=class extends R{render(){const t=x.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",wh);var yh={},xh=JSON.parse('{"icon.title.chevron-right":["Pil til høyre"]}'),$h=JSON.parse('{"icon.title.chevron-right":["Rightward arrow"]}'),kh=JSON.parse('{"icon.title.chevron-right":["Nuoli oikealle"]}'),_h=JSON.parse('{"icon.title.chevron-right":["Pil til højre"]}'),Sh=JSON.parse('{"icon.title.chevron-right":["Pil höger"]}'),as=["en","nb","fi","da","sv"],ls="en",Eh=()=>{var t;let e;switch((t=process==null?void 0:yh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},cs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ls},to=t=>as.find(e=>t===e||t.toLowerCase().includes(e))||cs();function Ch(){var t;if(typeof window>"u"){const e=Eh();return to(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=cs();return as.includes(e)?to(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),to(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ls}}var Ah=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Oh=(t,e,r,o,i)=>{const n=Ch(),s=Ah(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Oh($h,xh,kh,_h,Sh);var Lh=class extends R{render(){const t=x.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",Lh);const Nh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Th=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),Ph=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),Bh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Dh=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),Rh=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}}`;var Mh=Object.defineProperty,Dr=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Mh(e,r,i),i};const ro=x._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),Gt="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class Xt extends R{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,De(Th,Bh,Ph,Nh,Dh)}static{this.styles=[Ee,Rh]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(i,n)=>n+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(i,n)=>r+n)}render(){const e=this.visiblePageNumbers;return w`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${x._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?w`<a
              href="${this.baseUrl}1"
              class="${Gt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${ro}</span>
            </a>`:D}
        ${this.shouldShowPreviousPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${Gt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${ro}</span>
            </a>`:D}
        ${e.map(r=>{const o=r===this.currentPageNumber,i=`${this.baseUrl}${r}`;let n=Gt;o?n+=" s-bg-primary s-text-inverted":n+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const s=x._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return w`<a aria-label="${s}" href="${i}" class="${n}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${Gt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${x._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${ro}</span>
            </a>`:D}
      </div>
    </nav>`}}Dr([g({type:String,reflect:!0,attribute:"base-url"})],Xt.prototype,"baseUrl");Dr([g({type:Number,reflect:!0})],Xt.prototype,"pages");Dr([g({type:Number,reflect:!0,attribute:"current-page"})],Xt.prototype,"currentPageNumber");Dr([g({type:Number,reflect:!0,attribute:"visible-pages"})],Xt.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",Xt);const zh=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Ih=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),jh=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Fh=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Vh=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Hh extends qt(F){static styles=[F.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),De(Ih,Fh,jh,zh,Vh),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=x._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=x._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return j([fe.button,fe.label,this.suggestion?fe.suggestion:fe.filter,this.canClose?fe.labelWithClose:fe.labelWithoutClose])}get _closeClasses(){return j([fe.button,fe.close,this.suggestion?fe.suggestion:fe.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${fe.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${fe.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${fe.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",Hh);const Uh=":host{box-sizing:border-box!important}:host *,:host *:before,:host *:after{box-sizing:inherit!important}";var qh=Object.defineProperty,ds=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&qh(e,r,i),i};class Fo extends R{constructor(){super(),this.#e=!1,this.initialReflectedProperties=new Map,this.customStates={set:(r,o)=>{this.internals?.states&&(o?this.internals.states.add(r):this.internals.states.delete(r))},has:r=>this.internals?.states?this.internals.states.has(r):!1};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);const e=this.constructor;for(const[r,o]of e.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof r=="string"&&this.customStates.set(`initial-${r}-${o.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Uh,...e].map(r=>typeof r=="string"?vo(r):r)}#e;attributeChangedCallback(e,r,o){this.#e||(this.constructor.elementProperties.forEach((i,n)=>{i.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),this.#e=!0),super.attributeChangedCallback(e,r,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((r,o)=>{e.has(o)&&this[o]==null&&(this[o]=r)})}relayNativeEvent(e,r){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...r}))}}ds([g()],Fo.prototype,"dir");ds([g()],Fo.prototype,"lang");const Jh=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}});class Wh extends Event{constructor(){super("w-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}var Yh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,$t=(t,e,r,o)=>{for(var i=o>1?void 0:o?Qh(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&Yh(e,r,i),i};class Se extends Fo{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Wh))},this.handleInteraction=e=>{const r=this.emittedEvents;r.includes(e.type)||r.push(e.type),r.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static{this.formAssociated=!0}static get validators(){return[Jh()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const r of this.validators)if(r.observedAttributes)for(const o of r.observedAttributes)e.add(o);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const r=this.value;if(Array.isArray(r)){if(this.name){const o=new FormData;for(const i of r)o.append(this.name,i);this.setValue(o,o)}}else this.setValue(r,r)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const r=e[0],o=e[1];let i=e[2];i||(i=this.validationTarget),this.internals.setValidity(r,o,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,r=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!r),this.customStates.set("valid",r),this.customStates.set("user-invalid",!r&&o),this.customStates.set("user-valid",r&&o)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,r){this.value=e,r==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[r,o]=e;this.internals.setFormValue(r,o)}get allValidators(){const e=this.constructor.validators||[],r=this.validators||[];return[...e,...r]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const r={customError:!!this.customError},o=this.validationTarget||this.input||void 0;let i="";for(const n of e){const{isValid:s,message:l,invalidKeys:a}=n.checkValidity(this);s||(i||(i=l),a?.length>=0&&a.forEach(d=>r[d]=!0))}i||(i=this.validationMessage),this.setValidity(r,i,o)}}$t([g({reflect:!0})],Se.prototype,"name",2);$t([g({type:Boolean})],Se.prototype,"disabled",2);$t([g({state:!0,attribute:!1})],Se.prototype,"valueHasChanged",2);$t([g({state:!0,attribute:!1})],Se.prototype,"hasInteracted",2);$t([g({attribute:"custom-error",reflect:!0})],Se.prototype,"customError",2);$t([g({attribute:!1,state:!0,type:Object})],Se.prototype,"validity",1);const Xh=':host{color:var(--wa-form-control-value-color);display:inline-flex;flex-direction:row;align-items:top;font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);cursor:pointer;user-select:none;-webkit-user-select:none}:host(:focus){outline:none}[part~=label]{display:inline}[part~=hint]{margin-block-start:.5em}:host([appearance="default"]){.control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--wa-form-control-toggle-size, 2rem);height:var(--wa-form-control-toggle-size, 2rem);border-color:var(--wa-form-control-border-color, gray);border-radius:50%;border-style:var(--wa-form-control-border-style, solid);border-width:var(--wa-form-control-border-width, 1px);background-color:var(--wa-form-control-background-color, white);color:transparent;transition:background var(--wa-transition-normal, .3s),border-color var(--wa-transition-fast, .1s),border-width var(--wa-transition-normal, .3s),box-shadow var(--wa-transition-fast, .1s),color var(--wa-transition-fast, .1s);transition-timing-function:var(--wa-transition-easing, ease);margin-inline-end:.5em}}:host([appearance="clickable"]) .control{position:absolute;inset:0;height:100%;width:100%;cursor:pointer}:host(:state(checked)):not(:host([appearance="clickable"])) .control{border-color:var(--wa-form-control-activated-color, blue);background-color:var(--wa-form-control-background-color, white);border-width:.6rem}:host(:focus-visible) .control{outline:var(--wa-focus-ring, orange);outline-offset:var(--wa-focus-ring-offset, 2px)}:host(:state(disabled)){opacity:.5;cursor:not-allowed}:host([appearance="button"]){align-items:center;min-height:var(--wa-form-control-height);background-color:var(--wa-color-surface-default);border:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-radius:var(--wa-border-radius-m);padding:0 var(--wa-form-control-padding-inline);transition:background-color var(--wa-transition-fast),border-color var(--wa-transition-fast);.control{display:none}}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-first]){border-start-end-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-last]){border-start-start-radius:0;border-end-start-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-first]){border-end-start-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-last]){border-start-start-radius:0;border-start-end-radius:0}@media (hover: hover){:host([appearance="button"]:hover:not(:state(disabled),:state(checked))){background-color:color-mix(in srgb,var(--wa-color-surface-default) 95%,var(--wa-color-mix-hover))}}:host([appearance="button"]:focus-visible){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"]:state(checked)){border-color:var(--wa-form-control-activated-color);background-color:var(--wa-color-brand-fill-quiet)}:host([appearance="button"]:state(checked):focus-visible){outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"][data-wa-radio-horizontal]:not([data-wa-radio-first])){margin-inline-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"][data-wa-radio-vertical]:not([data-wa-radio-first])){margin-block-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"]:hover),:host([appearance="button"]:state(checked)){position:relative;z-index:1}:host([appearance="button"]:focus-visible){z-index:2}';var Zh=Object.defineProperty,st=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Zh(e,r,i),i};class He extends Se{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[Xh]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const r=this.disabled||this.forceDisabled;this.customStates.set("disabled",r),this.setAttribute("aria-disabled",r?"true":"false"),r?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `}}st([Jt()],He.prototype,"checked");st([Jt()],He.prototype,"forceDisabled");st([g({reflect:!0})],He.prototype,"form");st([g({reflect:!0})],He.prototype,"value");st([g({reflect:!0})],He.prototype,"appearance");st([g({reflect:!0})],He.prototype,"size");st([g({type:Boolean})],He.prototype,"disabled");const Kh="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Gh=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Kh[r[t]&63];return e};function ep(t=""){return`${t}${Gh()}`}const tp=':host{display:block}.form-control{position:relative;border:none;padding:0;margin:0}.label{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s);font-weight:700;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;cursor:pointer;padding-bottom:.4rem;color:var(--w-s-color-text);display:block}.radio-group-required .label:after{content:var(--wa-form-control-required-content);margin-inline-start:var(--wa-form-control-required-content-offset)}.button-group{display:flex}[part~=form-control-input]{display:flex;flex-direction:column;flex-wrap:wrap;gap:.75em}:host([orientation="horizontal"]) [part~=form-control-input]{flex-direction:row;gap:1em}[part~=hint]{margin-block-start:.5em}:host fieldset.has-radio-buttons{[part~=form-control-input]{gap:0}}',us=(t={})=>{let{validationElement:e,validationProperty:r}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),r||(r="value");const o={observedAttributes:["required"],message:e.validationMessage,checkValidity(i){const n={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[r]&&(n.message=typeof o.message=="function"?o.message(i):o.message||"",n.isValid=!1,n.invalidKeys.push("valueMissing")),n}};return o};class hs{constructor(e,...r){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=r}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const r=e;if(r.tagName.toLowerCase()==="w-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}var rp=Object.defineProperty,op=Object.getOwnPropertyDescriptor,we=(t,e,r,o)=>{for(var i=o>1?void 0:o?op(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&rp(e,r,i),i};class ge extends Se{constructor(){super(),this.hasSlotController=new hs(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const r=e.target.closest("w-radio");if(!r||r.disabled||r.forceDisabled||this.disabled)return;const o=this.value;this.value=r.value,r.checked=!0;const i=this.getAllRadios();for(const n of i)r!==n&&(n.checked=!1,n.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[tp]}static get validators(){const e=[us({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:ep("__w-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}static{this.shadowRootOptions={...Se.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();let r=!1;if(e.forEach((o,i)=>{o.appearance==="button"&&(r=!0),o.setAttribute("size",this.size),o.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),o.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),o.toggleAttribute("data-w-radio-first",i===0),o.toggleAttribute("data-w-radio-inner",i!==0&&i!==e.length-1),o.toggleAttribute("data-w-radio-last",i===e.length-1),o.forceDisabled=this.disabled}),this.hasRadioButtons=r,await Promise.all(e.map(async o=>{await o.updateComplete,!o.disabled&&o.value===this.value?o.checked=!0:o.checked=!1})),this.disabled)e.forEach(o=>{o.tabIndex=-1});else{const o=e.filter(n=>!n.disabled),i=o.find(n=>n.checked);o.length>0&&(i?o.forEach(n=>{n.tabIndex=n.checked?0:-1}):o.forEach((n,s)=>{n.tabIndex=s===0?0:-1})),e.filter(n=>n.disabled).forEach(n=>{n.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const r=this.getAllRadios().filter(a=>!a.disabled);if(r.length<=0)return;e.preventDefault();const o=this.value,i=r.find(a=>a.checked)??r[0],n=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let s=r.indexOf(i)+n;s||(s=0),s<0&&(s=r.length-1),s>r.length-1&&(s=0);const l=r.some(a=>a.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(a=>{a.checked=!1,l||a.setAttribute("tabindex","-1")}),this.value=r[s].value,r[s].checked=!0,l?r[s].shadowRoot.querySelector("button").focus():(r[s].setAttribute("tabindex","0"),r[s].focus()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const r=this.getAllRadios(),o=r.find(s=>s.checked),i=r.find(s=>!s.disabled),n=o||i;n&&n.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,r=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=this.label?!0:!!e,i=this.hint?!0:!!r;return w`
      <fieldset
        part="form-control"
        class=${cr({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o,"has-radio-buttons":this.hasRadioButtons})}
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
          class=${cr({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}we([Jt()],ge.prototype,"hasRadioButtons",2);we([mt("slot:not([name])")],ge.prototype,"defaultSlot",2);we([g()],ge.prototype,"label",2);we([g({attribute:"hint"})],ge.prototype,"hint",2);we([g({reflect:!0})],ge.prototype,"name",2);we([g({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);we([g({reflect:!0})],ge.prototype,"orientation",2);we([Jt()],ge.prototype,"value",1);we([g({attribute:"value",reflect:!0})],ge.prototype,"defaultValue",2);we([g({reflect:!0})],ge.prototype,"size",2);we([g({type:Boolean,reflect:!0})],ge.prototype,"required",2);we([g({type:Boolean,attribute:"with-label"})],ge.prototype,"withLabel",2);we([g({type:Boolean,attribute:"with-hint"})],ge.prototype,"withHint",2);customElements.get("w-radio")||(customElements.define("w-radio",He),customElements.define("w-radio-group",ge));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ip}=Is,np=t=>t.strings===void 0,Oi=()=>document.createComment(""),Ot=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const n=o.insertBefore(Oi(),i),s=o.insertBefore(Oi(),i);r=new ip(n,s,t,t.options)}else{const n=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(n!==i||l){let a=r._$AA;for(;a!==n;){const d=a.nextSibling;o.insertBefore(a,i),a=d}}}return r},Ye=(t,e,r=t)=>(t._$AI(e,r),t),sp={},ps=(t,e=sp)=>t._$AH=e,ap=t=>t._$AH,oo=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=Er(class extends Cr{constructor(t){if(super(t),t.type!==Te.PROPERTY&&t.type!==Te.ATTRIBUTE&&t.type!==Te.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!np(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===be||e===D)return e;const r=t.element,o=t.name;if(t.type===Te.PROPERTY){if(e===r[o])return be}else if(t.type===Te.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return be}else if(t.type===Te.ATTRIBUTE&&r.getAttribute(o)===e+"")return be;return ps(t),e}});function Vo(t,e){const r={waitUntilFirstUpdate:!1,...e};return(o,i)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(l){s.forEach(a=>{const d=a;if(l.has(d)){const h=l.get(d),c=this[d];h!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](h,c)}}),n.call(this,l)}}}var lp={},cp=JSON.parse('{"icon.title.check":["Sjekkmerke"]}'),dp=JSON.parse('{"icon.title.check":["Checkmark"]}'),up=JSON.parse('{"icon.title.check":["Valintamerkki"]}'),hp=JSON.parse('{"icon.title.check":["Flueben"]}'),pp=JSON.parse('{"icon.title.check":["Bock"]}'),gs=["en","nb","fi","da","sv"],fs="en",gp=()=>{var t;let e;switch((t=process==null?void 0:lp)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},bs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":fs},io=t=>gs.find(e=>t===e||t.toLowerCase().includes(e))||bs();function fp(){var t;if(typeof window>"u"){const e=gp();return io(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=bs();return gs.includes(e)?io(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),io(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),fs}}var bp=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,mp=(t,e,r,o,i)=>{const n=fp(),s=bp(n,t,e,r,o,i);x.load(n,s),x.activate(n)};mp(dp,cp,up,hp,pp);var vp=class extends R{render(){const t=x.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-check-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path></svg>`}};customElements.get("w-icon-check-16")||customElements.define("w-icon-check-16",vp);const wp=":host{display:inline-flex;color:var(--wa-form-control-value-color);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);user-select:none;-webkit-user-select:none}[part~=control]{display:inline-flex;flex:0 0 auto;position:relative;align-items:center;justify-content:center;width:var(--wa-form-control-toggle-size, 2rem);height:var(--wa-form-control-toggle-size, 2rem);border-color:var(--wa-form-control-border-color, gray);border-radius:4px;border-style:var(--wa-border-style, solid);border-width:var(--wa-form-control-border-width, 1px);background-color:var(--wa-form-control-background-color, white);transition:background var(--wa-transition-normal),border-color var(--wa-transition-fast),box-shadow var(--wa-transition-fast),color var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);margin-inline-end:.5em}[part~=base]{display:flex;align-items:flex-start;position:relative;color:currentColor;vertical-align:middle;cursor:pointer}[part~=label]{display:inline}[part~=control]:has(:checked,:indeterminate){color:var(--checked-icon-color, white);border-color:var(--wa-form-control-activated-color, blue);background-color:var(--wa-form-control-activated-color, blue)}[part~=control]:has(>input:focus-visible:not(:disabled)){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}:host [part~=base]:has(input:disabled){opacity:.5;cursor:not-allowed}input{position:absolute;padding:0;margin:0;height:100%;width:100%;opacity:0;pointer-events:none}[part~=icon]{display:flex;scale:var(--checked-icon-scale);&::part(svg){translate:.0009765625em}input:not(:checked,:indeterminate)+&{visibility:hidden}}:host([required]) [part~=label]:after{content:var(--wa-form-control-required-content);color:var(--wa-form-control-required-content-color);margin-inline-start:var(--wa-form-control-required-content-offset)}";var yp=Object.defineProperty,xp=Object.getOwnPropertyDescriptor,le=(t,e,r,o)=>{for(var i=o>1?void 0:o?xp(e,r):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(o?s(e,r,i):s(i))||i);return o&&i&&yp(e,r,i),i};class ie extends Se{constructor(){super(...arguments),this.hasSlotController=new hs(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[wp]}static{this.shadowRootOptions={...Se.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[us({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),r=this.hint?!0:!!e;return!this.checked&&this.indeterminate,w`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${W(this._value)}
            .indeterminate=${Li(this.indeterminate)}
            .checked=${Li(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />

          ${this.checked?w`<w-icon-check-16></w-icon-check-16>`:D}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${r?"false":"true"} class="${cr({"has-slotted":r})}">
        ${this.hint}
      </slot>
    `}}le([mt('input[type="checkbox"]')],ie.prototype,"input",2);le([g()],ie.prototype,"title",2);le([g({reflect:!0})],ie.prototype,"name",2);le([g({reflect:!0})],ie.prototype,"value",1);le([g({reflect:!0})],ie.prototype,"size",2);le([g({type:Boolean})],ie.prototype,"disabled",2);le([g({type:Boolean,reflect:!0})],ie.prototype,"indeterminate",2);le([g({type:Boolean,attribute:!1})],ie.prototype,"checked",2);le([g({type:Boolean,reflect:!0,attribute:"checked"})],ie.prototype,"defaultChecked",2);le([g({reflect:!0})],ie.prototype,"form",2);le([g({type:Boolean,reflect:!0})],ie.prototype,"required",2);le([g()],ie.prototype,"hint",2);le([Vo("defaultChecked")],ie.prototype,"handleDefaultCheckedChange",1);le([Vo(["checked","indeterminate"])],ie.prototype,"handleStateChange",1);le([Vo("disabled")],ie.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",ie);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tr(t,e,r){return t?e(t):r?.(t)}const $p=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),kp=JSON.parse('{"select.label.optional":["(optional)"]}'),_p=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),Sp=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Ep=JSON.parse('{"select.label.optional":["(valfritt)"]}');class Cp extends zo(qt(F)){static properties={autoFocus:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},always:{type:Boolean,reflect:!0},hint:{type:String,reflect:!0},label:{type:String,reflect:!0},optional:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readOnly:{type:Boolean,relfect:!0},_options:{state:!0},name:{type:String,reflect:!0},value:{type:String,reflect:!0}};static styles=[F.styles];constructor(){super(),De(kp,Sp,_p,$p,Ep),this._options=this.innerHTML}_setValue=e=>{this.value=e,this.setValue(e)};firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return j([Ne.base,!this.invalid&&!this.disabled&&!this.readOnly&&Ne.default,this.invalid&&Ne.invalid,this.disabled&&Ne.disabled,this.readOnly&&Ne.readOnly])}get#t(){return j([jr.base,this.invalid?jr.colorInvalid:jr.color])}get#i(){return j([Ne.chevron,this.disabled&&Ne.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Ne.wrapper}">
      ${tr(this.label,()=>w`<label class="${ii.base}" for="${this.#r}">
            ${this.label}
            ${tr(this.optional,()=>w`<span class="${ii.optional}"
                  >${x._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Ne.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${W(this.#o)}"
          aria-invalid="${W(this.invalid)}"
          aria-errormessage="${W(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${_o(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${tr(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}customElements.get("w-select")||customElements.define("w-select",Cp);const Ap=U`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Op=Object.defineProperty,Z=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Op(e,r,i),i};const Re={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},Lp={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},no={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class Y extends zo(R){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...F.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[Ee,Ap]}get _inputstyles(){return j([Re.base,this._hasSuffix&&Re.suffix,this._hasPrefix&&Re.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Re.default,this.invalid&&!this.disabled&&!this.readOnly&&Re.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Re.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Re.readOnly])}get _helptextstyles(){return j([no.base,this.invalid?no.colorInvalid:no.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Lp.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Re.wrapper}">
        <slot @slotchange="${this.prefixSlotChange}" name="prefix"></slot>
        <input
          class="${this._inputstyles}"
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
      ${this.helpText&&w`<div class="${this._helptextstyles}" id="${this._helpId}">${this.helpText}</div>`}
    `}}Z([g({type:Boolean,reflect:!0})],Y.prototype,"disabled");Z([g({type:Boolean,reflect:!0})],Y.prototype,"invalid");Z([g({type:String,reflect:!0})],Y.prototype,"id");Z([g({type:String,reflect:!0})],Y.prototype,"label");Z([g({type:String,reflect:!0})],Y.prototype,"helpText");Z([g({type:String,reflect:!0})],Y.prototype,"size");Z([g({type:Number,reflect:!0})],Y.prototype,"max");Z([g({type:Number,reflect:!0})],Y.prototype,"min");Z([g({type:Number,reflect:!0,attribute:"min-length"})],Y.prototype,"minLength");Z([g({type:Number,reflect:!0,attribute:"max-length"})],Y.prototype,"maxLength");Z([g({type:String,reflect:!0})],Y.prototype,"pattern");Z([g({type:String,reflect:!0})],Y.prototype,"placeholder");Z([g({type:Boolean,reflect:!0,attribute:"read-only"})],Y.prototype,"readOnly");Z([g({type:Boolean,reflect:!0})],Y.prototype,"required");Z([g({type:String,reflect:!0})],Y.prototype,"type");Z([g({type:String,reflect:!0})],Y.prototype,"value");Z([g({type:String,reflect:!0})],Y.prototype,"name");Z([g({type:Boolean})],Y.prototype,"_hasPrefix");Z([g({type:Boolean})],Y.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",Y);const Rr=typeof window<"u";function Np(t,e){if(!Rr)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Tp(t){return Rr?customElements.get("w-toast-container").init().del(t):void 0}function Pp(t,e){if(!Rr)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},Bp=Er(class extends Cr{constructor(t){if(super(t),t.type!==Te.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],n=[];let s=0;for(const l of t)i[s]=o?o(l,s):s,n[s]=r(l,s),s++;return{values:n,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=ap(t),{values:n,keys:s}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=s,n;const l=this.ut??=[],a=[];let d,h,c=0,f=i.length-1,u=0,b=n.length-1;for(;c<=f&&u<=b;)if(i[c]===null)c++;else if(i[f]===null)f--;else if(l[c]===s[u])a[u]=Ye(i[c],n[u]),c++,u++;else if(l[f]===s[b])a[b]=Ye(i[f],n[b]),f--,b--;else if(l[c]===s[b])a[b]=Ye(i[c],n[b]),Ot(t,a[b+1],i[c]),c++,b--;else if(l[f]===s[u])a[u]=Ye(i[f],n[u]),Ot(t,i[c],i[f]),f--,u++;else if(d===void 0&&(d=Ni(s,u,b),h=Ni(l,c,f)),d.has(l[c]))if(d.has(l[f])){const p=h.get(s[u]),v=p!==void 0?i[p]:null;if(v===null){const E=Ot(t,i[c]);Ye(E,n[u]),a[u]=E}else a[u]=Ye(v,n[u]),Ot(t,i[c],v),i[p]=null;u++}else oo(i[f]),f--;else oo(i[c]),c++;for(;u<=b;){const p=Ot(t,a[b+1]);Ye(p,n[u]),a[u++]=p}for(;c<=f;){const p=i[c++];p!==null&&oo(p)}return this.ut=s,ps(t,a),be}});class ms extends F{static styles=[F.styles,U`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const n=this.renderRoot.querySelector(`#${i}`);o.push(n.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Ir.wrapper}">
        <div class="${Ir.base}" id="w-toast-container-list">
          ${Bp(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Ir.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",ms);const Ho=typeof window<"u";let vs=!0;if(Ho){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>vs=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const ws=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},ys=t=>{const e=vs?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},Dp=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Rp=t=>()=>{t&&t()},xs=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=Dp(t,e);ws(t),t.style.height="auto";let i=t.scrollHeight;if(Ho&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",ys(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},$s=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=Rp(e);ws(t);let i=t.scrollHeight;if(Ho&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",ys(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},Mp=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),zp=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),Ip=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),jp=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Fp=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Me={success:"success",error:"error",warning:"warning"};class Vp extends F{static styles=[F.styles,U`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),De(zp,jp,Ip,Mp,Fp),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&xs(this._wrapper,()=>this._expanded=!0)}get#e(){return j([$e.base,this.type===Me.success&&$e.positive,this.type===Me.warning&&$e.warning,this.type===Me.error&&$e.negative])}get#t(){return j([$e.iconBase,this.type===Me.success&&$e.iconPositive,this.type===Me.warning&&$e.iconWarning,this.type===Me.error&&$e.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Me.warning}get _error(){return this.type===Me.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?x._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?x._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):x._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?$s(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${$e.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${$e.content}">
          <p>${this.text}</p>
        </div>
        ${tr(this.canclose===!0,()=>w`
            <button class="${$e.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",Vp);class Hp extends F{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&xs(this._wrapper),!this.show&&!this._removeElement&&$s(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[F.styles,U`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${W(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Hp);class Up extends F{static properties={level:{type:Number}};static styles=[F.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?_o(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",Up);var qp={},Jp=JSON.parse('{"icon.title.bag":["Veske"]}'),Wp=JSON.parse('{"icon.title.bag":["Handbag"]}'),Yp=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),Qp=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),Xp=JSON.parse('{"icon.title.bag":["Handväska"]}'),ks=["en","nb","fi","da","sv"],_s="en",Zp=()=>{var t;let e;switch((t=process==null?void 0:qp)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ss=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":_s},so=t=>ks.find(e=>t===e||t.toLowerCase().includes(e))||Ss();function Kp(){var t;if(typeof window>"u"){const e=Zp();return so(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ss();return ks.includes(e)?so(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),so(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),_s}}var Gp=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,eg=(t,e,r,o,i)=>{const n=Kp(),s=Gp(n,t,e,r,o,i);x.load(n,s),x.activate(n)};eg(Wp,Jp,Yp,Qp,Xp);var tg=class extends R{render(){const t=x.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return he`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${ue(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",tg);Rr&&(window.WarpToastContainer=ms,window.toast=Np,window.updateToast=Pp,window.removeToast=Tp);const rg={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Checkbox",href:"/elements/checkbox.html"},{title:"Radio",href:"/elements/radio.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class og extends F{static styles=[F.styles,U`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=rg;return w`
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
      `)}}customElements.define("sidebar-element",og);
