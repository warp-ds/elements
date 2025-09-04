function f(n,e){return!e[n]||e[n]===!1?"":e[n]===!0?n:`${n}="${e[n]}"`}function i(n){return Object.keys(n).map(e=>f(e,n)).join(" ")}export{i as t};
