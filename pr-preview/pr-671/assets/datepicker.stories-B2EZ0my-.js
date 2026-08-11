import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,d as i,g as a,h as o,l as s,p as c,r as l,s as u,t as d,y as f}from"./decorate-Bt2QF_uA.js";import{a as p,n as m,o as ee,r as te,t as ne}from"./i18n-Bcb14Fzc.js";import{i as re,n as ie,r as ae,t as oe}from"./directive-CZiujxgm.js";import{n as se,t as ce}from"./dist-D5kJVy4t.js";import{t as h}from"./query-BHY-nhsh.js";import{n as le,t as ue}from"./class-map-DaGxfNVq.js";import{t as de}from"./icon-CD69d68Q.js";import{n as fe,t as pe}from"./styles-Cw_r5k83.js";import{i as me,n as he,r as ge}from"./utilities-BHNt5DhH.js";import{n as _e,t as ve}from"./FormControlMixin-BCJbRrUC.js";import{r as g,t as ye}from"./if-defined-DBI32Ir5.js";import{t as be}from"./button-BGxYb5ln.js";import{t as xe}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as Se}from"./tooltip-7xbEbtfo.js";var Ce,we,Te,Ee,De,Oe,ke,Ae,je;function _(){return(_=e((()=>{Ce=365.2425,we=10**8*24*60*60*1e3,-we,Te=6048e5,Ee=864e5,De=3600,Oe=De*24,Oe*7,ke=Oe*Ce,Ae=ke/12,Ae*3,je=Symbol.for(`constructDateFrom`)})))()}function v(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&je in e?e[je](t):e instanceof Date?new e.constructor(t):new Date(t)}function y(){return(y=e((()=>{_()})))()}function b(e,t){return v(t||e,e)}function x(){return(x=e((()=>{y()})))()}function S(e,t,n){let r=b(e,n?.in);return isNaN(t)?v(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function C(){return(C=e((()=>{y(),x()})))()}function Me(e,t,n){let r=b(e,n?.in);if(isNaN(t))return v(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=v(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Ne(){return(Ne=e((()=>{y(),x()})))()}function w(){return Pe}var Pe;function T(){return(T=e((()=>{Pe={}})))()}function E(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function D(){return(D=e((()=>{T(),x()})))()}function Fe(e,t){return E(e,{...t,weekStartsOn:1})}function Ie(){return(Ie=e((()=>{D()})))()}function Le(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=v(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=Fe(i),o=v(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=Fe(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Re(){return(Re=e((()=>{y(),Ie(),x()})))()}function ze(e){let t=b(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function Be(){return(Be=e((()=>{x()})))()}function Ve(e,...t){let n=v.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function O(){return(O=e((()=>{y()})))()}function k(e,t){let n=b(e,t?.in);return n.setHours(0,0,0,0),n}function A(){return(A=e((()=>{x()})))()}function He(e,t,n){let[r,i]=Ve(n?.in,e,t),a=k(r),o=k(i),s=+a-ze(a),c=+o-ze(o);return Math.round((s-c)/Ee)}function Ue(){return(Ue=e((()=>{Be(),O(),_(),A()})))()}function We(e,t){let n=Le(e,t),r=v(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Fe(r)}function Ge(){return(Ge=e((()=>{y(),Re(),Ie()})))()}function Ke(e,t,n){return S(e,t*7,n)}function qe(){return(qe=e((()=>{C()})))()}function Je(e){return v(e,Date.now())}function Ye(){return(Ye=e((()=>{y()})))()}function Xe(e,t,n){let[r,i]=Ve(n?.in,e,t);return+k(r)==+k(i)}function Ze(){return(Ze=e((()=>{O(),A()})))()}function Qe(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function $e(){return($e=e((()=>{})))()}function et(e){return!(!Qe(e)&&typeof e!=`number`||isNaN(+b(e)))}function tt(){return(tt=e((()=>{$e(),x()})))()}function nt(e,t){let[n,r]=Ve(e,t.start,t.end);return{start:n,end:r}}function rt(){return(rt=e((()=>{O()})))()}function it(e,t){let{start:n,end:r}=nt(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(v(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function at(){return(at=e((()=>{rt(),y()})))()}function ot(e,t){let{start:n,end:r}=nt(t?.in,e),i=+n>+r,a=E(i?r:n,t),o=E(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(v(n,c)),c=Ke(c,l),c.setHours(15);return i?u.reverse():u}function st(){return(st=e((()=>{rt(),qe(),y(),D()})))()}function ct(e,t){let n=b(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function lt(){return(lt=e((()=>{x()})))()}function ut(e,t){let n=b(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function dt(){return(dt=e((()=>{x()})))()}function ft(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function pt(){return(pt=e((()=>{T(),x()})))()}var mt,ht;function gt(){return(gt=e((()=>{mt={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},ht=(e,t,n)=>{let r,i=mt[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function j(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var _t,vt,yt,bt;function xt(){return(xt=e((()=>{_t={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},vt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},yt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},bt={date:j({formats:_t,defaultWidth:`full`}),time:j({formats:vt,defaultWidth:`full`}),dateTime:j({formats:yt,defaultWidth:`full`})}})))()}var St,Ct;function wt(){return(wt=e((()=>{St={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},Ct=(e,t,n,r)=>St[e]})))()}function M(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Tt,Et,Dt,Ot,kt,At,jt,Mt;function Nt(){return(Nt=e((()=>{Tt={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Et={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},Dt={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},Ot={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},kt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},At={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},jt=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Mt={ordinalNumber:jt,era:M({values:Tt,defaultWidth:`wide`}),quarter:M({values:Et,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:Dt,defaultWidth:`wide`}),day:M({values:Ot,defaultWidth:`wide`}),dayPeriod:M({values:kt,defaultWidth:`wide`,formattingValues:At,defaultFormattingWidth:`wide`})}})))()}function N(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?Ft(s,e=>e.test(o)):Pt(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Pt(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ft(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function P(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=e((()=>{It=/^(\d+)(th|st|nd|rd)?/i,Lt=/\d+/i,Rt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},zt={any:[/^b/i,/^(a|c)/i]},Bt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vt={any:[/1/i,/2/i,/3/i,/4/i]},Ht={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ut={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Gt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Kt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Jt={ordinalNumber:P({matchPattern:It,parsePattern:Lt,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Rt,defaultMatchWidth:`wide`,parsePatterns:zt,defaultParseWidth:`any`}),quarter:N({matchPatterns:Bt,defaultMatchWidth:`wide`,parsePatterns:Vt,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Ht,defaultMatchWidth:`wide`,parsePatterns:Ut,defaultParseWidth:`any`}),day:N({matchPatterns:Wt,defaultMatchWidth:`wide`,parsePatterns:Gt,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Kt,defaultMatchWidth:`any`,parsePatterns:qt,defaultParseWidth:`any`})}})))()}var Xt;function Zt(){return(Zt=e((()=>{gt(),xt(),wt(),Nt(),Yt(),Xt={code:`en-US`,formatDistance:ht,formatLong:bt,formatRelative:Ct,localize:Mt,match:Jt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function Qt(e,t){let n=b(e,t?.in);return He(n,ut(n))+1}function $t(){return($t=e((()=>{Ue(),dt(),x()})))()}function en(e,t){let n=b(e,t?.in),r=Fe(n)-+We(n);return Math.round(r/Te)+1}function tn(){return(tn=e((()=>{_(),Ie(),Ge(),x()})))()}function nn(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=w(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=E(o,t),c=v(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=E(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function rn(){return(rn=e((()=>{T(),y(),D(),x()})))()}function an(e,t){let n=w(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=nn(e,t),a=v(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),E(a,t)}function on(){return(on=e((()=>{T(),y(),rn(),D()})))()}function sn(e,t){let n=b(e,t?.in),r=E(n,t)-+an(n,t);return Math.round(r/Te)+1}function cn(){return(cn=e((()=>{_(),D(),on(),x()})))()}function F(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var I;function ln(){return(ln=e((()=>{I={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return F(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):F(n+1,2)},d(e,t){return F(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return F(e.getHours()%12||12,t.length)},H(e,t){return F(e.getHours(),t.length)},m(e,t){return F(e.getMinutes(),t.length)},s(e,t){return F(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return F(Math.trunc(r*10**(n-3)),t.length)}}})))()}function un(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+F(a,2)}function dn(e,t){return e%60==0?(e>0?`-`:`+`)+F(Math.abs(e)/60,2):L(e,t)}function L(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=F(Math.trunc(r/60),2),a=F(r%60,2);return n+i+t+a}var R,fn;function pn(){return(pn=e((()=>{$t(),tn(),Re(),cn(),rn(),ln(),R={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},fn={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return I.y(e,t)},Y:function(e,t,n,r){let i=nn(e,r),a=i>0?i:1-i;return t===`YY`?F(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):F(a,t.length)},R:function(e,t){return F(Le(e),t.length)},u:function(e,t){return F(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return F(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return F(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return I.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return F(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=sn(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):F(i,t.length)},I:function(e,t,n){let r=en(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):F(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):I.d(e,t)},D:function(e,t,n){let r=Qt(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):F(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return F(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return F(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return F(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?R.noon:r===0?R.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?R.evening:r>=12?R.afternoon:r>=4?R.morning:R.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return I.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):I.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):F(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):F(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):I.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):I.s(e,t)},S:function(e,t){return I.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return dn(r);case`XXXX`:case`XX`:return L(r);default:return L(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return dn(r);case`xxxx`:case`xx`:return L(r);default:return L(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+un(r,`:`);default:return`GMT`+L(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+un(r,`:`);default:return`GMT`+L(r,`:`)}},t:function(e,t,n){return F(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return F(+e,t.length)}}})))()}var mn,hn,gn,_n;function vn(){return(vn=e((()=>{mn=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},hn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},gn=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return mn(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,mn(r,t)).replace(`{{time}}`,hn(i,t))},_n={p:hn,P:gn}})))()}function yn(e){return Cn.test(e)}function bn(e){return wn.test(e)}function xn(e,t,n){let r=Sn(e,t,n);if(console.warn(r),Tn.includes(e))throw RangeError(r)}function Sn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Cn,wn,Tn;function En(){return(En=e((()=>{Cn=/^D+$/,wn=/^Y+$/,Tn=[`D`,`DD`,`YY`,`YYYY`]})))()}function z(e,t,n){let r=w(),i=n?.locale??r.locale??Xt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=b(e,n?.in);if(!et(s))throw RangeError(`Invalid time value`);let c=t.match(kn).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=_n[t];return n(e,i.formatLong)}return e}).join(``).match(On).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:Dn(e)};if(fn[t])return{isToken:!0,value:e};if(t.match(Mn))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&bn(a)||!n?.useAdditionalDayOfYearTokens&&yn(a))&&xn(a,t,String(e));let o=fn[a[0]];return o(s,a,i.localize,l)}).join(``)}function Dn(e){let t=e.match(An);return t?t[1].replace(jn,`'`):e}var On,kn,An,jn,Mn;function Nn(){return(Nn=e((()=>{Zt(),T(),pn(),vn(),En(),tt(),x(),On=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,kn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,An=/^'([^]*?)'?$/,jn=/''/g,Mn=/[a-zA-Z]/})))()}function Pn(e,t){let n=b(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=F(n.getDate(),2),t=F(n.getMonth()+1,2);a=`${F(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=F(Math.trunc(t/60),2),r=F(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=F(n.getHours(),2),r=F(n.getMinutes(),2),i=F(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function Fn(){return(Fn=e((()=>{x()})))()}function In(e,t){return b(e,t?.in).getDate()}function Ln(){return(Ln=e((()=>{x()})))()}function Rn(e,t){return b(e,t?.in).getDay()}function zn(){return(zn=e((()=>{x()})))()}function Bn(e,t){let n=w(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=In(b(e,t?.in));if(isNaN(i))return NaN;let a=r-Rn(ct(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function Vn(){return(Vn=e((()=>{T(),Ln(),zn(),lt(),x()})))()}function Hn(e,t){let n=b(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),b(n,t?.in)}function Un(){return(Un=e((()=>{x()})))()}function Wn(e,t,n){let[r,i]=Ve(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Gn(){return(Gn=e((()=>{O()})))()}function Kn(e,t){return Xe(v(t?.in||e,e),Je(t?.in||e))}function qn(){return(qn=e((()=>{y(),Ye(),Ze()})))()}function Jn(e,t,n){return S(e,-t,n)}function Yn(){return(Yn=e((()=>{C()})))()}function Xn(e){return k(Date.now(),e)}function Zn(){return(Zn=e((()=>{A()})))()}function Qn(e,t,n){return Me(e,-t,n)}function $n(){return($n=e((()=>{Ne()})))()}var er,tr;function nr(){return(nr=e((()=>{er={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},tr=(e,t,n)=>{let r,i=er[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var rr,ir,ar,or;function sr(){return(sr=e((()=>{rr={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},ir={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},ar={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},or={date:j({formats:rr,defaultWidth:`full`}),time:j({formats:ir,defaultWidth:`full`}),dateTime:j({formats:ar,defaultWidth:`full`})}})))()}var cr,lr;function ur(){return(ur=e((()=>{cr={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},lr=(e,t,n,r)=>cr[e]})))()}var dr,fr,pr,mr,hr,gr,_r,vr;function yr(){return(yr=e((()=>{dr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},fr={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},pr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},mr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},hr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},gr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},_r=(e,t)=>Number(e)+`.`,vr={ordinalNumber:_r,era:M({values:dr,defaultWidth:`wide`}),quarter:M({values:fr,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:pr,defaultWidth:`wide`}),day:M({values:mr,defaultWidth:`wide`}),dayPeriod:M({values:hr,defaultWidth:`wide`,formattingValues:gr,defaultFormattingWidth:`wide`})}})))()}var br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr;function Nr(){return(Nr=e((()=>{br=/^(\d+)(\.)?/i,xr=/\d+/i,Sr={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},Cr={any:[/^f/i,/^(v|e)/i]},wr={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Tr={any:[/1/i,/2/i,/3/i,/4/i]},Er={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Dr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Or={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},kr={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ar={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},jr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Mr={ordinalNumber:P({matchPattern:br,parsePattern:xr,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Sr,defaultMatchWidth:`wide`,parsePatterns:Cr,defaultParseWidth:`any`}),quarter:N({matchPatterns:wr,defaultMatchWidth:`wide`,parsePatterns:Tr,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Er,defaultMatchWidth:`wide`,parsePatterns:Dr,defaultParseWidth:`any`}),day:N({matchPatterns:Or,defaultMatchWidth:`wide`,parsePatterns:kr,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Ar,defaultMatchWidth:`any`,parsePatterns:jr,defaultParseWidth:`any`})}})))()}var Pr;function Fr(){return(Fr=e((()=>{nr(),sr(),ur(),yr(),Nr(),Pr={code:`da`,formatDistance:tr,formatLong:or,formatRelative:lr,localize:vr,match:Mr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ir,Lr,Rr,zr;function Br(){return(Br=e((()=>{Ir={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Lr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Rr={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},zr={date:j({formats:Ir,defaultWidth:`full`}),time:j({formats:Lr,defaultWidth:`full`}),dateTime:j({formats:Rr,defaultWidth:`full`})}})))()}var Vr;function Hr(){return(Hr=e((()=>{gt(),wt(),Nt(),Yt(),Br(),Vr={code:`en-GB`,formatDistance:ht,formatLong:zr,formatRelative:Ct,localize:Mt,match:Jt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Ur(e){return e.replace(/sekuntia?/,`sekunnin`)}function Wr(e){return e.replace(/minuuttia?/,`minuutin`)}function Gr(e){return e.replace(/tuntia?/,`tunnin`)}function Kr(e){return e.replace(/päivää?/,`päivän`)}function qr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Jr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function B(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Yr,Xr;function Zr(){return(Zr=e((()=>{Yr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Ur},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Ur},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Wr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Wr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Gr},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Gr},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:Kr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:qr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:qr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Jr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Jr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:B},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:B},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:B},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:B}},Xr=(e,t,n)=>{let r=Yr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var Qr,$r,ei,ti;function ni(){return(ni=e((()=>{Qr={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},$r={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},ei={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ti={date:j({formats:Qr,defaultWidth:`full`}),time:j({formats:$r,defaultWidth:`full`}),dateTime:j({formats:ei,defaultWidth:`full`})}})))()}var ri,ii;function ai(){return(ai=e((()=>{ri={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},ii=(e,t,n,r)=>ri[e]})))()}var oi,si,V,ci,H,li,ui,di,fi;function pi(){return(pi=e((()=>{oi={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},si={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},V={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},ci={narrow:V.narrow,abbreviated:V.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},H={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},li={narrow:H.narrow,short:H.short,abbreviated:H.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},ui={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},di=(e,t)=>Number(e)+`.`,fi={ordinalNumber:di,era:M({values:oi,defaultWidth:`wide`}),quarter:M({values:si,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:V,defaultWidth:`wide`,formattingValues:ci,defaultFormattingWidth:`wide`}),day:M({values:H,defaultWidth:`wide`,formattingValues:li,defaultFormattingWidth:`wide`}),dayPeriod:M({values:ui,defaultWidth:`wide`})}})))()}var mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei;function Di(){return(Di=e((()=>{mi=/^(\d+)(\.)/i,hi=/\d+/i,gi={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},_i={any:[/^e/i,/^j/i]},vi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},yi={any:[/1/i,/2/i,/3/i,/4/i]},bi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},xi={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},Si={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},Ci={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},wi={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},Ti={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},Ei={ordinalNumber:P({matchPattern:mi,parsePattern:hi,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:gi,defaultMatchWidth:`wide`,parsePatterns:_i,defaultParseWidth:`any`}),quarter:N({matchPatterns:vi,defaultMatchWidth:`wide`,parsePatterns:yi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:bi,defaultMatchWidth:`wide`,parsePatterns:xi,defaultParseWidth:`any`}),day:N({matchPatterns:Si,defaultMatchWidth:`wide`,parsePatterns:Ci,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:wi,defaultMatchWidth:`any`,parsePatterns:Ti,defaultParseWidth:`any`})}})))()}var Oi;function ki(){return(ki=e((()=>{Zr(),ni(),ai(),pi(),Di(),Oi={code:`fi`,formatDistance:Xr,formatLong:ti,formatRelative:ii,localize:fi,match:Ei,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ai,ji;function Mi(){return(Mi=e((()=>{Ai={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},ji=(e,t,n)=>{let r,i=Ai[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Ni,Pi,Fi,Ii;function Li(){return(Li=e((()=>{Ni={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Pi={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Fi={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Ii={date:j({formats:Ni,defaultWidth:`full`}),time:j({formats:Pi,defaultWidth:`full`}),dateTime:j({formats:Fi,defaultWidth:`full`})}})))()}var Ri,zi;function Bi(){return(Bi=e((()=>{Ri={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},zi=(e,t,n,r)=>Ri[e]})))()}var Vi,Hi,Ui,Wi,Gi,Ki,qi;function Ji(){return(Ji=e((()=>{Vi={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Hi={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Ui={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Wi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Gi={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},Ki=(e,t)=>Number(e)+`.`,qi={ordinalNumber:Ki,era:M({values:Vi,defaultWidth:`wide`}),quarter:M({values:Hi,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:Ui,defaultWidth:`wide`}),day:M({values:Wi,defaultWidth:`wide`}),dayPeriod:M({values:Gi,defaultWidth:`wide`})}})))()}var Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa;function ca(){return(ca=e((()=>{Yi=/^(\d+)\.?/i,Xi=/\d+/i,Zi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Qi={any:[/^f/i,/^e/i]},$i={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},ea={any:[/1/i,/2/i,/3/i,/4/i]},ta={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},na={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ra={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},ia={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},aa={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},oa={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},sa={ordinalNumber:P({matchPattern:Yi,parsePattern:Xi,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Zi,defaultMatchWidth:`wide`,parsePatterns:Qi,defaultParseWidth:`any`}),quarter:N({matchPatterns:$i,defaultMatchWidth:`wide`,parsePatterns:ea,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:ta,defaultMatchWidth:`wide`,parsePatterns:na,defaultParseWidth:`any`}),day:N({matchPatterns:ra,defaultMatchWidth:`wide`,parsePatterns:ia,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:aa,defaultMatchWidth:`any`,parsePatterns:oa,defaultParseWidth:`any`})}})))()}var la;function ua(){return(ua=e((()=>{Mi(),Li(),Bi(),Ji(),ca(),la={code:`nb`,formatDistance:ji,formatLong:Ii,formatRelative:zi,localize:qi,match:sa,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var da,fa,pa;function ma(){return(ma=e((()=>{da={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},fa=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],pa=(e,t,n)=>{let r,i=da[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?fa[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var ha,ga,_a,va;function ya(){return(ya=e((()=>{ha={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},ga={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},_a={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},va={date:j({formats:ha,defaultWidth:`full`}),time:j({formats:ga,defaultWidth:`full`}),dateTime:j({formats:_a,defaultWidth:`full`})}})))()}var ba,xa;function Sa(){return(Sa=e((()=>{ba={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},xa=(e,t,n,r)=>ba[e]})))()}var Ca,wa,Ta,Ea,Da,Oa,ka,Aa;function ja(){return(ja=e((()=>{Ca={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},wa={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Ta={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Ea={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Da={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},Oa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},ka=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},Aa={ordinalNumber:ka,era:M({values:Ca,defaultWidth:`wide`}),quarter:M({values:wa,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:M({values:Ta,defaultWidth:`wide`}),day:M({values:Ea,defaultWidth:`wide`}),dayPeriod:M({values:Da,defaultWidth:`wide`,formattingValues:Oa,defaultFormattingWidth:`wide`})}})))()}var Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa;function Ga(){return(Ga=e((()=>{Ma=/^(\d+)(:a|:e)?/i,Na=/\d+/i,Pa={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Fa={any:[/^f/i,/^[ev]/i]},Ia={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},La={any:[/1/i,/2/i,/3/i,/4/i]},Ra={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},za={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ba={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},Va={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ha={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Ua={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Wa={ordinalNumber:P({matchPattern:Ma,parsePattern:Na,valueCallback:e=>parseInt(e,10)}),era:N({matchPatterns:Pa,defaultMatchWidth:`wide`,parsePatterns:Fa,defaultParseWidth:`any`}),quarter:N({matchPatterns:Ia,defaultMatchWidth:`wide`,parsePatterns:La,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:N({matchPatterns:Ra,defaultMatchWidth:`wide`,parsePatterns:za,defaultParseWidth:`any`}),day:N({matchPatterns:Ba,defaultMatchWidth:`wide`,parsePatterns:Va,defaultParseWidth:`any`}),dayPeriod:N({matchPatterns:Ha,defaultMatchWidth:`any`,parsePatterns:Ua,defaultParseWidth:`any`})}})))()}var Ka;function qa(){return(qa=e((()=>{ma(),ya(),Sa(),ja(),Ga(),Ka={code:`sv`,formatDistance:pa,formatLong:va,formatRelative:xa,localize:Aa,match:Wa,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ja,Ya,Xa;function Za(){return(Za=e((()=>{a(),ae(),Ja=`important`,Ya=` !important`,Xa=oe(class extends ie{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ya);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ja:``):n[e]=r}}return c}})})))()}function Qa(){return(Qa=e((()=>{Za()})))()}var $a;function eo(){return(eo=e((()=>{$a=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var to;function no(){return(no=e((()=>{to=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ro;function io(){return(io=e((()=>{ro=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var ao;function oo(){return(oo=e((()=>{ao=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var so;function co(){return(co=e((()=>{so=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var lo,uo,fo;function po(){return(po=e((()=>{r(),lo=f`
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
`,uo=f`
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
`,fo=f`
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
`})))()}var mo;function ho(){return(ho=e((()=>{r(),mo=f`
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
`})))()}var go;function _o(){return(_o=e((()=>{r(),go=f`
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
`})))()}var vo;function yo(){return(yo=e((()=>{r(),vo=f`
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
`})))()}function bo(e){if(typeof e!=`string`)return null;let t=e;wo.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function xo(e=typeof navigator<`u`?navigator.userAgent:``){let t=To.test(e),n=Eo.test(e)&&!Do.test(e);return t||n?`text`:`date`}function So(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function Co(e,t){if(!wo.exec(e))return e;let[n,r,i]=e.split(`-`);return So(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var wo,To,Eo,Do;function Oo(){return(Oo=e((()=>{wo=/^\d{4}-\d{2}-\d{2}$/,To=/iP(hone|od|ad)/,Eo=/Safari/,Do=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var U,W,G,ko,Ao,K,q,J;function jo(){return(jo=e((()=>{ee(),_e(),C(),Ne(),Ue(),at(),st(),pt(),Nn(),Fn(),Ln(),Vn(),Ze(),Gn(),qn(),Un(),lt(),Zn(),D(),Yn(),$n(),Fr(),Hr(),ki(),ua(),qa(),r(),l(),ue(),ye(),Qa(),de(),Se(),te(),pe(),eo(),no(),io(),oo(),co(),po(),ho(),_o(),yo(),Oo(),U=xo(),W=`calendar`,G=`input`,ko=`toggle`,Ao=`wrapper`,K=`previous`,q={en:Vr,nb:la,sv:Ka,da:Pr,fi:Oi},J=class extends ve(s){static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,lo,uo,fo,mo,go,vo]}get selectedDate(){return this.value?bo(this.value)??null:null}get month(){return ct(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=ot({start:ct(e),end:Hn(e)},{locale:this.locale}).map(e=>({start:e,end:ft(e,{locale:this.locale})})).map(e=>it(e));if(Wn(t,e)){let e=Bn(t,{locale:this.locale})-1,r=He(t,E(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||m()||`en`}get#n(){return U===`text`&&this.value?Co(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Me(this.month,1)}#a(){this.navigationDate=Qn(this.month,1)}#o;async#s(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#c(e){this.value=e.target.value}#l(){this.#g=!0,this.#b()}#u(e){e.preventDefault(),this.isCalendarOpen=!0}#d(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#f(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Jn(t,7);break;case`ArrowLeft`:n=Jn(t,1);break;case`Home`:n=E(t,{locale:this.locale});break;case`PageUp`:n=Qn(t,1);break;case`ArrowDown`:n=S(t,7);break;case`ArrowRight`:n=S(t,1);break;case`End`:n=ft(t,{locale:this.locale});break;case`PageDown`:n=Me(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#p(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#s()):(this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.#s())}#m;#h;#g;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Xn(),this.locale=Vr,this.#e=void 0,this.#o=``,this.#m=!1,this.#h=void 0,this.#g=!1,this.#y=e=>{e.preventDefault(),this.#g=!0,this.#b()},ne(to,ao,ro,$a,so);let e=m();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#g=!1,this.#v(),this.#b()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#b(),this.internals.checkValidity()}reportValidity(){return this.#g=!0,this.#b(),this.internals.checkValidity()}setCustomValidity(e){this.#o=e,e?(this.#b(),this.#_(e)):(this.#v(),this.#b())}#_(e){this.#m||(this.#h=this.helpText),this.#m=!0,this.invalid=!0,this.helpText=e}#v(){this.#m&&=(this.invalid=!1,this.helpText=this.#h,this.#h=void 0,!1)}#y;#b(){if(this.disabled){this.internals.setValidity({}),this.#v();return}let e={valueMissing:this.required&&!this.value,customError:this.#o!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#o:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#g&&this.#_(t);return}this.internals.setValidity({}),this.#v()}connectedCallback(){super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#y);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=bo(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#y),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#b()}firstUpdated(e){super.firstUpdated(e),this.#b()}render(){return o`
			<div class="w-datepicker-wrapper" id="${Ao}">
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
						placeholder="${g(U===`text`?So(this.#t):void 0)}"
						.value="${this.#n}"
						class="w-datepicker-input"
						?required=${this.required}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						aria-describedby="${g(this.helpText?`help-text`:this.ariaDescription?`aria-description`:void 0)}"
						aria-errormessage="${g(this._error?`help-text`:void 0)}"
						aria-invalid=${g(this.invalid?`true`:void 0)}
						@click="${this.#u}"
						@input="${this.#c}"
						@blur="${this.#l}"
						@keydown="${this.#d}"
					/>
					<w-button
						aria-label="${this.value?p.t({id:`datepicker.toggle.changeDate`,values:{currentDate:z(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):p.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${W}"
						class="w-datepicker-button"
						data-testid="${ko}"
						id="${ko}"
						variant="utilityQuiet"
						?disabled=${this.disabled||this.readonly}
						type="button"
						@click="${this.#r}"
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
				style="${Xa({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${p.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${W}"
					id="${W}"
					@keydown="${this.#f}"
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
							@click="${this.#a}"
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
							@click="${this.#i}"
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
											${e.map(e=>{if(!Wn(this.month,e))return o`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Xe(e,this.selectedDate),r=e===this.navigationDate;return o`<td
													aria-current="${g(Kn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${z(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${le({"w-datepicker__day":!0,"w-datepicker__day--today":Kn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${Pn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#p}"
													@keydown="${t?void 0:this.#p}"
												>
													<div>${In(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},d([u({reflect:!0})],J.prototype,`label`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),d([u({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),d([u({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),d([u({reflect:!0})],J.prototype,`lang`,void 0),d([u({reflect:!0})],J.prototype,`name`,void 0),d([u({reflect:!0})],J.prototype,`value`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),d([u({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),d([u({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),d([u({attribute:!1})],J.prototype,`isDayDisabled`,void 0),d([u({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),d([n()],J.prototype,`isCalendarOpen`,void 0),d([n()],J.prototype,`navigationDate`,void 0),d([n()],J.prototype,`locale`,void 0),d([n()],J.prototype,`selectedDate`,null),d([n()],J.prototype,`month`,null),d([n()],J.prototype,`weeks`,null),d([h(`#${W}`)],J.prototype,`calendar`,void 0),d([h(`#${G}`,!0)],J.prototype,`input`,void 0),d([h(`#${ko}`,!0)],J.prototype,`toggleButton`,void 0),d([h(`#${Ao}`,!0)],J.prototype,`wrapper`,void 0),d([h(`#${K}`)],J.prototype,`previousMonthButton`,void 0),d([h(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),d([h(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var Mo=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>zo,default:()=>Ro}),No,Po,Fo,Io,Lo,Ro,Y,X,Z,Q,$,zo;function Bo(){return(Bo=e((()=>{ge(),se(),r(),be(),Se(),jo(),{events:Fo,args:Io,argTypes:Lo}=ce(`w-datepicker`),Ro={title:`Forms/Datepicker`,render(e){return o(No||=xe([`
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
        `]),me(he(e)))},args:Io,argTypes:Lo,parameters:{actions:{handles:Fo}}},Y={args:{label:`Date`}},X={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available`}},Z={args:{label:`Date`,invalid:!0,helpText:`Description of how to fix the problem`}},Q={args:{label:`Date`,optional:!0,required:!1,helpText:`Help text is available, but might not be enough, or the added context is not important enough that we use help-text`,tooltip:`This tooltip adds supplementary information`}},$={args:{label:`Date`},render(e){return o(Po||=xe([`
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
}`,...$.parameters?.docs?.source}}},zo=[`Default`,`WithHelpText`,`Invalid`,`WithTooltip`,`DisableCalendarDates`]})))()}export{Mo as n,Bo as r,Y as t};