import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,g as i,h as a,l as o,p as s,r as c,s as l,t as u,y as d}from"./decorate-Bt2QF_uA.js";import{a as f,n as p,o as ee,r as te,t as ne}from"./i18n-CkjYRTT1.js";import{i as re,n as ie,r as ae,t as oe}from"./directive-CZiujxgm.js";import{n as se,t as ce}from"./dist-D5kJVy4t.js";import{t as m}from"./query-BHY-nhsh.js";import{n as le,t as ue}from"./class-map-DaGxfNVq.js";import{t as de}from"./icon-CD69d68Q.js";import{n as fe,t as pe}from"./styles-Cw_r5k83.js";import{i as me,n as he,r as ge}from"./utilities-BHNt5DhH.js";import{n as _e,t as ve}from"./FormControlMixin-BCJbRrUC.js";import{r as ye,t as be}from"./if-defined-DBI32Ir5.js";import{r as xe,t as Se}from"./utils-BRgof-Um.js";import{t as Ce}from"./button-CgJiAHk2.js";import{t as we}from"./taggedTemplateLiteral-BZenJ0bZ.js";var Te,Ee,De,Oe,ke,Ae,je,Me,Ne;function h(){return(h=e((()=>{Te=365.2425,Ee=10**8*24*60*60*1e3,-Ee,De=6048e5,Oe=864e5,ke=3600,Ae=ke*24,Ae*7,je=Ae*Te,Me=je/12,Me*3,Ne=Symbol.for(`constructDateFrom`)})))()}function g(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Ne in e?e[Ne](t):e instanceof Date?new e.constructor(t):new Date(t)}function _(){return(_=e((()=>{h()})))()}function v(e,t){return g(t||e,e)}function y(){return(y=e((()=>{_()})))()}function b(e,t,n){let r=v(e,n?.in);return isNaN(t)?g(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function x(){return(x=e((()=>{_(),y()})))()}function Pe(e,t,n){let r=v(e,n?.in);if(isNaN(t))return g(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=g(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Fe(){return(Fe=e((()=>{_(),y()})))()}function S(){return Ie}var Ie;function C(){return(C=e((()=>{Ie={}})))()}function w(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function T(){return(T=e((()=>{C(),y()})))()}function E(e,t){return w(e,{...t,weekStartsOn:1})}function D(){return(D=e((()=>{T()})))()}function Le(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=g(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=E(i),o=g(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=E(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Re(){return(Re=e((()=>{_(),D(),y()})))()}function ze(e){let t=v(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function Be(){return(Be=e((()=>{y()})))()}function O(e,...t){let n=g.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function k(){return(k=e((()=>{_()})))()}function A(e,t){let n=v(e,t?.in);return n.setHours(0,0,0,0),n}function j(){return(j=e((()=>{y()})))()}function Ve(e,t,n){let[r,i]=O(n?.in,e,t),a=A(r),o=A(i),s=+a-ze(a),c=+o-ze(o);return Math.round((s-c)/Oe)}function He(){return(He=e((()=>{Be(),k(),h(),j()})))()}function Ue(e,t){let n=Le(e,t),r=g(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),E(r)}function We(){return(We=e((()=>{_(),Re(),D()})))()}function Ge(e,t,n){return b(e,t*7,n)}function Ke(){return(Ke=e((()=>{x()})))()}function qe(e){return g(e,Date.now())}function Je(){return(Je=e((()=>{_()})))()}function Ye(e,t,n){let[r,i]=O(n?.in,e,t);return+A(r)==+A(i)}function Xe(){return(Xe=e((()=>{k(),j()})))()}function Ze(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Qe(){return(Qe=e((()=>{})))()}function $e(e){return!(!Ze(e)&&typeof e!=`number`||isNaN(+v(e)))}function et(){return(et=e((()=>{Qe(),y()})))()}function tt(e,t){let[n,r]=O(e,t.start,t.end);return{start:n,end:r}}function nt(){return(nt=e((()=>{k()})))()}function rt(e,t){let{start:n,end:r}=tt(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(g(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function it(){return(it=e((()=>{nt(),_()})))()}function at(e,t){let{start:n,end:r}=tt(t?.in,e),i=+n>+r,a=w(i?r:n,t),o=w(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(g(n,c)),c=Ge(c,l),c.setHours(15);return i?u.reverse():u}function ot(){return(ot=e((()=>{nt(),Ke(),_(),T()})))()}function st(e,t){let n=v(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function ct(){return(ct=e((()=>{y()})))()}function lt(e,t){let n=v(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ut(){return(ut=e((()=>{y()})))()}function dt(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function ft(){return(ft=e((()=>{C(),y()})))()}var pt,mt;function ht(){return(ht=e((()=>{pt={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},mt=(e,t,n)=>{let r,i=pt[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function M(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var gt,_t,vt,yt;function bt(){return(bt=e((()=>{gt={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},_t={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},vt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},yt={date:M({formats:gt,defaultWidth:`full`}),time:M({formats:_t,defaultWidth:`full`}),dateTime:M({formats:vt,defaultWidth:`full`})}})))()}var xt,St;function Ct(){return(Ct=e((()=>{xt={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},St=(e,t,n,r)=>xt[e]})))()}function N(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var wt,Tt,Et,Dt,Ot,kt,At,jt;function Mt(){return(Mt=e((()=>{wt={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Tt={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},Et={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Dt={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},Ot={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},kt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},At=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},jt={ordinalNumber:At,era:N({values:wt,defaultWidth:`wide`}),quarter:N({values:Tt,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Et,defaultWidth:`wide`}),day:N({values:Dt,defaultWidth:`wide`}),dayPeriod:N({values:Ot,defaultWidth:`wide`,formattingValues:kt,defaultFormattingWidth:`wide`})}})))()}function P(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Pt(s,e=>e.test(o)):Nt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Nt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Pt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function F(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt;function Jt(){return(Jt=e((()=>{Ft=/^(\d+)(th|st|nd|rd)?/i,It=/\d+/i,Lt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Rt={any:[/^b/i,/^(a|c)/i]},zt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Bt={any:[/1/i,/2/i,/3/i,/4/i]},Vt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ht={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ut={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Wt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Gt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Kt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},qt={ordinalNumber:F({matchPattern:Ft,parsePattern:It,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Lt,defaultMatchWidth:`wide`,parsePatterns:Rt,defaultParseWidth:`any`}),quarter:P({matchPatterns:zt,defaultMatchWidth:`wide`,parsePatterns:Bt,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:Vt,defaultMatchWidth:`wide`,parsePatterns:Ht,defaultParseWidth:`any`}),day:P({matchPatterns:Ut,defaultMatchWidth:`wide`,parsePatterns:Wt,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Gt,defaultMatchWidth:`any`,parsePatterns:Kt,defaultParseWidth:`any`})}})))()}var Yt;function Xt(){return(Xt=e((()=>{ht(),bt(),Ct(),Mt(),Jt(),Yt={code:`en-US`,formatDistance:mt,formatLong:yt,formatRelative:St,localize:jt,match:qt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function Zt(e,t){let n=v(e,t?.in);return Ve(n,lt(n))+1}function Qt(){return(Qt=e((()=>{He(),ut(),y()})))()}function $t(e,t){let n=v(e,t?.in),r=E(n)-+Ue(n);return Math.round(r/De)+1}function en(){return(en=e((()=>{h(),D(),We(),y()})))()}function tn(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=S(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=g(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=w(o,t),c=g(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=w(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function nn(){return(nn=e((()=>{C(),_(),T(),y()})))()}function rn(e,t){let n=S(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=tn(e,t),a=g(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),w(a,t)}function an(){return(an=e((()=>{C(),_(),nn(),T()})))()}function on(e,t){let n=v(e,t?.in),r=w(n,t)-+rn(n,t);return Math.round(r/De)+1}function sn(){return(sn=e((()=>{h(),T(),an(),y()})))()}function I(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var L;function cn(){return(cn=e((()=>{L={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return I(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):I(n+1,2)},d(e,t){return I(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return I(e.getHours()%12||12,t.length)},H(e,t){return I(e.getHours(),t.length)},m(e,t){return I(e.getMinutes(),t.length)},s(e,t){return I(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return I(Math.trunc(r*10**(n-3)),t.length)}}})))()}function ln(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+I(a,2)}function un(e,t){return e%60==0?(e>0?`-`:`+`)+I(Math.abs(e)/60,2):R(e,t)}function R(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=I(Math.trunc(r/60),2),a=I(r%60,2);return n+i+t+a}var z,dn;function fn(){return(fn=e((()=>{Qt(),en(),Re(),sn(),nn(),cn(),z={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},dn={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return L.y(e,t)},Y:function(e,t,n,r){let i=tn(e,r),a=i>0?i:1-i;return t===`YY`?I(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):I(a,t.length)},R:function(e,t){return I(Le(e),t.length)},u:function(e,t){return I(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return I(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return I(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return L.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return I(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=on(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):I(i,t.length)},I:function(e,t,n){let r=$t(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):I(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):L.d(e,t)},D:function(e,t,n){let r=Zt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):I(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return I(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return I(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return I(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?z.noon:r===0?z.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?z.evening:r>=12?z.afternoon:r>=4?z.morning:z.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return L.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):L.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):I(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):I(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):L.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):L.s(e,t)},S:function(e,t){return L.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return un(r);case`XXXX`:case`XX`:return R(r);default:return R(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return un(r);case`xxxx`:case`xx`:return R(r);default:return R(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+ln(r,`:`);default:return`GMT`+R(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+ln(r,`:`);default:return`GMT`+R(r,`:`)}},t:function(e,t,n){return I(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return I(+e,t.length)}}})))()}var B,pn,mn,hn;function gn(){return(gn=e((()=>{B=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},pn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},mn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return B(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,B(r,t)).replace(`{{time}}`,pn(i,t))},hn={p:pn,P:mn}})))()}function _n(e){return xn.test(e)}function vn(e){return Sn.test(e)}function yn(e,t,n){let r=bn(e,t,n);if(console.warn(r),Cn.includes(e))throw RangeError(r)}function bn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var xn,Sn,Cn;function wn(){return(wn=e((()=>{xn=/^D+$/,Sn=/^Y+$/,Cn=[`D`,`DD`,`YY`,`YYYY`]})))()}function V(e,t,n){let r=S(),i=n?.locale??r.locale??Yt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=v(e,n?.in);if(!$e(s))throw RangeError(`Invalid time value`);let c=t.match(Dn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=hn[t];return n(e,i.formatLong)}return e}).join(``).match(En).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Tn(e)};if(dn[t])return{isToken:!0,value:e};if(t.match(An))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&vn(a)||!n?.useAdditionalDayOfYearTokens&&_n(a))&&yn(a,t,String(e));let o=dn[a[0]];return o(s,a,i.localize,l)}).join(``)}function Tn(e){let t=e.match(On);return t?t[1].replace(kn,`'`):e}var En,Dn,On,kn,An;function jn(){return(jn=e((()=>{Xt(),C(),fn(),gn(),wn(),et(),y(),En=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,On=/^'([^]*?)'?$/,kn=/''/g,An=/[a-zA-Z]/})))()}function Mn(e,t){let n=v(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=I(n.getDate(),2),t=I(n.getMonth()+1,2);a=`${I(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=I(Math.trunc(t/60),2),r=I(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=I(n.getHours(),2),r=I(n.getMinutes(),2),i=I(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function Nn(){return(Nn=e((()=>{y()})))()}function Pn(e,t){return v(e,t?.in).getDate()}function Fn(){return(Fn=e((()=>{y()})))()}function In(e,t){return v(e,t?.in).getDay()}function Ln(){return(Ln=e((()=>{y()})))()}function Rn(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Pn(v(e,t?.in));if(isNaN(i))return NaN;let a=r-In(st(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function zn(){return(zn=e((()=>{C(),Fn(),Ln(),ct(),y()})))()}function Bn(e,t){let n=v(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),v(n,t?.in)}function Vn(){return(Vn=e((()=>{y()})))()}function Hn(e,t,n){let[r,i]=O(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Un(){return(Un=e((()=>{k()})))()}function Wn(e,t){return Ye(g(t?.in||e,e),qe(t?.in||e))}function Gn(){return(Gn=e((()=>{_(),Je(),Xe()})))()}function Kn(e,t,n){return b(e,-t,n)}function qn(){return(qn=e((()=>{x()})))()}function Jn(e){return A(Date.now(),e)}function Yn(){return(Yn=e((()=>{j()})))()}function Xn(e,t,n){return Pe(e,-t,n)}function Zn(){return(Zn=e((()=>{Fe()})))()}var Qn,$n;function er(){return(er=e((()=>{Qn={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},$n=(e,t,n)=>{let r,i=Qn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var tr,nr,rr,ir;function ar(){return(ar=e((()=>{tr={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},nr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},rr={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ir={date:M({formats:tr,defaultWidth:`full`}),time:M({formats:nr,defaultWidth:`full`}),dateTime:M({formats:rr,defaultWidth:`full`})}})))()}var or,sr;function cr(){return(cr=e((()=>{or={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},sr=(e,t,n,r)=>or[e]})))()}var lr,ur,dr,fr,pr,mr,hr,gr;function _r(){return(_r=e((()=>{lr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},ur={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},dr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},fr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},pr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},mr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},hr=(e,t)=>Number(e)+`.`,gr={ordinalNumber:hr,era:N({values:lr,defaultWidth:`wide`}),quarter:N({values:ur,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:dr,defaultWidth:`wide`}),day:N({values:fr,defaultWidth:`wide`}),dayPeriod:N({values:pr,defaultWidth:`wide`,formattingValues:mr,defaultFormattingWidth:`wide`})}})))()}var vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar;function jr(){return(jr=e((()=>{vr=/^(\d+)(\.)?/i,yr=/\d+/i,br={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},xr={any:[/^f/i,/^(v|e)/i]},Sr={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Cr={any:[/1/i,/2/i,/3/i,/4/i]},wr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Tr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Er={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Dr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Or={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},kr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Ar={ordinalNumber:F({matchPattern:vr,parsePattern:yr,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:br,defaultMatchWidth:`wide`,parsePatterns:xr,defaultParseWidth:`any`}),quarter:P({matchPatterns:Sr,defaultMatchWidth:`wide`,parsePatterns:Cr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:wr,defaultMatchWidth:`wide`,parsePatterns:Tr,defaultParseWidth:`any`}),day:P({matchPatterns:Er,defaultMatchWidth:`wide`,parsePatterns:Dr,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Or,defaultMatchWidth:`any`,parsePatterns:kr,defaultParseWidth:`any`})}})))()}var Mr;function Nr(){return(Nr=e((()=>{er(),ar(),cr(),_r(),jr(),Mr={code:`da`,formatDistance:$n,formatLong:ir,formatRelative:sr,localize:gr,match:Ar,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Pr,Fr,Ir,Lr;function Rr(){return(Rr=e((()=>{Pr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Fr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ir={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Lr={date:M({formats:Pr,defaultWidth:`full`}),time:M({formats:Fr,defaultWidth:`full`}),dateTime:M({formats:Ir,defaultWidth:`full`})}})))()}var zr;function Br(){return(Br=e((()=>{ht(),Ct(),Mt(),Jt(),Rr(),zr={code:`en-GB`,formatDistance:mt,formatLong:Lr,formatRelative:St,localize:jt,match:qt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Vr(e){return e.replace(/sekuntia?/,`sekunnin`)}function Hr(e){return e.replace(/minuuttia?/,`minuutin`)}function Ur(e){return e.replace(/tuntia?/,`tunnin`)}function Wr(e){return e.replace(/päivää?/,`päivän`)}function Gr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Kr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function H(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var qr,Jr;function Yr(){return(Yr=e((()=>{qr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Vr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Vr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Hr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Hr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Ur},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Ur},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Wr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Gr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Gr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Kr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Kr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:H},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:H},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:H},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:H}},Jr=(e,t,n)=>{let r=qr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{Xr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Zr={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},Qr={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},$r={date:M({formats:Xr,defaultWidth:`full`}),time:M({formats:Zr,defaultWidth:`full`}),dateTime:M({formats:Qr,defaultWidth:`full`})}})))()}var ti,ni;function ri(){return(ri=e((()=>{ti={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},ni=(e,t,n,r)=>ti[e]})))()}var ii,ai,U,oi,W,si,ci,li,ui;function di(){return(di=e((()=>{ii={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ai={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},U={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},oi={narrow:U.narrow,abbreviated:U.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},W={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},si={narrow:W.narrow,short:W.short,abbreviated:W.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},ci={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},li=(e,t)=>Number(e)+`.`,ui={ordinalNumber:li,era:N({values:ii,defaultWidth:`wide`}),quarter:N({values:ai,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:U,defaultWidth:`wide`,formattingValues:oi,defaultFormattingWidth:`wide`}),day:N({values:W,defaultWidth:`wide`,formattingValues:si,defaultFormattingWidth:`wide`}),dayPeriod:N({values:ci,defaultWidth:`wide`})}})))()}var fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi;function Ti(){return(Ti=e((()=>{fi=/^(\d+)(\.)/i,pi=/\d+/i,mi={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},hi={any:[/^e/i,/^j/i]},gi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},_i={any:[/1/i,/2/i,/3/i,/4/i]},vi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},yi={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},bi={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},xi={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},Si={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},Ci={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},wi={ordinalNumber:F({matchPattern:fi,parsePattern:pi,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:mi,defaultMatchWidth:`wide`,parsePatterns:hi,defaultParseWidth:`any`}),quarter:P({matchPatterns:gi,defaultMatchWidth:`wide`,parsePatterns:_i,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:vi,defaultMatchWidth:`wide`,parsePatterns:yi,defaultParseWidth:`any`}),day:P({matchPatterns:bi,defaultMatchWidth:`wide`,parsePatterns:xi,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Si,defaultMatchWidth:`any`,parsePatterns:Ci,defaultParseWidth:`any`})}})))()}var Ei;function Di(){return(Di=e((()=>{Yr(),ei(),ri(),di(),Ti(),Ei={code:`fi`,formatDistance:Jr,formatLong:$r,formatRelative:ni,localize:ui,match:wi,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Oi,ki;function Ai(){return(Ai=e((()=>{Oi={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},ki=(e,t,n)=>{let r,i=Oi[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var ji,Mi,Ni,Pi;function Fi(){return(Fi=e((()=>{ji={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Mi={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ni={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Pi={date:M({formats:ji,defaultWidth:`full`}),time:M({formats:Mi,defaultWidth:`full`}),dateTime:M({formats:Ni,defaultWidth:`full`})}})))()}var Ii,Li;function Ri(){return(Ri=e((()=>{Ii={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Li=(e,t,n,r)=>Ii[e]})))()}var zi,Bi,Vi,Hi,Ui,Wi,Gi;function Ki(){return(Ki=e((()=>{zi={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Bi={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Vi={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Hi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Ui={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Wi=(e,t)=>Number(e)+`.`,Gi={ordinalNumber:Wi,era:N({values:zi,defaultWidth:`wide`}),quarter:N({values:Bi,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Vi,defaultWidth:`wide`}),day:N({values:Hi,defaultWidth:`wide`}),dayPeriod:N({values:Ui,defaultWidth:`wide`})}})))()}var qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa;function oa(){return(oa=e((()=>{qi=/^(\d+)\.?/i,Ji=/\d+/i,Yi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Xi={any:[/^f/i,/^e/i]},Zi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Qi={any:[/1/i,/2/i,/3/i,/4/i]},$i={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ea={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ta={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},na={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ra={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ia={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},aa={ordinalNumber:F({matchPattern:qi,parsePattern:Ji,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Yi,defaultMatchWidth:`wide`,parsePatterns:Xi,defaultParseWidth:`any`}),quarter:P({matchPatterns:Zi,defaultMatchWidth:`wide`,parsePatterns:Qi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:$i,defaultMatchWidth:`wide`,parsePatterns:ea,defaultParseWidth:`any`}),day:P({matchPatterns:ta,defaultMatchWidth:`wide`,parsePatterns:na,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:ra,defaultMatchWidth:`any`,parsePatterns:ia,defaultParseWidth:`any`})}})))()}var sa;function ca(){return(ca=e((()=>{Ai(),Fi(),Ri(),Ki(),oa(),sa={code:`nb`,formatDistance:ki,formatLong:Pi,formatRelative:Li,localize:Gi,match:aa,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var la,ua,da;function fa(){return(fa=e((()=>{la={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},ua=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],da=(e,t,n)=>{let r,i=la[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?ua[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var pa,ma,ha,ga;function _a(){return(_a=e((()=>{pa={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},ma={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ha={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ga={date:M({formats:pa,defaultWidth:`full`}),time:M({formats:ma,defaultWidth:`full`}),dateTime:M({formats:ha,defaultWidth:`full`})}})))()}var va,ya;function ba(){return(ba=e((()=>{va={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},ya=(e,t,n,r)=>va[e]})))()}var xa,Sa,Ca,wa,Ta,Ea,Da,Oa;function ka(){return(ka=e((()=>{xa={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},Sa={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Ca={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},wa={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Ta={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Ea={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Da=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Oa={ordinalNumber:Da,era:N({values:xa,defaultWidth:`wide`}),quarter:N({values:Sa,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:Ca,defaultWidth:`wide`}),day:N({values:wa,defaultWidth:`wide`}),dayPeriod:N({values:Ta,defaultWidth:`wide`,formattingValues:Ea,defaultFormattingWidth:`wide`})}})))()}var Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha;function Ua(){return(Ua=e((()=>{Aa=/^(\d+)(:a|:e)?/i,ja=/\d+/i,Ma={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Na={any:[/^f/i,/^[ev]/i]},Pa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},Fa={any:[/1/i,/2/i,/3/i,/4/i]},Ia={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},La={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ra={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},za={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ba={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Va={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ha={ordinalNumber:F({matchPattern:Aa,parsePattern:ja,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Ma,defaultMatchWidth:`wide`,parsePatterns:Na,defaultParseWidth:`any`}),quarter:P({matchPatterns:Pa,defaultMatchWidth:`wide`,parsePatterns:Fa,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:Ia,defaultMatchWidth:`wide`,parsePatterns:La,defaultParseWidth:`any`}),day:P({matchPatterns:Ra,defaultMatchWidth:`wide`,parsePatterns:za,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Ba,defaultMatchWidth:`any`,parsePatterns:Va,defaultParseWidth:`any`})}})))()}var Wa;function Ga(){return(Ga=e((()=>{fa(),_a(),ba(),ka(),Ua(),Wa={code:`sv`,formatDistance:da,formatLong:ga,formatRelative:ya,localize:Oa,match:Ha,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ka,qa,Ja;function Ya(){return(Ya=e((()=>{i(),ae(),Ka=`important`,qa=` !important`,Ja=oe(class extends ie{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(qa);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ka:``):n[e]=r}}return s}})})))()}function Xa(){return(Xa=e((()=>{Ya()})))()}var Za;function Qa(){return(Qa=e((()=>{Za=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var $a;function eo(){return(eo=e((()=>{$a=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ro;function io(){return(io=e((()=>{ro=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var ao;function oo(){return(oo=e((()=>{ao=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var so;function co(){return(co=e((()=>{r(),so=d`
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

	.w-datepicker-input-label {
		font-size: var(--w-font-size-s);
		line-height: var(--w-line-height-s);
		font-weight: 700;
		cursor: pointer;
		padding-bottom: 0.4rem;
		color: var(--w-s-color-text);
		display: block;
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
`})))()}var lo;function uo(){return(uo=e((()=>{r(),lo=d`
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
`})))()}var fo;function po(){return(po=e((()=>{r(),fo=d`
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
`})))()}var mo;function ho(){return(ho=e((()=>{r(),mo=d`
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
`})))()}function go(e){if(typeof e!=`string`)return null;let t=e;bo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function _o(e=typeof navigator<`u`?navigator.userAgent:``){let t=xo.test(e),n=So.test(e)&&!Co.test(e);return t||n?`text`:`date`}function vo(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function yo(e,t){if(!bo.exec(e))return e;let[n,r,i]=e.split(`-`);return vo(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var bo,xo,So,Co;function wo(){return(wo=e((()=>{bo=/^\d{4}-\d{2}-\d{2}$/,xo=/iP(hone|od|ad)/,So=/Safari/,Co=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var G,K,q,J,To,Y,X,Z;function Eo(){return(Eo=e((()=>{ee(),_e(),x(),Fe(),He(),it(),ot(),ft(),jn(),Nn(),Fn(),zn(),Xe(),Un(),Gn(),Vn(),ct(),Yn(),T(),qn(),Zn(),Nr(),Br(),Di(),ca(),Ga(),r(),c(),ue(),be(),Xa(),de(),te(),pe(),Se(),Qa(),eo(),no(),io(),oo(),co(),uo(),po(),ho(),wo(),G=_o(),K=`calendar`,q=`input`,J=`toggle`,To=`wrapper`,Y=`previous`,X={en:zr,nb:sa,sv:Wa,da:Mr,fi:Ei},Z=class extends ve(o){static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,so,lo,fo,mo]}get selectedDate(){return this.value?go(this.value)??null:null}get month(){return st(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=at({start:st(e),end:Bn(e)},{locale:this.locale}).map(e=>({start:e,end:dt(e,{locale:this.locale})})).map(e=>rt(e));if(Hn(t,e)){let e=Rn(t,{locale:this.locale})-1,r=Ve(t,w(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||p()||`en`}get#n(){return G===`text`&&this.value?yo(this.value,this.#t):this.value||``}resetFormControl(){this.value=this.#e}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Pe(this.month,1)}#a(){this.navigationDate=Xn(this.month,1)}async#o(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#s(e){this.value=e.target.value}#c(e){e.preventDefault(),this.isCalendarOpen=!0}#l(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&xe(this.internals.form,this)}async#u(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Kn(t,7);break;case`ArrowLeft`:n=Kn(t,1);break;case`Home`:n=w(t,{locale:this.locale});break;case`PageUp`:n=Xn(t,1);break;case`ArrowDown`:n=b(t,7);break;case`ArrowRight`:n=b(t,1);break;case`End`:n=dt(t,{locale:this.locale});break;case`PageDown`:n=Pe(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===Y&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#d(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#o()):(this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.#o())}constructor(){super(),this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Jn(),this.locale=zr,this.#e=void 0,ne($a,ro,to,Za,ao);let e=p();e&&X[e]&&(this.locale=X[e]),this._onClickOutside=this._onClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),this.#e=this.value;let e=this.lang;if(e&&X[e]&&(this.locale=X[e]),this.value){let e=go(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.setValue(this.value)}render(){return a`
			<div class="w-datepicker-wrapper" id="${To}">
				<label class="w-datepicker-input-label" for="${q}"
					>${this.label}</label
				>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${q}"
						type="${G}"
						name="${ye(this.name)}"
						placeholder="${ye(G===`text`?vo(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						@click="${this.#c}"
						@input="${this.#s}"
						@keydown="${this.#l}"
					/>
					<w-button
						aria-label="${this.value?f.t({id:`datepicker.toggle.changeDate`,values:{currentDate:V(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):f.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${K}"
						class="w-datepicker-button"
						data-testid="${J}"
						id="${J}"
						variant="utilityQuiet"
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${p()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Ja({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${f.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${K}"
					id="${K}"
					@keydown="${this.#u}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${f.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${Y}"
							data-testid="${Y}"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${p()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${V(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${f.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${K}-next"
							variant="utility"
							quiet
							small
							@click="${this.#i}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${p()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>a`<th class="w-datepicker__weekday">
												${V(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>a`<tr>
											${e.map(e=>{if(!Hn(this.month,e))return a`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Ye(e,this.selectedDate),r=e===this.navigationDate;return a`<td
													aria-current="${ye(Wn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${V(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${le({"w-datepicker__day":!0,"w-datepicker__day--today":Wn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${Mn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#d}"
													@keydown="${t?void 0:this.#d}"
												>
													<div>${Pn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},u([l({reflect:!0})],Z.prototype,`label`,void 0),u([l({reflect:!0})],Z.prototype,`lang`,void 0),u([l({reflect:!0})],Z.prototype,`name`,void 0),u([l({reflect:!0})],Z.prototype,`value`,void 0),u([l({attribute:`header-format`})],Z.prototype,`headerFormat`,void 0),u([l({attribute:`weekday-format`})],Z.prototype,`weekdayFormat`,void 0),u([l({attribute:!1})],Z.prototype,`isDayDisabled`,void 0),u([l({attribute:`day-format`})],Z.prototype,`dayFormat`,void 0),u([n()],Z.prototype,`isCalendarOpen`,void 0),u([n()],Z.prototype,`navigationDate`,void 0),u([n()],Z.prototype,`locale`,void 0),u([n()],Z.prototype,`selectedDate`,null),u([n()],Z.prototype,`month`,null),u([n()],Z.prototype,`weeks`,null),u([m(`#${K}`)],Z.prototype,`calendar`,void 0),u([m(`#${q}`,!0)],Z.prototype,`input`,void 0),u([m(`#${J}`,!0)],Z.prototype,`toggleButton`,void 0),u([m(`#${To}`,!0)],Z.prototype,`wrapper`,void 0),u([m(`#${Y}`)],Z.prototype,`previousMonthButton`,void 0),u([m(`[aria-current="date"]`)],Z.prototype,`todayCell`,void 0),u([m(`[data-navigation="true"]`)],Z.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,Z)})))()}var Do=t({Default:()=>Q,DisableCalendarDates:()=>$,__namedExportsOrder:()=>Po,default:()=>No}),Oo,ko,Ao,jo,Mo,No,Q,$,Po;function Fo(){return(Fo=e((()=>{ge(),se(),r(),Ce(),Eo(),{events:Ao,args:jo,argTypes:Mo}=ce(`w-datepicker`),No={title:`Forms/Datepicker`,render(e){return a(Oo||=we([`
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
        `]),me(he(e)))},args:jo,argTypes:Mo,parameters:{actions:{handles:Ao}}},Q={args:{label:`Date`}},$={args:{label:`Date`},render(e){return a(ko||=we([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker `,`></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        `]),me(he(e)))}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
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
}`,...$.parameters?.docs?.source}}},Po=[`Default`,`DisableCalendarDates`]})))()}export{Do as n,Fo as r,Q as t};