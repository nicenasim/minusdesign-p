import{h as r,A as f,a as i,c as d}from"./index.89b935f1.js";function v(e,t){return e!==void 0&&e()||t}function z(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function p(e,t){return e!==void 0?t.concat(e()):t}function g(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function y(e,t,n,c,o,l){t.key=c+o;const a=r(e,t,n);return o===!0?f(a,l()):a}function x(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function u(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{u(e,n)}):e.add(t)}function b(e){const t=new Set;return e.forEach(n=>{u(t,n)}),Array.from(t)}function $(e){return e.appContext.config.globalProperties.$router!==void 0}function k(e){return e.isUnmounted===!0||e.isDeactivated===!0}const s={xs:18,sm:24,md:32,lg:38,xl:46},N={size:String};function w(e,t=s){return i(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const h={size:{type:[String,Number],default:"1em"},color:String};function m(e){return{cSize:i(()=>e.size in s?`${s[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var D=d({name:"QSpinner",props:{...h,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=m(e);return()=>r("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{D as Q,p as a,y as b,z as c,$ as d,w as e,b as f,x as g,v as h,g as i,N as u,k as v};
