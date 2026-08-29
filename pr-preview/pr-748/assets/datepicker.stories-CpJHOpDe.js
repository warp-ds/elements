import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,c as r,d as i,g as a,h as o,l as s,p as c,r as l,s as u,t as d,y as f}from"./decorate-J4WBtiHw.js";import{a as p,n as m,o as ee,r as te,t as ne}from"./i18n-CkjYRTT1.js";import{i as re,n as ie,r as ae,t as oe}from"./directive-CZiujxgm.js";import{n as se,t as ce}from"./dist-Bnzru1sc.js";import{t as h}from"./query-BHY-nhsh.js";import{n as le,t as ue}from"./class-map-DIRZr7YF.js";import{t as de}from"./icon-He5RsYT_.js";import{n as fe,t as pe}from"./styles-CYn3YYhE.js";import{i as me,n as he,r as ge}from"./utilities-DhdP2kMI.js";import{n as _e,t as ve}from"./FormControlMixin-BCJbRrUC.js";import{r as g,t as ye}from"./if-defined-hoo3qVMT.js";import{t as be}from"./button-BJkAuxe5.js";import{t as xe}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as Se}from"./tooltip-Cg97vTGg.js";var Ce,we,Te,Ee,De,Oe,ke,Ae,je;function _(){return(_=e((()=>{Ce=365.2425,we=10**8*24*60*60*1e3,-we,Te=6048e5,Ee=864e5,De=3600,Oe=De*24,Oe*7,ke=Oe*Ce,Ae=ke/12,Ae*3,je=Symbol.for(`constructDateFrom`)})))()}function v(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&je in e?e[je](t):e instanceof Date?new e.constructor(t):new Date(t)}function y(){return(y=e((()=>{_()})))()}function b(e,t){return v(t||e,e)}function x(){return(x=e((()=>{y()})))()}function Me(e,t,n){let r=b(e,n?.in);return isNaN(t)?v(n?.in||e,NaN):(t&&r.setDate(r.getDate()+t),r)}function Ne(){return(Ne=e((()=>{y(),x()})))()}function Pe(e,t,n){let r=b(e,n?.in);if(isNaN(t))return v(n?.in||e,NaN);if(!t)return r;let i=r.getDate(),a=v(n?.in||e,r.getTime());return a.setMonth(r.getMonth()+t+1,0),i>=a.getDate()?a:(r.setFullYear(a.getFullYear(),a.getMonth(),i),r)}function Fe(){return(Fe=e((()=>{y(),x()})))()}function S(){return Ie}var Ie;function C(){return(C=e((()=>{Ie={}})))()}function w(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function T(){return(T=e((()=>{C(),x()})))()}function E(e,t){return w(e,{...t,weekStartsOn:1})}function D(){return(D=e((()=>{T()})))()}function Le(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=v(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=E(i),o=v(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=E(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function Re(){return(Re=e((()=>{y(),D(),x()})))()}function ze(e){let t=b(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-n}function Be(){return(Be=e((()=>{x()})))()}function Ve(e,...t){let n=v.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function O(){return(O=e((()=>{y()})))()}function k(e,t){let n=b(e,t?.in);return n.setHours(0,0,0,0),n}function He(){return(He=e((()=>{x()})))()}function Ue(e,t,n){let[r,i]=Ve(n?.in,e,t),a=k(r),o=k(i),s=+a-ze(a),c=+o-ze(o);return Math.round((s-c)/Ee)}function We(){return(We=e((()=>{Be(),O(),_(),He()})))()}function Ge(e,t){let n=Le(e,t),r=v(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),E(r)}function Ke(){return(Ke=e((()=>{y(),Re(),D()})))()}function qe(e,t,n){return Me(e,t*7,n)}function Je(){return(Je=e((()=>{Ne()})))()}function Ye(e){return v(e,Date.now())}function Xe(){return(Xe=e((()=>{y()})))()}function Ze(e,t,n){let[r,i]=Ve(n?.in,e,t);return+k(r)==+k(i)}function Qe(){return(Qe=e((()=>{O(),He()})))()}function $e(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function et(){return(et=e((()=>{})))()}function tt(e){return!(!$e(e)&&typeof e!=`number`||isNaN(+b(e)))}function nt(){return(nt=e((()=>{et(),x()})))()}function rt(e,t){let[n,r]=Ve(e,t.start,t.end);return{start:n,end:r}}function it(){return(it=e((()=>{O()})))()}function at(e,t){let{start:n,end:r}=rt(t?.in,e),i=+n>+r,a=i?+n:+r,o=i?r:n;o.setHours(0,0,0,0);let s=t?.step??1;if(!s)return[];s<0&&(s=-s,i=!i);let c=[];for(;+o<=a;)c.push(v(n,o)),o.setDate(o.getDate()+s),o.setHours(0,0,0,0);return i?c.reverse():c}function ot(){return(ot=e((()=>{it(),y()})))()}function st(e,t){let{start:n,end:r}=rt(t?.in,e),i=+n>+r,a=w(i?r:n,t),o=w(i?n:r,t);a.setHours(15),o.setHours(15);let s=+o.getTime(),c=a,l=t?.step??1;if(!l)return[];l<0&&(l=-l,i=!i);let u=[];for(;+c<=s;)c.setHours(0),u.push(v(n,c)),c=qe(c,l),c.setHours(15);return i?u.reverse():u}function ct(){return(ct=e((()=>{it(),Je(),y(),T()})))()}function lt(e,t){let n=b(e,t?.in);return n.setDate(1),n.setHours(0,0,0,0),n}function ut(){return(ut=e((()=>{x()})))()}function dt(e,t){let n=b(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}function ft(){return(ft=e((()=>{x()})))()}function pt(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=b(e,t?.in),a=i.getDay(),o=(a<r?-7:0)+6-(a-r);return i.setDate(i.getDate()+o),i.setHours(23,59,59,999),i}function mt(){return(mt=e((()=>{C(),x()})))()}var ht,gt;function _t(){return(_t=e((()=>{ht={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},gt=(e,t,n)=>{let r,i=ht[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r}})))()}function A(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var vt,yt,bt,xt;function St(){return(St=e((()=>{vt={full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},yt={full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},bt={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},xt={date:A({formats:vt,defaultWidth:`full`}),time:A({formats:yt,defaultWidth:`full`}),dateTime:A({formats:bt,defaultWidth:`full`})}})))()}var Ct,wt;function Tt(){return(Tt=e((()=>{Ct={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},wt=(e,t,n,r)=>Ct[e]})))()}function j(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var Et,Dt,Ot,kt,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{Et={narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},Dt={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},Ot={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},kt={narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},At={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},jt={narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},Mt=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},Nt={ordinalNumber:Mt,era:j({values:Et,defaultWidth:`wide`}),quarter:j({values:Dt,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:j({values:Ot,defaultWidth:`wide`}),day:j({values:kt,defaultWidth:`wide`}),dayPeriod:j({values:At,defaultWidth:`wide`,formattingValues:jt,defaultFormattingWidth:`wide`})}})))()}function M(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?It(s,e=>e.test(o)):Ft(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function Ft(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function It(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function N(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=e((()=>{Lt=/^(\d+)(th|st|nd|rd)?/i,Rt=/\d+/i,zt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Bt={any:[/^b/i,/^(a|c)/i]},Vt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ht={any:[/1/i,/2/i,/3/i,/4/i]},Ut={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Gt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Kt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Yt={ordinalNumber:N({matchPattern:Lt,parsePattern:Rt,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:zt,defaultMatchWidth:`wide`,parsePatterns:Bt,defaultParseWidth:`any`}),quarter:M({matchPatterns:Vt,defaultMatchWidth:`wide`,parsePatterns:Ht,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:Ut,defaultMatchWidth:`wide`,parsePatterns:Wt,defaultParseWidth:`any`}),day:M({matchPatterns:Gt,defaultMatchWidth:`wide`,parsePatterns:Kt,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:qt,defaultMatchWidth:`any`,parsePatterns:Jt,defaultParseWidth:`any`})}})))()}var Zt;function Qt(){return(Qt=e((()=>{_t(),St(),Tt(),Pt(),Xt(),Zt={code:`en-US`,formatDistance:gt,formatLong:xt,formatRelative:wt,localize:Nt,match:Yt,options:{weekStartsOn:0,firstWeekContainsDate:1}}})))()}function $t(e,t){let n=b(e,t?.in);return Ue(n,dt(n))+1}function en(){return(en=e((()=>{We(),ft(),x()})))()}function tn(e,t){let n=b(e,t?.in),r=+E(n)-Ge(n);return Math.round(r/Te)+1}function nn(){return(nn=e((()=>{_(),D(),Ke(),x()})))()}function rn(e,t){let n=b(e,t?.in),r=n.getFullYear(),i=S(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=v(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=w(o,t),c=v(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=w(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function an(){return(an=e((()=>{C(),y(),T(),x()})))()}function on(e,t){let n=S(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=rn(e,t),a=v(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),w(a,t)}function sn(){return(sn=e((()=>{C(),y(),an(),T()})))()}function cn(e,t){let n=b(e,t?.in),r=+w(n,t)-on(n,t);return Math.round(r/Te)+1}function ln(){return(ln=e((()=>{_(),T(),sn(),x()})))()}function P(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var F;function un(){return(un=e((()=>{F={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return P(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):P(n+1,2)},d(e,t){return P(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return P(e.getHours()%12||12,t.length)},H(e,t){return P(e.getHours(),t.length)},m(e,t){return P(e.getMinutes(),t.length)},s(e,t){return P(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return P(Math.trunc(r*10**(n-3)),t.length)}}})))()}function dn(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+P(a,2)}function fn(e,t){return e%60==0?(e>0?`-`:`+`)+P(Math.abs(e)/60,2):I(e,t)}function I(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=P(Math.trunc(r/60),2),a=P(r%60,2);return n+i+t+a}var L,pn;function mn(){return(mn=e((()=>{en(),nn(),Re(),ln(),an(),un(),L={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},pn={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return F.y(e,t)},Y:function(e,t,n,r){let i=rn(e,r),a=i>0?i:1-i;return t===`YY`?P(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):P(a,t.length)},R:function(e,t){return P(Le(e),t.length)},u:function(e,t){return P(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return P(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return P(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return F.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return P(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=cn(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):P(i,t.length)},I:function(e,t,n){let r=tn(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):P(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):F.d(e,t)},D:function(e,t,n){let r=$t(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):P(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return P(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return P(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return P(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?L.noon:r===0?L.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?L.evening:r>=12?L.afternoon:r>=4?L.morning:L.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return F.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):F.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):P(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):P(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):F.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):F.s(e,t)},S:function(e,t){return F.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return fn(r);case`XXXX`:case`XX`:return I(r);default:return I(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return fn(r);case`xxxx`:case`xx`:return I(r);default:return I(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+dn(r,`:`);default:return`GMT`+I(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+dn(r,`:`);default:return`GMT`+I(r,`:`)}},t:function(e,t,n){return P(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return P(+e,t.length)}}})))()}var hn,gn,_n,vn;function yn(){return(yn=e((()=>{hn=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},gn=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},_n=(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return hn(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,hn(r,t)).replace(`{{time}}`,gn(i,t))},vn={p:gn,P:_n}})))()}function bn(e){return wn.test(e)}function xn(e){return Tn.test(e)}function Sn(e,t,n){let r=Cn(e,t,n);if(console.warn(r),En.includes(e))throw RangeError(r)}function Cn(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var wn,Tn,En;function Dn(){return(Dn=e((()=>{wn=/^D+$/,Tn=/^Y+$/,En=[`D`,`DD`,`YY`,`YYYY`]})))()}function R(e,t,n){let r=S(),i=n?.locale??r.locale??Zt,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=b(e,n?.in);if(!tt(s))throw RangeError(`Invalid time value`);let c=t.match(An).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=vn[t];return n(e,i.formatLong)}return e}).join(``).match(kn).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:On(e)};if(pn[t])return{isToken:!0,value:e};if(t.match(Nn))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&xn(a)||!n?.useAdditionalDayOfYearTokens&&bn(a))&&Sn(a,t,String(e));let o=pn[a[0]];return o(s,a,i.localize,l)}).join(``)}function On(e){let t=e.match(jn);return t?t[1].replace(Mn,`'`):e}var kn,An,jn,Mn,Nn;function Pn(){return(Pn=e((()=>{Qt(),C(),mn(),yn(),Dn(),nt(),x(),kn=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,An=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,jn=/^'([^]*?)'?$/,Mn=/''/g,Nn=/[a-zA-Z]/})))()}function Fn(e,t){let n=b(e,t?.in);if(isNaN(+n))throw RangeError(`Invalid time value`);let r=t?.format??`extended`,i=t?.representation??`complete`,a=``,o=``,s=r===`extended`?`-`:``,c=r===`extended`?`:`:``;if(i!==`time`){let e=P(n.getDate(),2),t=P(n.getMonth()+1,2);a=`${P(n.getFullYear(),4)}${s}${t}${s}${e}`}if(i!==`date`){let e=n.getTimezoneOffset();if(e!==0){let t=Math.abs(e),n=P(Math.trunc(t/60),2),r=P(t%60,2);o=`${e<0?`+`:`-`}${n}:${r}`}else o=`Z`;let t=P(n.getHours(),2),r=P(n.getMinutes(),2),i=P(n.getSeconds(),2),s=a===``?``:`T`,l=[t,r,i].join(c);a=`${a}${s}${l}${o}`}return a}function In(){return(In=e((()=>{x()})))()}function Ln(e,t){return b(e,t?.in).getDate()}function Rn(){return(Rn=e((()=>{x()})))()}function zn(e,t){return b(e,t?.in).getDay()}function Bn(){return(Bn=e((()=>{x()})))()}function Vn(e,t){let n=S(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=Ln(b(e,t?.in));if(isNaN(i))return NaN;let a=r-zn(lt(e,t));a<=0&&(a+=7);let o=i-a;return Math.ceil(o/7)+1}function Hn(){return(Hn=e((()=>{C(),Rn(),Bn(),ut(),x()})))()}function Un(e,t){let n=b(e,t?.in),r=n.getMonth();return n.setFullYear(n.getFullYear(),r+1,0),n.setHours(0,0,0,0),b(n,t?.in)}function Wn(){return(Wn=e((()=>{x()})))()}function Gn(e,t,n){let[r,i]=Ve(n?.in,e,t);return r.getFullYear()===i.getFullYear()&&r.getMonth()===i.getMonth()}function Kn(){return(Kn=e((()=>{O()})))()}function qn(e,t){return Ze(v(t?.in||e,e),Ye(t?.in||e))}function Jn(){return(Jn=e((()=>{y(),Xe(),Qe()})))()}function Yn(e,t,n){return Me(e,-t,n)}function Xn(){return(Xn=e((()=>{Ne()})))()}function Zn(e){return k(Date.now(),e)}function Qn(){return(Qn=e((()=>{He()})))()}function $n(e,t,n){return Pe(e,-t,n)}function er(){return(er=e((()=>{Fe()})))()}var tr,nr;function rr(){return(rr=e((()=>{tr={lessThanXSeconds:{one:`mindre end ét sekund`,other:`mindre end {{count}} sekunder`},xSeconds:{one:`1 sekund`,other:`{{count}} sekunder`},halfAMinute:`ét halvt minut`,lessThanXMinutes:{one:`mindre end ét minut`,other:`mindre end {{count}} minutter`},xMinutes:{one:`1 minut`,other:`{{count}} minutter`},aboutXHours:{one:`cirka 1 time`,other:`cirka {{count}} timer`},xHours:{one:`1 time`,other:`{{count}} timer`},xDays:{one:`1 dag`,other:`{{count}} dage`},aboutXWeeks:{one:`cirka 1 uge`,other:`cirka {{count}} uger`},xWeeks:{one:`1 uge`,other:`{{count}} uger`},aboutXMonths:{one:`cirka 1 måned`,other:`cirka {{count}} måneder`},xMonths:{one:`1 måned`,other:`{{count}} måneder`},aboutXYears:{one:`cirka 1 år`,other:`cirka {{count}} år`},xYears:{one:`1 år`,other:`{{count}} år`},overXYears:{one:`over 1 år`,other:`over {{count}} år`},almostXYears:{one:`næsten 1 år`,other:`næsten {{count}} år`}},nr=(e,t,n)=>{let r,i=tr[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var ir,ar,or,sr;function cr(){return(cr=e((()=>{ir={full:`EEEE 'den' d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd/MM/y`},ar={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},or={full:`{{date}} 'kl'. {{time}}`,long:`{{date}} 'kl'. {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},sr={date:A({formats:ir,defaultWidth:`full`}),time:A({formats:ar,defaultWidth:`full`}),dateTime:A({formats:or,defaultWidth:`full`})}})))()}var lr,ur;function dr(){return(dr=e((()=>{lr={lastWeek:`'sidste' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`'på' eeee 'kl.' p`,other:`P`},ur=(e,t,n,r)=>lr[e]})))()}var fr,pr,mr,hr,gr,_r,vr,yr;function br(){return(br=e((()=>{fr={narrow:[`fvt`,`vt`],abbreviated:[`f.v.t.`,`v.t.`],wide:[`før vesterlandsk tidsregning`,`vesterlandsk tidsregning`]},pr={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`1. kvt.`,`2. kvt.`,`3. kvt.`,`4. kvt.`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},mr={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mar.`,`apr.`,`maj`,`jun.`,`jul.`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januar`,`februar`,`marts`,`april`,`maj`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`december`]},hr={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn.`,`man.`,`tir.`,`ons.`,`tor.`,`fre.`,`lør.`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},gr={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`morgen`,afternoon:`eftermiddag`,evening:`aften`,night:`nat`}},_r={narrow:{am:`a`,pm:`p`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnat`,noon:`middag`,morning:`om morgenen`,afternoon:`om eftermiddagen`,evening:`om aftenen`,night:`om natten`}},vr=(e,t)=>Number(e)+`.`,yr={ordinalNumber:vr,era:j({values:fr,defaultWidth:`wide`}),quarter:j({values:pr,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:j({values:mr,defaultWidth:`wide`}),day:j({values:hr,defaultWidth:`wide`}),dayPeriod:j({values:gr,defaultWidth:`wide`,formattingValues:_r,defaultFormattingWidth:`wide`})}})))()}var xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=e((()=>{xr=/^(\d+)(\.)?/i,Sr=/\d+/i,Cr={narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},wr={any:[/^f/i,/^(v|e)/i]},Tr={narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},Er={any:[/1/i,/2/i,/3/i,/4/i]},Dr={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},Or={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},kr={narrow:/^[smtofl]/i,short:/^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Ar={narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},jr={narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},Mr={any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},Nr={ordinalNumber:N({matchPattern:xr,parsePattern:Sr,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Cr,defaultMatchWidth:`wide`,parsePatterns:wr,defaultParseWidth:`any`}),quarter:M({matchPatterns:Tr,defaultMatchWidth:`wide`,parsePatterns:Er,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:Dr,defaultMatchWidth:`wide`,parsePatterns:Or,defaultParseWidth:`any`}),day:M({matchPatterns:kr,defaultMatchWidth:`wide`,parsePatterns:Ar,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:jr,defaultMatchWidth:`any`,parsePatterns:Mr,defaultParseWidth:`any`})}})))()}var Fr;function Ir(){return(Ir=e((()=>{rr(),cr(),dr(),br(),Pr(),Fr={code:`da`,formatDistance:nr,formatLong:sr,formatRelative:ur,localize:yr,match:Nr,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Lr,Rr,zr,Br;function Vr(){return(Vr=e((()=>{Lr={full:`EEEE, d MMMM yyyy`,long:`d MMMM yyyy`,medium:`d MMM yyyy`,short:`dd/MM/yyyy`},Rr={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},zr={full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},Br={date:A({formats:Lr,defaultWidth:`full`}),time:A({formats:Rr,defaultWidth:`full`}),dateTime:A({formats:zr,defaultWidth:`full`})}})))()}var Hr;function Ur(){return(Ur=e((()=>{_t(),Tt(),Pt(),Xt(),Vr(),Hr={code:`en-GB`,formatDistance:gt,formatLong:Br,formatRelative:wt,localize:Nt,match:Yt,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}function Wr(e){return e.replace(/sekuntia?/,`sekunnin`)}function Gr(e){return e.replace(/minuuttia?/,`minuutin`)}function Kr(e){return e.replace(/tuntia?/,`tunnin`)}function qr(e){return e.replace(/päivää?/,`päivän`)}function Jr(e){return e.replace(/(viikko|viikkoa)/,`viikon`)}function Yr(e){return e.replace(/(kuukausi|kuukautta)/,`kuukauden`)}function z(e){return e.replace(/(vuosi|vuotta)/,`vuoden`)}var Xr,Zr;function Qr(){return(Qr=e((()=>{Xr={lessThanXSeconds:{one:`alle sekunti`,other:`alle {{count}} sekuntia`,futureTense:Wr},xSeconds:{one:`sekunti`,other:`{{count}} sekuntia`,futureTense:Wr},halfAMinute:{one:`puoli minuuttia`,other:`puoli minuuttia`,futureTense:e=>`puolen minuutin`},lessThanXMinutes:{one:`alle minuutti`,other:`alle {{count}} minuuttia`,futureTense:Gr},xMinutes:{one:`minuutti`,other:`{{count}} minuuttia`,futureTense:Gr},aboutXHours:{one:`noin tunti`,other:`noin {{count}} tuntia`,futureTense:Kr},xHours:{one:`tunti`,other:`{{count}} tuntia`,futureTense:Kr},xDays:{one:`päivä`,other:`{{count}} päivää`,futureTense:qr},aboutXWeeks:{one:`noin viikko`,other:`noin {{count}} viikkoa`,futureTense:Jr},xWeeks:{one:`viikko`,other:`{{count}} viikkoa`,futureTense:Jr},aboutXMonths:{one:`noin kuukausi`,other:`noin {{count}} kuukautta`,futureTense:Yr},xMonths:{one:`kuukausi`,other:`{{count}} kuukautta`,futureTense:Yr},aboutXYears:{one:`noin vuosi`,other:`noin {{count}} vuotta`,futureTense:z},xYears:{one:`vuosi`,other:`{{count}} vuotta`,futureTense:z},overXYears:{one:`yli vuosi`,other:`yli {{count}} vuotta`,futureTense:z},almostXYears:{one:`lähes vuosi`,other:`lähes {{count}} vuotta`,futureTense:z}},Zr=(e,t,n)=>{let r=Xr[e],i=t===1?r.one:r.other.replace(`{{count}}`,String(t));return n?.addSuffix?n.comparison&&n.comparison>0?r.futureTense(i)+` kuluttua`:i+` sitten`:i}})))()}var $r,ei,ti,ni;function ri(){return(ri=e((()=>{$r={full:`eeee d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`d.M.y`},ei={full:`HH.mm.ss zzzz`,long:`HH.mm.ss z`,medium:`HH.mm.ss`,short:`HH.mm`},ti={full:`{{date}} 'klo' {{time}}`,long:`{{date}} 'klo' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ni={date:A({formats:$r,defaultWidth:`full`}),time:A({formats:ei,defaultWidth:`full`}),dateTime:A({formats:ti,defaultWidth:`full`})}})))()}var ii,ai;function oi(){return(oi=e((()=>{ii={lastWeek:`'viime' eeee 'klo' p`,yesterday:`'eilen klo' p`,today:`'tänään klo' p`,tomorrow:`'huomenna klo' p`,nextWeek:`'ensi' eeee 'klo' p`,other:`P`},ai=(e,t,n,r)=>ii[e]})))()}var si,ci,B,li,V,ui,di,fi,pi;function mi(){return(mi=e((()=>{si={narrow:[`eaa.`,`jaa.`],abbreviated:[`eaa.`,`jaa.`],wide:[`ennen ajanlaskun alkua`,`jälkeen ajanlaskun alun`]},ci={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartaali`,`2. kvartaali`,`3. kvartaali`,`4. kvartaali`]},B={narrow:[`T`,`H`,`M`,`H`,`T`,`K`,`H`,`E`,`S`,`L`,`M`,`J`],abbreviated:[`tammi`,`helmi`,`maalis`,`huhti`,`touko`,`kesä`,`heinä`,`elo`,`syys`,`loka`,`marras`,`joulu`],wide:[`tammikuu`,`helmikuu`,`maaliskuu`,`huhtikuu`,`toukokuu`,`kesäkuu`,`heinäkuu`,`elokuu`,`syyskuu`,`lokakuu`,`marraskuu`,`joulukuu`]},li={narrow:B.narrow,abbreviated:B.abbreviated,wide:[`tammikuuta`,`helmikuuta`,`maaliskuuta`,`huhtikuuta`,`toukokuuta`,`kesäkuuta`,`heinäkuuta`,`elokuuta`,`syyskuuta`,`lokakuuta`,`marraskuuta`,`joulukuuta`]},V={narrow:[`S`,`M`,`T`,`K`,`T`,`P`,`L`],short:[`su`,`ma`,`ti`,`ke`,`to`,`pe`,`la`],abbreviated:[`sunn.`,`maan.`,`tiis.`,`kesk.`,`torst.`,`perj.`,`la`],wide:[`sunnuntai`,`maanantai`,`tiistai`,`keskiviikko`,`torstai`,`perjantai`,`lauantai`]},ui={narrow:V.narrow,short:V.short,abbreviated:V.abbreviated,wide:[`sunnuntaina`,`maanantaina`,`tiistaina`,`keskiviikkona`,`torstaina`,`perjantaina`,`lauantaina`]},di={narrow:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},abbreviated:{am:`ap`,pm:`ip`,midnight:`keskiyö`,noon:`keskipäivä`,morning:`ap`,afternoon:`ip`,evening:`illalla`,night:`yöllä`},wide:{am:`ap`,pm:`ip`,midnight:`keskiyöllä`,noon:`keskipäivällä`,morning:`aamupäivällä`,afternoon:`iltapäivällä`,evening:`illalla`,night:`yöllä`}},fi=(e,t)=>Number(e)+`.`,pi={ordinalNumber:fi,era:j({values:si,defaultWidth:`wide`}),quarter:j({values:ci,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:j({values:B,defaultWidth:`wide`,formattingValues:li,defaultFormattingWidth:`wide`}),day:j({values:V,defaultWidth:`wide`,formattingValues:ui,defaultFormattingWidth:`wide`}),dayPeriod:j({values:di,defaultWidth:`wide`})}})))()}var hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di;function Oi(){return(Oi=e((()=>{hi=/^(\d+)(\.)/i,gi=/\d+/i,_i={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},vi={any:[/^e/i,/^j/i]},yi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},bi={any:[/1/i,/2/i,/3/i,/4/i]},xi={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},Si={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},Ci={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},wi={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},Ti={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},Ei={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},Di={ordinalNumber:N({matchPattern:hi,parsePattern:gi,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:_i,defaultMatchWidth:`wide`,parsePatterns:vi,defaultParseWidth:`any`}),quarter:M({matchPatterns:yi,defaultMatchWidth:`wide`,parsePatterns:bi,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:xi,defaultMatchWidth:`wide`,parsePatterns:Si,defaultParseWidth:`any`}),day:M({matchPatterns:Ci,defaultMatchWidth:`wide`,parsePatterns:wi,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:Ti,defaultMatchWidth:`any`,parsePatterns:Ei,defaultParseWidth:`any`})}})))()}var ki;function Ai(){return(Ai=e((()=>{Qr(),ri(),oi(),mi(),Oi(),ki={code:`fi`,formatDistance:Zr,formatLong:ni,formatRelative:ai,localize:pi,match:Di,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var ji,Mi;function Ni(){return(Ni=e((()=>{ji={lessThanXSeconds:{one:`mindre enn ett sekund`,other:`mindre enn {{count}} sekunder`},xSeconds:{one:`ett sekund`,other:`{{count}} sekunder`},halfAMinute:`et halvt minutt`,lessThanXMinutes:{one:`mindre enn ett minutt`,other:`mindre enn {{count}} minutter`},xMinutes:{one:`ett minutt`,other:`{{count}} minutter`},aboutXHours:{one:`omtrent en time`,other:`omtrent {{count}} timer`},xHours:{one:`en time`,other:`{{count}} timer`},xDays:{one:`en dag`,other:`{{count}} dager`},aboutXWeeks:{one:`omtrent en uke`,other:`omtrent {{count}} uker`},xWeeks:{one:`en uke`,other:`{{count}} uker`},aboutXMonths:{one:`omtrent en måned`,other:`omtrent {{count}} måneder`},xMonths:{one:`en måned`,other:`{{count}} måneder`},aboutXYears:{one:`omtrent ett år`,other:`omtrent {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`over ett år`,other:`over {{count}} år`},almostXYears:{one:`nesten ett år`,other:`nesten {{count}} år`}},Mi=(e,t,n)=>{let r,i=ji[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` siden`:r}})))()}var Pi,Fi,Ii,Li;function Ri(){return(Ri=e((()=>{Pi={full:`EEEE d. MMMM y`,long:`d. MMMM y`,medium:`d. MMM y`,short:`dd.MM.y`},Fi={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},Ii={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},Li={date:A({formats:Pi,defaultWidth:`full`}),time:A({formats:Fi,defaultWidth:`full`}),dateTime:A({formats:Ii,defaultWidth:`full`})}})))()}var zi,Bi;function Vi(){return(Vi=e((()=>{zi={lastWeek:`'forrige' eeee 'kl.' p`,yesterday:`'i går kl.' p`,today:`'i dag kl.' p`,tomorrow:`'i morgen kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Bi=(e,t,n,r)=>zi[e]})))()}var Hi,Ui,Wi,Gi,Ki,qi,Ji;function Yi(){return(Yi=e((()=>{Hi={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`før Kristus`,`etter Kristus`]},Ui={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. kvartal`,`2. kvartal`,`3. kvartal`,`4. kvartal`]},Wi={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`mai`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`des.`],wide:[`januar`,`februar`,`mars`,`april`,`mai`,`juni`,`juli`,`august`,`september`,`oktober`,`november`,`desember`]},Gi={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sø`,`ma`,`ti`,`on`,`to`,`fr`,`lø`],abbreviated:[`søn`,`man`,`tir`,`ons`,`tor`,`fre`,`lør`],wide:[`søndag`,`mandag`,`tirsdag`,`onsdag`,`torsdag`,`fredag`,`lørdag`]},Ki={narrow:{am:`a`,pm:`p`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},abbreviated:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på etterm.`,evening:`på kvelden`,night:`på natten`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnatt`,noon:`middag`,morning:`på morgenen`,afternoon:`på ettermiddagen`,evening:`på kvelden`,night:`på natten`}},qi=(e,t)=>Number(e)+`.`,Ji={ordinalNumber:qi,era:j({values:Hi,defaultWidth:`wide`}),quarter:j({values:Ui,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:j({values:Wi,defaultWidth:`wide`}),day:j({values:Gi,defaultWidth:`wide`}),dayPeriod:j({values:Ki,defaultWidth:`wide`})}})))()}var Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca;function la(){return(la=e((()=>{Xi=/^(\d+)\.?/i,Zi=/\d+/i,Qi={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},$i={any:[/^f/i,/^e/i]},ea={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},ta={any:[/1/i,/2/i,/3/i,/4/i]},na={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ra={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},ia={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},aa={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},oa={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},sa={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ca={ordinalNumber:N({matchPattern:Xi,parsePattern:Zi,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Qi,defaultMatchWidth:`wide`,parsePatterns:$i,defaultParseWidth:`any`}),quarter:M({matchPatterns:ea,defaultMatchWidth:`wide`,parsePatterns:ta,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:na,defaultMatchWidth:`wide`,parsePatterns:ra,defaultParseWidth:`any`}),day:M({matchPatterns:ia,defaultMatchWidth:`wide`,parsePatterns:aa,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:oa,defaultMatchWidth:`any`,parsePatterns:sa,defaultParseWidth:`any`})}})))()}var ua;function da(){return(da=e((()=>{Ni(),Ri(),Vi(),Yi(),la(),ua={code:`nb`,formatDistance:Mi,formatLong:Li,formatRelative:Bi,localize:Ji,match:ca,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var fa,pa,ma;function ha(){return(ha=e((()=>{fa={lessThanXSeconds:{one:`mindre än en sekund`,other:`mindre än {{count}} sekunder`},xSeconds:{one:`en sekund`,other:`{{count}} sekunder`},halfAMinute:`en halv minut`,lessThanXMinutes:{one:`mindre än en minut`,other:`mindre än {{count}} minuter`},xMinutes:{one:`en minut`,other:`{{count}} minuter`},aboutXHours:{one:`ungefär en timme`,other:`ungefär {{count}} timmar`},xHours:{one:`en timme`,other:`{{count}} timmar`},xDays:{one:`en dag`,other:`{{count}} dagar`},aboutXWeeks:{one:`ungefär en vecka`,other:`ungefär {{count}} veckor`},xWeeks:{one:`en vecka`,other:`{{count}} veckor`},aboutXMonths:{one:`ungefär en månad`,other:`ungefär {{count}} månader`},xMonths:{one:`en månad`,other:`{{count}} månader`},aboutXYears:{one:`ungefär ett år`,other:`ungefär {{count}} år`},xYears:{one:`ett år`,other:`{{count}} år`},overXYears:{one:`över ett år`,other:`över {{count}} år`},almostXYears:{one:`nästan ett år`,other:`nästan {{count}} år`}},pa=[`noll`,`en`,`två`,`tre`,`fyra`,`fem`,`sex`,`sju`,`åtta`,`nio`,`tio`,`elva`,`tolv`],ma=(e,t,n)=>{let r,i=fa[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t<13?pa[t]:String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`om `+r:r+` sedan`:r}})))()}var ga,_a,va,ya;function ba(){return(ba=e((()=>{ga={full:`EEEE d MMMM y`,long:`d MMMM y`,medium:`d MMM y`,short:`y-MM-dd`},_a={full:`'kl'. HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},va={full:`{{date}} 'kl.' {{time}}`,long:`{{date}} 'kl.' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},ya={date:A({formats:ga,defaultWidth:`full`}),time:A({formats:_a,defaultWidth:`full`}),dateTime:A({formats:va,defaultWidth:`full`})}})))()}var xa,Sa;function Ca(){return(Ca=e((()=>{xa={lastWeek:`'i' EEEE's kl.' p`,yesterday:`'igår kl.' p`,today:`'idag kl.' p`,tomorrow:`'imorgon kl.' p`,nextWeek:`EEEE 'kl.' p`,other:`P`},Sa=(e,t,n,r)=>xa[e]})))()}var wa,Ta,Ea,Da,Oa,ka,Aa,ja;function Ma(){return(Ma=e((()=>{wa={narrow:[`f.Kr.`,`e.Kr.`],abbreviated:[`f.Kr.`,`e.Kr.`],wide:[`före Kristus`,`efter Kristus`]},Ta={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1:a kvartalet`,`2:a kvartalet`,`3:e kvartalet`,`4:e kvartalet`]},Ea={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`jan.`,`feb.`,`mars`,`apr.`,`maj`,`juni`,`juli`,`aug.`,`sep.`,`okt.`,`nov.`,`dec.`],wide:[`januari`,`februari`,`mars`,`april`,`maj`,`juni`,`juli`,`augusti`,`september`,`oktober`,`november`,`december`]},Da={narrow:[`S`,`M`,`T`,`O`,`T`,`F`,`L`],short:[`sö`,`må`,`ti`,`on`,`to`,`fr`,`lö`],abbreviated:[`sön`,`mån`,`tis`,`ons`,`tors`,`fre`,`lör`],wide:[`söndag`,`måndag`,`tisdag`,`onsdag`,`torsdag`,`fredag`,`lördag`]},Oa={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`morg.`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},abbreviated:{am:`f.m.`,pm:`e.m.`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`efterm.`,evening:`kväll`,night:`natt`},wide:{am:`förmiddag`,pm:`eftermiddag`,midnight:`midnatt`,noon:`middag`,morning:`morgon`,afternoon:`eftermiddag`,evening:`kväll`,night:`natt`}},ka={narrow:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},abbreviated:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morg.`,afternoon:`på efterm.`,evening:`på kvällen`,night:`på natten`},wide:{am:`fm`,pm:`em`,midnight:`midnatt`,noon:`middag`,morning:`på morgonen`,afternoon:`på eftermiddagen`,evening:`på kvällen`,night:`på natten`}},Aa=(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:case 2:return n+`:a`}return n+`:e`},ja={ordinalNumber:Aa,era:j({values:wa,defaultWidth:`wide`}),quarter:j({values:Ta,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:j({values:Ea,defaultWidth:`wide`}),day:j({values:Da,defaultWidth:`wide`}),dayPeriod:j({values:Oa,defaultWidth:`wide`,formattingValues:ka,defaultFormattingWidth:`wide`})}})))()}var Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga;function Ka(){return(Ka=e((()=>{Na=/^(\d+)(:a|:e)?/i,Pa=/\d+/i,Fa={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},Ia={any:[/^f/i,/^[ev]/i]},La={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},Ra={any:[/1/i,/2/i,/3/i,/4/i]},za={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},Ba={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Va={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},Ha={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ua={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},Wa={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},Ga={ordinalNumber:N({matchPattern:Na,parsePattern:Pa,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:Fa,defaultMatchWidth:`wide`,parsePatterns:Ia,defaultParseWidth:`any`}),quarter:M({matchPatterns:La,defaultMatchWidth:`wide`,parsePatterns:Ra,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:M({matchPatterns:za,defaultMatchWidth:`wide`,parsePatterns:Ba,defaultParseWidth:`any`}),day:M({matchPatterns:Va,defaultMatchWidth:`wide`,parsePatterns:Ha,defaultParseWidth:`any`}),dayPeriod:M({matchPatterns:Ua,defaultMatchWidth:`any`,parsePatterns:Wa,defaultParseWidth:`any`})}})))()}var qa;function Ja(){return(Ja=e((()=>{ha(),ba(),Ca(),Ma(),Ka(),qa={code:`sv`,formatDistance:ma,formatLong:ya,formatRelative:Sa,localize:ja,match:Ga,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var Ya,Xa,Za;function Qa(){return(Qa=e((()=>{a(),ae(),Ya=`important`,Xa=` !`+Ya,Za=oe(class extends ie{constructor(e){if(super(e),e.type!==re.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Xa);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ya:``):n[e]=r}}return c}})})))()}function $a(){return($a=e((()=>{Qa()})))()}var eo;function to(){return(to=e((()=>{eo=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var no;function ro(){return(ro=e((()=>{no=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var io;function ao(){return(ao=e((()=>{io=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valinnainen"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var oo;function so(){return(so=e((()=>{oo=JSON.parse(`{"datepicker.calendar.nextMonth":["Gå til neste måned"],"datepicker.calendar.previousMonth":["Gå til forrige måned"],"datepicker.calendar.roleDescription":["datovelger"],"datepicker.label.optional":["Valgfri"],"datepicker.toggle.changeDate":["Endre dato, ",["currentDate"]],"datepicker.toggle.chooseDate":["Velg dato"]}`)})))()}var co;function lo(){return(lo=e((()=>{co=JSON.parse(`{"datepicker.calendar.nextMonth":["Next month"],"datepicker.calendar.previousMonth":["Previous month"],"datepicker.calendar.roleDescription":["Date picker"],"datepicker.label.optional":["Valfritt"],"datepicker.toggle.changeDate":["Change date, ",["currentDate"]],"datepicker.toggle.chooseDate":["Choose date"]}`)})))()}var uo,fo,po;function mo(){return(mo=e((()=>{r(),uo=f`
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
`,fo=f`
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
`,po=f`
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
`})))()}var ho;function go(){return(go=e((()=>{r(),ho=f`
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
`})))()}var _o;function vo(){return(vo=e((()=>{r(),_o=f`
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
`})))()}var yo;function bo(){return(bo=e((()=>{r(),yo=f`
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
`})))()}function xo(e){if(typeof e!=`string`)return null;let t=e;To.test(e)&&(t=`${e}T00:00:00Z`);let n=Date.parse(t);return Number.isNaN(n)?null:new Date(n)}function So(e=typeof navigator<`u`?navigator.userAgent:``){let t=Eo.test(e),n=Do.test(e)&&!Oo.test(e);return t||n?`text`:`date`}function Co(e){let t=e===`en`?`en-GB`:e;return new Intl.DateTimeFormat(t,{day:`2-digit`,month:`2-digit`,year:`numeric`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2006,0,2))).map(e=>e.type===`day`?`dd`:e.type===`month`?`mm`:e.type===`year`?`yyyy`:e.value).join(``)}function wo(e,t){if(!To.exec(e))return e;let[n,r,i]=e.split(`-`);return Co(t).replace(`yyyy`,n).replace(`mm`,r).replace(`dd`,i)}var To,Eo,Do,Oo;function ko(){return(ko=e((()=>{To=/^\d{4}-\d{2}-\d{2}$/,Eo=/iP(hone|od|ad)/,Do=/Safari/,Oo=/(Chrome|Chromium|CriOS|FxiOS|Edg|OPR|Android)/})))()}var H,U,W,G,Ao,K,q,J;function jo(){return(jo=e((()=>{ee(),_e(),Ne(),Fe(),We(),ot(),ct(),mt(),Pn(),In(),Rn(),Hn(),Qe(),Kn(),Jn(),Wn(),ut(),Qn(),T(),Xn(),er(),Ir(),Ur(),Ai(),da(),Ja(),r(),l(),ue(),ye(),$a(),de(),Se(),te(),pe(),to(),ro(),ao(),so(),lo(),mo(),go(),vo(),bo(),ko(),H=So(),U=`calendar`,W=`input`,G=`toggle`,Ao=`wrapper`,K=`previous`,q={en:Hr,nb:ua,sv:qa,da:Fr,fi:ki},J=class extends ve(s){static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[fe,uo,fo,po,ho,_o,yo]}get selectedDate(){return this.value?xo(this.value)??null:null}get month(){return lt(this.navigationDate)}#e;get weeks(){let e=this.month,t=this.navigationDate,n=st({start:lt(e),end:Un(e)},{locale:this.locale}).map(e=>({start:e,end:pt(e,{locale:this.locale})})).map(e=>at(e));if(Gn(t,e)){let e=Vn(t,{locale:this.locale})-1,r=Ue(t,w(t,{locale:this.locale}));n[e][r]=t}return n}get#t(){return this.lang||m()||`en`}get#n(){return H===`text`&&this.value?wo(this.value,this.#t):this.value||``}async#r(e){e.preventDefault(),this.isCalendarOpen=!this.isCalendarOpen,this.isCalendarOpen&&(await this.updateComplete,(this.selectedCell||this.todayCell).focus())}#i(){this.navigationDate=Pe(this.month,1)}#a(){this.navigationDate=$n(this.month,1)}#o;async#s(){await this.updateComplete,this.input.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}_onClickOutside(e){this.isCalendarOpen&&(this.contains(e.target)||(this.isCalendarOpen=!1))}#c(e){this.value=e.target.value}#l(){this.#g=!0,this.#b()}#u(e){e.preventDefault(),this.isCalendarOpen=!0}#d(e){if(e.key===` `)return this.#r(e);e.key===`,`&&e.preventDefault(),e.key===`Enter`&&this.internals.form&&this.internals.form.requestSubmit()}async#f(e){let t=this.navigationDate,n=null;switch(e.key){case`ArrowUp`:n=Yn(t,7);break;case`ArrowLeft`:n=Yn(t,1);break;case`Home`:n=w(t,{locale:this.locale});break;case`PageUp`:n=$n(t,1);break;case`ArrowDown`:n=Me(t,7);break;case`ArrowRight`:n=Me(t,1);break;case`End`:n=pt(t,{locale:this.locale});break;case`PageDown`:n=Pe(t,1);break;case`Escape`:this.isCalendarOpen=!1;break;case`Tab`:e.target.tagName===`TD`&&!e.shiftKey?(e.preventDefault(),this.previousMonthButton.focus()):e.target.id===K&&e.shiftKey&&(e.preventDefault(),(this.selectedCell||this.todayCell).focus())}n&&(e.preventDefault(),this.navigationDate=n,await this.updateComplete,this.selectedCell.focus())}#p(e){let t=e.currentTarget.dataset.date;`key`in e?(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.toggleButton.focus(),this.#s()):(this.value=t,this.input.value=this.#n,this.#b(),this.isCalendarOpen=!1,this.#s())}#m;#h;#g;constructor(){super(),this.required=!1,this.optional=!1,this.invalid=!1,this.disabled=!1,this.readonly=!1,this.headerFormat=`MMMM yyyy`,this.weekdayFormat=`EEEEEE`,this.dayFormat=`PPPP`,this.isCalendarOpen=!1,this.navigationDate=Zn(),this.locale=Hr,this.#e=void 0,this.#o=``,this.#m=!1,this.#h=void 0,this.#g=!1,this.#y=e=>{e.preventDefault(),this.#g=!0,this.#b()},ne(no,oo,io,eo,co);let e=m();e&&q[e]&&(this.locale=q[e]),this._onClickOutside=this._onClickOutside.bind(this)}resetFormControl(){this.value=this.#e,this.#g=!1,this.#v(),this.#b()}get validationMessage(){return this.internals.validationMessage}get validity(){return this.internals.validity}get _error(){if(this.invalid&&this.helpText)return this.helpText}checkValidity(){return this.#b(),this.internals.checkValidity()}reportValidity(){return this.#g=!0,this.#b(),this.internals.checkValidity()}setCustomValidity(e){this.#o=e,e?(this.#b(),this.#_(e)):(this.#v(),this.#b())}#_(e){this.#m||(this.#h=this.helpText),this.#m=!0,this.invalid=!0,this.helpText=e}#v(){this.#m&&=(this.invalid=!1,this.helpText=this.#h,this.#h=void 0,!1)}#y;#b(){if(this.disabled){this.internals.setValidity({}),this.#v();return}let e={valueMissing:this.required&&!this.value,customError:this.#o!==``};if(Object.values(e).some(Boolean)){let t=e.customError?this.#o:this.input?.validationMessage||``;this.internals.setValidity(e,t,this.input),this.#g&&this.#_(t);return}this.internals.setValidity({}),this.#v()}connectedCallback(){super.connectedCallback(),this.#e=this.value,this.value!==void 0&&this.setValue(this.value),this.addEventListener(`invalid`,this.#y);let e=this.lang;if(e&&q[e]&&(this.locale=q[e]),this.value){let e=xo(this.value);e&&(this.navigationDate=e)}document.addEventListener(`mousedown`,this._onClickOutside),document.addEventListener(`touchend`,this._onClickOutside),document.addEventListener(`focusin`,this._onClickOutside)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.#y),document.removeEventListener(`mousedown`,this._onClickOutside),document.removeEventListener(`touchend`,this._onClickOutside),document.removeEventListener(`focusin`,this._onClickOutside)}updated(e){e.has(`value`)&&this.value!==void 0&&this.setValue(this.value),(e.has(`value`)||e.has(`required`)||e.has(`disabled`))&&this.#b()}firstUpdated(e){super.firstUpdated(e),this.#b()}render(){return o`
			<div class="w-datepicker-wrapper" id="${Ao}">
				<label class="w-datepicker-input-label" for="${W}">
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
						id="${W}"
						type="${H}"
						name="${g(this.name)}"
						placeholder="${g(H===`text`?Co(this.#t):void 0)}"
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
						aria-label="${this.value?p.t({id:`datepicker.toggle.changeDate`,values:{currentDate:R(this.value,this.dayFormat)},message:`Change date, {currentDate}`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is a selected date`}):p.t({id:`datepicker.toggle.chooseDate`,message:`Choose date`,comment:`Used by screen readers to describe the button that toggles open the calendar in a date picker when there is no selected date`})}"
						aria-controls="${U}"
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
							locale="${m()}"
							class="flex"
						></w-icon>
					</w-button>
				</div>
				${this.helpText?o`<div id="help-text" class="help-text">${this.helpText}</div>`:i}
			</div>
			<div
				class="w-dropdown__popover w-dropdown__popover--open"
				style="${Za({display:this.isCalendarOpen?void 0:`none`})}"
			>
				<div
					aria-label="${p.t({id:`datepicker.calendar.roleDescription`,message:`Date picker`,comment:`Used by screen readers to announce that the calendar element is a date picker.`})}"
					aria-modal="true"
					role="dialog"
					class="w-datepicker__calendar"
					data-testid="${U}"
					id="${U}"
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
							${R(this.month,this.headerFormat,{locale:this.locale})}
						</div>
						<w-button
							aria-label="${p.t({id:`datepicker.calendar.nextMonth`,message:`Next month`,comment:`Screen reader label for the next month button.`})}"
							class="w-datepicker__month__nav__button"
							data-testid="${U}-next"
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
												${R(e,this.weekdayFormat,{locale:this.locale})}
											</th> `)}
								</tr>
							</thead>
							<tbody>
								${this.weeks.map(e=>o`<tr>
											${e.map(e=>{if(!Gn(this.month,e))return o`<td></td>`;let t=this.isDayDisabled?this.isDayDisabled(e):!1,n=!!this.selectedDate&&Ze(e,this.selectedDate),r=e===this.navigationDate;return o`<td
													aria-current="${g(qn(e)?`date`:void 0)}"
													aria-disabled="${t}"
													aria-label="${R(e,this.dayFormat,{locale:this.locale})}"
													aria-selected="${n}"
													class="${le({"w-datepicker__day":!0,"w-datepicker__day--today":qn(e),"w-datepicker__day--selected":n,"w-datepicker__day--disabled":t,"w-datepicker__day--navigation":r})}"
													data-navigation="${r}"
													data-date="${Fn(e,{representation:`date`})}"
													role="gridcell"
													tabindex="${r?0:-1}"
													@click="${t?void 0:this.#p}"
													@keydown="${t?void 0:this.#p}"
												>
													<div>${Ln(e)}</div>
												</td>`})}
										</tr>`)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		`}},d([u({reflect:!0})],J.prototype,`label`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`required`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`optional`,void 0),d([u({type:String,reflect:!0,attribute:`help-text`})],J.prototype,`helpText`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`invalid`,void 0),d([u({type:String,reflect:!0})],J.prototype,`tooltip`,void 0),d([u({reflect:!0})],J.prototype,`lang`,void 0),d([u({reflect:!0})],J.prototype,`name`,void 0),d([u({reflect:!0})],J.prototype,`value`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`disabled`,void 0),d([u({type:Boolean,reflect:!0})],J.prototype,`readonly`,void 0),d([u({attribute:`header-format`})],J.prototype,`headerFormat`,void 0),d([u({attribute:`weekday-format`})],J.prototype,`weekdayFormat`,void 0),d([u({attribute:!1})],J.prototype,`isDayDisabled`,void 0),d([u({attribute:`day-format`})],J.prototype,`dayFormat`,void 0),d([n()],J.prototype,`isCalendarOpen`,void 0),d([n()],J.prototype,`navigationDate`,void 0),d([n()],J.prototype,`locale`,void 0),d([n()],J.prototype,`selectedDate`,null),d([n()],J.prototype,`month`,null),d([n()],J.prototype,`weeks`,null),d([h(`#${U}`)],J.prototype,`calendar`,void 0),d([h(`#${W}`,!0)],J.prototype,`input`,void 0),d([h(`#${G}`,!0)],J.prototype,`toggleButton`,void 0),d([h(`#${Ao}`,!0)],J.prototype,`wrapper`,void 0),d([h(`#${K}`)],J.prototype,`previousMonthButton`,void 0),d([h(`[aria-current="date"]`)],J.prototype,`todayCell`,void 0),d([h(`[data-navigation="true"]`)],J.prototype,`selectedCell`,void 0),customElements.get(`w-datepicker`)||customElements.define(`w-datepicker`,J)})))()}var Mo=t({Default:()=>Y,DisableCalendarDates:()=>$,Invalid:()=>Z,WithHelpText:()=>X,WithTooltip:()=>Q,__namedExportsOrder:()=>zo,default:()=>Ro}),No,Po,Fo,Io,Lo,Ro,Y,X,Z,Q,$,zo;function Bo(){return(Bo=e((()=>{ge(),se(),r(),be(),Se(),jo(),{events:Fo,args:Io,argTypes:Lo}=ce(`w-datepicker`),Ro={title:`Forms/Datepicker`,render(e){return o(No||=xe([`
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