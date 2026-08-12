import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,d as i,g as a,h as o,l as s,p as c,r as l,s as u,t as d,y as f}from"./decorate-Bt2QF_uA.js";import{a as p,n as m,o as ee,r as te,t as ne}from"./i18n-CkjYRTT1.js";import{i as re,n as ie,r as ae,t as oe}from"./directive-CZiujxgm.js";import{n as se,t as ce}from"./dist-D5kJVy4t.js";import{t as h}from"./query-BHY-nhsh.js";import{n as le,t as ue}from"./class-map-DaGxfNVq.js";import{t as de}from"./icon-CD69d68Q.js";import{n as fe,t as pe}from"./styles-Cw_r5k83.js";import{i as me,n as he,r as ge}from"./utilities-BHNt5DhH.js";import{n as _e,t as ve}from"./FormControlMixin-BCJbRrUC.js";import{r as g,t as ye}from"./if-defined-DBI32Ir5.js";import{n as be,t as xe}from"./utils-qj3txzlQ.js";import{t as Se}from"./button-BoPS1aVe.js";import{t as Ce}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as we}from"./tooltip-D5IbvAIJ.js";var Te,Ee,De,Oe,ke,Ae,je,Me,Ne;function _(){return(_=e((()=>{Te=365.2425,Ee=10**8*24*60*60*1e3,-Ee,De=6048e5,Oe=864e5,ke=3600,Ae=ke*24,Ae*7,je=Ae*Te,Me=je/12,Me*3,Ne=Symbol.for(`constructDateFrom`)})))()}function v(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&Ne in e?e[Ne](t):e instanceof Date?new e.constructor(t):new Date(t)}function y(){return(y=e((()=>{_()})))()}function b(e,t){return v(t||e,e)}function x(){return(x=e((()=>{y()})))()}function S(e,t,n){let r=b(e,n?.in);return isNaN(t)?v(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function C(){return(C=e((()=>{y(),x()})))()}function Pe(e,t,n){let r=b(e,n?.in);if(isNaN(t))return v(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=v(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Fe(){return(Fe=e((()=>{y(),x()})))()}function w(){return Ie}var Ie;function T(){return(T=e((()=>{Ie={}})))()}function E(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function D(){return(D=e((()=>{T(),x()})))()}function Le(e,t){return E(e,{...t,weekStartsOn:1})}function Re(){return(Re=e((()=>{D()})))()}function ze(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=v(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=Le(i),o=v(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=Le(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Be(){return(Be=e((()=>{y(),Re(),x()})))()}function Ve(e){let t=b(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function He(){return(He=e((()=>{x()})))()}function Ue(e,...t){let n=v.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function O(){return(O=e((()=>{y()})))()}function k(e,t){let n=b(e,t?.in);return n.setHours(0,0,0,0),n}function A(){return(A=e((()=>{x()})))()}function We(e,t,n){let[r,i]=Ue(n?.in,e,t),a=k(r),o=k(i),s=+a-Ve(a),c=+o-Ve(o);return Math.round((s-c)/Oe)}function Ge(){return(Ge=e((()=>{He(),O(),_(),A()})))()}function Ke(e,t){let n=ze(e,t),r=v(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Le(r)}function qe(){return(qe=e((()=>{y(),Be(),Re()})))()}function Je(e,t,n){return S(e,t*7,n)}function Ye(){return(Ye=e((()=>{C()})))()}function Xe(e){return v(e,Date.now())}function Ze(){return(Ze=e((()=>{y()})))()}function Qe(e,t,n){let[r,i]=Ue(n?.in,e,t);return+k(r)==+k(i)}function $e(){return($e=e((()=>{O(),A()})))()}function et(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function tt(){return(tt=e((()=>{})))()}function nt(e){return!(!et(e)&&typeof e!=`number`||isNaN(+b(e)))}function rt(){return(rt=e((()=>{tt(),x()})))()}function it(e,t){let[n,r]=Ue(e,t.start,t.end);return{start:n,end:r}}function at(){return(at=e((()=>{O()})))()}function ot(e,t){let{start:n,end:r}=it(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(v(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function st(){return(st=e((()=>{at(),y()})))()}function ct(e,t){let{start:n,end:r}=it(t?.in,e),i=+n>+r,a=E(i?r:n,t),o=E(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(v(n,c)),c=Je(c,l),c.setHours(15);return i?u.reverse():u}function lt(){return(lt=e((()=>{at(),Ye(),y(),D()})))()}function ut(e,t){let n=b(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function dt(){return(dt=e((()=>{x()})))()}function ft(e,t){let n=b(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function pt(){return(pt=e((()=>{x()})))()}function mt(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function ht(){return(ht=e((()=>{T(),x()})))()}var gt,_t;function vt(){return(vt=e((()=>{gt={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},_t=(e,t,n)=>{let r,i=gt[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function j(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var yt,bt,xt,St;function Ct(){return(Ct=e((()=>{yt={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},bt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},xt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},St={date:j({formats:yt,defaultWidth:`full`}),time:j({formats:bt,defaultWidth:`full`}),dateTime:j({formats:xt,defaultWidth:`full`})}})))()}var wt,Tt;function Et(){return(Et=e((()=>{wt={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},Tt=(e,t,n,r)=>wt[e]})))()}function M(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Dt,Ot,kt,At,jt,Mt,Nt,Pt;function Ft(){return(Ft=e((()=>{Dt={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Ot={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},kt={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},At={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},jt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Mt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},Nt=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Pt={ordinalNumber:Nt,era:M({values:Dt,defaultWidth:`wide`}),quarter:M({values:Ot,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:kt,defaultWidth:`wide`}),day:M({values:At,defaultWidth:`wide`}),dayPeriod:M({values:jt,defaultWidth:`wide`,formattingValues:Mt,defaultFormattingWidth:`wide`})}})))()}function N(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Lt(s,e=>e.test(o)):It(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function It(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Lt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function P(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{Rt=/^(\d+)(th|st|nd|rd)?/i,zt=/\d+/i,Bt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Vt={any:[/^b/i,/^(a|c)/i]},Ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ut={any:[/1/i,/2/i,/3/i,/4/i]},Wt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Gt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Kt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Jt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Yt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Xt={ordinalNumber:P({matchPattern:Rt,parsePattern:zt,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Bt,defaultMatchWidth:`wide`,parsePatterns:Vt,defaultParseWidth:`any`}),quarter:N({matchPatterns:Ht,defaultMatchWidth:`wide`,parsePatterns:Ut,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Wt,defaultMatchWidth:`wide`,parsePatterns:Gt,defaultParseWidth:`any`}),day:N({matchPatterns:Kt,defaultMatchWidth:`wide`,parsePatterns:qt,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Jt,defaultMatchWidth:`any`,parsePatterns:Yt,defaultParseWidth:`any`})}})))()}var Qt;function $t(){return($t=e((()=>{vt(),Ct(),Et(),Ft(),Zt(),Qt={code:`en-US`,formatDistance:_t,formatLong:St,formatRelative:Tt,localize:Pt,match:Xt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function en(e,t){let n=b(e,t?.in);return We(n,ft(n))+1}function tn(){return(tn=e((()=>{Ge(),pt(),x()})))()}function nn(e,t){let n=b(e,t?.in),r=Le(n)-+Ke(n);return Math.round(r/De)+1}function rn(){return(rn=e((()=>{_(),Re(),qe(),x()})))()}function an(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=w(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=E(o,t),c=v(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=E(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function on(){return(on=e((()=>{T(),y(),D(),x()})))()}function sn(e,t){let n=w(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=an(e,t),a=v(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),E(a,t)}function cn(){return(cn=e((()=>{T(),y(),on(),D()})))()}function ln(e,t){let n=b(e,t?.in),r=E(n,t)-+sn(n,t);return Math.round(r/De)+1}function un(){return(un=e((()=>{_(),D(),cn(),x()})))()}function F(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var I;function dn(){return(dn=e((()=>{I={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return F(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):F(n+1,2)},d(e,t){return F(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return F(e.getHours()%12||12,t.length)},H(e,t){return F(e.getHours(),t.length)},m(e,t){return F(e.getMinutes(),t.length)},s(e,t){return F(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return F(Math.trunc(r*10**(n-3)),t.length)}}})))()}function fn(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+F(a,2)}function pn(e,t){return e%60==0?(e>0?`-`:`+`)+F(Math.abs(e)/60,2):L(e,t)}function L(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=F(Math.trunc(r/60),2),a=F(r%60,2);return n+i+t+a}var R,mn;function hn(){return(hn=e((()=>{tn(),rn(),Be(),un(),on(),dn(),R={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},mn={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return I.y(e,t)},Y:function(e,t,n,r){let i=an(e,r),a=i>0?i:1-i;return t===`YY`?F(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):F(a,t.length)},R:function(e,t){return F(ze(e),t.length)},u:function(e,t){return F(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return F(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return F(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return I.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return F(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=ln(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):F(i,t.length)},I:function(e,t,n){let r=nn(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):F(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):I.d(e,t)},D:function(e,t,n){let r=en(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):F(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return F(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return F(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return F(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?R.noon:r===0?R.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?R.evening:r>=12?R.afternoon:r>=4?R.morning:R.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return I.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):I.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):F(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):F(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):I.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):I.s(e,t)},S:function(e,t){return I.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return pn(r);case`XXXX`:case`XX`:return L(r);default:return L(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return pn(r);case`xxxx`:case`xx`:return L(r);default:return L(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+fn(r,`:`);default:return`GMT`+L(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+fn(r,`:`);default:return`GMT`+L(r,`:`)}},t:function(e,t,n){return F(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return F(+e,t.length)}}})))()}var gn,_n,vn,yn;function bn(){return(bn=e((()=>{gn=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},_n=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},vn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return gn(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,gn(r,t)).replace(`{{time}}`,_n(i,t))},yn={p:_n,P:vn}})))()}function xn(e){return Tn.test(e)}function Sn(e){return En.test(e)}function Cn(e,t,n){let r=wn(e,t,n);if(console.warn(r),Dn.includes(e))throw RangeError(r)}function wn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Tn,En,Dn;function On(){return(On=e((()=>{Tn=/^D+$/,En=/^Y+$/,Dn=[`D`,`DD`,`YY`,`YYYY`]})))()}function z(e,t,n){let r=w(),i=n?.locale??r.locale??Qt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=b(e,n?.in);if(!nt(s))throw RangeError(`Invalid time value`);let c=t.match(jn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=yn[t];return n(e,i.formatLong)}return e}).join(``).match(An).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:kn(e)};if(mn[t])return{isToken:!0,value:e};if(t.match(Pn))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&Sn(a)||!n?.useAdditionalDayOfYearTokens&&xn(a))&&Cn(a,t,String(e));let o=mn[a[0]];return o(s,a,i.localize,l)}).join(``)}function kn(e){let t=e.match(Mn);return t?t[1].replace(Nn,`'`):e}var An,jn,Mn,Nn,Pn;function Fn(){return(Fn=e((()=>{$t(),T(),hn(),bn(),On(),rt(),x(),An=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Mn=/^'([^]*?)'?$/,Nn=/''/g,Pn=/[a-zA-Z]/})))()}function In(e,t){let n=b(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=F(n.getDate(),2),t=F(n.getMonth()+1,2);a=`${F(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=F(Math.trunc(t/60),2),r=F(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=F(n.getHours(),2),r=F(n.getMinutes(),2),i=F(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function Ln(){return(Ln=e((()=>{x()})))()}function Rn(e,t){return b(e,t?.in).getDate()}function zn(){return(zn=e((()=>{x()})))()}function Bn(e,t){return b(e,t?.in).getDay()}function Vn(){return(Vn=e((()=>{x()})))()}function Hn(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Rn(b(e,t?.in));if(isNaN(i))return NaN;let a=r-Bn(ut(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function Un(){return(Un=e((()=>{T(),zn(),Vn(),dt(),x()})))()}function Wn(e,t){let n=b(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),b(n,t?.in)}function Gn(){return(Gn=e((()=>{x()})))()}function Kn(e,t,n){let[r,i]=Ue(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function qn(){return(qn=e((()=>{O()})))()}function Jn(e,t){return Qe(v(t?.in||e,e),Xe(t?.in||e))}function Yn(){return(Yn=e((()=>{y(),Ze(),$e()})))()}function Xn(e,t,n){return S(e,-t,n)}function Zn(){return(Zn=e((()=>{C()})))()}function Qn(e){return k(Date.now(),e)}function $n(){return($n=e((()=>{A()})))()}function er(e,t,n){return Pe(e,-t,n)}function tr(){return(tr=e((()=>{Fe()})))()}var nr,rr;function ir(){return(ir=e((()=>{nr={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},rr=(e,t,n)=>{let r,i=nr[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var ar,or,sr,cr;function lr(){return(lr=e((()=>{ar={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},or={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},sr={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},cr={date:j({formats:ar,defaultWidth:`full`}),time:j({formats:or,defaultWidth:`full`}),dateTime:j({formats:sr,defaultWidth:`full`})}})))()}var ur,dr;function fr(){return(fr=e((()=>{ur={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},dr=(e,t,n,r)=>ur[e]})))()}var pr,mr,hr,gr,_r,vr,yr,br;function xr(){return(xr=e((()=>{pr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},mr={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},hr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},gr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},_r={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},vr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},yr=(e,t)=>Number(e)+`.`,br={ordinalNumber:yr,era:M({values:pr,defaultWidth:`wide`}),quarter:M({values:mr,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:hr,defaultWidth:`wide`}),day:M({values:gr,defaultWidth:`wide`}),dayPeriod:M({values:_r,defaultWidth:`wide`,formattingValues:vr,defaultFormattingWidth:`wide`})}})))()}var Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr;function Fr(){return(Fr=e((()=>{Sr=/^(\d+)(\.)?/i,Cr=/\d+/i,wr={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},Tr={any:[/^f/i,/^(v|e)/i]},Er={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Dr={any:[/1/i,/2/i,/3/i,/4/i]},Or={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},kr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ar={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},jr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Mr={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},Nr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Pr={ordinalNumber:P({matchPattern:Sr,parsePattern:Cr,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:wr,defaultMatchWidth:`wide`,parsePatterns:Tr,defaultParseWidth:`any`}),quarter:N({matchPatterns:Er,defaultMatchWidth:`wide`,parsePatterns:Dr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Or,defaultMatchWidth:`wide`,parsePatterns:kr,defaultParseWidth:`any`}),day:N({matchPatterns:Ar,defaultMatchWidth:`wide`,parsePatterns:jr,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Mr,defaultMatchWidth:`any`,parsePatterns:Nr,defaultParseWidth:`any`})}})))()}var Ir;function Lr(){return(Lr=e((()=>{ir(),lr(),fr(),xr(),Fr(),Ir={code:`da`,formatDistance:rr,formatLong:cr,formatRelative:dr,localize:br,match:Pr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Rr,zr,Br,Vr;function Hr(){return(Hr=e((()=>{Rr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},zr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Br={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Vr={date:j({formats:Rr,defaultWidth:`full`}),time:j({formats:zr,defaultWidth:`full`}),dateTime:j({formats:Br,defaultWidth:`full`})}})))()}var Ur;function Wr(){return(Wr=e((()=>{vt(),Et(),Ft(),Zt(),Hr(),Ur={code:`en-GB`,formatDistance:_t,formatLong:Vr,formatRelative:Tt,localize:Pt,match:Xt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Gr(e){return e.replace(/sekuntia?/,`sekunnin`)}function Kr(e){return e.replace(/minuuttia?/,`minuutin`)}function qr(e){return e.replace(/tuntia?/,`tunnin`)}function Jr(e){return e.replace(/päivää?/,`päivän`)}function Yr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Xr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function B(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Zr,Qr;function $r(){return($r=e((()=>{Zr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Gr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Gr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Kr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Kr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:qr},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:qr},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Jr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Yr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Yr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Xr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Xr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:B},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:B},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:B},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:B}},Qr=(e,t,n)=>{let r=Zr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var ei,ti,ni,ri;function ii(){return(ii=e((()=>{ei={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},ti={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},ni={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ri={date:j({formats:ei,defaultWidth:`full`}),time:j({formats:ti,defaultWidth:`full`}),dateTime:j({formats:ni,defaultWidth:`full`})}})))()}var ai,oi;function si(){return(si=e((()=>{ai={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},oi=(e,t,n,r)=>ai[e]})))()}var ci,li,V,ui,H,di,fi,pi,mi;function hi(){return(hi=e((()=>{ci={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},li={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},V={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},ui={narrow:V.narrow,abbreviated:V.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},H={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},di={narrow:H.narrow,short:H.short,abbreviated:H.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},fi={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},pi=(e,t)=>Number(e)+`.`,mi={ordinalNumber:pi,era:M({values:ci,defaultWidth:`wide`}),quarter:M({values:li,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:V,defaultWidth:`wide`,formattingValues:ui,defaultFormattingWidth:`wide`}),day:M({values:H,defaultWidth:`wide`,formattingValues:di,defaultFormattingWidth:`wide`}),dayPeriod:M({values:fi,defaultWidth:`wide`})}})))()}var gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi;function ki(){return(ki=e((()=>{gi=/^(\d+)(\.)/i,_i=/\d+/i,vi={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},yi={any:[/^e/i,/^j/i]},bi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},xi={any:[/1/i,/2/i,/3/i,/4/i]},Si={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},Ci={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},wi={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},Ti={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},Ei={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},Di={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},Oi={ordinalNumber:P({matchPattern:gi,parsePattern:_i,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:vi,defaultMatchWidth:`wide`,parsePatterns:yi,defaultParseWidth:`any`}),quarter:N({matchPatterns:bi,defaultMatchWidth:`wide`,parsePatterns:xi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Si,defaultMatchWidth:`wide`,parsePatterns:Ci,defaultParseWidth:`any`}),day:N({matchPatterns:wi,defaultMatchWidth:`wide`,parsePatterns:Ti,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Ei,defaultMatchWidth:`any`,parsePatterns:Di,defaultParseWidth:`any`})}})))()}var Ai;function ji(){return(ji=e((()=>{$r(),ii(),si(),hi(),ki(),Ai={code:`fi`,formatDistance:Qr,formatLong:ri,formatRelative:oi,localize:mi,match:Oi,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Mi,Ni;function Pi(){return(Pi=e((()=>{Mi={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Ni=(e,t,n)=>{let r,i=Mi[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Fi,Ii,Li,Ri;function zi(){return(zi=e((()=>{Fi={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Ii={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Li={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Ri={date:j({formats:Fi,defaultWidth:`full`}),time:j({formats:Ii,defaultWidth:`full`}),dateTime:j({formats:Li,defaultWidth:`full`})}})))()}var Bi,Vi;function Hi(){return(Hi=e((()=>{Bi={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Vi=(e,t,n,r)=>Bi[e]})))()}var Ui,Wi,Gi,Ki,qi,Ji,Yi;function Xi(){return(Xi=e((()=>{Ui={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Wi={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Gi={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Ki={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},qi={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Ji=(e,t)=>Number(e)+`.`,Yi={ordinalNumber:Ji,era:M({values:Ui,defaultWidth:`wide`}),quarter:M({values:Wi,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:Gi,defaultWidth:`wide`}),day:M({values:Ki,defaultWidth:`wide`}),dayPeriod:M({values:qi,defaultWidth:`wide`})}})))()}var Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la;function ua(){return(ua=e((()=>{Zi=/^(\d+)\.?/i,Qi=/\d+/i,$i={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},ea={any:[/^f/i,/^e/i]},ta={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},na={any:[/1/i,/2/i,/3/i,/4/i]},ra={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ia={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},aa={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},oa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},sa={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ca={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},la={ordinalNumber:P({matchPattern:Zi,parsePattern:Qi,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:$i,defaultMatchWidth:`wide`,parsePatterns:ea,defaultParseWidth:`any`}),quarter:N({matchPatterns:ta,defaultMatchWidth:`wide`,parsePatterns:na,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:ra,defaultMatchWidth:`wide`,parsePatterns:ia,defaultParseWidth:`any`}),day:N({matchPatterns:aa,defaultMatchWidth:`wide`,parsePatterns:oa,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:sa,defaultMatchWidth:`any`,parsePatterns:ca,defaultParseWidth:`any`})}})))()}var da;function fa(){return(fa=e((()=>{Pi(),zi(),Hi(),Xi(),ua(),da={code:`nb`,formatDistance:Ni,formatLong:Ri,formatRelative:Vi,localize:Yi,match:la,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var pa,ma,ha;function ga(){return(ga=e((()=>{pa={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},ma=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],ha=(e,t,n)=>{let r,i=pa[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?ma[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var _a,va,ya,ba;function xa(){return(xa=e((()=>{_a={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},va={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ya={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ba={date:j({formats:_a,defaultWidth:`full`}),time:j({formats:va,defaultWidth:`full`}),dateTime:j({formats:ya,defaultWidth:`full`})}})))()}var Sa,Ca;function wa(){return(wa=e((()=>{Sa={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Ca=(e,t,n,r)=>Sa[e]})))()}var Ta,Ea,Da,Oa,ka,Aa,ja,Ma;function Na(){return(Na=e((()=>{Ta={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},Ea={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Da={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Oa={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},ka={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Aa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},ja=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Ma={ordinalNumber:ja,era:M({values:Ta,defaultWidth:`wide`}),quarter:M({values:Ea,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:Da,defaultWidth:`wide`}),day:M({values:Oa,defaultWidth:`wide`}),dayPeriod:M({values:ka,defaultWidth:`wide`,formattingValues:Aa,defaultFormattingWidth:`wide`})}})))()}var Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka;function qa(){return(qa=e((()=>{Pa=/^(\d+)(:a|:e)?/i,Fa=/\d+/i,Ia={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},La={any:[/^f/i,/^[ev]/i]},Ra={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},za={any:[/1/i,/2/i,/3/i,/4/i]},Ba={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Va={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ha={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},Ua={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Wa={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Ga={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ka={ordinalNumber:P({matchPattern:Pa,parsePattern:Fa,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Ia,defaultMatchWidth:`wide`,parsePatterns:La,defaultParseWidth:`any`}),quarter:N({matchPatterns:Ra,defaultMatchWidth:`wide`,parsePatterns:za,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Ba,defaultMatchWidth:`wide`,parsePatterns:Va,defaultParseWidth:`any`}),day:N({matchPatterns:Ha,defaultMatchWidth:`wide`,parsePatterns:Ua,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Wa,defaultMatchWidth:`any`,parsePatterns:Ga,defaultParseWidth:`any`})}})))()}var Ja;function Ya(){return(Ya=e((()=>{ga(),xa(),wa(),Na(),qa(),Ja={code:`sv`,formatDistance:ha,formatLong:ba,formatRelative:Ca,localize:Ma,match:Ka,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Xa,Za,Qa;function $a(){return($a=e((()=>{a(),ae(),Xa=`important`,Za=` !important`,Qa=oe(class extends ie{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Za);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Xa:``):n[e]=r}}return c}})})))()}function eo(){return(eo=e((()=>{$a()})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ro;function io(){return(io=e((()=>{ro=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ao;function oo(){return(oo=e((()=>{ao=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var so;function co(){return(co=e((()=>{so=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var lo;function uo(){return(uo=e((()=>{lo=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var fo,po,mo;function ho(){return(ho=e((()=>{r(),fo=f`
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
		border: none;
		height: 16px;
		margin: 0 0 0 4px;
		padding: 0;
		vertical-align: text-top;
	}

	w-tooltip {
		display: inline-block;
	}
`,po=f`
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
`,mo=f`
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
`})))()}var go;function _o(){return(_o=e((()=>{r(),go=f`
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
`})))()}var vo;function yo(){return(yo=e((()=>{r(),vo=f`
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
`})))()}var bo;function xo(){return(xo=e((()=>{r(),bo=f`
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
`})))()}function So(e){if(typeof e!=`string`)return null;let t=e;Eo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function Co(e=typeof navigator<`u`?navigator.userAgent:``){let t=Do.test(e),n=Oo.test(e)&&!ko.test(e);return t||n?`text`:`date`}function wo(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function To(e,t){if(!Eo.exec(e))return e;let[n,r,i]=e.split(`-`);return wo(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var Eo,Do,Oo,ko;function Ao(){return(Ao=e((()=>{Eo=/^\d{4}-\d{2}-\d{2}$/,Do=/iP(hone|od|ad)/,Oo=/Safari/,ko=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var U,W,G,jo,Mo,K,q,J;function No(){return(No=e((()=>{ee(),_e(),C(),Fe(),Ge(),st(),lt(),ht(),Fn(),Ln(),zn(),Un(),$e(),qn(),Yn(),Gn(),dt(),$n(),D(),Zn(),tr(),Lr(),Wr(),ji(),fa(),Ya(),r(),l(),ue(),ye(),eo(),de(),we(),te(),pe(),be(),no(),io(),oo(),co(),uo(),ho(),_o(),yo(),xo(),Ao(),U=Co(),W=`calendar`,G=`input`,jo=`toggle`,Mo=`wrapper`,K=`previous`,q={en:Ur,nb:da,sv:Ja,da:Ir,fi:Ai},J=class extends ve(s){#e;static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,fo,po,mo,go,vo,bo]}get selectedDate(){return this.value?So(this.value)??null:null}get month(){return ut(this.navigationDate)}#t;get weeks(){let e=this.month,t=this.navigationDate,n=ct({start:ut(e),end:Wn(e)},{locale:this.locale}).map(e=>({start:e,end:mt(e,{locale:this.locale})})).map(e=>ot(e));if(Kn(t,e)){let e=Hn(t,{locale:this.locale})-1,r=We(t,E(t,{locale:this.locale}));n[e][r]=t}return n}get#n(){return this.lang||m()||`en`}get#r(){return U===`text`&&this.value?To(this.value,this.#n):this.value||``}async#i(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#a(){this.navigationDate=Pe(this.month,1)}#o(){this.navigationDate=er(this.month,1)}#s;async#c(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#l(e){this.value=e.target.value}#u(){this.#_=!0,this.#x()}#d(e){e.preventDefault(),this.isCalendarOpen=!0}#f(e){if(e.key===` `)return this.#i(e);e.key===`,`&&e.preventDefault(),this.#e.submit(e)}async#p(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Xn(t,7);break;case`ArrowLeft`:n=Xn(t,1);break;case`Home`:n=E(t,{locale:this.locale});break;case`PageUp`:n=er(t,1);break;case`ArrowDown`:n=S(t,7);break;case`ArrowRight`:n=S(t,1);break;case`End`:n=mt(t,{locale:this.locale});break;case`PageDown`:n=Pe(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#m(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#r,this.#x(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#c()):(this.value=t,this.input.value=this.#r,this.#x(),this.isCalendarOpen=!1,this.#c())}#h;#g;#_;constructor(){super(),this.#e=new xe(this),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Qn(),this.locale=Ur,this.#t=void 0,this.#s=``,this.#h=!1,this.#g=void 0,this.#_=!1,this.#b=e=>{e.preventDefault(),this.#_=!0,this.#x()},ne(ro,so,ao,to,lo);let e=m();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#t,this.#_=!1,this.#y(),this.#x()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#x(),this.internals.checkValidity()}reportValidity(){return this.#_=!0,this.#x(),this.internals.checkValidity()}setCustomValidity(e){this.#s=e,e?(this.#x(),this.#v(e)):(this.#y(),this.#x())}#v(e){this.#h||(this.#g=this.helpText),this.#h=!0,this.invalid=!0,this.helpText=e}#y(){this.#h&&=(this.invalid=!1,this.helpText=this.#g,this.#g=void 0,!1)}#b;#x(){if(this.disabled){this.internals.setValidity({}),this.#y();return}let e={valueMissing:this.required&&!this.value,customError:this.#s!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#s:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#_&&this.#v(t);return}this.internals.setValidity({}),this.#y()}connectedCallback(){super.connectedCallback(),this.#t=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#b);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=So(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#b),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#x()}firstUpdated(e){super.firstUpdated(e),this.#x()}render(){return o`
			<div class="w-datepicker-wrapper" id="${Mo}">
				<label class="w-datepicker-input-label" for="${G}">
					${this.label}
					${this.optional&&!this.required?o`
									<span>
										${p._({id:`datepicker.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:i}
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
								`:i}
				</label>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${G}"
						type="${U}"
						name="${g(this.name)}"
						placeholder="${g(U===`text`?wo(this.#n):void 0)}"
						.value="${this.#r}"
						class="w-datepicker-input"
						?required=${this.required}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						aria-describedby="${g(this.helpText?`help-text`:this.ariaDescription?`aria-description`:void 0)}"
						aria-errormessage="${g(this._error?`help-text`:void 0)}"
						aria-invalid=${g(this.invalid?`true`:void 0)}
						@click="${this.#d}"
						@input="${this.#l}"
						@blur="${this.#u}"
						@keydown="${this.#f}"
					/>
					<w-button
						aria-label="${this.value?p.t({id:`datepicker.toggle.changeDate`,values:{currentDate:z(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):p.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${W}"
						class="w-datepicker-button"
						data-testid="${jo}"
						id="${jo}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#i}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${m()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?o`<div id="help-text" class="help-text">${this.helpText}</div>`:i}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Qa({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${p.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${W}"
					id="${W}"
					@keydown="${this.#p}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${p.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${K}"
							data-testid="${K}"
							variant="utility"
							quiet
							small
							@click="${this.#o}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${m()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${z(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${p.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${W}-next"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${m()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>o`<th class="w-datepicker__weekday">
												${z(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>o`<tr>
											${e.map(e=>{if(!Kn(this.month,e))return o`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Qe(e,this.selectedDate),r=e===this.navigationDate;return o`<td
													aria-current="${g(Jn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${z(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${le({"w-datepicker__day":!0,"w-datepicker__day--today":Jn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${In(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#m}"
													@keydown="${t?void 0:this.#m}"
												>
													<div>${Rn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},d([u({reflect:!0})],J.prototype,`label`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),d([u({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),d([u({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),d([u({reflect:!0})],J.prototype,`lang`,void 0),d([u({reflect:!0})],J.prototype,`name`,void 0),d([u({reflect:!0})],J.prototype,`value`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),d([u({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),d([u({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),d([u({attribute:!1})],J.prototype,`isDayDisabled`,void 0),d([u({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),d([n()],J.prototype,`isCalendarOpen`,void 0),d([n()],J.prototype,`navigationDate`,void 0),d([n()],J.prototype,`locale`,void 0),d([n()],J.prototype,`selectedDate`,null),d([n()],J.prototype,`month`,null),d([n()],J.prototype,`weeks`,null),d([h(`#${W}`)],J.prototype,`calendar`,void 0),d([h(`#${G}`,!0)],J.prototype,`input`,void 0),d([h(`#${jo}`,!0)],J.prototype,`toggleButton`,void 0),d([h(`#${Mo}`,!0)],J.prototype,`wrapper`,void 0),d([h(`#${K}`)],J.prototype,`previousMonthButton`,void 0),d([h(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),d([h(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var Po=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>Vo,default:()=>Bo}),Fo,Io,Lo,Ro,zo,Bo,Y,X,Z,Q,$,Vo;function Ho(){return(Ho=e((()=>{ge(),se(),r(),Se(),we(),No(),{events:Lo,args:Ro,argTypes:zo}=ce(`w-datepicker`),Bo={title:`Forms/Datepicker`,render(e){return o(Fo||=Ce([`
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
        `]),me(he(e)))},args:Ro,argTypes:zo,parameters:{actions:{handles:Lo}}},Y={args:{label:`Date`}},X={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available`}},Z={args:{label:`Date`,invalid:!0,helpText:`Description of how to fix the problem`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return o(Io||=Ce([`
            <!-- Workaround for Storybook's overflow hidden -->
            <div style="min-height: 400px">
                <w-datepicker `,`></w-datepicker>
            </div>
            <script type="module">
                const datePicker = document.querySelector("w-datepicker");
                // No working on Sundays!
                datePicker.isDayDisabled = (day) => day.getDay() === 0;
            <\/script>
        `]),me(he(e)))}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    optional: true,
    required: false,
    helpText: "Help text is available"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date",
    invalid: true,
    helpText: "Description of how to fix the problem"
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
}`,...$.parameters?.docs?.source}}},Vo=[`Default`,`WithHelpText`,`Invalid`,`WithTooltip`,`DisableCalendarDates`]})))()}export{Po as n,Ho as r,Y as t};