var l=(o,n,p)=>new Promise((e,i)=>{var r=t=>{try{s(p.next(t))}catch(c){i(c)}},y=t=>{try{s(p.throw(t))}catch(c){i(c)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,y);s((p=p.apply(o,n)).next())});function F(o,n){return Reflect.has(o,n)}var D=(o,n)=>{if(!o)return null;let[p,...e]=n.split(".");if(!F(o,p))return null;let i=o[p];for(let r of e){if(!i)return null;i=i[r]}return i};var E=(...o)=>console.log(...o);function a(o,...n){return n.reduce((p,e)=>e(p),o)}function x(...o){return n=>a(n,...o)}function A(o,...n){return n.reduce((p,e)=>l(this,null,function*(){return Promise.resolve(p)===p?e(yield p):e(p)}),o)}function G(...o){return n=>A(n,...o)}var H=o=>{let n=new Map,p=(...e)=>{let i=JSON.stringify(e);if(n.has(i))return n.get(i);let r=o(...e);return n.set(i,r),r};return Reflect.defineProperty(p,"clear",{value:()=>n.clear()}),p};var v=(o,...n)=>o.bind(null,...n);var P=o=>{let n=Reflect.apply(Object.prototype.toString,o,[]);return n.substring(n.indexOf(" ")+1,n.indexOf("]")).toLowerCase()};var m=o=>Object(o)!==o;var R=o=>function n(...p){return o.length<=p.length?Reflect.apply(o,null,p):(...e)=>Reflect.apply(n,null,p.concat(e))};var d=(o,n=200)=>{let p=0;return(...e)=>{p&&clearTimeout(p),p=setTimeout(()=>{Reflect.apply(o,null,e),p=null},n)}};var I=(o,n=1/0)=>(...p)=>n-- >0?Reflect.apply(o,null,p):void 0;var f=o=>(m(o)||(C(o)||T(o)?(k(o),g(o)):Reflect.ownKeys(o).forEach(n=>f(o[n]))),Object.freeze(o)),w=new Map([[1,"This object has been frozen and should not be mutated"]]),C=o=>o instanceof Map,T=o=>o instanceof Set,g=o=>o.forEach(n=>f(n)),k=o=>{C(o)?J(o):K(o)},u=()=>{throw Error(w.get(1))},J=o=>{o.set=u,o.delete=u,o.clear=u},K=o=>{o.add=u,o.delete=u,o.clear=u};function h(o){if(P(o)!=="object")throw new TypeError(`[${o}] should be an object`)}var b=(o,...n)=>([o,...n].forEach(h),n.forEach(p=>B(o,p)),o),B=(o,n)=>{Reflect.ownKeys(n).forEach(p=>{if(typeof n[p]=="object")o[p]={},B(o[p],n[p]);else{let e=Object.getOwnPropertyDescriptor(n,p);e&&Reflect.defineProperty(o,p,e)}})};function O(o,...n){return!!(o&&typeof o=="object"&&n.every(p=>p in o))}export{A as asyncPipe,O as checkInterface,G as createAsyncPipe,x as createPipe,R as curry,d as debounce,f as deepFreeze,m as isPrimitive,E as log,H as memo,b as mixin,v as partialize,D as path,a as pipe,I as takeUntil,P as typeOf};
//# sourceMappingURL=index.mjs.map