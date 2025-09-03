(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr=globalThis,wo=rr.ShadowRoot&&(rr.ShadyCSS===void 0||rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol(),Zo=new WeakMap;let Ri=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(wo&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Zo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Zo.set(r,e))}return e}toString(){return this.cssText}};const xo=t=>new Ri(typeof t=="string"?t:t+"",void 0,yo),F=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Ri(r,t,yo)},Dn=(t,e)=>{if(wo)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),i=rr.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=r.cssText,t.appendChild(o)}},Ko=wo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return xo(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bn,defineProperty:Rn,getOwnPropertyDescriptor:zn,getOwnPropertyNames:Mn,getOwnPropertySymbols:In,getPrototypeOf:jn}=Object,Er=globalThis,Go=Er.trustedTypes,Fn=Go?Go.emptyScript:"",Hn=Er.reactiveElementPolyfillSupport,Tt=(t,e)=>t,ir={toAttribute(t,e){switch(e){case Boolean:t=t?Fn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ko=(t,e)=>!Bn(t,e),ei={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:ko};Symbol.metadata??=Symbol("metadata"),Er.litPropertyMetadata??=new WeakMap;let Xe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ei){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,r);i!==void 0&&Rn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,o){const{get:i,set:s}=zn(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return i?.call(this)},set(n){const l=i?.call(this);s.call(this,n),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ei}static _$Ei(){if(this.hasOwnProperty(Tt("elementProperties")))return;const e=jn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Tt("properties"))){const r=this.properties,o=[...Mn(r),...In(r)];for(const i of o)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,i]of r)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const i=this._$Eu(r,o);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)r.unshift(Ko(i))}else e!==void 0&&r.push(Ko(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$EC(e,r){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:ir).toAttribute(r,o.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=o.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ir;this._$Em=i,this[i]=n.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??ko)(this[e],r))return;this.P(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,o){this._$AL.has(e)||this._$AL.set(e,r),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(e){}firstUpdated(e){}};Xe.elementStyles=[],Xe.shadowRootOptions={mode:"open"},Xe[Tt("elementProperties")]=new Map,Xe[Tt("finalized")]=new Map,Hn?.({ReactiveElement:Xe}),(Er.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=globalThis,sr=$o.trustedTypes,ti=sr?sr.createPolicy("lit-html",{createHTML:t=>t}):void 0,_o="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,So="?"+Be,Vn=`<${So}>`,et=document,Bt=()=>et.createComment(""),Rt=t=>t===null||typeof t!="object"&&typeof t!="function",Eo=Array.isArray,zi=t=>Eo(t)||typeof t?.[Symbol.iterator]=="function",Fr=`[ 	
\f\r]`,St=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ri=/-->/g,oi=/>/g,Je=RegExp(`>|${Fr}(?:([^\\s"'>=/]+)(${Fr}*=${Fr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,si=/"/g,Mi=/^(?:script|style|textarea|title)$/i,Un=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),w=Un(1),ve=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),ni=new WeakMap,Ze=et.createTreeWalker(et,129);function Ii(t,e){if(!Eo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ti!==void 0?ti.createHTML(e):e}const ji=(t,e)=>{const r=t.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=St;for(let l=0;l<r;l++){const a=t[l];let d,p,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===St?p[1]==="!--"?n=ri:p[1]!==void 0?n=oi:p[2]!==void 0?(Mi.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=Je):p[3]!==void 0&&(n=Je):n===Je?p[0]===">"?(n=i??St,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?Je:p[3]==='"'?si:ii):n===si||n===ii?n=Je:n===ri||n===oi?n=St:(n=Je,i=void 0);const u=n===Je&&t[l+1].startsWith("/>")?" ":"";s+=n===St?a+Vn:c>=0?(o.push(d),a.slice(0,c)+_o+a.slice(c)+Be+u):a+Be+(c===-2?l:u)}return[Ii(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};let uo=class Fi{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[d,p]=ji(e,r);if(this.el=Fi.createElement(d,o),Ze.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ze.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(_o)){const g=p[n++],u=i.getAttribute(c).split(Be),b=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:b[2],strings:u,ctor:b[1]==="."?Ui:b[1]==="?"?qi:b[1]==="@"?Ji:Ut}),i.removeAttribute(c)}else c.startsWith(Be)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(Mi.test(i.tagName)){const c=i.textContent.split(Be),g=c.length-1;if(g>0){i.textContent=sr?sr.emptyScript:"";for(let u=0;u<g;u++)i.append(c[u],Bt()),Ze.nextNode(),a.push({type:2,index:++s});i.append(c[g],Bt())}}}else if(i.nodeType===8)if(i.data===So)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Be,c+1))!==-1;)a.push({type:7,index:s}),c+=Be.length-1}s++}}static createElement(e,r){const o=et.createElement("template");return o.innerHTML=e,o}};function tt(t,e,r=t,o){if(e===ve)return e;let i=o!==void 0?r.o?.[o]:r.l;const s=Rt(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r.o??=[])[o]=i:r.l=i),i!==void 0&&(e=tt(t,i._$AS(t,e.values),i,o)),e}class Hi{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??et).importNode(r,!0);Ze.currentNode=i;let s=Ze.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new Cr(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new Wi(s,this,e)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(s=Ze.nextNode(),n++)}return Ze.currentNode=et,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}let Cr=class Vi{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,r,o,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=tt(this,e,r),Rt(e)?e===z||e==null||e===""?(this._$AH!==z&&this._$AR(),this._$AH=z):e!==this._$AH&&e!==ve&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==z&&Rt(this._$AH)?this._$AA.nextSibling.data=e:this.T(et.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=uo.createElement(Ii(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new Hi(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=ni.get(e.strings);return r===void 0&&ni.set(e.strings,r=new uo(e)),r}k(e){Eo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of e)i===r.length?r.push(o=new Vi(this.O(Bt()),this.O(Bt()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}};class Ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}_$AI(e,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)e=tt(this,e,r,0),n=!Rt(e)||e!==this._$AH&&e!==ve,n&&(this._$AH=e);else{const l=e;let a,d;for(e=s[0],a=0;a<s.length-1;a++)d=tt(this,l[o+a],r,a),d===ve&&(d=this._$AH[a]),n||=!Rt(d)||d!==this._$AH[a],d===z?e=z:e!==z&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ui extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===z?void 0:e}}class qi extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==z)}}class Ji extends Ut{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=tt(this,e,r,0)??z)===ve)return;const o=this._$AH,i=e===z&&o!==z||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==z&&(o===z||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Wi{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){tt(this,e)}}const qn={M:_o,P:Be,A:So,C:1,L:ji,R:Hi,D:zi,V:tt,I:Cr,H:Ut,N:qi,U:Ji,B:Ui,F:Wi},Jn=$o.litHtmlPolyfillSupport;Jn?.(uo,Cr),($o.litHtmlVersions??=[]).push("3.2.0");const Wn=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new Cr(e.insertBefore(Bt(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=class extends Xe{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=Wn(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return ve}};P._$litElement$=!0,P.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:P});const Yn=globalThis.litElementPolyfillSupport;Yn?.({LitElement:P});(globalThis.litElementVersions??=[]).push("4.1.0");function Qn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ai=String.raw`[A-Za-z][^/\s>]*`,Xn=String.raw`\B"(?:\\[^<>\n]|[^\\"<>\n])*"(?!\w)`,Zn=String.raw`\B'(?:\\[^<>\n]|[^\\'<>\n])*'(?!\w)`,Yi=String.raw`${Xn}|${Zn}`,Kn=String.raw`"(?<quotedAttrValue>[^"]*)"`,Gn=String.raw`'(?<singleQuotedAttrValue>[^']*)'`,ea=String.raw`(?<unquotedAttrValue>[^\s"'\`=<>]+)`,ta=String.raw`[^=\s>/"']+(?=[=>\s]|$)`,ra=String.raw`${Kn}|${Gn}|${ea}`,oa=String.raw`(?<attrName>${ta})(?:\s*=\s*(?:${ra}))?`,ia=String.raw`${Yi}|[^\s>]*[^\s>/]|[^\s>]*/(?!\s*>)`,Qi=String.raw`(?<attrSpace>\s*)(?:${oa}|(?<attrText>${ia}))`,sa={comment:String.raw`<!--.*?-->`,dtd:String.raw`<![^>]+>`,startTag:String.raw`<(?<startTagName>${ai})(?<attrs>(?:${Qi})*)\s*(?<closingSlash>/?)\s*>`,endTag:String.raw`</(?<endTagName>${ai})\s*>`,space:String.raw`\s+`,text:String.raw`[^<\s"']+|${Yi}|['"]`,wildcard:String.raw`.`},na=Object.entries(sa).map(([t,e])=>`(?<${t}>${e})`).join("|");function*aa(t,e){let r,{lastIndex:o}=t;for(;r=t.exec(e);)yield r,{lastIndex:o}=t;if(o!=e.length)throw new Error("Failed to parse string")}const la=new Set(["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"]);function zt(t,e="  ",r=80){const o=new RegExp(na,"gys"),i=new RegExp(Qi,"gy"),s=[];let n=null,l=0,a=0,d="",p=0,c="";const g=()=>{if(c&&c!=`
`){const E=d.indexOf(`
`),A=E==-1?d.length:E;a+c.length+A>r&&(c=`
`)}const f=c==`
`&&d?e.repeat(p):"",m=`${c}${f}${d}`;if(m){const E=m.lastIndexOf(`
`);E==-1?a+=m.length:a=m.length-E-1,s.push(m)}d=c=""},u=(...f)=>{for(const m of f)!n&&/^\s+$/.test(m)?(g(),c=m):(d||(p=l),d+=m)};for(const f of aa(o,t)){if(zt.__strict&&f.groups.wildcard)throw new Error("Unexpected wildcard");if(f.groups.endTag){const m=f.groups.endTagName.toLowerCase();m==n&&(n=null),n||(--l,u(`</${m}>`))}if(n)u(f[0]);else if(f.groups.space)u(...f[0].match(/\n/g)?.slice(0,2)??[" "]);else if(f.groups.comment||f.groups.dtd||f.groups.text||f.groups.wildcard)u(f[0]);else if(f.groups.startTag){const m=f.groups.startTagName.toLowerCase();if(u(`<${m}`),++l,f.groups.attrs){let{lastIndex:A}=i,C,R;for(;C=i.exec(f.groups.attrs);){if({lastIndex:A}=i,zt.__strict&&C.groups.attrText)throw new Error("Unexpected attr text");C.groups.attrText?(C.groups.attrSpace&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(C.groups.attrText)):((C.groups.attrSpace||!R?.groups.attrText)&&u(/\n/.test(C.groups.attrSpace)?`
`:" "),u(`${C.groups.attrName}${C.groups.quotedAttrValue?`="${C.groups.quotedAttrValue}"`:C.groups.singleQuotedAttrValue?`='${C.groups.singleQuotedAttrValue}'`:C.groups.unquotedAttrValue?`=${C.groups.unquotedAttrValue}`:""}`)),R=C}if(A!=f.groups.attrs.length)throw new Error("Failed to parse attributes")}const E=!!f.groups.closingSlash;u(E?" />":">"),E||la.has(m)?--l:["pre","textarea","script","style"].includes(m)&&(n=m)}}g();let b=!1;for(;/^\s+$/.test(s[s.length-1]);){const f=s.pop();/\n/.test(f)&&(b=!0)}return b&&s.push(`
`),s.join("")}zt.default=zt;var ca=zt;const da=Qn(ca);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ar=t=>(...e)=>({_$litDirective$:t,values:e});let Or=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this.t=e,this._$AM=r,this.i=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ho extends Or{constructor(e){if(super(e),this.it=z,e.type!==De.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===z||e==null)return this._t=void 0,this.it=e;if(e===ve)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}ho.directiveName="unsafeHTML",ho.resultType=1;const Co=Ar(ho);class ua extends P{static styles=F`
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
  `;static get properties(){return{source:{attribute:!1}}}firstUpdated(){let r=this.shadowRoot.querySelector("slot").assignedNodes().map(i=>i.nodeType===Node.TEXT_NODE?i.textContent:i.outerHTML).join("").trim();r=da(r);const o=window?.Prism.highlight(r,window.Prism.languages.markup,"html");this.source=o}render(){return w` <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />
      <slot></slot>
      <pre><code>${Co(this.source)}</code></pre>`}}customElements.define("syntax-highlight",ua);var j=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,o){return r.concat(typeof o=="string"?o:Array.isArray(o)?j.apply(void 0,o):typeof o=="object"&&o?Object.keys(o).map(function(i){return o[i]?i:""}):"")},[]).join(" ")};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ha={attribute:!0,type:String,converter:ir,reflect:!1,hasChanged:ko},pa=(t=ha,e,r)=>{const{kind:o,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),o==="accessor"){const{name:n}=r;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(o==="setter"){const{name:n}=r;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,t)}}throw Error("Unsupported decorator location: "+o)};function h(t){return(e,r)=>typeof r=="object"?pa(t,e,r):((o,i,s)=>{const n=i.hasOwnProperty(s);return i.constructor.createProperty(s,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t,e){return(r,o,i)=>{const s=n=>n.renderRoot?.querySelector(t)??null;return fa(r,o,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t??z,le=F`
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
        `;const ga=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.s-text{color:var(--w-s-color-text)}.w-40{width:4rem}.w-max{width:max-content}.pb-0{padding-bottom:0}.pl-12{padding-left:1.2rem}.pr-12{padding-right:1.2rem}.cursor-default{cursor:default}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=Symbol.for(""),ba=t=>{if(t?.r===Xi)return t?._$litStatic$},he=t=>({_$litStatic$:t,r:Xi}),li=new Map,va=t=>(e,...r)=>{const o=r.length;let i,s;const n=[],l=[];let a,d=0,p=!1;for(;d<o;){for(a=e[d];d<o&&(s=r[d],(i=ba(s))!==void 0);)a+=i+e[++d],p=!0;d!==o&&l.push(s),n.push(a),d++}if(d===o&&n.push(e[o]),p){const c=n.join("$$lit$$");(e=li.get(c))===void 0&&(n.raw=n,li.set(c,e=n)),r=l}return t(e,...r)},pe=va(w);var Ao={},Zi={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])})(Zi);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=Zi;Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(u){return!u.match(/[^a-f0-9]/i)?parseInt(u,16):NaN}function o(u,b,f){const m=r(u);if(Number.isNaN(m)||f!==void 0&&f!==u.length)throw new SyntaxError(e.errorMessages.get(b));return m}function i(u){const b=o(u,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(b)}function s(u,b){const f=o(u,e.ErrorType.MalformedUnicode,4);if(b!==void 0){const m=o(b,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(f,m)}return String.fromCharCode(f)}function n(u){return u.charAt(0)==="{"&&u.charAt(u.length-1)==="}"}function l(u){if(!n(u))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const b=u.slice(1,-1),f=o(b,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(f)}catch(m){throw m instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):m}}function a(u,b=!1){if(b)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const f=parseInt(u,8);return String.fromCharCode(f)}const d=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function p(u){return d.get(u)||u}const c=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function g(u,b=!1){return u.replace(c,function(f,m,E,A,C,R,k,O,L){if(m!==void 0)return"\\";if(E!==void 0)return i(E);if(A!==void 0)return l(A);if(C!==void 0)return s(C,R);if(k!==void 0)return s(k);if(O==="0")return"\0";if(O!==void 0)return a(O,!b);if(L!==void 0)return p(L);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=g,t.default=g})(Ao);const He=t=>typeof t=="string",ma=t=>typeof t=="function",ci=new Map,Ki="en";function Oo(t){return[...Array.isArray(t)?t:[t],Ki]}function Lo(t,e,r){const o=Oo(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return nr(()=>ar("date",o,r),()=>new Intl.DateTimeFormat(o,i)).format(He(e)?new Date(e):e)}function wa(t,e,r){let o;if(r||(r="default"),typeof r=="string")switch(o={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":o.timeZoneName="short";break;case"short":delete o.second}else o=r;return Lo(t,e,o)}function po(t,e,r){const o=Oo(t);return nr(()=>ar("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function di(t,e,r,{offset:o=0,...i}){const s=Oo(t),n=e?nr(()=>ar("plural-ordinal",s),()=>new Intl.PluralRules(s,{type:"ordinal"})):nr(()=>ar("plural-cardinal",s),()=>new Intl.PluralRules(s,{type:"cardinal"}));return i[r]??i[n.select(r-o)]??i.other}function nr(t,e){const r=t();let o=ci.get(r);return o||(o=e(),ci.set(r,o)),o}function ar(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Gi=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,es="%__lingui_octothorpe__%",ya=(t,e,r={})=>{const o=e||t,i=n=>typeof n=="object"?n:r[n],s=(n,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=po(o,n,a);return l.replace(new RegExp(es,"g"),d)};return{plural:(n,l)=>{const{offset:a=0}=l,d=di(o,!1,n,l);return s(n-a,d)},selectordinal:(n,l)=>{const{offset:a=0}=l,d=di(o,!0,n,l);return s(n-a,d)},select:xa,number:(n,l)=>po(o,n,i(l)||{style:l}),date:(n,l)=>Lo(o,n,i(l)||l),time:(n,l)=>wa(o,n,i(l)||l)}},xa=(t,e)=>e[t]??e.other;function ka(t,e,r){return(o={},i)=>{const s=ya(e,r,i),n=(a,d=!1)=>Array.isArray(a)?a.reduce((p,c)=>{if(c==="#"&&d)return p+es;if(He(c))return p+c;const[g,u,b]=c;let f={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(b).forEach(([E,A])=>{f[E]=n(A,u==="plural"||u==="selectordinal")}):f=b;let m;if(u){const E=s[u];m=E(o[g],f)}else m=o[g];return m==null?p:p+m},""):a,l=n(t);return He(l)&&Gi.test(l)?Ao.unraw(l):He(l)?l:l?String(l):""}}var $a=Object.defineProperty,_a=(t,e,r)=>e in t?$a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Sa=(t,e,r)=>(_a(t,e+"",r),r);let Ea=class{constructor(){Sa(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}};var Ca=Object.defineProperty,Aa=(t,e,r)=>e in t?Ca(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,We=(t,e,r)=>(Aa(t,typeof e!="symbol"?e+"":e,r),r);let Oa=class extends Ea{constructor(e){super(),We(this,"_locale",""),We(this,"_locales"),We(this,"_localeData",{}),We(this,"_messages",{}),We(this,"_missing"),We(this,"_messageCompiler"),We(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Ki,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=o?.message;e||(e=""),He(e)||(r=e.values||r,i=e.message,e=e.id);const s=this.messages[e],n=s===void 0,l=this._missing;if(l&&n)return ma(l)?l(this._locale,e):l;n&&this.emit("missing",{id:e,locale:this._locale});let a=s||i||e;return He(a)&&(this._messageCompiler?a=this._messageCompiler(a):console.warn(`Uncompiled message detected! Message:

> ${a}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),He(a)&&Gi.test(a)?JSON.parse(`"${a}"`):He(a)?a:ka(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Lo(this._locales||this._locale,e,r)}number(e,r){return po(this._locales||this._locale,e,r)}};function La(t={}){return new Oa(t)}const x=La();var Na={},Ta=JSON.parse('{"icon.title.search":["Forstørrelsesglass"]}'),Pa=JSON.parse('{"icon.title.search":["Magnifying glass"]}'),Da=JSON.parse('{"icon.title.search":["Suurennuslasi"]}'),Ba=JSON.parse('{"icon.title.search":["Forstørrelsesglas"]}'),Ra=JSON.parse('{"icon.title.search":["Förstoringsglas"]}'),ts=["en","nb","fi","da","sv"],rs="en",za=()=>{var t;let e;switch((t=process==null?void 0:Na)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},os=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":rs},Hr=t=>ts.find(e=>t===e||t.toLowerCase().includes(e))||os();function Ma(){var t;if(typeof window>"u"){const e=za();return Hr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=os();return ts.includes(e)?Hr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Hr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),rs}}var Ia=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,ja=(t,e,r,o,i)=>{const s=Ma(),n=Ia(s,t,e,r,o,i);x.load(s,n),x.activate(s)};ja(Pa,Ta,Da,Ba,Ra);var Fa=class extends P{render(){const t=x.t({message:"Magnifying glass",id:"icon.title.search",comment:"Title for search icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-search-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.905 12.102A6.042 6.042 0 1 0 4.18.981a6.042 6.042 0 0 0 4.726 11.121Zm1.909-1.289L15.5 15.5"></path></svg>`}};customElements.get("w-icon-search-16")||customElements.define("w-icon-search-16",Fa);var Ha={},Va=JSON.parse('{"icon.title.close":["Kryss"]}'),Ua=JSON.parse('{"icon.title.close":["Cross"]}'),qa=JSON.parse('{"icon.title.close":["Rasti"]}'),Ja=JSON.parse('{"icon.title.close":["Kryds"]}'),Wa=JSON.parse('{"icon.title.close":["Kryss"]}'),is=["en","nb","fi","da","sv"],ss="en",Ya=()=>{var t;let e;switch((t=process==null?void 0:Ha)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ns=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ss},Vr=t=>is.find(e=>t===e||t.toLowerCase().includes(e))||ns();function Qa(){var t;if(typeof window>"u"){const e=Ya();return Vr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ns();return is.includes(e)?Vr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Vr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ss}}var Xa=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Za=(t,e,r,o,i)=>{const s=Qa(),n=Xa(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Za(Ua,Va,qa,Ja,Wa);var Ka=class extends P{render(){const t=x.t({message:"Cross",id:"icon.title.close",comment:"Title for close icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-close-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.5 3.5-9 9m0-9 9 9"></path></svg>`}};customElements.get("w-icon-close-16")||customElements.define("w-icon-close-16",Ka);var Ga=Object.defineProperty,Lr=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Ga(e,r,i),i};const as="absolute top-0 bottom-0 flex justify-center items-center focusable rounded-4 focus:[--w-outline-offset:-2px] bg-transparent ",el={wrapper:as+"right-0",wrapperWithLabel:"w-max pr-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"},tl={wrapper:as+"left-0",wrapperWithLabel:"w-max pl-12",wrapperWithIcon:"w-40",label:"antialiased block relative cursor-default pb-0 font-bold text-xs s-text"};class Jt extends P{constructor(){super(...arguments),this.clear=!1,this.search=!1}static{this.styles=[le,ga]}get _classBase(){return this.slot==="suffix"?el:tl}get _classes(){return j([this._classBase.wrapper,this.label?this._classBase.wrapperWithLabel:this._classBase.wrapperWithIcon])}get _searchButton(){return w`
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
    `}get _markup(){if(this.label)return this._text;if(this.search)return this._searchButton;if(this.clear)return this._clearButton}render(){return w`${this._markup}`}}Lr([h({attribute:"aria-label"})],Jt.prototype,"ariaLabel");Lr([h({type:Boolean})],Jt.prototype,"clear");Lr([h({type:Boolean})],Jt.prototype,"search");Lr([h()],Jt.prototype,"label");customElements.get("w-affix")||customElements.define("w-affix",Jt);var rl={},ol=JSON.parse('{"icon.title.info":["Informasjonssirkel"]}'),il=JSON.parse('{"icon.title.info":["Information circle"]}'),sl=JSON.parse('{"icon.title.info":["Ympyrä, jonka sisällä on i-kirjain"]}'),nl=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),al=JSON.parse('{"icon.title.info":["Informationscirkel"]}'),ls=["en","nb","fi","da","sv"],cs="en",ll=()=>{var t;let e;switch((t=process==null?void 0:rl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ds=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":cs},Ur=t=>ls.find(e=>t===e||t.toLowerCase().includes(e))||ds();function cl(){var t;if(typeof window>"u"){const e=ll();return Ur(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ds();return ls.includes(e)?Ur(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Ur(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),cs}}var dl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,ul=(t,e,r,o,i)=>{const s=cl(),n=dl(s,t,e,r,o,i);x.load(s,n),x.activate(s)};ul(il,ol,sl,nl,al);var hl=class extends P{render(){const t=x.t({message:"Information circle",id:"icon.title.info",comment:"Title for info icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-info-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" d="M8 6.5v5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4v.5"></path><path stroke="currentColor" stroke-miterlimit="10" d="M8 .5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Z"></path></svg>`}};customElements.get("w-icon-info-16")||customElements.define("w-icon-info-16",hl);var pl={},fl=JSON.parse('{"icon.title.warning":["Varseltrekant med utropstegn"]}'),gl=JSON.parse('{"icon.title.warning":["Warning triangle with exclamation point"]}'),bl=JSON.parse('{"icon.title.warning":["Varoituskolmio, jonka sisällä on huutomerkki"]}'),vl=JSON.parse('{"icon.title.warning":["Advarselstrekant med et udråbstegn"]}'),ml=JSON.parse('{"icon.title.warning":["Varningstriangel med utropstecken"]}'),us=["en","nb","fi","da","sv"],hs="en",wl=()=>{var t;let e;switch((t=process==null?void 0:pl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ps=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":hs},qr=t=>us.find(e=>t===e||t.toLowerCase().includes(e))||ps();function yl(){var t;if(typeof window>"u"){const e=wl();return qr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ps();return us.includes(e)?qr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),qr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),hs}}var xl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,kl=(t,e,r,o,i)=>{const s=yl(),n=xl(s,t,e,r,o,i);x.load(s,n),x.activate(s)};kl(gl,fl,bl,vl,ml);var $l=class extends P{render(){const t=x.t({message:"Warning triangle with exclamation point",id:"icon.title.warning",comment:"Title for warning icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-warning-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" d="m.712 14.07 6.25-12.994a1 1 0 0 1 1.792-.022l6.635 12.995a1 1 0 0 1-.89 1.455H1.613a1 1 0 0 1-.902-1.434Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6v4.992M8 13v.333"></path></svg>`}};customElements.get("w-icon-warning-16")||customElements.define("w-icon-warning-16",$l);var _l={},Sl=JSON.parse('{"icon.title.error":["Åttekant med utropstegn"]}'),El=JSON.parse('{"icon.title.error":["Octagon with exclamation point"]}'),Cl=JSON.parse('{"icon.title.error":["Kahdeksankulmio, jonka sisällä on huutomerkki"]}'),Al=JSON.parse('{"icon.title.error":["Ottekant med et udråbstegn"]}'),Ol=JSON.parse('{"icon.title.error":["Oktagon med utropstecken"]}'),fs=["en","nb","fi","da","sv"],gs="en",Ll=()=>{var t;let e;switch((t=process==null?void 0:_l)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},bs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":gs},Jr=t=>fs.find(e=>t===e||t.toLowerCase().includes(e))||bs();function Nl(){var t;if(typeof window>"u"){const e=Ll();return Jr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=bs();return fs.includes(e)?Jr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Jr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),gs}}var Tl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Pl=(t,e,r,o,i)=>{const s=Nl(),n=Tl(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Pl(El,Sl,Cl,Al,Ol);var Dl=class extends P{render(){const t=x.t({message:"Octagon with exclamation point",id:"icon.title.error",comment:"Title for error icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-error-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.107 4.748 15.5h6.503l4.248-4.393V4.893L11.252.5H4.748L.5 4.893z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 11.398a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M8 8.5V3"></path></svg>`}};customElements.get("w-icon-error-16")||customElements.define("w-icon-error-16",Dl);var Bl={},Rl=JSON.parse('{"icon.title.success":["Sirkel med sjekkmerke"]}'),zl=JSON.parse('{"icon.title.success":["Circle with checkmark"]}'),Ml=JSON.parse('{"icon.title.success":["Ympyrä, jonka sisällä on valintamerkki"]}'),Il=JSON.parse('{"icon.title.success":["Cirkel med et flueben"]}'),jl=JSON.parse('{"icon.title.success":["Cirkel med bock"]}'),vs=["en","nb","fi","da","sv"],ms="en",Fl=()=>{var t;let e;switch((t=process==null?void 0:Bl)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},ws=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ms},Wr=t=>vs.find(e=>t===e||t.toLowerCase().includes(e))||ws();function Hl(){var t;if(typeof window>"u"){const e=Fl();return Wr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=ws();return vs.includes(e)?Wr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Wr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ms}}var Vl=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Ul=(t,e,r,o,i)=>{const s=Hl(),n=Vl(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Ul(zl,Rl,Ml,Il,jl);var ql=class extends P{render(){const t=x.t({message:"Circle with checkmark",id:"icon.title.success",comment:"Title for success icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-success-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 8.815 1.633 2.318a.7.7 0 0 0 1.138.034l5.228-6.615"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.999a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0"></path></svg>`}};customElements.get("w-icon-success-16")||customElements.define("w-icon-success-16",ql);const Jl=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.will-change-height{will-change:height}.border{border-width:1px}.border-l-4{border-left-width:4px}.rounded-4{border-radius:4px}.block{display:block}.flex{display:flex}.static{position:static}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-bg-negative-subtle{background-color:var(--w-s-color-background-negative-subtle)}.s-bg-positive-subtle{background-color:var(--w-s-color-background-positive-subtle)}.s-bg-warning-subtle{background-color:var(--w-s-color-background-warning-subtle)}.s-text{color:var(--w-s-color-text)}.s-icon-info{color:var(--w-s-color-icon-info)}.s-icon-negative{color:var(--w-s-color-icon-negative)}.s-icon-positive{color:var(--w-s-color-icon-positive)}.s-icon-warning{color:var(--w-s-color-icon-warning)}.s-border-info-subtle{border-color:var(--w-s-color-border-info-subtle)}.s-border-l-info{border-left-color:var(--w-s-color-border-info)}.s-border-l-negative{border-left-color:var(--w-s-color-border-negative)}.s-border-l-positive{border-left-color:var(--w-s-color-border-positive)}.s-border-l-warning{border-left-color:var(--w-s-color-border-warning)}.s-border-negative-subtle{border-color:var(--w-s-color-border-negative-subtle)}.s-border-positive-subtle{border-color:var(--w-s-color-border-positive-subtle)}.s-border-warning-subtle{border-color:var(--w-s-color-border-warning-subtle)}.min-w-16{min-width:1.6rem}.w-16{width:1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.mr-8{margin-right:.8rem}.p-16{padding:1.6rem}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}`;var Wl=Object.defineProperty,No=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Wl(e,r,i),i};const Et={wrapper:"flex p-16 border border-l-4 rounded-4 s-text",willChangeHeight:"will-change-height",textWrapper:"last-child:mb-0 text-s",title:"text-s",icon:"w-16 mr-8 min-w-16",negative:"s-border-negative-subtle s-border-l-negative s-bg-negative-subtle",negativeIcon:"s-icon-negative",positive:"s-border-positive-subtle s-border-l-positive s-bg-positive-subtle",positiveIcon:"s-icon-positive",warning:"s-border-warning-subtle s-border-l-warning s-bg-warning-subtle",warningIcon:"s-icon-warning",info:"s-border-info-subtle s-border-l-info s-bg-info-subtle",infoIcon:"s-icon-info"},Ct={negative:"negative",positive:"positive",warning:"warning",info:"info"};class Nr extends P{constructor(){super(),this.variant="info",this.show=!0,this.role="alert",this.show=!1,this.role="alert"}connectedCallback(){if(super.connectedCallback(),!this.variant||!Ct[this.variant])throw new Error(`Invalid 'variant' attribute. Set its value to one of the following:
negative, positive, warning, info.`)}get _wrapperClasses(){return j([Et.wrapper,Et[this.variant]])}get _iconClasses(){const e=Et[`${this.variant}Icon`];return j([Et.icon,e])}static{this.styles=[le,Jl,F`
      :host {
        display: block;
      }

      ::slotted(:first-child) {
        margin-top: 0px;
      }

      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}get _icon(){return this.variant===Ct.info?w` <w-icon-info-16></w-icon-info-16>`:this.variant===Ct.warning?w` <w-icon-warning-16></w-icon-warning-16>`:this.variant===Ct.negative?w` <w-icon-error-16></w-icon-error-16>`:this.variant===Ct.positive?w` <w-icon-success-16></w-icon-success-16>`:""}render(){return w`
      <w-expand-transition ?show=${this.show}>
        <div role=${this.role} class=${this._wrapperClasses}>
          <div class=${this._iconClasses}>${this._icon}</div>
          <div class=${Et.textWrapper}>
            <slot></slot>
          </div>
        </div>
      </w-expand-transition>
    `}}No([h({reflect:!0})],Nr.prototype,"variant");No([h({type:Boolean,reflect:!0})],Nr.prototype,"show");No([h({reflect:!0})],Nr.prototype,"role");customElements.get("w-alert")||customElements.define("w-alert",Nr);const Yl=["top","right","bottom","left"],rt=Math.min,xe=Math.max,lr=Math.round,Ne=t=>({x:t,y:t}),Ql={left:"right",right:"left",bottom:"top",top:"bottom"},Xl={start:"end",end:"start"};function fo(t,e,r){return xe(t,rt(e,r))}function st(t,e){return typeof t=="function"?t(e):t}function Ve(t){return t.split("-")[0]}function wt(t){return t.split("-")[1]}function ys(t){return t==="x"?"y":"x"}function To(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(Ve(t))?"y":"x"}function Po(t){return ys(ot(t))}function Zl(t,e,r){r===void 0&&(r=!1);const o=wt(t),i=Po(t),s=To(i);let n=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(n=cr(n)),[n,cr(n)]}function Kl(t){const e=cr(t);return[go(t),e,go(e)]}function go(t){return t.replace(/start|end/g,e=>Xl[e])}function Gl(t,e,r){const o=["left","right"],i=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return r?e?i:o:e?o:i;case"left":case"right":return e?s:n;default:return[]}}function ec(t,e,r,o){const i=wt(t);let s=Gl(Ve(t),r==="start",o);return i&&(s=s.map(n=>n+"-"+i),e&&(s=s.concat(s.map(go)))),s}function cr(t){return t.replace(/left|right|bottom|top/g,e=>Ql[e])}function tc(t){return{top:0,right:0,bottom:0,left:0,...t}}function xs(t){return typeof t!="number"?tc(t):{top:t,right:t,bottom:t,left:t}}function dr(t){const{x:e,y:r,width:o,height:i}=t;return{width:o,height:i,top:r,left:e,right:e+o,bottom:r+i,x:e,y:r}}function ui(t,e,r){let{reference:o,floating:i}=t;const s=ot(e),n=Po(e),l=To(n),a=Ve(e),d=s==="y",p=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let u;switch(a){case"top":u={x:p,y:o.y-i.height};break;case"bottom":u={x:p,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:c};break;case"left":u={x:o.x-i.width,y:c};break;default:u={x:o.x,y:o.y}}switch(wt(e)){case"start":u[n]-=g*(r&&d?-1:1);break;case"end":u[n]+=g*(r&&d?-1:1);break}return u}const rc=async(t,e,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:n}=r,l=s.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:c}=ui(d,o,a),g=o,u={},b=0;for(let f=0;f<l.length;f++){const{name:m,fn:E}=l[f],{x:A,y:C,data:R,reset:k}=await E({x:p,y:c,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:d,platform:n,elements:{reference:t,floating:e}});p=A??p,c=C??c,u={...u,[m]:{...u[m],...R}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(d=k.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:p,y:c}=ui(d,g,a)),f=-1)}return{x:p,y:c,placement:g,strategy:i,middlewareData:u}};async function Mt(t,e){var r;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:n,elements:l,strategy:a}=t,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:c="floating",altBoundary:g=!1,padding:u=0}=st(e,t),b=xs(u),m=l[g?c==="floating"?"reference":"floating":c],E=dr(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(m)))==null||r?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:p,strategy:a})),A=c==="floating"?{x:o,y:i,width:n.floating.width,height:n.floating.height}:n.reference,C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(C))?await(s.getScale==null?void 0:s.getScale(C))||{x:1,y:1}:{x:1,y:1},k=dr(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:A,offsetParent:C,strategy:a}):A);return{top:(E.top-k.top+b.top)/R.y,bottom:(k.bottom-E.bottom+b.bottom)/R.y,left:(E.left-k.left+b.left)/R.x,right:(k.right-E.right+b.right)/R.x}}const oc=t=>({name:"arrow",options:t,async fn(e){const{x:r,y:o,placement:i,rects:s,platform:n,elements:l,middlewareData:a}=e,{element:d,padding:p=0}=st(t,e)||{};if(d==null)return{};const c=xs(p),g={x:r,y:o},u=Po(i),b=To(u),f=await n.getDimensions(d),m=u==="y",E=m?"top":"left",A=m?"bottom":"right",C=m?"clientHeight":"clientWidth",R=s.reference[b]+s.reference[u]-g[u]-s.floating[b],k=g[u]-s.reference[u],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let L=O?O[C]:0;(!L||!await(n.isElement==null?void 0:n.isElement(O)))&&(L=l.floating[C]||s.floating[b]);const M=R/2-k/2,H=L/2-f[b]/2-1,U=rt(c[E],H),Z=rt(c[A],H),V=U,de=L-f[b]-Z,B=L/2-f[b]/2+M,G=fo(V,B,de),Y=!a.arrow&&wt(i)!=null&&B!==G&&s.reference[b]/2-(B<V?U:Z)-f[b]/2<0,se=Y?B<V?B-V:B-de:0;return{[u]:g[u]+se,data:{[u]:G,centerOffset:B-G-se,...Y&&{alignmentOffset:se}},reset:Y}}}),ic=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;const{placement:i,middlewareData:s,rects:n,initialPlacement:l,platform:a,elements:d}=e,{mainAxis:p=!0,crossAxis:c=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:f=!0,...m}=st(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const E=Ve(i),A=ot(l),C=Ve(l)===l,R=await(a.isRTL==null?void 0:a.isRTL(d.floating)),k=g||(C||!f?[cr(l)]:Kl(l)),O=b!=="none";!g&&O&&k.push(...ec(l,f,b,R));const L=[l,...k],M=await Mt(e,m),H=[];let U=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&H.push(M[E]),c){const B=Zl(i,n,R);H.push(M[B[0]],M[B[1]])}if(U=[...U,{placement:i,overflows:H}],!H.every(B=>B<=0)){var Z,V;const B=(((Z=s.flip)==null?void 0:Z.index)||0)+1,G=L[B];if(G)return{data:{index:B,overflows:U},reset:{placement:G}};let Y=(V=U.filter(se=>se.overflows[0]<=0).sort((se,ee)=>se.overflows[1]-ee.overflows[1])[0])==null?void 0:V.placement;if(!Y)switch(u){case"bestFit":{var de;const se=(de=U.filter(ee=>{if(O){const ne=ot(ee.placement);return ne===A||ne==="y"}return!0}).map(ee=>[ee.placement,ee.overflows.filter(ne=>ne>0).reduce((ne,lt)=>ne+lt,0)]).sort((ee,ne)=>ee[1]-ne[1])[0])==null?void 0:de[0];se&&(Y=se);break}case"initialPlacement":Y=l;break}if(i!==Y)return{reset:{placement:Y}}}return{}}}};function hi(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function pi(t){return Yl.some(e=>t[e]>=0)}const sc=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:r}=e,{strategy:o="referenceHidden",...i}=st(t,e);switch(o){case"referenceHidden":{const s=await Mt(e,{...i,elementContext:"reference"}),n=hi(s,r.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:pi(n)}}}case"escaped":{const s=await Mt(e,{...i,altBoundary:!0}),n=hi(s,r.floating);return{data:{escapedOffsets:n,escaped:pi(n)}}}default:return{}}}}};async function nc(t,e){const{placement:r,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),n=Ve(r),l=wt(r),a=ot(r)==="y",d=["left","top"].includes(n)?-1:1,p=s&&a?-1:1,c=st(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof b=="number"&&(u=l==="end"?b*-1:b),a?{x:u*p,y:g*d}:{x:g*d,y:u*p}}const ac=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;const{x:i,y:s,placement:n,middlewareData:l}=e,a=await nc(e,t);return n===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:n}}}}},lc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:n=!1,limiter:l={fn:m=>{let{x:E,y:A}=m;return{x:E,y:A}}},...a}=st(t,e),d={x:r,y:o},p=await Mt(e,a),c=ot(Ve(i)),g=ys(c);let u=d[g],b=d[c];if(s){const m=g==="y"?"top":"left",E=g==="y"?"bottom":"right",A=u+p[m],C=u-p[E];u=fo(A,u,C)}if(n){const m=c==="y"?"top":"left",E=c==="y"?"bottom":"right",A=b+p[m],C=b-p[E];b=fo(A,b,C)}const f=l.fn({...e,[g]:u,[c]:b});return{...f,data:{x:f.x-r,y:f.y-o,enabled:{[g]:s,[c]:n}}}}}},cc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;const{placement:i,rects:s,platform:n,elements:l}=e,{apply:a=()=>{},...d}=st(t,e),p=await Mt(e,d),c=Ve(i),g=wt(i),u=ot(i)==="y",{width:b,height:f}=s.floating;let m,E;c==="top"||c==="bottom"?(m=c,E=g===(await(n.isRTL==null?void 0:n.isRTL(l.floating))?"start":"end")?"left":"right"):(E=c,m=g==="end"?"top":"bottom");const A=f-p.top-p.bottom,C=b-p.left-p.right,R=rt(f-p[m],A),k=rt(b-p[E],C),O=!e.middlewareData.shift;let L=R,M=k;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(M=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=A),O&&!g){const U=xe(p.left,0),Z=xe(p.right,0),V=xe(p.top,0),de=xe(p.bottom,0);u?M=b-2*(U!==0||Z!==0?U+Z:xe(p.left,p.right)):L=f-2*(V!==0||de!==0?V+de:xe(p.top,p.bottom))}await a({...e,availableWidth:M,availableHeight:L});const H=await n.getDimensions(l.floating);return b!==H.width||f!==H.height?{reset:{rects:!0}}:{}}}};function Tr(){return typeof window<"u"}function yt(t){return ks(t)?(t.nodeName||"").toLowerCase():"#document"}function me(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Re(t){var e;return(e=(ks(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ks(t){return Tr()?t instanceof Node||t instanceof me(t).Node:!1}function Se(t){return Tr()?t instanceof Element||t instanceof me(t).Element:!1}function Te(t){return Tr()?t instanceof HTMLElement||t instanceof me(t).HTMLElement:!1}function fi(t){return!Tr()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof me(t).ShadowRoot}function Wt(t){const{overflow:e,overflowX:r,overflowY:o,display:i}=Ee(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(i)}function dc(t){return["table","td","th"].includes(yt(t))}function Pr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Do(t){const e=Bo(),r=Se(t)?Ee(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function uc(t){let e=Ue(t);for(;Te(e)&&!gt(e);){if(Do(e))return e;if(Pr(e))return null;e=Ue(e)}return null}function Bo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function gt(t){return["html","body","#document"].includes(yt(t))}function Ee(t){return me(t).getComputedStyle(t)}function Dr(t){return Se(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ue(t){if(yt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||fi(t)&&t.host||Re(t);return fi(e)?e.host:e}function $s(t){const e=Ue(t);return gt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Te(e)&&Wt(e)?e:$s(e)}function bo(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);const i=$s(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),n=me(i);if(s){const l=vo(n);return e.concat(n,n.visualViewport||[],Wt(i)?i:[],l&&r?bo(l):[])}return e.concat(i,bo(i,[],r))}function vo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function _s(t){const e=Ee(t);let r=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=Te(t),s=i?t.offsetWidth:r,n=i?t.offsetHeight:o,l=lr(r)!==s||lr(o)!==n;return l&&(r=s,o=n),{width:r,height:o,$:l}}function Ss(t){return Se(t)?t:t.contextElement}function ft(t){const e=Ss(t);if(!Te(e))return Ne(1);const r=e.getBoundingClientRect(),{width:o,height:i,$:s}=_s(e);let n=(s?lr(r.width):r.width)/o,l=(s?lr(r.height):r.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const hc=Ne(0);function Es(t){const e=me(t);return!Bo()||!e.visualViewport?hc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function pc(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==me(t)?!1:e}function It(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);const i=t.getBoundingClientRect(),s=Ss(t);let n=Ne(1);e&&(o?Se(o)&&(n=ft(o)):n=ft(t));const l=pc(s,r,o)?Es(s):Ne(0);let a=(i.left+l.x)/n.x,d=(i.top+l.y)/n.y,p=i.width/n.x,c=i.height/n.y;if(s){const g=me(s),u=o&&Se(o)?me(o):o;let b=g,f=vo(b);for(;f&&o&&u!==b;){const m=ft(f),E=f.getBoundingClientRect(),A=Ee(f),C=E.left+(f.clientLeft+parseFloat(A.paddingLeft))*m.x,R=E.top+(f.clientTop+parseFloat(A.paddingTop))*m.y;a*=m.x,d*=m.y,p*=m.x,c*=m.y,a+=C,d+=R,b=me(f),f=vo(b)}}return dr({width:p,height:c,x:a,y:d})}function Ro(t,e){const r=Dr(t).scrollLeft;return e?e.left+r:It(Re(t)).left+r}function Cs(t,e,r){r===void 0&&(r=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(r?0:Ro(t,o)),s=o.top+e.scrollTop;return{x:i,y:s}}function fc(t){let{elements:e,rect:r,offsetParent:o,strategy:i}=t;const s=i==="fixed",n=Re(o),l=e?Pr(e.floating):!1;if(o===n||l&&s)return r;let a={scrollLeft:0,scrollTop:0},d=Ne(1);const p=Ne(0),c=Te(o);if((c||!c&&!s)&&((yt(o)!=="body"||Wt(n))&&(a=Dr(o)),Te(o))){const u=It(o);d=ft(o),p.x=u.x+o.clientLeft,p.y=u.y+o.clientTop}const g=n&&!c&&!s?Cs(n,a,!0):Ne(0);return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-a.scrollLeft*d.x+p.x+g.x,y:r.y*d.y-a.scrollTop*d.y+p.y+g.y}}function gc(t){return Array.from(t.getClientRects())}function bc(t){const e=Re(t),r=Dr(t),o=t.ownerDocument.body,i=xe(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=xe(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let n=-r.scrollLeft+Ro(t);const l=-r.scrollTop;return Ee(o).direction==="rtl"&&(n+=xe(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:n,y:l}}function vc(t,e){const r=me(t),o=Re(t),i=r.visualViewport;let s=o.clientWidth,n=o.clientHeight,l=0,a=0;if(i){s=i.width,n=i.height;const d=Bo();(!d||d&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:s,height:n,x:l,y:a}}function mc(t,e){const r=It(t,!0,e==="fixed"),o=r.top+t.clientTop,i=r.left+t.clientLeft,s=Te(t)?ft(t):Ne(1),n=t.clientWidth*s.x,l=t.clientHeight*s.y,a=i*s.x,d=o*s.y;return{width:n,height:l,x:a,y:d}}function gi(t,e,r){let o;if(e==="viewport")o=vc(t,r);else if(e==="document")o=bc(Re(t));else if(Se(e))o=mc(e,r);else{const i=Es(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return dr(o)}function As(t,e){const r=Ue(t);return r===e||!Se(r)||gt(r)?!1:Ee(r).position==="fixed"||As(r,e)}function wc(t,e){const r=e.get(t);if(r)return r;let o=bo(t,[],!1).filter(l=>Se(l)&&yt(l)!=="body"),i=null;const s=Ee(t).position==="fixed";let n=s?Ue(t):t;for(;Se(n)&&!gt(n);){const l=Ee(n),a=Do(n);!a&&l.position==="fixed"&&(i=null),(s?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Wt(n)&&!a&&As(t,n))?o=o.filter(p=>p!==n):i=l,n=Ue(n)}return e.set(t,o),o}function yc(t){let{element:e,boundary:r,rootBoundary:o,strategy:i}=t;const n=[...r==="clippingAncestors"?Pr(e)?[]:wc(e,this._c):[].concat(r),o],l=n[0],a=n.reduce((d,p)=>{const c=gi(e,p,i);return d.top=xe(c.top,d.top),d.right=rt(c.right,d.right),d.bottom=rt(c.bottom,d.bottom),d.left=xe(c.left,d.left),d},gi(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function xc(t){const{width:e,height:r}=_s(t);return{width:e,height:r}}function kc(t,e,r){const o=Te(e),i=Re(e),s=r==="fixed",n=It(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const a=Ne(0);if(o||!o&&!s)if((yt(e)!=="body"||Wt(i))&&(l=Dr(e)),o){const g=It(e,!0,s,e);a.x=g.x+e.clientLeft,a.y=g.y+e.clientTop}else i&&(a.x=Ro(i));const d=i&&!o&&!s?Cs(i,l):Ne(0),p=n.left+l.scrollLeft-a.x-d.x,c=n.top+l.scrollTop-a.y-d.y;return{x:p,y:c,width:n.width,height:n.height}}function Yr(t){return Ee(t).position==="static"}function bi(t,e){if(!Te(t)||Ee(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Re(t)===r&&(r=r.ownerDocument.body),r}function Os(t,e){const r=me(t);if(Pr(t))return r;if(!Te(t)){let i=Ue(t);for(;i&&!gt(i);){if(Se(i)&&!Yr(i))return i;i=Ue(i)}return r}let o=bi(t,e);for(;o&&dc(o)&&Yr(o);)o=bi(o,e);return o&&gt(o)&&Yr(o)&&!Do(o)?r:o||uc(t)||r}const $c=async function(t){const e=this.getOffsetParent||Os,r=this.getDimensions,o=await r(t.floating);return{reference:kc(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function _c(t){return Ee(t).direction==="rtl"}const Sc={convertOffsetParentRelativeRectToViewportRelativeRect:fc,getDocumentElement:Re,getClippingRect:yc,getOffsetParent:Os,getElementRects:$c,getClientRects:gc,getDimensions:xc,getScale:ft,isElement:Se,isRTL:_c},Ec=ac,Cc=lc,Ac=ic,Oc=cc,Lc=sc,Nc=oc,Tc=(t,e,r)=>{const o=new Map,i={platform:Sc,...r},s={...i.platform,_c:o};return rc(t,e,{...i,platform:s})},ur="top-start",hr="top",pr="top-end",fr="right-start",gr="right",br="right-end",vr="bottom-start",jt="bottom",mr="bottom-end",wr="left-start",yr="left",xr="left-end",vi=[ur,hr,pr,fr,gr,br,vr,jt,mr,wr,yr,xr],pt={[ur]:vr,[hr]:jt,[pr]:mr,[vr]:ur,[jt]:hr,[mr]:pr,[wr]:fr,[yr]:gr,[xr]:br,[fr]:wr,[gr]:yr,[br]:xr},Pc={[wr]:-45,[yr]:-45,[xr]:-45,[ur]:45,[hr]:45,[pr]:45,[fr]:135,[gr]:135,[br]:135,[vr]:-135,[jt]:-135,[mr]:-135},Ls=t=>{let e;return/-/.test(t)?e=t.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},Dc=t=>t.split("-")[0],Bc=t=>pt[Dc(t)],Ns=t=>pt[t],Rc=t=>Pc[Ns(t)],zc=(t,e,r)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${Ls(Bc(r))}`]:"-0.5px",transform:`rotate(${e}deg)`})},mi=8,er=24;async function wi(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const r=t.attentionEl;return Tc(e,r,{placement:t?.directionName??jt,middleware:[Ec({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Ac({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Cc({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Nc({element:t?.arrowEl}),Lc(),Oc({apply(){Object.assign(r.style,{paddingRight:`${mi}px`,paddingLeft:`${mi}px`})}})]}).then(({x:o,y:i,middlewareData:s,placement:n})=>{if(t.actualDirection=n,t?.isCallout||Object.assign(r.style,{left:`${o}px`,top:`${i}px`}),s?.hide&&!t?.isCallout){const{referenceHidden:l}=s.hide;Object.assign(r.style,{visibility:l?"hidden":""})}if(s?.arrow&&t?.arrowEl){const l=t?.arrowEl,{x:a,y:d}=s.arrow,p=window.getComputedStyle(r).direction==="rtl",c=Ns(n).split("-")[1];let g="",u="",b="",f="";if(c==="start"){const m=typeof a=="number"?`calc(${er}px - ${l.offsetWidth/2}px)`:"";g=typeof d=="number"?`calc(${er}px - ${l.offsetWidth/2}px)`:"",u=p?m:"",f=p?"":m}else if(c==="end"){const m=typeof a=="number"?`calc(${er}px - ${l.offsetWidth/2}px)`:"";u=p?"":m,f=p?m:"",b=typeof d=="number"?`calc(${er}px - ${l.offsetWidth/2}px)`:""}else f=typeof a=="number"?`${a}px`:"",g=typeof d=="number"?`${d}px`:"";Object.assign(l.style,{top:g,right:u,bottom:b,left:f}),zc(l,Rc(n),n)}}),t}const be={wrapper:"flex items-center",button:"inline-flex items-center focusable text-xs transition-all",suggestion:"bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold",filter:"s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted",label:"pl-12 py-8 rounded-l-full",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-8 rounded-r-full",a11y:"sr-only"},Qr={wrapper:"fixed transform translate-z-0 bottom-16 left-0 right-0 mx-8 sm:mx-16 z-50 pointer-events-none",base:"grid auto-rows-auto justify-items-center justify-center mx-auto pointer-events-none",content:"w-full"},_e={wrapper:"relative overflow-hidden w-full",base:"flex group p-8 mt-16 rounded-8 border-2 pointer-events-auto transition-all",positive:"s-bg-positive-subtle s-border-positive-subtle s-text",warning:"s-bg-warning-subtle s-border-warning-subtle s-text",negative:"s-bg-negative-subtle s-border-negative-subtle s-text",iconBase:"shrink-0 rounded-full w-[16px] h-[16px] m-[8px]",iconPositive:"s-icon-positive",iconWarning:"s-icon-warning",iconNegative:"s-icon-negative",iconLoading:"animate-bounce",content:"self-center mr-8 py-4 last-child:mb-0",close:"bg-transparent ml-auto p-[8px] s-icon hover:s-icon-hover active:s-icon-active"},At="font-bold focusable justify-center transition-colors ease-in-out",Ts={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},Mc={primary:`border-0 rounded-8 ${At}`,secondary:`border-2 rounded-8 ${At}`,utility:`border rounded-4 ${At}`,negative:`border-0 rounded-8 ${At}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${At}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${Ts.link}`},Ic={medium:"text-m leading-[24]",xsmall:"text-xs"},dt={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Ic.medium} ${Mc.pill} ${Ts.pill} justify-self-end -mr-8 ml-8`},Ge=t=>typeof t=="string",jc=t=>typeof t=="function",yi=new Map,Ps="en";function zo(t){return[...Array.isArray(t)?t:[t],Ps]}function Ds(t,e,r){const o=zo(t);return kr(()=>$r("date",o,r),()=>new Intl.DateTimeFormat(o,r)).format(Ge(e)?new Date(e):e)}function mo(t,e,r){const o=zo(t);return kr(()=>$r("number",o,r),()=>new Intl.NumberFormat(o,r)).format(e)}function xi(t,e,r,{offset:o=0,...i}){const s=zo(t),n=e?kr(()=>$r("plural-ordinal",s),()=>new Intl.PluralRules(s,{type:"ordinal"})):kr(()=>$r("plural-cardinal",s),()=>new Intl.PluralRules(s,{type:"cardinal"}));return i[r]??i[n.select(r-o)]??i.other}function kr(t,e){const r=t();let o=yi.get(r);return o||(o=e(),yi.set(r,o)),o}function $r(t,e,r){const o=e.join("-");return`${t}-${o}-${JSON.stringify(r)}`}const Bs=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/g,Rs="%__lingui_octothorpe__%",Fc=(t,e,r={})=>{const o=e||t,i=n=>typeof n=="object"?n:r[n]||{style:n},s=(n,l)=>{const a=Object.keys(r).length?i("number"):void 0,d=mo(o,n,a);return l.replace(new RegExp(Rs,"g"),d)};return{plural:(n,l)=>{const{offset:a=0}=l,d=xi(o,!1,n,l);return s(n-a,d)},selectordinal:(n,l)=>{const{offset:a=0}=l,d=xi(o,!0,n,l);return s(n-a,d)},select:Hc,number:(n,l)=>mo(o,n,i(l)),date:(n,l)=>Ds(o,n,i(l))}},Hc=(t,e)=>e[t]??e.other;function Vc(t,e,r){return(o={},i)=>{const s=Fc(e,r,i),n=(a,d=!1)=>Array.isArray(a)?a.reduce((p,c)=>{if(c==="#"&&d)return p+Rs;if(Ge(c))return p+c;const[g,u,b]=c;let f={};u==="plural"||u==="selectordinal"||u==="select"?Object.entries(b).forEach(([E,A])=>{f[E]=n(A,u==="plural"||u==="selectordinal")}):f=b;let m;if(u){const E=s[u];m=E(o[g],f)}else m=o[g];return m==null?p:p+m},""):a,l=n(t);return Ge(l)&&Bs.test(l)?Ao.unraw(l.trim()):Ge(l)?l.trim():l?String(l):""}}var Uc=Object.defineProperty,qc=(t,e,r)=>e in t?Uc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Jc=(t,e,r)=>(qc(t,e+"",r),r);class Wc{constructor(){Jc(this,"_events",{})}on(e,r){var o;return(o=this._events)[e]??(o[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const o=this._getListeners(e);if(!o)return;const i=o.indexOf(r);~i&&o.splice(i,1)}emit(e,...r){const o=this._getListeners(e);o&&o.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Yc=Object.defineProperty,Qc=(t,e,r)=>e in t?Yc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ut=(t,e,r)=>(Qc(t,typeof e!="symbol"?e+"":e,r),r);class Xc extends Wc{constructor(e){super(),ut(this,"_locale",""),ut(this,"_locales"),ut(this,"_localeData",{}),ut(this,"_messages",{}),ut(this,"_missing"),ut(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Ps,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const o=this._localeData[e];o?Object.assign(o,r):this._localeData[e]=r}loadLocaleData(e,r){r!=null?this._loadLocaleData(e,r):Object.keys(e).forEach(o=>this._loadLocaleData(o,e[o])),this.emit("change")}_load(e,r){const o=this._messages[e];o?Object.assign(o,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([o,i])=>this._load(o,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:o}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=o,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,o){let i=o?.message;e||(e=""),Ge(e)||(r=e.values||r,i=e.message,e=e.id);const s=this.messages[e],n=s===void 0,l=this._missing;if(l&&n)return jc(l)?l(this._locale,e):l;n&&this.emit("missing",{id:e,locale:this._locale});let a=s||i||e;return Ge(a)&&Bs.test(a)?JSON.parse(`"${a}"`):Ge(a)?a:Vc(a,this._locale,this._locales)(r,o?.formats)}date(e,r){return Ds(this._locales||this._locale,e,r)}number(e,r){return mo(this._locales||this._locale,e,r)}}function Zc(t={}){return new Xc(t)}const Xr=Zc();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mo=globalThis,_r=Mo.trustedTypes,ki=_r?_r.createPolicy("lit-html",{createHTML:t=>t}):void 0,zs="$lit$",je=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+je,Kc=`<${Ms}>`,it=document,Ft=()=>it.createComment(""),Ht=t=>t===null||typeof t!="object"&&typeof t!="function",Io=Array.isArray,Gc=t=>Io(t)||typeof t?.[Symbol.iterator]=="function",Zr=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$i=/-->/g,_i=/>/g,Ye=RegExp(`>|${Zr}(?:([^\\s"'>=/]+)(${Zr}*=${Zr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Si=/'/g,Ei=/"/g,Is=/^(?:script|style|textarea|title)$/i,bt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Ci=new WeakMap,Ke=it.createTreeWalker(it,129);function js(t,e){if(!Io(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ki!==void 0?ki.createHTML(e):e}const ed=(t,e)=>{const r=t.length-1,o=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=Ot;for(let l=0;l<r;l++){const a=t[l];let d,p,c=-1,g=0;for(;g<a.length&&(n.lastIndex=g,p=n.exec(a),p!==null);)g=n.lastIndex,n===Ot?p[1]==="!--"?n=$i:p[1]!==void 0?n=_i:p[2]!==void 0?(Is.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=Ye):p[3]!==void 0&&(n=Ye):n===Ye?p[0]===">"?(n=i??Ot,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?Ye:p[3]==='"'?Ei:Si):n===Ei||n===Si?n=Ye:n===$i||n===_i?n=Ot:(n=Ye,i=void 0);const u=n===Ye&&t[l+1].startsWith("/>")?" ":"";s+=n===Ot?a+Kc:c>=0?(o.push(d),a.slice(0,c)+zs+a.slice(c)+je+u):a+je+(c===-2?l:u)}return[js(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class Vt{constructor({strings:e,_$litType$:r},o){let i;this.parts=[];let s=0,n=0;const l=e.length-1,a=this.parts,[d,p]=ed(e,r);if(this.el=Vt.createElement(d,o),Ke.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ke.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(zs)){const g=p[n++],u=i.getAttribute(c).split(je),b=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:b[2],strings:u,ctor:b[1]==="."?rd:b[1]==="?"?od:b[1]==="@"?id:Br}),i.removeAttribute(c)}else c.startsWith(je)&&(a.push({type:6,index:s}),i.removeAttribute(c));if(Is.test(i.tagName)){const c=i.textContent.split(je),g=c.length-1;if(g>0){i.textContent=_r?_r.emptyScript:"";for(let u=0;u<g;u++)i.append(c[u],Ft()),Ke.nextNode(),a.push({type:2,index:++s});i.append(c[g],Ft())}}}else if(i.nodeType===8)if(i.data===Ms)a.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(je,c+1))!==-1;)a.push({type:7,index:s}),c+=je.length-1}s++}}static createElement(e,r){const o=it.createElement("template");return o.innerHTML=e,o}}function vt(t,e,r=t,o){if(e===bt)return e;let i=o!==void 0?r._$Co?.[o]:r._$Cl;const s=Ht(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=i:r._$Cl=i),i!==void 0&&(e=vt(t,i._$AS(t,e.values),i,o)),e}class td{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,i=(e?.creationScope??it).importNode(r,!0);Ke.currentNode=i;let s=Ke.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new Yt(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new sd(s,this,e)),this._$AV.push(d),a=o[++l]}n!==a?.index&&(s=Ke.nextNode(),n++)}return Ke.currentNode=it,i}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class Yt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=vt(this,e,r),Ht(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==bt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Ht(this._$AH)?this._$AA.nextSibling.data=e:this.T(it.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Vt.createElement(js(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new td(i,this),n=s.u(this.options);s.p(r),this.T(n),this._$AH=s}}_$AC(e){let r=Ci.get(e.strings);return r===void 0&&Ci.set(e.strings,r=new Vt(e)),r}k(e){Io(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const s of e)i===r.length?r.push(o=new Yt(this.O(Ft()),this.O(Ft()),this,this.options)):o=r[i],o._$AI(s),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Br{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,i,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=K}_$AI(e,r=this,o,i){const s=this.strings;let n=!1;if(s===void 0)e=vt(this,e,r,0),n=!Ht(e)||e!==this._$AH&&e!==bt,n&&(this._$AH=e);else{const l=e;let a,d;for(e=s[0],a=0;a<s.length-1;a++)d=vt(this,l[o+a],r,a),d===bt&&(d=this._$AH[a]),n||=!Ht(d)||d!==this._$AH[a],d===K?e=K:e!==K&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class rd extends Br{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class od extends Br{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class id extends Br{constructor(e,r,o,i,s){super(e,r,o,i,s),this.type=5}_$AI(e,r=this){if((e=vt(this,e,r,0)??K)===bt)return;const o=this._$AH,i=e===K&&o!==K||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==K&&(o===K||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class sd{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}}const nd=Mo.litHtmlPolyfillSupport;nd?.(Vt,Yt),(Mo.litHtmlVersions??=[]).push("3.2.1");const ad=(t,e,r)=>{const o=r?.renderBefore??e;let i=o._$litPart$;if(i===void 0){const s=r?.renderBefore??null;o._$litPart$=i=new Yt(e.insertBefore(Ft(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Pt=class extends Xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ad(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return bt}};Pt._$litElement$=!0,Pt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Pt});const ld=globalThis.litElementPolyfillSupport;ld?.({LitElement:Pt});(globalThis.litElementVersions??=[]).push("4.1.1");class cd extends Pt{#e=!1;get i18n(){return this.#e||(Xr.load(this.locale,this.translations),Xr.activate(this.locale),this.#e=!0),Xr}get translations(){return JSON.parse(this.getAttribute("translations")||"{}")}get locale(){return this.getAttribute("locale")||"en"}get initialState(){return JSON.parse(this.getAttribute("initial-state")||"{}")}}const jo=()=>!(typeof window<"u");class Fs{isServer=!1;css=""}const dd=(t=[])=>{const e=new Fs;if(jo()){for(const o of t)e.css+=`@import url('${o}');`;return e.isServer=!0,e}for(const o of t){const i=new XMLHttpRequest;i.open("GET",o,!1),i.send(),e.css+=i.responseText}return e},ud=()=>dd(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]),hd=async(t=[])=>{const e=new Fs;if(jo()){for(const s of t)e.css+=`@import url('${s}');`;return e.isServer=!0,e}const o=await Promise.all(t.map(s=>fetch(s))),i=await Promise.all(o.map(s=>s.text()));for(const s of i)e.css+=s;return e},Ai=async()=>hd(["https://assets.finn.no/pkg/@warp-ds/css/v2/resets.css","https://assets.finn.no/pkg/@warp-ds/css/v2/components.css"]);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),r=new WeakMap,o=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,s=Array.prototype.forEach,n=/@import.+?;?$/gm;function l(v){var y=v.replace(n,"");return y!==v&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),y.trim()}function a(v){return"isConnected"in v?v.isConnected:document.contains(v)}function d(v){return v.filter(function(y,T){return v.indexOf(y)===T})}function p(v,y){return v.filter(function(T){return y.indexOf(T)===-1})}function c(v){v.parentNode.removeChild(v)}function g(v){return v.shadowRoot||r.get(v)}var u=["addRule","deleteRule","insertRule","removeRule"],b=CSSStyleSheet,f=b.prototype;f.replace=function(){return Promise.reject(new o("Can't call replace on non-constructed CSSStyleSheets."))},f.replaceSync=function(){throw new o("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function m(v){return typeof v=="object"?V.isPrototypeOf(v)||f.isPrototypeOf(v):!1}function E(v){return typeof v=="object"?f.isPrototypeOf(v):!1}var A=new WeakMap,C=new WeakMap,R=new WeakMap,k=new WeakMap;function O(v,y){var T=document.createElement("style");return R.get(v).set(y,T),C.get(v).push(y),T}function L(v,y){return R.get(v).get(y)}function M(v,y){R.get(v).delete(y),C.set(v,C.get(v).filter(function(T){return T!==y}))}function H(v,y){requestAnimationFrame(function(){y.textContent=A.get(v).textContent,k.get(v).forEach(function(T){return y.sheet[T.method].apply(y.sheet,T.args)})})}function U(v){if(!A.has(v))throw new TypeError("Illegal invocation")}function Z(){var v=this,y=document.createElement("style");e.body.appendChild(y),A.set(v,y),C.set(v,[]),R.set(v,new WeakMap),k.set(v,[])}var V=Z.prototype;V.replace=function(y){try{return this.replaceSync(y),Promise.resolve(this)}catch(T){return Promise.reject(T)}},V.replaceSync=function(y){if(U(this),typeof y=="string"){var T=this;A.get(T).textContent=l(y),k.set(T,[]),C.get(T).forEach(function(ae){ae.isConnected()&&H(T,L(T,ae))})}},i(V,"cssRules",{configurable:!0,enumerable:!0,get:function(){return U(this),A.get(this).sheet.cssRules}}),i(V,"media",{configurable:!0,enumerable:!0,get:function(){return U(this),A.get(this).sheet.media}}),u.forEach(function(v){V[v]=function(){var y=this;U(y);var T=arguments;k.get(y).push({method:v,args:T}),C.get(y).forEach(function(ue){if(ue.isConnected()){var te=L(y,ue).sheet;te[v].apply(te,T)}});var ae=A.get(y).sheet;return ae[v].apply(ae,T)}}),i(Z,Symbol.hasInstance,{configurable:!0,value:m});var de={childList:!0,subtree:!0},B=new WeakMap;function G(v){var y=B.get(v);return y||(y=new Qo(v),B.set(v,y)),y}function Y(v){i(v.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return G(this).sheets},set:function(y){G(this).update(y)}})}function se(v,y){for(var T=document.createNodeIterator(v,NodeFilter.SHOW_ELEMENT,function(ue){return g(ue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ae=void 0;ae=T.nextNode();)y(g(ae))}var ee=new WeakMap,ne=new WeakMap,lt=new WeakMap;function Tn(v,y){return y instanceof HTMLStyleElement&&ne.get(v).some(function(T){return L(T,v)})}function Yo(v){var y=ee.get(v);return y instanceof Document?y.body:y}function jr(v){var y=document.createDocumentFragment(),T=ne.get(v),ae=lt.get(v),ue=Yo(v);ae.disconnect(),T.forEach(function(te){y.appendChild(L(te,v)||O(te,v))}),ue.insertBefore(y,null),ae.observe(ue,de),T.forEach(function(te){H(te,L(te,v))})}function Qo(v){var y=this;y.sheets=[],ee.set(y,v),ne.set(y,[]),lt.set(y,new MutationObserver(function(T,ae){if(!document){ae.disconnect();return}T.forEach(function(ue){t||s.call(ue.addedNodes,function(te){te instanceof Element&&se(te,function(ct){G(ct).connect()})}),s.call(ue.removedNodes,function(te){te instanceof Element&&(Tn(y,te)&&jr(y),t||se(te,function(ct){G(ct).disconnect()}))})})}))}if(Qo.prototype={isConnected:function(){var v=ee.get(this);return v instanceof Document?v.readyState!=="loading":a(v.host)},connect:function(){var v=Yo(this);lt.get(this).observe(v,de),ne.get(this).length>0&&jr(this),se(v,function(y){G(y).connect()})},disconnect:function(){lt.get(this).disconnect()},update:function(v){var y=this,T=ee.get(y)===document?"Document":"ShadowRoot";if(!Array.isArray(v))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Iterator getter is not callable.");if(!v.every(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Failed to convert value to 'CSSStyleSheet'");if(v.some(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+T+": Can't adopt non-constructed stylesheets");y.sheets=v;var ae=ne.get(y),ue=d(v),te=p(ae,ue);te.forEach(function(ct){c(L(ct,y)),M(ct,y)}),ne.set(y,ue),y.isConnected()&&ue.length>0&&jr(y)}},window.CSSStyleSheet=Z,Y(Document),"ShadowRoot"in window){Y(ShadowRoot);var Xo=Element.prototype,Pn=Xo.attachShadow;Xo.attachShadow=function(y){var T=Pn.call(this,y);return y.mode==="closed"&&r.set(this,T),T}}var Gt=G(document);Gt.isConnected()?Gt.connect():document.addEventListener("DOMContentLoaded",Gt.connect.bind(Gt))})();let Nt;if(jo()){const t=await Ai();Nt=xo(t.css)}else{Nt=new CSSStyleSheet;try{const t=window.navigator.userAgent;if(/WebKit/.test(t)&&!/Chrome/.test(t)&&!/Edg/.test(t)&&!window.MSStream)throw new Error("DoesNotSupportTopLevelAwait");const r=await Ai();Nt.replaceSync(r.css)}catch{const e=ud();Nt.replaceSync(e.css)}}class oe extends cd{static styles=[Nt]}var pd={};const fd=["en","nb","fi","da","sv"],Hs="en",Oi=t=>fd.find(e=>t===e||t.toLowerCase().includes(e))||Hs;function gd(){if(typeof window>"u"){const t=pd.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return Oi(t)}try{const t=document.documentElement.lang;return Oi(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),Hs}}const bd=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,ze=(t,e,r,o,i)=>{const s=gd(),n=bd(s,t,e,r,o,i);x.load(s,n),x.activate(s)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=Ar(class extends Or{constructor(t){if(super(t),t.type!==De.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const i=!!e[o];i===this.st.has(o)||this.nt?.has(o)||(i?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return ve}}),vd=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function Vs(t){return class extends t{static createProperty(e,r){let o=r;(typeof r?.attribute>"u"||r?.attribute===!0)&&(o=Object.assign({},r,{attribute:vd(e.toString())})),super.createProperty(e,o)}}}function md(){return`m${Math.random().toString(36).slice(2)}`}const wd=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),yd=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),xd=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),kd=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),$d=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}');class _d extends Vs(oe){static properties={show:{type:Boolean,reflect:!0},placement:{type:String,reflect:!0},tooltip:{type:Boolean,reflect:!0},callout:{type:Boolean,reflect:!0},popover:{type:Boolean,reflect:!0},highlight:{type:Boolean,reflect:!0},canClose:{type:Boolean,reflect:!0},noArrow:{type:Boolean,reflect:!0},distance:{type:Number,reflect:!0},skidding:{type:Number,reflect:!0},flip:{type:Boolean,reflect:!0},crossAxis:{type:Boolean,reflect:!0},fallbackPlacements:{type:Array,reflect:!0}};static styles=[oe.styles,F`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }

      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `];constructor(){super(),ze(yd,kd,xd,wd,$d),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(pt).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(pt))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>vi.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(vi)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?wi(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return pt[this._actualDirection]}get _arrowClasses(){return j([dt.arrowBase,this._activeVariantClasses.arrow,dt[`arrowDirection${Ls(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":w`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},r=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:dt[r],arrow:dt[`arrow${r.charAt(0).toUpperCase()+r.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedNodes()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedNodes()[0]:null}get _wrapperClasses(){return j([dt.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return x._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return w`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${dt.closeBtn}">
        <w-icon-close-16></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},wi(this.attentionState)}pointingAtDirection(){switch(pt[this._actualDirection]){case"top-start":case"top":case"top-end":return x._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return x._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return x._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return x._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return x._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return x._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return x._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return x._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=md());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?w``:w`
      <div class=${J(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?w`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:z}
              </div>
            `:w`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:z}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}customElements.get("w-attention")||customElements.define("w-attention",_d);const Sd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.backdrop-blur{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.bg-\\[--w-black\\/70\\]{background-color:rgba(var(--w-rgb-black),.7)}.bg-\\[--w-color-badge-info-background\\]{background-color:var(--w-color-badge-info-background)}.bg-\\[--w-color-badge-negative-background\\]{background-color:var(--w-color-badge-negative-background)}.bg-\\[--w-color-badge-neutral-background\\]{background-color:var(--w-color-badge-neutral-background)}.bg-\\[--w-color-badge-positive-background\\]{background-color:var(--w-color-badge-positive-background)}.bg-\\[--w-color-badge-sponsored-background\\]{background-color:var(--w-color-badge-sponsored-background)}.bg-\\[--w-color-badge-warning-background\\]{background-color:var(--w-color-badge-warning-background)}.border-0{border-width:0}.rounded-4{border-radius:4px}.rounded-bl-0{border-bottom-left-radius:0}.rounded-br-0{border-bottom-right-radius:0}.rounded-tl-0{border-top-left-radius:0}.rounded-tr-0{border-top-right-radius:0}.inline-flex{display:inline-flex}.bottom-0{bottom:0}.left-0{left:0}.right-0{right:0}.top-0{top:0}.absolute{position:absolute}.static{position:static}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-text{color:var(--w-s-color-text)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.px-8{padding-left:.8rem;padding-right:.8rem}.py-4{padding-top:.4rem;padding-bottom:.4rem}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var Ed=Object.defineProperty,Us=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Ed(e,r,i),i};class Fo extends P{constructor(){super(...arguments),this.variant="neutral"}static{this.styles=[le,Sd]}get _class(){return j(["py-4 px-8 border-0 rounded-4 text-xs inline-flex",this.variant==="neutral"&&"bg-[--w-color-badge-neutral-background] s-text",this.variant==="info"&&"bg-[--w-color-badge-info-background] s-text",this.variant==="positive"&&"bg-[--w-color-badge-positive-background] s-text",this.variant==="warning"&&"bg-[--w-color-badge-warning-background] s-text",this.variant==="negative"&&"bg-[--w-color-badge-negative-background] s-text",this.variant==="disabled"&&"s-bg-disabled s-text",this.variant==="price"&&"bg-[--w-black/70] s-text-inverted-static",this.variant==="sponsored"&&"bg-[--w-color-badge-sponsored-background] s-text",!!this.position&&"absolute backdrop-blur",this.position==="top-left"&&"rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0",this.position==="top-right"&&"rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0",this.position==="bottom-right"&&"rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0",this.position==="bottom-left"&&"rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0"])}render(){return w`
      <div class="${this._class}">
        <slot></slot>
      </div>
    `}}Us([h({type:String,reflect:!0})],Fo.prototype,"variant");Us([h({type:String,reflect:!0})],Fo.prototype,"position");customElements.get("w-badge")||customElements.define("w-badge",Fo);const Cd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.p-16{padding:1.6rem}.break-words{overflow-wrap:break-word}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var Ad=Object.defineProperty,Qt=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Ad(e,r,i),i};class xt extends P{static{this.styles=[le,Cd]}get _class(){return j(["group block relative break-words last-child:mb-0 p-16 rounded-8",this.bleed&&"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",this.info&&"s-bg-info-subtle",this.neutral&&"s-surface-sunken",this.bordered&&"border-2 s-border s-bg"])}get _optOutRoleWithDefault(){return this.role===""?z:this.role??"region"}render(){return w`
      <div role="${this._optOutRoleWithDefault}" class="${this._class}">
        <slot></slot>
      </div>
    `}}Qt([h({type:Boolean,reflect:!0})],xt.prototype,"bleed");Qt([h({type:Boolean,reflect:!0})],xt.prototype,"bordered");Qt([h({type:Boolean,reflect:!0})],xt.prototype,"info");Qt([h({type:Boolean,reflect:!0})],xt.prototype,"neutral");Qt([h({type:String,reflect:!0})],xt.prototype,"role");customElements.get("w-box")||customElements.define("w-box",xt);function Od(t,e){return t.flatMap(r=>[r,e]).slice(0,-1)}const Ld=JSON.parse('{"breadcrumbs.ariaLabel":["Du er her"]}'),Nd=JSON.parse('{"breadcrumbs.ariaLabel":["You are here"]}'),Td=JSON.parse('{"breadcrumbs.ariaLabel":["Olet tässä"]}'),Pd=JSON.parse('{"breadcrumbs.ariaLabel":["Her er du"]}'),Dd=JSON.parse('{"breadcrumbs.ariaLabel":["Du är här"]}'),Bd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.flex{display:flex}.static{position:static}.s-text{color:var(--w-s-color-text)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.space-x-8>:not([hidden])~:not([hidden]){--w-space-x-reverse:0;margin-left:calc(.8rem*calc(1 - var(--w-space-x-reverse)));margin-right:calc(.8rem*var(--w-space-x-reverse))}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.select-none{-webkit-user-select:none;user-select:none}`;var Rd=Object.defineProperty,zd=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Rd(e,r,i),i};const ht={wrapper:"flex space-x-8",text:"s-text",link:"s-text-link",separator:"select-none s-icon",a11y:"sr-only"},Md=w`<span class=${ht.separator}>/</span>`;class qs extends P{static{this.styles=[le,Bd]}constructor(){super(),ze(Nd,Pd,Td,Ld,Dd),this.ariaLabel=x._({id:"breadcrumbs.ariaLabel",message:"You are here",comment:"Default screen reader message for the breadcrumb component"})}connectedCallback(){super.connectedCallback();const r=Array.from(this.children).flat(1/0).filter(o=>o).map((o,i)=>{if(typeof o=="string"){const s=i===this.children.length-1;return w`<span class=${ht.text} aria-current=${s?"page":void 0}>${o}</span>`}return o.classList.add(o.tagName==="A"?ht.link:ht.text),o});this._children=Od(r,Md)}render(){return w`
      <nav aria-labelledby="breadCrumbLabel">
        <h2 id="breadCrumbLabel" class=${ht.a11y}>${this.ariaLabel}</h2>
        <div class=${ht.wrapper}>${this._children}</div>
      </nav>
    `}}zd([h({attribute:"aria-label",type:String})],qs.prototype,"ariaLabel");customElements.get("w-breadcrumbs")||customElements.define("w-breadcrumbs",qs);var I=function(t,e,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(t):o?o.value:e.get(t)},Q=function(t,e,r,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(t,r):i?i.value=r:e.set(t,r),r};function Ho(t){var e,r,o,i,s,n,l,a,d,p,c,g,u,b,f,m,E,A;class C extends t{constructor(...k){var O,L,M;super(...k),e.add(this),this.internals=this.attachInternals(),r.set(this,!1),o.set(this,!1),i.set(this,!1),s.set(this,void 0),n.set(this,void 0),l.set(this,!0),a.set(this,""),d.set(this,()=>{Q(this,i,!0,"f"),Q(this,r,!0,"f"),I(this,e,"m",f).call(this)}),p.set(this,()=>{Q(this,r,!1,"f"),I(this,e,"m",m).call(this,this.shouldFormValueUpdate()?I(this,a,"f"):""),!this.validity.valid&&I(this,i,"f")&&Q(this,o,!0,"f");const H=I(this,e,"m",f).call(this);this.validationMessageCallback&&this.validationMessageCallback(H?this.internals.validationMessage:"")}),c.set(this,()=>{var H;I(this,l,"f")&&this.validationTarget&&(this.internals.setValidity(this.validity,this.validationMessage,this.validationTarget),Q(this,l,!1,"f")),Q(this,i,!0,"f"),Q(this,o,!0,"f"),I(this,e,"m",f).call(this),(H=this===null||this===void 0?void 0:this.validationMessageCallback)===null||H===void 0||H.call(this,this.showError?this.internals.validationMessage:"")}),g.set(this,void 0),u.set(this,!1),b.set(this,Promise.resolve()),(O=this.addEventListener)===null||O===void 0||O.call(this,"focus",I(this,d,"f")),(L=this.addEventListener)===null||L===void 0||L.call(this,"blur",I(this,p,"f")),(M=this.addEventListener)===null||M===void 0||M.call(this,"invalid",I(this,c,"f")),this.setValue(null)}static get formAssociated(){return!0}static get validators(){return this.formControlValidators||[]}static get observedAttributes(){const k=this.validators.map(M=>M.attribute).flat(),O=super.observedAttributes||[];return[...new Set([...O,...k])]}static getValidator(k){return this.validators.find(O=>O.attribute===k)||null}static getValidators(k){return this.validators.filter(O=>{var L;if(O.attribute===k||!((L=O.attribute)===null||L===void 0)&&L.includes(k))return!0})}get form(){return this.internals.form}get showError(){return I(this,e,"m",f).call(this)}checkValidity(){return this.internals.checkValidity()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}attributeChangedCallback(k,O,L){var M;(M=super.attributeChangedCallback)===null||M===void 0||M.call(this,k,O,L);const U=this.constructor.getValidators(k);U?.length&&this.validationTarget&&this.setValue(I(this,a,"f"))}setValue(k){var O;Q(this,o,!1,"f"),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,""),Q(this,a,k,"f");const M=this.shouldFormValueUpdate()?k:null;this.internals.setFormValue(M),I(this,e,"m",m).call(this,M),this.valueChangedCallback&&this.valueChangedCallback(M),I(this,e,"m",f).call(this)}shouldFormValueUpdate(){return!0}get validationComplete(){return new Promise(k=>k(I(this,b,"f")))}formResetCallback(){var k,O;Q(this,i,!1,"f"),Q(this,o,!1,"f"),I(this,e,"m",f).call(this),(k=this.resetFormControl)===null||k===void 0||k.call(this),(O=this.validationMessageCallback)===null||O===void 0||O.call(this,I(this,e,"m",f).call(this)?this.validationMessage:"")}}return r=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,n=new WeakMap,l=new WeakMap,a=new WeakMap,d=new WeakMap,p=new WeakMap,c=new WeakMap,g=new WeakMap,u=new WeakMap,b=new WeakMap,e=new WeakSet,f=function(){if(this.hasAttribute("disabled"))return!1;const k=I(this,o,"f")||I(this,i,"f")&&!this.validity.valid&&!I(this,r,"f");return k&&this.internals.states?this.internals.states.add("--show-error"):this.internals.states&&this.internals.states.delete("--show-error"),k},m=function(k){const O=this.constructor,L={},M=O.validators,H=[],U=M.some(B=>B.isValid instanceof Promise);I(this,u,"f")||(Q(this,b,new Promise(B=>{Q(this,g,B,"f")}),"f"),Q(this,u,!0,"f")),I(this,s,"f")&&(I(this,s,"f").abort(),Q(this,n,I(this,s,"f"),"f"));const Z=new AbortController;Q(this,s,Z,"f");let V,de=!1;M.length&&(M.forEach(B=>{const G=B.key||"customError",Y=B.isValid(this,k,Z.signal);Y instanceof Promise?(H.push(Y),Y.then(ee=>{ee!=null&&(L[G]=!ee,V=I(this,e,"m",A).call(this,B,k),I(this,e,"m",E).call(this,L,V))})):(L[G]=!Y,this.validity[G]!==!Y&&(de=!0),!Y&&!V&&(V=I(this,e,"m",A).call(this,B,k)))}),Promise.allSettled(H).then(()=>{var B;Z?.signal.aborted||(Q(this,u,!1,"f"),(B=I(this,g,"f"))===null||B===void 0||B.call(this))}),(de||!U)&&I(this,e,"m",E).call(this,L,V))},E=function(k,O){if(this.validationTarget)this.internals.setValidity(k,O,this.validationTarget),Q(this,l,!1,"f");else{if(this.internals.setValidity(k,O),this.internals.validity.valid)return;Q(this,l,!0,"f")}},A=function(k,O){if(this.validityCallback){const L=this.validityCallback(k.key||"customError");if(L)return L}return k.message instanceof Function?k.message(this,O):k.message},C}const Id=JSON.parse('{"button.aria.loading":["Indlæser..."]}'),jd=JSON.parse('{"button.aria.loading":["Loading..."]}'),Fd=JSON.parse('{"button.aria.loading":["Ladataan..."]}'),Hd=JSON.parse('{"button.aria.loading":["Laster..."]}'),Vd=JSON.parse('{"button.aria.loading":["Laddar ..."]}'),Ud=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.text-center{text-align:center}.animate-inprogress{background-size:30px 30px;animation:3s linear infinite animate-inprogress;background-image:linear-gradient(135deg,#0000000d 25%,#0000 0 50%,#0000000d 0 75%,#0000 0,#0000)!important}@keyframes animate-inprogress{0%{background-position:0 0}to{background-position:60px 0}}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.inline-block{display:inline-block}.inline{display:inline}.inline-flex{display:inline-flex}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.hover\\:no-underline:hover,.focus\\:no-underline:focus,.active\\:no-underline:active{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.max-w-full{max-width:100%}.max-w-max{max-width:max-content}.min-h-32{min-height:3.2rem}.min-w-32{min-width:3.2rem}.w-full{width:100%}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-0{padding:0}.p-4{padding:.4rem}.px-14{padding-left:1.4rem;padding-right:1.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.py-10{padding-top:1rem;padding-bottom:1rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.px-\\[15px\\]{padding-left:15px;padding-right:15px}.py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.py-\\[7px\\]{padding-top:7px;padding-bottom:7px}.cursor-default{cursor:default}.font-bold{font-weight:700}.pointer-events-none{pointer-events:none}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var qd=Object.defineProperty,we=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&qd(e,r,i),i};const Li=["primary","secondary","negative","utility","pill","link"],Fe="font-bold focusable justify-center transition-colors ease-in-out",q={primary:"s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]",secondary:"s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active",utility:"s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",destructive:"s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active",pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]",disabled:"s-text-inverted s-bg-disabled",quiet:"bg-transparent s-text-link hover:s-bg-hover active:s-bg-active",utilityQuiet:"s-text bg-transparent hover:s-bg-hover active:s-bg-active",negativeQuiet:"bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active",loading:"s-text s-bg-subtle",link:"s-text-link"},D={primary:`border-0 rounded-8 ${Fe}`,secondary:`border-2 rounded-8 ${Fe}`,utility:`border rounded-4 ${Fe}`,negative:`border-0 rounded-8 ${Fe}`,pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Fe}`,link:`bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline ${q.link}`},_={xsmall:"py-6 px-16",small:"py-8 px-16",medium:"py-10 px-14",large:"py-12 px-16",utility:"py-[11px] px-[15px]",smallUtility:"py-[7px] px-[15px]",pill:"min-h-[44px] min-w-[44px]",pillSmall:"min-h-32 min-w-32",link:"p-0"},S={medium:"text-m leading-[24]",xsmall:"text-xs"},$={inProgress:`border-transparent animate-inprogress pointer-events-none ${q.loading}`,quiet:`border-0 rounded-8 ${Fe}`,utilityQuiet:`border-0 rounded-4 ${Fe}`,negativeQuiet:`border-0 rounded-8 ${Fe}`,isDisabled:`font-bold justify-center transition-colors ease-in-out cursor-default pointer-events-none ${q.disabled}`},N={secondary:`${_.medium} ${S.medium} ${D.secondary} ${q.secondary}`,secondaryHref:`${_.medium} ${S.medium} ${D.secondary} ${q.secondary}`,secondaryDisabled:`${_.medium} ${S.medium} ${D.secondary} ${$.isDisabled}`,secondarySmall:`${S.xsmall} ${_.xsmall} ${D.secondary} ${q.secondary}`,secondarySmallDisabled:`${S.xsmall} ${_.xsmall} ${D.secondary} ${$.isDisabled}`,secondaryQuiet:`${_.medium} ${S.medium} ${$.quiet} ${q.quiet}`,secondaryQuietDisabled:`${_.medium} ${S.medium} ${$.quiet} ${$.isDisabled}`,secondarySmallQuiet:`${S.xsmall} ${_.xsmall} ${$.quiet} ${q.quiet}`,secondarySmallQuietDisabled:`${S.xsmall} ${_.xsmall} ${$.quiet} ${$.isDisabled}`,secondaryLoading:`${_.medium} ${S.medium} ${D.secondary} ${$.inProgress}`,secondarySmallLoading:`${S.xsmall} ${_.xsmall}  ${D.secondary} ${$.inProgress}`,secondarySmallQuietLoading:`${S.xsmall} ${_.xsmall} ${$.quiet} ${$.inProgress}`,secondaryQuietLoading:`${_.medium} ${S.medium} ${$.quiet} ${$.inProgress}`,primary:`${_.large} ${S.medium} ${D.primary} ${q.primary}`,primaryDisabled:`${_.large} ${S.medium} ${$.isDisabled} ${D.primary}`,primarySmall:`${_.small} ${S.xsmall} ${D.primary} ${q.primary}`,primarySmallDisabled:`${_.small} ${S.xsmall} ${$.isDisabled} ${D.primary} `,primaryQuiet:`${_.large} ${S.medium} ${$.quiet} ${q.quiet}`,primaryQuietDisabled:`${_.large} ${S.medium} ${$.quiet} ${$.isDisabled}`,primarySmallQuiet:`${_.small} ${S.xsmall} ${$.quiet} ${q.quiet}`,primarySmallQuietDisabled:`${_.small} ${S.xsmall} ${$.quiet} ${$.isDisabled}`,primaryLoading:`${_.large} ${S.medium} ${$.inProgress} ${D.primary}`,primarySmallLoading:`${_.small} ${S.xsmall}  ${$.inProgress} ${D.primary}`,primarySmallQuietLoading:`${_.small} ${S.xsmall} ${$.quiet} ${$.inProgress} ${D.primary}`,primaryQuietLoading:`${_.large} ${S.medium} ${$.quiet} ${$.inProgress}`,utility:`${_.utility} ${S.medium} ${D.utility} ${q.utility}`,utilityDisabled:`${_.utility} ${S.medium} ${D.utility} ${$.isDisabled}`,utilityQuiet:`${_.large} ${S.medium} ${$.utilityQuiet} ${q.utilityQuiet}`,utilityQuietDisabled:`${_.large} ${S.medium} ${$.utilityQuiet} ${$.isDisabled}`,utilitySmall:`${_.smallUtility} ${S.xsmall} ${D.utility} ${q.utility}`,utilitySmallDisabled:`${_.smallUtility} ${S.xsmall} ${D.utility} ${$.isDisabled}`,utilitySmallQuiet:`${_.smallUtility} ${S.xsmall} ${$.utilityQuiet} ${q.utilityQuiet}`,utilitySmallQuietDisabled:`${_.smallUtility} ${S.xsmall} ${$.utilityQuiet} ${$.isDisabled}`,utilityLoading:`${_.large} ${S.medium} ${D.utility} ${$.inProgress}`,utilitySmallLoading:`${_.smallUtility} ${S.xsmall} ${D.utility} ${$.inProgress}`,utilityQuietLoading:`${_.large} ${S.medium} ${$.inProgress} ${$.utilityQuiet}`,utilitySmallQuietLoading:`${_.smallUtility} ${S.xsmall} ${$.inProgress} ${$.utilityQuiet}`,negative:`${_.large} ${S.medium} ${D.negative} ${q.destructive}`,negativeDisabled:`${_.large} ${S.medium} ${D.negative} ${$.isDisabled}`,negativeQuiet:`${_.large} ${S.medium} ${$.negativeQuiet} ${q.negativeQuiet}`,negativeQuietDisabled:`${_.large} ${S.medium} ${$.negativeQuiet}${$.isDisabled}`,negativeSmall:`${_.small} ${S.xsmall} ${D.negative} ${q.destructive}`,negativeSmallDisabled:`${_.small} ${S.xsmall} ${D.negative} ${$.isDisabled}`,negativeSmallQuiet:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${q.negativeQuiet}`,negativeSmallQuietDisabled:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${$.isDisabled}`,negativeLoading:`${_.large} ${S.medium} ${D.negative} ${$.inProgress}`,negativeSmallLoading:`${_.small} ${S.xsmall} ${$.inProgress} ${D.negative}`,negativeQuietLoading:`${_.large} ${S.medium} ${$.negativeQuiet} ${D.negative} ${$.inProgress}`,negativeSmallQuietLoading:`${_.small} ${S.xsmall} ${$.negativeQuiet} ${$.inProgress}`,pill:`${_.pill} ${S.medium} ${D.pill} ${q.pill}`,pillSmall:`${_.pillSmall} ${S.xsmall} ${D.pill} ${q.pill}`,pillLoading:`${_.pill} ${S.medium} ${D.pill} ${$.inProgress}`,pillSmallLoading:`${_.pillSmall} ${S.xsmall} ${D.pill} ${$.inProgress}`,link:`${_.link} ${S.medium} ${D.link}`,linkSmall:`${_.link} ${S.xsmall} ${D.link}`,linkAsButton:"inline-block active:no-underline hover:no-underline focus:no-underline text-center",a11y:"sr-only",fullWidth:"w-full max-w-full",contentWidth:"max-w-max"};class fe extends Ho(P){constructor(){super(),this.type="button",ze(jd,Hd,Fd,Id,Vd),this.variant="secondary",this.ariaValueTextLoading=x._({id:"button.aria.loading",message:"Loading...",comment:"Screen reader message for buttons that are loading"})}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[le,Ud]}updated(e){e.has("value")&&this.setValue(this.value)}connectedCallback(){if(super.connectedCallback(),!Li.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${Li.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}get _primaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.primary,this.small&&!this.quiet&&!this.loading&&N.primarySmall,this.small&&this.quiet&&!this.loading&&N.primarySmallQuiet,this.small&&this.loading&&(this.quiet?N.primarySmallQuietLoading:N.primarySmallLoading),!this.small&&this.quiet&&!this.loading&&N.primaryQuiet,!this.small&&this.loading&&(this.quiet?N.primaryQuietLoading:N.primaryLoading)]}get _secondaryClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.secondary,this.small&&!this.quiet&&!this.loading&&N.secondarySmall,this.small&&this.loading&&(this.quiet?N.secondarySmallQuietLoading:N.secondarySmallLoading),this.small&&this.quiet&&!this.loading&&N.secondarySmallQuiet,!this.small&&this.quiet&&!this.loading&&N.secondaryQuiet,!this.small&&this.loading&&(this.quiet?N.secondaryQuietLoading:N.secondaryLoading)]}get _utilityClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.utility,this.small&&!this.quiet&&!this.loading&&N.utilitySmall,this.small&&this.quiet&&!this.loading&&N.utilitySmallQuiet,this.small&&this.loading&&(this.quiet?N.utilitySmallQuietLoading:N.utilitySmallLoading),!this.small&&this.quiet&&!this.loading&&N.utilityQuiet,!this.small&&this.loading&&(this.quiet?N.utilityQuietLoading:N.utilityLoading)]}get _negativeClasses(){return[!this.small&&!this.quiet&&!this.loading&&N.negative,this.small&&!this.quiet&&!this.loading&&N.negativeSmall,this.small&&this.quiet&&!this.loading&&N.negativeSmallQuiet,this.small&&this.loading&&(this.quiet?N.negativeSmallQuietLoading:N.negativeSmallLoading),!this.small&&this.quiet&&!this.loading&&N.negativeQuiet,!this.small&&this.loading&&(this.quiet?N.negativeQuietLoading:N.negativeLoading)]}get _pillClasses(){return[!this.loading&&(this.small?N.pillSmall:N.pill),this.loading&&(this.small?N.pillSmallLoading:N.pillLoading)]}get _linkClasses(){return[this.small?N.linkSmall:N.link]}get _classes(){return j(this.buttonClass,[this.variant==="primary"&&this._primaryClasses,this.variant==="secondary"&&this._secondaryClasses,this.variant==="utility"&&this._utilityClasses,this.variant==="negative"&&this._negativeClasses,this.variant==="pill"&&this._pillClasses,this.variant==="link"&&this._linkClasses,this.href&&N.linkAsButton,this.fullWidth?N.fullWidth:N.contentWidth])}_handleButtonClick(){this.type==="submit"?this.internals.form.requestSubmit():this.type==="reset"&&this.internals.form.reset()}render(){return w` ${this.href?w`<a
          href=${this.href}
          target=${this.target}
          rel=${this.target==="_blank"?this.rel||"noopener":void 0}
          class=${this._classes}>
          <slot></slot>
        </a>`:w`<button type=${this.type||"button"} class=${this._classes} @click="${this._handleButtonClick}">
          <slot></slot>
        </button>`}
    ${this.loading?w`<span class="sr-only" role="progressbar" aria-valuenow="{0}" aria-valuetext=${this.ariaValueTextLoading}></span>`:null}`}}we([h({reflect:!0})],fe.prototype,"type");we([h({type:Boolean,reflect:!0})],fe.prototype,"autofocus");we([h({reflect:!0})],fe.prototype,"variant");we([h({type:Boolean,reflect:!0})],fe.prototype,"quiet");we([h({type:Boolean,reflect:!0})],fe.prototype,"small");we([h({type:Boolean,reflect:!0})],fe.prototype,"loading");we([h({reflect:!0})],fe.prototype,"href");we([h({reflect:!0})],fe.prototype,"target");we([h({reflect:!0})],fe.prototype,"rel");we([h({attribute:"full-width",type:Boolean,reflect:!0})],fe.prototype,"fullWidth");we([h({attribute:"button-class",reflect:!0})],fe.prototype,"buttonClass");we([h({reflect:!0})],fe.prototype,"name");we([h({reflect:!0})],fe.prototype,"value");customElements.get("w-button")||customElements.define("w-button",fe);const Jd=JSON.parse('{"card.button.text":["Vælg"]}'),Wd=JSON.parse('{"card.button.text":["Select"]}'),Yd=JSON.parse('{"card.button.text":["Valitse"]}'),Qd=JSON.parse('{"card.button.text":["Velg"]}'),Xd=JSON.parse('{"card.button.text":["Välj"]}'),Zd=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.border-2{border-width:2px}.border-transparent{border-color:#0000}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.block{display:block}.overflow-hidden{overflow:hidden}.outline{outline-style:solid}.inset-0{top:0;bottom:0;left:0;right:0}.absolute{position:absolute}.relative{position:relative}.static{position:static}.\\!s-bg-selected{background-color:var(--w-s-color-background-selected)!important}.s-bg{background-color:var(--w-s-color-background)}.s-bg-selected{background-color:var(--w-s-color-background-selected)}.\\!hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)!important}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-selected-hover:hover{background-color:var(--w-s-color-background-selected-hover)}.\\!active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)!important}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-selected-active:active{background-color:var(--w-s-color-background-selected-active)}.s-border{border-color:var(--w-s-color-border)}.s-border-selected{border-color:var(--w-s-color-border-selected)}.group:hover .group-hover\\:s-border-selected-hover{border-color:var(--w-s-color-border-selected-hover)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-selected-hover:hover{border-color:var(--w-s-color-border-selected-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-selected-active:active{border-color:var(--w-s-color-border-selected-active)}.group:active .group-active\\:s-border-active{border-color:var(--w-s-color-border-active)}.group:active .group-active\\:s-border-selected-active{border-color:var(--w-s-color-border-selected-active)}.s-surface-elevated-200{background-color:var(--w-s-color-surface-elevated-200);box-shadow:var(--w-s-shadow-surface-elevated-200)}.hover\\:s-surface-elevated-200-hover:hover{background-color:var(--w-s-color-surface-elevated-200-hover);box-shadow:var(--w-s-shadow-surface-elevated-200-hover)}.active\\:s-surface-elevated-200-active:active{background-color:var(--w-s-color-surface-elevated-200-active);box-shadow:var(--w-s-shadow-surface-elevated-200-active)}.cursor-pointer{cursor:pointer}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-all{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}`;var Kd=Object.defineProperty,Vo=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Kd(e,r,i),i};const Le={base:"cursor-pointer overflow-hidden relative transition-all",shadow:"group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active",selected:"!s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active",outline:"absolute border-2 rounded-8 inset-0 transition-all",outlineUnselected:"border-transparent group-active:s-border-active",outlineSelected:"s-border-selected group-hover:s-border-selected-hover group-active:s-border-selected-active",flat:"border-2 rounded-4",flatUnselected:"s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active",flatSelected:"s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active",a11y:"sr-only"},Ni={ENTER:"Enter",SPACE:" "};class Rr extends P{constructor(){super(),this.selected=!1,this.flat=!1,this.clickable=!1,ze(Wd,Qd,Yd,Jd,Xd),this.buttonText=x._({id:"card.button.text",message:"Select",comment:"Screenreader message to indicate that the card is clickable"})}static{this.styles=[le,Zd,F`
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
    `]}get _containerClasses(){return j([Le.base,this.flat?Le.flat:Le.shadow,this.selected&&!this.flat&&Le.selected,this.selected&&this.flat?Le.flatSelected:Le.flatUnselected])}get _outlineClasses(){return j([Le.outline,this.selected?Le.outlineSelected:Le.outlineUnselected])}get _interactiveElement(){const e=()=>w`<button class="${Le.a11y}" aria-pressed="${this.selected}" tabindex="-1">${this.buttonText}</button>`,r=()=>w`<span role="checkbox" aria-checked="true" aria-disabled="true"></span>`;return this.clickable?e():this.selected?r():""}keypressed(e){!this.clickable||e.altKey||e.ctrlKey||(e.key===Ni.ENTER||e.key===Ni.SPACE)&&(e.preventDefault(),this.click())}render(){return w`
      <div tabindex=${J(this.clickable?"0":void 0)} class="${this._containerClasses}" @keydown=${this.keypressed}>
        ${this._interactiveElement} ${this.flat?"":w`<div class="${this._outlineClasses}"></div>`}
        <slot></slot>
      </div>
    `}}Vo([h({type:Boolean,reflect:!0})],Rr.prototype,"selected");Vo([h({type:Boolean})],Rr.prototype,"flat");Vo([h({type:Boolean})],Rr.prototype,"clickable");customElements.get("w-card")||customElements.define("w-card",Rr);var Gd=Object.defineProperty,zr=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Gd(e,r,i),i};class Xt extends P{constructor(){super(...arguments),this.type="radio",this.checked=!1,this.indeterminate=!1,this.invalid=!1}get indeterminateMarker(){return this.indeterminate?"–":""}render(){const e=Sr({checkbox:this.type==="checkbox",radio:this.type==="radio",checked:this.checked});return w` <div class="${e}">${this.indeterminateMarker}</div> `}static{this.styles=[le,F`
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
    `]}}zr([h({type:String})],Xt.prototype,"type");zr([h({type:Boolean,reflect:!0})],Xt.prototype,"checked");zr([h({type:Boolean,reflect:!0})],Xt.prototype,"indeterminate");zr([h({type:Boolean,reflect:!0})],Xt.prototype,"invalid");customElements.get("w-dead-toggle")||customElements.define("w-dead-toggle",Xt);var eu={},tu=JSON.parse('{"icon.title.chevron-down":["Nedoverpil"]}'),ru=JSON.parse('{"icon.title.chevron-down":["Downward arrow"]}'),ou=JSON.parse('{"icon.title.chevron-down":["Nuoli alaspäin"]}'),iu=JSON.parse('{"icon.title.chevron-down":["Pil nedad"]}'),su=JSON.parse('{"icon.title.chevron-down":["Pil ned"]}'),Js=["en","nb","fi","da","sv"],Ws="en",nu=()=>{var t;let e;switch((t=process==null?void 0:eu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Ys=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ws},Kr=t=>Js.find(e=>t===e||t.toLowerCase().includes(e))||Ys();function au(){var t;if(typeof window>"u"){const e=nu();return Kr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Ys();return Js.includes(e)?Kr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Kr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ws}}var lu=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,cu=(t,e,r,o,i)=>{const s=au(),n=lu(s,t,e,r,o,i);x.load(s,n),x.activate(s)};cu(ru,tu,ou,iu,su);var du=class extends P{render(){const t=x.t({message:"Downward arrow",id:"icon.title.chevron-down",comment:"Title for chevron-down icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-down-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.667 5.333 5.5 5.5 5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-down-16")||customElements.define("w-icon-chevron-down-16",du);var uu={},hu=JSON.parse('{"icon.title.chevron-up":["Oppoverpil"]}'),pu=JSON.parse('{"icon.title.chevron-up":["Upward arrow"]}'),fu=JSON.parse('{"icon.title.chevron-up":["Nuoli ylöspäin"]}'),gu=JSON.parse('{"icon.title.chevron-up":["Pil opad"]}'),bu=JSON.parse('{"icon.title.chevron-up":["Pil upp"]}'),Qs=["en","nb","fi","da","sv"],Xs="en",vu=()=>{var t;let e;switch((t=process==null?void 0:uu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Zs=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Xs},Gr=t=>Qs.find(e=>t===e||t.toLowerCase().includes(e))||Zs();function mu(){var t;if(typeof window>"u"){const e=vu();return Gr(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Zs();return Qs.includes(e)?Gr(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),Gr(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Xs}}var wu=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,yu=(t,e,r,o,i)=>{const s=mu(),n=wu(s,t,e,r,o,i);x.load(s,n),x.activate(s)};yu(pu,hu,fu,gu,bu);var xu=class extends P{render(){const t=x.t({message:"Upward arrow",id:"icon.title.chevron-up",comment:"Title for chevron-up icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-up-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11 8 5.5l5.5 5.5"></path></svg>`}};customElements.get("w-icon-chevron-up-16")||customElements.define("w-icon-chevron-up-16",xu);const ku=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.t4{font-weight:700;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-left{text-align:left}.align-middle{vertical-align:middle}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.will-change-height{will-change:height}.border-0{border-width:0}.border-2{border-width:2px}.rounded-8{border-radius:8px}.rounded-l-0{border-top-left-radius:0;border-bottom-left-radius:0}.rounded-r-0{border-top-right-radius:0;border-bottom-right-radius:0}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:underline:focus-visible{text-decoration-line:underline}.overflow-hidden{overflow:hidden}.focus\\:outline-none:focus{outline-offset:2px;outline:2px solid #0000}.items-center{align-items:center}.justify-between{justify-content:space-between}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-info-subtle{background-color:var(--w-s-color-background-info-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.s-text{color:var(--w-s-color-text)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-surface-sunken{background-color:var(--w-s-color-surface-sunken)}.h-0{height:0}.w-full{width:100%}.m-0{margin:0}.-mx-16{margin-left:-1.6rem;margin-right:-1.6rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.px-0{padding-left:0;padding-right:0}.py-0{padding-top:0;padding-bottom:0}.pt-0{padding-top:0}.invisible{visibility:hidden}.break-words{overflow-wrap:break-word}.cursor-pointer{cursor:pointer}.-rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:-rotate-180::part(w-icon-chevron-down-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:-180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.rotate-180{--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:rotate-180::part(w-icon-chevron-up-16-part){--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-rotate:180deg;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform::part(w-icon-chevron-down-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform::part(w-icon-chevron-up-16-part){transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform-gpu{transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-down-16-part\\]\\:transform-gpu::part(w-icon-chevron-down-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.part-\\[w-icon-chevron-up-16-part\\]\\:transform-gpu::part(w-icon-chevron-up-16-part){transform:translate3d(var(--w-translate-x),var(--w-translate-y),var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-transform{transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:transition-transform::part(w-icon-chevron-down-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:transition-transform::part(w-icon-chevron-up-16-part){transition-property:transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-down-16-part\\]\\:ease-in-out::part(w-icon-chevron-down-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}.part-\\[w-icon-chevron-up-16-part\\]\\:ease-in-out::part(w-icon-chevron-up-16-part){transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:480px){.sm\\:rounded-8{border-radius:8px}.sm\\:mx-0{margin-left:0;margin-right:0}}`;var $u=Object.defineProperty,Ae=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&$u(e,r,i),i};const _u={base:"group block relative break-words last-child:mb-0 p-16 rounded-8",bleed:"-mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8",info:"s-bg-info-subtle",neutral:"s-surface-sunken",bordered:"border-2 s-border s-bg"},re={wrapper:"will-change-height s-text",box:"s-surface-sunken hover:s-bg-hover active:s-bg-active py-0 px-0 group block relative break-words last-child:mb-0 rounded-8",bleed:"-mx-16 rounded-l-0 rounded-r-0 sm:mx-0 sm:rounded-8",chevron:"inline-block align-middle s-icon",chevronNonBox:"ml-8",chevronTransform:"transform transition-transform transform-gpu ease-in-out",chevronExpand:"-rotate-180",chevronCollapse:"rotate-180",elementsChevronDownTransform:"part-[w-icon-chevron-down-16-part]:transform part-[w-icon-chevron-down-16-part]:transition-transform part-[w-icon-chevron-down-16-part]:transform-gpu part-[w-icon-chevron-down-16-part]:ease-in-out",elementsChevronUpTransform:"part-[w-icon-chevron-up-16-part]:transform part-[w-icon-chevron-up-16-part]:transition-transform part-[w-icon-chevron-up-16-part]:transform-gpu part-[w-icon-chevron-up-16-part]:ease-in-out",elementsChevronExpand:"part-[w-icon-chevron-down-16-part]:-rotate-180",elementsChevronCollapse:"part-[w-icon-chevron-up-16-part]:rotate-180",expansion:"overflow-hidden",expansionNotExpanded:"h-0 invisible",button:"focus:outline-none appearance-none cursor-pointer bg-transparent border-0 m-0 hover:underline focus-visible:underline",buttonBox:"w-full text-left relative inline-flex items-center justify-between group relative break-words last-child:mb-0 p-16 rounded-8",contentWithTitle:"pt-0",title:"flex w-full justify-between items-center",titleType:"t4"};class ke extends P{constructor(){super(...arguments),this.expanded=!1,this.box=!1,this.bleed=!1,this.noChevron=!1,this.animated=!1,this._hasTitle=!0,this._showChevronUp=!1}static{this.styles=[le,ku,F`
      :host {
        display: block;
      }
      ::slotted(:last-child) {
        margin-bottom: 0px !important;
      }
    `]}updated(e){e.has("expanded")&&setTimeout(()=>{this._showChevronUp=this.expanded},200)}firstUpdated(){const e=!!this.title,r=this.renderRoot.querySelector("slot[name='title']")?.assignedNodes().length>0;this._hasTitle=e||r}get#e(){return j([re.wrapper,this.box&&re.box,this.bleed&&re.bleed])}get#t(){return j(this.buttonClass,[re.button,this.box&&re.buttonBox])}get#i(){return j([re.chevron,!this.box&&re.chevronNonBox])}get#r(){const e=j([re.elementsChevronUpTransform,!this.expanded&&this._showChevronUp&&re.elementsChevronCollapse]),r=j([re.elementsChevronDownTransform,this.expanded&&!this._showChevronUp&&re.elementsChevronExpand]);return this._showChevronUp?w`<w-icon-chevron-up-16 class="${e}"></w-icon-chevron-up-16>`:w`<w-icon-chevron-down-16 class="${r}"></w-icon-chevron-down-16>`}get#o(){return j(this.contentClass,[this.box&&_u.base,this._hasTitle&&this.box&&re.contentWithTitle])}get#s(){return j([re.expansion,!this.expanded&&re.expansionNotExpanded])}get _expandableSlot(){return w`<div class="${this.#o}">
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
      ${this.animated?w`<w-expand-transition ?show=${this.expanded}> ${this._expandableSlot} </w-expand-transition>`:w`<div class="${this.#s}" aria-hidden=${J(this.expanded?void 0:!0)}>
            ${this._expandableSlot}
          </div>`}
    </div>`}}Ae([h({type:Boolean,reflect:!0})],ke.prototype,"expanded");Ae([h({type:String})],ke.prototype,"title");Ae([h({type:Boolean})],ke.prototype,"box");Ae([h({type:Boolean})],ke.prototype,"bleed");Ae([h({attribute:"button-class",type:String})],ke.prototype,"buttonClass");Ae([h({attribute:"content-class",type:String})],ke.prototype,"contentClass");Ae([h({attribute:"no-chevron",type:Boolean})],ke.prototype,"noChevron");Ae([h({type:Boolean})],ke.prototype,"animated");Ae([h({attribute:"heading-level",type:Number})],ke.prototype,"headingLevel");Ae([h({type:Boolean,state:!0})],ke.prototype,"_hasTitle");Ae([h({type:Boolean,state:!0})],ke.prototype,"_showChevronUp");customElements.get("w-expandable")||customElements.define("w-expandable",ke);const Ks=t=>class extends t{patchClose=!0;_close=null;close(){this._close()}},Gs=t=>class extends t{handleSlotChange(e){const r=e.target.assignedNodes({flatten:!0});for(const o of r.filter(i=>i.patchClose))o._close=()=>this.close()}};class Su extends Ks(Gs(P)){render(){return w`
      <div class="footer">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </div>
    `}static{this.styles=[le,F`
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
    `]}}const Eu=(t,e)=>({dx:t.left-e.left,dy:t.top-e.top,dw:t.width/e.width,dh:t.height/e.height,first:t,last:e}),Cu=({dx:t,dy:e})=>[{transform:`translate(${t}px, ${e}px)`},{transform:"none"}],Au={easing:"ease",duration:300};let en=!1;const Ou=typeof window<"u";if(Ou){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>en=r;t.addEventListener&&t.addEventListener("change",e),e(t)}class Lu{first;last;el;constructor(e,{animation:r={},keyframes:o,respectReduceMotion:i=!0}={}){this.el=e,this.first={},this.last={},this.userAnimationOptions=r,this.keyframeGenerator=o||Cu,this.shouldReduceMotion=i}async when(e){this.prep();const r=await e();return await this.play(),r}prep(){this.first=this.el.getBoundingClientRect()}async play(){if(this.last=this.el.getBoundingClientRect(),!this.el.animate)return;await this.el.animate(this.keyframes,this.animationOptions).finished}get keyframes(){return this.keyframeGenerator(Eu(this.first,this.last))}get defaults(){return Au}get mergedOptions(){return{...this.defaults,...this.userAnimationOptions}}get animationOptions(){return this.shouldReduceMotion?en?{...this.mergedOptions,duration:0}:this.mergedOptions:this.mergedOptions}}var Nu={},Tu=JSON.parse('{"icon.title.arrow-left":["Pil som peker mot venstre"]}'),Pu=JSON.parse('{"icon.title.arrow-left":["Leftward-pointing arrow"]}'),Du=JSON.parse('{"icon.title.arrow-left":["Vasemmalle osoittava nuoli"]}'),Bu=JSON.parse('{"icon.title.arrow-left":["Pil til venstre"]}'),Ru=JSON.parse('{"icon.title.arrow-left":["Pil som pekar vänster"]}'),tn=["en","nb","fi","da","sv"],rn="en",zu=()=>{var t;let e;switch((t=process==null?void 0:Nu)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},on=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":rn},eo=t=>tn.find(e=>t===e||t.toLowerCase().includes(e))||on();function Mu(){var t;if(typeof window>"u"){const e=zu();return eo(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=on();return tn.includes(e)?eo(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),eo(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),rn}}var Iu=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,ju=(t,e,r,o,i)=>{const s=Mu(),n=Iu(s,t,e,r,o,i);x.load(s,n),x.activate(s)};ju(Pu,Tu,Du,Bu,Ru);var Fu=class extends P{render(){const t=x.t({message:"Leftward-pointing arrow",id:"icon.title.arrow-left",comment:"Title for table arrow left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-arrow-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.222 8h6.667"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.444 11.75 4.111 8l3.333-3.75"></path></svg>`}};customElements.get("w-icon-arrow-left-16")||customElements.define("w-icon-arrow-left-16",Fu);const Hu=JSON.parse('{"modal.aria.back":["Tilbage"],"modal.aria.close":["Luk"]}'),Vu=JSON.parse('{"modal.aria.back":["Back"],"modal.aria.close":["Close"]}'),Uu=JSON.parse('{"modal.aria.back":["Takaisin"],"modal.aria.close":["Sulje"]}'),qu=JSON.parse('{"modal.aria.back":["Tilbake"],"modal.aria.close":["Lukk"]}'),Ju=JSON.parse('{"modal.aria.back":["Tillbaka"],"modal.aria.close":["Stäng"]}');var Wu=Object.defineProperty,Zt=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Wu(e,r,i),i};class kt extends Ks(P){constructor(){super(),this._hasTopContent=!1,ze(Vu,qu,Uu,Hu,Ju)}render(){return w`
      <div class="header">
        <slot name="top" @slotchange=${this.handleTopSlotChange}></slot>
        <div class="${this._hasTopContent?"":"header-title-bar"}">
          ${this.backButton}
          <h1 class="title-el ${this.titleClasses}">${this.title}</h1>
          ${this.closeButton}
        </div>
      </div>
    `}async willUpdate(e){e.has("back")&&new Lu(this.titleEl).when(async()=>{await this.updateComplete})}get titleClasses(){return["header-title",this.back?"header-title-with-back-button":"header-title-without-back-button",this._hasTopContent?"header-title-with-top-area":""].join(" ")}get backButton(){return this.back&&!this._hasTopContent?w`<button
          type="button"
          aria-label="${x._({id:"modal.aria.back",message:"Back",comment:"Aria label for the back button in modal"})}"
          class="header-button header-button-left"
          @click="${this.emitBack}">
          <w-icon-arrow-left-16></w-icon-arrow-left-16>
        </button>`:z}get closeButton(){return this.noClose?z:w`<button
      type="button"
      aria-label="${x._({id:"modal.aria.close",message:"Close",comment:"Aria label for the close button in modal"})}"
      class="header-button ${this._hasTopContent?"header-close-button-on-image":"header-close-button"}"
      @click="${this.close}">
      <w-icon-close-16></w-icon-close-16>
    </button>`}emitBack(){this.dispatchEvent(new CustomEvent("backClicked",{bubbles:!0,composed:!0}))}handleTopSlotChange(e){const r=e.target.assignedElements({flatten:!0});this._hasTopContent=!!r.length}static{this.styles=[le,F`
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
    `]}}Zt([h({type:String})],kt.prototype,"title");Zt([h({type:Boolean})],kt.prototype,"back");Zt([h({type:Boolean,attribute:"no-close"})],kt.prototype,"noClose");Zt([qt()],kt.prototype,"_hasTopContent");Zt([mt(".title-el")],kt.prototype,"titleEl");let Dt=[];const Uo={documentElement:{},body:{}},Yu=Object.freeze({documentElement:{"scrollbar-gutter":"stable"},body:{overflow:"hidden",position:"relative",height:"100%"}}),sn=t=>{t.touches.length>1||t.preventDefault?.()},Qu=t=>([e,r])=>{Uo[t][e]=document[t].style[e],document[t].style[e]=r},Xu=()=>Object.entries(Yu).forEach(([t,e])=>{Object.entries(e).forEach(Qu(t))}),Zu=t=>([e,r])=>{document[t].style[e]=Uo[t][e]},Ku=()=>Object.entries(Uo).forEach(([t,e])=>{Object.entries(e).forEach(Zu(t))}),Gu=t=>t.scrollHeight-Math.abs(t.scrollTop)===t.clientHeight;function eh(t){let e=-1;const r=o=>{if(o.targetTouches.length!==1)return;const i=o.targetTouches[0].clientY-e;return t.scrollTop===0&&i>0||Gu(t)&&i<0?sn(o):(o.stopPropagation(),!0)};t.ontouchstart=o=>{o.targetTouches.length===1&&(e=o.targetTouches[0].clientY)},t.ontouchmove=r}function th(t){t.ontouchstart=null,t.ontouchmove=null}const nn=t=>()=>document[t?"addEventListener":"removeEventListener"]("touchmove",sn,{passive:!1}),rh=nn(!0),oh=nn();function ih(t){if(!t)throw Error("Could not run setup, an element must be provided");Dt.some(e=>e===t)||(Dt.length||(Xu(),rh()),eh(t),Dt.push(t))}function sh(){Dt.forEach(th),oh(),Ku(),Dt=[]}var nh=Object.defineProperty,$t=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&nh(e,r,i),i};class nt extends Gs(P){constructor(){super(),this.interceptEscape=this.interceptEscape.bind(this),this.closeOnBackdropClick=this.closeOnBackdropClick.bind(this),this.eventPreventer=this.eventPreventer.bind(this),this.modifyBorderRadius=this.modifyBorderRadius.bind(this)}async open(){this.dialogEl.showModal(),this.handleListeners(),ih(this.contentEl),await this.updateComplete,this.dispatchEvent(new CustomEvent("shown",{bubbles:!0,composed:!0}))}close(){this.handleListeners("removeEventListener"),this.dialogEl.classList.add("close"),this.dialogEl.addEventListener("animationend",async()=>{this.dialogEl.classList.remove("close"),this.dialogEl.close(),sh(),await this.updateComplete,this.dispatchEvent(new CustomEvent("hidden",{bubbles:!0,composed:!0}))},{once:!0})}render(){return w`
      <dialog class="dialog-el">
        <div class="dialog-inner-el">
          <slot name="header" @slotchange="${this.handleSlotChange}"></slot>
          <div class="content-el" id=${this.contentId}>
            <slot name="content" @slotchange="${this.handleSlotChange}"></slot>
          </div>
          <slot name="footer" @slotchange="${this.handleSlotChange}"></slot>
        </div>
      </dialog>
    `}updated(e){e.has("show")&&this[this.show?"open":"close"]()}handleListeners(e="addEventListener"){document[e]("keydown",this.interceptEscape),this.ignoreBackdropClicks||this.dialogEl[e]("mousedown",this.closeOnBackdropClick),this.dialogEl[e]("close",this.eventPreventer),this.dialogEl[e]("cancel",this.eventPreventer),this.dialogInnerEl[e]("transitionend",this.modifyBorderRadius)}eventPreventer(e){e.preventDefault()}closeOnBackdropClick(e){this.dialogEl===e.target&&this.close()}interceptEscape(e){e.key==="Escape"&&(e.preventDefault(),this.close())}modifyBorderRadius(){this.dialogInnerEl.scrollHeight*1.02>innerHeight?this.dialogInnerEl.style.borderRadius="0px":this.dialogInnerEl.style.borderRadius=null}static{this.styles=[le,F`
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
    `]}}$t([h({type:Boolean})],nt.prototype,"show");$t([h({type:String,attribute:"content-id"})],nt.prototype,"contentId");$t([h({type:Boolean,attribute:"ignore-backdrop-clicks"})],nt.prototype,"ignoreBackdropClicks");$t([mt(".dialog-el")],nt.prototype,"dialogEl");$t([mt(".dialog-inner-el")],nt.prototype,"dialogInnerEl");$t([mt(".content-el")],nt.prototype,"contentEl");customElements.get("w-modal")||(customElements.define("w-modal",nt),customElements.define("w-modal-header",kt),customElements.define("w-modal-footer",Su));var ah={},lh=JSON.parse('{"icon.title.chevron-double-left":["Dobbel pil til venstre"]}'),ch=JSON.parse('{"icon.title.chevron-double-left":["Double leftward arrow"]}'),dh=JSON.parse('{"icon.title.chevron-double-left":["Kaksi nuolta vasemmalle"]}'),uh=JSON.parse('{"icon.title.chevron-double-left":["Dobbelt venstrepil"]}'),hh=JSON.parse('{"icon.title.chevron-double-left":["Dubbel vänsterpil"]}'),an=["en","nb","fi","da","sv"],ln="en",ph=()=>{var t;let e;switch((t=process==null?void 0:ah)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},cn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":ln},to=t=>an.find(e=>t===e||t.toLowerCase().includes(e))||cn();function fh(){var t;if(typeof window>"u"){const e=ph();return to(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=cn();return an.includes(e)?to(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),to(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),ln}}var gh=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,bh=(t,e,r,o,i)=>{const s=fh(),n=gh(s,t,e,r,o,i);x.load(s,n),x.activate(s)};bh(ch,lh,dh,uh,hh);var vh=class extends P{render(){const t=x.t({message:"Double leftward arrow",id:"icon.title.chevron-double-left",comment:"Title for chevron-double-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-double-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 13 2 8l5-5m7 10L9 8l5-5"></path></svg>`}};customElements.get("w-icon-chevron-double-left-16")||customElements.define("w-icon-chevron-double-left-16",vh);var mh={},wh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),yh=JSON.parse('{"icon.title.chevron-left":["Leftward arrow"]}'),xh=JSON.parse('{"icon.title.chevron-left":["Nuoli vasemmalle"]}'),kh=JSON.parse('{"icon.title.chevron-left":["Pil til venstre"]}'),$h=JSON.parse('{"icon.title.chevron-left":["Pil vänster"]}'),dn=["en","nb","fi","da","sv"],un="en",_h=()=>{var t;let e;switch((t=process==null?void 0:mh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},hn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":un},ro=t=>dn.find(e=>t===e||t.toLowerCase().includes(e))||hn();function Sh(){var t;if(typeof window>"u"){const e=_h();return ro(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=hn();return dn.includes(e)?ro(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),ro(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),un}}var Eh=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Ch=(t,e,r,o,i)=>{const s=Sh(),n=Eh(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Ch(yh,wh,xh,kh,$h);var Ah=class extends P{render(){const t=x.t({message:"Leftward arrow",id:"icon.title.chevron-left",comment:"Title for chevron-left icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-left-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.75 5 8.25l5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-left-16")||customElements.define("w-icon-chevron-left-16",Ah);var Oh={},Lh=JSON.parse('{"icon.title.chevron-right":["Pil til høyre"]}'),Nh=JSON.parse('{"icon.title.chevron-right":["Rightward arrow"]}'),Th=JSON.parse('{"icon.title.chevron-right":["Nuoli oikealle"]}'),Ph=JSON.parse('{"icon.title.chevron-right":["Pil til højre"]}'),Dh=JSON.parse('{"icon.title.chevron-right":["Pil höger"]}'),pn=["en","nb","fi","da","sv"],fn="en",Bh=()=>{var t;let e;switch((t=process==null?void 0:Oh)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},gn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":fn},oo=t=>pn.find(e=>t===e||t.toLowerCase().includes(e))||gn();function Rh(){var t;if(typeof window>"u"){const e=Bh();return oo(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=gn();return pn.includes(e)?oo(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),oo(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),fn}}var zh=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Mh=(t,e,r,o,i)=>{const s=Rh(),n=zh(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Mh(Nh,Lh,Th,Ph,Dh);var Ih=class extends P{render(){const t=x.t({message:"Rightward arrow",id:"icon.title.chevron-right",comment:"Title for chevron-right icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-chevron-right-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 13.75 5.5-5.5-5.5-5.5"></path></svg>`}};customElements.get("w-icon-chevron-right-16")||customElements.define("w-icon-chevron-right-16",Ih);const jh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Næste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Fh=JSON.parse('{"pagination.aria.first-page":["First page"],"pagination.aria.icon-suffix":["icon"],"pagination.aria.next-page":["Next page"],"pagination.aria.page":["Page ",["currentPage"]],"pagination.aria.pagination":["Pages"],"pagination.aria.prev-page":["Previous page"]}'),Hh=JSON.parse('{"pagination.aria.first-page":["Ensimmäinen sivu"],"pagination.aria.icon-suffix":["kuvake"],"pagination.aria.next-page":["Seuraava sivu"],"pagination.aria.page":["Sivu ",["currentPage"]],"pagination.aria.pagination":["Sivut"],"pagination.aria.prev-page":["Edellinen sivu"]}'),Vh=JSON.parse('{"pagination.aria.first-page":["Første side"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Neste side"],"pagination.aria.page":["Side ",["currentPage"]],"pagination.aria.pagination":["Sider"],"pagination.aria.prev-page":["Forrige side"]}'),Uh=JSON.parse('{"pagination.aria.first-page":["Första sidan"],"pagination.aria.icon-suffix":["ikon"],"pagination.aria.next-page":["Nästa sida"],"pagination.aria.page":["Sida ",["currentPage"]],"pagination.aria.pagination":["Sidor"],"pagination.aria.prev-page":["Föregående sida"]}'),qh=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.border-0{border-width:0}.rounded-full{border-radius:9999px}.flex{display:flex}.inline-flex{display:inline-flex}.hover\\:no-underline:hover,.focus\\:no-underline:focus{text-decoration:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.justify-center{justify-content:center}.static{position:static}.s-bg-primary{background-color:var(--w-s-color-background-primary)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-icon{color:var(--w-s-color-icon)}.min-h-\\[44px\\]{min-height:44px}.min-w-\\[44px\\]{min-width:44px}.p-4{padding:.4rem}.p-8{padding:.8rem}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:768px){.md\\:block{display:block}}`;var Jh=Object.defineProperty,Mr=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Jh(e,r,i),i};const io=x._({id:"pagination.aria.icon-suffix",message:"icon",comment:"Suffix added at the end of icon titles when img semantics are lost on an html element"}),tr="hover:no-underline focus:no-underline focusable inline-flex justify-center items-center transition-colors ease-in-out min-h-[44px] min-w-[44px] p-4 rounded-full border-0 hover:bg-clip-padding";class Kt extends P{constructor(){super(),this.currentPageNumber=1,this.visiblePages=7,ze(Fh,Vh,Hh,jh,Uh)}static{this.styles=[le,qh]}get shouldShowShowFirstPageButton(){return this.currentPageNumber-2>0}get shouldShowPreviousPageButton(){return this.currentPageNumber-1>0}get shouldShowNextPageButton(){return this.currentPageNumber<this.pages}get currentPageIndex(){return this.currentPageNumber-1}get visiblePageNumbers(){if(this.pages<=this.visiblePages)return Array.from({length:this.pages},(i,s)=>s+1);const e=Math.floor(this.visiblePages/2);let r=Math.max(1,this.currentPageNumber-e);const o=Math.min(this.pages,r+this.visiblePages-1);return o-r+1<this.visiblePages&&(r=Math.max(1,o-this.visiblePages+1)),Array.from({length:o-r+1},(i,s)=>r+s)}render(){const e=this.visiblePageNumbers;return w`<nav class="flex items-center justify-center p-8">
      <h1 class="sr-only">
        ${x._({id:"pagination.aria.pagination",message:"Pages",comment:"Default screenreader message for pagination container in the pagination component"})}
      </h1>
      <div class="md:block s-text-link">
        ${this.shouldShowShowFirstPageButton?w`<a
              href="${this.baseUrl}1"
              class="${tr+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.first-page",message:"First page",comment:"Default screenreader message for first page link in the pagination component"})},</span
              >
              <w-icon-chevron-double-left-16></w-icon-chevron-double-left-16>
              <span class="sr-only">${io}</span>
            </a>`:z}
        ${this.shouldShowPreviousPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber-1}"
              class="${tr+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only"
                >${x._({id:"pagination.aria.prev-page",message:"Previous page",comment:"Default screenreader message for previous page link in the pagination component"})},</span
              >
              <w-icon-chevron-left-16></w-icon-chevron-left-16>
              <span class="sr-only">${io}</span>
            </a>`:z}
        ${e.map(r=>{const o=r===this.currentPageNumber,i=`${this.baseUrl}${r}`;let s=tr;o?s+=" s-bg-primary s-text-inverted":s+=" hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]";const n=x._({id:"pagination.aria.page",message:"Page {currentPage}",values:{currentPage:r},comment:"Default screenreader message for page link in the pagination component"});return w`<a aria-label="${n}" href="${i}" class="${s}" aria-current="${o?"page":""}"
            >${r}</a
          >`})}
        ${this.shouldShowNextPageButton?w`<a
              href="${this.baseUrl}${this.currentPageNumber+1}"
              class="${tr+" s-icon hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"}">
              <span class="sr-only">
                ${x._({id:"pagination.aria.next-page",message:"Next page",comment:"Default screenreader message for next page link in the pagination component"})},</span
              >
              <w-icon-chevron-right-16></w-icon-chevron-right-16>
              <span class="sr-only">${io}</span>
            </a>`:z}
      </div>
    </nav>`}}Mr([h({type:String,reflect:!0,attribute:"base-url"})],Kt.prototype,"baseUrl");Mr([h({type:Number,reflect:!0})],Kt.prototype,"pages");Mr([h({type:Number,reflect:!0,attribute:"current-page"})],Kt.prototype,"currentPageNumber");Mr([h({type:Number,reflect:!0,attribute:"visible-pages"})],Kt.prototype,"visiblePages");customElements.get("w-pagination")||customElements.define("w-pagination",Kt);const Wh=JSON.parse('{"pill.aria.openFilter":["Åbn filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Yh=JSON.parse('{"pill.aria.openFilter":["Open filter"],"pill.aria.removeFilter":["Remove filter ",["label"]]}'),Qh=JSON.parse('{"pill.aria.openFilter":["Avaa suodatin"],"pill.aria.removeFilter":["Tyhjennä suodatin ",["label"]]}'),Xh=JSON.parse('{"pill.aria.openFilter":["Åpne filter"],"pill.aria.removeFilter":["Fjern filter ",["label"]]}'),Zh=JSON.parse('{"pill.aria.openFilter":["Öppna filter"],"pill.aria.removeFilter":["Ta bort filtret ",["label"]]}');class Kh extends Vs(oe){static styles=[oe.styles];static properties={canClose:{type:Boolean},suggestion:{type:Boolean},openSrLabel:{type:String},closeSrLabel:{type:String}};constructor(){super(),ze(Yh,Xh,Qh,Wh,Zh),this.canClose=!1,this.suggestion=!1,this.openFilterSrText=x._({id:"pill.aria.openFilter",message:"Open filter",comment:"Fallback screenreader message for open filter"}),this.removeFilterSrText=x._({id:"pill.aria.removeFilter",message:"Remove filter {label}",comment:"Fallback screenreader message for removal of the filter"})}get _labelClasses(){return j([be.button,be.label,this.suggestion?be.suggestion:be.filter,this.canClose?be.labelWithClose:be.labelWithoutClose])}get _closeClasses(){return j([be.button,be.close,this.suggestion?be.suggestion:be.filter])}_onClick(){this.dispatchEvent(new CustomEvent("w-pill-click",{bubbles:!0,composed:!0}))}_onClose(){this.dispatchEvent(new CustomEvent("w-pill-close",{bubbles:!0,composed:!0}))}render(){return w`
      <div class="${be.wrapper}">
        <button type="button" class="${this._labelClasses}" @click="${this._onClick}">
          <span class="${be.a11y}">${this.openSrLabel?this.openSrLabel:this.openFilterSrText}</span>
          <slot></slot>
        </button>
        ${this.canClose?w`<button type="button" class="${this._closeClasses}" @click="${this._onClose}">
              <span class="${be.a11y}">${this.closeSrLabel?this.closeSrLabel:this.removeFilterSrText}</span>
              <w-icon-close-16></w-icon-close-16>
            </button>`:null}
      </div>
    `}}customElements.get("w-pill")||customElements.define("w-pill",Kh);const Gh=":host{box-sizing:border-box!important}:host *,:host *:before,:host *:after{box-sizing:inherit!important}";var ep=Object.defineProperty,bn=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&ep(e,r,i),i};class qo extends P{constructor(){super(),this.#e=!1,this.initialReflectedProperties=new Map,this.customStates={set:(r,o)=>{this.internals?.states&&(o?this.internals.states.add(r):this.internals.states.delete(r))},has:r=>this.internals?.states?this.internals.states.has(r):!1};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);const e=this.constructor;for(const[r,o]of e.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof r=="string"&&this.customStates.set(`initial-${r}-${o.initial}`,!0)}static get styles(){const e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Gh,...e].map(r=>typeof r=="string"?xo(r):r)}#e;attributeChangedCallback(e,r,o){this.#e||(this.constructor.elementProperties.forEach((i,s)=>{i.reflect&&this[s]!=null&&this.initialReflectedProperties.set(s,this[s])}),this.#e=!0),super.attributeChangedCallback(e,r,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((r,o)=>{e.has(o)&&this[o]==null&&(this[o]=r)})}relayNativeEvent(e,r){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...r}))}}bn([h()],qo.prototype,"dir");bn([h()],qo.prototype,"lang");const tp=()=>({observedAttributes:["custom-error"],checkValidity(t){const e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}});class rp extends Event{constructor(){super("w-invalid",{bubbles:!0,cancelable:!1,composed:!0})}}var op=Object.defineProperty,ip=Object.getOwnPropertyDescriptor,_t=(t,e,r,o)=>{for(var i=o>1?void 0:o?ip(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&op(e,r,i),i};class Ce extends qo{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new rp))},this.handleInteraction=e=>{const r=this.emittedEvents;r.includes(e.type)||r.push(e.type),r.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener("invalid",this.emitInvalid)}static{this.formAssociated=!0}static get validators(){return[tp()]}static get observedAttributes(){const e=new Set(super.observedAttributes||[]);for(const r of this.validators)if(r.observedAttributes)for(const o of r.observedAttributes)e.add(o);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")){const r=this.value;if(Array.isArray(r)){if(this.name){const o=new FormData;for(const i of r)o.append(this.name,i);this.setValue(o,o)}}else this.setValue(r,r)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){const r=e[0],o=e[1];let i=e[2];i||(i=this.validationTarget),this.internals.setValidity(r,o,i||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){const e=!!this.required,r=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!r),this.customStates.set("valid",r),this.customStates.set("user-invalid",!r&&o),this.customStates.set("user-valid",r&&o)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,r){this.value=e,r==="restore"&&this.resetValidity(),this.updateValidity()}setValue(...e){const[r,o]=e;this.internals.setFormValue(r,o)}get allValidators(){const e=this.constructor.validators||[],r=this.validators||[];return[...e,...r]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}const e=this.allValidators;if(!e?.length)return;const r={customError:!!this.customError},o=this.validationTarget||this.input||void 0;let i="";for(const s of e){const{isValid:n,message:l,invalidKeys:a}=s.checkValidity(this);n||(i||(i=l),a?.length>=0&&a.forEach(d=>r[d]=!0))}i||(i=this.validationMessage),this.setValidity(r,i,o)}}_t([h({reflect:!0})],Ce.prototype,"name",2);_t([h({type:Boolean})],Ce.prototype,"disabled",2);_t([h({state:!0,attribute:!1})],Ce.prototype,"valueHasChanged",2);_t([h({state:!0,attribute:!1})],Ce.prototype,"hasInteracted",2);_t([h({attribute:"custom-error",reflect:!0})],Ce.prototype,"customError",2);_t([h({attribute:!1,state:!0,type:Object})],Ce.prototype,"validity",1);const sp=':host{color:var(--wa-form-control-value-color);display:inline-flex;flex-direction:row;align-items:top;font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);cursor:pointer;user-select:none;-webkit-user-select:none}:host(:focus){outline:none}[part~=label]{display:inline}[part~=hint]{margin-block-start:.5em}:host([appearance="default"]){.control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--wa-form-control-toggle-size, 2rem);height:var(--wa-form-control-toggle-size, 2rem);border-color:var(--wa-form-control-border-color, gray);border-radius:50%;border-style:var(--wa-form-control-border-style, solid);border-width:var(--wa-form-control-border-width, 1px);background-color:var(--wa-form-control-background-color, white);color:transparent;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;margin-inline-end:.5em}}:host([appearance="clickable"]) .control{position:absolute;inset:0;height:100%;width:100%;cursor:pointer}:host(:state(checked)):not(:host([appearance="clickable"])) .control{border-color:var(--wa-form-control-activated-color, blue);background-color:var(--wa-form-control-background-color, white);border-width:.6rem}:host(:focus-visible) .control{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset, 1px)}:host([appearance="clickable"]:focus-visible) .control{outline-offset:-4px;border-radius:8px}:host(:state(disabled)){opacity:.5;cursor:not-allowed}:host([appearance="button"]){align-items:center;min-height:var(--wa-form-control-height);background-color:var(--wa-color-surface-default);border:var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);border-radius:var(--wa-border-radius-m);padding:0 var(--wa-form-control-padding-inline);transition:background-color var(--wa-transition-fast),border-color var(--wa-transition-fast);.control{display:none}}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-first]){border-start-end-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-horizontal][data-wa-radio-last]){border-start-start-radius:0;border-end-start-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-inner]){border-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-first]){border-end-start-radius:0;border-end-end-radius:0}:host([appearance="button"][data-wa-radio-vertical][data-wa-radio-last]){border-start-start-radius:0;border-start-end-radius:0}@media (hover: hover){:host([appearance="button"]:hover:not(:state(disabled),:state(checked))){background-color:color-mix(in srgb,var(--wa-color-surface-default) 95%,var(--wa-color-mix-hover))}}:host([appearance="button"]:focus-visible){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"]:state(checked)){border-color:var(--wa-form-control-activated-color);background-color:var(--wa-color-brand-fill-quiet)}:host([appearance="button"]:state(checked):focus-visible){outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-brand-border-loud);outline-offset:var(--wa-focus-ring-offset)}:host([appearance="button"][data-wa-radio-horizontal]:not([data-wa-radio-first])){margin-inline-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"][data-wa-radio-vertical]:not([data-wa-radio-first])){margin-block-start:calc(-1 * var(--wa-form-control-border-width))}:host([appearance="button"]:hover),:host([appearance="button"]:state(checked)){position:relative;z-index:1}:host([appearance="button"]:focus-visible){z-index:2}';var np=Object.defineProperty,at=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&np(e,r,i),i};class qe extends Ce{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.form=null,this.appearance="default",this.size="medium",this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener("click",this.handleClick)}static{this.css=[sp]}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.tabIndex=0,this.setAttribute("aria-disabled",this.disabled||this.forceDisabled?"true":"false")}updated(e){if(super.updated(e),e.has("checked")&&(this.customStates.set("checked",this.checked),this.setAttribute("aria-checked",this.checked?"true":"false"),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has("disabled")||e.has("forceDisabled")){const r=this.disabled||this.forceDisabled;this.customStates.set("disabled",r),this.setAttribute("aria-disabled",r?"true":"false"),r?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return w`
      <span part="control" class="control"></span>
      <slot part="label" class="label"></slot>
    `}}at([qt()],qe.prototype,"checked");at([qt()],qe.prototype,"forceDisabled");at([h({reflect:!0})],qe.prototype,"form");at([h({reflect:!0})],qe.prototype,"value");at([h({reflect:!0})],qe.prototype,"appearance");at([h({reflect:!0})],qe.prototype,"size");at([h({type:Boolean})],qe.prototype,"disabled");const ap="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let lp=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=ap[r[t]&63];return e};function cp(t=""){return`${t}${lp()}`}const dp=':host{display:block}.form-control{position:relative;border:none;padding:0;margin:0}.label{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s);font-weight:700;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale;cursor:pointer;padding-bottom:.4rem;color:var(--w-s-color-text);display:block}.radio-group-required .label:after{content:var(--wa-form-control-required-content);margin-inline-start:var(--wa-form-control-required-content-offset)}.button-group{display:flex}[part~=form-control-input]{display:flex;flex-direction:column;flex-wrap:wrap;gap:.75em}:host([orientation="horizontal"]) [part~=form-control-input]{flex-direction:row;gap:1em}[part~=hint]{margin-block-start:.5em}:host fieldset.has-radio-buttons{[part~=form-control-input]{gap:0}}',vn=(t={})=>{let{validationElement:e,validationProperty:r}=t;e||(e=Object.assign(document.createElement("input"),{required:!0})),r||(r="value");const o={observedAttributes:["required"],message:e.validationMessage,checkValidity(i){const s={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[r]&&(s.message=typeof o.message=="function"?o.message(i):o.message||"",s.isValid=!1,s.invalidKeys.push("valueMissing")),s}};return o};class mn{constructor(e,...r){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=r}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){const r=e;if(r.tagName.toLowerCase()==="w-visually-hidden")return!1;if(!r.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}}var up=Object.defineProperty,hp=Object.getOwnPropertyDescriptor,ye=(t,e,r,o)=>{for(var i=o>1?void 0:o?hp(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&up(e,r,i),i};class ge extends Ce{constructor(){super(),this.hasSlotController=new mn(this,"hint","label"),this.hasRadioButtons=!1,this.label="",this.hint="",this.name=null,this.disabled=!1,this.orientation="vertical",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{const r=e.target.closest("w-radio");if(!r||r.disabled||r.forceDisabled||this.disabled)return;const o=this.value;this.value=r.value,r.checked=!0;const i=this.getAllRadios();for(const s of i)r!==s&&(s.checked=!1,s.setAttribute("tabindex","-1"));this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("click",this.handleRadioClick)}static{this.css=[dp]}static get validators(){const e=[vn({validationElement:Object.assign(document.createElement("input"),{required:!0,type:"radio",name:cp("__w-radio")})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e=="number"&&(e=String(e)),this.valueHasChanged=!0,this._value=e}static{this.shadowRootOptions={...Ce.shadowRootOptions,delegatesFocus:!0}}get validationTarget(){const e=this.querySelector(":is(w-radio):not([disabled])");if(e)return e}updated(e){(e.has("disabled")||e.has("value"))&&this.syncRadioElements()}formResetCallback(...e){this.value=this.defaultValue,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll("w-radio")]}handleLabelClick(){this.focus()}async syncRadioElements(){const e=this.getAllRadios();let r=!1;if(e.forEach((o,i)=>{o.appearance==="button"&&(r=!0),o.setAttribute("size",this.size),o.toggleAttribute("data-w-radio-horizontal",this.orientation!=="vertical"),o.toggleAttribute("data-w-radio-vertical",this.orientation==="vertical"),o.toggleAttribute("data-w-radio-first",i===0),o.toggleAttribute("data-w-radio-inner",i!==0&&i!==e.length-1),o.toggleAttribute("data-w-radio-last",i===e.length-1),o.forceDisabled=this.disabled}),this.hasRadioButtons=r,await Promise.all(e.map(async o=>{await o.updateComplete,!o.disabled&&o.value===this.value?o.checked=!0:o.checked=!1})),this.disabled)e.forEach(o=>{o.tabIndex=-1});else{const o=e.filter(s=>!s.disabled),i=o.find(s=>s.checked);o.length>0&&(i?o.forEach(s=>{s.tabIndex=s.checked?0:-1}):o.forEach((s,n)=>{s.tabIndex=n===0?0:-1})),e.filter(s=>s.disabled).forEach(s=>{s.tabIndex=-1})}}handleKeyDown(e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)||this.disabled)return;const r=this.getAllRadios().filter(a=>!a.disabled);if(r.length<=0)return;e.preventDefault();const o=this.value,i=r.find(a=>a.checked)??r[0],s=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1;let n=r.indexOf(i)+s;n||(n=0),n<0&&(n=r.length-1),n>r.length-1&&(n=0);const l=r.some(a=>a.tagName.toLowerCase()==="w-radio-button");this.getAllRadios().forEach(a=>{a.checked=!1,l||a.setAttribute("tabindex","-1")}),this.value=r[n].value,r[n].checked=!0,l?r[n].shadowRoot.querySelector("button").focus():(r[n].setAttribute("tabindex","0"),r[n].focus()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;const r=this.getAllRadios(),o=r.find(n=>n.checked),i=r.find(n=>!n.disabled),s=o||i;s&&s.focus(e)}render(){const e=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,r=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,o=this.label?!0:!!e,i=this.hint?!0:!!r;return w`
      <fieldset
        part="form-control"
        class=${Sr({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":o,"has-radio-buttons":this.hasRadioButtons})}
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
          class=${Sr({"has-slotted":i})}
          aria-hidden=${i?"false":"true"}
          >${this.hint}</slot
        >
      </fieldset>
    `}}ye([qt()],ge.prototype,"hasRadioButtons",2);ye([mt("slot:not([name])")],ge.prototype,"defaultSlot",2);ye([h()],ge.prototype,"label",2);ye([h({attribute:"hint"})],ge.prototype,"hint",2);ye([h({reflect:!0})],ge.prototype,"name",2);ye([h({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);ye([h({reflect:!0})],ge.prototype,"orientation",2);ye([qt()],ge.prototype,"value",1);ye([h({attribute:"value",reflect:!0})],ge.prototype,"defaultValue",2);ye([h({reflect:!0})],ge.prototype,"size",2);ye([h({type:Boolean,reflect:!0})],ge.prototype,"required",2);ye([h({type:Boolean,attribute:"with-label"})],ge.prototype,"withLabel",2);ye([h({type:Boolean,attribute:"with-hint"})],ge.prototype,"withHint",2);customElements.get("w-radio")||(customElements.define("w-radio",qe),customElements.define("w-radio-group",ge));/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:pp}=qn,fp=t=>t.strings===void 0,Ti=()=>document.createComment(""),Lt=(t,e,r)=>{const o=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=o.insertBefore(Ti(),i),n=o.insertBefore(Ti(),i);r=new pp(s,n,t,t.options)}else{const s=r._$AB.nextSibling,n=r._$AM,l=n!==t;if(l){let a;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(a=t._$AU)!==n._$AU&&r._$AP(a)}if(s!==i||l){let a=r._$AA;for(;a!==s;){const d=a.nextSibling;o.insertBefore(a,i),a=d}}}return r},Qe=(t,e,r=t)=>(t._$AI(e,r),t),gp={},wn=(t,e=gp)=>t._$AH=e,bp=t=>t._$AH,so=t=>{t._$AP?.(!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=Ar(class extends Or{constructor(t){if(super(t),t.type!==De.PROPERTY&&t.type!==De.ATTRIBUTE&&t.type!==De.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fp(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ve||e===z)return e;const r=t.element,o=t.name;if(t.type===De.PROPERTY){if(e===r[o])return ve}else if(t.type===De.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return ve}else if(t.type===De.ATTRIBUTE&&r.getAttribute(o)===e+"")return ve;return wn(t),e}});function Jo(t,e){const r={waitUntilFirstUpdate:!1,...e};return(o,i)=>{const{update:s}=o,n=Array.isArray(t)?t:[t];o.update=function(l){n.forEach(a=>{const d=a;if(l.has(d)){const p=l.get(d),c=this[d];p!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](p,c)}}),s.call(this,l)}}}var vp={},mp=JSON.parse('{"icon.title.check":["Sjekkmerke"]}'),wp=JSON.parse('{"icon.title.check":["Checkmark"]}'),yp=JSON.parse('{"icon.title.check":["Valintamerkki"]}'),xp=JSON.parse('{"icon.title.check":["Flueben"]}'),kp=JSON.parse('{"icon.title.check":["Bock"]}'),yn=["en","nb","fi","da","sv"],xn="en",$p=()=>{var t;let e;switch((t=process==null?void 0:vp)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},kn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":xn},no=t=>yn.find(e=>t===e||t.toLowerCase().includes(e))||kn();function _p(){var t;if(typeof window>"u"){const e=$p();return no(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=kn();return yn.includes(e)?no(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),no(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),xn}}var Sp=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,Ep=(t,e,r,o,i)=>{const s=_p(),n=Sp(s,t,e,r,o,i);x.load(s,n),x.activate(s)};Ep(wp,mp,yp,xp,kp);var Cp=class extends P{render(){const t=x.t({message:"Checkmark",id:"icon.title.check",comment:"Title for check icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-check-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.83 7.667 7.163 11l5.334-6"></path></svg>`}};customElements.get("w-icon-check-16")||customElements.define("w-icon-check-16",Cp);const Ap=":host{display:block;user-select:none;-webkit-user-select:none}[part~=control]{position:relative;width:2rem;height:2rem;border-color:var(--w-s-color-border);border-radius:2px;border-style:solid;border-width:1px;background-color:var(--w-s-color-background);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;margin-right:.8rem;text-align:center;line-height:var(--w-line-height-xs);font-size:var(--w-font-size-m)}[part~=base]{display:flex;align-items:center;position:relative;color:currentColor;vertical-align:middle;cursor:pointer}[part~=label]{display:block;font-size:var(--w-font-size-m);line-height:var(--w-line-height-m);user-select:none;cursor:pointer;padding:.2rem 0}[part~=control]:has(:checked,:indeterminate){color:var(--checked-icon-color, white);border-color:var(--w-s-color-border-primary);background-color:var(--w-s-color-background-primary)}[part~=control]:has(:indeterminate){font-weight:700}[part~=control]:has(:checked){background-image:var(--w-icon-toggle-checked);background-position:center}[part~=control]:has(>input:focus-visible:not(:disabled)){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}:host [part~=base]:has(input:disabled){opacity:.5;cursor:not-allowed}input{position:absolute;padding:0;margin:0;height:100%;width:100%;opacity:0;pointer-events:none}[part~=icon]{display:flex;input:not(:checked,:indeterminate)+&{visibility:hidden}}:host([required]) [part~=label]:after{content:var(--wa-form-control-required-content);color:var(--wa-form-control-required-content-color);margin-inline-start:var(--wa-form-control-required-content-offset)}";var Op=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,ce=(t,e,r,o)=>{for(var i=o>1?void 0:o?Lp(e,r):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=(o?n(e,r,i):n(i))||i);return o&&i&&Op(e,r,i),i};class ie extends Ce{constructor(){super(...arguments),this.hasSlotController=new mn(this,"hint"),this.title="",this.name="",this._value=this.getAttribute("value")??null,this.size="medium",this.disabled=!1,this.indeterminate=!1,this.checked=this.hasAttribute("checked"),this.defaultChecked=this.hasAttribute("checked"),this.form=null,this.required=!1,this.hint=""}static{this.css=[Ap]}static{this.shadowRootOptions={...Ce.shadowRootOptions,delegatesFocus:!0}}static get validators(){const e=[vn({validationProperty:"checked",validationElement:Object.assign(document.createElement("input"),{type:"checkbox",required:!0})})];return[...super.validators,...e]}get value(){return this._value??"on"}set value(e){this._value=e}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set("checked",this.checked),this.customStates.set("indeterminate",this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set("disabled",this.disabled)}willUpdate(e){super.willUpdate(e),e.has("defaultChecked")&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has("value")||e.has("checked"))&&this.handleValueOrCheckedChange()}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){const e=this.hasSlotController.test("hint"),r=this.hint?!0:!!e;return!this.checked&&this.indeterminate,w`
      <label part="base">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${J(this._value)}
            .indeterminate=${Pi(this.indeterminate)}
            .checked=${Pi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="hint"
            @click=${this.handleClick} />
          ${this.indeterminate?"–":""}
        </span>

        <slot part="label"></slot>
      </label>

      <slot id="hint" part="hint" name="hint" aria-hidden=${r?"false":"true"} class="${Sr({"has-slotted":r})}">
        ${this.hint}
      </slot>
    `}}ce([mt('input[type="checkbox"]')],ie.prototype,"input",2);ce([h()],ie.prototype,"title",2);ce([h({reflect:!0})],ie.prototype,"name",2);ce([h({reflect:!0})],ie.prototype,"value",1);ce([h({reflect:!0})],ie.prototype,"size",2);ce([h({type:Boolean})],ie.prototype,"disabled",2);ce([h({type:Boolean,reflect:!0})],ie.prototype,"indeterminate",2);ce([h({type:Boolean,attribute:!1})],ie.prototype,"checked",2);ce([h({type:Boolean,reflect:!0,attribute:"checked"})],ie.prototype,"defaultChecked",2);ce([h({reflect:!0})],ie.prototype,"form",2);ce([h({type:Boolean,reflect:!0})],ie.prototype,"required",2);ce([h()],ie.prototype,"hint",2);ce([Jo("defaultChecked")],ie.prototype,"handleDefaultCheckedChange",1);ce([Jo(["checked","indeterminate"])],ie.prototype,"handleStateChange",1);ce([Jo("disabled")],ie.prototype,"handleDisabledChange",1);customElements.get("w-checkbox")||customElements.define("w-checkbox",ie);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function or(t,e,r){return t?e(t):r?.(t)}const Np=JSON.parse('{"select.label.optional":["(valgfrit)"]}'),Tp=JSON.parse('{"select.label.optional":["(optional)"]}'),Pp=JSON.parse('{"select.label.optional":["(vapaaehtoinen)"]}'),Dp=JSON.parse('{"select.label.optional":["(valgfritt)"]}'),Bp=JSON.parse('{"select.label.optional":["(valfritt)"]}'),Rp=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.appearance-none{-webkit-appearance:none;appearance:none}.border-0{border-width:0}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.opacity-25{opacity:.25}.block,.before\\:block:before{display:block}.before\\:hidden:before{display:none}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.bottom-0{bottom:0}.right-0{right:0}.before\\:bottom-0:before{bottom:0}.before\\:right-0:before{right:0}.top-\\[30\\%\\]{top:30%}.absolute{position:absolute}.relative{position:relative}.static{position:static}.before\\:absolute:before{position:absolute}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.s-icon{color:var(--w-s-color-icon)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-disabled:hover{border-color:var(--w-s-color-border-disabled)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.active\\:s-border-disabled:active{border-color:var(--w-s-color-border-disabled)}.h-full{height:100%}.w-32{width:3.2rem}.w-full{width:100%}.before\\:h-full:before{height:100%}.before\\:w-32:before{width:3.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-32{padding-right:3.2rem}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none,.before\\:pointer-events-none:before{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}`;var zp=Object.defineProperty,Oe=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&zp(e,r,i),i};const Pe={base:"block text-m mb-0 py-12 pr-32 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] appearance-none cursor-pointer caret-current",default:"s-text s-bg pl-8 border-1 s-border hover:s-border-hover active:s-border-active",disabled:"s-text-disabled s-bg-disabled-subtle pl-8 border-1 s-border-disabled hover:s-border-disabled active:s-border-disabled pointer-events-none",invalid:"s-text s-bg pl-8 border-1 s-border-negative hover:s-border-negative-hover active:s-border-active outline-[--w-s-color-border-negative]!",readOnly:"s-text bg-transparent pl-0 border-0 pointer-events-none before:hidden",wrapper:"relative",selectWrapper:"relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:pointer-events-none ",chevron:"block absolute top-[30%] right-0 bottom-0 w-32 h-full s-icon pointer-events-none cursor-pointer",chevronDisabled:"opacity-25"},Di={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},ao={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class $e extends Ho(P){constructor(){super(),this._setValue=e=>{this.value=e,this.setValue(e)},ze(Tp,Dp,Pp,Np,Bp),this._options=this.innerHTML}static{this.styles=[le,Rp]}firstUpdated(){this.autoFocus&&this.shadowRoot.querySelector("select").focus(),Array.from(this.children).map(e=>{e.selected&&this._setValue(e.value)})}handleKeyDown(e){this.readOnly&&(e.key===" "||e.key==="ArrowDown"||e.key==="ArrowUp")&&e.preventDefault()}get#e(){return j([Pe.base,!this.invalid&&!this.disabled&&!this.readOnly&&Pe.default,this.invalid&&Pe.invalid,this.disabled&&Pe.disabled,this.readOnly&&Pe.readOnly])}get#t(){return j([ao.base,this.invalid?ao.colorInvalid:ao.color])}get#i(){return j([Pe.chevron,this.disabled&&Pe.chevronDisabled])}get#r(){return"select_id"}get#o(){return this.hint?`${this.#r}__hint`:void 0}onChange({target:e}){this._setValue(e.value);const r=new CustomEvent("change",{detail:e.value});this.dispatchEvent(r)}render(){return w`<div class="${Pe.wrapper}">
      ${or(this.label,()=>w`<label class="${Di.base}" for="${this.#r}">
            ${this.label}
            ${or(this.optional,()=>w`<span class="${Di.optional}"
                  >${x._({id:"select.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"})}</span
                >`)}</label
          >`)}
      <div class="${Pe.selectWrapper}">
        <select
          class="${this.#e}"
          id="${this.#r}"
          ?disabled=${this.disabled}
          aria-describedby="${J(this.#o)}"
          aria-invalid="${J(this.invalid)}"
          aria-errormessage="${J(this.invalid&&this.#o)}"
          @keydown=${this.handleKeyDown}
          @change=${this.onChange}>
          ${Co(this._options)}
        </select>
        <div class="${this.#i}">
          <w-icon-chevron-down-16></w-icon-chevron-down-16>
        </div>
      </div>
      ${or(this.always||this.invalid,()=>w`<div id="${this.#o}" class="${this.#t}">${this.hint}</div>`)}
    </div>`}}Oe([h({type:Boolean,reflect:!0})],$e.prototype,"autoFocus");Oe([h({type:Boolean,reflect:!0})],$e.prototype,"invalid");Oe([h({type:Boolean,reflect:!0})],$e.prototype,"always");Oe([h({reflect:!0})],$e.prototype,"hint");Oe([h({reflect:!0})],$e.prototype,"label");Oe([h({type:Boolean,reflect:!0})],$e.prototype,"optional");Oe([h({type:Boolean,reflect:!0})],$e.prototype,"disabled");Oe([h({attribute:"read-only",type:Boolean,reflect:!0})],$e.prototype,"readOnly");Oe([h({state:!0})],$e.prototype,"_options");Oe([h({reflect:!0})],$e.prototype,"name");Oe([h({reflect:!0})],$e.prototype,"value");customElements.get("w-select")||customElements.define("w-select",$e);const Mp=F`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.focus\\:\\[--w-outline-offset\\:-2px\\]:focus{--w-outline-offset:-2px}.bg-transparent{background-color:#0000}.border-1{border-width:1px}.rounded-4{border-radius:4px}.caret-current{caret-color:currentColor}.block{display:block}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.outline-\\[--w-s-color-border-negative\\]\\!{outline-color:var(--w-s-color-border-negative)!important}.relative{position:relative}.static{position:static}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled-subtle{background-color:var(--w-s-color-background-disabled-subtle)}.s-text{color:var(--w-s-color-text)}.s-text-disabled{color:var(--w-s-color-text-disabled)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-text-subtle{color:var(--w-s-color-text-subtle)}.placeholder\\:s-text-placeholder::placeholder{color:var(--w-s-color-text-placeholder)}.s-border{border-color:var(--w-s-color-border)}.s-border-disabled{border-color:var(--w-s-color-border-disabled)}.s-border-negative{border-color:var(--w-s-color-border-negative)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.hover\\:s-border-negative-hover:hover{border-color:var(--w-s-color-border-negative-hover)}.active\\:s-border-selected:active{border-color:var(--w-s-color-border-selected)}.w-full{width:100%}.min-h-\\[42\\]{min-height:4.2rem}.mb-0{margin-bottom:0}.mt-4{margin-top:.4rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-12{padding-top:1.2rem;padding-bottom:1.2rem}.pb-4{padding-bottom:.4rem}.pl-0{padding-left:0}.pl-8{padding-left:.8rem}.pr-40{padding-right:4rem}.pl-\\[var\\(--w-prefix-width\\,_40px\\)\\]{padding-left:var(--w-prefix-width,40px)}.cursor-pointer{cursor:pointer}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:grayscale}.font-bold{font-weight:700}.font-normal{font-weight:400}.pointer-events-none{pointer-events:none}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-s{font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-m{line-height:var(--w-line-height-m)}@media (min-width:480px){.sm\\:min-h-\\[45\\]{min-height:4.5rem}}`;var Ip=Object.defineProperty,X=(t,e,r,o)=>{for(var i=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(i=n(e,r,i)||i);return i&&Ip(e,r,i),i};const Me={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]",textArea:"min-h-[42] sm:min-h-[45]"},jp={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},lo={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};class W extends Ho(P){constructor(){super(...arguments),this.type="text",this._hasPrefix=!1,this._hasSuffix=!1}static{this.shadowRootOptions={...oe.shadowRootOptions,delegatesFocus:!0}}updated(e){e.has("value")&&this.setValue(this.value)}static{this.styles=[le,Mp]}get _inputstyles(){return j([Me.base,this._hasSuffix&&Me.suffix,this._hasPrefix&&Me.prefix,!this.invalid&&!this.disabled&&!this.readOnly&&Me.default,this.invalid&&!this.disabled&&!this.readOnly&&Me.invalid,!this.invalid&&this.disabled&&!this.readOnly&&Me.disabled,!this.invalid&&!this.disabled&&this.readOnly&&Me.readOnly])}get _helptextstyles(){return j([lo.base,this.invalid?lo.colorInvalid:lo.color])}get _label(){if(this.label)return w`<label for="${this._id}" class=${jp.base}>${this.label}</label>`}get _helpId(){if(this.helpText)return`${this._id}__hint`}get _id(){return"textfield"}get _error(){if(this.invalid&&this._helpId)return this._helpId}handler(e){const{name:r,value:o}=e.currentTarget;this.setValue(o);const i=new CustomEvent(e.type,{detail:{name:r,value:o,target:e.target}});this.dispatchEvent(i)}prefixSlotChange(){this.renderRoot.querySelector("slot[name=prefix]").assignedElements().length&&(this._hasPrefix=!0)}suffixSlotChange(){this.renderRoot.querySelector("slot[name=suffix]").assignedElements().length&&(this._hasSuffix=!0)}render(){return w`
      ${this._label}
      <div class="${Me.wrapper}">
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
    `}}X([h({type:Boolean,reflect:!0})],W.prototype,"disabled");X([h({type:Boolean,reflect:!0})],W.prototype,"invalid");X([h({type:String,reflect:!0})],W.prototype,"id");X([h({type:String,reflect:!0})],W.prototype,"label");X([h({type:String,reflect:!0})],W.prototype,"helpText");X([h({type:String,reflect:!0})],W.prototype,"size");X([h({type:Number,reflect:!0})],W.prototype,"max");X([h({type:Number,reflect:!0})],W.prototype,"min");X([h({type:Number,reflect:!0,attribute:"min-length"})],W.prototype,"minLength");X([h({type:Number,reflect:!0,attribute:"max-length"})],W.prototype,"maxLength");X([h({type:String,reflect:!0})],W.prototype,"pattern");X([h({type:String,reflect:!0})],W.prototype,"placeholder");X([h({type:Boolean,reflect:!0,attribute:"read-only"})],W.prototype,"readOnly");X([h({type:Boolean,reflect:!0})],W.prototype,"required");X([h({type:String,reflect:!0})],W.prototype,"type");X([h({type:String,reflect:!0})],W.prototype,"value");X([h({type:String,reflect:!0})],W.prototype,"name");X([h({type:Boolean})],W.prototype,"_hasPrefix");X([h({type:Boolean})],W.prototype,"_hasSuffix");customElements.get("w-textfield")||customElements.define("w-textfield",W);const Ir=typeof window<"u";function Fp(t,e){if(!Ir)return;const r=customElements.get("w-toast-container").init(),o={id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),text:t,duration:5e3,type:"success",...e};return r.set(o),o}function Hp(t){return Ir?customElements.get("w-toast-container").init().del(t):void 0}function Vp(t,e){if(!Ir)return;const r=customElements.get("w-toast-container").init();return r.set({...r.get(t),...e}),r.get(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=(t,e,r)=>{const o=new Map;for(let i=e;i<=r;i++)o.set(t[i],i);return o},Up=Ar(class extends Or{constructor(t){if(super(t),t.type!==De.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);const i=[],s=[];let n=0;for(const l of t)i[n]=o?o(l,n):n,s[n]=r(l,n),n++;return{values:s,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){const i=bp(t),{values:s,keys:n}=this.dt(e,r,o);if(!Array.isArray(i))return this.ut=n,s;const l=this.ut??=[],a=[];let d,p,c=0,g=i.length-1,u=0,b=s.length-1;for(;c<=g&&u<=b;)if(i[c]===null)c++;else if(i[g]===null)g--;else if(l[c]===n[u])a[u]=Qe(i[c],s[u]),c++,u++;else if(l[g]===n[b])a[b]=Qe(i[g],s[b]),g--,b--;else if(l[c]===n[b])a[b]=Qe(i[c],s[b]),Lt(t,a[b+1],i[c]),c++,b--;else if(l[g]===n[u])a[u]=Qe(i[g],s[u]),Lt(t,i[c],i[g]),g--,u++;else if(d===void 0&&(d=Bi(n,u,b),p=Bi(l,c,g)),d.has(l[c]))if(d.has(l[g])){const f=p.get(n[u]),m=f!==void 0?i[f]:null;if(m===null){const E=Lt(t,i[c]);Qe(E,s[u]),a[u]=E}else a[u]=Qe(m,s[u]),Lt(t,i[c],m),i[f]=null;u++}else so(i[g]),g--;else so(i[c]),c++;for(;u<=b;){const f=Lt(t,a[b+1]);Qe(f,s[u]),a[u++]=f}for(;c<=g;){const f=i[c++];f!==null&&so(f)}return this.ut=n,wn(t,a),ve}});class $n extends oe{static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];static properties={_toasts:{state:!0}};constructor(){super(),this._toasts=new Map}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>{const e=[],r=[];for(const i of this._toasts)Date.now()<=i[1].duration?e.push(i):r.push(i);const o=[];for(const[i]of r){const s=this.renderRoot.querySelector(`#${i}`);o.push(s.collapse())}Promise.all(o).then(()=>{e.length!==this._toasts.size&&(this._toasts=new Map(e))})},500)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearTimeout(this._interval)}static init(){let e=document.querySelector("w-toast-container");return e||(e=document.createElement("w-toast-container"),document.body.appendChild(e)),e}get _toastsArray(){return Array.from(this._toasts).map(([,e])=>e)}get(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');return this._toasts.get(e)}set(e){if(!e.id)throw new Error('invalid or undefined "id" on toast object');const r=this._toasts.set(e.id,{...e,duration:Date.now()+(e.duration||5e3)});return this._toasts=new Map(Array.from(this._toasts)),r}async del(e){if(!e)throw new Error('undefined "id" given when attempting to retrieve toast');if(typeof e!="string"&&!Number.isInteger(e))throw new Error('"id" must be number or string when attempting to retrieve toast');const r=this.renderRoot.querySelector(`#${e}`);if(!this._toasts.has(e))return!1;await r.collapse();const o=this._toasts.delete(e);return this._toasts=new Map(Array.from(this._toasts)),o}render(){return w`
      <aside class="${Qr.wrapper}">
        <div class="${Qr.base}" id="w-toast-container-list">
          ${Up(this._toastsArray,e=>e.id,e=>w` <w-toast
                class="${Qr.content}"
                id="${e.id}"
                type="${e.type}"
                text="${e.text}"
                ?canclose=${e.canclose}
                @close=${()=>this.del(e.id)}>
              </w-toast>`)}
        </div>
      </aside>
    `}}customElements.get("w-toast-container")||customElements.define("w-toast-container",$n);const Wo=typeof window<"u";let _n=!0;if(Wo){const t=window.matchMedia("(prefers-reduced-motion: reduce)"),e=({matches:r})=>_n=!r;t.addEventListener&&t.addEventListener("change",e),e(t)}const Sn=t=>{t.style.transition=null,t.style.backfaceVisibility=null,t.style.overflow=null},En=t=>{const e=_n?"var(--f-expansion-duration, 0.3s)":"0.01s";t.style.transition=`height ${e}`,t.style.backfaceVisibility="hidden",t.style.overflow="hidden"},qp=(t,e)=>()=>{t.style.height="auto",t.style.overflow=null,e&&e()},Jp=t=>()=>{t&&t()},Cn=(t,e)=>{const r=(()=>{if(!e)return new Promise(s=>{e=s})})(),o=qp(t,e);Sn(t),t.style.height="auto";let i=t.scrollHeight;if(Wo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height="0px",t.style.transitionTimingFunction="ease-out",En(t),requestAnimationFrame(()=>t.style.height=i+"px")}),r)return r},An=(t,e)=>{const r=(()=>{if(!e)return new Promise(s=>{e=s})})(),o=Jp(e);Sn(t);let i=t.scrollHeight;if(Wo&&requestAnimationFrame(()=>{t.addEventListener("transitionend",o,{once:!0}),t.style.height=i+"px",t.style.transitionTimingFunction="ease-in",En(t),requestAnimationFrame(()=>t.style.height="0px")}),r)return r},Wp=JSON.parse('{"toast.aria.error":["Fejl"],"toast.aria.successful":["Fuldført"],"toast.aria.warning":["Advarsel"]}'),Yp=JSON.parse('{"toast.aria.error":["Error"],"toast.aria.successful":["Successful"],"toast.aria.warning":["Warning"]}'),Qp=JSON.parse('{"toast.aria.error":["Virhe"],"toast.aria.successful":["Onnistui"],"toast.aria.warning":["Varoitus"]}'),Xp=JSON.parse('{"toast.aria.error":["Feil"],"toast.aria.successful":["Vellykket"],"toast.aria.warning":["Advarsel"]}'),Zp=JSON.parse('{"toast.aria.error":["Fel"],"toast.aria.successful":["Genomfört"],"toast.aria.warning":["Varning"]}'),Ie={success:"success",error:"error",warning:"warning"};class Kp extends oe{static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];static properties={id:{type:String,attribute:!0,reflect:!0},type:{type:String,attribute:!0,reflect:!0},text:{type:String,attribute:!0,reflect:!0},canclose:{type:Boolean,attribute:!0,reflect:!0}};constructor(){super(),ze(Yp,Xp,Qp,Wp,Zp),this.id=Date.now().toString(36)+Math.random().toString(36).slice(2,5),this.type="success",this.text="",this.canclose=!1}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(){!this._expanded&&this._wrapper&&Cn(this._wrapper,()=>this._expanded=!0)}get#e(){return j([_e.base,this.type===Ie.success&&_e.positive,this.type===Ie.warning&&_e.warning,this.type===Ie.error&&_e.negative])}get#t(){return j([_e.iconBase,this.type===Ie.success&&_e.iconPositive,this.type===Ie.warning&&_e.iconWarning,this.type===Ie.error&&_e.iconNegative])}get _wrapper(){return this.renderRoot?.querySelector("section")??null}get _warning(){return this.type===Ie.warning}get _error(){return this.type===Ie.error}get _role(){return this._error||this._warning?"alert":"status"}get _typeLabel(){return this._warning?x._({id:"toast.aria.warning",message:"Warning",comment:"Default screenreader message for warning in toast component"}):this._error?x._({id:"toast.aria.error",message:"Error",comment:"Default screenreader message for error in toast component"}):x._({id:"toast.aria.successful",message:"Successful",comment:"Default screenreader message for successful in toast component"})}get _iconMarkup(){return this._warning?w`<w-icon-warning-16></w-icon-warning-16>`:this._error?w`<w-icon-error-16></w-icon-error-16>`:w`<w-icon-success-16></w-icon-success-16>`}async collapse(){return new Promise(e=>{this._expanded&&this._wrapper?An(this._wrapper,e):e()})}close(){const e=new CustomEvent("close",{detail:{id:this.id},bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}render(){return this.text?w` <section class="${_e.wrapper}" aria-label="${this._typeLabel}">
      <div class="${this.#e}">
        <div class="${this.#t}">${this._iconMarkup}</div>
        <div role="${this._role}" class="${_e.content}">
          <p>${this.text}</p>
        </div>
        ${or(this.canclose===!0,()=>w`
            <button class="${_e.close}" @click="${this.close}">
              <w-icon-close-16></w-icon-close-16>
            </button>
          `)}
      </div>
    </section>`:w``}}customElements.get("w-toast")||customElements.define("w-toast",Kp);class Gp extends oe{static properties={show:{type:Boolean,reflect:!0},_removeElement:{type:Boolean,state:!0}};constructor(){super(),this.show=!1,this._mounted=!1,this._removeElement=!1}willUpdate(){this._mounted||(this._removeElement=!this.show),this.show&&this._removeElement&&(this._removeElement=!1)}updated(){if(this._wrapper){if(!this._mounted){this._mounted=!0;return}this.show&&Cn(this._wrapper),!this.show&&!this._removeElement&&An(this._wrapper,()=>this._removeElement=!0)}}get _wrapper(){return this??null}static styles=[oe.styles,F`
      :host {
        display: block;
      }
    `];render(){return w`<div aria-hidden=${J(this.show?void 0:"true")}>${this._removeElement?w``:w`<slot></slot>`}</div>`}}customElements.get("w-expand-transition")||customElements.define("w-expand-transition",Gp);class ef extends oe{static properties={level:{type:Number}};static styles=[oe.styles];get _markup(){return`<h${this.level}
    style="margin: 0; font-weight: unset; font-size: unset; line-height: unset;"
  >
    <slot></slot>
  </h${this.level}>
`}render(){return this.level?Co(this._markup):w`<slot></slot>`}}customElements.get("w-unstyled-heading")||customElements.define("w-unstyled-heading",ef);var tf={},rf=JSON.parse('{"icon.title.bag":["Veske"]}'),of=JSON.parse('{"icon.title.bag":["Handbag"]}'),sf=JSON.parse('{"icon.title.bag":["Käsilaukku"]}'),nf=JSON.parse('{"icon.title.bag":["Håndtaske"]}'),af=JSON.parse('{"icon.title.bag":["Handväska"]}'),On=["en","nb","fi","da","sv"],Ln="en",lf=()=>{var t;let e;switch((t=process==null?void 0:tf)==null?void 0:t.NMP_BRAND){case"FINN":e="nb";break;case"TORI":e="fi";break;case"BLOCKET":e="sv";break;case"DBA":e="da";break;default:e="en"}return e},Nn=()=>{var t;const e=(t=document?.location)==null?void 0:t.hostname;return e?.includes("finn")?"nb":e.includes("tori")?"fi":e.includes("blocket")?"sv":e.includes("dba")?"da":Ln},co=t=>On.find(e=>t===e||t.toLowerCase().includes(e))||Nn();function cf(){var t;if(typeof window>"u"){const e=lf();return co(e)}try{const e=(t=document?.documentElement)==null?void 0:t.lang,r=Nn();return On.includes(e)?co(e??r):(console.warn("Unsupported locale set in html lang tag, falling back to detection by hostname"),co(r))}catch(e){return console.warn("could not detect locale, falling back to source locale",e),Ln}}var df=(t,e,r,o,i,s)=>t==="nb"?r:t==="fi"?o:t==="da"?i:t==="sv"?s:e,uf=(t,e,r,o,i)=>{const s=cf(),n=df(s,t,e,r,o,i);x.load(s,n),x.activate(s)};uf(of,rf,sf,nf,af);var hf=class extends P{render(){const t=x.t({message:"Handbag",id:"icon.title.bag",comment:"Title for bag icon"});return pe`<svg xmlns="http://www.w3.org/2000/svg"width="16"height="16"fill="none"viewBox="0 0 16 16" part="w-icon-bag-16-part">${he(`<title>${t}</title>`)}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.043 8.433a1.76 1.76 0 0 0-.647-1.029A1.93 1.93 0 0 0 12.211 7H3.788c-.432 0-.851.143-1.185.404a1.76 1.76 0 0 0-.647 1.03l-.921 4.444a1.7 1.7 0 0 0 .39 1.473c.174.203.394.366.644.479.249.112.521.17.797.17h10.267c.276 0 .548-.058.797-.17.25-.113.47-.276.645-.479s.3-.44.368-.695a1.7 1.7 0 0 0 .021-.778z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 15V3.5c0-.663-.317-1.299-.88-1.768C9.559 1.263 8.796 1 8 1s-1.56.263-2.122.732C5.316 2.202 5 2.837 5 3.5V15"></path></svg>`}};customElements.get("w-icon-bag-16")||customElements.define("w-icon-bag-16",hf);Ir&&(window.WarpToastContainer=$n,window.toast=Fp,window.updateToast=Vp,window.removeToast=Hp);const pf={heading:{title:"Warp Elements",href:"/elements/"},pages:[{title:"Action",items:[{title:"Button",href:"/elements/button.html"},{title:"Pill",href:"/elements/pill.html"}]},{title:"Feedback Indicators",items:[{title:"Alert",href:"/elements/alert.html"}]},{title:"Forms",items:[{title:"Dead toggle",href:"/elements/deadtoggle.html"},{title:"Checkbox",href:"/elements/checkbox.html"},{title:"Radio",href:"/elements/radio.html"},{title:"Select",href:"/elements/select.html"},{title:"Textfield",href:"/elements/textfield.html"}]},{title:"Layout",items:[{title:"Badge",href:"/elements/badge.html"},{title:"Box",href:"/elements/box.html"},{title:"Card",href:"/elements/card.html"},{title:"Expandable",href:"/elements/expandable.html"},{title:"Toast",href:"/elements/toast.html"}]},{title:"Navigation",items:[{title:"Breadcrumbs",href:"/elements/breadcrumbs.html"},{title:"Pagination",href:"/elements/pagination.html"}]},{title:"Overlays",items:[{title:"Attention",href:"/elements/attention.html"},{title:"Modal",href:"/elements/modal.html"}]}]};class ff extends oe{static styles=[oe.styles,F`
      .sidebar {
        width: 300px;
      }

      .sidebar a {
        text-decoration: none;
        color: #131313;
      }
    `];render(){const{heading:e,pages:r}=pf;return w`
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
      `)}}customElements.define("sidebar-element",ff);
