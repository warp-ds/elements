import{n as e}from"./chunk-BneVvdWh.js";import{m as t,n,r,s as i,t as a}from"./lit-C07f_Bua.js";import{n as o,t as s}from"./dist-CaTrbEV7.js";import{n as c,t as l}from"./index.m-wj1BHO_P.js";import{n as u,o as d,r as f,t as p}from"./decorate-BZxMavXy.js";import{t as m}from"./icon-3mo7c0p-.js";import{n as h,r as g,t as _}from"./i18n-BMPIj3pm.js";import{n as v,t as y}from"./styles-BM5RxtAH.js";import{n as b,t as x}from"./if-defined-C6phCcrk.js";import{t as S}from"./button-DvGwlWHv.js";function C(e,t,n){return P(e,N(t,n))}function w(e,t){return typeof e==`function`?e(t):e}function T(e){return e.split(`-`)[0]}function E(e){return e.split(`-`)[1]}function D(e){return e===`x`?`y`:`x`}function ee(e){return e===`y`?`height`:`width`}function O(e){return ue.has(T(e))?`y`:`x`}function te(e){return D(O(e))}function ne(e,t,n){n===void 0&&(n=!1);let r=E(e),i=te(e),a=ee(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=j(o)),[o,j(o)]}function re(e){let t=j(e);return[k(e),t,k(t)]}function k(e){return e.replace(/start|end/g,e=>le[e])}function ie(e,t,n){switch(e){case`top`:case`bottom`:return n?t?fe:de:t?de:fe;case`left`:case`right`:return t?pe:me;default:return[]}}function A(e,t,n,r){let i=E(e),a=ie(T(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(k)))),a}function j(e){return e.replace(/left|right|bottom|top/g,e=>ce[e])}function ae(e){return{top:0,right:0,bottom:0,left:0,...e}}function oe(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:ae(e)}function M(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var se,N,P,F,I,ce,le,ue,de,fe,pe,me,he=e((()=>{se=[`top`,`right`,`bottom`,`left`],N=Math.min,P=Math.max,F=Math.round,I=e=>({x:e,y:e}),ce={left:`right`,right:`left`,bottom:`top`,top:`bottom`},le={start:`end`,end:`start`},ue=new Set([`top`,`bottom`]),de=[`left`,`right`],fe=[`right`,`left`],pe=[`top`,`bottom`],me=[`bottom`,`top`]}));function ge(e,t,n){let{reference:r,floating:i}=e,a=O(t),o=te(t),s=ee(o),c=T(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(E(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function _e(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=w(t,e),p=oe(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=M(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=M(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}function ve(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function ye(e){return se.some(t=>e[t]>=0)}async function be(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=T(n),s=E(n),c=O(n)===`y`,l=Te.has(o)?-1:1,u=a&&c?-1:1,d=w(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var xe,Se,Ce,we,Te,Ee,De,Oe,ke=e((()=>{he(),xe=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ge(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=ge(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},Se=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=w(e,t)||{};if(l==null)return{};let d=oe(u),f={x:n,y:r},p=te(i),m=ee(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),T=S?S[y]:0;(!T||!await(o.isElement==null?void 0:o.isElement(S)))&&(T=s.floating[y]||a.floating[m]);let D=b/2-x/2,O=T/2-h[m]/2-1,ne=N(d[_],O),re=N(d[v],O),k=ne,ie=T-h[m]-re,A=T/2-h[m]/2+D,j=C(k,A,ie),ae=!c.arrow&&E(i)!=null&&A!==j&&a.reference[m]/2-(A<k?ne:re)-h[m]/2<0,M=ae?A<k?A-k:A-ie:0;return{[p]:f[p]+M,data:{[p]:j,centerOffset:A-j-M,...ae&&{alignmentOffset:M}},reset:ae}}}),Ce=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=w(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=T(r),_=O(o),v=T(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[j(o)]:re(o)),x=p!==`none`;!d&&x&&b.push(...A(o,m,p,y));let S=[o,...b],C=await _e(t,h),E=[],D=i.flip?.overflows||[];if(l&&E.push(C[g]),u){let e=ne(r,a,y);E.push(C[e[0]],C[e[1]])}if(D=[...D,{placement:r,overflows:E}],!E.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==O(t))||D.every(e=>O(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:D},reset:{placement:t}};let n=D.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=D.filter(e=>{if(x){let t=O(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},we=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n}=t,{strategy:r=`referenceHidden`,...i}=w(e,t);switch(r){case`referenceHidden`:{let e=ve(await _e(t,{...i,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:ye(e)}}}case`escaped`:{let e=ve(await _e(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:ye(e)}}}default:return{}}}}},Te=new Set([`left`,`top`]),Ee=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await be(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},De=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=w(e,t),l={x:n,y:r},u=await _e(t,c),d=O(T(i)),f=D(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=C(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=C(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Oe=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=w(e,t),u=await _e(t,l),d=T(i),f=E(i),p=O(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=N(h-u[g],v),x=N(m-u[_],y),S=!t.middlewareData.shift,C=b,D=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(D=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=P(u.left,0),t=P(u.right,0),n=P(u.top,0),r=P(u.bottom,0);p?D=m-2*(e!==0||t!==0?e+t:P(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:P(u.top,u.bottom))}await c({...t,availableWidth:D,availableHeight:C});let ee=await o.getDimensions(s.floating);return m!==ee.width||h!==ee.height?{reset:{rects:!0}}:{}}}}}));function Ae(){return typeof window<`u`}function L(e){return je(e)?(e.nodeName||``).toLowerCase():`#document`}function R(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function z(e){return((je(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function je(e){return Ae()?e instanceof Node||e instanceof R(e).Node:!1}function B(e){return Ae()?e instanceof Element||e instanceof R(e).Element:!1}function V(e){return Ae()?e instanceof HTMLElement||e instanceof R(e).HTMLElement:!1}function Me(e){return!Ae()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof R(e).ShadowRoot}function H(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!He.has(i)}function Ne(e){return Ue.has(L(e))}function Pe(e){return We.some(t=>{try{return e.matches(t)}catch{return!1}})}function Fe(e){let t=Le(),n=B(e)?W(e):e;return Ge.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Ke.some(e=>(n.willChange||``).includes(e))||qe.some(e=>(n.contain||``).includes(e))}function Ie(e){let t=G(e);for(;V(t)&&!U(t);){if(Fe(t))return t;if(Pe(t))return null;t=G(t)}return null}function Le(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function U(e){return Je.has(L(e))}function W(e){return R(e).getComputedStyle(e)}function Re(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function G(e){if(L(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Me(e)&&e.host||z(e);return Me(t)?t.host:t}function ze(e){let t=G(e);return U(t)?e.ownerDocument?e.ownerDocument.body:e.body:V(t)&&H(t)?t:ze(t)}function Be(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ze(e),i=r===e.ownerDocument?.body,a=R(r);if(i){let e=Ve(a);return t.concat(a,a.visualViewport||[],H(r)?r:[],e&&n?Be(e):[])}return t.concat(r,Be(r,[],n))}function Ve(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var He,Ue,We,Ge,Ke,qe,Je,Ye=e((()=>{He=new Set([`inline`,`contents`]),Ue=new Set([`table`,`td`,`th`]),We=[`:popover-open`,`:modal`],Ge=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Ke=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],qe=[`paint`,`layout`,`strict`,`content`],Je=new Set([`html`,`body`,`#document`])}));function Xe(e){let t=W(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=V(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=F(n)!==a||F(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ze(e){return B(e)?e:e.contextElement}function K(e){let t=Ze(e);if(!V(t))return I(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Xe(t),o=(a?F(n.width):n.width)/r,s=(a?F(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Qe(e){let t=R(e);return!Le()||!t.visualViewport?_t:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function $e(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==R(e)?!1:t}function q(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ze(e),o=I(1);t&&(r?B(r)&&(o=K(r)):o=K(e));let s=$e(a,n,r)?Qe(a):I(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=R(a),t=r&&B(r)?R(r):r,n=e,i=Ve(n);for(;i&&r&&t!==n;){let e=K(i),t=i.getBoundingClientRect(),r=W(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=R(i),i=Ve(n)}}return M({width:u,height:d,x:c,y:l})}function et(e,t){let n=Re(e).scrollLeft;return t?t.left+n:q(z(e)).left+n}function tt(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-et(e,n),y:n.top+t.scrollTop}}function nt(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=z(r),s=t?Pe(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=I(1),u=I(0),d=V(r);if((d||!d&&!a)&&((L(r)!==`body`||H(o))&&(c=Re(r)),V(r))){let e=q(r);l=K(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?tt(o,c):I(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function rt(e){return Array.from(e.getClientRects())}function it(e){let t=z(e),n=Re(e),r=e.ownerDocument.body,i=P(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=P(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+et(e),s=-n.scrollTop;return W(r).direction===`rtl`&&(o+=P(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function at(e,t){let n=R(e),r=z(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Le();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=et(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=vt&&(a-=o)}else l<=vt&&(a+=l);return{width:a,height:o,x:s,y:c}}function ot(e,t){let n=q(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=V(e)?K(e):I(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function st(e,t,n){let r;if(t===`viewport`)r=at(e,n);else if(t===`document`)r=it(z(e));else if(B(t))r=ot(t,n);else{let n=Qe(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return M(r)}function ct(e,t){let n=G(e);return n===t||!B(n)||U(n)?!1:W(n).position===`fixed`||ct(n,t)}function lt(e,t){let n=t.get(e);if(n)return n;let r=Be(e,[],!1).filter(e=>B(e)&&L(e)!==`body`),i=null,a=W(e).position===`fixed`,o=a?G(e):e;for(;B(o)&&!U(o);){let t=W(o),n=Fe(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&yt.has(i.position)||H(o)&&!n&&ct(e,o))?r=r.filter(e=>e!==o):i=t,o=G(o)}return t.set(e,r),r}function ut(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Pe(t)?[]:lt(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=st(t,n,i);return e.top=P(r.top,e.top),e.right=N(r.right,e.right),e.bottom=N(r.bottom,e.bottom),e.left=P(r.left,e.left),e},st(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function dt(e){let{width:t,height:n}=Xe(e);return{width:t,height:n}}function ft(e,t,n){let r=V(t),i=z(t),a=n===`fixed`,o=q(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=I(0);function l(){c.x=et(i)}if(r||!r&&!a)if((L(t)!==`body`||H(i))&&(s=Re(t)),r){let e=q(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?tt(i,s):I(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function pt(e){return W(e).position===`static`}function mt(e,t){if(!V(e)||W(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return z(e)===n&&(n=n.ownerDocument.body),n}function ht(e,t){let n=R(e);if(Pe(e))return n;if(!V(e)){let t=G(e);for(;t&&!U(t);){if(B(t)&&!pt(t))return t;t=G(t)}return n}let r=mt(e,t);for(;r&&Ne(r)&&pt(r);)r=mt(r,t);return r&&U(r)&&pt(r)&&!Fe(r)?n:r||Ie(e)||n}function gt(e){return W(e).direction===`rtl`}var _t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt=e((()=>{ke(),he(),Ye(),_t=I(0),vt=25,yt=new Set([`absolute`,`fixed`]),bt=async function(e){let t=this.getOffsetParent||ht,n=this.getDimensions,r=await n(e.floating);return{reference:ft(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},xt={convertOffsetParentRelativeRectToViewportRelativeRect:nt,getDocumentElement:z,getClippingRect:ut,getOffsetParent:ht,getElementRects:bt,getClientRects:rt,getDimensions:dt,getScale:K,isElement:B,isRTL:gt},St=Ee,Ct=De,wt=Ce,Tt=Oe,Et=we,Dt=Se,Ot=(e,t,n)=>{let r=new Map,i={platform:xt,...n},a={...i.platform,_c:r};return xe(e,t,{...i,platform:a})}}));async function At(e){if(!e?.isShowing||(e?.waitForDOM&&await e?.waitForDOM(),!e?.targetEl||!e?.attentionEl))return;let t=e?.targetEl,n=e.attentionEl;return Ot(t,n,{placement:e?.directionName??J,middleware:[St({mainAxis:e?.distance??8,crossAxis:e?.skidding??0}),e?.flip&&wt({crossAxis:e?.crossAxis,fallbackPlacements:e?.fallbackPlacements}),e?.flip&&Ct({crossAxis:!0}),!e?.noArrow&&e?.arrowEl&&Dt({element:e?.arrowEl}),Et(),Tt({apply(){Object.assign(n.style,{paddingRight:`${Yt}px`,paddingLeft:`${Yt}px`})}})]}).then(({x:t,y:r,middlewareData:i,placement:a})=>{if(e.actualDirection=a,e?.isCallout||Object.assign(n.style,{left:`${t}px`,top:`${r}px`}),i?.hide&&!e?.isCallout){let{referenceHidden:e}=i.hide;Object.assign(n.style,{visibility:e?`hidden`:``})}if(i?.arrow&&e?.arrowEl){let t=e?.arrowEl,{x:r,y:o}=i.arrow,s=window.getComputedStyle(n).direction===`rtl`,c=Kt(a).split(`-`)[1],l=``,u=``,d=``,f=``;if(c===`start`){let e=typeof r==`number`?`calc(${Xt}px - ${t.offsetWidth/2}px)`:``;l=typeof o==`number`?`calc(${Xt}px - ${t.offsetWidth/2}px)`:``,u=s?e:``,f=s?``:e}else if(c===`end`){let e=typeof r==`number`?`calc(${Xt}px - ${t.offsetWidth/2}px)`:``;u=s?``:e,f=s?e:``,d=typeof o==`number`?`calc(${Xt}px - ${t.offsetWidth/2}px)`:``}else f=typeof r==`number`?`${r}px`:``,l=typeof o==`number`?`${o}px`:``;Object.assign(t.style,{top:l,right:u,bottom:d,left:f}),Jt(t,qt(a),a)}}),e}var jt,Mt,Nt,Pt,Ft,It,Lt,J,Rt,zt,Bt,Y,Vt,X,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt=e((()=>{kt(),jt=`top-start`,Mt=`top`,Nt=`top-end`,Pt=`right-start`,Ft=`right`,It=`right-end`,Lt=`bottom-start`,J=`bottom`,Rt=`bottom-end`,zt=`left-start`,Bt=`left`,Y=`left-end`,Vt=[jt,Mt,Nt,Pt,Ft,It,Lt,J,Rt,zt,Bt,Y],X={[jt]:Lt,[Mt]:J,[Nt]:Rt,[Lt]:jt,[J]:Mt,[Rt]:Nt,[zt]:Pt,[Bt]:Ft,[Y]:It,[Pt]:zt,[Ft]:Bt,[It]:Y},Ht={[zt]:-45,[Bt]:-45,[Y]:-45,[jt]:45,[Mt]:45,[Nt]:45,[Pt]:135,[Ft]:135,[It]:135,[Lt]:-135,[J]:-135,[Rt]:-135},Ut=e=>{let t;return t=/-/.test(e)?e.split(`-`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(``):e.charAt(0).toUpperCase()+e.slice(1),t},Wt=e=>e.split(`-`)[0],Gt=e=>X[Wt(e)],Kt=e=>X[e],qt=e=>Ht[Kt(e)],Jt=(e,t,n)=>{Object.assign(e?.style,{borderTopLeftRadius:`4px`,zIndex:1,[`margin${Ut(Gt(n))}`]:`-0.5px`,transform:`rotate(${t}deg)`})},Yt=8,Xt=24})),Qt=e((()=>{Zt()})),$t,en=e((()=>{a(),$t=t`
  .place-self-auto {
    place-self: auto;
  }
  .place-self-start {
    place-self: start;
  }
  .place-self-end {
    place-self: end;
  }
  .place-self-center {
    place-self: center;
  }
  .place-self-stretch {
    place-self: stretch;
  }

  .place-items-start {
    place-items: start;
  }
  .place-items-end {
    place-items: end;
  }
  .place-items-center {
    place-items: center;
  }
  .place-items-stretch {
    place-items: stretch;
  }

  .place-content-center {
    place-content: center;
  }
  .place-content-start {
    place-content: start;
  }
  .place-content-end {
    place-content: end;
  }
  .place-content-between {
    place-content: space-between;
  }
  .place-content-around {
    place-content: space-around;
  }
  .place-content-evenly {
    place-content: space-evenly;
  }

  .self-auto {
    align-self: auto;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-stretch {
    align-self: stretch;
  }

  .items-baseline {
    align-items: baseline;
  }
  .items-stretch {
    align-items: stretch;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }

  .content-start {
    align-content: flex-start;
  }
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-between {
    align-content: space-between;
  }
  .content-around {
    align-content: space-around;
  }
  .content-evenly {
    align-content: space-evenly;
  }

  .justify-self-auto {
    justify-self: auto;
  }
  .justify-self-start {
    justify-self: start;
  }
  .justify-self-center {
    justify-self: center;
  }
  .justify-self-end {
    justify-self: end;
  }
  .justify-self-stretch {
    justify-self: stretch;
  }

  .justify-items-start {
    justify-items: start;
  }
  .justify-items-center {
    justify-items: center;
  }
  .justify-items-end {
    justify-items: end;
  }
  .justify-items-stretch {
    justify-items: stretch;
  }

  .justify-start {
    justify-content: flex-start;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  .gap-0 {
    gap: 0;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  .gap-8 {
    gap: 2rem;
  }
  .gap-10 {
    gap: 2.5rem;
  }
  .gap-12 {
    gap: 3rem;
  }
  .gap-14 {
    gap: 3.5rem;
  }
  .gap-16 {
    gap: 4rem;
  }

  .gap-x-0 {
    column-gap: 0;
  }
  .gap-x-1 {
    column-gap: 0.25rem;
  }
  .gap-x-2 {
    column-gap: 0.5rem;
  }
  .gap-x-4 {
    column-gap: 1rem;
  }
  .gap-x-6 {
    column-gap: 1.5rem;
  }
  .gap-x-8 {
    column-gap: 2rem;
  }
  .gap-x-10 {
    column-gap: 2.5rem;
  }
  .gap-x-12 {
    column-gap: 3rem;
  }
  .gap-x-14 {
    column-gap: 3.5rem;
  }
  .gap-x-16 {
    column-gap: 4rem;
  }

  .gap-y-0 {
    row-gap: 0;
  }
  .gap-y-1 {
    row-gap: 0.25rem;
  }
  .gap-y-2 {
    row-gap: 0.5rem;
  }
  .gap-y-4 {
    row-gap: 1rem;
  }
  .gap-y-6 {
    row-gap: 1.5rem;
  }
  .gap-y-8 {
    row-gap: 2rem;
  }
  .gap-y-10 {
    row-gap: 2.5rem;
  }
  .gap-y-12 {
    row-gap: 3rem;
  }
  .gap-y-14 {
    row-gap: 3.5rem;
  }
  .gap-y-16 {
    row-gap: 4rem;
  }

  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 2;
  }
  .order-3 {
    order: 3;
  }
  .order-4 {
    order: 4;
  }
  .order-5 {
    order: 5;
  }
  .order-6 {
    order: 6;
  }
  .order-7 {
    order: 7;
  }
  .order-8 {
    order: 8;
  }
  .order-9 {
    order: 9;
  }
  .order-10 {
    order: 10;
  }
  .order-11 {
    order: 11;
  }
  .order-12 {
    order: 12;
  }
  .order-none {
    order: 0;
  }
  .order-first {
    order: -9999;
  }
  .order-last {
    order: 9999;
  }

  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }

  .grow {
    flex-grow: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }

  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }

  .basis-1 {
    flex-basis: 0.25rem;
  }
  .basis-2 {
    flex-basis: 0.5rem;
  }
  .basis-4 {
    flex-basis: 1rem;
  }
  .basis-8 {
    flex-basis: 2rem;
  }
  .basis-16 {
    flex-basis: 4rem;
  }
  .basis-1\/5 {
    flex-basis: 20%;
  }

  .flex-initial {
    flex: 0 1 auto;
  }
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  .space-x-0 > * + * {
    margin-left: 0;
  }
  .space-x-1 > * + * {
    margin-left: 0.25rem;
  }
  .space-x-2 > * + * {
    margin-left: 0.5rem;
  }
  .space-x-4 > * + * {
    margin-left: 1rem;
  }
  .space-x-6 > * + * {
    margin-left: 1.5rem;
  }
  .space-x-8 > * + * {
    margin-left: 2rem;
  }
  .space-x-10 > * + * {
    margin-left: 2.5rem;
  }
  .space-x-12 > * + * {
    margin-left: 3rem;
  }
  .space-x-14 > * + * {
    margin-left: 3.5rem;
  }
  .space-x-16 > * + * {
    margin-left: 4rem;
  }

  .space-y-0 > * + * {
    margin-top: 0;
  }
  .space-y-1 > * + * {
    margin-top: 0.25rem;
  }
  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }
  .space-y-8 > * + * {
    margin-top: 2rem;
  }
  .space-y-10 > * + * {
    margin-top: 2.5rem;
  }
  .space-y-12 > * + * {
    margin-top: 3rem;
  }
  .space-y-14 > * + * {
    margin-top: 3.5rem;
  }
  .space-y-16 > * + * {
    margin-top: 4rem;
  }

  .space-x-reverse > * + * {
    margin-right: 0;
    margin-left: 0;
  }
  .space-y-reverse > * + * {
    margin-bottom: 0;
    margin-top: 0;
  }

  .m-0 {
    margin: 0;
  }
  .m-1 {
    margin: 0.25rem;
  }
  .m-2 {
    margin: 0.5rem;
  }
  .m-4 {
    margin: 1rem;
  }
  .m-6 {
    margin: 1.5rem;
  }
  .m-8 {
    margin: 2rem;
  }
  .m-10 {
    margin: 2.5rem;
  }
  .m-12 {
    margin: 3rem;
  }
  .m-14 {
    margin: 3.5rem;
  }
  .m-16 {
    margin: 4rem;
  }

  .mt-0 {
    margin-top: 0;
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .mt-10 {
    margin-top: 2.5rem;
  }
  .mt-12 {
    margin-top: 3rem;
  }
  .mt-14 {
    margin-top: 3.5rem;
  }
  .mt-16 {
    margin-top: 4rem;
  }

  .mr-0 {
    margin-right: 0;
  }
  .mr-1 {
    margin-right: 0.25rem;
  }
  .mr-2 {
    margin-right: 0.5rem;
  }
  .mr-4 {
    margin-right: 1rem;
  }
  .mr-6 {
    margin-right: 1.5rem;
  }
  .mr-8 {
    margin-right: 2rem;
  }
  .mr-10 {
    margin-right: 2.5rem;
  }
  .mr-12 {
    margin-right: 3rem;
  }
  .mr-14 {
    margin-right: 3.5rem;
  }
  .mr-16 {
    margin-right: 4rem;
  }

  .mb-0 {
    margin-bottom: 0;
  }
  .mb-1 {
    margin-bottom: 0.25rem;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .mb-8 {
    margin-bottom: 2rem;
  }
  .mb-10 {
    margin-bottom: 2.5rem;
  }
  .mb-12 {
    margin-bottom: 3rem;
  }
  .mb-14 {
    margin-bottom: 3.5rem;
  }
  .mb-16 {
    margin-bottom: 4rem;
  }

  .ml-0 {
    margin-left: 0;
  }
  .ml-1 {
    margin-left: 0.25rem;
  }
  .ml-2 {
    margin-left: 0.5rem;
  }
  .ml-4 {
    margin-left: 1rem;
  }
  .ml-6 {
    margin-left: 1.5rem;
  }
  .ml-8 {
    margin-left: 2rem;
  }
  .ml-10 {
    margin-left: 2.5rem;
  }
  .ml-12 {
    margin-left: 3rem;
  }
  .ml-14 {
    margin-left: 3.5rem;
  }
  .ml-16 {
    margin-left: 4rem;
  }

  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .mx-10 {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
  .mx-12 {
    margin-left: 3rem;
    margin-right: 3rem;
  }
  .mx-14 {
    margin-left: 3.5rem;
    margin-right: 3.5rem;
  }
  .mx-16 {
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .my-2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .my-10 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .my-12 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .my-14 {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
  .my-16 {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .p-0 {
    padding: 0;
  }
  .p-1 {
    padding: 0.25rem;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .p-4 {
    padding: 1rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .p-8 {
    padding: 2rem;
  }
  .p-10 {
    padding: 2.5rem;
  }
  .p-12 {
    padding: 3rem;
  }
  .p-14 {
    padding: 3.5rem;
  }
  .p-16 {
    padding: 4rem;
  }

  .pt-0 {
    padding-top: 0;
  }
  .pt-1 {
    padding-top: 0.25rem;
  }
  .pt-2 {
    padding-top: 0.5rem;
  }
  .pt-4 {
    padding-top: 1rem;
  }
  .pt-6 {
    padding-top: 1.5rem;
  }
  .pt-8 {
    padding-top: 2rem;
  }
  .pt-10 {
    padding-top: 2.5rem;
  }
  .pt-12 {
    padding-top: 3rem;
  }
  .pt-14 {
    padding-top: 3.5rem;
  }
  .pt-16 {
    padding-top: 4rem;
  }

  .pr-0 {
    padding-right: 0;
  }
  .pr-1 {
    padding-right: 0.25rem;
  }
  .pr-2 {
    padding-right: 0.5rem;
  }
  .pr-4 {
    padding-right: 1rem;
  }
  .pr-6 {
    padding-right: 1.5rem;
  }
  .pr-8 {
    padding-right: 2rem;
  }
  .pr-10 {
    padding-right: 2.5rem;
  }
  .pr-12 {
    padding-right: 3rem;
  }
  .pr-14 {
    padding-right: 3.5rem;
  }
  .pr-16 {
    padding-right: 4rem;
  }

  .pb-0 {
    padding-bottom: 0;
  }
  .pb-1 {
    padding-bottom: 0.25rem;
  }
  .pb-2 {
    padding-bottom: 0.5rem;
  }
  .pb-4 {
    padding-bottom: 1rem;
  }
  .pb-6 {
    padding-bottom: 1.5rem;
  }
  .pb-8 {
    padding-bottom: 2rem;
  }
  .pb-10 {
    padding-bottom: 2.5rem;
  }
  .pb-12 {
    padding-bottom: 3rem;
  }
  .pb-14 {
    padding-bottom: 3.5rem;
  }
  .pb-16 {
    padding-bottom: 4rem;
  }

  .pl-0 {
    padding-left: 0;
  }
  .pl-1 {
    padding-left: 0.25rem;
  }
  .pl-2 {
    padding-left: 0.5rem;
  }
  .pl-4 {
    padding-left: 1rem;
  }
  .pl-6 {
    padding-left: 1.5rem;
  }
  .pl-8 {
    padding-left: 2rem;
  }
  .pl-10 {
    padding-left: 2.5rem;
  }
  .pl-12 {
    padding-left: 3rem;
  }
  .pl-14 {
    padding-left: 3.5rem;
  }
  .pl-16 {
    padding-left: 4rem;
  }

  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
  .px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
  .px-16 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .py-0 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .py-14 {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }
  .py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`})),tn,nn=e((()=>{tn=JSON.parse(`{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}`)})),rn,an=e((()=>{rn=JSON.parse(`{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}`)})),on,sn=e((()=>{on=JSON.parse(`{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}`)})),cn,ln=e((()=>{cn=JSON.parse(`{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}`)})),un,dn=e((()=>{un=JSON.parse(`{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}`)})),fn,pn=e((()=>{a(),fn=t`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.bg-\\[--w-color-callout-background\\]{background-color:var(--w-color-callout-background)}.bg-\\[--w-s-color-surface-elevated-300\\]{background-color:var(--w-s-color-surface-elevated-300)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b-0{border-bottom-width:0}.border-r-0{border-right-width:0}.border-\\[--w-color-callout-border\\]{border-color:var(--w-color-callout-border)}.border-\\[--w-s-color-background-inverted\\]{border-color:var(--w-s-color-background-inverted)}.border-\\[--w-s-color-surface-elevated-300\\]{border-color:var(--w-s-color-surface-elevated-300)}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-tl-4{border-top-left-radius:4px}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.-bottom-\\[8px\\]{bottom:-8px}.-left-\\[8px\\]{left:-8px}.-right-\\[8px\\]{right:-8px}.-top-\\[8px\\]{top:-8px}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.z-50{z-index:50}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-inverted{background-color:var(--w-s-color-background-inverted)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.drop-shadow-m{filter:drop-shadow(0 3px 8px #4040403d)drop-shadow(0 3px 6px #40404029)}.shadow-m{box-shadow:var(--w-shadow-m)}.h-\\[14px\\]{height:14px}.w-\\[14px\\]{width:14px}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.p-4{padding:.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.font-bold{font-weight:700}.resize{resize:both}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`})),mn,Z,Q,$,hn=e((()=>{l(),o(),Qt(),a(),f(),x(),g(),y(),en(),nn(),an(),sn(),ln(),dn(),pn(),m(),S(),u(),mn={primary:`s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active]`,secondary:`s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active`,utility:`s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active`,destructive:`s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active`,pill:`s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]`,disabled:`s-text-inverted s-bg-disabled`,quiet:`bg-transparent s-text-link hover:s-bg-hover active:s-bg-active`,utilityQuiet:`s-text bg-transparent hover:s-bg-hover active:s-bg-active`,negativeQuiet:`bg-transparent s-text-negative hover:s-bg-negative-subtle-hover active:s-bg-negative-subtle-active`,loading:`s-text s-bg-subtle`,link:`s-text-link`},Z=`font-bold focusable justify-center transition-colors ease-in-out`,`${Z}`,`${Z}`,`${Z}`,`${Z}`,`${Z}`,`${mn.link}`,Q={base:`border-2 relative flex items-center`,tooltip:`s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted rounded-4 py-6 px-8`,callout:`bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8`,highlight:`bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0`,popover:`bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0`,arrowBase:`absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform`,arrowDirectionLeftStart:`-left-[8px]`,arrowDirectionLeft:`-left-[8px]`,arrowDirectionLeftEnd:`-left-[8px]`,arrowDirectionRightStart:`-right-[8px]`,arrowDirectionRight:`-right-[8px]`,arrowDirectionRightEnd:`-right-[8px]`,arrowDirectionBottomStart:`-bottom-[8px]`,arrowDirectionBottom:`-bottom-[8px]`,arrowDirectionBottomEnd:`-bottom-[8px]`,arrowDirectionTopStart:`-top-[8px]`,arrowDirectionTop:`-top-[8px]`,arrowDirectionTopEnd:`-top-[8px]`,arrowTooltip:`s-bg-inverted border-[--w-s-color-background-inverted]`,arrowCallout:`bg-[--w-color-callout-background] border-[--w-color-callout-border]`,arrowPopover:`bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]`,arrowHighlight:`bg-[--w-color-callout-background] border-[--w-color-callout-border]`,content:`last-child:mb-0`,notCallout:`absolute z-50`},$=class extends n{static{this.styles=[v,$t,fn,t`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }
      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `]}constructor(){super(),this.show=!1,this.tooltip=!1,this.callout=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.flip=!1,this.crossAxis=!1,_(rn,cn,on,tn,un),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement=`bottom`,this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(X).includes(this.placement))throw Error(`Invalid "placement" attribute. Set its value to one of the following:\n${JSON.stringify(Object.keys(X))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Vt.includes(e)))throw Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:\n${JSON.stringify(Vt)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener(`click`,this.handleDone),window.addEventListener(`scroll`,this.handleDone),window.addEventListener(`resize`,this.handleDone),window.addEventListener(`touch`,this.handleDone)),this.tooltip&&(window.addEventListener(`mouseover`,this.handleDone),window.addEventListener(`mouseout`,this.handleDone))}disconnectedCallback(){window.removeEventListener(`click`,this.handleDone),window.removeEventListener(`scroll`,this.handleDone),window.removeEventListener(`resize`,this.handleDone),window.removeEventListener(`touch`,this.handleDone),window.removeEventListener(`mouseover`,this.handleDone),window.removeEventListener(`mouseout`,this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?At(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector(`#arrow`)}get _arrowDirection(){return X[this._actualDirection]}get _arrowClasses(){return c([Q.arrowBase,this._activeVariantClasses.arrow,Q[`arrowDirection${Ut(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?``:i`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){let e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},t=Object.keys(e).find(t=>!!e[t])||``;return{wrapper:Q[t],arrow:Q[`arrow${t.charAt(0).toUpperCase()+t.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector(`#attention`)}get _targetEl(){let e=this.renderRoot?.querySelector(`slot[name='target']`);return e?e.assignedElements()[0]:null}get _messageEl(){let e=this.renderRoot.querySelector(`slot[name='message']`);return e?e.assignedElements()[0]:null}get _wrapperClasses(){return c([Q.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return s._({id:`attention.aria.close`,message:`Close`,comment:`Aria label for the close button in attention`})}get _closeBtnHtml(){return i`
      <w-button
        aria-label="${this._ariaClose}"
        @click=${this.close}
        @keydown=${this.keypressed}
        variant="pill"
        small=""
        class="ml-8"
      >
        <w-icon
          name="Close"
          size="small"
          locale="${h()}"
          class="flex"></w-icon>
      </w-button>
    `}updated(){this._attentionEl&&(this.callout||this._attentionEl.style.setProperty(`--attention-visibility`,this.show?``:`hidden`),this.tooltip||this._attentionEl.style.setProperty(`--attention-display`,this.show?`flex`:`none`),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},At(this.attentionState))}pointingAtDirection(){switch(X[this._actualDirection]){case`top-start`:case`top`:case`top-end`:return s._({id:`attention.aria.pointingUp`,message:`pointing up`,comment:`Default screenreader message for top direction in the attention component`});case`right-start`:case`right`:case`right-end`:return s._({id:`attention.aria.pointingRight`,message:`pointing right`,comment:`Default screenreader message for right direction in the attention component`});case`bottom-start`:case`bottom`:case`bottom-end`:return s._({id:`attention.aria.pointingDown`,message:`pointing down`,comment:`Default screenreader message for bottom direction in the attention component`});case`left-start`:case`left`:case`left-end`:return s._({id:`attention.aria.pointingLeft`,message:`pointing left`,comment:`Default screenreader message for left direction in the attention component`});default:return``}}activeAttentionType(){switch(!0){case this.tooltip:return s._({id:`attention.aria.tooltip`,message:`tooltip`,comment:`Default screenreader message for tooltip in the attention component`});case this.callout:return s._({id:`attention.aria.callout`,message:`callout speech bubble`,comment:`Default screenreader message for callout speech bubble in the attention component`});case this.popover:return s._({id:`attention.aria.popover`,message:`popover speech bubble`,comment:`Default screenreader message for popover speech bubble in the attention component`});case this.highlight:return s._({id:`attention.aria.highlight`,message:`highlighted speech bubble`,comment:`Default screenreader message for highlighted speech bubble in the attention component`});default:return``}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?``:this.pointingAtDirection()}`}firstUpdated(){this._initialPlacement=this.placement,this.callout&&(this._attentionEl.style.position=`relative`)}close(){let e=new CustomEvent(`close`,{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key===`Escape`&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?i``:i`
      <section class=${b(this.className?this.className:void 0)}>
        ${this.placement===`right-start`||this.placement===`right`||this.placement===`right-end`||this.placement===`bottom-start`||this.placement===`bottom`||this.placement===`bottom-end`?i`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?`tooltip`:`img`}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:r}
              </div>
            `:i`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?`tooltip`:`img`}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:r}
              </div>
              <slot name="target"></slot>
            `}
      </section>
    `}},p([d({type:Boolean,reflect:!0})],$.prototype,`show`,void 0),p([d({type:String,reflect:!1})],$.prototype,`placement`,void 0),p([d({type:Boolean,reflect:!0})],$.prototype,`tooltip`,void 0),p([d({type:Boolean,reflect:!0})],$.prototype,`callout`,void 0),p([d({type:Boolean,reflect:!0})],$.prototype,`popover`,void 0),p([d({type:Boolean,reflect:!0})],$.prototype,`highlight`,void 0),p([d({attribute:`can-close`,type:Boolean,reflect:!0})],$.prototype,`canClose`,void 0),p([d({attribute:`no-arrow`,type:Boolean,reflect:!0})],$.prototype,`noArrow`,void 0),p([d({type:Number})],$.prototype,`distance`,void 0),p([d({type:Number})],$.prototype,`skidding`,void 0),p([d({type:Boolean,reflect:!0})],$.prototype,`flip`,void 0),p([d({attribute:`cross-axis`,type:Boolean,reflect:!0})],$.prototype,`crossAxis`,void 0),p([d({attribute:`fallback-placements`,type:Array,reflect:!0})],$.prototype,`fallbackPlacements`,void 0),customElements.get(`w-attention`)||customElements.define(`w-attention`,$)}));export{hn as t};