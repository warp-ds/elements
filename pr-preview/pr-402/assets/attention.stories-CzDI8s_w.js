import{a as zt,i as De,r as Se,p as Te,j as Xt,x as A,f as M,E as Yt,n as S,g as Ce}from"./iframe-AtIa7GWh.js";import{s as Bt,p as de}from"./utilities-ZhpF9a5V.js";import{o as _e}from"./if-defined-Bfv-iAGT.js";import"./index-Cyq1Rlno.js";const Oe=["top","right","bottom","left"],G=Math.min,_=Math.max,ht=Math.round,I=t=>({x:t,y:t}),Le={left:"right",right:"left",bottom:"top",top:"bottom"},Re={start:"end",end:"start"};function It(t,e,n){return _(t,G(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function J(t){return t.split("-")[0]}function ot(t){return t.split("-")[1]}function pe(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}const $e=new Set(["top","bottom"]);function F(t){return $e.has(J(t))?"y":"x"}function Ft(t){return pe(F(t))}function je(t,e,n){n===void 0&&(n=!1);const o=ot(t),r=Ft(t),a=Mt(r);let i=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(i=bt(i)),[i,bt(i)]}function Pe(t){const e=bt(t);return[Nt(t),e,Nt(e)]}function Nt(t){return t.replace(/start|end/g,e=>Re[e])}const Ut=["left","right"],Jt=["right","left"],Be=["top","bottom"],Ie=["bottom","top"];function Ne(t,e,n){switch(t){case"top":case"bottom":return n?e?Jt:Ut:e?Ut:Jt;case"left":case"right":return e?Be:Ie;default:return[]}}function He(t,e,n,o){const r=ot(t);let a=Ne(J(t),n==="start",o);return r&&(a=a.map(i=>i+"-"+r),e&&(a=a.concat(a.map(Nt)))),a}function bt(t){return t.replace(/left|right|bottom|top/g,e=>Le[e])}function ze(t){return{top:0,right:0,bottom:0,left:0,...t}}function me(t){return typeof t!="number"?ze(t):{top:t,right:t,bottom:t,left:t}}function wt(t){const{x:e,y:n,width:o,height:r}=t;return{width:o,height:r,top:n,left:e,right:e+o,bottom:n+r,x:e,y:n}}function qt(t,e,n){let{reference:o,floating:r}=t;const a=F(e),i=Ft(e),s=Mt(i),c=J(e),d=a==="y",l=o.x+o.width/2-r.width/2,p=o.y+o.height/2-r.height/2,f=o[s]/2-r[s]/2;let m;switch(c){case"top":m={x:l,y:o.y-r.height};break;case"bottom":m={x:l,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:p};break;case"left":m={x:o.x-r.width,y:p};break;default:m={x:o.x,y:o.y}}switch(ot(e)){case"start":m[i]-=f*(n&&d?-1:1);break;case"end":m[i]+=f*(n&&d?-1:1);break}return m}const Me=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:i}=n,s=a.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(e));let d=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:l,y:p}=qt(d,o,c),f=o,m={},g=0;for(let u=0;u<s.length;u++){const{name:h,fn:b}=s[u],{x:w,y:v,data:x,reset:y}=await b({x:l,y:p,initialPlacement:o,placement:f,strategy:r,middlewareData:m,rects:d,platform:i,elements:{reference:t,floating:e}});l=w??l,p=v??p,m={...m,[h]:{...m[h],...x}},y&&g<=50&&(g++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(d=y.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:l,y:p}=qt(d,f,c)),u=-1)}return{x:l,y:p,placement:f,strategy:r,middlewareData:m}};async function pt(t,e){var n;e===void 0&&(e={});const{x:o,y:r,platform:a,rects:i,elements:s,strategy:c}=t,{boundary:d="clippingAncestors",rootBoundary:l="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=K(e,t),g=me(m),h=s[f?p==="floating"?"reference":"floating":p],b=wt(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(h)))==null||n?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:d,rootBoundary:l,strategy:c})),w=p==="floating"?{x:o,y:r,width:i.floating.width,height:i.floating.height}:i.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),x=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},y=wt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:w,offsetParent:v,strategy:c}):w);return{top:(b.top-y.top+g.top)/x.y,bottom:(y.bottom-b.bottom+g.bottom)/x.y,left:(b.left-y.left+g.left)/x.x,right:(y.right-b.right+g.right)/x.x}}const Fe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:a,platform:i,elements:s,middlewareData:c}=e,{element:d,padding:l=0}=K(t,e)||{};if(d==null)return{};const p=me(l),f={x:n,y:o},m=Ft(r),g=Mt(m),u=await i.getDimensions(d),h=m==="y",b=h?"top":"left",w=h?"bottom":"right",v=h?"clientHeight":"clientWidth",x=a.reference[g]+a.reference[m]-f[m]-a.floating[g],y=f[m]-a.reference[m],V=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let O=V?V[v]:0;(!O||!await(i.isElement==null?void 0:i.isElement(V)))&&(O=s.floating[v]||a.floating[g]);const H=x/2-y/2,P=O/2-u[g]/2-1,C=G(p[b],P),X=G(p[w],P),B=C,Y=O-u[g]-X,k=O/2-u[g]/2+H,Z=It(B,k,Y),z=!c.arrow&&ot(r)!=null&&k!==Z&&a.reference[g]/2-(k<B?C:X)-u[g]/2<0,L=z?k<B?k-B:k-Y:0;return{[m]:f[m]+L,data:{[m]:Z,centerOffset:k-Z-L,...z&&{alignmentOffset:L}},reset:z}}}),We=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:a,rects:i,initialPlacement:s,platform:c,elements:d}=e,{mainAxis:l=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:u=!0,...h}=K(t,e);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const b=J(r),w=F(s),v=J(s)===s,x=await(c.isRTL==null?void 0:c.isRTL(d.floating)),y=f||(v||!u?[bt(s)]:Pe(s)),V=g!=="none";!f&&V&&y.push(...He(s,u,g,x));const O=[s,...y],H=await pt(e,h),P=[];let C=((o=a.flip)==null?void 0:o.overflows)||[];if(l&&P.push(H[b]),p){const k=je(r,i,x);P.push(H[k[0]],H[k[1]])}if(C=[...C,{placement:r,overflows:P}],!P.every(k=>k<=0)){var X,B;const k=(((X=a.flip)==null?void 0:X.index)||0)+1,Z=O[k];if(Z&&(!(p==="alignment"?w!==F(Z):!1)||C.every(R=>F(R.placement)===w?R.overflows[0]>0:!0)))return{data:{index:k,overflows:C},reset:{placement:Z}};let z=(B=C.filter(L=>L.overflows[0]<=0).sort((L,R)=>L.overflows[1]-R.overflows[1])[0])==null?void 0:B.placement;if(!z)switch(m){case"bestFit":{var Y;const L=(Y=C.filter(R=>{if(V){const U=F(R.placement);return U===w||U==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(U=>U>0).reduce((U,Ae)=>U+Ae,0)]).sort((R,U)=>R[1]-U[1])[0])==null?void 0:Y[0];L&&(z=L);break}case"initialPlacement":z=s;break}if(r!==z)return{reset:{placement:z}}}return{}}}};function Zt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Gt(t){return Oe.some(e=>t[e]>=0)}const Ve=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=K(t,e);switch(o){case"referenceHidden":{const a=await pt(e,{...r,elementContext:"reference"}),i=Zt(a,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Gt(i)}}}case"escaped":{const a=await pt(e,{...r,altBoundary:!0}),i=Zt(a,n.floating);return{data:{escapedOffsets:i,escaped:Gt(i)}}}default:return{}}}}},Xe=new Set(["left","top"]);async function Ye(t,e){const{placement:n,platform:o,elements:r}=t,a=await(o.isRTL==null?void 0:o.isRTL(r.floating)),i=J(n),s=ot(n),c=F(n)==="y",d=Xe.has(i)?-1:1,l=a&&c?-1:1,p=K(e,t);let{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return s&&typeof g=="number"&&(m=s==="end"?g*-1:g),c?{x:m*l,y:f*d}:{x:f*d,y:m*l}}const Ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:a,placement:i,middlewareData:s}=e,c=await Ye(e,t);return i===((n=s.offset)==null?void 0:n.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:a+c.y,data:{...c,placement:i}}}}},Je=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:a=!0,crossAxis:i=!1,limiter:s={fn:h=>{let{x:b,y:w}=h;return{x:b,y:w}}},...c}=K(t,e),d={x:n,y:o},l=await pt(e,c),p=F(J(r)),f=pe(p);let m=d[f],g=d[p];if(a){const h=f==="y"?"top":"left",b=f==="y"?"bottom":"right",w=m+l[h],v=m-l[b];m=It(w,m,v)}if(i){const h=p==="y"?"top":"left",b=p==="y"?"bottom":"right",w=g+l[h],v=g-l[b];g=It(w,g,v)}const u=s.fn({...e,[f]:m,[p]:g});return{...u,data:{x:u.x-n,y:u.y-o,enabled:{[f]:a,[p]:i}}}}}},qe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:r,rects:a,platform:i,elements:s}=e,{apply:c=()=>{},...d}=K(t,e),l=await pt(e,d),p=J(r),f=ot(r),m=F(r)==="y",{width:g,height:u}=a.floating;let h,b;p==="top"||p==="bottom"?(h=p,b=f===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(b=p,h=f==="end"?"top":"bottom");const w=u-l.top-l.bottom,v=g-l.left-l.right,x=G(u-l[h],w),y=G(g-l[b],v),V=!e.middlewareData.shift;let O=x,H=y;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(H=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(O=w),V&&!f){const C=_(l.left,0),X=_(l.right,0),B=_(l.top,0),Y=_(l.bottom,0);m?H=g-2*(C!==0||X!==0?C+X:_(l.left,l.right)):O=u-2*(B!==0||Y!==0?B+Y:_(l.top,l.bottom))}await c({...e,availableWidth:H,availableHeight:O});const P=await i.getDimensions(s.floating);return g!==P.width||u!==P.height?{reset:{rects:!0}}:{}}}};function Ot(){return typeof window<"u"}function rt(t){return ge(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(ge(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ge(t){return Ot()?t instanceof Node||t instanceof D(t).Node:!1}function $(t){return Ot()?t instanceof Element||t instanceof D(t).Element:!1}function N(t){return Ot()?t instanceof HTMLElement||t instanceof D(t).HTMLElement:!1}function Kt(t){return!Ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof D(t).ShadowRoot}const Ze=new Set(["inline","contents"]);function ft(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=j(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!Ze.has(r)}const Ge=new Set(["table","td","th"]);function Ke(t){return Ge.has(rt(t))}const Qe=[":popover-open",":modal"];function Lt(t){return Qe.some(e=>{try{return t.matches(e)}catch{return!1}})}const tn=["transform","translate","scale","rotate","perspective"],en=["transform","translate","scale","rotate","perspective","filter"],nn=["paint","layout","strict","content"];function Wt(t){const e=Vt(),n=$(t)?j(t):t;return tn.some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||en.some(o=>(n.willChange||"").includes(o))||nn.some(o=>(n.contain||"").includes(o))}function on(t){let e=q(t);for(;N(e)&&!nt(e);){if(Wt(e))return e;if(Lt(e))return null;e=q(e)}return null}function Vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const rn=new Set(["html","body","#document"]);function nt(t){return rn.has(rt(t))}function j(t){return D(t).getComputedStyle(t)}function Rt(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(rt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Kt(t)&&t.host||W(t);return Kt(e)?e.host:e}function fe(t){const e=q(t);return nt(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&ft(e)?e:fe(e)}function ue(t,e,n){var o;e===void 0&&(e=[]);const r=fe(t),a=r===((o=t.ownerDocument)==null?void 0:o.body),i=D(r);return a?(Ht(i),e.concat(i,i.visualViewport||[],ft(r)?r:[],[])):e.concat(r,ue(r,[]))}function Ht(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function he(t){const e=j(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=N(t),a=r?t.offsetWidth:n,i=r?t.offsetHeight:o,s=ht(n)!==a||ht(o)!==i;return s&&(n=a,o=i),{width:n,height:o,$:s}}function be(t){return $(t)?t:t.contextElement}function et(t){const e=be(t);if(!N(e))return I(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:a}=he(e);let i=(a?ht(n.width):n.width)/o,s=(a?ht(n.height):n.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const an=I(0);function we(t){const e=D(t);return!Vt()||!e.visualViewport?an:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function sn(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==D(t)?!1:e}function mt(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),a=be(t);let i=I(1);e&&(o?$(o)&&(i=et(o)):i=et(t));const s=sn(a,n,o)?we(a):I(0);let c=(r.left+s.x)/i.x,d=(r.top+s.y)/i.y,l=r.width/i.x,p=r.height/i.y;if(a){const f=D(a),m=o&&$(o)?D(o):o;let g=f,u=Ht(g);for(;u&&o&&m!==g;){const h=et(u),b=u.getBoundingClientRect(),w=j(u),v=b.left+(u.clientLeft+parseFloat(w.paddingLeft))*h.x,x=b.top+(u.clientTop+parseFloat(w.paddingTop))*h.y;c*=h.x,d*=h.y,l*=h.x,p*=h.y,c+=v,d+=x,g=D(u),u=Ht(g)}}return wt({width:l,height:p,x:c,y:d})}function $t(t,e){const n=Rt(t).scrollLeft;return e?e.left+n:mt(W(t)).left+n}function ve(t,e){const n=t.getBoundingClientRect(),o=n.left+e.scrollLeft-$t(t,n),r=n.top+e.scrollTop;return{x:o,y:r}}function ln(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const a=r==="fixed",i=W(o),s=e?Lt(e.floating):!1;if(o===i||s&&a)return n;let c={scrollLeft:0,scrollTop:0},d=I(1);const l=I(0),p=N(o);if((p||!p&&!a)&&((rt(o)!=="body"||ft(i))&&(c=Rt(o)),N(o))){const m=mt(o);d=et(o),l.x=m.x+o.clientLeft,l.y=m.y+o.clientTop}const f=i&&!p&&!a?ve(i,c):I(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+l.x+f.x,y:n.y*d.y-c.scrollTop*d.y+l.y+f.y}}function cn(t){return Array.from(t.getClientRects())}function dn(t){const e=W(t),n=Rt(t),o=t.ownerDocument.body,r=_(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),a=_(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let i=-n.scrollLeft+$t(t);const s=-n.scrollTop;return j(o).direction==="rtl"&&(i+=_(e.clientWidth,o.clientWidth)-r),{width:r,height:a,x:i,y:s}}const Qt=25;function pn(t,e){const n=D(t),o=W(t),r=n.visualViewport;let a=o.clientWidth,i=o.clientHeight,s=0,c=0;if(r){a=r.width,i=r.height;const l=Vt();(!l||l&&e==="fixed")&&(s=r.offsetLeft,c=r.offsetTop)}const d=$t(o);if(d<=0){const l=o.ownerDocument,p=l.body,f=getComputedStyle(p),m=l.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(o.clientWidth-p.clientWidth-m);g<=Qt&&(a-=g)}else d<=Qt&&(a+=d);return{width:a,height:i,x:s,y:c}}const mn=new Set(["absolute","fixed"]);function gn(t,e){const n=mt(t,!0,e==="fixed"),o=n.top+t.clientTop,r=n.left+t.clientLeft,a=N(t)?et(t):I(1),i=t.clientWidth*a.x,s=t.clientHeight*a.y,c=r*a.x,d=o*a.y;return{width:i,height:s,x:c,y:d}}function te(t,e,n){let o;if(e==="viewport")o=pn(t,n);else if(e==="document")o=dn(W(t));else if($(e))o=gn(e,n);else{const r=we(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return wt(o)}function ye(t,e){const n=q(t);return n===e||!$(n)||nt(n)?!1:j(n).position==="fixed"||ye(n,e)}function fn(t,e){const n=e.get(t);if(n)return n;let o=ue(t,[]).filter(s=>$(s)&&rt(s)!=="body"),r=null;const a=j(t).position==="fixed";let i=a?q(t):t;for(;$(i)&&!nt(i);){const s=j(i),c=Wt(i);!c&&s.position==="fixed"&&(r=null),(a?!c&&!r:!c&&s.position==="static"&&!!r&&mn.has(r.position)||ft(i)&&!c&&ye(t,i))?o=o.filter(l=>l!==i):r=s,i=q(i)}return e.set(t,o),o}function un(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[...n==="clippingAncestors"?Lt(e)?[]:fn(e,this._c):[].concat(n),o],s=i[0],c=i.reduce((d,l)=>{const p=te(e,l,r);return d.top=_(p.top,d.top),d.right=G(p.right,d.right),d.bottom=G(p.bottom,d.bottom),d.left=_(p.left,d.left),d},te(e,s,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function hn(t){const{width:e,height:n}=he(t);return{width:e,height:n}}function bn(t,e,n){const o=N(e),r=W(e),a=n==="fixed",i=mt(t,!0,a,e);let s={scrollLeft:0,scrollTop:0};const c=I(0);function d(){c.x=$t(r)}if(o||!o&&!a)if((rt(e)!=="body"||ft(r))&&(s=Rt(e)),o){const m=mt(e,!0,a,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else r&&d();a&&!o&&r&&d();const l=r&&!o&&!a?ve(r,s):I(0),p=i.left+s.scrollLeft-c.x-l.x,f=i.top+s.scrollTop-c.y-l.y;return{x:p,y:f,width:i.width,height:i.height}}function Pt(t){return j(t).position==="static"}function ee(t,e){if(!N(t)||j(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return W(t)===n&&(n=n.ownerDocument.body),n}function xe(t,e){const n=D(t);if(Lt(t))return n;if(!N(t)){let r=q(t);for(;r&&!nt(r);){if($(r)&&!Pt(r))return r;r=q(r)}return n}let o=ee(t,e);for(;o&&Ke(o)&&Pt(o);)o=ee(o,e);return o&&nt(o)&&Pt(o)&&!Wt(o)?n:o||on(t)||n}const wn=async function(t){const e=this.getOffsetParent||xe,n=this.getDimensions,o=await n(t.floating);return{reference:bn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function vn(t){return j(t).direction==="rtl"}const yn={convertOffsetParentRelativeRectToViewportRelativeRect:ln,getDocumentElement:W,getClippingRect:un,getOffsetParent:xe,getElementRects:wn,getClientRects:cn,getDimensions:hn,getScale:et,isElement:$,isRTL:vn},xn=Ue,kn=Je,En=We,An=qe,Dn=Ve,Sn=Fe,Tn=(t,e,n)=>{const o=new Map,r={platform:yn,...n},a={...r.platform,_c:o};return Me(t,e,{...r,platform:a})},vt="top-start",yt="top",xt="top-end",kt="right-start",Et="right",At="right-end",Dt="bottom-start",gt="bottom",St="bottom-end",Tt="left-start",Ct="left",_t="left-end",ne=[vt,yt,xt,kt,Et,At,Dt,gt,St,Tt,Ct,_t],tt={[vt]:Dt,[yt]:gt,[xt]:St,[Dt]:vt,[gt]:yt,[St]:xt,[Tt]:kt,[Ct]:Et,[_t]:At,[kt]:Tt,[Et]:Ct,[At]:_t},Cn={[Tt]:-45,[Ct]:-45,[_t]:-45,[vt]:45,[yt]:45,[xt]:45,[kt]:135,[Et]:135,[At]:135,[Dt]:-135,[gt]:-135,[St]:-135},ke=t=>{let e;return/-/.test(t)?e=t.split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""):e=t.charAt(0).toUpperCase()+t.slice(1),e},_n=t=>t.split("-")[0],On=t=>tt[_n(t)],Ee=t=>tt[t],Ln=t=>Cn[Ee(t)],Rn=(t,e,n)=>{Object.assign(t?.style,{borderTopLeftRadius:"4px",zIndex:1,[`margin${ke(On(n))}`]:"-0.5px",transform:`rotate(${e}deg)`})},oe=8,ut=24;async function re(t){if(!t?.isShowing||(t?.waitForDOM&&await t?.waitForDOM(),!t?.targetEl||!t?.attentionEl))return;let e=t?.targetEl;const n=t.attentionEl;return Tn(e,n,{placement:t?.directionName??gt,middleware:[xn({mainAxis:t?.distance??8,crossAxis:t?.skidding??0}),t?.flip&&En({crossAxis:t?.crossAxis,fallbackPlacements:t?.fallbackPlacements}),t?.flip&&kn({crossAxis:!0}),!t?.noArrow&&t?.arrowEl&&Sn({element:t?.arrowEl}),Dn(),An({apply(){Object.assign(n.style,{paddingRight:`${oe}px`,paddingLeft:`${oe}px`})}})]}).then(({x:o,y:r,middlewareData:a,placement:i})=>{if(t.actualDirection=i,t?.isCallout||Object.assign(n.style,{left:`${o}px`,top:`${r}px`}),a?.hide&&!t?.isCallout){const{referenceHidden:s}=a.hide;Object.assign(n.style,{visibility:s?"hidden":""})}if(a?.arrow&&t?.arrowEl){const s=t?.arrowEl,{x:c,y:d}=a.arrow,l=window.getComputedStyle(n).direction==="rtl",p=Ee(i).split("-")[1];let f="",m="",g="",u="";if(p==="start"){const h=typeof c=="number"?`calc(${ut}px - ${s.offsetWidth/2}px)`:"";f=typeof d=="number"?`calc(${ut}px - ${s.offsetWidth/2}px)`:"",m=l?h:"",u=l?"":h}else if(p==="end"){const h=typeof c=="number"?`calc(${ut}px - ${s.offsetWidth/2}px)`:"";m=l?"":h,u=l?h:"",g=typeof d=="number"?`calc(${ut}px - ${s.offsetWidth/2}px)`:""}else u=typeof c=="number"?`${c}px`:"",f=typeof d=="number"?`${d}px`:"";Object.assign(s.style,{top:f,right:m,bottom:g,left:u}),Rn(s,Ln(i),i)}}),t}function $n(){return`m${Math.random().toString(36).slice(2)}`}const jn=zt`
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
`,Pn=JSON.parse('{"attention.aria.callout":["En grøn taleboble der introducerer noget nyt"],"attention.aria.close":["Luk"],"attention.aria.highlight":["En opmærksomhedsskabende taleboble med vigtig information"],"attention.aria.pointingDown":["peger nedad"],"attention.aria.pointingLeft":["peger til venstre"],"attention.aria.pointingRight":["peger til højre"],"attention.aria.pointingUp":["peger opad"],"attention.aria.popover":["En hvid taleboble med mere information"],"attention.aria.tooltip":["En sort taleboble med flere oplysninger"]}'),Bn=JSON.parse('{"attention.aria.callout":["A green speech bubble introducing something new"],"attention.aria.close":["Close"],"attention.aria.highlight":["An attention speech bubble with important information"],"attention.aria.pointingDown":["pointing down"],"attention.aria.pointingLeft":["pointing left"],"attention.aria.pointingRight":["pointing right"],"attention.aria.pointingUp":["pointing up"],"attention.aria.popover":["A white speech bubble providing additional information"],"attention.aria.tooltip":["A black speech bubble providing complementary information"]}'),In=JSON.parse('{"attention.aria.callout":["Vihreä puhekupla, joka esittelee jotain uutta"],"attention.aria.close":["Sulje"],"attention.aria.highlight":["Puhekupla, joka sisältää tärkeää tietoa"],"attention.aria.pointingDown":["osoittaa alas"],"attention.aria.pointingLeft":["osoittaa vasemmalle"],"attention.aria.pointingRight":["osoittaa oikealle"],"attention.aria.pointingUp":["osoittaa ylös"],"attention.aria.popover":["Valkoinen puhekupla, joka tarjoaa lisätietoa"],"attention.aria.tooltip":["Musta puhekupla, joka tarjoaa täydentävää tietoa"]}'),Nn=JSON.parse('{"attention.aria.callout":["Grønn taleboble som introduserer noe nytt"],"attention.aria.close":["Lukk"],"attention.aria.highlight":["En uthevet taleboble med viktig informasjon"],"attention.aria.pointingDown":["peker ned"],"attention.aria.pointingLeft":["peker til venstre"],"attention.aria.pointingRight":["peker til høyre"],"attention.aria.pointingUp":["peker opp"],"attention.aria.popover":["En hvit taleboble som gir tilleggsinformasjon"],"attention.aria.tooltip":["En svart taleboble som forklarer konteksten"]}'),Hn=JSON.parse('{"attention.aria.callout":["En grön pratbubbla som introducerar något nytt"],"attention.aria.close":["Stäng"],"attention.aria.highlight":["En pratbubbla med viktig information"],"attention.aria.pointingDown":["pekar ned"],"attention.aria.pointingLeft":["pekar vänster"],"attention.aria.pointingRight":["pekar höger"],"attention.aria.pointingUp":["pekar upp"],"attention.aria.popover":["En vit pratbubbla som ger ytterligare information"],"attention.aria.tooltip":["En svart pratbubbla som ger kompletterande information"]}'),zn=zt`*,:before,:after{--w-rotate:0;--w-rotate-x:0;--w-rotate-y:0;--w-rotate-z:0;--w-scale-x:1;--w-scale-y:1;--w-scale-z:1;--w-skew-x:0;--w-skew-y:0;--w-translate-x:0;--w-translate-y:0;--w-translate-z:0}.hover\\:bg-clip-padding:hover{-webkit-background-clip:padding-box;background-clip:padding-box}.bg-transparent{background-color:#0000}.bg-\\[--w-color-button-primary-background\\]{background-color:var(--w-color-button-primary-background)}.bg-\\[--w-color-callout-background\\]{background-color:var(--w-color-callout-background)}.bg-\\[--w-s-color-surface-elevated-300\\]{background-color:var(--w-s-color-surface-elevated-300)}.hover\\:bg-\\[--w-color-button-pill-background-hover\\]:hover{background-color:var(--w-color-button-pill-background-hover)}.hover\\:bg-\\[--w-color-button-primary-background-hover\\]:hover{background-color:var(--w-color-button-primary-background-hover)}.active\\:bg-\\[--w-color-button-pill-background-active\\]:active{background-color:var(--w-color-button-pill-background-active)}.active\\:bg-\\[--w-color-button-primary-background-active\\]:active{background-color:var(--w-color-button-primary-background-active)}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-b-0{border-bottom-width:0}.border-r-0{border-right-width:0}.border-\\[--w-color-callout-border\\]{border-color:var(--w-color-callout-border)}.border-\\[--w-s-color-background-inverted\\]{border-color:var(--w-s-color-background-inverted)}.border-\\[--w-s-color-surface-elevated-300\\]{border-color:var(--w-s-color-surface-elevated-300)}.rounded-4{border-radius:4px}.rounded-8{border-radius:8px}.rounded-full{border-radius:9999px}.rounded-tl-4{border-top-left-radius:4px}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.contents{display:contents}.hidden{display:none}.hover\\:underline:hover,.focus\\:underline:focus,.active\\:underline:active{text-decoration-line:underline}.focusable:focus{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:focus-visible{outline:2px solid var(--w-s-color-border-focus);outline-offset:var(--w-outline-offset,1px)}.focusable:not(:focus-visible){outline:none}.items-start{align-items:flex-start}.items-center{align-items:center}.-bottom-\\[8px\\]{bottom:-8px}.-left-\\[8px\\]{left:-8px}.-right-\\[8px\\]{right:-8px}.-top-\\[8px\\]{top:-8px}.justify-center{justify-content:center}.justify-self-end{justify-self:end}.absolute{position:absolute}.relative{position:relative}.static{position:static}.z-50{z-index:50}.s-bg{background-color:var(--w-s-color-background)}.s-bg-disabled{background-color:var(--w-s-color-background-disabled)}.s-bg-inverted{background-color:var(--w-s-color-background-inverted)}.s-bg-negative{background-color:var(--w-s-color-background-negative)}.s-bg-subtle{background-color:var(--w-s-color-background-subtle)}.hover\\:s-bg-hover:hover{background-color:var(--w-s-color-background-hover)}.hover\\:s-bg-negative-hover:hover{background-color:var(--w-s-color-background-negative-hover)}.hover\\:s-bg-negative-subtle-hover:hover{background-color:var(--w-s-color-background-negative-subtle-hover)}.active\\:s-bg-active:active{background-color:var(--w-s-color-background-active)}.active\\:s-bg-negative-active:active{background-color:var(--w-s-color-background-negative-active)}.active\\:s-bg-negative-subtle-active:active{background-color:var(--w-s-color-background-negative-subtle-active)}.s-text{color:var(--w-s-color-text)}.s-text-inverted{color:var(--w-s-color-text-inverted)}.s-text-inverted-static{color:var(--w-s-color-text-inverted-static)}.s-text-link{color:var(--w-s-color-text-link)}.s-text-negative{color:var(--w-s-color-text-negative)}.s-icon{color:var(--w-s-color-icon)}.hover\\:s-icon-hover:hover{color:var(--w-s-color-icon-hover)}.active\\:s-icon-active:active{color:var(--w-s-color-icon-active)}.s-border{border-color:var(--w-s-color-border)}.hover\\:s-border-hover:hover{border-color:var(--w-s-color-border-hover)}.active\\:s-border-active:active{border-color:var(--w-s-color-border-active)}.drop-shadow-m{filter:drop-shadow(0 3px 8px #4040403d)drop-shadow(0 3px 6px #40404029)}.shadow-m{box-shadow:var(--w-shadow-m)}.h-\\[14px\\]{height:14px}.w-\\[14px\\]{width:14px}.-mr-8{margin-right:-.8rem}.last-child\\:mb-0>:last-child{margin-bottom:0}.ml-8{margin-left:.8rem}.p-16{padding:1.6rem}.p-4{padding:.4rem}.px-16{padding-left:1.6rem;padding-right:1.6rem}.px-8{padding-left:.8rem;padding-right:.8rem}.py-6{padding-top:.6rem;padding-bottom:.6rem}.py-8{padding-top:.8rem;padding-bottom:.8rem}.font-bold{font-weight:700}.resize{resize:both}.translate-z-0{--w-translate-z:0rem;transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transform{transform:translateX(var(--w-translate-x))translateY(var(--w-translate-y))translateZ(var(--w-translate-z))rotate(var(--w-rotate))rotateX(var(--w-rotate-x))rotateY(var(--w-rotate-y))rotateZ(var(--w-rotate-z))skewX(var(--w-skew-x))skewY(var(--w-skew-y))scaleX(var(--w-scale-x))scaleY(var(--w-scale-y))scaleZ(var(--w-scale-z))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.text-m{font-size:var(--w-font-size-m);line-height:var(--w-line-height-m)}.text-xs{font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.leading-\\[24\\]{line-height:2.4rem}`;var Mn=Object.defineProperty,T=(t,e,n,o)=>{for(var r=void 0,a=t.length-1,i;a>=0;a--)(i=t[a])&&(r=i(e,n,r)||r);return r&&Mn(e,n,r),r};const Fn={medium:"text-m leading-[24]"},Wn={pill:"s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active]"},Vn="font-bold focusable justify-center transition-colors ease-in-out",Xn={pill:`p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${Vn}`},Q={base:"border-2 relative flex items-start",tooltip:"s-bg-inverted border-[--w-s-color-background-inverted] shadow-m s-text-inverted-static rounded-4 py-6 px-8",callout:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8",highlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border] s-text py-8 px-16 rounded-8 drop-shadow-m translate-z-0",popover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300] s-text rounded-8 p-16 drop-shadow-m translate-z-0",arrowBase:"absolute h-[14px] w-[14px] border-2 border-b-0 border-r-0 rounded-tl-4 transform",arrowDirectionLeftStart:"-left-[8px]",arrowDirectionLeft:"-left-[8px]",arrowDirectionLeftEnd:"-left-[8px]",arrowDirectionRightStart:"-right-[8px]",arrowDirectionRight:"-right-[8px]",arrowDirectionRightEnd:"-right-[8px]",arrowDirectionBottomStart:"-bottom-[8px]",arrowDirectionBottom:"-bottom-[8px]",arrowDirectionBottomEnd:"-bottom-[8px]",arrowDirectionTopStart:"-top-[8px]",arrowDirectionTop:"-top-[8px]",arrowDirectionTopEnd:"-top-[8px]",arrowTooltip:"s-bg-inverted border-[--w-s-color-background-inverted]",arrowCallout:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",arrowPopover:"bg-[--w-s-color-surface-elevated-300] border-[--w-s-color-surface-elevated-300]",arrowHighlight:"bg-[--w-color-callout-background] border-[--w-color-callout-border]",content:"last-child:mb-0",notCallout:"absolute z-50",closeBtn:`${Fn.medium} ${Xn.pill} ${Wn.pill} justify-self-end -mr-8 ml-8`};class E extends De{static{this.styles=[Se,jn,zn,zt`
      #attention {
        position: absolute;
        z-index: 50;
        visibility: var(--attention-visibility);
        display: var(--attention-display);
      }
      :host([popover]:not(:popover-open):not(dialog[open])) {
        display: contents;
      }
    `]}constructor(){super(),Te(Bn,Nn,In,Pn,Hn),this.handleDone=this.handleDone.bind(this),this.show=!1,this.placement="bottom",this.tooltip=!1,this.callout=!1,this.popover=!1,this.highlight=!1,this.canClose=!1,this.noArrow=!1,this.distance=8,this.skidding=0,this.flip=!1,this.crossAxis=!1,this._initialPlacement=this.placement,this._actualDirection=this.placement}connectedCallback(){if(super.connectedCallback(),this.placement&&!Object.keys(tt).includes(this.placement))throw new Error(`Invalid "placement" attribute. Set its value to one of the following:
${JSON.stringify(Object.keys(tt))}`);if(this.fallbackPlacements&&!this.fallbackPlacements.every(e=>ne.includes(e)))throw new Error(`Invalid "fallbackPlacements" attribute. Set its value to an array with one or more of the following:
${JSON.stringify(ne)}`);setTimeout(()=>{this.requestUpdate(),this.handleDone()},0),this.callout||(window.addEventListener("click",this.handleDone),window.addEventListener("scroll",this.handleDone),window.addEventListener("resize",this.handleDone),window.addEventListener("touch",this.handleDone)),this.tooltip&&(window.addEventListener("mouseover",this.handleDone),window.addEventListener("mouseout",this.handleDone))}disconnectedCallback(){window.removeEventListener("click",this.handleDone),window.removeEventListener("scroll",this.handleDone),window.removeEventListener("resize",this.handleDone),window.removeEventListener("touch",this.handleDone),window.removeEventListener("mouseover",this.handleDone),window.removeEventListener("mouseout",this.handleDone),super.disconnectedCallback()}handleDone(){window.requestAnimationFrame(()=>{this.show&&this._targetEl&&this._attentionEl?re(this.attentionState).then(e=>{this._actualDirection=e?.actualDirection}):this._actualDirection=this._initialPlacement})}get _actualDirection(){return this.placement}set _actualDirection(e){this.placement=e}get _arrowEl(){return this.renderRoot.querySelector("#arrow")}get _arrowDirection(){return tt[this._actualDirection]}get _arrowClasses(){return Xt([Q.arrowBase,this._activeVariantClasses.arrow,Q[`arrowDirection${ke(this._arrowDirection)}`]])}get _arrowHtml(){return this.noArrow?"":A`<div id="arrow" class="${this._arrowClasses}"></div>`}get _activeVariantClasses(){const e={callout:this.callout,popover:this.popover,tooltip:this.tooltip,highlight:this.highlight},n=Object.keys(e).find(o=>!!e[o])||"";return{wrapper:Q[n],arrow:Q[`arrow${n.charAt(0).toUpperCase()+n.slice(1)}`]}}get _attentionEl(){return this.renderRoot.querySelector("#attention")}get _targetEl(){const e=this.renderRoot?.querySelector("slot[name='target']");return e?e.assignedElements()[0]:null}get _messageEl(){const e=this.renderRoot.querySelector("slot[name='message']");return e?e.assignedElements()[0]:null}get _wrapperClasses(){return Xt([Q.base,this._activeVariantClasses.wrapper])}get _ariaClose(){return M._({id:"attention.aria.close",message:"Close",comment:"Aria label for the close button in attention"})}get _closeBtnHtml(){return A`
      <button aria-label="${this._ariaClose}" @click=${this.close} @keydown=${this.keypressed} class="${Q.closeBtn}">
        <w-icon-close-16 style="height: 16px; width: 16px; display: flex;"></w-icon-close-16>
      </button>
    `}updated(){this.callout||this._attentionEl.style.setProperty("--attention-visibility",this.show?"":"hidden"),this.tooltip||this._attentionEl.style.setProperty("--attention-display",this.show?"flex":"none"),this.attentionState={isShowing:this.show,isCallout:this.callout,actualDirection:this._actualDirection,directionName:this.placement,arrowEl:this._arrowEl,attentionEl:this._attentionEl,targetEl:this._targetEl,noArrow:this.noArrow,distance:this.distance,skidding:this.skidding,flip:this.flip,crossAxis:this.crossAxis,fallbackPlacements:this.fallbackPlacements},re(this.attentionState)}pointingAtDirection(){switch(tt[this._actualDirection]){case"top-start":case"top":case"top-end":return M._({id:"attention.aria.pointingUp",message:"pointing up",comment:"Default screenreader message for top direction in the attention component"});case"right-start":case"right":case"right-end":return M._({id:"attention.aria.pointingRight",message:"pointing right",comment:"Default screenreader message for right direction in the attention component"});case"bottom-start":case"bottom":case"bottom-end":return M._({id:"attention.aria.pointingDown",message:"pointing down",comment:"Default screenreader message for bottom direction in the attention component"});case"left-start":case"left":case"left-end":return M._({id:"attention.aria.pointingLeft",message:"pointing left",comment:"Default screenreader message for left direction in the attention component"});default:return""}}activeAttentionType(){switch(!0){case this.tooltip:return M._({id:"attention.aria.tooltip",message:"tooltip",comment:"Default screenreader message for tooltip in the attention component"});case this.callout:return M._({id:"attention.aria.callout",message:"callout speech bubble",comment:"Default screenreader message for callout speech bubble in the attention component"});case this.popover:return M._({id:"attention.aria.popover",message:"popover speech bubble",comment:"Default screenreader message for popover speech bubble in the attention component"});case this.highlight:return M._({id:"attention.aria.highlight",message:"highlighted speech bubble",comment:"Default screenreader message for highlighted speech bubble in the attention component"});default:return""}}defaultAriaLabel(){return`${this.activeAttentionType()} ${this.noArrow?"":this.pointingAtDirection()}`}setAriaLabels(){if(this._targetEl&&!this._targetEl.getAttribute("aria-details")){const e=this._messageEl.id||(this._messageEl.id=$n());this._targetEl.setAttribute("aria-details",e)}}firstUpdated(){this._initialPlacement=this.placement,this.setAriaLabels(),this.callout&&(this._attentionEl.style.position="relative")}close(){const e=new CustomEvent("close",{bubbles:!0,composed:!0});this.updateComplete.then(()=>this.dispatchEvent(e))}keypressed(e){this.canClose&&e.key==="Escape"&&(e.preventDefault(),this.close())}render(){return!this.callout&&this._targetEl===void 0?A``:A`
      <div class=${_e(this.className?this.className:void 0)}>
        ${this.placement==="right-start"||this.placement==="right"||this.placement==="right-end"||this.placement==="bottom-start"||this.placement==="bottom"||this.placement==="bottom-end"?A`
              <slot name="target"></slot>

              <div id="attention" class="${this._wrapperClasses}">
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                <slot name="message"></slot>
                ${this.canClose?this._closeBtnHtml:Yt}
              </div>
            `:A`
              <div id="attention" class="${this._wrapperClasses}">
                <slot name="message"></slot>
                <div role="${this.tooltip?"tooltip":"img"}" aria-label="${this.defaultAriaLabel()}">${this._arrowHtml}</div>
                ${this.canClose?this._closeBtnHtml:Yt}
              </div>
              <slot name="target"></slot>
            `}
      </div>
    `}}T([S({type:Boolean,reflect:!0})],E.prototype,"show");T([S({type:String,reflect:!0})],E.prototype,"placement");T([S({type:Boolean,reflect:!0})],E.prototype,"tooltip");T([S({type:Boolean,reflect:!0})],E.prototype,"callout");T([S({type:Boolean,reflect:!0})],E.prototype,"popover");T([S({type:Boolean,reflect:!0})],E.prototype,"highlight");T([S({attribute:"can-close",type:Boolean,reflect:!0})],E.prototype,"canClose");T([S({attribute:"no-arrow",type:Boolean,reflect:!0})],E.prototype,"noArrow");T([S({type:Number,reflect:!0})],E.prototype,"distance");T([S({type:Number,reflect:!0})],E.prototype,"skidding");T([S({type:Boolean,reflect:!0})],E.prototype,"flip");T([S({attribute:"cross-axis",type:Boolean,reflect:!0})],E.prototype,"crossAxis");T([S({attribute:"fallback-placements",type:Array,reflect:!0})],E.prototype,"fallbackPlacements");customElements.get("w-attention")||customElements.define("w-attention",E);var ie=Object.freeze,Yn=Object.defineProperty,jt=(t,e)=>ie(Yn(t,"raw",{value:ie(t.slice())})),ae,se,le,ce;const{events:Un,args:Jn,argTypes:qn}=Ce("w-attention"),Zn={title:"Overlays/Attention",render(t){return A`
      <w-attention ${Bt(de(t))}>
        <w-button
          ${Bt({id:t.buttonId})}
          variant="secondary"
          slot="target">
          ${t.buttonText}
        </w-button>
        <span slot="message">I'm a message</span>
      </w-attention>
    `},args:Jn,argTypes:qn,parameters:{actions:{handles:Un}}},it={args:{placement:"bottom",popover:!0,flip:!0},render(t){return A`
      <w-attention ${Bt(de(t))}>
        <w-button 
          id="popoverTarget" 
          slot="target"
          variant="secondary"
          @click=${e=>{const n=e.currentTarget.closest("w-attention");n.show=!n.show}}>
            Click to toggle a popover
        </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    `}},at={args:{placement:"right",buttonText:"hover me",id:"tooltip-element",tooltip:!0,flip:!0,buttonId:"tooltip-target"},decorators:[t=>A(ae||(ae=jt([`
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
    `])),t())]},st={args:{buttonText:"i need a callout",class:"flex items-center gap-8",placement:"right",callout:!0,show:!0}},lt={args:{buttonId:"highlight-target1",id:"highlight-message",buttonText:"I'm highlighted",placement:"right",highlight:!0,flip:!0},decorators:[t=>A(se||(se=jt([`
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
    `])),t())]},ct={args:{class:"flex items-center gap-8",placement:"right",buttonId:"highlight-target2",buttonText:"click me",id:"dismissible-highlight-message","can-close":!0,"cross-axis":!0,highlight:!0,flip:!0},decorators:[t=>A(le||(le=jt([`
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
    `])),t())]},dt={args:{},render(){return A`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <w-button
          aria-details="aria-content"
          id="accessible-target"
          slot="target"
          variant="secondary">
          Click to toggle a popover
        </w-button>
      </w-attention>
    `},decorators:[t=>A(ce||(ce=jt([" ",`
        <script>
          (() => {
            const button = document.getElementById('accessible-target');
            const accessibleAttention = document.getElementById('accessible-attention');
            button.addEventListener('click', () => {
              accessibleAttention.show = !accessibleAttention.show;
            });
          })();
        <\/script>`])),t())]};it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'bottom',
    popover: true,
    flip: true
  },
  render(args) {
    return html\`
      <w-attention \${spread(prespread(args))}>
        <w-button 
          id="popoverTarget" 
          slot="target"
          variant="secondary"
          @click=\${e => {
      const attention = e.currentTarget.closest('w-attention');
      attention.show = !attention.show;
    }}>
            Click to toggle a popover
        </w-button>
        <span slot="message">I'm a popover</span>
      </w-attention>
    \`;
  }
}`,...it.parameters?.docs?.source}}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
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
}`,...at.parameters?.docs?.source}}};st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  args: {
    buttonText: 'i need a callout',
    class: 'flex items-center gap-8',
    placement: 'right',
    callout: true,
    show: true
  }
}`,...st.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
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
}`,...lt.parameters?.docs?.source}}};ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
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
}`,...ct.parameters?.docs?.source}}};dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {},
  render() {
    return html\`
      <w-attention id="accessible-attention" placement="right" popover>
        <div slot="message">
          <p id="aria-content" role="tooltip">I'm a popover with ARIA "tooltip" role</p>
          <p>(this text is less relevant)</p>
        </div>
        <w-button
          aria-details="aria-content"
          id="accessible-target"
          slot="target"
          variant="secondary">
          Click to toggle a popover
        </w-button>
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
}`,...dt.parameters?.docs?.source}}};const Gn=["Default","ToolTip","Callout","Highlight","DismissibleHighlight","AccessibleTooltip"],no=Object.freeze(Object.defineProperty({__proto__:null,AccessibleTooltip:dt,Callout:st,Default:it,DismissibleHighlight:ct,Highlight:lt,ToolTip:at,__namedExportsOrder:Gn,default:Zn},Symbol.toStringTag,{value:"Module"}));export{no as A,st as C,ct as D,lt as H,at as T,dt as a};
