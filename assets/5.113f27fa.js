import{r as v,w as f,T as p,a3 as g,o as b,d as F,g as y}from"./index.af447ece.js";import{d as h}from"./QSpinner.6b74fcce.js";let a=0;const j={fullscreen:Boolean,noRouteFullscreenExit:Boolean},E=["update:fullscreen","fullscreen"];function w(){const d=y(),{props:r,emit:m,proxy:e}=d;let l,o,u;const s=v(!1);h(d)===!0&&f(()=>e.$route.fullPath,()=>{r.noRouteFullscreenExit!==!0&&t()}),f(()=>r.fullscreen,n=>{s.value!==n&&c()}),f(s,n=>{m("update:fullscreen",n),m("fullscreen",n)});function c(){s.value===!0?t():i()}function i(){s.value!==!0&&(s.value=!0,u=e.$el.parentNode,u.replaceChild(o,e.$el),document.body.appendChild(e.$el),a++,a===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:t},p.add(l))}function t(){s.value===!0&&(l!==void 0&&(p.remove(l),l=void 0),u.replaceChild(e.$el,o),s.value=!1,a=Math.max(0,a-1),a===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return g(()=>{o=document.createElement("span")}),b(()=>{r.fullscreen===!0&&i()}),F(t),Object.assign(e,{toggleFullscreen:c,setFullscreen:i,exitFullscreen:t}),{inFullscreen:s,toggleFullscreen:c}}var B="/assets/1.49ae01b0.jpg",C="/assets/2.bd833d86.jpg",I="/assets/3.8facac17.jpg",M="/assets/4.88b5bccf.jpg",R="/assets/5.006b8adb.jpg";export{E as a,w as b,C as c,I as d,M as e,R as f,B as i,j as u};
