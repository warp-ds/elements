(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis,so=qt.ShadowRoot&&(qt.ShadyCSS===void 0||qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ao=Symbol(),Io=new WeakMap;let ki=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(so&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Io.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Io.set(r,e))}return e}toString(){return this.cssText}};const _i=t=>new ki(typeof t=="string"?t:t+"",void 0,ao),F=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,n)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new ki(r,t,ao)},gs=(t,e)=>{if(so)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=qt.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},jo=so?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return _i(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fs,defineProperty:bs,getOwnPropertyDescriptor:vs,getOwnPropertyNames:ms,getOwnPropertySymbols:ws,getPrototypeOf:ys}=Object,br=globalThis,Fo=br.trustedTypes,xs=Fo?Fo.emptyScript:"",$s=br.reactiveElementPolyfillSupport,_t=(t,e)=>t,Qt={toAttribute(t,e){switch(e){case Boolean:t=t?xs:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},lo=(t,e)=>!fs(t,e),Ho={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:lo};Symbol.metadata??=Symbol("metadata"),br.litPropertyMetadata??=new WeakMap;let Ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ho){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&bs(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:n}=vs(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i?.call(this)},set(s){const l=i?.call(this);n.call(this,s),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ho}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;const e=ys(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){const r=this.properties,o=[...ms(r),...ws(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(jo(i))}else e!==void 0&&r.push(jo(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:Qt).toAttribute(r,o.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Qt;this._$Em=i,this[i]=s.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??lo)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Ue[_t("elementProperties")]=new Map,Ue[_t("finalized")]=new Map,$s?.({ReactiveElement:Ue}),(br.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const co=globalThis,Xt=co.trustedTypes,Uo=Xt?Xt.createPolicy("lit-html",{createHTML:t=>t}):void 0,uo="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,ho="?"+Ae,ks=`<${ho}>`,qe=document,Ct=()=>qe.createComment(""),At=t=>t===null||typeof t!="object"&&typeof t!="function",po=Array.isArray,Si=t=>po(t)||typeof t?.[Symbol.iterator]=="function",Lr=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jo=/-->/g,Wo=/>/g,Ie=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vo=/'/g,qo=/"/g,Ei=/^(?:script|style|textarea|title)$/i,_s=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=_s(1),Oe=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Yo=new WeakMap,Je=qe.createTreeWalker(qe,129);function Ci(t,e){if(!po(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Uo!==void 0?Uo.createHTML(e):e}const Ai=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=vt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===vt?h[1]==="!--"?s=Jo:h[1]!==void 0?s=Wo:h[2]!==void 0?(Ei.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Ie):h[3]!==void 0&&(s=Ie):s===Ie?h[0]===">"?(s=i??vt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Ie:h[3]==='"'?qo:Vo):s===qo||s===Vo?s=Ie:s===Jo||s===Wo?s=vt:(s=Ie,i=void 0);const d=s===Ie&&t[l+1].startsWith("/>")?" ":"";n+=s===vt?a+ks:c>=0?(o.push(u),a.slice(0,c)+uo+a.slice(c)+Ae+d):a+Ae+(c===-2?l:d)}return[Ci(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let Kr=class Oi{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Ai(e,r);if(this.el=Oi.createElement(u,o),Je.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Je.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(uo)){const g=h[s++],d=i.getAttribute(c).split(Ae),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?Ti:f[1]==="?"?Pi:f[1]==="@"?Di:Mt}),i.removeAttribute(c)}else c.startsWith(Ae)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Ei.test(i.tagName)){const c=i.textContent.split(Ae),g=c.length-1;if(g>0){i.textContent=Xt?Xt.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],Ct()),Je.nextNode(),a.push({type:2,index:++n});i.append(c[g],Ct())}}}else if(i.nodeType===8)if(i.data===ho)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(Ae,c+1))!==-1;)a.push({type:7,index:n}),c+=Ae.length-1}n++}}static createElement(e,r){const o=qe.createElement("template");return o.innerHTML=e,o}};function Ye(t,e,r=t,o){if(e===Oe)return e;let i=o!==void 0?r.o?.[o]:r.l;const n=At(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=Ye(t,i._$AS(t,e.values),i,o)),e}class Li{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??qe).importNode(r,!0);Je.currentNode=i;let n=Je.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new vr(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new Bi(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=Je.nextNode(),s++)}return Je.currentNode=qe,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let vr=class Ni{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ye(this,e,r),At(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Si(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&At(this._$AH)?this._$AA.nextSibling.data=e:this.T(qe.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Kr.createElement(Ci(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Li(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=Yo.get(e.strings);return r===void 0&&Yo.set(e.strings,r=new Kr(e)),r}k(e){po(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new Ni(this.O(Ct()),this.O(Ct()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Mt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=Ye(this,e,r,0),s=!At(e)||e!==this._$AH&&e!==Oe,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=Ye(this,l[o+a],r,a),u===Oe&&(u=this._$AH[a]),s||=!At(u)||u!==this._$AH[a],u===I?e=I:e!==I&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ti extends Mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class Pi extends Mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}class Di extends Mt{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=Ye(this,e,r,0)??I)===Oe)return;const o=this._$AH,i=e===I&&o!==I||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==I&&(o===I||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Bi{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}}const Ss={M:uo,P:Ae,A:ho,C:1,L:Ai,R:Li,D:Si,V:Ye,I:vr,H:Mt,N:Pi,U:Di,B:Ti,F:Bi},Es=co.litHtmlPolyfillSupport;Es?.(Kr,vr),(co.litHtmlVersions??=[]).push("3.2.0");const Cs=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new vr(e.insertBefore(Ct(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Cs(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Oe}};P._$litElement$=!0,P.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:P});const As=globalThis.litElementPolyfillSupport;As?.({LitElement:P});(globalThis.litElementVersions??=[]).push("4.1.0");function Os(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const Qo=String.raw`[A-Za-z][^/\s>]*`,Ls=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Ns=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Mi=String.raw`${Ls}|${Ns}`,Ts=String.raw`"(?<quotedAttrValue>[^"]*)"`,Ps=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,Ds=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,Bs=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,Ms=String.raw`${Ts}|${Ps}|${Ds}`,zs=String.raw`(?<attrName>${Bs})(?:\s*=\s*(?:${Ms}))?`,Rs=String.raw`${Mi}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,zi=String.raw`(?<attrSpace>\s*)(?:${zs}|(?<attrText>${Rs}))`,Is={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${Qo})(?<attrs>(?:${zi})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${Qo})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Mi}|['"]`,wildcard:String.raw`.`},js=Object.entries(Is).map(([t,e])=>`(?<${t}>${e})`).join("|");function*Fs(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const Hs=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function Ot(t,e="  ",r=80){const o=new RegExp(js,"gys"),i=new RegExp(zi,"gy"),n=[];let s=null,l=0,a=0,u="",h=0,c="";const g=()=>{if(c&&c!=`
`){const E=u.indexOf(`
`),A=E==-1?u.length:E;a+c.length+A>r&&(c=`
`)}const p=c==`
`&&u?e.repeat(h):"",m=`${c}${p}${u}`;if(m){const E=m.lastIndexOf(`
`);E==-1?a+=m.length:a=m.length-E-1,n.push(m)}u=c=""},d=(...p)=>{for(const m of p)!s&&/^\s+$/.test(m)?(g(),c=m):(u||(h=l),u+=m)};for(const p of Fs(o,t)){if(Ot.__strict&&p.groups.wildcard)throw new Error("Unexpected wildcard");if(p.groups.endTag){const m=p.groups.endTagName.toLowerCase();m==s&&(s=null),s||(--l,d(`</${m}>`))}if(s)d(p[0]);else if(p.groups.space)d(...p[0].match(/\n/g)?.slice(0,2)??[" "]);else if(p.groups.comment||p.groups.dtd||p.groups.text||p.groups.wildcard)d(p[0]);else if(p.groups.startTag){const m=p.groups.startTagName.toLowerCase();if(d(`<${m}`),++l,p.groups.attrs){let{lastIndex:A}=i,C,M;for(;C=i.exec(p.groups.attrs);){if({lastIndex:A}=i,Ot.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(C.groups.attrText)):((C.groups.attrSpace||!M?.groups.attrText)&&d(/\n/.test(C.groups.attrSpace)?`
`:" "),d(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),M=C}if(A!=p.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!p.groups.closingSlash;d(E?" />":">"),E||Hs.has(m)?--l:["pre","textarea","script","style"].includes(m)&&(s=m)}}g();let f=!1;for(;/^\s+$/.test(n[n.length-1]);){const p=n.pop();/\n/.test(p)&&(f=!0)}return f&&n.push(`
`),n.join("")}Ot.default=Ot;var Us=Ot;const Js=Os(Us);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const go={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},fo=t=>(...e)=>({_$litDirective$:t,values:e});let bo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gr extends bo{constructor(e){if(super(e),this.it=I,e.type!==go.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===I||e==null)return this._t=void 0,this.it=e;if(e===Oe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Gr.directiveName="unsafeHTML",Gr.resultType=1;const vo=fo(Gr);class Ws extends P{static styles=F`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=Js(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${vo(this.source)}</code></pre>`}}customElements.define("syntax-highlight",Ws);var j=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?j.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:lo},qs=(t=Vs,e,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(o==="setter"){const{name:s}=r;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+o)};function b(t){return(e,r)=>typeof r=="object"?qs(t,e,r):((o,i,n)=>{const s=i.hasOwnProperty(n);return i.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ys(t){return b({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qs=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mr(t,e){return(r,o,i)=>{const n=s=>s.renderRoot?.querySelector(t)??null;return Qs(r,o,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=t=>t??I,oe=F`
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
        `;const Xs=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-text{color:var(--w-s-color-text)}.w-40{width:4rem}.w-max{width:max-content}.pb-0{padding-bottom:0}.pl-12{padding-left:1.2rem}.pr-12{padding-right:1.2rem}.cursor-default{cursor:default}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=Symbol.for(""),Zs=t=>{if(t?.r===Ri)return t?._$litStatic$},pe=t=>({_$litStatic$:t,r:Ri}),Xo=new Map,Ks=t=>(e,...r)=>{const o=r.length;let i,n;const s=[],l=[];let a,u=0,h=!1;for(;u<o;){for(a=e[u];u<o&&(n=r[u],(i=Zs(n))!==void 0);)a+=i+e[++u],h=!0;u!==o&&l.push(n),s.push(a),u++}if(u===o&&s.push(e[o]),h){const c=s.join("$$lit$$");(e=Xo.get(c))===void 0&&(s.raw=s,Xo.set(c,e=s)),r=l}return t(e,...r)},ge=Ks(w);var mo={},Ii={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Ii);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Ii;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(d){return!d.match(/[^a-f0-9]/i)?parseInt(d,16):NaN}function o(d,f,p){const m=r(d);if(Number.isNaN(m)||p!==void 0&&p!==d.length)throw new SyntaxError(e.errorMessages.get(f));return m}function i(d){const f=o(d,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function n(d,f){const p=o(d,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const m=o(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(p,m)}return String.fromCharCode(p)}function s(d){return d.charAt(0)==="{"&&d.charAt(d.length-1)==="}"}function l(d){if(!s(d))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=d.slice(1,-1),p=o(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(p)}catch(m){throw m instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):m}}function a(d,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const p=parseInt(d,8);return String.fromCharCode(p)}const u=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function h(d){return u.get(d)||d}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(d,f=!1){return d.replace(c,function(p,m,E,A,C,M,$,O,L){if(m!==void 0)return"\\";if(E!==void 0)return i(E);if(A!==void 0)return l(A);if(C!==void 0)return n(C,M);if($!==void 0)return n($);if(O==="0")return"\0";if(O!==void 0)return a(O,!f);if(L!==void 0)return h(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(mo);const Me=t=>typeof t=="string",Gs=t=>typeof t=="function",Zo=new Map,ji="en";function wo(t){return[...Array.isArray(t)?t:[t],ji]}function yo(t,e,r){const o=wo(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return Zt(()=>Kt("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(Me(e)?new Date(e):e)}function ea(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return yo(t,e,o)}function eo(t,e,r){const o=wo(t);return Zt(()=>Kt("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function Ko(t,e,r,{offset:o=0,...i}){const n=wo(t),s=e?Zt(()=>Kt("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):Zt(()=>Kt("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function Zt(t,e){const r=t();let o=Zo.get(r);return o||(o=e(),Zo.set(r,o)),o}function Kt(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Fi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,Hi="%__lingui_octothorpe__%",ta=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s],n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=eo(o,s,a);return l.replace(new RegExp(Hi,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=Ko(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=Ko(o,!0,s,l);return n(s-a,u)},select:ra,number:(s,l)=>eo(o,s,i(l)||{style:l}),date:(s,l)=>yo(o,s,i(l)||l),time:(s,l)=>ea(o,s,i(l)||l)}},ra=(t,e)=>e[t]??e.other;function oa(t,e,r){return(o={},i)=>{const n=ta(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Hi;if(Me(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let m;if(d){const E=n[d];m=E(o[g],p)}else m=o[g];return m==null?h:h+m},""):a,l=s(t);return Me(l)&&Fi.test(l)?mo.unraw(l):Me(l)?l:l?String(l):""}}var ia=Object.defineProperty,na=(t,e,r)=>e in t?ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,sa=(t,e,r)=>(na(t,e+"",r),r);let aa=class{constructor(){sa(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var la=Object.defineProperty,ca=(t,e,r)=>e in t?la(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,je=(t,e,r)=>(ca(t,typeof e!="symbol"?e+"":e,r),r);let da=class extends aa{constructor(e){super(),je(this,"_locale",""),je(this,"_locales"),je(this,"_localeData",{}),je(this,"_messages",{}),je(this,"_missing"),je(this,"_messageCompiler"),je(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??ji,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),Me(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return Gs(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Me(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),Me(a)&&Fi.test(a)?JSON.parse(`"${a}"`):Me(a)?a:oa(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return yo(this._locales||this._locale,e,r)}number(e,r){return eo(this._locales||this._locale,e,r)}};function ua(t={}){return new da(t)}const x=ua();var ha={},pa=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),ga=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),fa=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),ba=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),va=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),Ui=["en","nb","fi","da","sv"],Ji="en",ma=()=>{var t;let e;switch((t=process==null?void 0:ha)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Wi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ji},Nr=t=>Ui.find(e=>t===e||t.toLowerCase().includes(e))||Wi();function wa(){var t;if(typeof window>"u"){const e=ma();return Nr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Wi();return Ui.includes(e)?Nr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Nr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ji}}var ya=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,xa=(t,e,r,o,i)=>{const n=wa(),s=ya(n,t,e,r,o,i);x.load(n,s),x.activate(n)};xa(ga,pa,fa,ba,va);var $a=class extends P{render(){const t=x.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",$a);var ka={},_a=JSON.parse('{"icon.title.close":["Kryss"]}'),Sa=JSON.parse('{"icon.title.close":["Cross"]}'),Ea=JSON.parse('{"icon.title.close":["Rasti"]}'),Ca=JSON.parse('{"icon.title.close":["Kryds"]}'),Aa=JSON.parse('{"icon.title.close":["Kryss"]}'),Vi=["en","nb","fi","da","sv"],qi="en",Oa=()=>{var t;let e;switch((t=process==null?void 0:ka)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Yi=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":qi},Tr=t=>Vi.find(e=>t===e||t.toLowerCase().includes(e))||Yi();function La(){var t;if(typeof window>"u"){const e=Oa();return Tr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Yi();return Vi.includes(e)?Tr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Tr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),qi}}var Na=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Ta=(t,e,r,o,i)=>{const n=La(),s=Na(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Ta(Sa,_a,Ea,Ca,Aa);var Pa=class extends P{render(){const t=x.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Pa);var Da=Object.defineProperty,wr=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Da(e,r,i),i};const Qi="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",Ba={wrapper:Qi+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},Ma={wrapper:Qi+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"};class zt extends P{constructor(){super(...arguments),this.clear=!1,this.search=!1}static{this.styles=[oe,Xs]}get _classBase(){return this.slot==="suffix"?Ba:Ma}get _classes(){return j([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}wr([b({attribute:"aria-label"})],zt.prototype,"ariaLabel");wr([b({type:Boolean})],zt.prototype,"clear");wr([b({type:Boolean})],zt.prototype,"search");wr([b()],zt.prototype,"label");customElements.get("w-affix")||customElements.define("w-affix",zt);var za={},Ra=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),Ia=JSON.parse('{"icon.title.info":["Information circle"]}'),ja=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),Fa=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Ha=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),Xi=["en","nb","fi","da","sv"],Zi="en",Ua=()=>{var t;let e;switch((t=process==null?void 0:za)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ki=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Zi},Pr=t=>Xi.find(e=>t===e||t.toLowerCase().includes(e))||Ki();function Ja(){var t;if(typeof window>"u"){const e=Ua();return Pr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ki();return Xi.includes(e)?Pr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Pr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Zi}}var Wa=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Va=(t,e,r,o,i)=>{const n=Ja(),s=Wa(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Va(Ia,Ra,ja,Fa,Ha);var qa=class extends P{render(){const t=x.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",qa);var Ya={},Qa=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),Xa=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),Za=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),Ka=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),Ga=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),Gi=["en","nb","fi","da","sv"],en="en",el=()=>{var t;let e;switch((t=process==null?void 0:Ya)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},tn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":en},Dr=t=>Gi.find(e=>t===e||t.toLowerCase().includes(e))||tn();function tl(){var t;if(typeof window>"u"){const e=el();return Dr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=tn();return Gi.includes(e)?Dr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Dr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),en}}var rl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ol=(t,e,r,o,i)=>{const n=tl(),s=rl(n,t,e,r,o,i);x.load(n,s),x.activate(n)};ol(Xa,Qa,Za,Ka,Ga);var il=class extends P{render(){const t=x.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",il);var nl={},sl=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),al=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),ll=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),cl=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),dl=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),rn=["en","nb","fi","da","sv"],on="en",ul=()=>{var t;let e;switch((t=process==null?void 0:nl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},nn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":on},Br=t=>rn.find(e=>t===e||t.toLowerCase().includes(e))||nn();function hl(){var t;if(typeof window>"u"){const e=ul();return Br(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=nn();return rn.includes(e)?Br(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Br(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),on}}var pl=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,gl=(t,e,r,o,i)=>{const n=hl(),s=pl(n,t,e,r,o,i);x.load(n,s),x.activate(n)};gl(al,sl,ll,cl,dl);var fl=class extends P{render(){const t=x.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",fl);var bl={},vl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),ml=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),wl=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),yl=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),xl=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),sn=["en","nb","fi","da","sv"],an="en",$l=()=>{var t;let e;switch((t=process==null?void 0:bl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ln=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":an},Mr=t=>sn.find(e=>t===e||t.toLowerCase().includes(e))||ln();function kl(){var t;if(typeof window>"u"){const e=$l();return Mr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ln();return sn.includes(e)?Mr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Mr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),an}}var _l=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Sl=(t,e,r,o,i)=>{const n=kl(),s=_l(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Sl(ml,vl,wl,yl,xl);var El=class extends P{render(){const t=x.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",El);const Cl=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Al=Object.defineProperty,xo=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Al(e,r,i),i};const mt={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},wt={negative:"negative",positive:"positive",warning:"warning",info:"info"};class yr extends P{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!wt[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return j([mt.wrapper,mt[this.variant]])}get _iconClasses(){const e=mt[`${this.variant}Icon`];return j([mt.icon,e])}static{this.styles=[oe,Cl,F`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===wt.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===wt.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===wt.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===wt.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${mt.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}xo([b({reflect:!0})],yr.prototype,"variant");xo([b({type:Boolean,reflect:!0})],yr.prototype,"show");xo([b({reflect:!0})],yr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",yr);const Ol=["top","right","bottom","left"],Qe=Math.min,be=Math.max,Gt=Math.round,Se=t=>({x:t,y:t}),Ll={left:"right",right:"left",bottom:"top",top:"bottom"},Nl={start:"end",end:"start"};function to(t,e,r){return be(t,Qe(e,r))}function Ke(t,e){return typeof t=="function"?t(e):t}function ze(t){return t.split("-")[0]}function ut(t){return t.split("-")[1]}function cn(t){return t==="x"?"y":"x"}function $o(t){return t==="y"?"height":"width"}function Xe(t){return["top","bottom"].includes(ze(t))?"y":"x"}function ko(t){return cn(Xe(t))}function Tl(t,e,r){r===void 0&&(r=!1);const o=ut(t),i=ko(t),n=$o(i);let s=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=er(s)),[s,er(s)]}function Pl(t){const e=er(t);return[ro(t),e,ro(e)]}function ro(t){return t.replace(/start|end/g,e=>Nl[e])}function Dl(t,e,r){const o=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?n:s;default:return[]}}function Bl(t,e,r,o){const i=ut(t);let n=Dl(ze(t),r==="start",o);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(ro)))),n}function er(t){return t.replace(/left|right|bottom|top/g,e=>Ll[e])}function Ml(t){return{top:0,right:0,bottom:0,left:0,...t}}function dn(t){return typeof t!="number"?Ml(t):{top:t,right:t,bottom:t,left:t}}function tr(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function Go(t,e,r){let{reference:o,floating:i}=t;const n=Xe(e),s=ko(e),l=$o(s),a=ze(e),u=n==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:h,y:o.y-i.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:c};break;case"left":d={x:o.x-i.width,y:c};break;default:d={x:o.x,y:o.y}}switch(ut(e)){case"start":d[s]-=g*(r&&u?-1:1);break;case"end":d[s]+=g*(r&&u?-1:1);break}return d}const zl=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let u=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Go(u,o,a),g=o,d={},f=0;for(let p=0;p<l.length;p++){const{name:m,fn:E}=l[p],{x:A,y:C,data:M,reset:$}=await E({x:h,y:c,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:u,platform:s,elements:{reference:t,floating:e}});h=A??h,c=C??c,d={...d,[m]:{...d[m],...M}},$&&f<=50&&(f++,typeof $=="object"&&($.placement&&(g=$.placement),$.rects&&(u=$.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):$.rects),{x:h,y:c}=Go(u,g,a)),p=-1)}return{x:h,y:c,placement:g,strategy:i,middlewareData:d}};async function Lt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:n,rects:s,elements:l,strategy:a}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:g=!1,padding:d=0}=Ke(e,t),f=dn(d),m=l[g?c==="floating"?"reference":"floating":c],E=tr(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(m)))==null||r?m:m.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:a})),A=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,C=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),M=await(n.isElement==null?void 0:n.isElement(C))?await(n.getScale==null?void 0:n.getScale(C))||{x:1,y:1}:{x:1,y:1},$=tr(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(E.top-$.top+f.top)/M.y,bottom:($.bottom-E.bottom+f.bottom)/M.y,left:(E.left-$.left+f.left)/M.x,right:($.right-E.right+f.right)/M.x}}const Rl=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:n,platform:s,elements:l,middlewareData:a}=e,{element:u,padding:h=0}=Ke(t,e)||{};if(u==null)return{};const c=dn(h),g={x:r,y:o},d=ko(i),f=$o(d),p=await s.getDimensions(u),m=d==="y",E=m?"top":"left",A=m?"bottom":"right",C=m?"clientHeight":"clientWidth",M=n.reference[f]+n.reference[d]-g[d]-n.floating[f],$=g[d]-n.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let L=O?O[C]:0;(!L||!await(s.isElement==null?void 0:s.isElement(O)))&&(L=l.floating[C]||n.floating[f]);const z=M/2-$/2,H=L/2-p[f]/2-1,J=Qe(c[E],H),Z=Qe(c[A],H),U=J,ae=L-p[f]-Z,B=L/2-p[f]/2+z,G=to(U,B,ae),Y=!a.arrow&&ut(i)!=null&&B!==G&&n.reference[f]/2-(B<U?J:Z)-p[f]/2<0,ie=Y?B<U?B-U:B-ae:0;return{[d]:g[d]+ie,data:{[d]:G,centerOffset:B-G-ie,...Y&&{alignmentOffset:ie}},reset:Y}}}),Il=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:n,rects:s,initialPlacement:l,platform:a,elements:u}=e,{mainAxis:h=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...m}=Ke(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const E=ze(i),A=Xe(l),C=ze(l)===l,M=await(a.isRTL==null?void 0:a.isRTL(u.floating)),$=g||(C||!p?[er(l)]:Pl(l)),O=f!=="none";!g&&O&&$.push(...Bl(l,p,f,M));const L=[l,...$],z=await Lt(e,m),H=[];let J=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&H.push(z[E]),c){const B=Tl(i,s,M);H.push(z[B[0]],z[B[1]])}if(J=[...J,{placement:i,overflows:H}],!H.every(B=>B<=0)){var Z,U;const B=(((Z=n.flip)==null?void 0:Z.index)||0)+1,G=L[B];if(G)return{data:{index:B,overflows:J},reset:{placement:G}};let Y=(U=J.filter(ie=>ie.overflows[0]<=0).sort((ie,ee)=>ie.overflows[1]-ee.overflows[1])[0])==null?void 0:U.placement;if(!Y)switch(d){case"bestFit":{var ae;const ie=(ae=J.filter(ee=>{if(O){const ne=Xe(ee.placement);return ne===A||ne==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ne=>ne>0).reduce((ne,tt)=>ne+tt,0)]).sort((ee,ne)=>ee[1]-ne[1])[0])==null?void 0:ae[0];ie&&(Y=ie);break}case"initialPlacement":Y=l;break}if(i!==Y)return{reset:{placement:Y}}}return{}}}};function ei(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ti(t){return Ol.some(e=>t[e]>=0)}const jl=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=Ke(t,e);switch(o){case"referenceHidden":{const n=await Lt(e,{...i,elementContext:"reference"}),s=ei(n,r.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:ti(s)}}}case"escaped":{const n=await Lt(e,{...i,altBoundary:!0}),s=ei(n,r.floating);return{data:{escapedOffsets:s,escaped:ti(s)}}}default:return{}}}}};async function Fl(t,e){const{placement:r,platform:o,elements:i}=t,n=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=ze(r),l=ut(r),a=Xe(r)==="y",u=["left","top"].includes(s)?-1:1,h=n&&a?-1:1,c=Ke(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(d=l==="end"?f*-1:f),a?{x:d*h,y:g*u}:{x:g*u,y:d*h}}const Hl=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:n,placement:s,middlewareData:l}=e,a=await Fl(e,t);return s===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:n+a.y,data:{...a,placement:s}}}}},Ul=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:l={fn:m=>{let{x:E,y:A}=m;return{x:E,y:A}}},...a}=Ke(t,e),u={x:r,y:o},h=await Lt(e,a),c=Xe(ze(i)),g=cn(c);let d=u[g],f=u[c];if(n){const m=g==="y"?"top":"left",E=g==="y"?"bottom":"right",A=d+h[m],C=d-h[E];d=to(A,d,C)}if(s){const m=c==="y"?"top":"left",E=c==="y"?"bottom":"right",A=f+h[m],C=f-h[E];f=to(A,f,C)}const p=l.fn({...e,[g]:d,[c]:f});return{...p,data:{x:p.x-r,y:p.y-o,enabled:{[g]:n,[c]:s}}}}}},Jl=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:n,platform:s,elements:l}=e,{apply:a=()=>{},...u}=Ke(t,e),h=await Lt(e,u),c=ze(i),g=ut(i),d=Xe(i)==="y",{width:f,height:p}=n.floating;let m,E;c==="top"||c==="bottom"?(m=c,E=g===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(E=c,m=g==="end"?"top":"bottom");const A=p-h.top-h.bottom,C=f-h.left-h.right,M=Qe(p-h[m],A),$=Qe(f-h[E],C),O=!e.middlewareData.shift;let L=M,z=$;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(z=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!g){const J=be(h.left,0),Z=be(h.right,0),U=be(h.top,0),ae=be(h.bottom,0);d?z=f-2*(J!==0||Z!==0?J+Z:be(h.left,h.right)):L=p-2*(U!==0||ae!==0?U+ae:be(h.top,h.bottom))}await a({...e,availableWidth:z,availableHeight:L});const H=await s.getDimensions(l.floating);return f!==H.width||p!==H.height?{reset:{rects:!0}}:{}}}};function xr(){return typeof window<"u"}function ht(t){return un(t)?(t.nodeName||"").toLowerCase():"#document"}function he(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Le(t){var e;return(e=(un(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function un(t){return xr()?t instanceof Node||t instanceof he(t).Node:!1}function ye(t){return xr()?t instanceof Element||t instanceof he(t).Element:!1}function Ee(t){return xr()?t instanceof HTMLElement||t instanceof he(t).HTMLElement:!1}function ri(t){return!xr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof he(t).ShadowRoot}function Rt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=xe(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function Wl(t){return["table","td","th"].includes(ht(t))}function $r(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function _o(t){const e=So(),r=ye(t)?xe(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Vl(t){let e=Re(t);for(;Ee(e)&&!lt(e);){if(_o(e))return e;if($r(e))return null;e=Re(e)}return null}function So(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(ht(t))}function xe(t){return he(t).getComputedStyle(t)}function kr(t){return ye(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Re(t){if(ht(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ri(t)&&t.host||Le(t);return ri(e)?e.host:e}function hn(t){const e=Re(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ee(e)&&Rt(e)?e:hn(e)}function oo(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=hn(t),n=i===((o=t.ownerDocument)==null?void 0:o.body),s=he(i);if(n){const l=io(s);return e.concat(s,s.visualViewport||[],Rt(i)?i:[],l&&r?oo(l):[])}return e.concat(i,oo(i,[],r))}function io(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function pn(t){const e=xe(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=Ee(t),n=i?t.offsetWidth:r,s=i?t.offsetHeight:o,l=Gt(r)!==n||Gt(o)!==s;return l&&(r=n,o=s),{width:r,height:o,$:l}}function gn(t){return ye(t)?t:t.contextElement}function at(t){const e=gn(t);if(!Ee(e))return Se(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:n}=pn(e);let s=(n?Gt(r.width):r.width)/o,l=(n?Gt(r.height):r.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const ql=Se(0);function fn(t){const e=he(t);return!So()||!e.visualViewport?ql:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yl(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==he(t)?!1:e}function Nt(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),n=gn(t);let s=Se(1);e&&(o?ye(o)&&(s=at(o)):s=at(t));const l=Yl(n,r,o)?fn(n):Se(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(n){const g=he(n),d=o&&ye(o)?he(o):o;let f=g,p=io(f);for(;p&&o&&d!==f;){const m=at(p),E=p.getBoundingClientRect(),A=xe(p),C=E.left+(p.clientLeft+parseFloat(A.paddingLeft))*m.x,M=E.top+(p.clientTop+parseFloat(A.paddingTop))*m.y;a*=m.x,u*=m.y,h*=m.x,c*=m.y,a+=C,u+=M,f=he(p),p=io(f)}}return tr({width:h,height:c,x:a,y:u})}function Eo(t,e){const r=kr(t).scrollLeft;return e?e.left+r:Nt(Le(t)).left+r}function bn(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Eo(t,o)),n=o.top+e.scrollTop;return{x:i,y:n}}function Ql(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const n=i==="fixed",s=Le(o),l=e?$r(e.floating):!1;if(o===s||l&&n)return r;let a={scrollLeft:0,scrollTop:0},u=Se(1);const h=Se(0),c=Ee(o);if((c||!c&&!n)&&((ht(o)!=="body"||Rt(s))&&(a=kr(o)),Ee(o))){const d=Nt(o);u=at(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!c&&!n?bn(s,a,!0):Se(0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-a.scrollLeft*u.x+h.x+g.x,y:r.y*u.y-a.scrollTop*u.y+h.y+g.y}}function Xl(t){return Array.from(t.getClientRects())}function Zl(t){const e=Le(t),r=kr(t),o=t.ownerDocument.body,i=be(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=be(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-r.scrollLeft+Eo(t);const l=-r.scrollTop;return xe(o).direction==="rtl"&&(s+=be(e.clientWidth,o.clientWidth)-i),{width:i,height:n,x:s,y:l}}function Kl(t,e){const r=he(t),o=Le(t),i=r.visualViewport;let n=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){n=i.width,s=i.height;const u=So();(!u||u&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:n,height:s,x:l,y:a}}function Gl(t,e){const r=Nt(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,n=Ee(t)?at(t):Se(1),s=t.clientWidth*n.x,l=t.clientHeight*n.y,a=i*n.x,u=o*n.y;return{width:s,height:l,x:a,y:u}}function oi(t,e,r){let o;if(e==="viewport")o=Kl(t,r);else if(e==="document")o=Zl(Le(t));else if(ye(e))o=Gl(e,r);else{const i=fn(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return tr(o)}function vn(t,e){const r=Re(t);return r===e||!ye(r)||lt(r)?!1:xe(r).position==="fixed"||vn(r,e)}function ec(t,e){const r=e.get(t);if(r)return r;let o=oo(t,[],!1).filter(l=>ye(l)&&ht(l)!=="body"),i=null;const n=xe(t).position==="fixed";let s=n?Re(t):t;for(;ye(s)&&!lt(s);){const l=xe(s),a=_o(s);!a&&l.position==="fixed"&&(i=null),(n?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Rt(s)&&!a&&vn(t,s))?o=o.filter(h=>h!==s):i=l,s=Re(s)}return e.set(t,o),o}function tc(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const s=[...r==="clippingAncestors"?$r(e)?[]:ec(e,this._c):[].concat(r),o],l=s[0],a=s.reduce((u,h)=>{const c=oi(e,h,i);return u.top=be(c.top,u.top),u.right=Qe(c.right,u.right),u.bottom=Qe(c.bottom,u.bottom),u.left=be(c.left,u.left),u},oi(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function rc(t){const{width:e,height:r}=pn(t);return{width:e,height:r}}function oc(t,e,r){const o=Ee(e),i=Le(e),n=r==="fixed",s=Nt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=Se(0);if(o||!o&&!n)if((ht(e)!=="body"||Rt(i))&&(l=kr(e)),o){const g=Nt(e,!0,n,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else i&&(a.x=Eo(i));const u=i&&!o&&!n?bn(i,l):Se(0),h=s.left+l.scrollLeft-a.x-u.x,c=s.top+l.scrollTop-a.y-u.y;return{x:h,y:c,width:s.width,height:s.height}}function zr(t){return xe(t).position==="static"}function ii(t,e){if(!Ee(t)||xe(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Le(t)===r&&(r=r.ownerDocument.body),r}function mn(t,e){const r=he(t);if($r(t))return r;if(!Ee(t)){let i=Re(t);for(;i&&!lt(i);){if(ye(i)&&!zr(i))return i;i=Re(i)}return r}let o=ii(t,e);for(;o&&Wl(o)&&zr(o);)o=ii(o,e);return o&&lt(o)&&zr(o)&&!_o(o)?r:o||Vl(t)||r}const ic=async function(t){const e=this.getOffsetParent||mn,r=this.getDimensions,o=await r(t.floating);return{reference:oc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function nc(t){return xe(t).direction==="rtl"}const sc={convertOffsetParentRelativeRectToViewportRelativeRect:Ql,getDocumentElement:Le,getClippingRect:tc,getOffsetParent:mn,getElementRects:ic,getClientRects:Xl,getDimensions:rc,getScale:at,isElement:ye,isRTL:nc},ac=Hl,lc=Ul,cc=Il,dc=Jl,uc=jl,hc=Rl,pc=(t,e,r)=>{const o=new Map,i={platform:sc,...r},n={...i.platform,_c:o};return zl(t,e,{...i,platform:n})},rr="top-start",or="top",ir="top-end",nr="right-start",sr="right",ar="right-end",lr="bottom-start",Tt="bottom",cr="bottom-end",dr="left-start",ur="left",hr="left-end",ni=[rr,or,ir,nr,sr,ar,lr,Tt,cr,dr,ur,hr],st={[rr]:lr,[or]:Tt,[ir]:cr,[lr]:rr,[Tt]:or,[cr]:ir,[dr]:nr,[ur]:sr,[hr]:ar,[nr]:dr,[sr]:ur,[ar]:hr},gc={[dr]:-45,[ur]:-45,[hr]:-45,[rr]:45,[or]:45,[ir]:45,[nr]:135,[sr]:135,[ar]:135,[lr]:-135,[Tt]:-135,[cr]:-135},wn=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},fc=t=>t.split("-")[0],bc=t=>st[fc(t)],yn=t=>st[t],vc=t=>gc[yn(t)],mc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${wn(bc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},si=8,Wt=24;async function ai(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return pc(e,r,{placement:t?.directionName??Tt,middleware:[ac({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&cc({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&lc({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&hc({element:t?.arrowEl}),uc(),dc({apply(){Object.assign(r.style,{paddingRight:`${si}px`,paddingLeft:`${si}px`})}})]}).then(({x:o,y:i,middlewareData:n,placement:s})=>{if(t.actualDirection=s,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),n?.hide&&!t?.isCallout){const{referenceHidden:l}=n.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(n?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:u}=n.arrow,h=window.getComputedStyle(r).direction==="rtl",c=yn(s).split("-")[1];let g="",d="",f="",p="";if(c==="start"){const m=typeof a=="number"?`calc(${Wt}px - ${l.offsetWidth/2}px)`:"";g=typeof u=="number"?`calc(${Wt}px - ${l.offsetWidth/2}px)`:"",d=h?m:"",p=h?"":m}else if(c==="end"){const m=typeof a=="number"?`calc(${Wt}px - ${l.offsetWidth/2}px)`:"";d=h?"":m,p=h?m:"",f=typeof u=="number"?`calc(${Wt}px - ${l.offsetWidth/2}px)`:""}else p=typeof a=="number"?`${a}px`:"",g=typeof u=="number"?`${u}px`:"";Object.assign(l.style,{top:g,right:d,bottom:f,left:p}),mc(l,vc(s),s)}}),t}const Rr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},we={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},yt="font-bold focusable justify-center transition-colors ease-in-out",xn={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},wc={primary:`border-0 rounded-8 ${yt}`,secondary:`border-2 rounded-8 ${yt}`,utility:`border rounded-4 ${yt}`,negative:`border-0 rounded-8 ${yt}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${yt}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${xn.link}`},yc={medium:"text-m leading-[24]",xsmall:"text-xs"},ot={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${yc.medium} ${wc.pill} ${xn.pill} justify-self-end -mr-8 ml-8`},Ve=t=>typeof t=="string",xc=t=>typeof t=="function",li=new Map,$n="en";function Co(t){return[...Array.isArray(t)?t:[t],$n]}function kn(t,e,r){const o=Co(t);return pr(()=>gr("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ve(e)?new Date(e):e)}function no(t,e,r){const o=Co(t);return pr(()=>gr("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function ci(t,e,r,{offset:o=0,...i}){const n=Co(t),s=e?pr(()=>gr("plural-ordinal",n),()=>new Intl.PluralRules(n,{type:"ordinal"})):pr(()=>gr("plural-cardinal",n),()=>new Intl.PluralRules(n,{type:"cardinal"}));return i[r]??i[s.select(r-o)]??i.other}function pr(t,e){const r=t();let o=li.get(r);return o||(o=e(),li.set(r,o)),o}function gr(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const _n=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,Sn="%__lingui_octothorpe__%",$c=(t,e,r={})=>{const o=e||t,i=s=>typeof s=="object"?s:r[s]||{style:s},n=(s,l)=>{const a=Object.keys(r).length?i("number"):void 0,u=no(o,s,a);return l.replace(new RegExp(Sn,"g"),u)};return{plural:(s,l)=>{const{offset:a=0}=l,u=ci(o,!1,s,l);return n(s-a,u)},selectordinal:(s,l)=>{const{offset:a=0}=l,u=ci(o,!0,s,l);return n(s-a,u)},select:kc,number:(s,l)=>no(o,s,i(l)),date:(s,l)=>kn(o,s,i(l))}},kc=(t,e)=>e[t]??e.other;function _c(t,e,r){return(o={},i)=>{const n=$c(e,r,i),s=(a,u=!1)=>Array.isArray(a)?a.reduce((h,c)=>{if(c==="#"&&u)return h+Sn;if(Ve(c))return h+c;const[g,d,f]=c;let p={};d==="plural"||d==="selectordinal"||d==="select"?Object.entries(f).forEach(([E,A])=>{p[E]=s(A,d==="plural"||d==="selectordinal")}):p=f;let m;if(d){const E=n[d];m=E(o[g],p)}else m=o[g];return m==null?h:h+m},""):a,l=s(t);return Ve(l)&&_n.test(l)?mo.unraw(l.trim()):Ve(l)?l.trim():l?String(l):""}}var Sc=Object.defineProperty,Ec=(t,e,r)=>e in t?Sc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Cc=(t,e,r)=>(Ec(t,e+"",r),r);class Ac{constructor(){Cc(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Oc=Object.defineProperty,Lc=(t,e,r)=>e in t?Oc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,it=(t,e,r)=>(Lc(t,typeof e!="symbol"?e+"":e,r),r);class Nc extends Ac{constructor(e){super(),it(this,"_locale",""),it(this,"_locales"),it(this,"_localeData",{}),it(this,"_messages",{}),it(this,"_missing"),it(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??$n,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Ve(e)||(r=e.values||r,i=e.message,e=e.id);const n=this.messages[e],s=n===void 0,l=this._missing;if(l&&s)return xc(l)?l(this._locale,e):l;s&&this.emit("missing",{id:e,locale:this._locale});let a=n||i||e;return Ve(a)&&_n.test(a)?JSON.parse(`"${a}"`):Ve(a)?a:_c(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return kn(this._locales||this._locale,e,r)}number(e,r){return no(this._locales||this._locale,e,r)}}function Tc(t={}){return new Nc(t)}const Ir=Tc();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ao=globalThis,fr=Ao.trustedTypes,di=fr?fr.createPolicy("lit-html",{createHTML:t=>t}):void 0,En="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Cn="?"+De,Pc=`<${Cn}>`,Ze=document,Pt=()=>Ze.createComment(""),Dt=t=>t===null||typeof t!="object"&&typeof t!="function",Oo=Array.isArray,Dc=t=>Oo(t)||typeof t?.[Symbol.iterator]=="function",jr=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ui=/-->/g,hi=/>/g,Fe=RegExp(`>|${jr}(?:([^\\s"'>=/]+)(${jr}*=${jr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pi=/'/g,gi=/"/g,An=/^(?:script|style|textarea|title)$/i,ct=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),fi=new WeakMap,We=Ze.createTreeWalker(Ze,129);function On(t,e){if(!Oo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return di!==void 0?di.createHTML(e):e}const Bc=(t,e)=>{const r=t.length-1,o=[];let i,n=e===2?"<svg>":e===3?"<math>":"",s=xt;for(let l=0;l<r;l++){const a=t[l];let u,h,c=-1,g=0;for(;g<a.length&&(s.lastIndex=g,h=s.exec(a),h!==null);)g=s.lastIndex,s===xt?h[1]==="!--"?s=ui:h[1]!==void 0?s=hi:h[2]!==void 0?(An.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=Fe):h[3]!==void 0&&(s=Fe):s===Fe?h[0]===">"?(s=i??xt,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?Fe:h[3]==='"'?gi:pi):s===gi||s===pi?s=Fe:s===ui||s===hi?s=xt:(s=Fe,i=void 0);const d=s===Fe&&t[l+1].startsWith("/>")?" ":"";n+=s===xt?a+Pc:c>=0?(o.push(u),a.slice(0,c)+En+a.slice(c)+De+d):a+De+(c===-2?l:d)}return[On(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Bt{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let n=0,s=0;const l=e.length-1,a=this.parts,[u,h]=Bc(e,r);if(this.el=Bt.createElement(u,o),We.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=We.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(En)){const g=h[s++],d=i.getAttribute(c).split(De),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:f[2],strings:d,ctor:f[1]==="."?zc:f[1]==="?"?Rc:f[1]==="@"?Ic:_r}),i.removeAttribute(c)}else c.startsWith(De)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(An.test(i.tagName)){const c=i.textContent.split(De),g=c.length-1;if(g>0){i.textContent=fr?fr.emptyScript:"";for(let d=0;d<g;d++)i.append(c[d],Pt()),We.nextNode(),a.push({type:2,index:++n});i.append(c[g],Pt())}}}else if(i.nodeType===8)if(i.data===Cn)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(De,c+1))!==-1;)a.push({type:7,index:n}),c+=De.length-1}n++}}static createElement(e,r){const o=Ze.createElement("template");return o.innerHTML=e,o}}function dt(t,e,r=t,o){if(e===ct)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const n=Dt(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=dt(t,i._$AS(t,e.values),i,o)),e}class Mc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??Ze).importNode(r,!0);We.currentNode=i;let n=We.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let u;a.type===2?u=new It(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new jc(n,this,e)),this._$AV.push(u),a=o[++l]}s!==a?.index&&(n=We.nextNode(),s++)}return We.currentNode=Ze,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class It{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=dt(this,e,r),Dt(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==ct&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Dc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Dt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ze.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Bt.createElement(On(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new Mc(i,this),s=n.u(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let r=fi.get(e.strings);return r===void 0&&fi.set(e.strings,r=new Bt(e)),r}k(e){Oo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of e)i===r.length?r.push(o=new It(this.O(Pt()),this.O(Pt()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class _r{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,r=this,o,i){const n=this.strings;let s=!1;if(n===void 0)e=dt(this,e,r,0),s=!Dt(e)||e!==this._$AH&&e!==ct,s&&(this._$AH=e);else{const l=e;let a,u;for(e=n[0],a=0;a<n.length-1;a++)u=dt(this,l[o+a],r,a),u===ct&&(u=this._$AH[a]),s||=!Dt(u)||u!==this._$AH[a],u===K?e=K:e!==K&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class zc extends _r{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class Rc extends _r{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class Ic extends _r{constructor(e,r,o,i,n){super(e,r,o,i,n),this.type=5}_$AI(e,r=this){if((e=dt(this,e,r,0)??K)===ct)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class jc{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){dt(this,e)}}const Fc=Ao.litHtmlPolyfillSupport;Fc?.(Bt,It),(Ao.litHtmlVersions??=[]).push("3.2.1");const Hc=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const n=r?.renderBefore??null;o._$litPart$=i=new It(e.insertBefore(Pt(),n),n,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let St=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Hc(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ct}};St._$litElement$=!0,St.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:St});const Uc=globalThis.litElementPolyfillSupport;Uc?.({LitElement:St});(globalThis.litElementVersions??=[]).push("4.1.1");class Jc extends St{#e=!1;get i18n(){return this.#e||(Ir.load(this.locale,this.translations),Ir.activate(this.locale),this.#e=!0),Ir}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const Lo=()=>!(typeof window<"u");class Ln{isServer=!1;css=""}const Wc=(t=[])=>{const e=new Ln;if(Lo()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},Vc=()=>Wc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),qc=async(t=[])=>{const e=new Ln;if(Lo()){for(const n of t)e.css+=`@import url('${n}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(n=>fetch(n))),i=await Promise.all(o.map(n=>n.text()));for(const n of i)e.css+=n;return e},bi=async()=>qc(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,n=Array.prototype.forEach,s=/@import.+?;?$/gm;function l(v){var y=v.replace(s,"");return y!==v&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function a(v){return"isConnected"in v?v.isConnected:document.contains(v)}function u(v){return v.filter(function(y,T){return v.indexOf(y)===T})}function h(v,y){return v.filter(function(T){return y.indexOf(T)===-1})}function c(v){v.parentNode.removeChild(v)}function g(v){return v.shadowRoot||r.get(v)}var d=["addRule","deleteRule","insertRule","removeRule"],f=CSSStyleSheet,p=f.prototype;p.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},p.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function m(v){return typeof v=="object"?U.isPrototypeOf(v)||p.isPrototypeOf(v):!1}function E(v){return typeof v=="object"?p.isPrototypeOf(v):!1}var A=new WeakMap,C=new WeakMap,M=new WeakMap,$=new WeakMap;function O(v,y){var T=document.createElement("style");return M.get(v).set(y,T),C.get(v).push(y),T}function L(v,y){return M.get(v).get(y)}function z(v,y){M.get(v).delete(y),C.set(v,C.get(v).filter(function(T){return T!==y}))}function H(v,y){requestAnimationFrame(function(){y.textContent=A.get(v).textContent,$.get(v).forEach(function(T){return y.sheet[T.method].apply(y.sheet,T.args)})})}function J(v){if(!A.has(v))throw new TypeError("Illegal invocation")}function Z(){var v=this,y=document.createElement("style");e.body.appendChild(y),A.set(v,y),C.set(v,[]),M.set(v,new WeakMap),$.set(v,[])}var U=Z.prototype;U.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(T){return Promise.reject(T)}},U.replaceSync=function(y){if(J(this),typeof y=="string"){var T=this;A.get(T).textContent=l(y),$.set(T,[]),C.get(T).forEach(function(se){se.isConnected()&&H(T,L(T,se))})}},i(U,"cssRules",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.cssRules}}),i(U,"media",{configurable:!0,enumerable:!0,get:function(){return J(this),A.get(this).sheet.media}}),d.forEach(function(v){U[v]=function(){var y=this;J(y);var T=arguments;$.get(y).push({method:v,args:T}),C.get(y).forEach(function(le){if(le.isConnected()){var te=L(y,le).sheet;te[v].apply(te,T)}});var se=A.get(y).sheet;return se[v].apply(se,T)}}),i(Z,Symbol.hasInstance,{configurable:!0,value:m});var ae={childList:!0,subtree:!0},B=new WeakMap;function G(v){var y=B.get(v);return y||(y=new zo(v),B.set(v,y)),y}function Y(v){i(v.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(y){G(this).update(y)}})}function ie(v,y){for(var T=document.createNodeIterator(v,NodeFilter.SHOW_ELEMENT,function(le){return g(le)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),se=void 0;se=T.nextNode();)y(g(se))}var ee=new WeakMap,ne=new WeakMap,tt=new WeakMap;function hs(v,y){return y instanceof HTMLStyleElement&&ne.get(v).some(function(T){return L(T,v)})}function Mo(v){var y=ee.get(v);return y instanceof Document?y.body:y}function Or(v){var y=document.createDocumentFragment(),T=ne.get(v),se=tt.get(v),le=Mo(v);se.disconnect(),T.forEach(function(te){y.appendChild(L(te,v)||O(te,v))}),le.insertBefore(y,null),se.observe(le,ae),T.forEach(function(te){H(te,L(te,v))})}function zo(v){var y=this;y.sheets=[],ee.set(y,v),ne.set(y,[]),tt.set(y,new MutationObserver(function(T,se){if(!document){se.disconnect();return}T.forEach(function(le){t||n.call(le.addedNodes,function(te){te instanceof Element&&ie(te,function(rt){G(rt).connect()})}),n.call(le.removedNodes,function(te){te instanceof Element&&(hs(y,te)&&Or(y),t||ie(te,function(rt){G(rt).disconnect()}))})})}))}if(zo.prototype={isConnected:function(){var v=ee.get(this);return v instanceof Document?v.readyState!=="loading":a(v.host)},connect:function(){var v=Mo(this);tt.get(this).observe(v,ae),ne.get(this).length>0&&Or(this),ie(v,function(y){G(y).connect()})},disconnect:function(){tt.get(this).disconnect()},update:function(v){var y=this,T=ee.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!v.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(v.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");y.sheets=v;var se=ne.get(y),le=u(v),te=h(se,le);te.forEach(function(rt){c(L(rt,y)),z(rt,y)}),ne.set(y,le),y.isConnected()&&le.length>0&&Or(y)}},window.CSSStyleSheet=Z,Y(Document),"ShadowRoot"in window){Y(ShadowRoot);var Ro=Element.prototype,ps=Ro.attachShadow;Ro.attachShadow=function(y){var T=ps.call(this,y);return y.mode==="closed"&&r.set(this,T),T}}var Jt=G(document);Jt.isConnected()?Jt.connect():document.addEventListener("DOMContentLoaded",Jt.connect.bind(Jt))})();let kt;if(Lo()){const t=await bi();kt=_i(t.css)}else{kt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await bi();kt.replaceSync(r.css)}catch{const e=Vc();kt.replaceSync(e.css)}}class ce extends Jc{static styles=[kt]}var Yc={};const Qc=["en","nb","fi","da","sv"],Nn="en",vi=t=>Qc.find(e=>t===e||t.toLowerCase().includes(e))||Nn;function Xc(){if(typeof window>"u"){const t=Yc.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return vi(t)}try{const t=document.documentElement.lang;return vi(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Nn}}const Zc=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Ne=(t,e,r,o,i)=>{const n=Xc(),s=Zc(n,t,e,r,o,i);x.load(n,s),x.activate(n)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=fo(class extends bo{constructor(t){if(super(t),t.type!==go.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return Oe}}),Gc=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function ed(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:Gc(e.toString())})),super.createProperty(e,o)}}}function td(){return`m${Math.random().toString(36).slice(2)}`}const rd=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),od=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),id=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),nd=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),sd=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class ad extends ed(ce){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[ce.styles,F`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),Ne(od,nd,id,rd,sd),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(st).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(st))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>ni.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(ni)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?ai(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return st[this._actualDirection]}get _arrowClasses(){return j([ot.arrowBase,this._activeVariantClasses.arrow,ot[`arrowDirection${wn(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:ot[r],arrow:ot[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return j([ot.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return x._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${ot.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},ai(this.attentionState)}pointingAtDirection(){switch(st[this._actualDirection]){case"top-start":case"top":case"top-end":return x._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return x._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return x._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return x._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return x._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return x._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return x._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return x._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=td());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
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
    `}}customElements.get("w-attention")||customElements.define("w-attention",ad);const ld=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var cd=Object.defineProperty,Tn=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&cd(e,r,i),i};class No extends P{constructor(){super(...arguments),this.variant="neutral"}static{this.styles=[oe,ld]}get _class(){return j(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",this.variant==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",this.variant==="info"&&"bg-[--w-color-badge-info-background] s-text",this.variant==="positive"&&"bg-[--w-color-badge-positive-background] s-text",this.variant==="warning"&&"bg-[--w-color-badge-warning-background] s-text",this.variant==="negative"&&"bg-[--w-color-badge-negative-background] s-text",this.variant==="disabled"&&"s-bg-disabled s-text",this.variant==="price"&&"bg-[--w-black/70] s-text-inverted-static",this.variant==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}Tn([b({type:String,reflect:!0})],No.prototype,"variant");Tn([b({type:String,reflect:!0})],No.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",No);const dd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var ud=Object.defineProperty,jt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&ud(e,r,i),i};class pt extends P{static{this.styles=[oe,dd]}get _class(){return j(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?I:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}jt([b({type:Boolean,reflect:!0})],pt.prototype,"bleed");jt([b({type:Boolean,reflect:!0})],pt.prototype,"bordered");jt([b({type:Boolean,reflect:!0})],pt.prototype,"info");jt([b({type:Boolean,reflect:!0})],pt.prototype,"neutral");jt([b({type:String,reflect:!0})],pt.prototype,"role");customElements.get("w-box")||customElements.define("w-box",pt);function hd(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const pd=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),gd=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),fd=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),bd=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),vd=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),md=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var wd=Object.defineProperty,yd=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&wd(e,r,i),i};const nt={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},xd=w`<span class=${nt.separator}>/</span>`;class Pn extends P{static{this.styles=[oe,md]}constructor(){super(),Ne(gd,bd,fd,pd,vd),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const n=i===this.children.length-1;return w`<span class=${nt.text} aria-current=${n?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?nt.link:nt.text),o});this._children=hd(r,xd)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${nt.a11y}>${this.ariaLabel}</h2>
        <div class=${nt.wrapper}>${this._children}</div>
      </nav>
    `}}yd([b({attribute:"aria-label",type:String})],Pn.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",Pn);var R=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Q=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function To(t){var e,r,o,i,n,s,l,a,u,h,c,g,d,f,p,m,E,A;class C extends t{constructor(...$){var O,L,z;super(...$),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),n.set(this,void 0),s.set(this,void 0),l.set(this,!0),a.set(this,""),u.set(this,()=>{Q(this,i,!0,"f"),Q(this,r,!0,"f"),R(this,e,"m",p).call(this)}),h.set(this,()=>{Q(this,r,!1,"f"),R(this,e,"m",m).call(this,this.shouldFormValueUpdate()?R(this,a,"f"):""),!this.validity.valid&&R(this,i,"f")&&Q(this,o,!0,"f");const H=R(this,e,"m",p).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;R(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Q(this,l,!1,"f")),Q(this,i,!0,"f"),Q(this,o,!0,"f"),R(this,e,"m",p).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),d.set(this,!1),f.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",R(this,u,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",R(this,h,"f")),(z=this.addEventListener)===null||z===void 0||z.call(this,"invalid",R(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const $=this.validators.map(z=>z.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...$])]}static getValidator($){return this.validators.find(O=>O.attribute===$)||null}static getValidators($){return this.validators.filter(O=>{var L;if(O.attribute===$||!((L=O.attribute)===null||L===void 0)&&L.includes($))return!0})}get form(){return this.internals.form}get showError(){return R(this,e,"m",p).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback($,O,L){var z;(z=super.attributeChangedCallback)===null||z===void 0||z.call(this,$,O,L);const J=this.constructor.getValidators($);J?.length&&this.validationTarget&&this.setValue(R(this,a,"f"))}setValue($){var O;Q(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),Q(this,a,$,"f");const z=this.shouldFormValueUpdate()?$:null;this.internals.setFormValue(z),R(this,e,"m",m).call(this,z),this.valueChangedCallback&&this.valueChangedCallback(z),R(this,e,"m",p).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise($=>$(R(this,f,"f")))}formResetCallback(){var $,O;Q(this,i,!1,"f"),Q(this,o,!1,"f"),R(this,e,"m",p).call(this),($=this.resetFormControl)===null||$===void 0||$.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,R(this,e,"m",p).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,n=new WeakMap,s=new WeakMap,l=new WeakMap,a=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,g=new WeakMap,d=new WeakMap,f=new WeakMap,e=new WeakSet,p=function(){if(this.hasAttribute("disabled"))return!1;const $=R(this,o,"f")||R(this,i,"f")&&!this.validity.valid&&!R(this,r,"f");return $&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),$},m=function($){const O=this.constructor,L={},z=O.validators,H=[],J=z.some(B=>B.isValid instanceof Promise);R(this,d,"f")||(Q(this,f,new Promise(B=>{Q(this,g,B,"f")}),"f"),Q(this,d,!0,"f")),R(this,n,"f")&&(R(this,n,"f").abort(),Q(this,s,R(this,n,"f"),"f"));const Z=new AbortController;Q(this,n,Z,"f");let U,ae=!1;z.length&&(z.forEach(B=>{const G=B.key||"customError",Y=B.isValid(this,$,Z.signal);Y instanceof Promise?(H.push(Y),Y.then(ee=>{ee!=null&&(L[G]=!ee,U=R(this,e,"m",A).call(this,B,$),R(this,e,"m",E).call(this,L,U))})):(L[G]=!Y,this.validity[G]!==!Y&&(ae=!0),!Y&&!U&&(U=R(this,e,"m",A).call(this,B,$)))}),Promise.allSettled(H).then(()=>{var B;Z?.signal.aborted||(Q(this,d,!1,"f"),(B=R(this,g,"f"))===null||B===void 0||B.call(this))}),(ae||!J)&&R(this,e,"m",E).call(this,L,U))},E=function($,O){if(this.validationTarget)this.internals.setValidity($,O,this.validationTarget),Q(this,l,!1,"f");else{if(this.internals.setValidity($,O),this.internals.validity.valid)return;Q(this,l,!0,"f")}},A=function($,O){if(this.validityCallback){const L=this.validityCallback($.key||"customError");if(L)return L}return $.message instanceof Function?$.message(this,O):$.message},C}const $d=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),kd=JSON.parse('{"button.aria.loading":["Loading..."]}'),_d=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Sd=JSON.parse('{"button.aria.loading":["Laster..."]}'),Ed=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Cd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var Ad=Object.defineProperty,fe=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Ad(e,r,i),i};const mi=["primary","secondary","negative","utility","pill","link"],Be="font-bold focusable justify-center transition-colors ease-in-out",W={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},D={primary:`border-0 rounded-8 ${Be}`,secondary:`border-2 rounded-8 ${Be}`,utility:`border rounded-4 ${Be}`,negative:`border-0 rounded-8 ${Be}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Be}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${W.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},k={inProgress:`border-transparent animate-inprogress pointer-events-none ${W.loading}`,quiet:`border-0 rounded-8 ${Be}`,utilityQuiet:`border-0 rounded-4 ${Be}`,negativeQuiet:`border-0 rounded-8 ${Be}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${W.disabled}`},N={secondary:`${_.medium} ${S.medium} ${D.secondary} ${W.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${D.secondary} ${W.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${D.secondary} ${k.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${D.secondary} ${W.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${D.secondary} ${k.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${k.quiet} ${W.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${k.quiet} ${k.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${k.quiet} ${W.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${D.secondary} ${k.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${D.secondary} ${k.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${k.quiet} ${k.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${k.quiet} ${k.inProgress}`,primary:`${_.large} ${S.medium} ${D.primary} ${W.primary}`,primaryDisabled:`${_.large} ${S.medium} ${k.isDisabled} ${D.primary}`,primarySmall:`${_.small} ${S.xsmall} ${D.primary} ${W.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${k.isDisabled} ${D.primary} `,primaryQuiet:`${_.large} ${S.medium} ${k.quiet} ${W.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${k.quiet} ${k.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${k.quiet} ${W.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${k.quiet} ${k.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${k.inProgress} ${D.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${k.inProgress} ${D.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${k.quiet} ${k.inProgress} ${D.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${k.quiet} ${k.inProgress}`,utility:`${_.utility} ${S.medium} ${D.utility} ${W.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${D.utility} ${k.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${k.utilityQuiet} ${W.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${k.utilityQuiet} ${k.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${D.utility} ${W.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${D.utility} ${k.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${W.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${k.utilityQuiet} ${k.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${D.utility} ${k.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${D.utility} ${k.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${k.inProgress} ${k.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${k.inProgress} ${k.utilityQuiet}`,negative:`${_.large} ${S.medium} ${D.negative} ${W.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${D.negative} ${k.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${k.negativeQuiet}${k.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${D.negative} ${W.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${D.negative} ${k.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${W.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${D.negative} ${k.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${k.inProgress} ${D.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${k.negativeQuiet} ${D.negative} ${k.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${k.negativeQuiet} ${k.inProgress}`,pill:`${_.pill} ${S.medium} ${D.pill} ${W.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${D.pill} ${W.pill}`,pillLoading:`${_.pill} ${S.medium} ${D.pill} ${k.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${D.pill} ${k.inProgress}`,link:`${_.link} ${S.medium} ${D.link}`,linkSmall:`${_.link} ${S.xsmall} ${D.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class de extends To(P){constructor(){super(),this.type="button",Ne(kd,Sd,_d,$d,Ed),this.variant="secondary",this.ariaValueTextLoading=x._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[oe,Cd]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!mi.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${mi.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.primary,this.small&&!this.quiet&&!this.loading&&N.primarySmall,this.small&&this.quiet&&!this.loading&&N.primarySmallQuiet,this.small&&this.loading&&(this.quiet?N.primarySmallQuietLoading:N.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&N.primaryQuiet,!this.small&&this.loading&&(this.quiet?N.primaryQuietLoading:N.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.secondary,this.small&&!this.quiet&&!this.loading&&N.secondarySmall,this.small&&this.loading&&(this.quiet?N.secondarySmallQuietLoading:N.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&N.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&N.secondaryQuiet,!this.small&&this.loading&&(this.quiet?N.secondaryQuietLoading:N.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.utility,this.small&&!this.quiet&&!this.loading&&N.utilitySmall,this.small&&this.quiet&&!this.loading&&N.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?N.utilitySmallQuietLoading:N.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&N.utilityQuiet,!this.small&&this.loading&&(this.quiet?N.utilityQuietLoading:N.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.negative,this.small&&!this.quiet&&!this.loading&&N.negativeSmall,this.small&&this.quiet&&!this.loading&&N.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?N.negativeSmallQuietLoading:N.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&N.negativeQuiet,!this.small&&this.loading&&(this.quiet?N.negativeQuietLoading:N.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?N.pillSmall:N.pill),this.loading&&(this.small?N.pillSmallLoading:N.pillLoading)]}get _linkClasses(){return[this.small?N.linkSmall:N.link]}get _classes(){return j(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&N.linkAsButton,this.fullWidth?N.fullWidth:N.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}fe([b({reflect:!0})],de.prototype,"type");fe([b({type:Boolean,reflect:!0})],de.prototype,"autofocus");fe([b({reflect:!0})],de.prototype,"variant");fe([b({type:Boolean,reflect:!0})],de.prototype,"quiet");fe([b({type:Boolean,reflect:!0})],de.prototype,"small");fe([b({type:Boolean,reflect:!0})],de.prototype,"loading");fe([b({reflect:!0})],de.prototype,"href");fe([b({reflect:!0})],de.prototype,"target");fe([b({reflect:!0})],de.prototype,"rel");fe([b({attribute:"full-width",type:Boolean,reflect:!0})],de.prototype,"fullWidth");fe([b({attribute:"button-class",reflect:!0})],de.prototype,"buttonClass");fe([b({reflect:!0})],de.prototype,"name");fe([b({reflect:!0})],de.prototype,"value");customElements.get("w-button")||customElements.define("w-button",de);const Od=JSON.parse('{"card.button.text":["Vælg"]}'),Ld=JSON.parse('{"card.button.text":["Select"]}'),Nd=JSON.parse('{"card.button.text":["Valitse"]}'),Td=JSON.parse('{"card.button.text":["Velg"]}'),Pd=JSON.parse('{"card.button.text":["Välj"]}'),Dd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Bd=Object.defineProperty,Po=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Bd(e,r,i),i};const _e={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},wi={ENTER:"Enter",SPACE:" "};class Sr extends P{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,Ne(Ld,Td,Nd,Od,Pd),this.buttonText=x._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[oe,Dd,F`
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
    `]}get _containerClasses(){return j([_e.base,this.flat?_e.flat:_e.shadow,this.selected&&!this.flat&&_e.selected,this.selected&&this.flat?_e.flatSelected:_e.flatUnselected])}get _outlineClasses(){return j([_e.outline,this.selected?_e.outlineSelected:_e.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${_e.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===wi.ENTER||e.key===wi.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${V(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Po([b({type:Boolean,reflect:!0})],Sr.prototype,"selected");Po([b({type:Boolean})],Sr.prototype,"flat");Po([b({type:Boolean})],Sr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",Sr);var Md=Object.defineProperty,Er=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Md(e,r,i),i};class Ft extends P{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=Kc({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[oe,F`
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
    `]}}Er([b({type:String})],Ft.prototype,"type");Er([b({type:Boolean,reflect:!0})],Ft.prototype,"checked");Er([b({type:Boolean,reflect:!0})],Ft.prototype,"indeterminate");Er([b({type:Boolean,reflect:!0})],Ft.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",Ft);var zd={},Rd=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),Id=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),jd=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),Fd=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),Hd=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),Dn=["en","nb","fi","da","sv"],Bn="en",Ud=()=>{var t;let e;switch((t=process==null?void 0:zd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Mn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Bn},Fr=t=>Dn.find(e=>t===e||t.toLowerCase().includes(e))||Mn();function Jd(){var t;if(typeof window>"u"){const e=Ud();return Fr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Mn();return Dn.includes(e)?Fr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Fr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Bn}}var Wd=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Vd=(t,e,r,o,i)=>{const n=Jd(),s=Wd(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Vd(Id,Rd,jd,Fd,Hd);var qd=class extends P{render(){const t=x.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",qd);var Yd={},Qd=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),Xd=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),Zd=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),Kd=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),Gd=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),zn=["en","nb","fi","da","sv"],Rn="en",eu=()=>{var t;let e;switch((t=process==null?void 0:Yd)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},In=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Rn},Hr=t=>zn.find(e=>t===e||t.toLowerCase().includes(e))||In();function tu(){var t;if(typeof window>"u"){const e=eu();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=In();return zn.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Rn}}var ru=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ou=(t,e,r,o,i)=>{const n=tu(),s=ru(n,t,e,r,o,i);x.load(n,s),x.activate(n)};ou(Xd,Qd,Zd,Kd,Gd);var iu=class extends P{render(){const t=x.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",iu);const nu=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var su=Object.defineProperty,$e=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&su(e,r,i),i};const au={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},re={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class ve extends P{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[oe,nu,F`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return j([re.wrapper,this.box&&re.box,this.bleed&&re.bleed])}get#t(){return j(this.buttonClass,[re.button,this.box&&re.buttonBox])}get#i(){return j([re.chevron,!this.box&&re.chevronNonBox])}get#r(){const e=j([re.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&re.elementsChevronCollapse]),r=j([re.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&re.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return j(this.contentClass,[this.box&&au.base,this._hasTitle&&this.box&&re.contentWithTitle])}get#n(){return j([re.expansion,!this.expanded&&re.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#n}" aria-hidden=${V(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}$e([b({type:Boolean,reflect:!0})],ve.prototype,"expanded");$e([b({type:String})],ve.prototype,"title");$e([b({type:Boolean})],ve.prototype,"box");$e([b({type:Boolean})],ve.prototype,"bleed");$e([b({attribute:"button-class",type:String})],ve.prototype,"buttonClass");$e([b({attribute:"content-class",type:String})],ve.prototype,"contentClass");$e([b({attribute:"no-chevron",type:Boolean})],ve.prototype,"noChevron");$e([b({type:Boolean})],ve.prototype,"animated");$e([b({attribute:"heading-level",type:Number})],ve.prototype,"headingLevel");$e([b({type:Boolean,state:!0})],ve.prototype,"_hasTitle");$e([b({type:Boolean,state:!0})],ve.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",ve);const jn=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Fn=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class lu extends jn(Fn(P)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[oe,F`
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
    `]}}const cu=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),du=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],uu={easing:"ease",duration:300};let Hn=!1;const hu=typeof window<"u";if(hu){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>Hn=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class pu{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||du,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(cu(this.first,this.last))}get defaults(){return uu}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?Hn?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var gu={},fu=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),bu=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),vu=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),mu=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),wu=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),Un=["en","nb","fi","da","sv"],Jn="en",yu=()=>{var t;let e;switch((t=process==null?void 0:gu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Wn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Jn},Ur=t=>Un.find(e=>t===e||t.toLowerCase().includes(e))||Wn();function xu(){var t;if(typeof window>"u"){const e=yu();return Ur(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Wn();return Un.includes(e)?Ur(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ur(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Jn}}var $u=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,ku=(t,e,r,o,i)=>{const n=xu(),s=$u(n,t,e,r,o,i);x.load(n,s),x.activate(n)};ku(bu,fu,vu,mu,wu);var _u=class extends P{render(){const t=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",_u);const Su=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Eu=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Cu=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),Au=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Ou=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Lu=Object.defineProperty,Ht=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Lu(e,r,i),i};class gt extends jn(P){constructor(){super(),this._hasTopContent=!1,Ne(Eu,Au,Cu,Su,Ou)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new pu(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
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
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[oe,F`
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
    `]}}Ht([b({type:String})],gt.prototype,"title");Ht([b({type:Boolean})],gt.prototype,"back");Ht([b({type:Boolean,attribute:"no-close"})],gt.prototype,"noClose");Ht([Ys()],gt.prototype,"_hasTopContent");Ht([mr(".title-el")],gt.prototype,"titleEl");let Et=[];const Do={documentElement:{},body:{}},Nu=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),Vn=t=>{t.touches.length>1||t.preventDefault?.()},Tu=t=>([e,r])=>{Do[t][e]=document[t].style[e],document[t].style[e]=r},Pu=()=>Object.entries(Nu).forEach(([t,e])=>{Object.entries(e).forEach(Tu(t))}),Du=t=>([e,r])=>{document[t].style[e]=Do[t][e]},Bu=()=>Object.entries(Do).forEach(([t,e])=>{Object.entries(e).forEach(Du(t))}),Mu=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function zu(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||Mu(t)&&i<0?Vn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function Ru(t){t.ontouchstart=null,t.ontouchmove=null}const qn=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",Vn,{passive:!1}),Iu=qn(!0),ju=qn();function Fu(t){if(!t)throw Error("Could not run setup, an element must be provided");Et.some(e=>e===t)||(Et.length||(Pu(),Iu()),zu(t),Et.push(t))}function Hu(){Et.forEach(Ru),ju(),Bu(),Et=[]}var Uu=Object.defineProperty,ft=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Uu(e,r,i),i};class Ge extends Fn(P){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),Fu(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),Hu(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[oe,F`
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
    `]}}ft([b({type:Boolean})],Ge.prototype,"show");ft([b({type:String,attribute:"content-id"})],Ge.prototype,"contentId");ft([b({type:Boolean,attribute:"ignore-backdrop-clicks"})],Ge.prototype,"ignoreBackdropClicks");ft([mr(".dialog-el")],Ge.prototype,"dialogEl");ft([mr(".dialog-inner-el")],Ge.prototype,"dialogInnerEl");ft([mr(".content-el")],Ge.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",Ge),customElements.define("w-modal-header",gt),customElements.define("w-modal-footer",lu));var Ju={},Wu=JSON.parse('{"icon.title.chevron-double-left":["Dobbel pil til venstre"]}'),Vu=JSON.parse('{"icon.title.chevron-double-left":["Double leftward arrow"]}'),qu=JSON.parse('{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]}'),Yu=JSON.parse('{"icon.title.chevron-double-left":["Dobbelt venstrepil"]}'),Qu=JSON.parse('{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}'),Yn=["en","nb","fi","da","sv"],Qn="en",Xu=()=>{var t;let e;switch((t=process==null?void 0:Ju)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Xn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Qn},Jr=t=>Yn.find(e=>t===e||t.toLowerCase().includes(e))||Xn();function Zu(){var t;if(typeof window>"u"){const e=Xu();return Jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Xn();return Yn.includes(e)?Jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Qn}}var Ku=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,Gu=(t,e,r,o,i)=>{const n=Zu(),s=Ku(n,t,e,r,o,i);x.load(n,s),x.activate(n)};Gu(Vu,Wu,qu,Yu,Qu);var eh=class extends P{render(){const t=x.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",eh);var th={},rh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),oh=JSON.parse('{"icon.title.chevron-left":["Leftward arrow"]}'),ih=JSON.parse('{"icon.title.chevron-left":["Nuoli vasemmalle"]}'),nh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),sh=JSON.parse('{"icon.title.chevron-left":["Pil vänster"]}'),Zn=["en","nb","fi","da","sv"],Kn="en",ah=()=>{var t;let e;switch((t=process==null?void 0:th)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Gn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Kn},Wr=t=>Zn.find(e=>t===e||t.toLowerCase().includes(e))||Gn();function lh(){var t;if(typeof window>"u"){const e=ah();return Wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Gn();return Zn.includes(e)?Wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Kn}}var ch=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,dh=(t,e,r,o,i)=>{const n=lh(),s=ch(n,t,e,r,o,i);x.load(n,s),x.activate(n)};dh(oh,rh,ih,nh,sh);var uh=class extends P{render(){const t=x.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",uh);var hh={},ph=JSON.parse('{"icon.title.chevron-right":["Pil til høyre"]}'),gh=JSON.parse('{"icon.title.chevron-right":["Rightward arrow"]}'),fh=JSON.parse('{"icon.title.chevron-right":["Nuoli oikealle"]}'),bh=JSON.parse('{"icon.title.chevron-right":["Pil til højre"]}'),vh=JSON.parse('{"icon.title.chevron-right":["Pil höger"]}'),es=["en","nb","fi","da","sv"],ts="en",mh=()=>{var t;let e;switch((t=process==null?void 0:hh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},rs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ts},Vr=t=>es.find(e=>t===e||t.toLowerCase().includes(e))||rs();function wh(){var t;if(typeof window>"u"){const e=mh();return Vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=rs();return es.includes(e)?Vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ts}}var yh=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,xh=(t,e,r,o,i)=>{const n=wh(),s=yh(n,t,e,r,o,i);x.load(n,s),x.activate(n)};xh(gh,ph,fh,bh,vh);var $h=class extends P{render(){const t=x.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",$h);const kh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),_h=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),Sh=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),Eh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Ch=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),Ah=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}}`;var Oh=Object.defineProperty,Cr=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Oh(e,r,i),i};const qr=x._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),Vt="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class Ut extends P{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,Ne(_h,Eh,Sh,kh,Ch)}static{this.styles=[oe,Ah]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(i,n)=>n+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(i,n)=>r+n)}render(){const e=this.visiblePageNumbers;return w`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${x._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?w`<a
              href="${this.baseUrl}1"
              class="${Vt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${qr}</span>
            </a>`:I}
        ${this.shouldShowPreviousPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${Vt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${qr}</span>
            </a>`:I}
        ${e.map(r=>{const o=r===this.currentPageNumber,i=`${this.baseUrl}${r}`;let n=Vt;o?n+=" s-bg-primary s-text-inverted":n+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const s=x._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return w`<a aria-label="${s}" href="${i}" class="${n}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${Vt+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${x._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${qr}</span>
            </a>`:I}
      </div>
    </nav>`}}Cr([b({type:String,reflect:!0,attribute:"base-url"})],Ut.prototype,"baseUrl");Cr([b({type:Number,reflect:!0})],Ut.prototype,"pages");Cr([b({type:Number,reflect:!0,attribute:"current-page"})],Ut.prototype,"currentPageNumber");Cr([b({type:Number,reflect:!0,attribute:"visible-pages"})],Ut.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",Ut);const Lh=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Nh=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Th=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Ph=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Dh=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}'),Bh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.bg-\\[--w-color-pill-suggestion-background\\]{background-color:var(--w-color-pill-suggestion-background)}.hover\\:bg-\\[--w-color-pill-suggestion-background-hover\\]:hover{background-color:var(--w-color-pill-suggestion-background-hover)}.active\\:bg-\\[--w-color-pill-suggestion-background-active\\]:active{background-color:var(--w-color-pill-suggestion-background-active)}.rounded-l-full{border-top-left-radius:9999px;border-bottom-left-radius:9999px}.rounded-r-full{border-top-right-radius:9999px;border-bottom-right-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.hover\\:s-bg-primary-hover:hover{background-color:var(--w-s-color-background-primary-hover)}.active\\:s-bg-primary-active:active{background-color:var(--w-s-color-background-primary-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.py-8{padding-top:.8rem;padding-bottom:.8rem}.pl-12{padding-left:1.2rem}.pl-4{padding-left:.4rem}.pr-12{padding-right:1.2rem}.pr-2{padding-right:.2rem}.font-bold{font-weight:700}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var Mh=Object.defineProperty,bt=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Mh(e,r,i),i};const ue={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"};class et extends P{static{this.styles=[oe,Bh]}constructor(){super(),Ne(Nh,Ph,Th,Lh,Dh),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=x._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screen reader message for open filter"}),this.removeFilterSrText=x._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screen reader message for removal of the filter"})}get _labelClasses(){return j([ue.button,ue.label,this.suggestion?ue.suggestion:ue.filter,this.canClose?ue.labelWithClose:ue.labelWithoutClose])}get _closeClasses(){return j([ue.button,ue.close,this.suggestion?ue.suggestion:ue.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.openSrLabel&&(this.openAriaLabel=this.openSrLabel),this.closeSrLabel&&(this.closeAriaLabel=this.closeSrLabel)}render(){return w`
      <div class="${ue.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${ue.a11y}">${this.openAriaLabel?this.openAriaLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w` <button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${ue.a11y}">${this.closeAriaLabel?this.closeAriaLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}bt([b({attribute:"can-close",type:Boolean})],et.prototype,"canClose");bt([b({attribute:"suggestion",type:Boolean})],et.prototype,"suggestion");bt([b({attribute:"open-sr-label",type:String})],et.prototype,"openSrLabel");bt([b({attribute:"open-aria-label",type:String})],et.prototype,"openAriaLabel");bt([b({attribute:"close-sr-label",type:String})],et.prototype,"closeSrLabel");bt([b({attribute:"close-aria-label",type:String})],et.prototype,"closeAriaLabel");customElements.get("w-pill")||customElements.define("w-pill",et);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(t,e,r){return t?e(t):r?.(t)}const zh=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Rh=JSON.parse('{"select.label.optional":["(optional)"]}'),Ih=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),jh=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Fh=JSON.parse('{"select.label.optional":["(valfritt)"]}'),Hh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var Uh=Object.defineProperty,ke=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Uh(e,r,i),i};const Ce={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},yi={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Yr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class me extends To(P){constructor(){super(),this._setValue=e=>{this.value=e,this.setValue(e)},Ne(Rh,jh,Ih,zh,Fh),this._options=this.innerHTML}static{this.styles=[oe,Hh]}firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return j([Ce.base,!this.invalid&&!this.disabled&&!this.readOnly&&Ce.default,this.invalid&&Ce.invalid,this.disabled&&Ce.disabled,this.readOnly&&Ce.readOnly])}get#t(){return j([Yr.base,this.invalid?Yr.colorInvalid:Yr.color])}get#i(){return j([Ce.chevron,this.disabled&&Ce.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Ce.wrapper}">
      ${Yt(this.label,()=>w`<label class="${yi.base}" for="${this.#r}">
            ${this.label}
            ${Yt(this.optional,()=>w`<span class="${yi.optional}"
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
          ${vo(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${Yt(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}ke([b({attribute:"auto-focus",type:Boolean,reflect:!0})],me.prototype,"autoFocus");ke([b({type:Boolean,reflect:!0})],me.prototype,"invalid");ke([b({type:Boolean,reflect:!0})],me.prototype,"always");ke([b({reflect:!0})],me.prototype,"hint");ke([b({reflect:!0})],me.prototype,"label");ke([b({type:Boolean,reflect:!0})],me.prototype,"optional");ke([b({type:Boolean,reflect:!0})],me.prototype,"disabled");ke([b({attribute:"read-only",type:Boolean,reflect:!0})],me.prototype,"readOnly");ke([b({state:!0})],me.prototype,"_options");ke([b({reflect:!0})],me.prototype,"name");ke([b({reflect:!0})],me.prototype,"value");customElements.get("w-select")||customElements.define("w-select",me);const Jh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Wh=Object.defineProperty,X=(t,e,r,o)=>{for(var i=void 0,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,r,i)||i);return i&&Wh(e,r,i),i};const Te={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},Vh={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},Qr={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class q extends To(P){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...ce.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[oe,Jh]}get _inputstyles(){return j([Te.base,this._hasSuffix&&Te.suffix,this._hasPrefix&&Te.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Te.default,this.invalid&&!this.disabled&&!this.readOnly&&Te.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Te.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Te.readOnly])}get _helptextstyles(){return j([Qr.base,this.invalid?Qr.colorInvalid:Qr.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${Vh.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
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
    `}}X([b({type:Boolean,reflect:!0})],q.prototype,"disabled");X([b({type:Boolean,reflect:!0})],q.prototype,"invalid");X([b({type:String,reflect:!0})],q.prototype,"id");X([b({type:String,reflect:!0})],q.prototype,"label");X([b({type:String,reflect:!0})],q.prototype,"helpText");X([b({type:String,reflect:!0})],q.prototype,"size");X([b({type:Number,reflect:!0})],q.prototype,"max");X([b({type:Number,reflect:!0})],q.prototype,"min");X([b({type:Number,reflect:!0,attribute:"min-length"})],q.prototype,"minLength");X([b({type:Number,reflect:!0,attribute:"max-length"})],q.prototype,"maxLength");X([b({type:String,reflect:!0})],q.prototype,"pattern");X([b({type:String,reflect:!0})],q.prototype,"placeholder");X([b({type:Boolean,reflect:!0,attribute:"read-only"})],q.prototype,"readOnly");X([b({type:Boolean,reflect:!0})],q.prototype,"required");X([b({type:String,reflect:!0})],q.prototype,"type");X([b({type:String,reflect:!0})],q.prototype,"value");X([b({type:String,reflect:!0})],q.prototype,"name");X([b({type:Boolean})],q.prototype,"_hasPrefix");X([b({type:Boolean})],q.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",q);const Ar=typeof window<"u";function qh(t,e){if(!Ar)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Yh(t){return Ar?customElements.get("w-toast-container").init().del(t):void 0}function Qh(t,e){if(!Ar)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Xh}=Ss,xi=()=>document.createComment(""),$t=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const n=o.insertBefore(xi(),i),s=o.insertBefore(xi(),i);r=new Xh(n,s,t,t.options)}else{const n=r._$AB.nextSibling,s=r._$AM,l=s!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==s._$AU&&r._$AP(a)}if(n!==i||l){let a=r._$AA;for(;a!==n;){const u=a.nextSibling;o.insertBefore(a,i),a=u}}}return r},He=(t,e,r=t)=>(t._$AI(e,r),t),Zh={},Kh=(t,e=Zh)=>t._$AH=e,Gh=t=>t._$AH,Xr=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},ep=fo(class extends bo{constructor(t){if(super(t),t.type!==go.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],n=[];let s=0;for(const l of t)i[s]=o?o(l,s):s,n[s]=r(l,s),s++;return{values:n,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=Gh(t),{values:n,keys:s}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=s,n;const l=this.ut??=[],a=[];let u,h,c=0,g=i.length-1,d=0,f=n.length-1;for(;c<=g&&d<=f;)if(i[c]===null)c++;else if(i[g]===null)g--;else if(l[c]===s[d])a[d]=He(i[c],n[d]),c++,d++;else if(l[g]===s[f])a[f]=He(i[g],n[f]),g--,f--;else if(l[c]===s[f])a[f]=He(i[c],n[f]),$t(t,a[f+1],i[c]),c++,f--;else if(l[g]===s[d])a[d]=He(i[g],n[d]),$t(t,i[c],i[g]),g--,d++;else if(u===void 0&&(u=$i(s,d,f),h=$i(l,c,g)),u.has(l[c]))if(u.has(l[g])){const p=h.get(s[d]),m=p!==void 0?i[p]:null;if(m===null){const E=$t(t,i[c]);He(E,n[d]),a[d]=E}else a[d]=He(m,n[d]),$t(t,i[c],m),i[p]=null;d++}else Xr(i[g]),g--;else Xr(i[c]),c++;for(;d<=f;){const p=$t(t,a[f+1]);He(p,n[d]),a[d++]=p}for(;c<=g;){const p=i[c++];p!==null&&Xr(p)}return this.ut=s,Kh(t,a),Oe}});class os extends ce{static styles=[ce.styles,F`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const n=this.renderRoot.querySelector(`#${i}`);o.push(n.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Rr.wrapper}">
        <div class="${Rr.base}" id="w-toast-container-list">
          ${ep(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Rr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",os);const Bo=typeof window<"u";let is=!0;if(Bo){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>is=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const ns=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},ss=t=>{const e=is?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},tp=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},rp=t=>()=>{t&&t()},as=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=tp(t,e);ns(t),t.style.height="auto";let i=t.scrollHeight;if(Bo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",ss(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},ls=(t,e)=>{const r=(()=>{if(!e)return new Promise(n=>{e=n})})(),o=rp(e);ns(t);let i=t.scrollHeight;if(Bo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",ss(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},op=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),ip=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),np=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),sp=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),ap=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Pe={success:"success",error:"error",warning:"warning"};class lp extends ce{static styles=[ce.styles,F`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),Ne(ip,sp,np,op,ap),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&as(this._wrapper,()=>this._expanded=!0)}get#e(){return j([we.base,this.type===Pe.success&&we.positive,this.type===Pe.warning&&we.warning,this.type===Pe.error&&we.negative])}get#t(){return j([we.iconBase,this.type===Pe.success&&we.iconPositive,this.type===Pe.warning&&we.iconWarning,this.type===Pe.error&&we.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Pe.warning}get _error(){return this.type===Pe.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?x._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?x._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):x._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?ls(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${we.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${we.content}">
          <p>${this.text}</p>
        </div>
        ${Yt(this.canclose===!0,()=>w`
            <button class="${we.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",lp);class cp extends ce{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&as(this._wrapper),!this.show&&!this._removeElement&&ls(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[ce.styles,F`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${V(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",cp);class dp extends ce{static properties={level:{type:Number}};static styles=[ce.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?vo(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",dp);var up={},hp=JSON.parse('{"icon.title.bag":["Veske"]}'),pp=JSON.parse('{"icon.title.bag":["Handbag"]}'),gp=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),fp=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),bp=JSON.parse('{"icon.title.bag":["Handväska"]}'),cs=["en","nb","fi","da","sv"],ds="en",vp=()=>{var t;let e;switch((t=process==null?void 0:up)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},us=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ds},Zr=t=>cs.find(e=>t===e||t.toLowerCase().includes(e))||us();function mp(){var t;if(typeof window>"u"){const e=vp();return Zr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=us();return cs.includes(e)?Zr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Zr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ds}}var wp=(t,e,r,o,i,n)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?n:e,yp=(t,e,r,o,i)=>{const n=mp(),s=wp(n,t,e,r,o,i);x.load(n,s),x.activate(n)};yp(pp,hp,gp,fp,bp);var xp=class extends P{render(){const t=x.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return ge`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${pe(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",xp);Ar&&(window.WarpToastContainer=os,window.toast=qh,window.updateToast=Qh,window.removeToast=Yh);const $p={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class kp extends ce{static styles=[ce.styles,F`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=$p;return w`
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
      `)}}customElements.define("sidebar-element",kp);
