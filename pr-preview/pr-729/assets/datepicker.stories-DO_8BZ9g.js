import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{A as n,Bt as r,E as i,H as a,Ht as o,J as s,Lt as c,M as l,N as u,Rt as ee,U as te,Ut as ne,V as re,Vt as ie,W as ae,Wt as d,b as oe,d as se,f,h as ce,j as le,k as ue,l as de,m as fe,p as pe,q as p,u as me,w as m,x as h}from"./iframe-roP1PPlI.js";import{a as he,n as ge,r as _e,t as ve}from"./utilities-CFNgMtaz.js";import{n as ye,t as be}from"./form-control-DtXadPi-.js";import{r as g,t as xe}from"./if-defined-DySi2ATE.js";import{t as Se}from"./button-RxjsnNYw.js";import{n as Ce,t as we}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as Te}from"./tooltip-B4oUyqLY.js";var Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,_=t((()=>{Ee=365.2425,De=10**8*24*60*60*1e3,-De,Oe=6048e5,ke=864e5,Ae=3600,je=Ae*24,je*7,Me=je*Ee,Ne=Me/12,Ne*3,Pe=Symbol.for(`constructDateFrom`)}));function v(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Pe in e?e[Pe](t):e instanceof Date?new e.constructor(t):new Date(t)}var y=t((()=>{_()}));function b(e,t){return v(t||e,e)}var x=t((()=>{y()}));function S(e,t,n){let r=b(e,n?.in);return isNaN(t)?v(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}var Fe=t((()=>{y(),x()}));function Ie(e,t,n){let r=b(e,n?.in);if(isNaN(t))return v(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=v(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}var Le=t((()=>{y(),x()})),Re=t((()=>{})),ze=t((()=>{})),Be=t((()=>{})),Ve=t((()=>{})),He=t((()=>{})),Ue=t((()=>{})),We=t((()=>{}));function C(){return Ge}var Ge,w=t((()=>{Ge={}}));function T(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}var E=t((()=>{w(),x()}));function D(e,t){return T(e,{...t,weekStartsOn:1})}var O=t((()=>{E()}));function Ke(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=v(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=D(i),o=v(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=D(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}var qe=t((()=>{y(),O(),x()}));function Je(e){let t=b(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}var Ye=t((()=>{x()}));function Xe(e,...t){let n=v.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}var Ze=t((()=>{y()}));function k(e,t){let n=b(e,t?.in);return n.setHours(0,0,0,0),n}var A=t((()=>{x()}));function Qe(e,t,n){let[r,i]=Xe(n?.in,e,t),a=k(r),o=k(i),s=+a-Je(a),c=+o-Je(o);return Math.round((s-c)/ke)}var $e=t((()=>{Ye(),Ze(),_(),A()}));function et(e,t){let n=Ke(e,t),r=v(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),D(r)}var tt=t((()=>{y(),qe(),O()})),nt=t((()=>{})),rt=t((()=>{})),it=t((()=>{})),at=t((()=>{})),ot=t((()=>{}));function st(e,t,n){return S(e,t*7,n)}var ct=t((()=>{Fe()})),lt=t((()=>{})),ut=t((()=>{})),dt=t((()=>{})),ft=t((()=>{})),pt=t((()=>{})),mt=t((()=>{})),ht=t((()=>{})),gt=t((()=>{})),_t=t((()=>{}));function vt(e){return v(e,Date.now())}var yt=t((()=>{y()})),bt=t((()=>{}));function xt(e,t,n){let[r,i]=Xe(n?.in,e,t);return+k(r)==+k(i)}var St=t((()=>{Ze(),A()}));function Ct(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}var wt=t((()=>{}));function Tt(e){return!(!Ct(e)&&typeof e!=`number`||isNaN(+b(e)))}var Et=t((()=>{wt(),x()})),Dt=t((()=>{})),Ot=t((()=>{})),kt=t((()=>{})),At=t((()=>{})),jt=t((()=>{})),Mt=t((()=>{})),Nt=t((()=>{})),Pt=t((()=>{})),Ft=t((()=>{})),It=t((()=>{})),Lt=t((()=>{})),Rt=t((()=>{})),zt=t((()=>{})),Bt=t((()=>{})),Vt=t((()=>{})),Ht=t((()=>{})),Ut=t((()=>{})),Wt=t((()=>{})),Gt=t((()=>{})),Kt=t((()=>{})),qt=t((()=>{})),Jt=t((()=>{}));function Yt(e,t){let[n,r]=Xe(e,t.start,t.end);return{start:n,end:r}}var Xt=t((()=>{Ze()}));function Zt(e,t){let{start:n,end:r}=Yt(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(v(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}var Qt=t((()=>{Xt(),y()})),$t=t((()=>{})),en=t((()=>{})),tn=t((()=>{})),nn=t((()=>{})),rn=t((()=>{}));function an(e,t){let{start:n,end:r}=Yt(t?.in,e),i=+n>+r,a=T(i?r:n,t),o=T(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(v(n,c)),c=st(c,l),c.setHours(15);return i?u.reverse():u}var on=t((()=>{Xt(),ct(),y(),E()})),sn=t((()=>{}));function cn(e,t){let n=b(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}var ln=t((()=>{x()})),un=t((()=>{})),dn=t((()=>{}));function fn(e,t){let n=b(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}var pn=t((()=>{x()})),mn=t((()=>{})),hn=t((()=>{})),gn=t((()=>{})),_n=t((()=>{}));function vn(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}var yn=t((()=>{w(),x()})),bn=t((()=>{})),xn=t((()=>{})),Sn=t((()=>{})),Cn=t((()=>{})),wn=t((()=>{})),Tn=t((()=>{})),En=t((()=>{})),Dn=t((()=>{})),On,kn,An=t((()=>{On={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},kn=(e,t,n)=>{let r,i=On[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}}));function j(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var M=t((()=>{})),jn,Mn,Nn,Pn,Fn=t((()=>{M(),jn={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},Mn={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},Nn={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Pn={date:j({formats:jn,defaultWidth:`full`}),time:j({formats:Mn,defaultWidth:`full`}),dateTime:j({formats:Nn,defaultWidth:`full`})}})),In,Ln,Rn=t((()=>{In={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},Ln=(e,t,n,r)=>In[e]}));function N(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var P=t((()=>{})),zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=t((()=>{P(),zn={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Bn={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},Vn={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Hn={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},Un={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Wn={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},Gn=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Kn={ordinalNumber:Gn,era:N({values:zn,defaultWidth:`wide`}),quarter:N({values:Bn,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Vn,defaultWidth:`wide`}),day:N({values:Hn,defaultWidth:`wide`}),dayPeriod:N({values:Un,defaultWidth:`wide`,formattingValues:Wn,defaultFormattingWidth:`wide`})}}));function F(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Yn(s,e=>e.test(o)):Jn(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Jn(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Yn(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}var I=t((()=>{}));function L(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var R=t((()=>{})),Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr=t((()=>{I(),R(),Xn=/^(\d+)(th|st|nd|rd)?/i,Zn=/\d+/i,Qn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$n={any:[/^b/i,/^(a|c)/i]},er={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},tr={any:[/1/i,/2/i,/3/i,/4/i]},nr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ir={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ar={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},or={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},sr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},cr={ordinalNumber:L({matchPattern:Xn,parsePattern:Zn,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Qn,defaultMatchWidth:`wide`,parsePatterns:$n,defaultParseWidth:`any`}),quarter:F({matchPatterns:er,defaultMatchWidth:`wide`,parsePatterns:tr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:nr,defaultMatchWidth:`wide`,parsePatterns:rr,defaultParseWidth:`any`}),day:F({matchPatterns:ir,defaultMatchWidth:`wide`,parsePatterns:ar,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:or,defaultMatchWidth:`any`,parsePatterns:sr,defaultParseWidth:`any`})}})),ur,dr=t((()=>{An(),Fn(),Rn(),qn(),lr(),ur={code:`en-US`,formatDistance:kn,formatLong:Pn,formatRelative:Ln,localize:Kn,match:cr,options:{weekStartsOn:0,firstWeekContainsDate:1}}})),fr=t((()=>{dr()}));function pr(e,t){let n=b(e,t?.in);return Qe(n,fn(n))+1}var mr=t((()=>{$e(),pn(),x()}));function hr(e,t){let n=b(e,t?.in),r=D(n)-+et(n);return Math.round(r/Oe)+1}var gr=t((()=>{_(),O(),tt(),x()}));function _r(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=C(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=T(o,t),c=v(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=T(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}var vr=t((()=>{w(),y(),E(),x()}));function yr(e,t){let n=C(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=_r(e,t),a=v(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),T(a,t)}var br=t((()=>{w(),y(),vr(),E()}));function xr(e,t){let n=b(e,t?.in),r=T(n,t)-+yr(n,t);return Math.round(r/Oe)+1}var Sr=t((()=>{_(),E(),br(),x()}));function z(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var Cr=t((()=>{})),B,wr=t((()=>{Cr(),B={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return z(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):z(n+1,2)},d(e,t){return z(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return z(e.getHours()%12||12,t.length)},H(e,t){return z(e.getHours(),t.length)},m(e,t){return z(e.getMinutes(),t.length)},s(e,t){return z(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return z(Math.trunc(r*10**(n-3)),t.length)}}}));function Tr(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+z(a,2)}function Er(e,t){return e%60==0?(e>0?`-`:`+`)+z(Math.abs(e)/60,2):V(e,t)}function V(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=z(Math.trunc(r/60),2),a=z(r%60,2);return n+i+t+a}var H,Dr,Or=t((()=>{mr(),gr(),qe(),Sr(),vr(),Cr(),wr(),H={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},Dr={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return B.y(e,t)},Y:function(e,t,n,r){let i=_r(e,r),a=i>0?i:1-i;return t===`YY`?z(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):z(a,t.length)},R:function(e,t){return z(Ke(e),t.length)},u:function(e,t){return z(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return z(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return z(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return B.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return z(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=xr(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):z(i,t.length)},I:function(e,t,n){let r=hr(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):z(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):B.d(e,t)},D:function(e,t,n){let r=pr(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):z(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return z(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return z(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return z(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?H.noon:r===0?H.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?H.evening:r>=12?H.afternoon:r>=4?H.morning:H.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return B.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):B.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):z(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):z(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):B.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):B.s(e,t)},S:function(e,t){return B.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return Er(r);case`XXXX`:case`XX`:return V(r);default:return V(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return Er(r);case`xxxx`:case`xx`:return V(r);default:return V(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+Tr(r,`:`);default:return`GMT`+V(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+Tr(r,`:`);default:return`GMT`+V(r,`:`)}},t:function(e,t,n){return z(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return z(+e,t.length)}}})),kr,Ar,jr,Mr,Nr=t((()=>{kr=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},Ar=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},jr=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return kr(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`});break}return a.replace(`{{date}}`,kr(r,t)).replace(`{{time}}`,Ar(i,t))},Mr={p:Ar,P:jr}}));function Pr(e){return Rr.test(e)}function Fr(e){return zr.test(e)}function Ir(e,t,n){let r=Lr(e,t,n);if(console.warn(r),Br.includes(e))throw RangeError(r)}function Lr(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Rr,zr,Br,Vr=t((()=>{Rr=/^D+$/,zr=/^Y+$/,Br=[`D`,`DD`,`YY`,`YYYY`]}));function U(e,t,n){let r=C(),i=n?.locale??r.locale??ur,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=b(e,n?.in);if(!Tt(s))throw RangeError(`Invalid time value`);let c=t.match(Wr).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=Mr[t];return n(e,i.formatLong)}return e}).join(``).match(Ur).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Hr(e)};if(Dr[t])return{isToken:!0,value:e};if(t.match(qr))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&Fr(a)||!n?.useAdditionalDayOfYearTokens&&Pr(a))&&Ir(a,t,String(e));let o=Dr[a[0]];return o(s,a,i.localize,l)}).join(``)}function Hr(e){let t=e.match(Gr);return t?t[1].replace(Kr,`'`):e}var Ur,Wr,Gr,Kr,qr,Jr=t((()=>{fr(),w(),Or(),Nr(),Vr(),Et(),x(),Ur=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Wr=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gr=/^'([^]*?)'?$/,Kr=/''/g,qr=/[a-zA-Z]/})),Yr=t((()=>{})),Xr=t((()=>{})),Zr=t((()=>{})),Qr=t((()=>{})),$r=t((()=>{}));function ei(e,t){let n=b(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=z(n.getDate(),2),t=z(n.getMonth()+1,2);a=`${z(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=z(Math.trunc(t/60),2),r=z(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=z(n.getHours(),2),r=z(n.getMinutes(),2),i=z(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}var ti=t((()=>{Cr(),x()})),ni=t((()=>{})),ri=t((()=>{})),ii=t((()=>{})),ai=t((()=>{})),oi=t((()=>{})),si=t((()=>{}));function ci(e,t){return b(e,t?.in).getDate()}var li=t((()=>{x()}));function ui(e,t){return b(e,t?.in).getDay()}var di=t((()=>{x()})),fi=t((()=>{})),pi=t((()=>{})),mi=t((()=>{})),hi=t((()=>{})),gi=t((()=>{})),_i=t((()=>{})),vi=t((()=>{})),yi=t((()=>{})),bi=t((()=>{})),xi=t((()=>{})),Si=t((()=>{})),Ci=t((()=>{})),wi=t((()=>{})),Ti=t((()=>{})),Ei=t((()=>{}));function Di(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=ci(b(e,t?.in));if(isNaN(i))return NaN;let a=r-ui(cn(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}var Oi=t((()=>{w(),li(),di(),ln(),x()}));function ki(e,t){let n=b(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),b(n,t?.in)}var Ai=t((()=>{x()})),ji=t((()=>{})),Mi=t((()=>{})),Ni=t((()=>{})),Pi=t((()=>{})),Fi=t((()=>{})),Ii=t((()=>{})),Li=t((()=>{})),Ri=t((()=>{})),zi=t((()=>{})),Bi=t((()=>{})),Vi=t((()=>{})),Hi=t((()=>{})),Ui=t((()=>{})),Wi=t((()=>{})),Gi=t((()=>{})),Ki=t((()=>{})),qi=t((()=>{})),Ji=t((()=>{})),Yi=t((()=>{})),Xi=t((()=>{})),Zi=t((()=>{})),Qi=t((()=>{})),$i=t((()=>{})),ea=t((()=>{})),ta=t((()=>{})),na=t((()=>{})),ra=t((()=>{})),ia=t((()=>{})),aa=t((()=>{})),oa=t((()=>{})),sa=t((()=>{})),ca=t((()=>{}));function la(e,t,n){let[r,i]=Xe(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}var ua=t((()=>{Ze()})),da=t((()=>{})),fa=t((()=>{})),pa=t((()=>{})),ma=t((()=>{})),ha=t((()=>{})),ga=t((()=>{})),_a=t((()=>{})),va=t((()=>{})),ya=t((()=>{})),ba=t((()=>{})),xa=t((()=>{})),Sa=t((()=>{})),Ca=t((()=>{}));function wa(e,t){return xt(v(t?.in||e,e),vt(t?.in||e))}var Ta=t((()=>{y(),yt(),St()})),Ea=t((()=>{})),Da=t((()=>{})),Oa=t((()=>{})),ka=t((()=>{}));function Aa(e,t,n){return S(e,-t,n)}var ja=t((()=>{Fe()})),Ma=t((()=>{})),Na=t((()=>{})),Pa=t((()=>{})),Fa=t((()=>{})),Ia=t((()=>{})),La=t((()=>{})),Ra=t((()=>{})),za=t((()=>{})),Ba=t((()=>{})),Va=t((()=>{})),Ha=t((()=>{})),Ua=t((()=>{})),Wa=t((()=>{})),Ga=t((()=>{})),Ka=t((()=>{})),qa=t((()=>{})),Ja=t((()=>{})),Ya=t((()=>{})),Xa=t((()=>{})),Za=t((()=>{})),Qa=t((()=>{})),$a=t((()=>{})),eo=t((()=>{})),to=t((()=>{})),no=t((()=>{})),ro=t((()=>{})),io=t((()=>{})),ao=t((()=>{})),oo=t((()=>{})),so=t((()=>{})),co=t((()=>{})),lo=t((()=>{})),uo=t((()=>{})),fo=t((()=>{})),po=t((()=>{})),mo=t((()=>{})),ho=t((()=>{})),go=t((()=>{})),_o=t((()=>{})),vo=t((()=>{})),yo=t((()=>{})),bo=t((()=>{})),xo=t((()=>{})),So=t((()=>{})),Co=t((()=>{})),wo=t((()=>{})),To=t((()=>{})),Eo=t((()=>{})),Do=t((()=>{})),Oo=t((()=>{})),ko=t((()=>{})),Ao=t((()=>{})),jo=t((()=>{})),Mo=t((()=>{})),No=t((()=>{}));function Po(e){return k(Date.now(),e)}var Fo=t((()=>{A()})),Io=t((()=>{})),Lo=t((()=>{}));function Ro(e,t,n){return Ie(e,-t,n)}var zo=t((()=>{Le()})),Bo=t((()=>{})),Vo=t((()=>{})),Ho=t((()=>{})),Uo=t((()=>{})),Wo=t((()=>{})),Go=t((()=>{})),Ko=t((()=>{})),qo=t((()=>{})),Jo=t((()=>{})),Yo=t((()=>{})),Xo=t((()=>{})),Zo=t((()=>{})),Qo=t((()=>{})),$o=t((()=>{Re(),He(),Fe(),We(),rt(),Ue(),it(),Le(),at(),ot(),ct(),lt(),ut(),pt(),mt(),ht(),gt(),_t(),y(),yt(),bt(),Dt(),$e(),Ot(),kt(),At(),Mt(),Nt(),Pt(),Ft(),It(),Rt(),zt(),Bt(),Wt(),Gt(),Kt(),qt(),Jt(),Qt(),$t(),en(),tn(),rn(),on(),sn(),un(),mn(),hn(),Vt(),gn(),_n(),bn(),xn(),Sn(),Ht(),Cn(),wn(),Tn(),En(),yn(),dn(),Dn(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ti(),ni(),ri(),ii(),ai(),oi(),si(),li(),di(),mr(),fi(),mi(),hi(),gi(),_i(),vi(),gr(),qe(),yi(),bi(),xi(),Si(),Ci(),jt(),wi(),Ti(),Ei(),Sr(),Oi(),vr(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),wt(),Hi(),Ui(),Wi(),Gi(),Ki(),Ut(),pi(),$i(),ea(),ta(),St(),ra(),aa(),oa(),ca(),ua(),da(),pa(),ia(),ma(),ze(),Be(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),Ta(),Ea(),Da(),Et(),Oa(),Ve(),ka(),Ma(),Na(),Fa(),Ia(),Ai(),La(),Pa(),Ra(),za(),dt(),Ba(),Va(),Ha(),Ua(),ft(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),Qi(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),So(),Co(),Xi(),wo(),To(),Eo(),Zi(),Yi(),nt(),Do(),Oo(),xo(),ko(),Ao(),Ji(),jo(),Mo(),A(),No(),na(),O(),tt(),sa(),ln(),nn(),fa(),Fo(),Io(),E(),br(),pn(),Lo(),Bo(),Vo(),ja(),Ho(),Lt(),Uo(),Wo(),zo(),Go(),Ko(),qo(),Jo(),x(),qi(),Yo(),Xo(),Zo(),Qo()})),es=t((()=>{})),ts=t((()=>{})),ns=t((()=>{})),rs=t((()=>{})),is=t((()=>{})),as=t((()=>{})),os=t((()=>{})),ss=t((()=>{})),cs=t((()=>{})),ls=t((()=>{})),us=t((()=>{})),ds=t((()=>{})),fs=t((()=>{})),ps=t((()=>{})),ms=t((()=>{})),hs=t((()=>{})),gs=t((()=>{})),_s,vs,ys=t((()=>{_s={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},vs=(e,t,n)=>{let r,i=_s[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})),bs,xs,Ss,Cs,ws=t((()=>{M(),bs={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},xs={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ss={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Cs={date:j({formats:bs,defaultWidth:`full`}),time:j({formats:xs,defaultWidth:`full`}),dateTime:j({formats:Ss,defaultWidth:`full`})}})),Ts,Es,Ds=t((()=>{Ts={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},Es=(e,t,n,r)=>Ts[e]})),Os,ks,As,js,Ms,Ns,Ps,Fs,Is=t((()=>{P(),Os={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},ks={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},As={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},js={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Ms={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},Ns={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},Ps=(e,t)=>Number(e)+`.`,Fs={ordinalNumber:Ps,era:N({values:Os,defaultWidth:`wide`}),quarter:N({values:ks,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:As,defaultWidth:`wide`}),day:N({values:js,defaultWidth:`wide`}),dayPeriod:N({values:Ms,defaultWidth:`wide`,formattingValues:Ns,defaultFormattingWidth:`wide`})}})),Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs=t((()=>{I(),R(),Ls=/^(\d+)(\.)?/i,Rs=/\d+/i,zs={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},Bs={any:[/^f/i,/^(v|e)/i]},Vs={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Hs={any:[/1/i,/2/i,/3/i,/4/i]},Us={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Ws={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gs={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Ks={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},qs={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},Js={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Ys={ordinalNumber:L({matchPattern:Ls,parsePattern:Rs,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:zs,defaultMatchWidth:`wide`,parsePatterns:Bs,defaultParseWidth:`any`}),quarter:F({matchPatterns:Vs,defaultMatchWidth:`wide`,parsePatterns:Hs,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Us,defaultMatchWidth:`wide`,parsePatterns:Ws,defaultParseWidth:`any`}),day:F({matchPatterns:Gs,defaultMatchWidth:`wide`,parsePatterns:Ks,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:qs,defaultMatchWidth:`any`,parsePatterns:Js,defaultParseWidth:`any`})}})),Zs,Qs=t((()=>{ys(),ws(),Ds(),Is(),Xs(),Zs={code:`da`,formatDistance:vs,formatLong:Cs,formatRelative:Es,localize:Fs,match:Ys,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),$s=t((()=>{})),ec=t((()=>{})),tc=t((()=>{})),nc=t((()=>{})),rc=t((()=>{})),ic,ac,oc,sc,cc=t((()=>{M(),ic={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},ac={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},oc={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},sc={date:j({formats:ic,defaultWidth:`full`}),time:j({formats:ac,defaultWidth:`full`}),dateTime:j({formats:oc,defaultWidth:`full`})}})),lc,uc=t((()=>{An(),Rn(),qn(),lr(),cc(),lc={code:`en-GB`,formatDistance:kn,formatLong:sc,formatRelative:Ln,localize:Kn,match:cr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),dc=t((()=>{})),fc=t((()=>{})),pc=t((()=>{})),mc=t((()=>{})),hc=t((()=>{})),gc=t((()=>{})),_c=t((()=>{})),vc=t((()=>{})),yc=t((()=>{}));function bc(e){return e.replace(/sekuntia?/,`sekunnin`)}function xc(e){return e.replace(/minuuttia?/,`minuutin`)}function Sc(e){return e.replace(/tuntia?/,`tunnin`)}function Cc(e){return e.replace(/päivää?/,`päivän`)}function wc(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Tc(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function W(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Ec,Dc,Oc=t((()=>{Ec={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:bc},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:bc},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:xc},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:xc},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Sc},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Sc},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Cc},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:wc},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:wc},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Tc},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Tc},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:W},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:W},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:W},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:W}},Dc=(e,t,n)=>{let r=Ec[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})),kc,Ac,jc,Mc,Nc=t((()=>{M(),kc={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Ac={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},jc={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Mc={date:j({formats:kc,defaultWidth:`full`}),time:j({formats:Ac,defaultWidth:`full`}),dateTime:j({formats:jc,defaultWidth:`full`})}})),Pc,Fc,Ic=t((()=>{Pc={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},Fc=(e,t,n,r)=>Pc[e]})),Lc,Rc,G,zc,K,Bc,Vc,Hc,Uc,Wc=t((()=>{P(),Lc={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},Rc={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},G={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},zc={narrow:G.narrow,abbreviated:G.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},K={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},Bc={narrow:K.narrow,short:K.short,abbreviated:K.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},Vc={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},Hc=(e,t)=>Number(e)+`.`,Uc={ordinalNumber:Hc,era:N({values:Lc,defaultWidth:`wide`}),quarter:N({values:Rc,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:G,defaultWidth:`wide`,formattingValues:zc,defaultFormattingWidth:`wide`}),day:N({values:K,defaultWidth:`wide`,formattingValues:Bc,defaultFormattingWidth:`wide`}),dayPeriod:N({values:Vc,defaultWidth:`wide`})}})),Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il=t((()=>{I(),R(),Gc=/^(\d+)(\.)/i,Kc=/\d+/i,qc={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},Jc={any:[/^e/i,/^j/i]},Yc={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},Xc={any:[/1/i,/2/i,/3/i,/4/i]},Zc={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},Qc={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},$c={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},el={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},tl={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},nl={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},rl={ordinalNumber:L({matchPattern:Gc,parsePattern:Kc,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:qc,defaultMatchWidth:`wide`,parsePatterns:Jc,defaultParseWidth:`any`}),quarter:F({matchPatterns:Yc,defaultMatchWidth:`wide`,parsePatterns:Xc,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Zc,defaultMatchWidth:`wide`,parsePatterns:Qc,defaultParseWidth:`any`}),day:F({matchPatterns:$c,defaultMatchWidth:`wide`,parsePatterns:el,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:tl,defaultMatchWidth:`any`,parsePatterns:nl,defaultParseWidth:`any`})}})),al,ol=t((()=>{Oc(),Nc(),Ic(),Wc(),il(),al={code:`fi`,formatDistance:Dc,formatLong:Mc,formatRelative:Fc,localize:Uc,match:rl,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),sl=t((()=>{})),cl=t((()=>{})),ll=t((()=>{})),ul=t((()=>{})),dl=t((()=>{})),fl=t((()=>{})),pl=t((()=>{})),ml=t((()=>{})),hl=t((()=>{})),gl=t((()=>{})),_l=t((()=>{})),vl=t((()=>{})),yl=t((()=>{})),bl=t((()=>{})),xl=t((()=>{})),Sl=t((()=>{})),Cl=t((()=>{})),wl=t((()=>{})),Tl=t((()=>{})),El=t((()=>{})),Dl=t((()=>{})),Ol=t((()=>{})),kl=t((()=>{})),Al=t((()=>{})),jl=t((()=>{})),Ml=t((()=>{})),Nl=t((()=>{})),Pl=t((()=>{})),Fl=t((()=>{})),Il=t((()=>{})),Ll=t((()=>{})),Rl,zl,Bl=t((()=>{Rl={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},zl=(e,t,n)=>{let r,i=Rl[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})),Vl,Hl,Ul,Wl,Gl=t((()=>{M(),Vl={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Hl={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ul={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Wl={date:j({formats:Vl,defaultWidth:`full`}),time:j({formats:Hl,defaultWidth:`full`}),dateTime:j({formats:Ul,defaultWidth:`full`})}})),Kl,ql,Jl=t((()=>{Kl={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},ql=(e,t,n,r)=>Kl[e]})),Yl,Xl,Zl,Ql,$l,eu,tu,nu=t((()=>{P(),Yl={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Xl={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Zl={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Ql={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},$l={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},eu=(e,t)=>Number(e)+`.`,tu={ordinalNumber:eu,era:N({values:Yl,defaultWidth:`wide`}),quarter:N({values:Xl,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Zl,defaultWidth:`wide`}),day:N({values:Ql,defaultWidth:`wide`}),dayPeriod:N({values:$l,defaultWidth:`wide`})}})),ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu=t((()=>{I(),R(),ru=/^(\d+)\.?/i,iu=/\d+/i,au={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ou={any:[/^f/i,/^e/i]},su={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},cu={any:[/1/i,/2/i,/3/i,/4/i]},lu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},uu={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},du={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},fu={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},pu={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},mu={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},hu={ordinalNumber:L({matchPattern:ru,parsePattern:iu,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:au,defaultMatchWidth:`wide`,parsePatterns:ou,defaultParseWidth:`any`}),quarter:F({matchPatterns:su,defaultMatchWidth:`wide`,parsePatterns:cu,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:lu,defaultMatchWidth:`wide`,parsePatterns:uu,defaultParseWidth:`any`}),day:F({matchPatterns:du,defaultMatchWidth:`wide`,parsePatterns:fu,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:pu,defaultMatchWidth:`any`,parsePatterns:mu,defaultParseWidth:`any`})}})),_u,vu=t((()=>{Bl(),Gl(),Jl(),nu(),gu(),_u={code:`nb`,formatDistance:zl,formatLong:Wl,formatRelative:ql,localize:tu,match:hu,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),yu=t((()=>{})),bu=t((()=>{})),xu=t((()=>{})),Su=t((()=>{})),Cu=t((()=>{})),wu=t((()=>{})),Tu=t((()=>{})),Eu=t((()=>{})),Du=t((()=>{})),Ou=t((()=>{})),ku=t((()=>{})),Au=t((()=>{})),ju=t((()=>{})),Mu=t((()=>{})),Nu=t((()=>{})),Pu,Fu,Iu,Lu=t((()=>{Pu={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},Fu=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],Iu=(e,t,n)=>{let r,i=Pu[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?Fu[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})),Ru,zu,Bu,Vu,Hu=t((()=>{M(),Ru={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},zu={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Bu={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Vu={date:j({formats:Ru,defaultWidth:`full`}),time:j({formats:zu,defaultWidth:`full`}),dateTime:j({formats:Bu,defaultWidth:`full`})}})),Uu,Wu,Gu=t((()=>{Uu={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Wu=(e,t,n,r)=>Uu[e]})),Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed=t((()=>{P(),Ku={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},qu={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Ju={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Yu={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Xu={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Zu={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Qu=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},$u={ordinalNumber:Qu,era:N({values:Ku,defaultWidth:`wide`}),quarter:N({values:qu,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Ju,defaultWidth:`wide`}),day:N({values:Yu,defaultWidth:`wide`}),dayPeriod:N({values:Xu,defaultWidth:`wide`,formattingValues:Zu,defaultFormattingWidth:`wide`})}})),td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md=t((()=>{I(),R(),td=/^(\d+)(:a|:e)?/i,nd=/\d+/i,rd={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},id={any:[/^f/i,/^[ev]/i]},ad={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},od={any:[/1/i,/2/i,/3/i,/4/i]},sd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},cd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ld={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},ud={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},dd={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},fd={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},pd={ordinalNumber:L({matchPattern:td,parsePattern:nd,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:rd,defaultMatchWidth:`wide`,parsePatterns:id,defaultParseWidth:`any`}),quarter:F({matchPatterns:ad,defaultMatchWidth:`wide`,parsePatterns:od,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:sd,defaultMatchWidth:`wide`,parsePatterns:cd,defaultParseWidth:`any`}),day:F({matchPatterns:ld,defaultMatchWidth:`wide`,parsePatterns:ud,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:dd,defaultMatchWidth:`any`,parsePatterns:fd,defaultParseWidth:`any`})}})),hd,gd=t((()=>{Lu(),Hu(),Gu(),ed(),md(),hd={code:`sv`,formatDistance:Iu,formatLong:Vu,formatRelative:Wu,localize:$u,match:pd,options:{weekStartsOn:1,firstWeekContainsDate:4}}})),_d=t((()=>{})),vd=t((()=>{})),yd=t((()=>{})),bd=t((()=>{})),xd=t((()=>{})),Sd=t((()=>{})),Cd=t((()=>{})),wd=t((()=>{})),Td=t((()=>{})),Ed=t((()=>{})),Dd=t((()=>{})),Od=t((()=>{})),kd=t((()=>{es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),Qs(),$s(),ec(),tc(),nc(),rc(),uc(),dc(),fc(),pc(),dr(),mc(),hc(),gc(),_c(),vc(),yc(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od()})),Ad,jd,Md,Nd=t((()=>{ne(),te(),Ad=`important`,jd=` !important`,Md=re(class extends a{constructor(e){if(super(e),e.type!==ae.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(jd);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ad:``):n[e]=r}}return ie}})})),Pd=t((()=>{Nd()})),Fd,Id=t((()=>{Fd=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"],"textarea.label.optional":["Valgfri"]}`)})),Ld,Rd=t((()=>{Ld=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),zd,Bd=t((()=>{zd=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Vd,Hd=t((()=>{Vd=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"],"textarea.label.optional":["Valgfri"]}`)})),Ud,Wd=t((()=>{Ud=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})),Gd,Kd,qd,Jd=t((()=>{c(),Gd=d`
	/* Label component tokens with semantic fallbacks */
	label {
		/* Internal tokens - not part of public API */
		--_color: var(--w-c-input-label-color, var(--w-s-color-text));
		--_font-size: var(--w-c-input-label-font-size, var(--w-font-size-s));
		--_line-height: var(--w-c-input-label-line-height, var(--w-line-height-s));
		--_font-weight: var(--w-c-input-label-font-weight, 700);
		--_padding-bottom: var(--w-c-input-label-padding-bottom, 0.4rem);
		--_cursor: var(--w-c-input-label-cursor, pointer);
		--_display: var(--w-c-input-label-display, block);

		/* Apply styles */
		display: var(--_display);
		position: relative;
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		font-weight: var(--_font-weight);
		padding-bottom: var(--_padding-bottom);
		cursor: var(--_cursor);
		color: var(--_color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Optional text styling */
	label span {
		--_padding-left: var(--w-c-input-optional-padding-left, 0.8rem);
		--_font-weight: var(--w-c-input-optional-font-weight, 400);
		--_font-size: var(--w-c-input-optional-font-size, var(--w-font-size-s));
		--_line-height: var(
			--w-c-input-optional-line-height,
			var(--w-line-height-s)
		);
		--_color: var(--w-c-input-optional-color, var(--w-s-color-text-subtle));

		padding-left: var(--_padding-left);
		font-weight: var(--_font-weight);
		font-size: var(--_font-size);
		line-height: var(--_line-height);
		color: var(--_color);
	}

	[part="tooltip-target"] {
		appearance: none;
		background: transparent;
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}
`,Kd=d`
	/* Help text component tokens with semantic fallbacks */
	:host {
		--_help-text-color: var(
			--w-c-input-help-text-color,
			var(--w-s-color-text-subtle)
		);
		--_help-text-font-size: var(
			--w-c-input-help-text-font-size,
			var(--w-font-size-xs)
		);
		--_help-text-line-height: var(
			--w-c-input-help-text-line-height,
			var(--w-line-height-xs)
		);
		--_help-text-margin-top: var(--w-c-input-help-text-margin-top, 0.4rem);
		--_help-text-display: var(--w-c-input-help-text-display, block);
	}

	/* Invalid state overrides color */
	:host([invalid]) {
		--_help-text-color: var(
			--w-c-input-help-text-color-invalid,
			var(--w-s-color-text-negative)
		);
	}

	.help-text {
		font-size: var(--_help-text-font-size);
		line-height: var(--_help-text-line-height);
		margin-top: var(--_help-text-margin-top);
		display: var(--_help-text-display);
		color: var(--_help-text-color);
	}
`,qd=d`
	/* CustomDatePicker.css */

	/* container */
	.w-datepicker-wrapper {
		position: relative;
		display: inline-block;
		width: 100%;
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height-m);
	}
	.w-datepicker-input-wrapper {
		position: relative;
	}
	/* hide the browser’s calendar icon, and prevent the native popup */
	.w-datepicker-input {
		/* remove default arrows/appearance */
		-webkit-appearance: none;
		-moz-appearance: textfield;
		appearance: none;

		/* basic styling */
		display: block;
		padding: 1.2rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 100%;
		height: 48px;
		cursor: pointer;
		font-size: var(--w-font-size-m);
		line-height: var(--w-line-height-m);
		background-color: var(--w-s-color-background);
	}
	.w-datepicker-input:hover {
		border-color: var(--w-s-color-border-hover);
	}
	.w-datepicker-input:active {
		border-color: var(--w-s-color-border-selected);
	}

	.w-datepicker-input:focus,
	.w-datepicker-input:focus-visible {
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: -2px;
	}

	/* custom calendar button */
	.w-datepicker-button {
		--padding-x: 14px;
		--padding-y: 14px;
		--border-radius: 2px; /* override to better fit inside the input field */
		position: absolute;
		right: 2px;
		top: 2px;
		pointer-events: auto; /* override parent’s none */
	}

	input[type="date"]::-webkit-inner-spin-button,
	input[type="date"]::-webkit-calendar-picker-indicator {
		display: none;
		-webkit-appearance: none;
	}
	input[type="date"],
	input[type="time"],
	input[type="datetime-local"],
	input[type="month"] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	/* Temporary dropdown, should probably use the appropriate component when it is done */
	.w-dropdown__popover {
		position: absolute;
		width: max-content;
		background-color: var(--w-s-color-background);
		box-shadow: var(--w-shadow-s);
		z-index: 100;
		border-radius: 8px;
		visibility: hidden;
	}
	.w-dropdown__popover--open {
		visibility: visible;
	}
`})),Yd,Xd=t((()=>{c(),Yd=d`
	.w-datepicker__calendar {
		--_calendar-border-color: var(--calendar-border-color, initial);
		--_calendar-border-style: var(--calendar-border-style, none);
		--_calendar-border-width: var(--calendar-border-width, 0);
		--_calendar-border-radius: var(--calendar-border-radius, 0);
		position: relative;
		z-index: 30;

		border: var(--_calendar-border-width) var(--_calendar-border-style)
			var(--_calendar-border-color);
		border-radius: var(--_calendar-border-radius);
		padding: 16px;
	}
`})),Zd,Qd=t((()=>{c(),Zd=d`
	/* === Day Cell === */
	.w-datepicker__day {
		/* No longer in use? */
		--_day-in-range-background: var(
			--day-in-range-background,
			var(--w-s-color-background-primary-subtle-active)
		);

		text-align: center;
		cursor: pointer;
		outline: none;
		position: relative;

		color: var(--day-color, var(--w-s-color-text));
		background-color: var(--day-background, transparent);
		width: var(--day-width, 40px);
		height: var(--day-height, 40px);
		padding: var(--day-padding, 0);
		font-weight: var(--day-font-weight, normal);
		font-size: var(--w-font-size-s);
		line-height: var(--w-line-height-s);
		border-radius: var(--day-border-radius, 50%);
	}

	.w-datepicker__day:hover {
		--day-color: var(--w-s-color-text);
		--day-background: var(--w-s-color-background-hover);
		--day-border-radius: 50%;
	}
	.w-datepicker__day:active {
		--day-color: var(--w-s-color-text);
		--day-background: var(--w-s-color-background-active);
		--day-border-radius: 50%;
	}

	.w-datepicker__day:focus-visible {
		text-decoration: none;
		outline: 2px solid var(--w-s-color-border-focus);
		outline-offset: var(--w-outline-offset, -2px);
	}

	/* === Day variants === */
	.w-datepicker__day--today {
		--day-font-weight: bold;
	}

	.w-datepicker__day--selected {
		--day-background: var(--w-s-color-background-primary);
		--day-color: var(--w-s-color-text-inverted);
		--day-font-weight: bold;
	}
	.w-datepicker__day--selected:hover,
	.w-datepicker__day--selected:focus-visible {
		--day-background: var(--w-s-color-background-primary-hover);
		--day-color: var(--w-s-color-text-inverted);
		--day-font-weight: bold;
	}

	.w-datepicker__day--disabled,
	.w-datepicker__day--disabled:hover {
		--day-color: var(--w-s-color-text-disabled);
		cursor: not-allowed;
		pointer-events: none;
	}
`})),$d,ef=t((()=>{c(),$d=d`
	.w-datepicker__month {
		/* Sets default used in the day fragment */
		--day-width: 40px;

		--_month-color: var(--month-color, var(--w-s-color-text));
		--_month-font-size: var(--month-font-size, var(--w-font-size-m));
		--_month-line-height: var(--month-line-height, var(--w-line-height-m));

		--_month-table-min-width: var(
			--month-table-min-width,
			calc(var(--day-width) * 7)
		);

		--_weekdays-font-size: var(--weekdays-font-size, var(--w-font-size-xs));
		--_weekdays-line-height: var(--weekdays-font-size, var(--w-line-height-xs));
		--_weekdays-font-weight: var(--weekdays-font-weight, bold);

		--_weekdays-padding: var(--weekdays-padding, 8px 0 4px 0);

		text-align: center;
		user-select: none;
		display: inline-block;

		color: var(--_month-color);
		font-size: var(--_month-font-size);
		line-height: var(--_month-line-height);
	}

	.w-datepicker__month__nav {
		margin: 0 0 8px 0;
	}

	.w-datepicker__month__nav__header {
		text-align: center;
		font-weight: Bold;
	}

	.w-datepicker__table {
		width: 100%;
		border-spacing: 0;
		border-collapse: collapse;
		display: block;
		min-width: var(--_month-table-min-width);
		padding-top: 8px;
	}

	.w-datepicker__weekday {
		text-align: center;
		font-size: var(--_weekdays-font-size);
		line-height: var(--_weekdays-line-height);
		font-weight: var(--_weekdays-font-weight);
		padding: var(--_weekdays-padding);
	}

	.w-datepicker__month-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.w-datepicker__month__nav__button {
		flex-shrink: 0;
	}

	.w-datepicker__month__nav__header {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`}));function tf(e){if(typeof e!=`string`)return null;let t=e;of.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function nf(e=typeof navigator<`u`?navigator.userAgent:``){let t=sf.test(e),n=cf.test(e)&&!lf.test(e);return t||n?`text`:`date`}function rf(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function af(e,t){if(!of.exec(e))return e;let[n,r,i]=e.split(`-`);return rf(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var of,sf,cf,lf,uf=t((()=>{of=/^\d{4}-\d{2}-\d{2}$/,sf=/iP(hone|od|ad)/,cf=/Safari/,lf=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})),df,q,ff,pf,mf,J,Y,X,hf=t((()=>{s(),be(),$o(),kd(),c(),oe(),fe(),xe(),Pd(),se(),le(),de(),Id(),Rd(),Bd(),Hd(),Wd(),Jd(),Xd(),Qd(),ef(),uf(),pe(),df=nf(),q=`calendar`,ff=`input`,pf=`toggle`,mf=`wrapper`,J=`previous`,Y={en:lc,nb:_u,sv:hd,da:Zs,fi:al},X=class extends ye(ee){static{this.shadowRootOptions={...ee.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[me,Gd,Kd,qd,Yd,Zd,$d]}get selectedDate(){return this.value?tf(this.value)??null:null}get month(){return cn(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=an({start:cn(e),end:ki(e)},{locale:this.locale}).map(e=>({start:e,end:vn(e,{locale:this.locale})})).map(e=>Zt(e));if(la(t,e)){let e=Di(t,{locale:this.locale})-1,r=Qe(t,T(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||n()||`en`}get#n(){return df===`text`&&this.value?af(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Ie(this.month,1)}#a(){this.navigationDate=Ro(this.month,1)}async#o(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#s(e){this.value=e.target.value}#c(){this.#v()}#l(e){e.preventDefault(),this.isCalendarOpen=!0}#u(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#d(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Aa(t,7);break;case`ArrowLeft`:n=Aa(t,1);break;case`Home`:n=T(t,{locale:this.locale});break;case`PageUp`:n=Ro(t,1);break;case`ArrowDown`:n=S(t,7);break;case`ArrowRight`:n=S(t,1);break;case`End`:n=vn(t,{locale:this.locale});break;case`PageDown`:n=Ie(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===J&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus());break}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#f(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.#v(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#o()):(this.value=t,this.input.value=this.#n,this.#v(),this.isCalendarOpen=!1,this.#o())}#p;#m;#h;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Po(),this.locale=lc,this.#e=void 0,this.#p=!1,this.#m=void 0,this.#h=!1,ue(Ld,Vd,zd,Fd,Ud);let e=n();e&&Y[e]&&(this.locale=Y[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#h=!1,this.#_(),this.#v()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#v(),this.internals.checkValidity()}reportValidity(){return this.#h=!0,this.#v(),this.internals.checkValidity()}setCustomValidity(e){e?(this.internals.setValidity({customError:!0},e,this.input),this.#g(e)):(this.#_(),this.#v())}#g(e){this.#p||(this.#m=this.helpText),this.#p=!0,this.invalid=!0,this.helpText=e}#_(){this.#p&&=(this.invalid=!1,this.helpText=this.#m,this.#m=void 0,!1)}#v(){if(this.disabled){this.internals.setValidity({}),this.#_();return}if(this.required&&!this.value){let e=this.input?.validationMessage||``;this.internals.setValidity({valueMissing:!0},e,this.input),this.#h&&this.#g(e);return}this.internals.setValidity({}),this.#_()}connectedCallback(){super.connectedCallback(),this.#e=this.value;let e=this.lang;if(e&&Y[e]&&(this.locale=Y[e]),this.value){let e=tf(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#v()}render(){return o`
			<div class="w-datepicker-wrapper" id="${mf}">
				<label class="w-datepicker-input-label" for="${ff}">
					${this.label}
					${this.optional&&!this.required?o`
								<span>
									${p._({id:`datepicker.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
								</span>
							`:r}
					${this.tooltip?o`
								<button
									id="tooltip-target"
									part="tooltip-target"
									aria-describedby="tooltip"
								>
									<w-icon name="Info" size="small"></w-icon>
								</button>
								<w-tooltip
									for="tooltip-target"
									id="tooltip"
									exportparts="tooltip, arrow, beak, hover-bridge"
								>
									${this.tooltip}
								</w-tooltip>
							`:r}
				</label>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${ff}"
						type="${df}"
						name="${g(this.name)}"
						placeholder="${g(df===`text`?rf(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						?required=${this.required}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						aria-describedby="${g(this.helpText?`help-text`:this.ariaDescription?`aria-description`:void 0)}"
						aria-errormessage="${g(this._error)}"
						aria-invalid=${g(this.invalid?`true`:void 0)}
						@click="${this.#l}"
						@input="${this.#s}"
						@blur="${this.#c}"
						@keydown="${this.#u}"
					/>
					<w-button
						aria-label="${this.value?p.t({id:`datepicker.toggle.changeDate`,values:{currentDate:U(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):p.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${q}"
						class="w-datepicker-button"
						data-testid="${pf}"
						id="${pf}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${n()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?o`<div id="help-text" class="help-text">${this.helpText}</div>`:r}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Md({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${p.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${q}"
					id="${q}"
					@keydown="${this.#d}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${p.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${J}"
							data-testid="${J}"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${n()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${U(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${p.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${q}-next"
							variant="utility"
							quiet
							small
							@click="${this.#i}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${n()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>o`<th class="w-datepicker__weekday">
												${U(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>o`<tr>
											${e.map(e=>{if(!la(this.month,e))return o`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&xt(e,this.selectedDate),r=e===this.navigationDate;return o`<td
													aria-current="${g(wa(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${U(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${ce({"w-datepicker__day":!0,"w-datepicker__day--today":wa(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${ei(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#f}"
													@keydown="${t?void 0:this.#f}"
												>
													<div>${ci(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},f([i({reflect:!0})],X.prototype,`label`,void 0),f([i({type:Boolean,reflect:!0})],X.prototype,`required`,void 0),f([i({type:Boolean,reflect:!0})],X.prototype,`optional`,void 0),f([i({type:String,reflect:!0,attribute:`help-text`})],X.prototype,`helpText`,void 0),f([i({type:Boolean,reflect:!0})],X.prototype,`invalid`,void 0),f([i({type:String,reflect:!0})],X.prototype,`tooltip`,void 0),f([i({reflect:!0})],X.prototype,`lang`,void 0),f([i({reflect:!0})],X.prototype,`name`,void 0),f([i({reflect:!0})],X.prototype,`value`,void 0),f([i({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),f([i({type:Boolean,reflect:!0})],X.prototype,`readonly`,void 0),f([i({attribute:`header-format`})],X.prototype,`headerFormat`,void 0),f([i({attribute:`weekday-format`})],X.prototype,`weekdayFormat`,void 0),f([i({attribute:!1})],X.prototype,`isDayDisabled`,void 0),f([i({attribute:`day-format`})],X.prototype,`dayFormat`,void 0),f([m()],X.prototype,`isCalendarOpen`,void 0),f([m()],X.prototype,`navigationDate`,void 0),f([m()],X.prototype,`locale`,void 0),f([m()],X.prototype,`selectedDate`,null),f([m()],X.prototype,`month`,null),f([m()],X.prototype,`weeks`,null),f([h(`#${q}`)],X.prototype,`calendar`,void 0),f([h(`#${ff}`,!0)],X.prototype,`input`,void 0),f([h(`#${pf}`,!0)],X.prototype,`toggleButton`,void 0),f([h(`#${mf}`,!0)],X.prototype,`wrapper`,void 0),f([h(`#${J}`)],X.prototype,`previousMonthButton`,void 0),f([h(`[aria-current="date"]`)],X.prototype,`todayCell`,void 0),f([h(`[data-navigation="true"]`)],X.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,X)})),gf=e({Default:()=>Z,DisableCalendarDates:()=>$,WithTooltip:()=>Q,__namedExportsOrder:()=>Cf,default:()=>Sf}),_f,vf,yf,bf,xf,Sf,Z,Q,$,Cf,wf=t((()=>{_e(),u(),c(),ve(),Se(),Te(),hf(),Ce(),{events:yf,args:bf,argTypes:xf}=l(`w-datepicker`),Sf={title:`Forms/Datepicker`,render(e){return o(_f||=we([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <form method="get">
                    <w-datepicker `,`></w-datepicker>
                    <script type="module">
                        const picker = document.querySelector("w-datepicker");
                        picker.addEventListener("blur", console.log);
                    <\/script>
                    <input type="submit" hidden />
                </form>
            </div>
        `]),he(ge(e)))},args:bf,argTypes:xf,parameters:{actions:{handles:yf}}},Z={args:{label:`Date`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return o(vf||=we([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker `,`></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        `]),he(ge(e)))}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    optional: true,
    required: false,
    helpText: "Help text is available, but might not be enough, or the added context is not important enough that we use help-text",
    tooltip: "This tooltip adds supplementary information"
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
  },
  render(args) {
    return html\`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker \${spread(prespread(args))}></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        \`;
  }
}`,...$.parameters?.docs?.source}}},Cf=[`Default`,`WithTooltip`,`DisableCalendarDates`]}));wf();export{Z as Default,$ as DisableCalendarDates,Q as WithTooltip,Cf as __namedExportsOrder,Sf as default,wf as n,gf as t};