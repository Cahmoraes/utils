"use strict";Object.defineProperty(exports, "__esModule", {value: true});var p=(e,n)=>{if(!e)return null;let[t,...o]=n.split("."),r=e[t];for(let s of o){if(!r)return null;r=r[s]}return r};var f=(...e)=>console.log(...e);var y=(...e)=>n=>e.reduce((t,o)=>o(t),n);var T=(...e)=>n=>e.reduce(async(t,o)=>Promise.resolve(t)===t?o(await t):o(t),n);var m=e=>{let n=new Map,t=(...o)=>{let r=JSON.stringify(o);if(n.has(r))return n.get(r);let s=e(...o);return n.set(r,s),s};return Reflect.defineProperty(t,"clear",{value:()=>n.clear()}),t};var k=(e,...n)=>e.bind(null,...n);var c=e=>{let n=Reflect.apply(Object.prototype.toString,e,[]);return n.substring(n.indexOf(" ")+1,n.indexOf("]")).toLowerCase()};var l=e=>Object(e)!==e;var x=e=>function n(...t){return e.length<=t.length?Reflect.apply(e,null,t):(...o)=>Reflect.apply(n,null,t.concat(o))};var w=(e,n=200)=>{let t=0;return(...o)=>{t&&clearTimeout(t),t=setTimeout(()=>{Reflect.apply(e,null,o),t=null},n)}};var b=(e,n=1/0)=>(...t)=>n-- >0?Reflect.apply(e,null,t):void 0;var u=e=>(l(e)||(a(e)||h(e)?(R(e),F(e)):Reflect.ownKeys(e).forEach(n=>u(e[n]))),Object.freeze(e)),d=new Map([[1,"This object has been frozen and should not be mutated"]]),a=e=>e instanceof Map,h=e=>e instanceof Set,F=e=>e.forEach(n=>u(n)),R=e=>{a(e)?g(e):K(e)},i=()=>{throw Error(d.get(1))},g=e=>{e.set=i,e.delete=i,e.clear=i},K=e=>{e.add=i,e.delete=i,e.clear=i};function P(e){if(c(e)!=="object")throw new TypeError(`[${e}] should be an object`)}var z=(e,...n)=>([e,...n].forEach(P),Object.assign(e,...n));exports.asyncPipe = T; exports.curry = x; exports.debounce = w; exports.deepFreeze = u; exports.isPrimitive = l; exports.log = f; exports.memo = m; exports.mixin = z; exports.partialize = k; exports.path = p; exports.pipe = y; exports.takeUntil = b; exports.typeOf = c;
//# sourceMappingURL=index.js.map