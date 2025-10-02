import{a as zt,i as Te,r as Ce,l as _e,j as Xt,x as E,f as M,E as Yt,n as S,g as Le}from"./iframe-BEXyWSHw.js";import{s as Pt,p as me}from"./utilities-D5ukzPRE.js";import{o as Oe}from"./if-defined-Cjm7MDQg.js";const Re=["top","right","bottom","left"],G=Math.min,_=Math.max,bt=Math.round,B=t=>({x:t,y:t}),$e={left:"right",right:"left",bottom:"top",top:"bottom"},je={start:"end",end:"start"};function Bt(t,e,o){return _(t,G(e,o))}function K(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function rt(t){return t.split("-")[1]}function ge(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}const Ie=new Set(["top","bottom"]);function F(t){return Ie.has(q(t))?"y":"x"}function Ft(t){return ge(F(t))}function Pe(t,e,o){o===void 0&&(o=!1);const n=rt(t),r=Ft(t),a=Mt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(i=wt(i)),[i,wt(i)]}function Be(t){const e=wt(t);return[Nt(t),e,Nt(e)]}function Nt(t){return t.replace(/start|end/g,e=>je[e])}const Ut=["left","right"],qt=["right","left"],Ne=["top","bottom"],He=["bottom","top"];function ze(t,e,o){switch(t){case"top":case"bottom":return o?e?qt:Ut:e?Ut:qt;case"left":case"right":return e?Ne:He;default:return[]}}function Me(t,e,o,n){const r=rt(t);let a=ze(q(t),o==="start",n);return r&&(a=a.map(i=>i+"-"+r),e&&(a=a.concat(a.map(Nt)))),a}function wt(t){return t.replace(/left|right|bottom|top/g,e=>$e[e])}function Fe(t){return{top:0,right:0,bottom:0,left:0,...t}}function ue(t){return typeof t!="number"?Fe(t):{top:t,right:t,bottom:t,left:t}}function vt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function Jt(t,e,o){let{reference:n,floating:r}=t;const a=F(e),i=Ft(e),s=Mt(i),c=q(e),p=a==="y",l=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,u=n[s]/2-r[s]/2;let m;switch(c){case"top":m={x:l,y:n.y-r.height};break;case"bottom":m={x:l,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:d};break;case"left":m={x:n.x-r.width,y:d};break;default:m={x:n.x,y:n.y}}switch(rt(e)){case"start":m[i]-=u*(o&&p?-1:1);break;case"end":m[i]+=u*(o&&p?-1:1);break}return m}const We=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:i}=o,s=a.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(e));let p=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:l,y:d}=Jt(p,n,c),u=n,m={},g=0;for(let f=0;f<s.length;f++){const{name:h,fn:b}=s[f],{x:w,y:v,data:x,reset:y}=await b({x:l,y:d,initialPlacement:n,placement:u,strategy:r,middlewareData:m,rects:p,platform:i,elements:{reference:t,floating:e}});l=w??l,d=v??d,m={...m,[h]:{...m[h],...x}},y&&g<=50&&(g++,typeof y=="object"&&(y.placement&&(u=y.placement),y.rects&&(p=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:l,y:d}=Jt(p,u,c)),f=-1)}return{x:l,y:d,placement:u,strategy:r,middlewareData:m}};async function mt(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:a,rects:i,elements:s,strategy:c}=t,{boundary:p="clippingAncestors",rootBoundary:l="viewport",elementContext:d="floating",altBoundary:u=!1,padding:m=0}=K(e,t),g=ue(m),h=s[u?d==="floating"?"reference":"floating":d],b=vt(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(h)))==null||o?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:p,rootBoundary:l,strategy:c})),w=d==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),x=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},y=vt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:v,strategy:c}):w);return{top:(b.top-y.top+g.top)/x.y,bottom:(y.bottom-b.bottom+g.bottom)/x.y,left:(b.left-y.left+g.left)/x.x,right:(y.right-b.right+g.right)/x.x}}const Ve=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:a,platform:i,elements:s,middlewareData:c}=e,{element:p,padding:l=0}=K(t,e)||{};if(p==null)return{};const d=ue(l),u={x:o,y:n},m=Ft(r),g=Mt(m),f=await i.getDimensions(p),h=m==="y",b=h?"top":"left",w=h?"bottom":"right",v=h?"clientHeight":"clientWidth",x=a.reference[g]+a.reference[m]-u[m]-a.floating[g],y=u[m]-a.reference[m],V=await(i.getOffsetParent==null?void 0:i.getOffsetParent(p));let L=V?V[v]:0;(!L||!await(i.isElement==null?void 0:i.isElement(V)))&&(L=s.floating[v]||a.floating[g]);const H=x/2-y/2,I=L/2-f[g]/2-1,C=G(d[b],I),X=G(d[w],I),P=C,Y=L-f[g]-X,k=L/2-f[g]/2+H,Z=Bt(P,k,Y),z=!c.arrow&&rt(r)!=null&&k!==Z&&a.reference[g]/2-(k<P?C:X)-f[g]/2<0,O=z?k<P?k-P:k-Y:0;return{[m]:u[m]+O,data:{[m]:Z,centerOffset:k-Z-O,...z&&{alignmentOffset:O}},reset:z}}}),Xe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:a,rects:i,initialPlacement:s,platform:c,elements:p}=e,{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:f=!0,...h}=K(t,e);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const b=q(r),w=F(s),v=q(s)===s,x=await(c.isRTL==null?void 0:c.isRTL(p.floating)),y=u||(v||!f?[wt(s)]:Be(s)),V=g!=="none";!u&&V&&y.push(...Me(s,f,g,x));const L=[s,...y],H=await mt(e,h),I=[];let C=((n=a.flip)==null?void 0:n.overflows)||[];if(l&&I.push(H[b]),d){const k=Pe(r,i,x);I.push(H[k[0]],H[k[1]])}if(C=[...C,{placement:r,overflows:I}],!I.every(k=>k<=0)){var X,P;const k=(((X=a.flip)==null?void 0:X.index)||0)+1,Z=L[k];if(Z&&(!(d==="alignment"?w!==F(Z):!1)||C.every(R=>F(R.placement)===w?R.overflows[0]>0:!0)))return{data:{index:k,overflows:C},reset:{placement:Z}};let z=(P=C.filter(O=>O.overflows[0]<=0).sort((O,R)=>O.overflows[1]-R.overflows[1])[0])==null?void 0:P.placement;if(!z)switch(m){case"bestFit":{var Y;const O=(Y=C.filter(R=>{if(V){const U=F(R.placement);return U===w||U==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(U=>U>0).reduce((U,Se)=>U+Se,0)]).sort((R,U)=>R[1]-U[1])[0])==null?void 0:Y[0];O&&(z=O);break}case"initialPlacement":z=s;break}if(r!==z)return{reset:{placement:z}}}return{}}}};function Zt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Gt(t){return Re.some(e=>t[e]>=0)}const Ye=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:o}=e,{strategy:n="referenceHidden",...r}=K(t,e);switch(n){case"referenceHidden":{const a=await mt(e,{...r,elementContext:"reference"}),i=Zt(a,o.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Gt(i)}}}case"escaped":{const a=await mt(e,{...r,altBoundary:!0}),i=Zt(a,o.floating);return{data:{escapedOffsets:i,escaped:Gt(i)}}}default:return{}}}}},Ue=new Set(["left","top"]);async function qe(t,e){const{placement:o,platform:n,elements:r}=t,a=await(n.isRTL==null?void 0:n.isRTL(r.floating)),i=q(o),s=rt(o),c=F(o)==="y",p=Ue.has(i)?-1:1,l=a&&c?-1:1,d=K(e,t);let{mainAxis:u,crossAxis:m,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof g=="number"&&(m=s==="end"?g*-1:g),c?{x:m*l,y:u*p}:{x:u*p,y:m*l}}const Je=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:r,y:a,placement:i,middlewareData:s}=e,c=await qe(e,t);return i===((o=s.offset)==null?void 0:o.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:r+c.x,y:a+c.y,data:{...c,placement:i}}}}},Ze=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:a=!0,crossAxis:i=!1,limiter:s={fn:h=>{let{x:b,y:w}=h;return{x:b,y:w}}},...c}=K(t,e),p={x:o,y:n},l=await mt(e,c),d=F(q(r)),u=ge(d);let m=p[u],g=p[d];if(a){const h=u==="y"?"top":"left",b=u==="y"?"bottom":"right",w=m+l[h],v=m-l[b];m=Bt(w,m,v)}if(i){const h=d==="y"?"top":"left",b=d==="y"?"bottom":"right",w=g+l[h],v=g-l[b];g=Bt(w,g,v)}const f=s.fn({...e,[u]:m,[d]:g});return{...f,data:{x:f.x-o,y:f.y-n,enabled:{[u]:a,[d]:i}}}}}},Ge=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,n;const{placement:r,rects:a,platform:i,elements:s}=e,{apply:c=()=>{},...p}=K(t,e),l=await mt(e,p),d=q(r),u=rt(r),m=F(r)==="y",{width:g,height:f}=a.floating;let h,b;d==="top"||d==="bottom"?(h=d,b=u===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(b=d,h=u==="end"?"top":"bottom");const w=f-l.top-l.bottom,v=g-l.left-l.right,x=G(f-l[h],w),y=G(g-l[b],v),V=!e.middlewareData.shift;let L=x,H=y;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(H=v),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(L=w),V&&!u){const C=_(l.left,0),X=_(l.right,0),P=_(l.top,0),Y=_(l.bottom,0);m?H=g-2*(C!==0||X!==0?C+X:_(l.left,l.right)):L=f-2*(P!==0||Y!==0?P+Y:_(l.top,l.bottom))}await c({...e,availableWidth:H,availableHeight:L});const I=await i.getDimensions(s.floating);return g!==I.width||f!==I.height?{reset:{rects:!0}}:{}}}};function Ot(){return typeof window<"u"}function it(t){return fe(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(fe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function fe(t){return Ot()?t instanceof Node||t instanceof D(t).Node:!1}function $(t){return Ot()?t instanceof Element||t instanceof D(t).Element:!1}function N(t){return Ot()?t instanceof HTMLElement||t instanceof D(t).HTMLElement:!1}function Kt(t){return!Ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof D(t).ShadowRoot}const Ke=new Set(["inline","contents"]);function ft(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=j(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!Ke.has(r)}const Qe=new Set(["table","td","th"]);function to(t){return Qe.has(it(t))}const eo=[":popover-open",":modal"];function Rt(t){return eo.some(e=>{try{return t.matches(e)}catch{return!1}})}const oo=["transform","translate","scale","rotate","perspective"],no=["transform","translate","scale","rotate","perspective","filter"],ro=["paint","layout","strict","content"];function Wt(t){const e=Vt(),o=$(t)?j(t):t;return oo.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||no.some(n=>(o.willChange||"").includes(n))||ro.some(n=>(o.contain||"").includes(n))}function io(t){let e=J(t);for(;N(e)&&!ot(e);){if(Wt(e))return e;if(Rt(e))return null;e=J(e)}return null}function Vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ao=new Set(["html","body","#document"]);function ot(t){return ao.has(it(t))}function j(t){return D(t).getComputedStyle(t)}function $t(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function J(t){if(it(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||W(t);return Kt(e)?e.host:e}function he(t){const e=J(t);return ot(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ft(e)?e:he(e)}function be(t,e,o){var n;e===void 0&&(e=[]);const r=he(t),a=r===((n=t.ownerDocument)==null?void 0:n.body),i=D(r);return a?(Ht(i),e.concat(i,i.visualViewport||[],ft(r)?r:[],[])):e.concat(r,be(r,[]))}function Ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function we(t){const e=j(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=N(t),a=r?t.offsetWidth:o,i=r?t.offsetHeight:n,s=bt(o)!==a||bt(n)!==i;return s&&(o=a,n=i),{width:o,height:n,$:s}}function ve(t){return $(t)?t:t.contextElement}function et(t){const e=ve(t);if(!N(e))return B(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:a}=we(e);let i=(a?bt(o.width):o.width)/n,s=(a?bt(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const so=B(0);function ye(t){const e=D(t);return!Vt()||!e.visualViewport?so:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function lo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==D(t)?!1:e}function gt(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),a=ve(t);let i=B(1);e&&(n?$(n)&&(i=et(n)):i=et(t));const s=lo(a,o,n)?ye(a):B(0);let c=(r.left+s.x)/i.x,p=(r.top+s.y)/i.y,l=r.width/i.x,d=r.height/i.y;if(a){const u=D(a),m=n&&$(n)?D(n):n;let g=u,f=Ht(g);for(;f&&n&&m!==g;){const h=et(f),b=f.getBoundingClientRect(),w=j(f),v=b.left+(f.clientLeft+parseFloat(w.paddingLeft))*h.x,x=b.top+(f.clientTop+parseFloat(w.paddingTop))*h.y;c*=h.x,p*=h.y,l*=h.x,d*=h.y,c+=v,p+=x,g=D(f),f=Ht(g)}}return vt({width:l,height:d,x:c,y:p})}function jt(t,e){const o=$t(t).scrollLeft;return e?e.left+o:gt(W(t)).left+o}function xe(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-jt(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function co(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const a=r==="fixed",i=W(n),s=e?Rt(e.floating):!1;if(n===i||s&&a)return o;let c={scrollLeft:0,scrollTop:0},p=B(1);const l=B(0),d=N(n);if((d||!d&&!a)&&((it(n)!=="body"||ft(i))&&(c=$t(n)),N(n))){const m=gt(n);p=et(n),l.x=m.x+n.clientLeft,l.y=m.y+n.clientTop}const u=i&&!d&&!a?xe(i,c):B(0);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-c.scrollLeft*p.x+l.x+u.x,y:o.y*p.y-c.scrollTop*p.y+l.y+u.y}}function po(t){return Array.from(t.getClientRects())}function mo(t){const e=W(t),o=$t(t),n=t.ownerDocument.body,r=_(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=_(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+jt(t);const s=-o.scrollTop;return j(n).direction==="rtl"&&(i+=_(e.clientWidth,n.clientWidth)-r),{width:r,height:a,x:i,y:s}}const Qt=25;function go(t,e){const o=D(t),n=W(t),r=o.visualViewport;let a=n.clientWidth,i=n.clientHeight,s=0,c=0;if(r){a=r.width,i=r.height;const l=Vt();(!l||l&&e==="fixed")&&(s=r.offsetLeft,c=r.offsetTop)}const p=jt(n);if(p<=0){const l=n.ownerDocument,d=l.body,u=getComputedStyle(d),m=l.compatMode==="CSS1Compat"&&parseFloat(u.marginLeft)+parseFloat(u.marginRight)||0,g=Math.abs(n.clientWidth-d.clientWidth-m);g<=Qt&&(a-=g)}else p<=Qt&&(a+=p);return{width:a,height:i,x:s,y:c}}const uo=new Set(["absolute","fixed"]);function fo(t,e){const o=gt(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,a=N(t)?et(t):B(1),i=t.clientWidth*a.x,s=t.clientHeight*a.y,c=r*a.x,p=n*a.y;return{width:i,height:s,x:c,y:p}}function te(t,e,o){let n;if(e==="viewport")n=go(t,o);else if(e==="document")n=mo(W(t));else if($(e))n=fo(e,o);else{const r=ye(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return vt(n)}function ke(t,e){const o=J(t);return o===e||!$(o)||ot(o)?!1:j(o).position==="fixed"||ke(o,e)}function ho(t,e){const o=e.get(t);if(o)return o;let n=be(t,[]).filter(s=>$(s)&&it(s)!=="body"),r=null;const a=j(t).position==="fixed";let i=a?J(t):t;for(;$(i)&&!ot(i);){const s=j(i),c=Wt(i);!c&&s.position==="fixed"&&(r=null),(a?!c&&!r:!c&&s.position==="static"&&!!r&&uo.has(r.position)||ft(i)&&!c&&ke(t,i))?n=n.filter(l=>l!==i):r=s,i=J(i)}return e.set(t,n),n}function bo(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?Rt(e)?[]:ho(e,this._c):[].concat(o),n],s=i[0],c=i.reduce((p,l)=>{const d=te(e,l,r);return p.top=_(d.top,p.top),p.right=G(d.right,p.right),p.bottom=G(d.bottom,p.bottom),p.left=_(d.left,p.left),p},te(e,s,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function wo(t){const{width:e,height:o}=we(t);return{width:e,height:o}}function vo(t,e,o){const n=N(e),r=W(e),a=o==="fixed",i=gt(t,!0,a,e);let s={scrollLeft:0,scrollTop:0};const c=B(0);function p(){c.x=jt(r)}if(n||!n&&!a)if((it(e)!=="body"||ft(r))&&(s=$t(e)),n){const m=gt(e,!0,a,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else r&&p();a&&!n&&r&&p();const l=r&&!n&&!a?xe(r,s):B(0),d=i.left+s.scrollLeft-c.x-l.x,u=i.top+s.scrollTop-c.y-l.y;return{x:d,y:u,width:i.width,height:i.height}}function It(t){return j(t).position==="static"}function ee(t,e){if(!N(t)||j(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return W(t)===o&&(o=o.ownerDocument.body),o}function Ee(t,e){const o=D(t);if(Rt(t))return o;if(!N(t)){let r=J(t);for(;r&&!ot(r);){if($(r)&&!It(r))return r;r=J(r)}return o}let n=ee(t,e);for(;n&&to(n)&&It(n);)n=ee(n,e);return n&&ot(n)&&It(n)&&!Wt(n)?o:n||io(t)||o}const yo=async function(t){const e=this.getOffsetParent||Ee,o=this.getDimensions,n=await o(t.floating);return{reference:vo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xo(t){return j(t).direction==="rtl"}const ko={convertOffsetParentRelativeRectToViewportRelativeRect:co,getDocumentElement:W,getClippingRect:bo,getOffsetParent:Ee,getElementRects:yo,getClientRects:po,getDimensions:wo,getScale:et,isElement:$,isRTL:xo},Eo=Je,Ao=Ze,Do=Xe,So=Ge,To=Ye,Co=Ve,_o=(t,e,o)=>{const n=new Map,r={platform:ko,...o},a={...r.platform,_c:n};return We(t,e,{...r,platform:a})},yt="top-start",xt="top",kt="top-end",Et="right-start",At="right",Dt="right-end",St="bottom-start",ut="bottom",Tt="bottom-end",Ct="left-start",_t="left",Lt="left-end",oe=[yt,xt,kt,Et,At,Dt,St,ut,Tt,Ct,_t,Lt],tt={[yt]:St,[xt]:ut,[kt]:Tt,[St]:yt,[ut]:xt,[Tt]:kt,[Ct]:Et,[_t]:At,[Lt]:Dt,[Et]:Ct,[At]:_t,[Dt]:Lt},Lo={[Ct]:-45,[_t]:-45,[Lt]:-45,[yt]:45,[xt]:45,[kt]:45,[Et]:135,[At]:135,[Dt]:135,[St]:-135,[ut]:-135,[Tt]:-135},Ae=t=>{let e;return/-/.test(t)?e=t.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},Oo=t=>t.split("-")[0],Ro=t=>tt[Oo(t)],De=t=>tt[t],$o=t=>Lo[De(t)],jo=(t,e,o)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${Ae(Ro(o))}`]:"-0.5px",transform:`rotate(${e}deg)`})},ne=8,ht=24;async function re(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const o=t.attentionEl;return _o(e,o,{placement:t?.directionName??ut,middleware:[Eo({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&Do({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&Ao({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Co({element:t?.arrowEl}),To(),So({apply(){Object.assign(o.style,{paddingRight:`${ne}px`,paddingLeft:`${ne}px`})}})]}).then(({x:n,y:r,middlewareData:a,placement:i})=>{if(t.actualDirection=i,t?.isCallout||Object.assign(o.style,{left:`${n}px`,top:`${r}px`}),a?.hide&&!t?.isCallout){const{referenceHidden:s}=a.hide;Object.assign(o.style,{visibility:s?"hidden":""})}if(a?.arrow&&t?.arrowEl){const s=t?.arrowEl,{x:c,y:p}=a.arrow,l=window.getComputedStyle(o).direction==="rtl",d=De(i).split("-")[1];let u="",m="",g="",f="";if(d==="start"){const h=typeof c=="number"?`calc(${ht}px - ${s.offsetWidth/2}px)`:"";u=typeof p=="number"?`calc(${ht}px - ${s.offsetWidth/2}px)`:"",m=l?h:"",f=l?"":h}else if(d==="end"){const h=typeof c=="number"?`calc(${ht}px - ${s.offsetWidth/2}px)`:"";m=l?"":h,f=l?h:"",g=typeof p=="number"?`calc(${ht}px - ${s.offsetWidth/2}px)`:""}else f=typeof c=="number"?`${c}px`:"",u=typeof p=="number"?`${p}px`:"";Object.assign(s.style,{top:u,right:m,bottom:g,left:f}),jo(s,$o(i),i)}}),t}function Io(){return`m${Math.random().toString(36).slice(2)}`}const Po=zt`
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
`,Bo=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),No=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),Ho=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),zo=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Mo=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}'),Fo=zt`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.bg-\\[--w-color-callout-background\\]{background-color:var(--w-color-callout-background)}.bg-\\[--w-s-color-surface-elevated-300\\]{background-color:var(--w-s-color-surface-elevated-300)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b-0{border-bottom-width:0}.border-r-0{border-right-width:0}.border-\\[--w-color-callout-border\\]{border-color:var(--w-color-callout-border)}.border-\\[--w-s-color-background-inverted\\]{border-color:var(--w-s-color-background-inverted)}.border-\\[--w-s-color-surface-elevated-300\\]{border-color:var(--w-s-color-surface-elevated-300)}.border-solid{border-style:solid}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-tl-4{border-top-left-radius:4px}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-start{align-items:flex-start}.items-center{align-items:center}.-bottom-\\[8px\\]{bottom:-8px}.-left-\\[8px\\]{left:-8px}.-right-\\[8px\\]{right:-8px}.-top-\\[8px\\]{top:-8px}.justify-center{justify-content:center}.justify-self-end{justify-self:end}.absolute{position:absolute}.relative{position:relative}.static{position:static}.z-50{z-index:50}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-inverted{background-color:var(--w-s-color-background-inverted)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.drop-shadow-m{filter:drop-shadow(0 3px 8px #4040403d)drop-shadow(0 3px 6px #40404029)}.shadow-m{box-shadow:var(--w-shadow-m)}.h-\\[14px\\]{height:14px}.w-\\[14px\\]{width:14px}.-mr-8{margin-right:-.8rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.p-4{padding:.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.font-bold{font-weight:700}.resize{resize:both}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var Wo=Object.defineProperty,T=(t,e,o,n)=>{for(var r=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(r=i(e,o,r)||r);return r&&Wo(e,o,r),r};const Vo={medium:"text-m leading-[24]"},Xo={pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"},Yo="font-bold focusable justify-center transition-colors ease-in-out",Uo={pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Yo}`},Q={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Vo.medium} ${Uo.pill} ${Xo.pill} justify-self-end -mr-8 ml-8`};class A extends Te{static{this.styles=[Ce,Po,Fo,zt`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }
      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `]}constructor(){super(),_e(No,zo,Ho,Bo,Mo),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(tt).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(tt))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>oe.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(oe)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?re(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return tt[this._actualDirection]}get _arrowClasses(){return Xt([Q.arrowBase,this._activeVariantClasses.arrow,Q[`arrowDirection${Ae(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":E`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},o=Object.keys(e).find(n=>!!e[n])||"";return{wrapper:Q[o],arrow:Q[`arrow${o.charAt(0).toUpperCase()+o.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedElements()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedElements()[0]:null}get _wrapperClasses(){return Xt([Q.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return M._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return E`
      <button aria-label="${this._ariaClose}" @click="${this.close}" @keydown=${this.keypressed} class="${Q.closeBtn}">
        <w-icon-close-16 style="height: 16px; width: 16px; display: flex;"></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},re(this.attentionState)}pointingAtDirection(){switch(tt[this._actualDirection]){case"top-start":case"top":case"top-end":return M._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return M._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return M._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return M._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return M._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return M._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return M._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return M._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=Io());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?E``:E`
      <div class=${Oe(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?E`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:Yt}
              </div>
            `:E`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:Yt}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}T([S({type:Boolean,reflect:!0})],A.prototype,"show");T([S({type:String,reflect:!0})],A.prototype,"placement");T([S({type:Boolean,reflect:!0})],A.prototype,"tooltip");T([S({type:Boolean,reflect:!0})],A.prototype,"callout");T([S({type:Boolean,reflect:!0})],A.prototype,"popover");T([S({type:Boolean,reflect:!0})],A.prototype,"highlight");T([S({attribute:"can-close",type:Boolean,reflect:!0})],A.prototype,"canClose");T([S({attribute:"no-arrow",type:Boolean,reflect:!0})],A.prototype,"noArrow");T([S({type:Number,reflect:!0})],A.prototype,"distance");T([S({type:Number,reflect:!0})],A.prototype,"skidding");T([S({type:Boolean,reflect:!0})],A.prototype,"flip");T([S({attribute:"cross-axis",type:Boolean,reflect:!0})],A.prototype,"crossAxis");T([S({attribute:"fallback-placements",type:Array,reflect:!0})],A.prototype,"fallbackPlacements");customElements.get("w-attention")||customElements.define("w-attention",A);var ie=Object.freeze,qo=Object.defineProperty,nt=(t,e)=>ie(qo(t,"raw",{value:ie(t.slice())})),ae,se,le,ce,pe,de;const{events:Jo,args:Zo,argTypes:Go}=Le("w-attention"),Ko={title:"Overlays/Attention",render(t){return E`
      <w-attention ${Pt(me(t))}>
        <button
          ${Pt({id:t.buttonId})}
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          ${t.buttonText}
        </button>
        <span slot="message">I'm a message</span>
      </w-attention>
    `},args:Zo,argTypes:Go,parameters:{actions:{handles:Jo}}},at={args:{placement:"bottom",popover:!0,flip:!0},render(t){return E(ae||(ae=nt([`
      <w-attention `,`>
        <w-button id="popoverTarget" slot="target"> Click to toggle a popover </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>

      <script>
        const popoverTarget = document.querySelector('#popoverTarget');
        const popoverEl = document.querySelector('[popover]');

        popoverTarget.addEventListener('click', () => {
          if (popoverEl.show) {
            popoverEl.removeAttribute('show');
          } else {
            popoverEl.setAttribute('show', 'true');
          }
        });
      <\/script>
    `])),Pt(me(t)))},decorators:[t=>E(se||(se=nt([`
      `,`
      <script>
        // use IIFE to create local scope
        (() => {
          const popoverIconEl = document.getElementById('attention-element');
          const popoverIconTarget = document.getElementById('icon-button-target');
          popoverIconTarget.addEventListener('click', () => {
            popoverIconEl.show = !popoverIconEl.show;
          });
        })();
      <\/script>
    `])),t())]},st={args:{placement:"right",buttonText:"hover me",id:"tooltip-element",tooltip:!0,flip:!0,buttonId:"tooltip-target"},decorators:[t=>E(le||(le=nt([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('tooltip-target');
          const tooltip = document.getElementById('tooltip-element');
          button.addEventListener('mouseenter', () => {
            tooltip.show = true;
          });
          button.addEventListener('mouseleave', () => {
            tooltip.show = false;
          });
          button.addEventListener('focus', () => {
            tooltip.show = true;
          });
          button.addEventListener('blur', () => {
            tooltip.show = false;
          });
        })();
      <\/script>
    `])),t())]},lt={args:{buttonText:"i need a callout",class:"flex items-center gap-8",placement:"right",callout:!0,show:!0}},ct={args:{buttonId:"highlight-target1",id:"highlight-message",buttonText:"I'm highlighted",placement:"right",highlight:!0,flip:!0},decorators:[t=>E(ce||(ce=nt([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('highlight-target1');
          const highlight = document.getElementById('highlight-message');
          button.addEventListener('click', () => {
            highlight.show = !highlight.show;
          });
        })();
      <\/script>
    `])),t())]},pt={args:{class:"flex items-center gap-8",placement:"right",buttonId:"highlight-target2",buttonText:"click me",id:"dismissible-highlight-message","can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[t=>E(pe||(pe=nt([`
      `,`
      <script>
        (() => {
          const button = document.getElementById('highlight-target2');
          const highlight = document.getElementById('dismissible-highlight-message');
          button.addEventListener('click', () => {
            highlight.show = true;
          });
          highlight.addEventListener('close', () => {
            highlight.show = false;
          });
        })();
      <\/script>
    `])),t())]},dt={args:{},render(){return E`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          aria-details="aria-content"
          id="accessible-target"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
      </w-attention>
    `},decorators:[t=>E(de||(de=nt([" ",`
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>`])),t())]};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    popover: true,
    flip: true
  },
  render(args) {
    return html\`
      <w-attention \${spread(prespread(args))}>
        <w-button id="popoverTarget" slot="target"> Click to toggle a popover </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>

      <script>
        const popoverTarget = document.querySelector('#popoverTarget');
        const popoverEl = document.querySelector('[popover]');

        popoverTarget.addEventListener('click', () => {
          if (popoverEl.show) {
            popoverEl.removeAttribute('show');
          } else {
            popoverEl.setAttribute('show', 'true');
          }
        });
      <\/script>
    \`;
  },
  decorators: [story => html\`
      \${story()}
      <script>
        // use IIFE to create local scope
        (() => {
          const popoverIconEl = document.getElementById('attention-element');
          const popoverIconTarget = document.getElementById('icon-button-target');
          popoverIconTarget.addEventListener('click', () => {
            popoverIconEl.show = !popoverIconEl.show;
          });
        })();
      <\/script>
    \`]
}`,...at.parameters?.docs?.source}}};st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'right',
    buttonText: 'hover me',
    id: 'tooltip-element',
    tooltip: true,
    flip: true,
    buttonId: 'tooltip-target'
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('tooltip-target');
          const tooltip = document.getElementById('tooltip-element');
          button.addEventListener('mouseenter', () => {
            tooltip.show = true;
          });
          button.addEventListener('mouseleave', () => {
            tooltip.show = false;
          });
          button.addEventListener('focus', () => {
            tooltip.show = true;
          });
          button.addEventListener('blur', () => {
            tooltip.show = false;
          });
        })();
      <\/script>
    \`]
}`,...st.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: 'i need a callout',
    class: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true
  }
}`,...lt.parameters?.docs?.source}}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  args: {
    buttonId: 'highlight-target1',
    id: 'highlight-message',
    buttonText: \`I'm highlighted\`,
    placement: 'right',
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target1');
          const highlight = document.getElementById('highlight-message');
          button.addEventListener('click', () => {
            highlight.show = !highlight.show;
          });
        })();
      <\/script>
    \`]
}`,...ct.parameters?.docs?.source}}};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'flex items-center gap-8',
    placement: 'right',
    buttonId: 'highlight-target2',
    buttonText: 'click me',
    id: 'dismissible-highlight-message',
    ['can-close']: true,
    ['cross-axis']: true,
    highlight: true,
    flip: true
  },
  decorators: [story => html\`
      \${story()}
      <script>
        (() => {
          const button = document.getElementById('highlight-target2');
          const highlight = document.getElementById('dismissible-highlight-message');
          button.addEventListener('click', () => {
            highlight.show = true;
          });
          highlight.addEventListener('close', () => {
            highlight.show = false;
          });
        })();
      <\/script>
    \`]
}`,...pt.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <button
          aria-details="aria-content"
          id="accessible-target"
          class="group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-subtle"
          slot="target">
          Click to toggle a popover
        </button>
      </w-attention>
    \`;
  },
  decorators: [story => html\` \${story()}
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>\`]
}`,...dt.parameters?.docs?.source}}};const Qo=["Default","ToolTip","Callout","Highlight","DismissibleHighlight","AccessibleTooltip"],nn=Object.freeze(Object.defineProperty({__proto__:null,AccessibleTooltip:dt,Callout:lt,Default:at,DismissibleHighlight:pt,Highlight:ct,ToolTip:st,__namedExportsOrder:Qo,default:Ko},Symbol.toStringTag,{value:"Module"}));export{nn as A,lt as C,pt as D,ct as H,st as T,dt as a};
