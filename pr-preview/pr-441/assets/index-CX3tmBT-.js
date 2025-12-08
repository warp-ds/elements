import{a as Tt,i as me,r as pe,p as ge,j as Bt,x as K,b as H,E as zt,n as D}from"./iframe-DghcrhIC.js";import{o as fe}from"./if-defined-DFUHtftr.js";import"./index-GS1UHjWG.js";const ue=["top","right","bottom","left"],Z=Math.min,O=Math.max,dt=Math.round,N=t=>({x:t,y:t}),he={left:"right",right:"left",bottom:"top",top:"bottom"},be={start:"end",end:"start"};function _t(t,e,o){return O(t,Z(e,o))}function G(t,e){return typeof t=="function"?t(e):t}function U(t){return t.split("-")[0]}function ot(t){return t.split("-")[1]}function Gt(t){return t==="x"?"y":"x"}function Pt(t){return t==="y"?"height":"width"}const we=new Set(["top","bottom"]);function F(t){return we.has(U(t))?"y":"x"}function $t(t){return Gt(F(t))}function ve(t,e,o){o===void 0&&(o=!1);const n=ot(t),r=$t(t),a=Pt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(i=mt(i)),[i,mt(i)]}function xe(t){const e=mt(t);return[Rt(t),e,Rt(e)]}function Rt(t){return t.replace(/start|end/g,e=>be[e])}const Mt=["left","right"],Ht=["right","left"],ye=["top","bottom"],ke=["bottom","top"];function Ee(t,e,o){switch(t){case"top":case"bottom":return o?e?Ht:Mt:e?Mt:Ht;case"left":case"right":return e?ye:ke;default:return[]}}function Ae(t,e,o,n){const r=ot(t);let a=Ee(U(t),o==="start",n);return r&&(a=a.map(i=>i+"-"+r),e&&(a=a.concat(a.map(Rt)))),a}function mt(t){return t.replace(/left|right|bottom|top/g,e=>he[e])}function De(t){return{top:0,right:0,bottom:0,left:0,...t}}function Kt(t){return typeof t!="number"?De(t):{top:t,right:t,bottom:t,left:t}}function pt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Ft(t,e,o){let{reference:n,floating:r}=t;const a=F(e),i=$t(e),s=Pt(i),c=U(e),d=a==="y",l=n.x+n.width/2-r.width/2,m=n.y+n.height/2-r.height/2,f=n[s]/2-r[s]/2;let p;switch(c){case"top":p={x:l,y:n.y-r.height};break;case"bottom":p={x:l,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:m};break;case"left":p={x:n.x-r.width,y:m};break;default:p={x:n.x,y:n.y}}switch(ot(e)){case"start":p[i]-=f*(o&&d?-1:1);break;case"end":p[i]+=f*(o&&d?-1:1);break}return p}const Se=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:i}=o,s=a.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:l,y:m}=Ft(d,n,c),f=n,p={},g=0;for(let u=0;u<s.length;u++){const{name:h,fn:b}=s[u],{x:w,y:v,data:y,reset:x}=await b({x:l,y:m,initialPlacement:n,placement:f,strategy:r,middlewareData:p,rects:d,platform:i,elements:{reference:t,floating:e}});l=w??l,m=v??m,p={...p,[h]:{...p[h],...y}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):x.rects),{x:l,y:m}=Ft(d,f,c)),u=-1)}return{x:l,y:m,placement:f,strategy:r,middlewareData:p}};async function it(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:a,rects:i,elements:s,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:l="viewport",elementContext:m="floating",altBoundary:f=!1,padding:p=0}=G(e,t),g=Kt(p),h=s[f?m==="floating"?"reference":"floating":m],b=pt(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(h)))==null||o?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:d,rootBoundary:l,strategy:c})),w=m==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),y=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},x=pt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:v,strategy:c}):w);return{top:(b.top-x.top+g.top)/y.y,bottom:(x.bottom-b.bottom+g.bottom)/y.y,left:(b.left-x.left+g.left)/y.x,right:(x.right-b.right+g.right)/y.x}}const Ce=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:a,platform:i,elements:s,middlewareData:c}=e,{element:d,padding:l=0}=G(t,e)||{};if(d==null)return{};const m=Kt(l),f={x:o,y:n},p=$t(r),g=Pt(p),u=await i.getDimensions(d),h=p==="y",b=h?"top":"left",w=h?"bottom":"right",v=h?"clientHeight":"clientWidth",y=a.reference[g]+a.reference[p]-f[p]-a.floating[g],x=f[p]-a.reference[p],V=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let _=V?V[v]:0;(!_||!await(i.isElement==null?void 0:i.isElement(V)))&&(_=s.floating[v]||a.floating[g]);const z=y/2-x/2,$=_/2-u[g]/2-1,C=Z(m[b],$),I=Z(m[w],$),j=C,X=_-u[g]-I,k=_/2-u[g]/2+z,q=_t(j,k,X),M=!c.arrow&&ot(r)!=null&&k!==q&&a.reference[g]/2-(k<j?C:I)-u[g]/2<0,R=M?k<j?k-j:k-X:0;return{[p]:f[p]+R,data:{[p]:q,centerOffset:k-q-R,...M&&{alignmentOffset:R}},reset:M}}}),Oe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:a,rects:i,initialPlacement:s,platform:c,elements:d}=e,{mainAxis:l=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:u=!0,...h}=G(t,e);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const b=U(r),w=F(s),v=U(s)===s,y=await(c.isRTL==null?void 0:c.isRTL(d.floating)),x=f||(v||!u?[mt(s)]:xe(s)),V=g!=="none";!f&&V&&x.push(...Ae(s,u,g,y));const _=[s,...x],z=await it(e,h),$=[];let C=((n=a.flip)==null?void 0:n.overflows)||[];if(l&&$.push(z[b]),m){const k=ve(r,i,y);$.push(z[k[0]],z[k[1]])}if(C=[...C,{placement:r,overflows:$}],!$.every(k=>k<=0)){var I,j;const k=(((I=a.flip)==null?void 0:I.index)||0)+1,q=_[k];if(q&&(!(m==="alignment"?w!==F(q):!1)||C.every(L=>F(L.placement)===w?L.overflows[0]>0:!0)))return{data:{index:k,overflows:C},reset:{placement:q}};let M=(j=C.filter(R=>R.overflows[0]<=0).sort((R,L)=>R.overflows[1]-L.overflows[1])[0])==null?void 0:j.placement;if(!M)switch(p){case"bestFit":{var X;const R=(X=C.filter(L=>{if(V){const Y=F(L.placement);return Y===w||Y==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(Y=>Y>0).reduce((Y,de)=>Y+de,0)]).sort((L,Y)=>L[1]-Y[1])[0])==null?void 0:X[0];R&&(M=R);break}case"initialPlacement":M=s;break}if(r!==M)return{reset:{placement:M}}}return{}}}};function Wt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Vt(t){return ue.some(e=>t[e]>=0)}const _e=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:o}=e,{strategy:n="referenceHidden",...r}=G(t,e);switch(n){case"referenceHidden":{const a=await it(e,{...r,elementContext:"reference"}),i=Wt(a,o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Vt(i)}}}case"escaped":{const a=await it(e,{...r,altBoundary:!0}),i=Wt(a,o.floating);return{data:{escapedOffsets:i,escaped:Vt(i)}}}default:return{}}}}},Re=new Set(["left","top"]);async function Le(t,e){const{placement:o,platform:n,elements:r}=t,a=await(n.isRTL==null?void 0:n.isRTL(r.floating)),i=U(o),s=ot(o),c=F(o)==="y",d=Re.has(i)?-1:1,l=a&&c?-1:1,m=G(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:g}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof g=="number"&&(p=s==="end"?g*-1:g),c?{x:p*l,y:f*d}:{x:f*d,y:p*l}}const Te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:r,y:a,placement:i,middlewareData:s}=e,c=await Le(e,t);return i===((o=s.offset)==null?void 0:o.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:r+c.x,y:a+c.y,data:{...c,placement:i}}}}},Pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:a=!0,crossAxis:i=!1,limiter:s={fn:h=>{let{x:b,y:w}=h;return{x:b,y:w}}},...c}=G(t,e),d={x:o,y:n},l=await it(e,c),m=F(U(r)),f=Gt(m);let p=d[f],g=d[m];if(a){const h=f==="y"?"top":"left",b=f==="y"?"bottom":"right",w=p+l[h],v=p-l[b];p=_t(w,p,v)}if(i){const h=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=g+l[h],v=g-l[b];g=_t(w,g,v)}const u=s.fn({...e,[f]:p,[m]:g});return{...u,data:{x:u.x-o,y:u.y-n,enabled:{[f]:a,[m]:i}}}}}},$e=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,n;const{placement:r,rects:a,platform:i,elements:s}=e,{apply:c=()=>{},...d}=G(t,e),l=await it(e,d),m=U(r),f=ot(r),p=F(r)==="y",{width:g,height:u}=a.floating;let h,b;m==="top"||m==="bottom"?(h=m,b=f===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(b=m,h=f==="end"?"top":"bottom");const w=u-l.top-l.bottom,v=g-l.left-l.right,y=Z(u-l[h],w),x=Z(g-l[b],v),V=!e.middlewareData.shift;let _=y,z=x;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(z=v),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(_=w),V&&!f){const C=O(l.left,0),I=O(l.right,0),j=O(l.top,0),X=O(l.bottom,0);p?z=g-2*(C!==0||I!==0?C+I:O(l.left,l.right)):_=u-2*(j!==0||X!==0?j+X:O(l.top,l.bottom))}await c({...e,availableWidth:z,availableHeight:_});const $=await i.getDimensions(s.floating);return g!==$.width||u!==$.height?{reset:{rects:!0}}:{}}}};function At(){return typeof window<"u"}function nt(t){return Qt(t)?(t.nodeName||"").toLowerCase():"#document"}function A(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(Qt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Qt(t){return At()?t instanceof Node||t instanceof A(t).Node:!1}function T(t){return At()?t instanceof Element||t instanceof A(t).Element:!1}function B(t){return At()?t instanceof HTMLElement||t instanceof A(t).HTMLElement:!1}function It(t){return!At()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof A(t).ShadowRoot}const je=new Set(["inline","contents"]);function lt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!je.has(r)}const Ne=new Set(["table","td","th"]);function Be(t){return Ne.has(nt(t))}const ze=[":popover-open",":modal"];function Dt(t){return ze.some(e=>{try{return t.matches(e)}catch{return!1}})}const Me=["transform","translate","scale","rotate","perspective"],He=["transform","translate","scale","rotate","perspective","filter"],Fe=["paint","layout","strict","content"];function jt(t){const e=Nt(),o=T(t)?P(t):t;return Me.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||He.some(n=>(o.willChange||"").includes(n))||Fe.some(n=>(o.contain||"").includes(n))}function We(t){let e=J(t);for(;B(e)&&!et(e);){if(jt(e))return e;if(Dt(e))return null;e=J(e)}return null}function Nt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ve=new Set(["html","body","#document"]);function et(t){return Ve.has(nt(t))}function P(t){return A(t).getComputedStyle(t)}function St(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function J(t){if(nt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||It(t)&&t.host||W(t);return It(e)?e.host:e}function te(t){const e=J(t);return et(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&lt(e)?e:te(e)}function ee(t,e,o){var n;e===void 0&&(e=[]);const r=te(t),a=r===((n=t.ownerDocument)==null?void 0:n.body),i=A(r);return a?(Lt(i),e.concat(i,i.visualViewport||[],lt(r)?r:[],[])):e.concat(r,ee(r,[]))}function Lt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function oe(t){const e=P(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=B(t),a=r?t.offsetWidth:o,i=r?t.offsetHeight:n,s=dt(o)!==a||dt(n)!==i;return s&&(o=a,n=i),{width:o,height:n,$:s}}function ne(t){return T(t)?t:t.contextElement}function tt(t){const e=ne(t);if(!B(e))return N(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:a}=oe(e);let i=(a?dt(o.width):o.width)/n,s=(a?dt(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const Ie=N(0);function re(t){const e=A(t);return!Nt()||!e.visualViewport?Ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==A(t)?!1:e}function at(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),a=ne(t);let i=N(1);e&&(n?T(n)&&(i=tt(n)):i=tt(t));const s=Xe(a,o,n)?re(a):N(0);let c=(r.left+s.x)/i.x,d=(r.top+s.y)/i.y,l=r.width/i.x,m=r.height/i.y;if(a){const f=A(a),p=n&&T(n)?A(n):n;let g=f,u=Lt(g);for(;u&&n&&p!==g;){const h=tt(u),b=u.getBoundingClientRect(),w=P(u),v=b.left+(u.clientLeft+parseFloat(w.paddingLeft))*h.x,y=b.top+(u.clientTop+parseFloat(w.paddingTop))*h.y;c*=h.x,d*=h.y,l*=h.x,m*=h.y,c+=v,d+=y,g=A(u),u=Lt(g)}}return pt({width:l,height:m,x:c,y:d})}function Ct(t,e){const o=St(t).scrollLeft;return e?e.left+o:at(W(t)).left+o}function ie(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-Ct(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function Ye(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const a=r==="fixed",i=W(n),s=e?Dt(e.floating):!1;if(n===i||s&&a)return o;let c={scrollLeft:0,scrollTop:0},d=N(1);const l=N(0),m=B(n);if((m||!m&&!a)&&((nt(n)!=="body"||lt(i))&&(c=St(n)),B(n))){const p=at(n);d=tt(n),l.x=p.x+n.clientLeft,l.y=p.y+n.clientTop}const f=i&&!m&&!a?ie(i,c):N(0);return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-c.scrollLeft*d.x+l.x+f.x,y:o.y*d.y-c.scrollTop*d.y+l.y+f.y}}function Ue(t){return Array.from(t.getClientRects())}function Je(t){const e=W(t),o=St(t),n=t.ownerDocument.body,r=O(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=O(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Ct(t);const s=-o.scrollTop;return P(n).direction==="rtl"&&(i+=O(e.clientWidth,n.clientWidth)-r),{width:r,height:a,x:i,y:s}}const Xt=25;function qe(t,e){const o=A(t),n=W(t),r=o.visualViewport;let a=n.clientWidth,i=n.clientHeight,s=0,c=0;if(r){a=r.width,i=r.height;const l=Nt();(!l||l&&e==="fixed")&&(s=r.offsetLeft,c=r.offsetTop)}const d=Ct(n);if(d<=0){const l=n.ownerDocument,m=l.body,f=getComputedStyle(m),p=l.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(n.clientWidth-m.clientWidth-p);g<=Xt&&(a-=g)}else d<=Xt&&(a+=d);return{width:a,height:i,x:s,y:c}}const Ze=new Set(["absolute","fixed"]);function Ge(t,e){const o=at(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,a=B(t)?tt(t):N(1),i=t.clientWidth*a.x,s=t.clientHeight*a.y,c=r*a.x,d=n*a.y;return{width:i,height:s,x:c,y:d}}function Yt(t,e,o){let n;if(e==="viewport")n=qe(t,o);else if(e==="document")n=Je(W(t));else if(T(e))n=Ge(e,o);else{const r=re(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return pt(n)}function ae(t,e){const o=J(t);return o===e||!T(o)||et(o)?!1:P(o).position==="fixed"||ae(o,e)}function Ke(t,e){const o=e.get(t);if(o)return o;let n=ee(t,[]).filter(s=>T(s)&&nt(s)!=="body"),r=null;const a=P(t).position==="fixed";let i=a?J(t):t;for(;T(i)&&!et(i);){const s=P(i),c=jt(i);!c&&s.position==="fixed"&&(r=null),(a?!c&&!r:!c&&s.position==="static"&&!!r&&Ze.has(r.position)||lt(i)&&!c&&ae(t,i))?n=n.filter(l=>l!==i):r=s,i=J(i)}return e.set(t,n),n}function Qe(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?Dt(e)?[]:Ke(e,this._c):[].concat(o),n],s=i[0],c=i.reduce((d,l)=>{const m=Yt(e,l,r);return d.top=O(m.top,d.top),d.right=Z(m.right,d.right),d.bottom=Z(m.bottom,d.bottom),d.left=O(m.left,d.left),d},Yt(e,s,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function to(t){const{width:e,height:o}=oe(t);return{width:e,height:o}}function eo(t,e,o){const n=B(e),r=W(e),a=o==="fixed",i=at(t,!0,a,e);let s={scrollLeft:0,scrollTop:0};const c=N(0);function d(){c.x=Ct(r)}if(n||!n&&!a)if((nt(e)!=="body"||lt(r))&&(s=St(e)),n){const p=at(e,!0,a,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else r&&d();a&&!n&&r&&d();const l=r&&!n&&!a?ie(r,s):N(0),m=i.left+s.scrollLeft-c.x-l.x,f=i.top+s.scrollTop-c.y-l.y;return{x:m,y:f,width:i.width,height:i.height}}function Ot(t){return P(t).position==="static"}function Ut(t,e){if(!B(t)||P(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return W(t)===o&&(o=o.ownerDocument.body),o}function se(t,e){const o=A(t);if(Dt(t))return o;if(!B(t)){let r=J(t);for(;r&&!et(r);){if(T(r)&&!Ot(r))return r;r=J(r)}return o}let n=Ut(t,e);for(;n&&Be(n)&&Ot(n);)n=Ut(n,e);return n&&et(n)&&Ot(n)&&!jt(n)?o:n||We(t)||o}const oo=async function(t){const e=this.getOffsetParent||se,o=this.getDimensions,n=await o(t.floating);return{reference:eo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function no(t){return P(t).direction==="rtl"}const ro={convertOffsetParentRelativeRectToViewportRelativeRect:Ye,getDocumentElement:W,getClippingRect:Qe,getOffsetParent:se,getElementRects:oo,getClientRects:Ue,getDimensions:to,getScale:tt,isElement:T,isRTL:no},io=Te,ao=Pe,so=Oe,lo=$e,co=_e,mo=Ce,po=(t,e,o)=>{const n=new Map,r={platform:ro,...o},a={...r.platform,_c:n};return Se(t,e,{...r,platform:a})},gt="top-start",ft="top",ut="top-end",ht="right-start",bt="right",wt="right-end",vt="bottom-start",st="bottom",xt="bottom-end",yt="left-start",kt="left",Et="left-end",Jt=[gt,ft,ut,ht,bt,wt,vt,st,xt,yt,kt,Et],Q={[gt]:vt,[ft]:st,[ut]:xt,[vt]:gt,[st]:ft,[xt]:ut,[yt]:ht,[kt]:bt,[Et]:wt,[ht]:yt,[bt]:kt,[wt]:Et},go={[yt]:-45,[kt]:-45,[Et]:-45,[gt]:45,[ft]:45,[ut]:45,[ht]:135,[bt]:135,[wt]:135,[vt]:-135,[st]:-135,[xt]:-135},le=t=>{let e;return/-/.test(t)?e=t.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},fo=t=>t.split("-")[0],uo=t=>Q[fo(t)],ce=t=>Q[t],ho=t=>go[ce(t)],bo=(t,e,o)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${le(uo(o))}`]:"-0.5px",transform:`rotate(${e}deg)`})},qt=8,ct=24;async function Zt(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const o=t.attentionEl;return po(e,o,{placement:t?.directionName??st,middleware:[io({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&so({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&ao({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&mo({element:t?.arrowEl}),co(),lo({apply(){Object.assign(o.style,{paddingRight:`${qt}px`,paddingLeft:`${qt}px`})}})]}).then(({x:n,y:r,middlewareData:a,placement:i})=>{if(t.actualDirection=i,t?.isCallout||Object.assign(o.style,{left:`${n}px`,top:`${r}px`}),a?.hide&&!t?.isCallout){const{referenceHidden:s}=a.hide;Object.assign(o.style,{visibility:s?"hidden":""})}if(a?.arrow&&t?.arrowEl){const s=t?.arrowEl,{x:c,y:d}=a.arrow,l=window.getComputedStyle(o).direction==="rtl",m=ce(i).split("-")[1];let f="",p="",g="",u="";if(m==="start"){const h=typeof c=="number"?`calc(${ct}px - ${s.offsetWidth/2}px)`:"";f=typeof d=="number"?`calc(${ct}px - ${s.offsetWidth/2}px)`:"",p=l?h:"",u=l?"":h}else if(m==="end"){const h=typeof c=="number"?`calc(${ct}px - ${s.offsetWidth/2}px)`:"";p=l?"":h,u=l?h:"",g=typeof d=="number"?`calc(${ct}px - ${s.offsetWidth/2}px)`:""}else u=typeof c=="number"?`${c}px`:"",f=typeof d=="number"?`${d}px`:"";Object.assign(s.style,{top:f,right:p,bottom:g,left:u}),bo(s,ho(i),i)}}),t}function wo(){return`m${Math.random().toString(36).slice(2)}`}const vo=Tt`
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
`,xo=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),yo=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),ko=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Eo=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Ao=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}'),Do=Tt`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.bg-\\[--w-color-callout-background\\]{background-color:var(--w-color-callout-background)}.bg-\\[--w-s-color-surface-elevated-300\\]{background-color:var(--w-s-color-surface-elevated-300)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b-0{border-bottom-width:0}.border-r-0{border-right-width:0}.border-\\[--w-color-callout-border\\]{border-color:var(--w-color-callout-border)}.border-\\[--w-s-color-background-inverted\\]{border-color:var(--w-s-color-background-inverted)}.border-\\[--w-s-color-surface-elevated-300\\]{border-color:var(--w-s-color-surface-elevated-300)}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-tl-4{border-top-left-radius:4px}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-center{align-items:center}.-bottom-\\[8px\\]{bottom:-8px}.-left-\\[8px\\]{left:-8px}.-right-\\[8px\\]{right:-8px}.-top-\\[8px\\]{top:-8px}.justify-center{justify-content:center}.absolute{position:absolute}.relative{position:relative}.static{position:static}.z-50{z-index:50}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-inverted{background-color:var(--w-s-color-background-inverted)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.drop-shadow-m{filter:drop-shadow(0 3px 8px #4040403d)drop-shadow(0 3px 6px #40404029)}.shadow-m{box-shadow:var(--w-shadow-m)}.h-\\[14px\\]{height:14px}.w-\\[14px\\]{width:14px}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.p-4{padding:.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.font-bold{font-weight:700}.resize{resize:both}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var So=Object.defineProperty,S=(t,e,o,n)=>{for(var r=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(r=i(e,o,r)||r);return r&&So(e,o,r),r};const rt={base:"border-2 relative flex items-center",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50"};class E extends me{static{this.styles=[pe,vo,Do,Tt`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }
      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `]}constructor(){super(),ge(yo,Eo,ko,xo,Ao),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(Q).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(Q))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>Jt.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(Jt)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?Zt(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return Q[this._actualDirection]}get _arrowClasses(){return Bt([rt.arrowBase,this._activeVariantClasses.arrow,rt[`arrowDirection${le(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":K`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},o=Object.keys(e).find(n=>!!e[n])||"";return{wrapper:rt[o],arrow:rt[`arrow${o.charAt(0).toUpperCase()+o.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedElements()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedElements()[0]:null}get _wrapperClasses(){return Bt([rt.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return H._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return K`
      <w-button
        aria-label="${this._ariaClose}"
        @click=${this.close}
        @keydown=${this.keypressed}
        variant="pill"
        small=""
        class="ml-8"
      >
        <w-icon-close-16
          style="height: 16px; width: 16px; display: flex;"
        ></w-icon-close-16>
      </w-button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},Zt(this.attentionState)}pointingAtDirection(){switch(Q[this._actualDirection]){case"top-start":case"top":case"top-end":return H._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return H._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return H._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return H._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return H._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return H._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return H._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return H._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=wo());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?K``:K`
      <div class=${fe(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?K`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:zt}
              </div>
            `:K`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:zt}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}S([D({type:Boolean,reflect:!0})],E.prototype,"show");S([D({type:String,reflect:!0})],E.prototype,"placement");S([D({type:Boolean,reflect:!0})],E.prototype,"tooltip");S([D({type:Boolean,reflect:!0})],E.prototype,"callout");S([D({type:Boolean,reflect:!0})],E.prototype,"popover");S([D({type:Boolean,reflect:!0})],E.prototype,"highlight");S([D({attribute:"can-close",type:Boolean,reflect:!0})],E.prototype,"canClose");S([D({attribute:"no-arrow",type:Boolean,reflect:!0})],E.prototype,"noArrow");S([D({type:Number,reflect:!0})],E.prototype,"distance");S([D({type:Number,reflect:!0})],E.prototype,"skidding");S([D({type:Boolean,reflect:!0})],E.prototype,"flip");S([D({attribute:"cross-axis",type:Boolean,reflect:!0})],E.prototype,"crossAxis");S([D({attribute:"fallback-placements",type:Array,reflect:!0})],E.prototype,"fallbackPlacements");customElements.get("w-attention")||customElements.define("w-attention",E);
