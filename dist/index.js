"use strict";Object.defineProperty(exports, "__esModule", {value: true});var s=(e,n)=>{if(!e)return null;let[t,...o]=n.split("."),r=e[t];for(let i of o){if(!r)return null;r=r[i]}return r};var p=(...e)=>console.log(...e);var f=(...e)=>n=>e.reduce((t,o)=>o(t),n);var y=(...e)=>n=>e.reduce(async(t,o)=>Promise.resolve(t)===t?o(await t):o(t),n);var T=e=>{let n=new Map,t=(...o)=>{let r=JSON.stringify(o);if(n.has(r))return n.get(r);let i=e(...o);return n.set(r,i),i};return Reflect.defineProperty(t,"clear",{value:()=>n.clear()}),t};var k=(e,...n)=>e.bind(null,...n);var m=e=>{let n=Reflect.apply(Object.prototype.toString,e,[]);return n.substring(n.indexOf(" ")+1,n.indexOf("]")).toLowerCase()};var u=e=>Object(e)!==e;var w=e=>function n(...t){return e.length<=t.length?Reflect.apply(e,null,t):(...o)=>Reflect.apply(n,null,t.concat(o))};var x=(e,n=200)=>{let t=0;return(...o)=>{t&&clearTimeout(t),t=setTimeout(()=>{Reflect.apply(e,null,o),t=null},n)}};var d=(e,n=1/0)=>(...t)=>n-- >0?Reflect.apply(e,null,t):void 0;var c=e=>(u(e)||(a(e)||F(e)?(g(e),h(e)):Reflect.ownKeys(e).forEach(n=>c(e[n]))),Object.freeze(e)),b=new Map([[1,"This object has been frozen and should not be mutated"]]),a=e=>e instanceof Map,F=e=>e instanceof Set,h=e=>e.forEach(n=>c(n)),g=e=>{a(e)?K(e):P(e)},l=()=>{throw Error(b.get(1))},K=e=>{e.set=l,e.delete=l,e.clear=l},P=e=>{e.add=l,e.delete=l,e.clear=l};exports.asyncPipeline = y; exports.curry = w; exports.debounce = x; exports.deepFreeze = c; exports.isPrimitive = u; exports.log = p; exports.memo = T; exports.partialize = k; exports.path = s; exports.pipeline = f; exports.takeUntil = d; exports.typeOf = m;
//# sourceMappingURL=index.js.map