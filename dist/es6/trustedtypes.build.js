(function(){'use strict';class d{constructor(a,b,c,e){this.N=a;this.L=b;this.F=c;this.A=e}static S(a){const b=/\s+/;return a.trim().split(/\s*;\s*/).map((a)=>a.split(b)).reduce(function(a,b){b[0]&&(a[b[0]]=b.slice(1).map((a)=>a).sort());return a},{})}static G(a){a=d.S(a);const b="trusted-types"in a;return new d(!0,b,null,b?a["trusted-types"]:["*"])}};const {apply:l}=Reflect,{hasOwnProperty:v}=Object.prototype,w=function(){function a(a){let b=x.get(a);void 0===b&&(b=h(null),x.set(a,b));return b}function b(a){const b=E(a);if(null==b||E(b)!==L)throw Error();for(let c of M(b))y(a,c,{value:a[c]});return a}function c(a,b){m(a.prototype);delete a.name;y(a,"name",{value:b})}function e(a){return(b)=>b instanceof a&&x.has(b)}function f(a,b){return function(a,c){a=k(a);if(!a||!l(v,a,[b]))throw Error("Policy not found");return(0,a[b])(c)}}function g(b,c){function e(e,
f){const K=c[f],g=m(new e(F,b));return m({[f](b){const c=m(h(g));a(c).value=""+K(b);return c}}[f])}return m({createHTML:e(p,"createHTML"),createScriptURL:e(q,"createScriptURL"),createURL:e(r,"createURL"),createScript:e(t,"createScript")})}function k(a){return G.get(""+a)||null}const {assign:n,create:h,defineProperty:y,freeze:m,getOwnPropertyNames:M,getPrototypeOf:E,prototype:L}=Object,{forEach:N,push:O}=Array.prototype,F=Symbol(),x=b(new WeakMap),z=b([]),G=b(new Map),A=b([]);let B=!1;class u{constructor(a,
b){if(a!==F)throw Error("cannot call the constructor");y(this,"policyName",{value:""+b,enumerable:!0})}toString(){return a(this).value}valueOf(){return a(this).value}}class r extends u{}c(r,"TrustedURL");class q extends u{}c(q,"TrustedScriptURL");class p extends u{}c(p,"TrustedHTML");class t extends u{}c(t,"TrustedScript");c(u,"TrustedType");const P={createHTML:()=>{throw Error("undefined conversion");},createURL:()=>{throw Error("undefined conversion");},createScriptURL:()=>{throw Error("undefined conversion");
},createScript:()=>{throw Error("undefined conversion");},expose:!1};return m({b:p,a:r,c:q,w:t,m:f(p,"createHTML"),s:f(r,"createURL"),o:f(q,"createScriptURL"),C:f(t,"createScript"),B:function(a,b){a=""+a;if(B&&!A.includes(a))throw Error("Policy "+a+" disallowed.");if(z.includes(a))throw Error("Policy "+a+" exists.");z.push(a);const c=n(h(null),P);b(c);m(c);b=g(a,c);c.expose&&G.set(a,b);return b},H:k,v:function(){return z.slice()},M:e(p),R:e(r),P:e(q),O:e(t),T:function(a){a.includes("*")?B=!1:(B=!0,
A.length=0,N.call(a,(a)=>{O.call(A,""+a)}))}})}();function C(a,b,c){Object.defineProperty(a,b,{set:c})}function D(a,b,c){Object.defineProperty(a,b,{value:c})};const {apply:H}=Reflect,{getOwnPropertyNames:I,hasOwnProperty:J,getPrototypeOf:Q}=Object;
let R={HTMLAnchorElement:{href:w.a},HTMLAreaElement:{href:w.a},HTMLBaseElement:{href:w.a},HTMLButtonElement:{formaction:w.a},HTMLSourceElement:{src:w.a},HTMLImageElement:{src:w.a},HTMLTrackElement:{src:w.a},HTMLMediaElement:{src:w.a},HTMLInputElement:{src:w.a,formaction:w.a},HTMLFrameElement:{src:w.a},HTMLIFrameElement:{src:w.a,srcdoc:w.b},HTMLLinkElement:{href:w.c},HTMLObjectElement:{data:w.c,codebase:w.c},HTMLEmbedElement:{src:w.c},HTMLScriptElement:{src:w.c},HTMLElement:{}};
for(let a of I(HTMLElement.prototype))"on"===a.slice(0,2)&&(R.HTMLElement[a]=w.w);const S={TrustedHTML:w.M,TrustedURL:w.R,TrustedScriptURL:w.P,TrustedScript:w.O},T={TrustedHTML:w.m,TrustedURL:w.s,TrustedScriptURL:w.o,TrustedScript:w.C},U={codebase:"codeBase",formaction:"formAction"};
class V{constructor(a){this.g=a;this.i={}}J(){w.T(this.g.A);this.l(Element.prototype,"innerHTML",w.b);this.l(Element.prototype,"outerHTML",w.b);this.f(Range.prototype,"createContextualFragment",w.b,0);this.f(Element.prototype,"insertAdjacentHTML",w.b,1);Object.getOwnPropertyDescriptor(Document.prototype,"write")?this.f(Document.prototype,"write",w.b,0):this.f(HTMLDocument.prototype,"write",w.b,0);this.f(window,"open",w.a,0);DOMParser&&this.f(DOMParser.prototype,"parseFromString",w.b,0);this.W();this.K()}K(){for(let a of I(R))for(let b of I(R[a])){const c=
H(J,U,[b])?U[b]:b;this.l(window[a].prototype,c,R[a][b])}}W(){let a=this;this.j(Element.prototype,"setAttribute",function(b,...c){return a.V.bind(a,this,b).apply(a,c)});this.j(Element.prototype,"setAttributeNS",function(b,...c){return a.U.bind(a,this,b).apply(a,c)})}I(a,b){a=a.constructor;do{let c=a&&a.name&&R[a.name]&&R[a.name][b];if(c||a==HTMLElement)return c}while(a=Q(a));return null}V(a,b,...c){if(null!==a.constructor){var e=(c[0]=String(c[0])).toLowerCase();e=this.I(a,e);if(e instanceof Function)return this.h(a,
"setAttribute",e,b,1,c)}return b.apply(a,c)}U(a,b,...c){if(null!==a.constructor){c[0]=String(c[0]);var e=(c[1]=String(c[1])).toLowerCase();e=a.constructor&&a.constructor.name&&R[a.constructor.name]&&R[a.constructor.name][e];if(e instanceof Function)return this.h(a,"setAttributeNS",e,b,2,c)}return b.apply(a,c)}f(a,b,c,e){let f=this;this.j(a,b,function(a,...k){return f.h.call(f,this,b,c,a,e,k)})}j(a,b,c){var e=Object.getOwnPropertyDescriptor(a,b);let f=e?e.value:null;if(!(f instanceof Function))throw new TypeError("Property "+
b+" on object"+a+" is not a function");e=this.u(a,b);if(this.i[e])throw Error("TrustedTypesEnforcer: Double installation detected");D(a,b,function(...a){return c.bind(this,f).apply(this,a)});this.i[e]=f}l(a,b,c){var e=Object.getOwnPropertyDescriptor(a,b);let f=e?e.set:null;if(!(f instanceof Function))throw new TypeError("No setter for property "+b+" on object"+a);e=this.u(a,b);if(this.i[e])throw Error("TrustedTypesEnforcer: Double installation detected");let g=this;C(a,b,function(a){g.h.call(g,this,
b,c,f,0,[a])});this.i[e]=f}u(a,b){return""+a.constructor.name+"-"+b}h(a,b,c,e,f,g){let k=g[f];const n=""+c.name;if(S.hasOwnProperty(n)&&S[n](k))return H(e,a,g);var h=this.g.F;if(h&&w.v().includes(h)&&(h=T[n](h,k),S.hasOwnProperty(n)&&S[n](h)))return g[f]=h,H(e,a,g);e="Failed to set "+b+" property on "+(""+a||a.constructor.name)+": This document requires `"+c.name+"` assignment.";this.g.N&&console.warn(e,b,a,c,k);if(this.g.L)throw new TypeError(e);}};"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:w.b,TrustedURL:w.a,TrustedScriptURL:w.c,createHTML:w.m,createURL:w.s,createScriptURL:w.o,createPolicy:w.B,getExposedPolicy:w.H,getPolicyNames:w.v});{const a=function(){try{var c;if(!(c=document.currentScript)){{let a=document.getElementsByTagName("script");c=a[a.length-1]}}if(c&&"Content-Security-Policy:"==c.textContent.trim().substr(0,24))return c.textContent.trim().slice(24);if(c.dataset.D)return c.dataset.D;const a=document.head.querySelector('meta[http-equiv^="Content-Security-Policy"]');if(a)return a.content.trim()}catch(e){}return null}(),b=a?d.G(a):new d(!0,!0,null,["*"]);(new V(b)).J()};}).call(window);//# sourceMappingURL=trustedtypes.build.js.map
