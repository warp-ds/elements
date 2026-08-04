import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,g as i,h as a,l as o,p as s,r as c,s as l,t as u,y as d}from"./decorate-Bt2QF_uA.js";import{a as f,n as p,o as ee,r as te,t as ne}from"./i18n-CkjYRTT1.js";import{i as re,n as ie,r as ae,t as oe}from"./directive-CZiujxgm.js";import{n as se,t as ce}from"./dist-D5kJVy4t.js";import{t as m}from"./query-BHY-nhsh.js";import{n as le,t as ue}from"./class-map-DaGxfNVq.js";import{t as de}from"./icon-CD69d68Q.js";import{n as fe,t as pe}from"./styles-Cw_r5k83.js";import{i as me,n as he,r as ge}from"./utilities-BHNt5DhH.js";import{n as _e,t as ve}from"./FormControlMixin-BCJbRrUC.js";import{r as ye,t as be}from"./if-defined-DBI32Ir5.js";import{t as xe}from"./button-DdmMkV4K.js";import{t as Se}from"./taggedTemplateLiteral-BZenJ0bZ.js";var Ce,we,Te,Ee,De,Oe,ke,Ae,je;function h(){return(h=e((()=>{Ce=365.2425,we=10**8*24*60*60*1e3,-we,Te=6048e5,Ee=864e5,De=3600,Oe=De*24,Oe*7,ke=Oe*Ce,Ae=ke/12,Ae*3,je=Symbol.for(`constructDateFrom`)})))()}function g(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&je in e?e[je](t):e instanceof Date?new e.constructor(t):new Date(t)}function _(){return(_=e((()=>{h()})))()}function v(e,t){return g(t||e,e)}function y(){return(y=e((()=>{_()})))()}function b(e,t,n){let r=v(e,n?.in);return isNaN(t)?g(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function x(){return(x=e((()=>{_(),y()})))()}function Me(e,t,n){let r=v(e,n?.in);if(isNaN(t))return g(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=g(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Ne(){return(Ne=e((()=>{_(),y()})))()}function S(){return Pe}var Pe;function C(){return(C=e((()=>{Pe={}})))()}function w(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function T(){return(T=e((()=>{C(),y()})))()}function E(e,t){return w(e,{...t,weekStartsOn:1})}function D(){return(D=e((()=>{T()})))()}function Fe(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=g(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=E(i),o=g(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=E(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Ie(){return(Ie=e((()=>{_(),D(),y()})))()}function Le(e){let t=v(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function Re(){return(Re=e((()=>{y()})))()}function O(e,...t){let n=g.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function k(){return(k=e((()=>{_()})))()}function A(e,t){let n=v(e,t?.in);return n.setHours(0,0,0,0),n}function j(){return(j=e((()=>{y()})))()}function ze(e,t,n){let[r,i]=O(n?.in,e,t),a=A(r),o=A(i),s=+a-Le(a),c=+o-Le(o);return Math.round((s-c)/Ee)}function Be(){return(Be=e((()=>{Re(),k(),h(),j()})))()}function Ve(e,t){let n=Fe(e,t),r=g(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),E(r)}function He(){return(He=e((()=>{_(),Ie(),D()})))()}function Ue(e,t,n){return b(e,t*7,n)}function We(){return(We=e((()=>{x()})))()}function Ge(e){return g(e,Date.now())}function Ke(){return(Ke=e((()=>{_()})))()}function qe(e,t,n){let[r,i]=O(n?.in,e,t);return+A(r)==+A(i)}function Je(){return(Je=e((()=>{k(),j()})))()}function Ye(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Xe(){return(Xe=e((()=>{})))()}function Ze(e){return!(!Ye(e)&&typeof e!=`number`||isNaN(+v(e)))}function Qe(){return(Qe=e((()=>{Xe(),y()})))()}function $e(e,t){let[n,r]=O(e,t.start,t.end);return{start:n,end:r}}function et(){return(et=e((()=>{k()})))()}function tt(e,t){let{start:n,end:r}=$e(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(g(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function nt(){return(nt=e((()=>{et(),_()})))()}function rt(e,t){let{start:n,end:r}=$e(t?.in,e),i=+n>+r,a=w(i?r:n,t),o=w(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(g(n,c)),c=Ue(c,l),c.setHours(15);return i?u.reverse():u}function it(){return(it=e((()=>{et(),We(),_(),T()})))()}function at(e,t){let n=v(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function ot(){return(ot=e((()=>{y()})))()}function st(e,t){let n=v(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ct(){return(ct=e((()=>{y()})))()}function lt(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=v(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function ut(){return(ut=e((()=>{C(),y()})))()}var dt,ft;function pt(){return(pt=e((()=>{dt={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},ft=(e,t,n)=>{let r,i=dt[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function M(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var mt,ht,gt,_t;function vt(){return(vt=e((()=>{mt={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},ht={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},gt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},_t={date:M({formats:mt,defaultWidth:`full`}),time:M({formats:ht,defaultWidth:`full`}),dateTime:M({formats:gt,defaultWidth:`full`})}})))()}var yt,bt;function xt(){return(xt=e((()=>{yt={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},bt=(e,t,n,r)=>yt[e]})))()}function N(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var St,Ct,wt,Tt,Et,Dt,Ot,kt;function At(){return(At=e((()=>{St={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Ct={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},wt={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Tt={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},Et={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Dt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},Ot=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},kt={ordinalNumber:Ot,era:N({values:St,defaultWidth:`wide`}),quarter:N({values:Ct,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:wt,defaultWidth:`wide`}),day:N({values:Tt,defaultWidth:`wide`}),dayPeriod:N({values:Et,defaultWidth:`wide`,formattingValues:Dt,defaultFormattingWidth:`wide`})}})))()}function P(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Mt(s,e=>e.test(o)):jt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function jt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Mt(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function F(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt;function Kt(){return(Kt=e((()=>{Nt=/^(\d+)(th|st|nd|rd)?/i,Pt=/\d+/i,Ft={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},It={any:[/^b/i,/^(a|c)/i]},Lt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Rt={any:[/1/i,/2/i,/3/i,/4/i]},zt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Bt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ht={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ut={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Wt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gt={ordinalNumber:F({matchPattern:Nt,parsePattern:Pt,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Ft,defaultMatchWidth:`wide`,parsePatterns:It,defaultParseWidth:`any`}),quarter:P({matchPatterns:Lt,defaultMatchWidth:`wide`,parsePatterns:Rt,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:zt,defaultMatchWidth:`wide`,parsePatterns:Bt,defaultParseWidth:`any`}),day:P({matchPatterns:Vt,defaultMatchWidth:`wide`,parsePatterns:Ht,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Ut,defaultMatchWidth:`any`,parsePatterns:Wt,defaultParseWidth:`any`})}})))()}var qt;function Jt(){return(Jt=e((()=>{pt(),vt(),xt(),At(),Kt(),qt={code:`en-US`,formatDistance:ft,formatLong:_t,formatRelative:bt,localize:kt,match:Gt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function Yt(e,t){let n=v(e,t?.in);return ze(n,st(n))+1}function Xt(){return(Xt=e((()=>{Be(),ct(),y()})))()}function Zt(e,t){let n=v(e,t?.in),r=E(n)-+Ve(n);return Math.round(r/Te)+1}function Qt(){return(Qt=e((()=>{h(),D(),He(),y()})))()}function $t(e,t){let n=v(e,t?.in),r=n.getFullYear(),i=S(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=g(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=w(o,t),c=g(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=w(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function en(){return(en=e((()=>{C(),_(),T(),y()})))()}function tn(e,t){let n=S(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=$t(e,t),a=g(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),w(a,t)}function nn(){return(nn=e((()=>{C(),_(),en(),T()})))()}function rn(e,t){let n=v(e,t?.in),r=w(n,t)-+tn(n,t);return Math.round(r/Te)+1}function an(){return(an=e((()=>{h(),T(),nn(),y()})))()}function I(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var L;function on(){return(on=e((()=>{L={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return I(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):I(n+1,2)},d(e,t){return I(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return I(e.getHours()%12||12,t.length)},H(e,t){return I(e.getHours(),t.length)},m(e,t){return I(e.getMinutes(),t.length)},s(e,t){return I(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return I(Math.trunc(r*10**(n-3)),t.length)}}})))()}function sn(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+I(a,2)}function cn(e,t){return e%60==0?(e>0?`-`:`+`)+I(Math.abs(e)/60,2):R(e,t)}function R(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=I(Math.trunc(r/60),2),a=I(r%60,2);return n+i+t+a}var z,ln;function un(){return(un=e((()=>{Xt(),Qt(),Ie(),an(),en(),on(),z={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},ln={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return L.y(e,t)},Y:function(e,t,n,r){let i=$t(e,r),a=i>0?i:1-i;return t===`YY`?I(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):I(a,t.length)},R:function(e,t){return I(Fe(e),t.length)},u:function(e,t){return I(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return I(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return I(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return L.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return I(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=rn(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):I(i,t.length)},I:function(e,t,n){let r=Zt(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):I(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):L.d(e,t)},D:function(e,t,n){let r=Yt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):I(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return I(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return I(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return I(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?z.noon:r===0?z.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?z.evening:r>=12?z.afternoon:r>=4?z.morning:z.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return L.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):L.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):I(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):I(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):L.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):L.s(e,t)},S:function(e,t){return L.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return cn(r);case`XXXX`:case`XX`:return R(r);default:return R(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return cn(r);case`xxxx`:case`xx`:return R(r);default:return R(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+sn(r,`:`);default:return`GMT`+R(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+sn(r,`:`);default:return`GMT`+R(r,`:`)}},t:function(e,t,n){return I(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return I(+e,t.length)}}})))()}var B,dn,fn,pn;function mn(){return(mn=e((()=>{B=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},dn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},fn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return B(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,B(r,t)).replace(`{{time}}`,dn(i,t))},pn={p:dn,P:fn}})))()}function hn(e){return yn.test(e)}function gn(e){return bn.test(e)}function _n(e,t,n){let r=vn(e,t,n);if(console.warn(r),xn.includes(e))throw RangeError(r)}function vn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var yn,bn,xn;function Sn(){return(Sn=e((()=>{yn=/^D+$/,bn=/^Y+$/,xn=[`D`,`DD`,`YY`,`YYYY`]})))()}function V(e,t,n){let r=S(),i=n?.locale??r.locale??qt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=v(e,n?.in);if(!Ze(s))throw RangeError(`Invalid time value`);let c=t.match(Tn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=pn[t];return n(e,i.formatLong)}return e}).join(``).match(wn).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Cn(e)};if(ln[t])return{isToken:!0,value:e};if(t.match(On))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&gn(a)||!n?.useAdditionalDayOfYearTokens&&hn(a))&&_n(a,t,String(e));let o=ln[a[0]];return o(s,a,i.localize,l)}).join(``)}function Cn(e){let t=e.match(En);return t?t[1].replace(Dn,`'`):e}var wn,Tn,En,Dn,On;function kn(){return(kn=e((()=>{Jt(),C(),un(),mn(),Sn(),Qe(),y(),wn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,En=/^'([^]*?)'?$/,Dn=/''/g,On=/[a-zA-Z]/})))()}function An(e,t){let n=v(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=I(n.getDate(),2),t=I(n.getMonth()+1,2);a=`${I(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=I(Math.trunc(t/60),2),r=I(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=I(n.getHours(),2),r=I(n.getMinutes(),2),i=I(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function jn(){return(jn=e((()=>{y()})))()}function Mn(e,t){return v(e,t?.in).getDate()}function Nn(){return(Nn=e((()=>{y()})))()}function Pn(e,t){return v(e,t?.in).getDay()}function Fn(){return(Fn=e((()=>{y()})))()}function In(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Mn(v(e,t?.in));if(isNaN(i))return NaN;let a=r-Pn(at(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function Ln(){return(Ln=e((()=>{C(),Nn(),Fn(),ot(),y()})))()}function Rn(e,t){let n=v(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),v(n,t?.in)}function zn(){return(zn=e((()=>{y()})))()}function Bn(e,t,n){let[r,i]=O(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Vn(){return(Vn=e((()=>{k()})))()}function Hn(e,t){return qe(g(t?.in||e,e),Ge(t?.in||e))}function Un(){return(Un=e((()=>{_(),Ke(),Je()})))()}function Wn(e,t,n){return b(e,-t,n)}function Gn(){return(Gn=e((()=>{x()})))()}function Kn(e){return A(Date.now(),e)}function qn(){return(qn=e((()=>{j()})))()}function Jn(e,t,n){return Me(e,-t,n)}function Yn(){return(Yn=e((()=>{Ne()})))()}var Xn,Zn;function Qn(){return(Qn=e((()=>{Xn={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},Zn=(e,t,n)=>{let r,i=Xn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var $n,er,tr,nr;function rr(){return(rr=e((()=>{$n={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},er={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},tr={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},nr={date:M({formats:$n,defaultWidth:`full`}),time:M({formats:er,defaultWidth:`full`}),dateTime:M({formats:tr,defaultWidth:`full`})}})))()}var ir,ar;function or(){return(or=e((()=>{ir={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},ar=(e,t,n,r)=>ir[e]})))()}var sr,cr,lr,ur,dr,fr,pr,mr;function hr(){return(hr=e((()=>{sr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},cr={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},lr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},ur={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},dr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},fr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},pr=(e,t)=>Number(e)+`.`,mr={ordinalNumber:pr,era:N({values:sr,defaultWidth:`wide`}),quarter:N({values:cr,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:lr,defaultWidth:`wide`}),day:N({values:ur,defaultWidth:`wide`}),dayPeriod:N({values:dr,defaultWidth:`wide`,formattingValues:fr,defaultFormattingWidth:`wide`})}})))()}var gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or;function kr(){return(kr=e((()=>{gr=/^(\d+)(\.)?/i,_r=/\d+/i,vr={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},yr={any:[/^f/i,/^(v|e)/i]},br={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},xr={any:[/1/i,/2/i,/3/i,/4/i]},Sr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Cr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wr={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Tr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Er={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},Dr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Or={ordinalNumber:F({matchPattern:gr,parsePattern:_r,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:vr,defaultMatchWidth:`wide`,parsePatterns:yr,defaultParseWidth:`any`}),quarter:P({matchPatterns:br,defaultMatchWidth:`wide`,parsePatterns:xr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:Sr,defaultMatchWidth:`wide`,parsePatterns:Cr,defaultParseWidth:`any`}),day:P({matchPatterns:wr,defaultMatchWidth:`wide`,parsePatterns:Tr,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Er,defaultMatchWidth:`any`,parsePatterns:Dr,defaultParseWidth:`any`})}})))()}var Ar;function jr(){return(jr=e((()=>{Qn(),rr(),or(),hr(),kr(),Ar={code:`da`,formatDistance:Zn,formatLong:nr,formatRelative:ar,localize:mr,match:Or,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Mr,Nr,Pr,Fr;function Ir(){return(Ir=e((()=>{Mr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Nr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Pr={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Fr={date:M({formats:Mr,defaultWidth:`full`}),time:M({formats:Nr,defaultWidth:`full`}),dateTime:M({formats:Pr,defaultWidth:`full`})}})))()}var Lr;function Rr(){return(Rr=e((()=>{pt(),xt(),At(),Kt(),Ir(),Lr={code:`en-GB`,formatDistance:ft,formatLong:Fr,formatRelative:bt,localize:kt,match:Gt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function zr(e){return e.replace(/sekuntia?/,`sekunnin`)}function Br(e){return e.replace(/minuuttia?/,`minuutin`)}function Vr(e){return e.replace(/tuntia?/,`tunnin`)}function Hr(e){return e.replace(/päivää?/,`päivän`)}function Ur(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Wr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function H(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Gr,Kr;function qr(){return(qr=e((()=>{Gr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:zr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:zr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Br},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Br},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Vr},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Vr},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Hr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Ur},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Ur},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Wr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Wr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:H},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:H},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:H},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:H}},Kr=(e,t,n)=>{let r=Gr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var Jr,Yr,Xr,Zr;function Qr(){return(Qr=e((()=>{Jr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Yr={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},Xr={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Zr={date:M({formats:Jr,defaultWidth:`full`}),time:M({formats:Yr,defaultWidth:`full`}),dateTime:M({formats:Xr,defaultWidth:`full`})}})))()}var $r,ei;function ti(){return(ti=e((()=>{$r={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},ei=(e,t,n,r)=>$r[e]})))()}var ni,ri,U,ii,W,ai,oi,si,ci;function li(){return(li=e((()=>{ni={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ri={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},U={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},ii={narrow:U.narrow,abbreviated:U.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},W={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},ai={narrow:W.narrow,short:W.short,abbreviated:W.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},oi={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},si=(e,t)=>Number(e)+`.`,ci={ordinalNumber:si,era:N({values:ni,defaultWidth:`wide`}),quarter:N({values:ri,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:U,defaultWidth:`wide`,formattingValues:ii,defaultFormattingWidth:`wide`}),day:N({values:W,defaultWidth:`wide`,formattingValues:ai,defaultFormattingWidth:`wide`}),dayPeriod:N({values:oi,defaultWidth:`wide`})}})))()}var ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si;function Ci(){return(Ci=e((()=>{ui=/^(\d+)(\.)/i,di=/\d+/i,fi={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},pi={any:[/^e/i,/^j/i]},mi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},hi={any:[/1/i,/2/i,/3/i,/4/i]},gi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},_i={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},vi={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},yi={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},bi={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},xi={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},Si={ordinalNumber:F({matchPattern:ui,parsePattern:di,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:fi,defaultMatchWidth:`wide`,parsePatterns:pi,defaultParseWidth:`any`}),quarter:P({matchPatterns:mi,defaultMatchWidth:`wide`,parsePatterns:hi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:gi,defaultMatchWidth:`wide`,parsePatterns:_i,defaultParseWidth:`any`}),day:P({matchPatterns:vi,defaultMatchWidth:`wide`,parsePatterns:yi,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:bi,defaultMatchWidth:`any`,parsePatterns:xi,defaultParseWidth:`any`})}})))()}var wi;function Ti(){return(Ti=e((()=>{qr(),Qr(),ti(),li(),Ci(),wi={code:`fi`,formatDistance:Kr,formatLong:Zr,formatRelative:ei,localize:ci,match:Si,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ei,Di;function Oi(){return(Oi=e((()=>{Ei={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Di=(e,t,n)=>{let r,i=Ei[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var ki,Ai,ji,Mi;function Ni(){return(Ni=e((()=>{ki={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Ai={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ji={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Mi={date:M({formats:ki,defaultWidth:`full`}),time:M({formats:Ai,defaultWidth:`full`}),dateTime:M({formats:ji,defaultWidth:`full`})}})))()}var Pi,Fi;function Ii(){return(Ii=e((()=>{Pi={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Fi=(e,t,n,r)=>Pi[e]})))()}var Li,Ri,zi,Bi,Vi,Hi,Ui;function Wi(){return(Wi=e((()=>{Li={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Ri={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},zi={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Bi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Vi={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Hi=(e,t)=>Number(e)+`.`,Ui={ordinalNumber:Hi,era:N({values:Li,defaultWidth:`wide`}),quarter:N({values:Ri,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:zi,defaultWidth:`wide`}),day:N({values:Bi,defaultWidth:`wide`}),dayPeriod:N({values:Vi,defaultWidth:`wide`})}})))()}var Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra;function ia(){return(ia=e((()=>{Gi=/^(\d+)\.?/i,Ki=/\d+/i,qi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ji={any:[/^f/i,/^e/i]},Yi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Xi={any:[/1/i,/2/i,/3/i,/4/i]},Zi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Qi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},$i={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ea={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},ta={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},na={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ra={ordinalNumber:F({matchPattern:Gi,parsePattern:Ki,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:qi,defaultMatchWidth:`wide`,parsePatterns:Ji,defaultParseWidth:`any`}),quarter:P({matchPatterns:Yi,defaultMatchWidth:`wide`,parsePatterns:Xi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:Zi,defaultMatchWidth:`wide`,parsePatterns:Qi,defaultParseWidth:`any`}),day:P({matchPatterns:$i,defaultMatchWidth:`wide`,parsePatterns:ea,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:ta,defaultMatchWidth:`any`,parsePatterns:na,defaultParseWidth:`any`})}})))()}var aa;function oa(){return(oa=e((()=>{Oi(),Ni(),Ii(),Wi(),ia(),aa={code:`nb`,formatDistance:Di,formatLong:Mi,formatRelative:Fi,localize:Ui,match:ra,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var sa,ca,la;function ua(){return(ua=e((()=>{sa={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},ca=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],la=(e,t,n)=>{let r,i=sa[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?ca[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var da,fa,pa,ma;function ha(){return(ha=e((()=>{da={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},fa={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},pa={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ma={date:M({formats:da,defaultWidth:`full`}),time:M({formats:fa,defaultWidth:`full`}),dateTime:M({formats:pa,defaultWidth:`full`})}})))()}var ga,_a;function va(){return(va=e((()=>{ga={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},_a=(e,t,n,r)=>ga[e]})))()}var ya,ba,xa,Sa,Ca,wa,Ta,Ea;function Da(){return(Da=e((()=>{ya={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},ba={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},xa={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Sa={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Ca={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},wa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Ta=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Ea={ordinalNumber:Ta,era:N({values:ya,defaultWidth:`wide`}),quarter:N({values:ba,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:N({values:xa,defaultWidth:`wide`}),day:N({values:Sa,defaultWidth:`wide`}),dayPeriod:N({values:Ca,defaultWidth:`wide`,formattingValues:wa,defaultFormattingWidth:`wide`})}})))()}var Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba;function Va(){return(Va=e((()=>{Oa=/^(\d+)(:a|:e)?/i,ka=/\d+/i,Aa={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},ja={any:[/^f/i,/^[ev]/i]},Ma={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},Na={any:[/1/i,/2/i,/3/i,/4/i]},Pa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Fa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ia={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},La={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ra={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},za={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ba={ordinalNumber:F({matchPattern:Oa,parsePattern:ka,valueCallback:e=>parseInt(e,10)}),era:P({matchPatterns:Aa,defaultMatchWidth:`wide`,parsePatterns:ja,defaultParseWidth:`any`}),quarter:P({matchPatterns:Ma,defaultMatchWidth:`wide`,parsePatterns:Na,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:P({matchPatterns:Pa,defaultMatchWidth:`wide`,parsePatterns:Fa,defaultParseWidth:`any`}),day:P({matchPatterns:Ia,defaultMatchWidth:`wide`,parsePatterns:La,defaultParseWidth:`any`}),dayPeriod:P({matchPatterns:Ra,defaultMatchWidth:`any`,parsePatterns:za,defaultParseWidth:`any`})}})))()}var Ha;function Ua(){return(Ua=e((()=>{ua(),ha(),va(),Da(),Va(),Ha={code:`sv`,formatDistance:la,formatLong:ma,formatRelative:_a,localize:Ea,match:Ba,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Wa,Ga,Ka;function qa(){return(qa=e((()=>{i(),ae(),Wa=`important`,Ga=` !important`,Ka=oe(class extends ie{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ga);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Wa:``):n[e]=r}}return s}})})))()}function Ja(){return(Ja=e((()=>{qa()})))()}var Ya;function Xa(){return(Xa=e((()=>{Ya=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var Za;function Qa(){return(Qa=e((()=>{Za=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var $a;function eo(){return(eo=e((()=>{$a=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var ro;function io(){return(io=e((()=>{ro=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ao;function oo(){return(oo=e((()=>{r(),ao=d`
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
`})))()}var so;function co(){return(co=e((()=>{r(),so=d`
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
`})))()}var lo;function uo(){return(uo=e((()=>{r(),lo=d`
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
`})))()}var fo;function po(){return(po=e((()=>{r(),fo=d`
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
`})))()}function mo(e){if(typeof e!=`string`)return null;let t=e;vo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function ho(e=typeof navigator<`u`?navigator.userAgent:``){let t=yo.test(e),n=bo.test(e)&&!xo.test(e);return t||n?`text`:`date`}function go(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function _o(e,t){if(!vo.exec(e))return e;let[n,r,i]=e.split(`-`);return go(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var vo,yo,bo,xo;function So(){return(So=e((()=>{vo=/^\d{4}-\d{2}-\d{2}$/,yo=/iP(hone|od|ad)/,bo=/Safari/,xo=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var G,K,q,J,Co,Y,X,Z;function wo(){return(wo=e((()=>{ee(),_e(),x(),Ne(),Be(),nt(),it(),ut(),kn(),jn(),Nn(),Ln(),Je(),Vn(),Un(),zn(),ot(),qn(),T(),Gn(),Yn(),jr(),Rr(),Ti(),oa(),Ua(),r(),c(),ue(),be(),Ja(),de(),te(),pe(),Xa(),Qa(),eo(),no(),io(),oo(),co(),uo(),po(),So(),G=ho(),K=`calendar`,q=`input`,J=`toggle`,Co=`wrapper`,Y=`previous`,X={en:Lr,nb:aa,sv:Ha,da:Ar,fi:wi},Z=class extends ve(o){static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,ao,so,lo,fo]}get selectedDate(){return this.value?mo(this.value)??null:null}get month(){return at(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=rt({start:at(e),end:Rn(e)},{locale:this.locale}).map(e=>({start:e,end:lt(e,{locale:this.locale})})).map(e=>tt(e));if(Bn(t,e)){let e=In(t,{locale:this.locale})-1,r=ze(t,w(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||p()||`en`}get#n(){return G===`text`&&this.value?_o(this.value,this.#t):this.value||``}resetFormControl(){this.value=this.#e}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Me(this.month,1)}#a(){this.navigationDate=Jn(this.month,1)}async#o(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#s(e){this.value=e.target.value}#c(e){e.preventDefault(),this.isCalendarOpen=!0}#l(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#u(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Wn(t,7);break;case`ArrowLeft`:n=Wn(t,1);break;case`Home`:n=w(t,{locale:this.locale});break;case`PageUp`:n=Jn(t,1);break;case`ArrowDown`:n=b(t,7);break;case`ArrowRight`:n=b(t,1);break;case`End`:n=lt(t,{locale:this.locale});break;case`PageDown`:n=Me(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===Y&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#d(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.toggleButton.focus(),this.#o()):(this.value=t,this.input.value=this.#n,this.isCalendarOpen=!1,this.#o())}constructor(){super(),this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Kn(),this.locale=Lr,this.#e=void 0,ne(Za,to,$a,Ya,ro);let e=p();e&&X[e]&&(this.locale=X[e]),this._onClickOutside=this._onClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),this.#e=this.value;let e=this.lang;if(e&&X[e]&&(this.locale=X[e]),this.value){let e=mo(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.setValue(this.value)}render(){return a`
			<div class="w-datepicker-wrapper" id="${Co}">
				<label class="w-datepicker-input-label" for="${q}"
					>${this.label}</label
				>
				<div class="w-datepicker-input-wrapper">
					<input
						id="${q}"
						type="${G}"
						name="${ye(this.name)}"
						placeholder="${ye(G===`text`?go(this.#t):void 0)}"
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
				style="${Ka({display:this.isCalendarOpen?void 0:`none`})}"
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
											${e.map(e=>{if(!Bn(this.month,e))return a`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&qe(e,this.selectedDate),r=e===this.navigationDate;return a`<td
													aria-current="${ye(Hn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${V(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${le({"w-datepicker__day":!0,"w-datepicker__day--today":Hn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${An(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#d}"
													@keydown="${t?void 0:this.#d}"
												>
													<div>${Mn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},u([l({reflect:!0})],Z.prototype,`label`,void 0),u([l({reflect:!0})],Z.prototype,`lang`,void 0),u([l({reflect:!0})],Z.prototype,`name`,void 0),u([l({reflect:!0})],Z.prototype,`value`,void 0),u([l({attribute:`header-format`})],Z.prototype,`headerFormat`,void 0),u([l({attribute:`weekday-format`})],Z.prototype,`weekdayFormat`,void 0),u([l({attribute:!1})],Z.prototype,`isDayDisabled`,void 0),u([l({attribute:`day-format`})],Z.prototype,`dayFormat`,void 0),u([n()],Z.prototype,`isCalendarOpen`,void 0),u([n()],Z.prototype,`navigationDate`,void 0),u([n()],Z.prototype,`locale`,void 0),u([n()],Z.prototype,`selectedDate`,null),u([n()],Z.prototype,`month`,null),u([n()],Z.prototype,`weeks`,null),u([m(`#${K}`)],Z.prototype,`calendar`,void 0),u([m(`#${q}`,!0)],Z.prototype,`input`,void 0),u([m(`#${J}`,!0)],Z.prototype,`toggleButton`,void 0),u([m(`#${Co}`,!0)],Z.prototype,`wrapper`,void 0),u([m(`#${Y}`)],Z.prototype,`previousMonthButton`,void 0),u([m(`[aria-current="date"]`)],Z.prototype,`todayCell`,void 0),u([m(`[data-navigation="true"]`)],Z.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,Z)})))()}var To=t({Default:()=>Q,DisableCalendarDates:()=>$,__namedExportsOrder:()=>Mo,default:()=>jo}),Eo,Do,Oo,ko,Ao,jo,Q,$,Mo;function No(){return(No=e((()=>{ge(),se(),r(),xe(),wo(),{events:Oo,args:ko,argTypes:Ao}=ce(`w-datepicker`),jo={title:`Forms/Datepicker`,render(e){return a(Eo||=Se([`
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
        `]),me(he(e)))},args:ko,argTypes:Ao,parameters:{actions:{handles:Oo}}},Q={args:{label:`Date`}},$={args:{label:`Date`},render(e){return a(Do||=Se([`
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
}`,...$.parameters?.docs?.source}}},Mo=[`Default`,`DisableCalendarDates`]})))()}export{To as n,No as r,Q as t};