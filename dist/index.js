"use strict";Object.defineProperty(exports, "__esModule", {value: true});var a=(e,t)=>{if(!e)return null;let[n,...r]=t.split("."),o=e[n];for(let l of r){if(!o)return null;o=o[l]}return o};var i=(...e)=>console.log(...e);var p=(...e)=>t=>e.reduce((n,r)=>r(n),t);var s=(...e)=>t=>e.reduce(async(n,r)=>Promise.resolve(n)===n?r(await n):r(n),t);var u=e=>{let t=new Map,n=(...r)=>{let o=JSON.stringify(r);if(t.has(o))return t.get(o);let l=e(...r);return t.set(o,l),l};return Reflect.defineProperty(n,"clear",{value:()=>t.clear()}),n};var c=(e,...t)=>e.bind(null,...t);var y=e=>{let t=Reflect.apply(Object.prototype.toString,e,[]);return t.substring(t.indexOf(" ")+1,t.indexOf("]")).toLowerCase()};var f=e=>Object(e)!==e;var T=e=>function t(...n){return e.length<=n.length?Reflect.apply(e,null,n):(...r)=>Reflect.apply(t,null,n.concat(r))};exports.asyncPipeline = s; exports.curry = T; exports.isPrimitive = f; exports.log = i; exports.memo = u; exports.partialize = c; exports.path = a; exports.pipeline = p; exports.typeOf = y;
//# sourceMappingURL=index.js.map