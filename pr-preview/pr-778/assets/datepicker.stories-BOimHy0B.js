import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{c as n,h as r,i,l as a,n as o,o as s,t as c}from"./lit-rOiCLj4P.js";import{a as l,n as u,o as ee,r as te,t as ne}from"./i18n-DlmjyDK4.js";import{d as re,f as ie,i as d,l as f,p as ae,r as oe,s as p,t as m,u as se}from"./decorate-CrDY0Lq8.js";import{n as ce,t as le}from"./dist-BruTL-ha.js";import{n as ue,t as de}from"./class-map-CyjT4uyL.js";import{t as fe}from"./icon-CCwOAt1w.js";import{n as pe,t as me}from"./styles-DTXae_Hw.js";import{i as he,n as ge,r as _e}from"./utilities-BItNft0P.js";import{n as ve,t as ye}from"./FormControlMixin-wSdHiYtY.js";import{r as h,t as be}from"./if-defined-Ct7Um83u.js";import{t as xe}from"./button-nWc8ShzL.js";import{t as Se}from"./taggedTemplateLiteral-CWT6dLlS.js";import{t as Ce}from"./tooltip-BBEOJ7Q4.js";var we,Te,Ee,De;function g(){return(g=e((()=>{we=10**8*24*60*60*1e3,-we,Te=6048e5,Ee=864e5,De=Symbol.for(`constructDateFrom`)})))()}function _(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&De in e?e[De](t):e instanceof Date?new e.constructor(t):new Date(t)}function v(){return(v=e((()=>{g()})))()}function y(e,t){return _(t||e,e)}function b(){return(b=e((()=>{v()})))()}function x(e,t,n){let r=y(e,n?.in);return isNaN(t)?_(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function S(){return(S=e((()=>{v(),b()})))()}function Oe(e,t,n){let r=y(e,n?.in);if(isNaN(t))return _(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=_(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function ke(){return(ke=e((()=>{v(),b()})))()}function C(){return Ae}var Ae;function w(){return(w=e((()=>{Ae={}})))()}function T(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=y(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function E(){return(E=e((()=>{w(),b()})))()}function D(e,t){return T(e,{...t,weekStartsOn:1})}function O(){return(O=e((()=>{E()})))()}function je(e,t){let n=y(e,t?.in),r=n.getFullYear(),i=_(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=D(i),o=_(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=D(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Me(){return(Me=e((()=>{v(),O(),b()})))()}function Ne(e){let t=y(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-n}function Pe(){return(Pe=e((()=>{b()})))()}function k(e,...t){let n=_.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function A(){return(A=e((()=>{v()})))()}function j(e,t){let n=y(e,t?.in);return n.setHours(0,0,0,0),n}function M(){return(M=e((()=>{b()})))()}function Fe(e,t,n){let[r,i]=k(n?.in,e,t),a=j(r),o=j(i),s=+a-Ne(a),c=+o-Ne(o);return Math.round((s-c)/Ee)}function Ie(){return(Ie=e((()=>{Pe(),A(),g(),M()})))()}function Le(e,t){let n=je(e,t),r=_(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),D(r)}function Re(){return(Re=e((()=>{v(),Me(),O()})))()}function ze(e,t,n){return x(e,t*7,n)}function Be(){return(Be=e((()=>{S()})))()}function Ve(e){return _(e,Date.now())}function He(){return(He=e((()=>{v()})))()}function Ue(e,t,n){let[r,i]=k(n?.in,e,t);return+j(r)==+j(i)}function We(){return(We=e((()=>{A(),M()})))()}function Ge(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function Ke(){return(Ke=e((()=>{})))()}function qe(e){return!(!Ge(e)&&typeof e!=`number`||isNaN(+y(e)))}function Je(){return(Je=e((()=>{Ke(),b()})))()}function Ye(e,t){let[n,r]=k(e,t.start,t.end);return{start:n,end:r}}function Xe(){return(Xe=e((()=>{A()})))()}function Ze(e,t){let{start:n,end:r}=Ye(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(_(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function Qe(){return(Qe=e((()=>{Xe(),v()})))()}function $e(e,t){let{start:n,end:r}=Ye(t?.in,e),i=+n>+r,a=T(i?r:n,t),o=T(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(_(n,c)),c=ze(c,l),c.setHours(15);return i?u.reverse():u}function et(){return(et=e((()=>{Xe(),Be(),v(),E()})))()}function tt(e,t){let n=y(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function nt(){return(nt=e((()=>{b()})))()}function rt(e,t){let n=y(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function it(){return(it=e((()=>{b()})))()}function at(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=y(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function ot(){return(ot=e((()=>{w(),b()})))()}var st,ct;function lt(){return(lt=e((()=>{st={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},ct=(e,t,n)=>{let r,i=st[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function N(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var ut,dt,ft,pt;function mt(){return(mt=e((()=>{ut={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},dt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},ft={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},pt={date:N({formats:ut,defaultWidth:`full`}),time:N({formats:dt,defaultWidth:`full`}),dateTime:N({formats:ft,defaultWidth:`full`})}})))()}var ht,gt;function _t(){return(_t=e((()=>{ht={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},gt=(e,t,n,r)=>ht[e]})))()}function P(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var vt,yt,bt,xt,St,Ct,wt,Tt;function Et(){return(Et=e((()=>{vt={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},yt={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},bt={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},xt={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},St={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},Ct={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},wt=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Tt={ordinalNumber:wt,era:P({values:vt,defaultWidth:`wide`}),quarter:P({values:yt,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:bt,defaultWidth:`wide`}),day:P({values:xt,defaultWidth:`wide`}),dayPeriod:P({values:St,defaultWidth:`wide`,formattingValues:Ct,defaultFormattingWidth:`wide`})}})))()}function F(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Ot(s,e=>e.test(o)):Dt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Dt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ot(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function I(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt;function Ht(){return(Ht=e((()=>{kt=/^(\d+)(th|st|nd|rd)?/i,At=/\d+/i,jt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mt={any:[/^b/i,/^(a|c)/i]},Nt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pt={any:[/1/i,/2/i,/3/i,/4/i]},Ft={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},It={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Lt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},zt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Bt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Vt={ordinalNumber:I({matchPattern:kt,parsePattern:At,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:jt,defaultMatchWidth:`wide`,parsePatterns:Mt,defaultParseWidth:`any`}),quarter:F({matchPatterns:Nt,defaultMatchWidth:`wide`,parsePatterns:Pt,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Ft,defaultMatchWidth:`wide`,parsePatterns:It,defaultParseWidth:`any`}),day:F({matchPatterns:Lt,defaultMatchWidth:`wide`,parsePatterns:Rt,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:zt,defaultMatchWidth:`any`,parsePatterns:Bt,defaultParseWidth:`any`})}})))()}var Ut;function Wt(){return(Wt=e((()=>{lt(),mt(),_t(),Et(),Ht(),Ut={code:`en-US`,formatDistance:ct,formatLong:pt,formatRelative:gt,localize:Tt,match:Vt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function Gt(e,t){let n=y(e,t?.in);return Fe(n,rt(n))+1}function Kt(){return(Kt=e((()=>{Ie(),it(),b()})))()}function qt(e,t){let n=y(e,t?.in),r=+D(n)-Le(n);return Math.round(r/Te)+1}function Jt(){return(Jt=e((()=>{g(),O(),Re(),b()})))()}function Yt(e,t){let n=y(e,t?.in),r=n.getFullYear(),i=C(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=_(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=T(o,t),c=_(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=T(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function Xt(){return(Xt=e((()=>{w(),v(),E(),b()})))()}function Zt(e,t){let n=C(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=Yt(e,t),a=_(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),T(a,t)}function Qt(){return(Qt=e((()=>{w(),v(),Xt(),E()})))()}function $t(e,t){let n=y(e,t?.in),r=+T(n,t)-Zt(n,t);return Math.round(r/Te)+1}function en(){return(en=e((()=>{g(),E(),Qt(),b()})))()}function L(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var R;function tn(){return(tn=e((()=>{R={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return L(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):L(n+1,2)},d(e,t){return L(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return L(e.getHours()%12||12,t.length)},H(e,t){return L(e.getHours(),t.length)},m(e,t){return L(e.getMinutes(),t.length)},s(e,t){return L(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return L(Math.trunc(r*10**(n-3)),t.length)}}})))()}function nn(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+L(a,2)}function rn(e,t){return e%60==0?(e>0?`-`:`+`)+L(Math.abs(e)/60,2):z(e,t)}function z(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=L(Math.trunc(r/60),2),a=L(r%60,2);return n+i+t+a}var B,an;function on(){return(on=e((()=>{Kt(),Jt(),Me(),en(),Xt(),tn(),B={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},an={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return R.y(e,t)},Y:function(e,t,n,r){let i=Yt(e,r),a=i>0?i:1-i;return t===`YY`?L(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):L(a,t.length)},R:function(e,t){return L(je(e),t.length)},u:function(e,t){return L(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return L(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return L(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return R.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return L(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=$t(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):L(i,t.length)},I:function(e,t,n){let r=qt(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):L(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):R.d(e,t)},D:function(e,t,n){let r=Gt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):L(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return L(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return L(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return L(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?B.noon:r===0?B.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?B.evening:r>=12?B.afternoon:r>=4?B.morning:B.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return R.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):R.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):L(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):R.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):R.s(e,t)},S:function(e,t){return R.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return rn(r);case`XXXX`:case`XX`:return z(r);default:return z(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return rn(r);case`xxxx`:case`xx`:return z(r);default:return z(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+nn(r,`:`);default:return`GMT`+z(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+nn(r,`:`);default:return`GMT`+z(r,`:`)}},t:function(e,t,n){return L(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return L(+e,t.length)}}})))()}var sn,cn,ln,un;function dn(){return(dn=e((()=>{sn=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},cn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},ln=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return sn(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,sn(r,t)).replace(`{{time}}`,cn(i,t))},un={p:cn,P:ln}})))()}function fn(e){return gn.test(e)}function pn(e){return _n.test(e)}function mn(e,t,n){let r=hn(e,t,n);if(console.warn(r),vn.includes(e))throw RangeError(r)}function hn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var gn,_n,vn;function yn(){return(yn=e((()=>{gn=/^D+$/,_n=/^Y+$/,vn=[`D`,`DD`,`YY`,`YYYY`]})))()}function V(e,t,n){let r=C(),i=n?.locale??r.locale??Ut,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=y(e,n?.in);if(!qe(s))throw RangeError(`Invalid time value`);let c=t.match(Sn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=un[t];return n(e,i.formatLong)}return e}).join(``).match(xn).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:bn(e)};if(an[t])return{isToken:!0,value:e};if(t.match(Tn))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&pn(a)||!n?.useAdditionalDayOfYearTokens&&fn(a))&&mn(a,t,String(e));let o=an[a[0]];return o(s,a,i.localize,l)}).join(``)}function bn(e){let t=e.match(Cn);return t?t[1].replace(wn,`'`):e}var xn,Sn,Cn,wn,Tn;function En(){return(En=e((()=>{Wt(),w(),on(),dn(),yn(),Je(),b(),xn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Sn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Cn=/^'([^]*?)'?$/,wn=/''/g,Tn=/[a-zA-Z]/})))()}function Dn(e,t){let n=y(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=L(n.getDate(),2),t=L(n.getMonth()+1,2);a=`${L(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=L(Math.trunc(t/60),2),r=L(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=L(n.getHours(),2),r=L(n.getMinutes(),2),i=L(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function On(){return(On=e((()=>{b()})))()}function kn(e,t){return y(e,t?.in).getDate()}function An(){return(An=e((()=>{b()})))()}function jn(e,t){return y(e,t?.in).getDay()}function Mn(){return(Mn=e((()=>{b()})))()}function Nn(e,t){let n=C(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=kn(y(e,t?.in));if(isNaN(i))return NaN;let a=r-jn(tt(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function Pn(){return(Pn=e((()=>{w(),An(),Mn(),nt(),b()})))()}function Fn(e,t){let n=y(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),y(n,t?.in)}function In(){return(In=e((()=>{b()})))()}function Ln(e,t,n){let[r,i]=k(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Rn(){return(Rn=e((()=>{A()})))()}function zn(e,t){return Ue(_(t?.in||e,e),Ve(t?.in||e))}function Bn(){return(Bn=e((()=>{v(),He(),We()})))()}function Vn(e,t,n){return x(e,-t,n)}function Hn(){return(Hn=e((()=>{S()})))()}function Un(e){return j(Date.now(),e)}function Wn(){return(Wn=e((()=>{M()})))()}function Gn(e,t,n){return Oe(e,-t,n)}function Kn(){return(Kn=e((()=>{ke()})))()}var qn,Jn;function Yn(){return(Yn=e((()=>{qn={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},Jn=(e,t,n)=>{let r,i=qn[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Xn,Zn,Qn,$n;function er(){return(er=e((()=>{Xn={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},Zn={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Qn={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},$n={date:N({formats:Xn,defaultWidth:`full`}),time:N({formats:Zn,defaultWidth:`full`}),dateTime:N({formats:Qn,defaultWidth:`full`})}})))()}var tr,nr;function rr(){return(rr=e((()=>{tr={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},nr=(e,t,n,r)=>tr[e]})))()}var ir,ar,or,sr,cr,lr,ur,dr;function fr(){return(fr=e((()=>{ir={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},ar={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},or={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},sr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},cr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},lr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},ur=(e,t)=>Number(e)+`.`,dr={ordinalNumber:ur,era:P({values:ir,defaultWidth:`wide`}),quarter:P({values:ar,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:or,defaultWidth:`wide`}),day:P({values:sr,defaultWidth:`wide`}),dayPeriod:P({values:cr,defaultWidth:`wide`,formattingValues:lr,defaultFormattingWidth:`wide`})}})))()}var pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=e((()=>{pr=/^(\d+)(\.)?/i,mr=/\d+/i,hr={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},gr={any:[/^f/i,/^(v|e)/i]},_r={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},vr={any:[/1/i,/2/i,/3/i,/4/i]},yr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},br={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xr={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Sr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Cr={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},wr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Tr={ordinalNumber:I({matchPattern:pr,parsePattern:mr,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:hr,defaultMatchWidth:`wide`,parsePatterns:gr,defaultParseWidth:`any`}),quarter:F({matchPatterns:_r,defaultMatchWidth:`wide`,parsePatterns:vr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:yr,defaultMatchWidth:`wide`,parsePatterns:br,defaultParseWidth:`any`}),day:F({matchPatterns:xr,defaultMatchWidth:`wide`,parsePatterns:Sr,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Cr,defaultMatchWidth:`any`,parsePatterns:wr,defaultParseWidth:`any`})}})))()}var Dr;function Or(){return(Or=e((()=>{Yn(),er(),rr(),fr(),Er(),Dr={code:`da`,formatDistance:Jn,formatLong:$n,formatRelative:nr,localize:dr,match:Tr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var kr,Ar,jr,Mr;function Nr(){return(Nr=e((()=>{kr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Ar={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},jr={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Mr={date:N({formats:kr,defaultWidth:`full`}),time:N({formats:Ar,defaultWidth:`full`}),dateTime:N({formats:jr,defaultWidth:`full`})}})))()}var Pr;function Fr(){return(Fr=e((()=>{lt(),_t(),Et(),Ht(),Nr(),Pr={code:`en-GB`,formatDistance:ct,formatLong:Mr,formatRelative:gt,localize:Tt,match:Vt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Ir(e){return e.replace(/sekuntia?/,`sekunnin`)}function Lr(e){return e.replace(/minuuttia?/,`minuutin`)}function Rr(e){return e.replace(/tuntia?/,`tunnin`)}function zr(e){return e.replace(/päivää?/,`päivän`)}function Br(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Vr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function H(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Hr,Ur;function Wr(){return(Wr=e((()=>{Hr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Ir},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Ir},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Lr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Lr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Rr},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Rr},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:zr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Br},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Br},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Vr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Vr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:H},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:H},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:H},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:H}},Ur=(e,t,n)=>{let r=Hr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var Gr,Kr,qr,Jr;function Yr(){return(Yr=e((()=>{Gr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},Kr={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},qr={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Jr={date:N({formats:Gr,defaultWidth:`full`}),time:N({formats:Kr,defaultWidth:`full`}),dateTime:N({formats:qr,defaultWidth:`full`})}})))()}var Xr,Zr;function Qr(){return(Qr=e((()=>{Xr={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},Zr=(e,t,n,r)=>Xr[e]})))()}var $r,ei,ti,ni,U,ri,ii,ai,oi;function si(){return(si=e((()=>{$r={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ei={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},ti={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},ni={narrow:ti.narrow,abbreviated:ti.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},U={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},ri={narrow:U.narrow,short:U.short,abbreviated:U.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},ii={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},ai=(e,t)=>Number(e)+`.`,oi={ordinalNumber:ai,era:P({values:$r,defaultWidth:`wide`}),quarter:P({values:ei,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:ti,defaultWidth:`wide`,formattingValues:ni,defaultFormattingWidth:`wide`}),day:P({values:U,defaultWidth:`wide`,formattingValues:ri,defaultFormattingWidth:`wide`}),dayPeriod:P({values:ii,defaultWidth:`wide`})}})))()}var ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi;function xi(){return(xi=e((()=>{ci=/^(\d+)(\.)/i,li=/\d+/i,ui={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},di={any:[/^e/i,/^j/i]},fi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},pi={any:[/1/i,/2/i,/3/i,/4/i]},mi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},hi={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},gi={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},_i={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},vi={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},yi={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},bi={ordinalNumber:I({matchPattern:ci,parsePattern:li,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:ui,defaultMatchWidth:`wide`,parsePatterns:di,defaultParseWidth:`any`}),quarter:F({matchPatterns:fi,defaultMatchWidth:`wide`,parsePatterns:pi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:mi,defaultMatchWidth:`wide`,parsePatterns:hi,defaultParseWidth:`any`}),day:F({matchPatterns:gi,defaultMatchWidth:`wide`,parsePatterns:_i,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:vi,defaultMatchWidth:`any`,parsePatterns:yi,defaultParseWidth:`any`})}})))()}var Si;function Ci(){return(Ci=e((()=>{Wr(),Yr(),Qr(),si(),xi(),Si={code:`fi`,formatDistance:Ur,formatLong:Jr,formatRelative:Zr,localize:oi,match:bi,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var wi,Ti;function Ei(){return(Ei=e((()=>{wi={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Ti=(e,t,n)=>{let r,i=wi[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Di,Oi,ki,Ai;function ji(){return(ji=e((()=>{Di={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Oi={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ki={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Ai={date:N({formats:Di,defaultWidth:`full`}),time:N({formats:Oi,defaultWidth:`full`}),dateTime:N({formats:ki,defaultWidth:`full`})}})))()}var Mi,Ni;function Pi(){return(Pi=e((()=>{Mi={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Ni=(e,t,n,r)=>Mi[e]})))()}var Fi,Ii,Li,Ri,zi,Bi,Vi;function Hi(){return(Hi=e((()=>{Fi={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Ii={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Li={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Ri={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},zi={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Bi=(e,t)=>Number(e)+`.`,Vi={ordinalNumber:Bi,era:P({values:Fi,defaultWidth:`wide`}),quarter:P({values:Ii,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:Li,defaultWidth:`wide`}),day:P({values:Ri,defaultWidth:`wide`}),dayPeriod:P({values:zi,defaultWidth:`wide`})}})))()}var Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta;function na(){return(na=e((()=>{Ui=/^(\d+)\.?/i,Wi=/\d+/i,Gi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ki={any:[/^f/i,/^e/i]},qi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Ji={any:[/1/i,/2/i,/3/i,/4/i]},Yi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Xi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Zi={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Qi={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},$i={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},ea={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ta={ordinalNumber:I({matchPattern:Ui,parsePattern:Wi,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Gi,defaultMatchWidth:`wide`,parsePatterns:Ki,defaultParseWidth:`any`}),quarter:F({matchPatterns:qi,defaultMatchWidth:`wide`,parsePatterns:Ji,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Yi,defaultMatchWidth:`wide`,parsePatterns:Xi,defaultParseWidth:`any`}),day:F({matchPatterns:Zi,defaultMatchWidth:`wide`,parsePatterns:Qi,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:$i,defaultMatchWidth:`any`,parsePatterns:ea,defaultParseWidth:`any`})}})))()}var ra;function ia(){return(ia=e((()=>{Ei(),ji(),Pi(),Hi(),na(),ra={code:`nb`,formatDistance:Ti,formatLong:Ai,formatRelative:Ni,localize:Vi,match:ta,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var aa,oa,sa;function ca(){return(ca=e((()=>{aa={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},oa=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],sa=(e,t,n)=>{let r,i=aa[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?oa[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var la,ua,da,fa;function pa(){return(pa=e((()=>{la={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},ua={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},da={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},fa={date:N({formats:la,defaultWidth:`full`}),time:N({formats:ua,defaultWidth:`full`}),dateTime:N({formats:da,defaultWidth:`full`})}})))()}var ma,ha;function ga(){return(ga=e((()=>{ma={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},ha=(e,t,n,r)=>ma[e]})))()}var _a,va,ya,ba,xa,Sa,Ca,wa;function Ta(){return(Ta=e((()=>{_a={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},va={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},ya={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},ba={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},xa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Sa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Ca=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},wa={ordinalNumber:Ca,era:P({values:_a,defaultWidth:`wide`}),quarter:P({values:va,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:P({values:ya,defaultWidth:`wide`}),day:P({values:ba,defaultWidth:`wide`}),dayPeriod:P({values:xa,defaultWidth:`wide`,formattingValues:Sa,defaultFormattingWidth:`wide`})}})))()}var Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra;function za(){return(za=e((()=>{Ea=/^(\d+)(:a|:e)?/i,Da=/\d+/i,Oa={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},ka={any:[/^f/i,/^[ev]/i]},Aa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},ja={any:[/1/i,/2/i,/3/i,/4/i]},Ma={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Na={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Pa={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},Fa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ia={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},La={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ra={ordinalNumber:I({matchPattern:Ea,parsePattern:Da,valueCallback:e=>parseInt(e,10)}),era:F({matchPatterns:Oa,defaultMatchWidth:`wide`,parsePatterns:ka,defaultParseWidth:`any`}),quarter:F({matchPatterns:Aa,defaultMatchWidth:`wide`,parsePatterns:ja,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:F({matchPatterns:Ma,defaultMatchWidth:`wide`,parsePatterns:Na,defaultParseWidth:`any`}),day:F({matchPatterns:Pa,defaultMatchWidth:`wide`,parsePatterns:Fa,defaultParseWidth:`any`}),dayPeriod:F({matchPatterns:Ia,defaultMatchWidth:`any`,parsePatterns:La,defaultParseWidth:`any`})}})))()}var Ba;function Va(){return(Va=e((()=>{ca(),pa(),ga(),Ta(),za(),Ba={code:`sv`,formatDistance:sa,formatLong:fa,formatRelative:ha,localize:wa,match:Ra,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{a(),ie(),Ha=`important`,Ua=` !`+Ha,Wa=se(class extends re{constructor(e){if(super(e),e.type!==ae.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ua);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ha:``):n[e]=r}}return s}})})))()}function Ka(){return(Ka=e((()=>{Ga()})))()}var qa;function Ja(){return(Ja=e((()=>{qa=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var Ya;function Xa(){return(Xa=e((()=>{Ya=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var Za;function Qa(){return(Qa=e((()=>{Za=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var $a;function eo(){return(eo=e((()=>{$a=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ro,io,ao;function oo(){return(oo=e((()=>{c(),ro=r`
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
`,io=r`
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
`,ao=r`
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
`})))()}var so;function co(){return(co=e((()=>{c(),so=r`
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
`})))()}var lo;function uo(){return(uo=e((()=>{c(),lo=r`
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
`})))()}var fo;function po(){return(po=e((()=>{c(),fo=r`
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
`})))()}function mo(e){if(typeof e!=`string`)return null;let t=e;vo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function ho(e=typeof navigator<`u`?navigator.userAgent:``){let t=yo.test(e),n=bo.test(e)&&!xo.test(e);return t||n?`text`:`date`}function go(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function _o(e,t){if(!vo.exec(e))return e;let[n,r,i]=e.split(`-`);return go(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var vo,yo,bo,xo;function So(){return(So=e((()=>{vo=/^\d{4}-\d{2}-\d{2}$/,yo=/iP(hone|od|ad)/,bo=/Safari/,xo=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var Co,W,wo,G,To,K,q,J;function Eo(){return(Eo=e((()=>{ee(),ve(),S(),ke(),Ie(),Qe(),et(),ot(),En(),On(),An(),Pn(),We(),Rn(),Bn(),In(),nt(),Wn(),E(),Hn(),Kn(),Or(),Fr(),Ci(),ia(),Va(),c(),oe(),de(),be(),Ka(),fe(),Ce(),te(),me(),Ja(),Xa(),Qa(),eo(),no(),oo(),co(),uo(),po(),So(),Co=ho(),W=`calendar`,wo=`input`,G=`toggle`,To=`wrapper`,K=`previous`,q={en:Pr,nb:ra,sv:Ba,da:Dr,fi:Si},J=class extends ye(o){static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[pe,ro,io,ao,so,lo,fo]}get selectedDate(){return this.value?mo(this.value)??null:null}get month(){return tt(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=$e({start:tt(e),end:Fn(e)},{locale:this.locale}).map(e=>({start:e,end:at(e,{locale:this.locale})})).map(e=>Ze(e));if(Ln(t,e)){let e=Nn(t,{locale:this.locale})-1,r=Fe(t,T(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||u()||`en`}get#n(){return Co===`text`&&this.value?_o(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Oe(this.month,1)}#a(){this.navigationDate=Gn(this.month,1)}#o;async#s(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#c(e){this.value=e.target.value}#l(){this.#y=!0,this.#C()}#u(e){e.preventDefault(),this.isCalendarOpen=!0}#d(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#f(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Vn(t,7);break;case`ArrowLeft`:n=Vn(t,1);break;case`Home`:n=T(t,{locale:this.locale});break;case`PageUp`:n=Gn(t,1);break;case`ArrowDown`:n=x(t,7);break;case`ArrowRight`:n=x(t,1);break;case`End`:n=at(t,{locale:this.locale});break;case`PageDown`:n=Oe(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#p(e){let t=e.currentTarget.dataset.date;this.value=t,this.input.value=this.#n,this.#C(),this.isCalendarOpen=!1,this.#s()}#m(e){e.key===`Enter`&&this.#g(e)}#h(e){e.key===` `&&this.#g(e)}#g(e){let t=e.currentTarget.dataset.date;this.value=t,this.input.value=this.#n,this.#C(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#s()}#_;#v;#y;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Un(),this.locale=Pr,this.#e=void 0,this.#o=``,this.#_=!1,this.#v=void 0,this.#y=!1,this.#S=e=>{e.preventDefault(),this.#y=!0,this.#C()},ne(Ya,$a,Za,qa,to);let e=u();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#y=!1,this.#x(),this.#C()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#C(),this.internals.checkValidity()}reportValidity(){return this.#y=!0,this.#C(),this.internals.checkValidity()}setCustomValidity(e){this.#o=e,e?(this.#C(),this.#b(e)):(this.#x(),this.#C())}#b(e){this.#_||(this.#v=this.helpText),this.#_=!0,this.invalid=!0,this.helpText=e}#x(){this.#_&&=(this.invalid=!1,this.helpText=this.#v,this.#v=void 0,!1)}#S;#C(){if(this.disabled){this.internals.setValidity({}),this.#x();return}let e={valueMissing:this.required&&!this.value,customError:this.#o!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#o:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#y&&this.#b(t)}else this.internals.setValidity({}),this.#x()}connectedCallback(){super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#S);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=mo(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#S),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#C()}firstUpdated(e){super.firstUpdated(e),this.#C()}render(){return n`
			<div class="w-datepicker-wrapper" id="${To}">
				<label class="w-datepicker-input-label" for="${wo}">
					${this.label}
					${this.optional&&!this.required?n`
									<span>
										${l._({id:`datepicker.label.optional`,message:`Optional`,comment:`Shown behind label when marked as optional`})}
									</span>
								`:i}
					${this.tooltip?n`
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
						id="${wo}"
						type="${Co}"
						name="${h(this.name)}"
						placeholder="${h(Co===`text`?go(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						?required=${this.required}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						aria-describedby="${h(this.helpText?`help-text`:this.ariaDescription?`aria-description`:void 0)}"
						aria-errormessage="${h(this._error?`help-text`:void 0)}"
						aria-invalid=${h(this.invalid?`true`:void 0)}
						@click="${this.#u}"
						@input="${this.#c}"
						@blur="${this.#l}"
						@keydown="${this.#d}"
					/>
					<w-button
						aria-label="${this.value?l.t({id:`datepicker.toggle.changeDate`,values:{currentDate:V(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):l.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${W}"
						class="w-datepicker-button"
						data-testid="${G}"
						id="${G}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#r}"
					>
						<w-icon
							name="Calendar"
							size="small"
							locale="${u()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?n`<div id="help-text" class="help-text">${this.helpText}</div>`:i}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Wa({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${l.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${W}"
					id="${W}"
					@keydown="${this.#f}"
				>
					<div class="w-datepicker__month-nav">
						<w-button
							aria-label="${l.t({id:`datepicker.calendar.previousMonth`,message:`Previous month`,comment:`Screen reader label for the previous month button.`})}"
							class="w-datepicker__month__nav__button"
							id="${K}"
							data-testid="${K}"
							variant="utility"
							quiet
							small
							@click="${this.#a}"
						>
							<w-icon
								name="ChevronLeft"
								size="small"
								locale="${u()}"
								class="flex"
							></w-icon>
						</w-button>
						<div aria-live="polite" class="w-datepicker__month__nav__header">
							${V(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${l.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${W}-next"
							variant="utility"
							quiet
							small
							@click="${this.#i}"
						>
							<w-icon
								name="ChevronRight"
								size="small"
								locale="${u()}"
								class="flex"
							></w-icon>
						</w-button>
					</div>
					<div class="w-datepicker__month">
						<table class="w-datepicker__table" role="grid">
							<thead class="w-datepicker__weekdays">
								<tr>
									${this.weeks[0].map(e=>n`<th class="w-datepicker__weekday">
												${V(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>n`<tr>
											${e.map(e=>{if(!Ln(this.month,e))return n`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,r=!!this.selectedDate&&Ue(e,this.selectedDate),i=e===this.navigationDate;return n`<td
													aria-current="${h(zn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${V(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${r}"
													class="${ue({"w-datepicker__day":!0,"w-datepicker__day--today":zn(e),"w-datepicker__day--selected":r,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":i})}"
													data-navigation="${i}"
													data-date="${Dn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${i?0:-1}"
													@click="${t?void 0:this.#p}"
													@keydown="${t?void 0:this.#m}"
													@keyup="${t?void 0:this.#h}"
												>
													<div>${kn(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},m([f({reflect:!0})],J.prototype,`label`,void 0),m([f({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),m([f({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),m([f({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),m([f({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),m([f({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),m([f({reflect:!0})],J.prototype,`lang`,void 0),m([f({reflect:!0})],J.prototype,`name`,void 0),m([f({reflect:!0})],J.prototype,`value`,void 0),m([f({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),m([f({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),m([f({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),m([f({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),m([f({attribute:!1})],J.prototype,`isDayDisabled`,void 0),m([f({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),m([p()],J.prototype,`isCalendarOpen`,void 0),m([p()],J.prototype,`navigationDate`,void 0),m([p()],J.prototype,`locale`,void 0),m([p()],J.prototype,`selectedDate`,null),m([p()],J.prototype,`month`,null),m([p()],J.prototype,`weeks`,null),m([d(`#${W}`)],J.prototype,`calendar`,void 0),m([d(`#${wo}`,!0)],J.prototype,`input`,void 0),m([d(`#${G}`,!0)],J.prototype,`toggleButton`,void 0),m([d(`#${To}`,!0)],J.prototype,`wrapper`,void 0),m([d(`#${K}`)],J.prototype,`previousMonthButton`,void 0),m([d(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),m([d(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var Do=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>Po,default:()=>No}),Oo,ko,Ao,jo,Mo,No,Y,X,Z,Q,$,Po;function Fo(){return(Fo=e((()=>{_e(),ce(),c(),xe(),Ce(),Eo(),{events:Ao,args:jo,argTypes:Mo}=le(`w-datepicker`),No={title:`Forms/Datepicker`,render(e){return n(Oo||=Se([`
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
		`]),he(ge(e)))},args:jo,argTypes:Mo,parameters:{actions:{handles:Ao}}},Y={args:{label:`Date`}},X={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available`}},Z={args:{label:`Date`,invalid:!0,helpText:`Description of how to fix the problem`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return n(ko||=Se([`
			<!-- Workaround for Storybook's overflow hidden -->
			<div style="min-height: 400px">
				<w-datepicker `,`></w-datepicker>
			</div>
			<script type="module">
				const datePicker = document.querySelector("w-datepicker");
				// No working on Sundays!
				datePicker.isDayDisabled = (day) => day.getDay() === 0;
			<\/script>
		`]),he(ge(e)))}},Po=[`Default`,`WithHelpText`,`Invalid`,`WithTooltip`,`DisableCalendarDates`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{Do as n,Fo as r,Y as t};