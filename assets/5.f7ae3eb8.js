import{r as v,w as f,R as p,a5 as g,o as F,d as y,g as h}from"./index.d3e2243d.js";import{d as x}from"./QSpinner.ff70a72e.js";let a=0;const j={fullscreen:Boolean,noRouteFullscreenExit:Boolean},E=["update:fullscreen","fullscreen"];function w(){const d=h(),{props:r,emit:m,proxy:e}=d;let l,o,u;const s=v(!1);x(d)===!0&&f(()=>e.$route.fullPath,()=>{r.noRouteFullscreenExit!==!0&&t()}),f(()=>r.fullscreen,n=>{s.value!==n&&c()}),f(s,n=>{m("update:fullscreen",n),m("fullscreen",n)});function c(){s.value===!0?t():i()}function i(){s.value!==!0&&(s.value=!0,u=e.$el.parentNode,u.replaceChild(o,e.$el),document.body.appendChild(e.$el),a++,a===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:t},p.add(l))}function t(){s.value===!0&&(l!==void 0&&(p.remove(l),l=void 0),u.replaceChild(e.$el,o),s.value=!1,a=Math.max(0,a-1),a===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return g(()=>{o=document.createElement("span")}),F(()=>{r.fullscreen===!0&&i()}),y(t),Object.assign(e,{toggleFullscreen:c,setFullscreen:i,exitFullscreen:t}),{inFullscreen:s,toggleFullscreen:c}}var B="/assets/1.76a247fa.jpg",C="/assets/2.d59371f3.jpg",R="/assets/3.5908a205.jpg",I="/assets/4.688a5c42.jpg",M="/assets/5.2a377113.jpg";export{E as a,w as b,C as c,R as d,I as e,M as f,B as i,j as u};
